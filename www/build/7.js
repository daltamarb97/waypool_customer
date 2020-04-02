webpackJsonp([7],{

/***/ 691:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverWalletPageModule", function() { return DriverWalletPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__driverWallet__ = __webpack_require__(890);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DriverWalletPageModule = /** @class */ (function () {
    function DriverWalletPageModule() {
    }
    DriverWalletPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__driverWallet__["a" /* DriverWalletPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__driverWallet__["a" /* DriverWalletPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__driverWallet__["a" /* DriverWalletPage */]
            ]
        })
    ], DriverWalletPageModule);
    return DriverWalletPageModule;
}());

//# sourceMappingURL=driverWallet.module.js.map

/***/ }),

/***/ 890:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverWalletPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_d_sendCoords_service__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_d_signup_service__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_d_sendUsers_service__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angularfire2_database__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DriverWalletPage = /** @class */ (function () {
    function DriverWalletPage(navCtrl, toastCtrl, sendUsersService, sendCoordsService, AngularFireAuth, signupService, afDB, app, modalCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.sendUsersService = sendUsersService;
        this.sendCoordsService = sendCoordsService;
        this.AngularFireAuth = AngularFireAuth;
        this.signupService = signupService;
        this.afDB = afDB;
        this.app = app;
        this.modalCtrl = modalCtrl;
        this.userUid = this.AngularFireAuth.auth.currentUser.uid;
        this.recordTrips = [];
        this.total = 0;
        this.subtotal = 0;
        this.pickedUpUsers = [];
        this.newNumber = 0;
        this.unsubscribe = new __WEBPACK_IMPORTED_MODULE_6_rxjs__["Subject"];
        this.afDB.database.ref(this.signupService.userPlace + '/drivers/' + this.userUid).once('value').then(function (snap) {
            _this.userInfo = snap.val();
        });
        this.sendUsersService.getRecordTrips(this.signupService.userPlace, this.userUid)
            .subscribe(function (user) {
            _this.recordTrips = user;
            console.log(_this.recordTrips);
            _this.calculationOfTotalAmount();
        });
        console.log(this.total);
    }
    DriverWalletPage.prototype.calculationOfTotalAmount = function () {
        this.total = this.userInfo.pendingToReceive;
    };
    DriverWalletPage.prototype.help = function () {
        var toast = this.toastCtrl.create({
            message: 'En esta página podrás ver cuanto dinero haz hecho por viaje, ádemas del historial de viajes en los que podrás ver la hora en la que terminaste el viaje, origen y destino, y el precio que colocaste por persona',
            showCloseButton: true,
            closeButtonText: 'OK',
            position: 'top'
        });
        toast.present();
    };
    DriverWalletPage.prototype.goPaymentInfo = function () {
        var modal = this.modalCtrl.create('DriverPaymentsInfoPage', { userInfo: this.userInfo });
        modal.present();
    };
    DriverWalletPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'driver-page-wallet',template:/*ion-inline-start:"C:\Users\danie\waypool_costumer\src\pages\wallet\driverWallet.html"*/'<ion-header class="bg-theme-driver">\n\n    <ion-navbar>\n\n        <ion-title class="text-center">Mis Ganancias</ion-title>\n\n        <ion-icon name="help-circle-outline" class="text-white" (click)="help() " style="float: right;"></ion-icon> \n\n\n\n    </ion-navbar>\n\n    <div text-center >\n\n        <p><small class="text-white">Ganancias Totales:</small></p>\n\n        <h1 class="text-white">$ {{total}}</h1>\n\n        <ion-row>\n\n              \n\n        </ion-row>\n\n    </div>\n\n\n\n</ion-header>\n\n \n\n<ion-content class="bg-light">\n\n        <ion-row class="center-align row" style="margin-left: 16px; margin-right: 16px; margin-top: 15px" >\n\n                <button class="btn bg-theme-driver text-white rounded" style="width: 100%;font-size: 1.2rem;" (click)="goPaymentInfo()">Añadir información para recibir pagos</button>\n\n        </ion-row>\n\n        <p class="love">Historial de viajes</p> \n\n       \n\n    <ion-list>\n\n            <ion-card *ngFor = "let user of recordTrips">\n\n                    <ion-item>\n\n                        <ion-avatar item-start>\n\n                            <img src="assets/imgs/carBlue.png">\n\n                        </ion-avatar>\n\n                        <div class="name">\n\n                            <h2>{{user.DestinationTime}}\n\n                            </h2>\n\n                            <p>{{user.car}}</p>\n\n                        </div>\n\n                        <div class="more">                       \n\n                                <ion-badge  class="badge">$ {{user.price}}</ion-badge>                                  \n\n                                    \n\n                        </div>\n\n                    </ion-item>\n\n                    <ion-card-content>\n\n                        <div class="ride-detail">\n\n                            <p>\n\n                                <span class="icon-location bg-theme-driver"></span>{{user.houseAddr}}</p>\n\n                            <p>\n\n                                <span class="icon-location bg-yellow"></span>{{user.placeAddr}}</p>\n\n                        </div>\n\n                       \n\n                    </ion-card-content>       \n\n\n\n                </ion-card>  \n\n    </ion-list>\n\n\n\n\n\n    \n\n\n\n   \n\n   \n\n    \n\n    \n\n</ion-content>'/*ion-inline-end:"C:\Users\danie\waypool_costumer\src\pages\wallet\driverWallet.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */], __WEBPACK_IMPORTED_MODULE_5__services_d_sendUsers_service__["a" /* DriverSendUsersService */], __WEBPACK_IMPORTED_MODULE_3__services_d_sendCoords_service__["a" /* DriverSendCoordsService */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_4__services_d_signup_service__["a" /* DriverSignUpService */], __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */]])
    ], DriverWalletPage);
    return DriverWalletPage;
}());

//# sourceMappingURL=driverWallet.js.map

/***/ })

});
//# sourceMappingURL=7.js.map