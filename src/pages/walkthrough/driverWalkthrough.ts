import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, MenuController } from 'ionic-angular';

/**
 * Generated class for the WalkthroughPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'driver-page-walkthrough',
  templateUrl: 'driverWalkthrough.html',
})
export class DriverWalkthroughPage {
  public lottieConfig: Object;
  private anim: any;
  private animationSpeed: number = 1;
  animate:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController,public menuCtrl: MenuController) {
    this.lottieConfig = {
      path: 'assets/icon/checked_done_.json',
      autoplay: true,
      loop: false
  };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WalkthroughPage');
  }
  handleAnimation(anim: any) {
    this.anim = anim;
}

  goLogin()
  {
    this.animate = "animated bounceOutRight"
 
    setTimeout(() => {
      this.navCtrl.pop();
    }, 1000);
  }
    
  

  
    

}
