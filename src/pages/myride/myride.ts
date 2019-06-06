import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, ToastController, IonicPage, AlertController, App } from 'ionic-angular';
import { ElementRef } from '@angular/core';

import { sendUsersService } from '../../services/sendUsers.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { CallNumber } from '@ionic-native/call-number';
import { Geolocation } from '@ionic-native/geolocation';
import { SignUpService } from '../../services/signup.services';
import { TripsService } from '../../services/trips.service';


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
driverExist:boolean 
info:any;
  constructor(public navCtrl: NavController,public alertCtrl:AlertController,public TripsService:TripsService,public toastCtrl: ToastController,public SignUpService: SignUpService,public geolocation: Geolocation,public navParams: NavParams,private AngularFireAuth:AngularFireAuth,private callNumber: CallNumber,public sendUsersService:sendUsersService, public app: App) {
  
        this.TripsService.getMyReservesUser(this.userUid)
        .subscribe( myReservesId => {
          //get all reserves id (reserve push key, driverUid) of my user node
          this.myReservesId = myReservesId;
         
          console.log(this.myReservesId);
          
          this.getTrip();
    
        })    
               
  }
  getTrip(){    
    this.myReservesId.forEach(reserve => {
        //compare every reserveId User have and see if matches in Trip's node
        if(reserve.keyReserve === undefined || reserve.keyReserve === null){
          // if reserve doesn't exist do nothing
        } else {
          //check if reserve exist inside node trips
          this.TripsService.getMyReserves(reserve.keyReserve,reserve.driverId)
             .subscribe( info => {      
               //check if the info of the reserve is null       
             if(info === undefined || info === null){
               
              console.log("jajaja")
             }else{
              this.info = info;
              console.log(this.info);
              console.log(info);

              if(reserve.keyReserve === this.info.keyTrip){
                          //if matches get trip
                          
               this.trip= info
               
               this.getPendingAndPickedUpUsers(this.trip.keyTrip,this.trip.driver.userId)
               this.driverExist = true
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
    this.TripsService.getPendingUsers(keyTrip,driverId)
    .subscribe( user => {      
        this.pendingUsers = user;
        console.log(this.pendingUsers);          
    });




    this.TripsService.getPickedUpUsers(keyTrip,driverId)
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
      
      if (this.user.trips.pickedUp == true){

        const toast = this.toastCtrl.create({
          message: `${this.user.name} : No puedes cancelar ya que tu compañero ya te recogió, si esto no es verdad, por favor saca un screenshot de Mi Viaje al correo waypooltec@gmail.com`,
          showCloseButton: true,
          closeButtonText: 'Ok'
        });
        toast.present();

      } else if(this.user.trips.pickedUp !== true){
        let alert = this.alertCtrl.create({
          title: 'Cancelar Viaje',
          message: `¿Estas seguro que deseas cancelar?`,
          buttons: [
            {
              text: 'No',
              role: 'cancel',
              handler: () => {
             
              }
            },
            { 
              text: 'Si',
              handler: () => {
                  if(this.driverOnTrip[0]){
                    //juandavid
                    if(this.user.geofireOr == true){
                      this.sendUsersService.cancelTripUserOr(this.driverOnTrip[0].userId,this.userUid)
                    }else if(this.user.geofireDest == true){
                      this.sendUsersService.cancelTripUserDest(this.driverOnTrip[0].userId,this.userUid)
                    }
                  }else{
                    const alert = this.alertCtrl.create({
                      title: 'no estas en un',
                      subTitle: 'no estas en ningún viaje en este momento, ve al inicio para q vivas la experiencia',
                      buttons: ['OK']
                    });
                    alert.present(); 
                }
              }
            }
          ]
        });
        alert.present();
        
      }
    }
  }
