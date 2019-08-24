import { Component } from '@angular/core';
import { NavController, ViewController, NavParams, ToastController, IonicPage, AlertController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { SignUpService } from '../../services/signup.services';
import { sendCoordsService } from '../../services/sendCoords.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { sendUsersService } from '../../services/sendUsers.service';
import { geofireService } from '../../services/geoFire.service';
import { instancesService } from '../../services/instances.service';
import { Subject, onErrorResumeNext } from 'rxjs';

@IonicPage()

@Component({
  selector: 'page-confirmpopup',
  templateUrl: 'confirmpopup.html'
})
export class ConfirmpopupPage {

  usersOnTrip:any;
  accepted: boolean;
  reserve:any;
  user:any ={};
  hideButton:boolean = true;
  hideText:boolean = false;
  userUid=this.AngularFireAuth.auth.currentUser.uid;
  unsubscribe = new Subject;
  reservesWhereIam:any;
  constructor(public navCtrl: NavController, public sendUsersService:sendUsersService,public toastCtrl: ToastController,public viewCtrl: ViewController,private afDB: AngularFireDatabase, public SignUpService: SignUpService, public sendCoordsService: sendCoordsService,public navParams: NavParams,public AngularFireAuth: AngularFireAuth, private geoFireService: geofireService, public instances: instancesService, public alertCtrl: AlertController) {
    
    this.reserve= this.navParams.get('reserve') 
    console.log(this.reserve)

    
        
       //get the info of the driver 
       this.SignUpService.getMyInfo(this.userUid,this.SignUpService.userUniversity)
       .subscribe( myUserInfo => {
         this.user = myUserInfo;
         console.log(this.user);          
       });


       // function to get in how many reserves I am
       this.SignUpService.checkMyReserves(this.SignUpService.userUniversity, this.userUid)
       .subscribe( reserves => {
        this.reservesWhereIam = reserves;
        console.log(this.reservesWhereIam);
       })


  }



  goToRide(){  
    if(this.reservesWhereIam.length >= 5){
      let alert = this.alertCtrl.create({
        title: 'limite de reservas por un dia',
        subTitle: 'Ya excediste el limite de reservas por un dia ',
        buttons: ['OK']
      });
      alert.present();
    }else {
      this.SignUpService.getMyInfo(this.userUid , this.SignUpService.userUniversity).takeUntil(this.unsubscribe)
    .subscribe(user=>{
      this.user = user; 
      console.log(this.user)
      // OLD
      // if(this.user.trips.onTrip == true){
      //   this.dismiss();
      // } 

      // if(this.user.trips.onTrip == false){
      //   this.dismiss();
      // } 
      
    })
    console.log(this.reserve.keyTrip )
    this.geoFireService.joinReserve(this.SignUpService.userUniversity, this.reserve.keyTrip,this.reserve.driver.userId, this.userUid, this.user.trips.origin, this.user.trips.destination, this.user.name, this.user.lastname, this.user.phone, this.user.trips.note, this.user.verifiedPerson);
    this.geoFireService.pushToMyReserve(this.SignUpService.userUniversity,this.reserve.keyTrip,this.reserve.driver.userId, this.userUid);
    this.hideButton = !this.hideButton;
    this.hideText = !this.hideText;
    this.accepted = true;  
     const toast = this.toastCtrl.create({
      message: `Haz reservado con ${this.reserve.driver.name} para compartir tu viaje a las ${this.reserve.startHour}, entra en Mis reservas para ver más.`,
      showCloseButton: true,
      closeButtonText: 'Ok'
    });
    toast.present();  
    this.dismiss();
    }
   }



    dismissX(){
      this.viewCtrl.dismiss();

    }


  dismiss() {
    this.viewCtrl.dismiss(this.accepted);
    this.unsubscribe.next();
    this.unsubscribe.complete();
    // this.navCtrl.pop();

  }  
}
