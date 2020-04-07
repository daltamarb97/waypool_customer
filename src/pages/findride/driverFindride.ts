import { Component, ViewChild, ElementRef,NgZone, Renderer } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/';
import { NavController, Platform, ViewController, AlertController, ModalController, ToastController, IonicPage, App, LoadingController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { DriverSendCoordsService } from '../../services/d-sendCoords.service';

// import { authenticationService } from '../../services/driverauthentication.service';
import { DriverSignUpService } from '../../services/d-signup.service';
// import { Geofence } from '@ionic-native/geofence';
import { DriverGeofireService } from '../../services/d-geofire.services';
import { AngularFireDatabase, snapshotChanges } from '@angular/fire/database';
import { DriverAuthenticationService } from '../../services/d-driverauthentication.service';
import { DriverSendUsersService } from '../../services/d-sendUsers.service';
import { DriverTripsService } from '../../services/d-trips.service';
import { DriverInstancesService } from '../../services/d-instances.services';
import { FCM } from '@ionic-native/fcm';
import { Firebase } from '@ionic-native/firebase';
import { MetricsService } from '../../services/metrics.service';
import { DriverMetricsService } from '../../services/d-metrics.service';
 
declare var google;
@IonicPage()
@Component({
  selector: 'driver-page-findride',
  templateUrl: 'driverFindride.html'
})
export class DriverFindridePage {
 

  @ViewChild('map') mapElement: ElementRef;
  @ViewChild('buttonConected',{read:ElementRef}) buttonConected;
  @ViewChild('buttonDshowConectedButton',{read:ElementRef}) buttonDshowConectedButton;

  map: any;
  markers: any;
  
  // autocomplete/geocoder variables
  
  autocompleteMyPos: any;
  autocompleteMyDest: any;
  GoogleAutocomplete: any;
  GooglePlaces: any;
  geocoder: any
  autocompleteItems: any;
  autocompleteItems2: any[];

  // waypoints variables
  directionsService: any = null;
  directionsDisplay: any = null;
  bounds: any = null;
  myLatLng: any=[];
  waypoints: any[];
  myLatLngDest:any;
  count:any = 0;
  //¿Adonde vas? 
  destinationSelect: any;
  //firebase 
  trip:any = {};
  // tripIdFirebase = this.AngularFireAuth.auth.currentUser;
  desFirebase:any;
  houseAddress:any;
  placeAddress:any;
  tripId:any = null;
  orFirebase:any;
  user = this.AngularFireAuth.auth.currentUser.uid;

  userInfo:any;
  currentUser = this.AngularFireAuth.auth.currentUser;
  //geofire variables
  dbRef:any;
  geoFire:any;
  key;
  driver;
  // driverInfo:any = {};
  geoInfo1:any = {};
  geoInfo2:any = {};
  markerGeolocation:any;
  markerDest:any;
  universityInfo:any;
  //variables for geofire reserves
  reserves= [];
  geocoordinatesOr:any;
  geocoordinatesDest:any;

  locationUniversity:any ={};
  university:any;
  doGeoquery:boolean;
  keyTrip:any; 
  onTrip:any;
  token:any;
  showConectedButton:boolean = true;
  positionDest:any;
  positionOr:any;
  lat:any;
  lng:any;
  myInfoAboutMyPlace:any;
  schedules = [];
  myReserves = [];
  geocoordinatesHouse:any;
  checked:boolean = false;
  driverReserves: any;
  fullReserves = [];
  multipleDestinations:any = [];
  showList: boolean;
  positionOrMarker: any;
  markersOr: any = [];
  markersDest: any = [];
  geocoordinatesDestName: any;
  destName: any;
  multipleLocations:boolean;
  zonesToIterate:any;
  pointsAlongRoute = [];
  indexesOfPointsAlongRoute = [];
  usingGeolocation:boolean = false;

  constructor( private geofireService: DriverGeofireService,public TripsService:DriverTripsService, public afDB: AngularFireDatabase, public navCtrl: NavController,public SignUpService:DriverSignUpService,public modalCtrl: ModalController,private authenticationService: DriverAuthenticationService, public geolocation: Geolocation,public zone: NgZone, public sendCoordsService: DriverSendCoordsService, private AngularFireAuth: AngularFireAuth, public alertCtrl: AlertController, private toastCtrl: ToastController, private app: App, private sendUsersService: DriverSendUsersService, public instancesService: DriverInstancesService, public firebaseNative: Firebase, private platform: Platform, private fcm: FCM, public loadingCtrl: LoadingController, public renderer: Renderer, private MetricsService: MetricsService, private DriverMetricsService: DriverMetricsService ) {

    console.log(this.user);
    
    console.log(this.currentUser);
    
    
    this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
    this.geocoder = new google.maps.Geocoder;

    this.autocompleteMyPos = { input: '' };
    this.autocompleteMyDest = { input: '' };

    this.autocompleteItems = [];
    this.autocompleteItems2 = [];

    this.directionsService = new google.maps.DirectionsService();
    this.directionsDisplay = new google.maps.DirectionsRenderer({
      suppressMarkers: true,
  });
    this.bounds = new google.maps.LatLngBounds();
    
    this.markers = [];
    //meter datos por el id del firebase

 } // END OF CONSTRUCTOR


 ionViewDidLoad(){

  this.SignUpService.getMyInfoDriver( this.user).subscribe(user=>{
    this.userInfo = user;
   console.log(this.userInfo);
   this.loadMap();
   
  }) 

    this.afDB.database.ref('allUsers/' + this.user).once('value').then((snap)=>{
      if(snap.val().toggleOnline){
            //user get their check sign of verficiation here
        this.instancesService.isVerifiedPerson( this.user);
  
          
        this.platform.ready().then(()=>{
    
          this.getToken();
    
          //NO BORRAR
          // console.log('aqui cogi el token');
    
          // this.token = this.fcm.getToken().then((token)=>{
          //   console.log('this is the token ' + token);
          //   this.afDB.database.ref( '/drivers/' + this.user + '/devices/').update({
          //     token: token
          //   })
          // })
      })
  
        
      
      //search keyTrip
    
       //search keyTrip
       this.TripsService.getKeyTrip( this.user)
       .subscribe(keyTrip=>{
         this.keyTrip =keyTrip;
         console.log(this.user)
         console.log(this.keyTrip)
         //if key its deleted don't show VIAJE EN CURSO  
         if(this.keyTrip === undefined || this.keyTrip === null){
         this.onTrip=false;
         //  this.TripsService.eraseKeyTrip(this.user);
         //  this.TripsService.setOnTripFalse(this.user);
           console.log("llegue adonde era")
         }else{
           //confirm that trip exist and get it
           this.getTrip();
           
         }
    
    })
    
         
       
       
}else{
    
            //user get their check sign of verficiation here
            this.instancesService.isVerifiedPerson( this.user);
    

          //logica de instrucciones 
        this.afDB.database.ref('/driversTest/' + this.user ).once('value').then((snapWalkthr)=>{
          if(snapWalkthr.val().shownInstructions === true){
            console.log('ya lo mostre');
            
          }else{
            this.app.getRootNav().push('DriverWalkthroughPage');
            this.afDB.database.ref( '/driversTest/' + this.user).update({
              shownInstructions: true
            })

          }
        })


    
          
        this.platform.ready().then(()=>{
    
          // this.getToken();
    
          console.log('aqui cogi el token');
    
          this.token = this.fcm.getToken().then((token)=>{
            console.log('this is the token ' + token);
            this.afDB.database.ref( '/drivers/' + this.user + '/devices/').update({
              token: token
            })

          })
      })
    
    
       //search keyTrip
       this.TripsService.getKeyTrip( this.user)
       .subscribe(keyTrip=>{
         this.keyTrip =keyTrip;
         console.log(this.user)
         console.log(this.keyTrip)
         //if key its deleted don't show VIAJE EN CURSO  
         if(this.keyTrip === undefined || this.keyTrip === null){
         this.onTrip=false;
         //  this.TripsService.eraseKeyTrip(this.user);
         //  this.TripsService.setOnTripFalse(this.user);
           console.log("llegue adonde era")
         }else{
           //confirm that trip exist and get it
           this.getTrip();
           
         }
    
    })
  }
       
})
}


async getToken() {

  if (this.platform.is('android')) {
    this.token = await this.firebaseNative.getToken().then((token)=>{
      console.log('this is the token ' + token);
      this.afDB.database.ref( '/drivers/' + this.user + '/devices/').update({
        token: token
      })
    })
  }

  if (this.platform.is('ios')) {
    await this.firebaseNative.grantPermission();
    this.token = await this.firebaseNative.getToken().then((token)=>{
      console.log('this is the token ' + token);
      this.afDB.database.ref('/drivers/' + this.user + '/devices/').update({
        token: token
      }).then(()=>{
        console.log('DONE DRIVER DEVICE TOKEN');
        
      })
    })
   
  }

}


loadMap(){

  // this gets current position and set the camera of the map and put a marker in your location
     this.geolocation.getCurrentPosition({enableHighAccuracy: true}).then((position) => {
 
       let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
  
       let mapOptions = {
           center: latLng,
           zoom: 17,
           mapTypeId: google.maps.MapTypeId.ROADMAP,
           zoomControl: false,
             mapTypeControl: false,
             scaleControl: false,
             streetViewControl: false,
             rotateControl: false,
             fullscreenControl: false,
             styles: [
               {
                 featureType: 'poi',
                 elementType: 'labels.icon',
                 stylers: [
                   {
                     visibility: 'off'
                   }
                 ]
               }
             ]
         }
     //creates the map and give options
       this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
       this.myLatLng = {lat: position.coords.latitude , lng: position.coords.longitude};
       this.usingGeolocation = true;
       this.markerGeolocation = new google.maps.Marker({
        map: this.map,
        animation: google.maps.Animation.DROP,
        position: latLng,
        draggable:true, 
         icon: {         url: "assets/imgs/marker-origin.png",
        scaledSize: new google.maps.Size(90, 90)    

      }
      });
       this.markers.push(this.markerGeolocation);
       //allow the marker to be draged and changed the position
       this.dragMarkerOr(this.markerGeolocation,this.autocompleteMyPos)
       //to reverse-geocode position
       this.geocodeLatLng(latLng,this.autocompleteMyPos)
  
       
      
       },(err) => {
       console.log(err);    
      });
 
   }
 
 
 
  
 
 
 
   
   
    calculateRoute(positionOr,positionDest){
     //tutorial ngclassroom https://blog.ng-classroom.com/blog/ionic2/directions-google-js-ionic/
     //calculate route between markers
 
     this.bounds.extend(this.myLatLng);
 
     
   
     this.map.fitBounds(this.bounds);
     
     this.directionsService.route({
      origin: positionOr,
       destination: positionDest,
       travelMode: google.maps.TravelMode.DRIVING,
       avoidTolls: true
     }, (response, status)=> {

      let pointArray = response.routes[0].overview_path;

      this.pointsAlongRoute = [];
      pointArray.forEach(location => {
        
        this.pointsAlongRoute.push({
          lat:location.lat(),
          lng: location.lng()
        })

      });
      
      console.log(this.pointsAlongRoute);
      let NumberPointsToDrawDivision = this.pointsAlongRoute.length / 10;
      console.log(NumberPointsToDrawDivision);

      this.indexesOfPointsAlongRoute = [
        Math.floor(NumberPointsToDrawDivision),
        Math.floor(NumberPointsToDrawDivision*2),
        Math.floor(NumberPointsToDrawDivision*3),
        Math.floor(NumberPointsToDrawDivision*4),
        Math.floor(NumberPointsToDrawDivision*5),
        Math.floor(NumberPointsToDrawDivision*6),
        Math.floor(NumberPointsToDrawDivision*7),
        Math.floor(NumberPointsToDrawDivision*8),
        Math.floor(NumberPointsToDrawDivision*9),
    ]


    console.log(this.indexesOfPointsAlongRoute);
    

       //render
       if(status === google.maps.DirectionsStatus.OK) {
         this.directionsDisplay.setDirections(response);
       }else{
         alert('Could not display directions due to: ' + status);
       }
       
     });  
     
     
   }
   
 
 
 //autocomplete of myPosition searchbar
 updateSearchResultsMyPos(){
     if (this.autocompleteMyPos.input == '') {
       this.autocompleteItems = [];     
       return;
     }
     this.GoogleAutocomplete.getPlacePredictions({ input: this.autocompleteMyPos.input, componentRestrictions: {country:'co'} },
     (predictions, status) => {
       this.autocompleteItems = [];
       if(predictions){
         this.zone.run(() => {
           predictions.forEach((prediction) => {
             this.autocompleteItems.push(prediction);
           });
         });
       }
   });
 }
   ////autocomplete of my destination Searchbar
   updateSearchResultsMyDest(){
     if (this.autocompleteMyDest.input == '') {
       this.autocompleteItems2 = [];
       return;
     }
     this.GoogleAutocomplete.getPlacePredictions({ input: this.autocompleteMyDest.input, componentRestrictions: {country:'co'} },
     (predictions, status) => {
       this.autocompleteItems2 = [];
       if(predictions){
 
 
         this.zone.run(() => {
           predictions.forEach((prediction) => {
             this.autocompleteItems2.push(prediction);
           });
         });
       }
   });
 }
 
   ////select result of my position searchbar
 selectSearchResultMyPos(item){
   this.autocompleteItems=[];
 
   this.clearMarkers();
 
   this.geocoder.geocode({'placeId': item.place_id}, (results, status) => {
     if(status === 'OK' && results[0]){
       
       // let position = {
       //     lat: results[0].geometry.location.lat,
       //     lng: results[0].geometry.location.lng
       // };
         this.markerGeolocation = new google.maps.Marker({
         position: results[0].geometry.location,
         map: this.map,
         draggable: true,
         icon: {         url: "assets/imgs/marker-origin-driver.png",
         scaledSize: new google.maps.Size(90, 90)    
 
       },
       animation: google.maps.Animation.DROP,
 
       });
       this.dragMarkerOr(this.markerGeolocation,this.autocompleteMyPos)
       this.markers.push( this.markerGeolocation);
       this.map.setCenter(results[0].geometry.location);
       console.log(results[0].geometry.location)
       this.myLatLng = results[0].geometry.location;
       this.usingGeolocation = false;
       this.autocompleteMyPos.input=[item.description]
       this.autocompleteMyDest.input=''
       this.directionsDisplay.setMap(null)
     }
   })
   
   
 }
 
   ////select result of my destination searchbar
 
 selectSearchResultMyDest(item){
   this.autocompleteItems2=[];
   if(this.markerDest!==undefined){
     this.markerDest.setMap(null)
   }
   this.geocoder.geocode({'placeId': item.place_id}, (results, status) => {
     if(status === 'OK' && results[0]){
 
       // let position = {
       //   latitude: results[0].geometry.location.lat,
       //   longitude: results[0].geometry.location.lng
       // };
         let position = new google.maps.LatLng( results[0].geometry.location.lat,
          results[0].geometry.location.lng)
           console.log(position)
        this.markerDest = new google.maps.Marker({
         position: results[0].geometry.location,
         map: this.map,
         animation: google.maps.Animation.DROP,
         draggable:true,
            icon: {         url: "assets/imgs/marker-destination2.png",
         scaledSize: new google.maps.Size(90, 90)    
 
       }
       });
       console.log(position)
       this.map.fitBounds(this.bounds);     
       this.markers.push(this.markerDest);
       this.map.setCenter(results[0].geometry.location);
       console.log(results[0].geometry.location)
       this.autocompleteMyDest.input=[item.description]
       this.dragMarkerDest(this.markerDest,this.autocompleteMyDest)
       this.directionsDisplay.setMap(this.map);
       this.myLatLngDest= results[0].geometry.location;
       this.calculateRoute(this.markerGeolocation.position,results[0].geometry.location);
      
      
     }
   })
   
 }
 ////////Markers
 clearMarkers(){
     for (var i = 0; i < this.markers.length; i++) {
       
       this.markers[i].setMap(null);
     }
     this.markers = [];
   }
   
  dragMarkerDest(marker,inputName){
    //allow destination marker to be draged and calculate route with the new position
   google.maps.event.addListener(marker, 'dragend',  (evt) => {
     let lat = marker.getPosition().lat()
     let lng = marker.getPosition().lng()
     let latLng = {lat,lng}
    
     this.map.setCenter(latLng);
     this.geocodeLatLng(latLng,inputName)
     
    this.calculateRoute(this.markerGeolocation.position,latLng);
 })
 }
 dragMarkerOr(marker,inputName){
      //allow origin marker to be draged and calculate route with the new position
 
   google.maps.event.addListener(marker, 'dragend',  (evt) => {
     let lat = marker.getPosition().lat()
     let lng = marker.getPosition().lng()
     let latLng = {lat,lng}
    
     this.map.setCenter(latLng);
     this.geocodeLatLng(latLng,inputName)
     if(this.autocompleteMyDest.input == undefined || this.autocompleteMyDest.input==''){
       console.log("funciona")
     } else {
 
       this.calculateRoute(latLng,this.markerDest.position);
 
     }
 })
 }
 geocodeLatLng(latLng,inputName) {
 
   this.geocoder.geocode({'location': latLng}, (results, status) => {
     if (status === 'OK') {
       if (results[0]) {
          inputName.input=[results[0].formatted_address]
       } else {
        alert('No results found');
       }
     } else {
       alert('Geocoder failed due to: ' + status);
     }
                 
 
   });
 }

 getTrip(){

    this.afDB.database.ref('/tripsTest/'+ this.user +'/'+ this.keyTrip)
    .once('value').then((snapshot) => {
      let trip = snapshot.val();
      console.log(trip);

      if(trip === null || trip === undefined){
        console.log("borre");
         this.TripsService.eraseKeyTrip(this.user);
       this.TripsService.setOnTripFalse(this.user);
      }else{
        this.getOnTrip();
      }
    })
    
 } 


 getOnTrip(){
   this.TripsService.getOnTrip( this.user)
   .subscribe(onTrip=>{
     this.onTrip =onTrip;
     console.log(this.onTrip)
   })
 }
 goToTrip(){
  if (this.onTrip === true) {
    console.log('DISPARADOR')
    let modal = this.modalCtrl.create('DriverMyridePage');                      
    modal.present();
  }else{
    this.presentAlert('Error en el viaje','Intenta entrar otra vez, si el error persiste hay un problema con el viaje, porfavor elimina el viaje en Mis reservas','OK')
  }
 }
 
  
centerMap(){

}

  


    presentAlert(title,text,button) {
      let alert = this.alertCtrl.create({
        title: title,
        subTitle: text,
        buttons: [button]
      });
      alert.present();
    }

  

   
  
   confirmPrice(keyReserve){
    //  this.doGeoquery = false;
     
      let modal = this.modalCtrl.create('DriverConfirmpricePage', {keyReserve: keyReserve})
      modal.onDidDismiss(data => {
        if(data === true){
          this.navCtrl.push('DriverSuccessNotificationPage');
        }
        
      })
      modal.present();

   }



   help(){
    const toast = this.toastCtrl.create({
      message: 'En esta página podrás conectarte con compañeros de tu misma universidad que quieran compartir un viaje contigo.',
     showCloseButton:true,
      closeButtonText: 'OK',
              position:'top'
         });
    toast.present();
  }


    listride(){
      if(this.currentUser.emailVerified == false){
        const alert = this.alertCtrl.create({
          title: 'Oops!',
          subTitle: 'por favor verifica tu email',
          buttons: ['OK']
        });
        alert.present();  
      }else{
       
            try {
              this.orFirebase=[this.autocompleteMyPos.input]
              this.desFirebase=[this.autocompleteMyDest.input]   
              console.log(this.orFirebase);
            if(this.autocompleteMyDest.input ==''|| this.autocompleteMyPos.input==''){
                  this.presentAlert('No tienes toda la informacion','Por favor asegura que tu origen y destino sean correctos','Ok');
                  this.clearMarkers();
                  
                  this.directionsDisplay.setDirections({routes: []});
                  // this.loadMap();
                 } else {
                   
                  this.sendCoordsService.pushcoordinatesDrivers( this.user,this.desFirebase,this.orFirebase)
                  

                  
                  this.afDB.database.ref('/reservesTest/'+ this.user).push({
                    driver: this.userInfo,
                    origin: this.orFirebase,
                    destination: this.desFirebase,
                  }).then((snap1)=>{
                    const key1 = snap1.key;
                          this.MetricsService.createdInstantRoutes(this.user,this.desFirebase, this.orFirebase );

                         // set geofires
                         
                         
                         if(this.usingGeolocation === true){
                          this.geofireService.setGeofireOrNEWTEST( key1, this.myLatLng.lat, this.myLatLng.lng );
                          this.afDB.database.ref('/geofireOr/' + key1).update({
                            driverId: this.userInfo.userId
                          });

                          console.log('executed geofire Or');
                        
                          this.afDB.database.ref('/reservesTest/'+ this.user + '/' + key1).update({
                              keyTrip: key1 
                          });
                         }else{
                          this.geofireService.setGeofireOrNEWTEST( key1, this.myLatLng.lat(), this.myLatLng.lng() );
                          this.afDB.database.ref('/geofireOr/' + key1).update({
                            driverId: this.userInfo.userId
                          });

                          console.log('executed geofire Or');
                        
                          this.afDB.database.ref('/reservesTest/'+ this.user + '/' + key1).update({
                              keyTrip: key1 
                          });
                         }
                         

                        this.geofireService.setGeofireDestNEWTEST( key1, this.myLatLngDest.lat(), this.myLatLngDest.lng() );
                        this.afDB.database.ref('/geofireDest/' + key1).update({
                          driverId: this.userInfo.userId
                       });
                       console.log('executed geofire dest');
                      
                      
                       this.indexesOfPointsAlongRoute.forEach(index=>{
                          this.count++
                          let newKey = key1.concat(this.count)

                          
                          
                          this.geofireService.setGeofireRoute(newKey, this.pointsAlongRoute[index].lat, this.pointsAlongRoute[index].lng );
                          this.afDB.database.ref('/geofireRoute/' + newKey).update({
                            driverId: this.userInfo.userId,
                            keyTrip: key1
                         });
                        
                        
                      })  
                  console.log('executed geofire route'); 
                  this.confirmPrice(key1);
                })

                  
                        
                }
              
               }
          
               
            catch(error) {
              console.log(error);

                this.presentAlert('Hay un error en la aplicación','Lo sentimos, por favor para solucionar este problema porfavor envianos un correo a soporte@waypool.com,¡lo solucionaremos!.','Ok') 
   
              console.log(this.orFirebase);
          }
        
      }
    
  
  }

}