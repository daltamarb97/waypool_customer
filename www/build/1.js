webpackJsonp([1],{

/***/ 656:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup__ = __webpack_require__(810);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */]),
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

/***/ 659:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_userauthentication_service__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_signup_services__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, authenticationService, alertCtrl, AngularFireAuth, NavParams, SignUpService, formBuilder, platform, toastCtrl) {
        this.navCtrl = navCtrl;
        this.authenticationService = authenticationService;
        this.alertCtrl = alertCtrl;
        this.AngularFireAuth = AngularFireAuth;
        this.NavParams = NavParams;
        this.SignUpService = SignUpService;
        this.formBuilder = formBuilder;
        this.platform = platform;
        this.toastCtrl = toastCtrl;
        this.email = '';
        this.auth = this.AngularFireAuth.auth;
        this.loginGroup = this.formBuilder.group({
            email: ["", __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required],
            password: ["", __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required]
        });
    }
    LoginPage.prototype.signup = function () {
        this.navCtrl.push('SignupPage');
    };
    ;
    LoginPage.prototype.resetPassword = function (email) {
        if (this.loginGroup.controls['email'].value == '') {
            var alert_1 = this.alertCtrl.create({
                title: 'no hay ningun email',
                subTitle: 'ingresa un email para resetear tu contraseña',
                buttons: ['OK']
            });
            alert_1.present();
            console.log("reset password email hasn't been sent");
        }
        else {
            this.auth.sendPasswordResetEmail(this.loginGroup.controls['email'].value);
            var alert_2 = this.alertCtrl.create({
                title: 'revisa tu email',
                subTitle: 'un correo te ha sido enviado para resetear tu contraseña',
                buttons: ['OK']
            });
            alert_2.present();
            console.log("reset password email has been sent");
        }
        ;
    };
    ;
    LoginPage.prototype.logIn = function () {
        var _this = this;
        this.receivedUser = this.NavParams.data;
        var email = this.loginGroup.controls['email'].value;
        var password = this.loginGroup.controls['password'].value;
        this.authenticationService.loginWithEmail(email, password).then(function (data) {
            console.log(data);
            if (data.user.emailVerified == false) {
                var alert_3 = _this.alertCtrl.create({
                    title: 'Oops!',
                    subTitle: 'por favor verifica tu email',
                    buttons: ['OK']
                });
                alert_3.present();
            }
            else {
                var metadata = _this.auth.currentUser.metadata;
                if (metadata.creationTime === metadata.lastSignInTime) {
                    console.log(metadata.creationTime);
                    console.log(metadata.lastSignInTime);
                    // this.navCtrl.setRoot('TabsPage');
                    setTimeout(function () {
                        if (_this.navCtrl.getActive().id === 'LoginPage') {
                            _this.navCtrl.setRoot('TabsPage');
                        }
                        else {
                            console.log('actuo el abservable');
                        }
                    }, 500);
                }
                else {
                    setTimeout(function () {
                        if (_this.navCtrl.getActive().id === 'LoginPage') {
                            _this.navCtrl.setRoot('TabsPage');
                        }
                        else {
                            console.log('actuo el abservable');
                        }
                    }, 500);
                }
                _this.authenticationService.getStatus;
            }
            ;
        }).catch(function (error) {
            var alert = _this.alertCtrl.create({
                title: 'Oops!',
                subTitle: 'El usuario o la contraseña están incorrectas',
                buttons: ['OK']
            });
            alert.present();
            console.log(error);
        });
        localStorage.setItem('currentUser', 'user');
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/WAYPOOL_OFICIAL/waypool_costumer/src/pages/login/login.html"*/'<ion-header class="transparent">\n    <ion-navbar>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <div class="logo">\n        <img src="assets/imgs/logo waypool-01.png" alt="logo">\n    </div>\n\n    <div class="bg-white login">\n        <div class="">\n         <form [formGroup]="loginGroup" (ngSubmit)="logIn()">\n            <ion-list class="form">\n                <ion-item>\n                    <ion-label></ion-label>\n                    <ion-input type="email"  text-right  formControlName="email" placeholder= "email universitario"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label></ion-label>\n                    <ion-input type="password" text-right  formControlName="password" placeholder= "Tú contraseña"></ion-input>\n                </ion-item>\n            </ion-list>\n            <button ion-button full class="bg-theme text-white btn rounded" type="submit" [disabled]="!loginGroup.valid">ENTRAR</button>\n            <br>\n         </form>\n\n            <ion-row style="padding-top: 30px;">\n                <ion-col (click)="signup()"><small>¿Eres nuevo? <strong class="text-theme">¡Regístrate!</strong></small></ion-col>\n                <ion-col text-right (click)="resetPassword(email)"><small>Olvidaste tu <strong class="text-theme">contraseña?</strong></small></ion-col>\n            </ion-row>\n           \n\n        </div>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/WAYPOOL_OFICIAL/waypool_costumer/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_userauthentication_service__["a" /* authenticationService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__services_signup_services__["a" /* SignUpService */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 810:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(659);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_userauthentication_service__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_signup_services__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs__ = __webpack_require__(15);
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
    function SignupPage(navCtrl, afDB, formBuilder, authenticationService, SignUpService, alertCtrl, AngularFireAuth, navParams, app) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.afDB = afDB;
        this.formBuilder = formBuilder;
        this.authenticationService = authenticationService;
        this.SignUpService = SignUpService;
        this.alertCtrl = alertCtrl;
        this.AngularFireAuth = AngularFireAuth;
        this.navParams = navParams;
        this.app = app;
        this.user = {};
        this.tokenId = '';
        this.userId = '';
        this.isReadonly = true;
        this.places = [];
        this.arrayEmails = [];
        this.showReadonly = true;
        this.noShowButton = false;
        this.unsubscribe = new __WEBPACK_IMPORTED_MODULE_8_rxjs__["Subject"];
        this.signupGroup = this.formBuilder.group({
            name: ["", __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            lastname: ["", __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            email: ["", __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            fixedemail: ["", __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */]],
            password: ["", __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            passwordconf: ["", __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            phone: ["", __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            place: ["", __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            isChecked: [true, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]
        });
        this.geocoder = new google.maps.Geocoder;
        this.SignUpService.getPlaces().takeUntil(this.unsubscribe).subscribe(function (places) {
            _this.places = places;
            console.log(_this.places);
        });
    }
    SignupPage.prototype.onChange = function () {
        var _this = this;
        this.showReadonly = true;
        if (this.showReadonly == true) {
            var count = this.places.length;
            for (var i = 0; i < count; i++) {
                if (this.places[i].name == this.enterpriseVar) {
                    if (this.places[i].emails == undefined) {
                        this.showReadonly = false;
                    }
                    else {
                        // this.emailVar = this.universities[i].email
                        this.SignUpService.getEmails(this.places[i].name).subscribe(function (emails) {
                            _this.arrayEmails = emails;
                            console.log(_this.arrayEmails);
                        });
                    }
                }
            }
        }
    };
    SignupPage.prototype.onChangeEmail = function () {
        var count = this.arrayEmails.length;
        for (var i = 0; i < count; i++) {
            if (this.arrayEmails[i].email == this.companyVar) {
                this.company = this.arrayEmails[i].company;
                console.log(this.company);
            }
        }
    };
    SignupPage.prototype.scrolling = function () {
        this.content.scrollTo(30, 0);
    };
    ;
    SignupPage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    SignupPage.prototype.verification = function () {
        var _this = this;
        if (!this.signupGroup.controls['isChecked'].value === true) {
            var alert_1 = this.alertCtrl.create({
                title: 'No aceptaste nuestros términos y condiciones',
                subTitle: 'Debes estar de acuerdo con nustros términos y condiciones para usar Waypool',
                buttons: ['OK']
            });
            alert_1.present();
        }
        else {
            if (this.showReadonly === true) {
                //creating user on firebase
                var userName = this.signupGroup.controls['name'].value;
                var userLastName = this.signupGroup.controls['lastname'].value;
                var userEmail = this.signupGroup.controls['email'].value;
                var userFixedemail = this.signupGroup.controls['fixedemail'].value;
                var userEmailComplete = userEmail + userFixedemail;
                var userPassword = this.signupGroup.controls['password'].value;
                var userPhone = this.signupGroup.controls['phone'].value;
                var userPlace = this.signupGroup.controls['place'].value;
                // saving data in variable
                if (this.company !== undefined || this.company !== null) {
                    this.user = {
                        name: userName,
                        lastname: userLastName,
                        email: userEmailComplete,
                        phone: '+57' + userPhone,
                        place: userPlace,
                        createdBy: 'costumer',
                        company: this.company
                    };
                }
                else {
                    this.user = {
                        name: userName,
                        lastname: userLastName,
                        email: userEmailComplete,
                        phone: '+57' + userPhone,
                        place: userPlace,
                        createdBy: 'costumer',
                    };
                }
                this.SignUpService.userPlace = userPlace;
                if (this.signupGroup.controls['password'].value === this.signupGroup.controls['passwordconf'].value) {
                    this.authenticationService.registerWithEmail(userEmailComplete, userPassword).catch(function (error) {
                        if (error.code === "auth/email-already-in-use") {
                            var alert_2 = _this.alertCtrl.create({
                                title: 'ya existe una cuenta con este correo',
                                subTitle: 'Si ya te registraste en WAYPOOL, sólo debes iniciar sesión con los datos con los que te registraste. También puedes estar registrandote con un correo ya existente',
                                buttons: ['OK']
                            });
                            alert_2.present();
                        }
                    });
                    if (!this.user.userId) {
                        this.AngularFireAuth.auth.onAuthStateChanged(function (user) {
                            if (user) {
                                user.getIdToken().then(function (token) {
                                    _this.user.tokenId = token;
                                });
                                if (!_this.user.userId) {
                                    _this.user.userId = user.uid;
                                }
                                _this.SignUpService.saveUser(_this.user, _this.SignUpService.userPlace);
                                _this.afDB.database.ref('allPlaces/' + _this.SignUpService.userPlace + '/location').once('value').then(function (snap) {
                                    console.log(snap.val());
                                    console.log(snap.val().lng);
                                    _this.SignUpService.setFixedLocationCoordinates(_this.SignUpService.userPlace, _this.user.userId, snap.val().lat, snap.val().lng);
                                    _this.geocodingPlace(snap.val().lat, snap.val().lng, _this.SignUpService.userPlace, _this.user.userId);
                                });
                                _this.SignUpService.saveUserInAllUsers(_this.SignUpService.userPlace, _this.user.userId);
                                // this.sendVerificationCode(this.user.userId);
                            }
                            else {
                                console.log('there is no user');
                            }
                        });
                    }
                    ;
                    // sending email verification and verifying weather email is verified or not
                    this.AngularFireAuth.auth.onAuthStateChanged(function (user) {
                        if (user) {
                            if (user.emailVerified == false) {
                                user.sendEmailVerification();
                                var alert_3 = _this.alertCtrl.create({
                                    title: '¡REGISTRO EXITOSO!',
                                    subTitle: 'En los próximos minutos te enviaremos un link de verificación a tu email',
                                    buttons: [
                                        {
                                            text: 'OK',
                                            handler: function () {
                                                _this.app.getRootNav().push('LoginPage');
                                            }
                                        }
                                    ]
                                });
                                alert_3.present();
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
                }
                else {
                    var alert_4 = this.alertCtrl.create({
                        title: 'Oops!',
                        subTitle: 'las contraseñas no coinciden, intenta de nuevo',
                        buttons: ['OK']
                    });
                    alert_4.present();
                }
            }
            else if (this.showReadonly === false) {
                //creating user on firebase
                var userName = this.signupGroup.controls['name'].value;
                var userLastName = this.signupGroup.controls['lastname'].value;
                var userEmail = this.signupGroup.controls['email'].value;
                var userEmailComplete = userEmail;
                var userPassword = this.signupGroup.controls['password'].value;
                var userPhone = this.signupGroup.controls['phone'].value;
                var userPlace = this.signupGroup.controls['place'].value;
                // saving data in variable
                if (this.company !== undefined || this.company !== null) {
                    this.user = {
                        name: userName,
                        lastname: userLastName,
                        email: userEmailComplete,
                        phone: '+57' + userPhone,
                        place: userPlace,
                        createdBy: 'costumer',
                        company: this.company
                    };
                }
                else {
                    this.user = {
                        name: userName,
                        lastname: userLastName,
                        email: userEmailComplete,
                        phone: '+57' + userPhone,
                        place: userPlace,
                        createdBy: 'costumer',
                    };
                }
                this.SignUpService.userPlace = userPlace;
                if (this.signupGroup.controls['password'].value === this.signupGroup.controls['passwordconf'].value) {
                    this.authenticationService.registerWithEmail(userEmailComplete, userPassword).catch(function (error) {
                        if (error.code === "auth/email-already-in-use") {
                            var alert_5 = _this.alertCtrl.create({
                                title: 'ya existe una cuenta con este correo',
                                subTitle: 'Si ya te registraste en WAYPOOL, sólo debes iniciar sesión con los datos con los que te registraste. También puedes estar registrandote con un correo ya existente',
                                buttons: ['OK']
                            });
                            alert_5.present();
                        }
                    });
                    if (!this.user.userId) {
                        this.AngularFireAuth.auth.onAuthStateChanged(function (user) {
                            if (user) {
                                user.getIdToken().then(function (token) {
                                    _this.user.tokenId = token;
                                });
                                if (!_this.user.userId) {
                                    _this.user.userId = user.uid;
                                }
                                _this.SignUpService.saveUser(_this.user, _this.SignUpService.userPlace);
                                _this.afDB.database.ref('allPlaces/' + _this.SignUpService.userPlace + '/location').once('value').then(function (snap) {
                                    console.log(snap.val());
                                    console.log(snap.val().lng);
                                    _this.SignUpService.setFixedLocationCoordinates(_this.SignUpService.userPlace, _this.user.userId, snap.val().lat, snap.val().lng);
                                    _this.geocodingPlace(snap.val().lat, snap.val().lng, _this.SignUpService.userPlace, _this.user.userId);
                                });
                                _this.SignUpService.saveUserInAllUsers(_this.SignUpService.userPlace, user.uid);
                                //send text message with code
                                // this.sendVerificationCode(this.user.userId);
                            }
                            else {
                                console.log('there is no user');
                            }
                        });
                    }
                    ;
                    // sending email verification and verifying weather email is verified or not
                    this.AngularFireAuth.auth.onAuthStateChanged(function (user) {
                        if (user) {
                            if (user.emailVerified == false) {
                                user.sendEmailVerification();
                                var alert_6 = _this.alertCtrl.create({
                                    title: '¡REGISTRO EXITOSO!',
                                    subTitle: 'En los próximos minutos te enviaremos un link de verificación a tu email',
                                    buttons: [
                                        {
                                            text: 'OK',
                                            handler: function () {
                                                _this.app.getRootNav().push('LoginPage');
                                            }
                                        }
                                    ]
                                });
                                alert_6.present();
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
                }
                else {
                    var alert_7 = this.alertCtrl.create({
                        title: 'Oops!',
                        subTitle: 'las contraseñas no coinciden, intenta de nuevo',
                        buttons: ['OK']
                    });
                    alert_7.present();
                }
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
    SignupPage.prototype.geocodingPlace = function (lat, lng, place, userId) {
        var _this = this;
        this.geocoder.geocode({ 'location': { lat: lat, lng: lng } }, function (results, status) {
            if (status === 'OK') {
                if (results[0]) {
                    var namePlace = [results[0].formatted_address];
                    _this.SignUpService.setFixedLocationName(place, userId, namePlace[0]);
                }
                else {
                    alert('No results found');
                }
            }
            else {
                alert('Geocoder failed due to: ' + status);
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */])
    ], SignupPage.prototype, "content", void 0);
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/WAYPOOL_OFICIAL/waypool_costumer/src/pages/signup/signup.html"*/'<ion-header class="transparent">\n    <ion-navbar>\n        <ion-title><span class="text-white">REGÍSTRATE</span></ion-title>\n    </ion-navbar>\n</ion-header>\n\n\n\n<ion-content>\n    <form [formGroup]="signupGroup" (ngSubmit)="verification()">\n    <div>\n        <div class="">\n                <ion-row>\n                        <ion-col class="name-fild">\n                            <ion-list class="form" style="margin-bottom: 0">\n                                <ion-item>\n                                    <ion-label></ion-label>\n                                    <ion-input  type="text"  text-right formControlName="name" placeholder= "Tú nombre"></ion-input>\n                                </ion-item>\n                                <ion-item>\n                                    <ion-label></ion-label>\n                                    <ion-input type="text"  text-right  formControlName="lastname" placeholder= "Tú apellido"></ion-input>\n                                </ion-item>\n                                <ion-item>\n                                    <ion-label  text-right >selecciona tu universidad/centro empresarial</ion-label>\n                                        <ion-select (ionChange)="onChange()" [(ngModel)]="enterpriseVar" formControlName="place">\n                                            <ion-option *ngFor="let plac of places">{{plac.name}}</ion-option>\n                                        </ion-select>\n                                </ion-item>\n                            </ion-list>\n                        </ion-col>\n                    </ion-row>\n                    <div [ngSwitch]="showReadonly">\n                            <ion-row *ngSwitchCase=true>\n                                    <ion-col class="name-fild-2">\n                                        <ion-list class="form">\n                                            <ion-item class="editable-email">\n                                                    <ion-label></ion-label>\n                                                        <ion-input type="text" text-right formControlName="email" placeholder= "email"></ion-input>\n                                                    </ion-item>\n                                            </ion-list>\n                                    </ion-col>\n                                    <ion-col class="name-fild-2">\n                                        <ion-list class="form">\n\n                                                <ion-select (ionChange)="onChangeEmail()" [(ngModel)]="companyVar" formControlName="fixedemail" class="nonEditable-email">\n                                                        <ion-option *ngFor="let email of arrayEmails">{{email.email}}</ion-option>\n                                                    </ion-select>\n                                            <!-- <ion-item class="nonEditable-email">\n                                                    <ion-input readonly [(ngModel)]=\'emailVar\' formControlName="fixedemail"></ion-input>\n                                                </ion-item> -->\n                                        </ion-list>\n                                    </ion-col>\n                                </ion-row>\n            \n            \n            \n                                <ion-row *ngSwitchCase=false >\n                                        <ion-col class="name-fild-2">\n                                            <ion-list class="form">\n                                                <ion-item class="editable-email">\n                                                        <ion-label></ion-label>\n                                                            <ion-input type="text" text-right [(ngModel)]=\'onlyEmail\' formControlName="email" placeholder= "email"></ion-input>\n                                                        </ion-item>\n                                                <ion-item class="editable-email" *ngIf=\'noShowButton\'>\n                                                         <ion-label></ion-label>\n                                                            <ion-input readonly formControlName="fixedemail"></ion-input>\n                                                         </ion-item>\n                                                </ion-list>\n                                        </ion-col>\n                                    </ion-row>\n                    </div>\n\n            <ion-list class="form" style="margin-bottom: 0">\n                <ion-item>\n                    <ion-label  fixed><span style="font-weight: bold; color: red;">(mínimo 6 caracteres)</span></ion-label>\n                    <ion-input type="password"  text-right formControlName="password" placeholder= "crea tu contraseña" minlength="6"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label></ion-label>\n                    <ion-input type="password"  text-right formControlName="passwordconf" placeholder= "confirma tu contraseña" minlength="6"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label></ion-label>\n                    <ion-input type="number" text-right formControlName="phone" placeholder= "Tú número de celular"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label>Por favor lee y acepta nuestros términos y condiciones</ion-label>\n                    <ion-checkbox formControlName="isChecked" ></ion-checkbox>\n                </ion-item>\n                <ion-item>\n                    <p>Ver <a href="https://waypooltech.wordpress.com/">términos y condiciones</a></p>\n                </ion-item>\n                \n\n            </ion-list>\n            <div class="footer-signup">\n                    <button ion-button full class="bg-theme text-white btn rounded" type="submit" [disabled]="!signupGroup.valid">¡Únete ya!</button>\n                    <p text-center>¿ya estas registrado? <strong class="text-theme" (click)="login()">Inicia sesión</strong></p>\n            </div>\n        </div>\n    </div>\n</form>\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/WAYPOOL_OFICIAL/waypool_costumer/src/pages/signup/signup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_5__services_userauthentication_service__["a" /* authenticationService */], __WEBPACK_IMPORTED_MODULE_6__services_signup_services__["a" /* SignUpService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ })

});
//# sourceMappingURL=1.js.map