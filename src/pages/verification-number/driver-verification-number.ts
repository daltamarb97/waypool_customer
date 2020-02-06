import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController, App } from 'ionic-angular';
import { DriverAuthenticationService } from '../../services/d-driverauthentication.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { DriverSignUpService } from '../../services/d-signup.service';
import * as firebase from 'firebase';


@IonicPage()
@Component({
  selector: 'driver-page-verification-number',
  templateUrl: 'driver-verification-number.html',
})
export class DrverVerificationNumberPage {


  confText:any;
  userId:any;
  driverInfo:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, private authenticationService: DriverAuthenticationService, public alertCtrl: AlertController, private AngularFireAuth: AngularFireAuth, public signUpService: DriverSignUpService, public app: App) {
    this.userId = this.navParams.get('userId')
    
  }

  code(){
    this.authenticationService.deleteResendCode(this.signUpService.userPlace, this.userId);
    this.authenticationService.sendVerificationCodeToFirebase(this.signUpService.userPlace, this.userId, this.confText);
    this.signUpService.getMyInfo(this.signUpService.userPlace, this.userId).subscribe(driver => {
      this.driverInfo = driver;

      if(this.driverInfo.verificationCodeApproval === true){
        this.app.getRootNav().push('LoginPage');
        this.authenticationService.deleteVerificationCode(this.signUpService.userPlace, this.userId);
      }else if(this.driverInfo.verificationCodeApproval === false){
        this.authenticationService.deleteVerificationCode(this.signUpService.userPlace, this.userId);
        let alert = this.alertCtrl.create({
          title: 'Código Errado',
          subTitle: 'el código de verificacón está errado',
          buttons: ['OK']
        });
        alert.present();
      }
    })

  }

  resendCode(){
    this.authenticationService.deleteverificationCodeApproval(this.signUpService.userPlace, this.userId);
    this.authenticationService.resendVerificationCode(this.signUpService.userPlace, this.userId);
  }

     

}
