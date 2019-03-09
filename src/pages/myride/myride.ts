import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { ElementRef } from '@angular/core';
import { RateriderPage } from '../raterider/raterider';
import { ChattingPage } from '../chatting/chatting';
import { sendUsersService } from '../../services/sendUsers.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { CallNumber } from '@ionic-native/call-number';
import { Geolocation } from '@ionic-native/geolocation';
import { SignUpService } from '../../services/signup.services';


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
user:any;
userUid=this.AngularFireAuth.auth.currentUser.uid;

  constructor(public navCtrl: NavController,public toastCtrl: ToastController,public SignUpService: SignUpService,public geolocation: Geolocation,public navParams: NavParams,private AngularFireAuth:AngularFireAuth,private callNumber: CallNumber,public sendUsersService:sendUsersService) {
    
    this.sendUsersService.getMyDriverOnTrip(this.userUid)
        .subscribe( driver => {
          
        this.driverOnTrip = driver;
        console.log(this.driverOnTrip);
        if(this.driverOnTrip.length == 0){
        } else {
          this.gettingUsersOnTrip(driver);
        }
        
        })  
       
        
        this.SignUpService.getMyInfo(this.userUid).subscribe(user=>{
          this.user = user;
            console.log(this.user)
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
      if (this.user.trips.pickedUp == true){

        const toast = this.toastCtrl.create({
          message: `${this.user.name} : No puedes cancelar ya que tu compañero ya te recogió, si esto no es verdad, por favor saca un screenshot de Mi Viaje al correo soporte@waypool.com`,
          showCloseButton: true,
          closeButtonText: 'Ok'
        });
        toast.present();

      } else {
        this.sendUsersService.cancelTripUser(this.driverOnTrip[0].userId,this.userUid)
      }
    }
  }
