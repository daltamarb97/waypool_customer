webpackJsonp([15],{

/***/ 697:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverSpecifyRoutePageModule", function() { return DriverSpecifyRoutePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__specifyroute__ = __webpack_require__(894);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DriverSpecifyRoutePageModule = /** @class */ (function () {
    function DriverSpecifyRoutePageModule() {
    }
    DriverSpecifyRoutePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__specifyroute__["a" /* DriverSpecifyRoutePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__specifyroute__["a" /* DriverSpecifyRoutePage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__specifyroute__["a" /* DriverSpecifyRoutePage */]
            ]
        })
    ], DriverSpecifyRoutePageModule);
    return DriverSpecifyRoutePageModule;
}());

//# sourceMappingURL=specifyroute.module.js.map

/***/ }),

/***/ 894:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverSpecifyRoutePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation___ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_d_sendCoords_service__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_d_signup_service__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_d_geofire_services__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_fire_database__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_d_driverauthentication_service__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_d_sendUsers_service__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_d_trips_service__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_d_instances_services__ = __webpack_require__(351);
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

// import { TabsPage } from '../tabs/tabs';
// import { Geofence } from '@ionic-native/geofence';




// import { authenticationService } from '../../services/driverauthentication.service';

// import { Geofence } from '@ionic-native/geofence';








var DriverSpecifyRoutePage = /** @class */ (function () {
    function DriverSpecifyRoutePage(navParams, geofireService, TripsService, viewCtrl, afDB, navCtrl, SignUpService, modalCtrl, authenticationService, geolocation, zone, sendCoordsService, AngularFireAuth, alertCtrl, toastCtrl, app, sendUsersService, instancesService, firebaseNative, platform, fcm, loadingCtrl, renderer) {
        this.navParams = navParams;
        this.geofireService = geofireService;
        this.TripsService = TripsService;
        this.viewCtrl = viewCtrl;
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
        this.isConected = false;
        this.schedules = [];
        this.myReserves = [];
        this.checked = false;
        this.fullReserves = [];
        this.indexesOfPointsAlongRoute = [];
        this.pointsAlongRoute = [];
        this.pointsToSaveRoute = [];
        console.log('specifyorigin');
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
    DriverSpecifyRoutePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.afDB.database.ref('/driversTest/' + this.user).once('value').then(function (snap) {
            _this.city = snap.val().city;
            _this.company = snap.val().company;
            _this.loadMap();
        });
    };
    DriverSpecifyRoutePage.prototype.loadMap = function () {
        // this gets current position and set the camera of the map and put a marker in your location
        var _this = this;
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
            _this.myLatLngOr = {
                lat: _this.myLatLng.lat,
                lng: _this.myLatLng.lng
            };
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
            _this.dragMarkerOr(_this.markerGeolocation, _this.autocompleteMyPos);
            //to reverse-geocode position
            _this.geocodeLatLng(latLng, _this.autocompleteMyPos);
        }, function (err) {
            console.log(err);
        });
    };
    //autocomplete of myPosition searchbar
    DriverSpecifyRoutePage.prototype.updateSearchResultsMyPos = function () {
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
    ////autocomplete of my destination
    DriverSpecifyRoutePage.prototype.updateSearchResultsMyDest = function () {
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
    DriverSpecifyRoutePage.prototype.selectSearchResultMyPos = function (item) {
        var _this = this;
        this.autocompleteItems = [];
        this.clearMarkers();
        this.autocompleteMyDest.input = '';
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
                    animation: google.maps.Animation.DROP,
                    icon: { url: "assets/imgs/marker-origin.png",
                        scaledSize: new google.maps.Size(90, 90)
                    },
                });
                _this.dragMarkerOr(_this.markerGeolocation, _this.autocompleteMyPos);
                _this.markers.push(_this.markerGeolocation);
                _this.map.setCenter(results[0].geometry.location);
                _this.autocompleteMyPos.input = [item.description];
                _this.directionsDisplay.setMap(null);
                _this.myLatLngOr = { lat: results[0].geometry.location.lat(), lng: results[0].geometry.location.lng() };
                console.log(_this.myLatLngOr);
            }
        });
    };
    ////select result of my destination searchbar
    DriverSpecifyRoutePage.prototype.selectSearchResultMyDest = function (item) {
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
                    draggable: true,
                    animation: google.maps.Animation.DROP,
                    icon: { url: "assets/imgs/marker-destination2.png",
                        scaledSize: new google.maps.Size(90, 90)
                    }
                });
                console.log(position);
                _this.map.fitBounds(_this.bounds);
                _this.markers.push(_this.markerDest);
                _this.map.setCenter(results[0].geometry.location);
                _this.autocompleteMyDest.input = [item.description];
                _this.dragMarkerDest(_this.markerDest, _this.autocompleteMyDest);
                _this.directionsDisplay.setMap(_this.map);
                _this.myLatLngDest = { lat: results[0].geometry.location.lat(), lng: results[0].geometry.location.lng() };
                console.log(_this.myLatLngDest);
                _this.calculateRoute(_this.markerGeolocation.position, results[0].geometry.location);
            }
        });
    };
    DriverSpecifyRoutePage.prototype.calculateRoute = function (positionOr, positionDest) {
        //tutorial ngclassroom https://blog.ng-classroom.com/blog/ionic2/directions-google-js-ionic/
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
            for (var _i = 0, _a = _this.indexesOfPointsAlongRoute; _i < _a.length; _i++) {
                var index = _a[_i];
                _this.pointsToSaveRoute.push({
                    lat: _this.pointsAlongRoute[index].lat,
                    lng: _this.pointsAlongRoute[index].lng
                });
            }
            console.log(_this.pointsToSaveRoute);
            //render
            if (status === google.maps.DirectionsStatus.OK) {
                _this.directionsDisplay.setDirections(response);
            }
            else {
                alert('Could not display directions due to: ' + status);
            }
        });
    };
    ////////Markers
    DriverSpecifyRoutePage.prototype.clearMarkers = function () {
        for (var i = 0; i < this.markers.length; i++) {
            this.markers[i].setMap(null);
        }
        this.markers = [];
    };
    DriverSpecifyRoutePage.prototype.dragMarkerOr = function (marker, inputName) {
        //allow origin marker to be draged and calculate route with the new position
        var _this = this;
        google.maps.event.addListener(marker, 'dragend', function (evt) {
            var lat = marker.getPosition().lat();
            var lng = marker.getPosition().lng();
            var latOr = marker.getPosition().lat();
            var lngOr = marker.getPosition().lng();
            var latLng = { lat: lat, lng: lng };
            var latLngOr = { lat: latOr, lng: lngOr };
            console.log(latLng);
            _this.geocodeLatLng(latLng, inputName);
            console.log(_this.positionDest);
            _this.geocoordinatesHouse = latLngOr;
        });
    };
    DriverSpecifyRoutePage.prototype.dragMarkerDest = function (marker, inputName) {
        var _this = this;
        google.maps.event.addListener(marker, 'dragend', function (evt) {
            var lat = marker.getPosition().lat();
            var lng = marker.getPosition().lng();
            var latLng = { lat: lat, lng: lng };
            _this.map.setCenter(latLng);
            _this.geocodeLatLng(latLng, inputName);
            _this.calculateRoute(_this.markerGeolocation.position, latLng);
            _this.myLatLngDest = latLng;
        });
    };
    DriverSpecifyRoutePage.prototype.geocodeLatLng = function (latLng, inputName) {
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
    /////////////////////
    DriverSpecifyRoutePage.prototype.sendLocation = function () {
        var _this = this;
        console.log(this.myLatLngDest);
        console.log(this.myLatLngOr);
        this.origin = this.autocompleteMyPos.input;
        this.destination = this.autocompleteMyDest.input;
        this.afDB.database.ref('/geofireSchedule/' + this.user).update({
            pointsRoute: this.pointsToSaveRoute
        });
        this.afDB.database.ref('/driversTest/' + this.user + '/houseAddress/').update({
            name: this.origin[0]
        });
        this.afDB.database.ref('/driversTest/' + this.user + '/houseAddress/coordinates').update({
            lat: this.myLatLngOr.lat,
            lng: this.myLatLngOr.lng
        });
        this.afDB.database.ref('/driversTest/' + this.user + '/workAddress/').update({
            name: this.destination[0]
        });
        this.afDB.database.ref('/driversTest/' + this.user + '/workAddress/coordinates').update({
            lat: this.myLatLngDest.lat,
            lng: this.myLatLngDest.lng
        }).then(function () {
            _this.navCtrl.pop();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('map'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]) === "function" && _a || Object)
    ], DriverSpecifyRoutePage.prototype, "mapElement", void 0);
    DriverSpecifyRoutePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'driver-page-specifyroute',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/waypool_costumer/src/pages/specifyroute/specifyroute.html"*/'<ion-header class="bg-theme">\n  <ion-navbar>\n      <ion-title class="text-center">Especifica tu ruta</ion-title>\n  </ion-navbar>\n  \n</ion-header>\n\n\n\n\n<ion-content  padding>\n      <h5 class="text-theme-driver" style="font-weight: bold;">Cóloca tu ruta diaria al trabajo</h5>\n      <ion-card class="search">\n      \n          <ion-card-content>\n              <span class="dot bg-theme"></span>\n              <ion-searchbar required [(ngModel)]="autocompleteMyPos.input" [animated]=true (ionInput)="updateSearchResultsMyPos()"  placeholder="Tu origen"></ion-searchbar>\n            \n              <ion-list   [hidden]="autocompleteItems.length == 0">\n                  <ion-item  *ngFor="let item of autocompleteItems" tappable (click)="selectSearchResultMyPos(item)">\n                    {{ item.description }}\n                  </ion-item>\n                </ion-list>\n                <!-- <ion-icon name="md-locate" (click)="getPositionAndMarker()" class="text-black"></ion-icon> -->\n          </ion-card-content>\n          <ion-card-content>\n              <span class="dot bg-yellow"></span>           \n             <ion-searchbar required [(ngModel)]="autocompleteMyDest.input" (ionInput)="updateSearchResultsMyDest()" placeholder="Tu destino"></ion-searchbar>\n  \n              <ion-list   [hidden]="autocompleteItems2.length == 0">\n              <ion-item class="item" *ngFor="let item of autocompleteItems2" tappable (click)="selectSearchResultMyDest(item)">\n                {{ item.description }}\n              </ion-item>\n            </ion-list>\n              <!-- <span class="text-light search-text">Office &nbsp;<ion-icon name="ios-arrow-down" class="text-light"></ion-icon></span> -->\n  \n          </ion-card-content>\n          \n      </ion-card>\n      <!-- <ion-avatar item-end>\n          <img style="height: 15%; width: 15%;" src="assets/imgs/centermap.png" (click)="centerMap()">\n      </ion-avatar> -->\n      <div style="display: flex; justify-content: center;">    \n          <button class="btn text-white bg-theme-driver rounded" style="width: 80%;" (click)="sendLocation()">Listo</button>\n      </div>\n   <div #map id="map"></div>  \n</ion-content>\n\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/waypool_costumer/src/pages/specifyroute/specifyroute.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__services_d_geofire_services__["a" /* DriverGeofireService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_d_geofire_services__["a" /* DriverGeofireService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_10__services_d_trips_service__["a" /* DriverTripsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__services_d_trips_service__["a" /* DriverTripsService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* ViewController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__angular_fire_database__["AngularFireDatabase"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_fire_database__["AngularFireDatabase"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* NavController */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_5__services_d_signup_service__["a" /* DriverSignUpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_d_signup_service__["a" /* DriverSignUpService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ModalController */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_8__services_d_driverauthentication_service__["a" /* DriverAuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__services_d_driverauthentication_service__["a" /* DriverAuthenticationService */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation___["a" /* Geolocation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation___["a" /* Geolocation */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_4__services_d_sendCoords_service__["a" /* DriverSendCoordsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_d_sendCoords_service__["a" /* DriverSendCoordsService */]) === "function" && _o || Object, typeof (_p = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["AngularFireAuth"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["AngularFireAuth"]) === "function" && _p || Object, typeof (_q = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */]) === "function" && _q || Object, typeof (_r = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* ToastController */]) === "function" && _r || Object, typeof (_s = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* App */]) === "function" && _s || Object, typeof (_t = typeof __WEBPACK_IMPORTED_MODULE_9__services_d_sendUsers_service__["a" /* DriverSendUsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__services_d_sendUsers_service__["a" /* DriverSendUsersService */]) === "function" && _t || Object, typeof (_u = typeof __WEBPACK_IMPORTED_MODULE_11__services_d_instances_services__["a" /* DriverInstancesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__services_d_instances_services__["a" /* DriverInstancesService */]) === "function" && _u || Object, typeof (_v = typeof __WEBPACK_IMPORTED_MODULE_13__ionic_native_firebase__["a" /* Firebase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_13__ionic_native_firebase__["a" /* Firebase */]) === "function" && _v || Object, typeof (_w = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* Platform */]) === "function" && _w || Object, typeof (_x = typeof __WEBPACK_IMPORTED_MODULE_12__ionic_native_fcm__["a" /* FCM */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_12__ionic_native_fcm__["a" /* FCM */]) === "function" && _x || Object, typeof (_y = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* LoadingController */]) === "function" && _y || Object, typeof (_z = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */]) === "function" && _z || Object])
    ], DriverSpecifyRoutePage);
    return DriverSpecifyRoutePage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z;
}());

//# sourceMappingURL=specifyroute.js.map

/***/ })

});
//# sourceMappingURL=15.js.map