import { AngularFireDatabase } from "@angular/fire/database";
import { Injectable } from "@angular/core";
import { UrlSerializer, AlertController } from "ionic-angular";
import * as GeoFire from 'geofire';
import { listLazyRoutes } from "@angular/compiler/src/aot/lazy_routes";

@Injectable()
export class TripsService {

   
    constructor(public afDB: AngularFireDatabase, public alertCtrl: AlertController){ 

       }
       
       public getOnTrip(userUid){
        return  this.afDB.object('/usersTest/'+ userUid+'/onTrip/').valueChanges();
       }
       public getSaveTrip(place,userUid){
        return  this.afDB.object(place+'/users/'+ userUid+'/saveTrip/').valueChanges();
       }
    public getMyReservesUser(place, userUid){
        // 
        return  this.afDB.list(place+ '/users/'+ userUid+'/myReserves').valueChanges();

    }
     public getKeyTrip(place, userUid){
      
      return  this.afDB.object(place + '/users/'+ userUid+'/keyTrip').valueChanges();

  }
    public getTripState(place,reserveId,driverId){
    return  this.afDB.object(place+'/tripsState/'+driverId+'/'+reserveId+'/').valueChanges();

  }
    public getReserves(userUid){
        // get reserves from my driver (wrong)
        return  this.afDB.list('/reserves/'+ userUid).valueChanges();
    }
    // public getMyReserves(place, reserveId,driverId){
    public getTrip(place, reserveId,driverId){
        //get reserves inside trip's node
        return  this.afDB.object(place + '/trips/'+driverId+'/'+reserveId+'/').valueChanges();

    }
    public getPendingUsers(place, keyTrip,driverId){
        //get trip in Trip's node
        return  this.afDB.list(place + '/trips/'+driverId+'/'+ keyTrip+'/pendingUsers').valueChanges();
    } 
    public getPickedUpUsers(place, keyTrip,driverId){
      //get trip in Trip's node
      return  this.afDB.list(place + '/trips/'+driverId+'/'+ keyTrip+'/pickedUpUsers').valueChanges();
    }

    public getCancelUsers(place, keyTrip,driverId){
      return  this.afDB.list(place + '/tripsState/'+driverId+'/'+ keyTrip+'/cancelUsers').valueChanges();
  }
    
    public getLastMinuteTripsDEMO(place, driverId, keyTrip){
        return  this.afDB.object(place + '/trips/'+driverId+'/'+ keyTrip).valueChanges();

    }
    public saveKeyTrip(place, userUid,keyTrip,driverId){            
    this.afDB.database.ref(place + '/users/'+userUid+'/keyTrip').update({
      keyTrip:keyTrip,
      driverId:driverId
    });

    }  
     public updateTripState(place, userUid,keyTrip,driverId){
      this.afDB.database.ref(place + '/tripsState/'+driverId+'/'+ keyTrip+'/UserCancelation/'+userUid).update({
        
        userUid:userUid
      });
    }
    public pushItsMePendingUsers(place, userUid,keyTrip,driverId){
      this.afDB.database.ref(place + '/trips/'+driverId+'/'+ keyTrip+'/pendingUsers/'+userUid).update({
        
        itsMe:true
      });
    }
  
    public pushItsMePickedUpUsers(place, userUid,keyTrip,driverId){
      this.afDB.database.ref(place + '/trips/'+driverId+'/'+ keyTrip+'/pickedUpUsers/'+userUid).update({
        
        itsMe:true
      });
    }
      public saveTripOnRecords( userUid,trip){
        //save trip in recordTrips
        
      this.afDB.database.ref('/usersTest/'+userUid+'/recordTrips/'+trip.keyTrip).update(trip);
 
     }
     public eliminateTrip(place, userUid){
      //save trip in recordTrips
      
    this.afDB.database.ref(place + '/users/'+userUid+'/trip/').remove();

   }



     joinTrip(place, keyTrip,driverId, userId, origin, destination, name, lastname, phone, verifiedPerson, distance){
        this.afDB.database.ref(place + '/trips/' + driverId +'/'+keyTrip+ '/lastMinuteUsers/' + userId).update({
             origin: origin,
             destination: destination,
             name: name,
             lastname: lastname,
             phone: phone,
             userId: userId,
             verifiedPerson: verifiedPerson,
             distance: distance
        });
    }


    getOutFromLMU(place, keyTrip,driverId, userId){
      this.afDB.database.ref(place + '/trips/' + driverId +'/'+keyTrip+ '/lastMinuteUsers/' + userId).remove();
  }

    checkIfAcceptedInLMU(place, driverId, keyTrip, userId){
      return this.afDB.object(place + '/trips/' + driverId +'/'+keyTrip+ '/lastMinuteUsers/' + userId).valueChanges();
    }
    public cancelTrip(place, userUid,driverUid,tripId){
        //eliminate user from reserve in reserve's node        
      this.afDB.database.ref(place + '/trips/'+ driverUid +'/'+ tripId+'/pendingUsers/'+userUid).remove();
        //eliminate keyTrip from user's node to eliminate access to that reserve

     }
     public eliminateKeyUser(place, userUid,reserveId){    
        //eliminate keyTrip from user's node to eliminate access to that reserve
      this.afDB.database.ref(place +'/users/'+userUid+'/myReserves/'+ reserveId).remove();
     }


     public eliminateKeyTrip(place, userUid){    
        //eliminate keyTrip from user's node to eliminate access to that reserve
      this.afDB.database.ref(place + '/users/'+userUid+'/keyTrip/').remove();
  
     } 

     public eliminateAvailableReserves( userUid){    
      //eliminate keyTrip from user's node to eliminate access to that reserve
    this.afDB.database.ref( '/usersTest/'+userUid+'/availableReserves/').remove();

   }
   
   
   public setClearToDeleteDriver(place, driverUid, keyTrip){    
    //eliminate keyTrip from user's node to eliminate access to that reserve
  this.afDB.database.ref(place + '/trips/'+driverUid+'/'+ keyTrip).update({
    clearToDeleteDriver: true
  });

 }
   
     
     public eliminateAvailableUsers( userUid){    
      //eliminate keyTrip from user's node to eliminate access to that reserve
    this.afDB.database.ref( '/usersTest/'+userUid+'/availableReserves/').remove();

   } 


   public eliminateSeenAvailableReserves( userUid){    
    //eliminate keyTrip from user's node to eliminate access to that reserve
  this.afDB.database.ref('/usersTest/'+userUid+'/reservesSeenInAvailableReserves/').remove();

 } 



 public eliminateSeenAvailableReservesRoute( userUid){    
  //eliminate keyTrip from user's node to eliminate access to that reserve
this.afDB.database.ref('/usersTest/'+userUid+'/reservesSeenInAvailableReservesRoute/').remove();

} 


 public eliminateSeenAvailableReservesLMU(place, userUid){    
  //eliminate keyTrip from user's node to eliminate access to that reserve
this.afDB.database.ref(place + '/users/'+userUid+'/reservesSeenInAvailableReservesLMU/').remove();

} 
  
     public eraseReserve(place , userUid,reserveId){    
      //eliminate keyTrip from user's node to eliminate access to that reserve
    this.afDB.database.ref(place + '/users/'+userUid+'/myReserves/'+reserveId).remove();

   }

     
   public eliminatingOnTrip(place, userUid){    
    //eliminate keyTrip from tripsReserve node 
  this.afDB.database.ref(place + '/users/'+userUid+'/onTrip').remove();

 }
 public eliminatingSaveTrip( userUid){    
 
this.afDB.database.ref('/usersTest/'+userUid+'/saveTrip').remove();

}
public eliminatingCancelTrip(place, userUid){    
 
  this.afDB.database.ref(place + '/users/'+userUid+'/cancelTrip').remove();
  
  }
 public recordTripsInBike(place,userUid,date,route,or,dest,distance){
  this.afDB.database.ref(place + '/users/'+userUid+'/recordTripBicycle/').push({
   
    date:date,
    route:route,
    or:or,
    dest:dest,
    distance:distance
    
  });

 }     
}
