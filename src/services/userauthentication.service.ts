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

    deleteResendCode(university, userId){
        this.afDB.database.ref(university + '/users/' + userId + '/resendVerificationCode/' ).remove();
     }

     sendVerificationCodeToFirebase(university, userId, code){
        this.afDB.database.ref(university + '/users/' + userId).update({
            verificationCode: code
        })
    }

    deleteVerificationCode(university, userId){
        this.afDB.database.ref(university + '/users/' + userId + '/verificationCode/' ).remove();
     }

     deleteverificationCodeApproval(university, userId){
        this.afDB.database.ref(university + '/users/' + userId + '/verificationCodeApproval/' ).remove();
     }


     resendVerificationCode(university, userId){
        this.afDB.database.ref(university + '/users/' + userId).update({
            resendVerificationCode: true
        })
    }
}