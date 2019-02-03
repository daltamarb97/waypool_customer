import { Component } from '@angular/core';
import { NavController, ModalController  } from 'ionic-angular';


import { ConfirmpopupPage } from '../confirmpopup/confirmpopup';
<<<<<<< HEAD
import { AngularFireDatabase } from 'angularfire2/database';
import { SignUpService } from '../../services/signup.service';
import { sendCoordsService } from '../../services/sendCoords.service';
=======
import { MyridePage } from '../myride/myride';
import { TabsPage } from '../tabs/tabs';
>>>>>>> origin/merge4

@Component({
  selector: 'page-confirmride',
  templateUrl: 'confirmride.html'
})
export class ConfirmridePage {
  driversAvailable:any = [];
  constructor(public navCtrl: NavController, public modalCtrl: ModalController,private afDB: AngularFireDatabase, public SignUpService: SignUpService, public sendCoordsService: sendCoordsService) {
    this.SignUpService.getDrivers()
    .subscribe(drivers => {
      this.driversAvailable = drivers;
      
      
    });
  }
  
 confirmpopup(){
    let modal = this.modalCtrl.create(ConfirmpopupPage);
    modal.present();
    this.navCtrl.push(TabsPage);
 }

}