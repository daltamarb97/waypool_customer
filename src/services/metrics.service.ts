import { AngularFireDatabase } from "@angular/fire/database";
import { Injectable } from "@angular/core";

import { AngularFireAuth } from "angularfire2/auth";

@Injectable()
export class MetricsService {
    constructor(public afDB: AngularFireDatabase, public AngularFireAuth: AngularFireAuth){
    }


    public createdReserves(place, userUid,time,dest,or){
    //send every reserve that were created
    this.afDB.database.ref('data/timesUserGoListride/'+place).push({
      time:time,
      dest:dest,
      or:or
    });

   }   
   public cancelReserves(place, userUid,trip){
    //send every reserve that were created
    this.afDB.database.ref('data/userCancelTrip/'+place).push({
      trip:trip
    });

   }

     }

     



    

