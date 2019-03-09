import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer/ngx';



@Component({
  selector: 'page-raterider',
  templateUrl: 'raterider.html'
})
export class RateriderPage {

  constructor(public navCtrl: NavController,private emailComposer: EmailComposer ) {

  }

}