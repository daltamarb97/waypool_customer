import { AngularFireDatabase } from "@angular/fire/database";
import { Injectable } from "@angular/core";

@Injectable()
export class SignUpService {
    constructor(public afDB: AngularFireDatabase){
        
    }

    public saveUser(user){
        this.afDB.database.ref('users/'+ user.userId).set(user);
    }

    public saveDriver(user){
        //erase this one, it just for testing
        this.afDB.database.ref('drivers/'+ user.userId).set(user);
    }
    public getDrivers(){
        return this.afDB.list('/drivers').valueChanges();
    }
    public getMyInfo(userUid){
        return this.afDB.object('users/'+userUid).valueChanges();
        }
    
    
}           