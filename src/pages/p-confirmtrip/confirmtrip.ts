import { Component } from '@angular/core';
import { NavController, ViewController, NavParams, ToastController, IonicPage, App, AlertController } from 'ionic-angular';
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
  button:boolean = true;
  text:boolean = false;
  userUid=this.AngularFireAuth.auth.currentUser.uid;
  unsubscribe = new Subject;
  trip:any;
  userInLMU:any;
  usersInPending:any;
  myRideActivation:boolean = false;
  
  constructor(public navCtrl: NavController,public reservesService:reservesService, public sendUsersService:sendUsersService,public TripsService:TripsService,public toastCtrl: ToastController,public viewCtrl: ViewController,private afDB: AngularFireDatabase, public SignUpService: SignUpService, public sendCoordsService: sendCoordsService,public navParams: NavParams,public AngularFireAuth: AngularFireAuth, private geoFireService: geofireService, public instances: instancesService, public alertCtrl: AlertController) {
    
    this.trip= this.navParams.get('trip') 
    console.log(this.reserve)

    
        
       //get the info of the driver 
       this.SignUpService.getMyInfo(this.userUid).takeUntil(this.unsubscribe)
       .subscribe( myUserInfo => {
         this.user = myUserInfo;
         console.log(this.user);  
         
         if(this.user.cancelModalLMU === true){
           this.dismiss();

           const alert = this.alertCtrl.create({
            title: 'Escoge otro viaje',
            buttons: ['OK']
          })
          alert.present();
          
         }
       });

       this.sendCoordsService.getPendingUsersInTrips(this.trip.driver.userId, this.trip.keyTrip).takeUntil(this.unsubscribe)
       .subscribe(usersInPendingusers => {
        this.usersInPending = usersInPendingusers
        this.usersInPending.forEach(user => {
          if(user.userId === this.userUid){
            this.accepted = true;
            this.dismiss();
            
          }
        });
       })

  }
  
  goToRide(){  
    this.geoFireService.saveKey(this.trip.keyTrip,this.trip.driver.userId, this.userUid);
    this.reservesService.setOnTrip(this.userUid); 
    this.TripsService.joinTrip( this.trip.keyTrip,this.trip.driver.userId, this.userUid, this.user.trips.origin, this.user.trips.destination, this.user.name, this.user.lastname, this.user.phone, this.user.verifiedPerson, this.user.trips.distanceToGoInKM);
    // this.geoFireService.removeKeyGeofire(this.userUid);
    //OLD
    // NEXT: PASAR LOS KEYTRIP DE LAS RESERVAS PARA ACCEDER A ELLOS EN MIS RESERVAS, Y CAMBIARLE EL NOMBRE  A KEYRESERVES
    // this.geoFireService.deleteDriverListRide(this.userUid, this.driver.userId); 
    this.button = false;
    this.text = true;
    }

    dismissX(){
      this.viewCtrl.dismiss();
      this.geoFireService.deleteKey( this.userUid);
      this.geoFireService.deleteDriverFromLMU( this.userUid, this.trip.keyTrip);
      this.afDB.database.ref( '/usersTest/' + this.userUid).once('value').then((snap)=>{
        if(snap.val().onTrip){
          this.geoFireService.setOntripFalse(this.userUid);
        }else{

        }
      })
      this.TripsService.getOutFromLMU( this.trip.keyTrip,this.trip.driver.userId, this.userUid);

    }
  dismiss() {
    this.viewCtrl.dismiss(this.accepted);
    this.unsubscribe.next();
    this.unsubscribe.complete();
    if(this.trip.type === 'origin'){
      this.geoFireService.cancelGeofireOr();
      this.geoFireService.cancelGeofireOrLMU();
    }else if(this.trip.type === 'destination'){
      this.geoFireService.cancelGeofireDest();
      this.geoFireService.cancelGeofireDestLMU();
    }
  }  


  ionViewDidLeave(){
    this.unsubscribe.next();
     this.unsubscribe.complete();
  }



}
