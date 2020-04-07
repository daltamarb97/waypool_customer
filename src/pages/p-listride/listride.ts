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
import { setDOM } from '@angular/platform-browser/src/dom/dom_adapter';
@IonicPage()

@Component({
  selector: 'page-listride',
  templateUrl: 'listride.html'
})
export class ListridePage {
  reservesAvailable:any = [];
  crewsAvailable:any = [];
  routeTrips:any = [];
  routeCrews:any = [];
  locationDestinationUser:any;
  locationOriginUser:any;
  user:any;
  userUid=this.AngularFireAuth.auth.currentUser.uid;
  test:any;
  reserve:any;
  ReservesGeofire: any =[];
  CrewsGeofire: any =[];
  tripsReserved:any =[];
  reserveLMU:any;
  unsubscribe = new Subject;
  pendingUsers:any = []; 
  noReserve:boolean = false;
  noCrew:boolean = false;



  ///VARIABLES GEOFIRE
  latOr:any;
  lngOr:any;
  latDest:any;
  lngDest:any;
  pointsAlongRoute = [];
  indexesOfPointsAlongRoute = [];
  geoquery1:any;
  geoquery2:any;
  geoqueryRouteOrigin:any;
  geoqueryRouteDestination:any;
  geofireOriginConfirmed:boolean = false;
  geofireOriginConfirmedOnRoute:boolean = false
  geofireDestinationConfirmed:boolean = false;
  geofireDestinationConfirmedOnRoute:boolean = false;
  keyTripForGeofireInRouteDest:any;
  driverIdForGeofireInRouteDest:any;
  keysIdentifiedInOrigin = [];
  keysIdentifiedInOriginRoute = [];
  showCrew:boolean = false;
  showCarpool:boolean = true;
  showNearby:boolean = true;
  showRoute:boolean = false;
  segment:any;
  segmentCarpool:any;
  segmentCrew:any;
  loading:any;
  showNearbyCrew:boolean = true;
  showRouteCrew:boolean = false;
  orCoords:any;
  destCoords:any;
  nameOr:any;
  nameDest:any;

  
  constructor(public navParams: NavParams, public navCtrl: NavController,private app:App,public TripsService:TripsService,public loadingCtrl: LoadingController,public toastCtrl: ToastController,public reservesService:reservesService,  private AngularFireAuth: AngularFireAuth,private afDB: AngularFireDatabase, public SignUpService: SignUpService, public sendCoordsService: sendCoordsService,public modalCtrl: ModalController, private geoFireService: geofireService, public alertCtrl: AlertController ) {
  console.log("AQUI EMPIEZA")

  this.loading = this.loadingCtrl.create({
    spinner: 'bubbles',
    content: `
      <div class="custom-spinner-container">
        <div class="custom-spinner-box"></div>
      </div>`
      });
  this.loading.present();

    this.afDB.database.ref('usersTest/' + this.userUid).once('value').then((snap)=>{
      this.user = snap.val();
      console.log(this.user);
      
  })

  
    this.latOr = this.navParams.get('latOr');
    this.lngOr = this.navParams.get('lngOr');
    this.latDest = this.navParams.get('latDest');
    this.lngDest = this.navParams.get('lngDest');
    this.nameOr = this.navParams.get('nameOr');
    this.nameDest = this.navParams.get('nameDest')
    this.pointsAlongRoute = this.navParams.get('pointsAlongRoute');
    this.indexesOfPointsAlongRoute = this.navParams.get('indexesOfPointsAlongRoute');


    this.orCoords = ({
      lat: this.latOr,
      lng: this.lngOr
    });

    this.destCoords = ({
      lat:this.latDest,
      lng: this.lngDest
    })
  


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


        this.reservesService.getCrews( this.userUid).takeUntil(this.unsubscribe)    
        .subscribe(crews => {
          // this.initiatedTrips = [];
       
          
          this.CrewsGeofire = crews; 
          console.log(this.CrewsGeofire);
          
          if(this.CrewsGeofire.length === 0){
              //there are no reserves to show
              this.noCrew = true;
          }else{
              //there are reserves
              this.noCrew = false;  
          }
          // this.presentLoadingCustom(this.ReservesGeofire);
          
            this.getAvailableCrews();
         
          

        });



        this.reservesService.getSeenReservesInAvailableReserves( this.userUid).subscribe((reserve)=>{
          this.reservesAvailable = reserve;
          console.log(this.reservesAvailable);

          
        })

        this.reservesService.getSeenReservesInAvailableReservesRoute( this.userUid).subscribe((reserve)=>{
          this.routeTrips = reserve;
          console.log(this.routeTrips);
          
          // this.getButtonStarter()
        })


        this.reservesService.getSeenCrewsInAvailableCrews( this.userUid).subscribe((crew)=>{
          this.crewsAvailable = crew;
          console.log(this.crewsAvailable);

          
        })

        this.reservesService.getSeenCrewsInAvailableCrewsRoute( this.userUid).subscribe((crew)=>{
          this.routeCrews = crew;
          console.log(this.routeCrews);
          
          // this.getButtonStarter()
        })



        
          
        this.loading.dismiss();
        
  }


  // getButtonStarter(){
    
  //   if(this.reservesAvailable.length !== 0 && this.routeTrips.length === 0){

      
  //     this.segment = 'carpool';
  //     this.segmentCarpool = 'nearby'
  //     this.carpool();
  //     this.nearby();
  //   }else if(this.routeTrips.length !== 0 && this.reservesAvailable.length === 0){

  //     this.segment = 'carpool';
  //     this.segmentCarpool = 'route'
  //     this.carpool();
  //     this.route();
  //   }else if(this.routeTrips.length !== 0 && this.reservesAvailable.length !== 0){
  //     this.segment = 'carpool';
  //     this.segmentCarpool = 'nearby'
  //     this.carpool();
  //     this.nearby();
  //   }

  
  //     this.loading.dismiss();

    
  // }

 

  ionViewDidLeave(){
    this.unSubscribeServices();
    
    console.log("me active")
    this.TripsService.eliminateAvailableUsers(this.userUid);
    this.TripsService.eliminateSeenAvailableReserves(this.userUid);
    this.TripsService.eliminateSeenAvailableReservesRoute(this.userUid);

    this.TripsService.eliminateAvailableCrews(this.userUid);
    this.TripsService.eliminateSeenAvailableCrews(this.userUid);
    this.TripsService.eliminateSeenAvailableCrewsRoute(this.userUid);

  }



      doRefresh(event) {
        
        this.afDB.database.ref('allCities/' + this.user.city ).once('value').then((snapGeoquery)=>{

        this.setGeofireOr( snapGeoquery.val().geofireOr, this.latOr, this.lngOr, this.userUid, snapGeoquery.val().geofireDest, this.latDest, this.lngDest);
        this.setGeofireRouteOrigin(snapGeoquery.val().geofireRoute, this.latOr, this.lngOr, snapGeoquery.val().geofireDest, this.latDest, this.lngDest, this.userUid )
     

        })
        
        setTimeout(() => {
          if(this.geoquery1){
            this.geoquery1.cancel(); 
          }
          if(this.geoquery2){
            this.geoquery2.cancel();
          }
          
          if(this.geoqueryRouteOrigin){
            this.geoqueryRouteOrigin.cancel();
          }

          if(this.geoqueryRouteDestination){
            this.geoqueryRouteDestination.cancel();
          }



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
        

        if(reserveGeofire.onRouteDestination == true || reserveGeofire.onRouteOrigin == true){
          
          this.afDB.database.ref('/reservesTest/'+reserveGeofire.driverId+'/'+ reserveGeofire.keyReserve).once('value').then((snapTripRoute)=>{
            let obj = snapTripRoute.val();
            this.afDB.database.ref('/usersTest/'+ this.userUid +'/reservesSeenInAvailableReservesRoute/').remove().then(()=>{
              this.afDB.database.ref('/usersTest/'+ this.userUid +'/reservesSeenInAvailableReservesRoute/'+ reserveGeofire.keyReserve).update(obj)
              .then(()=>{
                this.afDB.database.ref('/usersTest/'+ this.userUid +'/reservesSeenInAvailableReservesRoute/'+ reserveGeofire.keyReserve).update({distance: (reserveGeofire.distance*1000)})
              })
            })
            
             
          })

      }else{

        this.afDB.database.ref('/reservesTest/'+ reserveGeofire.driverId +'/'+ reserveGeofire.keyReserve).once('value').then((snapReserve)=>{
          let obj = snapReserve.val();
          console.log(obj);
          this.afDB.database.ref('/usersTest/'+ this.userUid +'/reservesSeenInAvailableReserves/').remove().then(()=>{
            this.afDB.database.ref('/usersTest/'+ this.userUid +'/reservesSeenInAvailableReserves/'+ reserveGeofire.keyReserve).update(obj)
            .then(()=>{
              this.afDB.database.ref('/usersTest/'+ this.userUid +'/reservesSeenInAvailableReserves/'+ reserveGeofire.keyReserve).update({distance: (reserveGeofire.distance*1000)})
            })
          })
        })

      }
  })

  }



  getAvailableCrews(){ 
    //bring crews that i have entered to hide them in listride
// this.reservesAvailable = [];
//after getting crew id and adminId from my own user node, we used them to access the crew information in the node crews
console.log(this.CrewsGeofire);
  
this.CrewsGeofire.forEach(crewGeofire => {        
    

    if(crewGeofire.onRouteDestination == true || crewGeofire.onRouteOrigin == true){
      
      this.afDB.database.ref('/crewsTest/'+crewGeofire.adminId+'/'+ crewGeofire.crewId).once('value').then((snapCrewRoute)=>{
        let obj = snapCrewRoute.val();
        this.afDB.database.ref('/usersTest/'+ this.userUid +'/crewsSeenInAvailableCrewsRoute/').remove().then(()=>{
          if(crewGeofire.adminId === this.userUid){
            console.log('yo te cree');
            
          }else{
            this.afDB.database.ref('/usersTest/'+ this.userUid +'/crewsSeenInAvailableCrewsRoute/'+ crewGeofire.crewId).update(obj)
          .then(()=>{
            this.afDB.database.ref('/usersTest/'+ this.userUid +'/crewsSeenInAvailableCrewsRoute/'+ crewGeofire.crewId).update({distance: (crewGeofire.distance*1000)})
          })
          }
          
        })
        
         
      })

  }else{

    this.afDB.database.ref('/crewsTest/'+ crewGeofire.adminId+'/'+ crewGeofire.crewId).once('value').then((snapCrew)=>{
      let obj = snapCrew.val();
      console.log(obj);
      this.afDB.database.ref('/usersTest/'+ this.userUid +'/crewsSeenInAvailableCrews/').remove().then(()=>{
        if(crewGeofire.adminId === this.userUid){
          console.log('yo te cree');
          
        }else{
          this.afDB.database.ref('/usersTest/'+ this.userUid +'/crewsSeenInAvailableCrews/'+ crewGeofire.crewId).update(obj)
        .then(()=>{
          this.afDB.database.ref('/usersTest/'+ this.userUid +'/crewsSeenInAvailableCrews/'+ crewGeofire.crewId).update({distance: (crewGeofire.distance*1000)})
        })
        }
        
      })
    })

  }
})

}


  carpool(){

    this.showCrew = false;
    this.showCarpool = true;
    
    
  }

  crew(){
   
    this.showCarpool = false;
    this.showCrew = true;
  }


  nearby(){
    this.showRoute = false;
    this.showNearby = true;

  }

  route(){
    this.showNearby = false;
    this.showRoute = true;
  }



  nearbyCrew(){

    this.showRouteCrew = false;
    this.showNearbyCrew = true; 
  }

  routeCrew(){

    this.showNearbyCrew = false;
    this.showRouteCrew = true;

  }


 
 confirmpopup(reserve){
   this.reservesService.getPendingUsers(reserve.driver.userId,reserve.keyTrip).takeUntil(this.unsubscribe)
    .subscribe(pendingUsers=>{
      this.pendingUsers = pendingUsers
      console.log(pendingUsers);
     
      
    })
    if( this.pendingUsers === undefined||this.pendingUsers === null){
      //there is no one in the trip
      let modal = this.modalCtrl.create('ConfirmpopupPage',{reserve:reserve, orCoords: this.orCoords, destCoords: this.destCoords});
    modal.onDidDismiss(accepted => {
        if(accepted){
          this.unSubscribeServices();
         this.navCtrl.pop();
         this.TripsService.eliminateAvailableUsers(this.userUid);
         this.TripsService.eliminateSeenAvailableReserves(this.userUid);
         this.TripsService.eliminateSeenAvailableReservesRoute(this.userUid);
         this.TripsService.eliminateAvailableCrews(this.userUid);
         this.TripsService.eliminateSeenAvailableCrews(this.userUid);
         this.TripsService.eliminateSeenAvailableCrewsRoute(this.userUid);

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
      let modal = this.modalCtrl.create('ConfirmpopupPage',{reserve:reserve, orCoords: this.orCoords, destCoords: this.destCoords});
    modal.onDidDismiss(accepted => {
        if(accepted){
          this.unSubscribeServices();
         this.navCtrl.pop();
         this.TripsService.eliminateAvailableUsers(this.userUid);
         this.TripsService.eliminateSeenAvailableReserves(this.userUid);
         this.TripsService.eliminateSeenAvailableReservesRoute(this.userUid);
         this.TripsService.eliminateAvailableCrews(this.userUid);
         this.TripsService.eliminateSeenAvailableCrews(this.userUid);
         this.TripsService.eliminateSeenAvailableCrewsRoute(this.userUid);


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
        this.TripsService.eliminateAvailableCrews(this.userUid);
        this.TripsService.eliminateSeenAvailableCrews(this.userUid);
        this.TripsService.eliminateSeenAvailableCrewsRoute(this.userUid);

        // this.TripsService.eliminateSeenAvailableReservesLMU(this.SignUpService.userPlace,this.userUid)

        this.navCtrl.push('MyridePage');
      }
    })
    modal.present();
   //IMPORTANTE QUE AL FINAL SE LE COLOQUE QUE SE QUITE CUANDO ACEPTE A ALGUIEN
   }

   createGroup(){
    
    this.locationOriginUser = ({
      lat: this.latOr,
      lng: this.lngOr
    })
    
    
    this.locationDestinationUser = ({
      lat: this.latDest,
      lng: this.lngDest
    })

    let modal = this.modalCtrl.create('CreateGroupPage', {origin:this.locationOriginUser,destination:this.locationDestinationUser, indexesOfPointsAlongRoute: this.indexesOfPointsAlongRoute, pointsAlongRoute: this.pointsAlongRoute});

    modal.present();
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



  joinCrew(crew){
    let userToCrew = {
      city: this.user.city,
      company: this.user.company,
      email: this.user.email,
      name: this.user.name,
      lastname: this.user.lastname,
      phone: this.user.phone,
      userId: this.user.userId,
      verifiedPerson: this.user.verifiedPerson,
      origin: {
        name: this.nameOr,
        coords: {
        lat: this.latOr,
        lng: this.lngOr
        }
      },

      destination: {
        name: this.nameDest, 
        coords: {
          lat: this.latDest,
          lng: this.lngDest
        }
        
      }

    }
    this.afDB.database.ref('/crewsTest/' + crew.admin.userId + '/' + crew.crewId + '/members').push(userToCrew)
      .then((snap)=>{
        const keyPushCrew = snap.key

        this.afDB.database.ref('/usersTest/' + this.userUid + '/crewsInside/' + keyPushCrew )
          .update({
            adminId: crew.admin.userId,
            crewId: crew.crewId
          }).then(()=>{

            let alert = this.alertCtrl.create({
              title: 'Bienvenido a este grupo!!',
              subTitle: 'Mira los detalles del grupo en "Mis Viajes"',
              buttons: ['OK']
            });
            alert.present();
            
          })

      })
    

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
    
    
      
      keyExitedOr( userId  ){
       this.geoquery2.on("key_exited", function(key){
         this.afDB.database.ref( '/usersTest/' + userId + '/availableReserves/' + key).remove()
       }.bind(this))
      }

      


      //geoquery origin in route
    setGeofireRouteOrigin( radiusRoute:number, lat, lng, radiusDest, latDest, lngDest, userId):void{ 
      // console.log(this.geoquriesRouteOrigin);
      let dbRef = this.afDB.database.ref(  '/geofireRoute/' );
      let geoFire = new GeoFire(dbRef); 

      this.geoqueryRouteOrigin = geoFire.query({
        center: [lat, lng],
        radius: radiusRoute
      })

      this.keyEnteredRouteOrigin( userId, radiusDest, latDest, lngDest );
      this.keyExitedRouteOrigin(  userId  );         
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



    keyExitedRouteOrigin( userId){
      this.geoqueryRouteOrigin.on("key_exited", function(key){
        this.afDB.database.ref( '/usersTest/' + userId + '/availableReserves/' + key).remove()
        
      }.bind(this))
      
    }


  
    //geoquery destination
    setGeofireDest( radiusDest:number, latDest, lngDest, userId):void{ 
      console.log('se prendio geoquery destination, debo salir una sóla vez');
      console.log(this.keysIdentifiedInOriginRoute);
      
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
      if(this.keysIdentifiedInOrigin.length !== 0){

        let count = 0
        for(let element of this.keysIdentifiedInOrigin){
          count = count + 1
          if(element.keyTrip === key){
            this.geofireDestinationConfirmed = true;
            this.afDB.database.ref( '/usersTest/' + userId + '/availableReserves/' + key).update({
                keyReserve: key,
                distance: element.distance
              
               }).then(()=> {
                   return this.afDB.database.ref( '/geofireDest/'+ key).once('value').then((snap) => {
                    this.driverOnNodeDest = snap.val();
        
                    this.afDB.database.ref( '/usersTest/' + userId + '/availableReserves/' + key).update({
                        driverId: this.driverOnNodeDest.driverId
            
                    })  
                })
               }) 
             
          }
  
          if (count === this.keysIdentifiedInOrigin.length){
            console.log('si se ejecuto el for de keysOrigin');
            
            for(let element of this.keysIdentifiedInOriginRoute){
  
              if(element.keyTrip === key){
                console.log('un key de destination es igual al keytrip que fue identificado en origen');
  
                this.geofireDestinationConfirmed = true;
                this.afDB.database.ref( '/usersTest/' + userId + '/availableReserves/' + key).once('value')
                .then((snapshot)=>{
                  if(snapshot.val()){
      
                  }else{
                    this.afDB.database.ref( '/usersTest/' + userId + '/availableReserves/' + key).update({
                      keyReserve: key,
                      onRouteOrigin: true,
                      distance: element.distance
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
  
            }
          }
        }

      }else if(this.keysIdentifiedInOriginRoute.length !== 0){

        for(let element of this.keysIdentifiedInOriginRoute){
  
          if(element.keyTrip === key){
            console.log('un key de destination es igual al keytrip que fue identificado en origen');

            this.geofireDestinationConfirmed = true;
            this.afDB.database.ref( '/usersTest/' + userId + '/availableReserves/' + key).once('value')
            .then((snapshot)=>{
              if(snapshot.val()){
  
              }else{
                this.afDB.database.ref( '/usersTest/' + userId + '/availableReserves/' + key).update({
                  keyReserve: key,
                  onRouteOrigin: true,
                  distance: element.distance
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

        }

      }else{

      }
     
    
     }.bind(this))


     setTimeout(() => {
      this.geoquery1.on("ready", function(){
        
        this.afDB.database.ref('allCities/' + this.userInfo.city ).once('value').then((snap)=>{

            this.setGeofireRouteDest(snap.val().geofireRoute,  this.myLatLngDest.lat(), this.myLatLngDest.lng(), userId);

        })
        
 
      
    }.bind(this))
  }, 300);
 }



   
   
   keyExitedDest(userId){
     
     this.geoquery1.on("key_exited", function(key){
       this.afDB.database.ref(  '/usersTest/' + userId + '/availableReserves/' + key).remove()
     }.bind(this))
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
      this.keyExitedRouteDest( userId  ); 
      
           
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
                
                this.afDB.database.ref( '/usersTest/' + userId + '/availableReserves/' + this.keyTripForGeofireInRouteDest).once('value')
                .then((snapConf)=>{
                  if(snapConf.val()){
                    console.log('te voy a dejar relajado ya que ya te identifiqué');
  
                  }else{
  
                    this.afDB.database.ref( '/usersTest/' + userId + '/availableReserves/' + this.keyTripForGeofireInRouteDest).update({
                      keyReserve: this.keyTripForGeofireInRouteDest,
                      driverId: this.driverIdForGeofireInRouteDest,
                      onRouteDestination: true,
                      distance: element.distance
                     })
  
                  }
                })
                 
              }
  
              if(count === this.keysIdentifiedInOrigin.length){
                for(let element of this.keysIdentifiedInOriginRoute){
                  if(element.keyTrip === this.keyTripForGeofireInRouteDest){
                    this.geofireDestinationConfirmedOnRoute = true;
      
                    this.afDB.database.ref( '/usersTest/' + userId + '/availableReserves/' + this.keyTripForGeofireInRouteDest).once('value')
                        .then((snapConf)=>{
                          if(snapConf.val().driverId === this.driverIdForGeofireInRouteDest){
                            console.log('te voy a dejar relajado ya que ya te identifiqué');  
                          }else{
                            this.afDB.database.ref( '/usersTest/' + userId + '/availableReserves/' + this.keyTripForGeofireInRouteDest).update({
                              keyReserve: this.keyTripForGeofireInRouteDest,
                              driverId: this.driverIdForGeofireInRouteDest,
                              onRouteDestination: true,
                              onRouteOrigin: true, 
                              distance: element.distance 
                             })
        
                          }
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
          console.log(this.keyTripForGeofireInRouteDest);
           
          console.log('ahora si aqui te encuentro 1');
          
          if(this.keysIdentifiedInOriginRoute !== 0){
            console.log('ahora si aqui te encuentro 2');
            
            for(let element of this.keysIdentifiedInOriginRoute){
              if(element.keyTrip === this.keyTripForGeofireInRouteDest){
                this.geofireDestinationConfirmedOnRoute = true;
  
                this.afDB.database.ref( '/usersTest/' + userId + '/availableReserves/' + this.keyTripForGeofireInRouteDest).once('value')
                    .then((snapConf)=>{
                    
                      
                      if(snapConf.val()){

                        if(snapConf.val().driverId === this.driverIdForGeofireInRouteDest){
                          console.log('te voy a dejar relajado ya que ya te identifiqué');  
                        }else{
                          this.afDB.database.ref( '/usersTest/' + userId + '/availableReserves/' + this.keyTripForGeofireInRouteDest).update({
                            keyReserve: this.keyTripForGeofireInRouteDest,
                            driverId: this.driverIdForGeofireInRouteDest,
                            onRouteDestination: true,
                            onRouteOrigin: true, 
                            distance: element.distance 
                           })
      
                        }
                      }else{

                        this.afDB.database.ref( '/usersTest/' + userId + '/availableReserves/' + this.keyTripForGeofireInRouteDest).update({
                          keyReserve: this.keyTripForGeofireInRouteDest,
                          driverId: this.driverIdForGeofireInRouteDest,
                          onRouteDestination: true,
                          onRouteOrigin: true, 
                          distance: element.distance 
                         })
    
                      }
                      
                    })
  
              }
            }

          }else{

          }
         
        })
                
      }.bind(this))

    }





    keyExitedRouteDest( userId){
      
      this.geoqueryRouteDestination.on("key_exited", function(key){

        this.afDB.database.ref(  '/usersTest/' + userId + '/availableReserves/' + key).remove()

      }.bind(this))
      
    }


  
}