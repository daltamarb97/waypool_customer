import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { SignUpService } from '../../services/signup.services';
import { AngularFireAuth } from 'angularfire2/auth';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { authenticationService } from '../../services/userauthentication.service';
import { sendFeedbackService } from '../../services/sendFeedback.service';

@IonicPage()

@Component({
  selector: 'page-support',
  templateUrl: 'support.html' 
})
export class SupportPage {
  
  typeOfSituation:string;
  info:string;
  today:any;
  userUid=this.AngularFireAuth.auth.currentUser.uid;
  user:any={};
  email:any;
  experience:string;

    constructor(public navCtrl: NavController,public navParams: NavParams, public AngularFireAuth:AngularFireAuth,private emailComposer: EmailComposer,private authenticationService: authenticationService,public SignupService:SignUpService, public sendfeedback: sendFeedbackService) {
    this.typeOfSituation = this.navParams.get('typeOfSituation')
    this.info = this.navParams.get('info')

    this.today = Date.now();
    this.SignupService.getMyInfoForProfile(this.userUid).subscribe(user=>{
      this.user= user;
        console.log(this.user)
    })
  }
    sendEmail() {
      this.sendfeedback.sendFeedback(this.typeOfSituation, this.experience, this.user.name, this.user.lastname, this.user.phone, this.userUid);
      this.navCtrl.pop();
    }

  

}