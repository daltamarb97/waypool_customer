import { Component } from '@angular/core';
import { NavController, ViewController, NavParams, ToastController, IonicPage } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';


@IonicPage()

@Component({
  selector: 'driver-page-canceltrip',
  templateUrl: 'DriverCanceltrip.html'
})
export class DriverCanceltripPage {
  accepted

  constructor(public navCtrl: NavController,public viewCtrl: ViewController) {
    
    
       
    

  }


 

  dismiss() {
    this.viewCtrl.dismiss(this.accepted);

    
    // this.navCtrl.pop();

  }  
}
