import { Component } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';
import { SignUpService } from '../../services/signup.services';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { geofireService } from '../../services/geoFire.service';
import { ListridePage } from '../listride/listride';
import { instancesService } from '../../services/instances.service';


@Component({
  selector: 'page-confirmpopup',
  templateUrl: 'confirmpopup.html'
})
export class ConfirmpopupPage {
  driver:any;
  currentUser:any;
  driverUid:any;
  hideButton:boolean = true;
  hideText:boolean = false;
  user:any;
  userMyRide:any; //this var is only needed to goMyRide()
  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public navParams: NavParams, private SignUpService: SignUpService, private AngularFireAuth: AngularFireAuth, public afDB: AngularFireDatabase, private geoFireService: geofireService, public instances: instancesService) {
    
    this.driver = this.navParams.get('driver');
    console.log(this.driver);

    this.currentUser = this.AngularFireAuth.auth.currentUser.uid;
    
  }

  goToRide(){
    this.SignUpService.getMyInfo(this.currentUser)
    .subscribe(user=>{
      this.user = user;
      this.geoFireService.showOnDriver(this.driver.userId, this.currentUser, this.user.trips.origin, this.user.trips.destination, this.user.name, this.user.lastname, this.user.phone);
      
      if(this.user.onTrip == true){
        this.dismiss();
      } 
    })
   

    this.geoFireService.removeKeyGeofire(this.currentUser);
    this.geoFireService.deleteUserGeofire(this.currentUser);
    this.geoFireService.deleteDriverListRide(this.currentUser, this.driver.userId); 
    this.hideButton = !this.hideButton;
    this.hideText = !this.hideText;
    
    


  }

  

  dismiss() {
    this.viewCtrl.dismiss();
  }  
}