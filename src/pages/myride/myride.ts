import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, ToastController, IonicPage, AlertController, App } from 'ionic-angular';
import { ElementRef } from '@angular/core';

import { sendUsersService } from '../../services/sendUsers.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { CallNumber } from '@ionic-native/call-number';
import { Geolocation } from '@ionic-native/geolocation';
import { SignUpService } from '../../services/signup.services';


@IonicPage()

@Component({
  selector: 'page-myride',
  templateUrl: 'myride.html'
})
export class MyridePage {

  // @ViewChild('map') mapElement: ElementRef;
map:any;
markers:any;
pickingUsers:any=[];
pickedUpUsers:any=[];

driverOnTrip:any=[];
driver:any;
myLatLng:any;
user:any;


userUid=this.AngularFireAuth.auth.currentUser.uid;

  constructor(public navCtrl: NavController,public alertCtrl:AlertController,public toastCtrl: ToastController,public SignUpService: SignUpService,public geolocation: Geolocation,public navParams: NavParams,private AngularFireAuth:AngularFireAuth,private callNumber: CallNumber,public sendUsersService:sendUsersService, public app: App) {
    
    this.sendUsersService.getMyDriverOnTrip(this.userUid)
        .subscribe( driver => {
          
        this.driverOnTrip = driver;
        console.log(this.driverOnTrip);
        if(this.driverOnTrip.length == 0){
        } else {
          this.gettingUsersOnTrip(driver);
        }
        
        })  
       
        this.SignUpService.getMyInfo(this.userUid).subscribe(user=>{
          this.user = user;
          if(this.user.onTripFinal){
            this.navCtrl.push('RatetripPage', {userDriver:this.driverOnTrip});
          }else{

          }
          
        }) 
       
               
  }

  chatDriver(driver){
    this.navCtrl.push('ChattingPage',{driver:driver})
  }

  gettingUsersOnTrip(driver){
  
      this.sendUsersService.getUsersOnTrip(driver[0].userId)
          .subscribe(user => {
        
          this.pickingUsers = user;
        console.log(this.pickingUsers)
        
        })

      this.sendUsersService.getPickedUpUsers(driver[0].userId)
          .subscribe( user => {
      
          this.pickedUpUsers = user;
        console.log(this.pickedUpUsers)
            
        }) 
 
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
