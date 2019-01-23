import { Component } from '@angular/core';
import { NavController, ModalController, ToastController } from 'ionic-angular';

import { FilterPage } from '../filter/filter';
import { RiderprofilePage } from '../riderprofile/riderprofile';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { Firebase } from '@ionic-native/firebase';
import { SignUpService } from '../../services/signup.service';
import { sendCoordsService } from '../../services/sendCoords.service';
import { ConfirmpopupPage } from '../confirmpopup/confirmpopup';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

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

  userUid=this.AngularFireAuth.auth.currentUser.uid;

  constructor(public navCtrl: NavController,public toastCtrl: ToastController,  private AngularFireAuth: AngularFireAuth,private afDB: AngularFireDatabase, public SignUpService: SignUpService, public sendCoordsService: sendCoordsService,public modalCtrl: ModalController) {
       
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
    this.SignUpService.getDrivers()
      .subscribe(driver => {
        this.driversAvailable = driver;
        console.log(this.driversAvailable);
        
      });

     
  };



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
       
  // this.navCtrl.push(ConfirmpopupPage)
  let modal = this.modalCtrl.create(ConfirmpopupPage,{driver});
  modal.present();
  console.log(driver)
  }
}


