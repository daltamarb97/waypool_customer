import { Component } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';
import { SignUpService } from '../../services/signup.services';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { geofireService } from '../../services/geoFire.service';


@Component({
  selector: 'page-confirmpopup',
  templateUrl: 'confirmpopup.html'
})
export class ConfirmpopupPage {
  driver:any;
  currentUser:any;
  driverUid:any;
  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public navParams: NavParams, private SignUpService: SignUpService, private AngularFireAuth: AngularFireAuth, public afDB: AngularFireDatabase, private geoFireService: geofireService) {
    this.driver = this.navParams.get('driver');
    console.log(this.driver);
    this.currentUser = this.AngularFireAuth.auth.currentUser.uid;
    
  }

  goToRide(){
    this.afDB.object('/users/' + this.currentUser).valueChanges()
    .subscribe(user=>{
      console.log(user);
      this.geoFireService.showOnDriver(this.driver.userId, this.currentUser, user.trips.origin, user.trips.destination, user.name, user.lastname, user.phone);
    })
    
    this.geoFireService.deleteDriverListRide(this.currentUser);
    this.viewCtrl.dismiss();


  }
  dismiss() {
    this.viewCtrl.dismiss();
  }  
}