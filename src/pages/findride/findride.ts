import { Component, ViewChild, ElementRef,NgZone } from '@angular/core';

import { ListridePage } from '../listride/listride';


import { Geolocation } from '@ionic-native/geolocation';
import { NavController, Platform, ViewController, AlertController, ModalController } from 'ionic-angular';
import { sendCoordsService } from '../../services/sendCoords.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { ConfirmNotePage } from '../confirmnote/confirmnote';
import { geofireService } from '../../services/geoFire.service';
import { SignUpService } from '../../services/signup.services';




 
declare var google;

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
  userInfo=this.AngularFireAuth.auth.currentUser;
  //geofire
  geofire1;
  geofire2;

  constructor(public navCtrl: NavController, public geolocation: Geolocation,public zone: NgZone, public sendCoordsService: sendCoordsService, private AngularFireAuth: AngularFireAuth, public alertCtrl: AlertController, private geofireService: geofireService, private SignUpService: SignUpService, public modalCtrl: ModalController) {
    
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
        draggable:true
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
  
    this.geocoder.geocode({'placeId': item.place_id}, (results, status) => {
      if(status === 'OK' && results[0]){
        
        // let position = {
        //     lat: results[0].geometry.location.lat,
        //     lng: results[0].geometry.location.lng
        // };
          this.markerGeolocation = new google.maps.Marker({
          position: results[0].geometry.location,
          map: this.map,
          draggable: true
        });
        this.dragMarkerOr(this.markerGeolocation,this.autocompleteMyPos)
        this.markers.push( this.markerGeolocation);
        this.map.setCenter(results[0].geometry.location);
        this.autocompleteMyPos.input=[item.description]
  
      }
    })
    
    
  }
  
    ////select result of my destination searchbar
  
  selectSearchResultMyDest(item){
    this.autocompleteItems2=[];
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
          draggable:true       
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
    // TO DO: IF  (GEOPOSITION !== POSITIONDEST){
//      NO PERMITIR VIAJE , ES UNA IDEA PERO NO ESTOY 100% DE ACUERDO
    //}
    
    try {
      this.desFirebase=this.autocompleteMyDest.input
      this.orFirebase=this.autocompleteMyPos.input
      console.log(this.desFirebase[0]);

    // intento para hacer que cuando origen y destino sean iguales, no deje pasar a la siguiente vista
    // if ( this.desFirebase == this.orFirebase){
    //   this.presentAlert('UUUUUUUUUUUUUUUU','u','u');
    //  } else {
    //    alert('UUUUUU')
    //  }
    if(this.autocompleteMyDest.input ==''|| this.autocompleteMyPos.input==''){
          this.presentAlert('No tienes toda la informacion','Por favor asegura que tu origen y destino sean correctos','Ok');
          this.clearMarkers();
          this.directionsDisplay.setDirections({routes: []});
          // AQUI
         } else {
       
          this.sendCoordsService.pushCoordinatesUsers(this.user, this.desFirebase, this.orFirebase);
          
          this.geofire1 = this.myLatLng;
          this.geofire2 = {
          lat: this.myLatLngDest.lat(),
          lng: this.myLatLngDest.lng()
        };

          this.confirmNote(this.geofire1, this.geofire2);
         

          // this.geofireService.setLocationGeofire( this.user, this.myLatLng.lat, this.myLatLng.lng);

          // this.geofireService.updateInfoGeofire(this.user);
          
         }
      //TO-DO:1. SI LA PERSONA NO HA COLOCADO UNIVERSIDAD EN ALGUNA DE LAS DOS AUTOCOMPLETADO NO DEJE PASAR
      // SI LA PERSONA NO SELECCIONA UN LUGAR NO DEJE PASAR 
       }
    catch(error) {
      console.log(error)
      this.presentAlert('Error en la aplicación','Lo sentimos, por favor para solucionar este problema porfavor envianos un correo a soporte@waypool.com,¡lo solucionaremos!.','Ok') 
      }
    }
    presentAlert(title,text,button) {
      let alert = this.alertCtrl.create({
        title: title,
        subTitle: text,
        buttons: [button]
      });
      alert.present();
    }
    confirmNote(geoFire1, geoFire2){
      let modal = this.modalCtrl.create(ConfirmNotePage, {geoFire1, geoFire2});
      modal.onDidDismiss(accepted => {
        if(accepted){
          this.navCtrl.push(ListridePage);
      }
      })
   modal.present();
   }
   
  }
  



