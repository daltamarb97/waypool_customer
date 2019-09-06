import { AngularFireDatabase } from "@angular/fire/database";
import { Injectable } from "@angular/core";
import * as firebase from 'firebase';


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

public isVerified(university, userId){
    this.afDB.database.ref(university + '/users/' + userId).update({
        verifiedPerson: true
    })
}


}
