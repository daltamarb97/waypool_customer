webpackJsonp([51],{

/***/ 703:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverFindridePageModule", function() { return DriverFindridePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__driverFindride__ = __webpack_require__(898);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DriverFindridePageModule = /** @class */ (function () {
    function DriverFindridePageModule() {
    }
    DriverFindridePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__driverFindride__["a" /* DriverFindridePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__driverFindride__["a" /* DriverFindridePage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__driverFindride__["a" /* DriverFindridePage */]
            ]
        })
    ], DriverFindridePageModule);
    return DriverFindridePageModule;
}());

//# sourceMappingURL=driverFindride.module.js.map

/***/ }),

/***/ 898:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverFindridePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation___ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_d_sendCoords_service__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_d_signup_service__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_d_geofire_services__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_fire_database__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_d_driverauthentication_service__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_d_sendUsers_service__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_d_trips_service__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_d_instances_services__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_fcm__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_firebase__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





// import { authenticationService } from '../../services/driverauthentication.service';

// import { Geofence } from '@ionic-native/geofence';








var DriverFindridePage = /** @class */ (function () {
    function DriverFindridePage(geofireService, TripsService, afDB, navCtrl, SignUpService, modalCtrl, authenticationService, geolocation, zone, sendCoordsService, AngularFireAuth, alertCtrl, toastCtrl, app, sendUsersService, instancesService, firebaseNative, platform, fcm, loadingCtrl, renderer) {
        this.geofireService = geofireService;
        this.TripsService = TripsService;
        this.afDB = afDB;
        this.navCtrl = navCtrl;
        this.SignUpService = SignUpService;
        this.modalCtrl = modalCtrl;
        this.authenticationService = authenticationService;
        this.geolocation = geolocation;
        this.zone = zone;
        this.sendCoordsService = sendCoordsService;
        this.AngularFireAuth = AngularFireAuth;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.app = app;
        this.sendUsersService = sendUsersService;
        this.instancesService = instancesService;
        this.firebaseNative = firebaseNative;
        this.platform = platform;
        this.fcm = fcm;
        this.loadingCtrl = loadingCtrl;
        this.renderer = renderer;
        // waypoints variables
        this.directionsService = null;
        this.directionsDisplay = null;
        this.bounds = null;
        this.myLatLng = [];
        //firebase 
        this.trip = {};
        this.tripId = null;
        this.user = this.AngularFireAuth.auth.currentUser.uid;
        this.currentUser = this.AngularFireAuth.auth.currentUser;
        this.driverInfo = {};
        this.geoInfo1 = {};
        this.geoInfo2 = {};
        //variables for geofire reserves
        this.reserves = [];
        this.locationUniversity = {};
        this.showConectedButton = true;
        this.schedules = [];
        this.myReserves = [];
        this.checked = false;
        this.fullReserves = [];
        this.multipleDestinations = [];
        this.markersOr = [];
        this.markersDest = [];
        console.log(this.user);
        console.log(this.currentUser);
        this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
        this.geocoder = new google.maps.Geocoder;
        this.autocompleteMyPos = { input: '' };
        this.autocompleteMyDest = { input: '' };
        this.autocompleteItems = [];
        this.autocompleteItems2 = [];
        this.directionsService = new google.maps.DirectionsService();
        this.directionsDisplay = new google.maps.DirectionsRenderer({
            suppressMarkers: true,
        });
        this.bounds = new google.maps.LatLngBounds();
        this.markers = [];
        //meter datos por el id del firebase
    } // END OF CONSTRUCTOR
    DriverFindridePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.afDB.database.ref('allUsers/' + this.user).once('value').then(function (snap) {
            if (snap.val().toggleOnline) {
                _this.SignUpService.userPlace = snap.val().toggleOnline;
                _this.afDB.database.ref('allCities/' + snap.val().city + '/allPlaces/' + snap.val().place).once('value').then(function (snapshot) {
                    console.log(snapshot.val().multipleLocations);
                    _this.zonesToIterate = snapshot.val().zones;
                    _this.multipleDestinations = snapshot.val().location;
                    console.log(_this.multipleDestinations);
                    if (snapshot.val().multipleLocations === true) {
                        _this.multipleLocations = true;
                        //user get their check sign of verficiation here
                        var objVerifiedPerson_1 = snapshot.val().zones;
                        Object.getOwnPropertyNames(objVerifiedPerson_1).forEach(function (key) {
                            if (objVerifiedPerson_1[key] === 2 || objVerifiedPerson_1[key] === 3 || objVerifiedPerson_1[key] === 4 || objVerifiedPerson_1[key] === 5 || objVerifiedPerson_1[key] === 6 || objVerifiedPerson_1[key] === 1 || objVerifiedPerson_1[key] === 7 || objVerifiedPerson_1[key] === 8 || objVerifiedPerson_1[key] === 9 || objVerifiedPerson_1[key] === 10) {
                            }
                            else {
                                _this.instancesService.isVerifiedPerson(objVerifiedPerson_1[key], _this.user);
                            }
                        });
                    }
                    else {
                        _this.multipleLocations = false;
                        //user get their check sign of verficiation here
                        _this.instancesService.isVerifiedPerson(_this.SignUpService.userPlace, _this.user);
                    }
                }).then(function () {
                    console.log(_this.zonesToIterate);
                    _this.platform.ready().then(function () {
                        // this.getToken();
                        console.log('aqui cogi el token');
                        _this.token = _this.fcm.getToken().then(function (token) {
                            console.log('this is the token ' + token);
                            Object.getOwnPropertyNames(_this.zonesToIterate).forEach(function (key) {
                                if (_this.zonesToIterate[key] === 2 || _this.zonesToIterate[key] === 3 || _this.zonesToIterate[key] === 4 || _this.zonesToIterate[key] === 5 || _this.zonesToIterate[key] === 6 || _this.zonesToIterate[key] === 1 || _this.zonesToIterate[key] === 7 || _this.zonesToIterate[key] === 8 || _this.zonesToIterate[key] === 9 || _this.zonesToIterate[key] === 10) {
                                }
                                else {
                                    _this.afDB.database.ref(_this.zonesToIterate[key] + '/drivers/' + _this.user + '/devices/').update({
                                        token: token
                                    });
                                }
                            });
                        });
                    });
                    console.log(_this.SignUpService.userPlace);
                    _this.afDB.database.ref(_this.SignUpService.userPlace + '/drivers/' + _this.user).once('value').then(function (snap) {
                        _this.userInfo = snap.val();
                        console.log(_this.userInfo);
                        _this.autocompleteMyDest.input = _this.userInfo.fixedLocation.name;
                        var lat = _this.userInfo.fixedLocation.coordinates.lat;
                        console.log(_this.lat);
                        var lng = _this.userInfo.fixedLocation.coordinates.lng;
                        _this.positionDest = { lat: lat, lng: lng };
                        console.log(_this.positionDest);
                        var inputs2 = document.getElementById("input2").getElementsByTagName("INPUT");
                        inputs2[0].disabled = true;
                        // if(this.userInfo.toggleStatus === 'online'){
                        //   // this.checked = true;
                        //   this.showConectedButton = false;
                        //   this.changeColorOnline();
                        //   this.disable();
                        // }else{
                        //   this.showConectedButton = true;
                        //   this.changeColorOffline();
                        //   this.enable();
                        // }
                        if (_this.userInfo.houseAddress === undefined || _this.userInfo.houseAddress === null) {
                            _this.pushOriginPage();
                        }
                        else {
                            var latOr = _this.userInfo.houseAddress.coordinates.lat;
                            var lngOr = _this.userInfo.houseAddress.coordinates.lng;
                            _this.positionOr = { latOr: latOr, lngOr: lngOr };
                            console.log(_this.positionOr);
                            _this.LoadMapWithHouseAdress(_this.positionOr);
                        }
                    });
                    //search keyTrip
                    //search keyTrip
                    _this.TripsService.getKeyTrip(_this.SignUpService.userPlace, _this.user)
                        .subscribe(function (keyTrip) {
                        _this.keyTrip = keyTrip;
                        console.log(_this.user);
                        console.log(_this.keyTrip);
                        //if key its deleted don't show VIAJE EN CURSO  
                        if (_this.keyTrip === undefined || _this.keyTrip === null) {
                            _this.onTrip = false;
                            //  this.TripsService.eraseKeyTrip(this.user);
                            //  this.TripsService.setOnTripFalse(this.user);
                            console.log("llegue adonde era");
                        }
                        else {
                            //confirm that trip exist and get it
                            _this.getTrip();
                        }
                    });
                    console.log(_this.SignUpService.userPlace);
                    _this.SignUpService.getMyInfo(_this.SignUpService.userPlace, _this.user).subscribe(function (user) {
                        _this.userInfo = user;
                        console.log(_this.userInfo);
                        _this.userInfo;
                        _this.toggleStatus = _this.userInfo.toggleStatus;
                        if (_this.toggleStatus === 'online') {
                            _this.showConectedButton = false;
                            console.log("estoy online");
                        }
                        else {
                            _this.showConectedButton = true;
                            console.log("estoy offline");
                        }
                    });
                });
            }
            else {
                _this.afDB.database.ref('allCities/' + snap.val().city + '/allPlaces/' + snap.val().place).once('value').then(function (snapshot) {
                    console.log(snapshot.val().multipleLocations);
                    _this.zonesToIterate = snapshot.val().zones;
                    _this.multipleDestinations = snapshot.val().location;
                    console.log(_this.multipleDestinations);
                    if (snapshot.val().multipleLocations === true) {
                        // temporary location until user chooses the right location of their company
                        _this.SignUpService.userPlace = snapshot.val().zones[0];
                        _this.multipleLocations = true;
                        //user get their check sign of verficiation here
                        var objVerifiedPerson_2 = snapshot.val().zones;
                        Object.getOwnPropertyNames(objVerifiedPerson_2).forEach(function (key) {
                            if (objVerifiedPerson_2[key] === 2 || objVerifiedPerson_2[key] === 3 || objVerifiedPerson_2[key] === 4 || objVerifiedPerson_2[key] === 5 || objVerifiedPerson_2[key] === 6 || objVerifiedPerson_2[key] === 1 || objVerifiedPerson_2[key] === 7 || objVerifiedPerson_2[key] === 8 || objVerifiedPerson_2[key] === 9 || objVerifiedPerson_2[key] === 10) {
                            }
                            else {
                                _this.instancesService.isVerifiedPerson(objVerifiedPerson_2[key], _this.user);
                            }
                        });
                    }
                    else {
                        _this.SignUpService.userPlace = snapshot.val().zones[0];
                        _this.multipleLocations = false;
                        //user get their check sign of verficiation here
                        _this.instancesService.isVerifiedPerson(_this.SignUpService.userPlace, _this.user);
                    }
                    //logica de instrucciones 
                    _this.afDB.database.ref(snapshot.val().zones[0] + '/drivers/' + _this.user).once('value').then(function (snapWalkthr) {
                        if (snapWalkthr.val().shownInstructions === true) {
                            console.log('ya lo mostre');
                        }
                        else {
                            _this.app.getRootNav().push('DriverWalkthroughPage');
                            Object.getOwnPropertyNames(_this.zonesToIterate).forEach(function (key) {
                                if (_this.zonesToIterate[key] === 2 || _this.zonesToIterate[key] === 3 || _this.zonesToIterate[key] === 4 || _this.zonesToIterate[key] === 5 || _this.zonesToIterate[key] === 6 || _this.zonesToIterate[key] === 1 || _this.zonesToIterate[key] === 7 || _this.zonesToIterate[key] === 8 || _this.zonesToIterate[key] === 9 || _this.zonesToIterate[key] === 10) {
                                }
                                else {
                                    _this.afDB.database.ref(_this.zonesToIterate[key] + '/drivers/' + _this.user).update({
                                        shownInstructions: true
                                    });
                                }
                            });
                        }
                    });
                }).then(function () {
                    console.log(_this.zonesToIterate);
                    _this.platform.ready().then(function () {
                        // this.getToken();
                        console.log('aqui cogi el token');
                        _this.token = _this.fcm.getToken().then(function (token) {
                            console.log('this is the token ' + token);
                            Object.getOwnPropertyNames(_this.zonesToIterate).forEach(function (key) {
                                if (_this.zonesToIterate[key] === 2 || _this.zonesToIterate[key] === 3 || _this.zonesToIterate[key] === 4 || _this.zonesToIterate[key] === 5 || _this.zonesToIterate[key] === 6 || _this.zonesToIterate[key] === 1 || _this.zonesToIterate[key] === 7 || _this.zonesToIterate[key] === 8 || _this.zonesToIterate[key] === 9 || _this.zonesToIterate[key] === 10) {
                                }
                                else {
                                    _this.afDB.database.ref(_this.zonesToIterate[key] + '/drivers/' + _this.user + '/devices/').update({
                                        token: token
                                    });
                                }
                            });
                        });
                    });
                    console.log(_this.SignUpService.userPlace);
                    _this.afDB.database.ref(_this.SignUpService.userPlace + '/drivers/' + _this.user).once('value').then(function (snap) {
                        _this.userInfo = snap.val();
                        console.log(_this.userInfo);
                        _this.autocompleteMyDest.input = _this.userInfo.fixedLocation.name;
                        var lat = _this.userInfo.fixedLocation.coordinates.lat;
                        console.log(_this.lat);
                        var lng = _this.userInfo.fixedLocation.coordinates.lng;
                        _this.positionDest = { lat: lat, lng: lng };
                        console.log(_this.positionDest);
                        var inputs2 = document.getElementById("input2").getElementsByTagName("INPUT");
                        inputs2[0].disabled = true;
                        // if(this.userInfo.toggleStatus === 'online'){
                        //   // this.checked = true;
                        //   this.showConectedButton = false;
                        //   this.changeColorOnline();
                        //   this.disable();
                        // }else{
                        //   this.showConectedButton = true;
                        //   this.changeColorOffline();
                        //   this.enable();
                        // }
                        if (_this.userInfo.houseAddress === undefined || _this.userInfo.houseAddress === null) {
                            _this.pushOriginPage();
                        }
                        else {
                            var latOr = _this.userInfo.houseAddress.coordinates.lat;
                            var lngOr = _this.userInfo.houseAddress.coordinates.lng;
                            _this.positionOr = { latOr: latOr, lngOr: lngOr };
                            console.log(_this.positionOr);
                            _this.LoadMapWithHouseAdress(_this.positionOr);
                        }
                    });
                    //search keyTrip
                    //search keyTrip
                    _this.TripsService.getKeyTrip(_this.SignUpService.userPlace, _this.user)
                        .subscribe(function (keyTrip) {
                        _this.keyTrip = keyTrip;
                        console.log(_this.user);
                        console.log(_this.keyTrip);
                        //if key its deleted don't show VIAJE EN CURSO  
                        if (_this.keyTrip === undefined || _this.keyTrip === null) {
                            _this.onTrip = false;
                            //  this.TripsService.eraseKeyTrip(this.user);
                            //  this.TripsService.setOnTripFalse(this.user);
                            console.log("llegue adonde era");
                        }
                        else {
                            //confirm that trip exist and get it
                            _this.getTrip();
                        }
                    });
                    console.log(_this.SignUpService.userPlace);
                    _this.SignUpService.getMyInfo(_this.SignUpService.userPlace, _this.user).subscribe(function (user) {
                        _this.userInfo = user;
                        console.log(_this.userInfo);
                    });
                });
            }
        });
    };
    DriverFindridePage.prototype.getToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!this.platform.is('android')) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, this.firebaseNative.getToken().then(function (token) {
                                console.log('this is the token ' + token);
                                Object.getOwnPropertyNames(_this.zonesToIterate).forEach(function (key) {
                                    if (_this.zonesToIterate[key] === 2 || _this.zonesToIterate[key] === 3 || _this.zonesToIterate[key] === 4 || _this.zonesToIterate[key] === 5 || _this.zonesToIterate[key] === 6 || _this.zonesToIterate[key] === 1 || _this.zonesToIterate[key] === 7 || _this.zonesToIterate[key] === 8 || _this.zonesToIterate[key] === 9 || _this.zonesToIterate[key] === 10) {
                                    }
                                    else {
                                        _this.afDB.database.ref(_this.zonesToIterate[key] + '/drivers/' + _this.user + '/devices/').update({
                                            token: token
                                        });
                                    }
                                });
                            })];
                    case 1:
                        _a.token = _c.sent();
                        _c.label = 2;
                    case 2:
                        if (!this.platform.is('ios')) return [3 /*break*/, 5];
                        _b = this;
                        return [4 /*yield*/, this.firebaseNative.getToken().then(function (token) {
                                console.log('this is the token ' + token);
                                Object.getOwnPropertyNames(_this.zonesToIterate).forEach(function (key) {
                                    if (_this.zonesToIterate[key] === 2 || _this.zonesToIterate[key] === 3 || _this.zonesToIterate[key] === 4 || _this.zonesToIterate[key] === 5 || _this.zonesToIterate[key] === 6 || _this.zonesToIterate[key] === 1 || _this.zonesToIterate[key] === 7 || _this.zonesToIterate[key] === 8 || _this.zonesToIterate[key] === 9 || _this.zonesToIterate[key] === 10) {
                                    }
                                    else {
                                        _this.afDB.database.ref(_this.zonesToIterate[key] + '/drivers/' + _this.user + '/devices/').update({
                                            token: token
                                        });
                                    }
                                });
                            })];
                    case 3:
                        _b.token = _c.sent();
                        return [4 /*yield*/, this.firebaseNative.grantPermission()];
                    case 4:
                        _c.sent();
                        _c.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    DriverFindridePage.prototype.LoadMapWithHouseAdress = function (positionOr) {
        var _this = this;
        this.geolocation.getCurrentPosition({ enableHighAccuracy: true }).then(function (position) {
            var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            console.log(latLng);
            _this.positionOrMarker = new google.maps.LatLng(positionOr.latOr, positionOr.lngOr);
            var mapOptions = {
                center: latLng,
                zoom: 17,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                zoomControl: false,
                mapTypeControl: false,
                scaleControl: false,
                streetViewControl: false,
                rotateControl: false,
                fullscreenControl: false,
                styles: [
                    {
                        featureType: 'poi',
                        elementType: 'labels.icon',
                        stylers: [
                            {
                                visibility: 'off'
                            }
                        ]
                    }
                ]
            };
            //creates the map and give options
            _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapOptions);
            _this.markerGeolocation = new google.maps.Marker({
                map: _this.map,
                animation: google.maps.Animation.DROP,
                position: _this.positionOrMarker,
                draggable: true,
                icon: { url: "assets/imgs/house.png",
                    scaledSize: new google.maps.Size(70, 70)
                }
            });
            _this.markersOr.push(_this.markerGeolocation);
            _this.geocoordinatesHouse = positionOr;
            //allow the marker to be draged and changed the position
            _this.dragMarkerOr(_this.markerGeolocation, _this.autocompleteMyPos);
            //to reverse-geocode position
            _this.geocodeLatLng(_this.positionOrMarker, _this.autocompleteMyPos);
            console.log(_this.userInfo.fixedLocation.name);
            _this.markerDest = new google.maps.Marker({
                position: _this.positionDest,
                map: _this.map,
                animation: google.maps.Animation.DROP,
                icon: { url: "assets/imgs/workbuilding.png",
                    scaledSize: new google.maps.Size(250, 250)
                }
            });
            _this.markersDest.push(_this.markerDest);
            _this.positionDest = new google.maps.LatLng(_this.positionDest.lat, _this.positionDest.lng);
            _this.calculateRoute(_this.positionOrMarker, _this.positionDest);
            _this.directionsDisplay.setMap(_this.map);
        }, function (err) {
            console.log(err);
        });
    };
    DriverFindridePage.prototype.conectDriver = function () {
        var _this = this;
        console.log(this.positionDest.lat);
        this.showList = false;
        if (this.userInfo.toggleStatus === 'online') {
            var alert = this.alertCtrl.create({
                title: '¡Ya estas conectado!',
                subTitle: 'Si deseas cambiar el precio de tus viajes, desconectate y vuelvete a conectar',
                buttons: ['OK']
            });
            alert.present();
        }
        else {
            if (this.currentUser.emailVerified == false) {
                var alert = this.alertCtrl.create({
                    title: 'Oops!',
                    subTitle: 'por favor verifica tu email',
                    buttons: ['OK']
                });
                alert.present();
            }
            else {
                if (this.userInfo.documents) {
                    if (this.userInfo.documents.license == true && this.userInfo.documents.id == true) {
                        if (this.userInfo.schedule) {
                            try {
                                this.houseAddress = this.autocompleteMyPos.input;
                                this.placeAddress = this.autocompleteMyDest.input;
                                console.log(this.houseAddress);
                                console.log(this.placeAddress);
                                console.log(this.userInfo);
                                // use the same format of coordinates as the beggining
                                if (this.userInfo.fixedLocation.name[0] === this.placeAddress[0]) {
                                    console.log('si se ejecuto lo que jd necesitaba');
                                    this.positionDest = { lat: this.userInfo.fixedLocation.coordinates.lat, lng: this.userInfo.fixedLocation.coordinates.lng };
                                }
                                else {
                                    console.log(this.geocoordinatesDest);
                                }
                                if (this.autocompleteMyPos.input == '' || this.autocompleteMyDest.input == '') {
                                    this.presentAlert('No tienes toda la informacion', 'Por favor asegura que tengas las dirección de tu casa y oficina sea correcta', 'Ok');
                                    // this.clearMarkers();
                                    // this.directionsDisplay.setDirections({routes: []});
                                    // this.loadMap();
                                }
                                else {
                                    console.log(this.houseAddress[0]);
                                    console.log(this.geocoordinatesHouse.latOr);
                                    console.log(this.autocompleteMyPos.input);
                                    console.log("llegue aquí");
                                    //wait to get name and coordinates for confirmPricePage when the geofire starts
                                    this.afDB.database.ref(this.SignUpService.userPlace + '/drivers/' + this.user + '/houseAddress/').update({
                                        name: this.houseAddress[0]
                                    }).then(function (token) {
                                        _this.afDB.database.ref(_this.SignUpService.userPlace + '/drivers/' + _this.user + '/houseAddress/coordinates').update({
                                            lat: _this.geocoordinatesHouse.latOr,
                                            lng: _this.geocoordinatesHouse.lngOr
                                        });
                                        _this.afDB.database.ref(_this.SignUpService.userPlace + '/drivers/' + _this.user + '/fixedLocation/coordinates').update({
                                            lat: _this.positionDest.lat,
                                            lng: _this.positionDest.lng
                                        });
                                        _this.afDB.database.ref(_this.SignUpService.userPlace + '/drivers/' + _this.user + '/fixedLocation/').update({
                                            name: _this.placeAddress
                                        });
                                    }).then(function (token) {
                                        // start modal
                                        var modal = _this.modalCtrl.create('DriverConfirmpricePage');
                                        modal.onDidDismiss(function (accepted) {
                                            if (accepted) {
                                                _this.instancesService.ToggleStatusOnline(_this.SignUpService.userPlace, _this.user);
                                                _this.changeColorOnline();
                                                console.log("estoy true");
                                                _this.disable();
                                                console.log(_this.userInfo.fixedLocation.name);
                                            }
                                        });
                                        modal.present();
                                    });
                                }
                            }
                            catch (error) {
                                console.log(error);
                            }
                        }
                        else {
                            var alert = this.alertCtrl.create({
                                title: 'No tienes ningún horario',
                                subTitle: 'Por favor arma tu horario o mandanos foto del horario',
                                buttons: [{
                                        text: 'Mandar mi horario',
                                        handler: function () {
                                            _this.navCtrl.push('DriverSchedulePage');
                                        }
                                    },
                                    {
                                        text: 'Cancelar',
                                        role: 'cancel',
                                        handler: function () {
                                        }
                                    }
                                ],
                                cssClass: 'alertDanger'
                            });
                            alert.present();
                            this.changeColorOffline();
                        }
                    }
                    else {
                        var alert = this.alertCtrl.create({
                            title: '¡oh-uh!',
                            subTitle: 'faltan documentos por subir, dirigete al menú, luego a tus documentos y completa el envío. Si ya los subiste, espera a que el equipo de Waypool te verifique.',
                            buttons: [{
                                    text: 'Subir mis documentos',
                                    handler: function () {
                                        _this.navCtrl.push('DriverCarRegistrationPage');
                                    }
                                },
                                {
                                    text: 'Cancelar',
                                    role: 'cancel',
                                    handler: function () {
                                    }
                                }
                            ],
                            cssClass: 'alertDanger'
                        });
                        alert.present();
                    }
                    this.changeColorOffline();
                }
                else {
                    var alert = this.alertCtrl.create({
                        title: '¡oh-oh!',
                        subTitle: 'faltan documentos por subir, dirigete al menú, luego a tus documentos y completa el envío. Si ya los subiste, espera a que el equipo de Waypool te verifique.',
                        buttons: [{
                                text: 'Subir mis documentos',
                                handler: function () {
                                    _this.navCtrl.push('DriverCarRegistrationPage');
                                }
                            },
                            {
                                text: 'Cancelar',
                                role: 'cancel',
                                handler: function () {
                                }
                            }
                        ],
                        cssClass: 'alertDanger'
                    });
                    alert.present();
                    this.changeColorOffline();
                }
            }
        }
    };
    DriverFindridePage.prototype.disconectDriver = function () {
        var _this = this;
        if (this.userInfo.toggleStatus === 'offline') {
            //do nothing
            console.log("desconectado");
        }
        else {
            //get all reserves from driver
            this.afDB.database.ref(this.SignUpService.userPlace + '/reserves/' + this.user).once('value').then(function (snapReserve) {
                _this.driverReserves = snapReserve.val();
                console.log(_this.driverReserves);
                //este if sirve para saber si si hay reservas y no crashear la app al desconectarse
                if (snapReserve.val() === null || snapReserve.val() === undefined) {
                    _this.changeColorOffline();
                    _this.instancesService.ToggleStatusOffline(_this.SignUpService.userPlace, _this.user);
                    _this.enable();
                    // this.autocompleteMyDest.input = '';
                }
                else {
                    var obj_1 = _this.driverReserves;
                    Object.getOwnPropertyNames(obj_1).forEach(function (key) {
                        console.log(obj_1[key]);
                        //check if user have any user in their reserve
                        console.log(obj_1[key].pendingUsers);
                        if (obj_1[key].pendingUsers !== undefined) {
                            _this.fullReserves.push(obj_1[key]);
                        }
                        else {
                            //there is people in the drivers' reserve
                            console.log("funciono");
                        }
                    });
                }
            }).then(function () {
                //este if sirve para saber si si hay reservas y no crashear la app al desconectarse
                if (_this.driverReserves === null || _this.driverReserves === undefined) {
                    _this.changeColorOffline();
                    _this.instancesService.ToggleStatusOffline(_this.SignUpService.userPlace, _this.user);
                    _this.enable();
                    // this.autocompleteMyDest.input = '';
                }
                else {
                    if (_this.fullReserves.length === 0 || _this.fullReserves.length === undefined) {
                        _this.changeColorOffline();
                        // this.autocompleteMyDest.input = '';
                        _this.afDB.database.ref(_this.SignUpService.userPlace + '/reserves/' + _this.user).once('value').then(function (snap) {
                            console.log(snap.val());
                            var obj = snap.val();
                            Object.getOwnPropertyNames(obj).forEach(function (key) {
                                console.log(obj[key]);
                                if (obj[key].type === 'origin') {
                                    _this.geofireService.deleteUserGeofireOr(_this.SignUpService.userPlace, key);
                                }
                                else if (obj[key].type === 'destination') {
                                    _this.geofireService.deleteUserGeofireDest(_this.SignUpService.userPlace, key);
                                }
                            });
                        }).then(function () {
                            _this.TripsService.deleteAllReserves(_this.SignUpService.userPlace, _this.user);
                        });
                        _this.instancesService.ToggleStatusOffline(_this.SignUpService.userPlace, _this.user);
                        _this.enable();
                        // this.autocompleteMyDest.input = '';
                    }
                    else {
                        _this.alertOffline();
                    }
                }
            });
        }
    };
    DriverFindridePage.prototype.getTrip = function () {
        var _this = this;
        this.afDB.database.ref(this.SignUpService.userPlace + '/trips/' + this.user + '/' + this.keyTrip)
            .once('value').then(function (snapshot) {
            var trip = snapshot.val();
            console.log(trip);
            if (trip === null || trip === undefined) {
                console.log("borre");
                //  this.TripsService.eraseKeyTrip(this.user);
                //  this.TripsService.setOnTripFalse(this.user);
            }
            else {
                _this.getOnTrip();
            }
        });
    };
    DriverFindridePage.prototype.getOnTrip = function () {
        var _this = this;
        this.TripsService.getOnTrip(this.SignUpService.userPlace, this.user)
            .subscribe(function (onTrip) {
            _this.onTrip = onTrip;
            console.log(_this.onTrip);
        });
    };
    DriverFindridePage.prototype.goToTrip = function () {
        if (this.onTrip === true) {
            console.log('DISPARADOR');
            var modal = this.modalCtrl.create('DriverMyridePage');
            modal.present();
        }
        else {
            this.presentAlert('Error en el viaje', 'Intenta entrar otra vez, si el error persiste hay un problema con el viaje, porfavor elimina el viaje en Mis reservas', 'OK');
        }
    };
    DriverFindridePage.prototype.calculateRoute = function (positionOr, positionDest) {
        var _this = this;
        //tutorial ngclassroom https://blog.ng-classroom.com/blog/ionic2/directions-google-js-ionic/
        //calculate route between markers
        console.log("LO LOGREEEEEEEEEEEE");
        this.map.fitBounds(this.bounds);
        this.directionsService.route({
            origin: positionOr,
            destination: positionDest,
            travelMode: google.maps.TravelMode.DRIVING,
            avoidTolls: true
        }, function (response, status) {
            //render
            if (status === google.maps.DirectionsStatus.OK) {
                _this.directionsDisplay.setDirections(response);
            }
            else {
                alert('Could not display directions due to: ' + status);
            }
        });
    };
    //autocomplete of myPosition searchbar
    DriverFindridePage.prototype.updateSearchResultsMyPos = function () {
        var _this = this;
        if (this.autocompleteMyPos.input == '') {
            this.autocompleteItems = [];
            return;
        }
        this.GoogleAutocomplete.getPlacePredictions({ input: this.autocompleteMyPos.input, componentRestrictions: { country: 'co' } }, function (predictions, status) {
            _this.autocompleteItems = [];
            if (predictions) {
                _this.zone.run(function () {
                    predictions.forEach(function (prediction) {
                        _this.autocompleteItems.push(prediction);
                    });
                });
            }
        });
    };
    ////show destinations
    DriverFindridePage.prototype.updateSearchResultsMyDest = function () {
        if (this.userInfo.toggleStatus === 'online') {
            this.presentAlert('No es posible cambiar tu lugar de trabajo mientras estás conectado.', '', 'OK');
        }
        else {
            this.showList = true;
        }
    };
    ////select result of my position searchbar
    DriverFindridePage.prototype.selectSearchResultMyPos = function (item) {
        var _this = this;
        this.autocompleteItems = [];
        this.clearMarkersOr();
        this.geocoder.geocode({ 'placeId': item.place_id }, function (results, status) {
            if (status === 'OK' && results[0]) {
                // let position = {
                //     lat: results[0].geometry.location.lat,
                //     lng: results[0].geometry.location.lng
                // };
                _this.markerGeolocation = new google.maps.Marker({
                    position: results[0].geometry.location,
                    map: _this.map,
                    draggable: true,
                    icon: { url: "assets/imgs/house.png",
                        scaledSize: new google.maps.Size(70, 70)
                    },
                    animation: google.maps.Animation.DROP,
                });
                _this.positionOrMarker = results[0].geometry.location;
                _this.geocoordinatesHouse = { latOr: results[0].geometry.location.lat(), lngOr: results[0].geometry.location.lng() };
                console.log(_this.geocoordinatesHouse);
                console.log(_this.positionDest);
                _this.dragMarkerOr(_this.markerGeolocation, _this.autocompleteMyPos);
                _this.markersOr.push(_this.markerGeolocation);
                _this.map.setCenter(results[0].geometry.location);
                console.log(results[0].geometry.location);
                console.log(_this.positionDest);
                _this.autocompleteMyPos.input = [item.description];
                _this.calculateRoute(results[0].geometry.location, _this.positionDest);
                // this.directionsDisplay.setMap(null)
                // this.bounds.extend(this.geocoordinatesHouse);
                // this.map.fitBounds(this.bounds);
            }
        });
    };
    ////select result of my destination searchbar
    DriverFindridePage.prototype.selectSearchResultMyDest = function (item) {
        if (this.userInfo.toggleStatus === 'online') {
            this.presentAlert('Información', 'No se puede cambiar el lugar mientras estas conectado.', 'OK');
        }
        else {
            this.clearMarkersDest();
            this.positionDest = new google.maps.LatLng(item.lat, item.lng);
            this.geocoordinatesDest = { lat: item.lat, lng: item.lng };
            this.geocoordinatesDestName = item.name;
            this.markerDest = new google.maps.Marker({
                position: this.positionDest,
                map: this.map,
                animation: google.maps.Animation.DROP,
                icon: { url: "assets/imgs/workbuilding.png",
                    scaledSize: new google.maps.Size(250, 250)
                }
            });
            this.markersDest.push(this.markerDest);
            this.autocompleteMyDest.input = [item.name];
            this.showList = false;
            this.calculateRoute(this.positionOrMarker, this.positionDest);
            this.directionsDisplay.setMap(this.map);
            this.positionDest = { lat: item.lat, lng: item.lng };
            this.SignUpService.userPlace = item.zone;
        }
    };
    ////////Markers
    DriverFindridePage.prototype.clearMarkersDest = function () {
        for (var i = 0; i < this.markersDest.length; i++) {
            this.markersDest[i].setMap(null);
        }
        this.markersDest = [];
    };
    DriverFindridePage.prototype.clearMarkersOr = function () {
        for (var i = 0; i < this.markersOr.length; i++) {
            this.markersOr[i].setMap(null);
        }
        this.markersOr = [];
    };
    DriverFindridePage.prototype.dragMarkerOr = function (marker, inputName) {
        //if online the user does not have permision to move the marker
        var _this = this;
        google.maps.event.addListener(marker, 'dragend', function (evt) {
            if (_this.userInfo.toggleStatus == 'online') {
                _this.presentAlert('Error', 'No se puede mover el marcador mientras estas en modo ONLINE, recomendamos volver a iniciar la app para un mejor funcionamiento ', 'OK');
            }
            else if (_this.userInfo.toggleStatus == 'offline') {
                //allow origin marker to be draged and calculate route with the new position
                var lat = marker.getPosition().lat();
                var lng = marker.getPosition().lng();
                var latOr = marker.getPosition().lat();
                var lngOr = marker.getPosition().lng();
                var latLng = { lat: lat, lng: lng };
                var latLngOr = { latOr: latOr, lngOr: lngOr };
                console.log(latLng);
                _this.geocodeLatLng(latLng, inputName);
                console.log(_this.positionDest);
                _this.calculateRoute(latLng, _this.positionDest);
                _this.geocoordinatesHouse = latLngOr;
            }
        });
    };
    DriverFindridePage.prototype.centerMap = function () {
    };
    DriverFindridePage.prototype.geocodeLatLng = function (latLng, inputName) {
        this.geocoder.geocode({ 'location': latLng }, function (results, status) {
            if (status === 'OK') {
                if (results[0]) {
                    inputName.input = [results[0].formatted_address];
                }
                else {
                    alert('No results found');
                }
            }
            else {
                alert('Geocoder failed due to: ' + status);
            }
        });
    };
    DriverFindridePage.prototype.presentAlert = function (title, text, button) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: [button]
        });
        alert.present();
    };
    DriverFindridePage.prototype.confirmPrice = function (houseAddr, placeAddr) {
        this.doGeoquery = false;
        var modal = this.modalCtrl.create('DriverConfirmpricePage', { houseAddr: houseAddr, placeAddr: placeAddr });
        modal.present();
    };
    DriverFindridePage.prototype.help = function () {
        var toast = this.toastCtrl.create({
            message: 'En esta página podrás conectarte con compañeros de tu misma universidad que quieran compartir un viaje contigo.',
            showCloseButton: true,
            closeButtonText: 'OK',
            position: 'top'
        });
        toast.present();
    };
    DriverFindridePage.prototype.disable = function () {
        var inputs = document.getElementById("input").getElementsByTagName("INPUT");
        inputs[0].disabled = true;
        // const inputs2: any = document.getElementById("input2").getElementsByTagName("INPUT");
        // inputs2[0].disabled=true;
    };
    DriverFindridePage.prototype.enable = function () {
        var inputs = document.getElementById("input").getElementsByTagName("INPUT");
        inputs[0].disabled = false;
        // const inputs2: any = document.getElementById("input2").getElementsByTagName("INPUT");
        // inputs2[0].disabled=false;
        //     }
    };
    DriverFindridePage.prototype.showPopup = function () {
        var profileModal = this.modalCtrl.create('DriverSuccessNotificationPage');
        profileModal.present();
    };
    DriverFindridePage.prototype.alertOffline = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: '¿Quieres desconectarte?',
            message: 'Waypool te conectó con otra persona, si te desconectas, le cancelarás el viaje',
            buttons: [
                {
                    text: 'Ir a Mis Viajes',
                    handler: function () {
                        _this.navCtrl.push('DriverReservetripPage');
                    }
                },
                {
                    text: 'Offline :(',
                    handler: function () {
                        _this.changeColorOffline();
                        _this.autocompleteMyDest.input = '';
                        _this.afDB.database.ref(_this.SignUpService.userPlace + '/reserves/' + _this.user).once('value').then(function (snap) {
                            console.log(snap.val());
                            var obj = snap.val();
                            Object.getOwnPropertyNames(obj).forEach(function (key) {
                                console.log(obj[key]);
                                if (obj[key].type === 'origin') {
                                    _this.geofireService.deleteUserGeofireOr(_this.SignUpService.userPlace, key);
                                }
                                else if (obj[key].type === 'destination') {
                                    _this.geofireService.deleteUserGeofireDest(_this.SignUpService.userPlace, key);
                                }
                            });
                        }).then(function () {
                            _this.TripsService.deleteAllReserves(_this.SignUpService.userPlace, _this.user);
                        });
                        _this.instancesService.ToggleStatusOffline(_this.SignUpService.userPlace, _this.user);
                        _this.enable();
                    }
                }
            ]
        });
        alert.present();
    };
    DriverFindridePage.prototype.changeColorOnline = function () {
        // this.renderer.setElementStyle(this.buttonConected.nativeElement,'background-color','green')
        // this.renderer.setElementStyle(this.buttonConected.nativeElement,'border-width','2px')
        // this.renderer.setElementStyle(this.buttonConected.nativeElement,'border-style','solid')
        // this.renderer.setElementStyle(this.buttonConected.nativeElement,'border-color','green')
        // this.renderer.setElementStyle(this.buttonDshowConectedButton.nativeElement,'border-width','2px')
        // this.renderer.setElementStyle(this.buttonDshowConectedButton.nativeElement,'border-style','solid')
        // this.renderer.setElementStyle(this.buttonDshowConectedButton.nativeElement,'border-color','green')
        // this.renderer.setElementStyle(this.buttonDshowConectedButton.nativeElement,'background-color','transparent')
        // this.renderer.setElementStyle(this.buttonDshowConectedButton.nativeElement,'font-color','#bfbfbf')
        this.showPopup();
    };
    DriverFindridePage.prototype.changeColorOffline = function () {
        // this.renderer.setElementStyle(this.buttonDshowConectedButton.nativeElement,'border-width','2px')
        // this.renderer.setElementStyle(this.buttonDshowConectedButton.nativeElement,'background-color','rgb(167, 23, 23)')
        // this.renderer.setElementStyle(this.buttonDshowConectedButton.nativeElement,'border-style','solid')
        // this.renderer.setElementStyle(this.buttonDshowConectedButton.nativeElement,'border-color','rgb(167, 23, 23)')
        // this.renderer.setElementStyle(this.buttonConected.nativeElement,'border-width','2px')
        // this.renderer.setElementStyle(this.buttonConected.nativeElement,'border-style','solid')
        // this.renderer.setElementStyle(this.buttonConected.nativeElement,'border-color','rgb(167, 23, 23)')
        // this.renderer.setElementStyle(this.buttonConected.nativeElement,'background-color','transparent')
        // this.renderer.setElementStyle(this.buttonConected.nativeElement,'font-color','#bfbfbf')
    };
    DriverFindridePage.prototype.pushOriginPage = function () {
        this.navCtrl.push('DriverSpecifyOriginPage');
    };
    DriverFindridePage.prototype.CreateOneTrip = function () {
        this.navCtrl.push('oneTripPricePage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]) === "function" && _a || Object)
    ], DriverFindridePage.prototype, "mapElement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('buttonConected', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] }),
        __metadata("design:type", Object)
    ], DriverFindridePage.prototype, "buttonConected", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('buttonDshowConectedButton', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] }),
        __metadata("design:type", Object)
    ], DriverFindridePage.prototype, "buttonDshowConectedButton", void 0);
    DriverFindridePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'driver-page-findride',template:/*ion-inline-start:"C:\Users\Daniel\Documents\waypool\prod\latest\waypool_costumer\src\pages\findride\driverFindride.html"*/'<ion-header class="bg-theme-driver"  >\n\n    \n\n    <ion-navbar  >\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu" style="color: white;"></ion-icon>\n\n          \n\n          </button>\n\n          <!-- <ion-avatar ion-button menuToggle>\n\n            <img style="height:100%; width:100%" src="assets/imgs/menu.png">\n\n        </ion-avatar> -->\n\n          <ion-buttons style="display: flex; justify-content: center;"> \n\n              <ion-item style="background-color: transparent;">\n\n                <!-- <ion-toggle [(ngModel)]="isConected" [checked]="isConected" (ionChange)="conectDriver()"></ion-toggle> -->\n\n\n\n                  <!-- <div><p class="text-white">Conectado</p></div> -->\n\n              \n\n                  <ion-row class="center-align row" style="margin-left: 16px; justify-content: flex-end;" >\n\n                    \n\n                      <button  #buttonDisconected class="btn bg-theme rounded text-white buttonDisconected" style="border-radius:25px; height: 40px;"  *ngIf="showConectedButton" (click)="conectDriver()" >\n\n                        <ion-icon  name="calendar"></ion-icon>\n\n                           PUBLICAR HORARIO\n\n\n\n                      </button>\n\n                      <button #buttonConected  class="btn  text-white buttonConected" (click)="disconectDriver()" style="border-radius: 25px;height: 40px; border-color: green;" *ngIf="!showConectedButton" >\n\n                        <ion-icon  name="calendar"></ion-icon>\n\n\n\n                        HORARIO PUBLICADO </button>\n\n                    \n\n                    \n\n                </ion-row>\n\n              </ion-item>\n\n\n\n           \n\n \n\n          </ion-buttons> \n\n       \n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n\n\n\n\n<ion-content  padding>\n\n\n\n      <ion-card class="search" >\n\n          <ion-card-content>\n\n\n\n              <span class="dot bg-theme-driver"></span>\n\n              <ion-searchbar required [(ngModel)]="autocompleteMyPos.input" id="input" [animated]=true (ionInput)="updateSearchResultsMyPos()"  placeholder="Cóloca tu origen"></ion-searchbar>\n\n\n\n              <ion-list   [hidden]="autocompleteItems.length == 0">\n\n                  <ion-item  *ngFor="let item of autocompleteItems" tappable (click)="selectSearchResultMyPos(item)">\n\n                    {{ item.description }}\n\n                  </ion-item>\n\n                </ion-list>\n\n                <!-- <ion-icon name="md-locate" (click)="getPositionAndMarker()" class="text-black"></ion-icon> -->\n\n          </ion-card-content>\n\n\n\n          <ion-card-content>\n\n\n\n              <span class="dot bg-yellow"></span>           \n\n             <ion-searchbar  [(ngModel)]="autocompleteMyDest.input"  id="input2" (click)="updateSearchResultsMyDest()" placeholder="Cóloca tu destino"></ion-searchbar>\n\n  \n\n  \n\n              <ion-list   *ngIf="showList">\n\n              <ion-item class="item" *ngFor="let item of multipleDestinations" tappable (click)="selectSearchResultMyDest(item)">\n\n                {{ item.name }}\n\n              </ion-item>\n\n            </ion-list>\n\n            \n\n           </ion-card-content>\n\n           \n\n      </ion-card>\n\n      <div style="display: flex; justify-content: center;">\n\n        <button (click)="CreateOneTrip()" class="btn rounded bg-theme text-white " style="width: 50%">Publicar Viaje</button>   \n\n      </div>\n\n      <!-- <ion-avatar item-end>\n\n          <img style="height: 15%; width: 15%;" src="assets/imgs/centermap.png" (click)="centerMap()">\n\n      </ion-avatar> -->\n\n  \n\n   <div #map id="map"></div>  \n\n     \n\n\n\n  \n\n            <div *ngIf="onTrip" >\n\n              <button class="btn rounded bg-theme-driver text-white animated infinite pulse" style=" width: 100% ;\n\n              position: fixed ;\n\n              bottom: 0px ;\n\n              left: 0px ;\n\n              height: 51px; \n\n              font-size: large;\n\n              \n\n          " (click)="goToTrip() " >VIAJE EN CURSO\n\n              </button>\n\n          </div>\n\n     \n\n  \n\n \n\n    \n\n   \n\n    \n\n\n\n\n\n \n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\Daniel\Documents\waypool\prod\latest\waypool_costumer\src\pages\findride\driverFindride.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__services_d_geofire_services__["a" /* DriverGeofireService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_d_geofire_services__["a" /* DriverGeofireService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_10__services_d_trips_service__["a" /* DriverTripsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__services_d_trips_service__["a" /* DriverTripsService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7__angular_fire_database__["AngularFireDatabase"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_fire_database__["AngularFireDatabase"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* NavController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__services_d_signup_service__["a" /* DriverSignUpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_d_signup_service__["a" /* DriverSignUpService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ModalController */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_8__services_d_driverauthentication_service__["a" /* DriverAuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__services_d_driverauthentication_service__["a" /* DriverAuthenticationService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation___["a" /* Geolocation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation___["a" /* Geolocation */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_4__services_d_sendCoords_service__["a" /* DriverSendCoordsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_d_sendCoords_service__["a" /* DriverSendCoordsService */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["AngularFireAuth"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["AngularFireAuth"]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */]) === "function" && _o || Object, typeof (_p = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* ToastController */]) === "function" && _p || Object, typeof (_q = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* App */]) === "function" && _q || Object, typeof (_r = typeof __WEBPACK_IMPORTED_MODULE_9__services_d_sendUsers_service__["a" /* DriverSendUsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__services_d_sendUsers_service__["a" /* DriverSendUsersService */]) === "function" && _r || Object, typeof (_s = typeof __WEBPACK_IMPORTED_MODULE_11__services_d_instances_services__["a" /* DriverInstancesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__services_d_instances_services__["a" /* DriverInstancesService */]) === "function" && _s || Object, typeof (_t = typeof __WEBPACK_IMPORTED_MODULE_13__ionic_native_firebase__["a" /* Firebase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_13__ionic_native_firebase__["a" /* Firebase */]) === "function" && _t || Object, typeof (_u = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* Platform */]) === "function" && _u || Object, typeof (_v = typeof __WEBPACK_IMPORTED_MODULE_12__ionic_native_fcm__["a" /* FCM */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_12__ionic_native_fcm__["a" /* FCM */]) === "function" && _v || Object, typeof (_w = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* LoadingController */]) === "function" && _w || Object, typeof (_x = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */]) === "function" && _x || Object])
    ], DriverFindridePage);
    return DriverFindridePage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x;
}());

//# sourceMappingURL=driverFindride.js.map

/***/ })

});
//# sourceMappingURL=51.js.map