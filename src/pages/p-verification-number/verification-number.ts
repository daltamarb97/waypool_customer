import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController, App } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { SignUpService } from '../../services/signup.services';
import { authenticationService } from '../../services/userauthentication.service';
import { Subject } from 'rxjs';


@IonicPage()
@Component({
  selector: 'page-verification-number',
  templateUrl: 'verification-number.html',
})
export class VerificationNumberPage {


  confText:any;
  userId:any;
  userInfo:any;
  unsubscribe = new Subject;
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, private authenticationService: authenticationService, public alertCtrl: AlertController, private AngularFireAuth: AngularFireAuth, public signUpService: SignUpService, public app: App) {
    this.userId = this.navParams.get('userId')
    console.log(this.userId);
    console.log(this.signUpService.userPlace);

    this.signUpService.getMyInfo(this.userId, this.signUpService.userPlace).takeUntil(this.unsubscribe).subscribe(user => {
      this.userInfo = user;
      console.log(this.userInfo);
    })
  }

  code(){
    this.authenticationService.deleteResendCode(this.signUpService.userPlace, this.userId);
    this.authenticationService.sendVerificationCodeToFirebase(this.signUpService.userPlace, this.userId, this.confText);
    // this.signUpService.getMyInfo(this.signUpService.userPlace, this.userId).subscribe(user => {
    //   this.userInfo = user;
    //   console.log(this.userInfo);

      if(this.userInfo.verificationCodeApproval === true){
        this.app.getRootNav().push('LoginPage');
        this.authenticationService.deleteVerificationCode(this.signUpService.userPlace, this.userId);
      }else if(this.userInfo.verificationCodeApproval === false){
        this.authenticationService.deleteVerificationCode(this.signUpService.userPlace, this.userId);
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
    this.authenticationService.deleteverificationCodeApproval(this.signUpService.userPlace, this.userId);
    this.authenticationService.resendVerificationCode(this.signUpService.userPlace, this.userId);
  }

  ionViewDidLeave(){
    this.unsubscribe.next();
    this.unsubscribe.complete();

  }

     

}
