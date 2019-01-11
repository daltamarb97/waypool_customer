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


     public turnFindingTrip(userId){
        
        let userRef = firebase.database().ref('users/' + userId);
        userRef.update({
            findindTrip: true
        });
        userRef.on('child_changed', function(data){
            if(data.val().findingTrip == null && data.val().findingTrip == false){
                userRef.update({
                    findingTrip: true
                }, function (error) {
                    if(error){
                        console.log(error);
                    }else{
                        console.log("everything succesful");
                    }
                });
            }else if(data.val().findingTrip == true){
                userRef.update({
                    findingTrip: false
                }, function (error){
                    if(error){
                        console.log(error);
                    }else{
                        console.log('everything succesful');
                    }
                })
            }  
        })
     }
}