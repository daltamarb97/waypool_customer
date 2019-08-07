import { AngularFireDatabase } from "@angular/fire/database";
import { Injectable } from "@angular/core";
import { UrlSerializer } from "ionic-angular";
import * as GeoFire from 'geofire';

@Injectable()
export class reservesService {

   
    constructor(public afDB: AngularFireDatabase){ 

       }
       
       public setOnTrip(userUid){        
      this.afDB.database.ref('/users/'+userUid).update({
          onTrip:true
        });
 
     }
    public getMyReservesUser(userUid){
        //get reserves of that i have enter
        return  this.afDB.list('/users/'+ userUid+'/myReserves').valueChanges();

    }
    
    public getReserves(userUid){
        //get reserves of the geofire
        return  this.afDB.list('/users/'+ userUid+'/availableReserves').valueChanges();

    }
    public getOnTrip(userUid){
        //get reserves of the geofire
        return  this.afDB.object('/users/'+ userUid+'/onTrip').valueChanges();

    }
    public getMyReserves(driverUserUid,reserveId){
        //get reserves inside reserves node
        return  this.afDB.object('/reserves/'+ driverUserUid +'/'+ reserveId+'/').valueChanges();

    }
    public getPendingUsers(driverUserUid,reserveId){
        //get reserves inside reserves node
        return  this.afDB.list('/reserves/'+ driverUserUid +'/'+ reserveId+'/pendingUsers').valueChanges();

    }
    public cancelReserve(userUid,driverUid,reserveId){
        //eliminate user from reserve in reserve's node        
      this.afDB.database.ref('/reserves/'+ driverUid +'/'+ reserveId+'/pendingUsers/'+userUid).remove();
        //eliminate keyTrip from user's node to eliminate access to that reserve

     }
     public eliminateKeyUser(userUid,reserveId){    
      //eliminate keyTrip from user's node to eliminate access to that reserve
    this.afDB.database.ref('/users/'+userUid+'/myReserves/'+ reserveId).remove();

   }
   
     
}
