import { Component, ViewChild } from '@angular/core';
import { Platform, AlertController, ToastController, Nav, LoadingController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebaseFirst from 'firebase';
import { Geolocation } from '@ionic-native/geolocation';
import { FCM } from '@ionic-native/fcm';
import { Firebase } from '@ionic-native/firebase';
import { AngularFireDatabase } from 'angularfire2/database';





@Component({
  templateUrl: 'app.html',
  
})
export class MyApp {
  @ViewChild(Nav) nav:Nav;

  rootPage:any  = 'LoginPage';
  alertInternet:any;
  pagesUser:any=[];
  pagesDriver:any=[];
  showUser:boolean = false;
  showDriver:boolean = false;
  userId:any;
  constructor(public alertCtrl: AlertController, statusBar: StatusBar, splashScreen: SplashScreen, private geolocation: Geolocation, private platform: Platform, private fcm: FCM, public toastController: ToastController, private firebase: Firebase, private afDB: AngularFireDatabase, public loadingCtrl: LoadingController) {
   
    this.pagesUser = [
      {title:'Mis viajes',component:'ReservetripPage', icon:'md-paper'},
      {title: 'Billetera', component:'WalletPage',icon:'card'},
      {title:'Mi perfil',component:'MorePage',icon:'person'},
      {title:'Soporte',component:'HelpPage',icon:'help'},
      {title:'Instrucciones',component:'WalkthroughPage',icon:'alert'},
      {title:'Pasar a Pooler',component:'DriverFindridePage',icon:'speedometer'},    
    ]

    this.pagesDriver = [
      {title:'Mis viajes',component:'DriverReservetripPage', icon:'md-paper'},
      {title: 'Billetera', component:'DriverWalletPage',icon:'card'},
      {title: 'Horario', component:'DriverSchedulePage',icon:'time'}, 
      {title:'Mi perfil',component:'DriverMorePage',icon:'person'},
      {title:'Instrucciones',component:'DriverWalkthroughPage',icon:'alert'},
      {title:'Pasar a Pasajero',component:'FindridePassPage',icon:'people'},    
    ]



    // const firebaseConfig = {
    //   apiKey: "AIzaSyB7Py2pOZEUJD2Ar34a-8z-rReiDtsikxw",
    //   authDomain: "waypool-511be.firebaseapp.com",
    //   databaseURL: "https://waypool-511be.firebaseio.com",
    //   projectId: "waypool-511be",
    //   storageBucket: "waypool-511be.appspot.com",
    //   messagingSenderId: "904521954579",



      // apiKey: "AIzaSyCvN6NNgoWCbOOUxBP9H23rbb7QSnBCf60",
      // authDomain: "fixingdatabase.firebaseapp.com",
      // databaseURL: "https://fixingdatabase.firebaseio.com",
      // projectId: "fixingdatabase",
      // storageBucket: "",
      // messagingSenderId: "1090675636677",
      // appId: "1:1090675636677:web:672dbea79f33a407"
    

    // };

    // firebaseFirst.initializeApp(firebaseConfig);
    statusBar.styleDefault();
    splashScreen.hide();

    let loading = this.loadingCtrl.create({
      spinner: 'crescent',
      content: `
        <div class="custom-spinner-container">
          <div class="custom-spinner-box"></div>
        </div>`
        });
    loading.present();

    //location gathering
    this.geolocation.getCurrentPosition({enableHighAccuracy: true}).then(()=>{
      console.log('location catched');
      
    }).catch((error)=>{
      console.log('this is the geolocation error: ' + error);
    })


    // notifications
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

    //check if no connection to DB
    setTimeout(() => {
      firebaseFirst.database().ref('.info/connected').on('value', (snap)=>{
        if(snap.val() === false){
          loading.dismiss();
          this.alertInternet = this.alertCtrl.create({
            title: '¡Oops!',
            subTitle: 'Ocurrió un error conectándote a Waypool. Por favor verifica tu conexión a internet',
          });
          this.alertInternet.present();
        }else if(snap.val() === true){
          if(this.alertInternet){
            loading.dismiss();
            this.alertInternet.dismiss();
          }else{

          }
        }
      })
    }, 2000);
    

    //identify user and their state
    firebaseFirst.auth().onAuthStateChanged((user)=>{
      if(user){
        this.userId = user.uid;
        this.afDB.database.ref('allUsers/' + user.uid + '/appStatus/').once('value').then(snap =>{
          if(snap.val()=== 'user'){
            this.showUser = true;
            this.showDriver = false;
            if(user.emailVerified == false){
              loading.dismiss();
              this.rootPage = 'LoginPage';
            }else{
              loading.dismiss();
              this.rootPage = 'FindridePassPage';
            }
          }else if(snap.val()=== 'driver'){
            this.showUser = false;
            this.showDriver = true;
            if(user.emailVerified == false){
              loading.dismiss();
              this.rootPage = 'LoginPage';
            }else{
              loading.dismiss();
              this.rootPage = 'DriverFindridePage';
            }
          }else{
            this.showUser = true;
            this.showDriver = false;
            if(user.emailVerified == false){
              loading.dismiss();
              this.rootPage = 'LoginPage';
            }else{
              loading.dismiss();
              this.rootPage = 'FindridePassPage';
            }
          }
        })
        
      }else{
        loading.dismiss();
        this.rootPage = 'LoginPage';

      }
    })

    
  }

  openPage(page){
    if(page.component === 'DriverFindridePage'){
        this.showUser = false;
        this.showDriver = true;
        this.nav.setRoot(page.component);
        this.afDB.database.ref('allUsers/' + this.userId).update({
          appStatus: 'driver'
        }).then(()=>{
        
      })  
    }else if(page.component === 'FindridePassPage'){
      this.showUser = true;
      this.showDriver = false;
      this.nav.setRoot(page.component);
      this.afDB.database.ref('allUsers/' + this.userId).update({
        appStatus: 'user'
      }).then(()=>{
       
      })
    }else{
      this.nav.push(page.component)
    }
    
  } 


}
      
 
