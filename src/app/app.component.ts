import { Component, ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';

//import { TabsPage } from '../pages/tabs/tabs';
//import { AboutPage } from '../pages/about/about';




@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;
  
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    firebase.initializeApp({
      apiKey: "AIzaSyDYldaKvN7lRhAOYesOeWhl7Zs7WfTn9ak",
      authDomain: "waypoolapp-f1349.firebaseapp.com",
      databaseURL: "https://waypoolapp-f1349.firebaseio.com",
      projectId: "waypoolapp-f1349",
      storageBucket: "waypoolapp-f1349.appspot.com",
      messagingSenderId: "729494621596"
      });
    platform.ready().then(() => { 
    statusBar.styleDefault();
    splashScreen.hide();
    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        this.rootPage = 'TabsPage';
      }else{
        this.rootPage = 'LoginPage';
      }
    })
    });

    
  }


}
      
 
