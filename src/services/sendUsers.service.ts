import { AngularFireDatabase } from "@angular/fire/database";
import { Injectable } from "@angular/core";
import { UrlSerializer } from "ionic-angular";
import { useAnimation } from "@angular/core/src/animation/dsl";
import * as firebase from 'firebase';
import { AngularFireAuth } from "angularfire2/auth";

@Injectable()
export class sendUsersService {
userDriver;
constructor(public afDB: AngularFireDatabase, private afAuth: AngularFireAuth){
              
    }
    
    public getUsersOnTrip(userId){
        // Get all the students the driver acepts in myRidePage to be send to the students
         return  this.afDB.list('/drivers/'+ userId +'/trips/pickingUsers').valueChanges();
     }
     public getPickedUpUsers(userId){
        // Get all the students the driver acepts in myRidePage to be send to the students
         return  this.afDB.list('/drivers/'+ userId +'/trips/pickedUpUsers').valueChanges();
     }

     public getMyUsersOnTrip(userUid){
        // Get all the students the driver acepts in myRidePage to be send to the students
         return  this.afDB.list('/users/'+ userUid +'/trips/pickingUsers').valueChanges();
     }   
     public getMyDriverOnTrip(userUid){
        // Get the driver on trip 
         return  this.afDB.list('/users/'+ userUid +'/trips/pickingUsers/driver/').valueChanges();
     }
    
     public PushUserListRide(DriverUserId,userUid,myUser){
         //send the user to the driver
        this.afDB.database.ref('/drivers/'+ DriverUserId +'/trips/usersListRide/'+ userUid ).update(myUser);

     }


     public cancelTripUserOr(DriverUserId,userUid){
//        
       this.afDB.database.ref('/drivers/'+ DriverUserId +'/trips/pickingUsers/'+ userUid +'/').remove();

       this.afDB.database.ref('/users/'+ userUid +'/trips/pickingUsers').remove();

       this.afDB.database.ref('users/' + userUid+'/trips/onTrip').remove()

       this.afDB.database.ref('users/' + userUid+'/trips/driverListRide').remove();

       this.afDB.database.ref('geofireOr/'+userUid).remove();

    }


    public cancelTripUserDest(DriverUserId,userUid){
        //        
               this.afDB.database.ref('/drivers/'+ DriverUserId +'/trips/pickingUsers/'+ userUid +'/').remove();
        
               this.afDB.database.ref('/users/'+ userUid +'/trips/pickingUsers').remove();
        
               this.afDB.database.ref('users/' + userUid+'/trips/onTrip').remove()
        
               this.afDB.database.ref('users/' + userUid+'/trips/driverListRide').remove();
        
               this.afDB.database.ref('geofireDest/'+userUid).remove();
        
            }
   
    public getRecordTrips(university, userUid){
        return  this.afDB.list(university + '/users/'+ userUid +'/recordTrips/').valueChanges();
    
       }
}

