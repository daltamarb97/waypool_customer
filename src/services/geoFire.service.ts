import { AngularFireDatabase } from "@angular/fire/database";
import { Injectable } from "@angular/core";
import * as GeoFire from 'geofire';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AngularFireAuth } from "angularfire2/auth";

@Injectable()
export class geofireService {

    dbRef;
    geoFire;
    key;
   

    constructor(public afDB: AngularFireDatabase, private AngularFireAuth: AngularFireAuth){
       
    }

    setLocationGeofire( key, lat, lng){
        this.dbRef = this.afDB.database.ref('geofire/' );
        this.geoFire = new GeoFire(this.dbRef); 
        this.geoFire.set(key, [lat, lng]).then(function(){
            console.log('location updated');
           }, function(error){
          console.log('error: ' + error)
           });
           
    }

    getDriversAvailableForUser(userId){
       return this.afDB.list('/users/' + userId + '/trips/driversListRide/').valueChanges();
    }

   
    showOnDriver(driverId, userId, origin, destination, name, lastname, phone){
        this.afDB.database.ref('/drivers/' + driverId + '/trips/usersListRide/' + userId).set({
            origin: origin,
             destination: destination,
             name: name,
             lastname: lastname,
             phone: phone,
             userId: userId
        });
    }

    deleteDriverListRide(userId){
        this.afDB.database.ref('/users/' + userId + '/trips/driversListRide/').remove();
        this.afDB.database.ref('/geofire/' + userId).remove();
    }
    
            

    }

    
