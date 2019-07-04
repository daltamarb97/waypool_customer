import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PublicProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-public-profile',
  templateUrl: 'public-profile.html',
})
export class PublicProfilePage {

  passenger:any;
  passengerArray = [];
  emailComplete:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.passenger = this.navParams.get('passenger');
    console.log(this.passenger);
    this.passengerArray.push(this.passenger);
    this.emailComplete = this.passenger.email + this.passenger.fixedemail
  }



}
