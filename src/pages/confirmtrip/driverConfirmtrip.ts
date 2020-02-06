import { Component } from '@angular/core';
import { NavController, ViewController, NavParams, ToastController, IonicPage } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { DriverSendCoordsService } from '../../services/d-sendCoords.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { DriverSendUsersService } from '../../services/d-sendUsers.service';
import { DriverInstancesService } from '../../services/d-instances.services';
import { Subject, onErrorResumeNext } from 'rxjs';
import { DriverTripsService } from '../../services/d-trips.service';
import { DriverSignUpService } from '../../services/d-signup.service';
import { DriverGeofireService } from '../../services/d-geofire.services';



@IonicPage()


@Component({
  selector: 'driver-page-confirmtrip',
  templateUrl: 'driverConfirmtrip.html'
})
export class DriverConfirmtripPage {
  
  usersOnTrip:any;
  accepted: boolean;
  reserve:any;
  user:any ={};
  hideButton:boolean = true;
  hideText:boolean = false;
  userUid=this.AngularFireAuth.auth.currentUser.uid;
  unsubscribe = new Subject;
  trip:any;
  driver:any;
  userInLMU:any;
  keyTrip:any;
  constructor(public navCtrl: NavController,public SignUpServices:DriverSignUpService ,public sendUsersService:DriverSendUsersService,public TripsService:DriverTripsService,public toastCtrl: ToastController,public viewCtrl: ViewController,private afDB: AngularFireDatabase, public sendCoordsService: DriverSendCoordsService,public navParams: NavParams,public AngularFireAuth: AngularFireAuth, public instances: DriverInstancesService, private geofireServices: DriverGeofireService) {
    
    this.user= this.navParams.get('user');
    this.keyTrip= this.navParams.get('keyTrip');
    
    console.log(this.user)



    this.SignUpServices.getMyInfo(this.SignUpServices.userPlace, this.userUid).takeUntil(this.unsubscribe)    
		.subscribe(driverInfo => {
      this.driver = driverInfo;
      console.log(this.driver)
    });
    

    this.sendCoordsService.confirmIfUsersIsStillInLMU(this.SignUpServices.userPlace, this.userUid, this.keyTrip, this.user.userId ).takeUntil(this.unsubscribe)
    .subscribe((userInLMU)=>{
      console.log(this.driver);
      
      this.userInLMU = userInLMU;
      console.log(this.userInLMU);
      
      if(this.userInLMU === null || this.userInLMU === undefined ){
        this.viewCtrl.dismiss();
      }
    })
    
       
    

  }
  ionViewDidLeave(){
    this.unsubscribe.next();
     this.unsubscribe.complete();
  }
  rejectUser(){
    //VIOLACION ABSOLUTA
    this.TripsService.eliminateLastMinuteUser(this.SignUpServices.userPlace, this.userUid,this.keyTrip,this.user.userId);
    console.log("nanai kukas")
    this.geofireServices.deleteKeyUserLMU(this.SignUpServices.userPlace, this.user.userId);
    this.geofireServices.setOntripFalseUserLMU(this.SignUpServices.userPlace,this.user.userId);
    this.geofireServices.deleteDriverFromLMUofUser(this.SignUpServices.userPlace, this.user.userId, this.keyTrip);
    this.TripsService.notifyLMUitsBeenRejected(this.SignUpServices.userPlace, this.user.userId)
  


    this.dismiss();
  }

  acceptUser(){  
    this.TripsService.acceptLastMinute(this.SignUpServices.userPlace, this.userUid,this.keyTrip,this.user);   
    this.TripsService.eliminateLastMinuteUser(this.SignUpServices.userPlace, this.userUid,this.keyTrip,this.user.userId); 
    console.log("bienvenido al combo")
    this.dismiss();
    }

  dismiss() {
    this.viewCtrl.dismiss(this.accepted);
    this.unsubscribe.next();
    this.unsubscribe.complete();
    
    // this.navCtrl.pop();

  }  
}
