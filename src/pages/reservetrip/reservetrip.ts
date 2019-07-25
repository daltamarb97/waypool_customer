import { Component } from '@angular/core';
import { NavController, ModalController, AlertController, ToastController, IonicPage, App } from 'ionic-angular';

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
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

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

  constructor(public navCtrl: NavController,public app:App,public reservesService:reservesService, public SignUpService: SignUpService, public sendCoordsService: sendCoordsService,public modalCtrl: ModalController, private AngularFireAuth: AngularFireAuth, public alertCtrl: AlertController, public afDB: AngularFireDatabase, public instances: instancesService, public sendUsersService: sendUsersService, public toastCtrl: ToastController) {   
    this.reservesService.getMyReservesUser(this.userUid)
    .subscribe( myReservesId => {
      console.log(this.myReserves);
      //get all reserves id (reserve push key, driverUid) of my user node
      this.myReservesId = myReservesId;
      console.log(this.myReservesId);
      this.getReserves();
    })    

    this.sendCoordsService.getOriginUser(this.userUid)
    .subscribe( originUser => {
      this.locationOrigin = originUser;      
    })
    
    this.sendCoordsService.getDestinationUser(this.userUid)
        .subscribe( destinationUser => {
          this.locationDestination = destinationUser;
    })
  }

  ionViewDidLoad(){
    
  }
    getReserves(){
      this.myReserves=  []; //erase all of reserves 

      //after getting reserve id and driverUid from my own user node, we used them to access the reserve information in the node reserves
        this.myReservesId.forEach(reserve => {
        this.reservesService.getMyReserves(reserve.driverId,reserve.keyReserve)
        .subscribe( info => {
              this.reserve = info;   
              this.pendingUsers = [];
            
              console.log(this.pendingUsers);
              console.log(this.myReserves);
              console.log(this.reserve);
              //check if reserve hasn't been canceled
              console.log("mirar desde aqui");

              if(this.reserve === undefined || this.reserve === null){
                //this means the driver cancel the reserves,the user has to eliminate the key
                console.log("aqui estoy yoooooo");
                this.reservesService.eliminateKeyUser(this.userUid,reserve.keyTrip);
                let modal = this.modalCtrl.create('CanceltripPage');
                modal.onDidDismiss(accepted => {
                  if(accepted){
                    // this.navCtrl.push('ListridePage');
                    this.navCtrl.setRoot(this.navCtrl.getActive().component);
                  }
                })
                console.log("4");
              }else{
                  //check if the driver sabotage the trip eliminating anyone
                if(this.reserve.pendingUsers === undefined || this.reserve.pendingUsers === null ){
                  this.reservesService.eliminateKeyUser(this.userUid,reserve.keyTrip);
                  let modal = this.modalCtrl.create('CanceltripPage');
                  modal.onDidDismiss(accepted => {
                    if(accepted){
                      // this.navCtrl.push('ListridePage');
                      this.navCtrl.setRoot(this.navCtrl.getActive().component);
                    }
                  })
                  console.log("3");
                }else{
                  this.reservesService.getPendingUsers(this.userUid,this.reserve.keyTrip)
                  .subscribe( pendingUsers => {
                    this.pendingUsers = pendingUsers;
                    console.log(pendingUsers);
                    this.pendingUsers.forEach( user => {
                      // check if the user hasn't been eliminated from the reserve by the driver
                      if(user.userId === this.userUid){
                          //do nothing because the user is in the trip
                          this.myReserves.push(this.reserve);
                          console.log("1")
                      } else {
                        // eliminate key because the driver has eliminated the user
                        console.log("2")  
                        this.reservesService.eliminateKeyUser(this.userUid,reserve.keyTrip);
                        let modal = this.modalCtrl.create('CanceltripPage');
                        modal.onDidDismiss(accepted => {
                          if(accepted){
                            // this.navCtrl.push('ListridePage');
                            this.navCtrl.setRoot(this.navCtrl.getActive().component);
                          }
                        })
                    
                        modal.present();
                      }
                    })
                  })
                  
                }                
              }
            // arreglar problema de que aparece varias veces la misma reserva
        })  
      })

    }
  
tripDetails(keyTrip,driverUid){
  let modal = this.modalCtrl.create('ReserveinfoPage',{reserveKey:keyTrip,driverUid:driverUid});
  modal.present();
}

 
  // confirmreserve(reserveKey,driverUid){
  //      //TODAVÍA NO

  
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







