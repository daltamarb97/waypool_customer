webpackJsonp([14],{

/***/ 654:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyridePageModule", function() { return MyridePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__myride__ = __webpack_require__(808);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MyridePageModule = /** @class */ (function () {
    function MyridePageModule() {
    }
    MyridePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__myride__["a" /* MyridePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__myride__["a" /* MyridePage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__myride__["a" /* MyridePage */]
            ]
        })
    ], MyridePageModule);
    return MyridePageModule;
}());

//# sourceMappingURL=myride.module.js.map

/***/ }),

/***/ 808:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyridePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_sendUsers_service__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_call_number__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_signup_services__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_trips_service__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_reserves_service__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_database__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_metrics_service__ = __webpack_require__(353);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var MyridePage = /** @class */ (function () {
    function MyridePage(navCtrl, modalCtrl, MetricsService, alertCtrl, TripsService, toastCtrl, SignUpService, geolocation, navParams, AngularFireAuth, callNumber, sendUsersService, app, reservesService, afDB) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.MetricsService = MetricsService;
        this.alertCtrl = alertCtrl;
        this.TripsService = TripsService;
        this.toastCtrl = toastCtrl;
        this.SignUpService = SignUpService;
        this.geolocation = geolocation;
        this.navParams = navParams;
        this.AngularFireAuth = AngularFireAuth;
        this.callNumber = callNumber;
        this.sendUsersService = sendUsersService;
        this.app = app;
        this.reservesService = reservesService;
        this.afDB = afDB;
        this.pendingUsers = [];
        this.pickedUpUsers = [];
        this.driverOnTrip = [];
        this.myReservesId = [];
        this.userUid = this.AngularFireAuth.auth.currentUser.uid;
        this.cancelReserves = [];
        this.cancelUsers = [];
        this.driverExist = false;
        this.onTrip = false;
        this.unsubscribe = new __WEBPACK_IMPORTED_MODULE_8_rxjs__["Subject"];
        this.TripsService.getKeyTrip(this.SignUpService.userPlace, this.userUid).takeUntil(this.unsubscribe)
            .subscribe(function (keys) {
            console.log(_this.SignUpService.userPlace);
            _this.keyTrip = keys;
            console.log(_this.keyTrip.keyTrip);
            if (_this.keyTrip === undefined || _this.keyTrip === null) {
                _this.unSubscribeServices();
                console.log("ME ACTIVEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE");
                _this.driverExist = false;
                _this.onTrip = false;
                _this.navCtrl.pop();
                console.log("existo");
            }
            else {
                _this.getTrip(_this.keyTrip.keyTrip, _this.keyTrip.driverId);
                _this.TripsService.eraseReserve(_this.SignUpService.userPlace, _this.userUid, _this.keyTrip.keyTrip);
            }
            //get trip without searching         
            //check if its lastMinuteUser or not
            // if(){
            // }
        });
        this.SignUpService.getMyInfo(this.userUid, this.SignUpService.userPlace).takeUntil(this.unsubscribe)
            .subscribe(function (info) {
            _this.user = info;
            console.log("estado mal");
            // here starts the conditionals for the trip
            if (_this.user.cancelTrip === undefined || _this.user.cancelTrip === null) {
            }
            else {
                _this.unSubscribeServices();
                console.log("ME ACTIVEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE");
                console.log(_this.user);
                _this.TripsService.eliminatingOnTrip(_this.SignUpService.userPlace, _this.userUid);
                _this.TripsService.eliminateKeyTrip(_this.SignUpService.userPlace, _this.userUid);
                _this.TripsService.eliminateAvailableReserves(_this.SignUpService.userPlace, _this.userUid);
                var modal = _this.modalCtrl.create('CanceltripPage');
                modal.present();
                console.log("me cancelaron el viaje");
                setTimeout(function () {
                    _this.TripsService.eliminatingCancelTrip(_this.SignUpService.userPlace, _this.userUid);
                    _this.navCtrl.pop();
                    console.log("me cancele");
                }, 2000);
            }
            //save trip
            if (_this.user.saveTrip === undefined || _this.user.saveTrip === null) {
            }
            else {
                _this.TripsService.saveTripOnRecords(_this.SignUpService.userPlace, _this.userUid, _this.trip);
                console.log("me active");
                _this.unSubscribeServices();
                _this.TripsService.eliminatingOnTrip(_this.SignUpService.userPlace, _this.userUid);
                _this.TripsService.eliminateKeyTrip(_this.SignUpService.userPlace, _this.userUid);
                _this.TripsService.eliminateAvailableReserves(_this.SignUpService.userPlace, _this.userUid);
                _this.TripsService.eliminatingSaveTrip(_this.SignUpService.userPlace, _this.userUid);
                console.log("no deje pruebas");
                _this.navCtrl.pop();
                _this.navCtrl.setRoot('TabsPage');
                _this.navCtrl.push('RatetripPage', { trip: _this.trip });
                _this.TripsService.eliminateTrip(_this.SignUpService.userPlace, _this.userUid);
                console.log("ME ACTIVEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE");
            }
        });
    }
    MyridePage.prototype.getTrip = function (keyTrip, driverId) {
        var _this = this;
        console.log(this.trip);
        // this.getTripState(keyTrip,driverId);
        console.log(this.keyTrip);
        this.TripsService.getTrip(this.SignUpService.userPlace, keyTrip, driverId).takeUntil(this.unsubscribe)
            .subscribe(function (info) {
            //check if the info of the reserve is null  
            if (_this.keyTrip.keyTrip === undefined || _this.keyTrip.keyTrip === null) {
                _this.driverExist = false;
                _this.onTrip = false;
                console.log("ME ACTIVEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE");
                console.log("existo");
            }
            else {
                _this.trip = info;
                console.log(_this.trip);
                _this.getPendingAndPickedUpUsers(keyTrip, driverId);
                _this.driverExist = true;
                _this.onTrip = true;
            }
        });
    };
    MyridePage.prototype.unSubscribeServices = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    MyridePage.prototype.ionViewDidLeave = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    MyridePage.prototype.getPendingAndPickedUpUsers = function (keyTrip, driverId) {
        var _this = this;
        this.TripsService.getPendingUsers(this.SignUpService.userPlace, keyTrip, driverId).takeUntil(this.unsubscribe)
            .subscribe(function (user) {
            _this.pendingUsers = user;
            console.log(_this.pendingUsers);
        });
        this.TripsService.getPickedUpUsers(this.SignUpService.userPlace, keyTrip, driverId).takeUntil(this.unsubscribe)
            .subscribe(function (user) {
            _this.pickedUpUsers = user;
            console.log(_this.pickedUpUsers);
        });
    };
    MyridePage.prototype.enterChat = function () {
        //send isTrip=true for the chat to know if its a reserve or a trip
        var isTrip = true;
        var modal = this.modalCtrl.create('ChattingPage', {
            reserve: this.trip,
            isTrip: isTrip
        });
        modal.present();
    };
    MyridePage.prototype.callUser = function (number) {
        var _this = this;
        console.log(number);
        this.callNumber.callNumber(number, true)
            .then(function (res) { return console.log('Launched dialer!', res); })
            .catch(function (err) {
            var alert = _this.alertCtrl.create({
                title: 'Error de llamada',
                subTitle: 'Hubo un error en la llamada, si persiste el problema envianos un correo a waypooltec@gmail.com',
                buttons: ['OK']
            });
            alert.present();
            console.log('Error launching dialer', err);
        });
    };
    MyridePage.prototype.cancelTrip = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Cancelar Viaje',
            message: "\u00BFEstas seguro que deseas cancelar?",
            buttons: [
                {
                    text: 'No',
                    role: 'cancel',
                    handler: function () {
                        //do nothing
                    }
                },
                {
                    text: 'Si',
                    handler: function () {
                        if (_this.pickedUpUsers.length === 0 || _this.pickedUpUsers === undefined || _this.pickedUpUsers === null) {
                            _this.unSubscribeServices();
                            _this.MetricsService.cancelReserves(_this.SignUpService.userPlace, _this.userUid, _this.trip);
                            _this.TripsService.cancelTrip(_this.SignUpService.userPlace, _this.userUid, _this.trip.driver.userId, _this.trip.keyTrip);
                            _this.TripsService.eliminateKeyTrip(_this.SignUpService.userPlace, _this.userUid);
                            _this.TripsService.eliminatingOnTrip(_this.SignUpService.userPlace, _this.userUid);
                            _this.TripsService.eliminateAvailableReserves(_this.SignUpService.userPlace, _this.userUid);
                            _this.navCtrl.pop();
                        }
                        _this.reservesService.confirmMyExistenceInPickedupUsers(_this.SignUpService.userPlace, _this.trip.driver.userId, _this.trip.keyTrip, _this.userUid).takeUntil(_this.unsubscribe)
                            .subscribe(function (pickedUp) {
                            _this.pickedUp = pickedUp;
                            console.log(_this.pickedUp);
                            console.log(pickedUp);
                            if (_this.pickedUp === undefined || _this.pickedUp === null) {
                                _this.MetricsService.cancelReserves(_this.SignUpService.userPlace, _this.userUid, _this.trip);
                                _this.TripsService.cancelTrip(_this.SignUpService.userPlace, _this.userUid, _this.trip.driver.userId, _this.trip.keyTrip);
                                _this.TripsService.eliminateKeyTrip(_this.SignUpService.userPlace, _this.userUid);
                                _this.TripsService.eliminateAvailableReserves(_this.SignUpService.userPlace, _this.userUid);
                                console.log(_this.trip.keyTrip);
                                _this.navCtrl.pop();
                            }
                            else {
                                //don't cancel
                                var toast = _this.toastCtrl.create({
                                    message: _this.pickedUp.name + " : No puedes cancelar ya que tu compa\u00F1ero ya te recogi\u00F3, si esto no es verdad, por favor saca un screenshot de Mi Viaje y m\u00E1ndalo al correo waypooltec@gmail.com",
                                    showCloseButton: true,
                                    closeButtonText: 'Ok'
                                });
                                toast.present();
                            }
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    MyridePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-myride',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/WAYPOOL_OFICIAL/waypool_costumer/src/pages/myride/myride.html"*/'<ion-header class="bg-theme">\n    <ion-navbar hideBackButton="true">\n        <ion-title class="text-center">MI VIAJE</ion-title>\n    </ion-navbar>\n    \n</ion-header>\n\n<ion-content class="bg-light">\n    <p class="important">¡IMPORTANTE!: No cierres la app mientras estas haciendo un viaje. </p> \n\n    <div>\n        <ion-list>\n            <ion-card *ngFor = "let user of pendingUsers">\n                <ion-item>\n                    <ion-avatar item-start>\n                        <img src="assets/imgs/userPicture.png">\n                    </ion-avatar>\n                    <div class="name">\n                        <h2 *ngIf="user.userId === userUid; else itsNotMeBlock "> Yo\n                            <ion-icon name="ios-checkmark-circle" class="text-theme"></ion-icon>\n                        </h2>\n                        <ng-template #itsNotMeBlock >\n                            <h2 >{{user.name | titlecase}} {{user.lastname |titlecase | slice:0:1}}\n                                <ion-icon *ngIf=\'user.verifiedPerson\' name="ios-checkmark-circle" class="text-theme"></ion-icon>\n                            </h2>\n                            <p>{{user.place}}</p>\n\n                        </ng-template>\n                        \n                    </div>                   \n                    <div class="more">\n                        <ion-badge class="bg-yellow">EN ESPERA</ion-badge>\n                    </div>\n                </ion-item>\n                \n            </ion-card>\n            <ion-card *ngFor = "let user of pickedUpUsers">\n                <ion-item>\n                    <ion-avatar item-start>\n                        <img src="assets/imgs/userPicture.png">\n                    </ion-avatar>\n                    <div class="name">\n                        <h2 *ngIf="user.userId === userUid; else itsNotMeBlock " style="font-size:1.5rem; "> Yo\n                            <ion-icon name="ios-checkmark-circle" class="text-green"></ion-icon>\n                        </h2>\n                        <ng-template #itsNotMeBlock >\n                            <h2 >{{user.name | titlecase}} {{user.lastname |titlecase | slice:0:1}}\n                                <ion-icon *ngIf=\'user.verifiedPerson\' name="ios-checkmark-circle" class="text-green"></ion-icon>                           \n                            </h2>\n                            <p>{{user.place}}</p>\n\n                        </ng-template>\n                        \n                    </div>\n                    <div class="more">\n                        <ion-badge class="bg-green">RECOGIDO</ion-badge>  \n                    </div>\n                   \n                </ion-item>\n                \n            </ion-card>\n\n            <!-- repilica -->\n            <ion-card *ngIf="driverExist">\n                <ion-item>\n                    <ion-avatar item-start>\n                        <img  style="height:70px; width: 70px;" src="assets/imgs/carBlue.png">\n                    </ion-avatar>\n                    <div class="name">\n                        <h2>{{trip.driver.name|titlecase}} {{trip.driver.lastname |titlecase | slice:0:1}}\n                            <ion-icon *ngIf=\'trip.driver.verifiedPerson\' name="ios-checkmark-circle" class="text-theme"></ion-icon>\n                            <ion-badge class="bg-yellow" style="margin:0px 3px 13px;"> {{trip.driver.place}}</ion-badge>\n\n                        </h2>\n                        <p>{{trip.car}}</p>\n\n                    </div>\n                    <div class="more">\n                        <h2 class="text-theme" class="priceDriver">$ {{trip.price}}\n                        </h2>\n                    </div>                \n                   \n                </ion-item>\n                <ion-card-content>\n                    <div class="ride-detail">\n                        <p>\n                            <span class="icon-location bg-theme"></span>{{trip.houseAddr}}</p>\n                        <p>\n                            <span class="icon-location bg-yellow"></span>{{trip.placeAddr}}</p>\n                    </div>\n                    <ion-row>\n                      \n                            <h2 class="text text-theme" style=" display: flex; align-items: center; font-weight:600">                        \n                                Hora de partida: {{trip.startHour}}                          \n                            </h2>                    \n                          \n                       \n                            <ion-col class="detail-text">\n                                <button class="btn bg-green rounded full text-white" style="    width: 44px;\n                                font-size: 21px;" (click)="callUser(trip.driver.phone)"><ion-icon name="ios-call" class="text-white"></ion-icon></button>\n\n                            </ion-col>\n                      \n                   \n                    </ion-row>\n                </ion-card-content>\n            </ion-card>    \n            <ion-row class="rowOfButtons" >                                 \n                \n                <ion-col class="detail-text">\n                    <button class="btn bg-darkblue rounded full text-white" style="width: 90%;margin-top: 14px;margin-left: 9px;" (click)="enterChat()">Chat</button>\n                </ion-col>\n                <ion-col class="detail-text">\n                    <button  class="btn bg-theme text-white rounded" *ngIf="onTrip"  (click)="cancelTrip()"style="width: 90%;margin-top: 14px;margin-left: 9px; margin-right:9px;">Cancelar Viaje</button>\n                </ion-col>\n           \n            </ion-row>\n\n        </ion-list>\n\n        <!-- <div *ngSwitchCase="\'map\'">\n           <div #map id="map" ></div>\n        </div> -->\n             \n\n        \n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/WAYPOOL_OFICIAL/waypool_costumer/src/pages/myride/myride.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_11__services_metrics_service__["a" /* MetricsService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_7__services_trips_service__["a" /* TripsService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_6__services_signup_services__["a" /* SignUpService */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_4__ionic_native_call_number__["a" /* CallNumber */], __WEBPACK_IMPORTED_MODULE_2__services_sendUsers_service__["a" /* sendUsersService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_9__services_reserves_service__["a" /* reservesService */], __WEBPACK_IMPORTED_MODULE_10_angularfire2_database__["AngularFireDatabase"]])
    ], MyridePage);
    return MyridePage;
}());

//# sourceMappingURL=myride.js.map

/***/ })

});
//# sourceMappingURL=14.js.map