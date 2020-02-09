import { Component, ViewChild, ElementRef,NgZone, Renderer } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/';
import { NavController, Platform, ViewController, AlertController, ModalController, ToastController, IonicPage, App, LoadingController } from 'ionic-angular';
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
  selector: 'driver-page-findride',
  templateUrl: 'driverFindride.html'
})
export class DriverFindridePage {
 

  @ViewChild('map') mapElement: ElementRef;
  @ViewChild('buttonConected',{read:ElementRef}) buttonConected;
  @ViewChild('buttonDisconected',{read:ElementRef}) buttonDisconected;

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
  
  //¿Adonde vas? 
  destinationSelect: any;
  //firebase 
  trip:any = {};
  // tripIdFirebase = this.AngularFireAuth.auth.currentUser;
  desFirebase:any;
  houseAddress:any;
  placeAddress:any;
  tripId:any = null;
  orFirebase:any;
  user = this.AngularFireAuth.auth.currentUser.uid;

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
  multipleDestinations:any = [];
  showList: boolean;
  positionOrMarker: any;
  markersOr: any = [];
  markersDest: any = [];
  geocoordinatesDestName: any;
  destName: any;
  multipleLocations:boolean;
  zonesToIterate:any;

  constructor( private geofireService: DriverGeofireService,public TripsService:DriverTripsService, public afDB: AngularFireDatabase, public navCtrl: NavController,public SignUpService:DriverSignUpService,public modalCtrl: ModalController,private authenticationService: DriverAuthenticationService, public geolocation: Geolocation,public zone: NgZone, public sendCoordsService: DriverSendCoordsService, private AngularFireAuth: AngularFireAuth, public alertCtrl: AlertController, private toastCtrl: ToastController, private app: App, private sendUsersService: DriverSendUsersService, public instancesService: DriverInstancesService, public firebaseNative: Firebase, private platform: Platform, private fcm: FCM, public loadingCtrl: LoadingController, public renderer: Renderer ) {

    console.log(this.user);
    
    console.log(this.currentUser);
    
    
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

    this.afDB.database.ref('allUsers/' + this.user).once('value').then((snap)=>{
      if(snap.val().toggleOnline){
        this.SignUpService.userPlace = snap.val().toggleOnline


        this.afDB.database.ref('allCities/' + snap.val().city + '/allPlaces/' + snap.val().place).once('value').then((snapshot)=>{
          console.log(snapshot.val().multipleLocations);
          this.zonesToIterate = snapshot.val().zones;
          this.multipleDestinations = snapshot.val().location;
          console.log(this.multipleDestinations);
          
    
          if(snapshot.val().multipleLocations === true){
            this.multipleLocations = true;
    
            //user get their check sign of verficiation here
            let objVerifiedPerson = snapshot.val().zones;
            Object.getOwnPropertyNames(objVerifiedPerson).forEach((key)=>{    
            
              if(objVerifiedPerson[key] === 2 || objVerifiedPerson[key] === 3 || objVerifiedPerson[key] === 4 || objVerifiedPerson[key] === 5 || objVerifiedPerson[key] === 6 || objVerifiedPerson[key] === 1 || objVerifiedPerson[key] === 7 || objVerifiedPerson[key] === 8 || objVerifiedPerson[key] === 9 || objVerifiedPerson[key] === 10){
    
              }else{
                this.instancesService.isVerifiedPerson(objVerifiedPerson[key], this.user);
              }
            })
    
    
          }else{
            this.multipleLocations = false;
            //user get their check sign of verficiation here
            this.instancesService.isVerifiedPerson(this.SignUpService.userPlace, this.user);
    
          }
          
        }).then(()=>{
          console.log(this.zonesToIterate);
          
        this.platform.ready().then(()=>{
    
          // this.getToken();
    
          console.log('aqui cogi el token');
    
          this.token = this.fcm.getToken().then((token)=>{
            console.log('this is the token ' + token);
    
            Object.getOwnPropertyNames(this.zonesToIterate).forEach((key)=>{
              if(this.zonesToIterate[key] === 2 || this.zonesToIterate[key] === 3 || this.zonesToIterate[key] === 4 || this.zonesToIterate[key] === 5 || this.zonesToIterate[key] === 6 || this.zonesToIterate[key] === 1 || this.zonesToIterate[key] === 7 || this.zonesToIterate[key] === 8 || this.zonesToIterate[key] === 9 || this.zonesToIterate[key] === 10){
    
              }else{
                this.afDB.database.ref(this.zonesToIterate[key] + '/drivers/' + this.user + '/devices/').update({
                  token: token
                })
              }
            })
          })
      })
    
      console.log(this.SignUpService.userPlace);
      
      this.afDB.database.ref(this.SignUpService.userPlace + '/drivers/'+this.user).once('value').then((snap)=>{
        this.userInfo = snap.val();
        console.log(this.userInfo);
        this.autocompleteMyDest.input=this.userInfo.fixedLocation.name;
        
        let lat=this.userInfo.fixedLocation.coordinates.lat
        console.log(this.lat);
        
        let lng=this.userInfo.fixedLocation.coordinates.lng
        this.positionDest = {lat,lng};
        console.log(this.positionDest);
        
        const inputs2: any = document.getElementById("input2").getElementsByTagName("INPUT");
        inputs2[0].disabled=true;
    
        if(this.userInfo.toggleStatus === 'online'){
          // this.checked = true;
          this.isConected = true;
          this.isDisconected = false;
          this.changeColorOnline();
          this.disable();
        }else{
          this.isConected = false;
          this.isDisconected = true;
          this.changeColorOffline();
          this.enable();
        }
        if (this.userInfo.houseAddress === undefined || this.userInfo.houseAddress === null) {
          this.pushOriginPage();
    
    
        } else {
          let latOr = this.userInfo.houseAddress.coordinates.lat;
    
        let lngOr = this.userInfo.houseAddress.coordinates.lng;
        this.positionOr = {latOr,lngOr};
        console.log(this.positionOr);
        
        this.LoadMapWithHouseAdress(this.positionOr);
    
        }
      })
        
      
      //search keyTrip
    
       //search keyTrip
       this.TripsService.getKeyTrip(this.SignUpService.userPlace, this.user)
       .subscribe(keyTrip=>{
         this.keyTrip =keyTrip;
         console.log(this.user)
         console.log(this.keyTrip)
         //if key its deleted don't show VIAJE EN CURSO  
         if(this.keyTrip === undefined || this.keyTrip === null){
         this.onTrip=false;
         //  this.TripsService.eraseKeyTrip(this.user);
         //  this.TripsService.setOnTripFalse(this.user);
           console.log("llegue adonde era")
         }else{
           //confirm that trip exist and get it
           this.getTrip();
           
         }
    
    })
    
    
         console.log(this.SignUpService.userPlace);
         
         this.SignUpService.getMyInfo(this.SignUpService.userPlace, this.user).subscribe(user=>{
           this.userInfo = user;
          console.log(this.userInfo);
          
         }) 
        })
}else{



        this.afDB.database.ref('allCities/' + snap.val().city + '/allPlaces/' + snap.val().place).once('value').then((snapshot)=>{
          console.log(snapshot.val().multipleLocations);
          this.zonesToIterate = snapshot.val().zones;
          this.multipleDestinations = snapshot.val().location;
          console.log(this.multipleDestinations);
          
    
          if(snapshot.val().multipleLocations === true){
            // temporary location until user chooses the right location of their company
            this.SignUpService.userPlace = snapshot.val().zones[0]
            this.multipleLocations = true;
    
            //user get their check sign of verficiation here
            let objVerifiedPerson = snapshot.val().zones;
            Object.getOwnPropertyNames(objVerifiedPerson).forEach((key)=>{    
            
              if(objVerifiedPerson[key] === 2 || objVerifiedPerson[key] === 3 || objVerifiedPerson[key] === 4 || objVerifiedPerson[key] === 5 || objVerifiedPerson[key] === 6 || objVerifiedPerson[key] === 1 || objVerifiedPerson[key] === 7 || objVerifiedPerson[key] === 8 || objVerifiedPerson[key] === 9 || objVerifiedPerson[key] === 10){
    
              }else{
                this.instancesService.isVerifiedPerson(objVerifiedPerson[key], this.user);
              }
            })
    
    
          }else{
            this.SignUpService.userPlace = snapshot.val().zones[0]
            this.multipleLocations = false;
    
            //user get their check sign of verficiation here
            this.instancesService.isVerifiedPerson(this.SignUpService.userPlace, this.user);
    
          }



          //logica de instrucciones 
        this.afDB.database.ref(snapshot.val().zones[0] + '/drivers/' + this.user ).once('value').then((snapWalkthr)=>{
          if(snapWalkthr.val().shownInstructions === true){
            console.log('ya lo mostre');
            
          }else{
            this.app.getRootNav().push('DriverWalkthroughPage');

            Object.getOwnPropertyNames(this.zonesToIterate).forEach((key)=>{    
          
              if(this.zonesToIterate[key] === 2 || this.zonesToIterate[key] === 3 || this.zonesToIterate[key] === 4 || this.zonesToIterate[key] === 5 || this.zonesToIterate[key] === 6 || this.zonesToIterate[key] === 1 || this.zonesToIterate[key] === 7 || this.zonesToIterate[key] === 8 || this.zonesToIterate[key] === 9 || this.zonesToIterate[key] === 10){
    
              }else{
                this.afDB.database.ref(this.zonesToIterate[key] + '/drivers/' + this.user).update({
                  shownInstructions: true
                })

              }
            })

          }
        })

          
        }).then(()=>{
          console.log(this.zonesToIterate);
          
        this.platform.ready().then(()=>{
    
          // this.getToken();
    
          console.log('aqui cogi el token');
    
          this.token = this.fcm.getToken().then((token)=>{
            console.log('this is the token ' + token);
    
            Object.getOwnPropertyNames(this.zonesToIterate).forEach((key)=>{
              if(this.zonesToIterate[key] === 2 || this.zonesToIterate[key] === 3 || this.zonesToIterate[key] === 4 || this.zonesToIterate[key] === 5 || this.zonesToIterate[key] === 6 || this.zonesToIterate[key] === 1 || this.zonesToIterate[key] === 7 || this.zonesToIterate[key] === 8 || this.zonesToIterate[key] === 9 || this.zonesToIterate[key] === 10){
    
              }else{
                this.afDB.database.ref(this.zonesToIterate[key] + '/drivers/' + this.user + '/devices/').update({
                  token: token
                })
              }
            })
          })
      })
    
      console.log(this.SignUpService.userPlace);
      
      this.afDB.database.ref(this.SignUpService.userPlace + '/drivers/'+this.user).once('value').then((snap)=>{
        this.userInfo = snap.val();
        console.log(this.userInfo);
        this.autocompleteMyDest.input=this.userInfo.fixedLocation.name;
        
        let lat=this.userInfo.fixedLocation.coordinates.lat
        console.log(this.lat);
        
        let lng=this.userInfo.fixedLocation.coordinates.lng
        this.positionDest = {lat,lng};
        console.log(this.positionDest);
        
        const inputs2: any = document.getElementById("input2").getElementsByTagName("INPUT");
        inputs2[0].disabled=true;
    
        if(this.userInfo.toggleStatus === 'online'){
          // this.checked = true;
          this.isConected = true;
          this.isDisconected = false;
          this.changeColorOnline();
          this.disable();
        }else{
          this.isConected = false;
          this.isDisconected = true;
          this.changeColorOffline();
          this.enable();
        }
        if (this.userInfo.houseAddress === undefined || this.userInfo.houseAddress === null) {
          this.pushOriginPage();
    
    
        } else {
          let latOr = this.userInfo.houseAddress.coordinates.lat;
    
        let lngOr = this.userInfo.houseAddress.coordinates.lng;
        this.positionOr = {latOr,lngOr};
        console.log(this.positionOr);
        
        this.LoadMapWithHouseAdress(this.positionOr);
    
        }
      })
        
      
      //search keyTrip
    
       //search keyTrip
       this.TripsService.getKeyTrip(this.SignUpService.userPlace, this.user)
       .subscribe(keyTrip=>{
         this.keyTrip =keyTrip;
         console.log(this.user)
         console.log(this.keyTrip)
         //if key its deleted don't show VIAJE EN CURSO  
         if(this.keyTrip === undefined || this.keyTrip === null){
         this.onTrip=false;
         //  this.TripsService.eraseKeyTrip(this.user);
         //  this.TripsService.setOnTripFalse(this.user);
           console.log("llegue adonde era")
         }else{
           //confirm that trip exist and get it
           this.getTrip();
           
         }
    
    })
    
    
         console.log(this.SignUpService.userPlace);
         
         this.SignUpService.getMyInfo(this.SignUpService.userPlace, this.user).subscribe(user=>{
           this.userInfo = user;
          console.log(this.userInfo);
          
         }) 
        })

      }
       
  
    })
  }
  
          




async getToken() {

  if (this.platform.is('android')) {
    this.token = await this.firebaseNative.getToken().then((token)=>{
      console.log('this is the token ' + token);

      Object.getOwnPropertyNames(this.zonesToIterate).forEach((key)=>{
        if(this.zonesToIterate[key] === 2 || this.zonesToIterate[key] === 3 || this.zonesToIterate[key] === 4 || this.zonesToIterate[key] === 5 || this.zonesToIterate[key] === 6 || this.zonesToIterate[key] === 1 || this.zonesToIterate[key] === 7 || this.zonesToIterate[key] === 8 || this.zonesToIterate[key] === 9 || this.zonesToIterate[key] === 10){

        }else{
          this.afDB.database.ref(this.zonesToIterate[key] + '/drivers/' + this.user + '/devices/').update({
            token: token
          })
        }
      })
    })
  }

  if (this.platform.is('ios')) {
    this.token = await this.firebaseNative.getToken().then((token)=>{
      console.log('this is the token ' + token);
      Object.getOwnPropertyNames(this.zonesToIterate).forEach((key)=>{
        if(this.zonesToIterate[key] === 2 || this.zonesToIterate[key] === 3 || this.zonesToIterate[key] === 4 || this.zonesToIterate[key] === 5 || this.zonesToIterate[key] === 6 || this.zonesToIterate[key] === 1 || this.zonesToIterate[key] === 7 || this.zonesToIterate[key] === 8 || this.zonesToIterate[key] === 9 || this.zonesToIterate[key] === 10){

        }else{
          this.afDB.database.ref(this.zonesToIterate[key] + '/drivers/' + this.user + '/devices/').update({
            token: token
          })
        }
      })
    })
    await this.firebaseNative.grantPermission();
  }

}

LoadMapWithHouseAdress(positionOr){
  this.geolocation.getCurrentPosition({enableHighAccuracy: true}).then((position) => {

    let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    console.log(latLng);
     this.positionOrMarker = new google.maps.LatLng(positionOr.latOr,positionOr.lngOr);
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

      
    this.markerGeolocation = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.positionOrMarker,
      draggable:true,
      icon: {         url: "assets/imgs/house.png",
      scaledSize: new google.maps.Size(70, 70)    

    }
    });
    this.markersOr.push(this.markerGeolocation);
    this.geocoordinatesHouse = positionOr;

    //allow the marker to be draged and changed the position
    this.dragMarkerOr(this.markerGeolocation,this.autocompleteMyPos);
    //to reverse-geocode position
    this.geocodeLatLng(this.positionOrMarker,this.autocompleteMyPos);
    console.log(this.userInfo.fixedLocation.name);

     this.markerDest = new google.maps.Marker({
            position: this.positionDest,
            map: this.map,
            animation: google.maps.Animation.DROP,
               icon: {         url: "assets/imgs/workbuilding.png",
            scaledSize: new google.maps.Size(250, 250)    
             }})
             this.markersDest.push(this.markerDest);       
             this.positionDest = new google.maps.LatLng(this.positionDest.lat,this.positionDest.lng);

             this.calculateRoute(this.positionOrMarker,this.positionDest);
             this.directionsDisplay.setMap(this.map);
    },(err) => {
    console.log(err);    
   });
 }

 conectDriver() {


console.log(  this.positionDest.lat);
  this.showList = false;

  if (this.userInfo.toggleStatus === 'online') {
      const alert = this.alertCtrl.create({
          title: '¡Ya estas conectado!',
          subTitle: 'Si deseas cambiar el precio de tus viajes, desconectate y vuelvete a conectar',
          buttons: ['OK']
      });
      alert.present();
  } else {
      this.isConected = true;
      this.isDisconected = false;

      if (this.currentUser.emailVerified == false) {
          const alert = this.alertCtrl.create({
              title: 'Oops!',
              subTitle: 'por favor verifica tu email',
              buttons: ['OK']
          });
          alert.present();
          this.isConected = false;
          this.isDisconected = true;
          this.changeColorOffline();
      } else {

          if (this.userInfo.documents) {
              if (this.userInfo.documents.license == true && this.userInfo.documents.id == true) {
                  if (this.userInfo.schedule) {
                      try {

                          this.houseAddress = this.autocompleteMyPos.input;
                          this.placeAddress = this.autocompleteMyDest.input;
                          console.log(this.houseAddress);
                          console.log(this.placeAddress);
                          console.log(this.userInfo);
                          // use the same format of coordinates as the beggining
                          if (this.userInfo.fixedLocation.name[0] === this.placeAddress[0] ) {
                            console.log('si se ejecuto lo que jd necesitaba');
                            
                            this.positionDest = {lat:this.userInfo.fixedLocation.coordinates.lat,lng:this.userInfo.fixedLocation.coordinates.lng};
                          } else {
                       
                            console.log(this.geocoordinatesDest);
                            
                          }
                          if (this.autocompleteMyPos.input == '' || this.autocompleteMyDest.input == '' ) {
                              this.presentAlert('No tienes toda la informacion', 'Por favor asegura que tengas las dirección de tu casa y oficina sea correcta', 'Ok');
                              this.isConected = false;
                              this.isDisconected = true;
                              this.changeColorOffline();
                              // this.clearMarkers();
                              // this.directionsDisplay.setDirections({routes: []});
                              // this.loadMap();
                          } else {
                              console.log(this.houseAddress[0]);
                              console.log(this.geocoordinatesHouse.latOr);
                              console.log(this.autocompleteMyPos.input);

                              //wait to get name and coordinates for confirmPricePage when the geofire starts
                              this.afDB.database.ref(this.SignUpService.userPlace + '/drivers/' + this.user + '/houseAddress/').update({
                                  name: this.houseAddress[0]
                              }).then((token) => {
                                  this.afDB.database.ref(this.SignUpService.userPlace + '/drivers/' + this.user + '/houseAddress/coordinates').update({
                                      lat: this.geocoordinatesHouse.latOr,
                                      lng: this.geocoordinatesHouse.lngOr
                                  });
                                  this.afDB.database.ref(this.SignUpService.userPlace + '/drivers/' + this.user + '/fixedLocation/coordinates').update({
                                    lat: this.positionDest.lat,
                                    lng: this.positionDest.lng
                                }); 
                                this.afDB.database.ref(this.SignUpService.userPlace + '/drivers/' + this.user + '/fixedLocation/').update({
                                  name: this.placeAddress
                              });
                              }).then((token) => {
                                  // start modal
                                  let modal = this.modalCtrl.create('DriverConfirmpricePage');
                                  modal.onDidDismiss(accepted => {
                                      if (accepted) {
                                          this.instancesService.ToggleStatusOnline(this.SignUpService.userPlace, this.user);
                                          this.changeColorOnline();

                                          console.log("estoy true")
                                          this.disable();
                                          console.log(this.userInfo.fixedLocation.name);
                                      } 
                       
                                  })
                                  modal.present();

                              })

                          }
                      } catch (error) {
                          console.log(error);

                      }
                  } else {
                      let alert = this.alertCtrl.create({
                          title: 'No tienes ningún horario',
                          subTitle: 'Por favor arma tu horario o mandanos foto del horario',
                          buttons: [{
                                  text: 'Mandar mi horario',
                                  handler: () => {
                                      this.navCtrl.push('DriverSchedulePage');
                                  }
                              },
                              {
                                  text: 'Cancelar',
                                  role: 'cancel',
                                  handler: () => {

                                  }
                              }
                          ],
                          cssClass: 'alertDanger'
                      });
                      alert.present();
                      this.isConected = false;
                      this.isDisconected = true;
                      this.changeColorOffline();
                  }



              } else {
                  let alert = this.alertCtrl.create({
                      title: '¡oh-uh!',
                      subTitle: 'faltan documentos por subir, dirigete al menú, luego a tus documentos y completa el envío. Si ya los subiste, espera a que el equipo de Waypool te verifique.',
                      buttons: [{
                              text: 'Subir mis documentos',
                              handler: () => {
                                  this.navCtrl.push('DriverCarRegistrationPage');
                              }
                          },
                          {
                              text: 'Cancelar',
                              role: 'cancel',
                              handler: () => {

                              }
                          }
                      ],
                      cssClass: 'alertDanger'
                  });
                  alert.present();
              }
              this.isConected = false;
              this.isDisconected = true;
              this.changeColorOffline();
          } else {
              let alert = this.alertCtrl.create({
                  title: '¡oh-oh!',
                  subTitle: 'faltan documentos por subir, dirigete al menú, luego a tus documentos y completa el envío. Si ya los subiste, espera a que el equipo de Waypool te verifique.',
                  buttons: [{
                          text: 'Subir mis documentos',
                          handler: () => {
                              this.navCtrl.push('DriverCarRegistrationPage');
                          }
                      },
                      {
                          text: 'Cancelar',
                          role: 'cancel',
                          handler: () => {

                          }
                      }
                  ],
                  cssClass: 'alertDanger'
              });
              alert.present();
              this.isConected = false;
              this.isDisconected = true;
              this.changeColorOffline();
          }
      }

  }

}


  
  




disconectDriver(){
  if(this.userInfo.toggleStatus === 'offline'){ 
    //do nothing
  }else{

    //get all reserves from driver
    this.afDB.database.ref(this.SignUpService.userPlace + '/reserves/'+this.user).once('value').then((snapReserve)=>{
      this.driverReserves = snapReserve.val();

      console.log(this.driverReserves);

      
       //este if sirve para saber si si hay reservas y no crashear la app al desconectarse
      if(snapReserve.val() === null || snapReserve.val() === undefined ){
        this.isConected = false;
        this.isDisconected = true;
        this.changeColorOffline();
        this.instancesService.ToggleStatusOffline(this.SignUpService.userPlace, this.user);
        this.enable();
        // this.autocompleteMyDest.input = '';
      }else{
        let obj = this.driverReserves;
      Object.getOwnPropertyNames(obj).forEach((key)=>{
        console.log(obj[key]);
        //check if user have any user in their reserve
        console.log(obj[key].pendingUsers);
        
        if (obj[key].pendingUsers !== undefined) {
          
          this.fullReserves.push(obj[key])

        } else {
          //there is people in the drivers' reserve
          console.log("funciono");
         
        }

      })
      }
      
    }).then(()=>{

      //este if sirve para saber si si hay reservas y no crashear la app al desconectarse
      if(this.driverReserves === null || this.driverReserves === undefined){
        this.isConected = false;
        this.isDisconected = true;
        this.changeColorOffline();
        this.instancesService.ToggleStatusOffline(this.SignUpService.userPlace, this.user);
        this.enable();
        // this.autocompleteMyDest.input = '';

      }else{
        if( this.fullReserves.length === 0 ||  this.fullReserves.length === undefined ){
          this.isConected = false;
        this.isDisconected = true;
        this.changeColorOffline();
        // this.autocompleteMyDest.input = '';

        this.afDB.database.ref(this.SignUpService.userPlace + '/reserves/' + this.user).once('value').then(snap => {
                        
          console.log(snap.val()); 
          let obj = snap.val();
          Object.getOwnPropertyNames(obj).forEach(key => {
            console.log(obj[key]);
            if(obj[key].type === 'origin'){
                  this.geofireService.deleteUserGeofireOr(this.SignUpService.userPlace, key);
            }else if(obj[key].type === 'destination'){
                  this.geofireService.deleteUserGeofireDest(this.SignUpService.userPlace, key);
                }             
          })
        }).then(()=>{
          this.TripsService.deleteAllReserves(this.SignUpService.userPlace, this.user);
        })
        this.instancesService.ToggleStatusOffline(this.SignUpService.userPlace, this.user);
        this.enable();
        // this.autocompleteMyDest.input = '';

        }else{
          this.alertOffline();
        }
      }
    })

  }  
}





 getTrip(){

    this.afDB.database.ref(this.SignUpService.userPlace + '/trips/'+ this.user +'/'+ this.keyTrip)
    .once('value').then((snapshot) => {
      let trip = snapshot.val();
      console.log(trip);

      if(trip === null || trip === undefined){
        console.log("borre");
        //  this.TripsService.eraseKeyTrip(this.user);
      //  this.TripsService.setOnTripFalse(this.user);
      }else{
        this.getOnTrip();
      }
    })
    
 } 


 getOnTrip(){
   this.TripsService.getOnTrip(this.SignUpService.userPlace, this.user)
   .subscribe(onTrip=>{
     this.onTrip =onTrip;
     console.log(this.onTrip)
   })
 }
 goToTrip(){
  if (this.onTrip === true) {
    console.log('DISPARADOR')
    let modal = this.modalCtrl.create('DriverMyridePage');                      
    modal.present();
  }else{
    this.presentAlert('Error en el viaje','Intenta entrar otra vez, si el error persiste hay un problema con el viaje, porfavor elimina el viaje en Mis reservas','OK')
  }
 }
 
  
   calculateRoute(positionOr,positionDest){
    //tutorial ngclassroom https://blog.ng-classroom.com/blog/ionic2/directions-google-js-ionic/
    //calculate route between markers
    console.log("LO LOGREEEEEEEEEEEE");
    


    
  
    this.map.fitBounds(this.bounds);
    
    this.directionsService.route({
     origin: positionOr,
      destination:  positionDest,
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
 ////show destinations
 updateSearchResultsMyDest(){
  if (this.userInfo.toggleStatus === 'online') {
    this.presentAlert('No es posible cambiar tu lugar de trabajo mientras estás conectado.','','OK')
  } else {
    this.showList = true;
  }
}

  ////select result of my position searchbar
selectSearchResultMyPos(item){ 
  this.autocompleteItems=[];

  this.clearMarkersOr();

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
        icon: {         url: "assets/imgs/house.png",
        scaledSize: new google.maps.Size(70, 70)    

      },
      animation: google.maps.Animation.DROP,

      });
      this.positionOrMarker = results[0].geometry.location;
      this.geocoordinatesHouse = {latOr: results[0].geometry.location.lat(), lngOr: results[0].geometry.location.lng()}
      console.log(this.geocoordinatesHouse);
      console.log(this.positionDest);
      
      this.dragMarkerOr(this.markerGeolocation,this.autocompleteMyPos)
      this.markersOr.push(this.markerGeolocation);

      this.map.setCenter(results[0].geometry.location);
      console.log(results[0].geometry.location);
      console.log(this.positionDest);
      
      this.autocompleteMyPos.input=[item.description];
      this.calculateRoute(results[0].geometry.location,this.positionDest);
      // this.directionsDisplay.setMap(null)
      // this.bounds.extend(this.geocoordinatesHouse);

    
  
      // this.map.fitBounds(this.bounds);
    }
  })
  
  
}

  ////select result of my destination searchbar

  selectSearchResultMyDest(item){
    if (this.userInfo.toggleStatus === 'online') {
      this.presentAlert('Información','No se puede cambiar el lugar mientras estas conectado.','OK')
    } else{
      this.clearMarkersDest();
      this.positionDest = new google.maps.LatLng(item.lat,item.lng);
      this.geocoordinatesDest = {lat:item.lat,lng:item.lng};
      this.geocoordinatesDestName = item.name;
      this.markerDest = new google.maps.Marker({
        position: this.positionDest,
        map: this.map,
        animation: google.maps.Animation.DROP,
           icon: {         url: "assets/imgs/workbuilding.png",
        scaledSize: new google.maps.Size(250, 250)    
         }})       
      this.markersDest.push( this.markerDest);
      this.autocompleteMyDest.input=[item.name];
      this.showList = false;
      this.calculateRoute(this.positionOrMarker,this.positionDest);
      this.directionsDisplay.setMap(this.map);
      this.positionDest = {lat:item.lat,lng:item.lng};
      this.SignUpService.userPlace = item.zone;
    }
   
  }  
////////Markers
clearMarkersDest(){
    for (var i = 0; i < this.markersDest.length; i++) {
      
      this.markersDest[i].setMap(null);
    }
    this.markersDest = [];
  }
  
  clearMarkersOr(){
    for (var i = 0; i < this.markersOr.length; i++) {
      
      this.markersOr[i].setMap(null);
    }
    this.markersOr = [];
  } 
dragMarkerOr(marker,inputName){
  //if online the user does not have permision to move the marker
 

  google.maps.event.addListener(marker, 'dragend',  (evt) => {
    if (this.userInfo.toggleStatus== 'online') {
      this.presentAlert('Error','No se puede mover el marcador mientras estas en modo ONLINE, recomendamos volver a iniciar la app para un mejor funcionamiento ','OK')
      
    } else if(this.userInfo.toggleStatus== 'offline'){
         //allow origin marker to be draged and calculate route with the new position
    let lat = marker.getPosition().lat()
    let lng = marker.getPosition().lng()
    let latOr = marker.getPosition().lat()
    let lngOr = marker.getPosition().lng()
    let latLng = {lat,lng}

    let latLngOr = {latOr,lngOr}
   console.log(latLng);
   
    this.geocodeLatLng(latLng,inputName)
    console.log(this.positionDest);
    
    this.calculateRoute(latLng,this.positionDest);
    this.geocoordinatesHouse = latLngOr;
    } 
})
  
  
}
centerMap(){

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


  


    presentAlert(title,text,button) {
      let alert = this.alertCtrl.create({
        title: title,
        subTitle: text,
        buttons: [button]
      });
      alert.present();
    }

  

   
  
   confirmPrice(houseAddr, placeAddr){
     this.doGeoquery = false;
     
      let modal = this.modalCtrl.create('DriverConfirmpricePage', {houseAddr, placeAddr});
      modal.present();

   }



   help(){
    const toast = this.toastCtrl.create({
      message: 'En esta página podrás conectarte con compañeros de tu misma universidad que quieran compartir un viaje contigo.',
     showCloseButton:true,
      closeButtonText: 'OK',
              position:'top'
         });
    toast.present();
  }
  disable() {
    const inputs: any = document.getElementById("input").getElementsByTagName("INPUT");
    inputs[0].disabled=true;
    // const inputs2: any = document.getElementById("input2").getElementsByTagName("INPUT");
    // inputs2[0].disabled=true;
        }



   enable() {
     const inputs: any = document.getElementById("input").getElementsByTagName("INPUT");
     inputs[0].disabled=false;
     // const inputs2: any = document.getElementById("input2").getElementsByTagName("INPUT");
     // inputs2[0].disabled=false;
     //     }
  }  
  showPopup() {
    let profileModal = this.modalCtrl.create('DriverSuccessNotificationPage');
    profileModal.present();

  }





 alertOffline(){
      let alert = this.alertCtrl.create({
        title: '¿Quieres desconectarte?',
        message: 'Waypool te conectó con otra persona, si te desconectas, le cancelarás el viaje',
        buttons: [
          {
            text: 'Ir a Mis Viajes',
            
            handler: () => {
              this.navCtrl.push('DriverReservetripPage');
            }
          },
          {
            text: 'Offline :(',
            handler: () => {
              this.isConected = false;
              this.isDisconected = true;
              this.changeColorOffline();
              this.autocompleteMyDest.input = '';

              this.afDB.database.ref(this.SignUpService.userPlace + '/reserves/' + this.user).once('value').then(snap => {
                              
                console.log(snap.val()); 
                let obj = snap.val();
                Object.getOwnPropertyNames(obj).forEach(key => {
                  console.log(obj[key]);
                  if(obj[key].type === 'origin'){
                        this.geofireService.deleteUserGeofireOr(this.SignUpService.userPlace, key);
                  }else if(obj[key].type === 'destination'){
                        this.geofireService.deleteUserGeofireDest(this.SignUpService.userPlace, key);
                      }             
                })
              }).then(()=>{
                this.TripsService.deleteAllReserves(this.SignUpService.userPlace, this.user);
              })
              this.instancesService.ToggleStatusOffline(this.SignUpService.userPlace, this.user);
              this.enable();
            }
          }
        ]
      });
      alert.present();
    }

    changeColorOnline(){
      this.renderer.setElementStyle(this.buttonConected.nativeElement,'background-color','green')
      this.renderer.setElementStyle(this.buttonConected.nativeElement,'border-width','2px')
      this.renderer.setElementStyle(this.buttonConected.nativeElement,'border-style','solid')
      this.renderer.setElementStyle(this.buttonConected.nativeElement,'border-color','green')
    
      this.renderer.setElementStyle(this.buttonDisconected.nativeElement,'border-width','2px')
      this.renderer.setElementStyle(this.buttonDisconected.nativeElement,'border-style','solid')
      this.renderer.setElementStyle(this.buttonDisconected.nativeElement,'border-color','green')
    
      this.renderer.setElementStyle(this.buttonDisconected.nativeElement,'background-color','transparent')
      this.renderer.setElementStyle(this.buttonDisconected.nativeElement,'font-color','#bfbfbf')
    
      this.showPopup();
    }
    changeColorOffline(){
      this.renderer.setElementStyle(this.buttonDisconected.nativeElement,'border-width','2px')
      this.renderer.setElementStyle(this.buttonDisconected.nativeElement,'background-color','rgb(167, 23, 23)')
      this.renderer.setElementStyle(this.buttonDisconected.nativeElement,'border-style','solid')
      this.renderer.setElementStyle(this.buttonDisconected.nativeElement,'border-color','rgb(167, 23, 23)')
    
      this.renderer.setElementStyle(this.buttonConected.nativeElement,'border-width','2px')
      this.renderer.setElementStyle(this.buttonConected.nativeElement,'border-style','solid')
      this.renderer.setElementStyle(this.buttonConected.nativeElement,'border-color','rgb(167, 23, 23)')
      this.renderer.setElementStyle(this.buttonConected.nativeElement,'background-color','transparent')
      this.renderer.setElementStyle(this.buttonConected.nativeElement,'font-color','#bfbfbf')

    }
    pushOriginPage(){
      this.navCtrl.push('DriverSpecifyOriginPage')
    }

}