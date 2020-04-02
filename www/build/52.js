webpackJsonp([52],{

/***/ 649:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverHelpPageModule", function() { return DriverHelpPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__driverHelp__ = __webpack_require__(842);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DriverHelpPageModule = /** @class */ (function () {
    function DriverHelpPageModule() {
    }
    DriverHelpPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__driverHelp__["a" /* DriverHelpPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__driverHelp__["a" /* DriverHelpPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__driverHelp__["a" /* DriverHelpPage */]
            ]
        })
    ], DriverHelpPageModule);
    return DriverHelpPageModule;
}());

//# sourceMappingURL=driverHelp.module.js.map

/***/ }),

/***/ 842:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverHelpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DriverHelpPage = /** @class */ (function () {
    function DriverHelpPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    DriverHelpPage.prototype.suggestion = function () {
        this.typeOfSituation = 'Sugerencia';
        this.info = 'Amamos las sugerencias ya que nos permiten mejorar cada vez más la aplicación, ¡Gracias de parte de todo el equipo de Waypool!';
        this.navCtrl.push('DriverSupportPage', { typeOfSituation: this.typeOfSituation, info: this.info });
    };
    DriverHelpPage.prototype.myAccount = function () {
        this.typeOfSituation = 'Mi Cuenta';
        this.info = 'Escríbenos cualquier cosa relacionada con tu cuenta';
        this.navCtrl.push('DriverSupportPage', { typeOfSituation: this.typeOfSituation, info: this.info });
    };
    DriverHelpPage.prototype.trip = function () {
        this.typeOfSituation = 'Viaje';
        this.info = '¿Haz tenido algún problema en algún viaje? ¡coloca el ID de tu viaje al comenzar el mensaje y con gusto te ayudaremos! ';
        this.navCtrl.push('DriverSupportPage', { typeOfSituation: this.typeOfSituation, info: this.info });
    };
    DriverHelpPage.prototype.bug = function () {
        this.typeOfSituation = 'Problema con la App';
        this.info = ' Muchas gracias por informarnos de estos problemas que ayudan a mejorar la usabilidad de la App cada día mas';
        this.navCtrl.push('DriverSupportPage', { typeOfSituation: this.typeOfSituation, info: this.info });
    };
    DriverHelpPage.prototype.paymentProblem = function () {
        this.typeOfSituation = 'Problema de Pago';
        this.info = '¿Haz tenido algún tipo de problema relacionado con la tarjeta con tu tarjeta de crédito? Descríbenos con detalle y nos comunicamos contigo lo más pronto posible';
        this.navCtrl.push('DriverSupportPage', { typeOfSituation: this.typeOfSituation, info: this.info });
    };
    DriverHelpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'driver-page-help',template:/*ion-inline-start:"C:\Users\danie\Documents\waypool\prod\findyourcrew\waypool_costumer\src\pages\help\driverHelp.html"*/'<ion-header class="bg-theme-driver">\n\n    <ion-navbar>\n\n        <ion-title>Soporte</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n    <p class="textHelp" padding>¡Escoje tu situación y escríbenos con mucho detalle para poder ayudarte lo más pronto posible!. También puedes escribirnos a team@waypooltech.com</p>\n\n    <ion-card (click)="suggestion()">\n\n        <ion-card-header>\n\n            <h1><strong>Sugerencia</strong>\n\n                <ion-icon name="ios-arrow-down-outline" class="text-light"></ion-icon>\n\n            </h1>\n\n        </ion-card-header>\n\n        <ion-card-content class="text">\n\n            Ayúdanos a mejorar el servicio  \n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card (click)="trip()">\n\n        <ion-card-header>\n\n            <h1><strong>Viaje</strong>\n\n                <ion-icon name="ios-arrow-down-outline" class="text-light"></ion-icon>\n\n            </h1>\n\n        </ion-card-header>\n\n        <ion-card-content class="text">\n\n            Escríbenos cualquier sugerencia/quejas con respecto a algún viaje\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card (click)="bug()">\n\n        <ion-card-header>\n\n            <h1><strong>Problema con la App</strong>\n\n                <ion-icon name="ios-arrow-down-outline" class="text-light"></ion-icon>\n\n            </h1>\n\n        </ion-card-header>\n\n        <ion-card-content class="text">\n\n        Escríbenos cualquier problema que tengas con la App \n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card (click)="myAccount()">\n\n        <ion-card-header>\n\n            <h1><strong>Mi Cuenta</strong>\n\n                <ion-icon name="ios-arrow-down-outline" class="text"></ion-icon>\n\n            </h1>\n\n        </ion-card-header>\n\n        <ion-card-content class="text">\n\n        ¿Tienes alguna pregunta acerca de tu cuenta? ¡Escríbenos!.\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\danie\Documents\waypool\prod\findyourcrew\waypool_costumer\src\pages\help\driverHelp.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */]])
    ], DriverHelpPage);
    return DriverHelpPage;
}());

//# sourceMappingURL=driverHelp.js.map

/***/ })

});
//# sourceMappingURL=52.js.map