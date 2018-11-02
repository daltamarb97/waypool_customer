import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { FilterPage } from '../filter/filter';
import { RiderprofilePage } from '../riderprofile/riderprofile';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { Firebase } from '@ionic-native/firebase';
import { SignUpService } from '../../services/signup.services';

@Component({
  selector: 'page-listride',
  templateUrl: 'listride.html'
})
export class ListridePage {
  driversAvailable:any = [];

  constructor(public navCtrl: NavController, private afDB: AngularFireDatabase, public SignUpService: SignUpService) {
    this.SignUpService.getDrivers()
      .subscribe(drivers => {
        this.driversAvailable = drivers;
        console.log(this.driversAvailable);
      });
  };



 filter(){
    this.navCtrl.push(FilterPage);
 }
 
 riderprofile(){
this.navCtrl.push(RiderprofilePage);
}

}
