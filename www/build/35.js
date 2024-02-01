webpackJsonp([35],{

/***/ 669:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(862);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]
            ]
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ 862:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_userauthentication_service__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_signup_services__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angularfire2_database__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, modalCtrl, toastCtrl, alertCtrl, AngularFireAuth, authenticationService, SignupService, afDB) {
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
        this.emailUser = this.AngularFireAuth.auth.currentUser.email;
        this.userUid = this.AngularFireAuth.auth.currentUser.uid;
        this.user = {};
        this.unsubscribe = new __WEBPACK_IMPORTED_MODULE_5_rxjs__["Subject"];
        this.SignupService.getMyInfoForProfile(this.userUid).takeUntil(this.unsubscribe).subscribe(function (user) {
            _this.user = user;
            console.log(_this.user);
            _this.showInfoProfile(user);
        });
    }
    ProfilePage.prototype.saveChanges = function () {
        var _this = this;
        this.afDB.database.ref('allCities/' + this.user.city + '/allPlaces/' + this.user.company + '/zones').once('value').then(function (snap) {
            var obj = snap.val();
            Object.getOwnPropertyNames(obj).forEach(function (key) {
                if (obj[key] === 2 || obj[key] === 3 || obj[key] === 4 || obj[key] === 5 || obj[key] === 6 || obj[key] === 1 || obj[key] === 7 || obj[key] === 8 || obj[key] === 9 || obj[key] === 10) {
                }
                else {
                    if (_this.phone == null && _this.user.about == null && _this.user.url == null) {
                        _this.navCtrl.pop();
                    }
                    else if (_this.phone == null && _this.user.about == null && _this.user.url != null) {
                        _this.SignupService.saveInfoProfileUrl(_this.userUid, _this.user.url);
                        _this.navCtrl.pop();
                    }
                    else if (_this.phone == null && _this.user.about != null && _this.user.url == null) {
                        _this.SignupService.saveInfoProfileAbout(_this.userUid, _this.user.about);
                        _this.navCtrl.pop();
                    }
                    else if (_this.phone != null && _this.user.about == null && _this.user.url == null) {
                        _this.SignupService.saveInfoProfilePhone(_this.userUid, _this.phone);
                        _this.navCtrl.pop();
                    }
                    else if (_this.phone != null && _this.user.about != null && _this.user.url == null) {
                        _this.SignupService.saveInfoProfilePhone(_this.userUid, _this.phone);
                        _this.SignupService.saveInfoProfileAbout(_this.userUid, _this.user.about);
                        _this.navCtrl.pop();
                    }
                    else if (_this.phone != null && _this.user.about == null && _this.user.url != null) {
                        _this.SignupService.saveInfoProfilePhone(_this.userUid, _this.phone);
                        _this.SignupService.saveInfoProfileUrl(_this.userUid, _this.user.url);
                        _this.navCtrl.pop();
                    }
                    else if (_this.phone == null && _this.user.about != null && _this.user.url != null) {
                        _this.SignupService.saveInfoProfileAbout(_this.userUid, _this.user.about);
                        _this.SignupService.saveInfoProfileUrl(_this.userUid, _this.user.url);
                        _this.navCtrl.pop();
                    }
                    else if (_this.phone != null && _this.user.about != null && _this.user.url != null) {
                        _this.SignupService.saveInfoProfileAbout(_this.userUid, _this.user.about);
                        _this.SignupService.saveInfoProfileUrl(_this.userUid, _this.user.url);
                        _this.SignupService.saveInfoProfilePhone(_this.userUid, _this.phone);
                        _this.navCtrl.pop();
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
    ProfilePage.prototype.toastConfirmation = function () {
        var toast = this.toastCtrl.create({
            message: 'Información actualizada',
            duration: 1000,
            position: 'bottom'
        });
        toast.present();
    };
    ProfilePage.prototype.deleteAccount = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Eliminar Cuenta',
            message: "\u00BFEstas segur@ que deseas eliminar esta cuenta? si tienes cuenta en WAYPOOL DRIVER tambi\u00E9n se eliminar\u00E1",
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
                            _this.SignupService.deleteAccount(_this.userUid);
                        }).then(function () {
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
    ProfilePage.prototype.showInfoProfile = function (user) {
        this.name = user.name;
        this.lastname = user.lastname;
        this.emailComplete = user.email + user.fixedemail;
        console.log(this.emailComplete);
    };
    ProfilePage.prototype.changePassword = function () {
        var _this = this;
        this.AngularFireAuth.auth.sendPasswordResetEmail(this.emailUser).then(function () {
            var alert = _this.alertCtrl.create({
                title: 'Revisa tu email',
                subTitle: 'te enviamos un correo donde podras reestablecer tu contraseña',
                buttons: ['OK']
            });
            alert.present();
        }).catch(function (error) {
            console.log(error);
        });
    };
    ProfilePage.prototype.ionViewDidLeave = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"C:\Users\danie\Documents\waypool\prod\latest\waypool_costumer\src\pages\p-profile\profile.html"*/'<ion-header class="bg-theme">\n\n    <ion-navbar>\n\n        <ion-title>PERFIL</ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n<ion-content class="bg-light">\n\n    <ion-item style="position: relative;z-index: 2;">\n\n        <ion-avatar item-start>\n\n            <img src="assets/imgs/userPicture.png">\n\n        </ion-avatar>\n\n        <div class="name">\n\n            <h2>{{user.name |titlecase}} {{user.lastname |titlecase}}\n\n            </h2>\n\n            <p *ngIf=\'user.verifiedPerson\' class="text-theme">VERIFICADO\n\n                <ion-icon name="ios-checkmark-circle" class="text-theme"></ion-icon>\n\n            </p>\n\n        </div>\n\n        \n\n    </ion-item>\n\n    \n\n    <div >\n\n        <ion-list >\n\n              \n\n                     \n\n            <div class="bg-white" padding>\n\n\n\n                <ion-list no-lines class="form-list">\n\n                    <ion-item>\n\n                        <ion-label floating >Nombre</ion-label>\n\n                        <ion-input type="text" [(ngModel)]="user.name" readonly></ion-input>\n\n                    </ion-item>\n\n                    <ion-item>\n\n                        <ion-label floating >Apellido</ion-label>\n\n                        <ion-input type="text" [(ngModel)]="user.lastname" readonly></ion-input>\n\n                    </ion-item>\n\n                    <ion-item>\n\n                        <ion-label floating>Número Telefónico Actual</ion-label>\n\n                        <ion-input type="number"  [(ngModel)]="user.phone" readonly></ion-input>\n\n                    </ion-item>\n\n                    <ion-item>\n\n                        <ion-label stacked>Número Telefónico Nuevo</ion-label>\n\n                        <ion-input type="number" placeholder="modifica aqui tu número" [(ngModel)]="phone"></ion-input>\n\n                    </ion-item>\n\n                    <ion-item>\n\n                        <ion-label floating>Email</ion-label>\n\n                        <ion-input type="text"  [(ngModel)]="emailComplete"  readonly></ion-input>\n\n                    </ion-item>\n\n                    <ion-item>\n\n                        <ion-label stacked >Sobre mi</ion-label>\n\n                        <ion-textarea placeholder="tu carrera, pasiones, skills"  [(ngModel)]="user.about"></ion-textarea>\n\n                    </ion-item>\n\n                    <ion-item>\n\n                        <ion-label stacked>URL de interés</ion-label>\n\n                        <ion-input type="text" placeholder="¿qué quieres que vean sobre ti?" [(ngModel)]="user.url" ></ion-input>\n\n                    </ion-item>\n\n\n\n\n\n                </ion-list>\n\n            </div>\n\n            <div padding-top padding-left padding-right text-center>\n\n                <p>\n\n                    <button class="btn text-theme rounded bg-white" style="width: 100%;margin-bottom: 8px;" (click)="saveChanges()">Guardar Cambios</button>\n\n\n\n                    <button class="btn text-theme rounded bg-white" style="width: 100%;    margin-bottom: 8px;" (click)="changePassword()" >Cambiar Contraseña</button>\n\n                    <button class="btn text-white rounded bg-red" style="width: 100%;    margin-bottom: 8px;" (click)="deleteAccount()">Eliminar Cuenta</button>\n\n              \n\n                </p>\n\n\n\n            </div>\n\n        </ion-list>\n\n        \n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\danie\Documents\waypool\prod\latest\waypool_costumer\src\pages\p-profile\profile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_3__services_userauthentication_service__["a" /* authenticationService */], __WEBPACK_IMPORTED_MODULE_4__services_signup_services__["a" /* SignUpService */], __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["AngularFireDatabase"]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ })

});
//# sourceMappingURL=35.js.map