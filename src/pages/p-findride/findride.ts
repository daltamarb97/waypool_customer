import { Component, ViewChild, ElementRef,NgZone,Renderer } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { NavController, Platform, ViewController, AlertController, ModalController, IonicPage, App, ToastController, LoadingController } from 'ionic-angular';
import { sendCoordsService } from '../../services/sendcoords.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { geofireService } from '../../services/geoFire.service';
import { SignUpService } from '../../services/signup.services';
import * as firebase from 'firebase';
import { AngularFireDatabase, snapshotChanges } from 'angularfire2/database';
import * as GeoFire from 'geofire';
import { TripsService } from '../../services/trips.service';
import { Subject } from 'rxjs';
import { instancesService } from '../../services/instances.service';
import { FCM } from '@ionic-native/fcm';
import { Firebase } from '@ionic-native/firebase';
import * as moment from 'moment';
import { MetricsService } from '../../services/metrics.service';
import { LoginPage } from '../p-login/login';

 
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
  geoqueryRouteOrigin:any;
  geoqueryRouteDestination:any;
  // geoquriesRouteOrigin = [];
  // geoquriesRouteDestination = [];

  
  // geoquery1LMU:any;
  // geoquery2LMU:any;
  // keyexitedOr:any;
  // keyenteredOr:any;
  driverOnNodeDest:any;
  driverOnNodeOr:any;

  adminOnNodeDest:any;
  adminOnNodeOr:any;

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
  geofireOriginConfirmed:boolean = false;
  geofireOriginConfirmedOnRoute:boolean = false
  geofireDestinationConfirmed:boolean = false;
  geofireDestinationConfirmedOnRoute:boolean = false;


  geofireOriginCrewConfirmed:boolean = false;
  geofireOriginCrewConfirmedOnRoute:boolean = false
  geofireDestinationCrewConfirmed:boolean = false;
  geofireDestinationCrewConfirmedOnRoute:boolean = false;

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
  indexesOfPointsAlongRoute = [];
  // keyDetectedInGeofireOrigin:boolean = false;
  // keyDetectedInGeofireDestination:boolean = false;
  thereAreReserves:boolean;
  saveTrip:any;
  pointsAlongRoute = [];
  pointsToGeofire = [];
  keyTripForGeofireInRouteDest:any;
  driverIdForGeofireInRouteDest:any;
  keysIdentifiedInOrigin = [];
  keysIdentifiedInOriginRoute = [];
  keysIdentifiedInOriginCrew = [];
  keysIdentifiedInOriginRouteCrew = [];
  geoqueryCrew2:any;
  geoqueryCrew1:any;
  geoqueryRouteOriginCrew:any;
  geoqueryRouteDestinationCrew:any;
  crewIdForGeofireInRouteDest:any;
  adminIdForGeofireInRouteDest:any;

 constructor(public navCtrl: NavController, private MetricsService:MetricsService ,public geolocation: Geolocation,public zone: NgZone, public sendCoordsService: sendCoordsService, private AngularFireAuth: AngularFireAuth, public alertCtrl: AlertController, private geofireService: geofireService, private SignUpService: SignUpService, public modalCtrl: ModalController, private app: App, public afDB: AngularFireDatabase, private TripsService: TripsService, public instanceService: instancesService, private platform: Platform, private fcm: FCM, private firebase: Firebase, public loadingCtrl: LoadingController, public viewCtril: ViewController ) {
  
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
  
    this.afDB.database.ref('usersTest/' + this.userUid).once('value').then((snap)=>{
        this.userInfo = snap.val();
        console.log(this.userInfo);
        
    })



        //logica de instrucciones 
        this.afDB.database.ref('/usersTest/' + this.userUid ).once('value').then((snapWalkthr)=>{
          if(snapWalkthr.val().shownInstructions === true){
            console.log('ya lo mostre');
            
          }else{
            this.app.getRootNav().push('WalkthroughPage');
            this.afDB.database.ref('/usersTest/' + this.userUid).update({
              shownInstructions: true
            })

          }
        })

        //user get their check sign of verficiation here and get the global variable of zone
        this.instanceService.isVerified( this.userUid);



        this.afDB.database.ref( '/usersTest/' + this.userUid + '/myReserves/').once('value').then((snapReserve)=>{
          if(snapReserve.val()){
            console.log('aqui hay myReserves');
            
            this.thereAreReserves = true
           
          }else{
           
          }
        }).then(()=>{

          if(!this.thereAreReserves === true){
            // this.SignUpService.userPlace = this.zonesToIterate[0];
            this.thereAreReserves = false   
          }

                //search keyTrip
                  //REVISAR ESTO CON DANIEL
                  console.log(this.zonesToIterate);
                  

                  this.getOnTrip();

                this.SignUpService.getMyInfo(this.userUid).takeUntil(this.unsubscribe).subscribe(user=>{
                  this.user = user;

                  if(this.user.cancelTrip === undefined || this.user.cancelTrip === null){
                    //when the user is canceled
                  }else if(this.user.cancelTrip == true){
                   
                    this.TripsService.eliminateAvailableReserves( this.userUid);
                  
                    this.afDB.database.ref('/usersTest/'+this.userUid+'/cancelTrip').remove()
                    .then(()=>{
                      this.MetricsService.cancelReserves( this.userUid, this.trip)
                      let modal = this.modalCtrl.create('CanceltripPage');
                      modal.present();  
                    })
                  }

                 // when the trip has finished
                  if(this.user.saveTrip === undefined || this.user.saveTrip === null){
                    console.log("AAAAAAAAAAAAAAAAAAAAA")
                      }else if(this.user.saveTrip == true){
                    console.log(this.user.trip)
                    this.TripsService.eliminateAvailableReserves( this.userUid);

                        console.log("me active")
                        this.TripsService.eliminatingSaveTrip(this.userUid);

                        this.unsubscribe.next();
                        this.unsubscribe.complete();
                        setTimeout(() => {
                          this.TripsService.saveTripOnRecords(this.userUid,this.user.trip);     
                          
                        // this.TripsService.eliminateTrip(this.SignUpService.userPlace, this.userUid);     
                        this.afDB.database.ref('/usersTest/'+ this.userUid+'/trip/').remove()
                          .then(()=>{
                          this.navCtrl.push('RatetripPage',{trip:this.user.trip})

                        })


                        console.log("ME ACTIVEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE")
                        }, 3000);
              
                      }    
                })
        })
            

      this.platform.ready().then(()=>{
        this.token = this.fcm.getToken().then((token)=>{
          console.log('this is the token ' + token);
          this.afDB.database.ref( '/users/' + this.userUid + '/devices/').update({
            token: token
          })
         
        })

        // this.getToken();
    
    })


  } // END OF CONSTRUCTOR


  async getToken() {

    if (this.platform.is('android')) {
      this.token = await this.firebase.getToken().then((token)=>{
        console.log('this is the token ' + token);
        
        this.afDB.database.ref( '/users/' + this.userUid + '/devices/').update({
          token: token
        })

      })
    }
  
    if (this.platform.is('ios')) {
      await this.firebase.grantPermission();
      this.token = await this.firebase.getToken().then((token)=>{
        console.log('this is the token ' + token);
        this.afDB.database.ref( '/users/' + this.userUid + '/devices/').update({
          token: token
        }).then(()=>{
          console.log('DONE USER DEVICE TOKEN');
          
        })
      })
      
    }
  
  }


  getOnTrip(){
    this.TripsService.getOnTrip(this.userUid) 
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
      avoidTolls: true,
      provideRouteAlternatives: false
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
        0,
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
        
        this.directionsDisplay.setDirections( response);
    
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
      spinner: 'bubbles',
      content: `
        <div class="custom-spinner-container">
          <div class="custom-spinner-box"></div>
        </div>`
        });
    this.loading.present();

    console.log(this.myLatLngOr);
    console.log(this.usingGeolocation);
    
  this.afDB.database.ref('/usersTest/' + this.userUid ).once('value').then((snapBlock)=>{
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
      
        if(this.user.onTrip == true){
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
                
                ///GEOQUERY ACTIVATION

                this.afDB.database.ref('/usersTest/'+ this.userUid +'/trips').update({
                    origin: this.orFirebase,
                    destination: this.desFirebase,
                    distanceToGoInKM: this.distanceInMeters/1000          
                 }).then(()=>{
                   //get geoquery measures
                  this.afDB.database.ref('allCities/' + this.userInfo.city ).once('value').then((snapGeoquery)=>{
                    
                    if(this.usingGeolocation === true){

     
                     
                        this.setGeofireOr( snapGeoquery.val().geofireOr, this.myLatLngOr.lat, this.myLatLngOr.lng, this.userUid, snapGeoquery.val().geofireDest, this.myLatLngDest.lat(), this.myLatLngDest.lng());
                        this.setGeofireRouteOrigin(snapGeoquery.val().geofireRoute, this.myLatLngOr.lat, this.myLatLngOr.lng, snapGeoquery.val().geofireDest, this.myLatLngDest.lat(), this.myLatLngDest.lng(), this.userUid);
                        this.setGeofireOrCrew(snapGeoquery.val().geofireOrCrew, this.myLatLngOr.lat, this.myLatLngOr.lng, this.userUid, snapGeoquery.val().geofireDestCrew, this.myLatLngDest.lat(), this.myLatLngDest.lng());                 
                        this.setGeofireRouteOriginCrew(snapGeoquery.val().geofireRouteCrew, this.myLatLngOr.lat, this.myLatLngOr.lng,  snapGeoquery.val().geofireDestCrew, this.myLatLngDest.lat(), this.myLatLngDest.lng(), this.userUid);  
       
                            
                       
                        

                  }else{

                        this.setGeofireOr( snapGeoquery.val().geofireOr, this.myLatLngOr.lat(), this.myLatLngOr.lng(), this.userUid, snapGeoquery.val().geofireDest, this.myLatLngDest.lat(), this.myLatLngDest.lng());
                        this.setGeofireRouteOrigin(snapGeoquery.val().geofireRoute, this.myLatLngOr.lat(), this.myLatLngOr.lng(), snapGeoquery.val().geofireDest, this.myLatLngDest.lat(), this.myLatLngDest.lng(), this.userUid)
                        this.setGeofireOrCrew(snapGeoquery.val().geofireOrCrew, this.myLatLngOr.lat(), this.myLatLngOr.lng(), this.userUid, snapGeoquery.val().geofireDestCrew, this.myLatLngDest.lat(), this.myLatLngDest.lng());                 
                        this.setGeofireRouteOriginCrew(snapGeoquery.val().geofireRouteCrew, this.myLatLngOr.lat(), this.myLatLngOr.lng(),  snapGeoquery.val().geofireDestCrew, this.myLatLngDest.lat(), this.myLatLngDest.lng(), this.userUid);

                      }        
                  })
               }).then(()=>{

                setTimeout(() => {
                  if(this.geofireOriginConfirmed === false && this.geofireOriginConfirmedOnRoute === false && this.geofireOriginCrewConfirmed === false && this.geofireOriginCrewConfirmedOnRoute === false){

                    this.geofireDestinationConfirmed = false
                    this.geofireDestinationConfirmedOnRoute= false
                    this.geofireOriginConfirmed= false
                    this.geofireOriginConfirmedOnRoute= false
                    this.geofireDestinationCrewConfirmed = false
                    this.geofireDestinationCrewConfirmedOnRoute= false
                    this.geofireOriginCrewConfirmed= false
                    this.geofireOriginCrewConfirmedOnRoute= false

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

                    if(this.geoqueryCrew1){
                      this.geoqueryCrew1.cancel();
                    }
                    if(this.geoqueryCrew2){
                      this.geoqueryCrew2.cancel();
                    }
                    
                    if(this.geoqueryRouteOriginCrew){
                      this.geoqueryRouteOriginCrew.cancel();
                    }

                    if(this.geoqueryRouteDestinationCrew){
                      this.geoqueryRouteDestinationCrew.cancel();
                    }


                    if(this.usingGeolocation === true){
                      this.navCtrl.push('ListridePage', {latOr: this.myLatLngOr.lat, lngOr: this.myLatLngOr.lng, latDest: this.myLatLngDest.lat(), lngDest: this.myLatLngDest.lng(), pointsAlongRoute: this.pointsAlongRoute, indexesOfPointsAlongRoute: this.indexesOfPointsAlongRoute});
                    }else{
                      this.navCtrl.push('ListridePage', {latOr: this.myLatLngOr.lat(), lngOr: this.myLatLngOr.lng(), latDest: this.myLatLngDest.lat(), lngDest: this.myLatLngDest.lng(), pointsAlongRoute: this.pointsAlongRoute, indexesOfPointsAlongRoute: this.indexesOfPointsAlongRoute});

                    }
                    
                    this.loading.dismiss();                        
                  }else if(this.geofireDestinationConfirmedOnRoute === false && this.geofireDestinationConfirmed === false && this.geofireDestinationCrewConfirmedOnRoute === false && this.geofireDestinationCrewConfirmed === false ){
                    this.geofireDestinationConfirmed = false
                    this.geofireDestinationConfirmedOnRoute= false
                    this.geofireOriginConfirmed= false
                    this.geofireOriginConfirmedOnRoute= false
                    this.geofireDestinationCrewConfirmed = false
                    this.geofireDestinationCrewConfirmedOnRoute= false
                    this.geofireOriginCrewConfirmed= false
                    this.geofireOriginCrewConfirmedOnRoute= false

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

                    if(this.geoqueryCrew1){
                      this.geoqueryCrew1.cancel();
                    }
                    if(this.geoqueryCrew2){
                      this.geoqueryCrew2.cancel();
                    }
                    
                    if(this.geoqueryRouteOriginCrew){
                      this.geoqueryRouteOriginCrew.cancel();
                    }

                    if(this.geoqueryRouteDestinationCrew){
                      this.geoqueryRouteDestinationCrew.cancel();
                    }

       
                    if(this.usingGeolocation === true){
                      this.navCtrl.push('ListridePage', {latOr: this.myLatLngOr.lat, lngOr: this.myLatLngOr.lng, latDest: this.myLatLngDest.lat(), lngDest: this.myLatLngDest.lng(), pointsAlongRoute: this.pointsAlongRoute, indexesOfPointsAlongRoute: this.indexesOfPointsAlongRoute});
                    }else{
                      this.navCtrl.push('ListridePage', {latOr: this.myLatLngOr.lat(), lngOr: this.myLatLngOr.lng(), latDest: this.myLatLngDest.lat(), lngDest: this.myLatLngDest.lng(), pointsAlongRoute: this.pointsAlongRoute, indexesOfPointsAlongRoute: this.indexesOfPointsAlongRoute});

                    }
                    this.loading.dismiss();
                  } else{
                    moment.locale('es'); //to make the date be in spanish  
                    let today = moment().format('MMMM Do , h:mm:ss a'); //set actual date
                    // this.MetricsService.createdReserves(this.userUid,today,this.desFirebase,this.orFirebase);
                    
                    this.geofireDestinationConfirmed = false
                    this.geofireDestinationConfirmedOnRoute= false
                    this.geofireOriginConfirmed= false
                    this.geofireOriginConfirmedOnRoute= false
                    this.geofireDestinationCrewConfirmed = false
                    this.geofireDestinationCrewConfirmedOnRoute= false
                    this.geofireOriginCrewConfirmed= false
                    this.geofireOriginCrewConfirmedOnRoute= false

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

                    if(this.geoqueryCrew1){
                      this.geoqueryCrew1.cancel();
                    }
                    if(this.geoqueryCrew2){
                      this.geoqueryCrew2.cancel();
                    }
                    
                    if(this.geoqueryRouteOriginCrew){
                      this.geoqueryRouteOriginCrew.cancel();
                    }

                    if(this.geoqueryRouteDestinationCrew){
                      this.geoqueryRouteDestinationCrew.cancel();
                    }


                    
                    if(this.usingGeolocation === true){
                      this.navCtrl.push('ListridePage', {latOr: this.myLatLngOr.lat, lngOr: this.myLatLngOr.lng, latDest: this.myLatLngDest.lat(), lngDest: this.myLatLngDest.lng(), pointsAlongRoute: this.pointsAlongRoute, indexesOfPointsAlongRoute: this.indexesOfPointsAlongRoute});
                    }else{
                      this.navCtrl.push('ListridePage', {latOr: this.myLatLngOr.lat(), lngOr: this.myLatLngOr.lng(), latDest: this.myLatLngDest.lat(), lngDest: this.myLatLngDest.lng(), pointsAlongRoute: this.pointsAlongRoute, indexesOfPointsAlongRoute: this.indexesOfPointsAlongRoute});

                    }
                    this.loading.dismiss();
                  }
                }, 5000);

               })
          
          }
       
        }catch(error) {
            console.log(error)
              this.loading.dismiss();
              this.presentAlert('Hay un error en la aplicación','Lo sentimos, por favor para solucionar este problema porfavor envianos un correo a soporte@waypool.com,¡lo solucionaremos!.','Ok') 
    
            // }
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


    ionViewDidLeave(){
      this.unsubscribe.next();
       this.unsubscribe.complete();
    }


   
      


//GEOFIRE LOGIC FOR CARPOOLING//

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
    setGeofireRouteOrigin ( radiusRoute:number, lat, lng, radiusDest, latDest, lngDest, userId):void{ 
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
  

// FINISH LOGIC GEOFIRE FOR CARPOOLING


//LOGIC GEOFIRE FOR CREWS


 //geoquery origin
 setGeofireOrCrew( radiusOrCrew:number, latOr, lngOr, userId, radiusDestCrew:number, latDest, lngDest ):void{ 
  let dbRef = this.afDB.database.ref(  '/geofireOrCrew/' );
  let geoFire = new GeoFire(dbRef); 

  this.geoqueryCrew2 = geoFire.query({
    center: [latOr, lngOr],
    radius: radiusOrCrew
  })

    this.keyEnteredOrCrew(radiusDestCrew, latDest, lngDest, userId  );
    this.keyExitedOrCrew( userId  );
    
    console.log('geoquery or added');
}


keyEnteredOrCrew(radiusDestCrew, latDest, lngDest,  userId ){ 
  // var keyEnteredOr = false;
  this.geoqueryCrew2.on("key_entered", function(key, location, distance){
    //  keyEnteredOr = true;
     
     this.geofireOriginCrewConfirmed = true;
     let orRouteConf = false
     this.keysIdentifiedInOriginCrew.push({crewId:key, orRouteConf: orRouteConf, distance: distance});
     
     if(this.geoqueryCrew1){

     }else{
      this.setGeofireDestCrew(radiusDestCrew, latDest, lngDest, userId);
     }
     
         
   }.bind(this));
  }


  
  keyExitedOrCrew( userId  ){
   this.geoqueryCrew2.on("key_exited", function(key){
     this.afDB.database.ref( '/usersTest/' + userId + '/availableCrews/' + key).remove()
   }.bind(this))
  }


      //geoquery origin in route
      setGeofireRouteOriginCrew( radiusRouteCrew:number, lat, lng, radiusDestCrew, latDest, lngDest, userId):void{ 
        // console.log(this.geoquriesRouteOrigin);
        let dbRef = this.afDB.database.ref(  '/geofireRouteCrew/' );
        let geoFire = new GeoFire(dbRef); 
  
        this.geoqueryRouteOriginCrew = geoFire.query({
          center: [lat, lng],
          radius: radiusRouteCrew
        })
  
        this.keyEnteredRouteOriginCrew( userId, radiusDestCrew, latDest, lngDest );
        this.keyExitedRouteOriginCrew(  userId  );         
      }
  
  
  
      
  
  
      keyEnteredRouteOriginCrew( userId, radiusDestCrew, latDest, lngDest){
  
        this.geoqueryRouteOriginCrew.on("key_entered", function(key, location, distance){
          
          this.geofireOriginCrewConfirmedOnRoute = true;
          let orRouteConf = true
          
          this.afDB.database.ref('/geofireRouteCrew/' + key ).once('value').then((snap)=>{
            // quede aqui, para verificar que las key identificadas son iguales
            let crewId = snap.val().crewId;
            this.keysIdentifiedInOriginRouteCrew.push({
              crewId: crewId,
              orRouteConf: orRouteConf,
              distance: distance
            })
  
          }).then(()=>{
            if(this.geoqueryCrew1){
  
            }else{
             this.setGeofireDestCrew(radiusDestCrew, latDest, lngDest, userId);
            }
  
          });
  
          console.log('ENTRE EN ORIGIN EN ROUTE');
          
        }.bind(this));
      }
  
  
  
      keyExitedRouteOriginCrew( userId){
        this.geoqueryRouteOriginCrew.on("key_exited", function(key){
          this.afDB.database.ref( '/usersTest/' + userId + '/availableCrews/' + key).remove()
          
        }.bind(this))
        
      }
  
  
    
      //geoquery destination
      setGeofireDestCrew( radiusDestCrew:number, latDest, lngDest, userId):void{ 
        console.log('se prendio geoquery destination Crew, debo salir una sóla vez');
        console.log(this.keysIdentifiedInOriginRouteCrew);
        
        let dbRef = this.afDB.database.ref(  '/geofireDestCrew/' );
        let geoFire = new GeoFire(dbRef); 
      
        this.geoqueryCrew1 = geoFire.query({
          center: [latDest, lngDest],
          radius: radiusDestCrew
        })
      
        
        this.keyEnteredDestCrew( userId);
        this.keyExitedDestCrew(userId );
      
      console.log('geoquery dest added');
      }
  
  
  
      keyEnteredDestCrew( userId ){
        
        this.geoqueryCrew1.on("key_entered", function(key, location, distance){
        console.log(key);
        if(this.keysIdentifiedInOriginCrew.length !== 0){
  
          let count = 0
          for(let element of this.keysIdentifiedInOriginCrew){
            count = count + 1
            if(element.crewId === key){
              this.geofireDestinationCrewConfirmed = true;
              this.afDB.database.ref( '/usersTest/' + userId + '/availableCrews/' + key).update({
                  crewId: key,
                  distance: element.distance
                
                 }).then(()=> {
                     return this.afDB.database.ref( '/geofireDestCrew/'+ key).once('value').then((snap) => {
                      this.adminOnNodeDest = snap.val();
          
                      this.afDB.database.ref( '/usersTest/' + userId + '/availableCrews/' + key).update({
                          adminId: this.adminOnNodeDest.adminId
              
                      })  
                  })
                 }) 
               
            }
    
            if (count === this.keysIdentifiedInOriginCrew.length){
              console.log('si se ejecuto el for de keysOriginCrew');
              
              for(let element of this.keysIdentifiedInOriginRouteCrew){
    
                if(element.crewId === key){
                  console.log('un key de destination es igual al keytrip que fue identificado en origen');
    
                  this.geofireDestinationCrewConfirmed = true;
                  this.afDB.database.ref( '/usersTest/' + userId + '/availableCrews/' + key).once('value')
                  .then((snapshot)=>{
                    if(snapshot.val()){
        
                    }else{
                      this.afDB.database.ref( '/usersTest/' + userId + '/availableCrews/' + key).update({
                        crewId: key,
                        onRouteOrigin: true,
                        distance: element.distance
                       }).then(()=> {
                           return this.afDB.database.ref( '/geofireDestCrew/'+ key).once('value').then((snap) => {
                            this.adminOnNodeDest = snap.val();
                
                            this.afDB.database.ref( '/usersTest/' + userId + '/availableCrews/' + key).update({
                                adminId: this.adminOnNodeDest.adminId
                    
                            })  
                        })
                       })
                    }
                  })
                }
    
              }
            }
          }
  
        }else if(this.keysIdentifiedInOriginRouteCrew.length !== 0){
  
          for(let element of this.keysIdentifiedInOriginRouteCrew){
    
            if(element.crewId === key){
              console.log('un key de destination es igual al keytrip que fue identificado en origen');
  
              this.geofireDestinationConfirmed = true;
              this.afDB.database.ref( '/usersTest/' + userId + '/availableCrews/' + key).once('value')
              .then((snapshot)=>{
                if(snapshot.val()){
    
                }else{
                  this.afDB.database.ref( '/usersTest/' + userId + '/availableCrews/' + key).update({
                    crewId: key,
                    onRouteOrigin: true,
                    distance: element.distance
                   }).then(()=> {
                       return this.afDB.database.ref( '/geofireDestCrew/'+ key).once('value').then((snap) => {
                        this.adminOnNodeDest = snap.val();
            
                        this.afDB.database.ref( '/usersTest/' + userId + '/availableCrews/' + key).update({
                          adminId: this.adminOnNodeDest.adminId
                
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
  
              this.setGeofireRouteDestCrew(snap.val().geofireRouteCrew,  this.myLatLngDest.lat(), this.myLatLngDest.lng(), userId);
  
          })
          
   
        
      }.bind(this))
    }, 300);
   }
  
  
  
     
     
     keyExitedDestCrew(userId){
       
       this.geoquery1.on("key_exited", function(key){
         this.afDB.database.ref(  '/usersTest/' + userId + '/availableCrews/' + key).remove()
       }.bind(this))
     }
  
  
  
      //geoquery destination in route
      setGeofireRouteDestCrew( radiusRouteCrew:number, lat, lng, userId ):void{ 
        console.log('se ejecutó');
  
        let dbRef = this.afDB.database.ref(  '/geofireRouteCrew/' );
        let geoFire = new GeoFire(dbRef); 
      
        this.geoqueryRouteDestinationCrew = geoFire.query({
          center: [lat, lng],
          radius: radiusRouteCrew
        })
  
  
        this.keyEnteredRouteDestCrew(  userId );
        this.keyExitedRouteDestCrew( userId  ); 
        
             
      }
  
      
  
  
  
  
      keyEnteredRouteDestCrew(userId){
  
        this.geoqueryRouteDestinationCrew.on("key_entered", function(key, location, distance){
    
          
          this.afDB.database.ref('/geofireRouteCrew/' + key ).once('value').then((snap)=>{
            this.crewIdForGeofireInRouteDest = snap.val().crewId;
            this.adminIdForGeofireInRouteDest = snap.val().adminId;
            
            
          }).then(()=>{
            if(this.keysIdentifiedInOriginCrew !== 0){
  
              let count = 0
              for(let element of this.keysIdentifiedInOriginCrew){
                count = count + 1
                if(element.crewId === this.crewIdForGeofireInRouteDest){
                  this.geofireDestinationCrewConfirmedOnRoute = true;
                  
                  this.afDB.database.ref( '/usersTest/' + userId + '/availableCrews/' + this.crewIdForGeofireInRouteDest).once('value')
                  .then((snapConf)=>{
                    if(snapConf.val()){
                      console.log('te voy a dejar relajado ya que ya te identifiqué');
    
                    }else{
    
                      this.afDB.database.ref( '/usersTest/' + userId + '/availableCrews/' + this.crewIdForGeofireInRouteDest).update({
                        crewId: this.crewIdForGeofireInRouteDest,
                        adminId: this.adminIdForGeofireInRouteDest,
                        onRouteDestination: true,
                        distance: element.distance
                       })
    
                    }
                  })
                   
                }
    
                if(count === this.keysIdentifiedInOriginCrew.length){
                  for(let element of this.keysIdentifiedInOriginRouteCrew){
                    if(element.keyTrip === this.crewIdForGeofireInRouteDest){
                      this.geofireDestinationCrewConfirmedOnRoute = true;
        
                      this.afDB.database.ref( '/usersTest/' + userId + '/availableCrews/' + this.crewIdForGeofireInRouteDest).once('value')
                          .then((snapConf)=>{
                            if(snapConf.val().adminId === this.adminIdForGeofireInRouteDest){
                              console.log('te voy a dejar relajado ya que ya te identifiqué');  
                            }else{
                              this.afDB.database.ref( '/usersTest/' + userId + '/availableCrews/' + this.crewIdForGeofireInRouteDest).update({
                                crewId: this.crewIdForGeofireInRouteDest,
                                adminId: this.adminIdForGeofireInRouteDest,
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
              console.log('no hay nada en ' + this.keysIdentifiedInOriginCrew);
              
            }
          })
          .then(()=>{
            console.log(this.crewIdForGeofireInRouteDest);
             
            console.log('ahora si aqui te encuentro 1');
            
            if(this.keysIdentifiedInOriginRouteCrew !== 0){
              console.log('ahora si aqui te encuentro 2');
              
              for(let element of this.keysIdentifiedInOriginRouteCrew){
                if(element.crewId === this.crewIdForGeofireInRouteDest){
                  this.geofireDestinationCrewConfirmedOnRoute = true;
    
                  this.afDB.database.ref( '/usersTest/' + userId + '/availableCrews/' + this.crewIdForGeofireInRouteDest).once('value')
                      .then((snapConf)=>{
                      
                        
                        if(snapConf.val()){
  
                          if(snapConf.val().driverId === this.driverIdForGeofireInRouteDest){
                            console.log('te voy a dejar relajado ya que ya te identifiqué');  
                          }else{
                            this.afDB.database.ref( '/usersTest/' + userId + '/availableCrews/' + this.crewIdForGeofireInRouteDest).update({
                              crewId: this.crewIdForGeofireInRouteDest,
                              adminId: this.adminIdForGeofireInRouteDest,
                              onRouteDestination: true,
                              onRouteOrigin: true, 
                              distance: element.distance 
                             })
        
                          }
                        }else{
  
                          this.afDB.database.ref( '/usersTest/' + userId + '/availableCrews/' + this.crewIdForGeofireInRouteDest).update({
                            crewId: this.crewIdForGeofireInRouteDest,
                            adminId: this.adminIdForGeofireInRouteDest,
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
  
  
  
  
  
      keyExitedRouteDestCrew( userId){
        
        this.geoqueryRouteDestinationCrew.on("key_exited", function(key){
  
          this.afDB.database.ref(  '/usersTest/' + userId + '/availableCrews/' + key).remove()
  
        }.bind(this))
        
      }



// FINISH LOGIC GEOFIRE FOR CREWS

    

      goToBikeMode(){
        console.log(this.user);
        
        this.navCtrl.push('CreateGroupPage')
      }
     
     
}
   
    
  
  



