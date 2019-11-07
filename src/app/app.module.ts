import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler, NavController } from 'ionic-angular';
import { MyApp } from './app.component';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GoogleMaps,  } from '@ionic-native/google-maps';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { authenticationService } from '../services/userauthentication.service';
import { Firebase } from '@ionic-native/firebase';
import { Geolocation } from '@ionic-native/geolocation';
import { sendCoordsService } from '../services/sendCoords.service';
import { sendUsersService } from '../services/sendUsers.service';
import { noteService } from '../services/note.service';
import { CallNumber } from '@ionic-native/call-number';
import { geofireService } from '../services/geoFire.service';
import { CommonModule } from '@angular/common';
import { instancesService } from '../services/instances.service';
import { SignUpService } from '../services/signup.services';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
  
import { EmailComposer } from '@ionic-native/email-composer/ngx';

import { sendFeedbackService } from '../services/sendFeedback.service';
// import { IonicStorageModule } from '@ionic/storage';
import { chatsService } from '../services/chat.service';
import { reservesService } from '../services/reserves.service';
import { TripsService } from '../services/trips.service';
import { AngularFirestore } from 'angularfire2/firestore';

import { environmentService } from '../services/environment.service';
import { ConfirmUniversityPage } from '../pages/confirm-university/confirm-university';
import { LocationAccuracy } from '@ionic-native/location-accuracy';
import { MetricsService } from '../services/metrics.service';
import { Camera } from '@ionic-native/camera/';


export const firebaseConfig = {
  // apiKey: "AIzaSyCvN6NNgoWCbOOUxBP9H23rbb7QSnBCf60",
  // authDomain: "fixingdatabase.firebaseapp.com",
  // databaseURL: "https://fixingdatabase.firebaseio.com",
  // projectId: "fixingdatabase",
  // storageBucket: "",
  // messagingSenderId: "1090675636677",
  // appId: "1:1090675636677:web:672dbea79f33a407"
};


@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    CommonModule,
  ],
 
  
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GoogleMaps,
    SignUpService,
    authenticationService,
    Firebase,
    Geolocation,
    sendCoordsService,
    EmailComposer,
    sendUsersService,
    noteService,
    CallNumber,
    geofireService,
    instancesService,
    NativeGeocoder,
    sendFeedbackService,
    chatsService,
    reservesService,
    TripsService,
    environmentService,
    ConfirmUniversityPage,
    LocationAccuracy,
    MetricsService,
    Camera  
  ]
})
export class AppModule {}
