webpackJsonp([13],{

/***/ 596:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyridePageModule", function() { return MyridePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__myride__ = __webpack_require__(617);
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

/***/ 617:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyridePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_sendUsers_service__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_call_number__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_signup_services__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_trips_service__ = __webpack_require__(334);
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
    function MyridePage(navCtrl, alertCtrl, TripsService, toastCtrl, SignUpService, geolocation, navParams, AngularFireAuth, callNumber, sendUsersService, app) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.TripsService = TripsService;
        this.toastCtrl = toastCtrl;
        this.SignUpService = SignUpService;
        this.geolocation = geolocation;
        this.navParams = navParams;
        this.AngularFireAuth = AngularFireAuth;
        this.callNumber = callNumber;
        this.sendUsersService = sendUsersService;
        this.app = app;
        this.pendingUsers = [];
        this.pickedUpUsers = [];
        this.driverOnTrip = [];
        this.myReservesId = [];
        this.userUid = this.AngularFireAuth.auth.currentUser.uid;
        this.driverExist = false;
        this.onTrip = false;
        this.cancelReserves = [];
        this.TripsService.getMyReservesUser(this.userUid)
            .subscribe(function (myReservesId) {
            //get all reserves id (reserve push key, driverUid) of my user node
            _this.myReservesId = myReservesId;
            console.log(_this.myReservesId);
            _this.getTrip();
        });
    }
    MyridePage.prototype.getTrip = function () {
        var _this = this;
        this.myReservesId.forEach(function (reserve) {
            //compare every reserveId User have and see if matches in Trip's node
            if (reserve.keyReserve === undefined || reserve.keyReserve === null) {
                // if reserve doesn't exist do nothing
                _this.driverExist = false;
            }
            else {
                //check if reserve exist inside node trips
                _this.TripsService.getMyReserves(reserve.keyReserve, reserve.driverId)
                    .subscribe(function (info) {
                    //check if the info of the reserve is null       
                    if (info === undefined || info === null) {
                        _this.driverExist = false;
                        _this.onTrip = false;
                    }
                    else {
                        _this.info = info;
                        //if matches get trip
                        if (reserve.keyReserve === _this.info.keyTrip) {
                            _this.onTrip = true;
                            _this.trip = info;
                            _this.getPendingAndPickedUpUsers(_this.trip.keyTrip, _this.trip.driver.userId);
                            _this.driverExist = true;
                            if (_this.trip.saveTrip === true) {
                                //check if trip has to be saved 
                                _this.TripsService.saveTripOnRecords(_this.userUid, _this.trip);
                                _this.driverExist = false;
                            }
                            _this.trip.cancelReserves = _this.cancelReserves;
                            _this.trip.cancelReserves.forEach(function (cancelReserve) {
                                //if driver cancel you, eliminate your keyReserve of your array
                                if (_this.cancelReserves === cancelReserve.userId) {
                                    _this.driverExist = false;
                                    _this.TripsService.eliminateKeyUser(_this.userUid, _this.trip.keyTrip);
                                    _this.navCtrl.setRoot(_this.navCtrl.getActive().component);
                                    var toast = _this.toastCtrl.create({
                                        message: "El conductor te ha cancelado de su viaje",
                                        showCloseButton: true,
                                        closeButtonText: 'Ok'
                                    });
                                    toast.present();
                                    console.log('YEAHHHHHHHHHHHHHHHHHH');
                                }
                            });
                        }
                        else {
                            // do nothing because the key of your reserve is not in trip's node
                        }
                        // do nothing because your trip doesn't exist
                    }
                });
            }
        });
    };
    MyridePage.prototype.getPendingAndPickedUpUsers = function (keyTrip, driverId) {
        var _this = this;
        this.TripsService.getPendingUsers(keyTrip, driverId)
            .subscribe(function (user) {
            _this.pendingUsers = user;
            console.log(_this.pendingUsers);
        });
        this.TripsService.getPickedUpUsers(keyTrip, driverId)
            .subscribe(function (user) {
            _this.pickedUpUsers = user;
            console.log(_this.pickedUpUsers);
        });
    };
    MyridePage.prototype.chatDriver = function (driver) {
        this.navCtrl.push('ChattingPage', { driver: driver });
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
        var alert = this.alertCtrl.create({
            title: 'Cancelar Viaje',
            message: "\u00BFEstas seguro que deseas cancelar?",
            buttons: [
                {
                    text: 'No',
                    role: 'cancel',
                    handler: function () {
                        //do nothing
                    }
                },
                {
                    text: 'Si',
                    handler: function () {
                        if (_this.pickedUpUsers.length === 0 || _this.pickedUpUsers === undefined || _this.pickedUpUsers === null) {
                            _this.TripsService.cancelTrip(_this.userUid, _this.trip.driver.userId, _this.trip.keyTrip);
                            _this.TripsService.eliminateKeyUser(_this.userUid, _this.trip.keyTrip);
                            _this.navCtrl.setRoot(_this.navCtrl.getActive().component);
                            console.log(_this.trip.keyTrip);
                            _this.driverExist = false;
                            _this.onTrip = false;
                            console.log(_this.driverExist);
                        }
                        _this.pickedUpUsers.forEach(function (pickedUser) {
                            // if user is in the pickedUpUsers array, it should not be able to cancel, because its already pickedUp.
                            if (pickedUser.userId === _this.userUid) {
                                //dont cancel
                                var toast = _this.toastCtrl.create({
                                    message: pickedUser.name + " : No puedes cancelar ya que tu compa\u00F1ero ya te recogi\u00F3, si esto no es verdad, por favor saca un screenshot de Mi Viaje al correo waypooltec@gmail.com",
                                    showCloseButton: true,
                                    closeButtonText: 'Ok'
                                });
                                toast.present();
                            }
                            else {
                                // desaparecer driver de el html y hacer condicionales del last minute this.user, buscar setTimeOut y una barra de tiempo para eliminarlo
                                _this.driverExist = false;
                                _this.onTrip = false;
                                _this.TripsService.cancelTrip(_this.userUid, _this.trip.driver.userId, _this.trip.keyTrip);
                                _this.TripsService.eliminateKeyUser(_this.userUid, _this.trip.keyTrip);
                                console.log(_this.trip.keyTrip);
                                _this.navCtrl.setRoot(_this.navCtrl.getActive().component);
                            }
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    MyridePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-myride',template:/*ion-inline-start:"D:\Users\Daniel\waypool\waypooltest\w_costumer_test\src\pages\myride\myride.html"*/'<ion-header class="bg-theme">\n\n    <ion-navbar>\n\n        <ion-title class="text-center">MI VIAJE</ion-title>\n\n    </ion-navbar>\n\n    \n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n\n\n    <div>\n\n        <ion-list>\n\n            <ion-card *ngFor = "let user of pendingUsers">\n\n                <ion-item>\n\n                    <ion-avatar item-start>\n\n                        <img src="assets/imgs/userPicture.png">\n\n                    </ion-avatar>\n\n                    <div class="name">\n\n                        <h2>{{user.name | titlecase}} {{user.lastname |titlecase | slice:0:1}}\n\n                            <ion-icon name="ios-checkmark-circle" class="text-theme"></ion-icon>\n\n                        </h2>\n\n                        \n\n                    </div>                   \n\n                    <div class="more">\n\n                        <ion-badge color="bg-yellow">EN ESPERA</ion-badge>\n\n                           \n\n                        \n\n                        \n\n\n\n                    </div>\n\n                </ion-item>\n\n                \n\n            </ion-card>\n\n            <ion-card *ngFor = "let user of pickedUpUsers">\n\n                <ion-item>\n\n                    <ion-avatar item-start>\n\n                        <img src="assets/imgs/userPicture.png">\n\n                    </ion-avatar>\n\n                    <div class="name">\n\n                        <h2>{{user.name | titlecase}} {{user.lastname |titlecase | slice:0:1}}\n\n                            <ion-icon name="ios-checkmark-circle" class="text-theme"></ion-icon>\n\n                        </h2>\n\n                        \n\n                    </div>\n\n                    <div class="more">\n\n                        <ion-badge color="bg-theme">RECOGIDO</ion-badge>                      \n\n                        \n\n\n\n                    </div>\n\n                   \n\n                </ion-item>\n\n                \n\n            </ion-card>\n\n\n\n            <!-- repilica -->\n\n            <ion-card *ngIf="driverExist">\n\n                <ion-item>\n\n                    <ion-avatar item-start>\n\n                        <img src="assets/imgs/userPicture.png">\n\n                    </ion-avatar>\n\n                    <div class="name">\n\n                        <h2>{{trip.driver.name|titlecase}} {{trip.driver.lastname |titlecase | slice:0:1}}\n\n                            <ion-icon name="ios-checkmark-circle" class="text-theme"></ion-icon>\n\n                        </h2>\n\n                        <p>{{trip.driver.car}}</p>\n\n                    </div>\n\n                    <div class="more">\n\n                        <h2 class="text-theme" class="priceDriver">$ {{trip.driver.price}}\n\n                        </h2>\n\n                    </div>                \n\n                   \n\n                </ion-item>\n\n                <ion-card-content>\n\n                    <div class="status"><img src="assets/imgs/driverEtiquette.png"></div>\n\n                    <div class="ride-detail">\n\n                        <p>\n\n                            <span class="icon-location bg-theme"></span>{{trip.driver.origin}}</p>\n\n                        <p>\n\n                            <span class="icon-location bg-yellow"></span>{{trip.driver.destination}}</p>\n\n                    </div>\n\n                    <ion-row>\n\n                        <ion-col center text-center col-6 text-right style="margin-left: auto;">\n\n                            <h2 class="text text-theme">                        \n\n                                Hora de partida: {{trip.startHour}}                          \n\n                            </h2>                    \n\n                        </ion-col>  \n\n                        <ion-col class="detail-text">\n\n                            <button class="btn bg-theme rounded full text-white text-bold" (click)="chatDriver(trip.driver)" ><ion-icon name="md-chatboxes" class="text-white"></ion-icon> </button>\n\n                        </ion-col>\n\n                        <ion-col class="detail-text">\n\n                            <button class="btn bg-theme rounded full text-white text-bold" (click)="callUser(trip.driver.phone)" ><ion-icon name="ios-call" class="text-white"></ion-icon> </button>\n\n                        </ion-col>\n\n                   \n\n                    </ion-row>\n\n                </ion-card-content>\n\n            </ion-card>    \n\n           \n\n            <button  class="btn bg-theme text-white rounded" *ngIf="onTrip"  (click)="cancelTrip()"style="width: 90%;margin-top: 14px;margin-left: 18px;">Cancelar Viaje</button>\n\n\n\n        </ion-list>\n\n\n\n        <!-- <div *ngSwitchCase="\'map\'">\n\n           <div #map id="map" ></div>\n\n        </div> -->\n\n             \n\n\n\n        \n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Users\Daniel\waypool\waypooltest\w_costumer_test\src\pages\myride\myride.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_7__services_trips_service__["a" /* TripsService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_6__services_signup_services__["a" /* SignUpService */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_4__ionic_native_call_number__["a" /* CallNumber */], __WEBPACK_IMPORTED_MODULE_2__services_sendUsers_service__["a" /* sendUsersService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
    ], MyridePage);
    return MyridePage;
}());

//# sourceMappingURL=myride.js.map

/***/ })

});
//# sourceMappingURL=13.js.map