import { Component } from '@angular/core';
import { NavController, IonicPage, App, IonicModule, AlertController } from 'ionic-angular';


import { ProfilePage } from '../profile/profile';

import { TermsPage } from '../terms/terms';
import { HelpPage } from '../help/help';
import { LoginPage } from '../login/login';
import { authenticationService } from '../../services/userauthentication.service';
import * as firebase from 'firebase';
import { SignUpService } from '../../services/signup.services';
import { AngularFireAuth } from 'angularfire2/auth';
import { Subject } from 'rxjs';
import { MyApp } from '../../app/app.component';
@IonicPage()

@Component({
  selector: 'page-more',
  templateUrl: 'more.html'
})
export class MorePage {
     userUid=this.AngularFireAuth.auth.currentUser.uid;
     user:any={};
     verified:boolean = false;
     unsubscribe = new Subject;
  constructor(public navCtrl: NavController, public AngularFireAuth:AngularFireAuth,private authenticationService: authenticationService,public SignupService:SignUpService, public app: App, public alertCtrl: AlertController) {
     this.SignupService.getMyInfoForProfile(this.SignupService.userPlace, this.userUid).takeUntil(this.unsubscribe).subscribe(user=>{
          this.user= user;
            console.log(this.user)
          if(this.user.verifiedPerson === true){
            this.verified = true;
          }
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


          let alert = this.alertCtrl.create({
            title: '¿estás seguro de querer cerrar sesión?',
            buttons: [
              {
                text: 'Cancel',
                role: 'cancel',
                handler: () => {
                  console.log('Cancel clicked');
                }
              },
              {
                text: 'cerrar sesión',
                handler: () => {
                  this.authenticationService.logOut().then(()=>{
                    console.log(firebase.auth().currentUser);
                    this.SignupService.userPlace = undefined;
                    this.navCtrl.setRoot('LoginPage');
                  })
                }
              }
            ]
          });
          alert.present();
    }

    ionViewDidLeave(){
      this.unsubscribe.next();
       this.unsubscribe.complete();
    }

}
