import { Component, ViewChild, ElementRef,NgZone } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { NavController, Platform, ViewController, AlertController, ModalController, IonicPage, App, ToastController } from 'ionic-angular';
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
  trip:any;
  // tripIdFirebase = this.AngularFireAuth.auth.currentUser;
  desFirebase:any;
  tripId:any = null;
  orFirebase:any;
  markerDest:any;
  markerGeolocation:any;
  //para acceder al uid en firebase
  //geofire
  geofire1;
  geofire2;
  university:any;
  locationUniversity:any ={};
  onTrip:any = false;
  keyTrip:any;

  //variables for geoquery
  geocoordinatesDest:any ={};
  geocoordinatesOr:any ={};
  userInfo:any;
  universityInfo:any;

  //variables for geoquey university
  dbRef;
  geoFire;
  geoqueryU;
  geofireOriginConfirmed:boolean = false;
  userUid=this.AngularFireAuth.auth.currentUser.uid;
  user:any;

  unsubscribe = new Subject;
  token:any;



  driverOnNodeOr:any;
 constructor(public navCtrl: NavController, public geolocation: Geolocation,public zone: NgZone, public sendCoordsService: sendCoordsService, private AngularFireAuth: AngularFireAuth, public alertCtrl: AlertController, private geofireService: geofireService, private SignUpService: SignUpService, public modalCtrl: ModalController, private app: App, public afDB: AngularFireDatabase, private TripsService: TripsService, public instanceService: instancesService, private platform: Platform, private fcm: FCM ) {
  
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
  
    console.log(this.SignUpService.userUniversity);
    if(this.SignUpService.userUniversity == undefined){
      let modal = this.modalCtrl.create('ConfirmUniversityPage');
      modal.onDidDismiss(readyToStart => {
        if(readyToStart){

          this.platform.ready().then(()=>{
 
            this.token = this.fcm.getToken().then((token)=>{
              console.log('this is the token ' + token);
              this.afDB.database.ref(this.SignUpService.userUniversity + '/users/' + this.userUid + '/devices/').update({
                token: token
              })
            })
        
        })
          
          //search keyTrip
      this.TripsService.getKeyTrip(this.SignUpService.userUniversity, this.userUid)
      .subscribe(keyTrip=>{
        this.keyTrip =keyTrip;
        console.log(this.keyTrip)
        //if key its deleted don't show VIAJE EN CURSO  
        if(this.keyTrip === undefined || this.keyTrip === null){
         this.onTrip=false;
          this.TripsService.eliminateKeyTrip(this.SignUpService.userUniversity, this.userUid);
          this.TripsService.eliminatingOnTrip(this.SignUpService.userUniversity, this.userUid);
          console.log("llegue adonde era")
        }else{
          //confirm that trip exist and get it
          this.getOnTrip();
        }
       
      })
          console.log(this.SignUpService.userUniversity);
          this.SignUpService.getMyInfo(this.userUid, this.SignUpService.userUniversity).takeUntil(this.unsubscribe).subscribe(user=>{
            this.user = user;
            //  this.keyTrip = this.user.keyTrip
            console.log(this.user)
            if(this.user.saveTrip === undefined || this.user.saveTrip === null){
              console.log("AAAAAAAAAAAAAAAAAAAAA")
                }else{
              console.log(this.user.trip)
              
                  console.log("me active")
                  this.TripsService.eliminatingSaveTrip(this.SignUpService.userUniversity,this.userUid);

                  this.TripsService.eliminatingOnTrip(this.SignUpService.userUniversity, this.userUid);
               
                  this.TripsService.eliminateKeyTrip(this.SignUpService.userUniversity, this.userUid);
              
                  this.TripsService.eliminateAvailableReserves(this.SignUpService.userUniversity, this.userUid);
                  this.TripsService.eliminateKeyUser(this.SignUpService.userUniversity, this.userUid,this.user.trip.keyTrip);

                  this.unsubscribe.next();
                  this.unsubscribe.complete();
                  setTimeout(() => {
                    
                    this.TripsService.saveTripOnRecords(this.SignUpService.userUniversity, this.userUid,this.user.trip);     

                  this.navCtrl.push('RatetripPage',{trip:this.user.trip})
                  this.TripsService.eliminateTrip(this.SignUpService.userUniversity, this.userUid);     

                  console.log("ME ACTIVEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE")
                  }, 3000);

                }

              
          })
          // set geofire key of university to avoid asking users to put where they are going
          this.geofireService.getLocationUniversity(this.SignUpService.userUniversity).takeUntil(this.unsubscribe).subscribe(university=>{
              this.university = university;
              this.locationUniversity = this.university.location;
              this.geofireService.setLocationUniversity(this.SignUpService.userUniversity, "some_key", this.locationUniversity.lat, this.locationUniversity.lng);
            })
  
        }

        setTimeout(() => {
          this.SignUpService.getInfoUniversity(this.SignUpService.userUniversity).takeUntil(this.unsubscribe).subscribe(uni => {
            this.universityInfo = uni;
            
            if(this.universityInfo.email === undefined){
              if(this.user.documents){
                if(this.user.documents.carne === undefined || this.user.documents.id === undefined){
                  let modal = this.modalCtrl.create('VerificationImagesPage');
                  modal.present();
                }else if(this.user.documents.carne === true || this.user.documents.id === true){
                  this.instanceService.isVerified(this.SignUpService.userUniversity, this.userUid);
                }
              }else if(!this.user.documents) {
                console.log('no hay docs')
                let modal = this.modalCtrl.create('VerificationImagesPage');
                modal.present();
              } 
            }else{
              this.instanceService.isVerified(this.SignUpService.userUniversity, this.userUid);
            }
          })
        }, 1000);
  
        
      })
      modal.present();
    }else{
          //search keyTrip
          this.TripsService.getKeyTrip(this.SignUpService.userUniversity, this.userUid)
          .subscribe(keyTrip=>{
            this.keyTrip =keyTrip;
            console.log(this.keyTrip)
            //if key its deleted don't show VIAJE EN CURSO  
            if(this.keyTrip === undefined || this.keyTrip === null){
             this.onTrip=false;
              this.TripsService.eliminateKeyTrip(this.SignUpService.userUniversity, this.userUid);
              this.TripsService.eliminatingOnTrip(this.SignUpService.userUniversity, this.userUid);
              console.log("llegue adonde era")
            }else{
              //confirm that trip exist and get it
              this.getOnTrip();
            }
           
          })
              console.log(this.SignUpService.userUniversity);
              this.SignUpService.getMyInfo(this.userUid, this.SignUpService.userUniversity).takeUntil(this.unsubscribe).subscribe(user=>{
                this.user = user;
                //  this.keyTrip = this.user.keyTrip
                console.log(this.user)
          
              })
              // set geofire key of university to avoid asking users to put where they are going
              this.geofireService.getLocationUniversity(this.SignUpService.userUniversity).takeUntil(this.unsubscribe).subscribe(university=>{
                  this.university = university;
                  this.locationUniversity = this.university.location;
                  this.geofireService.setLocationUniversity(this.SignUpService.userUniversity, "some_key", this.locationUniversity.lat, this.locationUniversity.lng);
                })

                this.SignUpService.getInfoUniversity(this.SignUpService.userUniversity).takeUntil(this.unsubscribe).subscribe(uni => {
                  this.universityInfo = uni;
                  
                  if(this.universityInfo.email === undefined){
                    if(this.user.documents){
                      if(this.user.documents.carne === undefined || this.user.documents.id === undefined){
                        let modal = this.modalCtrl.create('VerificationImagesPage');
                        modal.present();
                      }else if(this.user.documents.carne === true || this.user.documents.id === true){
                        this.instanceService.isVerified(this.SignUpService.userUniversity, this.userUid);
                      }
                    }else if(!this.user.documents) {
                      console.log('no hay docs')
                      let modal = this.modalCtrl.create('VerificationImagesPage');
                      modal.present();
                    } 
                  }else{
                    this.instanceService.isVerified(this.SignUpService.userUniversity, this.userUid);
                  }
                })    
    }



  } // END OF CONSTRUCTOR





  getOnTrip(){
    this.TripsService.getOnTrip(this.SignUpService.userUniversity, this.userUid) 
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
         
             //turn on geoquery university to determine wether the user is in university
        this.setGeofireUniversity(this.SignUpService.userUniversity ,0.56, this.myLatLngDest.lat(), this.myLatLngDest.lng(), this.userUid);
      


        // test: geoqueryU on listride() of findride.ts
        this.geoqueryU.on("key_entered", function(key){
            this.afDB.database.ref(this.SignUpService.userUniversity + '/users/'+ this.userUid +'/trips').update({
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
                  if(this.user.onTrip === true){
                    console.log('geofireOr hasnt been activated due ontrip')
                  }else{ 
                    this.geofireService.setGeofireOr(this.SignUpService.userUniversity, 2, this.geocoordinatesOr.lat, this.geocoordinatesOr.lng, this.userUid);
                    this.geofireService.setGeofireOrLMU(this.SignUpService.userUniversity, 2, this.geocoordinatesOr.lat, this.geocoordinatesOr.lng, this.userUid);
                    console.log('executed geofire Or');  
    
                  }
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
   
        this.confirmNote();
        console.log("se ejecuto")
          
      }
 
    }
      catch(error) {
        console.log("soy yo")
        if(this.geofire2 === null || this.geofire2 === undefined ){
          //this is to tell the user to select a place before publishing a trip
          this.presentAlert('Información Incompleta','no puedes publicar un viaje sin antes seleccionar un lugar de la lista.','Ok') 
        }else {
          this.presentAlert('Hay un error en la aplicación','Lo sentimos, por favor para solucionar este problema porfavor envianos un correo a soporte@waypool.com,¡lo solucionaremos!.','Ok') 

        }
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
        this.setGeofireUniversity(this.SignUpService.userUniversity ,0.56, this.myLatLngDest.lat(), this.myLatLngDest.lng(), this.userUid);
      


        // test: geoqueryU on listride() of findride.ts
        this.geoqueryU.on("key_entered", function(key){
          this.afDB.database.ref(this.SignUpService.userUniversity + '/users/' + this.userUid ).update({
            geofireOrigin: true
          }).then(()=>{
            this.afDB.database.ref(this.SignUpService.userUniversity + '/users/'+ this.userUid +'/trips').update({
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
                  if(this.user.onTrip === true){
                    console.log('geofireOr hasnt been activated due ontrip')
                  }else{ 
                    console.log('AQUI ESTA EL ERROR 2');
                    this.geofireService.setGeofireOr(this.SignUpService.userUniversity, 2, this.geocoordinatesOr.lat, this.geocoordinatesOr.lng, this.userUid)
                    this.geofireService.setGeofireOrLMU(this.SignUpService.userUniversity, 2, this.geocoordinatesOr.lat, this.geocoordinatesOr.lng, this.userUid)
                    console.log('executed geofire Or');  
    
                  }          
                })

                this.geofireOriginConfirmed = true;
           
          })
          console.log('directions set')
          })
          console.log(key + ' detected')
        }.bind(this))

        setTimeout(()=>{
          if(!this.geofireOriginConfirmed == true){
            this.afDB.database.ref(this.SignUpService.userUniversity + '/users/'+ this.userUid +'/trips').update({
              origin: this.orFirebase,
              destination: this.desFirebase        
          }).then(() => {
            this.geocoderDestinationCase();
            })

          }else{
            this.geofireOriginConfirmed = false;
          }
        },1000)
   
        this.confirmNote();
        console.log("se ejecuto")
        }

       }
    catch(error) {
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

    geocoderDestinationCase(){
              this.geocoder.geocode({'address': this.desFirebase[0]}, (results, status)=>{
                if(status==='OK'){
                  this.geocoordinatesDest={
                    lat:results[0].geometry.location.lat(),
                    lng: results[0].geometry.location.lng()
                  }
              }     
                  // turn geofire On
                  if(this.user.onTrip === true){
                    console.log('geofireDest hasnt been activated due ontrip')
                  }else{ 
                  this.geofireService.setGeofireDest(this.SignUpService.userUniversity , 2, this.geocoordinatesDest.lat, this.geocoordinatesDest.lng, this.userUid);
                  this.geofireService.setGeofireDestLMU(this.SignUpService.userUniversity ,2, this.geocoordinatesDest.lat, this.geocoordinatesDest.lng, this.userUid);
                  console.log('executed geofire Dest');  
    
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
    


  confirmNote(){
    let modal = this.modalCtrl.create('ConfirmNotePage',{or: this.orFirebase,dest:this.desFirebase});
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

    ionViewDidLeave(){
      this.unsubscribe.next();
       this.unsubscribe.complete();
    }
      

}
   
    
  
  



