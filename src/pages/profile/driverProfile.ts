import { Component } from '@angular/core';
import { NavController, AlertController, ToastController, ModalController, IonicPage } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { DriverSignUpService } from '../../services/d-signup.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { DriverAuthenticationService } from '../../services/d-driverauthentication.service';
import * as firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import { Subject } from 'rxjs';


@IonicPage()

@Component({
  selector: 'driver-page-profile',
  templateUrl: 'driverProfile.html'
}) 
export class DriverProfilePage {
myprofile: string = "about";
name:string;
lastname:string;
newPhone:string;
emailComplete:string;
about:string;
url:any;
userForDelete = this.AngularFireAuth.auth.currentUser;
userUid=this.AngularFireAuth.auth.currentUser.uid;
emailUser = this.AngularFireAuth.auth.currentUser.email;
user:any={};
unsubscribe = new Subject;
constructor(public navCtrl: NavController, public modalCtrl: ModalController,public toastCtrl: ToastController,public alertCtrl:AlertController, public AngularFireAuth:AngularFireAuth,private authenticationService: DriverAuthenticationService,public SignupService:DriverSignUpService, private afDB: AngularFireDatabase) {  
  this.SignupService.getMyInfoForProfile(this.userUid).takeUntil(this.unsubscribe).subscribe(user=>{
      this.user= user;
      
        console.log(this.user)
        this.showInfoProfile(user);
      

    })
  }


  saveChanges(){
    
    if(this.newPhone == null && this.user.about == null && this.user.url == null){
               
    }else if(this.newPhone == null && this.user.about == null && this.user.url != null){
      this.SignupService.saveInfoProfileUrl( this.userUid,this.user.url);
      this.toastConfirmation();

    }else if(this.newPhone == null && this.user.about != null && this.user.url == null){
      this.SignupService.saveInfoProfileAbout( this.userUid,this.user.about);
      this.toastConfirmation();

    }else if(this.newPhone != null && this.user.about == null && this.user.url == null){
      this.SignupService.saveInfoProfilePhone( this.userUid,this.newPhone);
      this.toastConfirmation();

    }else if(this.newPhone != null && this.user.about != null && this.user.url == null){
      this.SignupService.saveInfoProfilePhone( this.userUid,this.newPhone);
      this.SignupService.saveInfoProfileAbout( this.userUid,this.user.about);
      this.toastConfirmation();

    }else if(this.newPhone != null && this.user.about == null && this.user.url != null){
      this.SignupService.saveInfoProfilePhone( this.userUid,this.newPhone);
      this.SignupService.saveInfoProfileUrl( this.userUid,this.user.url);
      this.toastConfirmation();

    }else if(this.newPhone == null && this.user.about != null && this.user.url != null){
      this.SignupService.saveInfoProfileAbout( this.userUid,this.user.about);
      this.SignupService.saveInfoProfileUrl( this.userUid,this.user.url);
      this.toastConfirmation();

    }else if(this.newPhone != null && this.user.about != null && this.user.url != null){
      this.SignupService.saveInfoProfileAbout( this.userUid,this.user.about);
      this.SignupService.saveInfoProfileUrl( this.userUid,this.user.url);
      this.SignupService.saveInfoProfilePhone( this.userUid, this.newPhone);
      this.toastConfirmation();

    }else{
      console.log('go to the f*cking hell');
    }

  }

    toastConfirmation(){
      let toast = this.alertCtrl.create({
        title : 'Información actualizada',
        buttons: [
          {
            text: 'OK',
            handler: () => {
                this.navCtrl.pop();    
            }
          }
        ]
      })
      toast.present();
    }
    
     
    deleteAccount(){
      let alert = this.alertCtrl.create({
        title: 'Eliminar Cuenta',
        message: `¿Estas segur@ que deseas eliminar esta cuenta?`,
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            handler: () => {
           
            }
          },
          { 
            text: 'Eliminar',
            handler: () => {
              
              //for next build, user has to have a recent login in order to delete account//
              this.AngularFireAuth.auth.currentUser.delete().then(()=>{
                this.SignupService.deleteAccount( this.userUid);
                console.log('user has been deleted');
              }).then(()=>{

                this.navCtrl.setRoot('LoginPage')

                const toast = this.toastCtrl.create({
                  message: `Acabas de eliminar esta cuenta, si deseas volver a ser parte de la comunidad por favor regístrate de nuevo`,
                  showCloseButton: true,
                  closeButtonText: 'Ok'
                });
                toast.present();

              }).catch((error)=>{
                console.log('error:', error);

                const toast = this.toastCtrl.create({
                  message: `Hubo un error para eliminar tu cuenta, escribenos a soporte@waypooltech.com para que te ayudemos con este problema`,
                  showCloseButton: true,
                  closeButtonText: 'Ok'
                });
                toast.present();

              })
            }
          }
        ]
      });
      alert.present();
     
    }


  showInfoProfile(user){
    this.name = user.name;
    this.lastname = user.lastname;
    this.url = user.url;
    this.about = user.about;
    this.emailComplete = user.email+user.fixedemail;
  }

  changePassword(){
    this.AngularFireAuth.auth.sendPasswordResetEmail(this.emailUser).then(()=>{
      let alert = this.alertCtrl.create({
        title: 'Revisa el email con el que te registraste en Waypool',
        subTitle: 'te enviamos un correo donde podras reestablecer tu contraseña',
        buttons: ['OK']
      });
      alert.present();
    }).catch((error)=>{
      console.log(error);
    })
  }


  signOut(){
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
           
              this.navCtrl.setRoot('LoginPage');
            })
          }
        }
      ]
    });
    alert.present();
  }


  ionViewWillLeave(){
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
  
}