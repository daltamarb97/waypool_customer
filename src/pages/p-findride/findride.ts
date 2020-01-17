import { Component, ViewChild, ElementRef,NgZone } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { NavController, Platform, ViewController, AlertController, ModalController, IonicPage, App, ToastController, LoadingController } from 'ionic-angular';
import { sendCoordsService } from '../../services/sendCoords.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { geofireService } from '../../services/geoFire.service';
import { SignUpService } from '../../services/signup.services';
import * as firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import * as GeoFire from 'geofire';
import { TripsService } from '../../services/trips.service';
import { Subject } from 'rxjs';
import { instancesService } from '../../services/instances.service';
import { FCM } from '@ionic-native/fcm';
import { Firebase } from '@ionic-native/firebase';
import * as moment from 'moment';
import { MetricsService } from '../../services/metrics.service';

 
declare var google;
@IonicPage()

@Component({
  selector: 'page-findride',
  templateUrl: 'findride.html'
})
export class FindridePassPage {
 
  @ViewChild('map') mapElement: ElementRef;
  
  map: any;
  markers: any;
  // geofire
  geoquery1:any;
  geoquery2:any;
  geoquery1LMU:any;
  geoquery2LMU:any;
  keyexitedOr:any;
  keyenteredOr:any;
  driverOnNodeDest:any;
  driverOnNodeOr:any;

  // autocomplete/geocoder variables
  autocompleteMyPos: any;
  autocompleteMyDest: any;
  GoogleAutocomplete: any;
  GooglePlaces: any;
  geocoder: any
  autocompleteItems: any;
  autocompleteItems2:any;
  // waypoints variables
  directionsService: any = null;
  directionsDisplay: any = null;
  bounds: any = null;
  myLatLng:any =[];
  waypoints: any[];
  myLatLngDest:any;
  positionDest:any;
  //¿Adonde vas? 
  destinationSelect: any;
  //firebase 
  trip:any;
  // tripIdFirebase = this.AngularFireAuth.auth.currentUser;
  desFirebase:any;
  tripId:any = null;
  orFirebase:any;
  markerDest:any;
  myLatLngOr:any;
  markerGeolocation:any;
  //para acceder al uid en firebase
  //geofire
  geofire1;
  geofire2;
  place:any;
  locationPlace:any ={};
  onTrip:any = false;
  keyTrip:any;

  //variables for geoquery
  geocoordinatesDest:any ={};
  geocoordinatesOr:any ={};
  userInfo:any;
  placeInfo:any;

  //variables for geoquey place
  dbRef;
  geoFire;
  geoqueryU;
  geofireOriginConfirmed:boolean = false;
  geofireDestinationConfirmed:boolean = false;

  userUid=this.AngularFireAuth.auth.currentUser.uid;
  user:any;
  unsubscribe = new Subject;
  token:any;
  geofirePlaceSize:number;
  distanceInMeters:any;

  multipleLocations:boolean;
  zonesToIterate:any;
  cityUser:any;
  companyUser:any;
  usingGeolocation:boolean = false;

  loading:any;
 constructor(public navCtrl: NavController, private MetricsService:MetricsService ,public geolocation: Geolocation,public zone: NgZone, public sendCoordsService: sendCoordsService, private AngularFireAuth: AngularFireAuth, public alertCtrl: AlertController, private geofireService: geofireService, private SignUpService: SignUpService, public modalCtrl: ModalController, private app: App, public afDB: AngularFireDatabase, private TripsService: TripsService, public instanceService: instancesService, private platform: Platform, private fcm: FCM, private firebase: Firebase, public loadingCtrl: LoadingController ) {
  
    this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
    this.geocoder = new google.maps.Geocoder;

    this.autocompleteMyPos = { input: '' };
    this.autocompleteMyDest = { input: '' };

    this.autocompleteItems = [];
    this.autocompleteItems2=[];

    this.directionsService = new google.maps.DirectionsService();
    this.directionsDisplay = new google.maps.DirectionsRenderer({
      suppressMarkers: true,
  });
    this.bounds = new google.maps.LatLngBounds();
    
    this.markers = [];
    // initialize the plugin
  
    console.log(this.SignUpService.userPlace);


    this.afDB.database.ref('allUsers/' + this.userUid).once('value').then((snap)=>{
      this.cityUser = snap.val().city;
      this.companyUser = snap.val().place;
      this.afDB.database.ref('allCities/' + snap.val().city + '/allPlaces/' + snap.val().place).once('value').then((snapshot)=>{
        console.log(snapshot.val().multipleLocations);
        this.zonesToIterate = snapshot.val().zones;
        console.log(this.zonesToIterate);
        
        if(snapshot.val().multipleLocations === true){
          // temporary location until user chooses the right location of their company
          this.SignUpService.userPlace = this.zonesToIterate[0]
          this.multipleLocations = true;
  
          //user get their check sign of verficiation here
          Object.getOwnPropertyNames(this.zonesToIterate).forEach((key)=>{    
          
            if(this.zonesToIterate[key] === 2 || this.zonesToIterate[key] === 3 || this.zonesToIterate[key] === 4 || this.zonesToIterate[key] === 5 || this.zonesToIterate[key] === 6 || this.zonesToIterate[key] === 1 || this.zonesToIterate[key] === 7 || this.zonesToIterate[key] === 8 || this.zonesToIterate[key] === 9 || this.zonesToIterate[key] === 10){
  
            }else{
              this.instanceService.isVerified(this.zonesToIterate[key], this.userUid);
              
            }
          })
  
  
        }else{
          this.SignUpService.userPlace = this.zonesToIterate[0]
          this.multipleLocations = false;
          
          //user get their check sign of verficiation here
          this.instanceService.isVerified(this.SignUpService.userPlace, this.userUid);
  
        }

        //logica de instrucciones
        this.afDB.database.ref(this.SignUpService.userPlace + '/drivers/' + this.userUid ).once('value').then((snapWalkthr)=>{
          if(snapWalkthr.val().shownInstructions === true){
            console.log('ya lo mostre');
            
          }else{
            this.app.getRootNav().push('WalkthroughPage');

            Object.getOwnPropertyNames(this.zonesToIterate).forEach((key)=>{    
          
              if(this.zonesToIterate[key] === 2 || this.zonesToIterate[key] === 3 || this.zonesToIterate[key] === 4 || this.zonesToIterate[key] === 5 || this.zonesToIterate[key] === 6 || this.zonesToIterate[key] === 1 || this.zonesToIterate[key] === 7 || this.zonesToIterate[key] === 8 || this.zonesToIterate[key] === 9 || this.zonesToIterate[key] === 10){
    
              }else{
                this.afDB.database.ref(this.zonesToIterate[key] + '/users/' + this.userUid).update({
                  shownInstructions: true
                })

              }
            })

          }
        })


        
      }).then(()=>{

        this.platform.ready().then(()=>{
          this.token = this.fcm.getToken().then((token)=>{
            console.log('this is the token ' + token);
  
            Object.getOwnPropertyNames(this.zonesToIterate).forEach((key)=>{
              if(this.zonesToIterate[key] === 2 || this.zonesToIterate[key] === 3 || this.zonesToIterate[key] === 4 || this.zonesToIterate[key] === 5 || this.zonesToIterate[key] === 6 || this.zonesToIterate[key] === 1 || this.zonesToIterate[key] === 7 || this.zonesToIterate[key] === 8 || this.zonesToIterate[key] === 9 || this.zonesToIterate[key] === 10){
  
              }else{
                this.afDB.database.ref(this.zonesToIterate[key] + '/users/' + this.userUid + '/devices/').update({
                  token: token
                })
              }   
            })
           
          })
  
          // this.getToken();
      
      })
  
          //search keyTrip
          //REVISAR ESTO CON DANIEL
          console.log(this.zonesToIterate);
          
          Object.getOwnPropertyNames(this.zonesToIterate).forEach((key)=>{
            if(this.zonesToIterate[key] === 2 || this.zonesToIterate[key] === 3 || this.zonesToIterate[key] === 4 || this.zonesToIterate[key] === 5 || this.zonesToIterate[key] === 6 || this.zonesToIterate[key] === 1 || this.zonesToIterate[key] === 7 || this.zonesToIterate[key] === 8 || this.zonesToIterate[key] === 9 || this.zonesToIterate[key] === 10){
  
            }else{
            this.TripsService.getKeyTrip(this.zonesToIterate[key], this.userUid)
              .subscribe(keyTrip=>{
                this.keyTrip =keyTrip;
                console.log('keyTrip es: ' + this.keyTrip)
                //if key its deleted don't show VIAJE EN CURSO  
                if(this.keyTrip === undefined || this.keyTrip === null){
                this.onTrip=false;
                  this.TripsService.eliminateKeyTrip(this.zonesToIterate[key], this.userUid);
                  this.TripsService.eliminatingOnTrip(this.zonesToIterate[key], this.userUid);
                  console.log("llegue adonde era")
                }else{
                  //confirm that trip exist and get it
                  this.SignUpService.userPlace = this.zonesToIterate[key]
                  this.getOnTrip(this.zonesToIterate[key]);
                }
              
              })
            } 
            
        })


        this.SignUpService.getMyInfo(this.userUid, this.SignUpService.userPlace).takeUntil(this.unsubscribe).subscribe(user=>{
          this.user = user;

          console.log(this.SignUpService.userPlace);
          console.log(this.user)
          if(this.user.saveTrip === undefined || this.user.saveTrip === null){
            console.log("AAAAAAAAAAAAAAAAAAAAA")
              }else{
            console.log(this.user.trip)
            
                console.log("me active")
                this.TripsService.eliminatingSaveTrip(this.SignUpService.userPlace,this.userUid);

                this.TripsService.eliminatingOnTrip(this.SignUpService.userPlace, this.userUid);
             
                this.TripsService.eliminateKeyTrip(this.SignUpService.userPlace, this.userUid);
            
                this.TripsService.eliminateAvailableReserves(this.SignUpService.userPlace, this.userUid);
                this.TripsService.eliminateKeyUser(this.SignUpService.userPlace, this.userUid,this.user.trip.keyTrip);

                this.unsubscribe.next();
                this.unsubscribe.complete();
                setTimeout(() => {
                  
                  Object.getOwnPropertyNames(this.zonesToIterate).forEach((key)=>{
                    if(this.zonesToIterate[key] === 2 || this.zonesToIterate[key] === 3 || this.zonesToIterate[key] === 4 || this.zonesToIterate[key] === 5 || this.zonesToIterate[key] === 6 || this.zonesToIterate[key] === 1 || this.zonesToIterate[key] === 7 || this.zonesToIterate[key] === 8 || this.zonesToIterate[key] === 9 || this.zonesToIterate[key] === 10){
  
                    }else{
                      this.TripsService.saveTripOnRecords(this.zonesToIterate[key], this.userUid,this.user.trip);     
                    }
                  });

                this.navCtrl.push('RatetripPage',{trip:this.user.trip})
                this.TripsService.eliminateTrip(this.SignUpService.userPlace, this.userUid);     

                console.log("ME ACTIVEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE")
                }, 3000);

              }     
        })



        // set geofire key of place to avoid asking users to put where they are going
        this.afDB.database.ref('allCities/' + snap.val().city + '/allPlaces/' + snap.val().place).once('value').then(snapGeofirePlace => {
          let objLocations = snapGeofirePlace.val().location;
          
          
          Object.getOwnPropertyNames(objLocations).forEach((key)=>{
            if(objLocations[key] === 1 || objLocations[key] === 2 || objLocations[key] === 3 || objLocations[key] === 4 || objLocations[key] === 5 || objLocations[key] === 6 || objLocations[key] === 7 || objLocations[key] === 8 || objLocations[key] === 9 || objLocations[key] === 10 ){

            }else{
              this.geofireService.setLocationPlace(objLocations[key].zone, "some_key", objLocations[key].lat, objLocations[key].lng);
            }
          })
        })
    })
        


    }).then(()=>{

      // TEST THIS
      this.afDB.database.ref('allCities/' + this.cityUser + '/allPlaces/' + this.companyUser).once('value').then((snapPlace)=>{
        this.geofirePlaceSize = snapPlace.val().geofireSize;
      })
    })


    



  } // END OF CONSTRUCTOR


  async getToken() {

    if (this.platform.is('android')) {
      this.token = await this.firebase.getToken().then((token)=>{
        console.log('this is the token ' + token);
        this.afDB.database.ref(this.SignUpService.userPlace + '/users/' + this.user + '/devices/').update({
          token: token
        })
      })
    }
  
    if (this.platform.is('ios')) {
      this.token = await this.firebase.getToken().then((token)=>{
        console.log('this is the token ' + token);
        this.afDB.database.ref(this.SignUpService.userPlace + '/users/' + this.user + '/devices/').update({
          token: token
        })
      })
      await this.firebase.grantPermission();
    }
  
  }






  getOnTrip(place){
    this.TripsService.getOnTrip(place, this.userUid) 
    .subscribe(onTrip=>{
      this.onTrip =onTrip;
      if(this.onTrip === true){
              this.geofireService.cancelGeofireDest();
              this.geofireService.cancelGeofireOr();
              this.geofireService.cancelGeofireDestLMU();
              this.geofireService.cancelGeofireOrLMU();
      }
      console.log(this.onTrip);
      console.log('ONTRIP')
     
    })
  }

  
  ionViewDidLoad(){
    this.loadMap();
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
      
      this.dragMarkerOr(this.markerGeolocation,this.autocompleteMyPos)
      //to reverse-geocode position
      this.geocodeLatLng(latLng,this.autocompleteMyPos)
 
      
     
      },(err) => {
      console.log(err);    
     });

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
      //render
      if(status === google.maps.DirectionsStatus.OK) {
        this.directionsDisplay.setDirections(response);
      }else{
        alert('Could not display directions due to: ' + status);
      }
      
    });  
    
    
  }


  calculateDistance(positionOr,positionDest){
 
    
    this.distanceInMeters = google.maps.geometry.spherical.computeDistanceBetween(positionOr,positionDest);
    setTimeout(() => {
      console.log('the distance in meters is ' + this.distanceInMeters);
      
    }, 1000);
    
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
        this.myLatLngOr = results[0].geometry.location;
        this.usingGeolocation = false;
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
        console.log(results[0].geometry.location)
        this.autocompleteMyDest.input=[item.description]
        this.dragMarkerDest(this.markerDest,this.autocompleteMyDest)
        this.directionsDisplay.setMap(this.map);
        this.myLatLngDest=results[0].geometry.location
        this.calculateRoute(this.markerGeolocation.position,results[0].geometry.location);
        this.calculateDistance(this.markerGeolocation.position,results[0].geometry.location)
      }
    })
    
  }
////////Markers
clearMarkers(){
    for (var i = 0; i < this.markers.length; i++) {
      console.log(this.markers[i])
      this.markers[i].setMap(null);
    }
    this.markers = [];
  }
  
  
  dragMarkerDest(marker,inputName){
    google.maps.event.addListener(marker, 'dragend',  (evt) => {
      let lat = marker.getPosition().lat()
      let lng = marker.getPosition().lng()
      let latLng = {lat,lng}
     
      this.map.setCenter(latLng);
      this.geocodeLatLng(latLng,inputName)
     this.calculateRoute(this.markerGeolocation.position,latLng);
     console.log(latLng);
     
     this.calculateDistance(this.markerGeolocation.position,
      new google.maps.LatLng({
      lat: latLng.lat, 
      lng: latLng.lng
  }))
  })
  }


  dragMarkerOr(marker,inputName){
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
        this.calculateDistance(new google.maps.LatLng({
          lat: latLng.lat, 
          lng: latLng.lng
      }),this.markerDest.position);
      }
  })
  }


geocodeLatLng(latLng,inputName) {

  this.geocoder.geocode({'location': latLng}, (results, status) => {
    if (status === 'OK') {
      if (results[0]) {
         console.log(results[0].formatted_address)
         inputName.input=[results[0].formatted_address]
      } else {
       alert('No results found');
      }
    } else {
      alert('Geocoder failed due to: ' + status);
    }
                

  });
}  


  listride(){
    this.loading = this.loadingCtrl.create({
      spinner: 'crescent',
      content: `
        <div class="custom-spinner-container">
          <div class="custom-spinner-box"></div>
        </div>`
        });
    this.loading.present();

    console.log(this.myLatLngOr);
    console.log(this.usingGeolocation);
    
  this.afDB.database.ref(this.SignUpService.userPlace + '/users/' + this.userUid + '/blockPayment/').once('value').then((snapBlock)=>{
    if(snapBlock.val() === true){
      let alert = this.alertCtrl.create({
        title: 'Tienes un saldo pendiente por pagar',
        subTitle: 'Para seguir disfrutando de Waypool debes pagar el saldo pendiente de tus viajes pasados, estas perjudicando a varias personas de tu comunidad',
        buttons: [
          {
            text: 'No lo quiero hacer ahora',
            role: 'cancel',
          },
          {
            text: 'Ir a Mi Saldo',
            handler: () => {
              this.app.getRootNav().push('WalletPage');
            }
          }
        ]
      });
      alert.present();
    }else{
      if(this.user.trips){
        if(this.user.onTrip == true){
          let alert = this.alertCtrl.create({
            title: 'Estas actualmente en un viaje',
            subTitle: 'No puedes pedir otro viaje ya que en este momento estas en un viaje',
            buttons: ['OK']
          });
          alert.present();
        }else{
          try {
            this.desFirebase=this.autocompleteMyDest.input
            this.orFirebase=this.autocompleteMyPos.input
            console.log(this.desFirebase[0]);
          if(this.autocompleteMyDest.input ==''|| this.autocompleteMyPos.input==''){
                this.presentAlert('No tienes toda la informacion','Por favor asegura que tu origen y destino sean correctos','Ok');
                this.clearMarkers();
                this.directionsDisplay.setDirections({routes: []});
                // AQUI
               } else {
                
              
                this.afDB.database.ref('allCities/' + this.cityUser + '/allPlaces/' + this.companyUser + '/location').once('value').then((snap)=>{

                  let objLocations = snap.val();
                  Object.getOwnPropertyNames(objLocations).forEach((keyLocations)=>{
                    if(objLocations[keyLocations] === 1 || objLocations[keyLocations] === 2 ||  objLocations[keyLocations] === 3 || objLocations[keyLocations] === 4 || objLocations[keyLocations] === 5 || objLocations[keyLocations] === 6 || objLocations[keyLocations] === 7 || objLocations[keyLocations] === 8 || objLocations[keyLocations] === 9 || objLocations[keyLocations] === 10){
  
                    }else{
  
                      ///// GEOFIREPLACE WITH DEST ACTIVATED 
                  this.setGeofirePlaceWithDest(objLocations[keyLocations].zone ,this.geofirePlaceSize, this.myLatLngDest.lat(), this.myLatLngDest.lng(), this.userUid);
  
                  
                  this.geoqueryU.on("key_entered", function(key){
                    this.geofireOriginConfirmed = true;
                    this.SignUpService.userPlace = objLocations[keyLocations].zone;
                    this.afDB.database.ref(objLocations[keyLocations].zone + '/users/' + this.userUid ).update({
                      geofireOrigin: true
                    }).then(()=>{
                      this.afDB.database.ref(objLocations[keyLocations].zone + '/users/'+ this.userUid +'/trips').update({
                        origin: this.orFirebase,
                        destination: this.desFirebase,
                        distanceToGoInKM: this.distanceInMeters/1000          
                      }).then(()=>{
  
                          // turn geofire On
                          if(this.user.onTrip === true){
                            console.log('geofireOr hasnt been activated due ontrip')
                          }else{ 
                            console.log('AQUI ESTA EL ERROR 1');
                            if(this.usingGeolocation === true){
                              this.setGeofireOr(objLocations[keyLocations].zone, 2, this.myLatLngOr.lat, this.myLatLngOr.lng, this.userUid)
                              this.setGeofireOrLMU(objLocations[keyLocations].zone, 2, this.myLatLngOr.lat, this.myLatLngOr.lng, this.userUid)
                              console.log('executed geofire Or'); 
                            }else{
                              this.setGeofireOr(objLocations[keyLocations].zone, 2, this.myLatLngOr.lat(), this.myLatLngOr.lng(), this.userUid)
                              this.setGeofireOrLMU(objLocations[keyLocations].zone, 2, this.myLatLngOr.lat(), this.myLatLngOr.lng(), this.userUid)
                              console.log('executed geofire Or');  
                            }
                                       
                          } 
                     
                    })
                    console.log('directions set')
                    })
                    console.log(key + ' detected')
                  }.bind(this))
  
  
     
                   
                   ///// GEOFIREPLACE WITH OR ACTIVATED 
                  if(this.usingGeolocation === true){
                    this.setGeofirePlaceWithOr(objLocations[keyLocations].zone ,this.geofirePlaceSize, this.myLatLngOr.lat, this.myLatLngOr.lng, this.userUid);
                  }else{
                    this.setGeofirePlaceWithOr(objLocations[keyLocations].zone ,this.geofirePlaceSize, this.myLatLngOr.lat(), this.myLatLngOr.lng(), this.userUid);
                  }
  
  
                  this.geoqueryU.on("key_entered", function(key){
                    this.geofireDestinationConfirmed = true;
                    this.SignUpService.userPlace = objLocations[keyLocations].zone;
                    this.afDB.database.ref(objLocations[keyLocations].zone + '/users/' + this.userUid ).update({
                      geofireDestination: true
                    }).then(()=>{
                      this.afDB.database.ref(objLocations[keyLocations].zone + '/users/'+ this.userUid +'/trips').update({
                        origin: this.orFirebase,
                        destination: this.desFirebase,
                        distanceToGoInKM: this.distanceInMeters/1000          
                      }).then(()=>{
  
                          // turn geofire On
                          if(this.user.onTrip === true){
                            console.log('geofireOr hasnt been activated due ontrip')
                          }else{ 
                            console.log('AQUI ESTA EL ERROR 2');
                            this.setGeofireDest(objLocations[keyLocations].zone, 2, this.myLatLngDest.lat(), this.myLatLngDest.lng(), this.userUid)
                            this.setGeofireDestLMU(objLocations[keyLocations].zone, 2, this.myLatLngDest.lat(), this.myLatLngDest.lng(), this.userUid)
                            console.log('executed geofire Dest');                            
                            
                          } 
                    
                        })
  
                      console.log('directions set')
                      })
                      console.log(key + ' detected')
                    }.bind(this)) 

                   // si no hay nada disponible
                    setTimeout(() => {
                      if(this.geofireDestinationConfirmed === false && this.geofireOriginConfirmed === false){
                        moment.locale('es'); //to make the date be in spanish  
                        let today = moment().format('MMMM Do , h:mm:ss a'); //set actual date
                        console.log(today)
                        // this.MetricsService.createdReserves(this.SignUpService.userPlace,this.userUid,today,this.desFirebase,this.orFirebase);
                        this.loading.dismiss();
                        this.app.getRootNav().push('ListridePage');
                        console.log('esto debe ser false y es: ' + this.geofireDestinationConfirmed);
                        console.log('esto debe ser false y es: ' + this.geofireOriginConfirmed); 
                        console.log("se ejecuto")
                      }
                    }, 10000);
                  }
  
                })
  
              })
     
          }
       
        }catch(error) {
            console.log("soy yo")
            if(this.geofire2 === null || this.geofire2 === undefined ){
              //this is to tell the user to select a place before publishing a trip
              this.presentAlert('Información Incompleta','no puedes publicar un viaje sin antes seleccionar un lugar de la lista.','Ok') 
            }else {
              this.presentAlert('Hay un error en la aplicación','Lo sentimos, por favor para solucionar este problema porfavor envianos un correo a soporte@waypool.com,¡lo solucionaremos!.','Ok') 
    
            }
            }
      }
    }
    else{
        try {
          this.desFirebase=this.autocompleteMyDest.input
          this.orFirebase=this.autocompleteMyPos.input
          console.log(this.desFirebase[0]);
        if(this.autocompleteMyDest.input ==''|| this.autocompleteMyPos.input==''){
              this.presentAlert('No tienes toda la informacion','Por favor asegura que tu origen y destino sean correctos','Ok');
              this.clearMarkers();
              this.directionsDisplay.setDirections({routes: []});
              // AQUI
             } else {  



              this.afDB.database.ref('allCities/' + this.cityUser + '/allPlaces/' + this.companyUser + '/location').once('value').then((snap)=>{

                let objLocations = snap.val();
                Object.getOwnPropertyNames(objLocations).forEach((keyLocations)=>{
                  if(objLocations[keyLocations] === 1 || objLocations[keyLocations] === 2 ||  objLocations[keyLocations] === 3 || objLocations[keyLocations] === 4 || objLocations[keyLocations] === 5 || objLocations[keyLocations] === 6 || objLocations[keyLocations] === 7 || objLocations[keyLocations] === 8 || objLocations[keyLocations] === 9 || objLocations[keyLocations] === 10){

                  }else{

                      ///// GEOFIREPLACE WITH DEST ACTIVATED 
                  this.setGeofirePlaceWithDest(objLocations[keyLocations].zone ,this.geofirePlaceSize, this.myLatLngDest.lat(), this.myLatLngDest.lng(), this.userUid);
  
                  
                  this.geoqueryU.on("key_entered", function(key){
                    this.geofireOriginConfirmed = true;
                    this.SignUpService.userPlace = objLocations[keyLocations].zone;
                    this.afDB.database.ref(objLocations[keyLocations].zone + '/users/' + this.userUid ).update({
                      geofireOrigin: true
                    }).then(()=>{
                      this.afDB.database.ref(objLocations[keyLocations].zone + '/users/'+ this.userUid +'/trips').update({
                        origin: this.orFirebase,
                        destination: this.desFirebase,
                        distanceToGoInKM: this.distanceInMeters/1000          
                      }).then(()=>{
  
                          // turn geofire On
                          if(this.user.onTrip === true){
                            console.log('geofireOr hasnt been activated due ontrip')
                          }else{ 
                            console.log('AQUI ESTA EL ERROR 1');
                            if(this.usingGeolocation === true){
                              this.setGeofireOr(objLocations[keyLocations].zone, 2, this.myLatLngOr.lat, this.myLatLngOr.lng, this.userUid)
                              this.setGeofireOrLMU(objLocations[keyLocations].zone, 2, this.myLatLngOr.lat, this.myLatLngOr.lng, this.userUid)
                              console.log('executed geofire Or'); 
                            }else{
                              this.setGeofireOr(objLocations[keyLocations].zone, 2, this.myLatLngOr.lat(), this.myLatLngOr.lng(), this.userUid)
                              this.setGeofireOrLMU(objLocations[keyLocations].zone, 2, this.myLatLngOr.lat(), this.myLatLngOr.lng(), this.userUid)
                              console.log('executed geofire Or');  
                            }
                                       
                          } 
                     
                    })
                    console.log('directions set')
                    })
                    console.log(key + ' detected')
                  }.bind(this))
  
  
                  
                   

                      ///// GEOFIREPLACE WITH OR ACTIVATED 
                      if(this.usingGeolocation === true){
                        this.setGeofirePlaceWithOr(objLocations[keyLocations].zone ,this.geofirePlaceSize, this.myLatLngOr.lat, this.myLatLngOr.lng, this.userUid);
                      }else{
                        this.setGeofirePlaceWithOr(objLocations[keyLocations].zone ,this.geofirePlaceSize, this.myLatLngOr.lat(), this.myLatLngOr.lng(), this.userUid);
                      }
      
      
                      this.geoqueryU.on("key_entered", function(key){
                        this.geofireDestinationConfirmed = true;
                        this.SignUpService.userPlace = objLocations[keyLocations].zone;
                        this.afDB.database.ref(objLocations[keyLocations].zone + '/users/' + this.userUid ).update({
                          geofireDestination: true
                        }).then(()=>{
                          this.afDB.database.ref(objLocations[keyLocations].zone + '/users/'+ this.userUid +'/trips').update({
                            origin: this.orFirebase,
                            destination: this.desFirebase,
                            distanceToGoInKM: this.distanceInMeters/1000          
                          }).then(()=>{
      
                              // turn geofire On
                              if(this.user.onTrip === true){
                                console.log('geofireOr hasnt been activated due ontrip')
                              }else{ 
                                console.log('AQUI ESTA EL ERROR 2');
                                this.setGeofireDest(objLocations[keyLocations].zone, 2, this.myLatLngDest.lat(), this.myLatLngDest.lng(), this.userUid)
                                this.setGeofireDestLMU(objLocations[keyLocations].zone, 2, this.myLatLngDest.lat(), this.myLatLngDest.lng(), this.userUid)
                                console.log('executed geofire Dest');                            
                                
                              } 
                        
                            })
      
                          console.log('directions set')
                          })
                          console.log(key + ' detected')
                        }.bind(this)) 

                  
                        // si no hay nada disponible
                        setTimeout(() => {
                          if(this.geofireDestinationConfirmed === false && this.geofireOriginConfirmed === false){
                            moment.locale('es'); //to make the date be in spanish  
                            let today = moment().format('MMMM Do , h:mm:ss a'); //set actual date
                            console.log(today)
                            // this.MetricsService.createdReserves(this.SignUpService.userPlace,this.userUid,today,this.desFirebase,this.orFirebase);
                            this.loading.dismiss();
                            this.app.getRootNav().push('ListridePage');
                            console.log('esto debe ser false y es: ' + this.geofireDestinationConfirmed);
                            console.log('esto debe ser false y es: ' + this.geofireOriginConfirmed); 
                            console.log("se ejecuto")
                          
                          }
                            
                        }, 10000);

                  }

                })

              })

          }
    
       }catch(error) {
          console.log("soy yo")
    
          if(this.geofire2 === null || this.geofire2=== undefined ){
            //this is to tell the user to select a place before publishing a trip
            this.presentAlert('Información Incompleta','no puedes publicar un viaje sin antes seleccionar un lugar de la lista.','Ok') 
          }else {
            this.presentAlert('Hay un error en la aplicación','Lo sentimos, por favor para solucionar este problema porfavor envianos un correo a soporte@waypool.com,¡lo solucionaremos!.','Ok') 
    
          }
          }
      }
    }
  })


  
}



    presentAlert(title,text,button) {
      let alert = this.alertCtrl.create({
        title: title,
        subTitle: text,
        buttons: [button]
      });
      alert.present();
    }
    
  goToMyReserves(){
    this.app.getRootNav().push('ReservetripPage');
  }


  goToTrip(){
      // go to trip      
      if (this.onTrip === true) {
            console.log('DISPARADOR')
            let modal = this.modalCtrl.create('MyridePage');                      
            modal.present();
          }else{
            console.log("es undefined");
          }
           
      } 


        // set geoquery that determines if the person is in place
    setGeofirePlaceWithDest(place, radius:number, lat, lng, userId):void{ 
      
      this.dbRef = this.afDB.database.ref(place + '/geofirePlace/' );
      this.geoFire = new GeoFire(this.dbRef); 

      this.geoqueryU = this.geoFire.query({
        center: [lat, lng],
        radius: radius
      })

    console.log('geoquery place added');
    }


        // set geoquery that determines if the person is in place
        setGeofirePlaceWithOr(place, radius:number, lat, lng, userId):void{ 
      
          this.dbRef = this.afDB.database.ref(place + '/geofirePlace/' );
          this.geoFire = new GeoFire(this.dbRef); 
    
          this.geoqueryU = this.geoFire.query({
            center: [lat, lng],
            radius: radius
          })
    
        console.log('geoquery place added');
        }

    ionViewDidLeave(){
      this.unsubscribe.next();
       this.unsubscribe.complete();
    }



    setGeofireOr(place, radius:number, lat, lng, userId ):void{ 
      this.dbRef = this.afDB.database.ref(place + '/geofireOr/' );
      this.geoFire = new GeoFire(this.dbRef); 
    
      this.geoquery2 = this.geoFire.query({
        center: [lat, lng],
        radius: radius
      })
     
        this.keyEnteredOr( userId, place );
        this.keyExitedOr( userId, place );
      
      
    
      console.log('geoquery or added');
    
    
    }


    keyEnteredOr( userId, place ){
      this.keyenteredOr = this.geoquery2.on("key_entered", function(key, location, distance){
       console.log(key);
  
        this.afDB.database.ref(place + '/users/' + userId + '/availableReserves/' + key).update({
        keyReserve: key
       }).then(()=>{
         //get driverId from geofireOr node
         
          return this.afDB.database.ref(place + '/geofireOr/'+ key).once('value').then((snap) => {
              this.driverOnNodeOr = snap.val();
  
              this.afDB.database.ref(place + '/users/' + userId + '/availableReserves/' + key).update({
                  driverId: this.driverOnNodeOr.driverId
      
              })  
          })
  
       }).then(()=>{
        
        moment.locale('es'); //to make the date be in spanish  
        let today = moment().format('MMMM Do , h:mm:ss a'); //set actual date
        console.log(today)
        // this.MetricsService.createdReserves(this.SignUpService.userPlace,this.userUid,today,this.desFirebase,this.orFirebase);
        this.loading.dismiss();
        this.app.getRootNav().push('ListridePage');
        console.log('esto debe ser false y es: ' + this.geofireDestinationConfirmed);
        console.log('esto debe ser true y es: ' + this.geofireOriginConfirmed); 
        console.log("se ejecuto")

       })
  
  
           
     }.bind(this))
    }
  
  
    
    keyExitedOr( userId, place ){
     
     this.keyexitedOr = this.geoquery2.on("key_exited", function(key){
       this.afDB.database.ref(place + '/users/' + userId + '/availableReserves/' + key).remove()
     }.bind(this))
    }




    setGeofireOrLMU(place, radius:number, lat, lng, userId):void{ 
      this.dbRef = this.afDB.database.ref(place + '/geofireOrTrip/' );
      this.geoFire = new GeoFire(this.dbRef); 
    
      this.geoquery2LMU = this.geoFire.query({
        center: [lat, lng],
        radius: radius
      })
    
      this.keyEnteredOrLMU( userId, place );
      this.keyExitedOrLMU( userId, place );
    
      console.log('geoquery or added');   
    }



    keyEnteredOrLMU( userId, place ){
      this.geoquery2LMU.on( "key_entered", function(key, location, distance){
       console.log(key);
  
        this.afDB.database.ref(place + '/users/' + userId + '/availableReserves/' + key).update({
        keyReserve: key,
        LMU: true
       }).then(()=>{
         //get driverId from geofireOr node
          return this.afDB.database.ref(place + '/geofireOrTrip/'+ key).once('value').then((snap) => {
              this.driverOnNodeOr = snap.val();
  
              this.afDB.database.ref(place + '/users/' + userId + '/availableReserves/' + key).update({
                  driverId: this.driverOnNodeOr.driverId
      
              })  
          })
       }).then(()=>{

          moment.locale('es'); //to make the date be in spanish  
          let today = moment().format('MMMM Do , h:mm:ss a'); //set actual date
          console.log(today)
          // this.MetricsService.createdReserves(this.SignUpService.userPlace,this.userUid,today,this.desFirebase,this.orFirebase);
          this.loading.dismiss();
          this.app.getRootNav().push('ListridePage');
          console.log('esto debe ser false y es: ' + this.geofireDestinationConfirmed);
          console.log('esto debe ser true y es: ' + this.geofireOriginConfirmed); 
          console.log("se ejecuto")

       })
           
     }.bind(this))
    }
    
    
    keyExitedOrLMU( userId, place ){
     
     this.geoquery2LMU.on("key_exited", function(key){
       this.afDB.database.ref(place + '/users/' + userId + '/availableReserves/' + key).remove()
     }.bind(this))
    }



    setGeofireDest(place, radius:number, lat, lng, userId):void{ 
      this.dbRef = this.afDB.database.ref(place + '/geofireDest/' );
      this.geoFire = new GeoFire(this.dbRef); 
    
      this.geoquery1 = this.geoFire.query({
        center: [lat, lng],
        radius: radius
      })
    
      
      this.keyEnteredDest( userId, place);
      this.keyExitedDest(userId, place);
    
    console.log('geoquery dest added');
    }



    keyEnteredDest( userId, place ){
      this.geoquery1.on("key_entered", function(key, location, distance){
       console.log(key);
  
      //  this.afDB.list(place + '/geofireDest/'+ key).valueChanges().subscribe((driverOnNode)=>{
      //     this.driverOnNodeDest = driverOnNode;
      // })
  
         this.afDB.database.ref(place + '/users/' + userId + '/availableReserves/' + key).update({
          keyReserve: key
         }).then(()=> {
             return this.afDB.database.ref(place + '/geofireDest/'+ key).once('value').then((snap) => {
              this.driverOnNodeDest = snap.val();
  
              this.afDB.database.ref(place + '/users/' + userId + '/availableReserves/' + key).update({
                  driverId: this.driverOnNodeDest.driverId
      
              })  
          })
         }).then(()=>{

          moment.locale('es'); //to make the date be in spanish  
          let today = moment().format('MMMM Do , h:mm:ss a'); //set actual date
          console.log(today)
          // this.MetricsService.createdReserves(this.SignUpService.userPlace,this.userUid,today,this.desFirebase,this.orFirebase);
          this.loading.dismiss();
          this.app.getRootNav().push('ListridePage');
          console.log('esto debe ser true y es: ' + this.geofireDestinationConfirmed);
          console.log('esto debe ser false y es: ' + this.geofireOriginConfirmed); 
          console.log("se ejecuto")

       })
         console.log('keyentered here');
       
     }.bind(this))
   }
   
   
   keyExitedDest(userId, place){
     
     this.geoquery1.on("key_exited", function(key){
       this.afDB.database.ref(place + '/users/' + userId + '/availableReserves/' + key).remove()
     }.bind(this))
   }
    



   setGeofireDestLMU(place, radius:number, lat, lng, userId):void{ 
    this.dbRef = this.afDB.database.ref(place + '/geofireDestTrip/' );
    this.geoFire = new GeoFire(this.dbRef); 
  
    this.geoquery1LMU = this.geoFire.query({
      center: [lat, lng],
      radius: radius
    })
  
    this.keyEnteredDestLMU( userId, place);
    this.keyExitedDestLMU( userId, place);
  
    console.log('geoquery Dest added');
  
  }



  keyEnteredDestLMU( userId, place){
    this.geoquery1LMU.on("key_entered", function(key, location, distance){
     console.log(key);

      this.afDB.database.ref(place + '/users/' + userId + '/availableReserves/' + key).update({
      keyReserve: key,
      LMU: true
     }).then(()=>{
       //get driverId from geofireOr node
       return this.afDB.database.ref(place + '/geofireDestTrip/'+ key).once('value').then((snap) => {
        this.driverOnNodeDest = snap.val();

        this.afDB.database.ref(place + '/users/' + userId + '/availableReserves/' + key).update({
            driverId: this.driverOnNodeDest.driverId

            })  
        })
     }).then(()=>{

        moment.locale('es'); //to make the date be in spanish  
        let today = moment().format('MMMM Do , h:mm:ss a'); //set actual date
        console.log(today)
        // this.MetricsService.createdReserves(this.SignUpService.userPlace,this.userUid,today,this.desFirebase,this.orFirebase);
        this.loading.dismiss();
        this.app.getRootNav().push('ListridePage');
        console.log('esto debe ser true y es: ' + this.geofireDestinationConfirmed);
        console.log('esto debe ser false y es: ' + this.geofireOriginConfirmed); 
        console.log("se ejecuto")
     })     
   }.bind(this))
  }
  
  
  keyExitedDestLMU( userId, place){
   
   this.geoquery1LMU.on("key_exited", function(key){
     this.afDB.database.ref(place + '/users/' + userId + '/availableReserves/' + key).remove()
   }.bind(this))
  }
      

}
   
    
  
  



