import { AngularFireDatabase } from "@angular/fire/database";
import { Injectable } from "@angular/core";
import * as firebase from 'firebase';
import { animateChild } from "@angular/core/src/animation/dsl";

@Injectable()
export class SignUpService {

    constructor(public afDB: AngularFireDatabase){

    }

    public saveUser(user){
        this.afDB.database.ref('users/'+ user.userId).update(user);
    }

    

    public getDrivers(){
        return this.afDB.list('/drivers').valueChanges();
    }

    public getMyInfo(userId){
        return this.afDB.object('users/'+ userId).valueChanges();
        }

   
}