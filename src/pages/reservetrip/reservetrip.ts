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
  pendingUser:any;
  noReserve:boolean;
  constructor(public navCtrl: NavController,public app:App,public reservesService:reservesService,public loadingCtrl: LoadingController, public SignUpService: SignUpService, public sendCoordsService: sendCoordsService,public modalCtrl: ModalController, private AngularFireAuth: AngularFireAuth, public alertCtrl: AlertController, public afDB: AngularFireDatabase, public instances: instancesService, public sendUsersService: sendUsersService, public toastCtrl: ToastController, private geofireService: geofireService) {   
    this.reservesService.getOnTrip(this.SignUpService.userPlace, this.userUid).takeUntil(this.unsubscribe)
    .subscribe( onTrip => {
       this.onTrip = onTrip;   
       console.log(this.onTrip);  
    })
    

    this.sendCoordsService.getOriginUser(this.SignUpService.userPlace, this.userUid).takeUntil(this.unsubscribe)
    .subscribe( originUser => {
      this.locationOrigin = originUser;      
    })
    
    this.sendCoordsService.getDestinationUser(this.SignUpService.userPlace, this.userUid).takeUntil(this.unsubscribe)
        .subscribe( destinationUser => {
          this.locationDestination = destinationUser;
    })


   
    
  }
  ionViewDidLoad(){
    this.reservesService.getMyReservesUser(this.SignUpService.userPlace, this.userUid).takeUntil(this.unsubscribe)
    .subscribe( myReservesId => {
      console.log(this.myReserves);
      //get all reserves id (reserve push key, driverUid) of my user node
      this.myReservesId = myReservesId;
      console.log(this.myReservesId);
      this.myReserves = [];
      this.getReserves();
      if(this.myReservesId.length === 0){
        //there are no reserves to show
        this.presentLoadingCustom();   
      }else{
        //there are reserves
          this.noReserve = false;
    
      }
    }) 
    
  }



  getReserves() {
    this.myReserves = []; //erase all of reserves 

    //after getting reserve id and driverUid from my own user node, we used them to access the reserve information in the node reserves
    this.myReservesId.forEach(reserve => {

        this.afDB.database.ref(this.SignUpService.userPlace + '/reserves/'+ reserve.driverId +'/'+ reserve.keyReserve).once('value').then((snapReserve)=>{
          this.reserve = snapReserve.val();

          console.log(this.reserve);

          this.pendingUser = [];

          if(reserve === undefined || reserve === null){
            if(this.onTrip === true){
              // i think doesnt work, just in case lets leave it here
              this.unSubscribeServices();
              console.log("me borre");
              this.reservesService.eliminateKeyUser(this.SignUpService.userPlace, this.userUid,reserve.keyReserve);
              this.navCtrl.pop();
              console.log("1")

            }else{
              // the driver cancel or eliminated the reserve
              console.log("cai en el vacío")
            } 

            console.log('aqui hubo error de reserva fantasma');
            
          }else{
            this.afDB.database.ref(this.SignUpService.userPlace + '/reserves/'+ reserve.driverId +'/'+ reserve.keyReserve+'/pendingUsers/'+this.userUid).once('value').then((snapExistence)=>{
              if(snapExistence === undefined || snapExistence === null ){

                if(this.onTrip === true){
                  this.unSubscribeServices();
                  console.log('fue aqui 2');
                  this.geofireService.cancelGeofireDest();
                  this.geofireService.cancelGeofireOr();
                  this.geofireService.cancelGeofireDestLMU();
                  this.geofireService.cancelGeofireOrLMU();
                  this.app.getRootNav().push('MyridePage');
                  //  do nothing because the user is in the trip
                  console.log("in a trip")
                }else{
                  if(this.onTrip === false || this.onTrip === undefined || this.onTrip === null){
                    this.unSubscribeServices();
                    this.reservesService.eliminateKeyUser(this.SignUpService.userPlace, this.userUid,reserve.keyReserve);

                  }else{
                     //  eliminate key because the driver has eliminated the user
                     console.log("me borre");
                     this.unSubscribeServices();
                     console.log('fue aqui');
                     this.eliminateReserve(this.userUid, reserve.keyReserve);
                     // this.myReserves=[];
                  }
         
                }
                    
              }else{
                this.myReserves.push(this.reserve);
              }
            })
          }
          
        })







        // this.reservesService.getMyReserves(this.SignUpService.userPlace, reserve.driverId, reserve.keyReserve).takeUntil(this.unsubscribe)
        //     .subscribe(info => {
        //         this.reserve = info;
        //         console.log(this.reserve)
        //         this.pendingUsers = [];                         

        //         if(reserve === undefined || reserve === null){
        //           if(this.onTrip === true){
        //             // i think doesnt work, just in case lets leave it here
        //             this.unSubscribeServices();
        //             console.log("me borre");
        //             this.reservesService.eliminateKeyUser(this.SignUpService.userPlace, this.userUid,reserve.keyReserve);
        //             this.navCtrl.pop();
        //             console.log("1")

        //           }else{
        //             // the driver cancel or eliminated the reserve
        //             console.log("cai en el vacío")
        //           } 
        //         }else{
        //         //   console.log(this.reserve.keyTrip)
        //           console.log(reserve.keyReserve) 

        //           this.reservesService.confirmMyExistenceInPendingUsers(this.SignUpService.userPlace, reserve.driverId, reserve.keyReserve, this.userUid).takeUntil(this.unsubscribe)
        //           .subscribe(pendingUser => {
        //               this.pendingUser = pendingUser;  
        //               console.log(this.pendingUser);
        //               console.log(pendingUser);

        //               if(this.pendingUser === undefined || this.pendingUser === null ){

        //                 if(this.onTrip === true){
        //                   this.unSubscribeServices();
        //                   console.log('fue aqui 2');
        //                   this.geofireService.cancelGeofireDest();
        //                   this.geofireService.cancelGeofireOr();
        //                   this.geofireService.cancelGeofireDestLMU();
        //                   this.geofireService.cancelGeofireOrLMU();
        //                   this.app.getRootNav().push('MyridePage');
        //                   //  do nothing because the user is in the trip
        //                   console.log("in a trip")
        //                 }else{
        //                   if(this.onTrip === false || this.onTrip === undefined || this.onTrip === null){
        //                     this.unSubscribeServices();
        //                     this.reservesService.eliminateKeyUser(this.SignUpService.userPlace, this.userUid,reserve.keyReserve);

        //                   }else{
        //                      //  eliminate key because the driver has eliminated the user
        //                      console.log("me borre");
        //                      this.unSubscribeServices();
        //                      console.log('fue aqui');
        //                      this.eliminateReserve(this.userUid, reserve.keyReserve);
        //                      // this.myReserves=[];
        //                   }
                 
        //                 }
                            
        //               }else{
        //                 this.myReserves.push(info);
        //               }

        //           })
        //         }              
                  
                
                

        //     })
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
eliminateReserve(userUid, keyReserve) {
    this.unSubscribeServices();
    this.reservesService.eliminateKeyUser(this.SignUpService.userPlace, userUid, keyReserve);
    let modal = this.modalCtrl.create('CanceltripPage');
    // this.navCtrl.setRoot('FindridePage');
    modal.present();
}
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







