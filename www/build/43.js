webpackJsonp([43],{

/***/ 702:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateGroupPageModule", function() { return CreateGroupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__creategroup__ = __webpack_require__(899);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CreateGroupPageModule = /** @class */ (function () {
    function CreateGroupPageModule() {
    }
    CreateGroupPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__creategroup__["a" /* CreateGroupPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__creategroup__["a" /* CreateGroupPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__creategroup__["a" /* CreateGroupPage */]
            ]
        })
    ], CreateGroupPageModule);
    return CreateGroupPageModule;
}());

//# sourceMappingURL=creategroup.module.js.map

/***/ }),

/***/ 899:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateGroupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_d_geofire_services__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_geofire__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_geofire___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_geofire__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CreateGroupPage = /** @class */ (function () {
    function CreateGroupPage(viewCtrl, loadingCtrl, alertCtrl, navCtrl, modalCtrl, navParams, renderer, afDB, firebaseAuth, geofireServicesDr) {
        var _this = this;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.renderer = renderer;
        this.afDB = afDB;
        this.firebaseAuth = firebaseAuth;
        this.geofireServicesDr = geofireServicesDr;
        this.admin = {};
        this.pointsAlongRoute = [];
        this.indexesOfPointsAlongRoute = [];
        this.count = 0;
        this.keysIdentifiedInOrigin = [];
        this.keysIdentifiedInOriginRoute = [];
        this.userId = this.firebaseAuth.auth.currentUser.uid;
        var origin = this.navParams.get('origin');
        var destination = this.navParams.get('destination');
        this.latOr = origin.lat;
        this.lngOr = origin.lng;
        this.latDest = destination.lat;
        this.lngDest = destination.lng;
        this.pointsAlongRoute = this.navParams.get('pointsAlongRoute');
        this.indexesOfPointsAlongRoute = this.navParams.get('indexesOfPointsAlongRoute');
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
    }
    CreateGroupPage.prototype.selectImageOtherCar = function () {
        // this is just to change the css
        this.renderer.setElementStyle(this.imageOtherCar.nativeElement, 'border-width', '3px');
        this.renderer.setElementStyle(this.imageOtherCar.nativeElement, 'border-style', 'solid');
        this.renderer.setElementStyle(this.imageOtherCar.nativeElement, 'border-color', 'green');
        this.renderer.setElementStyle(this.imageTaxi.nativeElement, 'border-width', '0px');
        this.otherCar = true;
        this.taxi = false;
    };
    CreateGroupPage.prototype.selectImageTaxi = function () {
        // this is just to change the css
        this.renderer.setElementStyle(this.imageTaxi.nativeElement, 'border-width', '3px');
        this.renderer.setElementStyle(this.imageTaxi.nativeElement, 'border-style', 'solid');
        this.renderer.setElementStyle(this.imageTaxi.nativeElement, 'border-color', 'green');
        this.renderer.setElementStyle(this.imageOtherCar.nativeElement, 'border-width', '0px');
        this.otherCar = false;
        this.taxi = true;
    };
    CreateGroupPage.prototype.createGroup = function () {
        var _this = this;
        if (this.note === undefined || this.note === null) {
            this.note = 'no hay nota';
        }
        if (this.startHour === undefined) {
            var alert_1 = this.alertCtrl.create({
                title: 'Por favor confirma la hora a la que iniciaría este viaje',
                buttons: ['OK']
            });
            alert_1.present();
        }
        else if (this.seats === undefined || this.seats === null) {
            var alert_2 = this.alertCtrl.create({
                title: 'Por favor confirma cuántos puestos dispoibles habrían en este viaje',
                buttons: ['OK']
            });
            alert_2.present();
        }
        else {
            this.afDB.database.ref('/crewsTest/' + this.userId).push({
                admin: this.admin,
                startHour: this.startHour,
                seats: this.seats,
                note: this.note,
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
                }
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
                        content: "\n            <div class=\"custom-spinner-container\">\n              <div class=\"custom-spinner-box\"></div>\n            </div>"
                    });
                    _this.setGeofireOr(snapGeoquery.val().geofireOrNotificationsCrew, _this.latOr, _this.lngOr, _this.userId, snapGeoquery.val().geofireDestNotificationsCrew, _this.latDest, _this.lngDest);
                    _this.setGeofireRouteOrigin(snapGeoquery.val().geofireRouteCrew, _this.latOr, _this.lngOr, snapGeoquery.val().geofireDestNotificationsCrew, _this.latDest, _this.lngDest, _this.userId);
                });
            });
        }
    };
    // GEOFIRE LOGIC FOR LET DRIVERS KNOW THERE IS A NEW GRUOP
    //geoquery origin
    CreateGroupPage.prototype.setGeofireOr = function (radiusOr, latOr, lngOr, userId, radiusDest, latDest, lngDest) {
        var dbRef = this.afDB.database.ref('/geofireOr/');
        var geoFire = new __WEBPACK_IMPORTED_MODULE_5_geofire__(dbRef);
        this.geoquery2 = geoFire.query({
            center: [latOr, lngOr],
            radius: radiusOr
        });
        this.keyEnteredOr(radiusDest, latDest, lngDest, userId);
        console.log('geoquery or added');
    };
    CreateGroupPage.prototype.keyEnteredOr = function (radiusDest, latDest, lngDest, userId) {
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
    CreateGroupPage.prototype.setGeofireRouteOrigin = function (radiusRoute, lat, lng, radiusDest, latDest, lngDest, userId) {
        // console.log(this.geoquriesRouteOrigin);
        var dbRef = this.afDB.database.ref('/geofireRoute/');
        var geoFire = new __WEBPACK_IMPORTED_MODULE_5_geofire__(dbRef);
        this.geoqueryRouteOrigin = geoFire.query({
            center: [lat, lng],
            radius: radiusRoute
        });
        this.keyEnteredRouteOrigin(userId, radiusDest, latDest, lngDest);
    };
    CreateGroupPage.prototype.keyEnteredRouteOrigin = function (userId, radiusDest, latDest, lngDest) {
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
    CreateGroupPage.prototype.setGeofireDest = function (radiusDest, latDest, lngDest, userId) {
        console.log('se prendio geoquery destination, debo salir una sóla vez');
        var dbRef = this.afDB.database.ref('/geofireDest/');
        var geoFire = new __WEBPACK_IMPORTED_MODULE_5_geofire__(dbRef);
        this.geoquery1 = geoFire.query({
            center: [latDest, lngDest],
            radius: radiusDest
        });
        this.keyEnteredDest(userId);
        console.log('geoquery dest added');
    };
    CreateGroupPage.prototype.keyEnteredDest = function (userId) {
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
    CreateGroupPage.prototype.setGeofireRouteDest = function (radiusRoute, lat, lng, userId) {
        console.log('se ejecutó');
        var dbRef = this.afDB.database.ref('/geofireRoute/');
        var geoFire = new __WEBPACK_IMPORTED_MODULE_5_geofire__(dbRef);
        this.geoqueryRouteDestination = geoFire.query({
            center: [lat, lng],
            radius: radiusRoute
        });
        this.keyEnteredRouteDest(userId);
    };
    CreateGroupPage.prototype.keyEnteredRouteDest = function (userId) {
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
            var _this = this;
            this.loading.dismiss();
            this.viewCtrl.dismiss();
            var alert = this.alertCtrl.create({
                title: 'Eres administrador de este grupo',
                subTitle: 'Te notificaremos si algún conductor de Waypool quiere hacer el transporte de este grupo',
                buttons: [{
                        text: 'OK',
                        handler: function () {
                            _this.navCtrl.push('ReservetripPage');
                        }
                    }]
            });
            alert.present();
        }.bind(this));
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('imageTaxi', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] }),
        __metadata("design:type", Object)
    ], CreateGroupPage.prototype, "imageTaxi", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('imageOtherCar', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] }),
        __metadata("design:type", Object)
    ], CreateGroupPage.prototype, "imageOtherCar", void 0);
    CreateGroupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-creategroup',template:/*ion-inline-start:"C:\Users\danie\Documents\waypool\prod\latest\waypool_costumer\src\pages\p-creategroup\creategroup.html"*/'<ion-header class="bg-theme">\n\n    <ion-navbar>\n\n        <ion-title>crea grupo</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bh-light">\n\n    <H2 style="margin-left: 12px;">Encuentra personas con quién irte</H2>\n\n\n\n    <ion-card>\n\n        <ion-item>\n\n            <ion-avatar item-start>\n\n                <img src="assets/imgs/face-1.jpg">\n\n            </ion-avatar>\n\n\n\n            <div class="name">\n\n                <h2 > Admin del grupo: {{admin.name}}{{admin.lastname}}\n\n                    <ion-icon *ngIf="admin.verifiedPerson" name="ios-checkmark-circle" class="text-theme"></ion-icon>\n\n                </h2>\n\n                <p>{{admin.company}}</p>\n\n            </div>\n\n        </ion-item>\n\n        <ion-card-content>\n\n            <div class="ride-detail">\n\n                <p><small>Origen</small>\n\n                    <span class="icon-location bg-theme"></span>{{origin}}</p>\n\n                <p>\n\n                    <small>Destino</small>\n\n                    <span class="icon-location bg-yellow"></span>{{destination}}</p>\n\n            </div>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card>\n\n        <ion-card-content>\n\n            <ion-row  style="display: flex; flex-direction: row;">\n\n                <ion-avatar style="border-radius: 15%;" #imageTaxi>\n\n                    <p text-center class="texto1">Taxi</p>\n\n    \n\n                        <img class="house"  src="assets/imgs/carOrange.png" (click)="selectImageTaxi()"/>\n\n    \n\n                    </ion-avatar>\n\n    \n\n                    <ion-avatar  style="border-radius: 15%;" #imageOtherCar>\n\n                        <p text-center class="texto1">Indriver, Uber, Beat. etc...</p>\n\n    \n\n                            <img src="assets/imgs/carBlue.png"  (click)="selectImageOtherCar()"/>\n\n                     </ion-avatar>\n\n         \n\n          </ion-row>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card>\n\n        <ion-card-content>\n\n            <div class="ride-detail no-before">\n\n                <h6 class="text-theme">Detalles</h6>\n\n                \n\n                <ion-row >\n\n                <ion-list>\n\n                    \n\n                    <div style="    border-color: black;\n\n                    border-style: solid; border-width: 1px;">\n\n\n\n                    <ion-item>\n\n                        <ion-label>      \n\n                    <ion-icon name="md-calendar" class="icon-location"></ion-icon> Hora:</ion-label>\n\n\n\n                <ion-datetime  displayFormat="hh:mm A" pickerFormat="hh:mm A" [(ngModel)]="startHour" ></ion-datetime>\n\n                </ion-item>\n\n\n\n                </div>\n\n                <ion-item>\n\n                    <h2 text-left> <ion-icon name="md-create"></ion-icon> Nota:</h2>\n\n\n\n                    <div class="form">\n\n                        <ion-list no-lines>\n\n                            <ion-item>\n\n                                <ion-textarea [(ngModel)]="note" type="text" placeholder="Deja una nota para tus compañeros" ></ion-textarea>\n\n                            </ion-item>\n\n                        </ion-list>\n\n                    </div>\n\n                  </ion-item>\n\n                </ion-list>                    \n\n            </ion-row>\n\n                    \n\n            </div>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card>\n\n        <ion-card-content>\n\n            <div class="seats">\n\n                <h6 class="text-theme"></h6>\n\n                <ion-item>\n\n                    <ion-label>Asientos Disponibles</ion-label>\n\n                    <ion-select [(ngModel)]="seats">\n\n                      <ion-option value=1>1</ion-option>\n\n                      <ion-option value=2>2</ion-option>\n\n                      <ion-option value=3>3</ion-option>\n\n\n\n                      <ion-option value=4>4</ion-option>\n\n\n\n                    </ion-select>\n\n                  </ion-item>\n\n                <button class="btn bg-theme text-white rounded" (click)="createGroup()" style="width: 100%;margin-top: 16px;">CREAR GRUPO</button>\n\n            </div>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\danie\Documents\waypool\prod\latest\waypool_costumer\src\pages\p-creategroup\creategroup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_4__services_d_geofire_services__["a" /* DriverGeofireService */]])
    ], CreateGroupPage);
    return CreateGroupPage;
}());

//# sourceMappingURL=creategroup.js.map

/***/ })

});
//# sourceMappingURL=43.js.map