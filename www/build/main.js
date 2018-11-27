webpackJsonp([0],{

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindridePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
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
    function FindridePage(navCtrl, geolocation, zone) {
        this.navCtrl = navCtrl;
        this.geolocation = geolocation;
        this.zone = zone;
        // waypoints variables
        this.directionsService = null;
        this.directionsDisplay = null;
        this.bounds = null;
        this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
        this.geocoder = new google.maps.Geocoder;
        this.autocompleteMyPos = { input: '' };
        this.autocompleteMyDest = { input: '' };
        this.autocompleteItems = [];
        this.autocompleteItems2 = [];
        this.directionsService = new google.maps.DirectionsService();
        this.directionsDisplay = new google.maps.DirectionsRenderer();
        this.bounds = new google.maps.LatLngBounds();
        this.markers = [];
        // initialize the plugin
        this.waypoints = [
            {
                location: { lat: 11.021501699519131, lng: -74.86285872754996 },
                stopover: true,
            },
            {
                location: { lat: 11.025534032595598, lng: -74.86373904478859 },
                stopover: true,
            },
            {
                location: { lat: 11.02236576562964, lng: -74.86300545538433 },
                stopover: true,
            },
            {
                location: { lat: 11.026110069053571, lng: -74.8605112367415 },
                stopover: true,
            }
        ];
    }
    FindridePage.prototype.ionViewDidLoad = function () {
        this.loadMap();
    };
    FindridePage.prototype.loadMap = function () {
        var _this = this;
        // this gets current position and set the camera of the map and put a marker in your location
        this.geolocation.getCurrentPosition().then(function (position) {
            var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            var mapOptions = {
                center: latLng,
                zoom: 12,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            //creates the map and give options
            _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapOptions);
            _this.myLatLng = { lat: position.coords.latitude, lng: position.coords.longitude };
            var marker = new google.maps.Marker({
                map: _this.map,
                animation: google.maps.Animation.DROP,
                position: latLng,
                draggable: true
            });
            _this.markers.push(marker);
            _this.dragMarker(marker, _this.autocompleteMyPos);
            //to reverse-geocode position
            _this.geocodeLatLng(latLng, _this.autocompleteMyPos);
        }, function (err) {
            console.log(err);
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
    FindridePage.prototype.calculateRoute = function (positionDest) {
        //tutorial ngclassroom https://blog.ng-classroom.com/blog/ionic2/directions-google-js-ionic/
        var _this = this;
        this.bounds.extend(this.myLatLng);
        // this.waypoints.forEach(waypoint => {
        //   var point = new google.maps.LatLng(waypoint.location.lat, waypoint.location.lng);
        //   this.bounds.extend(point);
        // });
        this.map.fitBounds(this.bounds);
        this.directionsService.route({
            // origin: new google.maps.LatLng(this.myLatLng.lat, this.myLatLng.lng),
            origin: new google.maps.LatLng(this.myLatLng.lat, this.myLatLng.lng),
            destination: positionDest,
            // waypoints: this.waypoints,
            // optimizeWaypoints: true,
            travelMode: google.maps.TravelMode.DRIVING,
            avoidTolls: true
        }, function (response, status) {
            //render
            if (status === google.maps.DirectionsStatus.OK) {
                console.log(response);
                _this.directionsDisplay.setDirections(response);
            }
            else {
                alert('Could not display directions due to: ' + status);
            }
        });
    };
    FindridePage.prototype.getPositionAndMarker = function () {
        var _this = this;
        this.clearMarkers(); //remove previous markers
        // this will allow the user get his position every time he wants 
        this.geolocation.getCurrentPosition().then(function (position) {
            var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            var mapOptions = {
                center: latLng,
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapOptions);
            var marker = new google.maps.Marker({
                map: _this.map,
                animation: google.maps.Animation.BOUNCE,
                position: latLng,
            });
            _this.dragMarker(marker, _this.autocompleteMyPos);
        }, function (err) {
            console.log(err);
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
        this.geocoder.geocode({ 'placeId': item.place_id }, function (results, status) {
            if (status === 'OK' && results[0]) {
                var position = {
                    lat: results[0].geometry.location.lat,
                    lng: results[0].geometry.location.lng
                };
                var marker = new google.maps.Marker({
                    position: results[0].geometry.location,
                    map: _this.map,
                    draggable: true
                });
                _this.dragMarker(marker, _this.autocompleteMyPos);
                _this.markers.push(marker);
                _this.map.setCenter(results[0].geometry.location);
                _this.autocompleteMyPos.input = [item.description];
            }
        });
    };
    ////select result of my destination searchbar
    FindridePage.prototype.selectSearchResultMyDest = function (item) {
        var _this = this;
        this.autocompleteItems2 = [];
        this.geocoder.geocode({ 'placeId': item.place_id }, function (results, status) {
            if (status === 'OK' && results[0]) {
                var position = {
                    latitude: results[0].geometry.location.lat,
                    longitude: results[0].geometry.location.lng
                };
                // let position = new google.maps.LatLng( results[0].geometry.location.lat,
                //  results[0].geometry.location.lng)
                var marker = new google.maps.Marker({
                    position: results[0].geometry.location,
                    map: _this.map,
                    draggable: true,
                });
                // this.myLatLngDest = {position: results[0].geometry.location}
                // this.myLatLngDest = {latitude: results[0].geometry.location.lat, longitude: results[0].geometry.location.lng} ;
                _this.map.fitBounds(_this.bounds);
                _this.markers.push(marker);
                _this.map.setCenter(results[0].geometry.location);
                _this.autocompleteMyDest.input = [item.description];
                _this.dragMarker(marker, _this.autocompleteMyDest);
                _this.directionsDisplay.setMap(_this.map);
                _this.calculateRoute(results[0].geometry.location);
                // google.maps.event.addListenerOnce(this.map, 'idle', () => {
                //   this.mapElement.nativeElement.classList.add('show-map');
                //   this.calculateRoute(results[0].geometry.location);
                // });   
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
    FindridePage.prototype.dragMarker = function (marker, inputName) {
        var _this = this;
        google.maps.event.addListener(marker, 'dragend', function (evt) {
            var lat = marker.getPosition().lat();
            var lng = marker.getPosition().lng();
            var latLng = { lat: lat, lng: lng };
            console.log(latLng);
            _this.map.setCenter(latLng);
            _this.geocodeLatLng(latLng, inputName);
        });
    };
    FindridePage.prototype.listride = function () {
        // TO DO: IF  (GEOPOSITION !== POSITIONDEST){
        //      NO PERMITIR VIAJE , ES UNA IDEA PERO NO ESTOY 100% DE ACUERDO
        //}
        //this is to go to ListridePage  this.navCtrl.push(ListridePage);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]) === "function" && _a || Object)
    ], FindridePage.prototype, "mapElement", void 0);
    FindridePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-findride',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_customer_src/src/pages/findride/findride.html"*/'<ion-header class="transparent">\n    <ion-navbar>\n        <ion-title><span class="text-white">PIDE TU VIAJE</span></ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-background-img" padding>\n        \n    <ion-card class="search">\n            <ion-item>\n                    <ion-label>¿A donde vas?</ion-label>\n                    <ion-select [(ngModel)]="destinationSelect">\n                      <ion-option>Otro lugar</ion-option>\n                      <ion-option>Universidad del Norte</ion-option>\n                    </ion-select>\n                  </ion-item>\n        <ion-card-content>\n            <span class="dot bg-theme"></span>\n            <ion-searchbar [(ngModel)]="autocompleteMyPos.input" (ionInput)="updateSearchResultsMyPos()"  placeholder="Tu ubicación"></ion-searchbar>\n          \n            <ion-list   [hidden]="autocompleteItems.length == 0">\n                <ion-item  *ngFor="let item of autocompleteItems" tappable (click)="selectSearchResultMyPos(item)">\n                  {{ item.description }}\n                </ion-item>\n              </ion-list>\n              <!-- <ion-icon name="md-locate" (click)="getPositionAndMarker()" class="text-black"></ion-icon> -->\n        </ion-card-content>\n        <ion-card-content>\n            <span class="dot bg-yellow"></span>           \n            <ion-searchbar  [(ngModel)]="autocompleteMyDest.input" (ionInput)="updateSearchResultsMyDest()" placeholder="Tu destino"></ion-searchbar>\n\n            <ion-list   [hidden]="autocompleteItems2.length == 0">\n            <ion-item class="item" *ngFor="let item of autocompleteItems2" tappable (click)="selectSearchResultMyDest(item)">\n              {{ item.description }}\n            </ion-item>\n          </ion-list>\n            <!-- <span class="text-light search-text">Office &nbsp;<ion-icon name="ios-arrow-down" class="text-light"></ion-icon></span> -->\n\n        </ion-card-content>\n        \n    </ion-card>\n  \n <div #map id="map"></div>  \n    \n    \n    \n    <button (click)="listride()" class="btn rounded bg-white text-theme" style="width: 100%">List</button>\n\n    <!-- <div id="map_canvas"> \n        <button ion-button (click) ="onButtonClickEvent($event)"> start demo </button>\n    </div> -->\n\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_customer_src/src/pages/findride/findride.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation__["a" /* Geolocation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation__["a" /* Geolocation */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */]) === "function" && _d || Object])
    ], FindridePage);
    return FindridePage;
    var _a, _b, _c, _d;
}());

// import { Component, ViewChild, ElementRef,NgZone } from '@angular/core';
// import { ListridePage } from '../listride/listride';
// import { Geolocation } from '@ionic-native/geolocation';
// import { NavController, Platform, ViewController } from 'ionic-angular';
// import { Geofence } from '@ionic-native/geofence';
// declare var google;
// @Component({
//   selector: 'page-findride',
//template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_customer_src/src/pages/findride/findride.html"*/'<ion-header class="transparent">\n    <ion-navbar>\n        <ion-title><span class="text-white">PIDE TU VIAJE</span></ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-background-img" padding>\n        \n    <ion-card class="search">\n            <ion-item>\n                    <ion-label>¿A donde vas?</ion-label>\n                    <ion-select [(ngModel)]="destinationSelect">\n                      <ion-option>Otro lugar</ion-option>\n                      <ion-option>Universidad del Norte</ion-option>\n                    </ion-select>\n                  </ion-item>\n        <ion-card-content>\n            <span class="dot bg-theme"></span>\n            <ion-searchbar [(ngModel)]="autocompleteMyPos.input" (ionInput)="updateSearchResultsMyPos()"  placeholder="Tu ubicación"></ion-searchbar>\n          \n            <ion-list   [hidden]="autocompleteItems.length == 0">\n                <ion-item  *ngFor="let item of autocompleteItems" tappable (click)="selectSearchResultMyPos(item)">\n                  {{ item.description }}\n                </ion-item>\n              </ion-list>\n              <!-- <ion-icon name="md-locate" (click)="getPositionAndMarker()" class="text-black"></ion-icon> -->\n        </ion-card-content>\n        <ion-card-content>\n            <span class="dot bg-yellow"></span>           \n            <ion-searchbar  [(ngModel)]="autocompleteMyDest.input" (ionInput)="updateSearchResultsMyDest()" placeholder="Tu destino"></ion-searchbar>\n\n            <ion-list   [hidden]="autocompleteItems2.length == 0">\n            <ion-item class="item" *ngFor="let item of autocompleteItems2" tappable (click)="selectSearchResultMyDest(item)">\n              {{ item.description }}\n            </ion-item>\n          </ion-list>\n            <!-- <span class="text-light search-text">Office &nbsp;<ion-icon name="ios-arrow-down" class="text-light"></ion-icon></span> -->\n\n        </ion-card-content>\n        \n    </ion-card>\n  \n <div #map id="map"></div>  \n    \n    \n    \n    <button (click)="listride()" class="btn rounded bg-white text-theme" style="width: 100%">List</button>\n\n    <!-- <div id="map_canvas"> \n        <button ion-button (click) ="onButtonClickEvent($event)"> start demo </button>\n    </div> -->\n\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_customer_src/src/pages/findride/findride.html"*/
// })
// export class FindridePage {
//   @ViewChild('map') mapElement: ElementRef;
//   map: any;
//   markers: any;
//   // autocomplete/geocoder variables
//   autocompleteMyPos: any;
//   autocompleteMyDest: any;
//   GoogleAutocomplete: any;
//   GooglePlaces: any;
//   geocoder: any
//   autocompleteItems: any;
//   autocompleteItems2:any;
//   // waypoints variables
//   directionsService: any = null;
//   directionsDisplay: any = null;
//   bounds: any = null;
//   myLatLng: any;
//   waypoints: any[];
//   myLatLngDest:any;
//   constructor(public navCtrl: NavController, public geolocation: Geolocation,public zone: NgZone,private geofence: Geofence) {
//     this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
//     this.geocoder = new google.maps.Geocoder;
//     this.autocompleteMyPos = { input: '' };
//     this.autocompleteMyDest = { input: '' };
//     this.autocompleteItems = [];
//     this.autocompleteItems2=[];
//     this.directionsService = new google.maps.DirectionsService();
//     this.directionsDisplay = new google.maps.DirectionsRenderer();
//     this.bounds = new google.maps.LatLngBounds();
//     this.markers = [];
//     // initialize the plugin
//     this.waypoints = [
//       {
//         location: { lat: 4.6241329, lng: -74.1768411 },
//         stopover: true,
//       },
//       {
//         location: { lat: 4.6247745, lng: -74.1698888 },
//         stopover: true,
//       },
//       {
//         location: { lat: 4.6212241, lng: -74.1631081 },
//         stopover: true,
//       },
//       {
//         location: { lat: 4.6222508, lng: -74.1667989 },
//         stopover: true,
//       }
//     ];
//   }
//   ionViewDidLoad(){
//     this.loadMap();
//   }
//   loadMap(){
//  // this gets current position and set the camera of the map and put a marker in your location
//     this.geolocation.getCurrentPosition().then((position) => {
//       let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
//       let mapOptions = {
//           center: latLng,
//           zoom: 18,
//           mapTypeId: google.maps.MapTypeId.ROADMAP
//         }
//       this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
//       this.myLatLng = {lat: position.coords.latitude , lng: position.coords.longitude};
//       let marker = new google.maps.Marker({
//         map: this.map,
//         animation: google.maps.Animation.DROP,
//         position: latLng,
//         draggable:true
//       });
//       this.markers.push(marker);
//       this.dragMarker(marker)
//       },(err) => {
//       console.log(err);    
//      });
//   }
//    calculateRoute(){
//     //tutorial ngclassroom https://blog.ng-classroom.com/blog/ionic2/directions-google-js-ionic/
//     this.bounds.extend(this.myLatLng);
//     this.waypoints.forEach(waypoint => {
//       var point = new google.maps.LatLng(waypoint.location.lat, waypoint.location.lng);
//       this.bounds.extend(point);
//     });
//     this.map.fitBounds(this.bounds);
//     this.directionsService.route({
//       // origin: new google.maps.LatLng(this.myLatLng.lat, this.myLatLng.lng),
//      origin: new google.maps.LatLng(this.myLatLng.lat, this.myLatLng.lng),
//       destination: new google.maps.LatLng(this.myLatLngDest.lat, this.myLatLngDest.lng),
//       waypoints: this.waypoints,
//       optimizeWaypoints: true,
//       travelMode: google.maps.TravelMode.DRIVING,
//       avoidTolls: true
//     }, (response, status)=> {
//       //render
//       if(status === google.maps.DirectionsStatus.OK) {
//         console.log(response);
//         this.directionsDisplay.setDirections(response);
//       }else{
//         alert('Could not display directions due to: ' + status);
//       }
//     });  
//   }
// getPositionAndMarker(){
//   this.clearMarkers();//remove previous markers
//     // this will allow the user get his position every time he wants 
//     this.geolocation.getCurrentPosition().then((position) => {
//       let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
//       let mapOptions = {
//           center: latLng,
//           zoom: 15,
//           mapTypeId: google.maps.MapTypeId.ROADMAP
//         }
//       this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
//       let marker = new google.maps.Marker({
//         map: this.map,
//         animation: google.maps.Animation.BOUNCE,
//         position: latLng,
//       });
//     this.dragMarker(marker)
//       },(err) => {
//       console.log(err);    
//     });
// }
// //autocomplete of myPosition searchbar
// updateSearchResultsMyPos(){
//     if (this.autocompleteMyPos.input == '') {
//       this.autocompleteItems = [];     
//       return;
//     }
//     this.GoogleAutocomplete.getPlacePredictions({ input: this.autocompleteMyPos.input, componentRestrictions: {country:'co'} },
//     (predictions, status) => {
//       this.autocompleteItems = [];
//       if(predictions){
//         this.zone.run(() => {
//           predictions.forEach((prediction) => {
//             this.autocompleteItems.push(prediction);
//           });
//         });
//       }
//   });
// }
//   ////autocomplete of my destination
//   updateSearchResultsMyDest(){
//     if (this.autocompleteMyDest.input == '') {
//       this.autocompleteItems2 = [];
//       return;
//     }
//     this.GoogleAutocomplete.getPlacePredictions({ input: this.autocompleteMyDest.input, componentRestrictions: {country:'co'} },
//     (predictions, status) => {
//       this.autocompleteItems2 = [];
//       if(predictions){
//         this.zone.run(() => {
//           predictions.forEach((prediction) => {
//             this.autocompleteItems2.push(prediction);
//           });
//         });
//       }
//   });
// }
//   ////select result of my position searchbar
// selectSearchResultMyPos(item){
//   this.autocompleteItems=[];
//   this.clearMarkers();
//   this.geocoder.geocode({'placeId': item.place_id}, (results, status) => {
//     if(status === 'OK' && results[0]){
//       let position = {
//           lat: results[0].geometry.location.lat,
//           lng: results[0].geometry.location.lng
//       };
//        let marker = new google.maps.Marker({
//         position: results[0].geometry.location,
//         map: this.map,
//         draggable: true
//       });
//       this.dragMarker(marker)
//       this.markers.push(marker);
//       this.map.setCenter(results[0].geometry.location);
//       this.autocompleteMyPos.input=[item.description]
//     }
//   })
// }
//   ////select result of my destination searchbar
// selectSearchResultMyDest(item){
//   this.autocompleteItems2=[];
//   this.geocoder.geocode({'placeId': item.place_id}, (results, status) => {
//     if(status === 'OK' && results[0]){
//       // let position = {latitude: results[0].geometry.location.lat,
//       //   longitude: results[0].geometry.location.lng}
//         let position = new google.maps.LatLng( results[0].geometry.location.lat,
//          results[0].geometry.location.lng)
//       let marker = new google.maps.Marker({
//         position: results[0].geometry.location,
//         map: this.map,
//         draggable:true,
//       });
//       // this.myLatLngDest = new google.maps.LatLng(results[0].geometry.location.lat , results[0].geometry.location.lng);
//       this.myLatLngDest = {lat: results[0].geometry.location.lat , lng: results[0].geometry.location.lng};
//       this.map.fitBounds(this.bounds);
//       this.dragMarker(marker)
//       this.markers.push(marker);
//       this.map.setCenter(results[0].geometry.location);
//       this.autocompleteMyDest.input=[item.description]
//       this.directionsDisplay.setMap(this.map);
//       google.maps.event.addListenerOnce(this.map, 'idle', () => {
//         this.mapElement.nativeElement.classList.add('show-map');
//         this.calculateRoute();
//       });
//     }
//   })
// }
// ////////Markers
// clearMarkers(){
//     for (var i = 0; i < this.markers.length; i++) {
//       console.log(this.markers[i])
//       this.markers[i].setMap(null);
//     }
//     this.markers = [];
//   }
//  dragMarker(marker){
//   google.maps.event.addListener(marker, 'dragend', function (evt) {
//     let lat = marker.getPosition().lat()
//     let lng = marker.getPosition().lng()
//     let latLng = {lat,lng}
//     console.log(latLng)
//     this.map.setCenter(latLng);
//  })
// }
//   listride(){
//     //this is to go to ListridePage  this.navCtrl.push(ListridePage);
//   }
//# sourceMappingURL=findride.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__myride_myride__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chats_chats__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__findride_findride__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__wallet_wallet__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__more_more__ = __webpack_require__(290);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__myride_myride__["a" /* MyridePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__chats_chats__["a" /* ChatsPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__findride_findride__["a" /* FindridePage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__wallet_wallet__["a" /* WalletPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_5__more_more__["a" /* MorePage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_customer_src/src/pages/tabs/tabs.html"*/'<ion-tabs>\n    <ion-tab [root]="tab1Root" tabTitle="My Ride" tabIcon="md-car" tabsHideOnSubPages="true"></ion-tab>\n    <ion-tab [root]="tab2Root" tabTitle="Chats" tabIcon="md-chatboxes" tabsHideOnSubPages="true"></ion-tab>\n    <ion-tab [root]="tab3Root" tabTitle="Find a ride" tabIcon="md-search" tabsHideOnSubPages="true"></ion-tab>\n    <ion-tab [root]="tab4Root" tabTitle="Wallet" tabIcon="md-card" tabsHideOnSubPages="true"></ion-tab>\n    <ion-tab [root]="tab5Root" tabTitle="more" tabIcon="md-person" tabsHideOnSubPages="true"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_customer_src/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_userauthentication_service__ = __webpack_require__(161);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, authenticationService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.authenticationService = authenticationService;
        this.alertCtrl = alertCtrl;
        this.email = null;
        this.password = null;
    }
    LoginPage.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage.prototype.logIn = function () {
        var _this = this;
        this.authenticationService.loginWithEmail(this.email, this.password).then(function (data) {
            // alert("loggeado correctamente");
            console.log(data);
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
            _this.authenticationService.getStatus;
        }).catch(function (error) {
            var alert = _this.alertCtrl.create({
                title: 'Oops!',
                subTitle: 'El usuario o la contraseña están incorrectas',
                buttons: ['OK']
            });
            alert.present();
            console.log(error);
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_customer_src/src/pages/login/login.html"*/'<ion-header class="transparent">\n    <ion-navbar>\n        <ion-title><span class="text-white">SIGN IN</span></ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-background-img">\n    <div class="logo">\n        <img src="../../assets/imgs/logo waypool-01.png" alt="logo">\n    </div>\n\n    <div class="bg-white login">\n        <div class="">\n            <ion-list class="form">\n                <ion-item>\n                    <ion-label></ion-label>\n                    <ion-input type="email"  text-right [(ngModel)]="email" placeholder= "email universitario"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label></ion-label>\n                    <ion-input type="password" text-right  [(ngModel)]="password" placeholder= "Tú contraseña"></ion-input>\n                </ion-item>\n            </ion-list>\n            <button ion-button full class="bg-theme text-white btn rounded" (click)="logIn()">ENTRAR</button>\n            <ion-row style="padding-top: 30px;">\n                <ion-col (click)="signup()"><small>¿eres nuevo? <strong class="text-theme">Sign up</strong></small></ion-col>\n                <ion-col text-right><small>Olvidaste tu <strong class="text-theme">contraseña?</strong></small></ion-col>\n            </ion-row>\n            <!-- <p text-center class="option-login"><span>OR CONTINUE WITH</span></p>\n            <ion-row>\n                <ion-col col-6><button ion-button full class="bg-blue text-white btn rounded small"><img src="assets/imgs/fb_white.png">\n                    <span>Facebook</span></button></ion-col>\n                <ion-col col-6><button ion-button full class="bg-white text-dark btn rounded small"><img src="assets/imgs/google.png">\n                    <span>Google&nbsp;&nbsp;</span></button></ion-col>\n            </ion-row> -->\n        </div>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_customer_src/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__services_userauthentication_service__["a" /* authenticationService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SignUpService = /** @class */ (function () {
    function SignUpService(afDB) {
        this.afDB = afDB;
    }
    SignUpService.prototype.saveUser = function (user) {
        this.afDB.database.ref('users/' + user.userId).set(user);
    };
    SignUpService.prototype.getDrivers = function () {
        return this.afDB.list('/drivers').valueChanges();
    };
    SignUpService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_fire_database__["AngularFireDatabase"]])
    ], SignUpService);
    return SignUpService;
}());

//# sourceMappingURL=signup.services.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return authenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var authenticationService = /** @class */ (function () {
    function authenticationService(angularFireAuth) {
        this.angularFireAuth = angularFireAuth;
    }
    authenticationService.prototype.loginWithEmail = function (email, password) {
        return this.angularFireAuth.auth.signInWithEmailAndPassword(email, password);
    };
    authenticationService.prototype.registerWithEmail = function (email, password) {
        return this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password);
    };
    authenticationService.prototype.getStatus = function () {
        return this.angularFireAuth.authState;
    };
    authenticationService.prototype.logOut = function () {
        return this.angularFireAuth.auth.signOut();
    };
    authenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["AngularFireAuth"]])
    ], authenticationService);
    return authenticationService;
}());

//# sourceMappingURL=userauthentication.service.js.map

/***/ }),

/***/ 200:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 200;

/***/ }),

/***/ 241:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 241;

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyridePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__raterider_raterider__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chatting_chatting__ = __webpack_require__(89);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyridePage = /** @class */ (function () {
    function MyridePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.ride = "Upconing";
    }
    MyridePage.prototype.raterider = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__raterider_raterider__["a" /* RateriderPage */]);
    };
    MyridePage.prototype.chatting = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__chatting_chatting__["a" /* ChattingPage */]);
    };
    MyridePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-myride',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_customer_src/src/pages/myride/myride.html"*/'<ion-header class="bg-theme">\n    <ion-navbar>\n        <ion-title class="text-center">MY RIDE</ion-title>\n    </ion-navbar>\n    <div padding-left padding-right>\n        <ion-segment [(ngModel)]="ride">\n            <ion-segment-button value="Upconing">\n                Upconing Rides\n            </ion-segment-button>\n            <ion-segment-button value="History">\n                Ride History\n            </ion-segment-button>\n        </ion-segment>\n    </div>\n</ion-header>\n\n<ion-content class="bg-light">\n    <div [ngSwitch]="ride">\n        <ion-list *ngSwitchCase="\'Upconing\'">\n            <ion-card>\n                <ion-item>\n                    <ion-avatar item-start>\n                        <img src="assets/imgs/face-1.jpg">\n                    </ion-avatar>\n                    <div class="name">\n                        <h2>David Johnson\n                            <ion-icon name="ios-checkmark-circle" class="text-theme"></ion-icon>\n                        </h2>\n                        <p>Honda Cvic | White</p>\n                    </div>\n                    <div class="more">\n                        <h2 class="text-theme">$ 120\n                            <ion-icon name="md-more"></ion-icon>\n                        </h2>\n                        <p>2 Seats</p>\n                    </div>\n                </ion-item>\n                <ion-card-content>\n                    <div class="status"><img src="assets/imgs/pending.png"></div>\n                    <div class="ride-detail">\n                        <p>\n                            <span class="icon-location bg-theme"></span><span class="time">12:00 am</span>Washington sq.park New York</p>\n                        <p>\n                            <span class="icon-location bg-yellow"></span><span class="time">12:50 am</span>Harison, east sq.park New York</p>\n                    </div>\n                    <ion-row>\n                        <ion-col class="detail-text">\n                            <div text-left>\n                                Date\n                                <h2>23<sup>nd</sup> Feb, 18</h2>\n                            </div>\n                        </ion-col>\n                        <ion-col class="detail-text">\n                            <div text-left>Expected Time\n                                <h2>12:10pm</h2>\n                            </div>\n                        </ion-col>\n                        <ion-col center text-center>\n                            <button class="btn bg-theme rounded full text-white" (click)="chatting()">Message</button>\n                        </ion-col>\n                    </ion-row>\n                </ion-card-content>\n            </ion-card>\n\n            <!-- repilica -->\n            <ion-card>\n                <ion-item>\n                    <ion-avatar item-start>\n                        <img src="assets/imgs/face-1.jpg">\n                    </ion-avatar>\n                    <div class="name">\n                        <h2>David Johnson\n                            <ion-icon name="ios-checkmark-circle" class="text-theme"></ion-icon>\n                        </h2>\n                        <p>Honda Cvic | White</p>\n                    </div>\n                    <div class="more">\n                        <h2 class="text-theme">$ 120\n                            <ion-icon name="md-more"></ion-icon>\n                        </h2>\n                        <p>2 Seats</p>\n                    </div>\n                </ion-item>\n                <ion-card-content>\n                    <div class="status"><img src="assets/imgs/approve.png"></div>\n                    <div class="ride-detail">\n                        <p>\n                            <span class="icon-location bg-theme"></span><span class="time">12:00 am</span>Washington sq.park New York</p>\n                        <p>\n                            <span class="icon-location bg-yellow"></span><span class="time">12:50 am</span>Harison, east sq.park New York</p>\n                    </div>\n                    <ion-row>\n                        <ion-col class="detail-text">\n                            <div text-left>\n                                Date\n                                <h2>23<sup>nd</sup> Feb, 18</h2>\n                            </div>\n                        </ion-col>\n                        <ion-col class="detail-text">\n                            <div text-left>Expected Time\n                                <h2>12:10pm</h2>\n                            </div>\n                        </ion-col>\n                        <ion-col center text-center>\n                            <button class="btn bg-theme rounded full text-white" (click)="chatting()">Message</button>\n                        </ion-col>\n                    </ion-row>\n                </ion-card-content>\n            </ion-card>\n            <ion-card>\n                <ion-item>\n                    <ion-avatar item-start>\n                        <img src="assets/imgs/face-1.jpg">\n                    </ion-avatar>\n                    <div class="name">\n                        <h2>David Johnson\n                            <ion-icon name="ios-checkmark-circle" class="text-theme"></ion-icon>\n                        </h2>\n                        <p>Honda Cvic | White</p>\n                    </div>\n                    <div class="more">\n                        <h2 class="text-theme">$ 120\n                            <ion-icon name="md-more"></ion-icon>\n                        </h2>\n                        <p>2 Seats</p>\n                    </div>\n                </ion-item>\n                <ion-card-content>\n                    <div class="status"><img src="assets/imgs/regect.png"></div>\n                    <div class="ride-detail">\n                        <p>\n                            <span class="icon-location bg-theme"></span><span class="time">12:00 am</span>Washington sq.park New York</p>\n                        <p>\n                            <span class="icon-location bg-yellow"></span><span class="time">12:50 am</span>Harison, east sq.park New York</p>\n                    </div>\n                    <ion-row>\n                        <ion-col class="detail-text">\n                            <div text-left>\n                                Date\n                                <h2>23<sup>nd</sup> Feb, 18</h2>\n                            </div>\n                        </ion-col>\n                        <ion-col class="detail-text">\n                            <div text-left>Expected Time\n                                <h2>12:10pm</h2>\n                            </div>\n                        </ion-col>\n                        <ion-col center text-center>\n                            <button class="btn bg-theme rounded full text-white" (click)="chatting()">Message</button>\n                        </ion-col>\n                    </ion-row>\n                </ion-card-content>\n            </ion-card>\n            <ion-card>\n                <ion-item>\n                    <ion-avatar item-start>\n                        <img src="assets/imgs/face-1.jpg">\n                    </ion-avatar>\n                    <div class="name">\n                        <h2>David Johnson\n                            <ion-icon name="ios-checkmark-circle" class="text-theme"></ion-icon>\n                        </h2>\n                        <p>Honda Cvic | White</p>\n                    </div>\n                    <div class="more">\n                        <h2 class="text-theme">$ 120\n                            <ion-icon name="md-more"></ion-icon>\n                        </h2>\n                        <p>2 Seats</p>\n                    </div>\n                </ion-item>\n                <ion-card-content>\n                    <div class="status"><img src="assets/imgs/pending.png"></div>\n                    <div class="ride-detail">\n                        <p>\n                            <span class="icon-location bg-theme"></span><span class="time">12:00 am</span>Washington sq.park New York</p>\n                        <p>\n                            <span class="icon-location bg-yellow"></span><span class="time">12:50 am</span>Harison, east sq.park New York</p>\n                    </div>\n                    <ion-row>\n                        <ion-col class="detail-text">\n                            <div text-left>\n                                Date\n                                <h2>23<sup>nd</sup> Feb, 18</h2>\n                            </div>\n                        </ion-col>\n                        <ion-col class="detail-text">\n                            <div text-left>Expected Time\n                                <h2>12:10pm</h2>\n                            </div>\n                        </ion-col>\n                        <ion-col center text-center>\n                            <button class="btn bg-theme rounded full text-white" (click)="chatting()">Message</button>\n                        </ion-col>\n                    </ion-row>\n                </ion-card-content>\n            </ion-card>\n        </ion-list>\n\n        <ion-list *ngSwitchCase="\'History\'">\n            <ion-card>\n                <ion-item>\n                    <ion-avatar item-start>\n                        <img src="assets/imgs/face-1.jpg">\n                    </ion-avatar>\n                    <div class="name">\n                        <h2>David Johnson\n                            <ion-icon name="ios-checkmark-circle" class="text-theme"></ion-icon>\n                        </h2>\n                        <p>Honda Cvic | White</p>\n                    </div>\n                    <div class="more">\n                        <h2 class="text-theme">$ 120\n                            <ion-icon name="md-more"></ion-icon>\n                        </h2>\n                        <p>2 Seats</p>\n                    </div>\n                </ion-item>\n                <ion-card-content>\n                    <div class="status"><img src="assets/imgs/droped.png"></div>\n                    <div class="ride-detail">\n                        <p>\n                            <span class="icon-location bg-theme"></span><span class="time">12:00 am</span>Washington sq.park New York</p>\n                        <p>\n                            <span class="icon-location bg-yellow"></span><span class="time">12:50 am</span>Harison, east sq.park New York</p>\n                    </div>\n                    <ion-row>\n                        <ion-col class="detail-text">\n                            <div text-left>\n                                Date\n                                <h2>23<sup>nd</sup> Feb, 18</h2>\n                            </div>\n                        </ion-col>\n                        <ion-col class="detail-text">\n                            <div text-left>Expected Time\n                                <h2>12:10pm</h2>\n                            </div>\n                        </ion-col>\n                        <ion-col center text-center>\n                            <button class="btn bg-yellow rounded full text-white" (click)="raterider()">Rate Rider</button>\n                        </ion-col>\n                    </ion-row>\n                </ion-card-content>\n            </ion-card>\n            <ion-card>\n                <ion-item>\n                    <ion-avatar item-start>\n                        <img src="assets/imgs/face-1.jpg">\n                    </ion-avatar>\n                    <div class="name">\n                        <h2>David Johnson\n                            <ion-icon name="ios-checkmark-circle" class="text-theme"></ion-icon>\n                        </h2>\n                        <p>Honda Cvic | White</p>\n                    </div>\n                    <div class="more">\n                        <h2 class="text-theme">$ 120\n                            <ion-icon name="md-more"></ion-icon>\n                        </h2>\n                        <p>2 Seats</p>\n                    </div>\n                </ion-item>\n                <ion-card-content>\n                    <div class="status"><img src="assets/imgs/droped.png"></div>\n                    <div class="ride-detail">\n                        <p>\n                            <span class="icon-location bg-theme"></span><span class="time">12:00 am</span>Washington sq.park New York</p>\n                        <p>\n                            <span class="icon-location bg-yellow"></span><span class="time">12:50 am</span>Harison, east sq.park New York</p>\n                    </div>\n                    <ion-row>\n                        <ion-col class="detail-text">\n                            <div text-left>\n                                Date\n                                <h2>23<sup>nd</sup> Feb, 18</h2>\n                            </div>\n                        </ion-col>\n                        <ion-col class="detail-text">\n                            <div text-left>Expected Time\n                                <h2>12:10pm</h2>\n                            </div>\n                        </ion-col>\n                        <ion-col class="detail-text">\n                            <div text-left>Rated\n                                <div style="margin-top: 5px;">\n                                    <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n                                    <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n                                    <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n                                    <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n                                    <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n                                </div>\n                            </div>\n                        </ion-col>\n                    </ion-row>\n                </ion-card-content>\n            </ion-card>\n            <ion-card>\n                <ion-item>\n                    <ion-avatar item-start>\n                        <img src="assets/imgs/face-1.jpg">\n                    </ion-avatar>\n                    <div class="name">\n                        <h2>David Johnson\n                            <ion-icon name="ios-checkmark-circle" class="text-theme"></ion-icon>\n                        </h2>\n                        <p>Honda Cvic | White</p>\n                    </div>\n                    <div class="more">\n                        <h2 class="text-theme">$ 120\n                            <ion-icon name="md-more"></ion-icon>\n                        </h2>\n                        <p>2 Seats</p>\n                    </div>\n                </ion-item>\n                <ion-card-content>\n                    <div class="status"><img src="assets/imgs/cancle.png"></div>\n                    <div class="ride-detail">\n                        <p>\n                            <span class="icon-location bg-theme"></span><span class="time">12:00 am</span>Washington sq.park New York</p>\n                        <p>\n                            <span class="icon-location bg-yellow"></span><span class="time">12:50 am</span>Harison, east sq.park New York</p>\n                    </div>\n                    <ion-row>\n                        <ion-col class="detail-text">\n                            <div text-left>\n                                Date\n                                <h2>23<sup>nd</sup> Feb, 18</h2>\n                            </div>\n                        </ion-col>\n                        <ion-col class="detail-text">\n                            <div text-left>Expected Time\n\n                            </div>\n                        </ion-col>\n                        <ion-col class="detail-text">\n                            <div text-left>Cancle Resion\n                                <h2>Car Problam</h2>\n                            </div>\n                        </ion-col>\n                    </ion-row>\n                </ion-card-content>\n            </ion-card>\n        </ion-list>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_customer_src/src/pages/myride/myride.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], MyridePage);
    return MyridePage;
}());

//# sourceMappingURL=myride.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RateriderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RateriderPage = /** @class */ (function () {
    function RateriderPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    RateriderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-raterider',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_customer_src/src/pages/raterider/raterider.html"*/'<ion-header class="bg-theme">\n    <ion-navbar>\n        <ion-title>RATE DRIVER</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-light">\n    <ion-card class="slip">\n        <div text-center>\n            <h4 class="text-dark">We hope you had a grate ride!</h4>\n            <p class="text-light">22nd Feb 2018, 12:20 pm</p>\n            <h1 class="text-theme">$ 120</h1>\n            <h4 class="text-dark">Payment has been donevia<br>your Vroom Wallet</h4>\n        </div>\n    </ion-card>\n    <ion-card class="rate">\n        <div text-center>\n            <p>So how was your experience with...</p>\n            <div class="driver">\n                <ion-item>\n                    <ion-avatar item-start>\n                        <img src="assets/imgs/face-1.jpg">\n                    </ion-avatar>\n                    <h2>David Johnson\n                        <ion-icon name="ios-checkmark-circle" class="text-theme"></ion-icon>\n                    </h2>\n                    <p>Honda Civic | White</p>\n                </ion-item>\n                <p class="icons">\n                    <ion-icon name="ios-star"></ion-icon>\n                    <ion-icon name="ios-star"></ion-icon>\n                    <ion-icon name="ios-star"></ion-icon>\n                    <ion-icon name="ios-star"></ion-icon>\n                    <ion-icon name="ios-star"></ion-icon>\n                </p>\n                <div class="form">\n                    <ion-list no-lines>\n                        <ion-item>\n                            <ion-textarea type="text" value="Leave a feedback"></ion-textarea>\n                        </ion-item>\n                    </ion-list>\n                </div>\n                <p padding-top><button class="btn text-white bg-theme rounded" style="width: 100%;">SUBMIT RATING</button></p>\n            </div>\n        </div>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_customer_src/src/pages/raterider/raterider.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], RateriderPage);
    return RateriderPage;
}());

//# sourceMappingURL=raterider.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chatting_chatting__ = __webpack_require__(89);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatsPage = /** @class */ (function () {
    function ChatsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ChatsPage.prototype.chatting = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__chatting_chatting__["a" /* ChattingPage */]);
    };
    ChatsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chats',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_customer_src/src/pages/chats/chats.html"*/'<ion-header class="bg-theme">\n    <ion-navbar>\n        <ion-title class="text-center">CHATS\n            <ion-icon name="md-search" class="text-white" style="margin-left: auto;float: right;"></ion-icon>\n        </ion-title>\n\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-light">\n    <ion-item (click)="chatting()">\n        <ion-avatar item-start>\n            <img src="assets/imgs/face-1.jpg">\n            <ion-badge color="danger">9+</ion-badge>\n        </ion-avatar>\n        <h2 class="text-theme">Buzz Lightyear\n            <ion-icon name="ios-checkmark-circle"></ion-icon>\n        </h2>\n        <p>Washington sq Park?</p>\n        <ion-note item-end>Ride on<span class="time">1:12 pm</span></ion-note>\n    </ion-item>\n    <!-- repeat -->\n    <ion-item (click)="chatting()">\n        <ion-avatar item-start>\n            <img src="assets/imgs/man1.png">\n        </ion-avatar>\n        <h2>Buzz Lightyear\n            <ion-icon name="ios-checkmark-circle"></ion-icon>\n        </h2>\n        <p>Washington sq Park?</p>\n        <ion-note item-end>Ride on<span class="time">1:12 pm</span></ion-note>\n    </ion-item>\n    <ion-item>\n        <ion-avatar item-start>\n            <img src="assets/imgs/man2.png">\n        </ion-avatar>\n        <h2>Buzz Lightyear</h2>\n        <p>Washington sq Park?</p>\n        <ion-note item-end>Ride on<span class="time">1:12 pm</span></ion-note>\n    </ion-item>\n    <ion-item (click)="chatting()">\n        <ion-avatar item-start>\n            <img src="assets/imgs/man3.png">\n        </ion-avatar>\n        <h2>Buzz Lightyear\n            <ion-icon name="ios-checkmark-circle"></ion-icon>\n        </h2>\n        <p>Washington sq Park?</p>\n        <ion-note item-end>Ride on<span class="time">1:12 pm</span></ion-note>\n    </ion-item>\n    <ion-item>\n        <ion-avatar item-start>\n            <img src="assets/imgs/man4.png">\n        </ion-avatar>\n        <h2>Buzz Lightyear</h2>\n        <p>Washington sq Park?</p>\n        <ion-note item-end>Ride on<span class="time">1:12 pm</span></ion-note>\n    </ion-item>\n    <p text-center class="text-light"><small>Chat will be dessapear after completed the ride or<br>in case of cancelation of ride.</small></p>\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_customer_src/src/pages/chats/chats.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], ChatsPage);
    return ChatsPage;
}());

//# sourceMappingURL=chats.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalletPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WalletPage = /** @class */ (function () {
    function WalletPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    WalletPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-wallet',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_customer_src/src/pages/wallet/wallet.html"*/'<ion-header class="bg-theme">\n    <ion-navbar>\n        <ion-title class="text-center">MY WALLET</ion-title>\n    </ion-navbar>\n    <div text-center padding>\n        <p><small class="text-white">Total Balance</small></p>\n        <h1 class="text-white">$ 120</h1>\n        <ion-row>\n            <ion-col>\n                <button class="btn text-white bg-yellow rounded">ADD MONEY</button>\n            </ion-col>\n            <ion-col>\n                <button class="btn text-theme bg-white rounded">SEND TO BANK</button>\n            </ion-col>\n        </ion-row>\n    </div>\n\n</ion-header>\n\n<ion-content class="bg-light">\n    <ion-card>\n        <ion-item>\n            <ion-avatar item-start>\n                <img src="assets/imgs/face-1.jpg">\n            </ion-avatar>\n            <div class="name">\n                <h2>Paid for Ride\n                    <small>19 Feb, 05:15 pm</small>\n                </h2>\n                <p>Washing sq. Park to East Network</p>\n            </div>\n            <div class="more" text-right>\n                <h2 class="text-theme">-$120\n                </h2>\n                <p class="text-dark">To Johnson</p>\n            </div>\n        </ion-item>\n    </ion-card>\n    <ion-card>\n        <ion-item>\n            <ion-avatar item-start>\n                <img src="assets/imgs/man3.png">\n            </ion-avatar>\n            <div class="name">\n                <h2>Paid for Ride\n                    <small>19 Feb, 05:15 pm</small>\n                </h2>\n                <p>Washing sq. Park to East Network</p>\n            </div>\n            <div class="more" text-right>\n                <h2 class="text-theme">-$120\n                </h2>\n                <p class="text-dark">To Johnson</p>\n            </div>\n        </ion-item>\n    </ion-card>\n    <ion-card>\n        <ion-item>\n            <ion-avatar item-start>\n                <img src="assets/imgs/man1.png">\n            </ion-avatar>\n            <div class="name">\n                <h2>Paid for Ride\n                    <small>19 Feb, 05:15 pm</small>\n                </h2>\n                <p>Washing sq. Park to East Network</p>\n            </div>\n            <div class="more" text-right>\n                <h2 class="text-theme">-$120\n                </h2>\n                <p class="text-dark">To Johnson</p>\n            </div>\n        </ion-item>\n    </ion-card>\n    <ion-card>\n        <ion-item>\n            <ion-avatar item-start>\n                <img src="assets/imgs/man2.png">\n            </ion-avatar>\n            <div class="name">\n                <h2>Paid for Ride\n                    <small>19 Feb, 05:15 pm</small>\n                </h2>\n                <p>Washing sq. Park to East Network</p>\n            </div>\n            <div class="more" text-right>\n                <h2 class="text-theme">-$120\n                </h2>\n                <p class="text-dark">To Johnson</p>\n            </div>\n        </ion-item>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_customer_src/src/pages/wallet/wallet.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], WalletPage);
    return WalletPage;
}());

//# sourceMappingURL=wallet.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MorePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reviews_reviews__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__notification_notification__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__terms_terms__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__earn_earn__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ratevroom_ratevroom__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__help_help__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__login_login__ = __webpack_require__(155);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MorePage = /** @class */ (function () {
    function MorePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    MorePage.prototype.profile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__profile_profile__["a" /* ProfilePage */]);
    };
    MorePage.prototype.reviews = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__reviews_reviews__["a" /* ReviewsPage */]);
    };
    MorePage.prototype.notification = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__notification_notification__["a" /* NotificationPage */]);
    };
    MorePage.prototype.terms = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__terms_terms__["a" /* TermsPage */]);
    };
    MorePage.prototype.earn = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__earn_earn__["a" /* EarnPage */]);
    };
    MorePage.prototype.ratevroom = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__ratevroom_ratevroom__["a" /* RatevroomPage */]);
    };
    MorePage.prototype.help = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__help_help__["a" /* HelpPage */]);
    };
    MorePage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__login_login__["a" /* LoginPage */]);
    };
    MorePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-more',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_customer_src/src/pages/more/more.html"*/'<ion-header class="bg-theme">\n    <ion-navbar>\n        <ion-title class="text-center">MORE</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-light">\n    <ion-item>\n        <ion-avatar item-start>\n            <img src="assets/imgs/face-1.jpg">\n        </ion-avatar>\n        <div class="name">\n            <h2>David Johnson\n                <ion-icon name="ios-checkmark-circle" class="text-theme"></ion-icon>\n            </h2>\n            <p (click)="profile()">View Profile</p>\n        </div>\n        <div class="more">\n            <h2>\n                <ion-icon name="ios-star"></ion-icon>\n                <ion-icon name="ios-star"></ion-icon>\n                <ion-icon name="ios-star"></ion-icon>\n                <ion-icon name="ios-star"></ion-icon>\n                <ion-icon name="ios-star"></ion-icon>\n            </h2>\n            <p>(53 Reviews)</p>\n        </div>\n    </ion-item>\n\n    <ion-list no-lines>\n        <button ion-item (click)="reviews()">\n            <ion-avatar item-start>\n                <ion-icon name="ios-star"></ion-icon>\n            </ion-avatar>\n            My Reviews\n        </button>\n        <button ion-item (click)="notification()">\n            <ion-avatar item-start>\n                <ion-icon name="md-notifications"></ion-icon>\n            </ion-avatar>\n            Notification\n        </button>\n        <button ion-item (click)="terms()">\n            <ion-avatar item-start>\n                <ion-icon name="md-paper"></ion-icon>\n            </ion-avatar>\n            Term and Condition\n        </button>\n        <button ion-item (click)="earn()">\n            <ion-avatar item-start>\n                <ion-icon name="md-share"></ion-icon>\n            </ion-avatar>\n            Refer and Earn\n        </button>\n        <button ion-item (click)="ratevroom()">\n            <ion-avatar item-start>\n                <ion-icon name="md-thumbs-up"></ion-icon>\n            </ion-avatar>\n            Rate Vroom\n        </button>\n        <button ion-item (click)="help()">\n            <ion-avatar item-start>\n                <ion-icon name="md-alert"></ion-icon>\n            </ion-avatar>\n            Help\n        </button>\n    </ion-list>\n    <ion-list no-lines>\n        <button ion-item (click)="login()" text-center><h2 class="text-theme"><strong>Log out</strong></h2></button>\n\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_customer_src/src/pages/more/more.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], MorePage);
    return MorePage;
}());

//# sourceMappingURL=more.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.myprofile = "about";
    }
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_customer_src/src/pages/profile/profile.html"*/'<ion-header class="bg-theme">\n    <ion-navbar>\n        <ion-title>MY PROFILE</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-light">\n    <ion-item style="position: relative;z-index: 2;">\n        <ion-avatar item-start>\n            <img src="assets/imgs/man3.png">\n        </ion-avatar>\n        <div class="name">\n            <h2>David Johnson\n            </h2>\n            <p>Edit Profile</p>\n        </div>\n        <div class="more">\n            <h2>\n                <ion-icon name="ios-star"></ion-icon>\n                <ion-icon name="ios-star"></ion-icon>\n                <ion-icon name="ios-star"></ion-icon>\n                <ion-icon name="ios-star"></ion-icon>\n                <ion-icon name="ios-star"></ion-icon>\n            </h2>\n            <p>(53 Reviews)</p>\n        </div>\n    </ion-item>\n    <div class="tabs bg-white">\n        <ion-segment [(ngModel)]="myprofile">\n            <ion-segment-button value="about">\n                About\n            </ion-segment-button>\n            <ion-segment-button value="reviews">\n                Reviews\n            </ion-segment-button>\n        </ion-segment>\n    </div>\n    <div [ngSwitch]="myprofile">\n        <ion-list *ngSwitchCase="\'about\'">\n            <div class="bg-white" padding>\n                <ion-list no-lines class="form-list">\n                    <ion-item>\n                        <ion-label floating>Your Name</ion-label>\n                        <ion-input type="text" value="Johan Bitoda" readonly></ion-input>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label floating>Phone Number</ion-label>\n                        <ion-input type="text" value="+91 964 148 6000" readonly></ion-input>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label floating>Email Address</ion-label>\n                        <ion-input type="text" value="johanbittoda@email.com" readonly></ion-input>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label floating>Profession</ion-label>\n                        <ion-input type="text" value="Senior Architechat Alex Designs." readonly></ion-input>\n                    </ion-item>\n                </ion-list>\n            </div>\n            <div padding-top padding-left padding-right text-center>\n                <p>\n                    <button class="btn text-theme rounded bg-white" style="width: 100%">CHANGE PASSWORD</button>\n                </p>\n\n            </div>\n        </ion-list>\n        <ion-list *ngSwitchCase="\'reviews\'">\n            <div class="bg-white" padding style="margin-bottom: 4px;">\n                <div class="rating-box">\n                    <p>\n                        <span class="text-1">5<ion-icon name="md-star"></ion-icon></span>\n                        <span class="rate-bar"><span class="bg-theme" style="width: 100%"></span></span>\n                        <span class="text-2">100</span>\n                    </p>\n                    <p>\n                        <span class="text-1">4<ion-icon name="md-star"></ion-icon></span>\n                        <span class="rate-bar"><span class="bg-theme" style="width: 90%"></span></span>\n                        <span class="text-2">90</span></p>\n                    <p>\n                        <span class="text-1">3<ion-icon name="md-star"></ion-icon></span>\n                        <span class="rate-bar"><span class="bg-theme" style="width: 70%"></span></span>\n                        <span class="text-2">60</span>\n                    </p>\n                    <p>\n                        <span class="text-1">2<ion-icon name="md-star"></ion-icon></span>\n                        <span class="rate-bar"><span class="bg-theme" style="width: 50%"></span></span>\n                        <span class="text-2">40</span>\n                    </p>\n                    <p>\n                        <span class="text-1">1<ion-icon name="md-star"></ion-icon></span>\n                        <span class="rate-bar"><span class="bg-theme" style="width: 20%"></span></span>\n                        <span class="text-2">20</span>\n                    </p>\n                </div>\n            </div>\n            <ion-card class="review">\n                <ion-item>\n                    <ion-avatar item-start>\n                        <img src="assets/imgs/face-1.jpg">\n                    </ion-avatar>\n                    <h2>Buzz Lightyear</h2>\n                    <p>\n                        <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n                        <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n                        <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n                        <ion-icon name="ios-star"></ion-icon>\n                        <ion-icon name="ios-star"></ion-icon>\n                    </p>\n                    <ion-note item-end>15 April 2017</ion-note>\n                </ion-item>\n                <ion-card-content>\n                    <div class="detail">\n                        <p>Badges are small components that typically communicate a numerical value to the user. They are typically used within an item.</p>\n                    </div>\n                </ion-card-content>\n            </ion-card>\n            <ion-card class="review">\n                <ion-item>\n                    <ion-avatar item-start>\n                        <img src="assets/imgs/face-1.jpg">\n                    </ion-avatar>\n                    <h2>Buzz Lightyear</h2>\n                    <p>\n                        <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n                        <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n                        <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n                        <ion-icon name="ios-star"></ion-icon>\n                        <ion-icon name="ios-star"></ion-icon>\n                    </p>\n                    <ion-note item-end>15 April 2017</ion-note>\n                </ion-item>\n                <ion-card-content>\n                    <div class="detail">\n                        <p>Badges are small components that typically communicate a numerical value to the user. They are typically used within an item.</p>\n                    </div>\n                </ion-card-content>\n            </ion-card>\n        </ion-list>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_customer_src/src/pages/profile/profile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReviewsPage = /** @class */ (function () {
    function ReviewsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ReviewsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-reviews',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_customer_src/src/pages/reviews/reviews.html"*/'<ion-header class="bg-theme">\n    <ion-navbar>\n        <ion-title>MY REVIEWS</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-card>\n        <ion-item>\n            <ion-avatar item-start>\n                <img src="assets/imgs/face-1.jpg">\n            </ion-avatar>\n            <h2>Buzz Lightyear</h2>\n            <p>\n                <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n                <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n                <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n                <ion-icon name="ios-star"></ion-icon>\n                <ion-icon name="ios-star"></ion-icon>\n            </p>\n            <ion-note item-end>15 April 2017</ion-note>\n        </ion-item>\n        <ion-card-content>\n            <div class="detail">\n                <p>Badges are small components that typically communicate a numerical value to the user. They are typically used within an item.</p>\n            </div>\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-item>\n            <ion-avatar item-start>\n                <img src="assets/imgs/man1.png">\n            </ion-avatar>\n            <h2>Buzz Lightyear</h2>\n            <p>\n                <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n                <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n                <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n                <ion-icon name="ios-star"></ion-icon>\n                <ion-icon name="ios-star"></ion-icon>\n            </p>\n            <ion-note item-end>15 April 2017</ion-note>\n        </ion-item>\n        <ion-card-content>\n            <div class="detail">\n                <p>Badges are small components that typically communicate a numerical value to the user. They are typically used within an item.</p>\n            </div>\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-item>\n            <ion-avatar item-start>\n                <img src="assets/imgs/man2.png">\n            </ion-avatar>\n            <h2>Buzz Lightyear</h2>\n            <p>\n                <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n                <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n                <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n                <ion-icon name="ios-star"></ion-icon>\n                <ion-icon name="ios-star"></ion-icon>\n            </p>\n            <ion-note item-end>15 April 2017</ion-note>\n        </ion-item>\n        <ion-card-content>\n            <div class="detail">\n                <p>Badges are small components that typically communicate a numerical value to the user. They are typically used within an item.</p>\n            </div>\n        </ion-card-content>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_customer_src/src/pages/reviews/reviews.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], ReviewsPage);
    return ReviewsPage;
}());

//# sourceMappingURL=reviews.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationPage = /** @class */ (function () {
    function NotificationPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    NotificationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notification',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_customer_src/src/pages/notification/notification.html"*/'<ion-header class="bg-theme">\n    <ion-navbar>\n        <ion-title>NOTIFICATION</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-light">\n    <ion-item>\n        <ion-avatar item-start>\n            <img src="assets/imgs/man1.png">\n        </ion-avatar>\n        <h2><span class="text-theme">Buzz Lightyear</span>&nbsp; Approved your request for ride\n        </h2>\n        <ion-note item-end>22 Feb 2018</ion-note>\n    </ion-item>\n    <ion-item>\n        <ion-avatar item-start>\n            <img src="assets/imgs/man2.png">\n        </ion-avatar>\n        <h2><span class="text-theme">Buzz Lightyear</span>&nbsp; Approved your request for ride\n        </h2>\n        <ion-note item-end>22 Feb 2018</ion-note>\n    </ion-item>\n    <ion-item>\n        <ion-avatar item-start>\n            <img src="assets/imgs/man3.png">\n        </ion-avatar>\n        <h2><span class="text-theme">Buzz Lightyear</span>&nbsp; Approved your request for ride\n        </h2>\n        <ion-note item-end>22 Feb 2018</ion-note>\n    </ion-item>\n    <ion-item>\n        <ion-avatar item-start>\n            <img src="assets/imgs/man4.png">\n        </ion-avatar>\n        <h2><span class="text-theme">Buzz Lightyear</span>&nbsp; Approved your request for ride\n        </h2>\n        <ion-note item-end>22 Feb 2018</ion-note>\n    </ion-item>\n    <ion-item>\n        <ion-avatar item-start>\n            <img src="assets/imgs/man5.png">\n        </ion-avatar>\n        <h2><span class="text-theme">Buzz Lightyear</span>&nbsp; Approved your request for ride\n        </h2>\n        <ion-note item-end>22 Feb 2018</ion-note>\n    </ion-item>\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_customer_src/src/pages/notification/notification.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], NotificationPage);
    return NotificationPage;
}());

//# sourceMappingURL=notification.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TermsPage = /** @class */ (function () {
    function TermsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    TermsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-terms',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_customer_src/src/pages/terms/terms.html"*/'<ion-header class="transparent">\n    <ion-navbar>\n        <ion-title><span class="text-white">TEARMS & CONDITIONS</span></ion-title>\n    </ion-navbar>\n    <div class="logo">\n        <img src="assets/imgs/logo.png" alt="logo">\n    </div>\n</ion-header>\n\n<ion-content class="bg-background-img">\n    <div class="bg-white">\n        <h4 class="text-theme">Terms Of Vroom</h4>\n        <p class="text-dark">Menu is a side-menu navigation that can be dragged out or toggled to show. The content of a menu will be hidden when the menu is closed. Menu is a side-menu navigation that can be dragged out or toggled to show. The content of a menu will be hidden when the menu is closed. Menu is a side-menu navigation that can be dragged out or toggled to show. The content of a menu will be hidden when the menu is closed.</p>\n        <p class="text-dark">Menu is a side-menu navigation that can be dragged out or toggled to show. The content of a menu will be hidden when the menu is closed. Menu is a side-menu navigation that can be dragged out or toggled to show. The content of a menu will be hidden when the menu is closed. Menu is a side-menu navigation that can be dragged out or toggled to show. The content of a menu will be hidden when the menu is closed.</p>\n        <p class="text-dark">Menu is a side-menu navigation that can be dragged out or toggled to show. The content of a menu will be hidden when the menu is closed. Menu is a side-menu navigation that can be dragged out or toggled to show. The content of a menu will be hidden when the menu is closed. Menu is a side-menu navigation that can be dragged out or toggled to show. The content of a menu will be hidden when the menu is closed.</p>\n\n    </div>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_customer_src/src/pages/terms/terms.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], TermsPage);
    return TermsPage;
}());

//# sourceMappingURL=terms.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EarnPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EarnPage = /** @class */ (function () {
    function EarnPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    EarnPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-earn',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_customer_src/src/pages/earn/earn.html"*/'<ion-header class="transparent">\n    <ion-navbar>\n        <ion-title><span class="text-white"></span></ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <img src="assets/imgs/menu-bg2.jpg">\n    <div padding-left padding-right>\n        <ion-card class="bg-theme">\n            <ion-card-content text-center>\n                <p class="text-white">Your Referral Code</p>\n                <h6 class="text-white">532461</h6>\n            </ion-card-content>\n        </ion-card>\n        <div padding-left padding-right padding-top padding>\n            <br>\n            <h4 class="text-theme">Refer and earn</h4>\n            <p class="text-drack">Share the referral code with your friends and family members and get 30% off on cab fare</p>\n        </div>\n        <ion-row>\n            <ion-col col-3 text-center padding>\n                <img src="assets/imgs/fb.png">\n            </ion-col>\n            <ion-col col-3 text-center padding padding>\n                <img src="assets/imgs/wpp.png">\n            </ion-col>\n            <ion-col col-3 text-center padding>\n                <img src="assets/imgs/tw.png">\n            </ion-col>\n            <ion-col col-3 text-center padding>\n                <img src="assets/imgs/more.png">\n            </ion-col>\n        </ion-row>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_customer_src/src/pages/earn/earn.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], EarnPage);
    return EarnPage;
}());

//# sourceMappingURL=earn.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RatevroomPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RatevroomPage = /** @class */ (function () {
    function RatevroomPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    RatevroomPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ratevroom',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_customer_src/src/pages/ratevroom/ratevroom.html"*/'<ion-header class="bg-theme">\n    <ion-navbar>\n        <ion-title>RATE VROOM</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-light">\n    <ion-card class="slip">\n        <div text-center>\n            <h4 class="text-dark">We hope you had a grate ride!</h4>\n            <p class="text-light">22nd Feb 2018, 12:20 pm</p>\n            <h1 class="text-theme">$ 120</h1>\n            <h4 class="text-dark">Payment has been donevia<br>your Vroom Wallet</h4>\n        </div>\n    </ion-card>\n    <ion-card class="rate">\n        <div text-center>\n            <p>So how was your experience with...</p>\n            <div class="driver">\n                <ion-item>\n                    <ion-avatar item-start>\n                        <img src="assets/imgs/face-1.jpg">\n                    </ion-avatar>\n                    <h2>David Johnson\n                        <ion-icon name="ios-checkmark-circle" class="text-theme"></ion-icon>\n                    </h2>\n                    <p>Honda Civic | White</p>\n                </ion-item>\n                <p class="icons">\n                    <ion-icon name="ios-star"></ion-icon>\n                    <ion-icon name="ios-star"></ion-icon>\n                    <ion-icon name="ios-star"></ion-icon>\n                    <ion-icon name="ios-star"></ion-icon>\n                    <ion-icon name="ios-star"></ion-icon>\n                </p>\n                <div class="form">\n                    <ion-list no-lines>\n                        <ion-item>\n                            <ion-textarea type="text" value="Leave a feedback"></ion-textarea>\n                        </ion-item>\n                    </ion-list>\n                </div>\n                <p padding-top><button class="btn text-white bg-theme rounded" style="width: 100%;">SUBMIT RATING</button></p>\n            </div>\n        </div>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_customer_src/src/pages/ratevroom/ratevroom.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], RatevroomPage);
    return RatevroomPage;
}());

//# sourceMappingURL=ratevroom.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HelpPage = /** @class */ (function () {
    function HelpPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HelpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-help',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_customer_src/src/pages/help/help.html"*/'<ion-header class="bg-theme">\n    <ion-navbar>\n        <ion-title>HELP</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-light">\n    <p class="text-light" padding>choose your issue</p>\n    <ion-card>\n        <ion-card-header>\n            <h1><strong>Trips and fare</strong>\n                <ion-icon name="ios-arrow-down-outline" class="text-light"></ion-icon>\n            </h1>\n        </ion-card-header>\n        <ion-card-content class="text-light">\n            <small>Any issue regarding your trip and fare</small>\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-card-header>\n            <h1><strong>Payment</strong>\n                <ion-icon name="ios-arrow-down-outline" class="text-light"></ion-icon>\n            </h1>\n        </ion-card-header>\n        <ion-card-content class="text-light">\n            <small>problim while paying fare or related issue</small>\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-card-header>\n            <h1><strong>App Usability</strong>\n                <ion-icon name="ios-arrow-down-outline" class="text-light"></ion-icon>\n            </h1>\n        </ion-card-header>\n        <ion-card-content class="text-light">\n            <small>Any issue while using our App</small>\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-card-header>\n            <h1><strong>Account</strong>\n                <ion-icon name="ios-arrow-down-outline" class="text-light"></ion-icon>\n            </h1>\n        </ion-card-header>\n        <ion-card-content class="text-light">\n            <small>your account info can\'t change details or change Password .</small>\n        </ion-card-content>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_customer_src/src/pages/help/help.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HelpPage);
    return HelpPage;
}());

//# sourceMappingURL=help.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_signup_services__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_userauthentication_service__ = __webpack_require__(161);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, afDB, SignUpService, alertCtrl, formBuilder, authenticationService) {
        this.navCtrl = navCtrl;
        this.afDB = afDB;
        this.SignUpService = SignUpService;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.authenticationService = authenticationService;
        this.user = {};
        this.userId = null;
        this.userFire = {};
        this.isReadonly = true;
        this.signupGroup = this.formBuilder.group({
            name: ["", __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required],
            lastname: ["", __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required],
            email: ["", __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required],
            fixedemail: [""],
            password: ["", __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required],
            passwordconf: ["", __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required],
            phone: ["", __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required],
        });
    }
    SignupPage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    SignupPage.prototype.verification = function () {
        // console.log(this.signupGroup.value);
        // let userForEmailVer = firebase.auth().currentUser;
        var userName = this.signupGroup.controls['name'].value;
        var userLastName = this.signupGroup.controls['lastname'].value;
        var userEmail = this.signupGroup.controls['email'].value;
        var userFixedemail = this.signupGroup.controls['fixedemail'].value;
        var userEmailComplete = userEmail + userFixedemail;
        var userPassword = this.signupGroup.controls['password'].value;
        var userPasswordconf = this.signupGroup.controls['passwordconf'].value;
        var userPhone = this.signupGroup.controls['phone'].value;
        this.user = this.signupGroup.value;
        if (userPassword === userPasswordconf) {
            if (!this.user.userId) {
                this.user.userId = Date.now();
                console.log(this.user.userId);
            }
            ;
            this.authenticationService.registerWithEmail(userEmailComplete, userPassword);
            this.SignUpService.saveUser(this.user);
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
        }
        else {
            var alert_1 = this.alertCtrl.create({
                title: 'Oops!',
                subTitle: 'las contraseñas no coinciden, intenta de nuevo',
                buttons: ['OK']
            });
            alert_1.present();
        }
        ;
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_customer_src/src/pages/signup/signup.html"*/'<ion-header class="transparent">\n    <ion-navbar>\n        <ion-title><span class="text-white">SIGN UP</span></ion-title>\n    </ion-navbar>\n</ion-header>\n\n\n\n<ion-content class="bg-background-img">\n    <div class="logo">\n        <img src="../../assets/imgs/logo waypool-01.png" alt="logo">\n    </div>\n    <form [formGroup]="signupGroup" (ngSubmit)="verification()">\n    <div class="bg-white login">\n        <div class="">\n            <ion-row>\n                <ion-col class="click-img">\n                    <div class="form">\n                        <ion-icon name="camera"></ion-icon>\n                    </div>\n                </ion-col>\n                <ion-col class="name-fild">\n                    <ion-list class="form" style="margin-bottom: 0">\n                        <ion-item>\n                            <ion-label></ion-label>\n                            <ion-input  type="text"  text-right formControlName="name" placeholder= "Tú nombre"></ion-input>\n                        </ion-item>\n                        <ion-item>\n                            <ion-label></ion-label>\n                            <ion-input type="text"  text-right  formControlName="lastname" placeholder= "Tú apellido"></ion-input>\n                        </ion-item>\n                    </ion-list>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col class="name-fild-2">\n                    <ion-list class="form">\n                        <ion-item class="editable-email">\n                                <ion-label></ion-label>\n                                    <ion-input type="text" text-right formControlName="email" placeholder= "email"></ion-input>\n                                </ion-item>\n                        </ion-list>\n                </ion-col>\n                <ion-col class="name-fild-2">\n                    <ion-list class="form">\n                        <ion-item class="nonEditable-email">\n                                <ion-input type="email" value="@uninorte.edu.co"  text-right formControlName="fixedemail" [readonly]="isReadonly"></ion-input>\n                        </ion-item>\n                    </ion-list>\n                </ion-col>\n            </ion-row>\n            <ion-list class="form" style="margin-bottom: 0">\n                <ion-item>\n                    <ion-label floating>contraseña nueva <span style="font-weight: bold; color: red;">(minimo 6 caracteres)</span></ion-label>\n                    <ion-input type="password"  text-right formControlName="password"  minlength="6"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label></ion-label>\n                    <ion-input type="password"  text-right formControlName="passwordconf" placeholder= "confirma tu contraseña" minlength="6"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label></ion-label>\n                    <ion-input type="text" text-right formControlName="phone" placeholder= "Tú némero de celular"></ion-input>\n                </ion-item>\n            </ion-list>\n            <div class="footer-signup">\n                    <button ion-button full class="bg-theme text-white btn rounded" type="submit" [disabled]="!signupGroup.valid">¡Únete ya!</button>\n                    <p text-center>¿ya estas registrado? <strong class="text-theme" (click)="login()">Sign in</strong></p>\n            </div>\n        </div>\n    </div>\n</form>\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_customer_src/src/pages/signup/signup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_4__services_signup_services__["a" /* SignUpService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_6__services_userauthentication_service__["a" /* authenticationService */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CodePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(154);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CodePage = /** @class */ (function () {
    function CodePage(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */];
    }
    CodePage.prototype.rootpage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    CodePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    CodePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-code',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_customer_src/src/pages/code/code.html"*/'<ion-content padding>\n    <h1 text-right>\n        <ion-icon class="text-white" name="md-close" (click)="dismiss()"></ion-icon>\n    </h1>\n    <ion-card>\n        <img src="assets/imgs/menu-bg.png" />\n        <ion-card-content>\n            <div padding-top padding-right padding-left>\n                <ion-card-title class="text-theme">\n                    Do you have any referral code?\n                </ion-card-title>\n                <h5 padding-top>\n                    Add referral code and get <br> 100% cashback on first ride.\n                </h5>\n                <ion-list class="form">\n                    <ion-item class="bg-light">\n                        <ion-input type="text" placeholder="Add 6 digit referral code" class="text-light"></ion-input>\n                    </ion-item>\n                </ion-list>\n                <p><strong class="text-dark">I Dont\'have </strong><strong class="text-theme" style="float: right;" (click)="rootpage()">Continue</strong></p>\n            </div>\n        </ion-card-content>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_customer_src/src/pages/code/code.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ViewController */]])
    ], CodePage);
    return CodePage;
}());

//# sourceMappingURL=code.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FilterPage = /** @class */ (function () {
    function FilterPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.structure = { lower: 33, upper: 60 };
    }
    FilterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-filter',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_customer_src/src/pages/filter/filter.html"*/'<ion-header class="bg-theme">\n    <ion-navbar>\n        <ion-title>FILTER</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-light">\n    <p class="text-light" padding>Shorting By</p>\n    <ion-card>\n        <ion-card-header>\n            <ion-list radio-group>\n                <ion-item>\n                    <ion-label>Rating</ion-label>\n                    <ion-radio checked="true" value="Rating"></ion-radio>\n                </ion-item>\n                <ion-item>\n                    <ion-label>Price</ion-label>\n                    <ion-radio value="Price"></ion-radio>\n                </ion-item>\n            </ion-list>\n        </ion-card-header>\n    </ion-card>\n    <p class="text-light" padding>Price Range</p>\n    <ion-card>\n        <ion-card-header>\n            <ion-item>\n                <ion-range dualKnobs="true" [(ngModel)]="structure" color="success">\n                    <span range-left class="left-text">$ 40</span>\n                    <span range-right class="right-text">$ 70</span>\n                </ion-range>\n            </ion-item>\n        </ion-card-header>\n    </ion-card>\n    <p class="text-light" padding>Availiblity</p>\n    <ion-card>\n        <ion-card-header>\n            <ion-list>\n                <ion-item>\n                    <ion-label>Seat Available</ion-label>\n                    <ion-select [(ngModel)]="notifications" interface="action-sheet">\n                        <ion-option selected value="1">1 Seat</ion-option>\n                        <ion-option value="2">2 Seats</ion-option>\n                        <ion-option value="3">3 Seats</ion-option>\n                    </ion-select>\n                </ion-item>\n                <ion-item class="check-item">\n                    <ion-checkbox></ion-checkbox>\n                    <ion-label>Air Conditioner</ion-label>\n                </ion-item>\n            </ion-list>\n        </ion-card-header>\n    </ion-card>\n    <ion-row class="fix-btn">\n        <ion-col>\n            <button class="btn rounded text-theme bg-white full">RESET</button>\n        </ion-col>\n        <ion-col>\n            <button class="btn rounded text-white bg-theme full">APPLY</button>\n        </ion-col>\n    </ion-row>\n    <div class="space">&nbsp;</div>\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_customer_src/src/pages/filter/filter.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], FilterPage);
    return FilterPage;
}());

//# sourceMappingURL=filter.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RiderprofilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__confirmride_confirmride__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chatting_chatting__ = __webpack_require__(89);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RiderprofilePage = /** @class */ (function () {
    function RiderprofilePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.rideprofile = "about";
    }
    RiderprofilePage.prototype.confirmride = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__confirmride_confirmride__["a" /* ConfirmridePage */]);
    };
    RiderprofilePage.prototype.chatting = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__chatting_chatting__["a" /* ChattingPage */]);
    };
    RiderprofilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-riderprofile',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_customer_src/src/pages/riderprofile/riderprofile.html"*/'<ion-header class="bg-theme">\n    <ion-navbar>\n        <ion-title>RIDER PROFILE</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-light">\n    <ion-item style="position: relative;z-index: 2;">\n        <ion-avatar item-start>\n            <img src="assets/imgs/man3.png">\n        </ion-avatar>\n        <div class="name">\n            <h2>David Johnson&nbsp;\n                <ion-icon name="ios-checkmark-circle" class="text-theme"></ion-icon>\n            </h2>\n            <p>Honda Civic | White</p>\n        </div>\n        <div class="more">\n            <h2>\n                <ion-icon name="ios-star"></ion-icon>\n                <ion-icon name="ios-star"></ion-icon>\n                <ion-icon name="ios-star"></ion-icon>\n                <ion-icon name="ios-star"></ion-icon>\n                <ion-icon name="ios-star"></ion-icon>\n            </h2>\n            <p>(53 Reviews)</p>\n        </div>\n    </ion-item>\n    <div class="tabs bg-white">\n        <ion-segment [(ngModel)]="rideprofile">\n            <ion-segment-button value="about">\n                About\n            </ion-segment-button>\n            <ion-segment-button value="reviews">\n                Reviews\n            </ion-segment-button>\n        </ion-segment>\n    </div>\n    <div [ngSwitch]="rideprofile">\n        <ion-list *ngSwitchCase="\'about\'">\n            <ion-card>\n                <ion-card-content>\n                    <div class="ride-detail">\n                        <p class="detail">Home - Office</p>\n                        <p>\n                            <span class="icon-location bg-theme"></span><span class="time">12:00 am</span>Washington sq.park New York</p>\n                        <p>\n                            <span class="icon-location bg-yellow"></span><span class="time">12:50 am</span>Harison, east sq.park New York</p>\n                    </div>\n                    <div class="ride-detail">\n                        <p class="detail">Office - Home</p>\n                        <p>\n                            <span class="icon-location bg-theme"></span><span class="time">12:00 am</span>Washington sq.park New York</p>\n                        <p>\n                            <span class="icon-location bg-yellow"></span><span class="time">12:50 am</span>Harison, east sq.park New York</p>\n                    </div>\n                </ion-card-content>\n            </ion-card>\n            <ion-card>\n                <ion-card-content>\n                    <ion-row>\n                        <ion-col class="detail-text" col-5>\n                            <div text-left>\n                                Vehocle Capacity\n                                <h2>3Seats</h2>\n                            </div>\n                        </ion-col>\n                        <ion-col class="detail-text" col-5>\n                            <div text-left>Air Condition\n                                <h2>AC available</h2>\n                            </div>\n                        </ion-col>\n                        <ion-col class="detail-text" col-2>\n                            <div text-left>Min Fare\n                                <h2>$ 60</h2>\n                            </div>\n                        </ion-col>\n                    </ion-row>\n                </ion-card-content>\n            </ion-card>\n            <ion-card>\n                <ion-card-content>\n                    <ion-row>\n                        <ion-col class="detail-text">\n                            <div text-left>\n                                Usually Travel Days\n                            </div>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row>\n                        <ion-col col-4>Monday</ion-col>\n                        <ion-col col-4>Tuesday</ion-col>\n                        <ion-col col-4>Wednesday</ion-col>\n                        <ion-col col-4>Thursday</ion-col>\n                        <ion-col col-4>Friday</ion-col>\n                        <ion-col col-4 class="text-light">Saturday</ion-col>\n                        <ion-col col-4 class="text-light">Sunday</ion-col>\n                    </ion-row>\n                </ion-card-content>\n            </ion-card>\n        </ion-list>\n        <ion-list *ngSwitchCase="\'reviews\'">\n            <div class="bg-white" padding style="margin-bottom: 4px;">\n                <div class="rating-box">\n                    <p>\n                        <span class="text-1">5<ion-icon name="md-star"></ion-icon></span>\n                        <span class="rate-bar"><span class="bg-theme" style="width: 100%"></span></span>\n                        <span class="text-2">100</span>\n                    </p>\n                    <p>\n                        <span class="text-1">4<ion-icon name="md-star"></ion-icon></span>\n                        <span class="rate-bar"><span class="bg-theme" style="width: 90%"></span></span>\n                        <span class="text-2">90</span></p>\n                    <p>\n                        <span class="text-1">3<ion-icon name="md-star"></ion-icon></span>\n                        <span class="rate-bar"><span class="bg-theme" style="width: 70%"></span></span>\n                        <span class="text-2">60</span>\n                    </p>\n                    <p>\n                        <span class="text-1">2<ion-icon name="md-star"></ion-icon></span>\n                        <span class="rate-bar"><span class="bg-theme" style="width: 50%"></span></span>\n                        <span class="text-2">40</span>\n                    </p>\n                    <p>\n                        <span class="text-1">1<ion-icon name="md-star"></ion-icon></span>\n                        <span class="rate-bar"><span class="bg-theme" style="width: 20%"></span></span>\n                        <span class="text-2">20</span>\n                    </p>\n                </div>\n            </div>\n            <ion-card class="review">\n                <ion-item>\n                    <ion-avatar item-start>\n                        <img src="assets/imgs/face-1.jpg">\n                    </ion-avatar>\n                    <h2>Buzz Lightyear</h2>\n                    <p>\n                        <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n                        <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n                        <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n                        <ion-icon name="ios-star"></ion-icon>\n                        <ion-icon name="ios-star"></ion-icon>\n                    </p>\n                    <ion-note item-end>15 April 2017</ion-note>\n                </ion-item>\n                <ion-card-content>\n                    <div class="detail">\n                        <p>Badges are small components that typically communicate a numerical value to the user. They are typically used within an item.</p>\n                    </div>\n                </ion-card-content>\n            </ion-card>\n            <ion-card class="review">\n                <ion-item>\n                    <ion-avatar item-start>\n                        <img src="assets/imgs/face-1.jpg">\n                    </ion-avatar>\n                    <h2>Buzz Lightyear</h2>\n                    <p>\n                        <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n                        <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n                        <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n                        <ion-icon name="ios-star"></ion-icon>\n                        <ion-icon name="ios-star"></ion-icon>\n                    </p>\n                    <ion-note item-end>15 April 2017</ion-note>\n                </ion-item>\n                <ion-card-content>\n                    <div class="detail">\n                        <p>Badges are small components that typically communicate a numerical value to the user. They are typically used within an item.</p>\n                    </div>\n                </ion-card-content>\n            </ion-card>\n        </ion-list>\n    </div>\n    <ion-row class="fix-btn">\n        <ion-col>\n            <button class="btn rounded text-theme bg-white full" (click)="chatting()">MESSAGE</button>\n        </ion-col>\n        <ion-col>\n            <button class="btn rounded text-white bg-theme full" (click)="confirmride()">REQUEST RIDE</button>\n        </ion-col>\n    </ion-row>\n    <div class="space">&nbsp;</div>\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_customer_src/src/pages/riderprofile/riderprofile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], RiderprofilePage);
    return RiderprofilePage;
}());

//# sourceMappingURL=riderprofile.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmridePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__confirmpopup_confirmpopup__ = __webpack_require__(314);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConfirmridePage = /** @class */ (function () {
    function ConfirmridePage(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
    }
    ConfirmridePage.prototype.confirmpopup = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__confirmpopup_confirmpopup__["a" /* ConfirmpopupPage */]);
        modal.present();
    };
    ConfirmridePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-confirmride',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_customer_src/src/pages/confirmride/confirmride.html"*/'<ion-header class="bg-theme">\n    <ion-navbar>\n        <ion-title>CONFIRM RIDE REQUEST</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bh-light">\n    <ion-card>\n        <ion-item>\n            <ion-avatar item-start>\n                <img src="assets/imgs/face-1.jpg">\n            </ion-avatar>\n            <div class="name">\n                <h2>David Johnson\n                    <ion-icon name="ios-checkmark-circle" class="text-theme"></ion-icon>\n                </h2>\n                <p>Honda Cvic | White</p>\n            </div>\n        </ion-item>\n        <ion-card-content>\n            <div class="ride-detail">\n                <h6 class="text-theme">Location</h6>\n                <p><small>Pickup Location<ion-icon name="md-create"></ion-icon></small>\n                    <span class="icon-location bg-theme"></span>Washington sq.park New York</p>\n                <p>\n                    <small>Drop Location<ion-icon name="md-create"></ion-icon></small>\n                    <span class="icon-location bg-yellow"></span>Harison, east sq.park New York</p>\n            </div>\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-card-content>\n            <div class="ride-detail no-before">\n                <h6 class="text-theme">Date & Time</h6>\n                <p><small>Date<ion-icon name="md-create"></ion-icon></small>\n                    <ion-icon name="md-calendar" class="icon-location"></ion-icon>\n                    22<sup>nd</sup> Feb, 2018 </p>\n                <p>\n                    <small>Time</small>\n                    <ion-icon name="md-time" class="icon-location"></ion-icon>\n                    Between 12:10pm to 12:30pm</p>\n            </div>\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-card-content>\n            <div class="seats">\n                <h6 class="text-theme">Fare & Seat Conformation</h6>\n                <ion-row>\n                    <ion-col col-4 class="rate">\n                        <small>Est Fare</small> $ 120\n                    </ion-col>\n                    <ion-col col-8>\n                        <div class="seats-tag">\n                            <ion-icon name="remove-circle"></ion-icon>\n                            <strong>2 Seats</strong>\n                            <ion-icon name="add-circle"></ion-icon>\n                        </div>\n                    </ion-col>\n                </ion-row>\n                <button class="btn bg-theme text-white rounded" (click)="confirmpopup()" style="width: 100%;margin-top: 16px;">CONFIRM REQUEST</button>\n            </div>\n        </ion-card-content>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_customer_src/src/pages/confirmride/confirmride.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]])
    ], ConfirmridePage);
    return ConfirmridePage;
}());

//# sourceMappingURL=confirmride.js.map

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmpopupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfirmpopupPage = /** @class */ (function () {
    function ConfirmpopupPage(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
    }
    ConfirmpopupPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ConfirmpopupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-confirmpopup',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_customer_src/src/pages/confirmpopup/confirmpopup.html"*/'<ion-content>\n    <ion-icon name="md-close" class="close-icon text-white" (click)="dismiss()"></ion-icon>\n    <ion-card>\n        <h6 class="text-theme">Confirm Ride Request?</h6>\n        <ion-item>\n            <ion-avatar item-start>\n                <img src="assets/imgs/face-1.jpg">\n            </ion-avatar>\n            <div class="name">\n                <h2>David Johnson</h2>\n                <p>Honda Cvic | White</p>\n            </div>\n        </ion-item>\n        <ion-card-content>\n            <div class="ride-detail">\n                <p><small>Pickup Location</small>\n                    <span class="icon-location bg-theme"></span>Washington sq.park New York</p>\n                <p>\n                    <small>Drop Location</small>\n                    <span class="icon-location bg-yellow"></span>Harison, east sq.park New York</p>\n            </div>\n        </ion-card-content>\n\n        <ion-card-content>\n            <div class="ride-detail no-before">\n                <p><small>Date<span class="text-theme" float-right>change</span></small>\n                    <ion-icon name="md-calendar" class="icon-location"></ion-icon>\n                    22<sup>nd</sup> Feb, 2018 </p>\n                <p>\n                    <small>Time</small>\n                    <ion-icon name="md-time" class="icon-location"></ion-icon>\n                    Between 12:10pm to 12:30pm</p>\n            </div>\n        </ion-card-content>\n\n        <ion-card-content>\n            <div class="seats">\n                <ion-row>\n                    <ion-col col-4 class="rate">\n                        <small>Est Fare</small> $ 120\n                    </ion-col>\n                    <ion-col col-8>\n                        <div class="seats-tag">\n                            <ion-icon name="remove-circle"></ion-icon>\n                            <strong>2 Seats</strong>\n                            <ion-icon name="add-circle"></ion-icon>\n                        </div>\n                    </ion-col>\n                </ion-row>\n                <button class="btn bg-theme text-white rounded" (click)="confirmpopup()" style="width: 100%;margin-top: 14px;">CONFIRM REQUEST</button>\n            </div>\n        </ion-card-content>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_customer_src/src/pages/confirmpopup/confirmpopup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ViewController */]])
    ], ConfirmpopupPage);
    return ConfirmpopupPage;
}());

//# sourceMappingURL=confirmpopup.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(448);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_myride_myride__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_chats_chats__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_findride_findride__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_wallet_wallet__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_more_more__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_signup_signup__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_password_password__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_verification_verification__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_code_code__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_listride_listride__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_filter_filter__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_riderprofile_riderprofile__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_confirmride_confirmride__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_confirmpopup_confirmpopup__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_raterider_raterider__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_chatting_chatting__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_profile_profile__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_reviews_reviews__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_notification_notification__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_terms_terms__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_earn_earn__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_ratevroom_ratevroom__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_help_help__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_status_bar__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_native_splash_screen__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ionic_native_google_maps__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__angular_fire__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__angular_fire_database__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__angular_fire_auth__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__services_signup_services__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__services_userauthentication_service__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__ionic_native_firebase__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__ionic_native_geolocation__ = __webpack_require__(285);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







































var firebaseConfig = {
    apiKey: "AIzaSyDYldaKvN7lRhAOYesOeWhl7Zs7WfTn9ak",
    authDomain: "waypoolapp-f1349.firebaseapp.com",
    databaseURL: "https://waypoolapp-f1349.firebaseio.com",
    projectId: "waypoolapp-f1349",
    storageBucket: "waypoolapp-f1349.appspot.com",
    messagingSenderId: "729494621596"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_myride_myride__["a" /* MyridePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_chats_chats__["a" /* ChatsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_findride_findride__["a" /* FindridePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_wallet_wallet__["a" /* WalletPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_more_more__["a" /* MorePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_password_password__["a" /* PasswordPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_verification_verification__["a" /* VerificationPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_code_code__["a" /* CodePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_listride_listride__["a" /* ListridePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_filter_filter__["a" /* FilterPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_riderprofile_riderprofile__["a" /* RiderprofilePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_confirmride_confirmride__["a" /* ConfirmridePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_confirmpopup_confirmpopup__["a" /* ConfirmpopupPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_raterider_raterider__["a" /* RateriderPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_chatting_chatting__["a" /* ChattingPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_reviews_reviews__["a" /* ReviewsPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_notification_notification__["a" /* NotificationPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_terms_terms__["a" /* TermsPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_earn_earn__["a" /* EarnPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_ratevroom_ratevroom__["a" /* RatevroomPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_ratevroom_ratevroom__["a" /* RatevroomPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_help_help__["a" /* HelpPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_32__angular_fire__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_33__angular_fire_database__["AngularFireDatabaseModule"],
                __WEBPACK_IMPORTED_MODULE_34__angular_fire_auth__["AngularFireAuthModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_myride_myride__["a" /* MyridePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_chats_chats__["a" /* ChatsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_findride_findride__["a" /* FindridePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_wallet_wallet__["a" /* WalletPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_more_more__["a" /* MorePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_password_password__["a" /* PasswordPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_verification_verification__["a" /* VerificationPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_code_code__["a" /* CodePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_listride_listride__["a" /* ListridePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_filter_filter__["a" /* FilterPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_riderprofile_riderprofile__["a" /* RiderprofilePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_confirmride_confirmride__["a" /* ConfirmridePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_confirmpopup_confirmpopup__["a" /* ConfirmpopupPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_raterider_raterider__["a" /* RateriderPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_chatting_chatting__["a" /* ChattingPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_reviews_reviews__["a" /* ReviewsPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_notification_notification__["a" /* NotificationPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_terms_terms__["a" /* TermsPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_earn_earn__["a" /* EarnPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_ratevroom_ratevroom__["a" /* RatevroomPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_ratevroom_ratevroom__["a" /* RatevroomPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_help_help__["a" /* HelpPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_29__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_30__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_31__ionic_native_google_maps__["a" /* GoogleMaps */],
                __WEBPACK_IMPORTED_MODULE_35__services_signup_services__["a" /* SignUpService */],
                __WEBPACK_IMPORTED_MODULE_36__services_userauthentication_service__["a" /* authenticationService */],
                __WEBPACK_IMPORTED_MODULE_37__ionic_native_firebase__["a" /* Firebase */],
                __WEBPACK_IMPORTED_MODULE_38__ionic_native_geolocation__["a" /* Geolocation */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 491:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(155);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { TabsPage } from '../pages/tabs/tabs';
//import { AboutPage } from '../pages/about/about';

var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_customer_src/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_customer_src/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _c || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { SignupPage } from '../signup/signup';
//import { PasswordPage } from '../password/password';
var PasswordPage = /** @class */ (function () {
    function PasswordPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    PasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-password',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_customer_src/src/pages/password/password.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>password</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <p (click)="signup()">signup</p>\n    <p (click)="password()">forgot password</p>\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_customer_src/src/pages/password/password.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], PasswordPage);
    return PasswordPage;
}());

//# sourceMappingURL=password.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__code_code__ = __webpack_require__(310);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VerificationPage = /** @class */ (function () {
    function VerificationPage(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
    }
    VerificationPage.prototype.code = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__code_code__["a" /* CodePage */]);
        modal.present();
    };
    VerificationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-verification',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_customer_src/src/pages/verification/verification.html"*/'<ion-header class="transparent">\n    <ion-navbar>\n        <ion-title><span class="text-white">verification</span></ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-background-img">\n    <div class="logo">\n        <img src="assets/imgs/logo.png" alt="logo">\n    </div>\n    <div class="bg-white login">\n        <div class="">\n            <p padding text-center>Enter confirmation code<br>sent to you on your SMS!</p>\n            <br>\n            <ion-list class="form" text-center>\n                <ion-item>\n                    <ion-input type="text" value="33456" text-right></ion-input>\n                </ion-item>\n            </ion-list>\n            <button ion-button full class="bg-theme text-white btn rounded" (click)="code()">Next</button>\n        </div>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_customer_src/src/pages/verification/verification.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]])
    ], VerificationPage);
    return VerificationPage;
}());

//# sourceMappingURL=verification.js.map

/***/ }),

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListridePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__filter_filter__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__riderprofile_riderprofile__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_signup_services__ = __webpack_require__(160);
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
    function ListridePage(navCtrl, afDB, SignUpService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.afDB = afDB;
        this.SignUpService = SignUpService;
        this.driversAvailable = [];
        this.SignUpService.getDrivers()
            .subscribe(function (drivers) {
            _this.driversAvailable = drivers;
            console.log(_this.driversAvailable);
        });
    }
    ;
    ListridePage.prototype.filter = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__filter_filter__["a" /* FilterPage */]);
    };
    ListridePage.prototype.riderprofile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__riderprofile_riderprofile__["a" /* RiderprofilePage */]);
    };
    ListridePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-listride',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_customer_src/src/pages/listride/listride.html"*/'<ion-header class="bg-theme">\n    <ion-navbar>\n        <ion-title>FIND A RIDE\n            <ion-icon name="md-funnel" class="text-white" style="margin-left: auto;float: right;" (click)="filter()"></ion-icon>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-light">\n    <ion-row class="center-align bg-white flow-ride">\n        <ion-col col-5>\n            <h2>12:00 am</h2> Washington Sq. park\n\n        </ion-col>\n        <ion-col col-2 text-center>\n            <img src="assets/imgs/arrow.jpg">\n        </ion-col>\n        <ion-col col-5>\n            <h2>12:00 am</h2> Washington Sq. park\n        </ion-col>\n\n    </ion-row>\n    <ion-card *ngFor = "let driver of driversAvailable">\n        <ion-item>\n            <ion-avatar item-start>\n                <img src="assets/imgs/face-1.jpg">\n            </ion-avatar>\n            <div class="name">\n                <h2>{{driver.name}} {{driver.lastname}}\n                    <ion-icon name="ios-checkmark-circle" class="text-theme"></ion-icon>\n                </h2>\n                <p>{{driver.carModel}} | {{driver.plateNumber}}</p>\n            </div>\n            <div class="more">\n                <h2 class="text-light">\n                    <ion-icon name="star" class="text-yellow"></ion-icon>\n                    <ion-icon name="star" class="text-yellow"></ion-icon>\n                    <ion-icon name="star" class="text-yellow"></ion-icon>\n                    <ion-icon name="star" class="text-yellow"></ion-icon>\n                    <ion-icon name="star"></ion-icon>\n                </h2>\n                <p class="text-light">(34 Reviews)</p>\n            </div>\n        </ion-item>\n        <ion-card-content>\n            <div class="ride-detail">\n                <p>\n                    <span class="icon-location bg-theme"></span><span class="time">12:00 am</span>Washington sq.park New York</p>\n                <p>\n                    <span class="icon-location bg-yellow"></span><span class="time">12:50 am</span>Harison, east sq.park New York</p>\n            </div>\n            <ion-row class="center-align">\n                <ion-col col-3 class="detail-text text-theme">\n                    3 Seats\n                </ion-col>\n                <ion-col col-2 class="detail-text text-light">\n                    AC\n                </ion-col>\n                <ion-col col-2 class="detail-text text-theme">\n                    $ 60\n                </ion-col>\n                <ion-col center text-center col-4 text-right style="margin-left: auto;">\n                    <button class="btn bg-theme rounded full text-white" (click)="riderprofile()">Request Ride</button>\n                </ion-col>\n            </ion-row>\n        </ion-card-content>\n    </ion-card>\n\n    <!-- <ion-card>\n        <ion-item>\n            <ion-avatar item-start>\n                <img src="assets/imgs/man2.png">\n            </ion-avatar>\n            <div class="name">\n                <h2>David Johnson\n                    <ion-icon name="ios-checkmark-circle" class="text-theme"></ion-icon>\n                </h2>\n                <p>Honda Cvic | White</p>\n            </div>\n            <div class="more">\n                <h2 class="text-light">\n                    <ion-icon name="star" class="text-yellow"></ion-icon>\n                    <ion-icon name="star" class="text-yellow"></ion-icon>\n                    <ion-icon name="star" class="text-yellow"></ion-icon>\n                    <ion-icon name="star" class="text-yellow"></ion-icon>\n                    <ion-icon name="star"></ion-icon>\n                </h2>\n                <p class="text-light">(34 Reviews)</p>\n            </div>\n        </ion-item>\n        <ion-card-content>\n            <div class="ride-detail">\n                <p>\n                    <span class="icon-location bg-theme"></span><span class="time">12:00 am</span>Washington sq.park New York</p>\n                <p>\n                    <span class="icon-location bg-yellow"></span><span class="time">12:50 am</span>Harison, east sq.park New York</p>\n            </div>\n            <ion-row class="center-align">\n                <ion-col col-3 class="detail-text text-theme">\n                    3 Seats\n                </ion-col>\n                <ion-col col-2 class="detail-text text-light">\n                    AC\n                </ion-col>\n                <ion-col col-2 class="detail-text text-theme">\n                    $ 60\n                </ion-col>\n                <ion-col center text-center col-4 text-right style="margin-left: auto;">\n                    <button class="btn bg-theme rounded full text-white" (click)="riderprofile()">Request Ride</button>\n                </ion-col>\n            </ion-row>\n        </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n        <ion-item>\n            <ion-avatar item-start>\n                <img src="assets/imgs/man1.png">\n            </ion-avatar>\n            <div class="name">\n                <h2>David Johnson\n                    <ion-icon name="ios-checkmark-circle" class="text-theme"></ion-icon>\n                </h2>\n                <p>Honda Cvic | White</p>\n            </div>\n            <div class="more">\n                <h2 class="text-light">\n                    <ion-icon name="star" class="text-yellow"></ion-icon>\n                    <ion-icon name="star" class="text-yellow"></ion-icon>\n                    <ion-icon name="star" class="text-yellow"></ion-icon>\n                    <ion-icon name="star" class="text-yellow"></ion-icon>\n                    <ion-icon name="star"></ion-icon>\n                </h2>\n                <p class="text-light">(34 Reviews)</p>\n            </div>\n        </ion-item>\n        <ion-card-content>\n            <div class="ride-detail">\n                <p>\n                    <span class="icon-location bg-theme"></span><span class="time">12:00 am</span>Washington sq.park New York</p>\n                <p>\n                    <span class="icon-location bg-yellow"></span><span class="time">12:50 am</span>Harison, east sq.park New York</p>\n            </div>\n            <ion-row class="center-align">\n                <ion-col col-3 class="detail-text text-theme">\n                    3 Seats\n                </ion-col>\n                <ion-col col-2 class="detail-text text-light">\n                    AC\n                </ion-col>\n                <ion-col col-2 class="detail-text text-theme">\n                    $ 60\n                </ion-col>\n                <ion-col center text-center col-4 text-right style="margin-left: auto;">\n                    <button class="btn bg-theme rounded full text-white" (click)="riderprofile()">Request Ride</button>\n                </ion-col>\n            </ion-row>\n        </ion-card-content>\n    </ion-card> -->\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_customer_src/src/pages/listride/listride.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_5__services_signup_services__["a" /* SignUpService */]])
    ], ListridePage);
    return ListridePage;
}());

//# sourceMappingURL=listride.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChattingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChattingPage = /** @class */ (function () {
    function ChattingPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ChattingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chatting',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_customer_src/src/pages/chatting/chatting.html"*/'<ion-header class="bg-theme">\n    <ion-navbar>\n        <ion-item>\n            <ion-avatar item-start>\n                <img src="assets/imgs/face-1.jpg">\n            </ion-avatar>\n            <h2><span class="text-white">David Johnson</span>\n                <ion-icon name="md-more" end-item item-end class="text-white"></ion-icon>\n            </h2>\n        </ion-item>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding class="chat-bg">\n    <div class=" chat chat-right bg-white text-dark" text-right padding float-right>\n        <p>Hey David !!</p>\n        <p>Good time to talk?</p>\n        <p><small>12:33 pm</small></p>\n    </div>\n    <div class="chat chat-left bg-theme text-white" text-left padding float-left>\n        <p>Hey mate !!</p>\n        <p>Yes, tell me your query bro!</p>\n        <p><small>12:33 pm</small></p>\n    </div>\n    <div class="fixed-bottom">\n        <ion-list inset>\n            <ion-item>\n                <ion-icon name="md-add" class="circle-icon" item-start></ion-icon>\n                <ion-input type="text" placeholder="Type your Message"></ion-input>\n                <ion-icon name="md-send" class="text-theme" item-end></ion-icon>\n            </ion-item>\n        </ion-list>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/vroom_customer_src/src/pages/chatting/chatting.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], ChattingPage);
    return ChattingPage;
}());

//# sourceMappingURL=chatting.js.map

/***/ })

},[315]);
//# sourceMappingURL=main.js.map