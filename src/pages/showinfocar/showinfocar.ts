import { Component } from '@angular/core';
import { NavController, ViewController, ModalController, ToastController, NavParams, IonicPage, AlertController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { DriverSignUpService } from '../../services/d-signup.service';
import { Subject } from 'rxjs';

@IonicPage()

@Component({
  selector: 'driver-page-showinfocar',
  templateUrl: 'driverShowinfocar.html'
})
export class DriverShowInfoCarPage {
user:any;
userUid=this.AngularFireAuth.auth.currentUser.uid;
carList:any=[];
carModel:string;
plateNumber:string;
color:string;
unsubscribe = new Subject;
driverInfo:any;
  constructor( public modalCtrl: ModalController,public alertCtrl:AlertController,public navParams: NavParams,public viewCtrl: ViewController,public navCtrl: NavController,public toastCtrl: ToastController,  private AngularFireAuth: AngularFireAuth,private afDB: AngularFireDatabase, public SignUpService: DriverSignUpService) {
    this.user = this.navParams.get('user');
    
    this.afDB.database.ref('/driversTest/' + this.userUid).once('value').then((snap)=>{
      this.driverInfo = snap.val();
    });

    this.SignUpService.getCar( this.userUid).takeUntil(this.unsubscribe)
    .subscribe( car => {
      this.carList = car;
      console.log(this.carList)
    });
  }


  ionViewDidLeave(){
		this.unsubscribe.next();
		this.unsubscribe.complete();
  }
  

  addCar(){
    if(this.carList.length >= 3){
      const alert = this.alertCtrl.create({
        title: 'OPERACION DENEGADA',
        subTitle: 'No puedes tener más de 3 carros en tu cuenta, si quieres agregar otro, elimina alguno de los que tienes',
        buttons: ['OK']
      });
      alert.present();
    }else{

      //PROBAR CON WIFI DE DANIEL SI EL FOREACH DE ZONES FALLA POR INTERNET

      if(this.carModel === undefined || this.plateNumber === undefined || this.color === undefined || this.carModel === null || this.plateNumber === null || this.color === null){
        const alert = this.alertCtrl.create({
          title: 'Falta información',
          subTitle: 'Revisa que llenaste toda la información sobre tu vehículo correctamente',
          buttons: ['OK']
        });
        alert.present();
      }else{
        this.SignUpService.addCar( this.userUid,this.carModel,this.plateNumber,this.color)
      }
    }
    
      this.carModel=null; 
      this.plateNumber=null;
      this.color=null;   

  }


 deleteCar(carKey){
   console.log(carKey)
  this.SignUpService.deleteCar( this.userUid,carKey)    
}


  dismiss() {
    this.viewCtrl.dismiss();
  }  
}