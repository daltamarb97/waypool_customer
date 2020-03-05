webpackJsonp([31],{

/***/ 667:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservetripPageModule", function() { return ReservetripPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reservetrip__ = __webpack_require__(858);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__reservetrip__["a" /* ReservetripPage */]),
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

/***/ 858:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReservetripPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_sendCoords_service__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_fire_database__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_instances_service__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_sendUsers_service__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_reserves_service__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_signup_services__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_geoFire_service__ = __webpack_require__(355);
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


// import * as firebase from 'firebase';
// import { sendUsersService } from '../../services/sendUsers.service';
// import { Geofence } from '@ionic-native/geofence';







var ReservetripPage = /** @class */ (function () {
    function ReservetripPage(navCtrl, app, reservesService, loadingCtrl, SignUpService, sendCoordsService, modalCtrl, AngularFireAuth, alertCtrl, afDB, instances, sendUsersService, toastCtrl, geofireService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.app = app;
        this.reservesService = reservesService;
        this.loadingCtrl = loadingCtrl;
        this.SignUpService = SignUpService;
        this.sendCoordsService = sendCoordsService;
        this.modalCtrl = modalCtrl;
        this.AngularFireAuth = AngularFireAuth;
        this.alertCtrl = alertCtrl;
        this.afDB = afDB;
        this.instances = instances;
        this.sendUsersService = sendUsersService;
        this.toastCtrl = toastCtrl;
        this.geofireService = geofireService;
        this.locationOrigin = [];
        this.locationDestination = [];
        this.userUid = this.AngularFireAuth.auth.currentUser.uid;
        this.usersFindingTrip = [];
        this.usersOnListRide = [];
        this.text = 'Aceptar viaje';
        this.myReservesId = [];
        this.myReserves = [];
        this.pendingUsers = [];
        this.unsubscribe = new __WEBPACK_IMPORTED_MODULE_4_rxjs__["Subject"];
        this.reservesService.getOnTrip(this.SignUpService.userPlace, this.userUid).takeUntil(this.unsubscribe)
            .subscribe(function (onTrip) {
            _this.onTrip = onTrip;
            console.log(_this.onTrip);
            console.log('fue aqui 2');
            if (_this.onTrip === true) {
                _this.unSubscribeServices();
                _this.navCtrl.pop();
                _this.geofireService.cancelGeofireDest();
                _this.geofireService.cancelGeofireOr();
                _this.geofireService.cancelGeofireDestLMU();
                _this.geofireService.cancelGeofireOrLMU();
                console.log("repetire");
                _this.navCtrl.push('MyridePage');
            }
            else {
            }
        });
        this.reservesService.getMyReservesUser(this.SignUpService.userPlace, this.userUid).takeUntil(this.unsubscribe)
            .subscribe(function (myReservesId) {
            console.log(_this.myReserves);
            //get all reserves id (reserve push key, driverUid) of my user node
            _this.myReservesId = myReservesId;
            console.log(_this.myReservesId);
            _this.myReserves = [];
            if (_this.myReservesId.length === 0) {
                //there are no reserves to show
                _this.presentLoadingCustom();
            }
            else {
                //there are reserves
                _this.noReserve = false;
                //check if driver have cancel me from reserve
                _this.myReservesId.forEach(function (reserve) {
                    if (reserve.cancelReserve == true) {
                        _this.unSubscribeServices();
                        _this.navCtrl.pop();
                        var modal = _this.modalCtrl.create('CanceltripPage');
                        modal.present();
                        _this.reservesService.eliminateKeyUser(_this.SignUpService.userPlace, _this.userUid, reserve.keyReserve);
                    }
                });
                _this.getReserves();
            }
        });
    }
    ReservetripPage.prototype.ionViewDidLoad = function () {
    };
    ReservetripPage.prototype.getReserves = function () {
        var _this = this;
        this.myReserves = []; //erase all of reserves 
        console.log('aqui necesito verte');
        console.log(this.myReservesId);
        //after getting reserve id and driverUid from my own user node, we used them to access the reserve information in the node reserves
        this.myReservesId.forEach(function (reserve) {
            _this.afDB.database.ref(_this.SignUpService.userPlace + '/reserves/' + reserve.driverId + '/' + reserve.keyReserve).once('value').then(function (snapReserve) {
                _this.reserve = snapReserve.val();
                console.log(_this.reserve);
                if (reserve === undefined || reserve === null) {
                }
                else {
                    _this.myReserves.push(_this.reserve);
                }
            });
        });
    };
    ReservetripPage.prototype.tripDetails = function (keyTrip, driverUid) {
        var modal = this.modalCtrl.create('ReserveinfoPage', {
            reserveKey: keyTrip,
            driverUid: driverUid
        });
        modal.present();
    };
    ReservetripPage.prototype.enterChat = function (reserve) {
        var modal = this.modalCtrl.create('ChattingPage', {
            reserve: reserve,
            isTrip: false
        });
        modal.present();
    };
    // confirmreserve(reserveKey,driverUid){
    //      //TODAVÍA NO
    // }
    ReservetripPage.prototype.unSubscribeServices = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    ReservetripPage.prototype.help = function () {
        var toast = this.toastCtrl.create({
            message: 'Aquí te saldrán las personas que quieren irse contigo',
            showCloseButton: true,
            closeButtonText: 'OK',
            position: 'top'
        });
        toast.present();
    };
    ReservetripPage.prototype.presentLoadingCustom = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'crescent',
            content: "\n      <div class=\"custom-spinner-container\">\n        <div class=\"custom-spinner-box\"></div>\n      </div>",
            duration: 250
        });
        loading.onDidDismiss(function () {
            _this.noReserve = true;
        });
        loading.present();
    };
    ReservetripPage.prototype.ionViewDidLeave = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    ReservetripPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-reservetrip',template:/*ion-inline-start:"C:\Users\Daniel\Documents\waypool\prod\latest\waypool_costumer\src\pages\p-reservetrip\reservetrip.html"*/'<ion-header class="bg-theme title">\n\n    <ion-navbar >\n\n        <ion-title >Mis Reservas\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content class="bg-light" class="hideLongText">\n\n\n\n\n\n    \n\n    <img *ngIf="noReserve" src="assets/imgs/noreserve.png">\n\n<div style="display: flex;flex-direction: column;    width: 96%">\n\n    <ion-card *ngFor = "let reserve of myReserves">  \n\n        <ion-item>\n\n                <ion-avatar item-start>\n\n                        <img  style="height:70px; width: 70px;" src="assets/imgs/carBlue.png">\n\n                    </ion-avatar>\n\n                <div class="name">\n\n                   \n\n                    <h2>{{reserve.driver.name| titlecase}} {{reserve.driver.lastname| titlecase  }}\n\n                        <ion-icon *ngIf=\'reserve.driver.verifiedPerson\' name="ios-checkmark-circle" class="text-theme"></ion-icon>\n\n                    </h2>\n\n                </div>\n\n                <!-- <div class="name">\n\n        \n\n                  \n\n                    \n\n                </div> -->\n\n                <div class="more"> \n\n                        <h2 class="text text-theme">                        \n\n                                $ {{reserve.price}}                          \n\n                            </h2> \n\n                </div>\n\n            </ion-item>\n\n            <ion-card-content>\n\n                <div class="ride-detail">\n\n                    <p  >\n\n                        <span class="icon-location bg-theme"></span>{{reserve.houseAddr}}</p>\n\n                    <p > \n\n                        <span class="icon-location bg-yellow"></span>{{reserve.placeAddr}}</p>\n\n                </div>\n\n                <ion-row class="center-align">\n\n                    <!-- <ion-col col-3 class="detail-text text-theme">\n\n                        3 seats\n\n                    </ion-col> -->\n\n                    \n\n                    <ion-col col-4  >\n\n        \n\n                            <h2 style="font-size: 1.8rem;\n\n                            font-weight: 600;" >Hora {{reserve.startHour |titlecase}} \n\n                            </h2>\n\n                            \n\n                    </ion-col>\n\n                    <ion-col center text-center col-4 text-right style="margin-left: auto;">\n\n                        <button class="btn bg-theme rounded full text-white" style="width: 80%" (click)="enterChat(reserve)">Chat</button>            \n\n                    </ion-col>\n\n                    <ion-col center text-center col-4 text-right >\n\n                        <button class="btn bg-darkblue rounded full text-white" style="margin-left: 9px;" (click)="tripDetails(reserve.keyTrip,reserve.driver.userId)">Detalles</button>\n\n                    </ion-col> \n\n                </ion-row>\n\n            </ion-card-content>\n\n        \n\n</ion-card>\n\n\n\n</div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Daniel\Documents\waypool\prod\latest\waypool_costumer\src\pages\p-reservetrip\reservetrip.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_8__services_reserves_service__["a" /* reservesService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_9__services_signup_services__["a" /* SignUpService */], __WEBPACK_IMPORTED_MODULE_2__services_sendCoords_service__["a" /* sendCoordsService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__angular_fire_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_6__services_instances_service__["a" /* instancesService */], __WEBPACK_IMPORTED_MODULE_7__services_sendUsers_service__["a" /* sendUsersService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */], __WEBPACK_IMPORTED_MODULE_10__services_geoFire_service__["a" /* geofireService */]])
    ], ReservetripPage);
    return ReservetripPage;
}());

//# sourceMappingURL=reservetrip.js.map

/***/ })

});
//# sourceMappingURL=31.js.map