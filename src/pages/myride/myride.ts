import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ElementRef } from '@angular/core';
import { RateriderPage } from '../raterider/raterider';
import { ChattingPage } from '../chatting/chatting';
import { sendUsersService } from '../../services/sendUsers.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { CallNumber } from '@ionic-native/call-number';
import { Geolocation } from '@ionic-native/geolocation';


declare var google;

@Component({
  selector: 'page-myride',
  templateUrl: 'myride.html'
})
export class MyridePage {

  @ViewChild('map') mapElement: ElementRef;
  map:any;
  markers:any;
ride: string = "currentTrip";
usersOnTrip:any=[];
driverOnTrip:any=[];
driver:any;

myLatLng:any;

userUid=this.AngularFireAuth.auth.currentUser.uid;

  constructor(public navCtrl: NavController,public geolocation: Geolocation,public navParams: NavParams,private AngularFireAuth:AngularFireAuth,private callNumber: CallNumber,public sendUsersService:sendUsersService) {
    this.driver= this.navParams.get('driver') 
    this.markers = [];
  console.log(this.driver)
    this.sendUsersService.getMyDriverOnTrip(this.userUid)
    .subscribe( driver => {
      this.driverOnTrip = driver;
      console.log(this.driverOnTrip)
        })  
        this.sendUsersService.getUsersOnTrip(this.driver.userId)
        .subscribe( user => {
          this.usersOnTrip = user;
          console.log(this.usersOnTrip)
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
               streetViewControl: true,
               rotateControl: false,
               fullscreenControl: false
             
           }
   
           this.myLatLng = {lat: position.coords.latitude , lng: position.coords.longitude};
       //creates the map and give options
         this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
         
   
         let marker = new google.maps.Marker({
           map: this.map,
           animation: google.maps.Animation.DROP,
           position: latLng,
           
         });
         this.markers.push(marker);   
         },(err) => {
         console.log(err);    
        });
        //transform the position of the user into an adress
       
        
         
       
      }
  callUser(number){
    console.log(number)
  this.callNumber.isCallSupported()
.then((response) => {
if (response == true) {
  this.callNumber.callNumber(number, true)
  .then(res => console.log('Launched dialer!', res)) //si no es necesario esta promesa, eliminarla
  .catch(err => console.log('Error launching dialer', err));
}
else {
    console.log('error')
      }
  });
}
raterider(){
this.navCtrl.push(RateriderPage);
}

      chatting(){
    this.navCtrl.push(ChattingPage);
    }
    cancelTrip(){
        this.sendUsersService.cancelTripUser(this.driver.userId,this.userUid)
    }
  }
