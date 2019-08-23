import { Component } from '@angular/core';
import { NavController, ModalController, ToastController, IonicPage, App } from 'ionic-angular';

import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { sendCoordsService } from '../../services/sendCoords.service';
import { SignUpService } from '../../services/signup.services';
import { geofireService } from '../../services/geoFire.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { reservesService } from '../../services/reserves.service';
import { TripsService } from '../../services/trips.service';
@IonicPage()

@Component({
  selector: 'page-listride',
  templateUrl: 'listride.html'
})
export class ListridePage {
  reservesAvailable:any = [];
  initiatedTrips:any = [];
  locationDestinationUser:any =[];
  locationOriginUser:any =[];
  user:any;
  userUid=this.AngularFireAuth.auth.currentUser.uid;
  test:any;
  reserve:any;
  ReservesGeofire: any =[];
  tripsReserved:any =[];
  reserveLMU:any;
  // verified:boolean = false;

  constructor(public navCtrl: NavController,private app:App,public TripsService:TripsService,public toastCtrl: ToastController,public reservesService:reservesService,  private AngularFireAuth: AngularFireAuth,private afDB: AngularFireDatabase, public SignUpService: SignUpService, public sendCoordsService: sendCoordsService,public modalCtrl: ModalController, private geoFireService: geofireService ) {
  console.log("AQUI EMPIEZA")
    this.SignUpService.getMyInfo(this.userUid, this.SignUpService.userUniversity).subscribe(user=>{
      this.user = user;   
      
    })
    
    this.sendCoordsService.getOriginUser(this.SignUpService.userUniversity, this.userUid)
    .subscribe( originUser => {
      this.locationOriginUser = originUser;
      // this.locationOrigin.push(origin)
      console.log(originUser);
    });
    this.sendCoordsService.getDestinationUser(this.SignUpService.userUniversity, this.userUid)
        .subscribe( destinationUser => {
          this.locationDestinationUser = destinationUser;
          // this.locationOrigin.push(origin)
          console.log(destinationUser);
        });
        this.reservesService.getMyReservesUser(this.SignUpService.userUniversity, this.userUid)
        .subscribe( tripsReserved => {
          
  
          this.tripsReserved = tripsReserved
          console.log(this.tripsReserved);
  
        }) 
    this.reservesService.getReserves(this.SignUpService.userUniversity, this.userUid)    
      .subscribe(reserves => {
        this.reservesAvailable = [];
        this.ReservesGeofire = reserves;
        console.log(this.ReservesGeofire);
        this.getMyReserves();
        this.getAvailableReserves();
      });
     
  
  }


  
getMyReserves(){
  this.reservesService.getMyReservesUser(this.SignUpService.userUniversity, this.userUid)
  .subscribe( tripsReserved => {
    

    this.tripsReserved = tripsReserved
    
    console.log(this.tripsReserved);
   
  }) 
}
  getAvailableReserves(){
    
    //bring reserves that i have entered to hide them in listride
   
    //after getting reserve id and driverUid from my own user node, we used them to access the reserve information in the node reserves
      this.ReservesGeofire.forEach(reserveGeofire => {
        console.log(this.SignUpService.userUniversity);
        console.log(reserveGeofire);

          this.reservesService.getMyReserves(this.SignUpService.userUniversity, reserveGeofire.driverId,reserveGeofire.keyReserve)
      .subscribe( info => {        
            this.reserve = info;    
            console.log(info);
            if(this.reserve=== undefined || this.reserve === null){
              // reserve doesn't exist
              console.log("hello");        

           }else{
            console.log("not-undefined");        
            if(this.tripsReserved.length === 0){
                
                this.reservesAvailable.push(this.reserve); 
                console.log(this.reservesAvailable);
                console.log("A");        

     
            } else {
              this.reservesAvailable.push(this.reserve); 
            }
           } 

            
          // arreglar problema de que aparece varias veces la misma reserva
      })

      //// ELIMINAR NODO QUE LEE LMU CUANDO FINALICE VIAJE (MERGE)


      if(reserveGeofire.LMU == true){
        this.TripsService.getLastMinuteTripsDEMO(this.SignUpService.userUniversity, reserveGeofire.driverId).subscribe((reserveLMU)=>{
          this.reserveLMU = reserveLMU[0];
          this.initiatedTrips.push(this.reserveLMU);
          console.log(this.initiatedTrips);

        })
      }
    })  
  }

  
ionViewDidLoad(){
  // this.geoFireService.getDriversAvailableForUser(this.userUid)
  //   .subscribe(drivers=>{
  //       this.driversAvailable = drivers;
  //       console.log(this.driversAvailable);
  //   })
}




 
 confirmpopup(reserve,keyArray:string,driverUserId){
   //mutacion: tiene q mutar o eliminarse
//   if(this.user.trips.onTrip == true || this.user.trips.pickedUp == true){
//     // this.geoFireService.deleteDriverListRideTotal(this.userUid);
//     this.geoFireService.deleteDriverListRideTotal(this.userUid);
//     const toast = this.toastCtrl.create({
//       message: `${this.user.name} : No puedes escoger otro conductor mientras estes en un viaje, por favor dirígete a Mi Viaje y cancelalo. `,
//       showCloseButton: true,
//       closeButtonText: 'Ok'
//     });
//     toast.present();
//   } else {

//  let modal = this.modalCtrl.create('ConfirmpopupPage',{reserve,keyArray});
//  modal.present();
//  console.log(reserve)
//   }
let modal = this.modalCtrl.create('ConfirmpopupPage',{reserve:reserve});
modal.onDidDismiss(accepted => {
    if(accepted){
     this.navCtrl.pop();
     this.navCtrl.push('ReservetripPage');
    }
  })
modal.present();
 //IMPORTANTE QUE AL FINAL SE LE COLOQUE QUE SE QUITE CUANDO ACEPTE A ALGUIEN
  }


  enterTrip(trip){

   let modal = this.modalCtrl.create('ConfirmtripPage',{trip:trip});
   modal.onDidDismiss(accepted => {
    if(accepted){
     this.navCtrl.pop();
    }
  })
modal.present();
  //IMPORTANTE QUE AL FINAL SE LE COLOQUE QUE SE QUITE CUANDO ACEPTE A ALGUIEN
   }



  help(){
    const toast = this.toastCtrl.create({
      message: 'Estos son los conductores que se van a tu misma zona. Podrás ver sus horas en las que se van y unirte en su viaje',
      showCloseButton:true,
      closeButtonText: 'OK',
      position:'top'
         });
    toast.present();
  }
}