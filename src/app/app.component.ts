import { Component, ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//import { TabsPage } from '../pages/tabs/tabs';
//import { AboutPage } from '../pages/about/about';
import { LoginPage } from '../pages/login/login';
import { FindridePage } from '../pages/findride/findride';
import { ListridePage } from '../pages/listride/listride';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    localStorage.removeItem('firebase:previous_websocket_failure');
    this.rootPage = LoginPage;
    platform.ready().then(() => {
       // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need
    statusBar.styleDefault();
    splashScreen.hide();
    });
  }}
      
 
