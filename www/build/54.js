webpackJsonp([54],{

/***/ 653:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferalPageModule", function() { return ReferalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__earn__ = __webpack_require__(847);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ReferalPageModule = /** @class */ (function () {
    function ReferalPageModule() {
    }
    ReferalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__earn__["a" /* ReferalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__earn__["a" /* ReferalPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__earn__["a" /* ReferalPage */]
            ]
        })
    ], ReferalPageModule);
    return ReferalPageModule;
}());

//# sourceMappingURL=earn.module.js.map

/***/ }),

/***/ 847:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReferalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__ = __webpack_require__(369);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReferalPage = /** @class */ (function () {
    function ReferalPage(navCtrl, socialSharing) {
        this.navCtrl = navCtrl;
        this.socialSharing = socialSharing;
    }
    ReferalPage.prototype.shareWhatsapp = function () {
        // Check if sharing via email is supported
        // Share via email
        this.socialSharing.shareViaWhatsApp('Comparte tu viaje al trabajo, ahorra dinero y ayuda al medio ambiente', null, 'www.waypooltech.com').then(function () {
            // Success!
        }).catch(function (error) {
            // Error!
            console.log(error);
        });
    };
    ReferalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-earn',template:/*ion-inline-start:"C:\Users\danie\Documents\waypool\prod\latest\waypool_costumer\src\pages\earn\earn.html"*/'<ion-header class="transparent">\n\n    <ion-navbar>\n\n        <ion-title><span class="text-white"></span></ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <img src="assets/imgs/menu-bg2.jpg">\n\n    <div padding-left padding-right>\n\n        <ion-card class="bg-theme">\n\n            <ion-card-content text-center>\n\n                <p class="text-white">Your Referral Code</p>\n\n                <h6 class="text-white">532461</h6>\n\n            </ion-card-content>\n\n        </ion-card>\n\n        <div padding-left padding-right padding-top padding>\n\n            <br>\n\n            <h4 class="text-theme">Refer and earn</h4>\n\n            <p class="text-drack">Share the referral code with your friends and family members and get 30% off on cab fare</p>\n\n        </div>\n\n        <ion-row>\n\n            <ion-col col-3 text-center padding>\n\n                <img src="assets/imgs/fb.png">\n\n            </ion-col>\n\n            <ion-col col-3 text-center padding padding>\n\n                <img (click)="shareWhatsapp()" src="assets/imgs/wpp.png">\n\n            </ion-col>\n\n            <ion-col col-3 text-center padding>\n\n                <img src="assets/imgs/tw.png">\n\n            </ion-col>\n\n            <ion-col col-3 text-center padding>\n\n                <img   src="assets/imgs/more.png">\n\n            </ion-col>\n\n        </ion-row>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\danie\Documents\waypool\prod\latest\waypool_costumer\src\pages\earn\earn.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__["a" /* SocialSharing */]])
    ], ReferalPage);
    return ReferalPage;
}());

//# sourceMappingURL=earn.js.map

/***/ })

});
//# sourceMappingURL=54.js.map