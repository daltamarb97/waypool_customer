import { Component } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';
import { SignUpService } from '../../services/signup.services';
import { AngularFireAuth } from 'angularfire2/auth';


@Component({
  selector: 'page-confirmpopup',
  templateUrl: 'confirmpopup.html'
})
export class ConfirmpopupPage {
  // driver:any;
  // currentUser:any;
  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public navParams: NavParams, private SignUpService: SignUpService, private AngularFireAuth: AngularFireAuth) {
    // this.driver = this.navParams.get('driver');
    // this.currentUser = this.AngularFireAuth.auth.currentUser.uid;
  }

  goToRide(){

    this.viewCtrl.dismiss();
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }  
}