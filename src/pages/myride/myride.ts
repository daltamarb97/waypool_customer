import { Component, ViewChild, ɵConsole } from '@angular/core';
import { NavController, NavParams, ToastController, IonicPage, AlertController, App, ModalController } from 'ionic-angular';
import { ElementRef } from '@angular/core';

import { sendUsersService } from '../../services/sendUsers.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { CallNumber } from '@ionic-native/call-number';
import { Geolocation } from '@ionic-native/geolocation';
import { SignUpService } from '../../services/signup.services';
import { TripsService } from '../../services/trips.service';
import { environmentService } from '../../services/environment.service';

import { Subject } from 'rxjs';
import { reservesService } from '../../services/reserves.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { MetricsService } from '../../services/metrics.service';


@IonicPage()

@Component({
  selector: 'page-myride',
  templateUrl: 'myride.html'
})
export class MyridePage {

  // @ViewChild('map') mapElement: ElementRef;
map:any;
markers:any;
pendingUsers:any=[];
pickedUpUsers:any=[];
pickedUp:any;
driverOnTrip:any=[];
driver:any;
myLatLng:any;
user:any;
info:any;
myReservesId:any = [];
trip:any;
userUid=this.AngularFireAuth.auth.currentUser.uid;
cancelReserves: any = [];
myTripReserve:any;
keyTrip:any;
tripState:any;
cancelUsers:any = [];
driverExist:boolean = false;
onTrip: boolean = false;
onTripInstance:any;
unsubscribe = new Subject;
cancelUser:any;
  constructor(public navCtrl: NavController,public modalCtrl: ModalController,private MetricsService:MetricsService,public alertCtrl:AlertController,public TripsService:TripsService,public toastCtrl: ToastController,public SignUpService: SignUpService,public geolocation: Geolocation,public navParams: NavParams,private AngularFireAuth:AngularFireAuth,private callNumber: CallNumber,public sendUsersService:sendUsersService, public app: App, private reservesService: reservesService, private afDB: AngularFireDatabase) {

    this.TripsService.getKeyTrip(this.SignUpService.userUniversity, this.userUid).takeUntil(this.unsubscribe)
    .subscribe(  keys => {      
        this.keyTrip =  keys; 
        console.log(this.keyTrip.keyTrip);
      
           if(this.keyTrip === undefined || this.keyTrip === null){
            this.unSubscribeServices();          
            console.log("ME ACTIVEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE")

            this.driverExist = false;
            this.onTrip = false;
            this.navCtrl.pop();
       
            console.log("existo")

           }else{
            this.getTrip(this.keyTrip.keyTrip,this.keyTrip.driverId);
            this.TripsService.eraseReserve(this.SignUpService.userUniversity, this.userUid,this.keyTrip.keyTrip);

           }

          //get trip without searching         
          

          //check if its lastMinuteUser or not
          // if(){

          // }
    
    })
    this.SignUpService.getMyInfo(this.userUid,this.SignUpService.userUniversity).takeUntil(this.unsubscribe)
      .subscribe(info => {
        this.user = info
        console.log("estado mal")
        // here starts the conditionals for the trip
        if(this.user.cancelTrip === undefined || this.user.cancelTrip === null){

        }else{
          this.unSubscribeServices();         
          console.log("ME ACTIVEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE")

          this.TripsService.eliminatingOnTrip(this.SignUpService.userUniversity, this.userUid);
          this.TripsService.eliminateKeyTrip(this.SignUpService.userUniversity, this.userUid);
          this.TripsService.eliminateAvailableReserves(this.SignUpService.userUniversity, this.userUid);
          this.navCtrl.setRoot('TabsPage');

            let modal = this.modalCtrl.create('CanceltripPage');
            modal.present();  
            console.log("me cancelaron el viaje")
            setTimeout(() => {
              this.TripsService.eliminatingCancelTrip(this.SignUpService.userUniversity,this.userUid);
              console.log("me cancele");
              
            }, 2000);
        }
        if(this.user.saveTrip === undefined || this.user.saveTrip === null){

        }else{
      
          this.TripsService.saveTripOnRecords(this.SignUpService.userUniversity, this.userUid,this.trip);     
          console.log("me active")
          this.unSubscribeServices();       
          this.TripsService.eliminatingOnTrip(this.SignUpService.userUniversity, this.userUid);
          this.TripsService.eliminateKeyTrip(this.SignUpService.userUniversity, this.userUid);
          this.TripsService.eliminateAvailableReserves(this.SignUpService.userUniversity, this.userUid);
          setTimeout(() => {
            this.TripsService.eliminatingSaveTrip(this.SignUpService.userUniversity,this.userUid);
            console.log("no deje pruebas");
            
          }, 2000);
          this.navCtrl.setRoot('TabsPage');
          this.navCtrl.push('RatetripPage',{trip:this.trip})
          this.TripsService.eliminateTrip(this.SignUpService.userUniversity, this.userUid);     

          console.log("ME ACTIVEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE")
        
        }

      });

  }
 
  
   
  getTrip(keyTrip,driverId){
    console.log(this.trip)   
    // this.getTripState(keyTrip,driverId);

    console.log(this.keyTrip) 
     
      this.TripsService.getTrip(this.SignUpService.userUniversity, keyTrip,driverId).takeUntil(this.unsubscribe)
      .subscribe( info => {      
        //check if the info of the reserve is null  
        if(this.keyTrip.keyTrip === undefined || this.keyTrip.keyTrip=== null){
          this.driverExist = false;
          this.onTrip = false;
          console.log("ME ACTIVEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE")

          console.log("existo")

        }else{                               
        this.trip = info;          
        console.log(this.trip);
        this.getPendingAndPickedUpUsers(keyTrip,driverId);
        this.driverExist=true;
        this.onTrip=true; 
       
      } 
      })               
        
        
  }
  // getTripState(keyTrip,driverId){
  //   this.TripsService.getTripState(this.SignUpService.userUniversity,keyTrip,driverId).takeUntil(this.unsubscribe)
  //   .subscribe( tripState => {      
  //       this.tripState = tripState;
  //       console.log(this.tripState);
  //       console.log("estoy activado!!!")
        
  //         //check if trip has to be saved 
  //         if(this.tripState.saveTrip === true){
            
  //           this.TripsService.saveTripOnRecords(this.SignUpService.userUniversity, this.userUid,this.trip);     
  //           console.log("me active")
  //           this.unSubscribeServices();       
  //           this.TripsService.eliminatingOnTrip(this.SignUpService.userUniversity, this.userUid);
  //           this.TripsService.eliminateKeyTrip(this.SignUpService.userUniversity, this.userUid);
  //           this.TripsService.eliminateAvailableReserves(this.SignUpService.userUniversity, this.userUid);

  //           this.navCtrl.pop();
  //           this.navCtrl.push('RatetripPage',{trip:this.trip})
  //           console.log("ME ACTIVEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE")

  //         }   
  //         if(this.tripState.canceledTrip === true){
  //         //check if trip was canceled by driver                         
  //         this.unSubscribeServices();         
  //         console.log("ME ACTIVEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE")

  //         this.TripsService.eliminatingOnTrip(this.SignUpService.userUniversity, this.userUid);
  //         this.TripsService.eliminateKeyTrip(this.SignUpService.userUniversity, this.userUid);
  //         this.TripsService.eliminateAvailableReserves(this.SignUpService.userUniversity, this.userUid);

  //           let modal = this.modalCtrl.create('CanceltripPage');
  //           modal.present();  
  //           console.log("me cancelaron el viaje")

  //           this.navCtrl.pop();
  //         } 


  //         this.afDB.database.ref(this.SignUpService.userUniversity + '/tripsState/'+ driverId +'/'+ keyTrip+ '/cancelUsers/'+this.userUid)
  //         .once('value').then((snapshot) => {
  //           this.cancelUser = snapshot.val();
            
  //             console.log("2paso")

  //               if(this.cancelUser === undefined || this.cancelUser === null){
                
  //                 }else{
  //                   console.log("3paso")
  //                   this.unSubscribeServices();          
  //                   this.TripsService.eliminatingOnTrip(this.SignUpService.userUniversity,this.userUid);
  //                   this.TripsService.eliminateKeyTrip(this.SignUpService.userUniversity, this.userUid);
  //                   this.TripsService.eliminateAvailableReserves(this.SignUpService.userUniversity, this.userUid);
  
  //                   console.log("me eliminaron")
  //                   console.log("ME ACTIVEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE")
  
  //                   this.navCtrl.pop();
  //                   let modal = this.modalCtrl.create('CanceltripPage');
  //                   modal.present();
  //                 }                        
               
            
  //         })   
  //     })
  // }


  unSubscribeServices(){
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }       
  
  ionViewDidLeave(){
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  getPendingAndPickedUpUsers(keyTrip,driverId){
    this.TripsService.getPendingUsers(this.SignUpService.userUniversity, keyTrip,driverId).takeUntil(this.unsubscribe)
    .subscribe( user => {      
        this.pendingUsers = user;
        console.log(this.pendingUsers);          
    });
    this.TripsService.getPickedUpUsers(this.SignUpService.userUniversity, keyTrip,driverId).takeUntil(this.unsubscribe)
    .subscribe( user => {    
      this.pickedUpUsers = user;   

      console.log(this.pickedUpUsers);      
    });
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

 

callUser(number){
    console.log(number);
this.callNumber.callNumber(number, true)
.then(res => console.log('Launched dialer!', res))
.catch((err) => {
  const alert = this.alertCtrl.create({
    title: 'Error de llamada',
    subTitle: 'Hubo un error en la llamada, si persiste el problema envianos un correo a waypooltec@gmail.com',
    buttons: ['OK']
  });
  alert.present(); 
  console.log('Error launching dialer', err)

});
}

    cancelTrip(){
      let alert = this.alertCtrl.create({
        title: 'Cancelar Viaje',
        message: `¿Estas seguro que deseas cancelar?`,
        buttons: [
          {
            text: 'No',
            role: 'cancel',
            handler: () => {
            //do nothing
            }
          },
          { 
            text: 'Si',
            handler: () => {
              if(this.pickedUpUsers.length === 0 || this.pickedUpUsers === undefined || this.pickedUpUsers === null) {
                this.unSubscribeServices(); 
                this.MetricsService.cancelReserves(this.SignUpService.userUniversity,this.userUid,this.trip);
                this.TripsService.cancelTrip(this.SignUpService.userUniversity, this.userUid,this.trip.driver.userId,this.trip.keyTrip);
                this.TripsService.eliminateKeyTrip(this.SignUpService.userUniversity, this.userUid);
                this.TripsService.eliminatingOnTrip(this.SignUpService.userUniversity, this.userUid); 
                this.TripsService.eliminateAvailableReserves(this.SignUpService.userUniversity, this.userUid);              
                this.navCtrl.pop();

              }

              this.reservesService.confirmMyExistenceInPickedupUsers(this.SignUpService.userUniversity, this.trip.driver.userId, this.trip.keyTrip, this.userUid).takeUntil(this.unsubscribe)
                  .subscribe(pickedUp => {
                      this.pickedUp = pickedUp;  
                      console.log(this.pickedUp);
                      console.log(pickedUp);

                      if(this.pickedUp === undefined || this.pickedUp === null ){
                        this.MetricsService.cancelReserves(this.SignUpService.userUniversity,this.userUid,this.trip);
                        this.TripsService.cancelTrip(this.SignUpService.userUniversity, this.userUid,this.trip.driver.userId,this.trip.keyTrip);
                        this.TripsService.eliminateKeyTrip(this.SignUpService.userUniversity, this.userUid);
                        this.TripsService.eliminateAvailableReserves(this.SignUpService.userUniversity, this.userUid);
                        console.log(this.trip.keyTrip);
                        this.navCtrl.pop();

                      }else{
                        //don't cancel
                          const toast = this.toastCtrl.create({
                          message: `${this.pickedUp.name} : No puedes cancelar ya que tu compañero ya te recogió, si esto no es verdad, por favor saca un screenshot de Mi Viaje y mándalo al correo waypooltec@gmail.com`,
                          showCloseButton: true,
                          closeButtonText: 'Ok'
                            });
                          toast.present();
                      }

                  })
            }
          }
        ]
      });
      alert.present();
     
     

    }
  }
