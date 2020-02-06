import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ToastController, IonicPage, App, ModalController, ActionSheetController, NavPop } from 'ionic-angular';


import { DriverSendCoordsService } from '../../services/d-sendCoords.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { DriverSendUsersService } from '../../services/d-sendUsers.service';


import { CallNumber } from '@ionic-native/call-number';
import { DriverGeofireService } from '../../services/d-geofire.services';
import { DriverSignUpService } from '../../services/d-signup.service';
import * as moment from 'moment';
import { DriverTripsService } from '../../services/d-trips.service';
import { ThrowStmt } from '@angular/compiler';
import { Subject } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'driver-page-myride',
  templateUrl: 'driverMyride.html'
})
export class DriverMyridePage {

 hideImage:boolean = false;

 pendingUsers:any = [];
 pickedUpUsers:any = [];

ride: string = "today";
trip:any;
driverUid=this.AngularFireAuth.auth.currentUser.uid;

userInfo;
userDriver:any;
unsubscribe = new Subject;
lastMinuteUsers:any =[];
tripState:any;
clearToDeleteDriver:boolean = false;
  constructor(public navCtrl: NavController,public SignUpService:DriverSignUpService,public actionSheetCtrl: ActionSheetController,public TripsService:DriverTripsService,public modalCtrl: ModalController,public toastCtrl: ToastController,public alertCtrl:AlertController,public navParams: NavParams,private callNumber: CallNumber,public sendCoordsService: DriverSendCoordsService,private AngularFireAuth: AngularFireAuth, public sendUsersService: DriverSendUsersService, public geofireServices: DriverGeofireService, private afDB: AngularFireDatabase) {
		//get driver information to get the keyTrip
		this.SignUpService.getMyInfoDriver(this.SignUpService.userPlace, this.driverUid).takeUntil(this.unsubscribe)
			.subscribe(userDriver => {
				this.userDriver = userDriver;
				if (this.userDriver.keyTrip === null || this.userDriver.onTrip === false) {
					//do nothing
					console.log("que dijiste corone");
					console.log(this.userDriver.keyTrip);
				} else {
					this.getTrip( this.userDriver.keyTrip, this.userDriver.userId); //get keyTrip  
					// corregir esta vuelta, no debiera estar ontrip true
				}
				
			});


	}

	getLastMinuteUsers(keyTrip, driverUid) {
		// this.lastMinuteUsers = [];
		console.log(this.lastMinuteUsers)
		console.log("1")

		this.TripsService.getLastMinuteUsers(this.SignUpService.userPlace, keyTrip,driverUid).takeUntil(this.unsubscribe)
			.subscribe(users => {
				this.lastMinuteUsers = users;
				//verify if user info exist 
				console.log(this.lastMinuteUsers)
				console.log("2")

				if (this.lastMinuteUsers.length === 0) {
					// do nothing
				} else {					
					this.lastMinuteUsers.forEach(userLastMinute => {
						if(userLastMinute.noRepeat === true){
							console.log("TE QUERIAS REPETIR PERO NOOOOO")

						}else{
							this.TripsService.noRepeatLMU(this.SignUpService.userPlace, this.driverUid,keyTrip,userLastMinute.userId)
							console.log(userLastMinute);
							console.log(this.lastMinuteUsers)
							console.log("3")
	
							let modal = this.modalCtrl.create('ConfirmtripPage', {
								user: userLastMinute,
								keyTrip: this.userDriver.keyTrip
							});
							modal.present();
						}
						
					});				
				}
			});			
	}



	getTrip( keyTrip, driverUid) {
		// this.getLastMinuteUsers(this.userDriver.keyTrip, this.userDriver.userId);
		this.getLastMinuteUsers(keyTrip, driverUid);
		this.TripsService.getTrip(this.SignUpService.userPlace, keyTrip, driverUid).takeUntil(this.unsubscribe)
			.subscribe(trip => {
        console.log('se repitio?')
			
				this.trip = trip;
				if (this.trip === undefined || this.trip === null) {
					console.log(this.trip);
					console.log("ARMAGEDON")
					this.conditionalsOnTrip();
				} else {
				// after getting trip from node, get pending and pickedUp arrays
					this.getPendingAndPickedUpUsers( keyTrip, driverUid);
				}

				

			});

	}
	
	getPendingAndPickedUpUsers(keyTrip, driverUid) {

		this.TripsService.getPendingUsers(this.SignUpService.userPlace, keyTrip, driverUid).takeUntil(this.unsubscribe)
			.subscribe(user => {
				this.pendingUsers = user;
				console.log(this.pendingUsers);
				this.conditionalsOnTrip();

			});
		this.TripsService.getPickedUpUsers(this.SignUpService.userPlace, keyTrip, driverUid).takeUntil(this.unsubscribe)
			.subscribe(user => {
				this.pickedUpUsers = user;
				console.log(this.pickedUpUsers);
				this.conditionalsOnTrip();

			});

		      
	}

	 conditionalsOnTrip(){
		 console.log("sirvio")
		if (this.trip.pendingUsers === undefined && this.trip.pickedUpUsers === undefined && this.trip.cancelUsers === undefined) {
			// erase trip because driver decide to cancel
			this.unSubscribeServices();
			this.geofireServices.deleteUserGeofireOrTrip(this.SignUpService.userPlace, this.userDriver.keyTrip);
			this.geofireServices.deleteUserGeofireDestTrip(this.SignUpService.userPlace, this.userDriver.keyTrip);
			this.navCtrl.pop();
			// this.TripsService.endTrip(this.SignUpService.userPlace, this.userDriver.keyTrip, this.driverUid);

			// Trip needs to be deleted first and then keyTrip is deleted, otherwise the trip node would still remain at the databse - REGLA DE SEGURIDAD NO LO PERMITE
			this.afDB.database.ref(this.SignUpService.userPlace + '/trips/'+this.driverUid+'/'+ this.userDriver.keyTrip).remove().then(()=>{
				this.TripsService.eraseKeyTrip(this.SignUpService.userPlace,this.driverUid)
			})
			this.TripsService.setOnTripFalse(this.SignUpService.userPlace,this.driverUid);

		
			// this.navCtrl.setRoot(this.navCtrl.getActive().component);
			let modal = this.modalCtrl.create('CanceltripPage');
			modal.present();
			console.log("me reproduci 1")

      
    }
		if (this.trip.pendingUsers === undefined && this.trip.pickedUpUsers === undefined && this.trip.cancelUsers !== undefined) {
		// erase trip because there is no one to picked Up
		this.unSubscribeServices();
		this.TripsService.endTrip(this.SignUpService.userPlace,this.userDriver.keyTrip, this.driverUid);

		this.geofireServices.deleteUserGeofireOrTrip(this.SignUpService.userPlace, this.userDriver.keyTrip);
		this.geofireServices.deleteUserGeofireDestTrip(this.SignUpService.userPlace, this.userDriver.keyTrip);
		this.TripsService.eraseKeyTrip(this.SignUpService.userPlace,this.driverUid);
		this.TripsService.setOnTripFalse(this.SignUpService.userPlace,this.driverUid);

		this.navCtrl.pop();
		console.log("me reproduci 2")

		let modal = this.modalCtrl.create('CanceltripPage');
		modal.present();

		}     
	 }



	 
	callUser(number) {
		this.callNumber.callNumber(number, true)
			.then(res => console.log('Launched dialer!', res))
			.catch((err) => {
				const alert = this.alertCtrl.create({
					title: 'error de llamada',
					subTitle: 'hubo un error en la llamada, si persiste el problema envíanos un correo a team@waypooltech.com',
					buttons: ['OK']
				});
				alert.present();
				console.log('Error launching dialer', err)
			});
	}
	
	unSubscribeServices(){
		this.unsubscribe.next();
		this.unsubscribe.complete();
	  }   

	goToRide(user) {
		this.navCtrl.push('PickupPage', {
			user: user,
			keyTrip: this.userDriver.keyTrip
		});
	}
	
	endTrip() {

		// se cambiara a finalizar viaje
		if (this.pendingUsers.length == 0 && this.pickedUpUsers.length !== 0) {
			let alert = this.alertCtrl.create({
				title: 'Finalizar Viaje',
				message: `¿Estas seguro que deseas finalizar tu viaje?`,
				buttons: [{
						text: 'Cancelar',
						role: 'cancel',
						handler: () => {

						}
					},
					{
						text: 'Si',
						handler: () => {

						
									//set time
									moment.locale('es'); //to make the date be in spanish  

									let today = moment().format('MMMM Do YYYY, h:mm:ss a'); //set actual date
									this.afDB.database.ref(this.SignUpService.userPlace + '/trips/'+ this.driverUid+'/'+ this.userDriver.keyTrip).update({
									  DestinationTime:today
									}).then((snap)=>{
										this.unSubscribeServices();
										this.geofireServices.deleteUserGeofireOrTrip(this.SignUpService.userPlace, this.userDriver.keyTrip);
										this.geofireServices.deleteUserGeofireDestTrip(this.SignUpService.userPlace, this.userDriver.keyTrip);
										this.pickedUpUsers.forEach(user => {
											this.TripsService.sentTripUser(this.SignUpService.userPlace,user.userId,this.trip)
											this.TripsService.endTripForUsers(this.SignUpService.userPlace,user.userId);			
											this.TripsService.setOnTripFalseUser(this.SignUpService.userPlace,user.userId);
											this.TripsService.eliminateKeyTripUser(this.SignUpService.userPlace,user.userId);

											this.afDB.database.ref('allCities/' + this.userDriver.city + '/allPlaces/' + user.company + '/zones').once('value').then((snapUser)=>{
												let obj = snapUser.val();
												Object.getOwnPropertyNames(obj).forEach((key)=>{
										
												if(obj[key] === 2 || obj[key] === 3 || obj[key] === 4 || obj[key] === 5 || obj[key] === 6 || obj[key] === 1 || obj[key] === 7 || obj[key] === 8 || obj[key] === 9 || obj[key] === 10){
													
												}else{
													this.TripsService.saveTripOnRecordsUser(obj[key], user.userId, this.trip, this.userDriver.keyTrip);
												}
												}) 
											})
										});

										this.TripsService.allTrips(this.SignUpService.userPlace,this.driverUid,this.userDriver.keyTrip,this.trip);

										// here I have to save the trip for this driver in every zone he is, it doesnt matter if the user is not operating in certain zone in the moment
											this.afDB.database.ref('allCities/' + this.userDriver.city + '/allPlaces/' + this.userDriver.company + '/zones').once('value').then((snap)=>{
												let obj = snap.val();
												Object.getOwnPropertyNames(obj).forEach((key)=>{
										
												if(obj[key] === 2 || obj[key] === 3 || obj[key] === 4 || obj[key] === 5 || obj[key] === 6 || obj[key] === 1 || obj[key] === 7 || obj[key] === 8 || obj[key] === 9 || obj[key] === 10){
													
												}else{

													this.TripsService.saveTripOnRecords(obj[key],this.driverUid, this.trip, this.userDriver.keyTrip);

												}
												}) 
											})							 
											///////////																									
																			
								    }).then(()=>{
										setTimeout(() => {
											this.TripsService.eliminateTripState(this.SignUpService.userPlace,this.userDriver.keyTrip,this.driverUid);
		
											this.TripsService.endTrip(this.SignUpService.userPlace, this.userDriver.keyTrip, this.driverUid);
																		
											this.TripsService.setOnTripFalse(this.SignUpService.userPlace,this.driverUid);	
											
											this.TripsService.eraseKeyTrip(this.SignUpService.userPlace,this.driverUid);

										}, 6000);
									})
									
							this.navCtrl.pop();
							//TO-DO: AQUI FALTA RATETRIPPAGE
							this.navCtrl.push('RatetripPage',{user:this.userDriver, trip:this.trip});

						}
					}
				]
			})
			alert.present();

		} else {
			this.presentAlert('Viaje Incompleto', 'Por favor termina de recoger a todos los usuarios o cancélalos', 'Ok');
		}


	}
	enterChat() {
		//send isTrip=true for the chat to know if its a reserve or a trip
		let isTrip = true;
		let modal = this.modalCtrl.create('ChattingPage', {
			reserve: this.trip,
			isTrip: isTrip

			
		})
		modal.present();
	  }
	presentToast(message: string, duration, position: string) {
		const toast = this.toastCtrl.create({
			message: message,
			duration: duration,
			position: position
		});
		toast.present();
	}
	presentAlert(title: string, text: string, button: string) {
		let alert = this.alertCtrl.create({
			title: title,
			subTitle: text,
			buttons: [button]
		});
		alert.present();
	}
	deleteUser(userId, nameUser) {

		let alert = this.alertCtrl.create({
			title: 'Eliminar Usuario',
			message: `¿Estas que deseas eliminar a este a ${nameUser} de tu viaje?, cancelar muchos usuarios por día/semana evitará que logres el objetivo de cambiar la movilidad de tu empresa`,
			buttons: [{
					text: 'Cancelar',
					role: 'cancel',
					handler: () => {

					}
				},
				{
					text: 'Eliminar',
					handler: () => {
						this.TripsService.cancelUserFromTrip(this.SignUpService.userPlace, this.driverUid, this.trip.keyTrip, userId);
						this.TripsService.setOnTripFalseUser(this.SignUpService.userPlace,userId);
						this.TripsService.eliminateKeyTripUser(this.SignUpService.userPlace,userId);
						this.presentToast(`Haz eliminado a ${nameUser} de tu viaje`, 3000, 'bottom')
					 
					}
				}
			]
		});
		alert.present();
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
	help() {
		const toast = this.toastCtrl.create({
			message: 'En esta página podrás recoger, llamar, chatear (próximamente), a los compañeros que hayas escogido',
			showCloseButton: true,
			closeButtonText: 'OK',
			position: 'top'
		});
		toast.present();
	}

	
}
