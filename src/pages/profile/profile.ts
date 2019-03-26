import { Component } from '@angular/core';
import { NavController, AlertController, ToastController, ModalController, IonicPage } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { authenticationService } from '../../services/userauthentication.service';
import { SignUpService } from '../../services/signup.services';

@IonicPage()

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
myprofile: string = "about";
name:string;
lastname:string;
phone:string;
email:string;
emailUser = this.AngularFireAuth.auth.currentUser.email;
userUid=this.AngularFireAuth.auth.currentUser.uid;
user:any={};
  constructor(public navCtrl: NavController, public modalCtrl: ModalController,public toastCtrl: ToastController,public alertCtrl:AlertController, public AngularFireAuth:AngularFireAuth,private authenticationService: authenticationService,public SignupService:SignUpService) {  
    this.SignupService.getMyInfoForProfile(this.userUid).subscribe(user=>{
      this.user= user;
      
        console.log(this.user)
        this.showInfoProfile(user);

    })
  }
  saveChanges(){
    this.SignupService.saveInfoProfile(this.userUid,this.phone);
    console.log("lologre")
    }

    deleteAccount(){
      let alert = this.alertCtrl.create({
        title: 'Eliminar Cuenta',
        message: `¿Estas segur@ que deseas eliminar esta cuenta? si tienes cuenta en WAYPOOL DRIVER también se eliminará`,
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
             
              
              this.SignupService.deleteAccount(this.userUid) 
              this.AngularFireAuth.auth.currentUser.delete().then(()=>{
                console.log('user has been deleted');
              }).catch((error)=>{
                console.log('error:', error)
              })
              this.navCtrl.setRoot('LoginPage')

              const toast = this.toastCtrl.create({
                message: `Acabas de eliminar esta cuenta, si deseas volver a ser parte de la comunidad por favor regístrate de nuevo`,
                showCloseButton: true,
                closeButtonText: 'Ok'
              });
              toast.present();
      
  
            }
          }
        ]
      });
      alert.present();
     
    }
  showInfoProfile(user){
    this.name = user.name;
    this.lastname = user.lastname;

    this.email = user.email;
  }

  changePassword(){
    this.AngularFireAuth.auth.sendPasswordResetEmail(this.emailUser).then(()=>{
      let alert = this.alertCtrl.create({
        title: 'Revisa tu email',
        subTitle: 'te enviamos un correo donde podras reestablecer tu contraseña',
        buttons: ['OK']
      });
      alert.present();
    }).catch((error)=>{
      console.log(error);
    })
  }
 
  

}