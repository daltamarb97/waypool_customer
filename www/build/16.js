webpackJsonp([16],{

/***/ 652:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListridePageModule", function() { return ListridePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__listride__ = __webpack_require__(806);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__listride__["a" /* ListridePage */]),
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

/***/ 806:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListridePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_sendCoords_service__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_signup_services__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_geoFire_service__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_reserves_service__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_trips_service__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs__ = __webpack_require__(15);
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
    function ListridePage(navCtrl, app, TripsService, loadingCtrl, toastCtrl, reservesService, AngularFireAuth, afDB, SignUpService, sendCoordsService, modalCtrl, geoFireService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.app = app;
        this.TripsService = TripsService;
        this.loadingCtrl = loadingCtrl;
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
        this.unsubscribe = new __WEBPACK_IMPORTED_MODULE_9_rxjs__["Subject"];
        this.pendingUsers = [];
        this.noReserve = false;
        console.log("AQUI EMPIEZA");
        this.SignUpService.getMyInfo(this.userUid, this.SignUpService.userPlace).takeUntil(this.unsubscribe).subscribe(function (user) {
            _this.user = user;
        });
        this.sendCoordsService.getOriginUser(this.SignUpService.userPlace, this.userUid).takeUntil(this.unsubscribe)
            .subscribe(function (originUser) {
            _this.locationOriginUser = originUser;
            // this.locationOrigin.push(origin)
            console.log(originUser);
        });
        this.sendCoordsService.getDestinationUser(this.SignUpService.userPlace, this.userUid).takeUntil(this.unsubscribe)
            .subscribe(function (destinationUser) {
            _this.locationDestinationUser = destinationUser;
            // this.locationOrigin.push(origin)
            console.log(destinationUser);
        });
        // this.reservesService.getMyReservesUser(this.SignUpService.userUniversity, this.userUid).takeUntil(this.unsubscribe)
        // .subscribe( tripsReserved => {
        //   this.tripsReserved = tripsReserved
        //   console.log(this.tripsReserved);
        // }) 
        this.reservesService.getReserves(this.SignUpService.userPlace, this.userUid).takeUntil(this.unsubscribe)
            .subscribe(function (reserves) {
            _this.reservesAvailable = [];
            _this.ReservesGeofire = reserves;
            console.log(_this.ReservesGeofire);
            _this.presentLoadingCustom(_this.ReservesGeofire);
            // this.getMyReserves();
            _this.getAvailableReserves();
        });
    }
    ListridePage.prototype.ionViewDidLeave = function () {
        this.unSubscribeServices();
        console.log("me active");
        this.TripsService.eliminateAvailableUsers(this.SignUpService.userPlace, this.userUid);
    };
    ListridePage.prototype.getMyReserves = function () {
        // this.reservesService.getMyReservesUser(this.SignUpService.userUniversity, this.userUid).takeUntil(this.unsubscribe)
        // .subscribe( tripsReserved => {
        //   this.tripsReserved = tripsReserved
        //   console.log(this.tripsReserved);
        // }) 
    };
    ListridePage.prototype.getAvailableReserves = function () {
        //bring reserves that i have entered to hide them in listride
        var _this = this;
        //after getting reserve id and driverUid from my own user node, we used them to access the reserve information in the node reserves
        this.ReservesGeofire.forEach(function (reserveGeofire) {
            _this.reservesService.getMyReserves(_this.SignUpService.userPlace, reserveGeofire.driverId, reserveGeofire.keyReserve).takeUntil(_this.unsubscribe)
                .subscribe(function (info) {
                _this.reserve = info;
                console.log(info);
                if (_this.reserve === undefined || _this.reserve === null) {
                    // reserve doesn't exist
                    console.log("hello");
                }
                else {
                    _this.reservesAvailable.push(_this.reserve);
                }
                // arreglar problema de que aparece varias veces la misma reserva
            });
            //// ELIMINAR NODO QUE LEE LMU CUANDO FINALICE VIAJE (MERGE)
            if (reserveGeofire.LMU == true) {
                _this.TripsService.getLastMinuteTripsDEMO(_this.SignUpService.userPlace, reserveGeofire.driverId, reserveGeofire.keyReserve).subscribe(function (reserveLMU) {
                    _this.initiatedTrips = [];
                    _this.reserveLMU = reserveLMU;
                    console.log(_this.reserveLMU);
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
    ListridePage.prototype.confirmpopup = function (reserve) {
        var _this = this;
        this.reservesService.getPendingUsers(this.SignUpService.userPlace, reserve.driver.userId, reserve.keyTrip).takeUntil(this.unsubscribe)
            .subscribe(function (pendingUsers) {
            _this.pendingUsers = pendingUsers;
            console.log(pendingUsers);
        });
        if (this.pendingUsers === undefined || this.pendingUsers === null) {
            //there is no one in the trip
            var modal = this.modalCtrl.create('ConfirmpopupPage', { reserve: reserve });
            modal.onDidDismiss(function (accepted) {
                if (accepted) {
                    _this.unSubscribeServices();
                    _this.navCtrl.pop();
                    _this.TripsService.eliminateAvailableUsers(_this.SignUpService.userPlace, _this.userUid);
                    _this.navCtrl.push('ReservetripPage');
                }
            });
            modal.present();
            console.log('no hay nadie');
        }
        else if (this.pendingUsers.length >= 4) {
            //the trip is full 
            var toast = this.toastCtrl.create({
                message: 'Este viaje ya tiene 4 personas reservadas, porfavor selecciona otro',
                showCloseButton: true,
                closeButtonText: 'OK',
                position: 'bottom'
            });
            toast.present();
            console.log('menor de 4');
        }
        else {
            console.log(this.pendingUsers.length);
            //its less of 4 people
            var modal = this.modalCtrl.create('ConfirmpopupPage', { reserve: reserve });
            modal.onDidDismiss(function (accepted) {
                if (accepted) {
                    _this.unSubscribeServices();
                    _this.navCtrl.pop();
                    _this.TripsService.eliminateAvailableUsers(_this.SignUpService.userPlace, _this.userUid);
                    _this.navCtrl.push('ReservetripPage');
                }
            });
            modal.present();
            console.log('else');
        }
        //IMPORTANTE QUE AL FINAL SE LE COLOQUE QUE SE QUITE CUANDO ACEPTE A ALGUIEN
    };
    ListridePage.prototype.enterTrip = function (trip) {
        var _this = this;
        var modal = this.modalCtrl.create('ConfirmtripPage', { trip: trip });
        modal.onDidDismiss(function (accepted) {
            if (accepted) {
                _this.unSubscribeServices();
                _this.navCtrl.pop();
                _this.TripsService.eliminateAvailableUsers(_this.SignUpService.userPlace, _this.userUid);
                _this.navCtrl.push('MyridePage');
            }
        });
        modal.present();
        //IMPORTANTE QUE AL FINAL SE LE COLOQUE QUE SE QUITE CUANDO ACEPTE A ALGUIEN
    };
    ListridePage.prototype.unSubscribeServices = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    ListridePage.prototype.presentLoadingCustom = function (array) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'crescent',
            content: "\n        <div class=\"custom-spinner-container\">\n          <div class=\"custom-spinner-box\"></div>\n        </div>",
            duration: 1000
        });
        loading.onDidDismiss(function () {
            console.log(array);
            if (array.length === 0) {
                //there are no reserves to show
                _this.noReserve = true;
            }
            else {
                //there are reserves
                _this.noReserve = false;
            }
        });
        loading.present();
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
            selector: 'page-listride',template:/*ion-inline-start:"C:\Users\Daniel\Documents\waypool\prod\latest\waypool_customer\waypool_costumer\src\pages\listride\listride.html"*/'<ion-header class="bg-theme">\n\n    <ion-navbar >\n\n\n\n        <ion-title class="Title">ESCOGE TU COMPAÑERO\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-light" class="hideLongText" style="        background-color: rgba(255, 255, 255, 0.959);\n\n">\n\n    <ion-row class="center-align bg-white flow-ride">\n\n        <ion-col *ngFor = "let originUser of locationOriginUser"  class="hideLongText" col-5>\n\n            <h2>Origen</h2> {{originUser}}\n\n        </ion-col>\n\n        <ion-col col-2 text-center>\n\n            <img src="assets/imgs/baseline_compare_arrows_black_36dp.png">\n\n        </ion-col>\n\n        <ion-col *ngFor = "let destinationUser of locationDestinationUser"  class="hideLongText" col-5>\n\n            <h2>Destino</h2> {{destinationUser}}\n\n        </ion-col>\n\n    </ion-row>\n\n    <div class="iconHelp">\n\n        <ion-icon (click)="help()" name="arrow-dropdown-circle"></ion-icon>\n\n\n\n    </div>\n\n    \n\n    <div [ngSwitch]="noReserve" >\n\n        <img *ngSwitchCase=true src="assets/imgs/noreserveavailable.png">\n\n\n\n\n\n\n\n\n\n        <ng-container *ngSwitchCase=false>\n\n                <div style="display: flex;flex-direction: column;">\n\n                        <ion-card *ngFor = "let trip of initiatedTrips">\n\n                                <ion-item>\n\n                                    <ion-avatar item-start>\n\n                                        <img class="animated infinite pulse" src="assets/imgs/carOrange.png">\n\n                                    </ion-avatar>\n\n                                   \n\n                                    <div class="name">\n\n                                       \n\n                                        <h2>{{trip.driver.name| titlecase}} {{trip.driver.lastname| titlecase | slice:0:1}}\n\n                                            <ion-icon *ngIf=\'trip.driver.verifiedPerson\' name="ios-checkmark-circle" class="text-hot"></ion-icon>\n\n                                            <ion-badge class="bg-yellow" style="margin:0px 3px 13px;"> {{trip.driver.place}}</ion-badge>\n\n                                        </h2>\n\n                                        <p>{{trip.car}}</p>\n\n                                        \n\n                \n\n                                    </div>\n\n                                    <div class="more">\n\n                                        <h2 class="text text-hot">                        \n\n                                         $ {{trip.price}}                          \n\n                                        </h2>\n\n                                       \n\n                                    </div>\n\n                                </ion-item>\n\n                                <ion-card-content >\n\n                                  \n\n                                    <ion-row class="center-align">  \n\n                                        <ion-col center text-center col-6 text-right style="margin-left: auto;">\n\n                                                <h2 class="text text-hot animated infinite pulse">                        \n\n                                                        Viaje en curso                         \n\n                                                     </h2>  \n\n                                                               \n\n                                        </ion-col>                \n\n                                        \n\n                                        <ion-col center text-center col-4 text-right style="margin-left: auto;">\n\n                                            <button class="btn bg-hot rounded full text-white" (click)="enterTrip(trip)"style="font-size: 1.5rem;">Unirme</button>\n\n                                                </ion-col>\n\n                                    </ion-row>\n\n                                </ion-card-content>\n\n                            </ion-card>\n\n                </div>\n\n\n\n            <div style="display: flex;flex-direction: column;width: 96%;">\n\n                    <ion-card *ngFor = "let reserve of reservesAvailable">\n\n                            <ion-item>\n\n                                <ion-avatar item-start>\n\n                                    <img  style="height:70px; width: 70px;" src="assets/imgs/carBlue.png">\n\n                                </ion-avatar>                   \n\n                                <div class="name">                      \n\n                                    <h2>{{reserve.driver.name| titlecase}} {{reserve.driver.lastname| titlecase | slice:0:1}} \n\n                                        <ion-icon  *ngIf=\'reserve.driver.verifiedPerson\' name="ios-checkmark-circle" class="text-theme"></ion-icon>\n\n                                        <ion-badge class="bg-yellow" style="margin:0px 3px 13px;"> {{reserve.driver.place}}</ion-badge>\n\n            \n\n                                    </h2>\n\n            \n\n                                    <p>{{reserve.car}}</p>\n\n                                </div>\n\n                                <div class="more">\n\n                                    <h2 class="text text-theme">                        \n\n                                        $ {{reserve.price}}                         \n\n                                    </h2>\n\n            \n\n                                </div>\n\n                            </ion-item>\n\n                            <ion-card-content >                  \n\n                                <ion-row class="center-align">  \n\n                                            <h2 class="text text-dark">                        \n\n                                                Hora: {{reserve.startHour}}                             \n\n                                            </h2>                    \n\n                                    <ion-col center text-center col-4 text-right style="margin-left: auto;">\n\n                                        <button class="btn bg-theme rounded full text-white" style="font-size: 1.5rem;" (click)="confirmpopup(reserve)">Unirme</button>\n\n                                    </ion-col>\n\n                                </ion-row>\n\n                            </ion-card-content>\n\n                        </ion-card></div>\n\n       \n\n            \n\n        </ng-container>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Daniel\Documents\waypool\prod\latest\waypool_customer\waypool_costumer\src\pages\listride\listride.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_8__services_trips_service__["a" /* TripsService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_7__services_reserves_service__["a" /* reservesService */], __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_4__services_signup_services__["a" /* SignUpService */], __WEBPACK_IMPORTED_MODULE_3__services_sendCoords_service__["a" /* sendCoordsService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_5__services_geoFire_service__["a" /* geofireService */]])
    ], ListridePage);
    return ListridePage;
}());

//# sourceMappingURL=listride.js.map

/***/ })

});
//# sourceMappingURL=16.js.map