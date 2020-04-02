webpackJsonp([50],{

/***/ 652:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverMorePageModule", function() { return DriverMorePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__driverMore__ = __webpack_require__(845);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DriverMorePageModule = /** @class */ (function () {
    function DriverMorePageModule() {
    }
    DriverMorePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__driverMore__["a" /* DriverMorePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__driverMore__["a" /* DriverMorePage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__driverMore__["a" /* DriverMorePage */]
            ]
        })
    ], DriverMorePageModule);
    return DriverMorePageModule;
}());

//# sourceMappingURL=driverMore.module.js.map

/***/ }),

/***/ 845:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverMorePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_d_driverauthentication_service__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_d_signup_service__ = __webpack_require__(347);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { UploadPage } from '../upload/upload';




var DriverMorePage = /** @class */ (function () {
    function DriverMorePage(navCtrl, modalCtrl, AngularFireAuth, authenticationService, SignupService, app) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.AngularFireAuth = AngularFireAuth;
        this.authenticationService = authenticationService;
        this.SignupService = SignupService;
        this.app = app;
        this.userUid = this.AngularFireAuth.auth.currentUser.uid;
        this.user = {};
        this.verified = false;
        this.SignupService.getMyInfoForProfile(this.SignupService.userPlace, this.userUid).subscribe(function (user) {
            _this.user = user;
            console.log(_this.user);
            if (_this.user.verifiedPerson === true) {
                _this.verified = true;
            }
        });
    }
    DriverMorePage.prototype.profile = function () {
        this.app.getRootNav().push('DriverProfilePage');
    };
    DriverMorePage.prototype.showInfoCars = function () {
        var modal = this.modalCtrl.create('DriverShowInfoCarPage', { user: this.user });
        modal.present();
    };
    DriverMorePage.prototype.terms = function () {
        this.navCtrl.push('DriverTermsPage');
    };
    DriverMorePage.prototype.help = function () {
        this.navCtrl.push('DriverHelpPage');
    };
    DriverMorePage.prototype.logout = function () {
        this.authenticationService.logOut();
        console.log(__WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().currentUser);
        this.SignupService.userPlace = undefined;
        this.navCtrl.setRoot('LoginPage');
    };
    DriverMorePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'driver-page-more',template:/*ion-inline-start:"C:\Users\danie\Documents\waypool\prod\findyourcrew\waypool_costumer\src\pages\more\driverMore.html"*/'<ion-header class="bg-theme-driver">\n\n    <ion-navbar>\n\n        <ion-title class="text-center">PERFIL</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-light" >\n\n    <ion-item>\n\n        \n\n                <ion-avatar item-start>\n\n                        <img src="assets/imgs/userPicture.png">\n\n                    </ion-avatar>\n\n                    <div class="name">\n\n                        <h2>{{user.name |titlecase}} {{user.lastname |titlecase}}\n\n                            <ion-icon *ngIf = \'verified\' name="ios-checkmark-circle" class="text-theme-driver"></ion-icon>\n\n                        </h2>\n\n                        <p (click)="profile()">Editar Perfil</p>\n\n                    </div>\n\n        \n\n        \n\n        \n\n    </ion-item>\n\n\n\n    <ion-list no-lines>\n\n        <!-- <button ion-item (click)="reviews()">\n\n            <ion-avatar item-start>\n\n                <ion-icon name="ios-star"></ion-icon>\n\n            </ion-avatar>\n\n            Mis calificaciones (Próximamente)\n\n        </button> -->\n\n        <button ion-item (click)="showInfoCars()">\n\n            <ion-avatar item-start>\n\n                <ion-icon name="car"></ion-icon>\n\n            </ion-avatar>\n\n            Mis Vehículos        \n\n        </button>\n\n       \n\n        <!-- <button ion-item (click)="docs()">\n\n            <ion-avatar item-start>\n\n                <ion-icon name="md-paper"></ion-icon>\n\n            </ion-avatar>\n\n            Tus documentos\n\n        </button> -->\n\n        <!-- <button ion-item (click)="earn()">\n\n            <ion-avatar item-start>\n\n                <ion-icon name="md-share"></ion-icon>\n\n            </ion-avatar>\n\n            Refiérenos y Ganas (Próximamente)\n\n        </button>\n\n        <button ion-item (click)="ratevroom()">\n\n            <ion-avatar item-start>\n\n                <ion-icon name="md-thumbs-up"></ion-icon>\n\n            </ion-avatar>\n\n            Cálifica a Waypool (Próximamente)\n\n        </button> -->\n\n        <button ion-item (click)="help()">\n\n            <ion-avatar item-start>\n\n                <ion-icon name="md-alert"></ion-icon>\n\n            </ion-avatar>\n\n           Soporte \n\n        </button>\n\n        <button ion-item (click)="terms()">\n\n            <ion-avatar item-start>\n\n                <ion-icon name="md-paper"></ion-icon>\n\n            </ion-avatar>\n\n            Terminos y Condiciones\n\n        </button>\n\n    </ion-list>\n\n  \n\n    \n\n    <!-- <ion-list no-lines>\n\n        <button ion-item (click)="logout()" text-center><h2 class="text-theme"><strong>Salir de mi cuenta</strong></h2></button>\n\n\n\n    </ion-list> -->\n\n    <p class="love">Desarrollado con  <ion-icon name="heart"></ion-icon></p> \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\danie\Documents\waypool\prod\findyourcrew\waypool_costumer\src\pages\more\driverMore.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_2__services_d_driverauthentication_service__["a" /* DriverAuthenticationService */], __WEBPACK_IMPORTED_MODULE_5__services_d_signup_service__["a" /* DriverSignUpService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]])
    ], DriverMorePage);
    return DriverMorePage;
}());

//# sourceMappingURL=driverMore.js.map

/***/ })

});
//# sourceMappingURL=50.js.map