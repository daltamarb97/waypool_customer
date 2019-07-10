import { Injectable } from '@angular/core';
import { Firebase } from '@ionic-native/firebase';
import { Platform } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import {AngularFirestore } from 'angularfire2/firestore';
/*
  Generated class for the FmcProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FmcProvider {

   userId:any;
  constructor( public firebaseNative: Firebase, private Platform: Platform, private AngularFireAuth: AngularFireAuth, public afs: AngularFirestore) {
    console.log('Hello FmcProvider Provider');

    // this.userId = this.AngularFireAuth.auth.currentUser.uid;
    
  }

    async getToken(){
      let tokenToSave

      if(this.Platform.is('android')){
        tokenToSave = await this.firebaseNative.getToken();
      }

      if(this.Platform.is('ios')){
        tokenToSave = await this.firebaseNative.getToken();
        await this.firebaseNative.grantPermission();
      }
      

      return this.saveTokenToDatabase(tokenToSave);
    }

    private saveTokenToDatabase(token){
      if(!token){
        return console.log('there is no token');
      }

      const devicesRef = this.afs.collection('devices')
      this.userId = this.AngularFireAuth.auth.currentUser.uid;

      const data = {
        token, 
        userId: this.userId,
      }

      return devicesRef.doc(token).set(data);
    }

    listenToNotifications(){
      return this.firebaseNative.onNotificationOpen()
    }

}
