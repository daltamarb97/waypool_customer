import { AngularFireDatabase } from "@angular/fire/database";
import { Injectable } from "@angular/core";

import { AngularFireAuth } from "angularfire2/auth";

@Injectable()
export class DriverMetricsService {
    constructor(public afDB: AngularFireDatabase, public AngularFireAuth: AngularFireAuth){
    }


    public createdReserves(driver,car,house,placeD,precio,startHour,typeOfReserve){
    //send every reserve that were created
    this.afDB.database.ref('data/allReservesCreated/').push({
        driver: driver,
        car:car,
        house:house,
        placeD:placeD,
        price:precio,
        startHour:startHour,
        type: typeOfReserve,
     

      });

   }   
   public tripsInitiated( driverUid,keyTrip,trip){
    //send every trip that were initiated
  this.afDB.database.ref('data/allTripsInitiated/').push(trip);

    } 

     }

     
