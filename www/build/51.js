webpackJsonp([51],{

/***/ 648:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverConfirmtripPageModule", function() { return DriverConfirmtripPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__driverConfirmtrip__ = __webpack_require__(837);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DriverConfirmtripPageModule = /** @class */ (function () {
    function DriverConfirmtripPageModule() {
    }
    DriverConfirmtripPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__driverConfirmtrip__["a" /* DriverConfirmtripPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__driverConfirmtrip__["a" /* DriverConfirmtripPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__driverConfirmtrip__["a" /* DriverConfirmtripPage */]
            ]
        })
    ], DriverConfirmtripPageModule);
    return DriverConfirmtripPageModule;
}());

//# sourceMappingURL=driverConfirmtrip.module.js.map

/***/ }),

/***/ 837:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverConfirmtripPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_d_sendCoords_service__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_d_sendUsers_service__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_d_instances_services__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_d_trips_service__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_d_signup_service__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_d_geofire_services__ = __webpack_require__(355);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var DriverConfirmtripPage = /** @class */ (function () {
    function DriverConfirmtripPage(navCtrl, SignUpServices, sendUsersService, TripsService, toastCtrl, viewCtrl, afDB, sendCoordsService, navParams, AngularFireAuth, instances, geofireServices) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.SignUpServices = SignUpServices;
        this.sendUsersService = sendUsersService;
        this.TripsService = TripsService;
        this.toastCtrl = toastCtrl;
        this.viewCtrl = viewCtrl;
        this.afDB = afDB;
        this.sendCoordsService = sendCoordsService;
        this.navParams = navParams;
        this.AngularFireAuth = AngularFireAuth;
        this.instances = instances;
        this.geofireServices = geofireServices;
        this.user = {};
        this.hideButton = true;
        this.hideText = false;
        this.userUid = this.AngularFireAuth.auth.currentUser.uid;
        this.unsubscribe = new __WEBPACK_IMPORTED_MODULE_7_rxjs__["Subject"];
        this.user = this.navParams.get('user');
        this.keyTrip = this.navParams.get('keyTrip');
        console.log(this.user);
        this.SignUpServices.getMyInfo(this.SignUpServices.userPlace, this.userUid).takeUntil(this.unsubscribe)
            .subscribe(function (driverInfo) {
            _this.driver = driverInfo;
            console.log(_this.driver);
        });
        this.sendCoordsService.confirmIfUsersIsStillInLMU(this.SignUpServices.userPlace, this.userUid, this.keyTrip, this.user.userId).takeUntil(this.unsubscribe)
            .subscribe(function (userInLMU) {
            console.log(_this.driver);
            _this.userInLMU = userInLMU;
            console.log(_this.userInLMU);
            if (_this.userInLMU === null || _this.userInLMU === undefined) {
                _this.viewCtrl.dismiss();
            }
        });
    }
    DriverConfirmtripPage.prototype.ionViewDidLeave = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    DriverConfirmtripPage.prototype.rejectUser = function () {
        //VIOLACION ABSOLUTA
        this.TripsService.eliminateLastMinuteUser(this.SignUpServices.userPlace, this.userUid, this.keyTrip, this.user.userId);
        console.log("nanai kukas");
        this.geofireServices.deleteKeyUserLMU(this.SignUpServices.userPlace, this.user.userId);
        this.geofireServices.setOntripFalseUserLMU(this.SignUpServices.userPlace, this.user.userId);
        this.geofireServices.deleteDriverFromLMUofUser(this.SignUpServices.userPlace, this.user.userId, this.keyTrip);
        this.TripsService.notifyLMUitsBeenRejected(this.SignUpServices.userPlace, this.user.userId);
        this.dismiss();
    };
    DriverConfirmtripPage.prototype.acceptUser = function () {
        this.TripsService.acceptLastMinute(this.SignUpServices.userPlace, this.userUid, this.keyTrip, this.user);
        this.TripsService.eliminateLastMinuteUser(this.SignUpServices.userPlace, this.userUid, this.keyTrip, this.user.userId);
        console.log("bienvenido al combo");
        this.dismiss();
    };
    DriverConfirmtripPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss(this.accepted);
        this.unsubscribe.next();
        this.unsubscribe.complete();
        // this.navCtrl.pop();
    };
    DriverConfirmtripPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'driver-page-confirmtrip',template:/*ion-inline-start:"C:\Users\Daniel\Documents\waypool\prod\latest\waypool_costumer\src\pages\confirmtrip\driverConfirmtrip.html"*/'<ion-content>\n\n  \n\n    <ion-card>\n\n            <img src="assets/imgs/merecoges.png" width="100px" style="display:inline-block" height="150px"/>\n\n\n\n        <!-- <h5 class="text-hot">Este usuario desea irse contigo</h5> -->\n\n        <ion-item>\n\n            <ion-avatar item-start>\n\n                <img src="assets/imgs/flame.png">\n\n            </ion-avatar>\n\n            <div class="name">\n\n                <h2>{{user.name|titlecase }} {{user.lastname|titlecase}}\n\n                    <ion-icon *ngIf=\'user.verifiedPerson\' name="ios-checkmark-circle" class="text-hot"></ion-icon>\n\n                </h2>\n\n            </div>\n\n        </ion-item>\n\n        <ion-card-content>\n\n            <div class="ride-detail">\n\n                <p><small>Origen</small>\n\n                    <span class="icon-location bg-hot"></span>{{user.origin}}</p>\n\n                <p>\n\n                    <small>Destino del viaje</small>\n\n                    <span class="icon-location bg-yellow"></span>{{user.destination}}</p>\n\n            </div>\n\n        </ion-card-content>\n\n\n\n        <ion-card-content>\n\n            <div class="ride-detail no-before" >\n\n                <p><small>Nota:<span class="text-theme-driver" float-right></span></small>\n\n                    <ion-icon name="md-calendar" class="icon-location"></ion-icon>\n\n                   {{user.note}}</p>               \n\n            </div>\n\n        </ion-card-content>\n\n\n\n        <ion-card-content>\n\n            <ion-row>\n\n                <ion-col>\n\n                    <button class="btn bg-white text-hot rounded" (click)="rejectUser()"  style="width: 100%;margin-top: 14px;">Rechazar</button>\n\n\n\n                </ion-col>\n\n                <ion-col>\n\n                    <button class="btn bg-hot text-white rounded" (click)="acceptUser()"  style="width: 100%;margin-top: 14px;">Aceptar</button>\n\n                </ion-col>\n\n            </ion-row>\n\n           \n\n\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Daniel\Documents\waypool\prod\latest\waypool_costumer\src\pages\confirmtrip\driverConfirmtrip.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_9__services_d_signup_service__["a" /* DriverSignUpService */], __WEBPACK_IMPORTED_MODULE_5__services_d_sendUsers_service__["a" /* DriverSendUsersService */], __WEBPACK_IMPORTED_MODULE_8__services_d_trips_service__["a" /* DriverTripsService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_3__services_d_sendCoords_service__["a" /* DriverSendCoordsService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_6__services_d_instances_services__["a" /* DriverInstancesService */], __WEBPACK_IMPORTED_MODULE_10__services_d_geofire_services__["a" /* DriverGeofireService */]])
    ], DriverConfirmtripPage);
    return DriverConfirmtripPage;
}());

//# sourceMappingURL=driverConfirmtrip.js.map

/***/ })

});
//# sourceMappingURL=51.js.map