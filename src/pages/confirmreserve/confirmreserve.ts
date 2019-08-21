import { Component} from '@angular/core';
import { NavController, ViewController, ModalController, NavParams, ToastController, IonicPage, AlertController} from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
// import { AngularFireDatabase } from 'angularfire2/database';
import { SignUpService } from '../../services/signup.services';
import { sendCoordsService } from '../../services/sendCoords.service';
// import { RidetodayPage } from '../ridetoday/ridetoday';
// import { MyridePage } from '../myride/myride';
// import { TabsPage } from '../tabs/tabs';
import { sendUsersService } from '../../services/sendUsers.service';
import { geofireService } from '../../services/geofire.service';
import { instancesService } from '../../services/instances.service';
import { ListridePage } from '../listride/listride';
import { Subject } from 'rxjs';


@IonicPage()

@Component({
	selector: 'page-confirmreserve',
	templateUrl: 'confirmreserve.html'
})
export class ConfirmreservationPage {
  

	reserveKey:any;
	reserve:any;
  userDriver:any ;
  
  userDriverUid=this.AngularFireAuth.auth.currentUser.uid
  accepted: any;
  infoUser:any = {};
  unsubscribe = new Subject;
	reserves:any = [];
	passengers: any =[];
  constructor(public navCtrl: NavController,public sendUsersService: sendUsersService, public SignUpService: SignUpService, public sendCoordsService: sendCoordsService,public modalCtrl: ModalController, private AngularFireAuth: AngularFireAuth, public viewCtrl:ViewController,public navParams: NavParams, public geoFireService: geofireService, public instances: instancesService, public toastCtrl: ToastController, public alertCtrl: AlertController ) {
	
      this.reserveKey= this.navParams.get('reserveKey') 


  

    //   this.sendCoordsService.getPendingUsers(this.userDriverUid,this.reserveKey).takeUntil(this.unsubscribe)
    //     .subscribe( users => {
		// 	this.passengers = users;			
		// 	console.log(this.passengers);
		// })	
   
}

	acceptUser() {


 }
  

	dismiss() {
		console.log('deleted on click')
		this.viewCtrl.dismiss(this.accepted);
		this.unsubscribe.next();
		this.unsubscribe.complete();
	}
}
