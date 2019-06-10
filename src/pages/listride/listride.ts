import { Component } from '@angular/core';
import { NavController, ModalController, ToastController, IonicPage } from 'ionic-angular';

import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { sendCoordsService } from '../../services/sendCoords.service';
import { SignUpService } from '../../services/signup.services';
import { ConfirmpopupPage } from '../confirmpopup/confirmpopup';
import { geofireService } from '../../services/geoFire.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { reservesService } from '../../services/reserves.service';
import { TripsService } from '../../services/trips.service';
@IonicPage()

@Component({
  selector: 'page-listride',
  templateUrl: 'listride.html'
})
export class ListridePage {
  reservesAvailable:any = [];
  initiatedTrips:any = [];
  locationDestinationUser:any =[];
  locationOriginUser:any =[];
  user:any;
  userUid=this.AngularFireAuth.auth.currentUser.uid;
  test:any;
  reserve:any;
  myReservesId: any =[];
  constructor(public navCtrl: NavController,public TripsService:TripsService,public toastCtrl: ToastController,public reservesService:reservesService,  private AngularFireAuth: AngularFireAuth,private afDB: AngularFireDatabase, public SignUpService: SignUpService, public sendCoordsService: sendCoordsService,public modalCtrl: ModalController, private geoFireService: geofireService ) {
       
    this.SignUpService.getMyInfo(this.userUid).subscribe(user=>{
      this.user = user;
      
    })

    this.sendCoordsService.getOriginUser(this.userUid)
    .subscribe( originUser => {
      this.locationOriginUser = originUser;
      // this.locationOrigin.push(origin)
      console.log(originUser);
    });
    this.sendCoordsService.getDestinationUser(this.userUid)
        .subscribe( destinationUser => {
          this.locationDestinationUser = destinationUser;
          // this.locationOrigin.push(origin)
          console.log(destinationUser);
        });
    this.reservesService.getReserves(this.userUid)
    //cambiar en merge
      .subscribe(reserves => {
        this.myReservesId = reserves;
        console.log(this.myReservesId);
         this.getReserves();
      });
     
  
  this.TripsService.getLastMinuteTripsDEMO(this.userUid)
  //cambiar en merge
    .subscribe(reserves => {
      this.initiatedTrips = reserves;
      console.log(this.initiatedTrips);
  
    });
   
  }

  getReserves(){
    //after getting reserve id and driverUid from my own user node, we used them to access the reserve information in the node reserves
      this.myReservesId.forEach(reserve => {
      this.reservesService.getMyReserves(reserve.driverId,reserve.keyReserve)
      .subscribe( info => {
            this.reserve = info;             
            this.reservesAvailable.push(this.reserve);
            console.log(this.reservesAvailable);
          // arreglar problema de que aparece varias veces la misma reserva
      })  
    })
  
  }

ionViewDidLoad(){
  // this.geoFireService.getDriversAvailableForUser(this.userUid)
  //   .subscribe(drivers=>{
  //       this.driversAvailable = drivers;
  //       console.log(this.driversAvailable);
  //   })
}


 
 showToastWithCloseButton(noteDriver,nameDriver) {
   //useless thing
   if(noteDriver == ''|| noteDriver == null) {
    const toast = this.toastCtrl.create({
      message: `${nameDriver}: No hay nota`,
      duration:1500,
      position:'bottom'
    });
    toast.present();
   
   } else {
    const toast = this.toastCtrl.create({
      message: `${nameDriver} : ${noteDriver}`,
      showCloseButton: true,
      closeButtonText: 'Ok'
    });
    toast.present();
   }
  
}
 confirmpopup(reserve,keyArray:string,driverUserId){
   //mutacion: tiene q mutar o eliminarse
//   if(this.user.trips.onTrip == true || this.user.trips.pickedUp == true){
//     // this.geoFireService.deleteDriverListRideTotal(this.userUid);
//     this.geoFireService.deleteDriverListRideTotal(this.userUid);
//     const toast = this.toastCtrl.create({
//       message: `${this.user.name} : No puedes escoger otro conductor mientras estes en un viaje, por favor dirígete a Mi Viaje y cancelalo. `,
//       showCloseButton: true,
//       closeButtonText: 'Ok'
//     });
//     toast.present();
//   } else {

//  let modal = this.modalCtrl.create('ConfirmpopupPage',{reserve,keyArray});
//  modal.present();
//  console.log(reserve)
//   }
  let modal = this.modalCtrl.create('ConfirmpopupPage',{reserve:reserve});
 modal.present();
 console.log(reserve)
 console.log(keyArray)
 console.log(keyArray)
  }
  help(){
    const toast = this.toastCtrl.create({
      message: 'Estos son los conductores que se van a tu misma zona. Podrás ver sus horas en las que se van y unirte en su viaje',
      showCloseButton:true,
      closeButtonText: 'OK',
      position:'top'
         });
    toast.present();
  }
}


