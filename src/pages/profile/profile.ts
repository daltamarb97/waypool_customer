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
             
              
              // this.SignupService.deleteAccount(this.userUid) TO-DO:QUITARLE EL COMENTARIO
              // this.navCtrl.setRoot(LoginPage)

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
    this.phone = user.phone;
    this.email = user.email;
  }
 
  

}