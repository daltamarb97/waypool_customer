import { Component, ViewChild, ElementRef,NgZone } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { NavController, Platform, ViewController, AlertController, ModalController, IonicPage, App, ToastController, LoadingController, NavParams } from 'ionic-angular';
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

 
declare var google;
@IonicPage()

@Component({
  selector: 'page-bikemode',
  templateUrl: 'bikemode.html'
})
export class BikeModePage {
 
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
  keyDetectedInGeofireOrigin:boolean = false;
  keyDetectedInGeofireDestination:boolean = false;
  thereAreReserves:boolean;
  saveTrip:any;
 constructor(public navCtrl: NavController,public navParams: NavParams  ,public geolocation: Geolocation,public zone: NgZone, public sendCoordsService: sendCoordsService, private AngularFireAuth: AngularFireAuth, public alertCtrl: AlertController, private geofireService: geofireService, private SignUpService: SignUpService, public modalCtrl: ModalController, private app: App, public afDB: AngularFireDatabase, private TripsService: TripsService, public instanceService: instancesService, private platform: Platform, private fcm: FCM, private firebase: Firebase, public loadingCtrl: LoadingController, public viewCtril: ViewController ) {
   this.user= this.navParams.get('user');

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
  
    // console.log(this.SignUpService.userPlace);

      /// logica keyReserves para myreserves

    

    



  } // END OF CONSTRUCTOR










   
  // }
  
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
         icon: {         url: "assets/imgs/bicimarker.png",
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
          icon: {         url: "assets/imgs/bicimarker.png",
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
    
  this.afDB.database.ref( '/usersTest/' + this.userUid ).once('value').then((snapBlock)=>{
    if(snapBlock.val().blockPayment === true){
      this.loading.dismiss();
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
      this.afDB.database.ref('/usersTest/'+ this.userUid).once('value').then((snap)=>{
        let user = snap.val();
        console.log(user);
        
       // check if user is on trip
          if(user.onTrip == true){
            this.loading.dismiss();
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
                this.loading.dismiss();
                  this.presentAlert('No tienes toda la informacion','Por favor asegura que tu origen y destino sean correctos','Ok');
                  this.clearMarkers();
                  this.directionsDisplay.setDirections({routes: []});
                } else {
                  //starts trip in bike-mode
                
                  this.navCtrl.push('TripbikePage', {user:user,origin:this.autocompleteMyPos.input,destination:this.autocompleteMyDest.input, orCoords:this.myLatLngOr,destCoords:this.myLatLngDest,distance:this.distanceInMeters});
                
                  this.loading.dismiss();

                }
                
            //      
      
        }catch(error) {
          
        }
    }
        })
      
      
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

}
   
    
  
  



