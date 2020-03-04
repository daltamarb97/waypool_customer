import { Component, ViewChild } from '@angular/core';
import { NavController, ViewController, ModalController, NavParams, Tabs, AlertController, App, IonicPage } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { DriverSignUpService } from '../../services/d-signup.service';
import { DriverSendCoordsService } from '../../services/d-sendCoords.service';

import { DriverSendUsersService } from '../../services/d-sendUsers.service';
import { DriverPriceService } from '../../services/d-price.service';
import { DriverGeofireService } from '../../services/d-geofire.services';
import { Subscription, Subject, Subscriber } from 'rxjs';
import * as moment from 'moment';
import { DriverMetricsService } from '../../services/d-metrics.service';


declare var google;
@IonicPage()

@Component({
  selector: 'driver-page-confirmprice',
  templateUrl: 'driverConfirmprice.html'
})
export class DriverConfirmpricePage {
  
  accepted: boolean;

  precio:string;
  userDriverUid=this.AngularFireAuth.auth.currentUser.uid
  //variable for get data in function
  driver:any ={};
  // variable to get data on constructor
  driver2:any;
  //variable to transfer data from driver to this one
  driverInfo:any ={};
  driverInfoNote:any ={};
  lat;
  lng;

  geoInfo1;
  geoInfo2;
  location;
  buttonColor:string = '#0fc874';
  buttonColor2:string = '#0fc874';
  unsubscribe = new Subject;
  carModelList:any=[];
  car:string;

  hour:any;
  nowHour:any = new Date();
  hourToSend:any;

   //geocoder variable
   geocoder: any
   geocoordinatesDest:any ={};
   geocoordinatesOr:any ={};
   destination:any;
   origin:any;
   destinationNote:any;
   originNote:any;

   // variables for reserve
   goefireKey:any;
   typeOfReserve:any;
   reserve:any;
   startHour:any;
   reservesAlreadyCreated:any;
   houseAddress:any;
   placeAddress:any;
   schedules = [];
   keyReserve:any;
   noCarAvailable:boolean = false;
   // ESTE NGIF DEBE SER PROGRAMADO AL HACER MERGE DE LOS HORARIOS
   itsSchedule:boolean = true;
  constructor(public navCtrl: NavController, public appCtrl: App, private MetricsService:DriverMetricsService , public PriceService:DriverPriceService,public alertCtrl: AlertController,private afDB: AngularFireDatabase,public sendUsersService: DriverSendUsersService, public SignUpService: DriverSignUpService, public sendCoordsService: DriverSendCoordsService,public modalCtrl: ModalController, private AngularFireAuth: AngularFireAuth, public viewCtrl:ViewController,public navParams: NavParams, private geofireService: DriverGeofireService) {

    this.keyReserve = this.navParams.get('keyReserve');

    
    
    this.geocoder = new google.maps.Geocoder;
  }


  ionViewWillEnter(){
    this.SignUpService.getCar(this.userDriverUid).takeUntil(this.unsubscribe)
    .subscribe( car => {
      //get cars registered
      this.carModelList = car;
      console.log(this.carModelList);

      if(this.carModelList.length === 0){
        this.noCarAvailable = true;
      }
    });
  }


 goToSetCars(){
  this.afDB.database.ref('/geofireRoute/')
  .orderByChild('keyTrip').equalTo(this.keyReserve)
  .once('value').then(snap =>{
   
    snap.forEach(keyGeofire =>{
      keyGeofire.ref.remove();
      
    })
  })
  this.geofireService.deleteUserGeofireDest(this.keyReserve);
  this.geofireService.deleteUserGeofireOr(this.keyReserve);
  this.geofireService.deleteUserReserve(this.userDriverUid, this.keyReserve);
  this.unsubscribe.next();
  this.unsubscribe.complete();
   this.viewCtrl.dismiss();
   this.navCtrl.push('DriverShowInfoCarPage');
 }
  
   

    setPriceDriver(){
      if(this.precio == null || this.precio == '' || this.car == null || this.car==''){
                const alert = this.alertCtrl.create({
                    title: 'Informacion Incompleta',
                    subTitle: 'No haz colocado el precio por el que estas dispuesto a compatir tu viaje o no haz especificado en que carro te moverás',
                    buttons: ['OK']
                  });
                  alert.present();
            }else{
              this.PriceService.setPriceAndCar(this.userDriverUid,this.precio,this.car, this.keyReserve);
              this.accepted = true;
              this.unsubscribe.next();
              this.unsubscribe.complete();
              this.viewCtrl.dismiss(this.accepted);
           }   
}; 



        
  dismiss() {
 
    this.afDB.database.ref('/geofireRoute/')
    .orderByChild('keyTrip').equalTo(this.keyReserve)
    .once('value').then(snap =>{
     
      snap.forEach(keyGeofire =>{
        keyGeofire.ref.remove();
        
      })
    })
    this.geofireService.deleteUserGeofireDest(this.keyReserve);
    this.geofireService.deleteUserGeofireOr(this.keyReserve);
    this.geofireService.deleteUserReserve(this.userDriverUid, this.keyReserve);
    this.unsubscribe.next();
    this.unsubscribe.complete();
  
    this.viewCtrl.dismiss();

  }  

}