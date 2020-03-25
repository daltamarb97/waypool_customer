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

    deleteResendCode( userId){
        this.afDB.database.ref( '/usersTest/' + userId + '/resendVerificationCode/' ).remove();
     }

     sendVerificationCodeToFirebase( userId, code){
        this.afDB.database.ref( '/usersTest/' + userId).update({
            verificationCode: code
        })
    }

    deleteVerificationCode( userId){
        this.afDB.database.ref( '/usersTest/' + userId + '/verificationCode/' ).remove();
     }

     deleteverificationCodeApproval( userId){
        this.afDB.database.ref( '/usersTest/' + userId + '/verificationCodeApproval/' ).remove();
     }


     resendVerificationCode( userId){
        this.afDB.database.ref( '/usersTest/' + userId).update({
            resendVerificationCode: true
        })
    }
}