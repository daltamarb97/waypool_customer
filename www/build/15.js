webpackJsonp([15],{

/***/ 643:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MorePageModule", function() { return MorePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__more__ = __webpack_require__(797);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MorePageModule = /** @class */ (function () {
    function MorePageModule() {
    }
    MorePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__more__["a" /* MorePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__more__["a" /* MorePage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__more__["a" /* MorePage */]
            ]
        })
    ], MorePageModule);
    return MorePageModule;
}());

//# sourceMappingURL=more.module.js.map

/***/ }),

/***/ 797:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MorePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_userauthentication_service__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_signup_services__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MorePage = /** @class */ (function () {
    function MorePage(navCtrl, AngularFireAuth, authenticationService, SignupService, app, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.AngularFireAuth = AngularFireAuth;
        this.authenticationService = authenticationService;
        this.SignupService = SignupService;
        this.app = app;
        this.alertCtrl = alertCtrl;
        this.userUid = this.AngularFireAuth.auth.currentUser.uid;
        this.user = {};
        this.verified = false;
        this.unsubscribe = new __WEBPACK_IMPORTED_MODULE_6_rxjs__["Subject"];
        this.SignupService.getMyInfoForProfile(this.SignupService.userPlace, this.userUid).takeUntil(this.unsubscribe).subscribe(function (user) {
            _this.user = user;
            console.log(_this.user);
            if (_this.user.verifiedPerson === true) {
                _this.verified = true;
            }
        });
    }
    MorePage.prototype.profile = function () {
        this.app.getRootNav().push('ProfilePage');
    };
    MorePage.prototype.terms = function () {
        this.navCtrl.push('TermsPage');
    };
    MorePage.prototype.help = function () {
        this.navCtrl.push('HelpPage');
    };
    MorePage.prototype.logOut = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: '¿estás seguro de querer cerrar sesión?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'cerrar sesión',
                    handler: function () {
                        _this.authenticationService.logOut().then(function () {
                            console.log(__WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().currentUser);
                            _this.SignupService.userPlace = undefined;
                            _this.navCtrl.setRoot('LoginPage');
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    MorePage.prototype.ionViewDidLeave = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    MorePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-more',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/WAYPOOL_OFICIAL/waypool_costumer/src/pages/more/more.html"*/'<ion-header class="bg-theme">\n    <ion-navbar>\n        <ion-title class="text-center">PERFIL</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-light" >\n    <ion-item>\n        \n                <ion-avatar item-start>\n                        <img src="assets/imgs/userPicture.png">\n                    </ion-avatar>\n                    <div class="name">\n                        <h2>{{user.name |titlecase}} {{user.lastname |titlecase}}\n                            <ion-icon *ngIf = \'verified\' name="ios-checkmark-circle" class="text-theme"></ion-icon>\n                        </h2>\n                        <p (click)="profile()">Editar Perfil</p>\n                    </div>\n        \n        \n        \n    </ion-item>\n\n    <ion-list no-lines>\n        <!-- <button ion-item (click)="reviews()">\n            <ion-avatar item-start>\n                <ion-icon name="ios-star"></ion-icon>\n            </ion-avatar>\n            Mis calificaciones (Próximamente)\n        </button>\n        <button ion-item (click)="notification()">\n            <ion-avatar item-start>\n                <ion-icon name="md-notifications"></ion-icon>\n            </ion-avatar>\n            Notificaciones (Próximamente)\n        </button> -->\n        <button ion-item (click)="terms()">\n            <ion-avatar item-start>\n                <ion-icon name="md-paper"></ion-icon>\n            </ion-avatar>\n            Terminos y Condiciones\n        </button>\n        <!-- <button ion-item (click)="earn()">\n            <ion-avatar item-start>\n                <ion-icon name="md-share"></ion-icon>\n            </ion-avatar>\n            Refiérenos y Ganas (Próximamente)\n        </button>\n        <button ion-item (click)="ratevroom()">\n            <ion-avatar item-start>\n                <ion-icon name="md-thumbs-up"></ion-icon>\n            </ion-avatar>\n            Cálifica a Waypool (Próximamente)\n        </button> -->\n        <button ion-item (click)="help()">\n            <ion-avatar item-start>\n                <ion-icon name="md-alert"></ion-icon>\n            </ion-avatar>\n           Soporte \n        </button>\n    </ion-list>\n  \n    \n    <ion-list no-lines>\n        <button ion-item (click)="logOut()" text-center><h2 class="text-theme"><strong>Salir de mi cuenta</strong></h2></button>\n\n    </ion-list>\n    <p class="love">Desarrollado con Amor para universitarios  <ion-icon name="heart"></ion-icon></p> \n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/WAYPOOL_OFICIAL/waypool_costumer/src/pages/more/more.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_2__services_userauthentication_service__["a" /* authenticationService */], __WEBPACK_IMPORTED_MODULE_4__services_signup_services__["a" /* SignUpService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], MorePage);
    return MorePage;
}());

//# sourceMappingURL=more.js.map

/***/ })

});
//# sourceMappingURL=15.js.map