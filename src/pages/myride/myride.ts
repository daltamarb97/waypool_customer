import { Component, ViewChild, ɵConsole } from '@angular/core';
import { NavController, NavParams, ToastController, IonicPage, AlertController, App, ModalController } from 'ionic-angular';
import { ElementRef } from '@angular/core';

import { sendUsersService } from '../../services/sendUsers.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { CallNumber } from '@ionic-native/call-number';
import { Geolocation } from '@ionic-native/geolocation';
import { SignUpService } from '../../services/signup.services';
import { TripsService } from '../../services/trips.service';

import { Subject } from 'rxjs';


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
itsMe:boolean = false;
  constructor(public navCtrl: NavController,public modalCtrl: ModalController,public alertCtrl:AlertController,public TripsService:TripsService,public toastCtrl: ToastController,public SignUpService: SignUpService,public geolocation: Geolocation,public navParams: NavParams,private AngularFireAuth:AngularFireAuth,private callNumber: CallNumber,public sendUsersService:sendUsersService, public app: App) {
    // this.TripsService.getOnTrip(this.userUid).takeUntil(this.unsubscribe)
    //   .subscribe(onTrip =>{
    //     this.onTripInstance = onTrip
    //     if(this.onTripInstance === false){
    //       this.navCtrl.pop();
    //       this.unSubscribeServices();
    //     }
    //   })
    this.TripsService.getKeyTrip(this.userUid).takeUntil(this.unsubscribe)
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
            this.TripsService.eraseReserve(this.userUid,this.keyTrip.keyTrip);

           }

          //get trip without searching         
          

          //check if its lastMinuteUser or not
          // if(){

          // }
    
    })  
      
  }
 
  
   
  getTrip(keyTrip,driverId){
    console.log(this.trip)   
    this.getTripState(keyTrip,driverId);

    console.log(this.keyTrip) 
     
      this.TripsService.getTrip(keyTrip,driverId).takeUntil(this.unsubscribe)
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
  getTripState(keyTrip,driverId){
    this.TripsService.getTripState(keyTrip,driverId).takeUntil(this.unsubscribe)
    .subscribe( tripState => {      
        this.tripState = tripState;
        console.log(this.tripState);
        console.log("estoy activado!!!")
        
          //check if trip has to be saved 
          if(this.tripState.saveTrip === true){
            
            this.TripsService.saveTripOnRecords(this.userUid,this.trip);     
            console.log("me active")
            this.unSubscribeServices();       
            this.TripsService.eliminatingOnTrip(this.userUid);
            this.TripsService.eliminateKeyTrip(this.userUid);
            this.navCtrl.pop();
            this.navCtrl.push('RatetripPage',{trip:this.trip})
            console.log("ME ACTIVEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE")

          }   
          if(this.tripState.canceledTrip === true){
          //check if trip was canceled by driver                         
          this.unSubscribeServices();         
          console.log("ME ACTIVEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE")

          this.TripsService.eliminatingOnTrip(this.userUid);
          this.TripsService.eliminateKeyTrip(this.userUid);
            let modal = this.modalCtrl.create('CanceltripPage');
            modal.present();  
            console.log("me cancelaron el viaje")

            this.navCtrl.pop();
          } 
          this.TripsService.getCancelUsers(keyTrip,driverId)
          .subscribe( cancelUsers => {      
              this.cancelUsers = cancelUsers;          
              this.cancelUsers.forEach(cancelUser => {
                console.log("2paso")

                  if(this.userUid === cancelUser.userId){
                    console.log("3paso")
                    this.unSubscribeServices();          
                    this.TripsService.eliminatingOnTrip(this.userUid);
                    this.TripsService.eliminateKeyTrip(this.userUid);
                    console.log("me eliminaron")
                    console.log("ME ACTIVEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE")

                    this.navCtrl.pop();
                    let modal = this.modalCtrl.create('CanceltripPage');
                    modal.present();
                    }                        
                });  
    
            })
        
        
         
         
      })
  }
  unSubscribeServices(){
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }             

  getPendingAndPickedUpUsers(keyTrip,driverId){
    this.TripsService.getPendingUsers(keyTrip,driverId).takeUntil(this.unsubscribe)
    .subscribe( user => {      
        this.pendingUsers = user;
        this.recognizedMyName(this.pendingUsers);
        console.log(this.pendingUsers);          
    });
    this.TripsService.getPickedUpUsers(keyTrip,driverId).takeUntil(this.unsubscribe)
    .subscribe( user => {    
      this.pickedUpUsers = user;   
      this.recognizedMyName(this.pickedUpUsers);

      console.log(this.pickedUpUsers);      
    });
  }
chatDriver(driver){
    this.navCtrl.push('ChattingPage',{driver:driver})
}    
recognizedMyName(users){
  users.forEach(user => {
      if(this.userUid === user.userId){
        this.itsMe = true;
      }
  });
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
                this.TripsService.cancelTrip(this.userUid,this.trip.driver.userId,this.trip.keyTrip);
                this.TripsService.eliminateKeyTrip(this.userUid);
                this.TripsService.eliminatingOnTrip(this.userUid);               
                this.navCtrl.pop();
              }
              this.pickedUpUsers.forEach(pickedUser => {
                // if user is in the pickedUpUsers array, it should not be able to cancel, because its already pickedUp.
                if( pickedUser.userId === this.userUid){
                  //don't cancel
                  const toast = this.toastCtrl.create({
                    message: `${pickedUser.name} : No puedes cancelar ya que tu compañero ya te recogió, si esto no es verdad, por favor saca un screenshot de Mi Viaje al correo waypooltec@gmail.com`,
                    showCloseButton: true,
                    closeButtonText: 'Ok'
                  });
                  toast.present();
                }else{           
                  this.TripsService.cancelTrip(this.userUid,this.trip.driver.userId,this.trip.keyTrip);
                  this.TripsService.eliminateKeyTrip(this.userUid);
                  console.log(this.trip.keyTrip);
                  this.navCtrl.pop();

                }
              })
            }
          }
        ]
      });
      alert.present();
     
     

    }
  }
   // getLastMinuteTrip(keyTrip,driverId){           
  //         //get reserve exist inside node trips
  //             console.log('1');         
  //             console.log(keyTrip);         
  //             console.log(driverId);         
  //             console.log(this.myTripReserve);          

  //             this.TripsService.getMyReserves(keyTrip,driverId)
  //               .subscribe( info => {      
  //                 //check if the info of the reserve is null       
  //               if(info === undefined || info === null){                  
  //                   this.driverExist=false;
  //                   this.onTrip = false;
  //               }else{
  //                   this.info = info;       
  //                   console.log('1');          
           
  //                     this.onTrip = true;
  //                     this.trip= info;  
  //                     this.trip.cancelReserves = this.cancelReserves;
  //                     console.log('1');
  //                         this.trip.cancelReserves.forEach(cancelReserve => {
  //                       //if driver cancel you, eliminate your keyReserve of your array
  //                       if(this.cancelReserves === cancelReserve.userId){
  //                         this.driverExist = false;
  //                         this.TripsService.eliminatingOnTrip(this.userUid);
  //                         this.TripsService.eliminateKeyLMU(this.userUid);  
  //                         this.navCtrl.setRoot(this.navCtrl.getActive().component);
  //                         let modal = this.modalCtrl.create('CanceltripPage');
  //                         modal.present();
  //                       }                        
  //                     }); 
  //                     this.getPendingAndPickedUpUsers(this.trip.keyTrip,this.trip.driver.userId);
  //                     this.driverExist = true;
  //                     if(this.trip.saveTrip === true){
  //                       //check if trip has to be saved for records 
  //                       this.TripsService.saveTripOnRecords(this.userUid,this.trip);
  //                       this.driverExist = false;   
  //                       this.onTrip=false;  
  //                       this.TripsService.eliminatingOnTrip(this.userUid);

  //                     } 

  //                     this.trip.cancelReserves = this.cancelReserves;
  //                     console.log('1');
  //                         this.trip.cancelReserves.forEach(cancelReserve => {
  //                       //if driver cancel you, eliminate your keyReserve of your array
  //                       if(this.cancelReserves === cancelReserve.userId){
  //                         this.driverExist = false;
  //                         this.TripsService.eliminatingOnTrip(this.userUid);
  //                         this.TripsService.eliminateKeyLMU(this.userUid);  
  //                         this.navCtrl.setRoot(this.navCtrl.getActive().component);
  //                         let modal = this.modalCtrl.create('CanceltripPage');
  //                         modal.present();
  //                       }                        
  //                     });
                     
  //                   // do nothing because your trip doesn't exist
  //               }         
  //           })       
