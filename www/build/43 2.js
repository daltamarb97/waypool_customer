webpackJsonp([43],{

/***/ 703:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCrewPageModule", function() { return CreateCrewPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__createcrew__ = __webpack_require__(902);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CreateCrewPageModule = /** @class */ (function () {
    function CreateCrewPageModule() {
    }
    CreateCrewPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__createcrew__["a" /* CreateCrewPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__createcrew__["a" /* CreateCrewPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__createcrew__["a" /* CreateCrewPage */]
            ]
        })
    ], CreateCrewPageModule);
    return CreateCrewPageModule;
}());

//# sourceMappingURL=createcrew.module.js.map

/***/ }),

/***/ 902:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateCrewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_signup_services__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_sendCoords_service__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_sendUsers_service__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_geoFire_service__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_instances_service__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_d_geofire_services__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_geofire__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_geofire___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_geofire__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var CreateCrewPage = /** @class */ (function () {
    function CreateCrewPage(loadingCtrl, navCtrl, sendUsersService, toastCtrl, viewCtrl, afDB, SignUpService, sendCoordsService, navParams, AngularFireAuth, geoFireService, instances, alertCtrl, geofireServicesDr) {
        var _this = this;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.sendUsersService = sendUsersService;
        this.toastCtrl = toastCtrl;
        this.viewCtrl = viewCtrl;
        this.afDB = afDB;
        this.SignUpService = SignUpService;
        this.sendCoordsService = sendCoordsService;
        this.navParams = navParams;
        this.AngularFireAuth = AngularFireAuth;
        this.geoFireService = geoFireService;
        this.instances = instances;
        this.alertCtrl = alertCtrl;
        this.geofireServicesDr = geofireServicesDr;
        this.admin = {};
        this.pointsAlongRoute = [];
        this.indexesOfPointsAlongRoute = [];
        this.count = 0;
        this.keysIdentifiedInOrigin = [];
        this.keysIdentifiedInOriginRoute = [];
        this.userId = this.AngularFireAuth.auth.currentUser.uid;
        // Getting info for creating crew in DB
        this.afDB.database.ref('/usersTest/' + this.userId).once('value').then(function (snap) {
            if (snap.val()) {
                _this.admin = {
                    city: snap.val().city,
                    company: snap.val().company,
                    name: snap.val().name,
                    lastname: snap.val().lastname,
                    phone: snap.val().phone,
                    userId: snap.val().userId,
                    verifiedPerson: snap.val().verifiedPerson,
                };
                _this.origin = snap.val().trips.origin[0];
                _this.destination = snap.val().trips.destination[0];
                _this.city = snap.val().city;
            }
        });
        var origin = this.navParams.get('origin');
        var destination = this.navParams.get('destination');
        this.latOr = origin.lat;
        this.lngOr = origin.lng;
        this.latDest = destination.lat;
        this.lngDest = destination.lng;
        this.pointsAlongRoute = this.navParams.get('pointsAlongRoute');
        this.indexesOfPointsAlongRoute = this.navParams.get('indexesOfPointsAlongRoute');
    }
    CreateCrewPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    CreateCrewPage.prototype.setCrew = function () {
        var _this = this;
        if (this.startHour === undefined) {
            var alert = this.alertCtrl.create({
                title: 'Por favor confirma la hora a la que iniciaría este viaje',
                buttons: ['OK']
            });
            alert.present();
        }
        else {
            this.afDB.database.ref('/crewsTest/' + this.userId).push({
                admin: this.admin,
                startHour: this.startHour,
                destination: {
                    name: this.destination,
                    coords: {
                        lat: this.latDest,
                        lng: this.lngDest
                    }
                },
                origin: {
                    name: this.origin,
                    coords: {
                        lat: this.latOr,
                        lng: this.lngOr
                    }
                },
            }).then(function (snap) {
                _this.Key_Crew = snap.key;
                _this.afDB.database.ref('/crewsTest/' + _this.userId + '/' + _this.Key_Crew).update({
                    crewId: _this.Key_Crew
                }).then(function () {
                    _this.geofireServicesDr.setGeofireOrCrew(_this.Key_Crew, _this.latOr, _this.lngOr);
                    _this.afDB.database.ref('/geofireOrCrew/' + _this.Key_Crew).update({
                        adminId: _this.userId
                    });
                    console.log('executed geofire Or for crews');
                    _this.geofireServicesDr.setGeofireDestCrew(_this.Key_Crew, _this.latDest, _this.lngDest);
                    _this.afDB.database.ref('/geofireDestCrew/' + _this.Key_Crew).update({
                        adminId: _this.userId
                    });
                    console.log('executed geofire dest');
                    _this.indexesOfPointsAlongRoute.forEach(function (index) {
                        _this.count++;
                        var newKey = _this.Key_Crew.concat(_this.count);
                        _this.geofireServicesDr.setGeofireRouteCrew(newKey, _this.pointsAlongRoute[index].lat, _this.pointsAlongRoute[index].lng);
                        _this.afDB.database.ref('/geofireRouteCrew/' + newKey).update({
                            adminId: _this.userId,
                            crewId: _this.Key_Crew
                        });
                    });
                });
            }).then(function () {
                _this.afDB.database.ref('allCities/' + _this.city).once('value').then(function (snapGeoquery) {
                    _this.loading = _this.loadingCtrl.create({
                        spinner: 'bubbles',
                        content: "\n              <div class=\"custom-spinner-container\">\n                <div class=\"custom-spinner-box\"></div>\n              </div>"
                    });
                    _this.setGeofireOr(snapGeoquery.val().geofireOrNotificationsCrew, _this.latOr, _this.lngOr, _this.userId, snapGeoquery.val().geofireDestNotificationsCrew, _this.latDest, _this.lngDest);
                    _this.setGeofireRouteOrigin(snapGeoquery.val().geofireRouteCrew, _this.latOr, _this.lngOr, snapGeoquery.val().geofireDestNotificationsCrew, _this.latDest, _this.lngDest, _this.userId);
                });
            });
        }
    };
    // GEOFIRE LOGIC FOR LET DRIVERS KNOW THERE IS A NEW GRUOP
    //geoquery origin
    CreateCrewPage.prototype.setGeofireOr = function (radiusOr, latOr, lngOr, userId, radiusDest, latDest, lngDest) {
        var dbRef = this.afDB.database.ref('/geofireOr/');
        var geoFire = new __WEBPACK_IMPORTED_MODULE_10_geofire__(dbRef);
        this.geoquery2 = geoFire.query({
            center: [latOr, lngOr],
            radius: radiusOr
        });
        this.keyEnteredOr(radiusDest, latDest, lngDest, userId);
        console.log('geoquery or added');
    };
    CreateCrewPage.prototype.keyEnteredOr = function (radiusDest, latDest, lngDest, userId) {
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
    //geoquery origin in route
    CreateCrewPage.prototype.setGeofireRouteOrigin = function (radiusRoute, lat, lng, radiusDest, latDest, lngDest, userId) {
        // console.log(this.geoquriesRouteOrigin);
        var dbRef = this.afDB.database.ref('/geofireRoute/');
        var geoFire = new __WEBPACK_IMPORTED_MODULE_10_geofire__(dbRef);
        this.geoqueryRouteOrigin = geoFire.query({
            center: [lat, lng],
            radius: radiusRoute
        });
        this.keyEnteredRouteOrigin(userId, radiusDest, latDest, lngDest);
    };
    CreateCrewPage.prototype.keyEnteredRouteOrigin = function (userId, radiusDest, latDest, lngDest) {
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
    //geoquery destination
    CreateCrewPage.prototype.setGeofireDest = function (radiusDest, latDest, lngDest, userId) {
        console.log('se prendio geoquery destination, debo salir una sóla vez');
        var dbRef = this.afDB.database.ref('/geofireDest/');
        var geoFire = new __WEBPACK_IMPORTED_MODULE_10_geofire__(dbRef);
        this.geoquery1 = geoFire.query({
            center: [latDest, lngDest],
            radius: radiusDest
        });
        this.keyEnteredDest(userId);
        console.log('geoquery dest added');
    };
    CreateCrewPage.prototype.keyEnteredDest = function (userId) {
        var _this = this;
        this.geoquery1.on("key_entered", function (key, location, distance) {
            var _this = this;
            console.log(key);
            if (this.keysIdentifiedInOrigin.length !== 0) {
                var count = 0;
                var _loop_1 = function (element) {
                    count = count + 1;
                    if (element.keyTrip === key) {
                        this_1.geofireDestinationConfirmed = true;
                        return { value: this_1.afDB.database.ref('/geofireDest/' + key).once('value').then(function (snap) {
                                _this.driverOnNodeDest = snap.val();
                                _this.afDB.database.ref('/driversTest/' + _this.driverOnNodeDest.driverId + '/matchingCrews/' + key).update({
                                    crewId: _this.Key_Crew,
                                    adminId: userId,
                                    distance: element.distance,
                                    orRouteConf: element.orRouteConf
                                });
                            }) };
                    }
                    if (count === this_1.keysIdentifiedInOrigin.length) {
                        console.log('si se ejecuto el for de keysOrigin');
                        var _loop_2 = function (element_1) {
                            if (element_1.keyTrip === key) {
                                console.log('un key de destination es igual al keytrip que fue identificado en origen');
                                this_1.geofireDestinationConfirmed = true;
                                return { value: this_1.afDB.database.ref('/geofireDest/' + key).once('value').then(function (snap) {
                                        _this.driverOnNodeDest = snap.val();
                                        _this.afDB.database.ref('/driversTest/' + _this.driverOnNodeDest.driverId + '/matchingCrews/' + key).update({
                                            crewId: _this.Key_Crew,
                                            adminId: userId,
                                            distance: element_1.distance,
                                            orRouteConf: element_1.orRouteConf
                                        });
                                    }) };
                            }
                        };
                        for (var _i = 0, _a = this_1.keysIdentifiedInOriginRoute; _i < _a.length; _i++) {
                            var element_1 = _a[_i];
                            var state_1 = _loop_2(element_1);
                            if (typeof state_1 === "object")
                                return state_1;
                        }
                    }
                };
                var this_1 = this;
                for (var _i = 0, _a = this.keysIdentifiedInOrigin; _i < _a.length; _i++) {
                    var element = _a[_i];
                    var state_2 = _loop_1(element);
                    if (typeof state_2 === "object")
                        return state_2.value;
                }
            }
            else if (this.keysIdentifiedInOriginRoute.length !== 0) {
                var _loop_3 = function (element) {
                    if (element.keyTrip === key) {
                        console.log('un key de destination es igual al keytrip que fue identificado en origen');
                        this_2.geofireDestinationConfirmed = true;
                        return { value: this_2.afDB.database.ref('/geofireDest/' + key).once('value').then(function (snap) {
                                _this.driverOnNodeDest = snap.val();
                                _this.afDB.database.ref('/driversTest/' + _this.driverOnNodeDest.driverId + '/matchingCrews/' + key).update({
                                    crewId: _this.Key_Crew,
                                    adminId: userId,
                                    distance: element.distance,
                                    orRouteConf: element.orRouteConf
                                });
                            }) };
                    }
                };
                var this_2 = this;
                for (var _b = 0, _c = this.keysIdentifiedInOriginRoute; _b < _c.length; _b++) {
                    var element = _c[_b];
                    var state_3 = _loop_3(element);
                    if (typeof state_3 === "object")
                        return state_3.value;
                }
            }
            else {
            }
        }.bind(this));
        setTimeout(function () {
            _this.geoquery1.on("ready", function () {
                var _this = this;
                this.afDB.database.ref('allCities/' + this.city).once('value').then(function (snap) {
                    _this.setGeofireRouteDest(snap.val().geofireRouteCrew, _this.latDest, _this.lngDest, userId);
                });
            }.bind(_this));
        }, 300);
    };
    //geoquery destination in route
    CreateCrewPage.prototype.setGeofireRouteDest = function (radiusRoute, lat, lng, userId) {
        console.log('se ejecutó');
        var dbRef = this.afDB.database.ref('/geofireRoute/');
        var geoFire = new __WEBPACK_IMPORTED_MODULE_10_geofire__(dbRef);
        this.geoqueryRouteDestination = geoFire.query({
            center: [lat, lng],
            radius: radiusRoute
        });
        this.keyEnteredRouteDest(userId);
    };
    CreateCrewPage.prototype.keyEnteredRouteDest = function (userId) {
        this.geoqueryRouteDestination.on("key_entered", function (key, location, distance) {
            var _this = this;
            this.afDB.database.ref('/geofireRoute/' + key).once('value').then(function (snap) {
                _this.keyTripForGeofireInRouteDest = snap.val().keyTrip;
                _this.driverIdForGeofireInRouteDest = snap.val().driverId;
            }).then(function () {
                if (_this.keysIdentifiedInOrigin !== 0) {
                    var count = 0;
                    var _loop_4 = function (element) {
                        count = count + 1;
                        if (element.keyTrip === _this.keyTripForGeofireInRouteDest) {
                            _this.geofireDestinationConfirmedOnRoute = true;
                            return { value: _this.afDB.database.ref('/geofireRoute/' + key).once('value').then(function (snap) {
                                    _this.driverIdForGeofireInRouteDest = snap.val().driverId;
                                    _this.keyTripForGeofireInRouteDest = snap.val().keyTrip;
                                    _this.afDB.database.ref('/driversTest/' + _this.driverIdForGeofireInRouteDest + '/matchingCrews/' + _this.keyTripForGeofireInRouteDest).update({
                                        crewId: _this.Key_Crew,
                                        adminId: userId,
                                        distance: element.distance,
                                        orRouteConf: element.orRouteConf,
                                        destRouteConf: true
                                    });
                                }) };
                        }
                        if (count === _this.keysIdentifiedInOrigin.length) {
                            var _loop_5 = function (element_2) {
                                if (element_2.keyTrip === _this.keyTripForGeofireInRouteDest) {
                                    _this.geofireDestinationConfirmedOnRoute = true;
                                    return { value: _this.afDB.database.ref('/geofireRoute/' + key).once('value').then(function (snap) {
                                            _this.driverIdForGeofireInRouteDest = snap.val().driverId;
                                            _this.keyTripForGeofireInRouteDest = snap.val().keyTrip;
                                            _this.afDB.database.ref('/driversTest/' + _this.driverIdForGeofireInRouteDest + '/matchingCrews/' + _this.keyTripForGeofireInRouteDest).update({
                                                crewId: _this.Key_Crew,
                                                adminId: userId,
                                                distance: element_2.distance,
                                                orRouteConf: element_2.orRouteConf,
                                                destRouteConf: true
                                            });
                                        }) };
                                }
                            };
                            for (var _i = 0, _a = _this.keysIdentifiedInOriginRoute; _i < _a.length; _i++) {
                                var element_2 = _a[_i];
                                var state_4 = _loop_5(element_2);
                                if (typeof state_4 === "object")
                                    return state_4;
                            }
                        }
                    };
                    for (var _i = 0, _a = _this.keysIdentifiedInOrigin; _i < _a.length; _i++) {
                        var element = _a[_i];
                        var state_5 = _loop_4(element);
                        if (typeof state_5 === "object")
                            return state_5.value;
                    }
                }
                else {
                    console.log('no hay nada en ' + _this.keysIdentifiedInOrigin);
                }
            })
                .then(function () {
                if (_this.keysIdentifiedInOriginRoute !== 0) {
                    var _loop_6 = function (element) {
                        if (element.keyTrip === _this.keyTripForGeofireInRouteDest) {
                            _this.geofireDestinationConfirmedOnRoute = true;
                            return { value: _this.afDB.database.ref('/geofireRoute/' + key).once('value').then(function (snap) {
                                    _this.driverIdForGeofireInRouteDest = snap.val().driverId;
                                    _this.keyTripForGeofireInRouteDest = snap.val().keyTrip;
                                    _this.afDB.database.ref('/driversTest/' + _this.driverIdForGeofireInRouteDest + '/matchingCrews/' + _this.keyTripForGeofireInRouteDest).update({
                                        crewId: _this.Key_Crew,
                                        adminId: userId,
                                        distance: element.distance,
                                        orRouteConf: element.orRouteConf,
                                        destRouteConf: true
                                    });
                                }) };
                        }
                    };
                    for (var _i = 0, _a = _this.keysIdentifiedInOriginRoute; _i < _a.length; _i++) {
                        var element = _a[_i];
                        var state_6 = _loop_6(element);
                        if (typeof state_6 === "object")
                            return state_6.value;
                    }
                }
                else {
                }
            });
        }.bind(this));
        this.geoqueryRouteDestination.on("ready", function () {
            this.loading.dismiss();
            this.viewCtrl.dismiss();
            var alert = this.alertCtrl.create({
                title: 'Eres administrador de este grupo',
                subTitle: 'Te notificaremos si algún conductor de Waypool quiere hacer el transporte de este grupo',
                buttons: ['OK']
            });
            alert.present();
        }.bind(this));
    };
    CreateCrewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-createcrew',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/waypool_costumer/src/pages/p-createcrew/createcrew.html"*/'<ion-content>\n        <ion-card>\n                <img src="assets/imgs/picmodales.png" width="100px" style="display:inline-block" height="150px"/>\n                <ion-icon name="close-circle" class="close-icon text-white"  (click)="dismiss()"></ion-icon>\n    \n            <ion-card-content>\n                                <h2 text-center>Set the time this trip will start:</h2>\n                    <div style="    border-color: black;\n                    border-style: solid;">\n\n                    <ion-item>\n                        <ion-label>Time:</ion-label>\n                        <ion-datetime  displayFormat="hh:mm A" pickerFormat="hh:mm A" [(ngModel)]="startHour" ></ion-datetime>\n                    </ion-item>\n\n                </div>\n\n\n                <ion-row style="margin-top: 14px;    display: flex;\n                justify-content: center">\n                   \n                    <ion-col col-8>\n                        <button class="btn bg-theme-driver text-white rounded" style="width: 100%;font-size: 1.2rem;" (click)="setCrew()">Create Crew</button>\n                    </ion-col>\n                </ion-row>\n                \n            </ion-card-content>\n        </ion-card>\n    </ion-content>\n    '/*ion-inline-end:"/Users/juandavidjaramillo/Documents/waypool_costumer/src/pages/p-createcrew/createcrew.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__services_sendUsers_service__["a" /* sendUsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_sendUsers_service__["a" /* sendUsersService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__services_signup_services__["a" /* SignUpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_signup_services__["a" /* SignUpService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_4__services_sendCoords_service__["a" /* sendCoordsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_sendCoords_service__["a" /* sendCoordsService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["AngularFireAuth"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["AngularFireAuth"]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_7__services_geoFire_service__["a" /* geofireService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_geoFire_service__["a" /* geofireService */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_8__services_instances_service__["a" /* instancesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__services_instances_service__["a" /* instancesService */]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]) === "function" && _o || Object, typeof (_p = typeof __WEBPACK_IMPORTED_MODULE_9__services_d_geofire_services__["a" /* DriverGeofireService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__services_d_geofire_services__["a" /* DriverGeofireService */]) === "function" && _p || Object])
    ], CreateCrewPage);
    return CreateCrewPage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
}());

//# sourceMappingURL=createcrew.js.map

/***/ })

});
//# sourceMappingURL=43.js.map