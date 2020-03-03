import { AngularFireDatabase } from "@angular/fire/database";
import { Injectable } from "@angular/core";

import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from 'firebase';
import { AlertController } from "ionic-angular";

@Injectable()
export class DriverPriceService {
    constructor(public afDB: AngularFireDatabase, public AngularFireAuth: AngularFireAuth, public alertCtrl: AlertController){
    }

    

    public setPriceAndNote(place, user,price,note,car){
        
        firebase.database().ref(place +'/drivers/' + user+'/trips').update({
          //set important information with note

           price:price ,
           note:note,
           car:car,
           
        })
   }    
    public setPrice( user,price,car, keyReserve){
        
      firebase.database().ref('/driversTest/' + user+'/trips').update({
         price:price, 
         car:car,
        
      })


      firebase.database().ref('/reseves/' + user + '/' + keyReserve).update({
        price:price, 
         car:car,
      })
     }

     public saveTripToReserves(driverUid,or,dest,timeLeaving,price,car,note,driver){
      let arrayReserves =this.afDB.database.ref('reserves/'+ driverUid+'/').push({
          orReserve: or,
          destReserve: dest,
          timeLeaving:timeLeaving,
          price:price,
          car:car,
          note:note,
          driver:driver
        
          
          });
          //get key of reserve pushed
        let KeyLastTripSaved = arrayReserves.key;
          //save key inside reserve
        firebase.database().ref('reserves/'+driverUid+'/'+arrayReserves.key+'/').update({
           keyTrip:arrayReserves.key
        })
          //save key inside driver momentarily to access reserve 
        firebase.database().ref('drivers/'+driverUid+'/'+arrayReserves.key).update({
          keyLastReserve:arrayReserves.key
       })
        console.log(KeyLastTripSaved); 
       }



       sendPaymentInfo(place, driverId, id, bankAccount, bankEntity){
        this.afDB.database.ref(place + '/drivers/' + driverId).update({
          idNumber: id,
          bankAccount: bankAccount,
          bankEntity: bankEntity
        }).then(()=>{
          const alert = this.alertCtrl.create({
            title: 'Información recibida',
            subTitle: 'Si tienes un saldo pendiente por recibir mayor o igual a COP$10.000, en los próximos dias estará llegando a tu cuenta bancaria',
            buttons: ['OK']
          });
          alert.present();
        })
       }
}