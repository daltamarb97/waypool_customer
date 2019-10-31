import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class authenticationService{

    constructor(private angularFireAuth: AngularFireAuth, private afDB: AngularFireDatabase){

    }

    loginWithEmail(email:string, password:string){
       return this.angularFireAuth.auth.signInWithEmailAndPassword(email, password);
    }

    registerWithEmail(email:string, password:string){
        return this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password);
     }

     getStatus(){
         return  this.angularFireAuth.authState;
     }

    logOut(){
        return this.angularFireAuth.auth.signOut();
    } 

    deleteResendCode(place, userId){
        this.afDB.database.ref(place + '/users/' + userId + '/resendVerificationCode/' ).remove();
     }

     sendVerificationCodeToFirebase(place, userId, code){
        this.afDB.database.ref(place + '/users/' + userId).update({
            verificationCode: code
        })
    }

    deleteVerificationCode(place, userId){
        this.afDB.database.ref(place + '/users/' + userId + '/verificationCode/' ).remove();
     }

     deleteverificationCodeApproval(place, userId){
        this.afDB.database.ref(place + '/users/' + userId + '/verificationCodeApproval/' ).remove();
     }


     resendVerificationCode(place, userId){
        this.afDB.database.ref(place + '/users/' + userId).update({
            resendVerificationCode: true
        })
    }
}