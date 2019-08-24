import { Component } from '@angular/core';
import { NavController, ViewController, NavParams, ToastController, IonicPage, App } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { SignUpService } from '../../services/signup.services';
import { sendCoordsService } from '../../services/sendCoords.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { sendUsersService } from '../../services/sendUsers.service';
import { geofireService } from '../../services/geoFire.service';
import { instancesService } from '../../services/instances.service';
import { Subject, onErrorResumeNext } from 'rxjs';
import { TripsService } from '../../services/trips.service';
import { reservesService } from '../../services/reserves.service';

@IonicPage()

@Component({
  selector: 'page-confirmtrip',
  templateUrl: 'confirmtrip.html'
})
export class ConfirmtripPage {

  usersOnTrip:any;
  accepted: boolean;
  reserve:any;
  user:any ={};
  hideButton:boolean = true;
  hideText:boolean = false;
  userUid=this.AngularFireAuth.auth.currentUser.uid;
  unsubscribe = new Subject;
  trip:any;
  constructor(public navCtrl: NavController, private app: App,public reservesService:reservesService, public sendUsersService:sendUsersService,public TripsService:TripsService,public toastCtrl: ToastController,public viewCtrl: ViewController,private afDB: AngularFireDatabase, public SignUpService: SignUpService, public sendCoordsService: sendCoordsService,public navParams: NavParams,public AngularFireAuth: AngularFireAuth, private geoFireService: geofireService, public instances: instancesService) {
    
    this.trip= this.navParams.get('trip') 
    console.log(this.reserve)

    
        
       //get the info of the driver 
       this.SignUpService.getMyInfo(this.userUid,this.SignUpService.userUniversity)
       .subscribe( myUserInfo => {
         this.user = myUserInfo;
         console.log(this.user);          
       });

  }
  
  goToRide(){   
    this.TripsService.joinTrip(this.SignUpService.userUniversity, this.trip.keyTrip,this.trip.driver.userId, this.userUid, this.user.trips.origin, this.user.trips.destination, this.user.name, this.user.lastname, this.user.phone, this.user.trips.note);
    this.geoFireService.saveKey(this.SignUpService.userUniversity,this.trip.keyTrip,this.trip.driver.userId, this.userUid);
    this.reservesService.setOnTrip(this.SignUpService.userUniversity,this.userUid);
    // this.geoFireService.removeKeyGeofire(this.userUid);
    //OLD
    // NEXT: PASAR LOS KEYTRIP DE LAS RESERVAS PARA ACCEDER A ELLOS EN MIS RESERVAS, Y CAMBIARLE EL NOMBRE  A KEYRESERVES
    // this.geoFireService.deleteDriverListRide(this.userUid, this.driver.userId); 
    this.hideButton = !this.hideButton;
    this.hideText = !this.hideText;
    this.accepted = true; 
   
    this.dismiss();
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
