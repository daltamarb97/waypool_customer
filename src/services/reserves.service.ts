import { AngularFireDatabase } from "@angular/fire/database";
import { Injectable } from "@angular/core";
import { UrlSerializer } from "ionic-angular";
import * as GeoFire from 'geofire';

@Injectable()
export class reservesService {

   
    constructor(public afDB: AngularFireDatabase){ 

       }
       
       public setOnTrip( userUid){        
      this.afDB.database.ref( '/usersTest/'+userUid).update({
          onTrip:true
        });
 
     }
    public getMyReservesUser( userUid){
        //get reserves of that i have enter
        return  this.afDB.list('/usersTest/'+ userUid+'/myReserves').valueChanges();

    }


 



    public getMyReservesSelected( userUid){
        // 
        return  this.afDB.list('/usersTest/'+ userUid+'/myReserves').valueChanges();

    }
    
    public getReserves( userUid){
        //get reserves of the geofire
        return  this.afDB.list('/usersTest/'+ userUid+'/availableReserves').valueChanges();

    }

    public getCrews( userUid){
        //get reserves of the geofire
        return  this.afDB.list('/usersTest/'+ userUid+'/availableCrews').valueChanges();

    }


    public getSeenReservesInAvailableReserves( userUid){
        //get reserves of the geofire
        return  this.afDB.list( '/usersTest/'+ userUid+'/reservesSeenInAvailableReserves').valueChanges();

    }

    public getSeenCrewsInAvailableCrews( userUid){
        //get reserves of the geofire
        return  this.afDB.list( '/usersTest/'+ userUid+'/crewsSeenInAvailableCrews').valueChanges();

    }



    


    public getSeenReservesInAvailableReservesRoute( userUid){
        //get reserves of the geofire
        return  this.afDB.list( '/usersTest/'+ userUid+'/reservesSeenInAvailableReservesRoute').valueChanges();

    }


    public getSeenCrewsInAvailableCrewsRoute( userUid){
        //get reserves of the geofire
        return  this.afDB.list( '/usersTest/'+ userUid+'/crewsSeenInAvailableCrewsRoute').valueChanges();

    }


    

    

    public getSeenReservesInAvailableReservesLMU( userUid){
        //get reserves of the geofire
        return  this.afDB.list('/usersTest/'+ userUid+'/reservesSeenInAvailableReservesLMU').valueChanges();

    }


    public getOnTrip( userUid){
        //get reserves of the geofire
        return  this.afDB.object('/usersTest/'+ userUid+'/onTrip').valueChanges();

    }
    public getMyReserves( driverUserUid,reserveId){
        //get reserves inside reserves node
        return  this.afDB.object('/reservesTest/'+ driverUserUid +'/'+ reserveId+'/').valueChanges();

    }
    public getPendingUsers( driverUserUid,reserveId){
        //get reserves inside reserves node
        return  this.afDB.list('/reservesTest/'+ driverUserUid +'/'+ reserveId+'/pendingUsers').valueChanges();

    }
    public confirmMyExistenceInPendingUsers( driverUserUid,reserveId,userUid){
        //get reserves inside reserves node
        return  this.afDB.object( '/reservesTest/'+ driverUserUid +'/'+ reserveId+'/pendingUsers/'+userUid).valueChanges();

    }

    public confirmMyExistenceInPickedupUsers( driverId,keyTrip, userId){
        //get reserves inside reserves node
        return  this.afDB.object( '/tripsTest/'+driverId+'/'+ keyTrip+'/pickedUpUsers/' + userId).valueChanges();

    }

    public cancelReserve(userUid,driverUid,reserveId){
        //eliminate user from reserve in reserve's node        
      this.afDB.database.ref( '/reservesTest/'+ driverUid +'/'+ reserveId+'/pendingUsers/'+userUid).remove();
        //eliminate keyTrip from user's node to eliminate access to that reserve

     }
     public eliminateKeyUser(userUid,reserveId){    
      //eliminate keyTrip from user's node to eliminate access to that reserve
    this.afDB.database.ref( '/usersTest/'+userUid+'/myReserves/'+ reserveId).remove();

   }
   
     
}
