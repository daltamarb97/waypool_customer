webpackJsonp([21],{

/***/ 676:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverProfilePageModule", function() { return DriverProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__driverProfile__ = __webpack_require__(867);
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

/***/ 867:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_d_signup_service__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_d_driverauthentication_service__ = __webpack_require__(349);
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
        this.SignupService.getMyInfoForProfile(this.SignupService.userPlace, this.userUid).takeUntil(this.unsubscribe).subscribe(function (user) {
            _this.user = user;
            console.log(_this.user);
            _this.showInfoProfile(user);
        });
    }
    DriverProfilePage.prototype.saveChanges = function () {
        var _this = this;
        this.afDB.database.ref('allCities/' + this.user.city + '/allPlaces/' + this.user.company + '/zones').once('value').then(function (snap) {
            var obj = snap.val();
            Object.getOwnPropertyNames(obj).forEach(function (key) {
                if (obj[key] === 2 || obj[key] === 3 || obj[key] === 4 || obj[key] === 5 || obj[key] === 6 || obj[key] === 1 || obj[key] === 7 || obj[key] === 8 || obj[key] === 9 || obj[key] === 10) {
                }
                else {
                    if (_this.newPhone == null && _this.user.about == null && _this.user.url == null) {
                    }
                    else if (_this.newPhone == null && _this.user.about == null && _this.user.url != null) {
                        _this.SignupService.saveInfoProfileUrl(obj[key], _this.userUid, _this.user.url);
                    }
                    else if (_this.newPhone == null && _this.user.about != null && _this.user.url == null) {
                        _this.SignupService.saveInfoProfileAbout(obj[key], _this.userUid, _this.user.about);
                    }
                    else if (_this.newPhone != null && _this.user.about == null && _this.user.url == null) {
                        _this.SignupService.saveInfoProfilePhone(obj[key], _this.userUid, _this.newPhone);
                    }
                    else if (_this.newPhone != null && _this.user.about != null && _this.user.url == null) {
                        _this.SignupService.saveInfoProfilePhone(obj[key], _this.userUid, _this.newPhone);
                        _this.SignupService.saveInfoProfileAbout(obj[key], _this.userUid, _this.user.about);
                    }
                    else if (_this.newPhone != null && _this.user.about == null && _this.user.url != null) {
                        _this.SignupService.saveInfoProfilePhone(obj[key], _this.userUid, _this.newPhone);
                        _this.SignupService.saveInfoProfileUrl(obj[key], _this.userUid, _this.user.url);
                    }
                    else if (_this.newPhone == null && _this.user.about != null && _this.user.url != null) {
                        _this.SignupService.saveInfoProfileAbout(obj[key], _this.userUid, _this.user.about);
                        _this.SignupService.saveInfoProfileUrl(obj[key], _this.userUid, _this.user.url);
                        _this.navCtrl.pop();
                    }
                    else if (_this.newPhone != null && _this.user.about != null && _this.user.url != null) {
                        _this.SignupService.saveInfoProfileAbout(obj[key], _this.userUid, _this.user.about);
                        _this.SignupService.saveInfoProfileUrl(obj[key], _this.userUid, _this.user.url);
                        _this.SignupService.saveInfoProfilePhone(obj[key], _this.userUid, _this.newPhone);
                    }
                    else {
                        console.log('go to the f*cking hell');
                    }
                }
            });
        }).then(function () {
            _this.toastConfirmation();
        });
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
            message: "\u00BFEstas segur@ que deseas eliminar esta cuenta?, si tienes cuenta en WAYPOOL USER tambi\u00E9n se eliminar\u00E1",
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
                        _this.afDB.database.ref('allCities/' + _this.user.city + '/allPlaces/' + _this.user.company + '/zones').once('value').then(function (snap) {
                            var obj = snap.val();
                            Object.getOwnPropertyNames(obj).forEach(function (key) {
                                _this.SignupService.deleteAccount(obj[key], _this.userUid);
                            });
                        }).then(function () {
                            //for next build, user has to have a recent login in order to delete account//
                            _this.AngularFireAuth.auth.currentUser.delete().then(function () {
                                console.log('user has been deleted');
                            }).catch(function (error) {
                                console.log('error:', error);
                            });
                        }).then(function () {
                            _this.navCtrl.setRoot('LoginPage');
                            var toast = _this.toastCtrl.create({
                                message: "Acabas de eliminar esta cuenta, si deseas volver a ser parte de la comunidad por favor reg\u00EDstrate de nuevo",
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
                            _this.SignupService.userPlace = undefined;
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
            selector: 'driver-page-profile',template:/*ion-inline-start:"C:\Users\Daniel\Documents\waypool\prod\latest\waypool_costumer\src\pages\profile\driverProfile.html"*/'<ion-header class="bg-theme-driver">\n\n    <ion-navbar>\n\n        <ion-title>MI PERFIL</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n    <ion-item style="position: relative;z-index: 2;">\n\n        <ion-avatar item-start>\n\n            <img src="assets/imgs/userPicture.png">\n\n        </ion-avatar>\n\n        <div class="name">\n\n            <h2>{{user.name |titlecase}} {{user.lastname |titlecase}}\n\n            </h2>\n\n\n\n            <p *ngIf=\'user.verifiedPerson\' class="text-theme-driver">VERIFICADO\n\n                <ion-icon name="ios-checkmark-circle" class="text-theme-driver"></ion-icon>\n\n            </p>\n\n            \n\n        </div>\n\n        \n\n    </ion-item>\n\n    \n\n    <div>\n\n        <ion-list> \n\n              \n\n                     \n\n            <div class="bg-white" padding>\n\n                  \n\n\n\n                <ion-list no-lines class="form-list">\n\n                    <ion-item>\n\n                        <ion-label floating >Nombre</ion-label>\n\n                        <ion-input type="text" [(ngModel)]="user.name" readonly></ion-input>\n\n                    </ion-item>\n\n                    <ion-item>\n\n                        <ion-label floating >Apellido</ion-label>\n\n                        <ion-input type="text" [(ngModel)]="user.lastname" readonly></ion-input>\n\n                    </ion-item>\n\n                    <ion-item>\n\n                        <ion-label floating>Número Telefónico Actual</ion-label>\n\n                        <ion-input type="text"  [(ngModel)]="user.phone" readonly></ion-input>\n\n                    </ion-item>\n\n                    <ion-item>\n\n                        <ion-label stacked>Número Telefónico Nuevo</ion-label>\n\n                        <ion-input type="number" placeholder="modifica aqui tu número" [(ngModel)]="newPhone"></ion-input>\n\n                    </ion-item>\n\n                    <ion-item>\n\n                        <ion-label floating>Email</ion-label>\n\n                        <ion-input type="text"  [(ngModel)]="emailUser"  readonly></ion-input>\n\n                    </ion-item>\n\n                    <ion-item>\n\n                        <ion-label stacked >Sobre mi</ion-label>\n\n                        <ion-textarea placeholder="tu carrera, pasiones, skills"  [(ngModel)]="user.about"></ion-textarea>\n\n                    </ion-item>\n\n                    <ion-item>\n\n                        <ion-label stacked>URL de interés</ion-label>\n\n                        <ion-input type="text" placeholder="¿qué quieres que vean sobre ti?" [(ngModel)]="user.url" ></ion-input>\n\n                    </ion-item>\n\n                   \n\n                </ion-list>\n\n            </div>\n\n            <div padding-top padding-left padding-right text-center>\n\n                <p>\n\n                    <button class="btn text-white rounded bg-theme-driver" style="width: 100%;margin-bottom: 8px;" (click)="saveChanges()">Guardar Cambios</button>\n\n                    <button class="btn text-theme-driver rounded bg-white" style="width: 100%;    margin-bottom: 8px;" (click)="signOut()">Cerrar Sesión</button>\n\n                    <button class="btn text-theme-driver rounded bg-white" style="width: 100%;    margin-bottom: 8px;" (click)="changePassword()">Cambiar Contraseña</button>\n\n                    <button class="btn text-white rounded bg-red" style="width: 100%;    margin-bottom: 8px;" (click)="deleteAccount()">Eliminar Cuenta</button>\n\n              \n\n                </p>\n\n\n\n            </div>\n\n        </ion-list>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Daniel\Documents\waypool\prod\latest\waypool_costumer\src\pages\profile\driverProfile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_4__services_d_driverauthentication_service__["a" /* DriverAuthenticationService */], __WEBPACK_IMPORTED_MODULE_3__services_d_signup_service__["a" /* DriverSignUpService */], __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["AngularFireDatabase"]])
    ], DriverProfilePage);
    return DriverProfilePage;
}());

//# sourceMappingURL=driverProfile.js.map

/***/ })

});
//# sourceMappingURL=21.js.map