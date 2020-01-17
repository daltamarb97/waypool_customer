import { Component } from '@angular/core';
import { NavController, AlertController, ToastController, ModalController, IonicPage } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { authenticationService } from '../../services/userauthentication.service';
import { SignUpService } from '../../services/signup.services';
import { Subject } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';

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
// email:string;
emailComplete:string;
emailUser = this.AngularFireAuth.auth.currentUser.email;
userUid=this.AngularFireAuth.auth.currentUser.uid;
user:any={};
unsubscribe = new Subject
  constructor(public navCtrl: NavController, public modalCtrl: ModalController,public toastCtrl: ToastController,public alertCtrl:AlertController, public AngularFireAuth:AngularFireAuth,private authenticationService: authenticationService,public SignupService:SignUpService, private afDB: AngularFireDatabase) {  
    this.SignupService.getMyInfoForProfile(this.SignupService.userPlace, this.userUid).takeUntil(this.unsubscribe).subscribe(user=>{
      this.user= user;
      
        console.log(this.user)
        this.showInfoProfile(user);

    })
  }
  saveChanges(){

    this.afDB.database.ref('allCities/' + this.user.city + '/allPlaces/' + this.user.company + '/zones').once('value').then((snap)=>{
      let obj = snap.val();
      Object.getOwnPropertyNames(obj).forEach((key)=>{
        if(obj[key] === 2 || obj[key] === 3 || obj[key] === 4 || obj[key] === 5 || obj[key] === 6 || obj[key] === 1 || obj[key] === 7 || obj[key] === 8 || obj[key] === 9 || obj[key] === 10){
          
        }else{
          if(this.phone == null && this.user.about == null && this.user.url == null){
      
            
            this.navCtrl.pop();
          }else if(this.phone == null && this.user.about == null && this.user.url != null){
            this.SignupService.saveInfoProfileUrl(this.SignupService.userPlace, this.userUid,this.user.url);
            
            this.navCtrl.pop();
          }else if(this.phone == null && this.user.about != null && this.user.url == null){
            this.SignupService.saveInfoProfileAbout(this.SignupService.userPlace, this.userUid,this.user.about);
            
            this.navCtrl.pop();
          }else if(this.phone != null && this.user.about == null && this.user.url == null){
            this.SignupService.saveInfoProfilePhone(this.SignupService.userPlace, this.userUid,this.phone);
            
            this.navCtrl.pop();
          }else if(this.phone != null && this.user.about != null && this.user.url == null){
            this.SignupService.saveInfoProfilePhone(this.SignupService.userPlace, this.userUid,this.phone);
            this.SignupService.saveInfoProfileAbout(this.SignupService.userPlace, this.userUid,this.user.about);
            
            this.navCtrl.pop();
          }else if(this.phone != null && this.user.about == null && this.user.url != null){
            this.SignupService.saveInfoProfilePhone(this.SignupService.userPlace, this.userUid,this.phone);
            this.SignupService.saveInfoProfileUrl(this.SignupService.userPlace, this.userUid,this.user.url);
            
            this.navCtrl.pop();
          }else if(this.phone == null && this.user.about != null && this.user.url != null){
            this.SignupService.saveInfoProfileAbout(this.SignupService.userPlace, this.userUid,this.user.about);
            this.SignupService.saveInfoProfileUrl(this.SignupService.userPlace, this.userUid,this.user.url);
            
            this.navCtrl.pop(); 
          }else if(this.phone != null && this.user.about != null && this.user.url != null){
            this.SignupService.saveInfoProfileAbout(this.SignupService.userPlace, this.userUid,this.user.about);
            this.SignupService.saveInfoProfileUrl(this.SignupService.userPlace, this.userUid,this.user.url);
            this.SignupService.saveInfoProfilePhone(this.SignupService.userPlace, this.userUid, this.phone);
            
            this.navCtrl.pop();
          }else{
            console.log('go to the f*cking hell');
          } 
        }
      })
    }).then(()=>{
      this.toastConfirmation();
    })
    
  }

  toastConfirmation(){
    let toast = this.toastCtrl.create({
      message: 'Información actualizada',
      duration: 1000,
      position: 'bottom'
    })
    toast.present();
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
             
              this.afDB.database.ref('allCities/' + this.user.city + '/allPlaces/' + this.user.company + '/zones').once('value').then((snap)=>{
                let obj = snap.val();
                Object.getOwnPropertyNames(obj).forEach((key)=>{
                  this.SignupService.deleteAccount(obj[key], this.userUid); 
                })
              }).then(()=>{
                this.AngularFireAuth.auth.currentUser.delete().then(()=>{
                  console.log('user has been deleted');
                }).catch((error)=>{
                  console.log('error:', error)
                })
              }).then(()=>{
                this.navCtrl.setRoot('LoginPage')

              const toast = this.toastCtrl.create({
                message: `Acabas de eliminar esta cuenta, si deseas volver a ser parte de la comunidad por favor regístrate de nuevo`,
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

    this.emailComplete = user.email+user.fixedemail;
    console.log(this.emailComplete);
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
 
  ionViewDidLeave(){
    this.unsubscribe.next();
    this.unsubscribe.complete();

  }
  

}