import { Component, NgZone, ElementRef, ViewChild } from '@angular/core';
import { NavController, NavParams, AlertController, ToastController, IonicPage } from 'ionic-angular';

import { sendCoordsService } from '../../services/sendCoords.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Geolocation } from '@ionic-native/geolocation/';
import * as firebase from 'Firebase';
import { CallNumber } from '@ionic-native/call-number';
import * as moment from 'moment';
import { TripsService } from '../../services/trips.service';
import { Subject } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';
import { SignUpService } from '../../services/signup.services';
import { Subscription } from 'rxjs/Subscription';
import { filter } from 'rxjs/operators';
import { MetricsService } from '../../services/metrics.service';

declare var google; 
@IonicPage()
@Component({
  selector: 'page-tripbike',
  templateUrl: 'tripbike.html'
})
export class TripbikePage {
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  markers:any;
  user:any;
  directionsService: any = null;
  directionsDisplay: any = null;
  bounds: any = null;
  myLatLng:any;
  destinationOnTrip:any;
  addressOrigin:any;
  updatelocation:any;
  userUid=this.AngularFireAuth.auth.currentUser.uid;
  unsubscribe = new Subject;
  orCoords:any;
  destCoords:any;

  origin:any;
  destination:any;
  trackedRoute = [];
  previousTracks = [];
  currentMapTrack = null;
  positionSubscription: Subscription;
  testCoords : any = [];
  distance:any;
  trip:any;
  constructor(public navCtrl: NavController,public alertCtrl: AlertController,private MetricsService:MetricsService,public TripsService:TripsService,public toastCtrl: ToastController,private callNumber: CallNumber,public navParams: NavParams,private SignUpService: SignUpService, public geolocation: Geolocation,public zone: NgZone, public sendCoordsService: sendCoordsService, private AngularFireAuth: AngularFireAuth, private afDB: AngularFireDatabase) {
    this.markers = [];
    // this.testCoords = [
    //   {lat:11.012682, lng:-74.827385},
    //   {lat:11.011932, lng:-74.825462},
    //   {lat:11.012564, lng:-74.825105},
    //   {lat:11.012564, lng:-74.825105},
      
      

    //   ]
    //we get the info of the users with navParams
    this.user= this.navParams.get('user');
    this.orCoords= this.navParams.get('orCoords');
    this.destCoords= this.navParams.get('destCoords');

    this.origin= this.navParams.get('origin');
    this.destination= this.navParams.get('destination');
    this.distance= this.navParams.get('distance');
    this.distance = this.distance/1000

    console.log(this.trip);
    
    console.log(this.user);
    console.log(this.origin);
    console.log(this.destination);
    console.log(this.orCoords);
    console.log(this.destCoords);
    console.log(this.distance);




       

    this.directionsService = new google.maps.DirectionsService();
    this.directionsDisplay = new google.maps.DirectionsRenderer({
      suppressMarkers: true,
  });
    this.bounds = new google.maps.LatLngBounds();

  

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
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

        let marker = new google.maps.Marker({
          position:latLng,
          map: this.map,
          icon: {         url: "assets/imgs/bicimarker.png",
          scaledSize: new google.maps.Size(90,90)    
  
            }
        });
        this.markers.push(marker);

        this.myLatLng = {lat: position.coords.latitude , lng: position.coords.longitude};
    //creates the map and give options

    

      this.startTracking();

      },(err) => {
      console.log(err);    
     });
     //transform the position of the user into an adress

    // watch: track the position of the user
  //   let watch = this.geolocation.watchPosition();
  //   watch.subscribe((data) => {
  //   this.deleteMarkers();
  //   this.updatelocation = new google.maps.LatLng(data.coords.latitude,data.coords.longitude);
  //   this.geocodeLatLng(this.updatelocation);
  //   console.log(this.updatelocation)
    
  //   this.sendCoordsService.updateGeolocationOrigin(this.useruid,this.addressOrigin)
    
  //   this.addMarker(this.updatelocation);
  //   this.setMapOnAll(this.map); //nose de esta funcion
  // });   
  }




    goToWaze(){
   
    }
    startTracking() {

      this.trackedRoute = [];
   
      this.positionSubscription = this.geolocation.watchPosition()
        .pipe(
          filter((p) => p.coords !== undefined) //Filter Out Errors
        )
        .subscribe(data => {
          setTimeout(() => {
            this.trackedRoute.push({ lat: data.coords.latitude, lng: data.coords.longitude });
            this.redrawPath(this.trackedRoute,data);
            console.log(data);
            
          }, 0);
        });
   
    }
   
    redrawPath(path,data) {
      if (this.currentMapTrack) {
        this.currentMapTrack.setMap(null);
      }
      console.log(path.length > 1);
      
      if (path.length > 1) {
        this.currentMapTrack = new google.maps.Polyline({
          path: path,
          geodesic: true,
          strokeColor: '#4BB543',
          strokeOpacity: 1.0,
          strokeWeight: 3
        });
        this.deleteMarkers();
        let coordsForMarker = new google.maps.LatLng(data.coords.latitude,data.coords.longitude);
        this.addMarker(coordsForMarker);

        this.currentMapTrack.setMap(this.map);
        // this.addMarker(pathForMarker);
        this.setMapOnAll(this.map);

           }
          }
  
  
    addMarker(coordsForMarker) {
      let marker = new google.maps.Marker({
        position:coordsForMarker,
        map: this.map,
        icon: {         url: "assets/imgs/bicimarker.png",
        scaledSize: new google.maps.Size(90,90)    

          }
      });
      this.markers.push(marker);
    }
   

    // showHistoryRoute(route) {
    //   this.redrawPath(route);
    // }
    

    
    // setMapOnAll(map) {
    //   for (var i = 0; i < this.markers.length; i++) {
    //     this.markers[i].setMap(map);
    //   }
    // }
    
    clearMarkers() {
      
      this.setMapOnAll(null);
    }
    setMapOnAll(map) {
      for (var i = 0; i < this.markers.length; i++) {
        this.markers[i].setMap(map);
      }
    }
    deleteMarkers() {
      this.clearMarkers();
      this.markers = [];
        }
    unSubscribeServices(){
      this.unsubscribe.next();
      this.unsubscribe.complete();
    }    
   



    finishTrip(){
            //stop tracking the location and finishing trip

      moment.locale('es'); //to make the date be in spanish  
      let today = moment().format('MMMM Do , h:mm:ss a'); //set actual date
      let newRoute = { finished: new Date().getTime(), path: this.trackedRoute };
      console.log(newRoute);
      
      

      // this.storage.set('routes', this.previousTracks);
      
      this.positionSubscription.unsubscribe();
      this.TripsService.recordTripsInBike(this.userUid,today,newRoute,this.origin,this.destination,this.distance)
      this.MetricsService.metricTripsInBikes(this.userUid,today,newRoute,this.origin,this.destination,this.distance)
      this.navCtrl.setRoot('FindridePassPage');

    }
    cancelTrip(){


      //stop tracking the location 
      let alert = this.alertCtrl.create({
        title: 'Cancelar Viaje',
        message: `¿Estas seguro que deseas cancelar?`,
        buttons: [
          {
            text: 'No',
            role: 'cancel',
            handler: () => {
            //do nothing
            }
          },
          { 
            text: 'Si',
            handler: () => {
              //preguntar
        
              // this.storage.set('routes', this.previousTracks);
             
              this.positionSubscription.unsubscribe();
              this.navCtrl.setRoot('FindridePassPage');
            }
          }
        ]
      });
      alert.present();
     

    

    }



    ionViewDidLeave(){
      this.unsubscribe.next();
      this.unsubscribe.complete();
    }
   
    presentToast(message:string,duration,position:string) {     
      const toast = this.toastCtrl.create({
        message: message,
        duration: duration,
        position:position
      });
      toast.present();
    }
    presentAlert(title:string,text:string,button:string) {
      let alert = this.alertCtrl.create({
        title: title,
        subTitle: text,
        buttons: [button]
      });
      alert.present();
    }
    help(){
      const toast = this.toastCtrl.create({
        message: 'En esta página podrás ver mejor la dirección que de tu compañer@s a través de un mapa, cuando hayas llegado al lugar donde está tu compañer@, cada vez que presiones el botón "Ya llegué" se le enviará una notificación al estudiante de que ya llegaste. ¡Que disfruten el viaje!',
        showCloseButton:true,
        closeButtonText: 'OK',
        position:'top'
           });
      toast.present();
    }
  }


