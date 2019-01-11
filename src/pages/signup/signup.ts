import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { VerificationPage } from '../verification/verification';
import { AngularFireDatabase } from 'angularfire2/database';
import { SignUpService } from '../../services/signup.services';
import { AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { authenticationService } from '../../services/userauthentication.service';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';


@Component({
    selector: 'page-signup',
    templateUrl: 'signup.html'
  })
  export class SignupPage {
  user:any ={};
  userId:any = '';
  userFire:any ={};
  isReadonly = true;
  private signupGroup: FormGroup;
  userFirebase = firebase.auth().currentUser;
  
  
    constructor(public navCtrl: NavController, private afDB: AngularFireDatabase, public SignUpService: SignUpService, public alertCtrl: AlertController, private formBuilder: FormBuilder, private authenticationService: authenticationService, private AngularFireAuth: AngularFireAuth) {
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
        //   console.log(this.userFirebase);
        //   debugger;
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
              this.authenticationService.registerWithEmail(userEmailComplete, userPassword);
              this.navCtrl.push(LoginPage, this.user);

              //sending email verification and verifying weather email is verified or not
                    if(!this.user.userId){
                        this.AngularFireAuth.auth.onAuthStateChanged((user)=>{
                        if(user){
                            user.getIdToken().then((token)=>{
                                this.user.tokenId = token;
                                console.log(this.user.tokenId);
                            })   
                        if(!this.user.userId){
                            this.user.userId = user.uid;
                            console.log(this.user.userId);
                        }
                        this.SignUpService.saveUser(this.user);
                    }else{
                        console.log('there is no user');
                    }
                })
            };

            this.AngularFireAuth.auth.onAuthStateChanged((user)=>{
                if(user){
                   if(user.emailVerified == false){
                        user.sendEmailVerification();
                      console.log("verification email has been sent")
                      }else{
                      console.log("there is no user");
                        } 
                }else{
                    console.log('there is no user');
                }
            })
                
         }else{
              const alert = this.alertCtrl.create({
                  title: 'Oops!',
                  subTitle: 'las contraseñas no coinciden, intenta de nuevo',
                  buttons: ['OK']
                });
                alert.present();
          };   
      }};