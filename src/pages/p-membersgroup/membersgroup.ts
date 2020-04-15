import { Component} from '@angular/core';
import { NavController, ViewController, ModalController, NavParams, ToastController, IonicPage, AlertController, App, ActionSheetController} from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
// import { AngularFireDatabase } from 'angularfire2/database';
import { DriverSignUpService } from '../../services/d-signup.service';
import { DriverSendCoordsService } from '../../services/d-sendCoords.service';
// import { RidetodayPage } from '../ridetoday/ridetoday';
// import { MyridePage } from '../myride/myride';
// import { TabsPage } from '../tabs/tabs';
import { DriverSendUsersService } from '../../services/d-sendUsers.service';
import { DriverGeofireService } from '../../services/d-geofire.services';
import { DriverInstancesService } from '../../services/d-instances.services';
import { Subject } from 'rxjs';
import { DriverTripsService } from '../../services/d-trips.service';
import { AngularFireDatabase } from 'angularfire2/database';


@IonicPage()

@Component({
	selector: 'page-membersgroup',
	templateUrl: 'membersgroup.html'
})
export class MembersGroupPage {
  	userDriver:any ;
  	userUid=this.AngularFireAuth.auth.currentUser.uid
	accepted: boolean;
	infoUser:any = {};
	unsubscribe = new Subject;
	groups:any = [];
	members: any =[];
	crew:any;
	isAdmin:boolean;
  constructor(public navCtrl: NavController,public actionSheetCtrl: ActionSheetController,public TripsService:DriverTripsService, public SignUpService: DriverSignUpService, public sendCoordsService: DriverSendCoordsService,public modalCtrl: ModalController, private AngularFireAuth: AngularFireAuth, public viewCtrl:ViewController,public navParams: NavParams, public geoFireService: DriverGeofireService, public instances: DriverInstancesService, public toastCtrl: ToastController, public alertCtrl: AlertController, public app: App, private afDB: AngularFireDatabase ) {
	
	  this.members= this.navParams.get('members');
	  this.crew= this.navParams.get('crew'); 
	  console.log(this.crew);
	  if(this.crew.admin.userId === this.userUid){
		console.log('i am admin');
		this.isAdmin = true;
	  }

  

      	
   
}
ionViewDidLeave(){
    this.unsubscribe.next();
     this.unsubscribe.complete();
  }
		

		 showProfilePassegner(passenger){
			this.app.getRootNav().push('DriverPublicProfilePage', {passenger: passenger});
			this.accepted = true;
			this.dismiss();
 		}
  
		 cancelgroup(){
			// this.geoFireService.deleteUserGeofireDest(this.SignUpService.userPlace, this.groupKey);
			// this.geoFireService.deleteUserGeofireOr(this.SignUpService.userPlace, this.groupKey);
			// this.passengers.forEach(user => {
			// 	this.afDB.database.ref(this.SignUpService.userPlace + '/users/'+user.userId+'/mygroups/'+ this.groupKey).update({
			// 		cancelgroup:true
			// 	});
			// });

			// this.TripsService.cancelgroup(this.SignUpService.userPlace, this.userUid,this.groupKey);
			this.dismiss();
		  }

		  presentActionSheet(userId,nameUser) {
			const actionSheet = this.actionSheetCtrl.create({
			  title: 'Opciones',
			  buttons: [
				{
				  text: 'Cancelar Usuario',
				  role: 'destructive',
				  handler: () => {
					  this.deleteUser(userId,nameUser)
					  }
				},
				{
				  text: 'Cancel',
				  role: 'cancel',
				  handler: () => {
					console.log('Cancel clicked');
				  }
				}
			  ]
			});
			actionSheet.present();
			}
			


		  deleteUser(userId, nameUser) {

			// let alert = this.alertCtrl.create({
			// 	title: 'Eliminar Usuario',
			// 	message: `¿Estas que deseas eliminar a este a ${nameUser} de tu viaje?,borrar muchos usuarios por día/semana esta en contra de nuestras políticas`,
			// 	buttons: [{
			// 			text: 'Cancelar',
			// 			role: 'cancel',
			// 			handler: () => {
	
			// 			}
			// 		},
			// 		{
			// 			text: 'Eliminar',
			// 			handler: () => {
			// 				this.afDB.database.ref(this.SignUpService.userPlace + '/users/'+userId+'/mygroups/'+ this.groupKey).update({
			// 					cancelgroup:true
			// 				});
			// 				this.sendCoordsService.eraseUser(this.SignUpService.userPlace, userId,this.userUid,this.groupKey );
							
			// 				this.dismiss();
			// 				this.presentToast(`Haz eliminado a ${nameUser} de tu viaje`, 3000, 'bottom')
						 
			// 			}
			// 		}
			// 	]
			// });
			// alert.present();
		}
		presentToast(message: string, duration, position: string) {
			const toast = this.toastCtrl.create({
				message: message,
				duration: duration,
				position: position
			});
			toast.present();
		}
	dismiss() {
		console.log('deleted on click')
		this.viewCtrl.dismiss(this.accepted);
		this.unsubscribe.next();
		this.unsubscribe.complete();
	}
	seeRoute

}
