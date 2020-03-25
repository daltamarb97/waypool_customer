import { AngularFireDatabase } from "@angular/fire/database";
import { Injectable } from "@angular/core";
import { UrlSerializer } from "ionic-angular";
import * as GeoFire from 'geofire';

@Injectable()
export class sendCoordsService {

   
    constructor(public afDB: AngularFireDatabase){    }
    //cant use this because it gets your same adress
    public getDestination(user){
        return  this.afDB.list('/driversTest/'+ user +'/tripsTest/destination').valueChanges();
    } 
    public getPendingUsers(driverUid,pushKey,){
        return  this.afDB.list('/reservesTest/'+ driverUid +'/'+pushKey+'/pendingUsers').valueChanges();
    }

    public getPendingUsersInTrips(driverUid,pushKey){
        return  this.afDB.list( '/tripsTest/'+ driverUid +'/'+pushKey+'/pendingUsers').valueChanges();
    }
    
    public getOrigin(user){
        return  this.afDB.list('/driversTest/'+ user +'/tripsTest/origin').valueChanges();
    } 
    public getOriginUser( user){
        return  this.afDB.list('/usersTest/'+ user +'/tripsTest/origin').valueChanges();
    } 
    public getDestinationUser( user){
        return  this.afDB.list('/usersTest/'+ user +'/tripsTest/destination').valueChanges();
    } 
    public pushCoordinatesUsers(user , dest, or){
     
        this.afDB.database.ref('/usersTest/'+ user+'/trips').update({
            origin: or,
            destination: dest,
            
    });

    }
    public pushCoordinatesOnBikeMode(user , dest, or){
     
        this.afDB.database.ref('/usersTest/'+ user+'/tripsTest/bikeMode').update({
            origin: or,
            destination: dest,
            
    });

    }
   
    public deleteOnTripFinal( userId){
            this.afDB.database.ref( '/usersTest/'+ userId + '/onTripFinal' ).remove();
    }
}
