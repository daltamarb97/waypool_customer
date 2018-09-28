import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { RateriderPage } from '../raterider/raterider';
import { ChattingPage } from '../chatting/chatting';
@Component({
  selector: 'page-myride',
  templateUrl: 'myride.html'
})
export class MyridePage {

ride: string = "Upconing";

  constructor(public navCtrl: NavController) {

  }
raterider(){
this.navCtrl.push(RateriderPage);
}

      chatting(){
    this.navCtrl.push(ChattingPage);
    }

}
