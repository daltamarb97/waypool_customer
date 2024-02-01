webpackJsonp([30],{

/***/ 703:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup__ = __webpack_require__(900);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SignupPageModule = /** @class */ (function () {
    function SignupPageModule() {
    }
    SignupPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */]
            ]
        })
    ], SignupPageModule);
    return SignupPageModule;
}());

//# sourceMappingURL=signup.module.js.map

/***/ }),

/***/ 900:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_userauthentication_service__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_signup_services__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var SignupPage = /** @class */ (function () {
    function SignupPage(viewCtrl, navCtrl, afDB, formBuilder, authenticationService, SignUpService, alertCtrl, AngularFireAuth, navParams, app, loadingCtrl) {
        var _this = this;
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.afDB = afDB;
        this.formBuilder = formBuilder;
        this.authenticationService = authenticationService;
        this.SignUpService = SignUpService;
        this.alertCtrl = alertCtrl;
        this.AngularFireAuth = AngularFireAuth;
        this.navParams = navParams;
        this.app = app;
        this.loadingCtrl = loadingCtrl;
        this.user = {};
        this.tokenId = '';
        this.userId = '';
        this.isReadonly = true;
        this.cities = [];
        this.arrayEmails = [];
        this.corpEmailDetected = false;
        this.emailIdentified = false;
        this.successfulRegister = false;
        this.unsubscribe = new __WEBPACK_IMPORTED_MODULE_7_rxjs__["Subject"];
        this.zones = [];
        this.caracteresPassword = '';
        this.passwordNg = '';
        this.typeOfSignUp = this.navParams.get('typeOfSignUp');
        console.log(this.typeOfSignUp);
        this.signupGroup = this.formBuilder.group({
            name: ["", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            lastname: ["", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            email: ["", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            password: ["", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            passwordconf: ["", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            phone: ["", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            city: ["", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            company: ["", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            isChecked: [true, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]
        });
        this.geocoder = new google.maps.Geocoder;
        this.SignUpService.getAllCities().takeUntil(this.unsubscribe).subscribe(function (cities) {
            _this.cities = cities;
            console.log(_this.cities);
        });
    }
    SignupPage.prototype.onChangePass = function () {
        console.log('cambio password');
        if (this.passwordNg.length === 0) {
            this.css = {
                'font-weight': 'bold',
                'color': 'red'
            };
            this.caracteresPassword = 'mínimo 6 caracteres';
        }
        else if (this.passwordNg.length === 1) {
            this.css = {
                'font-weight': 'bold',
                'color': 'red'
            };
            this.caracteresPassword = 'contraseña débil';
        }
        else if (this.passwordNg.length === 2) {
            this.css = {
                'font-weight': 'bold',
                'color': 'red'
            };
            this.caracteresPassword = 'contraseña débil';
        }
        else if (this.passwordNg.length === 3) {
            this.css = {
                'font-weight': 'bold',
                'color': '#E3D245'
            };
            this.caracteresPassword = 'contraseña media';
        }
        else if (this.passwordNg.length === 4) {
            this.css = {
                'font-weight': 'bold',
                'color': '#E3D245'
            };
            this.caracteresPassword = 'contraseña media';
        }
        else if (this.passwordNg.length === 5) {
            this.css = {
                'font-weight': 'bold',
                'color': '#E3D245'
            };
            this.caracteresPassword = 'contraseña media';
        }
        else if (this.passwordNg.length === 6) {
            this.css = {
                'font-weight': 'bold',
                'color': 'green'
            };
            this.caracteresPassword = 'contraseña óptima';
        }
        else {
            this.css = {
                'font-weight': 'bold',
                'color': 'green'
            };
            this.caracteresPassword = 'contraseña óptima';
        }
    };
    SignupPage.prototype.onChange = function () {
        this.arrayEmails = [];
        // this.afDB.database.ref('allCities/' + this.cityVar + '/allPlaces').once('value').then((snap)=>{
        //     let obj = snap.val();
        //     Object.getOwnPropertyNames(obj).forEach((key)=>{
        //         this.arrayEmails.push(obj[key].email);
        //         console.log(this.arrayEmails);
        //     })
        // })  
        this.arrayEmails.push('@gmail.com', '@hotmail.com', '@yahoo.com');
    };
    SignupPage.prototype.scrolling = function () {
        this.content.scrollTo(30, 0);
    };
    ;
    SignupPage.prototype.login = function () {
        this.viewCtrl.dismiss(this.loginGreenFlag = true);
    };
    SignupPage.prototype.verification = function () {
        var _this = this;
        this.emailIdentified = false;
        this.corpEmailDetected = false;
        this.successfulRegister = false;
        var loading = this.loadingCtrl.create({
            spinner: 'crescent',
            content: "\n              <div class=\"custom-spinner-container\">\n                <div class=\"custom-spinner-box\"></div>\n              </div>"
        });
        loading.present();
        // this.forLoopsCompleted = 0;
        // this.companyIdentified = false;
        console.log(this.arrayEmails.length);
        var count = this.arrayEmails.length;
        for (var i = 0; i < count; i++) {
            if (this.emailIdentified === false && this.corpEmailDetected === false && this.successfulRegister === false) {
                this.emailStringVerification = this.email.indexOf(this.arrayEmails[i]);
                console.log(this.emailStringVerification);
                if (this.emailStringVerification > -1) {
                    this.emailIdentified = true;
                    if (this.typeOfSignUp === 'personal') {
                        if (!this.signupGroup.controls['isChecked'].value === true) {
                            loading.dismiss();
                            var alert_1 = this.alertCtrl.create({
                                title: 'No aceptaste nuestros términos y condiciones',
                                subTitle: 'Debes estar de acuerdo con nustros términos y condiciones para usar Waypool',
                                buttons: ['OK']
                            });
                            alert_1.present();
                        }
                        else {
                            //creating user on firebase
                            var userName = this.signupGroup.controls['name'].value;
                            var userLastName = this.signupGroup.controls['lastname'].value;
                            var userEmail = this.signupGroup.controls['email'].value;
                            var userPassword = this.signupGroup.controls['password'].value;
                            var userPhone = this.signupGroup.controls['phone'].value;
                            var userComapny = this.signupGroup.controls['company'].value;
                            // saving data in variable
                            this.user = {
                                name: userName,
                                lastname: userLastName,
                                email: userEmail,
                                phone: '+57' + userPhone,
                                createdBy: 'costumer',
                                // PREGUNTARLE SOBRE QUÉ EMPRESA TRABAJA MÁS ADELANTE
                                company: userComapny,
                                city: this.cityVar,
                                //this sets documents true by default//
                                documents: {
                                    carne: false,
                                    id: false
                                },
                                appStatus: 'user'
                            };
                            // this.SignUpService.userPlace = userPlace;
                            if (this.signupGroup.controls['password'].value === this.signupGroup.controls['passwordconf'].value) {
                                this.authenticationService.registerWithEmail(userEmail, userPassword).then(function () {
                                    if (!_this.user.userId) {
                                        _this.AngularFireAuth.auth.onAuthStateChanged(function (user) {
                                            if (user) {
                                                user.getIdToken().then(function (token) {
                                                    _this.user.tokenId = token;
                                                });
                                                if (!_this.user.userId) {
                                                    _this.user.userId = user.uid;
                                                }
                                                // this.zones.forEach(zone => {
                                                //CAMBIAR  EN PRODUCCION - REGLAS DE SEGURIDAD
                                                _this.SignUpService.saveUserTest(_this.user);
                                                //no se si esto es necesario - REVISAR
                                                // this.SignUpService.saveUserInAllUsers( user.uid, this.cityVar);
                                                // })
                                                //send text message with code
                                                // this.sendVerificationCode(this.user.userId);
                                            }
                                            else {
                                                console.log('there is no user');
                                            }
                                        });
                                    }
                                    ;
                                    // sending email verification and verifying whether email is verified or not
                                    _this.AngularFireAuth.auth.onAuthStateChanged(function (user) {
                                        if (user) {
                                            if (user.emailVerified == false) {
                                                user.sendEmailVerification();
                                                loading.dismiss();
                                                var alert_2 = _this.alertCtrl.create({
                                                    title: '¡REGISTRO EXITOSO!',
                                                    subTitle: 'En los próximos minutos te enviaremos un link de verificación a tu email',
                                                    buttons: [
                                                        {
                                                            text: 'OK',
                                                            handler: function () {
                                                                _this.loginGreenFlag = false;
                                                                // this.navCtrl.setRoot('DriverUserVerificationPage'); 
                                                                _this.viewCtrl.dismiss();
                                                            }
                                                        }
                                                    ]
                                                });
                                                _this.successfulRegister = true;
                                                alert_2.present();
                                                console.log("verification email has been sent");
                                            }
                                            else {
                                                console.log("verification email has not been sent or the email is already verified");
                                            }
                                        }
                                        else {
                                            console.log('there is no user');
                                        }
                                    });
                                }).catch(function (error) {
                                    loading.dismiss();
                                    console.log(error);
                                    if (error.code === "auth/email-already-in-use") {
                                        var alert_3 = _this.alertCtrl.create({
                                            title: 'ya existe una cuenta con este correo',
                                            subTitle: 'Si ya te registraste en WAYPOOL, sólo debes iniciar sesión con los datos con los que te registraste. También puedes estar registrandote con un correo ya existente',
                                            buttons: ['OK']
                                        });
                                        alert_3.present();
                                    }
                                });
                            }
                            else {
                                loading.dismiss();
                                var alert_4 = this.alertCtrl.create({
                                    title: 'Oops!',
                                    subTitle: 'las contraseñas no coinciden, intenta de nuevo',
                                    buttons: ['OK']
                                });
                                alert_4.present();
                            }
                        }
                    }
                    else {
                        loading.dismiss();
                        var alert_5 = this.alertCtrl.create({
                            title: 'El correo que ingresaste no corresponde a un correo corporativo',
                            subTitle: 'Regístrate con la opción "registro con correo personal" si tu empresa no cuenta con correo corporativo',
                            buttons: ['OK']
                        });
                        alert_5.present();
                    }
                }
                else {
                    this.corpEmailDetected = true;
                    if (this.typeOfSignUp === 'corp') {
                        if (!this.signupGroup.controls['isChecked'].value === true) {
                            loading.dismiss();
                            var alert_6 = this.alertCtrl.create({
                                title: 'No aceptaste nuestros términos y condiciones',
                                subTitle: 'Debes estar de acuerdo con nustros términos y condiciones para usar Waypool',
                                buttons: ['OK']
                            });
                            alert_6.present();
                        }
                        else {
                            //creating user on firebase
                            var userName = this.signupGroup.controls['name'].value;
                            var userLastName = this.signupGroup.controls['lastname'].value;
                            var userEmail = this.signupGroup.controls['email'].value;
                            var userPassword = this.signupGroup.controls['password'].value;
                            var userPhone = this.signupGroup.controls['phone'].value;
                            var userComapny = this.signupGroup.controls['company'].value;
                            // saving data in variable
                            this.user = {
                                name: userName,
                                lastname: userLastName,
                                email: userEmail,
                                phone: '+57' + userPhone,
                                createdBy: 'costumer',
                                company: userComapny,
                                city: this.cityVar,
                                documents: {
                                    carne: true,
                                    id: true
                                },
                                appStatus: 'user'
                            };
                            // this.SignUpService.userPlace = userPlace;
                            if (this.signupGroup.controls['password'].value === this.signupGroup.controls['passwordconf'].value) {
                                this.authenticationService.registerWithEmail(userEmail, userPassword).then(function () {
                                    if (!_this.user.userId) {
                                        _this.AngularFireAuth.auth.onAuthStateChanged(function (user) {
                                            if (user) {
                                                user.getIdToken().then(function (token) {
                                                    _this.user.tokenId = token;
                                                });
                                                if (!_this.user.userId) {
                                                    _this.user.userId = user.uid;
                                                }
                                                // this.zones.forEach(zone => {
                                                //CAMBIAR  EN PRODUCCION - REGLAS DE SEGURIDAD
                                                _this.SignUpService.saveUserTest(_this.user);
                                                //no se si esto es necesario - REVISAR
                                                // this.SignUpService.saveUserInAllUsers( user.uid, this.cityVar);
                                                // })
                                                //send text message with code
                                                // this.sendVerificationCode(this.user.userId);
                                            }
                                            else {
                                                console.log('there is no user');
                                            }
                                        });
                                    }
                                    ;
                                    // sending email verification and verifying whether email is verified or not
                                    _this.AngularFireAuth.auth.onAuthStateChanged(function (user) {
                                        if (user) {
                                            if (user.emailVerified == false) {
                                                user.sendEmailVerification();
                                                loading.dismiss();
                                                var alert_7 = _this.alertCtrl.create({
                                                    title: '¡REGISTRO EXITOSO!',
                                                    subTitle: 'En los próximos minutos te enviaremos un link de verificación a tu email',
                                                    buttons: [
                                                        {
                                                            text: 'OK',
                                                            handler: function () {
                                                                _this.loginGreenFlag = true;
                                                                // this.navCtrl.setRoot('LoginPage');   
                                                                _this.viewCtrl.dismiss();
                                                            }
                                                        }
                                                    ]
                                                });
                                                alert_7.present();
                                                _this.successfulRegister = true;
                                                console.log("verification email has been sent");
                                            }
                                            else {
                                                console.log("verification email has not been sent or the email is already verified");
                                            }
                                        }
                                        else {
                                            console.log('there is no user');
                                        }
                                    });
                                }).catch(function (error) {
                                    loading.dismiss();
                                    console.log(error);
                                    if (error.code === "auth/email-already-in-use") {
                                        var alert_8 = _this.alertCtrl.create({
                                            title: 'ya existe una cuenta con este correo',
                                            subTitle: 'Si ya te registraste en WAYPOOL, sólo debes iniciar sesión con los datos con los que te registraste. También puedes estar registrandote con un correo ya existente',
                                            buttons: ['OK']
                                        });
                                        alert_8.present();
                                    }
                                });
                            }
                            else {
                                loading.dismiss();
                                var alert_9 = this.alertCtrl.create({
                                    title: 'Oops!',
                                    subTitle: 'las contraseñas no coinciden, intenta de nuevo',
                                    buttons: ['OK']
                                });
                                alert_9.present();
                            }
                        }
                    }
                    else {
                        this.corpEmailDetected = true;
                        loading.dismiss();
                        var alert_10 = this.alertCtrl.create({
                            title: 'El correo que ingresaste parece ser un correo corporativo',
                            subTitle: 'Regístrate con la opción "registro con correo corporativo" si cuentas con un correo corporativo',
                            buttons: ['OK']
                        });
                        alert_10.present();
                    }
                }
                loading.dismiss();
                // this.noCompanyIdentified(count);
            }
            else {
            }
        }
    };
    SignupPage.prototype.sendVerificationCode = function (userId) {
        this.navCtrl.push('VerificationNumberPage', { userId: userId });
    };
    SignupPage.prototype.ionViewDidLeave = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */])
    ], SignupPage.prototype, "content", void 0);
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"C:\Users\danie\Documents\waypool\prod\latest\waypool_costumer\src\pages\p-signup\signup.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-icon name="md-close" class="close-icon" (click)="login()"></ion-icon>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n\n\n<ion-content>\n\n    \n\n     <div class="logo">\n\n        <img src="assets/imgs/logo waypool W-01.png" alt="logo">\n\n        \n\n        <h1 class="text-theme">Bienvenido a Waypool</h1>\n\n    </div>\n\n    \n\n\n\n    <form [formGroup]="signupGroup" (ngSubmit)="verification()">\n\n        <div class="bg-white login">\n\n            <div>\n\n   \n\n            <ion-list class="form">\n\n                <ion-item>\n\n                    <ion-label></ion-label>\n\n                    <ion-input class="color-bottom"  type="text"  text-right formControlName="name" placeholder= "Tú nombre" ></ion-input>\n\n                </ion-item>\n\n             \n\n            \n\n                <ion-item>\n\n                    <ion-label></ion-label>\n\n                    <ion-input class="color-bottom"  type="text"  text-right  formControlName="lastname" placeholder= "Tú apellido" ></ion-input>\n\n                </ion-item>\n\n            \n\n            \n\n                <ion-item class="editable-email">\n\n                    <ion-label  fixed></ion-label>\n\n                    <ion-input class="color-bottom"  type="text" text-right [(ngModel)]=\'email\' formControlName="email" placeholder= "email" ></ion-input>\n\n                </ion-item>\n\n            \n\n            \n\n                <ion-item class="editable-email">\n\n                    <ion-label  fixed></ion-label>\n\n                    <ion-input class="color-bottom"  type="text" text-right [(ngModel)]=\'company\' formControlName="company" placeholder= "Tú empresa"></ion-input>\n\n                </ion-item>\n\n            \n\n            \n\n                <ion-item>\n\n                    <ion-label  text-right >selecciona tu ciudad</ion-label>\n\n                    <ion-select class="color-bottom" (ionChange)="onChange()" [(ngModel)]="cityVar" formControlName="city">\n\n                        <ion-option *ngFor="let city of cities">{{city.name}}</ion-option>\n\n                    </ion-select>\n\n                </ion-item>\n\n            \n\n            \n\n                <ion-item>\n\n                    <ion-label  fixed><span [ngStyle]="css">{{caracteresPassword}}</span></ion-label>\n\n                    <ion-input class="color-bottom"  type="password"  text-right formControlName="password" [(ngModel)]="passwordNg" (ngModelChange)="onChangePass()"placeholder= "crea tu contraseña" minlength="6"></ion-input>\n\n                </ion-item>\n\n            \n\n            \n\n                <ion-item>\n\n                    <ion-label></ion-label>\n\n                    <ion-input class="color-bottom"  type="password"  text-right formControlName="passwordconf" placeholder= "confirma tu contraseña" minlength="6"></ion-input>\n\n                </ion-item>\n\n            \n\n            \n\n                <ion-item>\n\n                    <ion-label></ion-label>\n\n                    <ion-input class="color-bottom"  type="number" text-right formControlName="phone" placeholder= "Tú número de celular" ></ion-input>\n\n                </ion-item>\n\n            \n\n            \n\n                <ion-item>\n\n                    <ion-label class="color-bottom" >Por favor lee y acepta nuestros términos y condiciones</ion-label>\n\n                    <ion-checkbox formControlName="isChecked" ></ion-checkbox>\n\n                </ion-item>\n\n            \n\n            \n\n                <ion-item>\n\n                    <p>Ver <a href="https://waypooltech.wordpress.com/">términos y condiciones</a></p>\n\n                </ion-item>\n\n            </ion-list>\n\n            <div class="footer-signup">\n\n                    <button ion-button full class="bg-theme text-white btn rounded" type="submit" [disabled]="!signupGroup.valid">¡Únete ya!</button>\n\n                    <p text-center>¿ya estas registrado? <strong class="text-theme" (click)="login()">Inicia sesión</strong></p>\n\n            </div>\n\n        </div>\n\n    </div>\n\n</form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\danie\Documents\waypool\prod\latest\waypool_costumer\src\pages\p-signup\signup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_4__services_userauthentication_service__["a" /* authenticationService */], __WEBPACK_IMPORTED_MODULE_5__services_signup_services__["a" /* SignUpService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ })

});
//# sourceMappingURL=30.js.map