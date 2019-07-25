webpackJsonp([10],{

/***/ 601:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservetripPageModule", function() { return ReservetripPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reservetrip__ = __webpack_require__(624);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ReservetripPageModule = /** @class */ (function () {
    function ReservetripPageModule() {
    }
    ReservetripPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__reservetrip__["a" /* ReservetripPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__reservetrip__["a" /* ReservetripPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__reservetrip__["a" /* ReservetripPage */]
            ]
        })
    ], ReservetripPageModule);
    return ReservetripPageModule;
}());

//# sourceMappingURL=reservetrip.module.js.map

/***/ }),

/***/ 624:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReservetripPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_sendCoords_service__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_fire_database__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_instances_service__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_sendUsers_service__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_reserves_service__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_signup_services__ = __webpack_require__(328);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { RiderprofilePage } from '../riderprofile/riderprofile';
// import { Observable } from 'rxjs';
// import { AngularFireDatabase} from 'angularfire2/database';







var ReservetripPage = /** @class */ (function () {
    function ReservetripPage(navCtrl, app, reservesService, SignUpService, sendCoordsService, modalCtrl, AngularFireAuth, alertCtrl, afDB, instances, sendUsersService, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.app = app;
        this.reservesService = reservesService;
        this.SignUpService = SignUpService;
        this.sendCoordsService = sendCoordsService;
        this.modalCtrl = modalCtrl;
        this.AngularFireAuth = AngularFireAuth;
        this.alertCtrl = alertCtrl;
        this.afDB = afDB;
        this.instances = instances;
        this.sendUsersService = sendUsersService;
        this.toastCtrl = toastCtrl;
        this.locationOrigin = [];
        this.locationDestination = [];
        this.userUid = this.AngularFireAuth.auth.currentUser.uid;
        this.usersFindingTrip = [];
        this.usersOnListRide = [];
        this.text = 'Aceptar viaje';
        this.myReservesId = [];
        this.myReserves = [];
        this.pendingUsers = [];
        this.reservesService.getMyReservesUser(this.userUid)
            .subscribe(function (myReservesId) {
            console.log(_this.myReserves);
            //get all reserves id (reserve push key, driverUid) of my user node
            _this.myReservesId = myReservesId;
            console.log(_this.myReservesId);
            _this.getReserves();
        });
        this.sendCoordsService.getOriginUser(this.userUid)
            .subscribe(function (originUser) {
            _this.locationOrigin = originUser;
        });
        this.sendCoordsService.getDestinationUser(this.userUid)
            .subscribe(function (destinationUser) {
            _this.locationDestination = destinationUser;
        });
    }
    ReservetripPage.prototype.ionViewDidLoad = function () {
    };
    ReservetripPage.prototype.getReserves = function () {
        var _this = this;
        this.myReserves = []; //erase all of reserves 
        //after getting reserve id and driverUid from my own user node, we used them to access the reserve information in the node reserves
        this.myReservesId.forEach(function (reserve) {
            _this.reservesService.getMyReserves(reserve.driverId, reserve.keyReserve)
                .subscribe(function (info) {
                _this.reserve = info;
                _this.pendingUsers = [];
                console.log(_this.pendingUsers);
                console.log(_this.myReserves);
                console.log(_this.reserve);
                //check if reserve hasn't been canceled
                console.log("mirar desde aqui");
                if (_this.reserve === undefined || _this.reserve === null) {
                    //this means the driver cancel the reserves,the user has to eliminate the key
                    console.log("aqui estoy yoooooo");
                    _this.reservesService.eliminateKeyUser(_this.userUid, reserve.keyTrip);
                    var modal = _this.modalCtrl.create('CanceltripPage');
                    modal.onDidDismiss(function (accepted) {
                        if (accepted) {
                            // this.navCtrl.push('ListridePage');
                            _this.navCtrl.setRoot(_this.navCtrl.getActive().component);
                        }
                    });
                    console.log("4");
                }
                else {
                    //check if the driver sabotage the trip eliminating anyone
                    if (_this.reserve.pendingUsers === undefined || _this.reserve.pendingUsers === null) {
                        _this.reservesService.eliminateKeyUser(_this.userUid, reserve.keyTrip);
                        var modal = _this.modalCtrl.create('CanceltripPage');
                        modal.onDidDismiss(function (accepted) {
                            if (accepted) {
                                // this.navCtrl.push('ListridePage');
                                _this.navCtrl.setRoot(_this.navCtrl.getActive().component);
                            }
                        });
                        console.log("3");
                    }
                    else {
                        _this.reservesService.getPendingUsers(_this.userUid, _this.reserve.keyTrip)
                            .subscribe(function (pendingUsers) {
                            _this.pendingUsers = pendingUsers;
                            console.log(pendingUsers);
                            _this.pendingUsers.forEach(function (user) {
                                // check if the user hasn't been eliminated from the reserve by the driver
                                if (user.userId === _this.userUid) {
                                    //do nothing because the user is in the trip
                                    _this.myReserves.push(_this.reserve);
                                    console.log("1");
                                }
                                else {
                                    // eliminate key because the driver has eliminated the user
                                    console.log("2");
                                    _this.reservesService.eliminateKeyUser(_this.userUid, reserve.keyTrip);
                                    var modal = _this.modalCtrl.create('CanceltripPage');
                                    modal.onDidDismiss(function (accepted) {
                                        if (accepted) {
                                            // this.navCtrl.push('ListridePage');
                                            _this.navCtrl.setRoot(_this.navCtrl.getActive().component);
                                        }
                                    });
                                    modal.present();
                                }
                            });
                        });
                    }
                }
                // arreglar problema de que aparece varias veces la misma reserva
            });
        });
    };
    ReservetripPage.prototype.tripDetails = function (keyTrip, driverUid) {
        var modal = this.modalCtrl.create('ReserveinfoPage', { reserveKey: keyTrip, driverUid: driverUid });
        modal.present();
    };
    // confirmreserve(reserveKey,driverUid){
    //      //TODAVÍA NO
    // }
    ReservetripPage.prototype.help = function () {
        var toast = this.toastCtrl.create({
            message: 'Aquí te saldrán las personas que quieren irse contigo',
            showCloseButton: true,
            closeButtonText: 'OK',
            position: 'top'
        });
        toast.present();
    };
    ReservetripPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-reservetrip',template:/*ion-inline-start:"C:\Users\daniel altamar\Documents\waypoolApp\customer-test\waypool_costumer\src\pages\reservetrip\reservetrip.html"*/'<ion-header class="bg-theme title">\n\n    <ion-navbar >\n\n        <ion-title >Mis Reservas\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content class="bg-light" class="hideLongText">\n\n\n\n    <ion-row class="center-align bg-white flow-ride">\n\n        <ion-col *ngFor = "let origin of locationOrigin"  class="hideLongText" col-5>\n\n            <h2>Mi Origen:</h2> {{origin}}\n\n\n\n        </ion-col>\n\n        <ion-col col-2 text-center>\n\n            <img src="assets/imgs/baseline_compare_arrows_black_36dp.png">\n\n        </ion-col>\n\n        <ion-col *ngFor = "let destination of locationDestination" class="hideLongText" col-5>\n\n            <h2>Mi Destino:</h2> {{destination}}\n\n        </ion-col>\n\n\n\n    </ion-row>\n\n    <div class="iconHelp">\n\n        <ion-icon (click)="help()" name="arrow-dropdown-circle"></ion-icon>\n\n    </div>\n\n\n\n    <ion-card *ngFor = "let reserve of myReserves">\n\n        \n\n                <ion-item>\n\n                        <ion-avatar item-start>\n\n                            <img src="assets/imgs/userPicture.png">\n\n                        </ion-avatar>\n\n                        <div class="name">\n\n                            <h2>Inicio de viaje: {{reserve.startHour |titlecase}} \n\n            \n\n                            </h2>\n\n                        </div>\n\n                        \n\n                        <div class="more"> \n\n                                <h2 class="text text-theme">                        \n\n                                        $ {{reserve.price}}                          \n\n                                    </h2>  \n\n                            \n\n                                                      \n\n                   \n\n                        </div>\n\n                    </ion-item>\n\n                    <ion-card-content>\n\n                        <div class="ride-detail">\n\n                            <p  >\n\n                                <span class="icon-location bg-theme"></span>{{reserve.origin}}</p>\n\n                            <p > \n\n                                <span class="icon-location bg-yellow"></span>{{reserve.destination}}</p>\n\n                        </div>\n\n                        <ion-row class="center-align">\n\n                            <!-- <ion-col col-3 class="detail-text text-theme">\n\n                                3 seats\n\n                            </ion-col> -->\n\n                            \n\n                            <ion-col col-4 class="detail-text text-theme">\n\n                                <div class="name">\n\n                \n\n                                    <h2>{{reserve.driver.name| titlecase}} {{reserve.driver.lastname| titlecase | slice:0:1}}\n\n                                        <ion-icon name="ios-checkmark-circle" class="text-theme"></ion-icon>\n\n                                    </h2>\n\n                                    \n\n                                </div>\n\n                            </ion-col>\n\n                            <ion-col center text-center col-4 text-right style="margin-left: auto;">\n\n                                   \n\n                                      \n\n                            </ion-col>\n\n                            <ion-col center text-center col-4 text-right style="margin-left: auto;">\n\n                                <button class="btn bg-theme rounded full text-white" (click)="tripDetails(reserve.keyTrip,reserve.driver.userId)">Detalles</button>\n\n                            </ion-col>\n\n                        </ion-row>\n\n                    </ion-card-content>\n\n               \n\n        \n\n        \n\n    </ion-card>\n\n   \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\daniel altamar\Documents\waypoolApp\customer-test\waypool_costumer\src\pages\reservetrip\reservetrip.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_7__services_reserves_service__["a" /* reservesService */], __WEBPACK_IMPORTED_MODULE_8__services_signup_services__["a" /* SignUpService */], __WEBPACK_IMPORTED_MODULE_2__services_sendCoords_service__["a" /* sendCoordsService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__angular_fire_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_5__services_instances_service__["a" /* instancesService */], __WEBPACK_IMPORTED_MODULE_6__services_sendUsers_service__["a" /* sendUsersService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], ReservetripPage);
    return ReservetripPage;
}());

//# sourceMappingURL=reservetrip.js.map

/***/ })

});
//# sourceMappingURL=10.js.map