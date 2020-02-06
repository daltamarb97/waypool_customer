import { Component } from '@angular/core';
import { NavController, ModalController, NavParams, IonicPage, AlertController } from 'ionic-angular';
import { DriverSignUpService } from '../../services/d-signup.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { DriverSendFeedbackService } from '../../services/d-sendFeedback.service';
import { DriverGeofireService } from '../../services/d-geofire.services';
@IonicPage()

@Component({
  selector: 'driver-page-ratetrip',
  templateUrl: 'driverRatetrip.html'
})
export class DriverRatetripPage {
today:any;
email:any;
userDriverUid = this.AngularFireAuth.auth.currentUser.uid
userDriver:any={};
experience:string;
title = 'calificacion de viaje';
trip:any;
  constructor(public navCtrl: NavController,public navParams: NavParams,public SignUpServices:DriverSignUpService,private afDB: AngularFireDatabase, public SignUpService: DriverSignUpService, private AngularFireAuth: AngularFireAuth, public sendfeedback:DriverSendFeedbackService, private alertCtrl: AlertController) {
    this.today = Date.now();
    this.userDriver= this.navParams.get('user');
    this.trip= this.navParams.get('trip');      
  }
  
  sendEmail() {
      if(this.experience === null || this.experience === undefined){
        this.experience = 'no hay feedback'
        this.sendfeedback.sendFeedback(this.SignUpService.userPlace, this.title, this.experience, this.userDriver.name, this.userDriver.lastname, this.userDriver.phone, this.userDriverUid);
        this.navCtrl.setRoot('DriverFindridePage');
      }else{
        this.sendfeedback.sendFeedback(this.SignUpService.userPlace, this.title, this.experience, this.userDriver.name, this.userDriver.lastname, this.userDriver.phone, this.userDriverUid);
        this.navCtrl.setRoot('DriverFindridePage');
      }
    }
}