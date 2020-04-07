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
  freeRidesCompany:boolean = false;
  orCoords:any;
  destCoords:any;
  constructor(public navCtrl: NavController, public sendUsersService:sendUsersService,public toastCtrl: ToastController,public viewCtrl: ViewController,private afDB: AngularFireDatabase, public SignUpService: SignUpService, public sendCoordsService: sendCoordsService,public navParams: NavParams,public AngularFireAuth: AngularFireAuth, private geoFireService: geofireService, public instances: instancesService, public alertCtrl: AlertController) {
    
    this.reserve= this.navParams.get('reserve') 
    console.log(this.reserve)

    this.orCoords = this.navParams.get('orCoords');
    this.destCoords = this.navParams.get('destCoords');
      
        
       //get the info of the driver 
       this.SignUpService.getMyInfo(this.userUid).takeUntil(this.unsubscribe)
       .subscribe( myUserInfo => {
         this.user = myUserInfo;
         console.log(this.user); 
         
         
        //  this.afDB.database.ref('allCities/' + this.user.city + '/allPlaces/' + this.user.company).once('value').then((snapUser)=>{
        //    if(snapUser.val().freeRidesNumber > 0){
        //     this.freeRidesCompany = true;
        //    }
        //  })
       });


       // function to get in how many reserves I am
       this.SignUpService.checkMyReserves( this.userUid).takeUntil(this.unsubscribe)
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

    if(this.user.personalFreeRides){
      let alert = this.alertCtrl.create({
        title: 'ESTE SERÁ UN VIAJE GRATIS',
        subTitle: 'Siempre que veas este mensaje significa que no pagarás nada por el viaje al que te uniste',
        buttons: [{
          text: 'OK',
          handler: ()=>{ 
            console.log(this.reserve.keyTrip )
            this.geoFireService.joinReserve( this.user.company, this.reserve.keyTrip,this.reserve.driver.userId, this.userUid, this.user.trips.origin, this.user.trips.destination, this.user.name, this.user.lastname, this.user.phone, this.user.trips.distanceToGoInKM, this.user.verifiedPerson, this.orCoords, this.destCoords);
            this.geoFireService.pushToMyReserve(this.reserve.keyTrip,this.reserve.driver.userId, this.userUid);
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
        }]
      });
      alert.present();
    }else{
      console.log(this.reserve.keyTrip )
      this.geoFireService.joinReserve( this.user.company, this.reserve.keyTrip,this.reserve.driver.userId, this.userUid, this.user.trips.origin, this.user.trips.destination, this.user.name, this.user.lastname, this.user.phone, this.user.trips.distanceToGoInKM, this.user.verifiedPerson, this.orCoords, this.destCoords);
      this.geoFireService.pushToMyReserve(this.reserve.keyTrip,this.reserve.driver.userId, this.userUid);
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


  ionViewDidLeave(){
    this.unsubscribe.next();
     this.unsubscribe.complete();
  }
}
