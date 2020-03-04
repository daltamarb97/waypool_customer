webpackJsonp([50],{

/***/ 699:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverFindridePageModule", function() { return DriverFindridePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__driverFindride__ = __webpack_require__(893);
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

/***/ 893:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverFindridePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation___ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_d_sendCoords_service__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_d_signup_service__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_d_geofire_services__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_fire_database__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_d_driverauthentication_service__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_d_sendUsers_service__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_d_trips_service__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_d_instances_services__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_fcm__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_firebase__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_metrics_service__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_d_metrics_service__ = __webpack_require__(363);
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
    function DriverFindridePage(geofireService, TripsService, afDB, navCtrl, SignUpService, modalCtrl, authenticationService, geolocation, zone, sendCoordsService, AngularFireAuth, alertCtrl, toastCtrl, app, sendUsersService, instancesService, firebaseNative, platform, fcm, loadingCtrl, renderer, MetricsService, DriverMetricsService) {
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
        this.MetricsService = MetricsService;
        this.DriverMetricsService = DriverMetricsService;
        // waypoints variables
        this.directionsService = null;
        this.directionsDisplay = null;
        this.bounds = null;
        this.myLatLng = [];
        this.count = 0;
        //firebase 
        this.trip = {};
        this.tripId = null;
        this.user = this.AngularFireAuth.auth.currentUser.uid;
        this.currentUser = this.AngularFireAuth.auth.currentUser;
        // driverInfo:any = {};
        this.geoInfo1 = {};
        this.geoInfo2 = {};
        //variables for geofire reserves
        this.reserves = [];
        this.locationUniversity = {};
        this.isConected = false;
        this.schedules = [];
        this.myReserves = [];
        this.checked = false;
        this.fullReserves = [];
        this.multipleDestinations = [];
        this.markersOr = [];
        this.markersDest = [];
        this.pointsAlongRoute = [];
        this.indexesOfPointsAlongRoute = [];
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
        this.SignUpService.getMyInfoDriver(this.user).subscribe(function (user) {
            _this.userInfo = user;
            console.log(_this.userInfo);
            _this.loadMap();
        });
        this.afDB.database.ref('allUsers/' + this.user).once('value').then(function (snap) {
            if (snap.val().toggleOnline) {
                //user get their check sign of verficiation here
                _this.instancesService.isVerifiedPerson(_this.user);
                _this.platform.ready().then(function () {
                    _this.getToken();
                    //NO BORRAR
                    // console.log('aqui cogi el token');
                    // this.token = this.fcm.getToken().then((token)=>{
                    //   console.log('this is the token ' + token);
                    //   this.afDB.database.ref( '/drivers/' + this.user + '/devices/').update({
                    //     token: token
                    //   })
                    // })
                });
                //search keyTrip
                //search keyTrip
                _this.TripsService.getKeyTrip(_this.user)
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
            }
            else {
                //user get their check sign of verficiation here
                _this.instancesService.isVerifiedPerson(_this.user);
                //logica de instrucciones 
                _this.afDB.database.ref('/driversTest/' + _this.user).once('value').then(function (snapWalkthr) {
                    if (snapWalkthr.val().shownInstructions === true) {
                        console.log('ya lo mostre');
                    }
                    else {
                        _this.app.getRootNav().push('DriverWalkthroughPage');
                        _this.afDB.database.ref('/driversTest/' + _this.user).update({
                            shownInstructions: true
                        });
                    }
                });
                _this.platform.ready().then(function () {
                    // this.getToken();
                    console.log('aqui cogi el token');
                    _this.token = _this.fcm.getToken().then(function (token) {
                        console.log('this is the token ' + token);
                        _this.afDB.database.ref('/drivers/' + _this.user + '/devices/').update({
                            token: token
                        });
                    });
                });
                //search keyTrip
                _this.TripsService.getKeyTrip(_this.user)
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
                                _this.afDB.database.ref('/drivers/' + _this.user + '/devices/').update({
                                    token: token
                                });
                            })];
                    case 1:
                        _a.token = _c.sent();
                        _c.label = 2;
                    case 2:
                        if (!this.platform.is('ios')) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.firebaseNative.grantPermission()];
                    case 3:
                        _c.sent();
                        _b = this;
                        return [4 /*yield*/, this.firebaseNative.getToken().then(function (token) {
                                console.log('this is the token ' + token);
                                _this.afDB.database.ref('/drivers/' + _this.user + '/devices/').update({
                                    token: token
                                }).then(function () {
                                    console.log('DONE DRIVER DEVICE TOKEN');
                                });
                            })];
                    case 4:
                        _b.token = _c.sent();
                        _c.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    DriverFindridePage.prototype.loadMap = function () {
        var _this = this;
        // this gets current position and set the camera of the map and put a marker in your location
        this.geolocation.getCurrentPosition({ enableHighAccuracy: true }).then(function (position) {
            var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
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
            _this.myLatLng = { lat: position.coords.latitude, lng: position.coords.longitude };
            _this.markerGeolocation = new google.maps.Marker({
                map: _this.map,
                animation: google.maps.Animation.DROP,
                position: latLng,
                draggable: true,
                icon: { url: "assets/imgs/marker-origin.png",
                    scaledSize: new google.maps.Size(90, 90)
                }
            });
            _this.markers.push(_this.markerGeolocation);
            //allow the marker to be draged and changed the position
            _this.dragMarkerOr(_this.markerGeolocation, _this.autocompleteMyPos);
            //to reverse-geocode position
            _this.geocodeLatLng(latLng, _this.autocompleteMyPos);
        }, function (err) {
            console.log(err);
        });
    };
    DriverFindridePage.prototype.calculateRoute = function (positionOr, positionDest) {
        //tutorial ngclassroom https://blog.ng-classroom.com/blog/ionic2/directions-google-js-ionic/
        //calculate route between markers
        var _this = this;
        this.bounds.extend(this.myLatLng);
        this.map.fitBounds(this.bounds);
        this.directionsService.route({
            origin: positionOr,
            destination: positionDest,
            travelMode: google.maps.TravelMode.DRIVING,
            avoidTolls: true
        }, function (response, status) {
            var pointArray = response.routes[0].overview_path;
            _this.pointsAlongRoute = [];
            pointArray.forEach(function (location) {
                _this.pointsAlongRoute.push({
                    lat: location.lat(),
                    lng: location.lng()
                });
            });
            console.log(_this.pointsAlongRoute);
            var NumberPointsToDrawDivision = _this.pointsAlongRoute.length / 10;
            console.log(NumberPointsToDrawDivision);
            _this.indexesOfPointsAlongRoute = [
                Math.floor(NumberPointsToDrawDivision),
                Math.floor(NumberPointsToDrawDivision * 2),
                Math.floor(NumberPointsToDrawDivision * 3),
                Math.floor(NumberPointsToDrawDivision * 4),
                Math.floor(NumberPointsToDrawDivision * 5),
                Math.floor(NumberPointsToDrawDivision * 6),
                Math.floor(NumberPointsToDrawDivision * 7),
                Math.floor(NumberPointsToDrawDivision * 8),
                Math.floor(NumberPointsToDrawDivision * 9),
            ];
            console.log(_this.indexesOfPointsAlongRoute);
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
    ////autocomplete of my destination Searchbar
    DriverFindridePage.prototype.updateSearchResultsMyDest = function () {
        var _this = this;
        if (this.autocompleteMyDest.input == '') {
            this.autocompleteItems2 = [];
            return;
        }
        this.GoogleAutocomplete.getPlacePredictions({ input: this.autocompleteMyDest.input, componentRestrictions: { country: 'co' } }, function (predictions, status) {
            _this.autocompleteItems2 = [];
            if (predictions) {
                _this.zone.run(function () {
                    predictions.forEach(function (prediction) {
                        _this.autocompleteItems2.push(prediction);
                    });
                });
            }
        });
    };
    ////select result of my position searchbar
    DriverFindridePage.prototype.selectSearchResultMyPos = function (item) {
        var _this = this;
        this.autocompleteItems = [];
        this.clearMarkers();
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
                    icon: { url: "assets/imgs/marker-origin-driver.png",
                        scaledSize: new google.maps.Size(90, 90)
                    },
                    animation: google.maps.Animation.DROP,
                });
                _this.dragMarkerOr(_this.markerGeolocation, _this.autocompleteMyPos);
                _this.markers.push(_this.markerGeolocation);
                _this.map.setCenter(results[0].geometry.location);
                console.log(results[0].geometry.location);
                _this.autocompleteMyPos.input = [item.description];
                _this.autocompleteMyDest.input = '';
                _this.directionsDisplay.setMap(null);
            }
        });
    };
    ////select result of my destination searchbar
    DriverFindridePage.prototype.selectSearchResultMyDest = function (item) {
        var _this = this;
        this.autocompleteItems2 = [];
        if (this.markerDest !== undefined) {
            this.markerDest.setMap(null);
        }
        this.geocoder.geocode({ 'placeId': item.place_id }, function (results, status) {
            if (status === 'OK' && results[0]) {
                // let position = {
                //   latitude: results[0].geometry.location.lat,
                //   longitude: results[0].geometry.location.lng
                // };
                var position = new google.maps.LatLng(results[0].geometry.location.lat, results[0].geometry.location.lng);
                console.log(position);
                _this.markerDest = new google.maps.Marker({
                    position: results[0].geometry.location,
                    map: _this.map,
                    animation: google.maps.Animation.DROP,
                    draggable: true,
                    icon: { url: "assets/imgs/marker-destination2.png",
                        scaledSize: new google.maps.Size(90, 90)
                    }
                });
                console.log(position);
                _this.map.fitBounds(_this.bounds);
                _this.markers.push(_this.markerDest);
                _this.map.setCenter(results[0].geometry.location);
                console.log(results[0].geometry.location);
                _this.autocompleteMyDest.input = [item.description];
                _this.dragMarkerDest(_this.markerDest, _this.autocompleteMyDest);
                _this.directionsDisplay.setMap(_this.map);
                _this.myLatLngDest = results[0].geometry.location;
                _this.calculateRoute(_this.markerGeolocation.position, results[0].geometry.location);
            }
        });
    };
    ////////Markers
    DriverFindridePage.prototype.clearMarkers = function () {
        for (var i = 0; i < this.markers.length; i++) {
            this.markers[i].setMap(null);
        }
        this.markers = [];
    };
    DriverFindridePage.prototype.dragMarkerDest = function (marker, inputName) {
        var _this = this;
        //allow destination marker to be draged and calculate route with the new position
        google.maps.event.addListener(marker, 'dragend', function (evt) {
            var lat = marker.getPosition().lat();
            var lng = marker.getPosition().lng();
            var latLng = { lat: lat, lng: lng };
            _this.map.setCenter(latLng);
            _this.geocodeLatLng(latLng, inputName);
            _this.calculateRoute(_this.markerGeolocation.position, latLng);
        });
    };
    DriverFindridePage.prototype.dragMarkerOr = function (marker, inputName) {
        //allow origin marker to be draged and calculate route with the new position
        var _this = this;
        google.maps.event.addListener(marker, 'dragend', function (evt) {
            var lat = marker.getPosition().lat();
            var lng = marker.getPosition().lng();
            var latLng = { lat: lat, lng: lng };
            _this.map.setCenter(latLng);
            _this.geocodeLatLng(latLng, inputName);
            if (_this.autocompleteMyDest.input == undefined || _this.autocompleteMyDest.input == '') {
                console.log("funciona");
            }
            else {
                _this.calculateRoute(latLng, _this.markerDest.position);
            }
        });
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
    DriverFindridePage.prototype.getTrip = function () {
        var _this = this;
        this.afDB.database.ref('/trips/' + this.user + '/' + this.keyTrip)
            .once('value').then(function (snapshot) {
            var trip = snapshot.val();
            console.log(trip);
            if (trip === null || trip === undefined) {
                console.log("borre");
                _this.TripsService.eraseKeyTrip(_this.user);
                _this.TripsService.setOnTripFalse(_this.user);
            }
            else {
                _this.getOnTrip();
            }
        });
    };
    DriverFindridePage.prototype.getOnTrip = function () {
        var _this = this;
        this.TripsService.getOnTrip(this.user)
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
    DriverFindridePage.prototype.centerMap = function () {
    };
    DriverFindridePage.prototype.presentAlert = function (title, text, button) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: [button]
        });
        alert.present();
    };
    DriverFindridePage.prototype.confirmPrice = function (keyReserve) {
        //  this.doGeoquery = false;
        var _this = this;
        var modal = this.modalCtrl.create('DriverConfirmpricePage', { keyReserve: keyReserve });
        modal.onDidDismiss(function (data) {
            if (data === true) {
                _this.navCtrl.push('DriverSuccessNotificationPage');
            }
        });
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
    DriverFindridePage.prototype.listride = function () {
        var _this = this;
        if (this.currentUser.emailVerified == false) {
            var alert = this.alertCtrl.create({
                title: 'Oops!',
                subTitle: 'por favor verifica tu email',
                buttons: ['OK']
            });
            alert.present();
        }
        else {
            try {
                this.orFirebase = [this.autocompleteMyPos.input];
                this.desFirebase = [this.autocompleteMyDest.input];
                console.log(this.orFirebase);
                if (this.autocompleteMyDest.input == '' || this.autocompleteMyPos.input == '') {
                    this.presentAlert('No tienes toda la informacion', 'Por favor asegura que tu origen y destino sean correctos', 'Ok');
                    this.clearMarkers();
                    this.directionsDisplay.setDirections({ routes: [] });
                    // this.loadMap();
                }
                else {
                    this.sendCoordsService.pushcoordinatesDrivers(this.user, this.desFirebase, this.orFirebase);
                    this.afDB.database.ref('/reservesTest/' + this.user).push({
                        driver: this.userInfo,
                        // car:this.userInfo.cars,
                        origin: this.orFirebase,
                        destination: this.desFirebase,
                    }).then(function (snap1) {
                        var key1 = snap1.key;
                        _this.MetricsService.createdInstantRoutes(_this.user, _this.desFirebase, _this.orFirebase);
                        // set geofires
                        console.log(_this.myLatLng.lat(), _this.myLatLng.lng());
                        _this.geofireService.setGeofireOrNEWTEST(key1, _this.myLatLng.lat, _this.myLatLng.lng);
                        _this.afDB.database.ref('/geofireOr/' + key1).update({
                            driverId: _this.userInfo.userId
                        });
                        console.log('executed geofire Or');
                        _this.afDB.database.ref('/reservesTest/' + _this.user + '/' + key1).update({
                            keyTrip: key1
                        });
                        _this.geofireService.setGeofireDestNEWTEST(key1, _this.myLatLngDest.lat(), _this.myLatLngDest.lng());
                        _this.afDB.database.ref('/geofireDest/' + key1).update({
                            driverId: _this.userInfo.userId
                        });
                        console.log('executed geofire dest');
                        _this.indexesOfPointsAlongRoute.forEach(function (index) {
                            _this.count++;
                            var newKey = key1.concat(_this.count);
                            _this.geofireService.setGeofireRoute(newKey, _this.pointsAlongRoute[index].lat, _this.pointsAlongRoute[index].lng);
                            _this.afDB.database.ref('/geofireRoute/' + newKey).update({
                                driverId: _this.userInfo.userId,
                                keyTrip: key1
                            });
                        });
                        console.log('executed geofire route');
                        _this.confirmPrice(key1);
                    });
                }
            }
            catch (error) {
                console.log(error);
                this.presentAlert('Hay un error en la aplicación', 'Lo sentimos, por favor para solucionar este problema porfavor envianos un correo a soporte@waypool.com,¡lo solucionaremos!.', 'Ok');
                console.log(this.orFirebase);
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('map'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]) === "function" && _a || Object)
    ], DriverFindridePage.prototype, "mapElement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('buttonConected', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] }),
        __metadata("design:type", Object)
    ], DriverFindridePage.prototype, "buttonConected", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('buttonDisconected', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] }),
        __metadata("design:type", Object)
    ], DriverFindridePage.prototype, "buttonDisconected", void 0);
    DriverFindridePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'driver-page-findride',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/waypool_costumer/src/pages/findride/driverFindride.html"*/'<ion-header class="bg-theme-driver"  >\n    \n    <ion-navbar  >\n        <button ion-button menuToggle>\n            <ion-icon name="menu" style="color: white;"></ion-icon>\n          \n          </button>\n          <!-- <ion-avatar ion-button menuToggle>\n            <img style="height:100%; width:100%" src="assets/imgs/menu.png">\n        </ion-avatar> -->\n          <ion-buttons style="display: flex; justify-content: center;"> \n              <ion-item style="background-color: transparent;">\n                <!-- <ion-toggle [(ngModel)]="isConected" [checked]="isConected" (ionChange)="conectDriver()"></ion-toggle> -->\n\n                  <!-- <div><p class="text-white">Conectado</p></div> -->\n<!--               \n                  <ion-row class="center-align row" style="margin-left: 16px; justify-content: flex-end;" >\n                    \n                      <button  #buttonDisconected class="btn rounded bg-red  text-white buttonDisconected" (click)="disconectDriver()" >Offline</button>\n                      <button #buttonConected  class="btn  text-white buttonConected" (click)="conectDriver()" >Online</button>\n                    \n                    \n                </ion-row> -->\n              </ion-item>\n\n           \n \n          </ion-buttons> \n       \n    </ion-navbar>\n\n</ion-header>\n\n\n\n\n<ion-content  padding>\n    \n    <ion-card class="search">\n          \n        <ion-card-content>\n            <span class="dot bg-theme"></span>\n            <ion-searchbar required [(ngModel)]="autocompleteMyPos.input" [animated]=true (ionInput)="updateSearchResultsMyPos()"  placeholder="Tu origen"></ion-searchbar>\n          \n            <ion-list   [hidden]="autocompleteItems.length == 0">\n                <ion-item  *ngFor="let item of autocompleteItems" tappable (click)="selectSearchResultMyPos(item)">\n                  {{ item.description }}\n                </ion-item>\n              </ion-list>\n              <!-- <ion-icon name="md-locate" (click)="getPositionAndMarker()" class="text-black"></ion-icon> -->\n        </ion-card-content>\n        <ion-card-content>\n            <span class="dot bg-yellow"></span>           \n           <ion-searchbar required [(ngModel)]="autocompleteMyDest.input" (ionInput)="updateSearchResultsMyDest()" placeholder="Tu destino"></ion-searchbar>\n\n\n            <ion-list   [hidden]="autocompleteItems2.length == 0">\n            <ion-item class="item" *ngFor="let item of autocompleteItems2" tappable (click)="selectSearchResultMyDest(item)">\n              {{ item.description }}\n            </ion-item>\n          </ion-list>\n            <!-- <span class="text-light search-text">Office &nbsp;<ion-icon name="ios-arrow-down" class="text-light"></ion-icon></span> -->\n\n        </ion-card-content>\n        \n    </ion-card>\n\n\n <div #map id="map"></div>  \n    <div></div>\n    \n    <ion-row class="rowOfButtons">\n<!-- \n            <div class="btn-footer btn-left">\n                <button class="btn rounded bg-darkblue text-white myReservesButton" style="width: 100%" (click)="availableReserves()" >Mis Reservas</button>\n\n            \n            </div> -->\n            <div class="btn-right">\n                <button (click)="listride()" class="btn rounded bg-theme text-white" style="width: 100%">Publicar Viaje</button>\n\n            </div>\n           \n          </ion-row>\n\n          <div *ngIf="onTrip" >\n            <button class="btn rounded bg-theme text-white animated infinite pulse" style=" width: 100% ;\n            position: fixed ;\n            bottom: 0px ;\n            left: 0px ;\n            height: 51px; \n            font-size: large;\n            \n        " (click)="goToTrip() " >VIAJE EN CURSO\n            </button>\n        </div>\n</ion-content>\n\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/waypool_costumer/src/pages/findride/driverFindride.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__services_d_geofire_services__["a" /* DriverGeofireService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_d_geofire_services__["a" /* DriverGeofireService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_10__services_d_trips_service__["a" /* DriverTripsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__services_d_trips_service__["a" /* DriverTripsService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7__angular_fire_database__["AngularFireDatabase"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_fire_database__["AngularFireDatabase"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* NavController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__services_d_signup_service__["a" /* DriverSignUpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_d_signup_service__["a" /* DriverSignUpService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ModalController */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_8__services_d_driverauthentication_service__["a" /* DriverAuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__services_d_driverauthentication_service__["a" /* DriverAuthenticationService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation___["a" /* Geolocation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation___["a" /* Geolocation */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_4__services_d_sendCoords_service__["a" /* DriverSendCoordsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_d_sendCoords_service__["a" /* DriverSendCoordsService */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["AngularFireAuth"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["AngularFireAuth"]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */]) === "function" && _o || Object, typeof (_p = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* ToastController */]) === "function" && _p || Object, typeof (_q = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* App */]) === "function" && _q || Object, typeof (_r = typeof __WEBPACK_IMPORTED_MODULE_9__services_d_sendUsers_service__["a" /* DriverSendUsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__services_d_sendUsers_service__["a" /* DriverSendUsersService */]) === "function" && _r || Object, typeof (_s = typeof __WEBPACK_IMPORTED_MODULE_11__services_d_instances_services__["a" /* DriverInstancesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__services_d_instances_services__["a" /* DriverInstancesService */]) === "function" && _s || Object, typeof (_t = typeof __WEBPACK_IMPORTED_MODULE_13__ionic_native_firebase__["a" /* Firebase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_13__ionic_native_firebase__["a" /* Firebase */]) === "function" && _t || Object, typeof (_u = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* Platform */]) === "function" && _u || Object, typeof (_v = typeof __WEBPACK_IMPORTED_MODULE_12__ionic_native_fcm__["a" /* FCM */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_12__ionic_native_fcm__["a" /* FCM */]) === "function" && _v || Object, typeof (_w = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* LoadingController */]) === "function" && _w || Object, typeof (_x = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */]) === "function" && _x || Object, typeof (_y = typeof __WEBPACK_IMPORTED_MODULE_14__services_metrics_service__["a" /* MetricsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_14__services_metrics_service__["a" /* MetricsService */]) === "function" && _y || Object, typeof (_z = typeof __WEBPACK_IMPORTED_MODULE_15__services_d_metrics_service__["a" /* DriverMetricsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_15__services_d_metrics_service__["a" /* DriverMetricsService */]) === "function" && _z || Object])
    ], DriverFindridePage);
    return DriverFindridePage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z;
}());

//# sourceMappingURL=driverFindride.js.map

/***/ })

});
//# sourceMappingURL=50.js.map