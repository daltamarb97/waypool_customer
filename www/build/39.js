webpackJsonp([39],{

/***/ 692:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListridePageModule", function() { return ListridePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__listride__ = __webpack_require__(886);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__listride__["a" /* ListridePage */]),
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

/***/ 886:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListridePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_sendCoords_service__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_signup_services__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_geoFire_service__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_reserves_service__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_trips_service__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs__ = __webpack_require__(19);
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
        this.SignUpService.getMyInfo(this.userUid).takeUntil(this.unsubscribe).subscribe(function (user) {
            _this.user = user;
        });
        this.sendCoordsService.getOriginUser(this.userUid).takeUntil(this.unsubscribe)
            .subscribe(function (originUser) {
            _this.locationOriginUser = originUser;
            // this.locationOrigin.push(origin)
            console.log(originUser);
        });
        this.sendCoordsService.getDestinationUser(this.userUid).takeUntil(this.unsubscribe)
            .subscribe(function (destinationUser) {
            _this.locationDestinationUser = destinationUser;
            // this.locationOrigin.push(origin)
            console.log(destinationUser);
        });
        console.log(this.SignUpService.userPlace);
        this.reservesService.getReserves(this.userUid).takeUntil(this.unsubscribe)
            .subscribe(function (reserves) {
            // this.initiatedTrips = [];
            // this.reservesAvailable = [];
            _this.ReservesGeofire = reserves;
            console.log(_this.ReservesGeofire);
            if (_this.ReservesGeofire.length === 0) {
                //there are no reserves to show
                _this.noReserve = true;
            }
            else {
                //there are reserves
                _this.noReserve = false;
            }
            // this.presentLoadingCustom(this.ReservesGeofire);
            _this.getAvailableReserves();
        });
        this.reservesService.getSeenReservesInAvailableReserves(this.userUid).subscribe(function (reserve) {
            _this.reservesAvailable = reserve;
            console.log(_this.reservesAvailable);
        });
        // this.reservesService.getSeenReservesInAvailableReservesLMU(this.SignUpService.userPlace, this.userUid).subscribe((reserve)=>{
        //   this.initiatedTrips = reserve;
        //   console.log(this.initiatedTrips);
        // })
    }
    ListridePage.prototype.ionViewDidLeave = function () {
        this.unSubscribeServices();
        console.log(this.SignUpService.userPlace);
        console.log("me active");
        this.TripsService.eliminateAvailableUsers(this.userUid);
        this.TripsService.eliminateSeenAvailableReserves(this.userUid);
        // this.TripsService.eliminateSeenAvailableReservesLMU(this.SignUpService.userPlace,this.userUid)
    };
    // getMyReserves(){
    // }
    ListridePage.prototype.getAvailableReserves = function () {
        var _this = this;
        //bring reserves that i have entered to hide them in listride
        // this.reservesAvailable = [];
        //after getting reserve id and driverUid from my own user node, we used them to access the reserve information in the node reserves
        console.log(this.ReservesGeofire);
        this.ReservesGeofire.forEach(function (reserveGeofire) {
            _this.afDB.database.ref('/reservesTest/' + reserveGeofire.driverId + '/' + reserveGeofire.keyReserve).once('value').then(function (snapReserve) {
                var obj = snapReserve.val();
                console.log(obj);
                _this.afDB.database.ref('/usersTest/' + _this.userUid + '/reservesSeenInAvailableReserves/').remove().then(function () {
                    _this.afDB.database.ref('/usersTest/' + _this.userUid + '/reservesSeenInAvailableReserves/' + reserveGeofire.keyReserve).update(obj);
                });
            });
            if (reserveGeofire.LMU == true) {
                _this.afDB.database.ref('/trips/' + reserveGeofire.driverId + '/' + reserveGeofire.keyReserve).once('value').then(function (snapTripLMU) {
                    var obj = snapTripLMU.val();
                    _this.afDB.database.ref('/usersTest/' + _this.userUid + '/reservesSeenInAvailableReservesLMU/').remove().then(function () {
                        _this.afDB.database.ref('/usersTest/' + _this.userUid + '/reservesSeenInAvailableReservesLMU/' + reserveGeofire.keyReserve).update(obj);
                    });
                    // this.initiatedTrips.push(this.reserveLMU);
                    // console.log(this.initiatedTrips);  
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
        this.reservesService.getPendingUsers(reserve.driver.userId, reserve.keyTrip).takeUntil(this.unsubscribe)
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
                    _this.TripsService.eliminateAvailableUsers(_this.userUid);
                    _this.TripsService.eliminateSeenAvailableReserves(_this.userUid);
                    //  this.TripsService.eliminateSeenAvailableReservesLMU(this.SignUpService.userPlace,this.userUid)
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
                    _this.TripsService.eliminateAvailableUsers(_this.userUid);
                    _this.TripsService.eliminateSeenAvailableReserves(_this.userUid);
                    //  this.TripsService.eliminateSeenAvailableReservesLMU(this.SignUpService.userPlace,this.userUid)
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
                _this.TripsService.eliminateAvailableUsers(_this.userUid);
                _this.TripsService.eliminateSeenAvailableReserves(_this.userUid);
                // this.TripsService.eliminateSeenAvailableReservesLMU(this.SignUpService.userPlace,this.userUid)
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
    // presentLoadingCustom(array){
    //   let loading = this.loadingCtrl.create({
    //     spinner: 'crescent',
    //     content: `
    //       <div class="custom-spinner-container">
    //         <div class="custom-spinner-box"></div>
    //       </div>`,
    //     duration: 3000
    //   });
    //   loading.onDidDismiss(() => {
    //      console.log(array)
    //     if(array.length === 0){
    //       //there are no reserves to show
    //       this.noReserve = true;
    //     }else{
    //       //there are reserves
    //         this.noReserve = false;  
    //     }
    //   });
    //   loading.present();
    // }
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
            selector: 'page-listride',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/waypool_costumer/src/pages/p-listride/listride.html"*/'<ion-header class="bg-theme">\n    <ion-navbar >\n\n        <ion-title class="Title">ESCOGE TU COMPAÑERO\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-light" class="hideLongText" style="        background-color: rgba(255, 255, 255, 0.959);\n">\n    <ion-row class="center-align bg-white flow-ride">\n        <ion-col *ngFor = "let originUser of locationOriginUser"  class="hideLongText" col-5>\n            <h2>Origen</h2> {{originUser}}\n        </ion-col>\n        <ion-col col-2 text-center>\n            <img src="assets/imgs/baseline_compare_arrows_black_36dp.png">\n        </ion-col>\n        <ion-col *ngFor = "let destinationUser of locationDestinationUser"  class="hideLongText" col-5>\n            <h2>Destino</h2> {{destinationUser}}\n        </ion-col> \n    </ion-row>\n    <div class="iconHelp">\n        <ion-icon (click)="help()" name="arrow-dropdown-circle"></ion-icon>\n\n    </div>\n    \n    <div [ngSwitch]="noReserve" >\n        <img *ngSwitchCase=true src="assets/imgs/noreserveavailable.png">\n\n\n\n\n        <ng-container *ngSwitchCase=false>\n                <div style="display: flex;flex-direction: column;">\n                        <ion-card *ngFor = "let trip of initiatedTrips">\n                                <ion-item>\n                                    <ion-avatar item-start>\n                                        <img class="animated infinite pulse" src="assets/imgs/carOrange.png">\n                                    </ion-avatar>\n                                   \n                                    <div class="name">\n                                       \n                                        <h2>{{trip.driver.name| titlecase}} {{trip.driver.lastname| titlecase }}\n                                            <ion-icon *ngIf=\'trip.driver.verifiedPerson\' name="ios-checkmark-circle" class="text-hot"></ion-icon>\n                                            <ion-badge class="bg-yellow" style="margin:0px 3px 13px;"> {{trip.driver.company}}</ion-badge>\n                                        </h2>\n                                        <p>{{trip.car}}</p>\n                                        \n                \n                                    </div>\n                                    <div class="more">\n                                        <h2 class="text text-hot">                        \n                                         $ {{trip.price}}                          \n                                        </h2>\n                                       \n                                    </div>\n                                </ion-item>\n                                <ion-card-content >\n                                  \n                                    <ion-row class="center-align">  \n                                        <ion-col center text-center col-6 text-right style="margin-left: auto;">\n                                                <h2 class="text text-hot animated infinite pulse">                        \n                                                        Viaje en curso                         \n                                                     </h2>  \n                                                               \n                                        </ion-col>                \n                                        \n                                        <ion-col center text-center col-4 text-right style="margin-left: auto;">\n                                            <button class="btn bg-hot rounded full text-white" (click)="enterTrip(trip)"style="font-size: 1.5rem;">Unirme</button>\n                                                </ion-col>\n                                    </ion-row>\n                                </ion-card-content>\n                            </ion-card>\n                </div>\n\n            <div style="display: flex;flex-direction: column;width: 96%;">\n                    <ion-card *ngFor = "let reserve of reservesAvailable">\n                            <ion-item>\n                                <ion-avatar item-start>\n                                    <img  style="height:70px; width: 70px;" src="assets/imgs/carBlue.png">\n                                </ion-avatar>                   \n                                <div class="name">                      \n                                    <h2>{{reserve.driver.name| titlecase}} {{reserve.driver.lastname| titlecase }} \n                                        <ion-icon  *ngIf=\'reserve.driver.verifiedPerson\' name="ios-checkmark-circle" class="text-theme"></ion-icon>\n                                        <ion-badge class="bg-yellow" style="margin:0px 3px 13px;"> {{reserve.driver.company}}</ion-badge>\n            \n                                    </h2>\n            \n                                    <p>{{reserve.car}}</p> \n                                    \n                                </div>\n                                <div class="more">\n                                    <h2 class="text text-theme">                        \n                                        $ {{reserve.price}}                         \n                                    </h2>\n              \n                                </div>\n                            </ion-item>\n                            <ion-card-content>                  \n                                <ion-row class="center-align">  \n                                            <h2 class="text text-dark">                        \n                                                Hora: {{reserve.startHour}}                             \n                                            </h2>                    \n                                    <ion-col center text-center col-4 text-right style="margin-left: auto;">\n                                        <button class="btn bg-theme rounded full text-white" style="font-size: 1.5rem;" (click)="confirmpopup(reserve)">Unirme</button>\n                                    </ion-col>\n                                </ion-row>\n                            </ion-card-content>\n                        </ion-card>\n                    </div>\n       \n            \n        </ng-container>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/waypool_costumer/src/pages/p-listride/listride.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_8__services_trips_service__["a" /* TripsService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */], __WEBPACK_IMPORTED_MODULE_7__services_reserves_service__["a" /* reservesService */], __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_4__services_signup_services__["a" /* SignUpService */], __WEBPACK_IMPORTED_MODULE_3__services_sendCoords_service__["a" /* sendCoordsService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */], __WEBPACK_IMPORTED_MODULE_5__services_geoFire_service__["a" /* geofireService */]])
    ], ListridePage);
    return ListridePage;
}());

//# sourceMappingURL=listride.js.map

/***/ })

});
//# sourceMappingURL=39.js.map