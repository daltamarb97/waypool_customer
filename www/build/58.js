webpackJsonp([58],{

/***/ 651:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverConfirmpricePageModule", function() { return DriverConfirmpricePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__driverConfirmprice__ = __webpack_require__(844);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DriverConfirmpricePageModule = /** @class */ (function () {
    function DriverConfirmpricePageModule() {
    }
    DriverConfirmpricePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__driverConfirmprice__["a" /* DriverConfirmpricePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__driverConfirmprice__["a" /* DriverConfirmpricePage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__driverConfirmprice__["a" /* DriverConfirmpricePage */]
            ]
        })
    ], DriverConfirmpricePageModule);
    return DriverConfirmpricePageModule;
}());

//# sourceMappingURL=driverConfirmprice.module.js.map

/***/ }),

/***/ 844:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverConfirmpricePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_d_signup_service__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_d_sendCoords_service__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_d_sendUsers_service__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_d_price_service__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_d_geofire_services__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_d_metrics_service__ = __webpack_require__(361);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var DriverConfirmpricePage = /** @class */ (function () {
    function DriverConfirmpricePage(navCtrl, appCtrl, MetricsService, PriceService, alertCtrl, afDB, sendUsersService, SignUpService, sendCoordsService, modalCtrl, AngularFireAuth, viewCtrl, navParams, geofireService) {
        this.navCtrl = navCtrl;
        this.appCtrl = appCtrl;
        this.MetricsService = MetricsService;
        this.PriceService = PriceService;
        this.alertCtrl = alertCtrl;
        this.afDB = afDB;
        this.sendUsersService = sendUsersService;
        this.SignUpService = SignUpService;
        this.sendCoordsService = sendCoordsService;
        this.modalCtrl = modalCtrl;
        this.AngularFireAuth = AngularFireAuth;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.geofireService = geofireService;
        this.userDriverUid = this.AngularFireAuth.auth.currentUser.uid;
        //variable for get data in function
        this.driver = {};
        //variable to transfer data from driver to this one
        this.driverInfo = {};
        this.driverInfoNote = {};
        this.buttonColor = '#0fc874';
        this.buttonColor2 = '#0fc874';
        this.unsubscribe = new __WEBPACK_IMPORTED_MODULE_9_rxjs__["Subject"];
        this.carModelList = [];
        this.nowHour = new Date();
        this.geocoordinatesDest = {};
        this.geocoordinatesOr = {};
        this.schedules = [];
        this.noCarAvailable = false;
        // ESTE NGIF DEBE SER PROGRAMADO AL HACER MERGE DE LOS HORARIOS
        this.itsSchedule = true;
        this.keyReserve = this.navParams.get('keyReserve');
        this.geocoder = new google.maps.Geocoder;
    }
    DriverConfirmpricePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.SignUpService.getCar(this.userDriverUid).takeUntil(this.unsubscribe)
            .subscribe(function (car) {
            //get cars registered
            _this.carModelList = car;
            console.log(_this.carModelList);
            if (_this.carModelList.length === 0) {
                _this.noCarAvailable = true;
            }
        });
    };
    DriverConfirmpricePage.prototype.goToSetCars = function () {
        this.afDB.database.ref('/geofireRoute/')
            .orderByChild('keyTrip').equalTo(this.keyReserve)
            .once('value').then(function (snap) {
            snap.forEach(function (keyGeofire) {
                keyGeofire.ref.remove();
            });
        });
        this.geofireService.deleteUserGeofireDest(this.keyReserve);
        this.geofireService.deleteUserGeofireOr(this.keyReserve);
        this.geofireService.deleteUserReserve(this.userDriverUid, this.keyReserve);
        this.unsubscribe.next();
        this.unsubscribe.complete();
        this.viewCtrl.dismiss();
        this.navCtrl.push('DriverShowInfoCarPage');
    };
    DriverConfirmpricePage.prototype.setPriceDriver = function () {
        if (this.precio == null || this.precio == '' || this.car == null || this.car == '') {
            var alert_1 = this.alertCtrl.create({
                title: 'Informacion Incompleta',
                subTitle: 'No haz colocado el precio por el que estas dispuesto a compatir tu viaje o no haz especificado en que carro te moverás',
                buttons: ['OK']
            });
            alert_1.present();
        }
        else {
            this.PriceService.setPriceAndCar(this.userDriverUid, this.precio, this.car, this.keyReserve);
            this.accepted = true;
            this.unsubscribe.next();
            this.unsubscribe.complete();
            this.viewCtrl.dismiss(this.accepted);
        }
    };
    ;
    DriverConfirmpricePage.prototype.dismiss = function () {
        this.afDB.database.ref('/geofireRoute/')
            .orderByChild('keyTrip').equalTo(this.keyReserve)
            .once('value').then(function (snap) {
            snap.forEach(function (keyGeofire) {
                keyGeofire.ref.remove();
            });
        });
        this.geofireService.deleteUserGeofireDest(this.keyReserve);
        this.geofireService.deleteUserGeofireOr(this.keyReserve);
        this.geofireService.deleteUserReserve(this.userDriverUid, this.keyReserve);
        this.unsubscribe.next();
        this.unsubscribe.complete();
        this.viewCtrl.dismiss();
    };
    DriverConfirmpricePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'driver-page-confirmprice',template:/*ion-inline-start:"C:\Users\danie\Documents\waypool\prod\latest\waypool_costumer\src\pages\confirmprice\driverConfirmprice.html"*/'<ion-content>\n\n    <ion-card>\n\n            <img src="assets/imgs/picmodales.png" width="100px" style="display:inline-block" height="150px"/>\n\n            <ion-icon name="close-circle" class="close-icon text-white"  (click)="dismiss()"></ion-icon>\n\n\n\n        <ion-card-content>\n\n            <div class="ride-detail">\n\n                    <p *ngIf= \'itsSchedule\'> The price you set here is the one that every passenger will be paying you at the end of the trip </p>\n\n\n\n                <ion-item class="form">\n\n                    <ion-label floating>Price per passenger</ion-label>\n\n                    <ion-input type="number" [(ngModel)]="precio"></ion-input>\n\n                  </ion-item>                \n\n            </div>\n\n        </ion-card-content>\n\n\n\n        <ion-card-content>\n\n            <!-- <div class="ride-detail no-before">\n\n                <p><small>Recuerda:</small>\n\n                    <ion-icon name="md-calendar" class="icon-location"></ion-icon>\n\n                  - Precio Recomendado: 2500 </p>\n\n        \n\n                <p>- Tus compañeros te pagarán en efectivo, evita colocar precios que requieran mucho vuelto, lleva dinero suficiente para dar vueltas.</p>\n\n            </div> -->\n\n        </ion-card-content>\n\n        <ion-card-content>\n\n                <p *ngIf = \'noCarAvailable\'>No tienes ningún carro registrado aún, <span style="font-weight: bold; color: red; text-decoration: underline red" (click) = \'goToSetCars()\' >hazlo aquí</span> </p>\n\n                <ion-row style="margin-top: 14px;    display: flex;\n\n                justify-content: center">\n\n                   <ion-list>\n\n                        <ion-item>\n\n                          <ion-label>Choose your car:</ion-label>\n\n                          <ion-select [(ngModel)]="car">\n\n                                <ion-option *ngFor="let car of carModelList" >{{car.carModel}} | {{car.plateNumber}} | {{car.color}}</ion-option>\n\n                       \n\n                          </ion-select>\n\n                        </ion-item>\n\n                      </ion-list>\n\n                </ion-row>\n\n                \n\n               \n\n       \n\n            <div class="seats">\n\n                \n\n                <ion-row style="margin-top: 14px;    display: flex;\n\n                justify-content: center">\n\n                   \n\n                    <ion-col col-8>\n\n                        <button class="btn bg-theme-driver text-white rounded" style="width: 100%;font-size: 1.2rem;" (click)="setPriceDriver()">Go Online</button>\n\n                    </ion-col>\n\n                </ion-row>\n\n               \n\n\n\n            </div>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\danie\Documents\waypool\prod\latest\waypool_costumer\src\pages\confirmprice\driverConfirmprice.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_10__services_d_metrics_service__["a" /* DriverMetricsService */], __WEBPACK_IMPORTED_MODULE_7__services_d_price_service__["a" /* DriverPriceService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_6__services_d_sendUsers_service__["a" /* DriverSendUsersService */], __WEBPACK_IMPORTED_MODULE_4__services_d_signup_service__["a" /* DriverSignUpService */], __WEBPACK_IMPORTED_MODULE_5__services_d_sendCoords_service__["a" /* DriverSendCoordsService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_8__services_d_geofire_services__["a" /* DriverGeofireService */]])
    ], DriverConfirmpricePage);
    return DriverConfirmpricePage;
}());

//# sourceMappingURL=driverConfirmprice.js.map

/***/ })

});
//# sourceMappingURL=58.js.map