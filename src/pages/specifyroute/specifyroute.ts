

import { Component, ViewChild, ElementRef,NgZone, Renderer } from '@angular/core';


// import { TabsPage } from '../tabs/tabs';
// import { Geofence } from '@ionic-native/geofence';
import { Geolocation } from '@ionic-native/geolocation/';
import { NavController, Platform, ViewController, AlertController, ModalController, ToastController, IonicPage, App, LoadingController, NavParams } from 'ionic-angular';
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
 
declare var google;
@IonicPage()
@Component({
  selector: 'driver-page-specifyroute',
  templateUrl: 'specifyroute.html'
})
export class DriverSpecifyRoutePage {
 

  @ViewChild('map') mapElement: ElementRef;


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
  accepted: boolean;

  //¿Adonde vas? 
  destinationSelect: any;
  //firebase 
  trip:any = {};
  // tripIdFirebase = this.AngularFireAuth.auth.currentUser;
  desFirebase:any;
  
  tripId:any = null;
  orFirebase:any;

  user=this.AngularFireAuth.auth.currentUser.uid;
  userInfo:any;
  currentUser = this.AngularFireAuth.auth.currentUser;
  //geofire variables
  dbRef:any;
  geoFire:any;
  key;
  driver;
  driverInfo:any = {};
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
  isConected:boolean = false;
  positionDest:any;
  positionOr:any;
  lat:any;
  lng:any;
  myInfoAboutMyPlace:any;
  schedules = [];
  myReserves = [];
  geocoordinatesHouse:any;
  checked:boolean = false;
  isDisconected:boolean;
  driverReserves: any;
  fullReserves = [];
  city:any;
  company:any;
  origin:any;
  myLatLngOr: any;
  destination: any;
  indexesOfPointsAlongRoute = [];
  pointsAlongRoute = [];
  pointsToSaveRoute = [];
  constructor( public navParams: NavParams, private geofireService: DriverGeofireService,public TripsService:DriverTripsService,public viewCtrl: ViewController, public afDB: AngularFireDatabase, public navCtrl: NavController,public SignUpService:DriverSignUpService,public modalCtrl: ModalController,private authenticationService: DriverAuthenticationService, public geolocation: Geolocation,public zone: NgZone, public sendCoordsService: DriverSendCoordsService, private AngularFireAuth: AngularFireAuth, public alertCtrl: AlertController, private toastCtrl: ToastController, private app: App, private sendUsersService: DriverSendUsersService, public instancesService: DriverInstancesService, public firebaseNative: Firebase, private platform: Platform, private fcm: FCM, public loadingCtrl: LoadingController, public renderer: Renderer ) {
    console.log('specifyorigin');
    
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

      
  this.afDB.database.ref( '/driversTest/' + this.user).once('value').then((snap)=>{
    this.city = snap.val().city;
    this.company = snap.val().company;


    this.loadMap();

  
  })


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
         this.myLatLngOr = {
           lat: this.myLatLng.lat,
           lng: this.myLatLng.lng
         }
 
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
       
       this.dragMarkerOr(this.markerGeolocation,this.autocompleteMyPos)
       //to reverse-geocode position
       this.geocodeLatLng(latLng,this.autocompleteMyPos)
  
       
      
       },(err) => {
       console.log(err);    
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
////show destinations
 ////autocomplete of my destination
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
    this.autocompleteMyDest.input=''
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
          animation: google.maps.Animation.DROP,
          icon: {         url: "assets/imgs/marker-origin.png",
          scaledSize: new google.maps.Size(90, 90)    
  
        },

        });
        this.dragMarkerOr(this.markerGeolocation,this.autocompleteMyPos)
        this.markers.push( this.markerGeolocation);
        this.map.setCenter(results[0].geometry.location);
        this.autocompleteMyPos.input=[item.description]
        this.directionsDisplay.setMap(null);
        this.myLatLngOr = {lat:results[0].geometry.location.lat(),lng:results[0].geometry.location.lng()} ;
        console.log(this.myLatLngOr);
        

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
          draggable:true,
          animation: google.maps.Animation.DROP,

          icon: {         url: "assets/imgs/marker-destination2.png",
          scaledSize: new google.maps.Size(90, 90)    
  
        }       
        });
        console.log(position)
        this.map.fitBounds(this.bounds);     
        this.markers.push(this.markerDest);
        this.map.setCenter(results[0].geometry.location);
        this.autocompleteMyDest.input=[item.description]
        this.dragMarkerDest(this.markerDest,this.autocompleteMyDest)
        this.directionsDisplay.setMap(this.map);
        this.myLatLngDest={lat:results[0].geometry.location.lat(),lng:results[0].geometry.location.lng() }
        console.log(this.myLatLngDest);
        
        this.calculateRoute(this.markerGeolocation.position,results[0].geometry.location);
      }
    })
    
  }
   
    calculateRoute(positionOr,positionDest){
      //tutorial ngclassroom https://blog.ng-classroom.com/blog/ionic2/directions-google-js-ionic/
  
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


    for (let index of this.indexesOfPointsAlongRoute){
      this.pointsToSaveRoute.push({
        lat: this.pointsAlongRoute[index].lat,
        lng: this.pointsAlongRoute[index].lng
      })
    }


    console.log(this.pointsToSaveRoute);
    

        //render
        if(status === google.maps.DirectionsStatus.OK) {
          this.directionsDisplay.setDirections(response);
        }else{
          alert('Could not display directions due to: ' + status);
        }
        
      });  
      
      
    }
   


////////Markers
clearMarkers(){
    for (var i = 0; i < this.markers.length; i++) {
      
      this.markers[i].setMap(null);
    }
    this.markers = [];
  }
  
 
dragMarkerOr(marker,inputName){
     //allow origin marker to be draged and calculate route with the new position

  google.maps.event.addListener(marker, 'dragend',  (evt) => {
    let lat = marker.getPosition().lat()
    let lng = marker.getPosition().lng()
    let latOr = marker.getPosition().lat()
    let lngOr = marker.getPosition().lng()
    let latLng = {lat,lng}

    let latLngOr = {lat:latOr,lng:lngOr}
   console.log(latLng);
   
    this.geocodeLatLng(latLng,inputName)
    console.log(this.positionDest);
    
    this.geocoordinatesHouse = latLngOr;
    
})
}
dragMarkerDest(marker,inputName){
  google.maps.event.addListener(marker, 'dragend',  (evt) => {
    let lat = marker.getPosition().lat()
    let lng = marker.getPosition().lng()
    let latLng = {lat,lng}
   
    this.map.setCenter(latLng);
    this.geocodeLatLng(latLng,inputName)
   this.calculateRoute(this.markerGeolocation.position,latLng);
   this.myLatLngDest=latLng;
})
}

geocodeLatLng(latLng,inputName) {

  this.geocoder.geocode({'location': latLng}, (results, status) => {
    if (status === 'OK') {
      if (results[0]) {
         inputName.input=[results[0].formatted_address];
      } else {
       alert('No results found');
      }
    } else {
      alert('Geocoder failed due to: ' + status);
    }
                

  });
}




/////////////////////

sendLocation(){
  console.log(  this.myLatLngDest
    );
    console.log(this.myLatLngOr);
    
  
  this.origin = this.autocompleteMyPos.input;
  this.destination = this.autocompleteMyDest.input;
  
          this.afDB.database.ref( '/geofireSchedule/' + this.user).update({
            pointsRoute: this.pointsToSaveRoute
          });
          this.afDB.database.ref( '/driversTest/' + this.user + '/houseAddress/').update({
            name: this.origin[0]
          });
          this.afDB.database.ref( '/driversTest/' + this.user + '/houseAddress/coordinates').update({
            lat:this.myLatLngOr.lat,
            lng:this.myLatLngOr.lng
          });
          this.afDB.database.ref( '/driversTest/' + this.user + '/workAddress/').update({
            name: this.destination[0]
          });
          this.afDB.database.ref( '/driversTest/' + this.user + '/workAddress/coordinates').update({
            lat:this.myLatLngDest.lat,
            lng:this.myLatLngDest.lng
          }).then(()=>{

            this.navCtrl.pop();


             })
             
      }

} 





 
