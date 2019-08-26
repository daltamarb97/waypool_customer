import { AngularFireDatabase } from "@angular/fire/database";
import { Injectable } from "@angular/core";
import { UrlSerializer } from "ionic-angular";
import * as GeoFire from 'geofire';

@Injectable()
export class reservesService {

   
    constructor(public afDB: AngularFireDatabase){ 

       }
       
       public setOnTrip(university, userUid){        
      this.afDB.database.ref(university + '/users/'+userUid).update({
          onTrip:true
        });
 
     }
    public getMyReservesUser(university, userUid){
        //get reserves of that i have enter
        return  this.afDB.list(university + '/users/'+ userUid+'/myReserves').valueChanges();

    }

    public getMyReservesSelected(university, userUid){
        // 
        return  this.afDB.list(university + '/users/'+ userUid+'/myReserves').valueChanges();

    }
    
    public getReserves(university, userUid){
        //get reserves of the geofire
        return  this.afDB.list(university + '/users/'+ userUid+'/availableReserves').valueChanges();

    }
    public getOnTrip(university, userUid){
        //get reserves of the geofire
        return  this.afDB.object(university + '/users/'+ userUid+'/onTrip').valueChanges();

    }
    public getMyReserves(university, driverUserUid,reserveId){
        //get reserves inside reserves node
        return  this.afDB.object(university + '/reserves/'+ driverUserUid +'/'+ reserveId+'/').valueChanges();

    }
    public getPendingUsers(university, driverUserUid,reserveId){
        //get reserves inside reserves node
        return  this.afDB.list(university + '/reserves/'+ driverUserUid +'/'+ reserveId+'/pendingUsers').valueChanges();

    }
    public confirmMyExistenceInPendingUsers(university, driverUserUid,reserveId,userUid){
        //get reserves inside reserves node
        return  this.afDB.object(university + '/reserves/'+ driverUserUid +'/'+ reserveId+'/pendingUsers/'+userUid).valueChanges();

    }

    public confirmMyExistenceInPickedupUsers(university, driverId,keyTrip, userId){
        //get reserves inside reserves node
        return  this.afDB.object(university + '/trips/'+driverId+'/'+ keyTrip+'/pickedUpUsers/' + userId).valueChanges();

    }

    public cancelReserve(university, userUid,driverUid,reserveId){
        //eliminate user from reserve in reserve's node        
      this.afDB.database.ref(university + '/reserves/'+ driverUid +'/'+ reserveId+'/pendingUsers/'+userUid).remove();
        //eliminate keyTrip from user's node to eliminate access to that reserve

     }
     public eliminateKeyUser(university, userUid,reserveId){    
      //eliminate keyTrip from user's node to eliminate access to that reserve
    this.afDB.database.ref(university + '/users/'+userUid+'/myReserves/'+ reserveId).remove();

   }
   
     
}
