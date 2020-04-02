import { Component } from '@angular/core';
import { NavController, ModalController, IonicPage  } from 'ionic-angular';


@IonicPage()

@Component({
  selector: 'page-groupdetail',
  templateUrl: 'groupdetail.html'
})
export class GroupDetailPage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
    
  }
  seeMembers(){
    this.navCtrl.push('MembersGroupPage');
  }
//  confirmpopup(){
//     let modal = this.modalCtrl.create(ConfirmpopupPage);
//     modal.present();
//  }
changeTransportation(){
  let modal = this.modalCtrl.create('ChangeCarPage');
          modal.onDidDismiss(accepted => {
            if(accepted){

            }
          })
          modal.present();
}
  searchFindDrivers(){
    this.navCtrl.push('MembersGroupPage');

  }
}