webpackJsonp([2],{

/***/ 639:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListridePageModule", function() { return ListridePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__listride__ = __webpack_require__(661);
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

/***/ 651:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(28));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi93cmFwcGVyL3NyYy9kYXRhYmFzZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDRDQUF1QyJ9

/***/ }),

/***/ 661:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListridePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(651);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_sendCoords_service__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_signup_services__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_geoFire_service__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_reserves_service__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_trips_service__ = __webpack_require__(346);
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
    function ListridePage(navCtrl, TripsService, toastCtrl, reservesService, AngularFireAuth, afDB, SignUpService, sendCoordsService, modalCtrl, geoFireService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.TripsService = TripsService;
        this.toastCtrl = toastCtrl;
        this.reservesService = reservesService;
        this.AngularFireAuth = AngularFireAuth;
        this.afDB = afDB;
        this.SignUpService = SignUpService;
        this.sendCoordsService = sendCoordsService;
        this.modalCtrl = modalCtrl;
        this.geoFireService = geoFireService;
        this.reservesAvailable = [];
        this.initiatedTrips = [];
        this.locationDestinationUser = [];
        this.locationOriginUser = [];
        this.userUid = this.AngularFireAuth.auth.currentUser.uid;
        this.ReservesGeofire = [];
        this.tripsReserved = [];
        console.log("AQUI EMPIEZA");
        this.SignUpService.getMyInfo(this.SignUpService.userUniversity, this.userUid).subscribe(function (user) {
            _this.user = user;
        });
        this.sendCoordsService.getOriginUser(this.SignUpService.userUniversity, this.userUid)
            .subscribe(function (originUser) {
            _this.locationOriginUser = originUser;
            // this.locationOrigin.push(origin)
            console.log(originUser);
        });
        this.sendCoordsService.getDestinationUser(this.SignUpService.userUniversity, this.userUid)
            .subscribe(function (destinationUser) {
            _this.locationDestinationUser = destinationUser;
            // this.locationOrigin.push(origin)
            console.log(destinationUser);
        });
        this.reservesService.getMyReservesUser(this.SignUpService.userUniversity, this.userUid)
            .subscribe(function (tripsReserved) {
            _this.tripsReserved = tripsReserved;
            console.log(_this.tripsReserved);
        });
        this.reservesService.getReserves(this.SignUpService.userUniversity, this.userUid)
            .subscribe(function (reserves) {
            _this.ReservesGeofire = reserves;
            console.log(_this.ReservesGeofire);
            _this.getMyReserves();
        });
        // this.TripsService.getLastMinuteTripsDEMO(this.userUid)
        // //cambiar en merge
        //   .subscribe(reserves => {
        //     this.initiatedTrips = reserves;
        //     console.log(this.initiatedTrips);
        //   });
    }
    ListridePage.prototype.getMyReserves = function () {
        var _this = this;
        this.reservesService.getMyReservesUser(this.SignUpService.userUniversity, this.userUid)
            .subscribe(function (tripsReserved) {
            _this.tripsReserved = tripsReserved;
            console.log(_this.tripsReserved);
            _this.getAvailableReserves();
        });
    };
    ListridePage.prototype.getAvailableReserves = function () {
        //bring reserves that i have entered to hide them in listride
        var _this = this;
        //after getting reserve id and driverUid from my own user node, we used them to access the reserve information in the node reserves
        this.ReservesGeofire.forEach(function (reserveGeofire) {
            _this.reservesService.getMyReserves(_this.SignUpService.userUniversity, reserveGeofire.driverId, reserveGeofire.keyReserve)
                .subscribe(function (info) {
                _this.reserve = info;
                console.log(info);
                if (_this.reserve === undefined || _this.reserve === null) {
                    // reserve doesn't exist
                    console.log("hello");
                }
                else {
                    console.log("hello");
                    if (_this.tripsReserved.length === 0) {
                        _this.reservesAvailable.push(_this.reserve);
                        console.log(_this.reservesAvailable);
                        console.log("A");
                    }
                    else {
                        console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAA");
                        _this.tripsReserved.forEach(function (reserve) {
                            console.log(reserve);
                            if (reserve.keyReserve === _this.reserve.keyTrip) {
                                console.log("not-hello");
                            }
                            else {
                                _this.reservesAvailable.push(_this.reserve);
                                console.log(_this.reservesAvailable);
                                console.log("A");
                            }
                        });
                    }
                }
                // arreglar problema de que aparece varias veces la misma reserva
            });
            //// ELIMINAR NODO QUE LEE LMU CUANDO FINALICE VIAJE (MERGE)
            if (reserveGeofire.LMU == true) {
                _this.TripsService.getLastMinuteTripsDEMO(_this.SignUpService.userUniversity, reserveGeofire.driverId).subscribe(function (reserveLMU) {
                    _this.reserveLMU = reserveLMU[0];
                    _this.initiatedTrips.push(_this.reserveLMU);
                    console.log(_this.initiatedTrips);
                });
            }
        });
    };
    ListridePage.prototype.ionViewDidLoad = function () {
        // this.geoFireService.getDriversAvailableForUser(this.userUid)
        //   .subscribe(drivers=>{
        //       this.driversAvailable = drivers;
        //       console.log(this.driversAvailable);
        //   })
    };
    ListridePage.prototype.confirmpopup = function (reserve, keyArray, driverUserId) {
        //mutacion: tiene q mutar o eliminarse
        //   if(this.user.trips.onTrip == true || this.user.trips.pickedUp == true){
        //     // this.geoFireService.deleteDriverListRideTotal(this.userUid);
        //     this.geoFireService.deleteDriverListRideTotal(this.userUid);
        //     const toast = this.toastCtrl.create({
        //       message: `${this.user.name} : No puedes escoger otro conductor mientras estes en un viaje, por favor dirígete a Mi Viaje y cancelalo. `,
        //       showCloseButton: true,
        //       closeButtonText: 'Ok'
        //     });
        //     toast.present();
        //   } else {
        //  let modal = this.modalCtrl.create('ConfirmpopupPage',{reserve,keyArray});
        //  modal.present();
        //  console.log(reserve)
        //   }
        var modal = this.modalCtrl.create('ConfirmpopupPage', { reserve: reserve });
        modal.present();
        //IMPORTANTE QUE AL FINAL SE LE COLOQUE QUE SE QUITE CUANDO ACEPTE A ALGUIEN
    };
    ListridePage.prototype.enterTrip = function (trip) {
        var modal = this.modalCtrl.create('ConfirmtripPage', { trip: trip });
        modal.present();
        //IMPORTANTE QUE AL FINAL SE LE COLOQUE QUE SE QUITE CUANDO ACEPTE A ALGUIEN
    };
    ListridePage.prototype.help = function () {
        var toast = this.toastCtrl.create({
            message: 'Estos son los conductores que se van a tu misma zona. Podrás ver sus horas en las que se van y unirte en su viaje',
            showCloseButton: true,
            closeButtonText: 'OK',
            position: 'top'
        });
        toast.present();
    };
    ListridePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-listride',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/waypoolapp_UNOFICIAL/waypool_costumer/src/pages/listride/listride.html"*/'<ion-header class="bg-theme">\n    <ion-navbar >\n\n        <ion-title class="Title">ESCOGE TU COMPAÑERO\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-light" class="hideLongText">\n    <ion-row class="center-align bg-white flow-ride">\n        <ion-col *ngFor = "let originUser of locationOriginUser"  class="hideLongText" col-5>\n            <h2>Origen</h2> {{originUser}}\n\n        </ion-col>\n        <ion-col col-2 text-center>\n            <img src="assets/imgs/baseline_compare_arrows_black_36dp.png">\n        </ion-col>\n        <ion-col *ngFor = "let destinationUser of locationDestinationUser"  class="hideLongText" col-5>\n            <h2>Destino</h2> {{destinationUser}}\n        </ion-col>\n\n    </ion-row>\n    <div class="iconHelp">\n        <ion-icon (click)="help()" name="arrow-dropdown-circle"></ion-icon>\n\n    </div>\n    <ion-card *ngFor = "let trip of initiatedTrips">\n        <ion-item>\n            <ion-avatar item-start>\n                <img class="animated infinite pulse" src="assets/imgs/flame.png">\n            </ion-avatar>\n           \n            <div class="name">\n               \n                <h2>{{trip.driver.name| titlecase}} {{trip.driver.lastname| titlecase | slice:0:1}}\n                    <ion-icon name="ios-checkmark-circle" class="text-hot"></ion-icon>\n                </h2>\n                <p>{{trip.car}}</p>\n            </div>\n            <div class="more">\n                <h2 class="text text-hot">                        \n                 $ {{trip.price}}                          \n                </h2>\n               \n            </div>\n        </ion-item>\n        <ion-card-content >\n            <div  class="ride-detail">\n                <p>\n                    <span class="icon-location bg-theme"></span>{{trip.origin}}</p>\n                <p>\n                    <span class="icon-location bg-yellow"></span>{{trip.destination}}</p>\n            </div>\n            <ion-row class="center-align">  \n                <ion-col center text-center col-6 text-right style="margin-left: auto;">\n                        <h2 class="text text-hot animated infinite pulse">                        \n                                Viaje en curso                         \n                             </h2>  \n                                       \n                </ion-col>                \n                \n                <ion-col center text-center col-4 text-right style="margin-left: auto;">\n                    <button class="btn bg-hot rounded full text-white" (click)="enterTrip(trip)">Unirme</button>\n                        </ion-col>\n            </ion-row>\n        </ion-card-content>\n    </ion-card>\n    <ion-card *ngFor = "let reserve of reservesAvailable">\n        <ion-item>\n            <ion-avatar item-start>\n                <img src="assets/imgs/userPicture.png">\n            </ion-avatar>\n           \n            <div class="name">\n                \n                <h2>{{reserve.driver.name| titlecase}} {{reserve.driver.lastname| titlecase | slice:0:1}} \n                    <ion-icon name="ios-checkmark-circle" class="text-theme"></ion-icon>\n                </h2>\n                <p>{{reserve.car}}</p>\n            </div>\n            <div class="more">\n                <h2 class="text text-theme">                        \n                    $ {{reserve.price}}                          \n                </h2>\n               \n            </div>\n        </ion-item>\n        <ion-card-content >\n            <div  class="ride-detail">\n                <p>\n                    <span class="icon-location bg-theme"></span>{{reserve.origin}}</p>\n                <p>\n                    <span class="icon-location bg-yellow"></span>{{reserve.destination}}</p>\n            </div>\n            <ion-row class="center-align">  \n                <ion-col center text-center col-6 text-right style="margin-left: auto;">\n                    \n                    <h2 class="text text-theme">                        \n                        Hora de partida: {{reserve.startHour}}                          \n                    </h2>                    \n                </ion-col>                \n                \n                <ion-col center text-center col-4 text-right style="margin-left: auto;">\n                    <button class="btn bg-theme rounded full text-white" (click)="confirmpopup(reserve)">Unirme</button>\n                        </ion-col>\n            </ion-row>\n        </ion-card-content>\n    </ion-card>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/waypoolapp_UNOFICIAL/waypool_costumer/src/pages/listride/listride.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_8__services_trips_service__["a" /* TripsService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_7__services_reserves_service__["a" /* reservesService */], __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_4__services_signup_services__["a" /* SignUpService */], __WEBPACK_IMPORTED_MODULE_3__services_sendCoords_service__["a" /* sendCoordsService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_5__services_geoFire_service__["a" /* geofireService */]])
    ], ListridePage);
    return ListridePage;
}());

//# sourceMappingURL=listride.js.map

/***/ })

});
//# sourceMappingURL=2.js.map