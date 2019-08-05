import { AngularFireDatabase } from "@angular/fire/database";
import { Injectable } from "@angular/core";
import { UrlSerializer } from "ionic-angular";
import * as GeoFire from 'geofire';

@Injectable()
export class TripsService {

   
    constructor(public afDB: AngularFireDatabase){ 

       }
       

    public getMyReservesUser(university, userUid){
        // 
        return  this.afDB.list(university+ '/users/'+ userUid+'/myReserves').valueChanges();

    }
    public getReserves(userUid){
        // get reserves from my driver (wrong)
        return  this.afDB.list('/reserves/'+ userUid).valueChanges();

    }
    public getMyReserves(university, reserveId,driverId){
        //get reserves inside trip's node
        return  this.afDB.object(university + '/trips/'+driverId+'/'+reserveId+'/').valueChanges();

    }
    public getPendingUsers(university, keyTrip,driverId){
        //get trip in Trip's node
        return  this.afDB.list(university + '/trips/'+driverId+'/'+ keyTrip+'/pendingUsers').valueChanges();
    } 
    public getPickedUpUsers(university, keyTrip,driverId){
      //get trip in Trip's node
      return  this.afDB.list(university + '/trips/'+driverId+'/'+ keyTrip+'/pickedUpUsers').valueChanges();
    } 
    public getLastMinuteTripsDEMO(university, driverId){
        return  this.afDB.list(university + '/trips/'+driverId).valueChanges();

    }
   
      public saveTripOnRecords(university, userUid,trip){
        //save trip in recordTrips
        
      this.afDB.database.ref(university + '/users/'+userUid+'/recordTrips/'+trip.keyTrip).update(trip);
 
     }
     joinTrip(keyTrip,driverId, userId, origin, destination, name, lastname, phone, note){
        this.afDB.database.ref('/trips/' + driverId +'/'+keyTrip+ '/lastMinuteUsers/' + userId).update({
             origin: origin,
             destination: destination,
             name: name,
             lastname: lastname,
             phone: phone,
             userId: userId,
             note:note,
        });
    }
    public cancelTrip(university, userUid,driverUid,tripId){
        //eliminate user from reserve in reserve's node        
      this.afDB.database.ref(university + '/trips/'+ driverUid +'/'+ tripId+'/pendingUsers/'+userUid).remove();
        //eliminate keyTrip from user's node to eliminate access to that reserve

     }
     public eliminateKeyUser(university, userUid,reserveId){    
        //eliminate keyTrip from user's node to eliminate access to that reserve
      this.afDB.database.ref(university +'/users/'+userUid+'/myReserves/'+ reserveId).remove();
  
     }
      
}
