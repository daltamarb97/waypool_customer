webpackJsonp([22],{

/***/ 672:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalkthroughPageModule", function() { return WalkthroughPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__walkthrough__ = __webpack_require__(859);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WalkthroughPageModule = /** @class */ (function () {
    function WalkthroughPageModule() {
    }
    WalkthroughPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__walkthrough__["a" /* WalkthroughPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__walkthrough__["a" /* WalkthroughPage */]),
            ],
        })
    ], WalkthroughPageModule);
    return WalkthroughPageModule;
}());

//# sourceMappingURL=walkthrough.module.js.map

/***/ }),

/***/ 859:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalkthroughPage; });
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


/**
 * Generated class for the WalkthroughPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WalkthroughPage = /** @class */ (function () {
    function WalkthroughPage(navCtrl, navParams, viewCtrl, menuCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.menuCtrl = menuCtrl;
        this.animationSpeed = 1;
    }
    WalkthroughPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WalkthroughPage');
    };
    WalkthroughPage.prototype.handleAnimation = function (anim) {
        this.anim = anim;
    };
    WalkthroughPage.prototype.goLogin = function () {
        var _this = this;
        this.animate = "animated bounceOutRight";
        setTimeout(function () {
            _this.navCtrl.pop();
        }, 1000);
    };
    WalkthroughPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-walkthrough',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/WAYPOOL_OFICIAL/waypool_costumer/src/pages/p-walkthrough/walkthrough.html"*/'<!--\n  Generated template for the WalkthroughPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n\n  <ion-navbar>\n    <ion-title>walkthrough</ion-title>\n  </ion-navbar>\n\n</ion-header> -->\n\n\n<ion-content style="background-color: #001127">\n    <ion-slides pager>\n        <ion-slide>\n            <div class="logoholderm" text-center>\n                <img src="./assets/imgs/connectemployees.png" alt="">\n                \n                <h2>¡Viaja con tus compañeros!</h2>\n                <p>\n                    De tu empresa o de otras empresas\n                </p> \n                </div>\n          \n        </ion-slide>\n    \n        <ion-slide>\n            <div class="logoholderm" text-center>\n                <img src="./assets/imgs/typesoftrips.png" alt="">\n                \n                <h2>Tipos de viaje</h2>\n                <p>\n                    Programados: podrás reservar un viaje a cualquier hora durante el día.\n                </p> \n                <p>\n                    En curso: Son viajes iniciados por poolers que ya están recogiendo a otros pasajeros y pueden recogerte en ese momento.\n                </p>\n                </div>\n          \n        </ion-slide>\n        <ion-slide>\n            <div class="logoholderm" text-center>\n                <img src="./assets/imgs/morethanonetrip.png"  alt="">\n                \n                <h2>Puedes entrar en más de 1 viaje programado </h2>\n                <p>\n                    También escribir por chat para saludar a tus compañeros. \n                </p> \n                </div>         \n        </ion-slide>\n        <ion-slide>\n            <div class="logoholderm" text-center>\n                <img src="./assets/imgs/nocash.png"  alt="">\n                \n                <h2>No se maneja efectivo en el viaje</h2>\n                <p>\n                  Los viajes que haz hecho se cobran una sola vez cada semana mediante un link de la pasarela MercadoPago que te enviaremos en la App. Ahí podrás pagar con TC, efecty o Baloto. \n                </p> \n                </div>         \n        </ion-slide>\n            <ion-slide>\n                <div class="logoholderm" text-center>\n                    <img src="./assets/imgs/lowprices.png"  alt="">\n                    \n                    <h2>Precios bajos</h2>\n                    <p>\n                        Al viajar con tus compañeros aportas una pequeña contribución a los gastos de su viaje.\n                    </p> \n                    </div>         \n            </ion-slide>\n            \n        <ion-slide> \n            <div class="logoholderm"  text-center>\n                <img [ngClass]="animate" src="assets/imgs/blueCarWalkthrough.png" style="height: 20%; width: 20%;" alt="">\n                \n                <h2>Listo</h2>\n                <p>\n                   Gracias por ayudarnos a construir esta red de transporte inteligente\n                </p> \n\n                <div text-center>\n                    <button  class="btn bg-light text-theme rounded"  (click)="goLogin()">SALIR</button>\n                  </div>\n                </div>               \n        </ion-slide>\n      </ion-slides>\n\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/WAYPOOL_OFICIAL/waypool_costumer/src/pages/p-walkthrough/walkthrough.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* MenuController */]])
    ], WalkthroughPage);
    return WalkthroughPage;
}());

//# sourceMappingURL=walkthrough.js.map

/***/ })

});
//# sourceMappingURL=22.js.map