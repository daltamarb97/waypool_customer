import { Component} from '@angular/core';
import { NavController, ViewController, ModalController, NavParams, ToastController, IonicPage, AlertController, App} from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
// import { AngularFireDatabase } from 'angularfire2/database';
import { SignUpService } from '../../services/signup.services';
import { sendCoordsService } from '../../services/sendcoords.service';
// import { RidetodayPage } from '../ridetoday/ridetoday';
// import { MyridePage } from '../myride/myride';
// import { TabsPage } from '../tabs/tabs';
import { sendUsersService } from '../../services/sendUsers.service';
import { geofireService } from '../../services/geoFire.service';
import { instancesService } from '../../services/instances.service';
import { Subject } from 'rxjs';


@IonicPage()
@Component({
  selector: 'page-confirm-reservation',
  templateUrl: 'confirm-reservation.html',
})
export class ConfirmReservationPage {


	reserveKey:any;
	reserve:any;
  userDriver:any ;
  
  userDriverUid=this.AngularFireAuth.auth.currentUser.uid
  accepted: any;
  infoUser:any = {};
  unsubscribe = new Subject;
	reserves:any = [];
	passengers: any =[];
	driver:any;
  driverId:any;
  

  constructor(public navCtrl: NavController,public sendUsersService: sendUsersService, public SignUpService: SignUpService, public sendCoordsService: sendCoordsService,public modalCtrl: ModalController, private AngularFireAuth: AngularFireAuth, public viewCtrl:ViewController,public navParams: NavParams, public geoFireService: geofireService, public instances: instancesService, public toastCtrl: ToastController, public alertCtrl: AlertController, private app: App ) {
    this.reserveKey= this.navParams.get('reserveKey'); 
	  this.driver=this.navParams.get('driver');
	  console.log(this.driver);

	  this.driverId = this.driver.userId;
	

	  this.sendCoordsService.getPendingUsers( this.driverId,this.reserveKey).takeUntil(this.unsubscribe)
        .subscribe( passengers => {
			this.passengers = passengers;			
			console.log(this.passengers);
			this.passengers.push(this.driver);
		})	
  }

  // pending to make this logic of steping out from reserve being user 
  cancelReserve(){


  }

  showProfilePassenger(passenger){
	this.app.getRootNav().push('PublicProfilePage', {passenger: passenger});
	this.accepted = true;
	this.dismiss();
  }

  dismiss() {
		this.viewCtrl.dismiss(this.accepted);
		this.unsubscribe.next();
		this.unsubscribe.complete();
	}

	ionViewDidLeave(){
    this.unsubscribe.next();
     this.unsubscribe.complete();
  }

}
