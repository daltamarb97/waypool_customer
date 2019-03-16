import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { SignUpService } from '../../services/signup.services';
import { AngularFireAuth } from 'angularfire2/auth';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { authenticationService } from '../../services/userauthentication.service';

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

    constructor(public navCtrl: NavController,public navParams: NavParams, public AngularFireAuth:AngularFireAuth,private emailComposer: EmailComposer,private authenticationService: authenticationService,public SignupService:SignUpService) {
    this.typeOfSituation = this.navParams.get('typeOfSituation')
    this.info = this.navParams.get('info')

    this.today = Date.now();
    this.SignupService.getMyInfoForProfile(this.userUid).subscribe(user=>{
      this.user= user;
        console.log(this.user)
    })
  }
    sendEmail() {
      //send email
    this.emailComposer.isAvailable().then((available: boolean) =>{
      if(available) {
        //if its available we can send the mail
        
          this.email = {
            to:'waypooltec@gmail.com',
            cc: `${this.user.email}${this.user.fixedemail}`,      
            subject: this.typeOfSituation,
            body: this.experience,
            isHtml: true
          };
       
          this.emailComposer.open(this.email);
        // add alias
      this.email.addAlias('gmail', 'com.google.android.gm');
  
  // then use alias when sending email
      this.email.open({
    app: 'gmail'
    
  })
      }else{
        console.log('hay un problema con el correo')
      }
     })
    }

  

}