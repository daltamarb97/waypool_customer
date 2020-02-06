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
  constructor(public navCtrl: NavController, public appCtrl: App, private MetricsService:DriverMetricsService , public PriceService:DriverPriceService,public alertCtrl: AlertController,private afDB: AngularFireDatabase,public sendUsersService: DriverSendUsersService, public SignUpService: DriverSignUpService, public sendCoordsService: DriverSendCoordsService,public modalCtrl: ModalController, private AngularFireAuth: AngularFireAuth, public viewCtrl:ViewController,public navParams: NavParams, private geofireService: DriverGeofireService) {


    // this.afDB.database.ref(this.SignUpService.userPlace + '/reserves/' + this.userDriverUid).once('value').then((snap)=>{
    //   console.log(snap.val());

    //   let obj = snap.val();

    //   Object.getOwnPropertyNames(obj).forEach(key => {
    //    console.log(obj[key]);
        
    //   });
      
    // })
    //hay dos variables, driver y driver2 lo cual significa que debo llamar a la info del driver en dos ocasiones distintas, cuando hay nota y cuando no
    this.SignUpService.getCar( this.SignUpService.userPlace , this.userDriverUid).takeUntil(this.unsubscribe)
    .subscribe( car => {
      //get cars registered
      this.carModelList = car;
      console.log(this.carModelList)
    });


  
    



    this.SignUpService.getMyInfo(this.SignUpService.userPlace , this.userDriverUid).takeUntil(this.unsubscribe).subscribe(driver=>{
      this.driver = driver;
  console.log(this.driver);
  
      this.driverInfo.houseAddr = this.driver.houseAddress.name
      this.driverInfo.placeAddr = this.driver.fixedLocation.name
      this.driverInfo.name = this.driver.name
      this.driverInfo.lastname = this.driver.lastname
      this.driverInfo.phone = this.driver.phone
      this.driverInfo.userId = this.driver.userId
      this.driverInfo.verifiedPerson = this.driver.verifiedPerson
      this.driverInfo.place = this.driver.place
      this.driverInfo.company = this.driver.company,
      this.driverInfo.city = this.driver.city

      console.log('got info here');
 })
 


    
    this.geocoder = new google.maps.Geocoder;
  }

  ionViewDidEnter(){
     this.geofireService.cancelGeoqueryPlace();
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
              this.PriceService.setPrice(this.SignUpService.userPlace, this.userDriverUid,this.precio,this.car);

              // HERE YOU ARE, DOUCHEBAG

              this.afDB.database.ref(this.SignUpService.userPlace + '/drivers/' + this.userDriverUid + '/schedule/').once('value').then((snapSchedule)=>{
                let obj = snapSchedule.val();
                console.log(obj);
                Object.getOwnPropertyNames(obj).forEach((key)=>{
                  if(obj[key].type === 'origin'){
                    this.afDB.database.ref(this.SignUpService.userPlace + '/reserves/'+ this.userDriverUid).push({
                      driver: this.driverInfo,
                      car:this.car,
                      houseAddr: this.driver.houseAddress.name,
                      placeAddr: this.driverInfo.placeAddr,
                      price:this.precio,
                      startHour: obj[key].hour,
                      type: obj[key].type,
                       
              
                  }).then((snap1)=>{
                    const key1 = snap1.key;
                    // this.MetricsService.createdReserves(this.SignUpService.userPlace,this.driverInfo,this.car,this.navParams.data.houseAddr[0],this.navParams.data.placeAddr,this.precio, sche.,this.typeOfReserve);
            
                   // set geofireOrkey 
                   this.geofireService.setGeofireOrNEWTEST(this.SignUpService.userPlace, key1, this.driver.houseAddress.coordinates.lat, this.driver.houseAddress.coordinates.lng );
                   this.afDB.database.ref(this.SignUpService.userPlace + '/geofireOr/' + key1).update({
                      driverId: this.driverInfo.userId
                   })
                   console.log('executed geofire Or');
                  
                      this.afDB.database.ref(this.SignUpService.userPlace + '/reserves/'+ this.userDriverUid + '/' + key1).update({
                          keyTrip: key1 
                      }) 

                      this.accepted = true;
                      this.unsubscribe.next();
                      this.unsubscribe.complete();
                      this.viewCtrl.dismiss(this.accepted);

                  })
                  }else{
                    this.afDB.database.ref(this.SignUpService.userPlace + '/reserves/'+ this.userDriverUid).push({
                      driver: this.driverInfo,
                      car:this.driver.trips.car,
                      houseAddr: this.driver.houseAddress.name,
                      placeAddr: this.driverInfo.placeAddr,
                      price:this.precio,
                      startHour: obj[key].hour,
                      type: obj[key].type,
              
                  }).then((snap2)=>{
                    const key2 = snap2.key;
                    // this.MetricsService.createdReserves(this.SignUpService.userPlace,this.driverInfo,this.car,this.navParams.data.houseAddr[0],this.navParams.data.placeAddr,this.precio, sche.,this.typeOfReserve);
            
                   // set geofireOrkey 
                   this.geofireService.setGeofireDestNEWTEST(this.SignUpService.userPlace, key2, this.driver.houseAddress.coordinates.lat, this.driver.houseAddress.coordinates.lng );
                   this.afDB.database.ref(this.SignUpService.userPlace + '/geofireDest/' + key2).update({
                      driverId: this.driverInfo.userId
                   })
                   console.log('executed geofire Dest')
                  
              
              
                      this.afDB.database.ref(this.SignUpService.userPlace + '/reserves/'+ this.userDriverUid + '/' + key2).update({
                          keyTrip: key2 
                      }) 
                      this.accepted = true;
                      this.unsubscribe.next();
                      this.unsubscribe.complete();
                      this.viewCtrl.dismiss(this.accepted);

                  })                    
                  }
                  
                })
                
              })
           }

     
}; 
        
  dismiss() {
     // this.unsubscribe.next();
    // this.unsubscribe.unsubscribe();
    this.unsubscribe.next();
    this.unsubscribe.complete();
  
    this.viewCtrl.dismiss();

  }  

  // ionViewDidLeave(){
  //   this.unsubscribe.next();
  //   this.unsubscribe.complete();
  // }
 
}