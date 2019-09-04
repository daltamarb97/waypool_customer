webpackJsonp([17],{

/***/ 653:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindridePageModule", function() { return FindridePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__findride__ = __webpack_require__(678);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FindridePageModule = /** @class */ (function () {
    function FindridePageModule() {
    }
    FindridePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__findride__["a" /* FindridePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__findride__["a" /* FindridePage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__findride__["a" /* FindridePage */]
            ]
        })
    ], FindridePageModule);
    return FindridePageModule;
}());

//# sourceMappingURL=findride.module.js.map

/***/ }),

/***/ 678:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindridePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_sendCoords_service__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_geoFire_service__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_signup_services__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_geofire__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_geofire___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_geofire__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_trips_service__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_instances_service__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_diagnostic_ngx__ = __webpack_require__(357);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var FindridePage = /** @class */ (function () {
    function FindridePage(navCtrl, geolocation, zone, sendCoordsService, AngularFireAuth, alertCtrl, geofireService, SignUpService, modalCtrl, app, afDB, TripsService, instanceService, diagnostic) {
        var _this = this;
        this.navCtrl = navCtrl;
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
        this.diagnostic = diagnostic;
        // waypoints variables
        this.directionsService = null;
        this.directionsDisplay = null;
        this.bounds = null;
        this.myLatLng = [];
        this.tripId = null;
        this.locationUniversity = {};
        this.onTrip = false;
        //variables for geoquery
        this.geocoordinatesDest = {};
        this.geocoordinatesOr = {};
        this.geofireOriginConfirmed = false;
        this.userUid = this.AngularFireAuth.auth.currentUser.uid;
        this.unsubscribe = new __WEBPACK_IMPORTED_MODULE_10_rxjs__["Subject"];
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
        console.log(this.SignUpService.userUniversity);
        if (this.SignUpService.userUniversity == undefined) {
            var modal = this.modalCtrl.create('ConfirmUniversityPage');
            modal.onDidDismiss(function (readyToStart) {
                if (readyToStart) {
                    //search keyTrip
                    _this.TripsService.getKeyTrip(_this.SignUpService.userUniversity, _this.userUid)
                        .subscribe(function (keyTrip) {
                        _this.keyTrip = keyTrip;
                        console.log(_this.keyTrip);
                        //if key its deleted don't show VIAJE EN CURSO  
                        if (_this.keyTrip === undefined || _this.keyTrip === null) {
                            _this.onTrip = false;
                            _this.TripsService.eliminateKeyTrip(_this.SignUpService.userUniversity, _this.userUid);
                            _this.TripsService.eliminatingOnTrip(_this.SignUpService.userUniversity, _this.userUid);
                            console.log("llegue adonde era");
                        }
                        else {
                            //confirm that trip exist and get it
                            _this.getTrip();
                        }
                    });
                    console.log(_this.SignUpService.userUniversity);
                    _this.SignUpService.getMyInfo(_this.userUid, _this.SignUpService.userUniversity).takeUntil(_this.unsubscribe).subscribe(function (user) {
                        _this.user = user;
                        //  this.keyTrip = this.user.keyTrip
                        console.log(_this.user);
                    });
                    // set geofire key of university to avoid asking users to put where they are going
                    _this.geofireService.getLocationUniversity(_this.SignUpService.userUniversity).takeUntil(_this.unsubscribe).subscribe(function (university) {
                        _this.university = university;
                        _this.locationUniversity = _this.university.location;
                        _this.geofireService.setLocationUniversity(_this.SignUpService.userUniversity, "some_key", _this.locationUniversity.lat, _this.locationUniversity.lng);
                    });
                }
                _this.SignUpService.getInfoUniversity(_this.SignUpService.userUniversity).takeUntil(_this.unsubscribe).subscribe(function (uni) {
                    _this.universityInfo = uni;
                    if (_this.universityInfo.email == undefined) {
                        if (_this.userInfoForOntrip.documents) {
                            if (_this.userInfoForOntrip.documents.carne === undefined || _this.userInfoForOntrip.documents.id === undefined) {
                                var modal_1 = _this.modalCtrl.create('VerificationImagesPage');
                                modal_1.present();
                            }
                            else if (_this.userInfoForOntrip.documents.carne === true || _this.userInfoForOntrip.documents.id === true) {
                                _this.instanceService.isVerified(_this.SignUpService.userUniversity, _this.userUid);
                            }
                        }
                        else if (!_this.universityInfo.documents) {
                            console.log('no hay docs');
                            var modal_2 = _this.modalCtrl.create('VerificationImagesPage');
                            modal_2.present();
                        }
                    }
                    else {
                        _this.instanceService.isVerified(_this.SignUpService.userUniversity, _this.userUid);
                    }
                });
            });
            modal.present();
        }
        else {
            //search keyTrip
            this.TripsService.getKeyTrip(this.SignUpService.userUniversity, this.userUid)
                .subscribe(function (keyTrip) {
                _this.keyTrip = keyTrip;
                console.log(_this.keyTrip);
                //if key its deleted don't show VIAJE EN CURSO  
                if (_this.keyTrip === undefined || _this.keyTrip === null) {
                    _this.onTrip = false;
                    _this.TripsService.eliminateKeyTrip(_this.SignUpService.userUniversity, _this.userUid);
                    _this.TripsService.eliminatingOnTrip(_this.SignUpService.userUniversity, _this.userUid);
                    console.log("llegue adonde era");
                }
                else {
                    //confirm that trip exist and get it
                    _this.getTrip();
                }
            });
            console.log(this.SignUpService.userUniversity);
            this.SignUpService.getMyInfo(this.userUid, this.SignUpService.userUniversity).takeUntil(this.unsubscribe).subscribe(function (user) {
                _this.user = user;
                //  this.keyTrip = this.user.keyTrip
                console.log(_this.user);
            });
            // set geofire key of university to avoid asking users to put where they are going
            this.geofireService.getLocationUniversity(this.SignUpService.userUniversity).takeUntil(this.unsubscribe).subscribe(function (university) {
                _this.university = university;
                _this.locationUniversity = _this.university.location;
                _this.geofireService.setLocationUniversity(_this.SignUpService.userUniversity, "some_key", _this.locationUniversity.lat, _this.locationUniversity.lng);
            });
            this.SignUpService.getInfoUniversity(this.SignUpService.userUniversity).takeUntil(this.unsubscribe).subscribe(function (uni) {
                _this.universityInfo = uni;
                if (_this.universityInfo.email == undefined) {
                    if (_this.userInfoForOntrip.documents) {
                        if (_this.userInfoForOntrip.documents.carne === undefined || _this.userInfoForOntrip.documents.id === undefined) {
                            var modal = _this.modalCtrl.create('VerificationImagesPage');
                            modal.present();
                        }
                        else if (_this.userInfoForOntrip.documents.carne === true || _this.userInfoForOntrip.documents.id === true) {
                            _this.instanceService.isVerified(_this.SignUpService.userUniversity, _this.userUid);
                        }
                    }
                    else if (!_this.universityInfo.documents) {
                        console.log('no hay docs');
                        var modal = _this.modalCtrl.create('VerificationImagesPage');
                        modal.present();
                    }
                }
                else {
                    _this.instanceService.isVerified(_this.SignUpService.userUniversity, _this.userUid);
                }
            });
        }
    } // END OF CONSTRUCTOR
    FindridePage.prototype.getTrip = function () {
        var _this = this;
        this.afDB.database.ref(this.SignUpService.userUniversity + '/trips/' + this.keyTrip.driverId + '/' + this.keyTrip.keyTrip)
            .once('value').then(function (snapshot) {
            var trip = snapshot.val();
            console.log(trip);
            if (trip === null || trip === undefined) {
                console.log("borre");
                _this.TripsService.eliminateKeyTrip(_this.SignUpService.userUniversity, _this.userUid);
                _this.TripsService.eliminatingOnTrip(_this.SignUpService.userUniversity, _this.userUid);
            }
            else {
                _this.getOnTrip();
            }
        });
    };
    FindridePage.prototype.getOnTrip = function () {
        var _this = this;
        this.TripsService.getOnTrip(this.SignUpService.userUniversity, this.userUid)
            .subscribe(function (onTrip) {
            _this.onTrip = onTrip;
            if (_this.onTrip === true) {
                _this.geofireService.cancelGeofireDest();
                _this.geofireService.cancelGeofireOr();
                _this.geofireService.cancelGeofireDestLMU();
                _this.geofireService.cancelGeofireOrLMU();
            }
            console.log(_this.onTrip);
            console.log('ONTRIP');
        });
    };
    FindridePage.prototype.ionViewDidLoad = function () {
        this.loadMap();
        //  this.diagnostic.isLocationEnabled().then((enable)=>{
        //    console.log(enable);
        //  })
    };
    FindridePage.prototype.loadMap = function () {
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
    FindridePage.prototype.calculateRoute = function (positionOr, positionDest) {
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
    //autocomplete of myPosition searchbar
    FindridePage.prototype.updateSearchResultsMyPos = function () {
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
    FindridePage.prototype.updateSearchResultsMyDest = function () {
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
    FindridePage.prototype.selectSearchResultMyPos = function (item) {
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
            }
        });
    };
    ////select result of my destination searchbar
    FindridePage.prototype.selectSearchResultMyDest = function (item) {
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
            }
        });
    };
    ////////Markers
    FindridePage.prototype.clearMarkers = function () {
        for (var i = 0; i < this.markers.length; i++) {
            console.log(this.markers[i]);
            this.markers[i].setMap(null);
        }
        this.markers = [];
    };
    FindridePage.prototype.dragMarkerDest = function (marker, inputName) {
        var _this = this;
        google.maps.event.addListener(marker, 'dragend', function (evt) {
            var lat = marker.getPosition().lat();
            var lng = marker.getPosition().lng();
            var latLng = { lat: lat, lng: lng };
            _this.map.setCenter(latLng);
            _this.geocodeLatLng(latLng, inputName);
            _this.calculateRoute(_this.markerGeolocation.position, latLng);
        });
    };
    FindridePage.prototype.dragMarkerOr = function (marker, inputName) {
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
    FindridePage.prototype.geocodeLatLng = function (latLng, inputName) {
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
    FindridePage.prototype.listride = function () {
        var _this = this;
        if (this.user.trips) {
            if (this.user.onTrip == true) {
                var alert_1 = this.alertCtrl.create({
                    title: 'Estas actualmente en un viaje',
                    subTitle: 'No puedes pedir otro viaje ya que en este momento estas en un viaje',
                    buttons: ['OK']
                });
                alert_1.present();
            }
            else {
                try {
                    this.desFirebase = this.autocompleteMyDest.input;
                    this.orFirebase = this.autocompleteMyPos.input;
                    console.log(this.desFirebase[0]);
                    if (this.autocompleteMyDest.input == '' || this.autocompleteMyPos.input == '') {
                        this.presentAlert('No tienes toda la informacion', 'Por favor asegura que tu origen y destino sean correctos', 'Ok');
                        this.clearMarkers();
                        this.directionsDisplay.setDirections({ routes: [] });
                        // AQUI
                    }
                    else {
                        //turn on geoquery university to determine wether the user is in university
                        this.setGeofireUniversity(this.SignUpService.userUniversity, 0.56, this.myLatLngDest.lat(), this.myLatLngDest.lng(), this.userUid);
                        // test: geoqueryU on listride() of findride.ts
                        this.geoqueryU.on("key_entered", function (key) {
                            var _this = this;
                            this.afDB.database.ref(this.SignUpService.userUniversity + '/users/' + this.userUid + '/trips').update({
                                origin: this.orFirebase,
                                destination: this.desFirebase
                            }).then(function () {
                                _this.geocoder.geocode({ 'address': _this.orFirebase[0] }, function (results, status) {
                                    if (status === 'OK') {
                                        _this.geocoordinatesOr = {
                                            lat: results[0].geometry.location.lat(),
                                            lng: results[0].geometry.location.lng()
                                        };
                                    }
                                    // turn geofire On
                                    if (_this.user.onTrip === true) {
                                        console.log('geofireOr hasnt been activated due ontrip');
                                    }
                                    else {
                                        _this.geofireService.setGeofireOr(_this.SignUpService.userUniversity, 2, _this.geocoordinatesOr.lat, _this.geocoordinatesOr.lng, _this.userUid);
                                        _this.geofireService.setGeofireOrLMU(_this.SignUpService.userUniversity, 2, _this.geocoordinatesOr.lat, _this.geocoordinatesOr.lng, _this.userUid);
                                        console.log('executed geofire Or');
                                    }
                                });
                                _this.geofireOriginConfirmed = true;
                            });
                            console.log(key + ' detected');
                        }.bind(this));
                        setTimeout(function () {
                            if (!_this.geofireOriginConfirmed == true) {
                                _this.geocoderDestinationCase();
                            }
                            else {
                                _this.geofireOriginConfirmed = false;
                                console.log('ORIGIN HAS BEEN EXECUTED');
                            }
                        }, 1500);
                        this.confirmNote();
                        console.log("se ejecuto");
                    }
                }
                catch (error) {
                    console.log("soy yo");
                    if (this.geofire2 === null || this.geofire2 === undefined) {
                        //this is to tell the user to select a place before publishing a trip
                        this.presentAlert('Información Incompleta', 'no puedes publicar un viaje sin antes seleccionar un lugar de la lista.', 'Ok');
                    }
                    else {
                        this.presentAlert('Hay un error en la aplicación', 'Lo sentimos, por favor para solucionar este problema porfavor envianos un correo a soporte@waypool.com,¡lo solucionaremos!.', 'Ok');
                    }
                }
            }
        }
        else {
            try {
                this.desFirebase = this.autocompleteMyDest.input;
                this.orFirebase = this.autocompleteMyPos.input;
                console.log(this.desFirebase[0]);
                if (this.autocompleteMyDest.input == '' || this.autocompleteMyPos.input == '') {
                    this.presentAlert('No tienes toda la informacion', 'Por favor asegura que tu origen y destino sean correctos', 'Ok');
                    this.clearMarkers();
                    this.directionsDisplay.setDirections({ routes: [] });
                    // AQUI
                }
                else {
                    //turn on geoquery university to determine wether the user is in university
                    this.setGeofireUniversity(this.SignUpService.userUniversity, 0.56, this.myLatLngDest.lat(), this.myLatLngDest.lng(), this.userUid);
                    // test: geoqueryU on listride() of findride.ts
                    this.geoqueryU.on("key_entered", function (key) {
                        var _this = this;
                        this.afDB.database.ref(this.SignUpService.userUniversity + '/users/' + this.userUid).update({
                            geofireOrigin: true
                        }).then(function () {
                            _this.afDB.database.ref(_this.SignUpService.userUniversity + '/users/' + _this.userUid + '/trips').update({
                                origin: _this.orFirebase,
                                destination: _this.desFirebase
                            }).then(function () {
                                _this.geocoder.geocode({ 'address': _this.orFirebase[0] }, function (results, status) {
                                    if (status === 'OK') {
                                        _this.geocoordinatesOr = {
                                            lat: results[0].geometry.location.lat(),
                                            lng: results[0].geometry.location.lng()
                                        };
                                    }
                                    // turn geofire On
                                    if (_this.user.onTrip === true) {
                                        console.log('geofireOr hasnt been activated due ontrip');
                                    }
                                    else {
                                        console.log('AQUI ESTA EL ERROR 2');
                                        _this.geofireService.setGeofireOr(_this.SignUpService.userUniversity, 2, _this.geocoordinatesOr.lat, _this.geocoordinatesOr.lng, _this.userUid);
                                        _this.geofireService.setGeofireOrLMU(_this.SignUpService.userUniversity, 2, _this.geocoordinatesOr.lat, _this.geocoordinatesOr.lng, _this.userUid);
                                        console.log('executed geofire Or');
                                    }
                                });
                                _this.geofireOriginConfirmed = true;
                            });
                            console.log('directions set');
                        });
                        console.log(key + ' detected');
                    }.bind(this));
                    setTimeout(function () {
                        if (!_this.geofireOriginConfirmed == true) {
                            _this.afDB.database.ref(_this.SignUpService.userUniversity + '/users/' + _this.userUid + '/trips').update({
                                origin: _this.orFirebase,
                                destination: _this.desFirebase
                            }).then(function () {
                                _this.geocoderDestinationCase();
                            });
                        }
                        else {
                            _this.geofireOriginConfirmed = false;
                        }
                    }, 1000);
                    this.confirmNote();
                    console.log("se ejecuto");
                }
            }
            catch (error) {
                console.log("soy yo");
                if (this.geofire2 === null || this.geofire2 === undefined) {
                    //this is to tell the user to select a place before publishing a trip
                    this.presentAlert('Información Incompleta', 'no puedes publicar un viaje sin antes seleccionar un lugar de la lista.', 'Ok');
                }
                else {
                    this.presentAlert('Hay un error en la aplicación', 'Lo sentimos, por favor para solucionar este problema porfavor envianos un correo a soporte@waypool.com,¡lo solucionaremos!.', 'Ok');
                }
            }
        }
    };
    FindridePage.prototype.geocoderDestinationCase = function () {
        var _this = this;
        this.geocoder.geocode({ 'address': this.desFirebase[0] }, function (results, status) {
            if (status === 'OK') {
                _this.geocoordinatesDest = {
                    lat: results[0].geometry.location.lat(),
                    lng: results[0].geometry.location.lng()
                };
            }
            // turn geofire On
            if (_this.user.onTrip === true) {
                console.log('geofireDest hasnt been activated due ontrip');
            }
            else {
                _this.geofireService.setGeofireDest(_this.SignUpService.userUniversity, 2, _this.geocoordinatesDest.lat, _this.geocoordinatesDest.lng, _this.userUid);
                _this.geofireService.setGeofireDestLMU(_this.SignUpService.userUniversity, 2, _this.geocoordinatesDest.lat, _this.geocoordinatesDest.lng, _this.userUid);
                console.log('executed geofire Dest');
            }
        });
    };
    FindridePage.prototype.presentAlert = function (title, text, button) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: [button]
        });
        alert.present();
    };
    FindridePage.prototype.goToMyReserves = function () {
        this.app.getRootNav().push('ReservetripPage');
    };
    FindridePage.prototype.goToTrip = function () {
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
    FindridePage.prototype.confirmNote = function () {
        var _this = this;
        var modal = this.modalCtrl.create('ConfirmNotePage');
        modal.onDidDismiss(function (accepted) {
            if (accepted) {
                _this.app.getRootNav().push('ListridePage');
            }
        });
        modal.present();
    };
    // set geoquery that determines if the person is in university
    FindridePage.prototype.setGeofireUniversity = function (university, radius, lat, lng, userId) {
        this.dbRef = this.afDB.database.ref(university + '/geofireUniversity/');
        this.geoFire = new __WEBPACK_IMPORTED_MODULE_8_geofire__(this.dbRef);
        this.geoqueryU = this.geoFire.query({
            center: [lat, lng],
            radius: radius
        });
        console.log('geoquery university added');
    };
    FindridePage.prototype.ionViewDidLeave = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], FindridePage.prototype, "mapElement", void 0);
    FindridePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-findride',template:/*ion-inline-start:"C:\Users\Daniel\Documents\waypool\prod\customer\waypool_costumer\src\pages\findride\findride.html"*/'<ion-header class="bg-theme">\n\n    <ion-navbar>\n\n        <ion-title><span class="text-white findRideText">PIDE TU VIAJE</span></ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content  padding>\n\n    \n\n    <ion-card class="search">\n\n          \n\n        <ion-card-content>\n\n            <span class="dot bg-theme"></span>\n\n            <ion-searchbar required [(ngModel)]="autocompleteMyPos.input" [animated]=true (ionInput)="updateSearchResultsMyPos()"  placeholder="Tu origen"></ion-searchbar>\n\n          \n\n            <ion-list   [hidden]="autocompleteItems.length == 0">\n\n                <ion-item  *ngFor="let item of autocompleteItems" tappable (click)="selectSearchResultMyPos(item)">\n\n                  {{ item.description }}\n\n                </ion-item>\n\n              </ion-list>\n\n              <!-- <ion-icon name="md-locate" (click)="getPositionAndMarker()" class="text-black"></ion-icon> -->\n\n        </ion-card-content>\n\n        <ion-card-content>\n\n            <span class="dot bg-yellow"></span>           \n\n           <ion-searchbar required [(ngModel)]="autocompleteMyDest.input" (ionInput)="updateSearchResultsMyDest()" placeholder="Tu destino"></ion-searchbar>\n\n\n\n            <ion-list   [hidden]="autocompleteItems2.length == 0">\n\n            <ion-item class="item" *ngFor="let item of autocompleteItems2" tappable (click)="selectSearchResultMyDest(item)">\n\n              {{ item.description }}\n\n            </ion-item>\n\n          </ion-list>\n\n            <!-- <span class="text-light search-text">Office &nbsp;<ion-icon name="ios-arrow-down" class="text-light"></ion-icon></span> -->\n\n\n\n        </ion-card-content>\n\n        \n\n    </ion-card>\n\n  \n\n <div #map id="map"></div>  \n\n    \n\n    \n\n<ion-row class="rowOfButtons">\n\n\n\n  <div class="btn-footer btn-left">\n\n      <button class="btn rounded bg-darkblue text-white myReservesButton" style="width: 100%" (click)="goToMyReserves()" >Mis Reservas</button> \n\n  </div>\n\n  <div class="btn-right">\n\n      <button (click)="listride()" class="btn rounded bg-theme text-white " style="width: 100%">Pedir</button>\n\n\n\n  </div>\n\n \n\n</ion-row>\n\n \n\n<div *ngIf="onTrip" >\n\n    <button class="btn rounded bg-theme text-white animated infinite pulse" style=" width: 100% ;\n\n     position: fixed ;\n\n     bottom: 0px ;\n\n     left: 0px ;\n\n     height: 51px; \n\n     font-size: large;\n\n   " (click)="goToTrip() " >VIAJE EN CURSO\n\n    </button>\n\n</div>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Daniel\Documents\waypool\prod\customer\waypool_costumer\src\pages\findride\findride.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */], __WEBPACK_IMPORTED_MODULE_3__services_sendCoords_service__["a" /* sendCoordsService */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__services_geoFire_service__["a" /* geofireService */], __WEBPACK_IMPORTED_MODULE_6__services_signup_services__["a" /* SignUpService */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_9__services_trips_service__["a" /* TripsService */], __WEBPACK_IMPORTED_MODULE_11__services_instances_service__["a" /* instancesService */], __WEBPACK_IMPORTED_MODULE_12__ionic_native_diagnostic_ngx__["a" /* Diagnostic */]])
    ], FindridePage);
    return FindridePage;
}());

//# sourceMappingURL=findride.js.map

/***/ })

});
//# sourceMappingURL=17.js.map