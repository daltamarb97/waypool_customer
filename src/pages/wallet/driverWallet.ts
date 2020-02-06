import { Component } from '@angular/core';
import { NavController, AlertController, ToastController, IonicPage, App, ModalController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { DriverSendCoordsService } from '../../services/d-sendCoords.service';
import { DriverSignUpService } from '../../services/d-signup.service';
import { DriverSendUsersService } from '../../services/d-sendUsers.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Subject } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';
@IonicPage()
@Component({
  selector: 'driver-page-wallet',
  templateUrl: 'driverWallet.html'
})
export class DriverWalletPage {
  userUid=this.AngularFireAuth.auth.currentUser.uid;
  recordTrips:any=[];
  price:any;
  total:any=0;
  subtotal:any = 0;
  trip:any;
  totalTrip:any;
  pickedUpUsers = [];
  newNumber:any = 0;
  unsubscribe = new Subject;
  userInfo:any;

  constructor(public navCtrl: NavController,public toastCtrl: ToastController,public sendUsersService:DriverSendUsersService,public sendCoordsService: DriverSendCoordsService, private AngularFireAuth: AngularFireAuth, public signupService: DriverSignUpService, private afDB: AngularFireDatabase, private app: App, public modalCtrl: ModalController) {
    
   this.afDB.database.ref(this.signupService.userPlace + '/drivers/' + this.userUid).once('value').then((snap)=>{
    this.userInfo = snap.val();
   })
    this.sendUsersService.getRecordTrips(this.signupService.userPlace, this.userUid)
    .subscribe( user => {
    
      this.recordTrips = user;
      console.log(this.recordTrips); 
      

      this.calculationOfTotalAmount()

   });

   console.log(this.total)

   
}



calculationOfTotalAmount(){
  
  this.total = this.userInfo.pendingToReceive;
  
}

 
  help(){
    const toast = this.toastCtrl.create({
      message: 'En esta página podrás ver cuanto dinero haz hecho por viaje, ádemas del historial de viajes en los que podrás ver la hora en la que terminaste el viaje, origen y destino, y el precio que colocaste por persona',
      showCloseButton:true,
      closeButtonText: 'OK',
      position:'top'
         });
    toast.present();
  }


  goPaymentInfo(){
    let modal = this.modalCtrl.create('PaymentsInfoPage', {userInfo: this.userInfo});                      
    modal.present();
  }
}
