import { AngularFireDatabase } from "@angular/fire/database";
import { Injectable } from "@angular/core";
// import { UrlSerializer } from "ionic-angular";
// import { useAnimation } from "@angular/core/src/animation/dsl";
// import * as firebase from 'firebase';
// import { AngularFireAuth } from "angularfire2/auth";

@Injectable()
export class DriverSendCoordsService {

constructor(public afDB: AngularFireDatabase){
              
    }
    
    public getPendingUsers( userUid,pushKey){
        return  this.afDB.list( '/reservesTest/'+ userUid +'/'+pushKey+'/pendingUsers').valueChanges();
    }
    public getGroupPendingUsers( userUid,pushKey){
        return  this.afDB.list( 'crewTest/'+ userUid +'/'+pushKey+'/pendingUsers').valueChanges();
    }

    public confirmIfUsersIsStillInLMU( driverId, keyTrip, userId){
        return this.afDB.object( '/tripsTest/' + driverId +'/'+keyTrip+ '/lastMinuteUsers/' + userId).valueChanges();
    }
    public getSpecificReserves(userUid,pushKey){
        return  this.afDB.object('/reservesTest/'+ userUid +'/'+pushKey).valueChanges();
    } 
    public eraseUser( userId,DriverUid,pushKey){
        this.afDB.database.ref( '/reservesTest/' + DriverUid+'/'+ pushKey+'/pendingUsers/'+userId).remove()
    }


    public saveTripOnRecords( userUid,trip){
        //save trip in recordTrips
        
      this.afDB.database.ref( '/usersTest/'+userUid+'/recordTrips/'+trip.keyTrip).update(trip);
 
     }
     
    public getDestination( user){
        return  this.afDB.list( '/driversTest/'+ user +'/tripsTest/destination').valueChanges();
    } 
    public getOrigin( user){
        return  this.afDB.list( '/driversTest/'+ user +'/tripsTest/origin').valueChanges();
    }     
       public pushcoordinatesReserves(user , dest, or){
     
    this.afDB.database.ref('driversTest/'+ user+'/Reserves').push({
        orReserve: or,
        destReserve: dest,
        
        });
             
            
        }
   public pushcoordinatesDrivers(user , dest, or){
     
    this.afDB.database.ref('/driversTest/'+ user+'/trips').update({
        origin: or,
        destination: dest,
        
        });
             
            
        }
    public recordTripOnDriver( userUid,trip){
      

        this.afDB.database.ref( '/driversTest/'+ userUid + '/recordTrips/').push(trip);

    }
    public recordTripOnUser( userDriverUid,trip){
      
     

        this.afDB.database.ref( '/usersTest/'+ userDriverUid + '/recordTrips/').push(trip);
        
    }
    public recordTripOnWaypool( trip){ 
     

        this.afDB.database.ref( '/allTrips/').push(trip);
        
    }

  
    public timeOfPickedUpUser(userUid,date){
                //set time when user is picked up in user's trips

        this.afDB.database.ref('/usersTest/'+ userUid + '/tripsTest/').update({
            pickedUpTime:date
        });

    }
    public timeOfPickedUpDriver(userDriverUid,date,userUid){
        //set time when user is picked up in driver's trips
        this.afDB.database.ref('/driversTest/'+ userDriverUid + '/tripsTest/pickedUpUsers/'+userUid).update({
            pickedUpTime:date
        });

    }
    
    timeOfDestinationUser(userUid,date){
        this.afDB.database.ref('/usersTest/'+ userUid + '/tripsTest/').update({
            DestinationTime:date
        });
    }
    pushPriceOnUser(userDriverUid,userUid,price){
        this.afDB.database.ref('/driversTest/'+ userDriverUid + '/tripsTest/pickedUpUsers/'+userUid).update({
            price:price
        });
    }

    public updateGeolocationOrigin(user,origin){
        this.afDB.database.ref('driversTest' + user+'/trips').update({
            origin:origin
        })

    }
    public endTripDriverPickingUsers( DriverUid){
        this.afDB.database.ref( '/driversTest/' + DriverUid+'/tripsTest/pickingUsers').remove()
    }

    public eraseChatsUsers( userId,DriverUid){
        this.afDB.database.ref( 'driversTest' + DriverUid+'/tripsTest/pickingUsers/'+userId+'/chat').remove()
    }
    
    public endTripDriverPickedUpUsers( DriverUid){
        this.afDB.database.ref( '/driversTest/' + DriverUid+'/tripsTest/pickedUpUsers').remove()
    }
    
    public endTripUserPickingUsers(userUid){
        this.afDB.database.ref('users/' + userUid+'/tripsTest/pickingUsers').remove()
    }
    public endTripUserPickedUpUsers(place , userUid){
        this.afDB.database.ref( '/usersTest/' + userUid+'/tripsTest/pickedUpUsers').remove()
    }
    public endTripUserOnTripInstance( userUid){
        this.afDB.database.ref( '/usersTest/' + userUid+'/tripsTest/onTrip').remove()
    }
    public endTripUserPickupInstance( userUid){
        this.afDB.database.ref( '/usersTest/' + userUid+'/tripsTest/pickedUp').remove()
    }
    public endTripUserDriverListRide( userUid){
        this.afDB.database.ref( '/usersTest/' + userUid+'/tripsTest/driverListRide').remove()
    }
    public pickUp(DriverUid,userId,user){
       

       // add the driver to pickedUpUsers 
       this.afDB.database.ref('/driversTest/'+ DriverUid +'/tripsTest/pickedUpUsers/'+ userId).update(user);

    }

    // TODO: DRIVER NO PUEDE ENTRAR TODO, SOLO DRIVERINFO (UNA PARTE DEL DRIVER, PREGUNTAR DANIEL QUE INFO)
    public addReserve(driverId, name, lastname, car, dest, or, note, price, currentHour, startHour, geofireKey, type){
        this.afDB.database.ref('/reservesTest/'+ driverId).push({
            name:name,
            lastname:lastname,
            car:car,
            destination:dest,
            origin:or,
            note:note,
            price:price,
            currentHour:currentHour,
            startHour:startHour,
            geofireKey: geofireKey,
            type: type,
            // driver:driver

        }).then((snap)=>{
            const key = snap.key;
            this.afDB.database.ref('/reservesTest/'+ driverId + '/' + key).update({
                keyTrip: key 
            })
            this.afDB.database.ref('/driversTest/' + driverId).update({
                keyLastReserve: key
            })
            console.log(' keylastreserve');
        })
    }


    public pickUpInstance(userId){       

        // driver add pickup instance to the user when picked up
        this.afDB.database.ref('/usersTest/'+ userId +'/trips').update({
            pickedUp:true
        });
 
     }

     public eliminateOnTrip(userId){
        this.afDB.database.ref('/driversTest/'+ userId ).update({
            onTrip:false
        });
    }

    public eliminateOnTripUser(userId){
        this.afDB.database.ref('/usersTest/'+ userId + '/trips' ).update({
            onTrip:false
        });
    }

    public pushOnTripFinalUser( userId){
        this.afDB.database.ref( '/usersTest/'+ userId ).update({
            onTripFinal: true
        });
    }


    public eliminatePickingUsers(DriverUid,userId){
      

               //eliminate the user from pickingUsers
        this.afDB.database.ref('/driversTest/'+ DriverUid +'/tripsTest/pickingUsers/'+ userId).remove();
    }

    public eliminatePickingUsersUser(userId){
 this.afDB.database.ref('/usersTest/'+ userId + '/tripsTest/pickingUsers').remove();
}

    sumTotal(trip,total){
      total = total + trip;
    
      }
 
}

