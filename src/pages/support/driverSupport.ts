import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage, AlertController } from 'ionic-angular';
import { DriverSignUpService } from '../../services/d-signup.service';
import { DriverAuthenticationService } from '../../services/d-driverauthentication.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { DriverSendFeedbackService } from '../../services/d-sendFeedback.service';
import { Subject } from 'rxjs';


@IonicPage()

@Component({
  selector: 'driver-page-support',
  templateUrl: 'driverSupport.html' 
})
export class DriverSupportPage {
  typeOfSituation:string;
  info:string;
  today:any;
  userUid=this.AngularFireAuth.auth.currentUser.uid;
  userEmail = this.AngularFireAuth.auth.currentUser.email;
  user:any={};
email:any;
unsubscribe = new Subject;

experience:string;


    constructor(public navCtrl: NavController,public navParams: NavParams, public AngularFireAuth:AngularFireAuth,private authenticationService: DriverAuthenticationService,public SignupService:DriverSignUpService, public sendFeedbackService: DriverSendFeedbackService) {
    this.typeOfSituation=this.navParams.get('typeOfSituation')
    this.info=this.navParams.get('info')

    this.today = Date.now();
    this.SignupService.getMyInfoForProfile(this.SignupService.userPlace, this.userUid).takeUntil(this.unsubscribe)
    .subscribe(user=>{
      this.user= user;
        console.log(this.user)
    })
  }
  ionViewDidLeave(){
    this.unsubscribe.next();
     this.unsubscribe.complete();
  }
    sendEmail() {
      this.sendFeedbackService.sendFeedback(this.SignupService.userPlace, this.typeOfSituation, this.experience, this.user.name, this.user.lastname, this.user.phone, this.userUid);
      this.navCtrl.pop()
     }
    

  

}