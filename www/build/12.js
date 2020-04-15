webpackJsonp([12],{

/***/ 687:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeOfLoginPageModule", function() { return TypeOfLoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__type_of_login__ = __webpack_require__(880);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TypeOfLoginPageModule = /** @class */ (function () {
    function TypeOfLoginPageModule() {
    }
    TypeOfLoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__type_of_login__["a" /* TypeOfLoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__type_of_login__["a" /* TypeOfLoginPage */]),
            ],
        })
    ], TypeOfLoginPageModule);
    return TypeOfLoginPageModule;
}());

//# sourceMappingURL=type-of-login.module.js.map

/***/ }),

/***/ 880:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TypeOfLoginPage; });
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
 * Generated class for the TypeOfLoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TypeOfLoginPage = /** @class */ (function () {
    function TypeOfLoginPage(modalCtrl, navCtrl, navParams, alertCtrl) {
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
    }
    TypeOfLoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TypeOfLoginPage');
    };
    TypeOfLoginPage.prototype.goSignUpCorp = function () {
        var _this = this;
        var modal = this.modalCtrl.create('SignupPage', { typeOfSignUp: 'corp' });
        modal.onDidDismiss(function (loginGreenFlag) {
            if (loginGreenFlag === true) {
                _this.navCtrl.setRoot('LoginPage');
            }
            else {
                _this.navCtrl.setRoot('DriverUserVerificationPage');
            }
        });
        modal.present();
    };
    TypeOfLoginPage.prototype.goSignUpPersonal = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: '¿estás seguro de registrarte con correo personal?',
            subTitle: 'El proceso de registro con un correo corporativo es mucho más rápido. Sin embargo, si tu empresa no cuenta con correos corporativos, ¡esta es tu opción de registro!',
            buttons: [
                {
                    text: 'Estoy Seguro',
                    handler: function () {
                        var modal = _this.modalCtrl.create('SignupPage', { typeOfSignUp: 'personal' });
                        modal.onDidDismiss(function (loginGreenFlag) {
                            if (loginGreenFlag === true) {
                                _this.navCtrl.setRoot('LoginPage');
                            }
                            else {
                                _this.navCtrl.setRoot('DriverUserVerificationPage');
                            }
                        });
                        modal.present();
                    }
                },
                {
                    text: 'Registrarme con correo corporativo',
                    role: 'cancel',
                }
            ]
        });
        alert.present();
    };
    TypeOfLoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-type-of-login',template:/*ion-inline-start:"C:\Users\danie\Documents\waypool\prod\latest\waypool_costumer\src\pages\type-of-login\type-of-login.html"*/'<!--\n\n  Generated template for the TypeOfLoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header class="bg-theme">\n\n\n\n  <ion-navbar>\n\n    <ion-title><span>TIPO DE REGISTRO</span></ion-title>\n\n</ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="card-background-page">\n\n\n\n  <ion-card (click)=\'goSignUpCorp()\'>\n\n    <img src="assets/imgs/fondo_login_corp.png"/>\n\n    <!-- <div class="card-title">REGISTRO CON CORREO CORPORATIVO</div> -->\n\n  </ion-card>\n\n\n\n  <ion-card (click) = \'goSignUpPersonal()\'>\n\n    <img src="assets/imgs/fondo_login_personal.png"/>\n\n    <!-- <div class="card-title">RESGISTRO CON CORREO PERSONAL</div>\n\n    <div class="card-subtitle">64 Listings</div> -->\n\n  </ion-card>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\danie\Documents\waypool\prod\latest\waypool_costumer\src\pages\type-of-login\type-of-login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], TypeOfLoginPage);
    return TypeOfLoginPage;
}());

//# sourceMappingURL=type-of-login.js.map

/***/ })

});
//# sourceMappingURL=12.js.map