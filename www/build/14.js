webpackJsonp([14],{

/***/ 685:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverSupportPageModule", function() { return DriverSupportPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__driverSupport__ = __webpack_require__(882);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DriverSupportPageModule = /** @class */ (function () {
    function DriverSupportPageModule() {
    }
    DriverSupportPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__driverSupport__["a" /* DriverSupportPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__driverSupport__["a" /* DriverSupportPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__driverSupport__["a" /* DriverSupportPage */]
            ]
        })
    ], DriverSupportPageModule);
    return DriverSupportPageModule;
}());

//# sourceMappingURL=driverSupport.module.js.map

/***/ }),

/***/ 882:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverSupportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_d_signup_service__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_d_driverauthentication_service__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_d_sendFeedback_service__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DriverSupportPage = /** @class */ (function () {
    function DriverSupportPage(navCtrl, navParams, AngularFireAuth, authenticationService, SignupService, sendFeedbackService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.AngularFireAuth = AngularFireAuth;
        this.authenticationService = authenticationService;
        this.SignupService = SignupService;
        this.sendFeedbackService = sendFeedbackService;
        this.userUid = this.AngularFireAuth.auth.currentUser.uid;
        this.userEmail = this.AngularFireAuth.auth.currentUser.email;
        this.user = {};
        this.unsubscribe = new __WEBPACK_IMPORTED_MODULE_6_rxjs__["Subject"];
        this.typeOfSituation = this.navParams.get('typeOfSituation');
        this.info = this.navParams.get('info');
        this.today = Date.now();
        this.SignupService.getMyInfoForProfile(this.userUid).takeUntil(this.unsubscribe)
            .subscribe(function (user) {
            _this.user = user;
            console.log(_this.user);
        });
    }
    DriverSupportPage.prototype.ionViewDidLeave = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    DriverSupportPage.prototype.sendEmail = function () {
        this.sendFeedbackService.sendFeedback(this.typeOfSituation, this.experience, this.user.name, this.user.lastname, this.user.phone, this.userUid);
        this.navCtrl.pop();
    };
    DriverSupportPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'driver-page-support',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/waypool_costumer/src/pages/support/driverSupport.html"*/'<ion-header class="bg-theme-driver">\n    <ion-navbar>\n        <ion-title>Soporte</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-light">\n    <ion-card class="slip">\n        <div text-center>\n            <h1 class="text-theme-driver">{{typeOfSituation}}</h1>\n            <p class="text-light">{{today | date}}\n            </p>\n           \n            <h4 class="text-dark">{{info}}</h4>\n        </div>\n    </ion-card>\n    <ion-card class="rate">\n        <div text-center>\n            \n            <div class="driver">\n                <ion-item>\n                    <ion-avatar item-start>\n                        <img src="assets/imgs/userPicture.png">\n                    </ion-avatar>\n                    <h2>{{user.name |titlecase}} {{user.lastname |titlecase}}\n                        <ion-icon name="ios-checkmark-circle" class="text-theme-driver"></ion-icon>\n                    </h2>\n            \n                </ion-item>\n                \n                <div class="form">\n                    <ion-list no-lines>\n                        <ion-item>\n                            <ion-textarea [(ngModel)]="experience" type="text" placeholder="¡Escríbenos con detalle!"></ion-textarea>\n                        </ion-item>\n                    </ion-list>\n                </div>\n                <p padding-top><button class="btn text-white bg-theme-driver rounded" style="width: 100%;"  (click)="sendEmail()" >ENVIAR</button></p>\n            </div>\n        </div>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/waypool_costumer/src/pages/support/driverSupport.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_3__services_d_driverauthentication_service__["a" /* DriverAuthenticationService */], __WEBPACK_IMPORTED_MODULE_2__services_d_signup_service__["a" /* DriverSignUpService */], __WEBPACK_IMPORTED_MODULE_5__services_d_sendFeedback_service__["a" /* DriverSendFeedbackService */]])
    ], DriverSupportPage);
    return DriverSupportPage;
}());

//# sourceMappingURL=driverSupport.js.map

/***/ })

});
//# sourceMappingURL=14.js.map