webpackJsonp([21],{

/***/ 681:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverProfilePageModule", function() { return DriverProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__driverProfile__ = __webpack_require__(876);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DriverProfilePageModule = /** @class */ (function () {
    function DriverProfilePageModule() {
    }
    DriverProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__driverProfile__["a" /* DriverProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__driverProfile__["a" /* DriverProfilePage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__driverProfile__["a" /* DriverProfilePage */]
            ]
        })
    ], DriverProfilePageModule);
    return DriverProfilePageModule;
}());

//# sourceMappingURL=driverProfile.module.js.map

/***/ }),

/***/ 876:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_d_signup_service__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_d_driverauthentication_service__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angularfire2_database__);
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








var DriverProfilePage = /** @class */ (function () {
    function DriverProfilePage(navCtrl, modalCtrl, toastCtrl, alertCtrl, AngularFireAuth, authenticationService, SignupService, afDB) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.AngularFireAuth = AngularFireAuth;
        this.authenticationService = authenticationService;
        this.SignupService = SignupService;
        this.afDB = afDB;
        this.myprofile = "about";
        this.userForDelete = this.AngularFireAuth.auth.currentUser;
        this.userUid = this.AngularFireAuth.auth.currentUser.uid;
        this.emailUser = this.AngularFireAuth.auth.currentUser.email;
        this.user = {};
        this.unsubscribe = new __WEBPACK_IMPORTED_MODULE_7_rxjs__["Subject"];
        this.SignupService.getMyInfoForProfile(this.userUid).takeUntil(this.unsubscribe).subscribe(function (user) {
            _this.user = user;
            console.log(_this.user);
            _this.showInfoProfile(user);
        });
    }
    DriverProfilePage.prototype.saveChanges = function () {
        if (this.newPhone == null && this.user.about == null && this.user.url == null) {
        }
        else if (this.newPhone == null && this.user.about == null && this.user.url != null) {
            this.SignupService.saveInfoProfileUrl(this.userUid, this.user.url);
            this.toastConfirmation();
        }
        else if (this.newPhone == null && this.user.about != null && this.user.url == null) {
            this.SignupService.saveInfoProfileAbout(this.userUid, this.user.about);
            this.toastConfirmation();
        }
        else if (this.newPhone != null && this.user.about == null && this.user.url == null) {
            this.SignupService.saveInfoProfilePhone(this.userUid, this.newPhone);
            this.toastConfirmation();
        }
        else if (this.newPhone != null && this.user.about != null && this.user.url == null) {
            this.SignupService.saveInfoProfilePhone(this.userUid, this.newPhone);
            this.SignupService.saveInfoProfileAbout(this.userUid, this.user.about);
            this.toastConfirmation();
        }
        else if (this.newPhone != null && this.user.about == null && this.user.url != null) {
            this.SignupService.saveInfoProfilePhone(this.userUid, this.newPhone);
            this.SignupService.saveInfoProfileUrl(this.userUid, this.user.url);
            this.toastConfirmation();
        }
        else if (this.newPhone == null && this.user.about != null && this.user.url != null) {
            this.SignupService.saveInfoProfileAbout(this.userUid, this.user.about);
            this.SignupService.saveInfoProfileUrl(this.userUid, this.user.url);
            this.toastConfirmation();
        }
        else if (this.newPhone != null && this.user.about != null && this.user.url != null) {
            this.SignupService.saveInfoProfileAbout(this.userUid, this.user.about);
            this.SignupService.saveInfoProfileUrl(this.userUid, this.user.url);
            this.SignupService.saveInfoProfilePhone(this.userUid, this.newPhone);
            this.toastConfirmation();
        }
        else {
            console.log('go to the f*cking hell');
        }
    };
    DriverProfilePage.prototype.toastConfirmation = function () {
        var _this = this;
        var toast = this.alertCtrl.create({
            title: 'Información actualizada',
            buttons: [
                {
                    text: 'OK',
                    handler: function () {
                        _this.navCtrl.pop();
                    }
                }
            ]
        });
        toast.present();
    };
    DriverProfilePage.prototype.deleteAccount = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Eliminar Cuenta',
            message: "\u00BFEstas segur@ que deseas eliminar esta cuenta?",
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                    }
                },
                {
                    text: 'Eliminar',
                    handler: function () {
                        //for next build, user has to have a recent login in order to delete account//
                        _this.AngularFireAuth.auth.currentUser.delete().then(function () {
                            _this.SignupService.deleteAccount(_this.userUid);
                            console.log('user has been deleted');
                        }).then(function () {
                            _this.navCtrl.setRoot('LoginPage');
                            var toast = _this.toastCtrl.create({
                                message: "Acabas de eliminar esta cuenta, si deseas volver a ser parte de la comunidad por favor reg\u00EDstrate de nuevo",
                                showCloseButton: true,
                                closeButtonText: 'Ok'
                            });
                            toast.present();
                        }).catch(function (error) {
                            console.log('error:', error);
                            var toast = _this.toastCtrl.create({
                                message: "Hubo un error para eliminar tu cuenta, escribenos a soporte@waypooltech.com para que te ayudemos con este problema",
                                showCloseButton: true,
                                closeButtonText: 'Ok'
                            });
                            toast.present();
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    DriverProfilePage.prototype.showInfoProfile = function (user) {
        this.name = user.name;
        this.lastname = user.lastname;
        this.url = user.url;
        this.about = user.about;
        this.emailComplete = user.email + user.fixedemail;
    };
    DriverProfilePage.prototype.changePassword = function () {
        var _this = this;
        this.AngularFireAuth.auth.sendPasswordResetEmail(this.emailUser).then(function () {
            var alert = _this.alertCtrl.create({
                title: 'Revisa el email con el que te registraste en Waypool',
                subTitle: 'te enviamos un correo donde podras reestablecer tu contraseña',
                buttons: ['OK']
            });
            alert.present();
        }).catch(function (error) {
            console.log(error);
        });
    };
    DriverProfilePage.prototype.signOut = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: '¿estás seguro de querer cerrar sesión?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'cerrar sesión',
                    handler: function () {
                        _this.authenticationService.logOut().then(function () {
                            console.log(__WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().currentUser);
                            _this.navCtrl.setRoot('LoginPage');
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    DriverProfilePage.prototype.ionViewWillLeave = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    DriverProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'driver-page-profile',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/waypool_costumer/src/pages/profile/driverProfile.html"*/'<ion-header class="bg-theme-driver">\n    <ion-navbar>\n        <ion-title>MI PERFIL</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-light">\n    <ion-item style="position: relative;z-index: 2;">\n        <ion-avatar item-start>\n            <img src="assets/imgs/userPicture.png">\n        </ion-avatar>\n        <div class="name">\n            <h2>{{user.name |titlecase}} {{user.lastname |titlecase}}\n            </h2>\n\n            <p *ngIf=\'user.verifiedPerson\' class="text-theme-driver">VERIFICADO\n                <ion-icon name="ios-checkmark-circle" class="text-theme-driver"></ion-icon>\n            </p>\n            \n        </div>\n        \n    </ion-item>\n    \n    <div>\n        <ion-list> \n              \n                     \n            <div class="bg-white" padding>\n                  \n\n                <ion-list no-lines class="form-list">\n                    <ion-item>\n                        <ion-label floating >Nombre</ion-label>\n                        <ion-input type="text" [(ngModel)]="user.name" readonly></ion-input>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label floating >Apellido</ion-label>\n                        <ion-input type="text" [(ngModel)]="user.lastname" readonly></ion-input>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label floating>Número Telefónico Actual</ion-label>\n                        <ion-input type="text"  [(ngModel)]="user.phone" readonly></ion-input>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label stacked>Número Telefónico Nuevo</ion-label>\n                        <ion-input type="number" placeholder="modifica aqui tu número" [(ngModel)]="newPhone"></ion-input>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label floating>Email</ion-label>\n                        <ion-input type="text"  [(ngModel)]="emailUser"  readonly></ion-input>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label stacked >Sobre mi</ion-label>\n                        <ion-textarea placeholder="tu carrera, pasiones, skills"  [(ngModel)]="user.about"></ion-textarea>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label stacked>URL de interés</ion-label>\n                        <ion-input type="text" placeholder="¿qué quieres que vean sobre ti?" [(ngModel)]="user.url" ></ion-input>\n                    </ion-item>\n                   \n                </ion-list>\n            </div>\n            <div padding-top padding-left padding-right text-center>\n                <p>\n                    <button class="btn text-white rounded bg-theme-driver" style="width: 100%;margin-bottom: 8px;" (click)="saveChanges()">Guardar Cambios</button>\n                    <button class="btn text-theme-driver rounded bg-white" style="width: 100%;    margin-bottom: 8px;" (click)="signOut()">Cerrar Sesión</button>\n                    <button class="btn text-theme-driver rounded bg-white" style="width: 100%;    margin-bottom: 8px;" (click)="changePassword()">Cambiar Contraseña</button>\n                    <button class="btn text-white rounded bg-red" style="width: 100%;    margin-bottom: 8px;" (click)="deleteAccount()">Eliminar Cuenta</button>\n              \n                </p>\n\n            </div>\n        </ion-list>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/waypool_costumer/src/pages/profile/driverProfile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_4__services_d_driverauthentication_service__["a" /* DriverAuthenticationService */], __WEBPACK_IMPORTED_MODULE_3__services_d_signup_service__["a" /* DriverSignUpService */], __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["AngularFireDatabase"]])
    ], DriverProfilePage);
    return DriverProfilePage;
}());

//# sourceMappingURL=driverProfile.js.map

/***/ })

});
//# sourceMappingURL=21.js.map