import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { VerificationPage } from '../verification/verification';
import { AngularFireDatabase } from 'angularfire2/database';
import { SignUpService } from '../../services/signup.services';
import { AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { authenticationService } from '../../services/userauthentication.service';


@Component({
    selector: 'page-signup',
    templateUrl: 'signup.html'
  })
  export class SignupPage {
  user:any ={};
  userId:any = null;
  userFire:any ={};
  isReadonly = true;
  private signupGroup: FormGroup;
  
    constructor(public navCtrl: NavController, private afDB: AngularFireDatabase, public SignUpService: SignUpService, public alertCtrl: AlertController, private formBuilder: FormBuilder, private authenticationService: authenticationService) {
       this.signupGroup = this.formBuilder.group({
           name: ["", Validators.required],
           lastname: ["", Validators.required],
           email: ["", Validators.required],
           fixedemail: [""],
           password: ["", Validators.required],
           passwordconf: ["", Validators.required],
           phone: ["", Validators.required],
           
       })
    }
  
      login(){
          this.navCtrl.push(LoginPage);
      }
       
      verification(){
          // console.log(this.signupGroup.value);
          // let userForEmailVer = firebase.auth().currentUser;
          let userName = this.signupGroup.controls['name'].value;
          let userLastName = this.signupGroup.controls['lastname'].value;
          let userEmail = this.signupGroup.controls['email'].value 
          let userFixedemail = this.signupGroup.controls['fixedemail'].value;
          let userEmailComplete = userEmail + userFixedemail;
          let userPassword = this.signupGroup.controls['password'].value;
          let userPasswordconf = this.signupGroup.controls['passwordconf'].value;
          let userPhone = this.signupGroup.controls['phone'].value;
          this.user = this.signupGroup.value;
          if(userPassword === userPasswordconf){
              if(!this.user.userId){
                  this.user.userId = Date.now() ;
                  console.log(this.user.userId); 
              };
              this.authenticationService.registerWithEmail(userEmailComplete, userPassword);
              this.SignUpService.saveUser(this.user);
              this.navCtrl.push(LoginPage);
              
          }else{
              const alert = this.alertCtrl.create({
                  title: 'Oops!',
                  subTitle: 'las contraseñas no coinciden, intenta de nuevo',
                  buttons: ['OK']
                });
                alert.present();
          };   
      }}