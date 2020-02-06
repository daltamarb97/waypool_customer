import { Component, NgZone, ElementRef, ViewChild } from '@angular/core';
import { NavController, NavParams, AlertController, ToastController, IonicPage } from 'ionic-angular';

import { DriverSendCoordsService } from '../../services/d-sendCoords.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { DriverSignUpService } from '../../services/d-signup.service';
import { DriverAuthenticationService } from '../../services/d-driverauthentication.service';
import { Geolocation } from '@ionic-native/geolocation/';
import * as firebase from 'Firebase';
import { CallNumber } from '@ionic-native/call-number';
import * as moment from 'moment';
import { DriverGeofireService } from '../../services/d-geofire.services';
import { DriverTripsService } from '../../services/d-trips.service';
import { Subject } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';

declare var google; 
@IonicPage()
@Component({
  selector: 'driver-page-pickup',
  templateUrl: 'driverPickup.html'
})
export class DriverPickupPage {
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  markers:any;
  user:any;
  directionsService: any = null;
  directionsDisplay: any = null;
  bounds: any = null;
  myLatLng:any;
  destinationOnTrip:any;
  geocoder:any;
  addressOrigin:any;
  updatelocation:any;
  driverUid=this.AngularFireAuth.auth.currentUser.uid;
  userDriver:any;
  userFirebase:any;
  keyTrip:string;
  unsubscribe = new Subject;
  amountToReceive:any;
  priceOfTrip:any;
  constructor(public navCtrl: NavController,public alertCtrl: AlertController,public TripsService:DriverTripsService,public toastCtrl: ToastController,private callNumber: CallNumber,public navParams: NavParams,public SignUpService:DriverSignUpService,private authenticationService:DriverAuthenticationService, public geolocation: Geolocation,public zone: NgZone, public sendCoordsService: DriverSendCoordsService, private AngularFireAuth: AngularFireAuth, private afDB: AngularFireDatabase) {
    this.markers = [];
    //we get the info of the users with navParams
    this.user= this.navParams.get('user');
    this.keyTrip= this.navParams.get('keyTrip'); 
    this.TripsService.getSpecificUser(this.SignUpService.userPlace, this.keyTrip,this.driverUid,this.user.userId).takeUntil(this.unsubscribe)
      .subscribe((user)=>{
        user
        if(user === undefined || user === null){
          this.navCtrl.pop();
          console.log("me fui")
        }
      })

      this.getPriceOfTrip(this.SignUpService.userPlace, this.driverUid, this.keyTrip);


       

    this.directionsService = new google.maps.DirectionsService();
    this.directionsDisplay = new google.maps.DirectionsRenderer({
      suppressMarkers: true,
  });
    this.bounds = new google.maps.LatLngBounds();
    this.geocoder = new google.maps.Geocoder();

    this.SignUpService.getMyInfoDriver(this.SignUpService.userPlace, this.driverUid).takeUntil(this.unsubscribe)
		.subscribe(userDriver => {
			this.userDriver = userDriver;
			console.log(this.userDriver);
		});

  }



  ionViewDidLoad(){
    
    this.loadMap();
  
  }


  getPriceOfTrip(place, driverUid, keyTrip){
    this.afDB.database.ref(place + '/trips/'+driverUid+'/'+ keyTrip+ '/price/').once('value').then((snapPrice)=>{
      this.priceOfTrip = snapPrice.val();
      console.log(this.priceOfTrip);
      
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

        this.myLatLng = {lat: position.coords.latitude , lng: position.coords.longitude};
    //creates the map and give options
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      this.geocodeLatLng(latLng)

      let marker = new google.maps.Marker({
        map: this.map,
        animation: google.maps.Animation.DROP,
        position: latLng,
        icon: {         url: "assets/imgs/marker-origin-driver.png",
        scaledSize: new google.maps.Size(90, 90)    

      }
      
        
      });
      this.markers.push(marker);   
      },(err) => {
      console.log(err);    
     });
     //transform the position of the user into an adress
    this.geocodeAddress(this.user.origin)

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
   geocodeAddress(userOrigin) {
    this.geocoder.geocode({'address':JSON.stringify(userOrigin)}, (results, status) =>  {
      if (status == 'OK') {
     
        
        var marker = new google.maps.Marker({
          map: this.map,
          position: results[0].geometry.location,
          icon: {         url: "assets/imgs/marker-destination2.png",
          scaledSize: new google.maps.Size(90, 90)     
        }
        });
      
        this.directionsDisplay.setMap(this.map);
        this.calculateRoute(results[0].geometry.location)
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
      
    });
    
  }
  geocodeLatLng(latLng) {

    this.geocoder.geocode({'location': latLng}, (results, status) => {
      if (status === 'OK') {
        if (results[0]) {
           this.addressOrigin= results[0].formatted_address
        } else {
         alert('No results found');
        }
      } else {
        alert('Geocoder failed due to: ' + status);
      }
                  
  
    });
  } 
  calculateRoute(destinationOnTrip){
    //tutorial ngclassroom https://blog.ng-classroom.com/blog/ionic2/directions-google-js-ionic/

    this.bounds.extend(this.myLatLng);

    
  
    this.map.fitBounds(this.bounds);
    
    this.directionsService.route({
     origin: new google.maps.LatLng(this.myLatLng.lat, this.myLatLng.lng),
      destination: destinationOnTrip,
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


   
    addMarker(location) {
      let marker = new google.maps.Marker({
        position: location,
        map: this.map,
        // icon: image
      });
      this.markers.push(marker);
    }
    
    setMapOnAll(map) {
      for (var i = 0; i < this.markers.length; i++) {
        this.markers[i].setMap(map);
      }
    }
    
    clearMarkers() {
      this.setMapOnAll(null);
    }
    
    deleteMarkers() {
      this.clearMarkers();
      this.markers = [];
    }
    unSubscribeServices(){
      this.unsubscribe.next();
      this.unsubscribe.complete();
    }    
    notifyDriver(){
      this.presentToast(`Se le ha notificado a ${this.user.name} que ya llegaste`,3000,'top');
    }



    PickUp(){

      this.TripsService.pickUp(this.SignUpService.userPlace, this.keyTrip,this.driverUid,this.user.userId,this.user);

      // FREE RIDES LOGIC
      this.afDB.database.ref('/allCities/'+ this.userDriver.city + '/allPlaces/' + this.user.company ).once('value').then((snap)=>{
        let freeRidesCompany = snap.val().freeRidesNumber;
        let obj = snap.val().zones;
        if(freeRidesCompany > 0){
          this.afDB.database.ref(this.SignUpService.userPlace + '/users/' + this.user.userId).once('value').then((snapUser)=>{
            let personalFreeRidesNumber = snapUser.val().personalFreeRides;

              if(personalFreeRidesNumber > 0){
                console.log('si hay viaje gratis');

                 //PAYMENTS LOGIC PASSENGERS
                    // REGLA DE SEGURIDAD PARA ESTO: ES VIOLACIÓN ABSOLUTA
         
                      Object.getOwnPropertyNames(obj).forEach((key)=>{
                        if(obj[key] === 2 || obj[key] === 3 || obj[key] === 4 || obj[key] === 5 || obj[key] === 6 || obj[key] === 1 || obj[key] === 7 || obj[key] === 8 || obj[key] === 9 || obj[key] === 10 ){

                        }else{
                          this.afDB.database.ref(obj[key] + '/users/' + this.user.userId + '/pendingToPay/').once('value').then((snapUserPay)=>{
                            if(snapUserPay.val()=== undefined || snapUserPay.val() === null){
                              this.TripsService.sendPaymentInfoOfTripForUser(obj[key], this.user.userId, 0);
                              let remainingPersonalFreeRides = personalFreeRidesNumber - 1;
                              console.log(remainingPersonalFreeRides);
                              let remainingCompanyFreeRides = freeRidesCompany - 1;
                              console.log(remainingCompanyFreeRides);
                              this.TripsService.reduceNumberCompanyFreeRides(this.userDriver.city, this.user.company, remainingCompanyFreeRides );
                              this.TripsService.reduceNumberPersonalFreeRides(obj[key], this.user.userId, remainingPersonalFreeRides);
                            }else{
                              let amountToPayUser = parseInt(snapUserPay.val()) + 0;
                              this.TripsService.sendPaymentInfoOfTripForUser(obj[key], this.user.userId, amountToPayUser); 
                              let remainingPersonalFreeRides = personalFreeRidesNumber - 1;
                              console.log(remainingPersonalFreeRides);
                              let remainingCompanyFreeRides = freeRidesCompany - 1;
                              console.log(remainingCompanyFreeRides);
                              this.TripsService.reduceNumberCompanyFreeRides(this.userDriver.city, this.user.company, remainingCompanyFreeRides );
                              this.TripsService.reduceNumberPersonalFreeRides(obj[key], this.user.userId, remainingPersonalFreeRides);
                            }
                          })
                        }
                      })
                    
                    ///////// TERMINA LA VIOLACION
                
                
              }else{

                Object.getOwnPropertyNames(obj).forEach((key)=>{
                  if(obj[key] === 2 || obj[key] === 3 || obj[key] === 4 || obj[key] === 5 || obj[key] === 6 || obj[key] === 1 || obj[key] === 7 || obj[key] === 8 || obj[key] === 9 || obj[key] === 10 ){

                  }else{
                    this.afDB.database.ref(obj[key] + '/users/' + this.user.userId + '/pendingToPay/').once('value').then((snapUserPay)=>{
                      if(snapUserPay.val()=== undefined || snapUserPay.val() === null){
                        this.TripsService.sendPaymentInfoOfTripForUser(obj[key], this.user.userId, this.priceOfTrip);
                
                      }else{
                        let amountToPayUser = parseInt(snapUserPay.val()) + parseInt(this.priceOfTrip);
                        this.TripsService.sendPaymentInfoOfTripForUser(obj[key], this.user.userId, amountToPayUser); 
                      }
                    })
                  }
                })

              }
          
          })
        }else{
          console.log('no hay viaje gratis');

          Object.getOwnPropertyNames(obj).forEach((key)=>{
            if(obj[key] === 2 || obj[key] === 3 || obj[key] === 4 || obj[key] === 5 || obj[key] === 6 || obj[key] === 1 || obj[key] === 7 || obj[key] === 8 || obj[key] === 9 || obj[key] === 10 ){

            }else{
              this.afDB.database.ref(obj[key] + '/users/' + this.user.userId + '/pendingToPay/').once('value').then((snapUserPay)=>{
                if(snapUserPay.val()=== undefined || snapUserPay.val() === null){
                  this.TripsService.sendPaymentInfoOfTripForUser(obj[key], this.user.userId, this.priceOfTrip);
          
                }else{
                  let amountToPayUser = parseInt(snapUserPay.val()) + parseInt(this.priceOfTrip);
                  this.TripsService.sendPaymentInfoOfTripForUser(obj[key], this.user.userId, amountToPayUser); 
                }
              })
            }
          })
          
        }
      })

      ///////


      /// HACER REGLA DE SEGURIDAD///////


      // 1. KMS SAVED ON THAT SPECIFIC COMPANY BY POOLERS GLOBAL
      this.afDB.database.ref('/data/allTrips/'+ this.userDriver.company + '/savedKM/' ).once('value').then((snap)=>{
        let currentKM = snap.val();

        if(currentKM === undefined || currentKM === null){
          this.TripsService.addSavedKMGlobal(this.userDriver.company, this.user.distance);
        }else{
          let savedKM = currentKM + this.user.distance;
          this.TripsService.addSavedKMGlobal(this.userDriver.company, savedKM);
        }
      })

      // 2. KMS SAVED ON THAT SPECIFIC COMPANY BY PASSENGERS GLOBAL
      this.afDB.database.ref('/data/kmsSavedByPassengers/'+ this.user.company + '/savedKM/' ).once('value').then((snap)=>{
        let currentKM = snap.val();

        if(currentKM === undefined || currentKM === null){
          this.TripsService.addSavedKMGlobalPassengers(this.userDriver.company, this.user.distance);
        }else{
          let savedKM = currentKM + this.user.distance;
          this.TripsService.addSavedKMGlobalPassengers(this.userDriver.company, savedKM);
        }
      })


      // 3. KMS SAVED BY EACH POOLER OF A SPECIFIC COMPANY
      this.afDB.database.ref('data/allTrips/'+this.userDriver.company+'/'+this.driverUid+'/savedKM/').once('value').then((snap)=>{
        if(snap.val() === null || snap.val() === undefined ){
          this.afDB.database.ref('data/allTrips/'+this.userDriver.company+'/'+this.driverUid).update({
            savedKM: this.user.distance
          })
        }else{
          this.afDB.database.ref('data/allTrips/'+this.userDriver.company+'/'+this.driverUid).update({
            savedKM: snap.val() + this.user.distance
          })
        }
      })



      // 4. KMS SAVED BY EACH PASSENGER OF A SPECIFIC COMPANY
      this.afDB.database.ref('data/kmsSavedByPassengers/'+this.user.company+'/'+this.user.userId+'/savedKM/').once('value').then((snap)=>{
        if(snap.val() === null || snap.val() === undefined ){
          this.afDB.database.ref('data/kmsSavedByPassengers/'+this.user.company+'/'+this.user.userId).update({
            savedKM: this.user.distance
          })
        }else{
          this.afDB.database.ref('data/kmsSavedByPassengers/'+this.user.company+'/'+this.user.userId).update({
            savedKM: snap.val() + this.user.distance
          })
        }
      })
      ///////////////////





      //////// TERMINAR REGLA DE SEGURIDAD ////////

      this.TripsService.eliminatePendingUsers(this.SignUpService.userPlace, this.keyTrip,this.driverUid,this.user.userId);
      // this.sendCoordsService.pushPriceOnUser(this.useruid,this.user.userId,this.userDriver.trips.price);
      this.presentToast(`Acabas de recoger a ${this.user.name}, ¡Salúdalo por nosotros!`,4000,'top');
      // this.sendCoordsService.pickUpInstance(this.user.userId);
      moment.locale('es');   
      let currDate = moment().format('MMMM Do YYYY, h:mm:ss a');
      // this.sendCoordsService.timeOfPickedUpDriver(this.driverUid,currDate,this.user.userId);
      // this.sendCoordsService.timeOfPickedUpUser(this.user.userId,currDate);

      /////////////////////





      //PAYMENTS LOGIC POOLERS
      this.afDB.database.ref('allCities/' + this.userDriver.city + '/allPlaces/' + this.userDriver.company).once('value').then((snapFee)=>{
        const amountToCharge = snapFee.val().feeAmount;
        if(snapFee.val().feeActive === true){

          let obj = snapFee.val().zones
          Object.getOwnPropertyNames(obj).forEach((key)=>{
            if(obj[key] === 2 || obj[key] === 3 || obj[key] === 4 || obj[key] === 5 || obj[key] === 6 || obj[key] === 1 || obj[key] === 7 || obj[key] === 8 || obj[key] === 9 || obj[key] === 10 ){

            }else{
              this.afDB.database.ref(obj[key] + '/drivers/' + this.driverUid + '/pendingToReceive/').once('value').then((snap)=>{
                if(snap.val() === null || snap.val() === undefined){
                  this.amountToReceive = parseInt(this.priceOfTrip) - (parseInt(this.priceOfTrip) * amountToCharge)
                }else{
                  this.amountToReceive = (parseInt(snap.val())  + parseInt(this.priceOfTrip)) - (parseInt(this.priceOfTrip) * amountToCharge);
                }
                this.TripsService.sendPaymentInfoOfTrip(obj[key], this.driverUid, this.amountToReceive);
        
              })
            }
          })
      }else{

        let obj = snapFee.val().zones
        Object.getOwnPropertyNames(obj).forEach((key)=>{
          if(obj[key] === 2 || obj[key] === 3 || obj[key] === 4 || obj[key] === 5 || obj[key] === 6 || obj[key] === 1 || obj[key] === 7 || obj[key] === 8 || obj[key] === 9 || obj[key] === 10 ){

          }else{
            this.afDB.database.ref(obj[key] + '/drivers/' + this.driverUid + '/pendingToReceive/').once('value').then((snap)=>{
              if(snap.val() === null || snap.val() === undefined){
                this.amountToReceive = this.priceOfTrip;
              }else{
                this.amountToReceive = parseInt(snap.val())  + parseInt(this.priceOfTrip);
              }
              this.TripsService.sendPaymentInfoOfTrip(obj[key], this.driverUid, this.amountToReceive);
      
            })
          }
        })
      }
   })
}




    ionViewDidLeave(){
      this.unsubscribe.next();
      this.unsubscribe.complete();
    }
    callUser(){
    
      this.callNumber.isCallSupported()
    .then((response) => {
    if (response == true) {
      this.callNumber.callNumber(this.user.phone, true)
      .then(res => console.log('Launched dialer!', res)) //si no es necesario esta promesa, eliminarla
      .catch(err => console.log('Error launching dialer', err));
    }
    else {
        this.presentAlert('Error','No se pudo generar la llamada','ok');
          }
      });
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

    goToWaze(){
    }}


