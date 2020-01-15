webpackJsonp([23],{

/***/ 633:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanceltripPageModule", function() { return CanceltripPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__canceltrip__ = __webpack_require__(788);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CanceltripPageModule = /** @class */ (function () {
    function CanceltripPageModule() {
    }
    CanceltripPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__canceltrip__["a" /* CanceltripPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__canceltrip__["a" /* CanceltripPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__canceltrip__["a" /* CanceltripPage */]
            ]
        })
    ], CanceltripPageModule);
    return CanceltripPageModule;
}());

//# sourceMappingURL=canceltrip.module.js.map

/***/ }),

/***/ 788:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanceltripPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(68);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CanceltripPage = /** @class */ (function () {
    function CanceltripPage(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
    }
    CanceltripPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss(this.accepted);
    };
    CanceltripPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-canceltrip',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/WAYPOOL_OFICIAL/waypool_costumer/src/pages/canceltrip/canceltrip.html"*/'<ion-content>\n    <ion-icon name="md-close" class="close-icon text-white" (click)="dismiss()"></ion-icon>\n    <ion-card>\n            <img src="assets/imgs/cancelacion.png" width="100px" style="display:inline-block" height="150px"/>\n\n        <!-- <h5 class="text-hot">Este usuario desea irse contigo</h5> -->\n        <ion-item>\n            \n            <div>\n\n                <h2 class="text">Se ha cancelado el viaje o</h2>\n                <h2 class="text"></h2>\n\n                <h2 class="text">el conductor te eliminó </h2>\n\n               \n                \n            \n\n\n            </div>\n        </ion-item>\n       \n\n\n        <ion-card-content>\n            <ion-row>\n                <ion-col>\n                    <button class="btn bg-white text-red rounded" (click)="dismiss()"  style="width: 100%;margin-top: 14px;">OK</button>\n\n                </ion-col>\n               \n            </ion-row>\n\n        </ion-card-content>\n    </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/WAYPOOL_OFICIAL/waypool_costumer/src/pages/canceltrip/canceltrip.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */]])
    ], CanceltripPage);
    return CanceltripPage;
}());

//# sourceMappingURL=canceltrip.js.map

/***/ })

});
//# sourceMappingURL=23.js.map