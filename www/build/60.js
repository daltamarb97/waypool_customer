webpackJsonp([60],{

/***/ 647:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverChatsPageModule", function() { return DriverChatsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__driverChats__ = __webpack_require__(842);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DriverChatsPageModule = /** @class */ (function () {
    function DriverChatsPageModule() {
    }
    DriverChatsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__driverChats__["a" /* DriverChatsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__driverChats__["a" /* DriverChatsPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__driverChats__["a" /* DriverChatsPage */]
            ]
        })
    ], DriverChatsPageModule);
    return DriverChatsPageModule;
}());

//# sourceMappingURL=driverChats.module.js.map

/***/ }),

/***/ 842:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverChatsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_d_sendUsers_service__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_d_signup_service__ = __webpack_require__(347);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DriverChatsPage = /** @class */ (function () {
    function DriverChatsPage(navCtrl, sendUsersService, AngularFireAuth, signUpService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.sendUsersService = sendUsersService;
        this.AngularFireAuth = AngularFireAuth;
        this.signUpService = signUpService;
        this.driverUid = this.AngularFireAuth.auth.currentUser.uid;
        this.pickingUsers = [];
        this.sendUsersService.getUsersOnTrip(this.signUpService.userPlace, this.driverUid)
            .subscribe(function (user) {
            _this.pickingUsers = user;
            console.log(_this.pickingUsers);
        });
    }
    DriverChatsPage.prototype.chatting = function (user) {
        this.navCtrl.push('DriverChattingPage', { user: user });
    };
    DriverChatsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'driver-page-chats',template:/*ion-inline-start:"C:\Users\danie\waypool_costumer\src\pages\chats\driverChats.html"*/'<ion-header class="bg-theme-driver">\n\n    <ion-navbar>\n\n        <ion-title class="text-center">CHATS\n\n        </ion-title>\n\n\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n    <ion-item (click)="chatting(user)" *ngFor="let user of pickingUsers">\n\n        <ion-avatar item-start>\n\n            <img src="assets/imgs/userPicture.png">\n\n            <ion-badge color="danger">9+</ion-badge>\n\n        </ion-avatar>\n\n        <h2 class="text-theme-driver">{{user.name |titlecase}} {{user.lastname | titlecase}}.\n\n        </h2>\n\n        <p>Washington sq Park?</p>\n\n        <ion-note item-end>Ride on<span class="time">1:12 pm</span></ion-note>\n\n    </ion-item>\n\n   \n\n    <p text-center class="text-light"><small>Este chat se borrará automáticamente cuando  <br>terminado el viaje.</small></p>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\danie\waypool_costumer\src\pages\chats\driverChats.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_d_sendUsers_service__["a" /* DriverSendUsersService */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_4__services_d_signup_service__["a" /* DriverSignUpService */]])
    ], DriverChatsPage);
    return DriverChatsPage;
}());

//# sourceMappingURL=driverChats.js.map

/***/ })

});
//# sourceMappingURL=60.js.map