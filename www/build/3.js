webpackJsonp([3],{

/***/ 649:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerificationNumberPageModule", function() { return VerificationNumberPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__verification_number__ = __webpack_require__(803);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var VerificationNumberPageModule = /** @class */ (function () {
    function VerificationNumberPageModule() {
    }
    VerificationNumberPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__verification_number__["a" /* VerificationNumberPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__verification_number__["a" /* VerificationNumberPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__verification_number__["a" /* VerificationNumberPage */]
            ]
        })
    ], VerificationNumberPageModule);
    return VerificationNumberPageModule;
}());

//# sourceMappingURL=verification-number.module.js.map

/***/ }),

/***/ 803:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerificationNumberPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_signup_services__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_userauthentication_service__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var VerificationNumberPage = /** @class */ (function () {
    function VerificationNumberPage(navCtrl, navParams, modalCtrl, authenticationService, alertCtrl, AngularFireAuth, signUpService, app) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.authenticationService = authenticationService;
        this.alertCtrl = alertCtrl;
        this.AngularFireAuth = AngularFireAuth;
        this.signUpService = signUpService;
        this.app = app;
        this.unsubscribe = new __WEBPACK_IMPORTED_MODULE_5_rxjs__["Subject"];
        this.userId = this.navParams.get('userId');
        console.log(this.userId);
        console.log(this.signUpService.userUniversity);
        this.signUpService.getMyInfo(this.userId, this.signUpService.userUniversity).takeUntil(this.unsubscribe).subscribe(function (user) {
            _this.userInfo = user;
            console.log(_this.userInfo);
        });
    }
    VerificationNumberPage.prototype.code = function () {
        this.authenticationService.deleteResendCode(this.signUpService.userUniversity, this.userId);
        this.authenticationService.sendVerificationCodeToFirebase(this.signUpService.userUniversity, this.userId, this.confText);
        // this.signUpService.getMyInfo(this.signUpService.userUniversity, this.userId).subscribe(user => {
        //   this.userInfo = user;
        //   console.log(this.userInfo);
        if (this.userInfo.verificationCodeApproval === true) {
            this.app.getRootNav().push('LoginPage');
            this.authenticationService.deleteVerificationCode(this.signUpService.userUniversity, this.userId);
        }
        else if (this.userInfo.verificationCodeApproval === false) {
            this.authenticationService.deleteVerificationCode(this.signUpService.userUniversity, this.userId);
            var alert_1 = this.alertCtrl.create({
                title: 'Código Errado',
                subTitle: 'el código de verificacón está errado',
                buttons: ['OK']
            });
            alert_1.present();
        }
        // })
    };
    VerificationNumberPage.prototype.resendCode = function () {
        this.authenticationService.deleteverificationCodeApproval(this.signUpService.userUniversity, this.userId);
        this.authenticationService.resendVerificationCode(this.signUpService.userUniversity, this.userId);
    };
    VerificationNumberPage.prototype.ionViewDidLeave = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    VerificationNumberPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-verification-number',template:/*ion-inline-start:"C:\Users\Daniel\Documents\waypool\prod\waypool_customer\waypool_costumer\src\pages\verification-number\verification-number.html"*/'<ion-header class="transparent">\n\n    <ion-navbar>\n\n        <ion-title><span class="text-white">verification</span></ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  \n\n  <ion-content class="bg-background-img">\n\n    <div class="logo">\n\n        <img src="assets/imgs/logo waypool gris-01.png" alt="logo">\n\n    </div>\n\n    <div class="bg-white login">\n\n        <div class="">\n\n            <p padding text-center>Ingresa el código de confirmación<br>enviado a tu SMS!</p>\n\n            <br>\n\n            <ion-list class="form" text-center>\n\n                <ion-item>\n\n                    <ion-input type="text" [(ngModel)]=\'confText\' text-right></ion-input>\n\n                </ion-item>\n\n            </ion-list>\n\n            <button ion-button full class="bg-theme text-white btn rounded" (click)="code()">Next</button>\n\n            <br>\n\n            <p padding text-center class="resendingButton" (click)= "resendCode()">Reenviar código de verificación</p>      \n\n          </div>\n\n    </div>\n\n  </ion-content>'/*ion-inline-end:"C:\Users\Daniel\Documents\waypool\prod\waypool_customer\waypool_costumer\src\pages\verification-number\verification-number.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_4__services_userauthentication_service__["a" /* authenticationService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_3__services_signup_services__["a" /* SignUpService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]])
    ], VerificationNumberPage);
    return VerificationNumberPage;
}());

//# sourceMappingURL=verification-number.js.map

/***/ })

});
//# sourceMappingURL=3.js.map