import { AngularFireDatabase } from "@angular/fire/database";
import { Injectable } from "@angular/core";
import * as firebase from 'firebase';
import { animateChild } from "@angular/core/src/animation/dsl";

@Injectable()
export class SignUpService {

    constructor(public afDB: AngularFireDatabase){

    }

    public saveUser(user){
        this.afDB.database.ref('users/'+ user.userId).set(user);
    }

    public getDrivers(){
        return this.afDB.list('/drivers').valueChanges();
    }


    public turnOnTripOn(user){
        user = firebase.auth().currentUser.uid;
        firebase.database().ref('users').child(user).update({
            onTrip: true
        }, function (error) {
            if(error){
                console.log(error);
            }else{
                console.log("everything succesful");
            }
        }); 
        
     }
}