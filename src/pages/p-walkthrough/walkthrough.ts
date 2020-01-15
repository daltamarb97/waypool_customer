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
  selector: 'page-walkthrough',
  templateUrl: 'walkthrough.html',
})
export class WalkthroughPage {
  public lottieConfig: Object;
  private anim: any;
  private animationSpeed: number = 1;
  animate:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController,public menuCtrl: MenuController) {
  
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
      this.navCtrl.setRoot('FindridePassPage');
    }, 1000);
  }
    
  

  
    

}
