import { Component } from '@angular/core';
import { NavController, ModalController, ToastController, IonicPage } from 'ionic-angular';

import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { sendCoordsService } from '../../services/sendCoords.service';
import { SignUpService } from '../../services/signup.services';
import { ConfirmpopupPage } from '../confirmpopup/confirmpopup';
import { geofireService } from '../../services/geoFire.service';
import { AngularFireAuth } from 'angularfire2/auth';
@IonicPage()

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

 let modal = this.modalCtrl.create('ConfirmpopupPage',{driver});
 modal.present();
 console.log(driver)
  }
 
  }
  help(){
    const toast = this.toastCtrl.create({
      message: 'Aquí te saldrán los estudiantes con carro, escoge con cuál quieres compartir tu viaje y espera a que te acepte para poder comunicarte con el.',
      showCloseButton:true,
      closeButtonText: 'OK',
      position:'top'
         });
    toast.present();
  }
}


