import { Component } from '@angular/core';
import { NavController, ModalController, ToastController, IonicPage, App, LoadingController, NavParams, AlertController } from 'ionic-angular';
import * as GeoFire from 'geofire';

import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { sendCoordsService } from '../../services/sendCoords.service';
import { SignUpService } from '../../services/signup.services';
import { geofireService } from '../../services/geoFire.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { reservesService } from '../../services/reserves.service';
import { TripsService } from '../../services/trips.service';
import { Subject } from 'rxjs';
@IonicPage()

@Component({
  selector: 'page-listride',
  templateUrl: 'listride.html'
})
export class ListridePage {
  reservesAvailable:any = [];
  routeTrips:any = [];
  locationDestinationUser:any =[];
  locationOriginUser:any =[];
  user:any;
  userUid=this.AngularFireAuth.auth.currentUser.uid;
  test:any;
  reserve:any;
  ReservesGeofire: any =[];
  tripsReserved:any =[];
  reserveLMU:any;
  unsubscribe = new Subject;
  pendingUsers:any = []; 
  noReserve:boolean = false;



  ///VARIABLES GEOFIRE
  latOr:any;
  lngOr:any;
  latDest:any;
  lngDest:any;
  pointsAlongRoute = [];
  indexesOfPointsAlongRoute = [];
  geoquery1:any;
  geoquery2:any;
  geoqueryRoute:any;
  geofireOriginConfirmed:boolean = false;
  geofireOriginConfirmedOnRoute:boolean = false
  geofireDestinationConfirmed:boolean = false;
  geofireDestinationConfirmedOnRoute:boolean = false;
  keyTripForGeofireInRouteDest:any;
  driverIdForGeofireInRouteDest:any;
  keysIdentifiedInOrigin = [];
  keysIdentifiedInOriginRoute = [];
  showRoute:boolean = false;
  showNearby:boolean = true;
  constructor(public navParams: NavParams, public navCtrl: NavController,private app:App,public TripsService:TripsService,public loadingCtrl: LoadingController,public toastCtrl: ToastController,public reservesService:reservesService,  private AngularFireAuth: AngularFireAuth,private afDB: AngularFireDatabase, public SignUpService: SignUpService, public sendCoordsService: sendCoordsService,public modalCtrl: ModalController, private geoFireService: geofireService, public alertCtrl: AlertController ) {
  console.log("AQUI EMPIEZA")

    this.afDB.database.ref('usersTest/' + this.userUid).once('value').then((snap)=>{
      this.user = snap.val();
      console.log(this.user);
      
  })

    this.latOr = this.navParams.get('latOr');
    this.lngOr = this.navParams.get('lngOr');
    this.latDest = this.navParams.get('latDest');
    this.lngDest = this.navParams.get('lngDest');
    this.pointsAlongRoute = this.navParams.get('pointsAlongRoute');
    this.indexesOfPointsAlongRoute = this.navParams.get('indexesOfPointsAlongRoute');
           


        this.reservesService.getReserves( this.userUid).takeUntil(this.unsubscribe)    
        .subscribe(reserves => {
          // this.initiatedTrips = [];
          // this.reservesAvailable = [];
          
          this.ReservesGeofire = reserves; 
          console.log(this.ReservesGeofire);
          
          if(this.ReservesGeofire.length === 0){
              //there are no reserves to show
              this.noReserve = true;
          }else{
              //there are reserves
              this.noReserve = false;  
          }
          // this.presentLoadingCustom(this.ReservesGeofire);
          this.getAvailableReserves();

        });


        this.reservesService.getSeenReservesInAvailableReserves( this.userUid).subscribe((reserve)=>{
          this.reservesAvailable = reserve;
          console.log(this.reservesAvailable);
          
        })

        this.reservesService.getSeenReservesInAvailableReservesRoute( this.userUid).subscribe((reserve)=>{
          this.routeTrips = reserve;
          console.log(this.reservesAvailable);
          
        })
  }

 

  ionViewDidLeave(){
    this.unSubscribeServices();
    
    console.log("me active")
    this.TripsService.eliminateAvailableUsers(this.userUid);
    this.TripsService.eliminateSeenAvailableReserves(this.userUid);
    this.TripsService.eliminateSeenAvailableReservesRoute(this.userUid);

    // this.TripsService.eliminateSeenAvailableReservesLMU(this.SignUpService.userPlace,this.userUid)
  }



      doRefresh(event) {
        
        this.afDB.database.ref('allCities/' + this.user.city ).once('value').then((snapGeoquery)=>{

        this.setGeofireOr( snapGeoquery.val().geofireOr, this.latOr, this.lngOr, this.userUid, snapGeoquery.val().geofireDest, this.latDest, this.lngDest);
        this.indexesOfPointsAlongRoute.forEach(index =>{  
          this.setGeofireRouteOrigin(snapGeoquery.val().geofireRoute, this.pointsAlongRoute[index].lat, this.pointsAlongRoute[index].lng, snapGeoquery.val().geofireDest, this.latDest, this.lngDest, this.userUid )
        });

        })
        
        setTimeout(() => {
          this.geoquery1.cancel();
          this.geoquery2.cancel();
          this.geoqueryRoute.cancel();


          if(this.geofireDestinationConfirmed === false && this.geofireDestinationConfirmedOnRoute === false){

            let alert = this.alertCtrl.create({
              title: 'No hay nuevos poolers compartiendo sus viajes',
              subTitle: 'Intenta más tarde',
              buttons: ['OK']
            });
            alert.present();

          }else{

          }
          event.complete();
        }, 5000);
      }



  getAvailableReserves(){ 
        //bring reserves that i have entered to hide them in listride
    // this.reservesAvailable = [];
    //after getting reserve id and driverUid from my own user node, we used them to access the reserve information in the node reserves
    console.log(this.ReservesGeofire);
      
    this.ReservesGeofire.forEach(reserveGeofire => {        
        this.afDB.database.ref('/reservesTest/'+ reserveGeofire.driverId +'/'+ reserveGeofire.keyReserve).once('value').then((snapReserve)=>{
          let obj = snapReserve.val();
          console.log(obj);
          this.afDB.database.ref('/usersTest/'+ this.userUid +'/reservesSeenInAvailableReserves/').remove().then(()=>{
            this.afDB.database.ref('/usersTest/'+ this.userUid +'/reservesSeenInAvailableReserves/'+ reserveGeofire.keyReserve).update(obj);
          })
        })

        if(reserveGeofire.onRouteDestination == true || reserveGeofire.onRouteOrigin == true){
          
          this.afDB.database.ref('/reservesTest/'+reserveGeofire.driverId+'/'+ reserveGeofire.keyReserve).once('value').then((snapTripLMU)=>{
            let obj = snapTripLMU.val();
            this.afDB.database.ref('/usersTest/'+ this.userUid +'/reservesSeenInAvailableReservesRoute/').remove().then(()=>{
              this.afDB.database.ref('/usersTest/'+ this.userUid +'/reservesSeenInAvailableReservesRoute/'+ reserveGeofire.keyReserve).update(obj);
            })
            
             
          })

      }
  })

  }


  nearby(){
    console.log('aqui pongo los que estan cerca');
    this.showRoute = false;
    this.showNearby = true;
    
    
  }

  route(){
    console.log('aqui pongo los que estan en ruta');
    this.showNearby = false;
    this.showRoute = true;
  }


 
 confirmpopup(reserve){
   this.reservesService.getPendingUsers(reserve.driver.userId,reserve.keyTrip).takeUntil(this.unsubscribe)
    .subscribe(pendingUsers=>{
      this.pendingUsers = pendingUsers
      console.log(pendingUsers);
     
      
    })
    if( this.pendingUsers === undefined||this.pendingUsers === null){
      //there is no one in the trip
      let modal = this.modalCtrl.create('ConfirmpopupPage',{reserve:reserve});
    modal.onDidDismiss(accepted => {
        if(accepted){
          this.unSubscribeServices();
         this.navCtrl.pop();
         this.TripsService.eliminateAvailableUsers(this.userUid);
         this.TripsService.eliminateSeenAvailableReserves(this.userUid);
         this.TripsService.eliminateSeenAvailableReservesRoute(this.userUid);

        //  this.TripsService.eliminateSeenAvailableReservesLMU(this.SignUpService.userPlace,this.userUid)

         this.navCtrl.push('ReservetripPage');
        }
      })
    modal.present();
    console.log('no hay nadie')
    
    }else if (this.pendingUsers.length >= 4){
      //the trip is full 
      const toast = this.toastCtrl.create({
        message: 'Este viaje ya tiene 4 personas reservadas, porfavor selecciona otro',
        showCloseButton:true,
        closeButtonText: 'OK',
        position:'bottom'
           });
      toast.present();
      console.log('menor de 4')
    
    }else{
      console.log(this.pendingUsers.length)
      //its less of 4 people
      let modal = this.modalCtrl.create('ConfirmpopupPage',{reserve:reserve});
    modal.onDidDismiss(accepted => {
        if(accepted){
          this.unSubscribeServices();
         this.navCtrl.pop();
         this.TripsService.eliminateAvailableUsers(this.userUid);
         this.TripsService.eliminateSeenAvailableReserves(this.userUid);
         this.TripsService.eliminateSeenAvailableReservesRoute(this.userUid);

        //  this.TripsService.eliminateSeenAvailableReservesLMU(this.SignUpService.userPlace,this.userUid)

         this.navCtrl.push('ReservetripPage');
        }
      })
    modal.present();
    console.log('else')
    }

 //IMPORTANTE QUE AL FINAL SE LE COLOQUE QUE SE QUITE CUANDO ACEPTE A ALGUIEN
  }




  enterTrip(trip){
   let modal = this.modalCtrl.create('ConfirmtripPage',{trip:trip});
   modal.onDidDismiss((accepted) => {
    if(accepted){
        this.unSubscribeServices();
        this.navCtrl.pop();
        this.TripsService.eliminateAvailableUsers(this.userUid);
        this.TripsService.eliminateSeenAvailableReserves(this.userUid);
        this.TripsService.eliminateSeenAvailableReservesRoute(this.userUid);

        // this.TripsService.eliminateSeenAvailableReservesLMU(this.SignUpService.userPlace,this.userUid)

        this.navCtrl.push('MyridePage');
      }
    })
    modal.present();
   //IMPORTANTE QUE AL FINAL SE LE COLOQUE QUE SE QUITE CUANDO ACEPTE A ALGUIEN
   }






   unSubscribeServices(){
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
  


  help(){
    const toast = this.toastCtrl.create({
      message: 'Estos son los conductores que se van a tu misma zona. Podrás ver sus horas en las que se van y unirte en su viaje',
      showCloseButton:true,
      closeButtonText: 'OK',
      position:'top'
         });
    toast.present();
  }





  ////////////// GEOQUERYS FUNCTIONS //////////////////


  //geoquery origin
  setGeofireOr( radiusOr:number, latOr, lngOr, userId, radiusDest:number, latDest, lngDest ):void{ 
    let dbRef = this.afDB.database.ref(  '/geofireOr/' );
    let geoFire = new GeoFire(dbRef); 
  
    this.geoquery2 = geoFire.query({
      center: [latOr, lngOr],
      radius: radiusOr
    })

      this.keyEnteredOr(radiusDest, latDest, lngDest, userId  );
      this.keyExitedOr( userId  );
      
      console.log('geoquery or added');
  }


  keyEnteredOr(radiusDest, latDest, lngDest,  userId ){
    // var keyEnteredOr = false;
    this.geoquery2.on("key_entered", function(key, location, distance){
      //  console.log(key);
      //  keyEnteredOr = true;
       
       this.geofireOriginConfirmed = true;
       let orRouteConf = false
       this.keysIdentifiedInOrigin.push({keyTrip:key, orRouteConf: orRouteConf});
       
       if(this.geoquery1){

       }else{
        this.setGeofireDest(radiusDest, latDest, lngDest, userId);
       }
       
           
     }.bind(this));
    }
  
  
    
    keyExitedOr( userId  ){
     this.geoquery2.on("key_exited", function(key){
       this.afDB.database.ref( '/usersTest/' + userId + '/availableReserves/' + key).remove()
     }.bind(this))
    }

    


    //geoquery origin in route
  setGeofireRouteOrigin( radiusRoute:number, lat, lng, radiusDest, latDest, lngDest, userId):void{ 
  
    let dbRef = this.afDB.database.ref(  '/geofireRoute/' );
    let geoFire = new GeoFire(dbRef); 
  
    this.geoqueryRoute = geoFire.query({
      center: [lat, lng],
      radius: radiusRoute
    })
   
      this.keyEnteredRouteOrigin( userId, radiusDest, latDest, lngDest );
      this.keyExitedRouteOrigin( userId  );    
  
    console.log('geoquery or added');
  
  
  }

  


  keyEnteredRouteOrigin(userId, radiusDest, latDest, lngDest){
    
    this.geoqueryRoute.on("key_entered", function(key, location, distance){
      
      this.geofireOriginConfirmedOnRoute = true;
      let orRouteConf = true
      this.afDB.database.ref('/geofireRoute/' + key ).once('value').then((snap)=>{
        // quede aqui, para verificar que las key identificadas son iguales
        let keyTrip = snap.val().keyTrip;
        this.keysIdentifiedInOriginRoute.push({
          keyTrip: keyTrip,
          orRouteConf: orRouteConf
        })

      }).then(()=>{
        if(this.geoquery1){

        }else{
         this.setGeofireDest(radiusDest, latDest, lngDest, userId);
        }
      });

    }.bind(this));
  }


  keyExitedRouteOrigin(userId){
    this.geoquery2.on("key_exited", function(key){
      this.afDB.database.ref( '/usersTest/' + userId + '/availableReserves/' + key).remove()
      
    }.bind(this))
    
  }




  //geoquery destination
  setGeofireDest( radiusDest:number, latDest, lngDest, userId):void{ 
    console.log('se prendio geoquery destination, debo salir una sóla vez');
    console.log(this.keysIdentifiedInOrigin);
    
    let dbRef = this.afDB.database.ref(  '/geofireDest/' );
    let geoFire = new GeoFire(dbRef); 
  
    this.geoquery1 = geoFire.query({
      center: [latDest, lngDest],
      radius: radiusDest
    })
  
    
    this.keyEnteredDest( userId);
    this.keyExitedDest(userId );
  
  console.log('geoquery dest added');
  }



  keyEnteredDest( userId ){
    this.geoquery1.on("key_entered", function(key, location, distance){
    console.log(key);
    this.keysIdentifiedInOrigin.forEach(element => {
      if(element.keyTrip === key){
        this.geofireDestinationConfirmed = true;
        this.afDB.database.ref( '/usersTest/' + userId + '/availableReserves/' + key).update({
            keyReserve: key,
          
           }).then(()=> {
               return this.afDB.database.ref( '/geofireDest/'+ key).once('value').then((snap) => {
                this.driverOnNodeDest = snap.val();
    
                this.afDB.database.ref( '/usersTest/' + userId + '/availableReserves/' + key).update({
                    driverId: this.driverOnNodeDest.driverId
        
                })  
            })
           }) 
         
      }
    });


    this.keysIdentifiedInOriginRoute.forEach(element =>{
      if(element.keyTrip === key){
        this.geofireDestinationConfirmed = true;
        this.afDB.database.ref( '/usersTest/' + userId + '/availableReserves/' + key).once('value')
        .then((snapshot)=>{
          if(snapshot.val()){

          }else{
            this.afDB.database.ref( '/usersTest/' + userId + '/availableReserves/' + key).update({
              keyReserve: key,
              onRouteOrigin: true
             }).then(()=> {
                 return this.afDB.database.ref( '/geofireDest/'+ key).once('value').then((snap) => {
                  this.driverOnNodeDest = snap.val();
      
                  this.afDB.database.ref( '/usersTest/' + userId + '/availableReserves/' + key).update({
                      driverId: this.driverOnNodeDest.driverId
          
                  })  
              })
             })
          }
        })
      }
    })
    
  
   }.bind(this))


   this.geoquery1.on("ready", function(){
      
      this.afDB.database.ref('allCities/' + this.user.city ).once('value').then((snap)=>{
        
        this.indexesOfPointsAlongRoute.forEach(index=>{
          
          this.setGeofireRouteDest(snap.val().geofireRoute, this.pointsAlongRoute[index].lat, this.pointsAlongRoute[index].lng, userId);

        })
      })
      

    
  }.bind(this))




 }
 
 
 keyExitedDest(userId){
   
   this.geoquery1.on("key_exited", function(key){
     this.afDB.database.ref(  '/usersTest/' + userId + '/availableReserves/' + key).remove()
   }.bind(this))
 }



  //geoquery destination in route
  setGeofireRouteDest( radius:number, lat, lng, userId ):void{ 
    let dbRef = this.afDB.database.ref(  '/geofireRoute/' );
    let geoFire = new GeoFire(dbRef); 
  
    this.geoqueryRoute = geoFire.query({
      center: [lat, lng],
      radius: radius
    })
   
      this.keyEnteredRouteDest( userId );
      this.keyExitedRouteDest( userId  );        
  }

  




  keyEnteredRouteDest(userId){

    this.geoqueryRoute.on("key_entered", function(key, location, distance){
      
      this.afDB.database.ref('/geofireRoute/' + key ).once('value').then((snap)=>{
        this.keyTripForGeofireInRouteDest = snap.val().keyTrip;
        this.driverIdForGeofireInRouteDest = snap.val().driverId;
      }).then(()=>{

        this.keysIdentifiedInOrigin.forEach(element => {
          if(element.keyTrip === this.keyTripForGeofireInRouteDest){
            this.geofireDestinationConfirmedOnRoute = true;
            
            this.afDB.database.ref( '/usersTest/' + userId + '/availableReserves/' + this.keyTripForGeofireInRouteDest).once('value')
            .then((snapConf)=>{
              if(snapConf.val()){
                console.log('te voy a dejar relajado ya que ya te identifiqué');

              }else{

                this.afDB.database.ref( '/usersTest/' + userId + '/availableReserves/' + this.keyTripForGeofireInRouteDest).update({
                  keyReserve: this.keyTripForGeofireInRouteDest,
                  driverId: this.driverIdForGeofireInRouteDest,
                  onRouteDestination: true,
                 })

              }
            })
             
          }
        });
  
  
        this.keysIdentifiedInOriginRoute.forEach(element =>{
          if(element.keyTrip === this.keyTripForGeofireInRouteDest){
            this.geofireDestinationConfirmedOnRoute = true;

            this.afDB.database.ref( '/usersTest/' + userId + '/availableReserves/' + this.keyTripForGeofireInRouteDest).once('value')
                .then((snapConf)=>{
                  if(snapConf.val()){
                    console.log('te voy a dejar relajado ya que ya te identifiqué');  
                  }else{
                    this.afDB.database.ref( '/usersTest/' + userId + '/availableReserves/' + this.keyTripForGeofireInRouteDest).update({
                      keyReserve: this.keyTripForGeofireInRouteDest,
                      driverId: this.driverIdForGeofireInRouteDest,
                      onRouteDestination: true,
                      onRouteOrigin: true
                     })

                  }
                })

          }
        })
      
      })
              
    }.bind(this))

  }


  keyExitedRouteDest(userId){
    this.geoquery2.on("key_exited", function(key){

      this.afDB.database.ref(  '/usersTest/' + userId + '/availableReserves/' + key).remove()

    }.bind(this))
    
  }


  
}