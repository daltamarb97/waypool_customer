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
         return  this.afDB.list('/drivers/'+ userId +'/tripsTest/pickingUsers').valueChanges();
     }
     public getPickedUpUsers(userId){
        // Get all the students the driver acepts in myRidePage to be send to the students
         return  this.afDB.list('/drivers/'+ userId +'/tripsTest/pickedUpUsers').valueChanges();
     }

     public getMyUsersOnTrip(userUid){
        // Get all the students the driver acepts in myRidePage to be send to the students
         return  this.afDB.list('/users/'+ userUid +'/tripsTest/pickingUsers').valueChanges();
     }   
     public getMyDriverOnTrip(userUid){
        // Get the driver on trip 
         return  this.afDB.list('/users/'+ userUid +'/tripsTest/pickingUsers/driver/').valueChanges();
     }
    
     public PushUserListRide(DriverUserId,userUid,myUser){
         //send the user to the driver
        this.afDB.database.ref('/drivers/'+ DriverUserId +'/tripsTest/usersListRide/'+ userUid ).update(myUser);

     }


     public cancelTripUserOr(DriverUserId,userUid){
//        
       this.afDB.database.ref('/drivers/'+ DriverUserId +'/tripsTest/pickingUsers/'+ userUid +'/').remove();

       this.afDB.database.ref('/users/'+ userUid +'/tripsTest/pickingUsers').remove();

       this.afDB.database.ref('users/' + userUid+'/tripsTest/onTrip').remove()

       this.afDB.database.ref('users/' + userUid+'/tripsTest/driverListRide').remove();

       this.afDB.database.ref('geofireOr/'+userUid).remove();

    }


    public cancelTripUserDest(DriverUserId,userUid){
        //        
               this.afDB.database.ref('/drivers/'+ DriverUserId +'/tripsTest/pickingUsers/'+ userUid +'/').remove();
        
               this.afDB.database.ref('/users/'+ userUid +'/tripsTest/pickingUsers').remove();
        
               this.afDB.database.ref('users/' + userUid+'/tripsTest/onTrip').remove()
        
               this.afDB.database.ref('users/' + userUid+'/tripsTest/driverListRide').remove();
        
               this.afDB.database.ref('geofireDest/'+userUid).remove();
        
            }
   
    public getRecordTrips( userUid){
        return  this.afDB.list( '/usersTest/'+ userUid +'/recordTrips/').valueChanges();
    
       }
}

