
import { Component, ViewChild } from '@angular/core';


import { NavController, NavParams, IonicPage, App, LoadingController } from 'ionic-angular';
// import { VerificationPage } from '../verification/verification';

// import { AngularFireDatabase } from '@angular/fire/database';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { DriverAuthenticationService } from '../../services/d-driverauthentication.service';
import { DriverSignUpService } from '../../services/d-signup.service';
import { AlertController } from 'ionic-angular';
import { Content } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { DriverWindowService } from '../../services/d-window.service';
// import * as firebase from 'firebase';
import * as firebase from 'firebase';
import { Subject } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';

declare var google;
@IonicPage()
@Component({
  selector: 'driver-page-signup',
  templateUrl: 'driverSignup.html'
})

export class DriverSignupPage {

    @ViewChild(Content) content: Content;
    user:any ={};
    car:any={};
    tokenId:any = '';
    userId:any = '';
    isReadonly = true;
    private signupGroup: FormGroup;

    //variables linked among them 
    cityVar:any;
    cities = [];
    showReadonly:boolean = true;
    // onlyEmail:any;
    arrayEmails = [];
    company:any;
    windowRef:any;
    verificationCode:string;
    unsubscribe = new Subject;
    email:any;
    geocoder: any

    emailStringVerification:any;
    rightEmailOnDatabase:any;
    zones = [];
    forLoopsCompleted:any = 0;
    companyIdentified:boolean = false;

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder, private authenticationService: DriverAuthenticationService, private SignUpService: DriverSignUpService, public  alertCtrl: AlertController, private AngularFireAuth: AngularFireAuth, public navParams: NavParams, public windowService: DriverWindowService, private app: App, private afDB: AngularFireDatabase, public loadingCtrl: LoadingController) {
    this.signupGroup = this.formBuilder.group({
        name: ["", Validators.required],
        lastname: ["", Validators.required],
        email: ["", Validators.required],
        password: ["", Validators.required],
        passwordconf: ["", Validators.required],
        phone: ["", Validators.required],
        carModel: ["", Validators.required],
        plateNumber: ["", Validators.required],
        color: ["", Validators.required],
        city: ["", Validators.required],
        isChecked:[true, Validators.required]
    })

    this.geocoder = new google.maps.Geocoder;


    // this.SignUpService.pushEmails('uninorte', '@uninorte.edu.co');
    // this.SignUpService.pushEmails('uninorte', '@jhggh.edu.co');

    this.SignUpService.getAllCities().takeUntil(this.unsubscribe)
    .subscribe(cities => {
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
                subTitle: 'Revisa si escribiste el correo bien o si tu empresa no está en Waypool, envianos un correo a team@waypooltech.com',
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
        //put this loading in user as well in next update//
        let loading = this.loadingCtrl.create({
            spinner: 'crescent',
            content: `
              <div class="custom-spinner-container">
                <div class="custom-spinner-box"></div>
              </div>`
              });
          loading.present();  
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
                        loading.dismiss();
                        const alert = this.alertCtrl.create({
                            title: 'No aceptaste nuestros términos y condiciones',
                            subTitle: 'Debes estar de acuerdo con nustros términos y condiciones para usar Waypool',
                            buttons: ['OK']
                          });
                          alert.present(); 
                
                        }else{
                            let userName = this.signupGroup.controls['name'].value;
                            let userLastName = this.signupGroup.controls['lastname'].value;
                            let userPhone = this.signupGroup.controls['phone'].value;
                            let userEmail = this.signupGroup.controls['email'].value 
                            let userPassword = this.signupGroup.controls['password'].value;
                            let userCarModel = this.signupGroup.controls['carModel'].value;
                            let userPlateNumber = this.signupGroup.controls['plateNumber'].value;
                            let usercarColor = this.signupGroup.controls['color'].value;

                
                          this.car = {
                            carModel: userCarModel,
                            plateNumber:userPlateNumber,
                            color:usercarColor
                          }
                
                          // saving data in variable
                          
                            this.user = {
                                name: userName,
                                lastname: userLastName,
                                email: userEmail,
                                phone: '+57'+userPhone,
                                createdBy: 'driver',
                                company: this.company,
                                city: this.cityVar,
                                //this sets documents true by default//
                                documents:{
                                    license: true,
                                    id: true
                                }
                            };
                            
                            
                        // this.SignUpService.userPlace = this.userPlace;
                        
                          if(this.signupGroup.controls['password'].value === this.signupGroup.controls['passwordconf'].value){
                            this.authenticationService.registerWithEmail(userEmail, userPassword).then(() =>{
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
                                                    this.SignUpService.saveUser(zone, this.user);

                                                })
                                            
                                           
                                            
                                            this.afDB.database.ref('allCities/'+ this.cityVar + '/allPlaces/' + this.company + '/location').once('value').then((snap)=>{
                                                console.log(snap.val());
                                                
                                                
                                                    snap.val().forEach(location => {
                                                        this.SignUpService.setFixedLocationCoordinates(location.zone, this.user.userId, location.lat, location.lng );
                                                        this.SignUpService.setFixedLocationName(location.zone, this.user.userId, location.name);  
                                                        this.SignUpService.addCarProfile(location.zone, this.user.userId,this.car);   
                                                        this.SignUpService.addPlaceZone(location.zone, this.user.userId);  
                                                    }) 
                                                
                                                
                                            }).then(()=>{
                                                this.SignUpService.saveUserInAllUsers(this.company, this.user.userId, this.cityVar);
                                            })
                                            
                                            
                                            
                                            //send text message with code - LATER ON
                                            // this.sendVerificationCode(this.user.userId);
                                            // this.app.getRootNav().push('LoginPage');
                
                
                                        }else{
                                            console.log('there is no user');
                                        }
                                    })
                                };
                    
                                //sending email verification and verifying whether email is verified or not
                                this.AngularFireAuth.auth.onAuthStateChanged((user)=>{
                                    if(user){
                                        if(user.emailVerified == false){
                                            user.sendEmailVerification();
                                            loading.dismiss();
                                            
                                            const alert = this.alertCtrl.create({
                                                title: '¡REGISTRO EXITOSO!',
                                                subTitle: 'En los próximos minutos te enviaremos un link de verificación a tu email',
                                                buttons: [
                                                    {
                                                        text: 'OK',
                                                        handler: () => {
                                                            
                                                                this.afDB.database.ref('allCities/'+ this.cityVar + '/allPlaces/' + this.company + '/zones').once('value').then((snap)=>{
                                                                    this.navCtrl.push('SchedulePage', {defaultZone: snap.val()[0]});  
                                                                })
                                                            
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
                                loading.dismiss();
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
                            loading.dismiss();
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
            loading.dismiss();
            this.noCompanyIdentified(count);        
        }
 }



 
    sendVerificationCode(userId){
            this.navCtrl.push('SchedulePage', {userId: userId});
    }

   

}
