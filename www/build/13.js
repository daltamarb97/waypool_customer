webpackJsonp([13],{

/***/ 698:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverSpecifyOriginPageModule", function() { return DriverSpecifyOriginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__specifyorigin__ = __webpack_require__(891);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DriverSpecifyOriginPageModule = /** @class */ (function () {
    function DriverSpecifyOriginPageModule() {
    }
    DriverSpecifyOriginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__specifyorigin__["a" /* DriverSpecifyOriginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__specifyorigin__["a" /* DriverSpecifyOriginPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__specifyorigin__["a" /* DriverSpecifyOriginPage */]
            ]
        })
    ], DriverSpecifyOriginPageModule);
    return DriverSpecifyOriginPageModule;
}());

//# sourceMappingURL=specifyorigin.module.js.map

/***/ }),

/***/ 891:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverSpecifyOriginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation___ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_d_sendCoords_service__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_d_signup_service__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_d_geofire_services__ = __webpack_require__(355);
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

// import { TabsPage } from '../tabs/tabs';
// import { Geofence } from '@ionic-native/geofence';




// import { authenticationService } from '../../services/driverauthentication.service';

// import { Geofence } from '@ionic-native/geofence';








var DriverSpecifyOriginPage = /** @class */ (function () {
    function DriverSpecifyOriginPage(geofireService, TripsService, afDB, navCtrl, SignUpService, modalCtrl, authenticationService, geolocation, zone, sendCoordsService, AngularFireAuth, alertCtrl, toastCtrl, app, sendUsersService, instancesService, firebaseNative, platform, fcm, loadingCtrl, renderer) {
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
        this.isConected = false;
        this.schedules = [];
        this.myReserves = [];
        this.checked = false;
        this.fullReserves = [];
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
        console.log(this.SignUpService.userPlace);
    } // END OF CONSTRUCTOR
    DriverSpecifyOriginPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.afDB.database.ref(this.SignUpService.userPlace + '/drivers/' + this.user).once('value').then(function (snap) {
            _this.city = snap.val().city;
            _this.company = snap.val().company;
            console.log(_this.SignUpService.userPlace);
            _this.loadMap();
        });
    };
    DriverSpecifyOriginPage.prototype.loadMap = function () {
        var _this = this;
        //check if user have houseAddress
        // this gets current position and set the camera of the map and put a marker in your location
        this.geolocation.getCurrentPosition({ enableHighAccuracy: true }).then(function (position) {
            var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            console.log(latLng);
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
                icon: { url: "assets/imgs/house.png",
                    scaledSize: new google.maps.Size(70, 70)
                }
            });
            _this.markers.push(_this.markerGeolocation);
            _this.geocoordinatesHouse = { lat: position.coords.latitude, lng: position.coords.longitude };
            //allow the marker to be draged and changed the position
            _this.dragMarkerOr(_this.markerGeolocation, _this.autocompleteMyPos);
        }, function (err) {
            console.log(err);
        });
    };
    //autocomplete of myPosition searchbar
    DriverSpecifyOriginPage.prototype.updateSearchResultsMyPos = function () {
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
    ////select result of my position searchbar
    DriverSpecifyOriginPage.prototype.selectSearchResultMyPos = function (item) {
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
                    icon: { url: "assets/imgs/house.png",
                        scaledSize: new google.maps.Size(70, 70)
                    },
                    animation: google.maps.Animation.DROP,
                });
                _this.geocoordinatesHouse = { latOr: results[0].geometry.location.lat(), lngOr: results[0].geometry.location.lng() };
                console.log(_this.geocoordinatesHouse);
                console.log(_this.positionDest);
                _this.dragMarkerOr(_this.markerGeolocation, _this.autocompleteMyPos);
                _this.markers.push(_this.markerGeolocation);
                _this.map.setCenter(results[0].geometry.location);
                console.log(results[0].geometry.location);
                console.log(_this.positionDest);
                _this.autocompleteMyPos.input = [item.description];
                // this.map.fitBounds(this.bounds);
            }
        });
    };
    ////select result of my destination searchbar
    ////////Markers
    DriverSpecifyOriginPage.prototype.clearMarkers = function () {
        for (var i = 0; i < this.markers.length; i++) {
            this.markers[i].setMap(null);
        }
        this.markers = [];
    };
    DriverSpecifyOriginPage.prototype.dragMarkerOr = function (marker, inputName) {
        //allow origin marker to be draged and calculate route with the new position
        var _this = this;
        google.maps.event.addListener(marker, 'dragend', function (evt) {
            var lat = marker.getPosition().lat();
            var lng = marker.getPosition().lng();
            var latOr = marker.getPosition().lat();
            var lngOr = marker.getPosition().lng();
            var latLng = { lat: lat, lng: lng };
            var latLngOr = { latOr: latOr, lngOr: lngOr };
            console.log(latLng);
            _this.geocodeLatLng(latLng, inputName);
            console.log(_this.positionDest);
            _this.geocoordinatesHouse = latLngOr;
        });
    };
    DriverSpecifyOriginPage.prototype.geocodeLatLng = function (latLng, inputName) {
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
    DriverSpecifyOriginPage.prototype.sendLocation = function () {
        var _this = this;
        this.houseAddress = this.autocompleteMyPos.input;
        this.afDB.database.ref('allCities/' + this.city + '/allPlaces/' + this.company + '/zones').once('value').then(function (snap) {
            var obj = snap.val();
            console.log(obj);
            Object.getOwnPropertyNames(obj).forEach(function (key) {
                if (obj[key] === 2 || obj[key] === 3 || obj[key] === 4 || obj[key] === 5 || obj[key] === 6 || obj[key] === 1 || obj[key] === 7 || obj[key] === 8 || obj[key] === 9 || obj[key] === 10) {
                }
                else {
                    _this.afDB.database.ref(obj[key] + '/drivers/' + _this.user + '/houseAddress/').update({
                        name: _this.houseAddress[0]
                    }).then(function (data) {
                        _this.afDB.database.ref(obj[key] + '/drivers/' + _this.user + '/houseAddress/coordinates').update({
                            lat: _this.geocoordinatesHouse.latOr,
                            lng: _this.geocoordinatesHouse.lngOr
                        });
                    });
                }
            });
        }).then(function () {
            _this.navCtrl.setRoot('DriverFindridePage');
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], DriverSpecifyOriginPage.prototype, "mapElement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('buttonConected', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] }),
        __metadata("design:type", Object)
    ], DriverSpecifyOriginPage.prototype, "buttonConected", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('buttonDisconected', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] }),
        __metadata("design:type", Object)
    ], DriverSpecifyOriginPage.prototype, "buttonDisconected", void 0);
    DriverSpecifyOriginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'driver-page-specifyorigin',template:/*ion-inline-start:"C:\Users\Daniel\Documents\waypool\prod\latest\waypool_costumer\src\pages\specifyorigin\driverSpecifyorigin.html"*/'\n\n\n\n\n\n\n\n<ion-content  padding>\n\n      <h5 class="text-theme-driver" style="font-weight: bold;">DIRECCIÓN DE TU HOGAR</h5>\n\n      <ion-card class="search" >\n\n          <ion-card-content>\n\n              <span style=" z-index: 1;position: relative;" class="text-light search-text">Tu casa &nbsp;<ion-icon name="ios-arrow-down" class="text-light"></ion-icon></span>\n\n\n\n              <span class="dot bg-theme-driver"></span>\n\n              <ion-searchbar required [(ngModel)]="autocompleteMyPos.input" id="input" [animated]=true (ionInput)="updateSearchResultsMyPos()"  placeholder="Cóloca la dirección de tu casa"></ion-searchbar>\n\n\n\n              <ion-list   [hidden]="autocompleteItems.length == 0">\n\n                  <ion-item  *ngFor="let item of autocompleteItems" tappable (click)="selectSearchResultMyPos(item)">\n\n                    {{ item.description }}\n\n                  </ion-item>\n\n                </ion-list>\n\n                <!-- <ion-icon name="md-locate" (click)="getPositionAndMarker()" class="text-black"></ion-icon> -->\n\n          </ion-card-content>\n\n\n\n           \n\n      </ion-card>\n\n      <!-- <ion-avatar item-end>\n\n          <img style="height: 15%; width: 15%;" src="assets/imgs/centermap.png" (click)="centerMap()">\n\n      </ion-avatar> -->\n\n      <div style="display: flex; justify-content: center;">    \n\n          <button class="btn text-white bg-theme-driver rounded" style="width: 80%;" (click)="sendLocation()">Listo</button>\n\n      </div>\n\n   <div #map id="map"></div>  \n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\Daniel\Documents\waypool\prod\latest\waypool_costumer\src\pages\specifyorigin\driverSpecifyorigin.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__services_d_geofire_services__["a" /* DriverGeofireService */], __WEBPACK_IMPORTED_MODULE_10__services_d_trips_service__["a" /* DriverTripsService */], __WEBPACK_IMPORTED_MODULE_7__angular_fire_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__services_d_signup_service__["a" /* DriverSignUpService */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ModalController */], __WEBPACK_IMPORTED_MODULE_8__services_d_driverauthentication_service__["a" /* DriverAuthenticationService */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation___["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */], __WEBPACK_IMPORTED_MODULE_4__services_d_sendCoords_service__["a" /* DriverSendCoordsService */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_9__services_d_sendUsers_service__["a" /* DriverSendUsersService */], __WEBPACK_IMPORTED_MODULE_11__services_d_instances_services__["a" /* DriverInstancesService */], __WEBPACK_IMPORTED_MODULE_13__ionic_native_firebase__["a" /* Firebase */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* Platform */], __WEBPACK_IMPORTED_MODULE_12__ionic_native_fcm__["a" /* FCM */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */]])
    ], DriverSpecifyOriginPage);
    return DriverSpecifyOriginPage;
}());

//# sourceMappingURL=specifyorigin.js.map

/***/ })

});
//# sourceMappingURL=13.js.map