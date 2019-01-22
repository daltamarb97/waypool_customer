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

@Component({
  selector: 'page-listride',
  templateUrl: 'listride.html'
})
export class ListridePage {
  driversAvailable:any = [];
  userId;

  constructor(public navCtrl: NavController, private afDB: AngularFireDatabase, public SignUpService: SignUpService, public modalContrl: ModalController, private geoFireService: geofireService, private AngularFireAuth: AngularFireAuth) {
    this.userId = this.AngularFireAuth.auth.currentUser.uid;

    this.geoFireService.getDriversAvailableForUser(this.userId)
    .subscribe(drivers=>{
      if(drivers){
        this.driversAvailable = drivers;
      }else{
        console.log('waiting');
      }
    })
  };



 filter(){
    this.navCtrl.push(FilterPage);
 }
 
 confirmpopup(driver){
  let modal = this.modalContrl.create(ConfirmpopupPage,{driver});
  modal.present();
}

}
