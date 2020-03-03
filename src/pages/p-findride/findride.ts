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
  geoqueryRoute:any;
  // geoquery1LMU:any;
  // geoquery2LMU:any;
  // keyexitedOr:any;
  // keyenteredOr:any;
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
  indexesOfPointsAlongRoute = [];
  // keyDetectedInGeofireOrigin:boolean = false;
  // keyDetectedInGeofireDestination:boolean = false;
  thereAreReserves:boolean;
  saveTrip:any;
  pointsAlongRoute = [];
  pointsToGeofire = [];
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


      /// logica keyReserves para myreserves

    
        // if user closed app at myRide before finishing a trip, this will delete the garbage 
        // Object.getOwnPropertyNames(this.zonesToIterate).forEach((key)=>{
        //   this.afDB.database.ref(this.zonesToIterate[key] + '/users/' + this.userUid + '/onTrip/').once('value').then((snapOnTrip)=>{
        //     if(snapOnTrip.val() === false || snapOnTrip.val() === undefined || snapOnTrip.val() === null){
        //       this.afDB.database.ref(this.zonesToIterate[key] + '/users/' + this.userUid + '/saveTrip/').remove();
        //       this.afDB.database.ref(this.zonesToIterate[key] + '/users/' + this.userUid + '/trip/').remove();
        //       this.afDB.database.ref(this.zonesToIterate[key] + '/users/' + this.userUid + '/availableReserves/').remove();
        //       this.afDB.database.ref(this.zonesToIterate[key] + '/users/' + this.userUid + '/keyTrip/').remove();
        //       this.afDB.database.ref(this.zonesToIterate[key] + '/users/' + this.userUid + '/onTrip/').remove();

        //     }
        //   })
        // })


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
      spinner: 'crescent',
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
                      this.setGeofireOr( snapGeoquery.val().geofireOr, this.myLatLngOr.lat, this.myLatLngOr.lng, this.userUid);
                      this.indexesOfPointsAlongRoute.forEach(index => {
                        this.setGeofireRouteOrigin(snapGeoquery.val().geofireRoute, this.pointsAlongRoute[index].lat, this.pointsAlongRoute[index].lng, this.userUid)
                      });
                      console.log('executed geofire Or'); 
                  }else{
                      this.setGeofireOr( snapGeoquery.val().geofireOr, this.myLatLngOr.lat(), this.myLatLngOr.lng(), this.userUid);
                      this.indexesOfPointsAlongRoute.forEach(index => {
                        this.setGeofireRouteOrigin(snapGeoquery.val().geofireRoute, this.pointsAlongRoute[index].lat, this.pointsAlongRoute[index].lng, this.userUid)
                      })
                      console.log('executed geofire Or');  
                    }
                    
                    setTimeout(() => {
                      if(this.geofireOriginConfirmed === true){
                        this.setGeofireDest(snapGeoquery.val().geofireDest, this.myLatLngDest.lat(), this.myLatLngDest.lng(), this.userUid);
                        this.indexesOfPointsAlongRoute.forEach(index=>{
                          this.setGeofireRouteDest(snapGeoquery.val().geofireRoute, this.pointsAlongRoute[index].lat, this.pointsAlongRoute[index].lat, this.userUid)
                        })
                      }else{
                        this.loading.dismiss();
                        this.presentAlert('No hay ningún pooler pasando por tu ubicación en este momento','Por favor intentalo más tarde','Ok') 
                        console.log(this.geofireDestinationConfirmed, this.geofireOriginConfirmed);
                      
                      }
                    }, 3000);
                    
                  })
                
                  
                 })
          
                  // si no hay nada disponible
                  setTimeout(() => {
                    if(this.geofireOriginConfirmed === false){
                      
                    }else{
                      if(this.geofireDestinationConfirmed === false){
                        this.loading.dismiss();
                        this.presentAlert('No te sirve la ruta de ningún pooler en este momento','Por favor intentalo más tarde','Ok') 
                        console.log(this.geofireDestinationConfirmed, this.geofireOriginConfirmed);
                      }else{
                        moment.locale('es'); //to make the date be in spanish  
                      let today = moment().format('MMMM Do , h:mm:ss a'); //set actual date
                      console.log(today)
                      this.MetricsService.createdReserves(this.userUid,today,this.desFirebase,this.orFirebase);
                      this.loading.dismiss();
                      this.app.getRootNav().push('ListridePage');
                      
                      // console.log('esto debe ser false y es: ' + this.geofireDestinationConfirmed);
                      // console.log('esto debe ser false y es: ' + this.geofireOriginConfirmed); 
                      console.log("se ejecuto")
                      }
                    } 
                  }, 5000);
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


    //geoquery origin
    setGeofireOr( radius:number, lat, lng, userId ):void{ 
      this.dbRef = this.afDB.database.ref(  '/geofireOr/' );
      this.geoFire = new GeoFire(this.dbRef); 
    
      this.geoquery2 = this.geoFire.query({
        center: [lat, lng],
        radius: radius
      })
     
        this.keyEnteredOr( userId  );
        this.keyExitedOr( userId  );
      
      
    
      console.log('geoquery or added');
    
    
    }


    keyEnteredOr( userId ){
      this.geoquery2.on("key_entered", function(key, location, distance){
         console.log(key);
         this.geofireOriginConfirmed = true;
  
          this.afDB.database.ref( '/usersTest/' + userId + '/availableReserves/' + key).update({
          keyReserve: key
         }).then(()=>{
           //get driverId from geofireOr node
           
            return this.afDB.database.ref('/geofireOr/'+ key).once('value').then((snap) => {
                this.driverOnNodeOr = snap.val();
    
                this.afDB.database.ref('/usersTest/' + userId + '/availableReserves/' + key).update({
                    driverId: this.driverOnNodeOr.driverId
        
                })  
            })
    
         }).then(()=>{
          console.log(this.viewCtril.name)
          moment.locale('es'); //to make the date be in spanish  
          let today = moment().format('MMMM Do , h:mm:ss a'); //set actual date
          console.log(today)
          this.MetricsService.createdReserves(this.userUid,today,this.desFirebase,this.orFirebase);
      
          console.log("se ejecuto")
  
         })
    
    
             
       }.bind(this))
      }
    
    
      
      keyExitedOr( userId  ){
       this.geoquery2.on("key_exited", function(key){
         this.afDB.database.ref( '/usersTest/' + userId + '/availableReserves/' + key).remove()
       }.bind(this))
      }

      


      //geoquery origin in route
 


    setGeofireRouteOrigin( radius:number, lat, lng, userId ):void{ 
    
      this.dbRef = this.afDB.database.ref(  '/geofireRoute/' );
      this.geoFire = new GeoFire(this.dbRef); 
    
      this.geoqueryRoute = this.geoFire.query({
        center: [lat, lng],
        radius: radius
      })
     
        this.keyEnteredRouteOrigin( userId  );
        this.keyExitedRouteOrigin( userId  );    
    
      console.log('geoquery or added');
    
    
    }

    


    keyEnteredRouteOrigin(userId){

      this.geoqueryRoute.on("key_entered", function(key, location, distance){
        console.log('algo entro en query ruta origin') 
        this.geofireOriginConfirmed = true;    
      }.bind(this))

    }


    keyExitedRouteOrigin(userId){
      this.geoquery2.on("key_exited", function(key){
        console.log('algo salio de query ruta origen');
        
      }.bind(this))
      
    }


  

    //geoquery destination
    setGeofireDest( radius:number, lat, lng, userId):void{ 
      this.dbRef = this.afDB.database.ref(  '/geofireDest/' );
      this.geoFire = new GeoFire(this.dbRef); 
    
      this.geoquery1 = this.geoFire.query({
        center: [lat, lng],
        radius: radius
      })
    
      
      this.keyEnteredDest( userId );
      this.keyExitedDest(userId );
    
    console.log('geoquery dest added');
    }



    keyEnteredDest( userId  ){
      this.geoquery1.on("key_entered", function(key, location, distance){
       console.log(key);
        this.geofireDestinationConfirmed = true;
      //  this.afDB.list( + '/geofireDest/'+ key).valueChanges().subscribe((driverOnNode)=>{
      //     this.driverOnNodeDest = driverOnNode;
      // })
  
         this.afDB.database.ref( '/usersTest/' + userId + '/availableReserves/' + key).update({
          keyReserve: key
         }).then(()=> {
             return this.afDB.database.ref( '/geofireDest/'+ key).once('value').then((snap) => {
              this.driverOnNodeDest = snap.val();
  
              this.afDB.database.ref( '/usersTest/' + userId + '/availableReserves/' + key).update({
                  driverId: this.driverOnNodeDest.driverId
      
              })  
          })
         }).then(()=>{

          // this.keyDetectedInGeofireDestination = true;
          moment.locale('es'); //to make the date be in spanish  
          let today = moment().format('MMMM Do , h:mm:ss a'); //set actual date
          console.log(today)
          this.MetricsService.createdReserves(this.userUid,today,this.desFirebase,this.orFirebase);
          // this.loading.dismiss();
          // this.app.getRootNav().push('ListridePage');
          // console.log('esto debe ser true y es: ' + this.geofireDestinationConfirmed);
          // console.log('esto debe ser false y es: ' + this.geofireOriginConfirmed); 
          console.log("se ejecuto")

       })
         console.log('keyentered here');
       
     }.bind(this))
   }
   
   
   keyExitedDest(userId){
     
     this.geoquery1.on("key_exited", function(key){
       this.afDB.database.ref(  '/usersTest/' + userId + '/availableReserves/' + key).remove()
     }.bind(this))
   }



    //geoquery destination in route
    setGeofireRouteDest( radius:number, lat, lng, userId ):void{ 
      this.dbRef = this.afDB.database.ref(  '/geofireRoute/' );
      this.geoFire = new GeoFire(this.dbRef); 
    
      this.geoqueryRoute = this.geoFire.query({
        center: [lat, lng],
        radius: radius
      })
     
        this.keyEnteredRouteOrigin( userId  );
        this.keyExitedRouteOrigin( userId  );    
    
      console.log('geoquery or added');
    
    
    }

    


    keyEnteredRouteDest(userId){

      this.geoqueryRoute.on("key_entered", function(key, location, distance){
        console.log('algo entro en query ruta destination') 
        this.geofireDestinationConfirmed = true;    
      }.bind(this))

    }


    keyExitedRouteDest(userId){
      this.geoquery2.on("key_exited", function(key){
        console.log('algo salio de query ruta destination');
        
      }.bind(this))
      
    }

    

      goToBikeMode(){
        console.log(this.user);
        
        this.navCtrl.push('BikeModePage',{user:this.user})
      }

}
   
    
  
  



