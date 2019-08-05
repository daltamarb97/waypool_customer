import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, ToastController, IonicPage, AlertController, App } from 'ionic-angular';
import { ElementRef } from '@angular/core';

import { sendUsersService } from '../../services/sendUsers.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { CallNumber } from '@ionic-native/call-number';
import { Geolocation } from '@ionic-native/geolocation';
import { SignUpService } from '../../services/signup.services';
import { TripsService } from '../../services/trips.service';
import { environmentService } from '../../services/environment.service';


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
myReservesId:any = [];
trip:any;
userUid=this.AngularFireAuth.auth.currentUser.uid;
driverExist:boolean =false;
info:any;
onTrip: boolean = false;
cancelReserves: any = [];
  constructor(public navCtrl: NavController,public alertCtrl:AlertController,public TripsService:TripsService,public toastCtrl: ToastController,public SignUpService: SignUpService,public geolocation: Geolocation,public navParams: NavParams,private AngularFireAuth:AngularFireAuth,private callNumber: CallNumber,public sendUsersService:sendUsersService, public app: App, private environmentService: environmentService) {

        this.TripsService.getMyReservesUser(this.SignUpService.userUniversity,  this.userUid)
        .subscribe( myReservesId => {
          //get all reserves id (reserve push key, driverUid) of my user node
          this.myReservesId = myReservesId;
         
          console.log(this.myReservesId);
          
          this.getTrip();
    
        })    
         
        console.log(this.SignUpService.userUniversity);
  }
  getTrip(){    
    this.myReservesId.forEach(reserve => {
        //compare every reserveId User have and see if matches in Trip's node
        if(reserve.keyReserve === undefined || reserve.keyReserve === null){
          // if reserve doesn't exist do nothing
          this.driverExist=false;

        } else {
          //check if reserve exist inside node trips
              this.TripsService.getMyReserves(this.SignUpService.userUniversity, reserve.keyReserve,reserve.driverId)
                .subscribe( info => {      
                  //check if the info of the reserve is null       
                if(info === undefined || info === null){
                  
                    this.driverExist=false;
                    this.onTrip = false;
                }else{
                    this.info = info;
                  
                  //if matches get trip
                  if(reserve.keyReserve === this.info.keyTrip){          
                      this.onTrip = true;
                      this.trip= info;   
                      this.getPendingAndPickedUpUsers(this.trip.keyTrip,this.trip.driver.userId);
                      this.driverExist = true;
                      if(this.trip.saveTrip === true){
                        //check if trip has to be saved 
                        this.TripsService.saveTripOnRecords(this.SignUpService.userUniversity, this.userUid,this.trip);
                        this.driverExist = false;     

                      } 
                      this.trip.cancelReserves = this.cancelReserves;
                      
                    
                      this.trip.cancelReserves.forEach(cancelReserve => {
                        //if driver cancel you, eliminate your keyReserve of your array
                        if(this.cancelReserves === cancelReserve.userId){
                          this.driverExist = false;
                          this.TripsService.eliminateKeyUser(this.SignUpService.userUniversity, this.userUid,this.trip.keyTrip);
                          this.navCtrl.setRoot(this.navCtrl.getActive().component);
                          const toast = this.toastCtrl.create({
                            message: `El conductor te ha cancelado de su viaje`,
                            showCloseButton: true,
                            closeButtonText: 'Ok'
                          });
                          toast.present();
                          console.log('YEAHHHHHHHHHHHHHHHHHH')
                        }
                        
                      });
                      }else{
                        // do nothing because the key of your reserve is not in trip's node
                        }
                    // do nothing because your trip doesn't exist
                }
                
                
                 
                  })          
        }   

      })  
      
  }
  getPendingAndPickedUpUsers(keyTrip,driverId){
    this.TripsService.getPendingUsers(this.SignUpService.userUniversity, keyTrip,driverId)
    .subscribe( user => {      
        this.pendingUsers = user;
        console.log(this.pendingUsers);          
    });
    this.TripsService.getPickedUpUsers(this.SignUpService.userUniversity, keyTrip,driverId)
    .subscribe( user => {    
      this.pickedUpUsers = user;
     
     
      console.log(this.pickedUpUsers);      
    });
  }
chatDriver(driver){
    this.navCtrl.push('ChattingPage',{driver:driver})
}    
    
callUser(number){
    console.log(number)


this.callNumber.callNumber(number, true)
.then(res => console.log('Launched dialer!', res))
.catch((err) => {
  const alert = this.alertCtrl.create({
    title: 'error de llamada',
    subTitle: 'hubo un error en la llamada, si persiste el probelma envianos un correo a waypooltec@gmail.com',
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
                this.TripsService.cancelTrip(this.SignUpService.userUniversity, this.userUid,this.trip.driver.userId,this.trip.keyTrip);
                this.TripsService.eliminateKeyUser(this.SignUpService.userUniversity, this.userUid,this.trip.keyTrip);
                this.navCtrl.setRoot(this.navCtrl.getActive().component);

                console.log(this.trip.keyTrip);
                this.driverExist = false;
                this.onTrip=false;
                console.log(this.driverExist);
              }
              this.pickedUpUsers.forEach(pickedUser => {
                // if user is in the pickedUpUsers array, it should not be able to cancel, because its already pickedUp.
                if( pickedUser.userId === this.userUid){
                  //dont cancel
                  const toast = this.toastCtrl.create({
                    message: `${pickedUser.name} : No puedes cancelar ya que tu compañero ya te recogió, si esto no es verdad, por favor saca un screenshot de Mi Viaje al correo waypooltec@gmail.com`,
                    showCloseButton: true,
                    closeButtonText: 'Ok'
                  });
                  toast.present();
                }else{
                  // desaparecer driver de el html y hacer condicionales del last minute this.user, buscar setTimeOut y una barra de tiempo para eliminarlo
                 
                  this.driverExist = false;
                  this.onTrip=false;

                  this.TripsService.cancelTrip(this.SignUpService.userUniversity, this.userUid,this.trip.driver.userId,this.trip.keyTrip);
                  this.TripsService.eliminateKeyUser(this.SignUpService.userUniversity, this.userUid,this.trip.keyTrip);
                  console.log(this.trip.keyTrip);
                  this.navCtrl.setRoot(this.navCtrl.getActive().component);


                }
              })
            }
          }
        ]
      });
      alert.present();
     
     

    }
  }
