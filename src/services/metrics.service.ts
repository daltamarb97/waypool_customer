import { AngularFireDatabase } from "@angular/fire/database";
import { Injectable } from "@angular/core";

import { AngularFireAuth } from "angularfire2/auth";

@Injectable()
export class MetricsService {
    constructor(public afDB: AngularFireDatabase, public AngularFireAuth: AngularFireAuth){
    }


    public createdReserves(university, userUid,time,dest,or){
    //send every reserve that were created
    this.afDB.database.ref('data/timesUserGoListride/'+university + '/'+userUid+'/').push({
      time:time,
      dest:dest,
      or:or
    });

   }   
   public cancelReserves(university, userUid,trip){
    //send every reserve that were created
    this.afDB.database.ref('data/userCancelTrip/'+university + '/'+userUid+'/').push({
      trip:trip
    });

   }

     }

     



    

