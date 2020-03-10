webpackJsonp([39],{

/***/ 699:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListridePageModule", function() { return ListridePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__listride__ = __webpack_require__(893);
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

/***/ 893:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_geoFire_service__ = __webpack_require__(352);
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
        this.showRoute = false;
        this.showNearby = true;
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
            this.segment = 'nearby';
            this.nearby();
        }
        else if (this.routeTrips.length !== 0 && this.reservesAvailable.length === 0) {
            this.segment = 'route';
            this.route();
        }
        else if (this.routeTrips.length !== 0 && this.reservesAvailable.length !== 0) {
            this.segment = 'nearby';
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
            _this.indexesOfPointsAlongRoute.forEach(function (index) {
                _this.setGeofireRouteOrigin(snapGeoquery.val().geofireRoute, _this.pointsAlongRoute[index].lat, _this.pointsAlongRoute[index].lng, snapGeoquery.val().geofireDest, _this.latDest, _this.lngDest, _this.userUid);
            });
        });
        setTimeout(function () {
            _this.geoquery1.cancel();
            _this.geoquery2.cancel();
            _this.geoqueryRoute.cancel();
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
    ListridePage.prototype.nearby = function () {
        console.log('aqui pongo los que estan cerca');
        this.showRoute = false;
        this.showNearby = true;
    };
    ListridePage.prototype.route = function () {
        console.log('aqui pongo los que estan en ruta');
        this.showNearby = false;
        this.showRoute = true;
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
            //  console.log(key);
            //  keyEnteredOr = true;
            this.geofireOriginConfirmed = true;
            var orRouteConf = false;
            this.keysIdentifiedInOrigin.push({ keyTrip: key, orRouteConf: orRouteConf });
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
        var dbRef = this.afDB.database.ref('/geofireRoute/');
        var geoFire = new __WEBPACK_IMPORTED_MODULE_2_geofire__(dbRef);
        this.geoqueryRoute = geoFire.query({
            center: [lat, lng],
            radius: radiusRoute
        });
        this.keyEnteredRouteOrigin(userId, radiusDest, latDest, lngDest);
        this.keyExitedRouteOrigin(userId);
        console.log('geoquery or added');
    };
    ListridePage.prototype.keyEnteredRouteOrigin = function (userId, radiusDest, latDest, lngDest) {
        this.geoqueryRoute.on("key_entered", function (key, location, distance) {
            var _this = this;
            this.geofireOriginConfirmedOnRoute = true;
            var orRouteConf = true;
            this.afDB.database.ref('/geofireRoute/' + key).once('value').then(function (snap) {
                // quede aqui, para verificar que las key identificadas son iguales
                var keyTrip = snap.val().keyTrip;
                _this.keysIdentifiedInOriginRoute.push({
                    keyTrip: keyTrip,
                    orRouteConf: orRouteConf
                });
            }).then(function () {
                if (_this.geoquery1) {
                }
                else {
                    _this.setGeofireDest(radiusDest, latDest, lngDest, userId);
                }
            });
        }.bind(this));
    };
    ListridePage.prototype.keyExitedRouteOrigin = function (userId) {
        this.geoquery2.on("key_exited", function (key) {
            this.afDB.database.ref('/usersTest/' + userId + '/availableReserves/' + key).remove();
        }.bind(this));
    };
    //geoquery destination
    ListridePage.prototype.setGeofireDest = function (radiusDest, latDest, lngDest, userId) {
        console.log('se prendio geoquery destination, debo salir una sóla vez');
        console.log(this.keysIdentifiedInOrigin);
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
        this.geoquery1.on("key_entered", function (key, location, distance) {
            var _this = this;
            console.log(key);
            this.keysIdentifiedInOrigin.forEach(function (element) {
                if (element.keyTrip === key) {
                    _this.geofireDestinationConfirmed = true;
                    _this.afDB.database.ref('/usersTest/' + userId + '/availableReserves/' + key).update({
                        keyReserve: key,
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
            this.keysIdentifiedInOriginRoute.forEach(function (element) {
                if (element.keyTrip === key) {
                    _this.geofireDestinationConfirmed = true;
                    _this.afDB.database.ref('/usersTest/' + userId + '/availableReserves/' + key).once('value')
                        .then(function (snapshot) {
                        if (snapshot.val()) {
                        }
                        else {
                            _this.afDB.database.ref('/usersTest/' + userId + '/availableReserves/' + key).update({
                                keyReserve: key,
                                onRouteOrigin: true
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
            });
        }.bind(this));
        this.geoquery1.on("ready", function () {
            var _this = this;
            this.afDB.database.ref('allCities/' + this.user.city).once('value').then(function (snap) {
                _this.indexesOfPointsAlongRoute.forEach(function (index) {
                    _this.setGeofireRouteDest(snap.val().geofireRoute, _this.pointsAlongRoute[index].lat, _this.pointsAlongRoute[index].lng, userId);
                });
            });
        }.bind(this));
    };
    ListridePage.prototype.keyExitedDest = function (userId) {
        this.geoquery1.on("key_exited", function (key) {
            this.afDB.database.ref('/usersTest/' + userId + '/availableReserves/' + key).remove();
        }.bind(this));
    };
    //geoquery destination in route
    ListridePage.prototype.setGeofireRouteDest = function (radius, lat, lng, userId) {
        var dbRef = this.afDB.database.ref('/geofireRoute/');
        var geoFire = new __WEBPACK_IMPORTED_MODULE_2_geofire__(dbRef);
        this.geoqueryRoute = geoFire.query({
            center: [lat, lng],
            radius: radius
        });
        this.keyEnteredRouteDest(userId);
        this.keyExitedRouteDest(userId);
    };
    ListridePage.prototype.keyEnteredRouteDest = function (userId) {
        this.geoqueryRoute.on("key_entered", function (key, location, distance) {
            var _this = this;
            this.afDB.database.ref('/geofireRoute/' + key).once('value').then(function (snap) {
                _this.keyTripForGeofireInRouteDest = snap.val().keyTrip;
                _this.driverIdForGeofireInRouteDest = snap.val().driverId;
            }).then(function () {
                _this.keysIdentifiedInOrigin.forEach(function (element) {
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
                                });
                            }
                        });
                    }
                });
                _this.keysIdentifiedInOriginRoute.forEach(function (element) {
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
                                    onRouteOrigin: true
                                });
                            }
                        });
                    }
                });
            });
        }.bind(this));
    };
    ListridePage.prototype.keyExitedRouteDest = function (userId) {
        this.geoquery2.on("key_exited", function (key) {
            this.afDB.database.ref('/usersTest/' + userId + '/availableReserves/' + key).remove();
        }.bind(this));
    };
    ListridePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-listride',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/waypool_costumer/src/pages/p-listride/listride.html"*/'<ion-header class="bg-theme">\n    <ion-navbar >\n\n        <ion-title class="Title">ESCOGE TU COMPAÑERO\n        </ion-title>\n    </ion-navbar>\n\n    <ion-row class="center-align bg-theme flow-ride">\n            <ion-segment [(ngModel)]="segment">\n                    <ion-segment-button value="nearby" (ionSelect)="nearby()">\n                      Cerca de ti\n                      <ion-badge color="danger" *ngIf=\'showNearby\'>{{reservesAvailable.length}}</ion-badge>\n                    </ion-segment-button>\n                    \n                    <ion-segment-button value="route" (ionSelect)="route()">\n                      Pasa por tu ruta\n                      <ion-badge color="danger" *ngIf=\'showRoute\'>{{routeTrips.length}}</ion-badge>\n\n                    </ion-segment-button>\n             </ion-segment>\n    </ion-row>\n    \n</ion-header>\n\n\n<ion-content class="bg-light" class="hideLongText" style="        background-color: rgba(255, 255, 255, 0.959);">\n        \n    \n    <div [ngSwitch]="noReserve" >\n        <div *ngSwitchCase=true >\n                <img src="assets/imgs/noreserveavailable.png">\n                <ion-refresher slot="fixed" (ionRefresh)="doRefresh($event)">\n                    <ion-refresher-content\n                      pullingIcon="arrow-dropdown"\n                      pullingText="Pull to refresh"\n                      refreshingSpinner="circles"\n                      refreshingText="Refreshing...">\n                    </ion-refresher-content>\n                  </ion-refresher>\n        </div>\n        \n\n\n        <div *ngSwitchCase=false>\n\n                <div class="iconHelp">\n                        <ion-icon (click)="help()" name="arrow-dropdown-circle"></ion-icon>\n                \n                    </div>\n                <ng-container>\n                    \n                        <div style="display: flex;flex-direction: column;" *ngIf=\'showRoute\'>\n                                <ion-card *ngFor = "let trip of routeTrips">\n\n                                        <ion-item>\n                                                <ion-avatar item-start>\n                                                    <img  style="height:70px; width: 70px;" src="assets/imgs/carBlue.png">\n                                                </ion-avatar>                   \n                                                <div class="name">                      \n                                                    <h2>{{trip.driver.name| titlecase}} {{trip.driver.lastname| titlecase }} \n                                                        <ion-icon  *ngIf=\'trip.driver.verifiedPerson\' name="ios-checkmark-circle" class="text-theme"></ion-icon>\n                                                        <ion-badge class="bg-yellow" style="margin:0px 3px 13px;"> {{trip.driver.company}}</ion-badge>\n                            \n                                                    </h2>\n                            \n                                                    <p>{{trip.car}}</p> \n                                                    \n                                                </div>\n                                                <div class="more">\n                                                    <h2 class="text text-theme">                        \n                                                        $ {{trip.price}}                         \n                                                    </h2>\n                              \n                                                </div>\n                                            </ion-item>\n                                            <ion-card-content>                  \n                                                <ion-row class="center-align">\n                                                    <ion-col>\n\n                                                            <h3 class="text text-dark">                        \n                                                                    Hora: {{trip.startHour}}                             \n                                                                </h3>\n                                                    </ion-col> \n                                                    \n                                                    <ion-col>\n\n                                                            <h3 class="text text-dark">                        \n                                                                    El pooler está a {{trip.distance | number }} metros de ti.                    \n                                                                </h3>\n                                                    </ion-col> \n                                                                                \n                                                    <ion-col center text-center col-4 text-right style="margin-left: auto;">\n                                                        <button class="btn bg-theme rounded full text-white" style="font-size: 1.5rem;" (click)="confirmpopup(reserve)">Unirme</button>\n                                                    </ion-col>\n                                                </ion-row>\n                                            </ion-card-content>\n\n                                        <!-- <ion-item>\n                                            <ion-avatar item-start>\n                                                <img class="animated infinite pulse" src="assets/imgs/carOrange.png">\n                                            </ion-avatar>\n                                           \n                                            <div class="name">\n                                               \n                                                <h2>{{trip.driver.name| titlecase}} {{trip.driver.lastname| titlecase }}\n                                                    <ion-icon *ngIf=\'trip.driver.verifiedPerson\' name="ios-checkmark-circle" class="text-hot"></ion-icon>\n                                                    <ion-badge class="bg-yellow" style="margin:0px 3px 13px;"> {{trip.driver.company}}</ion-badge>\n                                                </h2>\n                                                <p>{{trip.car}}</p>\n                                                \n                        \n                                            </div>\n                                            <div class="more">\n                                                <h2 class="text text-hot">                        \n                                                 $ {{trip.price}}                          \n                                                </h2>\n                                               \n                                            </div>\n                                        </ion-item>\n                                        <ion-card-content >\n                                          \n                                            <ion-row class="center-align">  \n                                                <ion-col center text-center col-6 text-right style="margin-left: auto;">\n                                                        <h2 class="text text-hot animated infinite pulse">                        \n                                                                Viaje en curso                         \n                                                             </h2>  \n                                                                       \n                                                </ion-col>                \n                                                \n                                                <ion-col center text-center col-4 text-right style="margin-left: auto;">\n                                                    <button class="btn bg-hot rounded full text-white" (click)="enterTrip(trip)"style="font-size: 1.5rem;">Unirme</button>\n                                                        </ion-col>\n                                            </ion-row>\n                                        </ion-card-content> -->\n                                    </ion-card>\n                        </div>\n        \n                    <div style="display: flex;flex-direction: column;width: 96%;" *ngIf=\'showNearby\'>\n                            <ion-card *ngFor = "let reserve of reservesAvailable">\n                                    <ion-item>\n                                        <ion-avatar item-start>\n                                            <img  style="height:70px; width: 70px;" src="assets/imgs/carBlue.png">\n                                        </ion-avatar>                   \n                                        <div class="name">                      \n                                            <h2>{{reserve.driver.name| titlecase}} {{reserve.driver.lastname| titlecase }} \n                                                <ion-icon  *ngIf=\'reserve.driver.verifiedPerson\' name="ios-checkmark-circle" class="text-theme"></ion-icon>\n                                                <ion-badge class="bg-yellow" style="margin:0px 3px 13px;"> {{reserve.driver.company}}</ion-badge>\n                    \n                                            </h2>\n                    \n                                            <p>{{reserve.car}}</p> \n                                            \n                                        </div>\n                                        <div class="more">\n                                            <h2 class="text text-theme">                        \n                                                $ {{reserve.price}}                         \n                                            </h2>\n                      \n                                        </div>\n                                    </ion-item>\n                                    <ion-card-content>                  \n                                        <ion-row class="center-align">  \n                                                    <h2 class="text text-dark">                        \n                                                        Hora: {{reserve.startHour}}                             \n                                                    </h2>                    \n                                            <ion-col center text-center col-4 text-right style="margin-left: auto;">\n                                                <button class="btn bg-theme rounded full text-white" style="font-size: 1.5rem;" (click)="confirmpopup(reserve)">Unirme</button>\n                                            </ion-col>\n                                        </ion-row>\n                                    </ion-card-content>\n                                </ion-card>\n                            </div>\n               \n                    \n                </ng-container>\n\n\n        </div>\n        \n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/waypool_costumer/src/pages/p-listride/listride.html"*/
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