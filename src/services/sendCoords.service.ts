import { AngularFireDatabase } from "@angular/fire/database";
import { Injectable } from "@angular/core";
import { UrlSerializer } from "ionic-angular";
import * as GeoFire from 'geofire';

@Injectable()
export class sendCoordsService {

   
    constructor(public afDB: AngularFireDatabase){    }
    //cant use this because it gets your same adress
    public getDestination(user){
        return  this.afDB.list('/drivers/'+ user +'/trips/destination').valueChanges();
    } 
    public getPendingUsers(driverUid,pushKey, place){
        return  this.afDB.list(place + '/reserves/'+ driverUid +'/'+pushKey+'/pendingUsers').valueChanges();
    }

    public getPendingUsersInTrips(driverUid,pushKey, place){
        return  this.afDB.list(place + '/trips/'+ driverUid +'/'+pushKey+'/pendingUsers').valueChanges();
    }
    
    public getOrigin(user){
        return  this.afDB.list('/drivers/'+ user +'/trips/origin').valueChanges();
    } 
    public getOriginUser(place, user){
        return  this.afDB.list(place + '/users/'+ user +'/trips/origin').valueChanges();
    } 
    public getDestinationUser(place, user){
        return  this.afDB.list(place + '/users/'+ user +'/trips/destination').valueChanges();
    } 
    public pushCoordinatesUsers(user , dest, or){
     
        this.afDB.database.ref('/users/'+ user+'/trips').update({
            origin: or,
            destination: dest,
            
    });

    }
    public pushCoordinatesOnBikeMode(user , dest, or){
     
        this.afDB.database.ref('/users/'+ user+'/trips/bikeMode').update({
            origin: or,
            destination: dest,
            
    });

    }
   
    public deleteOnTripFinal(place, userId){
            this.afDB.database.ref(place + '/users/'+ userId + '/onTripFinal' ).remove();
    }
}
