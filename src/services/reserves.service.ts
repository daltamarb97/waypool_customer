import { AngularFireDatabase } from "@angular/fire/database";
import { Injectable } from "@angular/core";
import { UrlSerializer } from "ionic-angular";
import * as GeoFire from 'geofire';

@Injectable()
export class reservesService {

   
    constructor(public afDB: AngularFireDatabase){ 

       }
       
       public setOnTrip(place, userUid){        
      this.afDB.database.ref(place + '/users/'+userUid).update({
          onTrip:true
        });
 
     }
    public getMyReservesUser(place, userUid){
        //get reserves of that i have enter
        return  this.afDB.list(place + '/users/'+ userUid+'/myReserves').valueChanges();

    }


    public getMyReservesSelected(place, userUid){
        // 
        return  this.afDB.list(place + '/users/'+ userUid+'/myReserves').valueChanges();

    }
    
    public getReserves(place, userUid){
        //get reserves of the geofire
        return  this.afDB.list(place + '/users/'+ userUid+'/availableReserves').valueChanges();

    }


    public getSeenReservesInAvailableReserves(place, userUid){
        //get reserves of the geofire
        return  this.afDB.list(place + '/users/'+ userUid+'/reservesSeenInAvailableReserves').valueChanges();

    }

    public getSeenReservesInAvailableReservesLMU(place, userUid){
        //get reserves of the geofire
        return  this.afDB.list(place + '/users/'+ userUid+'/reservesSeenInAvailableReservesLMU').valueChanges();

    }


    public getOnTrip(place, userUid){
        //get reserves of the geofire
        return  this.afDB.object(place + '/users/'+ userUid+'/onTrip').valueChanges();

    }
    public getMyReserves(place, driverUserUid,reserveId){
        //get reserves inside reserves node
        return  this.afDB.object(place + '/reserves/'+ driverUserUid +'/'+ reserveId+'/').valueChanges();

    }
    public getPendingUsers(place, driverUserUid,reserveId){
        //get reserves inside reserves node
        return  this.afDB.list(place + '/reserves/'+ driverUserUid +'/'+ reserveId+'/pendingUsers').valueChanges();

    }
    public confirmMyExistenceInPendingUsers(place, driverUserUid,reserveId,userUid){
        //get reserves inside reserves node
        return  this.afDB.object(place + '/reserves/'+ driverUserUid +'/'+ reserveId+'/pendingUsers/'+userUid).valueChanges();

    }

    public confirmMyExistenceInPickedupUsers(place, driverId,keyTrip, userId){
        //get reserves inside reserves node
        return  this.afDB.object(place + '/trips/'+driverId+'/'+ keyTrip+'/pickedUpUsers/' + userId).valueChanges();

    }

    public cancelReserve(place, userUid,driverUid,reserveId){
        //eliminate user from reserve in reserve's node        
      this.afDB.database.ref(place + '/reserves/'+ driverUid +'/'+ reserveId+'/pendingUsers/'+userUid).remove();
        //eliminate keyTrip from user's node to eliminate access to that reserve

     }
     public eliminateKeyUser(place, userUid,reserveId){    
      //eliminate keyTrip from user's node to eliminate access to that reserve
    this.afDB.database.ref(place + '/users/'+userUid+'/myReserves/'+ reserveId).remove();

   }
   
     
}
