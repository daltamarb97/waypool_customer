import { Component} from '@angular/core';
import { NavController, ViewController, ModalController, NavParams, ToastController, IonicPage, AlertController, App} from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
// import { AngularFireDatabase } from 'angularfire2/database';
import { sendCoordsService } from '../../services/sendCoords.service';
// import { RidetodayPage } from '../ridetoday/ridetoday';
// import { MyridePage } from '../myride/myride';
// import { TabsPage } from '../tabs/tabs';
import { sendUsersService } from '../../services/sendUsers.service';
import { instancesService } from '../../services/instances.service';
import { Subject } from 'rxjs';
import { reservesService } from '../../services/reserves.service';
import { SignUpService } from '../../services/signup.services';


@IonicPage()

@Component({
	selector: 'page-reserveinfo',
	templateUrl: 'reserveinfo.html'
})
export class ReserveinfoPage {
  

	reserveKey:any;
	reserve:any;
  	userDriver:any ;
  	userUid=this.AngularFireAuth.auth.currentUser.uid
	accepted: boolean;
	infoUser:any = {};
	unsubscribe = new Subject;
	reserves:any = [];
	passengers: any =[];
	driverUid:any;
  constructor(public navCtrl: NavController,public reservesService:reservesService,public modalCtrl: ModalController, private AngularFireAuth: AngularFireAuth, public viewCtrl:ViewController,public navParams: NavParams, public instances: instancesService, public toastCtrl: ToastController, public alertCtrl: AlertController, public app: App, private signUpService: SignUpService ) {
	
	  this.reserveKey= this.navParams.get('reserveKey');
	  this.driverUid= this.navParams.get('driverUid');


  

      this.reservesService.getPendingUsers(this.signUpService.userUniversity,this.driverUid,this.reserveKey).takeUntil(this.unsubscribe)
        .subscribe( users => {
			this.passengers = users;			
			console.log(this.passengers);

			if(this.passengers.length === 0){
				this.dismiss();
			}
		})	
   
}

	
cancelReserve(){
	this.reservesService.cancelReserve(this.signUpService.userUniversity, this.userUid,this.driverUid,this.reserveKey);
	this.reservesService.eliminateKeyUser(this.signUpService.userUniversity, this.userUid,this.reserveKey);
	// Hacer el boton de cancelar , para la reserva y probar q vuelva a salir en listride
  }
		 showProfilePassegner(passenger){
			this.app.getRootNav().push('PublicProfilePage', {passenger: passenger});
			this.accepted = true;
			this.dismiss();
 		}
  

	dismiss() {	
		this.viewCtrl.dismiss(this.accepted);
		this.unsubscribe.next();
		this.unsubscribe.complete();
	}
}
