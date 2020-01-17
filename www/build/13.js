webpackJsonp([13],{

/***/ 643:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicProfilePageModule", function() { return PublicProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__public_profile__ = __webpack_require__(798);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PublicProfilePageModule = /** @class */ (function () {
    function PublicProfilePageModule() {
    }
    PublicProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__public_profile__["a" /* PublicProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__public_profile__["a" /* PublicProfilePage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__public_profile__["a" /* PublicProfilePage */]
            ]
        })
    ], PublicProfilePageModule);
    return PublicProfilePageModule;
}());

//# sourceMappingURL=public-profile.module.js.map

/***/ }),

/***/ 798:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicProfilePage; });
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
 * Generated class for the PublicProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PublicProfilePage = /** @class */ (function () {
    function PublicProfilePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.passengerArray = [];
        this.passenger = this.navParams.get('passenger');
        console.log(this.passenger);
        this.passengerArray.push(this.passenger);
        this.emailComplete = this.passenger.email + this.passenger.fixedemail;
    }
    PublicProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-public-profile',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/WAYPOOL_OFICIAL/waypool_costumer/src/pages/p-public-profile/public-profile.html"*/'<ion-header class="bg-theme">\n    <ion-navbar>\n        <ion-title>PERFIL</ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content class="bg-light" *ngFor = "let passenger of passengerArray">\n  <ion-row>\n      <ion-item>\n              <div class="name">\n                      <h1> \n                          {{passenger.name |titlecase}} {{passenger.lastname |titlecase}}\n                      </h1>\n                      \n                  </div>\n      </ion-item>\n   \n  </ion-row>\n    \n    <div class="textBox">\n        <ion-list>   \n            <div class="bg-white" padding>\n                <ion-list no-lines>\n                    <ion-item>\n                        <ion-label stacked>Número Telefónico</ion-label>\n                        <ion-input type="text" [(ngModel)]="passenger.phone" readonly></ion-input>\n                      </ion-item>\n                      <!-- PROBLEM WITH DISPLAYING THE EMAIL -->\n                    <!-- <ion-item>\n                        <ion-label stacked>Email</ion-label>\n                        <ion-input type="text" [(ngModel)]="emailComplete" readonly></ion-input>                        <ion-input type="text" [(ngModel)]="user.name" readonly></ion-input>\n                    </ion-item> -->\n                    <ion-item>\n                        <ion-label stacked >Sobre {{passenger.name}}</ion-label>\n                        <ion-input type="text" [(ngModel)]="passenger.about" readonly></ion-input>\n                      </ion-item>\n                    <ion-item>\n                        <ion-label stacked>URL de interés</ion-label>\n                        <ion-input type="text" [(ngModel)]="passenger.url" readonly></ion-input>\n                    </ion-item>\n                   \n                </ion-list>\n            </div>\n        </ion-list>\n    </div>\n  </ion-content>\n  '/*ion-inline-end:"/Users/juandavidjaramillo/Documents/WAYPOOL_OFICIAL/waypool_costumer/src/pages/p-public-profile/public-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], PublicProfilePage);
    return PublicProfilePage;
}());

//# sourceMappingURL=public-profile.js.map

/***/ })

});
//# sourceMappingURL=13.js.map