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
      apiKey: "AIzaSyDrNPJBT1eVEFvZDfIfwnuD3ivJo7hVw2M",
      authDomain: "securityrules-93b35.firebaseapp.com",
      databaseURL: "https://securityrules-93b35.firebaseio.com",
      projectId: "securityrules-93b35",
      storageBucket: "",
      messagingSenderId: "181111098326"
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
      
 
