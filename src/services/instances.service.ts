import { AngularFireDatabase } from "@angular/fire/database";
import { Injectable } from "@angular/core";

@Injectable()
export class instancesService {

constructor(public afDB: AngularFireDatabase){
              
    }
    
public showOnDriverInstance(driverId, user){
    this.afDB.database.ref('/drivers/' + driverId + '/trips/usersListRide/' + user).update({
        showDriver: true
    }, (error)=>{
        if(error){
            console.log(error)
        }else{
            console.log("everything successful");
        }
    })
}

}
