import { Component } from '@angular/core';
import { NavController, ModalController, IonicPage, App } from 'ionic-angular';



// import { UploadPage } from '../upload/upload';
import { DriverAuthenticationService } from '../../services/d-driverauthentication.service';
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { DriverSignUpService } from '../../services/d-signup.service';

@IonicPage()
@Component({
  selector: 'driver-page-more',
  templateUrl: 'driverMore.html'
}) 
export class DriverMorePage {
     userUid=this.AngularFireAuth.auth.currentUser.uid;
     user:any={};
     verified:boolean = false;
     constructor(public navCtrl: NavController,public modalCtrl: ModalController, public AngularFireAuth:AngularFireAuth,private authenticationService: DriverAuthenticationService,public SignupService:DriverSignUpService, public app: App) {
          this.SignupService.getMyInfoForProfile(this.SignupService.userPlace, this.userUid).subscribe(user=>{
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
    showInfoCars(){

     let modal = this.modalCtrl.create('ShowInfoCarPage', {user:this.user});
    
  modal.present();   
    }
        
         terms(){
    this.navCtrl.push('TermsPage');
    }
     
         help(){
    this.navCtrl.push('HelpPage');
    }
         logout(){
          this.authenticationService.logOut();
          console.log(firebase.auth().currentUser);
          this.SignupService.userPlace = undefined;
          this.navCtrl.setRoot('LoginPage');
    }
    //      docs(){
    // this.app.getRootNav().push('CarRegistrationPage');

    // }

   

}
