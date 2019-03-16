import { Component } from '@angular/core';
import { NavController, ViewController, NavParams, ToastController, IonicPage } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { SignUpService } from '../../services/signup.services';
import { sendCoordsService } from '../../services/sendCoords.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { sendUsersService } from '../../services/sendUsers.service';
import { geofireService } from '../../services/geoFire.service';
import { instancesService } from '../../services/instances.service';
import { Subject } from 'rxjs';

@IonicPage()

@Component({
  selector: 'page-confirmpopup',
  templateUrl: 'confirmpopup.html'
})
export class ConfirmpopupPage {

  usersOnTrip:any;
  accepted: boolean;
  driver:any;
  user:any ={};
  hideButton:boolean = true;
  hideText:boolean = false;
  userUid=this.AngularFireAuth.auth.currentUser.uid;
  unsubscribe = new Subject;
  constructor(public navCtrl: NavController, public sendUsersService:sendUsersService,public toastCtrl: ToastController,public viewCtrl: ViewController,private afDB: AngularFireDatabase, public SignUpService: SignUpService, public sendCoordsService: sendCoordsService,public navParams: NavParams,public AngularFireAuth: AngularFireAuth, private geoFireService: geofireService, public instances: instancesService) {
    
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
    
    this.SignUpService.getMyInfo(this.userUid).takeUntil(this.unsubscribe)
    .subscribe(user=>{
      this.user = user; 

      if(this.user.trips.onTrip == true){
        this.dismiss();
      } 
    })
    this.geoFireService.showOnDriver(this.driver.userId, this.userUid, this.user.trips.origin, this.user.trips.destination, this.user.name, this.user.lastname, this.user.phone, this.user.trips.note);
    this.geoFireService.removeKeyGeofire(this.userUid);
    this.geoFireService.deleteDriverListRide(this.userUid, this.driver.userId); 
    this.hideButton = !this.hideButton;
    this.hideText = !this.hideText;
    this.accepted = true;  
     const toast = this.toastCtrl.create({
      message: `Haz escogido a ${this.driver.name} para compartir tu viaje, dirígete a la sección Mi Viaje para saber más.`,
      showCloseButton: true,
      closeButtonText: 'Ok'
    });
    toast.present();  

    }

  dismiss() {
    this.viewCtrl.dismiss(this.accepted);
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }  
}
