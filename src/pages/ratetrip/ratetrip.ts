import { Component, ViewChild } from '@angular/core';
import { NavController, ModalController, NavParams, IonicPage, Platform, Navbar } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { sendFeedbackService } from '../../services/sendFeedback.service';
import { SignUpService } from '../../services/signup.services';
import { sendUsersService } from '../../services/sendUsers.service';
import { sendCoordsService } from '../../services/sendCoords.service';
@IonicPage()

@Component({
  selector: 'page-ratetrip',
  templateUrl: 'ratetrip.html'
})

export class RatetripPage {
today:any;
email:any;
userUid:any = this.angularFireAuth.auth.currentUser.uid;
user:any={};
driver:any={};
experience:string;
userDriver:any;
title = 'calificacion de viaje';
navBar: Navbar;
  constructor(private navCtrl: NavController,public navParams: NavParams, public sendfeedback:sendFeedbackService, public signUpService: SignUpService, public sendCoordsService: sendCoordsService, public angularFireAuth: AngularFireAuth) {
    this.today = Date.now();
    this.signUpService.getMyInfo(this.signUpService.userUniversity, this.userUid).subscribe(user=>{
      this.user = user;
    })  
    this.userDriver= this.navParams.get('userDriver')   
    console.log(this.userDriver);
  }

  
  sendInfo() {
    this.sendfeedback.sendFeedback(this.signUpService.userUniversity, this.title, this.experience, this.user.name, this.user.lastname, this.user.phone, this.userUid);
    this.sendCoordsService.deleteOnTripFinal(this.signUpService.userUniversity, this.userUid);
  }

  ionViewWillLeave(){
    this.sendCoordsService.deleteOnTripFinal(this.signUpService.userUniversity, this.userUid);
  }
}