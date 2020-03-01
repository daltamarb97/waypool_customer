webpackJsonp([80],{

/***/ 678:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverRatetripPageModule", function() { return DriverRatetripPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__driverRatetrip__ = __webpack_require__(867);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DriverRatetripPageModule = /** @class */ (function () {
    function DriverRatetripPageModule() {
    }
    DriverRatetripPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__driverRatetrip__["a" /* DriverRatetripPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__driverRatetrip__["a" /* DriverRatetripPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__driverRatetrip__["a" /* DriverRatetripPage */]
            ]
        })
    ], DriverRatetripPageModule);
    return DriverRatetripPageModule;
}());

//# sourceMappingURL=driverRatetrip.module.js.map

/***/ }),

/***/ 867:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverRatetripPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_d_signup_service__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_d_sendFeedback_service__ = __webpack_require__(363);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DriverRatetripPage = /** @class */ (function () {
    function DriverRatetripPage(navCtrl, navParams, SignUpServices, afDB, SignUpService, AngularFireAuth, sendfeedback, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.SignUpServices = SignUpServices;
        this.afDB = afDB;
        this.SignUpService = SignUpService;
        this.AngularFireAuth = AngularFireAuth;
        this.sendfeedback = sendfeedback;
        this.alertCtrl = alertCtrl;
        this.userDriverUid = this.AngularFireAuth.auth.currentUser.uid;
        this.userDriver = {};
        this.title = 'calificacion de viaje';
        this.today = Date.now();
        this.userDriver = this.navParams.get('user');
        this.trip = this.navParams.get('trip');
    }
    DriverRatetripPage.prototype.sendEmail = function () {
        if (this.experience === null || this.experience === undefined) {
            this.experience = 'no hay feedback';
            this.sendfeedback.sendFeedback(this.SignUpService.userPlace, this.title, this.experience, this.userDriver.name, this.userDriver.lastname, this.userDriver.phone, this.userDriverUid);
            this.navCtrl.setRoot('DriverFindridePage');
        }
        else {
            this.sendfeedback.sendFeedback(this.SignUpService.userPlace, this.title, this.experience, this.userDriver.name, this.userDriver.lastname, this.userDriver.phone, this.userDriverUid);
            this.navCtrl.setRoot('DriverFindridePage');
        }
    };
    DriverRatetripPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'driver-page-ratetrip',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/waypool_costumer/src/pages/ratetrip/driverRatetrip.html"*/'<ion-header class="bg-theme-driver">\n    <ion-navbar>\n        <ion-title>Viaje Finalizado</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-light">\n    <ion-card class="slip">\n        <div text-center>\n            <h4 class="text-dark">¡Esperamos que hayas tenido un excelente viaje!</h4>\n            <p class="text-light">{{today | date}}\n\n        </p>\n            <h1 class="text-theme-driver">$ {{trip.price}}</h1>\n            <h4 class="text-dark">Podrás ver tu pago en el ícono<br>Ganancias</h4>\n        </div>\n    </ion-card>\n    <ion-card class="rate">\n        <div text-center>\n                <h4 class="text-dark">Cuéntanos {{userDriver.name}} como ha sido la experiencia con Waypool </h4>           \n            <div class="driver">                \n                <div class="form">\n                    <ion-list no-lines>\n                        <ion-item>\n                            <ion-textarea [(ngModel)]="experience" type="text" placeholder="Déjanos tu sugerencia" ></ion-textarea>\n                        </ion-item>\n                    </ion-list>\n                </div>\n                <p padding-top><button navPop (click)="sendEmail()" class="btn text-white bg-theme-driver rounded" style="width: 100%;">ENVIAR</button></p>\n            </div>\n        </div>\n        <!-- <ion-row>\n            <button navPop (click)="sendEmail()" class="btn text-white bg-theme rounded" style="width: 30%;">ENVIAR</button>\n\n        </ion-row> -->\n    </ion-card>\n    <p class="love"> Created with <ion-icon name="heart"></ion-icon></p> \n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/waypool_costumer/src/pages/ratetrip/driverRatetrip.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_d_signup_service__["a" /* DriverSignUpService */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_2__services_d_signup_service__["a" /* DriverSignUpService */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_5__services_d_sendFeedback_service__["a" /* DriverSendFeedbackService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], DriverRatetripPage);
    return DriverRatetripPage;
}());

//# sourceMappingURL=driverRatetrip.js.map

/***/ })

});
//# sourceMappingURL=80.js.map