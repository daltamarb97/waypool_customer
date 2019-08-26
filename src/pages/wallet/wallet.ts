import { Component } from '@angular/core';
import { NavController, AlertController, ToastController, IonicPage } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { sendCoordsService } from '../../services/sendCoords.service';
import { sendUsersService } from '../../services/sendUsers.service';
import { SignUpService } from '../../services/signup.services';
import { Subject } from 'rxjs';
@IonicPage()

@Component({
  selector: 'page-wallet',
  templateUrl: 'wallet.html'
})
export class WalletPage {
  userUid=this.AngularFireAuth.auth.currentUser.uid;
  recordTrips:any=[];
  price:any;
  unsubscribe = new Subject;

  constructor(public navCtrl: NavController,public toastCtrl: ToastController,public sendUsersService:sendUsersService,public sendCoordsService: sendCoordsService, private AngularFireAuth: AngularFireAuth, public signUpServices: SignUpService) {
    this.sendUsersService.getRecordTrips(this.signUpServices.userUniversity, this.userUid).takeUntil(this.unsubscribe)
    .subscribe( user => {
    
      this.recordTrips = user;
      console.log(this.recordTrips);
      

    });
   
   
  }
  help(){
    const toast = this.toastCtrl.create({
      message: 'En esta página podrás ver el historial de viajes en los que ver la hora en la que terminaste el viaje, origen y destino, y el precio que colocaste por persona',
      showCloseButton:true,
      closeButtonText: 'OK',
      position:'top'
         });
    toast.present();
  }

  ionViewDidLeave(){
    this.unsubscribe.next();
    this.unsubscribe.complete();

  }
  
}
