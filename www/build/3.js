webpackJsonp([3],{

/***/ 649:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalkthroughPageModule", function() { return WalkthroughPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__walkthrough__ = __webpack_require__(804);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__walkthrough__["a" /* WalkthroughPage */]),
            ],
        })
    ], WalkthroughPageModule);
    return WalkthroughPageModule;
}());

//# sourceMappingURL=walkthrough.module.js.map

/***/ }),

/***/ 804:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalkthroughPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(89);
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
            selector: 'page-walkthrough',template:/*ion-inline-start:"C:\Users\Daniel\Documents\waypool\prod\latest\user\waypool_costumer\src\pages\p-walkthrough\walkthrough.html"*/'<!--\n\n  Generated template for the WalkthroughPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<!-- <ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>walkthrough</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header> -->\n\n\n\n\n\n<ion-content style="background-color: #001127">\n\n    <ion-slides pager>\n\n        <ion-slide>\n\n            <div class="logoholderm" text-center>\n\n                <img src="./assets/imgs/connectemployees.png" alt="">\n\n                \n\n                <h2>¡Viaja con tus compañeros!</h2>\n\n                <p>\n\n                    De tu empresa o de otras empresas\n\n                </p> \n\n                </div>\n\n          \n\n        </ion-slide>\n\n    \n\n        <ion-slide>\n\n            <div class="logoholderm" text-center>\n\n                <img src="./assets/imgs/typesoftrips.png" alt="">\n\n                \n\n                <h2>Tipos de viaje</h2>\n\n                <p>\n\n                    Programados: podrás reservar un viaje a cualquier hora durante el día.\n\n                </p> \n\n                <p>\n\n                    En curso: Son viajes iniciados por poolers que ya están recogiendo a otros pasajeros y pueden recogerte en ese momento.\n\n                </p>\n\n                </div>\n\n          \n\n        </ion-slide>\n\n        <ion-slide>\n\n            <div class="logoholderm" text-center>\n\n                <img src="./assets/imgs/morethanonetrip.png"  alt="">\n\n                \n\n                <h2>Puedes entrar en más de 1 viaje programado </h2>\n\n                <p>\n\n                    También escribir por chat para saludar a tus compañeros. \n\n                </p> \n\n                </div>         \n\n        </ion-slide>\n\n        <ion-slide>\n\n            <div class="logoholderm" text-center>\n\n                <img src="./assets/imgs/nocash.png"  alt="">\n\n                \n\n                <h2>No se maneja efectivo en el viaje</h2>\n\n                <p>\n\n                  Los viajes que haz hecho se cobran una sola vez cada semana mediante un link de la pasarela MercadoPago que te enviaremos en la App. Ahí podrás pagar con TC, efecty o Baloto. \n\n                </p> \n\n                </div>         \n\n        </ion-slide>\n\n            <ion-slide>\n\n                <div class="logoholderm" text-center>\n\n                    <img src="./assets/imgs/lowprices.png"  alt="">\n\n                    \n\n                    <h2>Precios bajos</h2>\n\n                    <p>\n\n                        Al viajar con tus compañeros aportas una pequeña contribución a los gastos de su viaje.\n\n                    </p> \n\n                    </div>         \n\n            </ion-slide>\n\n            \n\n        <ion-slide> \n\n            <div class="logoholderm"  text-center>\n\n                <img [ngClass]="animate" src="assets/imgs/blueCarWalkthrough.png" style="height: 20%; width: 20%;" alt="">\n\n                \n\n                <h2>Listo</h2>\n\n                <p>\n\n                   Gracias por ayudarnos a construir esta red de transporte inteligente\n\n                </p> \n\n\n\n                <div text-center>\n\n                    <button  class="btn bg-light text-theme rounded"  (click)="goLogin()">SALIR</button>\n\n                  </div>\n\n                </div>               \n\n        </ion-slide>\n\n      </ion-slides>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Daniel\Documents\waypool\prod\latest\user\waypool_costumer\src\pages\p-walkthrough\walkthrough.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* MenuController */]])
    ], WalkthroughPage);
    return WalkthroughPage;
}());

//# sourceMappingURL=walkthrough.js.map

/***/ })

});
//# sourceMappingURL=3.js.map