webpackJsonp([8],{

/***/ 692:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverWalkthroughPageModule", function() { return DriverWalkthroughPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__driverWalkthrough__ = __webpack_require__(890);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DriverWalkthroughPageModule = /** @class */ (function () {
    function DriverWalkthroughPageModule() {
    }
    DriverWalkthroughPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__driverWalkthrough__["a" /* DriverWalkthroughPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__driverWalkthrough__["a" /* DriverWalkthroughPage */]),
            ],
        })
    ], DriverWalkthroughPageModule);
    return DriverWalkthroughPageModule;
}());

//# sourceMappingURL=driverWalkthrough.module.js.map

/***/ }),

/***/ 890:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverWalkthroughPage; });
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
var DriverWalkthroughPage = /** @class */ (function () {
    function DriverWalkthroughPage(navCtrl, navParams, viewCtrl, menuCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.menuCtrl = menuCtrl;
        this.animationSpeed = 1;
        this.lottieConfig = {
            path: 'assets/icon/checked_done_.json',
            autoplay: true,
            loop: false
        };
    }
    DriverWalkthroughPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WalkthroughPage');
    };
    DriverWalkthroughPage.prototype.handleAnimation = function (anim) {
        this.anim = anim;
    };
    DriverWalkthroughPage.prototype.goLogin = function () {
        var _this = this;
        this.animate = "animated bounceOutRight";
        setTimeout(function () {
            _this.navCtrl.pop();
        }, 1000);
    };
    DriverWalkthroughPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'driver-page-walkthrough',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/waypool_costumer/src/pages/walkthrough/driverWalkthrough.html"*/'<!--\n  Generated template for the WalkthroughPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n\n  <ion-navbar>\n    <ion-title>walkthrough</ion-title>\n  </ion-navbar>\n\n</ion-header> -->\n\n\n<ion-content style="background-color: #001127">\n    <ion-slides pager>\n        <ion-slide>\n            <div class="logoholderm" text-center>\n                <img src="./assets/imgs/conectemployees.png" alt="">\n                \n                <h2>¡Conéctate con tus compañeros!</h2>\n                <p>\n                    Automáticamente, todos los días\n                </p> \n                </div>\n          \n        </ion-slide>\n    \n        <ion-slide>\n            <div class="logoholderm" text-center>\n                <img src="./assets/imgs/scheduleWalkthrough.png" alt="">\n                \n                <h2>Haz tu horario</h2>\n                <p>\n                    Cóloca las horas y si vas a tu casa o a la empresa.\n                </p> \n                </div>\n          \n        </ion-slide>\n    \n        <!-- <ion-slide>\n            <div class="logoholderm" text-center>\n                <img src="./assets/imgs/documentWalkthrough.png"  alt="">\n                \n                <h2>Envía tus documentos </h2>\n                <p>\n                    Envíanos tu licencia de conducción y cédula.\n                </p> \n                </div>         \n        </ion-slide>\n        <ion-slide>\n \n            <div class="logoholderm animated pulse" text-center>\n                <img src="./assets/imgs/confirmationWalkthrough.png"  alt="">\n\n             \n                <h2>Espera que verífiquemos tus documentos</h2>\n                <p>\n                    Nosotros te notificaremos por correo cuando hayamos verificado\n                </p> \n                </div>        \n        </ion-slide> -->\n        <ion-slide>\n            <div class="logoholderm" text-center>\n                <img src="./assets/imgs/nocash.png"  alt="">\n                \n                <h2>No se maneja efectivo en el viaje</h2>\n                <p>\n                  Al final de cada mes te consignaremos a tu cuenta bancaria el monto total que acumulaste por todas las veces que compartiste tu carro durante ese mes.\n                </p> \n                </div>         \n        </ion-slide>\n        <ion-slide> \n            <div class="logoholderm"  text-center>\n                <img [ngClass]="animate" src="assets/imgs/carBlue.png" style="height: 20%; width: 20%;" alt="">\n                \n                <h2>Listo</h2>\n                <p>\n                    Después de seguir estos pasos podrás usar Waypool y construir esta red de transporte inteligente\n                </p> \n\n                <div text-center>\n                    <button  class="btn bg-light text-theme-driver rounded"  (click)="goLogin()">SALIR</button>\n                  </div>\n                </div>               \n        </ion-slide>\n      </ion-slides>\n\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/waypool_costumer/src/pages/walkthrough/driverWalkthrough.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* MenuController */]])
    ], DriverWalkthroughPage);
    return DriverWalkthroughPage;
}());

//# sourceMappingURL=driverWalkthrough.js.map

/***/ })

});
//# sourceMappingURL=8.js.map