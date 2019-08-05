import { Component, ViewChild, ElementRef,NgZone } from '@angular/core';

import { ListridePage } from '../listride/listride';


import { Geolocation } from '@ionic-native/geolocation';
import { NavController, Platform, ViewController, AlertController, ModalController, IonicPage, App } from 'ionic-angular';
import { sendCoordsService } from '../../services/sendCoords.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { ConfirmNotePage } from '../confirmnote/confirmnote';
import { geofireService } from '../../services/geoFire.service';
import { SignUpService } from '../../services/signup.services';
import * as firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import * as GeoFire from 'geofire';
import { identifierModuleUrl } from '@angular/compiler';
import { environmentService } from '../../services/environment.service';




 
declare var google;
@IonicPage()

@Component({
  selector: 'page-findride',
  templateUrl: 'findride.html'
})
export class FindridePage {
 
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
  trip:any = {};
  // tripIdFirebase = this.AngularFireAuth.auth.currentUser;
  desFirebase:any;
  tripId:any = null;
  orFirebase:any;
  markerDest:any;
  markerGeolocation:any;
  //para acceder al uid en firebase
  user=this.AngularFireAuth.auth.currentUser.uid;
  userInfoForOntrip:any;
  //geofire
  geofire1;
  geofire2;
  university:any;
  locationUniversity:any ={};

  //variables for geoquery
  geocoordinatesDest:any ={};
  geocoordinatesOr:any ={};
  userInfo:any;

  //variables for geoquey university
  dbRef;
  geoFire;
  geoqueryU;
  geofireOriginConfirmed:boolean = false;


  driverOnNodeOr:any;
 constructor(public navCtrl: NavController, public geolocation: Geolocation,public zone: NgZone, public sendCoordsService: sendCoordsService, private AngularFireAuth: AngularFireAuth, public alertCtrl: AlertController, private geofireService: geofireService, private SignUpService: SignUpService, public modalCtrl: ModalController, private app: App, public afDB: AngularFireDatabase, private environmentService: environmentService) {
  
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

    

  }
 
  ionViewDidLoad(){
    
   if(this.SignUpService.userUniversity == undefined){
    let modal = this.modalCtrl.create('ConfirmUniversityPage');
    modal.onDidDismiss(readyToStart => {
      if(readyToStart){
        // set geofire key of university to avoid asking users to put where they are going
        this.geofireService.getLocationUniversity(this.SignUpService.userUniversity).subscribe(university=>{
            this.university = university;
            this.locationUniversity = this.university.location;
            this.geofireService.setLocationUniversity(this.SignUpService.userUniversity, "some_key", this.locationUniversity.lat, this.locationUniversity.lng);
          })

          this.SignUpService.getMyInfo(this.user, this.SignUpService.userUniversity).subscribe(user=>{
            this.userInfoForOntrip = user;
          })
      }
    })
    modal.present();
  }
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
  if(this.userInfoForOntrip.trips){
    if(this.userInfoForOntrip.trips.onTrip == true){
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
         
             //turn on geoquery university to determine wether the user is in university
        this.setGeofireUniversity(this.SignUpService.userUniversity ,0.56, this.myLatLngDest.lat(), this.myLatLngDest.lng(), this.user);
      


        // test: geoqueryU on listride() of findride.ts
        this.geoqueryU.on("key_entered", function(key){
            this.afDB.database.ref(this.SignUpService.userUniversity + '/users/'+ this.user +'/trips').update({
              origin: this.orFirebase,
              destination: this.desFirebase        
          }).then(()=>{
            this.geocoder.geocode({'address': this.orFirebase[0]}, (results, status)=>{
              if(status==='OK'){
                this.geocoordinatesOr={
                  lat:results[0].geometry.location.lat(),
                  lng: results[0].geometry.location.lng()
                }
              }
                  // turn geofire On
                this.geofireService.setGeofireOr(this.SignUpService.userUniversity, 2, this.geocoordinatesOr.lat, this.geocoordinatesOr.lng, this.user)
                this.geofireService.setGeofireOrLMU(this.SignUpService.userUniversity, 2, this.geocoordinatesOr.lat, this.geocoordinatesOr.lng, this.user)
                console.log('executed geofire Or');  
              })
                this.geofireOriginConfirmed = true;
           
          })
          console.log(key + ' detected')
        }.bind(this))

        setTimeout(()=>{
          if(!this.geofireOriginConfirmed == true){
            this.geocoderDestinationCase();

          }else{
            this.geofireOriginConfirmed = false;
            console.log('ORIGIN HAS BEEN EXECUTED');
          }
        },1500)
   
        this.goListRide();
          
      }
 
    }
      catch(error) {
        console.log(error)
        this.presentAlert('Error en la aplicación','Lo sentimos, por favor para solucionar este problema porfavor envianos un correo a soporte@waypool.com,¡lo solucionaremos!.','Ok') 
        }
    }
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
       
              //turn on geoquery university to determine wether the user is in university
        this.setGeofireUniversity(this.SignUpService.userUniversity ,0.56, this.myLatLngDest.lat(), this.myLatLngDest.lng(), this.user);
      


        // test: geoqueryU on listride() of findride.ts
        this.geoqueryU.on("key_entered", function(key){
          this.afDB.database.ref(this.SignUpService.userUniversity + '/users/' + this.user ).update({
            geofireOrigin: true
          }).then(()=>{
            this.afDB.database.ref(this.SignUpService.userUniversity + '/users/'+ this.user +'/trips').update({
              origin: this.orFirebase,
              destination: this.desFirebase        
          }).then(()=>{
              this.geocoder.geocode({'address': this.orFirebase[0]}, (results, status)=>{
                if(status==='OK'){
                  this.geocoordinatesOr={
                    lat:results[0].geometry.location.lat(),
                    lng: results[0].geometry.location.lng()
                  }
                }
                    // turn geofire On
                  this.geofireService.setGeofireOr(this.SignUpService.userUniversity,  2, this.geocoordinatesOr.lat, this.geocoordinatesOr.lng, this.user)
                  this.geofireService.setGeofireOrLMU(this.SignUpService.userUniversity, 2, this.geocoordinatesOr.lat, this.geocoordinatesOr.lng, this.user)
                  console.log('executed geofire Or');          
                })

                this.geofireOriginConfirmed = true;
           
          })
          console.log('directions set')
          })
          console.log(key + ' detected')
        }.bind(this))

        setTimeout(()=>{
          if(!this.geofireOriginConfirmed == true){
            this.geocoderDestinationCase();

          }else{
            this.geofireOriginConfirmed = false;
          }
        },1000)
   
        this.goListRide();
        }

       }
    catch(error) {
      console.log(error)
      this.presentAlert('Error en la aplicación','Lo sentimos, por favor para solucionar este problema porfavor envianos un correo a soporte@waypool.com,¡lo solucionaremos!.','Ok') 
      }
  }
  
}

    geocoderDestinationCase(){
              this.geocoder.geocode({'address': this.desFirebase[0]}, (results, status)=>{
                if(status==='OK'){
                  this.geocoordinatesDest={
                    lat:results[0].geometry.location.lat(),
                    lng: results[0].geometry.location.lng()
                  }
                }
                    // turn geofire On
                  this.geofireService.setGeofireDest(this.SignUpService.userUniversity , 2, this.geocoordinatesDest.lat, this.geocoordinatesDest.lng, this.user);
                  this.geofireService.setGeofireDestLMU(this.SignUpService.userUniversity ,2, this.geocoordinatesDest.lat, this.geocoordinatesDest.lng, this.user);
                  console.log('executed geofire Dest');  
                          
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
  
    goListRide(){
      let modal = this.modalCtrl.create('ConfirmNotePage')
      modal.onDidDismiss(accepted => {
        if(accepted){
          this.app.getRootNav().push('ListridePage');
        }
      })
   modal.present();
  }  

    // set geoquery that determines if the person is in university
setGeofireUniversity(university, radius:number, lat, lng, userId):void{ 
  
  this.dbRef = this.afDB.database.ref(university + '/geofireUniversity/' );
  this.geoFire = new GeoFire(this.dbRef); 

  this.geoqueryU = this.geoFire.query({
    center: [lat, lng],
    radius: radius
  })

console.log('geoquery university added');
}


}
  



