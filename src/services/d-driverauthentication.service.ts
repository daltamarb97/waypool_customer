import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

import * as firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';



@Injectable()
export class DriverAuthenticationService{

    constructor(private angularFireAuth: AngularFireAuth, private afDB: AngularFireDatabase){

    }

    loginWithEmail(email:string, password:string){
        return this.angularFireAuth.auth.signInWithEmailAndPassword(email, password);
     }

     sendVerificationCodeToFirebase( userId, code){
         this.afDB.database.ref( '/driversTest/' + userId).update({
             verificationCode: code
         })
     }

     deleteVerificationCode( userId){
        this.afDB.database.ref( '/driversTest/' + userId + '/verificationCode/' ).remove();
     }

     resendVerificationCode( userId){
        this.afDB.database.ref( '/driversTest/' + userId).update({
            resendVerificationCode: true
        })
    }


    deleteverificationCodeApproval( userId){
        this.afDB.database.ref( '/driversTest/' + userId + '/verificationCodeApproval/' ).remove();
     }

     deleteResendCode( userId){
        this.afDB.database.ref( '/driversTest/' + userId + '/resendVerificationCode/' ).remove();
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
    
    resetPassword(email:string){
        let auth = firebase.auth();
        return auth.sendPasswordResetEmail(email)
            .then(() => console.log("email sent"))
            .catch((error) => console.log(error))
    };
   
}

