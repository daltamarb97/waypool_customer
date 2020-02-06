import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { DriverPriceService } from '../../services/d-price.service';
import { DriverSignUpService } from '../../services/d-signup.service';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the PaymentsInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'driver-page-payments-info',
  templateUrl: 'driver-payments-info.html',
})
export class DriverPaymentsInfoPage {
  bankList = [];
  id:any;
  bankAccount:any;
  bankEntity:any;
  bankEntityOther:any; 
  driverId:any;
  showOther:boolean = false;
  userInfo:any;
  showInputsToEdit:boolean;
  fullInformation:boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams, private afDB: AngularFireDatabase, public viewCtrl: ViewController, public alertCtrl: AlertController, private priceServices: DriverPriceService, private signUpServices: DriverSignUpService, private angularFireAuth: AngularFireAuth) {
    this.afDB.database.ref('/bankList/').once('value').then((snap)=>{
      console.log(snap.val());
      this.bankList = snap.val();
    }) 

    this.userInfo = this.navParams.get('userInfo');

    this.afDB.database.ref(this.signUpServices.userPlace + '/drivers/' + this.userInfo.userId).once('value').then(snap =>{
      if(snap.val().bankAccount !== null && snap.val().idNumber !== null && snap.val().bankEntity !== null && snap.val().bankAccount !== undefined && snap.val().idNumber !== undefined && snap.val().bankEntity !== undefined){
        this.fullInformation = true;
        this.showInputsToEdit = false;
      }else{
        this.showInputsToEdit = true;
        this.fullInformation = false;
      }
    })

    this.driverId = this.angularFireAuth.auth.currentUser.uid;


  }

  editPaymentInfo(){
    this.fullInformation = false;
    this.showInputsToEdit = true;
    
  }

  onChange(){
    if(this.bankEntity === 'Otro'){
      this.showOther = true;
    }else{
      this.showOther = false;
    }
    
  }

  setPaymentInfo(){
    if(this.fullInformation === true){
      this.dismiss();
    }else{
      if(this.bankEntity === 'Otro'){
        if(this.id === null || this.id === undefined || this.bankEntityOther === null || this.bankEntityOther === undefined || this.bankAccount === null || this.bankAccount === undefined){
          const alert = this.alertCtrl.create({
            title: 'Informacion Incompleta',
            subTitle: 'Por favor revisa que pusiste toda la información correctamente',
            buttons: ['OK']
          });
          alert.present();
        }else{
  
          this.afDB.database.ref('allCities/' + this.userInfo.city + '/allPlaces/' + this.userInfo.company + '/zones').once('value').then((snap)=>{
            let obj = snap.val();
            Object.getOwnPropertyNames(obj).forEach((key)=>{
              
                    if(obj[key] === 2 || obj[key] === 3 || obj[key] === 4 || obj[key] === 5 || obj[key] === 6 || obj[key] === 1 || obj[key] === 7 || obj[key] === 8 || obj[key] === 9 || obj[key] === 10){
                    
                    }else{
                      this.priceServices.sendPaymentInfo(obj[key], this.driverId, this.id, this.bankAccount, this.bankEntityOther);
                  }
              }) 
          })
          this.dismiss();
        }
      }else{
        if(this.id === null || this.id === undefined || this.bankEntity === null || this.bankEntity === undefined || this.bankAccount === null || this.bankAccount === undefined){
          const alert = this.alertCtrl.create({
            title: 'Informacion Incompleta',
            subTitle: 'Por favor revisa que pusiste toda la información correctamente',
            buttons: ['OK']
          });
          alert.present();
        }else{
  
          this.afDB.database.ref('allCities/' + this.userInfo.city + '/allPlaces/' + this.userInfo.company + '/zones').once('value').then((snap)=>{
            let obj = snap.val();
            Object.getOwnPropertyNames(obj).forEach((key)=>{
              
                    if(obj[key] === 2 || obj[key] === 3 || obj[key] === 4 || obj[key] === 5 || obj[key] === 6 || obj[key] === 1 || obj[key] === 7 || obj[key] === 8 || obj[key] === 9 || obj[key] === 10){
                    
                    }else{
                      this.priceServices.sendPaymentInfo(obj[key], this.driverId, this.id, this.bankAccount, this.bankEntity);
                  }
              }) 
          })
          this.dismiss();
        }
      }
    }
  }

  dismiss(){
    this.viewCtrl.dismiss();
  }

}
