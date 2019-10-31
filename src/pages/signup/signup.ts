
import { Component, ViewChild } from '@angular/core';


import { NavController, NavParams, IonicPage, App } from 'ionic-angular';
import { LoginPage } from '../login/login';

import { AngularFireDatabase } from '@angular/fire/database';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { authenticationService } from '../../services/userauthentication.service';
import { SignUpService } from '../../services/signup.services';
import { AlertController } from 'ionic-angular';
import { Content } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Subject } from 'rxjs';


declare var google;

@IonicPage()

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

    @ViewChild(Content) content: Content;
    user:any ={};
    tokenId:any = '';
    userId:any = '';
    isReadonly = true;
    private signupGroup: FormGroup;
    fixedemail:any;

    //variables linked among them 
    emailVar:any;
    enterpriseVar:any;
    companyVar:any;
    company:any;
    places = [];
    arrayEmails = [];
    showReadonly:boolean = true;
    onlyEmail:any;
    noShowButton:boolean = false;
    geocoder: any


    unsubscribe = new Subject;
  constructor(public navCtrl: NavController, private afDB: AngularFireDatabase, private formBuilder: FormBuilder, private authenticationService: authenticationService, private SignUpService: SignUpService, public  alertCtrl: AlertController, private AngularFireAuth: AngularFireAuth, public navParams: NavParams, private app: App) {


    this.signupGroup = this.formBuilder.group({
        name: ["", Validators.required],
        lastname: ["", Validators.required],
        email: ["", Validators.required],
        fixedemail: ["", Validators],
        password: ["", Validators.required],
        passwordconf: ["", Validators.required],
        phone: ["", Validators.required],
        place: ["", Validators.required],
        isChecked:[true, Validators.required]
        
    })


    this.geocoder = new google.maps.Geocoder;


    this.SignUpService.getPlaces().takeUntil(this.unsubscribe).subscribe((places)=>{
        this.places = places;
        console.log(this.places);
    })


  }

 onChange(){
        this.showReadonly = true;
        if(this.showReadonly == true){
                var count = this.places.length;
                for(var i=0; i<count; i++){
                    if(this.places[i].name == this.enterpriseVar){
                      if(this.places[i].emails == undefined){
                                this.showReadonly = false;
                            }else{
                                // this.emailVar = this.universities[i].email

                                this.SignUpService.getEmails(this.places[i].name).subscribe(emails =>{
                                    this.arrayEmails = emails;
                                    console.log(this.arrayEmails);
                                })
                            }
                        }
                    }
            }
            
        }


        onChangeEmail(){
            var count = this.arrayEmails.length;
            for(var i=0; i<count; i++){
                if(this.arrayEmails[i].email == this.companyVar){
                    this.company = this.arrayEmails[i].company;
                    console.log(this.company);
                }
            }
        }
    


    scrolling(){
        this.content.scrollTo(30, 0);
    };


    login(){
        this.navCtrl.push(LoginPage);
    }
     
    verification(){
    
        if(!this.signupGroup.controls['isChecked'].value === true ){
            const alert = this.alertCtrl.create({
                title: 'No aceptaste nuestros términos y condiciones',
                subTitle: 'Debes estar de acuerdo con nustros términos y condiciones para usar Waypool',
                buttons: ['OK']
              });
              alert.present(); 
        }else{
            if(this.showReadonly === true){
                //creating user on firebase
            let userName = this.signupGroup.controls['name'].value;
            let userLastName = this.signupGroup.controls['lastname'].value;
            let userEmail = this.signupGroup.controls['email'].value 
            let userFixedemail = this.signupGroup.controls['fixedemail'].value;
            let userEmailComplete = userEmail + userFixedemail;
            let userPassword = this.signupGroup.controls['password'].value;
            let userPhone = this.signupGroup.controls['phone'].value;
            let userPlace = this.signupGroup.controls['place'].value;     


             // saving data in variable
          if(this.company !== undefined || this.company !== null){
            this.user = {
                name: userName,
                lastname: userLastName,
                email: userEmailComplete,
                phone: '+57'+userPhone,
                place: userPlace,
                createdBy: 'costumer',
                company: this.company
            };
          }else{
            this.user = {
                name: userName,
                lastname: userLastName,
                email: userEmailComplete,
                phone: '+57'+userPhone,
                place: userPlace,
                createdBy: 'costumer',
            };  
          }


            this.SignUpService.userPlace = userPlace;
                

            if(this.signupGroup.controls['password'].value === this.signupGroup.controls['passwordconf'].value){
                this.authenticationService.registerWithEmail(userEmailComplete, userPassword).catch((error)=>{
                    if(error.code === "auth/email-already-in-use"){
                        const alert = this.alertCtrl.create({
                            title: 'ya existe una cuenta con este correo',
                            subTitle: 'Si ya te registraste en WAYPOOL, sólo debes iniciar sesión con los datos con los que te registraste. También puedes estar registrandote con un correo ya existente',
                            buttons: ['OK']
                          });
                          alert.present(); 
                    }
                })
            
                if(!this.user.userId){
                    this.AngularFireAuth.auth.onAuthStateChanged((user)=>{
                        if(user){
                                user.getIdToken().then((token)=>{
                                this.user.tokenId = token;
                                })
                            if(!this.user.userId){
                                this.user.userId = user.uid;
                            }
                            this.SignUpService.saveUser(this.user, this.SignUpService.userPlace);

                            this.afDB.database.ref('allPlaces/' + this.SignUpService.userPlace + '/location').once('value').then((snap)=>{
                                console.log(snap.val());
                                console.log(snap.val().lng);
                                
                                this.SignUpService.setFixedLocationCoordinates(this.SignUpService.userPlace, this.user.userId, snap.val().lat, snap.val().lng )
                                this.geocodingPlace(snap.val().lat, snap.val().lng, this.SignUpService.userPlace, this.user.userId);
                            })

                            this.SignUpService.saveUserInAllUsers(this.SignUpService.userPlace, this.user.userId);

                            // this.sendVerificationCode(this.user.userId);

                        }else{
                            console.log('there is no user');
                        }
                    })
                };

                // sending email verification and verifying weather email is verified or not
                this.AngularFireAuth.auth.onAuthStateChanged((user)=>{
                    if(user){
                        if(user.emailVerified == false){
                            user.sendEmailVerification();
                            const alert = this.alertCtrl.create({
                                title: '¡REGISTRO EXITOSO!',
                                subTitle: 'En los próximos minutos te enviaremos un link de verificación a tu email',
                                buttons: [
                                    {
                                        text: 'OK',
                                        handler: () => {
                                            this.app.getRootNav().push('LoginPage');
                                        }
                                      }
                                ]
                            });
                            alert.present();
                        console.log("verification email has been sent");
                        }else{
                            console.log("verification email has not been sent or the email is already verified");
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
            }
        }else if(this.showReadonly === false){
                //creating user on firebase
                let userName = this.signupGroup.controls['name'].value;
                let userLastName = this.signupGroup.controls['lastname'].value;
                let userEmail = this.signupGroup.controls['email'].value 
                let userEmailComplete = userEmail;
                let userPassword = this.signupGroup.controls['password'].value;
                let userPhone = this.signupGroup.controls['phone'].value;
                let userPlace = this.signupGroup.controls['place'].value;
               
                   // saving data in variable
          if(this.company !== undefined || this.company !== null){
            this.user = {
                name: userName,
                lastname: userLastName,
                email: userEmailComplete,
                phone: '+57'+userPhone,
                place: userPlace,
                createdBy: 'costumer',
                company: this.company
            };
          }else{
            this.user = {
                name: userName,
                lastname: userLastName,
                email: userEmailComplete,
                phone: '+57'+userPhone,
                place: userPlace,
                createdBy: 'costumer',
            };  
          }

    
                this.SignUpService.userPlace = userPlace;
                    
    
                if(this.signupGroup.controls['password'].value === this.signupGroup.controls['passwordconf'].value){
                    this.authenticationService.registerWithEmail(userEmailComplete, userPassword).catch((error)=>{
                        if(error.code === "auth/email-already-in-use"){
                            const alert = this.alertCtrl.create({
                                title: 'ya existe una cuenta con este correo',
                                subTitle: 'Si ya te registraste en WAYPOOL, sólo debes iniciar sesión con los datos con los que te registraste. También puedes estar registrandote con un correo ya existente',
                                buttons: ['OK']
                              });
                              alert.present(); 
                        }
                    })
                
                    if(!this.user.userId){
                        this.AngularFireAuth.auth.onAuthStateChanged((user)=>{
                            if(user){
                                    user.getIdToken().then((token)=>{
                                    this.user.tokenId = token;
                                    })
                                if(!this.user.userId){
                                    this.user.userId = user.uid;
                                }
                                this.SignUpService.saveUser(this.user, this.SignUpService.userPlace);
                                this.afDB.database.ref('allPlaces/' + this.SignUpService.userPlace + '/location').once('value').then((snap)=>{
                                    console.log(snap.val());
                                    console.log(snap.val().lng);
                                    
                                    this.SignUpService.setFixedLocationCoordinates(this.SignUpService.userPlace, this.user.userId, snap.val().lat, snap.val().lng )
                                    this.geocodingPlace(snap.val().lat, snap.val().lng, this.SignUpService.userPlace, this.user.userId);
                                })
                                this.SignUpService.saveUserInAllUsers(this.SignUpService.userPlace, user.uid);

                                //send text message with code
                                // this.sendVerificationCode(this.user.userId);

                            }else{
                                console.log('there is no user');
                            }
                        })
                    };
    
                    // sending email verification and verifying weather email is verified or not
                    this.AngularFireAuth.auth.onAuthStateChanged((user)=>{
                        if(user){
                            if(user.emailVerified == false){
                                user.sendEmailVerification();
                                const alert = this.alertCtrl.create({
                                    title: '¡REGISTRO EXITOSO!',
                                    subTitle: 'En los próximos minutos te enviaremos un link de verificación a tu email',
                                    buttons: [
                                        {
                                            text: 'OK',
                                            handler: () => {
                                                this.app.getRootNav().push('LoginPage');
                                            }
                                          }
                                    ]
                                });
                                alert.present();
                            console.log("verification email has been sent");
                            }else{
                                console.log("verification email has not been sent or the email is already verified");
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
                }

        }
        }
    }


    sendVerificationCode(userId){
        this.navCtrl.push('VerificationNumberPage', {userId: userId});
}

ionViewDidLeave(){
    this.unsubscribe.next();
    this.unsubscribe.complete();

  }


  geocodingPlace(lat, lng, place, userId) {

    this.geocoder.geocode({'location': {lat, lng}}, (results, status) => {
      if (status === 'OK') {
        if (results[0]) {
           let namePlace =[results[0].formatted_address];
           this.SignUpService.setFixedLocationName(place, userId, namePlace[0]);
        } else {
         alert('No results found');
        }
      } else {
        alert('Geocoder failed due to: ' + status);
      }
                  
  
    });
  }

}
