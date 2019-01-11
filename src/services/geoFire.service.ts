import { AngularFireDatabase } from "@angular/fire/database";
import { Injectable } from "@angular/core";
import * as GeoFire from 'geofire';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class geofireService {

    dbRef;
    geoFire;
    key;
    

    constructor(public afDB: AngularFireDatabase){
        
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

    updateInfoGeofire(key){
        this.afDB.list('users/'+ key).valueChanges().subscribe((data)=>{
            this.afDB.database.ref('geofire/'+ key).update({
                name: data[4],
                lastname: data[3],
                origin: data[8].origin,
                destination: data[8].destination
            });
           
           })
    }
            

    }

    
