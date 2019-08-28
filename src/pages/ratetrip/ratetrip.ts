import { Component, ViewChild } from '@angular/core';
import { NavController, ModalController, NavParams, IonicPage, Platform, Navbar, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { sendFeedbackService } from '../../services/sendFeedback.service';
import { SignUpService } from '../../services/signup.services';
import { sendUsersService } from '../../services/sendUsers.service';
import { sendCoordsService } from '../../services/sendCoords.service';
import { Subject } from 'rxjs';
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
trip:any;
title = 'calificacion de viaje';
navBar: Navbar;
unsubscribe = new Subject;
  constructor(private navCtrl: NavController,public navParams: NavParams, public sendfeedback:sendFeedbackService, public signUpService: SignUpService, public sendCoordsService: sendCoordsService, public angularFireAuth: AngularFireAuth, public alertCtrl: AlertController) {
    this.today = Date.now();
    this.signUpService.getMyInfo( this.userUid,this.signUpService.userUniversity).takeUntil(this.unsubscribe).subscribe(user=>{
      this.user = user;
      console.log(this.user)
    })  
    this.trip = this.navParams.get('trip')   
    console.log(this.trip);
  }

  
  sendInfo() {
      this.sendfeedback.sendFeedback(this.signUpService.userUniversity, this.title, this.experience, this.user.name, this.user.lastname, this.user.phone, this.userUid);
      this.navCtrl.setRoot('TabsPage');
  }

  ionViewDidLeave(){
    this.unsubscribe.next();
    this.unsubscribe.complete();

  }
}