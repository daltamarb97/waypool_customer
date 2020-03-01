import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { SocialSharing } from '@ionic-native/social-sharing';
// private socialSharing: SocialSharing

@Component({
  selector: 'page-earn',
  templateUrl: 'earn.html'
})
export class ReferalPage {

  constructor(public navCtrl: NavController,) {

  }

  shareWhatsapp(){
//     // Check if sharing via email is supported
// this.socialSharing.shareViaWhatsApp().then(() => {
//   // Sharing via email is possible 
// }).catch(() => {
//   // Sharing via email is not possible
// });

// // Share via email
// this.socialSharing.shareViaWhatsApp('Comparte tu viaje al trabajo, ahorra dinero y ayuda al medio ambiente', 'imagen ruta url', 'Enlace').then(() => {
//   // Success!
// }).catch(() => {
//   // Error!
// });
//   }
// }
  }}