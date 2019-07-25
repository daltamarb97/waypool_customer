import { Component } from '@angular/core';
import { NavController, ViewController, NavParams, ToastController, IonicPage } from 'ionic-angular';


@IonicPage()

@Component({
  selector: 'page-canceltrip',
  templateUrl: 'canceltrip.html'
})
export class CanceltripPage {

  accepted: boolean;
 
  constructor(public navCtrl: NavController,public viewCtrl: ViewController) {    

  }


 

  dismiss() {
    this.viewCtrl.dismiss(this.accepted);



  }  
}
