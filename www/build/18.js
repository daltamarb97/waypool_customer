webpackJsonp([18],{

/***/ 674:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverPublicProfilePageModule", function() { return DriverPublicProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__driver_public_profile__ = __webpack_require__(861);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DriverPublicProfilePageModule = /** @class */ (function () {
    function DriverPublicProfilePageModule() {
    }
    DriverPublicProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__driver_public_profile__["a" /* DriverPublicProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__driver_public_profile__["a" /* DriverPublicProfilePage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__driver_public_profile__["a" /* DriverPublicProfilePage */]
            ]
        })
    ], DriverPublicProfilePageModule);
    return DriverPublicProfilePageModule;
}());

//# sourceMappingURL=driver-public-profile.module.js.map

/***/ }),

/***/ 861:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverPublicProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_d_signup_service__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_d_driverauthentication_service__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the PublicProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DriverPublicProfilePage = /** @class */ (function () {
    function DriverPublicProfilePage(navCtrl, modalCtrl, toastCtrl, alertCtrl, AngularFireAuth, authenticationService, SignupService, navParams) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.AngularFireAuth = AngularFireAuth;
        this.authenticationService = authenticationService;
        this.SignupService = SignupService;
        this.navParams = navParams;
        this.unsubscribe = new __WEBPACK_IMPORTED_MODULE_5_rxjs__["Subject"];
        this.passenger = this.navParams.get('passenger');
        console.log(this.passenger);
    }
    DriverPublicProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'driver-page-public-profile',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/WAYPOOL_OFICIAL/waypool_costumer/src/pages/public-profile/driver-public-profile.html"*/'<ion-header class="bg-theme-driver">\n  <ion-navbar>\n      <ion-title>PERFIL DE {{passenger.name | uppercase}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-light">\n<!-- <ion-row>\n        <ion-item style="position: relative;z-index: 2;">\n                <ion-avatar item-start>\n                    <img class="image" src="assets/imgs/userPicture.png">\n                </ion-avatar>\n            </ion-item>\n</ion-row> -->\n<ion-row>\n    <ion-item>\n            <div class="name">\n                    <h1> \n                        {{passenger.name |titlecase}} {{passenger.lastname |titlecase}}\n                    </h1>\n                    \n                </div>\n    </ion-item>\n \n</ion-row>\n  \n  <div class="textBox">\n      <ion-list>   \n          <div class="bg-white" padding>\n              <ion-list no-lines>\n                  <ion-item>\n                      <ion-label stacked>Número Telefónico</ion-label>\n                      <ion-input type="text" [(ngModel)]="passenger.phone" readonly></ion-input>\n                    </ion-item>\n                    <!-- PROBLEM WITH DISPLAYING THE EMAIL -->\n                  <!-- <ion-item>\n                      <ion-label stacked>Email</ion-label>\n                      <ion-input type="text" [(ngModel)]="email" readonly></ion-input>                        <ion-input type="text" [(ngModel)]="user.name" readonly></ion-input>\n                  </ion-item> -->\n                  <ion-item>\n                      <ion-label stacked >Sobre {{passenger.name}}</ion-label>\n                      <ion-input type="text" [(ngModel)]="passenger.about" readonly></ion-input>\n                    </ion-item>\n                  <ion-item>\n                      <ion-label stacked>URL de interés</ion-label>\n                      <ion-input type="text" [(ngModel)]="passenger.url" readonly></ion-input>\n                  </ion-item>\n                 \n              </ion-list>\n          </div>\n      </ion-list>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/WAYPOOL_OFICIAL/waypool_costumer/src/pages/public-profile/driver-public-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_4__services_d_driverauthentication_service__["a" /* DriverAuthenticationService */], __WEBPACK_IMPORTED_MODULE_3__services_d_signup_service__["a" /* DriverSignUpService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], DriverPublicProfilePage);
    return DriverPublicProfilePage;
}());

//# sourceMappingURL=driver-public-profile.js.map

/***/ })

});
//# sourceMappingURL=18.js.map