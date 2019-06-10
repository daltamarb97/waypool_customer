import { Component } from '@angular/core';
import { NavController, ModalController, AlertController, ToastController, IonicPage } from 'ionic-angular';

// import { RiderprofilePage } from '../riderprofile/riderprofile';
// import { Observable } from 'rxjs';
// import { AngularFireDatabase} from 'angularfire2/database';
import { sendCoordsService } from '../../services/sendCoords.service';
import { AngularFireAuth } from 'angularfire2/auth';
// import * as firebase from 'firebase';
// import { sendUsersService } from '../../services/sendUsers.service';
// import { Geofence } from '@ionic-native/geofence';

import {  Subscription } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { instancesService } from '../../services/instances.service';
import { sendUsersService } from '../../services/sendUsers.service';
import { reservesService } from '../../services/reserves.service';
import { SignUpService } from '../../services/signup.services';

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

  constructor(public navCtrl: NavController,public reservesService:reservesService, public SignUpService: SignUpService, public sendCoordsService: sendCoordsService,public modalCtrl: ModalController, private AngularFireAuth: AngularFireAuth, public alertCtrl: AlertController, public afDB: AngularFireDatabase, public instances: instancesService, public sendUsersService: sendUsersService, public toastCtrl: ToastController) {
    
   
    this.reservesService.getMyReservesUser(this.userUid)
    .subscribe( myReservesId => {
      //get all reserves id (reserve push key, driverUid) of my user node
      this.myReservesId = myReservesId;     
      console.log(this.myReservesId);
      this.getReserves();
    })    

    this.sendCoordsService.getOriginUser(this.userUid)
    .subscribe( originUser => {
      this.locationOrigin = originUser;      
    });
    
    this.sendCoordsService.getDestinationUser(this.userUid)
        .subscribe( destinationUser => {
          this.locationDestination = destinationUser;
        });
  }

  ionViewDidLoad(){
    
  }
    getReserves(){
      //after getting reserve id and driverUid from my own user node, we used them to access the reserve information in the node reserves
        this.myReservesId.forEach(reserve => {
        this.reservesService.getMyReserves(reserve.driverId,reserve.keyReserve)
        .subscribe( info => {
              this.reserve = info;             
              this.myReserves.push(this.reserve);
              console.log(this.myReserves);
            // arreglar problema de que aparece varias veces la misma reserva
        })  
      })
    
    }
  
  

 
  // confirmreserve(reserveKey,driverUid){
  //      //TODAVÍA NO
        
  //   let modal = this.modalCtrl.create('ConfirmpopupPage',{reserve:reserveKey,driver:driverUid}); isabella daniel te amo 
  //   modal.present();
  
  // }
  
  help(){
    const toast = this.toastCtrl.create({
      message: 'Aquí te saldrán las personas que quieren irse contigo',
      showCloseButton:true,
      closeButtonText: 'OK',
      position:'top'
         });
    toast.present();
  }
}







