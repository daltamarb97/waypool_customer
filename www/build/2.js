webpackJsonp([2],{

/***/ 652:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletPageModule", function() { return WalletPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wallet__ = __webpack_require__(806);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WalletPageModule = /** @class */ (function () {
    function WalletPageModule() {
    }
    WalletPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__wallet__["a" /* WalletPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__wallet__["a" /* WalletPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__wallet__["a" /* WalletPage */]
            ]
        })
    ], WalletPageModule);
    return WalletPageModule;
}());

//# sourceMappingURL=wallet.module.js.map

/***/ }),

/***/ 806:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalletPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_sendCoords_service__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_sendUsers_service__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_signup_services__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_clipboard__ = __webpack_require__(360);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var WalletPage = /** @class */ (function () {
    function WalletPage(navCtrl, toastCtrl, sendUsersService, sendCoordsService, AngularFireAuth, signUpServices, afDB, clipboard) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.sendUsersService = sendUsersService;
        this.sendCoordsService = sendCoordsService;
        this.AngularFireAuth = AngularFireAuth;
        this.signUpServices = signUpServices;
        this.afDB = afDB;
        this.clipboard = clipboard;
        this.userUid = this.AngularFireAuth.auth.currentUser.uid;
        this.recordTrips = [];
        this.unsubscribe = new __WEBPACK_IMPORTED_MODULE_6_rxjs__["Subject"];
        this.sendUsersService.getRecordTrips(this.signUpServices.userPlace, this.userUid).takeUntil(this.unsubscribe)
            .subscribe(function (user) {
            _this.recordTrips = user;
            console.log(_this.recordTrips);
        });
        this.afDB.database.ref(this.signUpServices.userPlace + '/users/' + this.userUid).once('value').then(function (snapLink) {
            if (snapLink.val().paymentLink === undefined || snapLink.val().paymentLink === null) {
                console.log('no hay link');
                console.log(snapLink.val().paymentLink);
            }
            else {
                _this.paymentLink = snapLink.val().paymentLink;
            }
            _this.total = snapLink.val().pendingToPay;
        });
    }
    WalletPage.prototype.help = function () {
        var toast = this.toastCtrl.create({
            message: 'En esta página podrás ver el historial de viajes en los que ver la hora en la que terminaste el viaje, origen y destino, y el precio que colocaste por persona',
            showCloseButton: true,
            closeButtonText: 'OK',
            position: 'top'
        });
        toast.present();
    };
    WalletPage.prototype.ionViewDidLeave = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    WalletPage.prototype.copyToClipBoard = function (link) {
        console.log(link);
        this.clipboard.copy(link);
        var toast = this.toastCtrl.create({
            message: 'Link de pago copiado, pégalo en el browser',
            showCloseButton: true,
            closeButtonText: 'OK',
            position: 'top'
        });
        toast.present();
    };
    WalletPage.prototype.informationPayment = function () {
        var toast = this.toastCtrl.create({
            message: 'Nuestra pasarela de pagos es MercadoPago, hecha por Mercado Libre, considerada entre las 2 mejores de Latinoamérica en términos de eficiencia y seguridad. Waypool no obtiene en ningún momento información financiera como tarjeta de crédito, cuenta bancaria, u otra sensible.',
            showCloseButton: true,
            closeButtonText: 'OK',
            position: 'middle'
        });
        toast.present();
    };
    WalletPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-wallet',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/WAYPOOL_OFICIAL/waypool_costumer/src/pages/wallet/wallet.html"*/'<ion-header class="bg-theme">\n    <ion-navbar>\n        <ion-title class="text-center">SALDO A PAGAR</ion-title>\n    </ion-navbar>\n\n    <div text-center >\n        <p><small class="text-white">Saldo pendiente a pagar:</small></p>\n        <h1 class="text-white">$ {{total}}</h1>\n        <ion-row style="    display: flex;\n        justify-content: center;"> \n                <div class="iconHelp" style="font-size: 30px; margin-bottom: 7px;">\n                        <ion-icon class="text-white" (click)="informationPayment()" name="information-circle-outline"></ion-icon>\n                    </div>\n        </ion-row>\n    </div>\n    \n\n</ion-header>\n\n<ion-content class="bg-light">\n       \n        <ion-list style="display: flex" (click)=\'copyToClipBoard(paymentLink)\' >\n           \n\n                <ion-item>\n                    <ion-label stacked>Link para pagar tu saldo pendiente</ion-label>\n                    <ion-input  [(ngModel)]="paymentLink" readonly></ion-input>\n                </ion-item>\n                <button class="btn rounded bg-darkblue text-white" style="width: 20%;height: 66px;font-size: 30px;"><ion-icon name="copy"></ion-icon>\n                </button>\n            </ion-list>\n\n        <p class="love">Historial de viajes</p> \n\n    <ion-list>\n        <ion-card *ngFor = "let user of recordTrips">\n                <ion-item>\n                    <ion-avatar item-start>\n                        <img src="assets/imgs/carBlue.png" style="height:45px; width: 45px;">\n                    </ion-avatar>\n                    <div class="name">\n                        <h2>{{user.DestinationTime}}\n                        </h2>\n                        <p>{{user.car}}</p>\n                        <ion-badge  class="badge bg-darkblue"> Precio: $ {{user.price}}</ion-badge>                                  \n\n                    </div>\n\n                    \n                </ion-item>\n                <ion-card-content>\n                    <div class="ride-detail">\n                        <p>\n                            <span class="icon-location bg-theme"></span>{{user.houseAddr}}</p>\n                        <p>\n                            <span class="icon-location bg-yellow"></span>{{user.placeAddr}}</p>\n                    </div>\n                   \n                </ion-card-content>       \n                \n            </ion-card>  \n</ion-list>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/WAYPOOL_OFICIAL/waypool_costumer/src/pages/wallet/wallet.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4__services_sendUsers_service__["a" /* sendUsersService */], __WEBPACK_IMPORTED_MODULE_3__services_sendCoords_service__["a" /* sendCoordsService */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_5__services_signup_services__["a" /* SignUpService */], __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_8__ionic_native_clipboard__["a" /* Clipboard */]])
    ], WalletPage);
    return WalletPage;
}());

//# sourceMappingURL=wallet.js.map

/***/ })

});
//# sourceMappingURL=2.js.map