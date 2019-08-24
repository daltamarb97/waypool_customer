webpackJsonp([0],{

/***/ 655:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup__ = __webpack_require__(682);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */]),
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

/***/ 657:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_userauthentication_service__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_signup_services__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(30);
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
                if (metadata.creationTime == metadata.lastSignInTime) {
                    console.log(metadata.creationTime);
                    console.log(metadata.lastSignInTime);
                    _this.navCtrl.push('TabsPage'); //aqui va registration car, no tabspge
                }
                else {
                    _this.navCtrl.push('TabsPage');
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
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Daniel\Documents\waypool\merge\waypool_costumer\src\pages\login\login.html"*/'<ion-header class="transparent">\n\n    <ion-navbar>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <div class="logo">\n\n        <img src="assets/imgs/logo waypool-01.png" alt="logo">\n\n    </div>\n\n\n\n    <div class="bg-white login">\n\n        <div class="">\n\n         <form [formGroup]="loginGroup" (ngSubmit)="logIn()">\n\n            <ion-list class="form">\n\n                <ion-item>\n\n                    <ion-label></ion-label>\n\n                    <ion-input type="email"  text-right  formControlName="email" placeholder= "email universitario"></ion-input>\n\n                </ion-item>\n\n                <ion-item>\n\n                    <ion-label></ion-label>\n\n                    <ion-input type="password" text-right  formControlName="password" placeholder= "Tú contraseña"></ion-input>\n\n                </ion-item>\n\n            </ion-list>\n\n            <button ion-button full class="bg-theme text-white btn rounded" type="submit" [disabled]="!loginGroup.valid">ENTRAR</button>\n\n            <br>\n\n         </form>\n\n\n\n            <ion-row style="padding-top: 30px;">\n\n                <ion-col (click)="signup()"><small>¿Eres nuevo? <strong class="text-theme">¡Regístrate!</strong></small></ion-col>\n\n                <ion-col text-right (click)="resetPassword(email)"><small>Olvidaste tu <strong class="text-theme">contraseña?</strong></small></ion-col>\n\n            </ion-row>\n\n           \n\n\n\n        </div>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Daniel\Documents\waypool\merge\waypool_costumer\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_userauthentication_service__["a" /* authenticationService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__services_signup_services__["a" /* SignUpService */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 682:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(657);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_userauthentication_service__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_signup_services__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__);
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
    function SignupPage(navCtrl, afDB, formBuilder, authenticationService, SignUpService, alertCtrl, AngularFireAuth, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.afDB = afDB;
        this.formBuilder = formBuilder;
        this.authenticationService = authenticationService;
        this.SignUpService = SignUpService;
        this.alertCtrl = alertCtrl;
        this.AngularFireAuth = AngularFireAuth;
        this.navParams = navParams;
        this.user = {};
        this.tokenId = '';
        this.userId = '';
        this.isReadonly = true;
        this.universities = [];
        this.showReadonly = true;
        this.signupGroup = this.formBuilder.group({
            name: ["", __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            lastname: ["", __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            email: ["", __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            fixedemail: [""],
            password: ["", __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            passwordconf: ["", __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            phone: ["", __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            university: ["", __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]
        });
        this.SignUpService.getUniversities().subscribe(function (universities) {
            _this.universities = universities;
            console.log(_this.universities);
        });
    }
    SignupPage.prototype.onChange = function () {
        this.showReadonly = true;
        if (this.showReadonly == true) {
            var count = this.universities.length;
            for (var i = 0; i < count; i++) {
                if (this.universities[i].name == this.universityVar) {
                    if (this.universities[i].email == undefined) {
                        this.showReadonly = false;
                    }
                    else {
                        this.emailVar = this.universities[i].email;
                    }
                }
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
        if (this.showReadonly == true) {
            //creating user on firebase
            var userName = this.signupGroup.controls['name'].value;
            var userLastName = this.signupGroup.controls['lastname'].value;
            var userEmail = this.signupGroup.controls['email'].value;
            var userFixedemail = this.signupGroup.controls['fixedemail'].value;
            var userEmailComplete = userEmail + userFixedemail;
            var userPassword = this.signupGroup.controls['password'].value;
            var userPhone = this.signupGroup.controls['phone'].value;
            var userUniversity = this.signupGroup.controls['university'].value;
            // saving data in variable
            this.user = {
                name: userName,
                lastname: userLastName,
                email: userEmailComplete,
                phone: '+57' + userPhone,
                university: userUniversity,
                createdBy: 'costumer'
            };
            this.SignUpService.userUniversity = userUniversity;
            if (this.signupGroup.controls['password'].value === this.signupGroup.controls['passwordconf'].value) {
                this.authenticationService.registerWithEmail(userEmailComplete, userPassword).catch(function (error) {
                    if (error.code === "auth/email-already-in-use") {
                        var alert_1 = _this.alertCtrl.create({
                            title: 'ya existe una cuenta con este correo',
                            subTitle: 'Si ya te registraste en WAYPOOL, sólo debes iniciar sesión con los datos con los que te registraste. También puedes estar registrandote con un correo ya existente',
                            buttons: ['OK']
                        });
                        alert_1.present();
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
                            _this.SignUpService.saveUser(_this.user, _this.SignUpService.userUniversity);
                            _this.sendVerificationCode(_this.user.userId);
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
                            console.log("verification email has been sent");
                        }
                        else {
                            console.log("verification email has not been sent or the email is already verifyied");
                        }
                    }
                    else {
                        console.log('there is no user');
                    }
                });
            }
            else {
                var alert_2 = this.alertCtrl.create({
                    title: 'Oops!',
                    subTitle: 'las contraseñas no coinciden, intenta de nuevo',
                    buttons: ['OK']
                });
                alert_2.present();
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
            var userUniversity = this.signupGroup.controls['university'].value;
            // saving data in variable
            this.user = {
                name: userName,
                lastname: userLastName,
                email: userEmail,
                phone: '+57' + userPhone,
                university: userUniversity,
                createdBy: 'costumer'
            };
            this.SignUpService.userUniversity = userUniversity;
            if (this.signupGroup.controls['password'].value === this.signupGroup.controls['passwordconf'].value) {
                this.authenticationService.registerWithEmail(userEmailComplete, userPassword).catch(function (error) {
                    if (error.code === "auth/email-already-in-use") {
                        var alert_3 = _this.alertCtrl.create({
                            title: 'ya existe una cuenta con este correo',
                            subTitle: 'Si ya te registraste en WAYPOOL, sólo debes iniciar sesión con los datos con los que te registraste. También puedes estar registrandote con un correo ya existente',
                            buttons: ['OK']
                        });
                        alert_3.present();
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
                            _this.SignUpService.saveUser(_this.user, _this.SignUpService.userUniversity);
                            //send text message with code
                            _this.sendVerificationCode(_this.user.userId);
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
                            console.log("verification email has been sent");
                        }
                        else {
                            console.log("verification email has not been sent or the email is already verifyied");
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
    };
    SignupPage.prototype.sendVerificationCode = function (userId) {
        this.navCtrl.push('VerificationNumberPage', { userId: userId });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], SignupPage.prototype, "content", void 0);
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"C:\Users\Daniel\Documents\waypool\merge\waypool_costumer\src\pages\signup\signup.html"*/'<ion-header class="transparent">\n\n    <ion-navbar>\n\n        <ion-title><span class="text-white">REGÍSTRATE</span></ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n\n\n<ion-content>\n\n    <form [formGroup]="signupGroup" (ngSubmit)="verification()">\n\n    <div>\n\n        <div class="">\n\n                <ion-row>\n\n                        <ion-col class="name-fild">\n\n                            <ion-list class="form" style="margin-bottom: 0">\n\n                                <ion-item>\n\n                                    <ion-label></ion-label>\n\n                                    <ion-input  type="text"  text-right formControlName="name" placeholder= "Tú nombre"></ion-input>\n\n                                </ion-item>\n\n                                <ion-item>\n\n                                    <ion-label></ion-label>\n\n                                    <ion-input type="text"  text-right  formControlName="lastname" placeholder= "Tú apellido"></ion-input>\n\n                                </ion-item>\n\n                                <ion-item>\n\n                                    <ion-label  text-right >selecciona tu universidad</ion-label>\n\n                                        <ion-select (ionChange)="onChange()" [(ngModel)]="universityVar" formControlName="university">\n\n                                            <ion-option *ngFor="let uni of universities">{{uni.name}}</ion-option>\n\n                                        </ion-select>\n\n                                </ion-item>\n\n                            </ion-list>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                    <div [ngSwitch]="showReadonly">\n\n                            <ion-row *ngSwitchCase=true>\n\n                                    <ion-col class="name-fild-2">\n\n                                        <ion-list class="form">\n\n                                            <ion-item class="editable-email">\n\n                                                    <ion-label></ion-label>\n\n                                                        <ion-input type="text" text-right formControlName="email" placeholder= "email"></ion-input>\n\n                                                    </ion-item>\n\n                                            </ion-list>\n\n                                    </ion-col>\n\n                                    <ion-col class="name-fild-2">\n\n                                        <ion-list class="form">\n\n                                            <ion-item class="nonEditable-email">\n\n                                                    <ion-input readonly [(ngModel)]=\'emailVar\' formControlName="fixedemail"></ion-input>\n\n                                                </ion-item>\n\n                                        </ion-list>\n\n                                    </ion-col>\n\n                                </ion-row>\n\n            \n\n            \n\n            \n\n                                <ion-row *ngSwitchCase=false >\n\n                                        <ion-col class="name-fild-2">\n\n                                            <ion-list class="form">\n\n                                                <ion-item class="editable-email">\n\n                                                        <ion-label></ion-label>\n\n                                                            <ion-input type="text" text-right [(ngModel)]=\'onlyEmail\' formControlName="email" placeholder= "email"></ion-input>\n\n                                                        </ion-item>\n\n                                                </ion-list>\n\n                                        </ion-col>\n\n                                    </ion-row>\n\n                    </div>\n\n\n\n            <ion-list class="form" style="margin-bottom: 0">\n\n                <ion-item>\n\n                    <ion-label  fixed><span style="font-weight: bold; color: red;">(mínimo 6 caracteres)</span></ion-label>\n\n                    <ion-input type="password"  text-right formControlName="password" placeholder= "crea tu contraseña" minlength="6"></ion-input>\n\n                </ion-item>\n\n                <ion-item>\n\n                    <ion-label></ion-label>\n\n                    <ion-input type="password"  text-right formControlName="passwordconf" placeholder= "confirma tu contraseña" minlength="6"></ion-input>\n\n                </ion-item>\n\n                <ion-item>\n\n                    <ion-label></ion-label>\n\n                    <ion-input type="text" text-right formControlName="phone" placeholder= "Tú número de celular"></ion-input>\n\n                </ion-item>\n\n            </ion-list>\n\n            <div class="footer-signup">\n\n                    <button ion-button full class="bg-theme text-white btn rounded" type="submit" [disabled]="!signupGroup.valid">¡Únete ya!</button>\n\n                    <p text-center>¿ya estas registrado? <strong class="text-theme" (click)="login()">Inicia sesión</strong></p>\n\n            </div>\n\n        </div>\n\n    </div>\n\n</form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Daniel\Documents\waypool\merge\waypool_costumer\src\pages\signup\signup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_5__services_userauthentication_service__["a" /* authenticationService */], __WEBPACK_IMPORTED_MODULE_6__services_signup_services__["a" /* SignUpService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ })

});
//# sourceMappingURL=0.js.map