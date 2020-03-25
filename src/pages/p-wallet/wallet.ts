import { Component } from '@angular/core';
import { NavController, AlertController, ToastController, IonicPage } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { sendCoordsService } from '../../services/sendCoords.service';
import { sendUsersService } from '../../services/sendUsers.service';
import { SignUpService } from '../../services/signup.services';
import { Subject } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';
import { Clipboard } from '@ionic-native/clipboard';
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
  paymentLink:any;
  total:any;
  constructor(public navCtrl: NavController,public toastCtrl: ToastController,public sendUsersService:sendUsersService,public sendCoordsService: sendCoordsService, private AngularFireAuth: AngularFireAuth, public signUpServices: SignUpService, private afDB: AngularFireDatabase, private clipboard:Clipboard) {
    this.sendUsersService.getRecordTrips( this.userUid).takeUntil(this.unsubscribe)
    .subscribe( user => {
    
      this.recordTrips = user;
      console.log(this.recordTrips);
      

    });
   
   this.afDB.database.ref( '/usersTest/' + this.userUid).once('value').then((snapLink)=>{
     if(snapLink.val().paymentLink === undefined || snapLink.val().paymentLink === null){
       console.log('no hay link');
       console.log(snapLink.val().paymentLink);
       this.paymentLink = 'No hay link todavía';
     }else{

      this.paymentLink = snapLink.val().paymentLink;
     }

     this.total = snapLink.val().pendingToPay;
   })
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
  copyToClipBoard(link){
    console.log(link);
    
    this.clipboard.copy(link).then(()=>{
      console.log('copiaste');
      
    }).catch((error)=>{
      console.log('no copiaste porque: ' + error);
      
    })
    const toast = this.toastCtrl.create({
      message: 'Link de pago copiado. Pégalo en tu navegador de preferencia ',
      showCloseButton:true,
      closeButtonText: 'OK',
      position:'top',
      duration: 1000
         });
    toast.present();
  }


  informationPayment(){
    const toast = this.toastCtrl.create({
      message: 'Nuestra pasarela de pagos es MercadoPago, hecha por Mercado Libre, considerada entre las 2 mejores de Latinoamérica en términos de eficiencia y seguridad. Waypool no obtiene en ningún momento información financiera como tarjeta de crédito, cuenta bancaria, u otra información sensible.',
      showCloseButton:true,
      closeButtonText: 'OK', 
      position:'middle'
         });
    toast.present();
  }
}
