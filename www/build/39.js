webpackJsonp([39],{

/***/ 705:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListridePageModule", function() { return ListridePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__listride__ = __webpack_require__(901);
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

/***/ 901:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListridePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_geofire__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_geofire___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_geofire__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_sendCoords_service__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_signup_services__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_geoFire_service__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_reserves_service__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_trips_service__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs__ = __webpack_require__(19);
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
    function ListridePage(navParams, navCtrl, app, TripsService, loadingCtrl, toastCtrl, reservesService, AngularFireAuth, afDB, SignUpService, sendCoordsService, modalCtrl, geoFireService, alertCtrl) {
        var _this = this;
        this.navParams = navParams;
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
        this.alertCtrl = alertCtrl;
        this.reservesAvailable = [];
        this.routeTrips = [];
        this.locationDestinationUser = [];
        this.locationOriginUser = [];
        this.userUid = this.AngularFireAuth.auth.currentUser.uid;
        this.ReservesGeofire = [];
        this.tripsReserved = [];
        this.unsubscribe = new __WEBPACK_IMPORTED_MODULE_10_rxjs__["Subject"];
        this.pendingUsers = [];
        this.noReserve = false;
        this.pointsAlongRoute = [];
        this.indexesOfPointsAlongRoute = [];
        this.geofireOriginConfirmed = false;
        this.geofireOriginConfirmedOnRoute = false;
        this.geofireDestinationConfirmed = false;
        this.geofireDestinationConfirmedOnRoute = false;
        this.keysIdentifiedInOrigin = [];
        this.keysIdentifiedInOriginRoute = [];
        this.showCrew = false;
        this.showCarpool = true;
        this.showNearby = true;
        this.showRoute = false;
        this.geoquerysTEST = [];
        console.log("AQUI EMPIEZA");
        this.loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            content: "\n      <div class=\"custom-spinner-container\">\n        <div class=\"custom-spinner-box\"></div>\n      </div>"
        });
        this.loading.present();
        this.afDB.database.ref('usersTest/' + this.userUid).once('value').then(function (snap) {
            _this.user = snap.val();
            console.log(_this.user);
        });
        this.latOr = this.navParams.get('latOr');
        this.lngOr = this.navParams.get('lngOr');
        this.latDest = this.navParams.get('latDest');
        this.lngDest = this.navParams.get('lngDest');
        this.pointsAlongRoute = this.navParams.get('pointsAlongRoute');
        this.indexesOfPointsAlongRoute = this.navParams.get('indexesOfPointsAlongRoute');
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
        this.reservesService.getSeenReservesInAvailableReservesRoute(this.userUid).subscribe(function (reserve) {
            _this.routeTrips = reserve;
            console.log(_this.routeTrips);
            _this.getButtonStarter();
        });
    }
    ListridePage.prototype.getButtonStarter = function () {
        if (this.reservesAvailable.length !== 0 && this.routeTrips.length === 0) {
            this.segment = 'carpool';
            this.segmentCarpool = 'nearby';
            this.carpool();
            this.nearby();
        }
        else if (this.routeTrips.length !== 0 && this.reservesAvailable.length === 0) {
            this.segment = 'carpool';
            this.segmentCarpool = 'route';
            this.carpool();
            this.route();
        }
        else if (this.routeTrips.length !== 0 && this.reservesAvailable.length !== 0) {
            this.segment = 'carpool';
            this.segmentCarpool = 'nearby';
            this.carpool();
            this.nearby();
        }
        this.loading.dismiss();
    };
    ListridePage.prototype.ionViewDidLeave = function () {
        this.unSubscribeServices();
        console.log("me active");
        this.TripsService.eliminateAvailableUsers(this.userUid);
        this.TripsService.eliminateSeenAvailableReserves(this.userUid);
        this.TripsService.eliminateSeenAvailableReservesRoute(this.userUid);
        // this.TripsService.eliminateSeenAvailableReservesLMU(this.SignUpService.userPlace,this.userUid)
    };
    ListridePage.prototype.doRefresh = function (event) {
        var _this = this;
        this.afDB.database.ref('allCities/' + this.user.city).once('value').then(function (snapGeoquery) {
            _this.setGeofireOr(snapGeoquery.val().geofireOr, _this.latOr, _this.lngOr, _this.userUid, snapGeoquery.val().geofireDest, _this.latDest, _this.lngDest);
            _this.setGeofireRouteOrigin(snapGeoquery.val().geofireRoute, _this.latOr, _this.lngOr, snapGeoquery.val().geofireDest, _this.latDest, _this.lngDest, _this.userUid);
        });
        setTimeout(function () {
            if (_this.geoquery1) {
                _this.geoquery1.cancel();
            }
            if (_this.geoquery2) {
                _this.geoquery2.cancel();
            }
            if (_this.geoqueryRouteOrigin) {
                _this.geoqueryRouteOrigin.cancel();
            }
            if (_this.geoqueryRouteDestination) {
                _this.geoqueryRouteDestination.cancel();
            }
            if (_this.geofireDestinationConfirmed === false && _this.geofireDestinationConfirmedOnRoute === false) {
                var alert = _this.alertCtrl.create({
                    title: 'No hay nuevos poolers compartiendo sus viajes',
                    subTitle: 'Intenta más tarde',
                    buttons: ['OK']
                });
                alert.present();
            }
            else {
            }
            event.complete();
        }, 5000);
    };
    ListridePage.prototype.getAvailableReserves = function () {
        var _this = this;
        //bring reserves that i have entered to hide them in listride
        // this.reservesAvailable = [];
        //after getting reserve id and driverUid from my own user node, we used them to access the reserve information in the node reserves
        console.log(this.ReservesGeofire);
        this.ReservesGeofire.forEach(function (reserveGeofire) {
            if (reserveGeofire.onRouteDestination == true || reserveGeofire.onRouteOrigin == true) {
                _this.afDB.database.ref('/reservesTest/' + reserveGeofire.driverId + '/' + reserveGeofire.keyReserve).once('value').then(function (snapTripRoute) {
                    var obj = snapTripRoute.val();
                    _this.afDB.database.ref('/usersTest/' + _this.userUid + '/reservesSeenInAvailableReservesRoute/').remove().then(function () {
                        _this.afDB.database.ref('/usersTest/' + _this.userUid + '/reservesSeenInAvailableReservesRoute/' + reserveGeofire.keyReserve).update(obj)
                            .then(function () {
                            _this.afDB.database.ref('/usersTest/' + _this.userUid + '/reservesSeenInAvailableReservesRoute/' + reserveGeofire.keyReserve).update({ distance: (reserveGeofire.distance * 1000) });
                        });
                    });
                });
            }
            else {
                _this.afDB.database.ref('/reservesTest/' + reserveGeofire.driverId + '/' + reserveGeofire.keyReserve).once('value').then(function (snapReserve) {
                    var obj = snapReserve.val();
                    console.log(obj);
                    _this.afDB.database.ref('/usersTest/' + _this.userUid + '/reservesSeenInAvailableReserves/').remove().then(function () {
                        _this.afDB.database.ref('/usersTest/' + _this.userUid + '/reservesSeenInAvailableReserves/' + reserveGeofire.keyReserve).update(obj)
                            .then(function () {
                            _this.afDB.database.ref('/usersTest/' + _this.userUid + '/reservesSeenInAvailableReserves/' + reserveGeofire.keyReserve).update({ distance: (reserveGeofire.distance * 1000) });
                        });
                    });
                });
            }
        });
    };
    ListridePage.prototype.carpool = function () {
        this.showCrew = false;
        this.showCarpool = true;
    };
    ListridePage.prototype.crew = function () {
        this.showCarpool = false;
        this.showCrew = true;
    };
    ListridePage.prototype.nearby = function () {
        this.showRoute = false;
        this.showNearby = true;
    };
    ListridePage.prototype.route = function () {
        this.showNearby = false;
        this.showRoute = true;
    };
    ListridePage.prototype.createCrew = function () {
        console.log('te clickie');
        var modal = this.modalCtrl.create('CreateCrewPage', { latOr: this.latOr, lngOr: this.lngOr, latDest: this.latDest, lngDest: this.lngDest });
        modal.present();
    };
    ListridePage.prototype.nearbyCrew = function () {
    };
    ListridePage.prototype.routeCrew = function () {
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
                    _this.TripsService.eliminateSeenAvailableReservesRoute(_this.userUid);
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
                    _this.TripsService.eliminateSeenAvailableReservesRoute(_this.userUid);
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
                _this.TripsService.eliminateSeenAvailableReservesRoute(_this.userUid);
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
    ListridePage.prototype.help = function () {
        var toast = this.toastCtrl.create({
            message: 'Estos son los conductores que se van a tu misma zona. Podrás ver sus horas en las que se van y unirte en su viaje',
            showCloseButton: true,
            closeButtonText: 'OK',
            position: 'top'
        });
        toast.present();
    };
    ////////////// GEOQUERYS FUNCTIONS //////////////////
    //geoquery origin
    ListridePage.prototype.setGeofireOr = function (radiusOr, latOr, lngOr, userId, radiusDest, latDest, lngDest) {
        var dbRef = this.afDB.database.ref('/geofireOr/');
        var geoFire = new __WEBPACK_IMPORTED_MODULE_2_geofire__(dbRef);
        this.geoquery2 = geoFire.query({
            center: [latOr, lngOr],
            radius: radiusOr
        });
        this.keyEnteredOr(radiusDest, latDest, lngDest, userId);
        this.keyExitedOr(userId);
        console.log('geoquery or added');
    };
    ListridePage.prototype.keyEnteredOr = function (radiusDest, latDest, lngDest, userId) {
        // var keyEnteredOr = false;
        this.geoquery2.on("key_entered", function (key, location, distance) {
            //  keyEnteredOr = true;
            this.geofireOriginConfirmed = true;
            var orRouteConf = false;
            this.keysIdentifiedInOrigin.push({ keyTrip: key, orRouteConf: orRouteConf, distance: distance });
            if (this.geoquery1) {
            }
            else {
                this.setGeofireDest(radiusDest, latDest, lngDest, userId);
            }
        }.bind(this));
    };
    ListridePage.prototype.keyExitedOr = function (userId) {
        this.geoquery2.on("key_exited", function (key) {
            this.afDB.database.ref('/usersTest/' + userId + '/availableReserves/' + key).remove();
        }.bind(this));
    };
    //geoquery origin in route
    ListridePage.prototype.setGeofireRouteOrigin = function (radiusRoute, lat, lng, radiusDest, latDest, lngDest, userId) {
        // console.log(this.geoquriesRouteOrigin);
        var dbRef = this.afDB.database.ref('/geofireRoute/');
        var geoFire = new __WEBPACK_IMPORTED_MODULE_2_geofire__(dbRef);
        this.geoqueryRouteOrigin = geoFire.query({
            center: [lat, lng],
            radius: radiusRoute
        });
        this.keyEnteredRouteOrigin(userId, radiusDest, latDest, lngDest);
        this.keyExitedRouteOrigin(userId);
    };
    ListridePage.prototype.keyEnteredRouteOrigin = function (userId, radiusDest, latDest, lngDest) {
        this.geoqueryRouteOrigin.on("key_entered", function (key, location, distance) {
            var _this = this;
            this.geofireOriginConfirmedOnRoute = true;
            var orRouteConf = true;
            this.afDB.database.ref('/geofireRoute/' + key).once('value').then(function (snap) {
                // quede aqui, para verificar que las key identificadas son iguales
                var keyTrip = snap.val().keyTrip;
                _this.keysIdentifiedInOriginRoute.push({
                    keyTrip: keyTrip,
                    orRouteConf: orRouteConf,
                    distance: distance
                });
            }).then(function () {
                if (_this.geoquery1) {
                }
                else {
                    _this.setGeofireDest(radiusDest, latDest, lngDest, userId);
                }
            });
            console.log('ENTRE EN ORIGIN EN ROUTE');
        }.bind(this));
    };
    ListridePage.prototype.keyExitedRouteOrigin = function (userId) {
        this.geoqueryRouteOrigin.on("key_exited", function (key) {
            this.afDB.database.ref('/usersTest/' + userId + '/availableReserves/' + key).remove();
        }.bind(this));
    };
    //geoquery destination
    ListridePage.prototype.setGeofireDest = function (radiusDest, latDest, lngDest, userId) {
        console.log('se prendio geoquery destination, debo salir una sóla vez');
        console.log(this.keysIdentifiedInOriginRoute);
        var dbRef = this.afDB.database.ref('/geofireDest/');
        var geoFire = new __WEBPACK_IMPORTED_MODULE_2_geofire__(dbRef);
        this.geoquery1 = geoFire.query({
            center: [latDest, lngDest],
            radius: radiusDest
        });
        this.keyEnteredDest(userId);
        this.keyExitedDest(userId);
        console.log('geoquery dest added');
    };
    ListridePage.prototype.keyEnteredDest = function (userId) {
        var _this = this;
        this.geoquery1.on("key_entered", function (key, location, distance) {
            var _this = this;
            console.log(key);
            if (this.keysIdentifiedInOrigin.length !== 0) {
                var count = 0;
                for (var _i = 0, _a = this.keysIdentifiedInOrigin; _i < _a.length; _i++) {
                    var element = _a[_i];
                    count = count + 1;
                    if (element.keyTrip === key) {
                        this.geofireDestinationConfirmed = true;
                        this.afDB.database.ref('/usersTest/' + userId + '/availableReserves/' + key).update({
                            keyReserve: key,
                            distance: element.distance
                        }).then(function () {
                            return _this.afDB.database.ref('/geofireDest/' + key).once('value').then(function (snap) {
                                _this.driverOnNodeDest = snap.val();
                                _this.afDB.database.ref('/usersTest/' + userId + '/availableReserves/' + key).update({
                                    driverId: _this.driverOnNodeDest.driverId
                                });
                            });
                        });
                    }
                    if (count === this.keysIdentifiedInOrigin.length) {
                        console.log('si se ejecuto el for de keysOrigin');
                        var _loop_1 = function (element_1) {
                            if (element_1.keyTrip === key) {
                                console.log('un key de destination es igual al keytrip que fue identificado en origen');
                                this_1.geofireDestinationConfirmed = true;
                                this_1.afDB.database.ref('/usersTest/' + userId + '/availableReserves/' + key).once('value')
                                    .then(function (snapshot) {
                                    if (snapshot.val()) {
                                    }
                                    else {
                                        _this.afDB.database.ref('/usersTest/' + userId + '/availableReserves/' + key).update({
                                            keyReserve: key,
                                            onRouteOrigin: true,
                                            distance: element_1.distance
                                        }).then(function () {
                                            return _this.afDB.database.ref('/geofireDest/' + key).once('value').then(function (snap) {
                                                _this.driverOnNodeDest = snap.val();
                                                _this.afDB.database.ref('/usersTest/' + userId + '/availableReserves/' + key).update({
                                                    driverId: _this.driverOnNodeDest.driverId
                                                });
                                            });
                                        });
                                    }
                                });
                            }
                        };
                        var this_1 = this;
                        for (var _b = 0, _c = this.keysIdentifiedInOriginRoute; _b < _c.length; _b++) {
                            var element_1 = _c[_b];
                            _loop_1(element_1);
                        }
                    }
                }
            }
            else if (this.keysIdentifiedInOriginRoute.length !== 0) {
                var _loop_2 = function (element) {
                    if (element.keyTrip === key) {
                        console.log('un key de destination es igual al keytrip que fue identificado en origen');
                        this_2.geofireDestinationConfirmed = true;
                        this_2.afDB.database.ref('/usersTest/' + userId + '/availableReserves/' + key).once('value')
                            .then(function (snapshot) {
                            if (snapshot.val()) {
                            }
                            else {
                                _this.afDB.database.ref('/usersTest/' + userId + '/availableReserves/' + key).update({
                                    keyReserve: key,
                                    onRouteOrigin: true,
                                    distance: element.distance
                                }).then(function () {
                                    return _this.afDB.database.ref('/geofireDest/' + key).once('value').then(function (snap) {
                                        _this.driverOnNodeDest = snap.val();
                                        _this.afDB.database.ref('/usersTest/' + userId + '/availableReserves/' + key).update({
                                            driverId: _this.driverOnNodeDest.driverId
                                        });
                                    });
                                });
                            }
                        });
                    }
                };
                var this_2 = this;
                for (var _d = 0, _e = this.keysIdentifiedInOriginRoute; _d < _e.length; _d++) {
                    var element = _e[_d];
                    _loop_2(element);
                }
            }
            else {
            }
        }.bind(this));
        setTimeout(function () {
            _this.geoquery1.on("ready", function () {
                var _this = this;
                this.afDB.database.ref('allCities/' + this.userInfo.city).once('value').then(function (snap) {
                    _this.setGeofireRouteDest(snap.val().geofireRoute, _this.myLatLngDest.lat(), _this.myLatLngDest.lng(), userId);
                });
            }.bind(_this));
        }, 300);
    };
    ListridePage.prototype.keyExitedDest = function (userId) {
        this.geoquery1.on("key_exited", function (key) {
            this.afDB.database.ref('/usersTest/' + userId + '/availableReserves/' + key).remove();
        }.bind(this));
    };
    //geoquery destination in route
    ListridePage.prototype.setGeofireRouteDest = function (radiusRoute, lat, lng, userId) {
        console.log('se ejecutó');
        var dbRef = this.afDB.database.ref('/geofireRoute/');
        var geoFire = new __WEBPACK_IMPORTED_MODULE_2_geofire__(dbRef);
        this.geoqueryRouteDestination = geoFire.query({
            center: [lat, lng],
            radius: radiusRoute
        });
        this.keyEnteredRouteDest(userId);
        this.keyExitedRouteDest(userId);
    };
    ListridePage.prototype.keyEnteredRouteDest = function (userId) {
        this.geoqueryRouteDestination.on("key_entered", function (key, location, distance) {
            var _this = this;
            this.afDB.database.ref('/geofireRoute/' + key).once('value').then(function (snap) {
                _this.keyTripForGeofireInRouteDest = snap.val().keyTrip;
                _this.driverIdForGeofireInRouteDest = snap.val().driverId;
            }).then(function () {
                if (_this.keysIdentifiedInOrigin !== 0) {
                    var count = 0;
                    var _loop_3 = function (element) {
                        count = count + 1;
                        if (element.keyTrip === _this.keyTripForGeofireInRouteDest) {
                            _this.geofireDestinationConfirmedOnRoute = true;
                            _this.afDB.database.ref('/usersTest/' + userId + '/availableReserves/' + _this.keyTripForGeofireInRouteDest).once('value')
                                .then(function (snapConf) {
                                if (snapConf.val()) {
                                    console.log('te voy a dejar relajado ya que ya te identifiqué');
                                }
                                else {
                                    _this.afDB.database.ref('/usersTest/' + userId + '/availableReserves/' + _this.keyTripForGeofireInRouteDest).update({
                                        keyReserve: _this.keyTripForGeofireInRouteDest,
                                        driverId: _this.driverIdForGeofireInRouteDest,
                                        onRouteDestination: true,
                                        distance: element.distance
                                    });
                                }
                            });
                        }
                        if (count === _this.keysIdentifiedInOrigin.length) {
                            var _loop_4 = function (element_2) {
                                if (element_2.keyTrip === _this.keyTripForGeofireInRouteDest) {
                                    _this.geofireDestinationConfirmedOnRoute = true;
                                    _this.afDB.database.ref('/usersTest/' + userId + '/availableReserves/' + _this.keyTripForGeofireInRouteDest).once('value')
                                        .then(function (snapConf) {
                                        if (snapConf.val().driverId === _this.driverIdForGeofireInRouteDest) {
                                            console.log('te voy a dejar relajado ya que ya te identifiqué');
                                        }
                                        else {
                                            _this.afDB.database.ref('/usersTest/' + userId + '/availableReserves/' + _this.keyTripForGeofireInRouteDest).update({
                                                keyReserve: _this.keyTripForGeofireInRouteDest,
                                                driverId: _this.driverIdForGeofireInRouteDest,
                                                onRouteDestination: true,
                                                onRouteOrigin: true,
                                                distance: element_2.distance
                                            });
                                        }
                                    });
                                }
                            };
                            for (var _i = 0, _a = _this.keysIdentifiedInOriginRoute; _i < _a.length; _i++) {
                                var element_2 = _a[_i];
                                _loop_4(element_2);
                            }
                        }
                    };
                    for (var _i = 0, _a = _this.keysIdentifiedInOrigin; _i < _a.length; _i++) {
                        var element = _a[_i];
                        _loop_3(element);
                    }
                }
                else {
                    console.log('no hay nada en ' + _this.keysIdentifiedInOrigin);
                }
            })
                .then(function () {
                console.log(_this.keyTripForGeofireInRouteDest);
                console.log('ahora si aqui te encuentro 1');
                if (_this.keysIdentifiedInOriginRoute !== 0) {
                    console.log('ahora si aqui te encuentro 2');
                    var _loop_5 = function (element) {
                        if (element.keyTrip === _this.keyTripForGeofireInRouteDest) {
                            _this.geofireDestinationConfirmedOnRoute = true;
                            _this.afDB.database.ref('/usersTest/' + userId + '/availableReserves/' + _this.keyTripForGeofireInRouteDest).once('value')
                                .then(function (snapConf) {
                                if (snapConf.val()) {
                                    if (snapConf.val().driverId === _this.driverIdForGeofireInRouteDest) {
                                        console.log('te voy a dejar relajado ya que ya te identifiqué');
                                    }
                                    else {
                                        _this.afDB.database.ref('/usersTest/' + userId + '/availableReserves/' + _this.keyTripForGeofireInRouteDest).update({
                                            keyReserve: _this.keyTripForGeofireInRouteDest,
                                            driverId: _this.driverIdForGeofireInRouteDest,
                                            onRouteDestination: true,
                                            onRouteOrigin: true,
                                            distance: element.distance
                                        });
                                    }
                                }
                                else {
                                    _this.afDB.database.ref('/usersTest/' + userId + '/availableReserves/' + _this.keyTripForGeofireInRouteDest).update({
                                        keyReserve: _this.keyTripForGeofireInRouteDest,
                                        driverId: _this.driverIdForGeofireInRouteDest,
                                        onRouteDestination: true,
                                        onRouteOrigin: true,
                                        distance: element.distance
                                    });
                                }
                            });
                        }
                    };
                    for (var _i = 0, _a = _this.keysIdentifiedInOriginRoute; _i < _a.length; _i++) {
                        var element = _a[_i];
                        _loop_5(element);
                    }
                }
                else {
                }
            });
        }.bind(this));
    };
    ListridePage.prototype.keyExitedRouteDest = function (userId) {
        this.geoqueryRouteDestination.on("key_exited", function (key) {
            this.afDB.database.ref('/usersTest/' + userId + '/availableReserves/' + key).remove();
        }.bind(this));
    };
    ListridePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-listride',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/waypool_costumer/src/pages/p-listride/listride.html"*/'<ion-header class="bg-theme">\n    <ion-navbar >\n\n        <ion-title class="Title">PICK YOUR CREW\n        </ion-title>\n    </ion-navbar>\n\n    <ion-row class="center-align bg-theme flow-ride">\n            <ion-segment [(ngModel)]="segment">\n                    <ion-segment-button value="carpool" (ionSelect)="carpool()">\n                      Waypool drivers\n                      <ion-badge color="danger" *ngIf=\'showCarpool\'>{{reservesAvailable.length + routeTrips.length}}</ion-badge>\n                    </ion-segment-button>\n                    \n                    <ion-segment-button value="crew" (ionSelect)="crew()">\n                      Set up you Crew\n                      <!-- <ion-badge color="danger" *ngIf=\'showCrew\'>{{routeTrips.length}}</ion-badge> -->\n\n                    </ion-segment-button>\n             </ion-segment>\n    </ion-row>\n    \n</ion-header>\n\n\n<ion-content class="bg-light" class="hideLongText" style="        background-color: rgba(255, 255, 255, 0.959);">\n        \n    \n    <div [ngSwitch]="noReserve" >\n        <div *ngSwitchCase=true >\n                <img src="assets/imgs/noreserveavailable.png">\n                <ion-refresher slot="fixed" (ionRefresh)="doRefresh($event)">\n                    <ion-refresher-content\n                      pullingIcon="arrow-dropdown"\n                      pullingText="Pull to refresh"\n                      refreshingSpinner="circles"\n                      refreshingText="Refreshing...">\n                    </ion-refresher-content>\n                  </ion-refresher>\n        </div>\n        \n\n\n        <div *ngSwitchCase=false>\n\n                <!-- <div class="iconHelp">\n                        <ion-icon (click)="help()" name="arrow-dropdown-circle"></ion-icon>\n                \n                    </div> -->\n                <ng-container>\n                    \n                        <div style="display: flex;flex-direction: column;padding-top: 60px;" *ngIf=\'showCrew\'>\n                            <ion-row style="padding-bottom: 60px">\n                                    <button ion-button full class="bg-darkblue text-white btn rounded" (click)="createCrew()" >CREATE CREW</button>\n\n                            </ion-row>\n\n                            <ion-row>\n                                <ion-row>\n                                        <h4 class="center-align">GRUPOS DISPONIBLES</h4>\n\n                                </ion-row>\n\n                                <ion-row class="center-align bg-theme flow-ride">\n                                        <ion-segment [(ngModel)]="segmentCrew" class="bg-theme-driver">\n                                                <ion-segment-button value="nearbyCrew" (ionSelect)="nearbyCrew()">\n                                                  nearby\n                                                  <!-- <ion-badge color="danger" *ngIf=\'showNearby\'>{{reservesAvailable.length}}</ion-badge> -->\n                                                </ion-segment-button>\n                                                \n                                                <ion-segment-button value="routeCrew" (ionSelect)="routeCrew()">\n                                                  on your route\n                                                  <!-- <ion-badge color="danger" *ngIf=\'showRoute\'>{{routeTrips.length}}</ion-badge> -->\n                            \n                                                </ion-segment-button>\n                                         </ion-segment>\n\n                                </ion-row>\n                            </ion-row>\n\n                        </div>\n\n\n        \n                    <div style="display: flex;flex-direction: column;width: 96%;" *ngIf=\'showCarpool\'>\n\n                        <ion-row class="center-align bg-theme flow-ride">\n\n                                <ion-segment [(ngModel)]="segmentCarpool" class="bg-theme-driver">\n                                        <ion-segment-button value="nearby" (ionSelect)="nearby()">\n                                          nearby\n                                          <!-- <ion-badge color="danger" *ngIf=\'showNearby\'>{{reservesAvailable.length}}</ion-badge> -->\n                                        </ion-segment-button>\n                                        \n                                        <ion-segment-button value="route" (ionSelect)="route()">\n                                          on your route\n                                          <!-- <ion-badge color="danger" *ngIf=\'showRoute\'>{{routeTrips.length}}</ion-badge> -->\n                    \n                                        </ion-segment-button>\n                                 </ion-segment>\n                                 \n                        </ion-row>\n                  \n\n                             <div style="display: flex;flex-direction: column;" *ngIf=\'showNearby\'>\n\n                                    <ion-card *ngFor = "let reserve of reservesAvailable">\n                                            <ion-item>\n                                                <ion-avatar item-start>\n                                                    <img  style="height:70px; width: 70px;" src="assets/imgs/carBlue.png">\n                                                </ion-avatar>                   \n                                                <div class="name">                      \n                                                    <h2>{{reserve.driver.name| titlecase}} {{reserve.driver.lastname| titlecase }} \n                                                        <ion-icon  *ngIf=\'reserve.driver.verifiedPerson\' name="ios-checkmark-circle" class="text-theme"></ion-icon>\n                                                        <ion-badge class="bg-yellow" style="margin:0px 3px 13px;"> {{reserve.driver.company}}</ion-badge>\n                            \n                                                    </h2>\n                            \n                                                    <p>{{reserve.car}}</p> \n                                                    \n                                                </div>\n                                                <div class="more">\n                                                    <h2 class="text text-theme">                        \n                                                        $ {{reserve.price}}                         \n                                                    </h2>\n                              \n                                                </div>\n                                            </ion-item>\n                                            <ion-card-content>                  \n                                                <ion-row class="center-align">  \n                                                            <h2 class="text text-dark">                        \n                                                                <!-- Hora: {{reserve.startHour}}                              -->\n                                                                trip starts at: 3:00pm\n                                                            </h2>                    \n                                                    <ion-col center text-center col-4 text-right style="margin-left: auto;">\n                                                        <button class="btn bg-theme rounded full text-white" style="font-size: 1.5rem;" (click)="confirmpopup(reserve)">Unirme</button>\n                                                    </ion-col>\n                                                </ion-row>\n                                            </ion-card-content>\n                                        </ion-card>\n\n                             </div>\n\n                             <div style="display: flex;flex-direction: column;" *ngIf= \'showRoute\'>\n\n\n                                    <ion-card *ngFor = "let trip of routeTrips">\n\n                                            <ion-item>\n                                                    <ion-avatar item-start>\n                                                        <img  style="height:70px; width: 70px;" src="assets/imgs/carBlue.png">\n                                                    </ion-avatar>                   \n                                                    <div class="name">                      \n                                                        <h2>{{trip.driver.name| titlecase}} {{trip.driver.lastname| titlecase }} \n                                                            <ion-icon  *ngIf=\'trip.driver.verifiedPerson\' name="ios-checkmark-circle" class="text-theme"></ion-icon>\n                                                            <ion-badge class="bg-yellow" style="margin:0px 3px 13px;"> {{trip.driver.company}}</ion-badge>\n                                \n                                                        </h2>\n                                \n                                                        <p>{{trip.car}}</p> \n                                                        \n                                                    </div>\n                                                    <div class="more">\n                                                        <h2 class="text text-theme">                        \n                                                            $ {{trip.price}}                         \n                                                        </h2>\n                                  \n                                                    </div>\n                                                </ion-item>\n                                                <ion-card-content>                  \n                                                    <ion-row class="center-align">\n                                                        <ion-col>\n    \n                                                                <h3 class="text text-dark">                        \n                                                                        <!-- Hora: {{trip.startHour}}--> \n                                                                        This trip starts at: 3:00 pm                          \n                                                                    </h3>\n                                                        </ion-col> \n                                                        \n                                                        <ion-col>\n    \n                                                                <h3 class="text text-dark">                        \n                                                                        El pooler está a {{trip.distance | number }} metros de ti.                    \n                                                                    </h3>\n                                                        </ion-col> \n                                                                                    \n                                                        <ion-col center text-center col-4 text-right style="margin-left: auto;">\n                                                            <button class="btn bg-theme rounded full text-white" style="font-size: 1.5rem;" (click)="confirmpopup(reserve)">Join Me</button>\n                                                        </ion-col>\n                                                    </ion-row>\n                                                </ion-card-content>\n    \n                                        </ion-card>\n\n                             </div>\n                            \n                            </div>\n               \n                    \n                </ng-container>\n\n\n        </div>\n        \n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/waypool_costumer/src/pages/p-listride/listride.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_9__services_trips_service__["a" /* TripsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__services_trips_service__["a" /* TripsService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_8__services_reserves_service__["a" /* reservesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__services_reserves_service__["a" /* reservesService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__["AngularFireAuth"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__["AngularFireAuth"]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["AngularFireDatabase"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["AngularFireDatabase"]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_5__services_signup_services__["a" /* SignUpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_signup_services__["a" /* SignUpService */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_4__services_sendCoords_service__["a" /* sendCoordsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_sendCoords_service__["a" /* sendCoordsService */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_6__services_geoFire_service__["a" /* geofireService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_geoFire_service__["a" /* geofireService */]) === "function" && _o || Object, typeof (_p = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]) === "function" && _p || Object])
    ], ListridePage);
    return ListridePage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
}());

//# sourceMappingURL=listride.js.map

/***/ })

});
//# sourceMappingURL=39.js.map