import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController, App } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { SignUpService } from '../../services/signup.services';
import { authenticationService } from '../../services/userauthentication.service';


@IonicPage()
@Component({
  selector: 'page-verification-number',
  templateUrl: 'verification-number.html',
})
export class VerificationNumberPage {


  confText:any;
  userId:any;
  userInfo:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, private authenticationService: authenticationService, public alertCtrl: AlertController, private AngularFireAuth: AngularFireAuth, public signUpService: SignUpService, public app: App) {
    this.userId = this.navParams.get('userId')
    console.log(this.userId);
    console.log(this.signUpService.userUniversity);

    this.signUpService.getMyInfo(this.signUpService.userUniversity, this.userId).subscribe(user => {
      this.userInfo = user;
      console.log(this.userInfo);
    })
  }

  code(){
    this.authenticationService.deleteResendCode(this.signUpService.userUniversity, this.userId);
    this.authenticationService.sendVerificationCodeToFirebase(this.signUpService.userUniversity, this.userId, this.confText);
    // this.signUpService.getMyInfo(this.signUpService.userUniversity, this.userId).subscribe(user => {
    //   this.userInfo = user;
    //   console.log(this.userInfo);

      if(this.userInfo.verificationCodeApproval === true){
        this.app.getRootNav().push('LoginPage');
        this.authenticationService.deleteVerificationCode(this.signUpService.userUniversity, this.userId);
      }else if(this.userInfo.verificationCodeApproval === false){
        this.authenticationService.deleteVerificationCode(this.signUpService.userUniversity, this.userId);
        let alert = this.alertCtrl.create({
          title: 'Código Errado',
          subTitle: 'el código de verificacón está errado',
          buttons: ['OK']
        });
        alert.present();
      }
    // })

  }

  resendCode(){
    this.authenticationService.deleteverificationCodeApproval(this.signUpService.userUniversity, this.userId);
    this.authenticationService.resendVerificationCode(this.signUpService.userUniversity, this.userId);
  }

     

}
