import { AngularFireDatabase } from "@angular/fire/database";
import { Injectable } from "@angular/core";
// import { UrlSerializer } from "ionic-angular";
// import { useAnimation } from "@angular/core/src/animation/dsl";
// import * as firebase from 'firebase';
// import { AngularFireAuth } from "angularfire2/auth";

@Injectable()
export class DriverSendUsersService {

constructor(public afDB: AngularFireDatabase){
              
    }
    public getUsersOnListRide(userUid){
        // Get all the students from the usersListRide
         return  this.afDB.list('/driversTest/'+ userUid +'/tripsTest/usersListRide').valueChanges();
     } 
     public getTripsOfReserves(userUid){
        // Get all the trips the driver have reserve
         return  this.afDB.list('/reservesTest/'+ userUid).valueChanges();
     } 
    public getUsersOnTrip( userUid){
        // Get all the students the driver acepts in myListRidePage to be send to the students
         return  this.afDB.list( '/driversTest/'+ userUid +'/tripsTest/pickingUsers').valueChanges();
     }   

     public getPickUpUsers( userUid){
         //get all the users from the pickUpUsers []
        return  this.afDB.list( '/driversTest/'+ userUid +'/tripsTest/pickedUpUsers').valueChanges();
     }
     public removeReserve(driverId, keyReserve ){
        //remove the reserve done
           this.afDB.database.ref('/reservesTest/'+ driverId + '/' + keyReserve).remove();
           }

           public removeUsersOnListRideTotal( userUid ){
            //send the information of every student the driver acepts in myRide
               this.afDB.database.ref( '/driversTest/'+ userUid +'/tripsTest/usersListRide/').remove();

               }

           public removeUsersOnPickingUsers( userUid,userId ){
            //send the information of every student the driver acepts in myRide
               this.afDB.database.ref( '/driversTest/'+ userUid +'/tripsTest/pickingUsers/'+ userId).remove();
               this.afDB.database.ref( '/usersTest/'+ userId +'/tripsTest/pickingUsers/driver/' + userUid).remove();
               }

    


    public pushPickingUpUsersOnDrivers( userUid,userId ,origin,destination,name,lastname,phone, about){
     //send the information of every student the driver acepts in myRide
        this.afDB.database.ref( '/driversTest/'+ userUid +'/tripsTest/pickingUsers/'+ userId).update(
            {
             origin: origin,
             destination: destination,
             name:name,
             lastname:lastname,
             phone: phone,
             userId:userId,
             about:about
            
            }
            );

        }
        public pushDriverOnUsers( userUid,userId ,origin,destination,name,lastname,phone,price,car,about){
            //send the driver information to the students
            this.afDB.database.ref( '/usersTest/'+ userId +'/tripsTest/pickingUsers/driver/'+ userUid).update(
                {
                 origin: origin,
                 destination: destination,
                 name:name,
                 lastname:lastname,
                 phone: phone,
                 userId:userUid,
                 car:car, 
                 price:price,
                 about:about
                 
                
                }
                );
            }
    
    public pushTripOnRecordDriver(userUid){
        //historial
        this.afDB.database.ref('/driversTest/'+ userUid +'/trips').push();
    }

   public getRecordTrips( userUid){
    return  this.afDB.list( '/driversTest/'+ userUid +'/recordTrips/').valueChanges();

   }

   public badgeTrue(userUid){
       this.afDB.database.ref('/driversTest/'+ userUid).update({
           badgePicking: true
       })
   }

   public badgeFalse(userUid){
    this.afDB.database.ref('/driversTest/'+ userUid).update({
        badgePicking: false
    })
}
public badgeTrueOntrip(userUid){
    this.afDB.database.ref('/driversTest/'+ userUid).update({
        badgeOntrip: true
    })
}

public badgeFalseOntrip(userUid){
 this.afDB.database.ref('/driversTest/'+ userUid).update({
     badgeOntrip: false
 })
}
}

