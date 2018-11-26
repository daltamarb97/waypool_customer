import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';
import { MyridePage } from '../pages/myride/myride';
import { ChatsPage } from '../pages/chats/chats';
import { FindridePage } from '../pages/findride/findride';
import { WalletPage } from '../pages/wallet/wallet';
import { MorePage } from '../pages/more/more';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { PasswordPage } from '../pages/password/password';
import { VerificationPage } from '../pages/verification/verification';
import { CodePage } from '../pages/code/code';
import { ListridePage } from '../pages/listride/listride';
import { FilterPage } from '../pages/filter/filter';
import { RiderprofilePage } from '../pages/riderprofile/riderprofile';
import { ConfirmridePage } from '../pages/confirmride/confirmride';
import { ConfirmpopupPage } from '../pages/confirmpopup/confirmpopup';
import { RateriderPage } from '../pages/raterider/raterider';
import { ChattingPage } from '../pages/chatting/chatting';
import { ProfilePage } from '../pages/profile/profile';
import { ReviewsPage } from '../pages/reviews/reviews';
import { NotificationPage } from '../pages/notification/notification';
import { TermsPage } from '../pages/terms/terms';
import { EarnPage } from '../pages/earn/earn';
import { RatevroomPage } from '../pages/ratevroom/ratevroom';
import { HelpPage } from '../pages/help/help';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GoogleMaps } from '@ionic-native/google-maps';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { SignUpService } from '../services/signup.services';
import { authenticationService } from '../services/userauthentication.service';
import { Firebase } from '@ionic-native/firebase';
import { Geolocation } from '@ionic-native/geolocation';

export const firebaseConfig = {
  apiKey: "AIzaSyDYldaKvN7lRhAOYesOeWhl7Zs7WfTn9ak",
  authDomain: "waypoolapp-f1349.firebaseapp.com",
  databaseURL: "https://waypoolapp-f1349.firebaseio.com",
  projectId: "waypoolapp-f1349",
  storageBucket: "waypoolapp-f1349.appspot.com",
  messagingSenderId: "729494621596"
};




@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    MyridePage,
    ChatsPage,
    FindridePage,
    WalletPage,
    MorePage,
    LoginPage,
    PasswordPage,
    SignupPage,
    VerificationPage,
    CodePage,
    ListridePage,
    FilterPage,
    RiderprofilePage,
    ConfirmridePage,
    ConfirmpopupPage,
    RateriderPage,
    ChattingPage,
    ProfilePage,
    ReviewsPage,
    NotificationPage,
    TermsPage,
    EarnPage,
    RatevroomPage,
    RatevroomPage,
    HelpPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    MyridePage,
    ChatsPage,
    FindridePage,
    WalletPage,
    MorePage,
    LoginPage,
    PasswordPage,
    SignupPage,
    VerificationPage,
    CodePage,
    ListridePage,
    FilterPage,
    RiderprofilePage,
    ConfirmridePage,
    ConfirmpopupPage,
    RateriderPage,
    ChattingPage,
    ProfilePage,
    ReviewsPage,
    NotificationPage,
    TermsPage,
    EarnPage,
    RatevroomPage,
    RatevroomPage,
    HelpPage
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
    

  ]
})
export class AppModule {}
