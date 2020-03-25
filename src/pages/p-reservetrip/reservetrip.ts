import { Component } from '@angular/core';
import { NavController, ModalController, AlertController, ToastController, IonicPage, App, LoadingController } from 'ionic-angular';

// import { RiderprofilePage } from '../riderprofile/riderprofile';
// import { Observable } from 'rxjs';
// import { AngularFireDatabase} from 'angularfire2/database';
import { sendCoordsService } from '../../services/sendCoords.service';
import { AngularFireAuth } from 'angularfire2/auth';
// import * as firebase from 'firebase';
// import { sendUsersService } from '../../services/sendUsers.service';
// import { Geofence } from '@ionic-native/geofence';

import {  Subscription, Subject } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { instancesService } from '../../services/instances.service';
import { sendUsersService } from '../../services/sendUsers.service';
import { reservesService } from '../../services/reserves.service';
import { SignUpService } from '../../services/signup.services';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { geofireService } from '../../services/geoFire.service';
import { take } from 'rxjs/operators';

@IonicPage()
@Component({
  selector: 'page-reservetrip',
  templateUrl: 'reservetrip.html'
})
export class ReservetripPage{
  locationOrigin:any =[];
  locationDestination:any =[];
  userUid=this.AngularFireAuth.auth.currentUser.uid;
  usersFindingTrip:any = [];
  user:any;
  subscribe:Subscription;
  usersOnListRide:any=[];
  text = 'Aceptar viaje';
  userDriver:any;
  myReservesId:any=[];
  myReserves:any =[];
  reserve:any;
  pendingUsers:any = [];
  onTrip:any;
  unsubscribe = new Subject;
  noReserve:boolean;
  constructor(public navCtrl: NavController,public app:App,public reservesService:reservesService,public loadingCtrl: LoadingController, public SignUpService: SignUpService, public sendCoordsService: sendCoordsService,public modalCtrl: ModalController, private AngularFireAuth: AngularFireAuth, public alertCtrl: AlertController, public afDB: AngularFireDatabase, public instances: instancesService, public sendUsersService: sendUsersService, public toastCtrl: ToastController, private geofireService: geofireService) {   
    

    this.reservesService.getOnTrip( this.userUid).takeUntil(this.unsubscribe)
    .subscribe( onTrip => {
       this.onTrip = onTrip;   
       console.log(this.onTrip);
       console.log('fue aqui 2');
       if (this.onTrip === true) {

        this.unSubscribeServices();
        this.navCtrl.pop();

        //NO LONGER NECESSARY
        // this.geofireService.cancelGeofireDest();
        // this.geofireService.cancelGeofireOr();
        // this.geofireService.cancelGeofireDestLMU();
        // this.geofireService.cancelGeofireOrLMU();
        console.log("repetire");
        
        this.navCtrl.push('MyridePage');
       } else {
         
       }
   
    })
    
    
    
    this.reservesService.getMyReservesUser( this.userUid).takeUntil(this.unsubscribe)
    .subscribe( myReservesId => {
      console.log(this.myReserves);
      //get all reserves id (reserve push key, driverUid) of my user node
      this.myReservesId = myReservesId;
      console.log(this.myReservesId);
      this.myReserves = [];
      if(this.myReservesId.length === 0){
        //there are no reserves to show
        this.presentLoadingCustom();   
      }else{
        //there are reserves
          this.noReserve = false;
          //check if driver have cancel me from reserve
          this.myReservesId.forEach(reserve => {
            if (reserve.cancelReserve == true) {
              this.unSubscribeServices();
              this.navCtrl.pop();
              let modal = this.modalCtrl.create('CanceltripPage');
              modal.present();
              this.reservesService.eliminateKeyUser( this.userUid,reserve.keyReserve);
              

            }
          });
          this.getReserves();
          
      }

    }) 

  }



  ionViewDidLoad(){
    
    
  }



  getReserves() {
    this.myReserves = []; //erase all of reserves 
    console.log('aqui necesito verte');
    console.log(this.myReservesId);
    
    //after getting reserve id and driverUid from my own user node, we used them to access the reserve information in the node reserves
    this.myReservesId.forEach(reserve => {

        this.afDB.database.ref( '/reservesTest/'+ reserve.driverId +'/'+ reserve.keyReserve).once('value').then((snapReserve)=>{
          this.reserve = snapReserve.val();
          console.log(this.reserve);          
          if(reserve === undefined || reserve === null){
           
          }else{

            this.myReserves.push(this.reserve);
            console.log(this.myReserves);
            
          }
          
        })
    })
}

tripDetails(keyTrip, driverUid) {
    let modal = this.modalCtrl.create('ReserveinfoPage', {
        reserveKey: keyTrip,
        driverUid: driverUid
    })
    modal.present();
}

enterChat(reserve) {
  let modal = this.modalCtrl.create('ChattingPage', {
      reserve:reserve,
      isTrip: false
  })
  modal.present();
}
// confirmreserve(reserveKey,driverUid){
//      //TODAVÍA NO


// }



unSubscribeServices(){
  this.unsubscribe.next();
  this.unsubscribe.complete();
}  



help() {
    const toast = this.toastCtrl.create({
        message: 'Aquí te saldrán las personas que quieren irse contigo',
        showCloseButton: true,
        closeButtonText: 'OK',
        position: 'top'
    });
    toast.present();
}
presentLoadingCustom() {
  let loading = this.loadingCtrl.create({
    spinner: 'crescent',
    content: `
      <div class="custom-spinner-container">
        <div class="custom-spinner-box"></div>
      </div>`,
    duration: 250
  });

  loading.onDidDismiss(() => {
    this.noReserve = true;

  });

  loading.present();
}

ionViewDidLeave(){
  this.unsubscribe.next();
  this.unsubscribe.complete();

}

}







