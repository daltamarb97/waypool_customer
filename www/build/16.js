webpackJsonp([16],{

/***/ 603:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpPageModule", function() { return HelpPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__help__ = __webpack_require__(624);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HelpPageModule = /** @class */ (function () {
    function HelpPageModule() {
    }
    HelpPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__help__["a" /* HelpPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__help__["a" /* HelpPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__help__["a" /* HelpPage */]
            ]
        })
    ], HelpPageModule);
    return HelpPageModule;
}());

//# sourceMappingURL=help.module.js.map

/***/ }),

/***/ 624:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(88);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HelpPage = /** @class */ (function () {
    function HelpPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HelpPage.prototype.suggestion = function () {
        this.typeOfSituation = 'Sugerencia';
        this.info = 'Amamos las sugerencias ya que nos permiten mejorar cada vez más la aplicación, ¡Gracias de parte de todo el equipo de Waypool!';
        this.navCtrl.push('SupportPage', { typeOfSituation: this.typeOfSituation, info: this.info });
    };
    HelpPage.prototype.myAccount = function () {
        this.typeOfSituation = 'Mi Cuenta';
        this.info = 'Escríbenos cualquier cosa relacionada con tu cuenta';
        this.navCtrl.push('SupportPage', { typeOfSituation: this.typeOfSituation, info: this.info });
    };
    HelpPage.prototype.trip = function () {
        this.typeOfSituation = 'Viaje';
        this.info = '¿Haz tenido algún problema en algún viaje? ¡coloca el ID de tu viaje al comenzar el mensaje y con gusto te ayudaremos! ';
        this.navCtrl.push('SupportPage', { typeOfSituation: this.typeOfSituation, info: this.info });
    };
    HelpPage.prototype.bug = function () {
        this.typeOfSituation = 'Problema con la App';
        this.info = ' Muchas gracias por informarnos de estos problemas que ayudan a mejorar la usabilidad de la App cada día mas';
        this.navCtrl.push('SupportPage', { typeOfSituation: this.typeOfSituation, info: this.info });
    };
    HelpPage.prototype.paymentProblem = function () {
        this.typeOfSituation = 'Problema de Pago';
        this.info = '¿Haz tenido algún tipo de problema relacionado con la tarjeta con tu tarjeta de crédito? Descríbenos con detalle y nos comunicamos contigo lo más pronto posible';
        this.navCtrl.push('SupportPage', { typeOfSituation: this.typeOfSituation, info: this.info });
    };
    HelpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-help',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/waypoolapp_UNOFICIAL/waypool_costumer/src/pages/help/help.html"*/'<ion-header class="bg-theme">\n    <ion-navbar>\n        <ion-title>SOPORTE</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-light">\n    <p class="textHelp" padding>¡Escoje tu situación y escríbenos con mucho detalle para poder ayudarte lo más pronto posible!. También puedes escribirnos a waypooltec@gmail.com</p>\n    <ion-card (click)="suggestion()">\n        <ion-card-header>\n            <h1><strong>Sugerencia</strong>\n                <ion-icon name="ios-arrow-down-outline" class="text-light"></ion-icon>\n            </h1>\n        </ion-card-header>\n        <ion-card-content class="text">\n            Ayúdanos a mejorar el servicio  \n        </ion-card-content>\n    </ion-card>\n    <ion-card (click)="trip()">\n        <ion-card-header>\n            <h1><strong>Viaje</strong>\n                <ion-icon name="ios-arrow-down-outline" class="text-light"></ion-icon>\n            </h1>\n        </ion-card-header>\n        <ion-card-content class="text">\n            Escríbenos cualquier sugerencia/quejas con respecto a algún viaje\n        </ion-card-content>\n    </ion-card>\n    <ion-card (click)="bug()">\n        <ion-card-header>\n            <h1><strong>Problema con la App</strong>\n                <ion-icon name="ios-arrow-down-outline" class="text-light"></ion-icon>\n            </h1>\n        </ion-card-header>\n        <ion-card-content class="text">\n        Escríbenos cualquier problema que tengas con la App \n        </ion-card-content>\n    </ion-card>\n    <ion-card (click)="myAccount()">\n        <ion-card-header>\n            <h1><strong>Mi Cuenta</strong>\n                <ion-icon name="ios-arrow-down-outline" class="text"></ion-icon>\n            </h1>\n        </ion-card-header>\n        <ion-card-content class="text">\n        ¿Tienes alguna pregunta acerca de tu cuenta? ¡Escríbenos!.\n        </ion-card-content>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/waypoolapp_UNOFICIAL/waypool_costumer/src/pages/help/help.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], HelpPage);
    return HelpPage;
}());

//# sourceMappingURL=help.js.map

/***/ })

});
//# sourceMappingURL=16.js.map