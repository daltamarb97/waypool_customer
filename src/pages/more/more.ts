import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


import { ProfilePage } from '../profile/profile';
import { ReviewsPage } from '../reviews/reviews';
import { NotificationPage } from '../notification/notification';
import { TermsPage } from '../terms/terms';
import { EarnPage } from '../earn/earn';
import { HelpPage } from '../help/help';
import { LoginPage } from '../login/login';
import { authenticationService } from '../../services/userauthentication.service';
import * as firebase from 'firebase';
import { SignUpService } from '../../services/signup.services';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-more',
  templateUrl: 'more.html'
})
export class MorePage {
     userUid=this.AngularFireAuth.auth.currentUser.uid;
     user:any={};
     
  constructor(public navCtrl: NavController, public AngularFireAuth:AngularFireAuth,private authenticationService: authenticationService,public SignupService:SignUpService) {
     this.SignupService.getMyInfoForProfile(this.userUid).subscribe(user=>{
          this.user= user;
            console.log(this.user)
        })
  }
  
       profile(){
    this.navCtrl.push(ProfilePage);
    }
         reviews(){
    this.navCtrl.push(ReviewsPage);
    }
         notification(){
    this.navCtrl.push(NotificationPage);
    }
         terms(){
    this.navCtrl.push(TermsPage);
    }
         earn(){
    this.navCtrl.push(EarnPage);
    }
         ratevroom(){
//     this.navCtrl.push();
    }
         help(){
    this.navCtrl.push(HelpPage);
    }
         logOut(){
    this.authenticationService.logOut();
    console.log(firebase.auth().currentUser);
    this.navCtrl.push(LoginPage);
    }

}
