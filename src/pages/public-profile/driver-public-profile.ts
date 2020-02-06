import { Component } from '@angular/core';
import { NavController, AlertController, ToastController, ModalController, IonicPage, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { DriverSignUpService } from '../../services/d-signup.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { DriverAuthenticationService } from '../../services/d-driverauthentication.service';
import { Subject } from 'rxjs';
/**
 * Generated class for the PublicProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'driver-page-public-profile',
  templateUrl: 'driver-public-profile.html',
})
export class DriverPublicProfilePage {
 
  passenger:any;
  email:any;
  unsubscribe = new Subject;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController,public toastCtrl: ToastController,public alertCtrl:AlertController, public AngularFireAuth:AngularFireAuth,private authenticationService: DriverAuthenticationService,public SignupService:DriverSignUpService, public navParams: NavParams) {
    this.passenger = this.navParams.get('passenger')
    console.log(this.passenger); 

  
  }


}
