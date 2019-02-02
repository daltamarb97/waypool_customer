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

  // @ViewChild('map') mapElement: ElementRef;
  map:any;
  markers:any;
ride: string = "currentTrip";
pickingUsers:any=[];
pickedUpUsers:any=[];

driverOnTrip:any=[];
driver:any;

myLatLng:any;

userUid=this.AngularFireAuth.auth.currentUser.uid;

  constructor(public navCtrl: NavController,public geolocation: Geolocation,public navParams: NavParams,private AngularFireAuth:AngularFireAuth,private callNumber: CallNumber,public sendUsersService:sendUsersService) {
    
    this.sendUsersService.getMyDriverOnTrip(this.userUid)
        .subscribe( driver => {
     
        this.driverOnTrip = driver;
        console.log(this.driverOnTrip);
        if(this.driverOnTrip.length == 0){
          console.log("PRAISE THE SUN")
        } else {
          this.gettingUsersOnTrip(driver);
        }
        
        })  
       
        
          
       
            
  }

  

  gettingUsersOnTrip(driver){
    
      this.sendUsersService.getUsersOnTrip(driver[0].userId)
          .subscribe(user => {
        
          this.pickingUsers = user;
        console.log(this.pickingUsers)
        
        })

      this.sendUsersService.getPickedUpUsers(driver[0].userId)
          .subscribe( user => {
      
          this.pickedUpUsers = user;
        console.log(this.pickedUpUsers)
            
        }) 
 
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
