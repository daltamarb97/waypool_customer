import { Component, ElementRef,ViewChild } from '@angular/core';
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
import { Subject, Subscription } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';
import { Geolocation } from '@ionic-native/geolocation';
import { filter } from 'rxjs/operators';
declare var google;

@IonicPage()
@Component({
  selector: 'driver-page-myride',
  templateUrl: 'driverMyride.html'
})
export class DriverMyridePage {
@ViewChild('map') mapElement: ElementRef;

 hideImage:boolean = false;
 PendingUsersForWaypoints:any = [];
 pickedUpUsersForWaypoints:any=[]
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
directionsService: any = null;
bounds: any = null;
myLatLng: any=[];
waypoints: any = [];

myLatLngDest:any;
  directionsDisplay: any = null;map: any;
markers: any;
markerGeolocation:any;
markerDest:any;
trackedRoute = [];
previousTracks = [];
currentMapTrack = null;
positionSubscription: Subscription;
testCoords : any = [];
distance:any;
lat: any;
lng: any;
watch: any;
biciMarkers:any = []

  constructor(public navCtrl: NavController, public geolocation: Geolocation,public SignUpService:DriverSignUpService,public actionSheetCtrl: ActionSheetController,public TripsService:DriverTripsService,public modalCtrl: ModalController,public toastCtrl: ToastController,public alertCtrl:AlertController,public navParams: NavParams,private callNumber: CallNumber,public sendCoordsService: DriverSendCoordsService,private AngularFireAuth: AngularFireAuth, public sendUsersService: DriverSendUsersService, public geofireServices: DriverGeofireService, private afDB: AngularFireDatabase) {
	this.directionsService = new google.maps.DirectionsService();
	// var polyline = new google.maps.Polyline({
	// 	strokeColor: '#001127',
	//  strokeOpacity: 0.4,
	//  strokeWeight: 5
	// 	});
	this.directionsDisplay = new google.maps.DirectionsRenderer({
		suppressMarkers: true,
	});
	// this.directionsDisplay.setOptions({polylineOptions: polyline})

    this.bounds = new google.maps.LatLngBounds();
	this.afDB.database.ref(this.SignUpService.userPlace + '/drivers/'+this.driverUid+'/').once('value').then((snap)=>{
			let obj = snap.val();
			console.log(obj);
			this.userDriver=obj;		
			this.getTrip( this.userDriver.keyTrip, this.userDriver.userId); //get keyTrip  
					// corregir esta vuelta, no debiera estar ontrip true	
			});

	}
	ionViewDidLoad(){
		this.loadMap();
	}
	loadMap(){
		//check if user have houseAddress
	 // this gets current position and set the camera of the map and put a marker in your location
	 this.geolocation.getCurrentPosition({enableHighAccuracy: true}).then((position) => {
	
	  let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
	  console.log(latLng);
	
	  let mapOptions = {
		  center: latLng,
		  zoom: 17,
		  mapTypeId: google.maps.MapTypeId.ROADMAP,
		  zoomControl: false,
			mapTypeControl: false,
			scaleControl: false,
			streetViewControl: false,
			rotateControl: false,
			fullscreenControl: false,
			styles: [
			  {
				featureType: 'poi',
				elementType: 'labels.icon',
				stylers: [
				  {
					visibility: 'off'
				  }
				]
			  }
			]
		}
	//creates the map and give options
	  this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
	  this.myLatLng = {lat: position.coords.latitude , lng: position.coords.longitude};
	  this.startTracking();
	
	  
	//    this.markerDest = new google.maps.Marker({
    //     position: this.positionDest,
    //     map: this.map,
    //     animation: google.maps.Animation.DROP,
    //        icon: {         url: "assets/imgs/workworkbuilding.png",
    //     scaledSize: new google.maps.Size(250, 250)    
    //      }})   
	//   this.markers.push(this.markerGeolocation);
	
	  },(err) => {
	  console.log(err);    
	 });
		
	
	  }




	getTrip( keyTrip, driverUid) {
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
				if (this.pendingUsers.length === 0 && this.pickedUpUsers.length === 0) {

					this.PendingUsersForWaypoints = user;
					console.log(this.PendingUsersForWaypoints);
					console.log("WAYPOINTS ENTRING");

					this.PendingUsersForWaypoints.forEach(user => {
						this.waypoints.push({location:user.orCoords,stopover:true});
						this.directionsDisplay.setMap(this.map);
						this.calculateRoute("markerForWaypointsUsers");
					
						//To change the color of the line for each Waypoint (later)
					// 	var polyline = new google.maps.Polyline({
					// 		strokeColor: '#C00',
					// 		strokeOpacity: 0.7,
					// 		strokeWeight: 5
					// 		});
					// 		directionsDisplay = new google.maps.DirectionsRenderer();
					// 		directionsDisplay.setOptions({polylineOptions: polyline});
					});
				}
				this.pendingUsers = user;
				console.log(this.pendingUsers);
				this.conditionalsOnTrip();
				
			});
		this.TripsService.getPickedUpUsers(this.SignUpService.userPlace, keyTrip, driverUid).takeUntil(this.unsubscribe)
			.subscribe(user => {
				console.log(user);
				
				if (this.pendingUsers.length === 0 && user.length !== 0) {
					console.log(" FUNCIONAAAAAAAAAAAAAAAAAA");
					this.pickedUpUsersForWaypoints = user;
					console.log(this.pickedUpUsersForWaypoints);
					
					this.waypoints=[];
					this.pickedUpUsersForWaypoints.forEach(user => {

						this.waypoints.push({location:user.destCoords,stopover:true});
						this.directionsDisplay.setMap(this.map);
						this.calculateRoute("markerForWaypointsOffices");
					});
				}
				this.pickedUpUsers = user;
				console.log(this.pickedUpUsers);
				this.conditionalsOnTrip();
			});
	
			
		      
	}
	 calculateRoute(conditionForMarker){
		console.log(this.trip.origin.name);
		console.log(this.trip.origin.coords);
		this.markerGeolocation = new google.maps.Marker({
			map: this.map,
			animation: google.maps.Animation.DROP,
			position: this.trip.origin.coords,
			icon: {         url: "assets/imgs/house.png",
			scaledSize: new google.maps.Size(70, 70)
		  }
		  });
		this.markerDest = new google.maps.Marker({
			map: this.map,
			animation: google.maps.Animation.DROP,
			position: this.trip.destination.coords,
			icon: {         url: "assets/imgs/workbuilding.png",
			scaledSize: new google.maps.Size(150, 150)
		  }
		  });
    console.log(this.trip.origin.name);
	
		
		// this.bounds.extend(this.myLatLng);
			
		this.waypoints.forEach(waypoint => {
		var point = new google.maps.LatLng(waypoint.location.lat, waypoint.location.lng);
		this.bounds.extend(point);
		if (conditionForMarker === "markerForWaypointsUsers") {
			let markerWaypointUser = new google.maps.Marker({
				map: this.map,
				animation: google.maps.Animation.DROP,
				position: point,
				icon: {         url: "assets/imgs/bicimarker.png",
				scaledSize: new google.maps.Size(70, 70)
			  }
			  });
		} else if (conditionForMarker === "markerForWaypointsOffices"){
			console.log(" FUNCIONAAAAAAAAAAAAAAAAAA");
			
			let markerWaypointOffice = new google.maps.Marker({
				map: this.map,
				animation: google.maps.Animation.DROP,
				position: point,
				icon: {         url: "assets/imgs/workbuilding.png",
				scaledSize: new google.maps.Size(70, 70)
			  }
			});
	
		}
		});
	
		this.map.fitBounds(this.bounds);
	console.log(JSON.stringify(this.trip.origin.name));
	console.log(JSON.stringify(this.trip.destination.name));
	
		this.directionsService.route({
		  origin:JSON.stringify(this.trip.origin.name),
		  destination:JSON.stringify(this.trip.destination.name),
		  waypoints: this.waypoints,
		  optimizeWaypoints: true,
		  travelMode: google.maps.TravelMode.DRIVING
				}, (response, status)=> {
			if(status === google.maps.DirectionsStatus.OK) {
				console.log(response);
				this.directionsDisplay.setDirections(response);
				
			  }else{
				alert('Could not display directions due to: ' + status);
			  }
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
			let modal = this.modalCtrl.create('DriverCanceltripPage');
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

		let modal = this.modalCtrl.create('DriverCanceltripPage');
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
		this.navCtrl.push('DriverPickupPage', {
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
							this.navCtrl.push('DriverRatetripPage',{user:this.userDriver, trip:this.trip});

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
		let modal = this.modalCtrl.create('DriverChattingPage', {
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
	goToWaze(){
   
    }
    startTracking() {

      this.trackedRoute = [];
   
      this.positionSubscription = this.geolocation.watchPosition({enableHighAccuracy:true})
        .pipe(
          filter((p) => p.coords !== undefined) //Filter Out Errors
        )
        .subscribe(data => {
          setTimeout(() => {
			this.trackedRoute.push({ lat: data.coords.latitude, lng: data.coords.longitude });
			this.moveMarker(this.trackedRoute,data)
            console.log(data);
            
          }, 0);
        });
   
    }
   
    moveMarker(path,data) {
     
      
      if (path.length > 1) {
       
        this.deleteBiciMarkers();
        let coordsForMarker = new google.maps.LatLng(data.coords.latitude,data.coords.longitude);
        this.addMarker(coordsForMarker);

        // this.addMarker(pathForMarker);

           }
          }
  
  
    addMarker(coordsForMarker) {
      let marker = new google.maps.Marker({
        position:coordsForMarker,
        map: this.map,
        icon: {         url: "assets/imgs/bicimarker.png",
        scaledSize: new google.maps.Size(90,90)    

          }
      });
      this.biciMarkers.push(marker);
    }
   

    // showHistoryRoute(route) {
    //   this.redrawPath(route);
    // }
    

    
    // setMapOnAll(map) {
    //   for (var i = 0; i < this.markers.length; i++) {
    //     this.markers[i].setMap(map);
    //   }
    // }
    
 
    // setMapOnAll(map) {
    //   for (var i = 0; i < this.markers.length; i++) {
    //     this.markers[i].setMap(map);
    //   }
    // }
    deleteBiciMarkers() {
		for (var i = 0; i < this.biciMarkers.length; i++) {
			this.biciMarkers[i].setMap(null);
	  }
        }
	
}
