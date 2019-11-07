import { Component, ViewChild } from '@angular/core';
import { Platform, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';
import { Geolocation } from '@ionic-native/geolocation';





@Component({
  templateUrl: 'app.html',
  
})
export class MyApp {
  rootPage:any;
  alertInternet:any;
  constructor(public alertCtrl: AlertController, statusBar: StatusBar, splashScreen: SplashScreen, private geolocation: Geolocation) {
   
    const firebaseConfig = {
      apiKey: "AIzaSyB7Py2pOZEUJD2Ar34a-8z-rReiDtsikxw",
      authDomain: "waypool-511be.firebaseapp.com",
      databaseURL: "https://waypool-511be.firebaseio.com",
      projectId: "waypool-511be",
      storageBucket: "waypool-511be.appspot.com",
      messagingSenderId: "904521954579",
      // apiKey: "AIzaSyCvN6NNgoWCbOOUxBP9H23rbb7QSnBCf60",
      // authDomain: "fixingdatabase.firebaseapp.com",
      // databaseURL: "https://fixingdatabase.firebaseio.com",
      // projectId: "fixingdatabase",
      // storageBucket: "",
      // messagingSenderId: "1090675636677",
      // appId: "1:1090675636677:web:672dbea79f33a407"
    };

    firebase.initializeApp(firebaseConfig);
    statusBar.styleDefault();
    splashScreen.hide();
    this.geolocation.getCurrentPosition({enableHighAccuracy: true}).then(()=>{
      console.log('location catched');
    }).catch((error)=>{
      console.log(error);
    })

    setTimeout(() => {
      firebase.database().ref('.info/connected').on('value', (snap)=>{
        if(snap.val() === false){
          this.alertInternet = this.alertCtrl.create({
            title: '¡Oops!',
            subTitle: 'Ocurrió un error conectándote a Waypool. Por favor verifica tu conexión a internet',
          });
          this.alertInternet.present();
        }else if(snap.val() === true){
          if(this.alertInternet){
            this.alertInternet.dismiss();
          }else{

          }
        }
      })
    }, 2500);
    
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

    
  }

  


}
      
 
