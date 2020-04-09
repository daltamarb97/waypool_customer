webpackJsonp([50],{

/***/ 700:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindridePassPageModule", function() { return FindridePassPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bikemode__ = __webpack_require__(897);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FindridePassPageModule = /** @class */ (function () {
    function FindridePassPageModule() {
    }
    FindridePassPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__bikemode__["a" /* BikeModePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__bikemode__["a" /* BikeModePage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__bikemode__["a" /* BikeModePage */]
            ]
        })
    ], FindridePassPageModule);
    return FindridePassPageModule;
}());

//# sourceMappingURL=bikemode.module.js.map

/***/ }),

/***/ 897:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BikeModePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_sendCoords_service__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_geoFire_service__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_signup_services__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_geofire__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_geofire___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_geofire__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_trips_service__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_instances_service__ = __webpack_require__(357);
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














var BikeModePage = /** @class */ (function () {
    function BikeModePage(navCtrl, navParams, geolocation, zone, sendCoordsService, AngularFireAuth, alertCtrl, geofireService, SignUpService, modalCtrl, app, afDB, TripsService, instanceService, platform, fcm, firebase, loadingCtrl, viewCtril) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geolocation = geolocation;
        this.zone = zone;
        this.sendCoordsService = sendCoordsService;
        this.AngularFireAuth = AngularFireAuth;
        this.alertCtrl = alertCtrl;
        this.geofireService = geofireService;
        this.SignUpService = SignUpService;
        this.modalCtrl = modalCtrl;
        this.app = app;
        this.afDB = afDB;
        this.TripsService = TripsService;
        this.instanceService = instanceService;
        this.platform = platform;
        this.fcm = fcm;
        this.firebase = firebase;
        this.loadingCtrl = loadingCtrl;
        this.viewCtril = viewCtril;
        // waypoints variables
        this.directionsService = null;
        this.directionsDisplay = null;
        this.bounds = null;
        this.myLatLng = [];
        this.tripId = null;
        this.locationPlace = {};
        this.onTrip = false;
        //variables for geoquery
        this.geocoordinatesDest = {};
        this.geocoordinatesOr = {};
        this.geofireOriginConfirmed = false;
        this.geofireDestinationConfirmed = false;
        this.userUid = this.AngularFireAuth.auth.currentUser.uid;
        this.unsubscribe = new __WEBPACK_IMPORTED_MODULE_10_rxjs__["Subject"];
        this.usingGeolocation = false;
        this.keyDetectedInGeofireOrigin = false;
        this.keyDetectedInGeofireDestination = false;
        this.user = this.navParams.get('user');
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
        // initialize the plugin
        // console.log(this.SignUpService.userPlace);
        /// logica keyReserves para myreserves
    } // END OF CONSTRUCTOR
    // }
    BikeModePage.prototype.ionViewDidLoad = function () {
        this.loadMap();
    };
    BikeModePage.prototype.loadMap = function () {
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
            _this.usingGeolocation = true;
            _this.markerGeolocation = new google.maps.Marker({
                map: _this.map,
                animation: google.maps.Animation.DROP,
                position: latLng,
                draggable: true,
                icon: { url: "assets/imgs/bicimarker.png",
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
    BikeModePage.prototype.calculateRoute = function (positionOr, positionDest) {
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
            //render
            if (status === google.maps.DirectionsStatus.OK) {
                _this.directionsDisplay.setDirections(response);
            }
            else {
                alert('Could not display directions due to: ' + status);
            }
        });
    };
    BikeModePage.prototype.calculateDistance = function (positionOr, positionDest) {
        var _this = this;
        this.distanceInMeters = google.maps.geometry.spherical.computeDistanceBetween(positionOr, positionDest);
        setTimeout(function () {
            console.log('the distance in meters is ' + _this.distanceInMeters);
        }, 1000);
    };
    //autocomplete of myPosition searchbar
    BikeModePage.prototype.updateSearchResultsMyPos = function () {
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
    ////autocomplete of my destination
    BikeModePage.prototype.updateSearchResultsMyDest = function () {
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
    BikeModePage.prototype.selectSearchResultMyPos = function (item) {
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
                    icon: { url: "assets/imgs/bicimarker.png",
                        scaledSize: new google.maps.Size(90, 90)
                    },
                });
                _this.dragMarkerOr(_this.markerGeolocation, _this.autocompleteMyPos);
                _this.markers.push(_this.markerGeolocation);
                _this.map.setCenter(results[0].geometry.location);
                _this.autocompleteMyPos.input = [item.description];
                _this.directionsDisplay.setMap(null);
                _this.myLatLngOr = results[0].geometry.location;
                _this.usingGeolocation = false;
                console.log(_this.myLatLngOr);
            }
        });
    };
    ////select result of my destination searchbar
    BikeModePage.prototype.selectSearchResultMyDest = function (item) {
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
                console.log(results[0].geometry.location);
                _this.autocompleteMyDest.input = [item.description];
                _this.dragMarkerDest(_this.markerDest, _this.autocompleteMyDest);
                _this.directionsDisplay.setMap(_this.map);
                _this.myLatLngDest = results[0].geometry.location;
                _this.calculateRoute(_this.markerGeolocation.position, results[0].geometry.location);
                _this.calculateDistance(_this.markerGeolocation.position, results[0].geometry.location);
            }
        });
    };
    ////////Markers
    BikeModePage.prototype.clearMarkers = function () {
        for (var i = 0; i < this.markers.length; i++) {
            console.log(this.markers[i]);
            this.markers[i].setMap(null);
        }
        this.markers = [];
    };
    BikeModePage.prototype.dragMarkerDest = function (marker, inputName) {
        var _this = this;
        google.maps.event.addListener(marker, 'dragend', function (evt) {
            var lat = marker.getPosition().lat();
            var lng = marker.getPosition().lng();
            var latLng = { lat: lat, lng: lng };
            _this.map.setCenter(latLng);
            _this.geocodeLatLng(latLng, inputName);
            _this.calculateRoute(_this.markerGeolocation.position, latLng);
            console.log(latLng);
            _this.calculateDistance(_this.markerGeolocation.position, new google.maps.LatLng({
                lat: latLng.lat,
                lng: latLng.lng
            }));
        });
    };
    BikeModePage.prototype.dragMarkerOr = function (marker, inputName) {
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
                _this.calculateDistance(new google.maps.LatLng({
                    lat: latLng.lat,
                    lng: latLng.lng
                }), _this.markerDest.position);
            }
        });
    };
    BikeModePage.prototype.geocodeLatLng = function (latLng, inputName) {
        this.geocoder.geocode({ 'location': latLng }, function (results, status) {
            if (status === 'OK') {
                if (results[0]) {
                    console.log(results[0].formatted_address);
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
    BikeModePage.prototype.listride = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            spinner: 'crescent',
            content: "\n        <div class=\"custom-spinner-container\">\n          <div class=\"custom-spinner-box\"></div>\n        </div>"
        });
        this.loading.present();
        console.log(this.myLatLngOr);
        console.log(this.usingGeolocation);
        this.afDB.database.ref('/usersTest/' + this.userUid).once('value').then(function (snapBlock) {
            if (snapBlock.val().blockPayment === true) {
                _this.loading.dismiss();
                var alert_1 = _this.alertCtrl.create({
                    title: 'Tienes un saldo pendiente por pagar',
                    subTitle: 'Para seguir disfrutando de Waypool debes pagar el saldo pendiente de tus viajes pasados, estas perjudicando a varias personas de tu comunidad',
                    buttons: [
                        {
                            text: 'No lo quiero hacer ahora',
                            role: 'cancel',
                        },
                        {
                            text: 'Ir a Mi Saldo',
                            handler: function () {
                                _this.app.getRootNav().push('WalletPage');
                            }
                        }
                    ]
                });
                alert_1.present();
            }
            else {
                _this.afDB.database.ref('/usersTest/' + _this.userUid).once('value').then(function (snap) {
                    var user = snap.val();
                    console.log(user);
                    // check if user is on trip
                    if (user.onTrip == true) {
                        _this.loading.dismiss();
                        var alert_2 = _this.alertCtrl.create({
                            title: 'Estas actualmente en un viaje',
                            subTitle: 'No puedes pedir otro viaje ya que en este momento estas en un viaje',
                            buttons: ['OK']
                        });
                        alert_2.present();
                    }
                    else {
                        try {
                            _this.desFirebase = _this.autocompleteMyDest.input;
                            _this.orFirebase = _this.autocompleteMyPos.input;
                            console.log(_this.desFirebase[0]);
                            if (_this.autocompleteMyDest.input == '' || _this.autocompleteMyPos.input == '') {
                                _this.loading.dismiss();
                                _this.presentAlert('No tienes toda la informacion', 'Por favor asegura que tu origen y destino sean correctos', 'Ok');
                                _this.clearMarkers();
                                _this.directionsDisplay.setDirections({ routes: [] });
                            }
                            else {
                                //starts trip in bike-mode
                                _this.navCtrl.push('TripbikePage', { user: user, origin: _this.autocompleteMyPos.input, destination: _this.autocompleteMyDest.input, orCoords: _this.myLatLngOr, destCoords: _this.myLatLngDest, distance: _this.distanceInMeters });
                                _this.loading.dismiss();
                            }
                            //      
                        }
                        catch (error) {
                        }
                    }
                });
            }
        });
    };
    BikeModePage.prototype.presentAlert = function (title, text, button) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: [button]
        });
        alert.present();
    };
    BikeModePage.prototype.goToMyReserves = function () {
        this.app.getRootNav().push('ReservetripPage');
    };
    BikeModePage.prototype.goToTrip = function () {
        // go to trip      
        if (this.onTrip === true) {
            console.log('DISPARADOR');
            var modal = this.modalCtrl.create('MyridePage');
            modal.present();
        }
        else {
            console.log("es undefined");
        }
    };
    // set geoquery that determines if the person is in place
    BikeModePage.prototype.setGeofirePlaceWithDest = function (place, radius, lat, lng, userId) {
        this.dbRef = this.afDB.database.ref(place + '/geofirePlace/');
        this.geoFire = new __WEBPACK_IMPORTED_MODULE_8_geofire__(this.dbRef);
        this.geoqueryU = this.geoFire.query({
            center: [lat, lng],
            radius: radius
        });
        console.log('geoquery place added');
    };
    // set geoquery that determines if the person is in place
    BikeModePage.prototype.setGeofirePlaceWithOr = function (place, radius, lat, lng, userId) {
        this.dbRef = this.afDB.database.ref(place + '/geofirePlace/');
        this.geoFire = new __WEBPACK_IMPORTED_MODULE_8_geofire__(this.dbRef);
        this.geoqueryU = this.geoFire.query({
            center: [lat, lng],
            radius: radius
        });
        console.log('geoquery place added');
    };
    BikeModePage.prototype.ionViewDidLeave = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], BikeModePage.prototype, "mapElement", void 0);
    BikeModePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-bikemode',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/waypool_costumer/src/pages/p-bikemode/bikemode.html"*/'\n<ion-header  >\n  <ion-navbar class="bg-green" style="overflow: visible;" >\n      \n      <ion-title >MODO BICICLETA</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content  padding>\n   \n \n    <ion-card class="search">\n          \n        <ion-card-content>\n            <span class="dot bg-green"></span>\n            <ion-searchbar required [(ngModel)]="autocompleteMyPos.input" [animated]=true (ionInput)="updateSearchResultsMyPos()"  placeholder="Tu origen"></ion-searchbar>\n          \n            <ion-list   [hidden]="autocompleteItems.length == 0">\n                <ion-item  *ngFor="let item of autocompleteItems" tappable (click)="selectSearchResultMyPos(item)">\n                  {{ item.description }}\n                </ion-item>\n              </ion-list>\n              <!-- <ion-icon name="md-locate" (click)="getPositionAndMarker()" class="text-black"></ion-icon> -->\n        </ion-card-content>\n        <ion-card-content>\n            <span class="dot bg-yellow"></span>           \n           <ion-searchbar required [(ngModel)]="autocompleteMyDest.input" (ionInput)="updateSearchResultsMyDest()" placeholder="Tu destino"></ion-searchbar>\n\n            <ion-list   [hidden]="autocompleteItems2.length == 0">\n            <ion-item class="item" *ngFor="let item of autocompleteItems2" tappable (click)="selectSearchResultMyDest(item)">\n              {{ item.description }}\n            </ion-item>\n          </ion-list>\n            <!-- <span class="text-light search-text">Office &nbsp;<ion-icon name="ios-arrow-down" class="text-light"></ion-icon></span> -->\n\n        </ion-card-content>\n        \n    </ion-card>\n  \n <div #map id="map"></div>  \n    \n    \n\n  \n      <button (click)="listride()" class="btn rounded bg-green text-white " style="width: 100%">INICIAR VIAJE</button>\n\n  \n \n \n<div *ngIf="onTrip" >\n    <button class="btn rounded bg-green text-white animated infinite pulse" style=" width: 100% ;\n     position:absolute;\n     bottom: 0px ;\n     left: 0px ;\n     height: 51px; \n     font-size: large;\n   " (click)="goToTrip() " >VIAJE EN CURSO\n    </button>\n</div>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/waypool_costumer/src/pages/p-bikemode/bikemode.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */], __WEBPACK_IMPORTED_MODULE_3__services_sendCoords_service__["a" /* sendCoordsService */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__services_geoFire_service__["a" /* geofireService */], __WEBPACK_IMPORTED_MODULE_6__services_signup_services__["a" /* SignUpService */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_9__services_trips_service__["a" /* TripsService */], __WEBPACK_IMPORTED_MODULE_11__services_instances_service__["a" /* instancesService */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* Platform */], __WEBPACK_IMPORTED_MODULE_12__ionic_native_fcm__["a" /* FCM */], __WEBPACK_IMPORTED_MODULE_13__ionic_native_firebase__["a" /* Firebase */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* ViewController */]])
    ], BikeModePage);
    return BikeModePage;
}());

//# sourceMappingURL=bikemode.js.map

/***/ })

});
//# sourceMappingURL=50.js.map