import { Component } from '@angular/core';
import { NavController, ViewController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { SignUpService } from '../../services/signup.service';
import { sendCoordsService } from '../../services/sendCoords.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { sendUsersService } from '../../services/sendUsers.service';
import { MyridePage } from '../myride/myride';


@Component({
  selector: 'page-confirmpopup',
  templateUrl: 'confirmpopup.html'
})
export class ConfirmpopupPage {
  usersOnTrip:any;
  accepted: boolean;
  driver:any;
  user:any;
  userUid=this.AngularFireAuth.auth.currentUser.uid;
  constructor(public navCtrl: NavController, public sendUsersService:sendUsersService,public toastCtrl: ToastController,public viewCtrl: ViewController,private afDB: AngularFireDatabase, public SignUpService: SignUpService, public sendCoordsService: sendCoordsService,public navParams: NavParams,public AngularFireAuth: AngularFireAuth) {
    
    this.driver= this.navParams.get('driver') 
    console.log(this.driver)

    
        
       //get the info of the driver 
       this.SignUpService.getMyInfo(this.userUid)
       .subscribe( myUserInfo => {
         this.user = myUserInfo;
         console.log(this.user);          
       });

  }
  goToRide(){    
    this.accepted = true;
    this.dismiss();
   
     this.sendUsersService.PushUserListRide(this.driver.userId,this.userUid,this.user);
     
     const toast = this.toastCtrl.create({
      message: `Haz escogido a ${this.driver.name} para compartir tu viaje, dirígete a la sección Mi Viaje para saber más.`,
      showCloseButton: true,
      closeButtonText: 'Ok'
    });
    toast.present();  
    }
  dismiss() {
    this.viewCtrl.dismiss(this.accepted);
  }  
}
