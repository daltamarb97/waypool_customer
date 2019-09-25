webpackJsonp([19],{

/***/ 637:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmtripPageModule", function() { return ConfirmtripPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__confirmtrip__ = __webpack_require__(792);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ConfirmtripPageModule = /** @class */ (function () {
    function ConfirmtripPageModule() {
    }
    ConfirmtripPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__confirmtrip__["a" /* ConfirmtripPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__confirmtrip__["a" /* ConfirmtripPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__confirmtrip__["a" /* ConfirmtripPage */]
            ]
        })
    ], ConfirmtripPageModule);
    return ConfirmtripPageModule;
}());

//# sourceMappingURL=confirmtrip.module.js.map

/***/ }),

/***/ 792:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmtripPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_signup_services__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_sendCoords_service__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_sendUsers_service__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_geoFire_service__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_instances_service__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_trips_service__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_reserves_service__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var ConfirmtripPage = /** @class */ (function () {
    function ConfirmtripPage(navCtrl, reservesService, sendUsersService, TripsService, toastCtrl, viewCtrl, afDB, SignUpService, sendCoordsService, navParams, AngularFireAuth, geoFireService, instances) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.reservesService = reservesService;
        this.sendUsersService = sendUsersService;
        this.TripsService = TripsService;
        this.toastCtrl = toastCtrl;
        this.viewCtrl = viewCtrl;
        this.afDB = afDB;
        this.SignUpService = SignUpService;
        this.sendCoordsService = sendCoordsService;
        this.navParams = navParams;
        this.AngularFireAuth = AngularFireAuth;
        this.geoFireService = geoFireService;
        this.instances = instances;
        this.user = {};
        this.button = true;
        this.text = false;
        this.userUid = this.AngularFireAuth.auth.currentUser.uid;
        this.unsubscribe = new __WEBPACK_IMPORTED_MODULE_9_rxjs__["Subject"];
        this.myRideActivation = false;
        this.trip = this.navParams.get('trip');
        console.log(this.reserve);
        //get the info of the driver 
        this.SignUpService.getMyInfo(this.userUid, this.SignUpService.userUniversity).takeUntil(this.unsubscribe)
            .subscribe(function (myUserInfo) {
            _this.user = myUserInfo;
            console.log(_this.user);
        });
        this.sendCoordsService.getPendingUsersInTrips(this.trip.driver.userId, this.trip.keyTrip, this.SignUpService.userUniversity).takeUntil(this.unsubscribe)
            .subscribe(function (usersInPendingusers) {
            _this.usersInPending = usersInPendingusers;
            _this.usersInPending.forEach(function (user) {
                if (user.userId === _this.userUid) {
                    _this.accepted = true;
                    _this.dismiss();
                }
            });
        });
    }
    ConfirmtripPage.prototype.goToRide = function () {
        this.geoFireService.saveKey(this.SignUpService.userUniversity, this.trip.keyTrip, this.trip.driver.userId, this.userUid);
        this.reservesService.setOnTrip(this.SignUpService.userUniversity, this.userUid);
        this.TripsService.joinTrip(this.SignUpService.userUniversity, this.trip.keyTrip, this.trip.driver.userId, this.userUid, this.user.trips.origin, this.user.trips.destination, this.user.name, this.user.lastname, this.user.phone, this.user.trips.note, this.user.verifiedPerson);
        // this.geoFireService.removeKeyGeofire(this.userUid);
        //OLD
        // NEXT: PASAR LOS KEYTRIP DE LAS RESERVAS PARA ACCEDER A ELLOS EN MIS RESERVAS, Y CAMBIARLE EL NOMBRE  A KEYRESERVES
        // this.geoFireService.deleteDriverListRide(this.userUid, this.driver.userId); 
        this.button = false;
        this.text = true;
    };
    ConfirmtripPage.prototype.dismissX = function () {
        this.viewCtrl.dismiss();
    };
    ConfirmtripPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss(this.accepted);
        this.unsubscribe.next();
        this.unsubscribe.complete();
        if (this.trip.type === 'origin') {
            this.geoFireService.cancelGeofireOr();
            this.geoFireService.cancelGeofireOrLMU();
        }
        else if (this.trip.type === 'destination') {
            this.geoFireService.cancelGeofireDest();
            this.geoFireService.cancelGeofireDestLMU();
        }
    };
    ConfirmtripPage.prototype.ionViewDidLeave = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    ConfirmtripPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-confirmtrip',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/WAYPOOL_OFICIAL/waypool_costumer/src/pages/confirmtrip/confirmtrip.html"*/'<ion-content>\n    <ion-icon name="md-close" class="close-icon text-white" (click)="dismissX()"></ion-icon>\n    <ion-card>\n        <h6 class="text-hot hot">Viaje Iniciado </h6>\n        <ion-item>\n            <ion-avatar item-start>\n                <img src="assets/imgs/userPicture.png">\n            </ion-avatar>\n            <div class="name">\n                <h2>{{trip.driver.name|titlecase }} {{trip.driver.lastname|titlecase | slice:0:1}}\n                    <ion-icon *ngIf=\'trip.driver.verifiedPerson\' name="ios-checkmark-circle" class="text-hot"></ion-icon>\n                </h2>\n                <p>{{trip.car}}</p>\n            </div>\n        </ion-item>\n        <ion-card-content>\n            <div class="ride-detail">\n                <p><small>Origen del viaje</small>\n                    <span class="icon-location bg-hot"></span>{{trip.origin}}</p>\n                <p>\n                    <small>Destino del viaje</small>\n                    <span class="icon-location bg-yellow"></span>{{trip.destination}}</p>\n            </div>\n        </ion-card-content>\n\n        <ion-card-content>\n            <div class="ride-detail no-before" >\n                <p><small>Nota:<span class="text-theme" float-right></span></small>\n                    <ion-icon name="md-calendar" class="icon-location"></ion-icon>\n                   {{trip.note}}</p>\n               \n            </div>\n        </ion-card-content>\n\n        <ion-card-content>\n            <div class="seats">\n                <ion-row class="center">\n                    <div class="rate"> $ {{trip.price}}</div>\n                        \n                   \n                    \n                </ion-row>\n            </div>\n                <button class="btn bg-hot text-white rounded" (click)="goToRide()" *ngIf="button" style="width: 100%;margin-top: 14px;">Enviar Solicitud </button>\n                <p  text-center *ngIf="text">espera que tu compañero te acepte, si demora mucho presiona la X y escoje otro driver...</p> \n        </ion-card-content>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/WAYPOOL_OFICIAL/waypool_costumer/src/pages/confirmtrip/confirmtrip.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_11__services_reserves_service__["a" /* reservesService */], __WEBPACK_IMPORTED_MODULE_6__services_sendUsers_service__["a" /* sendUsersService */], __WEBPACK_IMPORTED_MODULE_10__services_trips_service__["a" /* TripsService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_3__services_signup_services__["a" /* SignUpService */], __WEBPACK_IMPORTED_MODULE_4__services_sendCoords_service__["a" /* sendCoordsService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_7__services_geoFire_service__["a" /* geofireService */], __WEBPACK_IMPORTED_MODULE_8__services_instances_service__["a" /* instancesService */]])
    ], ConfirmtripPage);
    return ConfirmtripPage;
}());

//# sourceMappingURL=confirmtrip.js.map

/***/ })

});
//# sourceMappingURL=19.js.map