webpackJsonp([10],{

/***/ 593:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyridePageModule", function() { return MyridePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__myride__ = __webpack_require__(610);
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

/***/ 610:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyridePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_sendUsers_service__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_call_number__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_signup_services__ = __webpack_require__(328);
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
    MyridePage.prototype.chatDriver = function (driver) {
        this.navCtrl.push('ChattingPage', { driver: driver });
    };
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
            selector: 'page-myride',template:/*ion-inline-start:"C:\waypool\waypool_costumer\src\pages\myride\myride.html"*/'<ion-header class="bg-theme">\n\n    <ion-navbar>\n\n        <ion-title class="text-center">MI VIAJE</ion-title>\n\n    </ion-navbar>\n\n    \n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n\n\n    <div>\n\n        <ion-list>\n\n            <ion-card *ngFor = "let user of pickingUsers">\n\n                <ion-item>\n\n                    <ion-avatar item-start>\n\n                        <img src="assets/imgs/userPicture.png">\n\n                    </ion-avatar>\n\n                    <div class="name">\n\n                        <h2>{{user.name | titlecase}} {{user.lastname |titlecase | slice:0:1}}\n\n                            <ion-icon name="ios-checkmark-circle" class="text-theme"></ion-icon>\n\n                        </h2>\n\n                        \n\n                    </div>                   \n\n                    <div class="more">\n\n                        <ion-badge color="bg-yellow">EN ESPERA</ion-badge>\n\n                           \n\n                        \n\n                        \n\n\n\n                    </div>\n\n                </ion-item>\n\n                \n\n            </ion-card>\n\n            <ion-card *ngFor = "let user of pickedUpUsers">\n\n                <ion-item>\n\n                    <ion-avatar item-start>\n\n                        <img src="assets/imgs/userPicture.png">\n\n                    </ion-avatar>\n\n                    <div class="name">\n\n                        <h2>{{user.name | titlecase}} {{user.lastname |titlecase | slice:0:1}}\n\n                            <ion-icon name="ios-checkmark-circle" class="text-theme"></ion-icon>\n\n                        </h2>\n\n                        \n\n                    </div>\n\n                    <div class="more">\n\n                        <ion-badge color="bg-theme">RECOGIDO</ion-badge>                      \n\n                        \n\n\n\n                    </div>\n\n                   \n\n                </ion-item>\n\n                \n\n            </ion-card>\n\n\n\n            <!-- repilica -->\n\n            <ion-card *ngFor = "let driver of driverOnTrip">\n\n                <ion-item>\n\n                    <ion-avatar item-start>\n\n                        <img src="assets/imgs/userPicture.png">\n\n                    </ion-avatar>\n\n                    <div class="name">\n\n                        <h2>{{driver.name|titlecase}} {{driver.lastname |titlecase | slice:0:1}}\n\n                            <ion-icon name="ios-checkmark-circle" class="text-theme"></ion-icon>\n\n                        </h2>\n\n                        <p>{{driver.car}}</p>\n\n                    </div>\n\n                    <div class="more">\n\n                        <h2 class="text-theme" class="priceDriver">$ {{driver.price}}\n\n                        </h2>\n\n                    </div>                \n\n                   \n\n                </ion-item>\n\n                <ion-card-content>\n\n                    <div class="status"><img src="assets/imgs/driverEtiquette.png"></div>\n\n                    <div class="ride-detail">\n\n                        <p>\n\n                            <span class="icon-location bg-theme"></span>{{driver.origin}}</p>\n\n                        <p>\n\n                            <span class="icon-location bg-yellow"></span>{{driver.destination}}</p>\n\n                    </div>\n\n                    <ion-row>\n\n                    \n\n                        <ion-col center text-center>\n\n                            <button class="btn bg-theme rounded full text-white text-bold" (click)="chatDriver(driver)" ><ion-icon name="md-chatboxes" class="text-white"></ion-icon> </button>\n\n                        </ion-col>\n\n                        <ion-col center text-center>\n\n                            <button class="btn bg-theme rounded full text-white text-bold" (click)="callUser(driver.phone)" ><ion-icon name="ios-call" class="text-white"></ion-icon> </button>\n\n                        </ion-col>\n\n                   \n\n                    </ion-row>\n\n                </ion-card-content>\n\n            </ion-card>    \n\n\n\n            <button  class="btn bg-theme text-white rounded"  (click)="cancelTrip()"style="width: 90%;margin-top: 14px;margin-left: 18px;">Cancelar Viaje</button>\n\n\n\n        </ion-list>\n\n\n\n        <!-- <div *ngSwitchCase="\'map\'">\n\n           <div #map id="map" ></div>\n\n        </div> -->\n\n             \n\n\n\n        \n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\waypool\waypool_costumer\src\pages\myride\myride.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_6__services_signup_services__["a" /* SignUpService */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_4__ionic_native_call_number__["a" /* CallNumber */], __WEBPACK_IMPORTED_MODULE_2__services_sendUsers_service__["a" /* sendUsersService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
    ], MyridePage);
    return MyridePage;
}());

//# sourceMappingURL=myride.js.map

/***/ })

});
//# sourceMappingURL=10.js.map