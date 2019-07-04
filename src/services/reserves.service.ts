import { AngularFireDatabase } from "@angular/fire/database";
import { Injectable } from "@angular/core";
import { UrlSerializer } from "ionic-angular";
import * as GeoFire from 'geofire';

@Injectable()
export class reservesService {

   
    constructor(public afDB: AngularFireDatabase){ 

       }
       

    public getMyReservesUser(userUid){
        // 
        return  this.afDB.list('/users/'+ userUid+'/availableReserves').valueChanges();

    }

    public getMyReservesSelected(userUid){
        // 
        return  this.afDB.list('/users/'+ userUid+'/myReserves').valueChanges();

    }
    public getReserves(userUid){
        // get reserves from my driver (wrong)
        return  this.afDB.list('/reserves/'+ userUid).valueChanges();

    }
    public getMyReserves(driverUserUid,reserveId){
        //get reserves inside reserves node
        return  this.afDB.object('/reserves/'+ driverUserUid +'/'+ reserveId+'/').valueChanges();

    }
   
}
