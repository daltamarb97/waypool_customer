
import { Component, ViewChild } from '@angular/core';


import { NavController, NavParams, IonicPage, App } from 'ionic-angular';

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
    cityVar:any;
    companyVar:any;
    company:any;
    cities = [];
    arrayEmails = [];
    email:any;
    // noShowButton:boolean = false;
    geocoder: any
    
    forLoopsCompleted:any;
    companyIdentified:boolean = false;
    unsubscribe = new Subject;
    emailStringVerification:any;
    rightEmailOnDatabase:any;
    zones = [];
  constructor(public navCtrl: NavController, private afDB: AngularFireDatabase, private formBuilder: FormBuilder, private authenticationService: authenticationService, private SignUpService: SignUpService, public  alertCtrl: AlertController, private AngularFireAuth: AngularFireAuth, public navParams: NavParams, private app: App) {


    this.signupGroup = this.formBuilder.group({
        name: ["", Validators.required],
        lastname: ["", Validators.required],
        email: ["", Validators.required],
        password: ["", Validators.required],
        passwordconf: ["", Validators.required],
        phone: ["", Validators.required], 
        city: ["", Validators.required],
        isChecked:[true, Validators.required]
        
    })


    this.geocoder = new google.maps.Geocoder;


    this.SignUpService.getAllCities().takeUntil(this.unsubscribe).subscribe((cities)=>{
        this.cities = cities;
        console.log(this.cities);
    })


  }

 onChange(){

        this.arrayEmails = [];
        this.afDB.database.ref('allCities/' + this.cityVar + '/allPlaces').once('value').then((snap)=>{
            let obj = snap.val();
    
            Object.getOwnPropertyNames(obj).forEach((key)=>{
                this.arrayEmails.push(obj[key].email);
                console.log(this.arrayEmails);
                
                
            })
        })  
            
     }


        noCompanyIdentified(numberToExecute){
            ++this.forLoopsCompleted;
            if(this.forLoopsCompleted === numberToExecute){
                if(this.companyIdentified === false){
                    const alert = this.alertCtrl.create({
                        title: 'El correo que ingresaste no concuerda con el de ninguna empresa de la red de Waypool',
                        subTitle: 'Revisa si escribiste el correo bien o si tu empresa no está en Waypool, envianos un correo a waypooltec@gmail.com',
                        buttons: ['OK']
                      });
                      alert.present(); 
                }
                
            }
        }
    


    scrolling(){
        this.content.scrollTo(30, 0);
    };


    login(){
        this.navCtrl.setRoot('LoginPage');
    }
     
    verification(){
    
        this.forLoopsCompleted = 0;
        this.companyIdentified = false;
        var count = this.arrayEmails.length;
        for(var i=0; i<count; i++){

            this.emailStringVerification = this.email.indexOf(this.arrayEmails[i]);
            console.log(this.emailStringVerification);
            if(this.emailStringVerification > -1){
                this.companyIdentified = true;
                this.rightEmailOnDatabase = this.arrayEmails[i];
                this.afDB.database.ref('allCities/' + this.cityVar + '/allPlaces').once('value').then((snap)=>{
                    let obj = snap.val();
                    Object.getOwnPropertyNames(obj).forEach((key)=>{ 
                        if(obj[key].email === this.rightEmailOnDatabase){
                            console.log(`la empresa es ${obj[key].name}`);  
                            this.company = obj[key].name;
                                obj[key].zones.forEach(zone => {
                                    this.zones.push(zone);
                                });                                  
                            
                            
                            
                        }
                    })
                }).then(()=>{
                   if(!this.signupGroup.controls['isChecked'].value === true ){
                            const alert = this.alertCtrl.create({
                                title: 'No aceptaste nuestros términos y condiciones',
                                subTitle: 'Debes estar de acuerdo con nustros términos y condiciones para usar Waypool',
                                buttons: ['OK']
                            });
                            alert.present(); 
                        }else{
                                //creating user on firebase
                                let userName = this.signupGroup.controls['name'].value;
                                let userLastName = this.signupGroup.controls['lastname'].value;
                                let userEmail = this.signupGroup.controls['email'].value 
                                let userPassword = this.signupGroup.controls['password'].value;
                                let userPhone = this.signupGroup.controls['phone'].value;
                            
                        // saving data in variable
                       
                            this.user = {
                                name: userName,
                                lastname: userLastName,
                                email: userEmail,
                                phone: '+57'+userPhone,
                                createdBy: 'costumer',
                                company: this.company,
                                city: this.cityVar
                            };
                        

                    
                                // this.SignUpService.userPlace = userPlace;
                                    
                    
                                if(this.signupGroup.controls['password'].value === this.signupGroup.controls['passwordconf'].value){
                                    this.authenticationService.registerWithEmail(userEmail, userPassword).then(()=>{

                                        if(!this.user.userId){
                                            this.AngularFireAuth.auth.onAuthStateChanged((user)=>{
                                                if(user){
                                                        user.getIdToken().then((token)=>{
                                                        this.user.tokenId = token;
                                                        })
                                                    if(!this.user.userId){
                                                        this.user.userId = user.uid;
                                                    }
    
                                                    this.zones.forEach(zone => {
                                                        this.SignUpService.saveUser(this.user, zone);
                                                    })
    
                                                    this.afDB.database.ref('allCities/'+ this.cityVar + '/allPlaces/' + this.company + '/location').once('value').then((snap)=>{
                                                        console.log(snap.val());
                                                        
                                                        snap.val().forEach(location => {
                                                            this.SignUpService.setFixedLocationCoordinates(location.zone, this.user.userId, location.lat, location.lng );
                                                            this.SignUpService.setFixedLocationName(location.zone, this.user.userId, location.name);   
                                                            this.SignUpService.addPlaceZone(location.zone, this.user.userId);  
                                                        })
    
                                                    }).then(()=>{
                                                        this.SignUpService.saveUserInAllUsers(this.company, user.uid, this.cityVar);
                                                    })
    
                                                    //send text message with code
                                                    // this.sendVerificationCode(this.user.userId);
    
                                                }else{
                                                    console.log('there is no user');
                                                }
                                            })
                                        };
                        
                                        // sending email verification and verifying whether email is verified or not
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
                                                                    this.navCtrl.setRoot('LoginPage');
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

                                    }).catch((error)=>{
                                        if(error.code === "auth/email-already-in-use"){
                                            const alert = this.alertCtrl.create({
                                                title: 'ya existe una cuenta con este correo',
                                                subTitle: 'Si ya te registraste en WAYPOOL, sólo debes iniciar sesión con los datos con los que te registraste. También puedes estar registrandote con un correo ya existente',
                                                buttons: ['OK']
                                            });
                                            alert.present(); 
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
                })
            }
            this.noCompanyIdentified(count);        
        }
       
    }


    sendVerificationCode(userId){
        this.navCtrl.push('VerificationNumberPage', {userId: userId});
}

ionViewDidLeave(){
    this.unsubscribe.next();
    this.unsubscribe.complete();

  }

}