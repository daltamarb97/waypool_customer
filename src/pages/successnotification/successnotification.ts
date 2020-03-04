import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, MenuController } from 'ionic-angular';

/**
 * Generated class for the PopupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'driver-page-successnotification',
  templateUrl: 'driverSuccessnotification.html',
})
export class DriverSuccessNotificationPage {
  public lottieConfig: Object;
    private anim: any;
    private animationSpeed: number = 1;

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController,public menuCtrl: MenuController) {

    this.lottieConfig = {
      path: 'assets/icon/checked_done_.json',
      autoplay: true,
      loop: false
  };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopupPage');
  }

  handleAnimation(anim: any) {
    this.anim = anim;
}

dismiss() {
  this.viewCtrl.dismiss();
  this.navCtrl.push('DriverReservetripPage');
 
}

}
