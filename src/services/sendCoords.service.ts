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
    public getPendingUsers(driverUid,pushKey, university){
        return  this.afDB.list(university + '/reserves/'+ driverUid +'/'+pushKey+'/pendingUsers').valueChanges();
    }
    public getOrigin(user){
        return  this.afDB.list('/drivers/'+ user +'/trips/origin').valueChanges();
    } 
    public getOriginUser(university, user){
        return  this.afDB.list(university + '/users/'+ user +'/trips/origin').valueChanges();
    } 
    public getDestinationUser(university, user){
        return  this.afDB.list(university + '/users/'+ user +'/trips/destination').valueChanges();
    } 
    public pushCoordinatesUsers(user , dest, or){
     
        this.afDB.database.ref('/users/'+ user+'/trips').update({
            origin: or,
            destination: dest,
            
    });

    }
   
    public deleteOnTripFinal(university, userId){
            this.afDB.database.ref(university + '/users/'+ userId + '/onTripFinal' ).remove();
    }
}
