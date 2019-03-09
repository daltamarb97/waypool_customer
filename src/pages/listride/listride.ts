import { Component } from '@angular/core';
import { NavController, ModalController, ToastController } from 'ionic-angular';

import { FilterPage } from '../filter/filter';
import { RiderprofilePage } from '../riderprofile/riderprofile';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { Firebase } from '@ionic-native/firebase';
import { sendCoordsService } from '../../services/sendCoords.service';
import * as firebase from 'firebase';
import { SignUpService } from '../../services/signup.services';
import { ConfirmridePage } from '../confirmride/confirmride';
import { ConfirmpopupPage } from '../confirmpopup/confirmpopup';
import { geofireService } from '../../services/geoFire.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-listride',
  templateUrl: 'listride.html'
})
export class ListridePage {
  driversAvailable:any = [];

  locationOrigin:any =[];
  locationOriginUser:any =[];
  locationDestination:any =[];
  locationDestinationUser:any =[];
  user:any;
  userUid=this.AngularFireAuth.auth.currentUser.uid;

  constructor(public navCtrl: NavController,public toastCtrl: ToastController,  private AngularFireAuth: AngularFireAuth,private afDB: AngularFireDatabase, public SignUpService: SignUpService, public sendCoordsService: sendCoordsService,public modalCtrl: ModalController, private geoFireService: geofireService ) {
       
    this.SignUpService.getMyInfo(this.userUid).subscribe(user=>{
      this.user = user;
      
    })

        this.sendCoordsService.getOrigin(this.userUid)
        .subscribe( origin => {
          this.locationOrigin = origin;
          // this.locationOrigin.push(origin)
          console.log(origin);
        })
        this.sendCoordsService.getOriginUser(this.userUid)
        .subscribe( originUser => {
          this.locationOriginUser = originUser;
          // this.locationOrigin.push(origin)
          console.log(originUser);
        })
      
      this.sendCoordsService.getDestination(this.userUid)
        .subscribe( destination => {
          this.locationDestination = destination;
          // this.locationOrigin.push(origin)
          console.log(destination);
        })

        this.sendCoordsService.getDestinationUser(this.userUid)
        .subscribe( destinationUser => {
          this.locationDestinationUser = destinationUser;
          // this.locationOrigin.push(origin)
          console.log(destinationUser);
        })
    // this.SignUpService.getDrivers()
    //   .subscribe(driver => {
    //     this.driversAvailable = driver;
    //     console.log(this.driversAvailable);
        
    //   });

     
  };



ionViewDidLoad(){
  this.geoFireService.getDriversAvailableForUser(this.userUid)
    .subscribe(drivers=>{
        this.driversAvailable = drivers;
        console.log(this.driversAvailable);
    })
}

 filter(){
    this.navCtrl.push(FilterPage);
 }
 
 showToastWithCloseButton(noteDriver,nameDriver) {
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
 confirmpopup(driver){
  if(this.user.trips.onTrip == true || this.user.trips.pickedUp == true){
    // this.geoFireService.deleteDriverListRideTotal(this.userUid);
    this.geoFireService.deleteDriverListRideTotal(this.userUid);
    const toast = this.toastCtrl.create({
      message: `${this.user.name} : No puedes escoger otro conductor mientras estes en un viaje, por favor dirígete a Mi Viaje y cancelalo. `,
      showCloseButton: true,
      closeButtonText: 'Ok'
    });
    toast.present();
  } else {

 let modal = this.modalCtrl.create(ConfirmpopupPage,{driver});
 modal.present();
 console.log(driver)
  }
 
  }
}


