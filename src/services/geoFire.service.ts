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
    user:any;


    constructor(public afDB: AngularFireDatabase, private AngularFireAuth: AngularFireAuth){
       
    }

    setLocationGeofireDest( key, lat, lng, userId){
        this.dbRef = this.afDB.database.ref('geofireDest/' );
        this.geoFire = new GeoFire(this.dbRef); 

        // this.afDB.list('/users/' + key).valueChanges().subscribe(user=>{
            // this.user = user;
            // if(!this.user.onTrip == true){
                this.geoFire.set(key, [lat, lng]).then(function(){
                    console.log('location updated');
                   }, function(error){
                  console.log('error: ' + error)
                   });

                   this.deleteUserGeofireOr(key)

                   this.afDB.database.ref('users/' + userId).update({
                    geofireDest: true,
                    geofireOr: false
                })
            // }
        // })
           
    }

    setLocationGeofireOr( key, lat, lng, userId){
        this.dbRef = this.afDB.database.ref('geofireOr/' );
        this.geoFire = new GeoFire(this.dbRef); 

        // this.afDB.list('/users/' + key).valueChanges().subscribe(user=>{
            // this.user = user;
            // if(!this.user.onTrip == true){
                this.geoFire.set(key, [lat, lng]).then(function(){
                    console.log('location updated');
                   }, function(error){
                  console.log('error: ' + error)
                   });

                   this.deleteUserGeofireDest(key)
            // }
            this.afDB.database.ref('users/' + userId).update({
                geofireOr: true,
                geofireDest: false
            })
        // })
           
    }

    removeKeyGeofire(key){
        this.dbRef = this.afDB.database.ref('geofire/' );
        this.geoFire = new GeoFire(this.dbRef); 
        
        this.geoFire.remove(key).then(()=>{
            console.log("Provided key has been removed from GeoFire")
        }, (error)=>{
            console.log(error);
        })
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
             userId: userId,

        });
    }

    deleteUserGeofireDest(userId){
        this.afDB.database.ref('geofireDest/' + userId).remove().then(()=>{
            console.log("succesfully removed");
        }).catch(error =>{
            console.log(error);
        })
        
        
    }

    deleteUserGeofireOr(userId){
        this.afDB.database.ref('geofireOr/' + userId).remove().then(()=>{
            console.log("succesfully removed");
        }).catch(error =>{
            console.log(error);
        })

    }



    deleteGeofireOr(){
        this.afDB.database.ref('geofireOr/').remove().then(()=>{
            console.log("succesfully removed");
        }).catch(error =>{
            console.log(error);
        })   
    }

    deleteGeofireDest(){
        this.afDB.database.ref('geofireDest/').remove().then(()=>{
            console.log("succesfully removed");
        }).catch(error =>{
            console.log(error);
        })   
    }

    deleteDriverListRide(userId, driverId){
        this.afDB.database.ref('/users/' + userId + '/trips/driversListRide/' + driverId).remove();
    }
    
    deleteDriverListRideTotal(userId){
        this.afDB.database.ref('/users/' + userId + '/trips/driversListRide/').remove();
    }
            

    }

    
