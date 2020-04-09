webpackJsonp([40],{

/***/ 706:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListridePageModule", function() { return ListridePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__listride__ = __webpack_require__(903);
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

/***/ 903:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListridePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_geofire__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_geofire___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_geofire__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_sendCoords_service__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_signup_services__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_geoFire_service__ = __webpack_require__(355);
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
        this.crewsAvailable = [];
        this.routeTrips = [];
        this.routeCrews = [];
        this.userUid = this.AngularFireAuth.auth.currentUser.uid;
        this.ReservesGeofire = [];
        this.CrewsGeofire = [];
        this.tripsReserved = [];
        this.unsubscribe = new __WEBPACK_IMPORTED_MODULE_10_rxjs__["Subject"];
        this.pendingUsers = [];
        this.noReserve = false;
        this.noCrew = false;
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
        this.showNearbyCrew = true;
        this.showRouteCrew = false;
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
        this.nameOr = this.navParams.get('nameOr');
        this.nameDest = this.navParams.get('nameDest');
        this.pointsAlongRoute = this.navParams.get('pointsAlongRoute');
        this.indexesOfPointsAlongRoute = this.navParams.get('indexesOfPointsAlongRoute');
        this.orCoords = ({
            lat: this.latOr,
            lng: this.lngOr
        });
        this.destCoords = ({
            lat: this.latDest,
            lng: this.lngDest
        });
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
        this.reservesService.getCrews(this.userUid).takeUntil(this.unsubscribe)
            .subscribe(function (crews) {
            // this.initiatedTrips = [];
            _this.CrewsGeofire = crews;
            console.log(_this.CrewsGeofire);
            if (_this.CrewsGeofire.length === 0) {
                //there are no reserves to show
                _this.noCrew = true;
            }
            else {
                //there are reserves
                _this.noCrew = false;
            }
            // this.presentLoadingCustom(this.ReservesGeofire);
            _this.getAvailableCrews();
        });
        this.reservesService.getSeenReservesInAvailableReserves(this.userUid).subscribe(function (reserve) {
            _this.reservesAvailable = reserve;
            console.log(_this.reservesAvailable);
        });
        this.reservesService.getSeenReservesInAvailableReservesRoute(this.userUid).subscribe(function (reserve) {
            _this.routeTrips = reserve;
            console.log(_this.routeTrips);
            // this.getButtonStarter()
        });
        this.reservesService.getSeenCrewsInAvailableCrews(this.userUid).subscribe(function (crew) {
            _this.crewsAvailable = crew;
            console.log(_this.crewsAvailable);
        });
        this.reservesService.getSeenCrewsInAvailableCrewsRoute(this.userUid).subscribe(function (crew) {
            _this.routeCrews = crew;
            console.log(_this.routeCrews);
            // this.getButtonStarter()
        });
        this.loading.dismiss();
    }
    // getButtonStarter(){
    //   if(this.reservesAvailable.length !== 0 && this.routeTrips.length === 0){
    //     this.segment = 'carpool';
    //     this.segmentCarpool = 'nearby'
    //     this.carpool();
    //     this.nearby();
    //   }else if(this.routeTrips.length !== 0 && this.reservesAvailable.length === 0){
    //     this.segment = 'carpool';
    //     this.segmentCarpool = 'route'
    //     this.carpool();
    //     this.route();
    //   }else if(this.routeTrips.length !== 0 && this.reservesAvailable.length !== 0){
    //     this.segment = 'carpool';
    //     this.segmentCarpool = 'nearby'
    //     this.carpool();
    //     this.nearby();
    //   }
    //     this.loading.dismiss();
    // }
    ListridePage.prototype.ionViewDidLeave = function () {
        this.unSubscribeServices();
        console.log("me active");
        this.TripsService.eliminateAvailableUsers(this.userUid);
        this.TripsService.eliminateSeenAvailableReserves(this.userUid);
        this.TripsService.eliminateSeenAvailableReservesRoute(this.userUid);
        this.TripsService.eliminateAvailableCrews(this.userUid);
        this.TripsService.eliminateSeenAvailableCrews(this.userUid);
        this.TripsService.eliminateSeenAvailableCrewsRoute(this.userUid);
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
                var alert_1 = _this.alertCtrl.create({
                    title: 'No hay nuevos poolers compartiendo sus viajes',
                    subTitle: 'Intenta más tarde',
                    buttons: ['OK']
                });
                alert_1.present();
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
    ListridePage.prototype.getAvailableCrews = function () {
        var _this = this;
        //bring crews that i have entered to hide them in listride
        // this.reservesAvailable = [];
        //after getting crew id and adminId from my own user node, we used them to access the crew information in the node crews
        console.log(this.CrewsGeofire);
        this.CrewsGeofire.forEach(function (crewGeofire) {
            if (crewGeofire.onRouteDestination == true || crewGeofire.onRouteOrigin == true) {
                _this.afDB.database.ref('/crewsTest/' + crewGeofire.adminId + '/' + crewGeofire.crewId).once('value').then(function (snapCrewRoute) {
                    var obj = snapCrewRoute.val();
                    _this.afDB.database.ref('/usersTest/' + _this.userUid + '/crewsSeenInAvailableCrewsRoute/').remove().then(function () {
                        if (crewGeofire.adminId === _this.userUid) {
                            console.log('yo te cree');
                        }
                        else {
                            _this.afDB.database.ref('/usersTest/' + _this.userUid + '/crewsSeenInAvailableCrewsRoute/' + crewGeofire.crewId).update(obj)
                                .then(function () {
                                _this.afDB.database.ref('/usersTest/' + _this.userUid + '/crewsSeenInAvailableCrewsRoute/' + crewGeofire.crewId).update({ distance: (crewGeofire.distance * 1000) });
                            });
                        }
                    });
                });
            }
            else {
                _this.afDB.database.ref('/crewsTest/' + crewGeofire.adminId + '/' + crewGeofire.crewId).once('value').then(function (snapCrew) {
                    var obj = snapCrew.val();
                    console.log(obj);
                    _this.afDB.database.ref('/usersTest/' + _this.userUid + '/crewsSeenInAvailableCrews/').remove().then(function () {
                        if (crewGeofire.adminId === _this.userUid) {
                            console.log('yo te cree');
                        }
                        else {
                            _this.afDB.database.ref('/usersTest/' + _this.userUid + '/crewsSeenInAvailableCrews/' + crewGeofire.crewId).update(obj)
                                .then(function () {
                                _this.afDB.database.ref('/usersTest/' + _this.userUid + '/crewsSeenInAvailableCrews/' + crewGeofire.crewId).update({ distance: (crewGeofire.distance * 1000) });
                            });
                        }
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
    ListridePage.prototype.nearbyCrew = function () {
        this.showRouteCrew = false;
        this.showNearbyCrew = true;
    };
    ListridePage.prototype.routeCrew = function () {
        this.showNearbyCrew = false;
        this.showRouteCrew = true;
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
            var modal = this.modalCtrl.create('ConfirmpopupPage', { reserve: reserve, orCoords: this.orCoords, destCoords: this.destCoords });
            modal.onDidDismiss(function (accepted) {
                if (accepted) {
                    _this.unSubscribeServices();
                    _this.navCtrl.pop();
                    _this.TripsService.eliminateAvailableUsers(_this.userUid);
                    _this.TripsService.eliminateSeenAvailableReserves(_this.userUid);
                    _this.TripsService.eliminateSeenAvailableReservesRoute(_this.userUid);
                    _this.TripsService.eliminateAvailableCrews(_this.userUid);
                    _this.TripsService.eliminateSeenAvailableCrews(_this.userUid);
                    _this.TripsService.eliminateSeenAvailableCrewsRoute(_this.userUid);
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
            var modal = this.modalCtrl.create('ConfirmpopupPage', { reserve: reserve, orCoords: this.orCoords, destCoords: this.destCoords });
            modal.onDidDismiss(function (accepted) {
                if (accepted) {
                    _this.unSubscribeServices();
                    _this.navCtrl.pop();
                    _this.TripsService.eliminateAvailableUsers(_this.userUid);
                    _this.TripsService.eliminateSeenAvailableReserves(_this.userUid);
                    _this.TripsService.eliminateSeenAvailableReservesRoute(_this.userUid);
                    _this.TripsService.eliminateAvailableCrews(_this.userUid);
                    _this.TripsService.eliminateSeenAvailableCrews(_this.userUid);
                    _this.TripsService.eliminateSeenAvailableCrewsRoute(_this.userUid);
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
                _this.TripsService.eliminateAvailableCrews(_this.userUid);
                _this.TripsService.eliminateSeenAvailableCrews(_this.userUid);
                _this.TripsService.eliminateSeenAvailableCrewsRoute(_this.userUid);
                // this.TripsService.eliminateSeenAvailableReservesLMU(this.SignUpService.userPlace,this.userUid)
                _this.navCtrl.push('MyridePage');
            }
        });
        modal.present();
        //IMPORTANTE QUE AL FINAL SE LE COLOQUE QUE SE QUITE CUANDO ACEPTE A ALGUIEN
    };
    ListridePage.prototype.createGroup = function () {
        this.locationOriginUser = ({
            lat: this.latOr,
            lng: this.lngOr
        });
        this.locationDestinationUser = ({
            lat: this.latDest,
            lng: this.lngDest
        });
        var modal = this.modalCtrl.create('CreateGroupPage', { origin: this.locationOriginUser, destination: this.locationDestinationUser, indexesOfPointsAlongRoute: this.indexesOfPointsAlongRoute, pointsAlongRoute: this.pointsAlongRoute });
        modal.present();
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
    ListridePage.prototype.joinCrew = function (crew) {
        var _this = this;
        var userToCrew = {
            city: this.user.city,
            company: this.user.company,
            email: this.user.email,
            name: this.user.name,
            lastname: this.user.lastname,
            phone: this.user.phone,
            userId: this.user.userId,
            verifiedPerson: this.user.verifiedPerson,
            origin: {
                name: this.nameOr,
                coords: {
                    lat: this.latOr,
                    lng: this.lngOr
                }
            },
            destination: {
                name: this.nameDest,
                coords: {
                    lat: this.latDest,
                    lng: this.lngDest
                }
            }
        };
        this.afDB.database.ref('/crewsTest/' + crew.admin.userId + '/' + crew.crewId + '/members').push(userToCrew)
            .then(function (snap) {
            var keyPushCrew = snap.key;
            _this.afDB.database.ref('/usersTest/' + _this.userUid + '/crewsInside/' + keyPushCrew)
                .update({
                adminId: crew.admin.userId,
                crewId: crew.crewId
            }).then(function () {
                var alert = _this.alertCtrl.create({
                    title: 'Bienvenido a este grupo!!',
                    subTitle: 'Mira los detalles del grupo en "Mis Viajes"',
                    buttons: ['OK']
                });
                alert.present();
            });
        });
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
            selector: 'page-listride',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/waypool_costumer/src/pages/p-listride/listride.html"*/'<ion-header class="bg-theme">\n    <ion-navbar >\n\n        <ion-title class="Title">PICK YOUR CREW\n        </ion-title>\n    </ion-navbar>\n\n    <ion-row class="center-align bg-theme flow-ride">\n            <ion-segment [(ngModel)]="segment">\n                    <ion-segment-button value="carpool" (ionSelect)="carpool()">\n                      Waypool drivers\n                      <ion-badge color="danger" *ngIf=\'showCarpool\'>{{reservesAvailable.length + routeTrips.length}}</ion-badge>\n                    </ion-segment-button>\n                    \n                    <ion-segment-button value="crew" (ionSelect)="crew()">\n                      Set up you Crew\n\n                    </ion-segment-button>\n             </ion-segment>\n    </ion-row>\n    \n</ion-header>\n\n <!-- <div [ngSwitch]="ride">\n            <ng-container *ngSwitchCase="\'driver\'">\n    <ion-card >\n        <ion-item>\n            <ion-avatar item-start>\n                <img style="height:70px; width: 70px;" src="assets/imgs/carBlue.png">\n            </ion-avatar>\n            <div class="name">\n                <h2>Daniel Altamar\n                    <ion-icon  name="ios-checkmark-circle" class="text-theme"></ion-icon>\n                    <ion-badge class="bg-yellow" style="margin:0px 3px 13px;"> Bancolombia</ion-badge> -->\n\n<ion-content class="bg-light" class="hideLongText" style="        background-color: rgba(255, 255, 255, 0.959);">\n        \n   <!-- MOSTRAR OPCIONES GRUPOS  -->\n\n                <ng-container *ngIf=\'showCrew\'>\n                        \n                            <div [ngSwitch]="noCrew">\n\n                                    <div *ngSwitchCase=true >\n                                        <div style="display: flex; justify-content: center; margin-top: 15px;">  \n                                            <button class="btn bg-theme rounded full text-white" style="font-size: 1.5rem;" (click)="createGroup()">Crear grupo</button>\n                                      </div>\n\n                                            <img src="assets/imgs/noreserveavailable.png">\n                                            <!-- <ion-refresher slot="fixed" (ionRefresh)="doRefresh($event)">\n                                                <ion-refresher-content\n                                                  pullingIcon="arrow-dropdown"\n                                                  pullingText="Pull to refresh"\n                                                  refreshingSpinner="circles"\n                                                  refreshingText="Refreshing...">\n                                                </ion-refresher-content>\n                                              </ion-refresher> -->\n                                    </div>\n    \n                                    <div *ngSwitchCase=false>\n    \n                        \n                                                <div style="display: flex; justify-content: center; margin-top: 15px;">  \n                                                    <button class="btn bg-theme rounded full text-white" style="font-size: 1.5rem;" (click)="createGroup()">Crear grupo</button>\n                                              </div>\n                        \n                                              <H2 style="margin-left: 12px;"> Grupos disponibles</H2>\n                        \n                                                        <ion-row class="center-align bg-theme flow-ride">\n                                                                <ion-segment [(ngModel)]="segmentCrew" class="bg-theme-driver">\n                                                                        <ion-segment-button value="nearbyCrew" (ionSelect)="nearbyCrew()">\n                                                                          nearby\n                                                                          <!-- <ion-badge color="danger" *ngIf=\'showNearby\'>{{reservesAvailable.length}}</ion-badge> -->\n                                                                        </ion-segment-button>\n                                                                        \n                                                                        <ion-segment-button value="routeCrew" (ionSelect)="routeCrew()">\n                                                                          on your route\n                                                                          <!-- <ion-badge color="danger" *ngIf=\'showRoute\'>{{routeTrips.length}}</ion-badge> -->\n                                                    \n                                                                        </ion-segment-button>\n                                                                 </ion-segment>\n                        \n                                                        </ion-row>\n    \n                                                        <div  *ngIf=\'showNearbyCrew\'>\n                                                            <ion-card *ngFor = "let crew of crewsAvailable">\n                                                               <ion-item>\n                                                                   <ion-avatar item-start>\n                                                                       <img style="height:70px; width: 70px;" src="assets/imgs/carOrange.png">\n                                                                   </ion-avatar>\n                                                                   <div class="name">\n                                                                       <h2 style="font-size:1.8rem;">3 miembros\n                                                                           <ion-icon  name="ios-checkmark-circle" class="text-theme"></ion-icon>\n                                                                       </h2>\n                                                       \n                                                       \n                                                                   </div>\n                                                                   \n                                                               </ion-item>\n                                                               <ion-card-content>\n                                                                   <ion-row class="center-align">\n                                                                       <h2 class="text text-dark">\n                                                                           Hora: {{crew.startHour}}\n                                                                       </h2>\n                                                                       <ion-col center text-center col-4 text-right style="margin-left: auto;">\n                                                                           <button class="btn bg-theme rounded full text-white" style="font-size: 1.5rem;" (click)="joinCrew(crew)">Unirme</button>\n                                                                       </ion-col>\n                                                                   </ion-row>\n                                                               </ion-card-content>\n                                                           </ion-card>\n                                        \n                            \n                                                         </div>\n\n\n    \n                                                         <div  *ngIf= \'showRouteCrew\'>\n                                                            \n                                                            <ion-card *ngFor = "let crew of routeCrews">\n                                                                <ion-item>\n                                                                    <ion-avatar item-start>\n                                                                        <img style="height:70px; width: 70px;" src="assets/imgs/carOrange.png">\n                                                                    </ion-avatar>\n                                                                    <div class="name">\n                                                                        <h2 style="font-size:1.8rem;">3 miembros\n                                                                            <ion-icon  name="ios-checkmark-circle" class="text-theme"></ion-icon>\n                                                                        </h2>\n                                                        \n                                                        \n                                                                    </div>\n                                                                    \n                                                                </ion-item>\n                                                                <ion-card-content>\n                                                                    <ion-row class="center-align">\n                                                                        <h2 class="text text-dark">\n                                                                            Hora: {{crew.startHour}}\n                                                                        </h2>\n                                                                        <ion-col center text-center col-4 text-right style="margin-left: auto;">\n                                                                            <button class="btn bg-theme rounded full text-white" style="font-size: 1.5rem;" (click)="joinCrew(crew)">Unirme</button>\n                                                                        </ion-col>\n                                                                    </ion-row>\n                                                                </ion-card-content>\n                                                            </ion-card>\n                            \n                                                </div>\n                                    </div>\n                            </div>                \n                 </ng-container>\n\n\n                <!-- MOSTRAR OPCIONES CARPOOLING  -->\n\n                 <ng-container *ngIf=\'showCarpool\'>\n           \n                            <div [ngSwitch]="noReserve" >\n\n                                    <div *ngSwitchCase=true >\n                                            <img src="assets/imgs/noreserveavailable.png">\n                                            <ion-refresher slot="fixed" (ionRefresh)="doRefresh($event)">\n                                                <ion-refresher-content\n                                                  pullingIcon="arrow-dropdown"\n                                                  pullingText="Pull to refresh"\n                                                  refreshingSpinner="circles"\n                                                  refreshingText="Refreshing...">\n                                                </ion-refresher-content>\n                                              </ion-refresher>\n                                    </div>\n    \n                                    <div *ngSwitchCase=false >\n    \n                                            <div style="display: flex;flex-direction: column;width: 96%;">\n    \n                                                    <ion-row class="center-align bg-theme flow-ride">\n                            \n                                                            <ion-segment [(ngModel)]="segmentCarpool" class="bg-theme-driver">\n                                                                    <ion-segment-button value="nearby" (ionSelect)="nearby()">\n                                                                      nearby\n                                                                      <!-- <ion-badge color="danger" *ngIf=\'showNearby\'>{{reservesAvailable.length}}</ion-badge> -->\n                                                                    </ion-segment-button>\n                                                                    \n                                                                    <ion-segment-button value="route" (ionSelect)="route()">\n                                                                      on your route\n                                                                      <!-- <ion-badge color="danger" *ngIf=\'showRoute\'>{{routeTrips.length}}</ion-badge> -->\n                                                \n                                                                    </ion-segment-button>\n                                                             </ion-segment>\n                                                             \n                                                    </ion-row>\n                                              \n                            \n                                                         <div style="display: flex;flex-direction: column;" *ngIf=\'showNearby\'>\n                                                                    <ion-card *ngFor = "let reserve of reservesAvailable">\n                                                                        <ion-item>\n                                                                            <ion-avatar item-start>\n                                                                                <img style="height:70px; width: 70px;" src="assets/imgs/carBlue.png">\n                                                                            </ion-avatar>\n                                                                            <div class="name">\n                                                                                <h2>{{reserve.driver.name| titlecase}} {{reserve.driver.lastname| titlecase }}\n                                                                                    <ion-icon *ngIf=\'reserve.driver.verifiedPerson\' name="ios-checkmark-circle" class="text-theme"></ion-icon>\n                                                                                    <ion-badge class="bg-yellow" style="margin:0px 3px 13px;">  {{reserve.driver.company}}</ion-badge>\n                                                                \n                                                                                </h2>\n                                                                \n                                                                                <p>{{reserve.car}}</p>\n                                                                \n                                                                            </div>\n                                                                            <div class="more">\n                                                                                <h2 class="text text-theme">\n                                                                                    $ {{reserve.price}}\n                                                                                </h2>\n                                                                \n                                                                            </div>\n                                                                        </ion-item>\n                                                                        <ion-card-content>\n                                                                            <ion-row class="center-align">\n                                                                                <h2 class="text text-dark">\n                                                                                    Hora: {{reserve.startHour}} \n                                                                                </h2>\n                                                                                <ion-col center text-center col-4 text-right style="margin-left: auto;">\n                                                                                    <button class="btn bg-theme rounded full text-white" style="font-size: 1.5rem;" (click)="confirmpopup(reserve)">Unirme</button>\n                                                                                </ion-col>\n                                                                            </ion-row>\n                                                                        </ion-card-content>\n                                                                    </ion-card>\n                                                                \n     \n                                                         </div>\n                            \n                                                         <div style="display: flex;flex-direction: column;" *ngIf= \'showRoute\'>\n                                                                    <ion-card *ngFor = "let trip of routeTrips">\n                                                                        <ion-item>\n                                                                            <ion-avatar item-start>\n                                                                                <img style="height:70px; width: 70px;" src="assets/imgs/carBlue.png">\n                                                                            </ion-avatar>\n                                                                            <div class="name">\n                                                                                <h2>{{trip.driver.name| titlecase}} {{trip.driver.lastname| titlecase }}\n                                                                                    <ion-icon *ngIf=\'trip.driver.verifiedPerson\' name="ios-checkmark-circle" class="text-theme"></ion-icon>\n                                                                                    <ion-badge class="bg-yellow" style="margin:0px 3px 13px;">  {{trip.driver.company}}</ion-badge>\n                                                                \n                                                                                </h2>\n                                                                \n                                                                                <p>{{trip.car}}</p>\n                                                                \n                                                                            </div>\n                                                                            <div class="more">\n                                                                                <h2 class="text text-theme">\n                                                                                    $ {{trip.price}}\n                                                                                </h2>\n                                                                \n                                                                            </div>\n                                                                        </ion-item>\n                                                                        <ion-card-content>\n                                                                            <ion-row class="center-align">\n                                                                                <h2 class="text text-dark">\n                                                                                    Hora: {{trip.startHour}}\n                                                                                </h2>\n                                                                                <ion-col>\n                                \n                                                                                    <h3 class="text text-dark">                        \n                                                                                            Distancia de ti: {{trip.distance | number }}                    \n                                                                                        </h3>\n                                                                            </ion-col> \n                                                                                <ion-col center text-center col-4 text-right style="margin-left: auto;">\n                                                                                    <button class="btn bg-theme rounded full text-white" style="font-size: 1.5rem;" (click)="confirmpopup(reserve)">Unirme</button>\n                                                                                </ion-col>\n                                                                            </ion-row>\n                                                                        </ion-card-content>\n                                                                    </ion-card>\n                            \n                                                         </div>\n                                                        \n                                                        </div>\n    \n                                    </div>\n                            </div>\n         </ng-container>\n\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/waypool_costumer/src/pages/p-listride/listride.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_9__services_trips_service__["a" /* TripsService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */], __WEBPACK_IMPORTED_MODULE_8__services_reserves_service__["a" /* reservesService */], __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_5__services_signup_services__["a" /* SignUpService */], __WEBPACK_IMPORTED_MODULE_4__services_sendCoords_service__["a" /* sendCoordsService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */], __WEBPACK_IMPORTED_MODULE_6__services_geoFire_service__["a" /* geofireService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], ListridePage);
    return ListridePage;
}());

//# sourceMappingURL=listride.js.map

/***/ })

});
//# sourceMappingURL=40.js.map