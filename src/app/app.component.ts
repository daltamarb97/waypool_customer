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
      apiKey: "AIzaSyAPagXvglCXnK3neJwU50EiZnJPmdd__PM",
      authDomain: "waypoooldemo.firebaseapp.com",
      databaseURL: "https://waypoooldemo.firebaseio.com",
      projectId: "waypoooldemo",
      storageBucket: "waypoooldemo.appspot.com",
      messagingSenderId: "1009109452629"
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
      
 
