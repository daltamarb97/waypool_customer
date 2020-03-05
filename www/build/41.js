webpackJsonp([41],{

/***/ 659:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmtripPageModule", function() { return ConfirmtripPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__confirmtrip__ = __webpack_require__(850);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__confirmtrip__["a" /* ConfirmtripPage */]),
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

/***/ 850:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmtripPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_signup_services__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_sendCoords_service__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_sendUsers_service__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_geoFire_service__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_instances_service__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_trips_service__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_reserves_service__ = __webpack_require__(202);
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
    function ConfirmtripPage(navCtrl, reservesService, sendUsersService, TripsService, toastCtrl, viewCtrl, afDB, SignUpService, sendCoordsService, navParams, AngularFireAuth, geoFireService, instances, alertCtrl) {
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
        this.alertCtrl = alertCtrl;
        this.user = {};
        this.button = true;
        this.text = false;
        this.userUid = this.AngularFireAuth.auth.currentUser.uid;
        this.unsubscribe = new __WEBPACK_IMPORTED_MODULE_9_rxjs__["Subject"];
        this.myRideActivation = false;
        this.trip = this.navParams.get('trip');
        console.log(this.reserve);
        //get the info of the driver 
        this.SignUpService.getMyInfo(this.userUid, this.SignUpService.userPlace).takeUntil(this.unsubscribe)
            .subscribe(function (myUserInfo) {
            _this.user = myUserInfo;
            console.log(_this.user);
            if (_this.user.cancelModalLMU === true) {
                _this.dismiss();
                var alert_1 = _this.alertCtrl.create({
                    title: 'Escoge otro viaje',
                    buttons: ['OK']
                });
                alert_1.present();
            }
        });
        this.sendCoordsService.getPendingUsersInTrips(this.trip.driver.userId, this.trip.keyTrip, this.SignUpService.userPlace).takeUntil(this.unsubscribe)
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
        this.geoFireService.saveKey(this.SignUpService.userPlace, this.trip.keyTrip, this.trip.driver.userId, this.userUid);
        this.reservesService.setOnTrip(this.SignUpService.userPlace, this.userUid);
        this.TripsService.joinTrip(this.SignUpService.userPlace, this.trip.keyTrip, this.trip.driver.userId, this.userUid, this.user.trips.origin, this.user.trips.destination, this.user.name, this.user.lastname, this.user.phone, this.user.verifiedPerson, this.user.trips.distanceToGoInKM);
        // this.geoFireService.removeKeyGeofire(this.userUid);
        //OLD
        // NEXT: PASAR LOS KEYTRIP DE LAS RESERVAS PARA ACCEDER A ELLOS EN MIS RESERVAS, Y CAMBIARLE EL NOMBRE  A KEYRESERVES
        // this.geoFireService.deleteDriverListRide(this.userUid, this.driver.userId); 
        this.button = false;
        this.text = true;
    };
    ConfirmtripPage.prototype.dismissX = function () {
        var _this = this;
        this.viewCtrl.dismiss();
        this.geoFireService.deleteKey(this.SignUpService.userPlace, this.userUid);
        this.geoFireService.deleteDriverFromLMU(this.SignUpService.userPlace, this.userUid, this.trip.keyTrip);
        this.afDB.database.ref(this.SignUpService.userPlace + '/users/' + this.userUid).once('value').then(function (snap) {
            if (snap.val().onTrip) {
                _this.geoFireService.setOntripFalse(_this.SignUpService.userPlace, _this.userUid);
            }
            else {
            }
        });
        this.TripsService.getOutFromLMU(this.SignUpService.userPlace, this.trip.keyTrip, this.trip.driver.userId, this.userUid);
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
            selector: 'page-confirmtrip',template:/*ion-inline-start:"C:\Users\Daniel\Documents\waypool\prod\latest\waypool_costumer\src\pages\p-confirmtrip\confirmtrip.html"*/'<ion-content>\n\n    <ion-icon name="md-close" class="close-icon text-white" (click)="dismissX()"></ion-icon>\n\n    <ion-card>\n\n        <h6 class="text-hot hot">Viaje Iniciado </h6>\n\n        <ion-item>\n\n            <ion-avatar item-start>\n\n                <img src="assets/imgs/userPicture.png">\n\n            </ion-avatar>\n\n            <div class="name">\n\n                <h2>{{trip.driver.name|titlecase }} {{trip.driver.lastname|titlecase }}\n\n                    <ion-icon *ngIf=\'trip.driver.verifiedPerson\' name="ios-checkmark-circle" class="text-hot"></ion-icon>\n\n                </h2>\n\n                <p>{{trip.car}}</p>\n\n            </div>\n\n        </ion-item>\n\n        <ion-card-content>\n\n            <div class="ride-detail">\n\n                <p><small>Origen del viaje</small>\n\n                    <span class="icon-location bg-hot"></span>{{trip.houseAddr}}</p>\n\n                <p>\n\n                    <small>Destino del viaje</small>\n\n                    <span class="icon-location bg-yellow"></span>{{trip.placeAddr}}</p>\n\n            </div>\n\n        </ion-card-content>\n\n\n\n        \n\n\n\n        <ion-card-content>\n\n            <div class="seats">\n\n                <ion-row class="center">\n\n                    <div class="rate"> $ {{trip.price}}</div>\n\n                        \n\n                   \n\n                    \n\n                </ion-row>\n\n            </div>\n\n                <button class="btn bg-hot text-white rounded" (click)="goToRide()" *ngIf="button" style="width: 100%;margin-top: 14px;">Enviar Solicitud </button>\n\n                <p  text-center *ngIf="text">espera que tu compañero te acepte, si demora mucho presiona la X y escoje otro driver...</p> \n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Daniel\Documents\waypool\prod\latest\waypool_costumer\src\pages\p-confirmtrip\confirmtrip.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_11__services_reserves_service__["a" /* reservesService */], __WEBPACK_IMPORTED_MODULE_6__services_sendUsers_service__["a" /* sendUsersService */], __WEBPACK_IMPORTED_MODULE_10__services_trips_service__["a" /* TripsService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_3__services_signup_services__["a" /* SignUpService */], __WEBPACK_IMPORTED_MODULE_4__services_sendCoords_service__["a" /* sendCoordsService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_7__services_geoFire_service__["a" /* geofireService */], __WEBPACK_IMPORTED_MODULE_8__services_instances_service__["a" /* instancesService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], ConfirmtripPage);
    return ConfirmtripPage;
}());

//# sourceMappingURL=confirmtrip.js.map

/***/ })

});
//# sourceMappingURL=41.js.map