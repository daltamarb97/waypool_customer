import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
@IonicPage()

@Component({
  selector: 'page-earn',
  templateUrl: 'earn.html'
})
export class ReferalPage {

  constructor(public navCtrl: NavController, private socialSharing: SocialSharing ) {

  }

  shareWhatsapp(){
          // Check if sharing via email is supported
     

      // Share via email
      this.socialSharing.shareViaWhatsApp('Comparte tu viaje al trabajo, ahorra dinero y ayuda al medio ambiente', null , 'www.waypooltech.com').then(() => {
        // Success!
      }).catch((error) => {
        // Error!
        console.log(error);
        
      });
        }

  }
