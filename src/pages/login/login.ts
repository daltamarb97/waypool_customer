import { Component } from '@angular/core';
import { NavController, AlertController, NavParams, IonicPage, Platform, ToastController } from 'ionic-angular';


import { authenticationService } from '../../services/userauthentication.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { SignUpService } from '../../services/signup.services';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TabsPage } from '../tabs/tabs';
import * as firebase from 'firebase';
import { tap } from 'rxjs/operators';


@IonicPage()

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

    email:string = '';
    password;
    auth = this.AngularFireAuth.auth;
    receivedUser;
    private loginGroup: FormGroup;
  
  constructor(public navCtrl: NavController, private authenticationService: authenticationService, public alertCtrl: AlertController, private AngularFireAuth: AngularFireAuth, public NavParams: NavParams, private SignUpService: SignUpService, private formBuilder: FormBuilder, public platform: Platform, public toastCtrl: ToastController) {
    this.loginGroup = this.formBuilder.group({
        email: ["", Validators.required],
        password: ["", Validators.required]
    })

  }




  signup(){
    this.navCtrl.push('SignupPage');

};

    resetPassword(email:string){
                    if(this.loginGroup.controls['email'].value == ''){
                        const alert = this.alertCtrl.create({
                            title: 'no hay ningun email',
                            subTitle: 'ingresa un email para resetear tu contraseña',
                            buttons: ['OK']
                          });
                          alert.present();
                          console.log("reset password email hasn't been sent");
                    }else{
                        this.auth.sendPasswordResetEmail(this.loginGroup.controls['email'].value);
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
        this.receivedUser = this.NavParams.data;
        let email = this.loginGroup.controls['email'].value;
        let password = this.loginGroup.controls['password'].value;
            this.authenticationService.loginWithEmail(email, password).then((data) => {
                console.log(data);
                if(data.user.emailVerified == false){
                    const alert = this.alertCtrl.create({
                        title: 'Oops!',
                        subTitle: 'por favor verifica tu email',
                        buttons: ['OK']
                      });
                      alert.present();  
                }else{
                    let metadata = this.auth.currentUser.metadata;
                    if(metadata.creationTime == metadata.lastSignInTime){
                        console.log(metadata.creationTime);
                        console.log(metadata.lastSignInTime);
    
                        this.navCtrl.push('TabsPage');//aqui va registration car, no tabspge
    
                    }else{
                        this.navCtrl.push('TabsPage');
                    }
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

            localStorage.setItem('currentUser', 'user');
        
    }
}