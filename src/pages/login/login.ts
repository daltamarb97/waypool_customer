import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { SignupPage } from '../signup/signup';
import { TabsPage } from '../tabs/tabs';
import { authenticationService } from '../../services/userauthentication.service';
import { AngularFireAuth } from 'angularfire2/auth';



@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
    email:string = '';
    password:string = null;
    auth = this.AngularFireAuth.auth;
  constructor(public navCtrl: NavController, private authenticationService: authenticationService, public alertCtrl: AlertController, private AngularFireAuth: AngularFireAuth) {

  }

  
    signup(){
        this.navCtrl.push(SignupPage);
    }

    resetPassword(email:string){
                    if(this.email == ''){
                        const alert = this.alertCtrl.create({
                            title: 'no hay ningun email',
                            subTitle: 'ingresa un email para resetear tu contraseña',
                            buttons: ['OK']
                          });
                          alert.present();
                          console.log("reset password email hasn't been sent");
                    }else{
                        this.auth.sendPasswordResetEmail(this.email);
                        const alert = this.alertCtrl.create({
                            title: 'revisa tu email',
                            subTitle: 'un correo te ha sido enviado para resetear tu contraseña',
                            buttons: ['OK']
                          });
                          alert.present(); 
                        console.log("reset password email has been sent");
                     }; 
                };
            
        
        
    
    logIn(){
        this.authenticationService.loginWithEmail(this.email, this.password).then((data) => {
            // alert("loggeado correctamente");
            console.log(data);
            if(data.user.emailVerified == false){
                const alert = this.alertCtrl.create({
                    title: 'Oops!',
                    subTitle: 'por favor verifica tu email',
                    buttons: ['OK']
                  });
                  alert.present(); 
            }else{
                this.navCtrl.push(TabsPage);
                this.authenticationService.getStatus;
            };
            
        }).catch((error) => {
            const alert = this.alertCtrl.create({
                title: 'Oops!',
                subTitle: 'El usuario o la contraseña están incorrectas',
                buttons: ['OK']
              });
              alert.present();
            console.log(error);
        });
        
    }

}
