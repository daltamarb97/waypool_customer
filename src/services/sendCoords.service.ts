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
    public getOrigin(user){
        return  this.afDB.list('/drivers/'+ user +'/trips/origin').valueChanges();
    } 
    public getOriginUser(user){
        return  this.afDB.list('/users/'+ user +'/trips/origin').valueChanges();
    } 
    public getDestinationUser(user){
        return  this.afDB.list('/users/'+ user +'/trips/destination').valueChanges();
    } 
    public pushCoordinatesUsers(user , dest, or){
     
        this.afDB.database.ref('/users/'+ user+'/trips').update({
            origin: or,
            destination: dest,
            
    });

    }

    public deleteOnTripFinal(userId){
            this.afDB.database.ref('/users/'+ userId + '/onTripFinal' ).remove();
    }
}
