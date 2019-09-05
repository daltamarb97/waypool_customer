import { AngularFireDatabase } from "@angular/fire/database";
import { Injectable } from "@angular/core";
import { UrlSerializer } from "ionic-angular";
import * as GeoFire from 'geofire';

@Injectable()
export class TripsService {

   
    constructor(public afDB: AngularFireDatabase){ 

       }
       
       public getOnTrip(university,userUid){
        return  this.afDB.object(university+'/users/'+ userUid+'/onTrip/').valueChanges();
       }

    public getMyReservesUser(university, userUid){
        // 
        return  this.afDB.list(university+ '/users/'+ userUid+'/myReserves').valueChanges();

    }
     public getKeyTrip(university, userUid){
      
      return  this.afDB.object(university + '/users/'+ userUid+'/keyTrip').valueChanges();

  }
    public getTripState(university,reserveId,driverId){
    return  this.afDB.object(university+'/tripsState/'+driverId+'/'+reserveId+'/').valueChanges();

  }
    public getReserves(userUid){
        // get reserves from my driver (wrong)
        return  this.afDB.list('/reserves/'+ userUid).valueChanges();
    }
    // public getMyReserves(university, reserveId,driverId){
    public getTrip(university, reserveId,driverId){
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

    public getCancelUsers(university, keyTrip,driverId){
      return  this.afDB.list(university + '/tripsState/'+driverId+'/'+ keyTrip+'/cancelUsers').valueChanges();
  }
    
    public getLastMinuteTripsDEMO(university, driverId, keyTrip){
        return  this.afDB.object(university + '/trips/'+driverId+'/'+ keyTrip).valueChanges();

    }
    public saveKeyTrip(university, userUid,keyTrip,driverId){            
    this.afDB.database.ref(university + '/users/'+userUid+'/keyTrip').update({
      keyTrip:keyTrip,
      driverId:driverId
    });

    }  
     public updateTripState(university, userUid,keyTrip,driverId){
      this.afDB.database.ref(university + '/tripsState/'+driverId+'/'+ keyTrip+'/UserCancelation/'+userUid).update({
        
        userUid:userUid
      });
    }
    public pushItsMePendingUsers(university, userUid,keyTrip,driverId){
      this.afDB.database.ref(university + '/trips/'+driverId+'/'+ keyTrip+'/pendingUsers/'+userUid).update({
        
        itsMe:true
      });
    }
  
    public pushItsMePickedUpUsers(university, userUid,keyTrip,driverId){
      this.afDB.database.ref(university + '/trips/'+driverId+'/'+ keyTrip+'/pickedUpUsers/'+userUid).update({
        
        itsMe:true
      });
    }
      public saveTripOnRecords(university, userUid,trip){
        //save trip in recordTrips
        
      this.afDB.database.ref(university + '/users/'+userUid+'/recordTrips/'+trip.keyTrip).update(trip);
 
     }
     public eliminateTrip(university, userUid){
      //save trip in recordTrips
      
    this.afDB.database.ref(university + '/users/'+userUid+'/trip/').remove();

   }



     joinTrip(university, keyTrip,driverId, userId, origin, destination, name, lastname, phone, note, verifiedPerson){
        this.afDB.database.ref(university + '/trips/' + driverId +'/'+keyTrip+ '/lastMinuteUsers/' + userId).update({
             origin: origin,
             destination: destination,
             name: name,
             lastname: lastname,
             phone: phone,
             userId: userId,
             note:note,
             verifiedPerson: verifiedPerson
        });
    }

    checkIfAcceptedInLMU(university, driverId, keyTrip, userId){
      return this.afDB.object(university + '/trips/' + driverId +'/'+keyTrip+ '/lastMinuteUsers/' + userId).valueChanges();
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


     public eliminateKeyTrip(university, userUid){    
        //eliminate keyTrip from user's node to eliminate access to that reserve
      this.afDB.database.ref(university + '/users/'+userUid+'/keyTrip/').remove();
  
     } 

     public eliminateAvailableReserves(university, userUid){    
      //eliminate keyTrip from user's node to eliminate access to that reserve
    this.afDB.database.ref(university + '/users/'+userUid+'/availableReserves/').remove();

   } 
     
     public eliminateAvailableUsers(university, userUid){    
      //eliminate keyTrip from user's node to eliminate access to that reserve
    this.afDB.database.ref(university + '/users/'+userUid+'/availableReserves/').remove();

   } 
  
     public eraseReserve(university , userUid,reserveId){    
      //eliminate keyTrip from user's node to eliminate access to that reserve
    this.afDB.database.ref(university + '/users/'+userUid+'/myReserves/'+reserveId).remove();

   }

     
   public eliminatingOnTrip(university, userUid){    
    //eliminate keyTrip from tripsReserve node 
  this.afDB.database.ref(university + '/users/'+userUid+'/onTrip').remove();

 }
 public eliminatingSaveTrip(university, userUid){    
 
this.afDB.database.ref(university + '/users/'+userUid+'/saveTrip').remove();

}
public eliminatingCancelTrip(university, userUid){    
 
  this.afDB.database.ref(university + '/users/'+userUid+'/cancelTrip').remove();
  
  }
      
}
