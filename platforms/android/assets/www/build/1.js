webpackJsonp([1],{

/***/ 582:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListridePageModule", function() { return ListridePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__listride__ = __webpack_require__(598);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ListridePageModule = /** @class */ (function () {
    function ListridePageModule() {
    }
    ListridePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__listride__["a" /* ListridePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__listride__["a" /* ListridePage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__listride__["a" /* ListridePage */]
            ]
        })
    ], ListridePageModule);
    return ListridePageModule;
}());

//# sourceMappingURL=listride.module.js.map

/***/ }),

/***/ 595:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(39));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi93cmFwcGVyL3NyYy9kYXRhYmFzZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDRDQUF1QyJ9

/***/ }),

/***/ 598:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListridePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(595);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_sendCoords_service__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_signup_services__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_geoFire_service__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ListridePage = /** @class */ (function () {
    function ListridePage(navCtrl, toastCtrl, AngularFireAuth, afDB, SignUpService, sendCoordsService, modalCtrl, geoFireService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.AngularFireAuth = AngularFireAuth;
        this.afDB = afDB;
        this.SignUpService = SignUpService;
        this.sendCoordsService = sendCoordsService;
        this.modalCtrl = modalCtrl;
        this.geoFireService = geoFireService;
        this.driversAvailable = [];
        this.locationOrigin = [];
        this.locationOriginUser = [];
        this.locationDestination = [];
        this.locationDestinationUser = [];
        this.userUid = this.AngularFireAuth.auth.currentUser.uid;
        this.SignUpService.getMyInfo(this.userUid).subscribe(function (user) {
            _this.user = user;
        });
        this.sendCoordsService.getOrigin(this.userUid)
            .subscribe(function (origin) {
            _this.locationOrigin = origin;
            // this.locationOrigin.push(origin)
            console.log(origin);
        });
        this.sendCoordsService.getOriginUser(this.userUid)
            .subscribe(function (originUser) {
            _this.locationOriginUser = originUser;
            // this.locationOrigin.push(origin)
            console.log(originUser);
        });
        this.sendCoordsService.getDestination(this.userUid)
            .subscribe(function (destination) {
            _this.locationDestination = destination;
            // this.locationOrigin.push(origin)
            console.log(destination);
        });
        this.sendCoordsService.getDestinationUser(this.userUid)
            .subscribe(function (destinationUser) {
            _this.locationDestinationUser = destinationUser;
            // this.locationOrigin.push(origin)
            console.log(destinationUser);
        });
        // this.SignUpService.getDrivers()
        //   .subscribe(driver => {
        //     this.driversAvailable = driver;
        //     console.log(this.driversAvailable);
        //   });
    }
    ;
    ListridePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.geoFireService.getDriversAvailableForUser(this.userUid)
            .subscribe(function (drivers) {
            _this.driversAvailable = drivers;
            console.log(_this.driversAvailable);
        });
    };
    ListridePage.prototype.showToastWithCloseButton = function (noteDriver, nameDriver) {
        if (noteDriver == '' || noteDriver == null) {
            var toast = this.toastCtrl.create({
                message: nameDriver + ": No hay nota",
                duration: 1500,
                position: 'bottom'
            });
            toast.present();
        }
        else {
            var toast = this.toastCtrl.create({
                message: nameDriver + " : " + noteDriver,
                showCloseButton: true,
                closeButtonText: 'Ok'
            });
            toast.present();
        }
    };
    ListridePage.prototype.confirmpopup = function (driver) {
        if (this.user.trips.onTrip == true || this.user.trips.pickedUp == true) {
            // this.geoFireService.deleteDriverListRideTotal(this.userUid);
            this.geoFireService.deleteDriverListRideTotal(this.userUid);
            var toast = this.toastCtrl.create({
                message: this.user.name + " : No puedes escoger otro conductor mientras estes en un viaje, por favor dir\u00EDgete a Mi Viaje y cancelalo. ",
                showCloseButton: true,
                closeButtonText: 'Ok'
            });
            toast.present();
        }
        else {
            var modal = this.modalCtrl.create('ConfirmpopupPage', { driver: driver });
            modal.present();
            console.log(driver);
        }
    };
    ListridePage.prototype.help = function () {
        var toast = this.toastCtrl.create({
            message: 'Aquí te saldrán los estudiantes con carro, escoge con cuál quieres compartir tu viaje y espera a que te acepte para poder comunicarte con el.',
            showCloseButton: true,
            closeButtonText: 'OK',
            position: 'top'
        });
        toast.present();
    };
    ListridePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-listride',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/WAYPOOL_OFICIAL/waypool_customer/src/pages/listride/listride.html"*/'<ion-header class="bg-theme">\n    <ion-navbar >\n\n        <ion-title class="Title">ESCOGE TU COMPAÑERO\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-light" class="hideLongText">\n    <ion-row class="center-align bg-white flow-ride">\n        <ion-col *ngFor = "let originUser of locationOriginUser"  class="hideLongText" col-5>\n            <h2>Origen</h2> {{originUser}}\n\n        </ion-col>\n        <ion-col col-2 text-center>\n            <img src="assets/imgs/baseline_compare_arrows_black_36dp.png">\n        </ion-col>\n        <ion-col *ngFor = "let destinationUser of locationDestinationUser"  class="hideLongText" col-5>\n            <h2>Destino</h2> {{destinationUser}}\n        </ion-col>\n\n    </ion-row>\n    <div class="iconHelp">\n        <ion-icon (click)="help()" name="arrow-dropdown-circle"></ion-icon>\n\n    </div>\n    <ion-card *ngFor = "let driver of driversAvailable">\n        <ion-item>\n            <ion-avatar item-start>\n                <img src="../../assets/imgs/userPicture.png">\n            </ion-avatar>\n            <div class="name">\n                <h2>{{driver.name| titlecase}} {{driver.lastname | titlecase | slice:0:1}}\n                    <ion-icon name="ios-checkmark-circle" class="text-theme"></ion-icon>\n                </h2>\n                <p>{{driver.car}}</p>\n            </div>\n            <div class="more">\n                <h2 class="text text-theme">                        \n                    $ {{driver.price}}                          \n                </h2>\n               \n            </div>\n        </ion-item>\n        <ion-card-content >\n            <div  class="ride-detail">\n                <p>\n                    <span class="icon-location bg-theme"></span>{{driver.origin}}</p>\n                <p>\n                    <span class="icon-location bg-yellow"></span>{{driver.destination}}</p>\n            </div>\n            <ion-row class="center-align">\n\n                \n               \n                \n                <ion-col center text-center col-4 text-right style="margin-left: auto;">\n                    <button class="btn bg-theme rounded full text-white" (click)="confirmpopup(driver)">Confirmar</button>\n                        </ion-col>\n            </ion-row>\n        </ion-card-content>\n    </ion-card>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/WAYPOOL_OFICIAL/waypool_customer/src/pages/listride/listride.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_4__services_signup_services__["a" /* SignUpService */], __WEBPACK_IMPORTED_MODULE_3__services_sendCoords_service__["a" /* sendCoordsService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_5__services_geoFire_service__["a" /* geofireService */]])
    ], ListridePage);
    return ListridePage;
}());

//# sourceMappingURL=listride.js.map

/***/ })

});
//# sourceMappingURL=1.js.map