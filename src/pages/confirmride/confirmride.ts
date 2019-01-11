import { Component } from '@angular/core';
import { NavController, ModalController  } from 'ionic-angular';


import { ConfirmpopupPage } from '../confirmpopup/confirmpopup';
import { MyridePage } from '../myride/myride';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-confirmride',
  templateUrl: 'confirmride.html'
})
export class ConfirmridePage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }
  
 confirmpopup(){
    let modal = this.modalCtrl.create(ConfirmpopupPage);
    modal.present();
    this.navCtrl.push(TabsPage);
 }

}