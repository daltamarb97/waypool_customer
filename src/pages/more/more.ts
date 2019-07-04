import { Component } from '@angular/core';
import { NavController, IonicPage, App } from 'ionic-angular';


import { ProfilePage } from '../profile/profile';

import { TermsPage } from '../terms/terms';
import { HelpPage } from '../help/help';
import { LoginPage } from '../login/login';
import { authenticationService } from '../../services/userauthentication.service';
import * as firebase from 'firebase';
import { SignUpService } from '../../services/signup.services';
import { AngularFireAuth } from 'angularfire2/auth';
@IonicPage()

@Component({
  selector: 'page-more',
  templateUrl: 'more.html'
})
export class MorePage {
     userUid=this.AngularFireAuth.auth.currentUser.uid;
     user:any={};
     
  constructor(public navCtrl: NavController, public AngularFireAuth:AngularFireAuth,private authenticationService: authenticationService,public SignupService:SignUpService, public app: App) {
     this.SignupService.getMyInfoForProfile(this.userUid).subscribe(user=>{
          this.user= user;
            console.log(this.user)
        })
  }
  
       profile(){
    this.app.getRootNav().push('ProfilePage');

    }

         terms(){
    this.navCtrl.push('TermsPage');
    }
  
      
         help(){
    this.navCtrl.push('HelpPage');
    }
         logOut(){
    this.authenticationService.logOut();
    console.log(firebase.auth().currentUser);
    this.app.getRootNav().push('LoginPage');
    }

}
