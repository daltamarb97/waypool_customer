webpackJsonp([22],{

/***/ 633:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmReservationPageModule", function() { return ConfirmReservationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__confirm_reservation__ = __webpack_require__(660);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ConfirmReservationPageModule = /** @class */ (function () {
    function ConfirmReservationPageModule() {
    }
    ConfirmReservationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__confirm_reservation__["a" /* ConfirmReservationPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__confirm_reservation__["a" /* ConfirmReservationPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__confirm_reservation__["a" /* ConfirmReservationPage */]
            ]
        })
    ], ConfirmReservationPageModule);
    return ConfirmReservationPageModule;
}());

//# sourceMappingURL=confirm-reservation.module.js.map

/***/ }),

/***/ 660:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmReservationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_signup_services__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_sendCoords_service__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_sendUsers_service__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_geoFire_service__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_instances_service__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { AngularFireDatabase } from 'angularfire2/database';


// import { RidetodayPage } from '../ridetoday/ridetoday';
// import { MyridePage } from '../myride/myride';
// import { TabsPage } from '../tabs/tabs';




var ConfirmReservationPage = /** @class */ (function () {
    function ConfirmReservationPage(navCtrl, sendUsersService, SignUpService, sendCoordsService, modalCtrl, AngularFireAuth, viewCtrl, navParams, geoFireService, instances, toastCtrl, alertCtrl, app) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.sendUsersService = sendUsersService;
        this.SignUpService = SignUpService;
        this.sendCoordsService = sendCoordsService;
        this.modalCtrl = modalCtrl;
        this.AngularFireAuth = AngularFireAuth;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.geoFireService = geoFireService;
        this.instances = instances;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.app = app;
        this.userDriverUid = this.AngularFireAuth.auth.currentUser.uid;
        this.infoUser = {};
        this.unsubscribe = new __WEBPACK_IMPORTED_MODULE_8_rxjs__["Subject"];
        this.reserves = [];
        this.passengers = [];
        this.reserveKey = this.navParams.get('reserveKey');
        this.driver = this.navParams.get('driver');
        console.log(this.driver);
        this.driverId = this.driver.userId;
        this.sendCoordsService.getPendingUsers(this.SignUpService.userUniversity, this.driverId, this.reserveKey).takeUntil(this.unsubscribe)
            .subscribe(function (passengers) {
            _this.passengers = passengers;
            console.log(_this.passengers);
            _this.passengers.push(_this.driver);
        });
    }
    // pending to make this logic of steping out from reserve being user 
    ConfirmReservationPage.prototype.cancelReserve = function () {
    };
    ConfirmReservationPage.prototype.showProfilePassenger = function (passenger) {
        this.app.getRootNav().push('PublicProfilePage', { passenger: passenger });
        this.accepted = true;
        this.dismiss();
    };
    ConfirmReservationPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss(this.accepted);
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    ConfirmReservationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-confirm-reservation',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/waypoolapp_UNOFICIAL/waypool_costumer/src/pages/confirm-reservation/confirm-reservation.html"*/'<ion-content>\n  <ion-icon name="md-close" class="close-icon text-white" (click)="dismiss()"></ion-icon>\n  <ion-card>\n     <h6 class="text-theme">Tus compañeros de viaje</h6>\n     <ion-item  *ngFor="let passenger of passengers" >\n        <ion-avatar item-start>\n           <img src="assets/imgs/userPicture.png">\n        </ion-avatar>\n        <div class="passenger">\n          <div  class="name">\n                <h2 (click)=\'showProfilePassenger(passenger)\'>{{passenger.name |titlecase}} {{passenger.lastname  |titlecase | slice:0:1}}.</h2>\n                <h5>{{passenger.about | slice:0:25}}...</h5>\n\n          </div>\n        </div>\n        \n      \n     </ion-item>\n \n     <ion-card-content>\n        <div class="ride-detail no-before">\n           <p>\n              Estos son tus compañeros que se han unido a tu viaje, que tengas un excelente viaje \n             \n            \n           </p>\n           \n        </div>\n     </ion-card-content>\n     <ion-card-content>\n        <div class="seats">\n           \n           <ion-row style="margin-top: 14px;   display: flex;\n           justify-content: center">\n              \n              <ion-col col-8>\n                <!-- here, the user should be able just to step out from the reserve -->\n                 <button class="btn bg-red text-white rounded" style="width: 100%;font-size: .95rem;"(click)="cancelReserve()">Salir de este Viaje</button>\n              </ion-col>\n           </ion-row>\n        </div>\n     </ion-card-content>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/waypoolapp_UNOFICIAL/waypool_costumer/src/pages/confirm-reservation/confirm-reservation.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__services_sendUsers_service__["a" /* sendUsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_sendUsers_service__["a" /* sendUsersService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_signup_services__["a" /* SignUpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_signup_services__["a" /* SignUpService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_sendCoords_service__["a" /* sendCoordsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_sendCoords_service__["a" /* sendCoordsService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_6__services_geoFire_service__["a" /* geofireService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_geoFire_service__["a" /* geofireService */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_7__services_instances_service__["a" /* instancesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_instances_service__["a" /* instancesService */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]) === "function" && _o || Object])
    ], ConfirmReservationPage);
    return ConfirmReservationPage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
}());

//# sourceMappingURL=confirm-reservation.js.map

/***/ })

});
//# sourceMappingURL=22.js.map