import { Component } from '@angular/core';
import { NavController, ModalController, ToastController, IonicPage, App, LoadingController } from 'ionic-angular';

import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { sendCoordsService } from '../../services/sendCoords.service';
import { SignUpService } from '../../services/signup.services';
import { geofireService } from '../../services/geoFire.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { reservesService } from '../../services/reserves.service';
import { TripsService } from '../../services/trips.service';
import { Subject } from 'rxjs';
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
  unsubscribe = new Subject;
  pendingUsers:any = [];
  noReserve:boolean = false;
  constructor(public navCtrl: NavController,private app:App,public TripsService:TripsService,public loadingCtrl: LoadingController,public toastCtrl: ToastController,public reservesService:reservesService,  private AngularFireAuth: AngularFireAuth,private afDB: AngularFireDatabase, public SignUpService: SignUpService, public sendCoordsService: sendCoordsService,public modalCtrl: ModalController, private geoFireService: geofireService ) {
  console.log("AQUI EMPIEZA")
    this.SignUpService.getMyInfo(this.userUid, this.SignUpService.userPlace).takeUntil(this.unsubscribe).subscribe(user=>{
      this.user = user;   
      
    })
    
    this.sendCoordsService.getOriginUser(this.SignUpService.userPlace, this.userUid).takeUntil(this.unsubscribe)
    .subscribe( originUser => {
      this.locationOriginUser = originUser;
      // this.locationOrigin.push(origin)
      console.log(originUser);
    });
    this.sendCoordsService.getDestinationUser(this.SignUpService.userPlace, this.userUid).takeUntil(this.unsubscribe)
        .subscribe( destinationUser => {
          this.locationDestinationUser = destinationUser;
          // this.locationOrigin.push(origin)
          console.log(destinationUser);
        });

    this.reservesService.getReserves(this.SignUpService.userPlace, this.userUid).takeUntil(this.unsubscribe)    
      .subscribe(reserves => {
        this.initiatedTrips = [];
        this.reservesAvailable = [];
        this.ReservesGeofire = reserves;
        console.log(this.ReservesGeofire);
        this.presentLoadingCustom(this.ReservesGeofire);   
        this.getAvailableReserves();

      });
     
  
  }

 

  ionViewDidLeave(){
    this.unSubscribeServices();

    console.log("me active")
    this.TripsService.eliminateAvailableUsers(this.SignUpService.userPlace,this.userUid);
  }



      // getMyReserves(){
      // }



  getAvailableReserves(){ 
        //bring reserves that i have entered to hide them in listride
   console.log('me ejecute avilable');
   
    //after getting reserve id and driverUid from my own user node, we used them to access the reserve information in the node reserves
      this.ReservesGeofire.forEach(reserveGeofire => {

        this.afDB.database.ref(this.SignUpService.userPlace + '/reserves/'+ reserveGeofire.driverId +'/'+ reserveGeofire.keyReserve).once('value').then((snapReserve)=>{
          let obj = snapReserve.val();
          console.log(obj);
          
          if(obj=== undefined || obj === null){
              // reserve doesn't exist
              console.log("hello"); 
              }else{
                this.reservesAvailable.push(obj);
                console.log(this.reservesAvailable);
                
              } 
        })

        if(reserveGeofire.LMU == true){
          
          this.afDB.database.ref(this.SignUpService.userPlace + '/trips/'+reserveGeofire.driverId+'/'+ reserveGeofire.keyReserve).once('value').then((snapTripLMU)=>{
            this.reserveLMU = snapTripLMU.val();
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




 
 confirmpopup(reserve){
   this.reservesService.getPendingUsers(this.SignUpService.userPlace,reserve.driver.userId,reserve.keyTrip).takeUntil(this.unsubscribe)
    .subscribe(pendingUsers=>{
      this.pendingUsers = pendingUsers
      console.log(pendingUsers);
     
      
    })
    if( this.pendingUsers === undefined||this.pendingUsers === null){
      //there is no one in the trip
      let modal = this.modalCtrl.create('ConfirmpopupPage',{reserve:reserve});
    modal.onDidDismiss(accepted => {
        if(accepted){
          this.unSubscribeServices();
         this.navCtrl.pop();
         this.TripsService.eliminateAvailableUsers(this.SignUpService.userPlace,this.userUid);
    
         this.navCtrl.push('ReservetripPage');
        }
      })
    modal.present();
    console.log('no hay nadie')
    
    }else if (this.pendingUsers.length >= 4){
      //the trip is full 
      const toast = this.toastCtrl.create({
        message: 'Este viaje ya tiene 4 personas reservadas, porfavor selecciona otro',
        showCloseButton:true,
        closeButtonText: 'OK',
        position:'bottom'
           });
      toast.present();
      console.log('menor de 4')
    
    }else{
      console.log(this.pendingUsers.length)
      //its less of 4 people
      let modal = this.modalCtrl.create('ConfirmpopupPage',{reserve:reserve});
    modal.onDidDismiss(accepted => {
        if(accepted){
          this.unSubscribeServices();
         this.navCtrl.pop();
         this.TripsService.eliminateAvailableUsers(this.SignUpService.userPlace,this.userUid);
    
         this.navCtrl.push('ReservetripPage');
        }
      })
    modal.present();
    console.log('else')
    }

 //IMPORTANTE QUE AL FINAL SE LE COLOQUE QUE SE QUITE CUANDO ACEPTE A ALGUIEN
  }




  enterTrip(trip){
   let modal = this.modalCtrl.create('ConfirmtripPage',{trip:trip});
   modal.onDidDismiss((accepted) => {
    if(accepted){
        this.unSubscribeServices();
        this.navCtrl.pop();
        this.TripsService.eliminateAvailableUsers(this.SignUpService.userPlace,this.userUid);
        this.navCtrl.push('MyridePage');
      }
    })
    modal.present();
   //IMPORTANTE QUE AL FINAL SE LE COLOQUE QUE SE QUITE CUANDO ACEPTE A ALGUIEN
   }






   unSubscribeServices(){
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
  


  
  presentLoadingCustom(array){
    let loading = this.loadingCtrl.create({
      spinner: 'crescent',
      content: `
        <div class="custom-spinner-container">
          <div class="custom-spinner-box"></div>
        </div>`,
      duration: 1000
    });
  
    loading.onDidDismiss(() => {
       console.log(array)
      if(array.length === 0){
        //there are no reserves to show
        this.noReserve = true;
      }else{
        //there are reserves
          this.noReserve = false;  
      }
    });
    loading.present();
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