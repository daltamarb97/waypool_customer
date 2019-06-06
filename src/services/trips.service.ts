import { AngularFireDatabase } from "@angular/fire/database";
import { Injectable } from "@angular/core";
import { UrlSerializer } from "ionic-angular";
import * as GeoFire from 'geofire';

@Injectable()
export class TripsService {

   
    constructor(public afDB: AngularFireDatabase){ 

       }
       

    public getMyReservesUser(userUid){
        // 
        return  this.afDB.list('/users/'+ userUid+'/myReserves').valueChanges();

    }
    public getReserves(userUid){
        // get reserves from my driver (wrong)
        return  this.afDB.list('/reserves/'+ userUid).valueChanges();

    }
    public getMyReserves(reserveId,driverId){
        //get reserves inside reserves node
        return  this.afDB.object('/trips/'+driverId+'/'+reserveId+'/').valueChanges();

    }
    public getPendingUsers(keyTrip,driverId){
        //get trip in Trip's node
        return  this.afDB.list('/trips/'+driverId+'/'+ keyTrip+'/pendingUsers').valueChanges();
    } 
    public getPickedUpUsers(keyTrip,driverId){
      //get trip in Trip's node
      return  this.afDB.list('/trips/'+driverId+'/'+ keyTrip+'/pickedUpUsers').valueChanges();
  } 
}
