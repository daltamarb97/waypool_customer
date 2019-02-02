import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { FilterPage } from '../filter/filter';
import { RiderprofilePage } from '../riderprofile/riderprofile';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { Firebase } from '@ionic-native/firebase';
import { SignUpService } from '../../services/signup.services';
import { ConfirmridePage } from '../confirmride/confirmride';
import { ConfirmpopupPage } from '../confirmpopup/confirmpopup';
import { geofireService } from '../../services/geoFire.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-listride',
  templateUrl: 'listride.html'
})
export class ListridePage {
  driversAvailable:any = [];
  userId;
  user:any;

  constructor(public navCtrl: NavController, private afDB: AngularFireDatabase, public SignUpService: SignUpService, public modalContrl: ModalController, private geoFireService: geofireService, private AngularFireAuth: AngularFireAuth) {
    this.userId = this.AngularFireAuth.auth.currentUser.uid;

    this.SignUpService.getMyInfo(this.userId).subscribe(user=>{
      this.user = user;
      if(this.user.onTrip == true){
        this.geoFireService.deleteDriverListRideTotal(this.userId);
        this.navCtrl.setRoot(TabsPage);
        
      }
    })
    
  };

ionViewDidLoad(){
  this.geoFireService.getDriversAvailableForUser(this.userId)
    .subscribe(drivers=>{
        this.driversAvailable = drivers;
        console.log(this.driversAvailable);
    })
}

 filter(){
    this.navCtrl.push(FilterPage);
 }
 
 confirmpopup(driver){
  let modal = this.modalContrl.create(ConfirmpopupPage,{driver});
  modal.present();
}

}
