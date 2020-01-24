import { Component } from '@angular/core';
import { NavController, AlertController, NavParams, IonicPage, Platform, ToastController, IonicModule, LoadingController } from 'ionic-angular';


import { authenticationService } from '../../services/userauthentication.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { SignUpService } from '../../services/signup.services';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as firebase from 'firebase';
import { tap } from 'rxjs/operators';
import { MyApp } from '../../app/app.component';


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
  
  constructor(public navCtrl: NavController, private authenticationService: authenticationService, public alertCtrl: AlertController, private AngularFireAuth: AngularFireAuth, public NavParams: NavParams, private SignUpService: SignUpService, private formBuilder: FormBuilder, public platform: Platform, public toastCtrl: ToastController, public loadingCtrl: LoadingController) {
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
        let loading = this.loadingCtrl.create({
            spinner: 'crescent',
            content: `
              <div class="custom-spinner-container">
                <div class="custom-spinner-box"></div>
              </div>`
              });
          loading.present();
        this.receivedUser = this.NavParams.data;
        let email = this.loginGroup.controls['email'].value;
        let password = this.loginGroup.controls['password'].value;
            this.authenticationService.loginWithEmail(email, password).then((data) => {
                console.log(data);
                if(data.user.emailVerified == false){
                    loading.dismiss();
                    const alert = this.alertCtrl.create({
                        title: 'Oops!',
                        subTitle: 'por favor verifica tu email',
                        buttons: ['OK']
                      });
                      alert.present();  
                }else{
                    let metadata = this.auth.currentUser.metadata;
                    if(metadata.creationTime === metadata.lastSignInTime){
                        console.log(metadata.creationTime);
                        console.log(metadata.lastSignInTime);
                        // this.navCtrl.setRoot('TabsPage');
                        setTimeout(()=>{
                            if(this.navCtrl.getActive().id === 'LoginPage'){
                                loading.dismiss();

                                this.navCtrl.setRoot('FindridePassPage');

                            }else{
                                loading.dismiss();

                                console.log('actuo el abservable')
                            }
                        }, 500)
            
    
                    }else{
                        setTimeout(()=>{
                            if(this.navCtrl.getActive().id === 'LoginPage'){
                                this.navCtrl.setRoot('FindridePassPage');
                                loading.dismiss();

                            }else{
                                loading.dismiss();
                                console.log('actuo el abservable')
                            }
                        }, 500)  
                     }
                    this.authenticationService.getStatus;  
                };
            }).catch((error) => {
                loading.dismiss();
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