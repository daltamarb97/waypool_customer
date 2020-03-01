webpackJsonp([70],{

/***/ 683:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrverVerificationNumberPageModule", function() { return DrverVerificationNumberPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__driver_verification_number__ = __webpack_require__(876);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DrverVerificationNumberPageModule = /** @class */ (function () {
    function DrverVerificationNumberPageModule() {
    }
    DrverVerificationNumberPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__driver_verification_number__["a" /* DrverVerificationNumberPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__driver_verification_number__["a" /* DrverVerificationNumberPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__driver_verification_number__["a" /* DrverVerificationNumberPage */]
            ]
        })
    ], DrverVerificationNumberPageModule);
    return DrverVerificationNumberPageModule;
}());

//# sourceMappingURL=driver-verification-number.module.js.map

/***/ }),

/***/ 876:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrverVerificationNumberPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_d_driverauthentication_service__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_d_signup_service__ = __webpack_require__(347);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DrverVerificationNumberPage = /** @class */ (function () {
    function DrverVerificationNumberPage(navCtrl, navParams, modalCtrl, authenticationService, alertCtrl, AngularFireAuth, signUpService, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.authenticationService = authenticationService;
        this.alertCtrl = alertCtrl;
        this.AngularFireAuth = AngularFireAuth;
        this.signUpService = signUpService;
        this.app = app;
        this.userId = this.navParams.get('userId');
    }
    DrverVerificationNumberPage.prototype.code = function () {
        var _this = this;
        this.authenticationService.deleteResendCode(this.signUpService.userPlace, this.userId);
        this.authenticationService.sendVerificationCodeToFirebase(this.signUpService.userPlace, this.userId, this.confText);
        this.signUpService.getMyInfo(this.signUpService.userPlace, this.userId).subscribe(function (driver) {
            _this.driverInfo = driver;
            if (_this.driverInfo.verificationCodeApproval === true) {
                _this.app.getRootNav().push('LoginPage');
                _this.authenticationService.deleteVerificationCode(_this.signUpService.userPlace, _this.userId);
            }
            else if (_this.driverInfo.verificationCodeApproval === false) {
                _this.authenticationService.deleteVerificationCode(_this.signUpService.userPlace, _this.userId);
                var alert_1 = _this.alertCtrl.create({
                    title: 'Código Errado',
                    subTitle: 'el código de verificacón está errado',
                    buttons: ['OK']
                });
                alert_1.present();
            }
        });
    };
    DrverVerificationNumberPage.prototype.resendCode = function () {
        this.authenticationService.deleteverificationCodeApproval(this.signUpService.userPlace, this.userId);
        this.authenticationService.resendVerificationCode(this.signUpService.userPlace, this.userId);
    };
    DrverVerificationNumberPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'driver-page-verification-number',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/waypool_costumer/src/pages/verification-number/driver-verification-number.html"*/'<ion-header class="transparent">\n  <ion-navbar>\n      <ion-title><span class="text-white">verification</span></ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-background-img">\n  <div class="logo">\n      <img src="assets/imgs/logo waypool gris-01.png" alt="logo">\n  </div>\n  <div class="bg-white login">\n      <div class="">\n          <p padding text-center>Ingresa el código de confirmación<br>enviado a tu SMS!</p>\n          <br>\n          <ion-list class="form" text-center>\n              <ion-item>\n                  <ion-input type="text" [(ngModel)]=\'confText\' text-right></ion-input>\n              </ion-item>\n          </ion-list>\n          <button ion-button full class="bg-theme-driver text-white btn rounded" (click)="code()">Next</button>\n          <br>\n          <p padding text-center class="resendingButton" (click)= "resendCode()">Reenviar código de verificación</p>      \n        </div>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/waypool_costumer/src/pages/verification-number/driver-verification-number.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__services_d_driverauthentication_service__["a" /* DriverAuthenticationService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_4__services_d_signup_service__["a" /* DriverSignUpService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]])
    ], DrverVerificationNumberPage);
    return DrverVerificationNumberPage;
}());

//# sourceMappingURL=driver-verification-number.js.map

/***/ })

});
//# sourceMappingURL=70.js.map