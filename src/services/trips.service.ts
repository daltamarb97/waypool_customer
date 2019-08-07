import { AngularFireDatabase } from "@angular/fire/database";
import { Injectable } from "@angular/core";
import { UrlSerializer } from "ionic-angular";
import * as GeoFire from 'geofire';

@Injectable()
export class TripsService {

   
    constructor(public afDB: AngularFireDatabase){ 

       }
       
       public getOnTrip(userUid){
        return  this.afDB.object('/users/'+ userUid+'/onTrip/onTrip').valueChanges();

       }
      
    public getMyReservesUser(userUid){
       
        return  this.afDB.list('/users/'+ userUid+'/myReserves').valueChanges();

    }
     public getKeyTrip(userUid){
      
      return  this.afDB.object('/users/'+ userUid+'/keyTrip').valueChanges();

  }
    public getTripState(reserveId,driverId){
    return  this.afDB.object('/tripsState/'+driverId+'/'+reserveId+'/').valueChanges();

  }
    public getReserves(userUid){
        // get reserves from my driver (wrong)
        return  this.afDB.list('/reserves/'+ userUid).valueChanges();
    }
    public getTrip(reserveId,driverId){
        //get reserves inside trip's node
        return  this.afDB.object('/trips/'+driverId+'/'+reserveId+'/').valueChanges();

    }
    public getPendingUsers(keyTrip,driverId){
        return  this.afDB.list('/trips/'+driverId+'/'+ keyTrip+'/pendingUsers').valueChanges();
    } 
    public getCancelUsers(keyTrip,driverId){
      return  this.afDB.list('/tripsState/'+driverId+'/'+ keyTrip+'/cancelUsers').valueChanges();
  }
    public getPickedUpUsers(keyTrip,driverId){
      return  this.afDB.list('/trips/'+driverId+'/'+ keyTrip+'/pickedUpUsers').valueChanges();
    } 
    public getLastMinuteTripsDEMO(driverId){
        return  this.afDB.list('/trips/'+driverId).valueChanges();

    }
    public saveKeyTrip(userUid,keyTrip,driverId){            
    this.afDB.database.ref('/users/'+userUid+'/keyTrip').update({
      keyTrip:keyTrip,
      driverId:driverId
    });

    }  
     public updateTripState(userUid,keyTrip,driverId){
      this.afDB.database.ref('/tripsState/'+driverId+'/'+ keyTrip+'/UserCancelation/'+userUid).update({
        
        userUid:userUid
      });
    }
      public saveTripOnRecords(userUid,trip){
        //save trip in recordTrips
        
      this.afDB.database.ref('/users/'+userUid+'/recordTrips/'+trip.keyTrip).update(trip);
 
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
    public cancelTrip(userUid,driverUid,tripId){
        //eliminate user from reserve in reserve's node        
      this.afDB.database.ref('/trips/'+ driverUid +'/'+ tripId+'/pendingUsers/'+userUid).remove();
        //eliminate keyTrip from user's node to eliminate access to that reserve

     }
     public eliminateKeyTrip(userUid){    
        //eliminate keyTrip from user's node to eliminate access to that reserve
      this.afDB.database.ref('/users/'+userUid+'/keyTrip/').remove();
  
     } 
     public eraseReserve(userUid,reserveId){    
      //eliminate keyTrip from user's node to eliminate access to that reserve
    this.afDB.database.ref('/users/'+userUid+'/myReserves/'+reserveId).remove();

   }

     
   public eliminatingOnTrip(userUid){    
    //eliminate keyTrip from tripsReserve node 
  this.afDB.database.ref('/users/'+userUid+'/onTrip').remove();

 }

      
}
