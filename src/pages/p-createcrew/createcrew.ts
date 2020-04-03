import { Component } from '@angular/core';
import { NavController, ViewController, NavParams, ToastController, IonicPage, AlertController, LoadingController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { SignUpService } from '../../services/signup.services';
import { sendCoordsService } from '../../services/sendCoords.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { sendUsersService } from '../../services/sendUsers.service';
import { geofireService } from '../../services/geoFire.service';
import { instancesService } from '../../services/instances.service';
import { Subject, onErrorResumeNext } from 'rxjs';
import { DriverGeofireService } from '../../services/d-geofire.services';
import * as GeoFire from 'geofire';

@IonicPage()

@Component({
  selector: 'page-createcrew',
  templateUrl: 'createcrew.html'
})
export class CreateCrewPage {

  startHour:any;
  userId:any;
  origin:any;
  destination:any;
  latOr:any;
  lngOr:any;
  latDest:any;
  lngDest:any;
  admin = {};
  pointsAlongRoute = [];
  indexesOfPointsAlongRoute = [];
  count:any = 0;
  Key_Crew:any;
  loading:any;

  //geofire variables 
  geoquery1:any;
  geoquery2:any;
  geofireOriginConfirmed:boolean;
  keysIdentifiedInOrigin = [];
  geoqueryRouteOrigin:any;
  keysIdentifiedInOriginRoute = [];
  geofireDestinationConfirmed:boolean;
  driverOnNodeDest:any;
  geoqueryRouteDestination:any;
  keyTripForGeofireInRouteDest:any;
  driverIdForGeofireInRouteDest:any;
  geofireDestinationConfirmedOnRoute:boolean;
  geofireOriginConfirmedOnRoute:boolean;
  city:any;
  constructor(public loadingCtrl: LoadingController, public navCtrl: NavController, public sendUsersService:sendUsersService,public toastCtrl: ToastController,public viewCtrl: ViewController,private afDB: AngularFireDatabase, public SignUpService: SignUpService, public sendCoordsService: sendCoordsService,public navParams: NavParams,public AngularFireAuth: AngularFireAuth, private geoFireService: geofireService, public instances: instancesService, public alertCtrl: AlertController, private geofireServicesDr: DriverGeofireService) {
      this.userId = this.AngularFireAuth.auth.currentUser.uid;

      // Getting info for creating crew in DB
      this.afDB.database.ref('/usersTest/' + this.userId).once('value').then((snap)=>{
        if(snap.val()){
          this.admin = {
            city: snap.val().city,
            company: snap.val().company,
            name: snap.val().name,
            lastname: snap.val().lastname,
            phone: snap.val().phone,
            userId: snap.val().userId,
            verifiedPerson: snap.val().verifiedPerson,
          }
          this.origin = snap.val().trips.origin[0]
          this.destination = snap.val().trips.destination[0]
          this.city = snap.val().city
        }
        
      })



    this.latOr = this.navParams.get('latOr');
    this.lngOr = this.navParams.get('lngOr');
    this.latDest = this.navParams.get('latDest');
    this.lngDest = this.navParams.get('lngDest');
    this.pointsAlongRoute = this.navParams.get('pointsAlongRoute');
    this.indexesOfPointsAlongRoute = this.navParams.get('indexesOfPointsAlongRoute');
  }


  dismiss(){
    this.viewCtrl.dismiss();
  }

  setCrew(){

    if(this.startHour === undefined){
      let alert = this.alertCtrl.create({
        title: 'Por favor confirma la hora a la que iniciaría este viaje',
        buttons: ['OK']
      }); 
      alert.present();
    }else{

      this.afDB.database.ref('/crewsTest/' + this.userId).push({
        admin: this.admin,
        startHour: this.startHour,
        destination: {
          name: this.destination,
          coords: {
            lat: this.latDest,
            lng: this.lngDest
          }
        },
        origin: {
          name: this.origin,
          coords: {
            lat: this.latOr,
            lng: this.lngOr
          }
        },
      }).then((snap)=>{
        this.Key_Crew = snap.key;
        this.afDB.database.ref('/crewsTest/' + this.userId + '/' + this.Key_Crew).update({
          crewId: this.Key_Crew
        }).then(()=>{

                  this.geofireServicesDr.setGeofireOrCrew( this.Key_Crew, this.latOr, this.lngOr );
                  this.afDB.database.ref('/geofireOrCrew/' + this.Key_Crew,).update({
                    adminId: this.userId
                  });

                  console.log('executed geofire Or for crews');

                this.geofireServicesDr.setGeofireDestCrew( this.Key_Crew, this.latDest, this.lngDest);
                this.afDB.database.ref('/geofireDestCrew/' + this.Key_Crew).update({
                  adminId: this.userId
                });
                
                console.log('executed geofire dest');
              
              
              this.indexesOfPointsAlongRoute.forEach(index=>{
                  this.count++
                  let newKey = this.Key_Crew.concat(this.count)

                  
                  
                  this.geofireServicesDr.setGeofireRouteCrew(newKey, this.pointsAlongRoute[index].lat, this.pointsAlongRoute[index].lng );
                  this.afDB.database.ref('/geofireRouteCrew/' + newKey).update({
                    adminId: this.userId,
                    crewId: this.Key_Crew
                });
                
                
              })  

        })

        
      }).then(()=>{

        this.afDB.database.ref('allCities/' + this.city ).once('value').then((snapGeoquery)=>{

          this.loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            content: `
              <div class="custom-spinner-container">
                <div class="custom-spinner-box"></div>
              </div>`
              });

          this.setGeofireOr( snapGeoquery.val().geofireOrNotificationsCrew, this.latOr, this.lngOr, this.userId, snapGeoquery.val().geofireDestNotificationsCrew, this.latDest, this.lngDest);
          this.setGeofireRouteOrigin(snapGeoquery.val().geofireRouteCrew, this.latOr, this.lngOr, snapGeoquery.val().geofireDestNotificationsCrew, this.latDest, this.lngDest, this.userId);

          
        })
      })
    }
    
  }




  // GEOFIRE LOGIC FOR LET DRIVERS KNOW THERE IS A NEW GRUOP
   //geoquery origin
    setGeofireOr( radiusOr:number, latOr, lngOr, userId, radiusDest:number, latDest, lngDest ):void{ 
  let dbRef = this.afDB.database.ref(  '/geofireOr/' );
  let geoFire = new GeoFire(dbRef); 

  this.geoquery2 = geoFire.query({
    center: [latOr, lngOr],
    radius: radiusOr
  })

    this.keyEnteredOr(radiusDest, latDest, lngDest, userId  );
    
    console.log('geoquery or added');
    }


    keyEnteredOr(radiusDest, latDest, lngDest,  userId ){ 
  // var keyEnteredOr = false;
  this.geoquery2.on("key_entered", function(key, location, distance){
    //  keyEnteredOr = true;
     
     this.geofireOriginConfirmed = true;
     let orRouteConf = false
     this.keysIdentifiedInOrigin.push({keyTrip:key, orRouteConf: orRouteConf, distance: distance});
     
     if(this.geoquery1){

     }else{
      this.setGeofireDest(radiusDest, latDest, lngDest, userId);
     }
     
         
   }.bind(this));
    }



      //geoquery origin in route
    setGeofireRouteOrigin ( radiusRoute:number, lat, lng, radiusDest, latDest, lngDest, userId):void{ 
      // console.log(this.geoquriesRouteOrigin);
      let dbRef = this.afDB.database.ref(  '/geofireRoute/' );
      let geoFire = new GeoFire(dbRef); 

      this.geoqueryRouteOrigin = geoFire.query({
        center: [lat, lng],
        radius: radiusRoute
      })

      this.keyEnteredRouteOrigin( userId, radiusDest, latDest, lngDest );
     
    }


    keyEnteredRouteOrigin( userId, radiusDest, latDest, lngDest){

      this.geoqueryRouteOrigin.on("key_entered", function(key, location, distance){
        
        this.geofireOriginConfirmedOnRoute = true;
        let orRouteConf = true
        
        this.afDB.database.ref('/geofireRoute/' + key ).once('value').then((snap)=>{
          // quede aqui, para verificar que las key identificadas son iguales
          let keyTrip = snap.val().keyTrip;
          this.keysIdentifiedInOriginRoute.push({
            keyTrip: keyTrip,
            orRouteConf: orRouteConf,
            distance: distance
          })

        }).then(()=>{
          if(this.geoquery1){

          }else{
           this.setGeofireDest(radiusDest, latDest, lngDest, userId);
          }

        });

        console.log('ENTRE EN ORIGIN EN ROUTE');
        
      }.bind(this));
    }


  
    //geoquery destination
    setGeofireDest( radiusDest:number, latDest, lngDest, userId):void{ 
      console.log('se prendio geoquery destination, debo salir una sóla vez');

      let dbRef = this.afDB.database.ref(  '/geofireDest/' );
      let geoFire = new GeoFire(dbRef); 
    
      this.geoquery1 = geoFire.query({
        center: [latDest, lngDest],
        radius: radiusDest
      })
    
      
      this.keyEnteredDest( userId);
      
    
    console.log('geoquery dest added');
    }



    keyEnteredDest( userId ){
      
      this.geoquery1.on("key_entered", function(key, location, distance){
      console.log(key);
      if(this.keysIdentifiedInOrigin.length !== 0){

        let count = 0
        for(let element of this.keysIdentifiedInOrigin){
          count = count + 1
          if(element.keyTrip === key){
            this.geofireDestinationConfirmed = true;
            
            return this.afDB.database.ref( '/geofireDest/'+ key).once('value').then((snap) => {
                    this.driverOnNodeDest = snap.val();
        
                    this.afDB.database.ref( '/driversTest/' + this.driverOnNodeDest.driverId + '/matchingCrews/' + key).update({
                        crewId: this.Key_Crew,
                        adminId: userId,
                        distance: element.distance,
                        orRouteConf: element.orRouteConf
            
                    })  
                })
               
             
          }
  
          if (count === this.keysIdentifiedInOrigin.length){
            console.log('si se ejecuto el for de keysOrigin');
            
            for(let element of this.keysIdentifiedInOriginRoute){
  
              if(element.keyTrip === key){
                console.log('un key de destination es igual al keytrip que fue identificado en origen');
  
                this.geofireDestinationConfirmed = true;
                return this.afDB.database.ref( '/geofireDest/'+ key).once('value').then((snap) => {
                  this.driverOnNodeDest = snap.val();
      
                  this.afDB.database.ref( '/driversTest/' + this.driverOnNodeDest.driverId + '/matchingCrews/' + key).update({
                      crewId: this.Key_Crew,
                      adminId: userId,
                      distance: element.distance,
                      orRouteConf: element.orRouteConf
          
                  })  
              })
              }
  
            }
          }
        }

      }else if(this.keysIdentifiedInOriginRoute.length !== 0){

        for(let element of this.keysIdentifiedInOriginRoute){
  
          if(element.keyTrip === key){
            console.log('un key de destination es igual al keytrip que fue identificado en origen');

            this.geofireDestinationConfirmed = true;
            return this.afDB.database.ref( '/geofireDest/'+ key).once('value').then((snap) => {
              this.driverOnNodeDest = snap.val();
  
              this.afDB.database.ref( '/driversTest/' + this.driverOnNodeDest.driverId + '/matchingCrews/' + key).update({
                  crewId: this.Key_Crew,
                  adminId: userId,
                  distance: element.distance,
                  orRouteConf: element.orRouteConf
      
              })  
          })
          }

        }

      }else{

      }
     
    
     }.bind(this))


     setTimeout(() => {
      this.geoquery1.on("ready", function(){
        
        this.afDB.database.ref('allCities/' + this.city ).once('value').then((snap)=>{

            this.setGeofireRouteDest(snap.val().geofireRouteCrew,  this.latDest, this.lngDest, userId);

        })
        
 
      
    }.bind(this))
  }, 300);
 }



    //geoquery destination in route
    setGeofireRouteDest( radiusRoute:number, lat, lng, userId ):void{ 
      console.log('se ejecutó');

      let dbRef = this.afDB.database.ref(  '/geofireRoute/' );
      let geoFire = new GeoFire(dbRef); 
    
      this.geoqueryRouteDestination = geoFire.query({
        center: [lat, lng],
        radius: radiusRoute
      })


      this.keyEnteredRouteDest(  userId );
     
      
           
    }

  

    keyEnteredRouteDest(userId){

      this.geoqueryRouteDestination.on("key_entered", function(key, location, distance){
  
        
        this.afDB.database.ref('/geofireRoute/' + key ).once('value').then((snap)=>{
          this.keyTripForGeofireInRouteDest = snap.val().keyTrip;
          this.driverIdForGeofireInRouteDest = snap.val().driverId;
          
          
        }).then(()=>{
          if(this.keysIdentifiedInOrigin !== 0){

            let count = 0
            for(let element of this.keysIdentifiedInOrigin){
              count = count + 1
              if(element.keyTrip === this.keyTripForGeofireInRouteDest){
                this.geofireDestinationConfirmedOnRoute = true;
                
                return this.afDB.database.ref( '/geofireRoute/'+ key).once('value').then((snap) => {
                  this.driverIdForGeofireInRouteDest = snap.val().driverId;
                  this.keyTripForGeofireInRouteDest = snap.val().keyTrip
      
                  this.afDB.database.ref( '/driversTest/' + this.driverIdForGeofireInRouteDest + '/matchingCrews/' + this.keyTripForGeofireInRouteDest).update({
                      crewId: this.Key_Crew,
                      adminId: userId,
                      distance: element.distance,
                      orRouteConf: element.orRouteConf,
                      destRouteConf: true
          
                  })  
              })
             
                 
              }
  
              if(count === this.keysIdentifiedInOrigin.length){
                for(let element of this.keysIdentifiedInOriginRoute){
                  if(element.keyTrip === this.keyTripForGeofireInRouteDest){
                    this.geofireDestinationConfirmedOnRoute = true;
      
                    return this.afDB.database.ref( '/geofireRoute/'+ key).once('value').then((snap) => {
                      this.driverIdForGeofireInRouteDest = snap.val().driverId;
                      this.keyTripForGeofireInRouteDest = snap.val().keyTrip
          
                      this.afDB.database.ref( '/driversTest/' + this.driverIdForGeofireInRouteDest + '/matchingCrews/' + this.keyTripForGeofireInRouteDest).update({
                          crewId: this.Key_Crew,
                          adminId: userId,
                          distance: element.distance,
                          orRouteConf: element.orRouteConf,
                          destRouteConf: true
              
                      })  
                  })
                 
      
                  }
                }
              }
            }

          }else{
            console.log('no hay nada en ' + this.keysIdentifiedInOrigin);
            
          }
        })
        .then(()=>{
 
          
          if(this.keysIdentifiedInOriginRoute !== 0){

            for(let element of this.keysIdentifiedInOriginRoute){
              if(element.keyTrip === this.keyTripForGeofireInRouteDest){
                this.geofireDestinationConfirmedOnRoute = true;
  
                  return this.afDB.database.ref( '/geofireRoute/'+ key).once('value').then((snap) => {
                    this.driverIdForGeofireInRouteDest = snap.val().driverId;
                    this.keyTripForGeofireInRouteDest = snap.val().keyTrip
        
                    this.afDB.database.ref( '/driversTest/' + this.driverIdForGeofireInRouteDest + '/matchingCrews/' + this.keyTripForGeofireInRouteDest).update({
                        crewId: this.Key_Crew,
                        adminId: userId,
                        distance: element.distance,
                        orRouteConf: element.orRouteConf,
                        destRouteConf: true
            
                    })  
                })
  
              }
            }

          }else{

          }
         
        })
                
      }.bind(this))

      
      this.geoqueryRouteDestination.on("ready", function(){
        this.loading.dismiss();
        this.viewCtrl.dismiss();

        let alert = this.alertCtrl.create({
          title: 'Eres administrador de este grupo',
          subTitle: 'Te notificaremos si algún conductor de Waypool quiere hacer el transporte de este grupo',
          buttons: ['OK']
        });
        alert.present();

      }.bind(this))

    }


 
}
