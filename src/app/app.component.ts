import { Component, ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';
import { SignUpService } from '../services/signup.services';





@Component({
  templateUrl: 'app.html',
  
})
export class MyApp {
  rootPage:any;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private signUpServ: SignUpService) {
   
    

    platform.ready().then(() => { 
    statusBar.styleDefault();
    splashScreen.hide();
    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        if(user.emailVerified == false){
          this.rootPage = 'LoginPage';
        }else{
          this.rootPage = 'TabsPage';
        }
      }else{
        this.rootPage = 'LoginPage';
      }
    })
    });

    
  }

  


}
      
 
