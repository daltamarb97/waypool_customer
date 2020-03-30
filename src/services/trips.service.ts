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
       public getSaveTrip(userUid){
        return  this.afDB.object('/usersTest/'+ userUid+'/saveTrip/').valueChanges();
       }
    public getMyReservesUser( userUid){
        // 
        return  this.afDB.list( '/usersTest/'+ userUid+'/myReserves').valueChanges();

    }
     public getKeyTrip( userUid){
      
      return  this.afDB.object('/usersTest/'+ userUid+'/keyTrip').valueChanges();

  }
    public getTripState(reserveId,driverId){
    return  this.afDB.object('/tripsState/'+driverId+'/'+reserveId+'/').valueChanges();

  }
    public getReserves(userUid){
        // get reserves from my driver (wrong)
        return  this.afDB.list('/reservesTest/'+ userUid).valueChanges();
    }
    // public getMyReserves( reserveId,driverId){
    public getTrip( reserveId,driverId){
        //get reserves inside trip's node
        return  this.afDB.object('/tripsTest/'+driverId+'/'+reserveId+'/').valueChanges();

    }
    public getPendingUsers( keyTrip,driverId){
        //get trip in Trip's node
        return  this.afDB.list('/tripsTest/'+driverId+'/'+ keyTrip+'/pendingUsers').valueChanges();
    } 
    public getPickedUpUsers( keyTrip,driverId){
      //get trip in Trip's node
      return  this.afDB.list('/tripsTest/'+driverId+'/'+ keyTrip+'/pickedUpUsers').valueChanges();
    }

    public getCancelUsers( keyTrip,driverId){
      return  this.afDB.list('/tripsState/'+driverId+'/'+ keyTrip+'/cancelUsers').valueChanges();
  }
    
    public getLastMinuteTripsDEMO( driverId, keyTrip){
        return  this.afDB.object('/tripsTest/'+driverId+'/'+ keyTrip).valueChanges();

    }
    public saveKeyTrip( userUid,keyTrip,driverId){            
    this.afDB.database.ref('/usersTest/'+userUid+'/keyTrip').update({
      keyTrip:keyTrip,
      driverId:driverId
    });

    }  
     public updateTripState( userUid,keyTrip,driverId){
      this.afDB.database.ref('/tripsState/'+driverId+'/'+ keyTrip+'/UserCancelation/'+userUid).update({
        
        userUid:userUid
      });
    }
    public pushItsMePendingUsers( userUid,keyTrip,driverId){
      this.afDB.database.ref('/tripsTest/'+driverId+'/'+ keyTrip+'/pendingUsers/'+userUid).update({
        
        itsMe:true
      });
    }
  
    public pushItsMePickedUpUsers( userUid,keyTrip,driverId){
      this.afDB.database.ref('/tripsTest/'+driverId+'/'+ keyTrip+'/pickedUpUsers/'+userUid).update({
        
        itsMe:true
      });
    }
      public saveTripOnRecords( userUid,trip){
        //save trip in recordTrips
        
      this.afDB.database.ref('/usersTest/'+userUid+'/recordTrips/'+trip.keyTrip).update(trip);
 
     }
     public eliminateTrip( userUid){
      //save trip in recordTrips
      
    this.afDB.database.ref('/usersTest/'+userUid+'/trip/').remove();

   }



     joinTrip( keyTrip,driverId, userId, origin, destination, name, lastname, phone, verifiedPerson, distance){
        this.afDB.database.ref('/tripsTest/' + driverId +'/'+keyTrip+ '/lastMinuteUsers/' + userId).update({
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


    getOutFromLMU( keyTrip,driverId, userId){
      this.afDB.database.ref('/tripsTest/' + driverId +'/'+keyTrip+ '/lastMinuteUsers/' + userId).remove();
  }

    checkIfAcceptedInLMU( driverId, keyTrip, userId){
      return this.afDB.object('/tripsTest/' + driverId +'/'+keyTrip+ '/lastMinuteUsers/' + userId).valueChanges();
    }
    public cancelTrip( userUid,driverUid,tripId){
        //eliminate user from reserve in reserve's node        
      this.afDB.database.ref('/tripsTest/'+ driverUid +'/'+ tripId+'/pendingUsers/'+userUid).remove();
        //eliminate keyTrip from user's node to eliminate access to that reserve

     }
     public eliminateKeyUser( userUid,reserveId){    
        //eliminate keyTrip from user's node to eliminate access to that reserve
      this.afDB.database.ref('/usersTest/'+userUid+'/myReserves/'+ reserveId).remove();
     }


     public eliminateKeyTrip( userUid){    
        //eliminate keyTrip from user's node to eliminate access to that reserve
      this.afDB.database.ref('/usersTest/'+userUid+'/keyTrip/').remove();
  
     } 

     public eliminateAvailableReserves( userUid){    
      //eliminate keyTrip from user's node to eliminate access to that reserve
    this.afDB.database.ref( '/usersTest/'+userUid+'/availableReserves/').remove();

   }
   
   
   public setClearToDeleteDriver( driverUid, keyTrip){    
    //eliminate keyTrip from user's node to eliminate access to that reserve
  this.afDB.database.ref('/tripsTest/'+driverUid+'/'+ keyTrip).update({
    clearToDeleteDriver: true
  });

 }
   
     
     public eliminateAvailableUsers( userUid){    
      //eliminate keyTrip from user's node to eliminate access to that reserve
    this.afDB.database.ref( '/usersTest/'+userUid+'/availableReserves/').remove();

   } 

   public eliminateAvailableCrews( userUid){    
    //eliminate keyTrip from user's node to eliminate access to that reserve
  this.afDB.database.ref( '/usersTest/'+userUid+'/availableCrews/').remove();

 } 



   public eliminateSeenAvailableReserves( userUid){    
    //eliminate keyTrip from user's node to eliminate access to that reserve
  this.afDB.database.ref('/usersTest/'+userUid+'/reservesSeenInAvailableReserves/').remove();

 } 


 public eliminateSeenAvailableCrews( userUid){    
  //eliminate keyTrip from user's node to eliminate access to that reserve
this.afDB.database.ref('/usersTest/'+userUid+'/crewsSeenInAvailableCrews/').remove();

} 



 public eliminateSeenAvailableReservesRoute( userUid){    
  //eliminate keyTrip from user's node to eliminate access to that reserve
this.afDB.database.ref('/usersTest/'+userUid+'/reservesSeenInAvailableReservesRoute/').remove();

} 


public eliminateSeenAvailableCrewsRoute( userUid){    
  //eliminate keyTrip from user's node to eliminate access to that reserve
this.afDB.database.ref('/usersTest/'+userUid+'/crewsSeenInAvailableCrewsRoute/').remove();

}


 public eliminateSeenAvailableReservesLMU( userUid){    
  //eliminate keyTrip from user's node to eliminate access to that reserve
this.afDB.database.ref('/usersTest/'+userUid+'/reservesSeenInAvailableReservesLMU/').remove();

} 
  
     public eraseReserve( userUid,reserveId){    
      //eliminate keyTrip from user's node to eliminate access to that reserve
    this.afDB.database.ref('/usersTest/'+userUid+'/myReserves/'+reserveId).remove();

   }

     
   public eliminatingOnTrip( userUid){    
    //eliminate keyTrip from tripsReserve node 
  this.afDB.database.ref('/usersTest/'+userUid+'/onTrip').remove();

 }
 public eliminatingSaveTrip( userUid){    
 
this.afDB.database.ref('/usersTest/'+userUid+'/saveTrip').remove();

}
public eliminatingCancelTrip( userUid){    
 
  this.afDB.database.ref('/usersTest/'+userUid+'/cancelTrip').remove();
  
  }
 public recordTripsInBike(userUid,date,route,or,dest,distance){
  this.afDB.database.ref('/usersTest/'+userUid+'/recordTripBicycle/').push({
   
    date:date,
    route:route,
    or:or,
    dest:dest,
    distance:distance
    
  });

 }     
}
