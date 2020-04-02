webpackJsonp([33],{

/***/ 664:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatetripPageModule", function() { return RatetripPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ratetrip__ = __webpack_require__(855);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RatetripPageModule = /** @class */ (function () {
    function RatetripPageModule() {
    }
    RatetripPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__ratetrip__["a" /* RatetripPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__ratetrip__["a" /* RatetripPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__ratetrip__["a" /* RatetripPage */]
            ]
        })
    ], RatetripPageModule);
    return RatetripPageModule;
}());

//# sourceMappingURL=ratetrip.module.js.map

/***/ }),

/***/ 855:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RatetripPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_sendFeedback_service__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_signup_services__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_sendCoords_service__ = __webpack_require__(350);
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







var RatetripPage = /** @class */ (function () {
    function RatetripPage(navCtrl, navParams, sendfeedback, signUpService, sendCoordsService, angularFireAuth, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sendfeedback = sendfeedback;
        this.signUpService = signUpService;
        this.sendCoordsService = sendCoordsService;
        this.angularFireAuth = angularFireAuth;
        this.alertCtrl = alertCtrl;
        this.userUid = this.angularFireAuth.auth.currentUser.uid;
        this.user = {};
        this.driver = {};
        this.title = 'calificacion de viaje';
        this.unsubscribe = new __WEBPACK_IMPORTED_MODULE_6_rxjs__["Subject"];
        this.today = Date.now();
        this.signUpService.getMyInfo(this.userUid, this.signUpService.userPlace).takeUntil(this.unsubscribe).subscribe(function (user) {
            _this.user = user;
            console.log(_this.user);
        });
        this.trip = this.navParams.get('trip');
        console.log(this.trip);
    }
    RatetripPage.prototype.sendInfo = function () {
        if (this.experience === null || this.experience === undefined) {
            this.experience = 'no hay feedback';
            this.sendfeedback.sendFeedback(this.signUpService.userPlace, this.title, this.experience, this.user.name, this.user.lastname, this.user.phone, this.userUid);
            this.navCtrl.setRoot('FindridePassPage');
        }
        else {
            this.sendfeedback.sendFeedback(this.signUpService.userPlace, this.title, this.experience, this.user.name, this.user.lastname, this.user.phone, this.userUid);
            this.navCtrl.setRoot('FindridePassPage');
        }
    };
    RatetripPage.prototype.ionViewDidLeave = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    RatetripPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ratetrip',template:/*ion-inline-start:"C:\Users\danie\waypool_costumer\src\pages\p-ratetrip\ratetrip.html"*/'<ion-header class="bg-theme">\n\n  <ion-navbar>\n\n      <ion-title>Viaje Finalizado</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n  <ion-card class="slip">\n\n      <div text-center>\n\n          <h4 class="text-dark">¡Esperamos que hayas tenido un excelente viaje!</h4>\n\n          <p class="text-light">{{today | date}}\n\n\n\n      </p>\n\n          <h4 class="text-dark">el precio que pagaste por este viaje fue de:</h4>\n\n          <h1 class="text-theme">$ {{trip.price}}</h1>\n\n      </div>\n\n  </ion-card>\n\n  <ion-card class="rate">\n\n      <div text-center>\n\n              <h4 class="text-dark">Cuéntanos {{user.name}} como ha sido la experiencia con Waypool</h4>\n\n\n\n         \n\n          <div class="driver">\n\n              \n\n              <div class="form">\n\n                  <ion-list no-lines>\n\n                      <ion-item>\n\n                          <ion-textarea [(ngModel)]="experience" type="text" placeholder="Déjanos tu sugerencia" ></ion-textarea>\n\n                      </ion-item>\n\n                  </ion-list>\n\n              </div>\n\n\n\n\n\n              <p padding-top><button (click)="sendInfo()" class="btn text-white bg-theme rounded" style="width: 100%;">ENVIAR</button></p>\n\n\n\n          </div>\n\n      </div>\n\n  </ion-card>\n\n  <p class="love">Created with <ion-icon name="heart"></ion-icon></p> \n\n\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\danie\waypool_costumer\src\pages\p-ratetrip\ratetrip.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__services_sendFeedback_service__["a" /* sendFeedbackService */], __WEBPACK_IMPORTED_MODULE_4__services_signup_services__["a" /* SignUpService */], __WEBPACK_IMPORTED_MODULE_5__services_sendCoords_service__["a" /* sendCoordsService */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], RatetripPage);
    return RatetripPage;
}());

//# sourceMappingURL=ratetrip.js.map

/***/ })

});
//# sourceMappingURL=33.js.map