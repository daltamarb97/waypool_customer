webpackJsonp([10],{

/***/ 591:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyridePageModule", function() { return MyridePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__myride__ = __webpack_require__(608);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MyridePageModule = /** @class */ (function () {
    function MyridePageModule() {
    }
    MyridePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__myride__["a" /* MyridePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__myride__["a" /* MyridePage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__myride__["a" /* MyridePage */]
            ]
        })
    ], MyridePageModule);
    return MyridePageModule;
}());

//# sourceMappingURL=myride.module.js.map

/***/ }),

/***/ 608:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyridePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_sendUsers_service__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_call_number__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_signup_services__ = __webpack_require__(327);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyridePage = /** @class */ (function () {
    function MyridePage(navCtrl, alertCtrl, toastCtrl, SignUpService, geolocation, navParams, AngularFireAuth, callNumber, sendUsersService, app) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.SignUpService = SignUpService;
        this.geolocation = geolocation;
        this.navParams = navParams;
        this.AngularFireAuth = AngularFireAuth;
        this.callNumber = callNumber;
        this.sendUsersService = sendUsersService;
        this.app = app;
        this.pickingUsers = [];
        this.pickedUpUsers = [];
        this.driverOnTrip = [];
        this.userUid = this.AngularFireAuth.auth.currentUser.uid;
        this.sendUsersService.getMyDriverOnTrip(this.userUid)
            .subscribe(function (driver) {
            _this.driverOnTrip = driver;
            console.log(_this.driverOnTrip);
            if (_this.driverOnTrip.length == 0) {
            }
            else {
                _this.gettingUsersOnTrip(driver);
            }
        });
        this.SignUpService.getMyInfo(this.userUid).subscribe(function (user) {
            _this.user = user;
            if (_this.user.onTripFinal) {
                _this.navCtrl.push('RatetripPage', { userDriver: _this.driverOnTrip });
            }
            else {
            }
        });
    }
    MyridePage.prototype.gettingUsersOnTrip = function (driver) {
        var _this = this;
        this.sendUsersService.getUsersOnTrip(driver[0].userId)
            .subscribe(function (user) {
            _this.pickingUsers = user;
            console.log(_this.pickingUsers);
        });
        this.sendUsersService.getPickedUpUsers(driver[0].userId)
            .subscribe(function (user) {
            _this.pickedUpUsers = user;
            console.log(_this.pickedUpUsers);
        });
    };
    MyridePage.prototype.callUser = function (number) {
        var _this = this;
        console.log(number);
        this.callNumber.callNumber(number, true)
            .then(function (res) { return console.log('Launched dialer!', res); })
            .catch(function (err) {
            var alert = _this.alertCtrl.create({
                title: 'error de llamada',
                subTitle: 'hubo un error en la llamada, si persiste el probelma envianos un correo a waypooltec@gmail.com',
                buttons: ['OK']
            });
            alert.present();
            console.log('Error launching dialer', err);
        });
    };
    MyridePage.prototype.cancelTrip = function () {
        var _this = this;
        if (this.user.trips.pickedUp == true) {
            var toast = this.toastCtrl.create({
                message: this.user.name + " : No puedes cancelar ya que tu compa\u00F1ero ya te recogi\u00F3, si esto no es verdad, por favor saca un screenshot de Mi Viaje al correo waypooltec@gmail.com",
                showCloseButton: true,
                closeButtonText: 'Ok'
            });
            toast.present();
        }
        else if (this.user.trips.pickedUp !== true) {
            var alert_1 = this.alertCtrl.create({
                title: 'Cancelar Viaje',
                message: "\u00BFEstas seguro que deseas cancelar?",
                buttons: [
                    {
                        text: 'No',
                        role: 'cancel',
                        handler: function () {
                        }
                    },
                    {
                        text: 'Si',
                        handler: function () {
                            if (_this.driverOnTrip[0]) {
                                if (_this.user.geofireOr == true) {
                                    _this.sendUsersService.cancelTripUserOr(_this.driverOnTrip[0].userId, _this.userUid);
                                }
                                else if (_this.user.geofireDest == true) {
                                    _this.sendUsersService.cancelTripUserDest(_this.driverOnTrip[0].userId, _this.userUid);
                                }
                            }
                            else {
                                var alert_2 = _this.alertCtrl.create({
                                    title: 'no estas en un',
                                    subTitle: 'no estas en ningún viaje en este momento, ve al inicio para q vivas la experiencia',
                                    buttons: ['OK']
                                });
                                alert_2.present();
                            }
                        }
                    }
                ]
            });
            alert_1.present();
        }
    };
    MyridePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-myride',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/WAYPOOL_OFICIAL/waypool_customer/src/pages/myride/myride.html"*/'<ion-header class="bg-theme">\n    <ion-navbar>\n        <ion-title class="text-center">MI VIAJE</ion-title>\n    </ion-navbar>\n    \n</ion-header>\n\n<ion-content class="bg-light">\n\n    <div>\n        <ion-list>\n            <ion-card *ngFor = "let user of pickingUsers">\n                <ion-item>\n                    <ion-avatar item-start>\n                        <img src="assets/imgs/userPicture.png">\n                    </ion-avatar>\n                    <div class="name">\n                        <h2>{{user.name | titlecase}} {{user.lastname |titlecase | slice:0:1}}\n                            <ion-icon name="ios-checkmark-circle" class="text-theme"></ion-icon>\n                        </h2>\n                        \n                    </div>                   \n                    <div class="more">\n                        <ion-badge color="bg-yellow">EN ESPERA</ion-badge>\n                           \n                        \n                        \n\n                    </div>\n                </ion-item>\n                \n            </ion-card>\n            <ion-card *ngFor = "let user of pickedUpUsers">\n                <ion-item>\n                    <ion-avatar item-start>\n                        <img src="assets/imgs/userPicture.png">\n                    </ion-avatar>\n                    <div class="name">\n                        <h2>{{user.name | titlecase}} {{user.lastname |titlecase | slice:0:1}}\n                            <ion-icon name="ios-checkmark-circle" class="text-theme"></ion-icon>\n                        </h2>\n                        \n                    </div>\n                    <div class="more">\n                        <ion-badge color="bg-theme">RECOGIDO</ion-badge>                      \n                        \n\n                    </div>\n                   \n                </ion-item>\n                \n            </ion-card>\n\n            <!-- repilica -->\n            <ion-card *ngFor = "let driver of driverOnTrip">\n                <ion-item>\n                    <ion-avatar item-start>\n                        <img src="assets/imgs/userPicture.png">\n                    </ion-avatar>\n                    <div class="name">\n                        <h2>{{driver.name|titlecase}} {{driver.lastname |titlecase | slice:0:1}}\n                            <ion-icon name="ios-checkmark-circle" class="text-theme"></ion-icon>\n                        </h2>\n                        <p>{{driver.car}}</p>\n                    </div>\n                    <div class="more">\n                        <h2 class="text-theme" class="priceDriver">$ {{driver.price}}\n                        </h2>\n                    </div>                \n                   \n                </ion-item>\n                <ion-card-content>\n                    <div class="status"><img src="assets/imgs/driverEtiquette.png"></div>\n                    <div class="ride-detail">\n                        <p>\n                            <span class="icon-location bg-theme"></span>{{driver.origin}}</p>\n                        <p>\n                            <span class="icon-location bg-yellow"></span>{{driver.destination}}</p>\n                    </div>\n                    <ion-row>\n                        <ion-col class="detail-text">\n                            \n                        </ion-col>\n                        <ion-col class="detail-text">\n                            \n                        </ion-col>\n                        <ion-col center text-center>\n                            <button class="btn bg-theme rounded full text-white text-bold" (click)="callUser(driver.phone)" ><ion-icon name="ios-call" class="text-white"></ion-icon> LLAMAR</button>\n                        </ion-col>\n                   \n                    </ion-row>\n                </ion-card-content>\n            </ion-card>    \n\n            <button  class="btn bg-theme text-white rounded"  (click)="cancelTrip()"style="width: 90%;margin-top: 14px;margin-left: 18px;">Cancelar Viaje</button>\n\n        </ion-list>\n\n        <!-- <div *ngSwitchCase="\'map\'">\n           <div #map id="map" ></div>\n        </div> -->\n             \n\n        \n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/WAYPOOL_OFICIAL/waypool_customer/src/pages/myride/myride.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_6__services_signup_services__["a" /* SignUpService */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_4__ionic_native_call_number__["a" /* CallNumber */], __WEBPACK_IMPORTED_MODULE_2__services_sendUsers_service__["a" /* sendUsersService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
    ], MyridePage);
    return MyridePage;
}());

//# sourceMappingURL=myride.js.map

/***/ })

});
//# sourceMappingURL=10.js.map