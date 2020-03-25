import { AngularFireDatabase } from "@angular/fire/database";
import { Injectable } from "@angular/core";
import * as firebase from 'firebase';


@Injectable()
export class instancesService {

constructor(public afDB: AngularFireDatabase){
              
    }
    
public showOnDriverInstance(driverId, user){
    this.afDB.database.ref('/drivers/' + driverId + '/tripsTest/usersListRide/' + user).update({
        showDriver: true
    }, (error)=>{
        if(error){
            console.log(error)
        }else{
            console.log("everything successful");
        }
    })
}

public isVerified( userId){
    this.afDB.database.ref( '/usersTest/' + userId).update({
        verifiedPerson: true
    })
}


}
