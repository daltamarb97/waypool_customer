import { Component, ViewChild } from '@angular/core';
import { Platform, AlertController, ToastController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebaseFirst from 'firebase';
import { Geolocation } from '@ionic-native/geolocation';
import { FCM } from '@ionic-native/fcm';
import { Firebase } from '@ionic-native/firebase';





@Component({
  templateUrl: 'app.html',
  
})
export class MyApp {
  @ViewChild(Nav) nav:Nav;

  rootPage:any  = 'LoginPage';
  alertInternet:any;
  pages:any=[];
  constructor(public alertCtrl: AlertController, statusBar: StatusBar, splashScreen: SplashScreen, private geolocation: Geolocation, private platform: Platform, private fcm: FCM, public toastController: ToastController, private firebase: Firebase) {
    this.pages = [
      {title:'Mis viajes',component:'ReservetripPage', icon:'md-paper'},
      {title: 'Billetera', component:'WalletPage',icon:'card'},
      {title:'Mi perfil',component:'MorePage',icon:'person'},
      {title:'Instrucciones',component:'WalkthroughPage',icon:'alert'},
      {title:'Soporte',component:'HelpPage',icon:'help'},

      

    ]
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

    firebaseFirst.initializeApp(firebaseConfig);
    statusBar.styleDefault();
    splashScreen.hide();

    this.geolocation.getCurrentPosition({enableHighAccuracy: true}).then(()=>{
      console.log('location catched');
      
    }).catch((error)=>{
      console.log('this is the geolocation error: ' + error);
    })


    platform.ready().then(()=>{

      console.log('aqui es notificaciíon nueva');
      this.fcm.onNotification().subscribe(data => {
        if(data.wasTapped){
         console.log('app in background');
         console.log(JSON.stringify(data));
        }else{
         console.log(JSON.stringify(data));
         const toast = this.toastController.create({
                      message: data.body,
                      duration: 3000
                    })
                    toast.present();
        }
      })


      // this.firebase.onNotificationOpen().subscribe((response)=>{
      //   if(response.tap){
      //     console.log('received in background');
      //   }else{
      //     const toast = this.toastController.create({
      //             message: response.body,
      //             duration: 3000
      //           })
      //           toast.present();
      //   }
      // });


    })

    setTimeout(() => {
      firebaseFirst.database().ref('.info/connected').on('value', (snap)=>{
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
    
    firebaseFirst.auth().onAuthStateChanged((user)=>{
      if(user){
        if(user.emailVerified == false){
          this.rootPage = 'LoginPage';
        }else{
          this.rootPage = 'FindridePassPage';
        }
      }else{
        this.rootPage = 'LoginPage';

      }
    })

    
  }

  openPage(page){
    this.nav.push(page.component)
  } 


}
      
 
