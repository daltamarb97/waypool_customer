webpackJsonp([25],{

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(89);
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
    function SignUpService(afDB, toastCtrl) {
        this.afDB = afDB;
        this.toastCtrl = toastCtrl;
    }
    SignUpService.prototype.saveUser = function (user, place) {
        this.afDB.database.ref(place + '/users/' + user.userId).update(user);
        this.afDB.database.ref(place + '/drivers/' + user.userId).update(user);
    };
    SignUpService.prototype.getAllCities = function () {
        return this.afDB.list('allCities/').valueChanges();
    };
    SignUpService.prototype.getInfoPlace = function (place) {
        return this.afDB.object('/allPlaces/' + place).valueChanges();
    };
    SignUpService.prototype.saveDriver = function (user) {
        //erase this one, it just for testing
        this.afDB.database.ref('drivers/' + user.userId).set(user);
    };
    SignUpService.prototype.pushDocsCarne = function (place, userId) {
        this.afDB.database.ref(place + '/drivers/' + userId + '/documents').update({
            carne: false
        });
        this.afDB.database.ref(place + '/users/' + userId + '/documents').update({
            carne: false
        });
    };
    SignUpService.prototype.pushDocsId = function (place, userId) {
        this.afDB.database.ref(place + '/drivers/' + userId + '/documents').update({
            id: false
        });
        this.afDB.database.ref(place + '/users/' + userId + '/documents').update({
            id: false
        });
    };
    SignUpService.prototype.getDrivers = function () {
        return this.afDB.list('/drivers').valueChanges();
    };
    SignUpService.prototype.getMyInfo = function (userId, place) {
        return this.afDB.object(place + '/users/' + userId).valueChanges();
    };
    SignUpService.prototype.getSaveTrip = function (userId, place) {
        return this.afDB.object(place + '/users/' + userId + '/saveTrip/').valueChanges();
    };
    SignUpService.prototype.getEmails = function (enterprise) {
        return this.afDB.list('allPlaces/' + enterprise + '/emails').valueChanges();
    };
    SignUpService.prototype.checkMyReserves = function (place, userId) {
        return this.afDB.list(place + '/users/' + userId + '/myReserves').valueChanges();
    };
    SignUpService.prototype.saveUserInAllUsers = function (place, user, city) {
        this.afDB.database.ref('/allUsers/' + user).update({
            place: place,
            city: city
        });
    };
    SignUpService.prototype.getInfoDriver = function (userDriverId) {
        return this.afDB.object('drivers/' + userDriverId).valueChanges();
    };
    SignUpService.prototype.deleteAccount = function (place, userId) {
        this.afDB.database.ref(place + '/users/' + userId).remove();
        this.afDB.database.ref(place + '/drivers/' + userId).remove();
    };
    SignUpService.prototype.getMyInfoForProfile = function (place, userId) {
        return this.afDB.object(place + '/users/' + userId).valueChanges();
    };
    SignUpService.prototype.saveInfoProfile = function (userUid, phone, about) {
        this.afDB.database.ref('/users/' + userUid).update({
            phone: phone,
            about: about
        }).then(function () {
            console.log('changed info');
        }).catch(function (err) {
            console.log('this is the error: ' + err);
        });
    };
    SignUpService.prototype.saveInfoProfileUrl = function (place, userUid, url) {
        //permite configurar la información del perfil
        this.afDB.database.ref(place + '/users/' + userUid).update({
            url: url
        });
    };
    SignUpService.prototype.saveInfoProfileAbout = function (place, userUid, about) {
        //permite configurar la información del perfil
        this.afDB.database.ref(place + '/users/' + userUid).update({
            about: about
        });
    };
    SignUpService.prototype.saveInfoProfilePhone = function (place, userUid, phone) {
        //permite configurar la información del perfil
        this.afDB.database.ref(place + '/users/' + userUid).update({
            phone: phone
        });
    };
    SignUpService.prototype.setFixedLocationCoordinates = function (place, user, lat, lng) {
        this.afDB.database.ref(place + '/users/' + user + '/fixedLocation/coordinates').update({
            lat: lat,
            lng: lng
        });
        this.afDB.database.ref(place + '/drivers/' + user + '/fixedLocation/coordinates').update({
            lat: lat,
            lng: lng
        });
    };
    SignUpService.prototype.setFixedLocationName = function (place, user, name) {
        this.afDB.database.ref(place + '/users/' + user + '/fixedLocation').update({
            name: name
        });
        this.afDB.database.ref(place + '/drivers/' + user + '/fixedLocation').update({
            name: name
        });
    };
    SignUpService.prototype.addPlaceZone = function (place, userUid) {
        this.afDB.database.ref(place + '/drivers/' + userUid).update({ place: place });
        this.afDB.database.ref(place + '/users/' + userUid).update({ place: place });
    };
    SignUpService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_fire_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* ToastController */]])
    ], SignUpService);
    return SignUpService;
}());

//# sourceMappingURL=signup.services.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return reservesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__ = __webpack_require__(24);
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


var reservesService = /** @class */ (function () {
    function reservesService(afDB) {
        this.afDB = afDB;
    }
    reservesService.prototype.setOnTrip = function (place, userUid) {
        this.afDB.database.ref(place + '/users/' + userUid).update({
            onTrip: true
        });
    };
    reservesService.prototype.getMyReservesUser = function (place, userUid) {
        //get reserves of that i have enter
        return this.afDB.list(place + '/users/' + userUid + '/myReserves').valueChanges();
    };
    reservesService.prototype.getMyReservesSelected = function (place, userUid) {
        // 
        return this.afDB.list(place + '/users/' + userUid + '/myReserves').valueChanges();
    };
    reservesService.prototype.getReserves = function (place, userUid) {
        //get reserves of the geofire
        return this.afDB.list(place + '/users/' + userUid + '/availableReserves').valueChanges();
    };
    reservesService.prototype.getOnTrip = function (place, userUid) {
        //get reserves of the geofire
        return this.afDB.object(place + '/users/' + userUid + '/onTrip').valueChanges();
    };
    reservesService.prototype.getMyReserves = function (place, driverUserUid, reserveId) {
        //get reserves inside reserves node
        return this.afDB.object(place + '/reserves/' + driverUserUid + '/' + reserveId + '/').valueChanges();
    };
    reservesService.prototype.getPendingUsers = function (place, driverUserUid, reserveId) {
        //get reserves inside reserves node
        return this.afDB.list(place + '/reserves/' + driverUserUid + '/' + reserveId + '/pendingUsers').valueChanges();
    };
    reservesService.prototype.confirmMyExistenceInPendingUsers = function (place, driverUserUid, reserveId, userUid) {
        //get reserves inside reserves node
        return this.afDB.object(place + '/reserves/' + driverUserUid + '/' + reserveId + '/pendingUsers/' + userUid).valueChanges();
    };
    reservesService.prototype.confirmMyExistenceInPickedupUsers = function (place, driverId, keyTrip, userId) {
        //get reserves inside reserves node
        return this.afDB.object(place + '/trips/' + driverId + '/' + keyTrip + '/pickedUpUsers/' + userId).valueChanges();
    };
    reservesService.prototype.cancelReserve = function (place, userUid, driverUid, reserveId) {
        //eliminate user from reserve in reserve's node        
        this.afDB.database.ref(place + '/reserves/' + driverUid + '/' + reserveId + '/pendingUsers/' + userUid).remove();
        //eliminate keyTrip from user's node to eliminate access to that reserve
    };
    reservesService.prototype.eliminateKeyUser = function (place, userUid, reserveId) {
        //eliminate keyTrip from user's node to eliminate access to that reserve
        this.afDB.database.ref(place + '/users/' + userUid + '/myReserves/' + reserveId).remove();
    };
    reservesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__["AngularFireDatabase"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__["AngularFireDatabase"]) === "function" && _a || Object])
    ], reservesService);
    return reservesService;
    var _a;
}());

//# sourceMappingURL=reserves.service.js.map

/***/ }),

/***/ 237:
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
webpackEmptyAsyncContext.id = 237;

/***/ }),

/***/ 278:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/p-canceltrip/canceltrip.module": [
		632,
		24
	],
	"../pages/p-chatting/chatting.module": [
		633,
		23
	],
	"../pages/p-confirm-reservation/confirm-reservation.module": [
		634,
		22
	],
	"../pages/p-confirmnote/confirmnote.module": [
		635,
		1
	],
	"../pages/p-confirmpopup/confirmpopup.module": [
		636,
		21
	],
	"../pages/p-confirmtrip/confirmtrip.module": [
		637,
		20
	],
	"../pages/p-findride/findride.module": [
		656,
		0
	],
	"../pages/p-help/help.module": [
		638,
		19
	],
	"../pages/p-listride/listride.module": [
		639,
		18
	],
	"../pages/p-login/login.module": [
		640,
		17
	],
	"../pages/p-more/more.module": [
		641,
		16
	],
	"../pages/p-myride/myride.module": [
		654,
		15
	],
	"../pages/p-profile/profile.module": [
		643,
		14
	],
	"../pages/p-public-profile/public-profile.module": [
		644,
		13
	],
	"../pages/p-ratetrip/ratetrip.module": [
		642,
		12
	],
	"../pages/p-reserveinfo/reserveinfo.module": [
		645,
		11
	],
	"../pages/p-reservetrip/reservetrip.module": [
		653,
		10
	],
	"../pages/p-signup/signup.module": [
		655,
		9
	],
	"../pages/p-support/support.module": [
		646,
		8
	],
	"../pages/p-tabs/tabs.module": [
		647,
		7
	],
	"../pages/p-terms/terms.module": [
		648,
		6
	],
	"../pages/p-verification-images/verification-images.module": [
		649,
		5
	],
	"../pages/p-verification-number/verification-number.module": [
		650,
		4
	],
	"../pages/p-walkthrough/walkthrough.module": [
		651,
		3
	],
	"../pages/p-wallet/wallet.module": [
		652,
		2
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 278;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sendCoordsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__ = __webpack_require__(24);
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


var sendCoordsService = /** @class */ (function () {
    function sendCoordsService(afDB) {
        this.afDB = afDB;
    }
    //cant use this because it gets your same adress
    sendCoordsService.prototype.getDestination = function (user) {
        return this.afDB.list('/drivers/' + user + '/trips/destination').valueChanges();
    };
    sendCoordsService.prototype.getPendingUsers = function (driverUid, pushKey, place) {
        return this.afDB.list(place + '/reserves/' + driverUid + '/' + pushKey + '/pendingUsers').valueChanges();
    };
    sendCoordsService.prototype.getPendingUsersInTrips = function (driverUid, pushKey, place) {
        return this.afDB.list(place + '/trips/' + driverUid + '/' + pushKey + '/pendingUsers').valueChanges();
    };
    sendCoordsService.prototype.getOrigin = function (user) {
        return this.afDB.list('/drivers/' + user + '/trips/origin').valueChanges();
    };
    sendCoordsService.prototype.getOriginUser = function (place, user) {
        return this.afDB.list(place + '/users/' + user + '/trips/origin').valueChanges();
    };
    sendCoordsService.prototype.getDestinationUser = function (place, user) {
        return this.afDB.list(place + '/users/' + user + '/trips/destination').valueChanges();
    };
    sendCoordsService.prototype.pushCoordinatesUsers = function (user, dest, or) {
        this.afDB.database.ref('/users/' + user + '/trips').update({
            origin: or,
            destination: dest,
        });
    };
    sendCoordsService.prototype.deleteOnTripFinal = function (place, userId) {
        this.afDB.database.ref(place + '/users/' + userId + '/onTripFinal').remove();
    };
    sendCoordsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_fire_database__["AngularFireDatabase"]])
    ], sendCoordsService);
    return sendCoordsService;
}());

//# sourceMappingURL=sendCoords.service.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sendUsersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var sendUsersService = /** @class */ (function () {
    function sendUsersService(afDB, afAuth) {
        this.afDB = afDB;
        this.afAuth = afAuth;
    }
    sendUsersService.prototype.getUsersOnTrip = function (userId) {
        // Get all the students the driver acepts in myRidePage to be send to the students
        return this.afDB.list('/drivers/' + userId + '/trips/pickingUsers').valueChanges();
    };
    sendUsersService.prototype.getPickedUpUsers = function (userId) {
        // Get all the students the driver acepts in myRidePage to be send to the students
        return this.afDB.list('/drivers/' + userId + '/trips/pickedUpUsers').valueChanges();
    };
    sendUsersService.prototype.getMyUsersOnTrip = function (userUid) {
        // Get all the students the driver acepts in myRidePage to be send to the students
        return this.afDB.list('/users/' + userUid + '/trips/pickingUsers').valueChanges();
    };
    sendUsersService.prototype.getMyDriverOnTrip = function (userUid) {
        // Get the driver on trip 
        return this.afDB.list('/users/' + userUid + '/trips/pickingUsers/driver/').valueChanges();
    };
    sendUsersService.prototype.PushUserListRide = function (DriverUserId, userUid, myUser) {
        //send the user to the driver
        this.afDB.database.ref('/drivers/' + DriverUserId + '/trips/usersListRide/' + userUid).update(myUser);
    };
    sendUsersService.prototype.cancelTripUserOr = function (DriverUserId, userUid) {
        //        
        this.afDB.database.ref('/drivers/' + DriverUserId + '/trips/pickingUsers/' + userUid + '/').remove();
        this.afDB.database.ref('/users/' + userUid + '/trips/pickingUsers').remove();
        this.afDB.database.ref('users/' + userUid + '/trips/onTrip').remove();
        this.afDB.database.ref('users/' + userUid + '/trips/driverListRide').remove();
        this.afDB.database.ref('geofireOr/' + userUid).remove();
    };
    sendUsersService.prototype.cancelTripUserDest = function (DriverUserId, userUid) {
        //        
        this.afDB.database.ref('/drivers/' + DriverUserId + '/trips/pickingUsers/' + userUid + '/').remove();
        this.afDB.database.ref('/users/' + userUid + '/trips/pickingUsers').remove();
        this.afDB.database.ref('users/' + userUid + '/trips/onTrip').remove();
        this.afDB.database.ref('users/' + userUid + '/trips/driverListRide').remove();
        this.afDB.database.ref('geofireDest/' + userUid).remove();
    };
    sendUsersService.prototype.getRecordTrips = function (place, userUid) {
        return this.afDB.list(place + '/users/' + userUid + '/recordTrips/').valueChanges();
    };
    sendUsersService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_fire_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"]])
    ], sendUsersService);
    return sendUsersService;
}());

//# sourceMappingURL=sendUsers.service.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return geofireService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_geofire__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_geofire___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_geofire__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reserves_service__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__signup_services__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var geofireService = /** @class */ (function () {
    function geofireService(afDB, AngularFireAuth, reservesService, signUpServices) {
        this.afDB = afDB;
        this.AngularFireAuth = AngularFireAuth;
        this.reservesService = reservesService;
        this.signUpServices = signUpServices;
    }
    geofireService.prototype.setGeofireOr = function (place, radius, lat, lng, userId) {
        this.dbRef = this.afDB.database.ref(place + '/geofireOr/');
        this.geoFire = new __WEBPACK_IMPORTED_MODULE_2_geofire__(this.dbRef);
        this.geoquery2 = this.geoFire.query({
            center: [lat, lng],
            radius: radius
        });
        this.keyEnteredOr(userId, place);
        this.keyExitedOr(userId, place);
        console.log('geoquery or added');
    };
    geofireService.prototype.cancelGeofireOr = function () {
        if (this.geoquery2) {
            this.geoquery2.cancel();
        }
        else {
            console.log('no hay geoqueryOr');
        }
    };
    //JUAN DAVID: created a sub-node "availableRserves" inside users node, so they are able to read the reserves from their node
    geofireService.prototype.keyEnteredOr = function (userId, place) {
        this.keyenteredOr = this.geoquery2.on("key_entered", function (key, location, distance) {
            var _this = this;
            console.log(key);
            this.afDB.database.ref(place + '/users/' + userId + '/availableReserves/' + key).update({
                keyReserve: key
            }).then(function () {
                //get driverId from geofireOr node
                return _this.afDB.database.ref(place + '/geofireOr/' + key).once('value').then(function (snap) {
                    _this.driverOnNodeOr = snap.val();
                    _this.afDB.database.ref(place + '/users/' + userId + '/availableReserves/' + key).update({
                        driverId: _this.driverOnNodeOr.driverId
                    });
                });
            });
        }.bind(this));
    };
    geofireService.prototype.keyExitedOr = function (userId, place) {
        this.keyexitedOr = this.geoquery2.on("key_exited", function (key) {
            this.afDB.database.ref(place + '/users/' + userId + '/availableReserves/' + key).remove();
        }.bind(this));
    };
    geofireService.prototype.setGeofireDest = function (place, radius, lat, lng, userId) {
        this.dbRef = this.afDB.database.ref(place + '/geofireDest/');
        this.geoFire = new __WEBPACK_IMPORTED_MODULE_2_geofire__(this.dbRef);
        this.geoquery1 = this.geoFire.query({
            center: [lat, lng],
            radius: radius
        });
        this.keyEnteredDest(userId, place);
        this.keyExitedDest(userId, place);
        console.log('geoquery dest added');
    };
    geofireService.prototype.cancelGeofireDest = function () {
        if (this.geoquery1) {
            this.geoquery1.cancel();
        }
        else {
            console.log('no hay geoqueryDest');
        }
    };
    geofireService.prototype.keyEnteredDest = function (userId, place) {
        this.geoquery1.on("key_entered", function (key, location, distance) {
            var _this = this;
            console.log(key);
            this.afDB.list(place + '/geofireDest/' + key).valueChanges().subscribe(function (driverOnNode) {
                _this.driverOnNodeDest = driverOnNode;
            });
            this.afDB.database.ref(place + '/users/' + userId + '/availableReserves/' + key).update({
                keyReserve: key
            }).then(function () {
                return _this.afDB.database.ref(place + '/geofireDest/' + key).once('value').then(function (snap) {
                    _this.driverOnNodeDest = snap.val();
                    _this.afDB.database.ref(place + '/users/' + userId + '/availableReserves/' + key).update({
                        driverId: _this.driverOnNodeDest.driverId
                    });
                });
            });
            console.log('keyentered here');
        }.bind(this));
    };
    geofireService.prototype.keyExitedDest = function (userId, place) {
        this.geoquery1.on("key_exited", function (key) {
            this.afDB.database.ref(place + '/users/' + userId + '/availableReserves/' + key).remove();
        }.bind(this));
    };
    geofireService.prototype.setGeofireOrLMU = function (place, radius, lat, lng, userId) {
        this.dbRef = this.afDB.database.ref(place + '/geofireOrTrip/');
        this.geoFire = new __WEBPACK_IMPORTED_MODULE_2_geofire__(this.dbRef);
        this.geoquery2LMU = this.geoFire.query({
            center: [lat, lng],
            radius: radius
        });
        this.keyEnteredOrLMU(userId, place);
        this.keyExitedOrLMU(userId, place);
        console.log('geoquery or added');
    };
    geofireService.prototype.cancelGeofireOrLMU = function () {
        if (this.geoquery2LMU) {
            this.geoquery2LMU.cancel();
        }
        else {
            console.log('no hay geoqueryOr LMU');
        }
    };
    geofireService.prototype.keyEnteredOrLMU = function (userId, place) {
        this.geoquery2LMU.on("key_entered", function (key, location, distance) {
            var _this = this;
            console.log(key);
            this.afDB.database.ref(place + '/users/' + userId + '/availableReserves/' + key).update({
                keyReserve: key,
                LMU: true
            }).then(function () {
                //get driverId from geofireOr node
                return _this.afDB.database.ref(place + '/geofireOrTrip/' + key).once('value').then(function (snap) {
                    _this.driverOnNodeOr = snap.val();
                    _this.afDB.database.ref(place + '/users/' + userId + '/availableReserves/' + key).update({
                        driverId: _this.driverOnNodeOr.driverId
                    });
                });
            });
            //  this.afDB.database.ref('/reservesInfoInCaseOfCancelling/'+ this.driverOnNodeOr.keyReserve + '/' + key).push({
            //   userId: userId
            // })
        }.bind(this));
    };
    geofireService.prototype.keyExitedOrLMU = function (userId, place) {
        this.geoquery2LMU.on("key_exited", function (key) {
            this.afDB.database.ref(place + '/users/' + userId + '/availableReserves/' + key).remove();
        }.bind(this));
    };
    geofireService.prototype.setGeofireDestLMU = function (place, radius, lat, lng, userId) {
        this.dbRef = this.afDB.database.ref(place + '/geofireDestTrip/');
        this.geoFire = new __WEBPACK_IMPORTED_MODULE_2_geofire__(this.dbRef);
        this.geoquery1LMU = this.geoFire.query({
            center: [lat, lng],
            radius: radius
        });
        this.keyEnteredDestLMU(userId, place);
        this.keyExitedDestLMU(userId, place);
        console.log('geoquery Dest added');
    };
    geofireService.prototype.cancelGeofireDestLMU = function () {
        if (this.geoquery1LMU) {
            this.geoquery1LMU.cancel();
        }
        else {
            console.log('no hay geoqueryDestLMU');
        }
    };
    geofireService.prototype.keyEnteredDestLMU = function (userId, place) {
        this.geoquery1LMU.on("key_entered", function (key, location, distance) {
            var _this = this;
            console.log(key);
            this.afDB.database.ref(place + '/users/' + userId + '/availableReserves/' + key).update({
                keyReserve: key,
                LMU: true
            }).then(function () {
                //get driverId from geofireOr node
                return _this.afDB.database.ref(place + '/geofireDestTrip/' + key).once('value').then(function (snap) {
                    _this.driverOnNodeDest = snap.val();
                    _this.afDB.database.ref(place + '/users/' + userId + '/availableReserves/' + key).update({
                        driverId: _this.driverOnNodeDest.driverId
                    });
                });
            });
        }.bind(this));
    };
    geofireService.prototype.keyExitedDestLMU = function (userId, place) {
        this.geoquery1LMU.on("key_exited", function (key) {
            this.afDB.database.ref(place + '/users/' + userId + '/availableReserves/' + key).remove();
        }.bind(this));
    };
    geofireService.prototype.removeKeyGeofire = function (key) {
        this.dbRef = this.afDB.database.ref('geofire/');
        this.geoFire = new __WEBPACK_IMPORTED_MODULE_2_geofire__(this.dbRef);
        this.geoFire.remove(key).then(function () {
            console.log("Provided key has been removed from GeoFire");
        }, function (error) {
            console.log(error);
        });
    };
    geofireService.prototype.getDriversAvailableForUser = function (userId) {
        return this.afDB.list('/users/' + userId + '/trips/driversListRide/').valueChanges();
    };
    // OLD
    // showOnDriver(driverId, userId, origin, destination, name, lastname, phone, note){
    //     this.afDB.database.ref('/drivers/' + driverId + '/trips/usersListRide/' + userId).update({
    //         origin: origin,
    //          destination: destination,
    //          name: name,
    //          lastname: lastname,
    //          phone: phone,
    //          userId: userId,
    //          note:note,
    //     });
    // }
    geofireService.prototype.pushToMyReserve = function (place, keyReserve, driverId, userId) {
        this.afDB.database.ref(place + '/users/' + userId + '/myReserves/' + keyReserve).update({
            keyReserve: keyReserve,
            driverId: driverId
        });
    };
    geofireService.prototype.saveKey = function (place, keyReserve, driverId, userId) {
        this.afDB.database.ref(place + '/users/' + userId + '/keyTrip/').set({
            keyTrip: keyReserve,
            driverId: driverId
        });
    };
    geofireService.prototype.deleteKey = function (place, userId) {
        this.afDB.database.ref(place + '/users/' + userId + '/keyTrip/').remove();
    };
    geofireService.prototype.deleteDriverFromLMU = function (place, userId, keyTrip) {
        this.afDB.database.ref(place + '/users/' + userId + '/availableReserves/' + keyTrip).remove();
    };
    geofireService.prototype.setOntripFalse = function (place, userId) {
        this.afDB.database.ref(place + '/users/' + userId).update({
            onTrip: false
        });
    };
    geofireService.prototype.joinReserve = function (place, company, keyReserve, driverId, userId, origin, destination, name, lastname, phone, distance, verifiedPerson) {
        this.afDB.database.ref(place + '/reserves/' + driverId + '/' + keyReserve + '/pendingUsers/' + userId).update({
            origin: origin,
            destination: destination,
            name: name,
            lastname: lastname,
            phone: phone,
            userId: userId,
            distance: distance,
            verifiedPerson: verifiedPerson,
            company: company
        }).catch(function (err) {
            console.log(err);
        });
    };
    geofireService.prototype.deleteAvailableReserve = function (place, userId, keyReserve) {
        this.afDB.database.ref(place + '/users/' + userId + '/availableReserves/' + keyReserve).remove()
            .catch(function (err) {
            console.log(err);
        });
    };
    geofireService.prototype.deleteReserveFromAvailableReserves = function (place, userId, keyPush) {
        this.afDB.database.ref(place + '/users/' + userId + '/availableReserves/' + keyPush).remove();
    };
    geofireService.prototype.deleteUserGeofireDest = function (userId) {
        this.afDB.database.ref('geofireDest/' + userId).remove().then(function () {
            console.log("succesfully removed");
        }).catch(function (error) {
            console.log(error);
        });
    };
    geofireService.prototype.deleteUserGeofireOr = function (userId) {
        this.afDB.database.ref('geofireOr/' + userId).remove().then(function () {
            console.log("succesfully removed");
        }).catch(function (error) {
            console.log(error);
        });
    };
    geofireService.prototype.deleteGeofireOr = function () {
        this.afDB.database.ref('geofireOr/').remove().then(function () {
            console.log("succesfully removed");
        }).catch(function (error) {
            console.log(error);
        });
    };
    geofireService.prototype.deleteGeofireDest = function () {
        this.afDB.database.ref('geofireDest/').remove().then(function () {
            console.log("succesfully removed");
        }).catch(function (error) {
            console.log(error);
        });
    };
    geofireService.prototype.deleteDriverListRide = function (userId, driverId) {
        this.afDB.database.ref('/users/' + userId + '/trips/driversListRide/' + driverId).remove();
    };
    geofireService.prototype.deleteDriverListRideTotal = function (userId) {
        this.afDB.database.ref('/users/' + userId + '/trips/driversListRide/').remove();
    };
    geofireService.prototype.getLocationPlace = function (place) {
        return this.afDB.object('allPlaces/' + place).valueChanges();
    };
    // set a new node on firebase which is the location of the university
    geofireService.prototype.setLocationPlace = function (place, key, lat, lng) {
        this.dbRef = this.afDB.database.ref(place + '/geofirePlace/');
        this.geoFire = new __WEBPACK_IMPORTED_MODULE_2_geofire__(this.dbRef);
        this.geoFire.set(key, [lat, lng]).then(function () {
            console.log('location ' + place + ' updated');
        }, function (error) {
            console.log('error: ' + error);
        });
    };
    geofireService.prototype.deleteGeofirePlace = function () {
        this.afDB.database.ref('geofirePlace/').remove().then(function () {
            console.log('geofirePlace node has been deleted');
        });
    };
    geofireService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_fire_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_4__reserves_service__["a" /* reservesService */], __WEBPACK_IMPORTED_MODULE_5__signup_services__["a" /* SignUpService */]])
    ], geofireService);
    return geofireService;
}());

//# sourceMappingURL=geoFire.service.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return instancesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__ = __webpack_require__(24);
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


var instancesService = /** @class */ (function () {
    function instancesService(afDB) {
        this.afDB = afDB;
    }
    instancesService.prototype.showOnDriverInstance = function (driverId, user) {
        this.afDB.database.ref('/drivers/' + driverId + '/trips/usersListRide/' + user).update({
            showDriver: true
        }, function (error) {
            if (error) {
                console.log(error);
            }
            else {
                console.log("everything successful");
            }
        });
    };
    instancesService.prototype.isVerified = function (place, userId) {
        this.afDB.database.ref(place + '/users/' + userId).update({
            verifiedPerson: true
        });
    };
    instancesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_fire_database__["AngularFireDatabase"]])
    ], instancesService);
    return instancesService;
}());

//# sourceMappingURL=instances.service.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return authenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
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
    function authenticationService(angularFireAuth, afDB) {
        this.angularFireAuth = angularFireAuth;
        this.afDB = afDB;
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
    authenticationService.prototype.deleteResendCode = function (place, userId) {
        this.afDB.database.ref(place + '/users/' + userId + '/resendVerificationCode/').remove();
    };
    authenticationService.prototype.sendVerificationCodeToFirebase = function (place, userId, code) {
        this.afDB.database.ref(place + '/users/' + userId).update({
            verificationCode: code
        });
    };
    authenticationService.prototype.deleteVerificationCode = function (place, userId) {
        this.afDB.database.ref(place + '/users/' + userId + '/verificationCode/').remove();
    };
    authenticationService.prototype.deleteverificationCodeApproval = function (place, userId) {
        this.afDB.database.ref(place + '/users/' + userId + '/verificationCodeApproval/').remove();
    };
    authenticationService.prototype.resendVerificationCode = function (place, userId) {
        this.afDB.database.ref(place + '/users/' + userId).update({
            resendVerificationCode: true
        });
    };
    authenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"]])
    ], authenticationService);
    return authenticationService;
}());

//# sourceMappingURL=userauthentication.service.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TripsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(89);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TripsService = /** @class */ (function () {
    function TripsService(afDB, alertCtrl) {
        this.afDB = afDB;
        this.alertCtrl = alertCtrl;
    }
    TripsService.prototype.getOnTrip = function (place, userUid) {
        return this.afDB.object(place + '/users/' + userUid + '/onTrip/').valueChanges();
    };
    TripsService.prototype.getMyReservesUser = function (place, userUid) {
        // 
        return this.afDB.list(place + '/users/' + userUid + '/myReserves').valueChanges();
    };
    TripsService.prototype.getKeyTrip = function (place, userUid) {
        return this.afDB.object(place + '/users/' + userUid + '/keyTrip').valueChanges();
    };
    TripsService.prototype.getTripState = function (place, reserveId, driverId) {
        return this.afDB.object(place + '/tripsState/' + driverId + '/' + reserveId + '/').valueChanges();
    };
    TripsService.prototype.getReserves = function (userUid) {
        // get reserves from my driver (wrong)
        return this.afDB.list('/reserves/' + userUid).valueChanges();
    };
    // public getMyReserves(place, reserveId,driverId){
    TripsService.prototype.getTrip = function (place, reserveId, driverId) {
        //get reserves inside trip's node
        return this.afDB.object(place + '/trips/' + driverId + '/' + reserveId + '/').valueChanges();
    };
    TripsService.prototype.getPendingUsers = function (place, keyTrip, driverId) {
        //get trip in Trip's node
        return this.afDB.list(place + '/trips/' + driverId + '/' + keyTrip + '/pendingUsers').valueChanges();
    };
    TripsService.prototype.getPickedUpUsers = function (place, keyTrip, driverId) {
        //get trip in Trip's node
        return this.afDB.list(place + '/trips/' + driverId + '/' + keyTrip + '/pickedUpUsers').valueChanges();
    };
    TripsService.prototype.getCancelUsers = function (place, keyTrip, driverId) {
        return this.afDB.list(place + '/tripsState/' + driverId + '/' + keyTrip + '/cancelUsers').valueChanges();
    };
    TripsService.prototype.getLastMinuteTripsDEMO = function (place, driverId, keyTrip) {
        return this.afDB.object(place + '/trips/' + driverId + '/' + keyTrip).valueChanges();
    };
    TripsService.prototype.saveKeyTrip = function (place, userUid, keyTrip, driverId) {
        this.afDB.database.ref(place + '/users/' + userUid + '/keyTrip').update({
            keyTrip: keyTrip,
            driverId: driverId
        });
    };
    TripsService.prototype.updateTripState = function (place, userUid, keyTrip, driverId) {
        this.afDB.database.ref(place + '/tripsState/' + driverId + '/' + keyTrip + '/UserCancelation/' + userUid).update({
            userUid: userUid
        });
    };
    TripsService.prototype.pushItsMePendingUsers = function (place, userUid, keyTrip, driverId) {
        this.afDB.database.ref(place + '/trips/' + driverId + '/' + keyTrip + '/pendingUsers/' + userUid).update({
            itsMe: true
        });
    };
    TripsService.prototype.pushItsMePickedUpUsers = function (place, userUid, keyTrip, driverId) {
        this.afDB.database.ref(place + '/trips/' + driverId + '/' + keyTrip + '/pickedUpUsers/' + userUid).update({
            itsMe: true
        });
    };
    TripsService.prototype.saveTripOnRecords = function (place, userUid, trip) {
        //save trip in recordTrips
        this.afDB.database.ref(place + '/users/' + userUid + '/recordTrips/' + trip.keyTrip).update(trip);
    };
    TripsService.prototype.eliminateTrip = function (place, userUid) {
        //save trip in recordTrips
        this.afDB.database.ref(place + '/users/' + userUid + '/trip/').remove();
    };
    TripsService.prototype.joinTrip = function (place, keyTrip, driverId, userId, origin, destination, name, lastname, phone, verifiedPerson, distance) {
        this.afDB.database.ref(place + '/trips/' + driverId + '/' + keyTrip + '/lastMinuteUsers/' + userId).update({
            origin: origin,
            destination: destination,
            name: name,
            lastname: lastname,
            phone: phone,
            userId: userId,
            verifiedPerson: verifiedPerson,
            distance: distance
        });
    };
    TripsService.prototype.getOutFromLMU = function (place, keyTrip, driverId, userId) {
        var _this = this;
        this.afDB.database.ref(place + '/trips/' + driverId + '/' + keyTrip + '/lastMinuteUsers/' + userId).remove().then(function () {
            var alert = _this.alertCtrl.create({
                title: 'Escoge otro viaje',
                buttons: ['OK']
            });
            alert.present();
        });
    };
    TripsService.prototype.checkIfAcceptedInLMU = function (place, driverId, keyTrip, userId) {
        return this.afDB.object(place + '/trips/' + driverId + '/' + keyTrip + '/lastMinuteUsers/' + userId).valueChanges();
    };
    TripsService.prototype.cancelTrip = function (place, userUid, driverUid, tripId) {
        //eliminate user from reserve in reserve's node        
        this.afDB.database.ref(place + '/trips/' + driverUid + '/' + tripId + '/pendingUsers/' + userUid).remove();
        //eliminate keyTrip from user's node to eliminate access to that reserve
    };
    TripsService.prototype.eliminateKeyUser = function (place, userUid, reserveId) {
        //eliminate keyTrip from user's node to eliminate access to that reserve
        this.afDB.database.ref(place + '/users/' + userUid + '/myReserves/' + reserveId).remove();
    };
    TripsService.prototype.eliminateKeyTrip = function (place, userUid) {
        //eliminate keyTrip from user's node to eliminate access to that reserve
        this.afDB.database.ref(place + '/users/' + userUid + '/keyTrip/').remove();
    };
    TripsService.prototype.eliminateAvailableReserves = function (place, userUid) {
        //eliminate keyTrip from user's node to eliminate access to that reserve
        this.afDB.database.ref(place + '/users/' + userUid + '/availableReserves/').remove();
    };
    TripsService.prototype.setClearToDeleteDriver = function (place, driverUid, keyTrip) {
        //eliminate keyTrip from user's node to eliminate access to that reserve
        this.afDB.database.ref(place + '/trips/' + driverUid + '/' + keyTrip).update({
            clearToDeleteDriver: true
        });
    };
    TripsService.prototype.eliminateAvailableUsers = function (place, userUid) {
        //eliminate keyTrip from user's node to eliminate access to that reserve
        this.afDB.database.ref(place + '/users/' + userUid + '/availableReserves/').remove();
    };
    TripsService.prototype.eraseReserve = function (place, userUid, reserveId) {
        //eliminate keyTrip from user's node to eliminate access to that reserve
        this.afDB.database.ref(place + '/users/' + userUid + '/myReserves/' + reserveId).remove();
    };
    TripsService.prototype.eliminatingOnTrip = function (place, userUid) {
        //eliminate keyTrip from tripsReserve node 
        this.afDB.database.ref(place + '/users/' + userUid + '/onTrip').remove();
    };
    TripsService.prototype.eliminatingSaveTrip = function (place, userUid) {
        this.afDB.database.ref(place + '/users/' + userUid + '/saveTrip').remove();
    };
    TripsService.prototype.eliminatingCancelTrip = function (place, userUid) {
        this.afDB.database.ref(place + '/users/' + userUid + '/cancelTrip').remove();
    };
    TripsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_fire_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */]])
    ], TripsService);
    return TripsService;
}());

//# sourceMappingURL=trips.service.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sendFeedbackService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__ = __webpack_require__(24);
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


var sendFeedbackService = /** @class */ (function () {
    function sendFeedbackService(afDB) {
        this.afDB = afDB;
    }
    sendFeedbackService.prototype.sendFeedback = function (place, title, info, name, lastname, number, userId) {
        this.afDB.database.ref(place + '/feedback/' + title + '/users/' + userId).update({
            info: info,
            name: name,
            lastname: lastname,
            number: number
        });
    };
    sendFeedbackService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_fire_database__["AngularFireDatabase"]])
    ], sendFeedbackService);
    return sendFeedbackService;
}());

//# sourceMappingURL=sendFeedback.service.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MetricsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MetricsService = /** @class */ (function () {
    function MetricsService(afDB, AngularFireAuth) {
        this.afDB = afDB;
        this.AngularFireAuth = AngularFireAuth;
    }
    MetricsService.prototype.createdReserves = function (place, userUid, time, dest, or) {
        //send every reserve that were created
        this.afDB.database.ref('data/timesUserGoListride/' + place).push({
            time: time,
            dest: dest,
            or: or,
            userId: userUid
        });
    };
    MetricsService.prototype.cancelReserves = function (place, userId, trip) {
        //send every reserve that were created
        this.afDB.database.ref('data/userCancelTrip/' + place).push({
            trip: trip,
            userId: userId
        });
    };
    MetricsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_fire_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"]])
    ], MetricsService);
    return MetricsService;
}());

//# sourceMappingURL=metrics.service.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return chatsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var chatsService = /** @class */ (function () {
    function chatsService(afDB, AngularFireAuth) {
        this.afDB = afDB;
        this.AngularFireAuth = AngularFireAuth;
    }
    chatsService.prototype.getChatsFromReserve = function (place, reserveKey, driverUid) {
        //trae todos los chats del usuario
        return this.afDB.list(place + '/reserves/' + driverUid + '/' + reserveKey + '/chat/messages/').valueChanges();
    };
    chatsService.prototype.getChatsFromTrip = function (place, reserveKey, driverUid) {
        //trae todos los chats del usuario
        return this.afDB.list(place + '/trips/' + driverUid + '/' + reserveKey + '/chat/messages/').valueChanges();
    };
    chatsService.prototype.pushMessageUserInReserve = function (place, reserveKey, driverUid, userUid, message, name) {
        //envía todos los chats del usuario
        this.afDB.database.ref(place + '/reserves/' + driverUid + '/' + reserveKey + '/chat/messages/').push({
            message: message,
            uid: userUid,
            name: name
        });
    };
    chatsService.prototype.pushMessageUserInTrip = function (place, reserveKey, driverUid, userUid, message, name) {
        //envía todos los chats del usuario
        this.afDB.database.ref(place + '/trips/' + driverUid + '/' + reserveKey + '/chat/messages/').push({
            message: message,
            uid: userUid,
            name: name
        });
    };
    chatsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_fire_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"]])
    ], chatsService);
    return chatsService;
}());

//# sourceMappingURL=chat.service.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return noteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var noteService = /** @class */ (function () {
    function noteService(afDB, AngularFireAuth) {
        this.afDB = afDB;
        this.AngularFireAuth = AngularFireAuth;
    }
    noteService.prototype.setNote = function (user, note, place) {
        __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref(place + '/users/' + user + '/trips').update({
            note: note
        });
    };
    noteService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_fire_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"]])
    ], noteService);
    return noteService;
}());

//# sourceMappingURL=note.service.js.map

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(482);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 482:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(625);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_google_maps__ = __webpack_require__(626);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_fire__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_fire_database__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_fire_auth__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_userauthentication_service__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_firebase__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_geolocation__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_sendCoords_service__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_sendUsers_service__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_note_service__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_call_number__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_geoFire_service__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_common__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_instances_service__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_signup_services__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_native_geocoder_ngx__ = __webpack_require__(629);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_email_composer_ngx__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_sendFeedback_service__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_chat_service__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_reserves_service__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_trips_service__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_environment_service__ = __webpack_require__(630);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_location_accuracy__ = __webpack_require__(631);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__services_metrics_service__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_native_camera___ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ionic_native_fcm__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__ionic_native_clipboard___ = __webpack_require__(359);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























// import { IonicStorageModule } from '@ionic/storage';









var firebaseConfig = {
    apiKey: "AIzaSyB7Py2pOZEUJD2Ar34a-8z-rReiDtsikxw",
    authDomain: "waypool-511be.firebaseapp.com",
    databaseURL: "https://waypool-511be.firebaseio.com",
    projectId: "waypool-511be",
    storageBucket: "waypool-511be.appspot.com",
    messagingSenderId: "904521954579",
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/p-canceltrip/canceltrip.module#CanceltripPageModule', name: 'CanceltripPage', segment: 'canceltrip', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/p-chatting/chatting.module#ChattingPageModule', name: 'ChattingPage', segment: 'chatting', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/p-confirm-reservation/confirm-reservation.module#ConfirmReservationPageModule', name: 'ConfirmReservationPage', segment: 'confirm-reservation', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/p-confirmnote/confirmnote.module#ConfirmNotePageModule', name: 'ConfirmNotePage', segment: 'confirmnote', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/p-confirmpopup/confirmpopup.module#ConfirmpopupPageModule', name: 'ConfirmpopupPage', segment: 'confirmpopup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/p-confirmtrip/confirmtrip.module#ConfirmtripPageModule', name: 'ConfirmtripPage', segment: 'confirmtrip', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/p-help/help.module#HelpPageModule', name: 'HelpPage', segment: 'help', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/p-listride/listride.module#ListridePageModule', name: 'ListridePage', segment: 'listride', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/p-login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/p-more/more.module#MorePageModule', name: 'MorePage', segment: 'more', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/p-ratetrip/ratetrip.module#RatetripPageModule', name: 'RatetripPage', segment: 'ratetrip', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/p-profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/p-public-profile/public-profile.module#PublicProfilePageModule', name: 'PublicProfilePage', segment: 'public-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/p-reserveinfo/reserveinfo.module#ConfirmreservationPageModule', name: 'ReserveinfoPage', segment: 'reserveinfo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/p-support/support.module#SupportPageModule', name: 'SupportPage', segment: 'support', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/p-tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/p-terms/terms.module#TermsPageModule', name: 'TermsPage', segment: 'terms', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/p-verification-images/verification-images.module#VerificationImagesPageModule', name: 'VerificationImagesPage', segment: 'verification-images', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/p-verification-number/verification-number.module#VerificationNumberPageModule', name: 'VerificationNumberPage', segment: 'verification-number', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/p-walkthrough/walkthrough.module#WalkthroughPageModule', name: 'WalkthroughPage', segment: 'walkthrough', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/p-wallet/wallet.module#WalletPageModule', name: 'WalletPage', segment: 'wallet', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/p-reservetrip/reservetrip.module#ReservetripPageModule', name: 'ReservetripPage', segment: 'reservetrip', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/p-myride/myride.module#MyridePageModule', name: 'MyridePage', segment: 'myride', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/p-signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/p-findride/findride.module#FindridePassPageModule', name: 'FindridePassPage', segment: 'findride', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_7__angular_fire__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_8__angular_fire_database__["AngularFireDatabaseModule"],
                __WEBPACK_IMPORTED_MODULE_9__angular_fire_auth__["AngularFireAuthModule"],
                __WEBPACK_IMPORTED_MODULE_18__angular_common__["b" /* CommonModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_google_maps__["a" /* GoogleMaps */],
                __WEBPACK_IMPORTED_MODULE_20__services_signup_services__["a" /* SignUpService */],
                __WEBPACK_IMPORTED_MODULE_10__services_userauthentication_service__["a" /* authenticationService */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_firebase__["a" /* Firebase */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_13__services_sendCoords_service__["a" /* sendCoordsService */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_email_composer_ngx__["a" /* EmailComposer */],
                __WEBPACK_IMPORTED_MODULE_14__services_sendUsers_service__["a" /* sendUsersService */],
                __WEBPACK_IMPORTED_MODULE_15__services_note_service__["a" /* noteService */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_call_number__["a" /* CallNumber */],
                __WEBPACK_IMPORTED_MODULE_17__services_geoFire_service__["a" /* geofireService */],
                __WEBPACK_IMPORTED_MODULE_19__services_instances_service__["a" /* instancesService */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_native_geocoder_ngx__["a" /* NativeGeocoder */],
                __WEBPACK_IMPORTED_MODULE_23__services_sendFeedback_service__["a" /* sendFeedbackService */],
                __WEBPACK_IMPORTED_MODULE_24__services_chat_service__["a" /* chatsService */],
                __WEBPACK_IMPORTED_MODULE_25__services_reserves_service__["a" /* reservesService */],
                __WEBPACK_IMPORTED_MODULE_26__services_trips_service__["a" /* TripsService */],
                __WEBPACK_IMPORTED_MODULE_27__services_environment_service__["a" /* environmentService */],
                __WEBPACK_IMPORTED_MODULE_28__ionic_native_location_accuracy__["a" /* LocationAccuracy */],
                __WEBPACK_IMPORTED_MODULE_29__services_metrics_service__["a" /* MetricsService */],
                __WEBPACK_IMPORTED_MODULE_30__ionic_native_camera___["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_31__ionic_native_fcm__["a" /* FCM */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_firebase__["a" /* Firebase */],
                __WEBPACK_IMPORTED_MODULE_32__ionic_native_clipboard___["a" /* Clipboard */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 625:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_fcm__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_firebase__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = /** @class */ (function () {
    function MyApp(alertCtrl, statusBar, splashScreen, geolocation, platform, fcm, toastController, firebase) {
        var _this = this;
        this.alertCtrl = alertCtrl;
        this.geolocation = geolocation;
        this.platform = platform;
        this.fcm = fcm;
        this.toastController = toastController;
        this.firebase = firebase;
        this.rootPage = 'LoginPage';
        this.pages = [];
        this.pages = [
            { title: 'Mis viajes', component: 'ReservetripPage', icon: 'md-paper' },
            { title: 'Billetera', component: 'WalletPage', icon: 'card' },
            { title: 'Mi perfil', component: 'MorePage', icon: 'person' },
            { title: 'Soporte', component: 'HelpPage', icon: 'help' },
            { title: 'Instrucciones', component: 'WalkthroughPage', icon: 'alert' },
        ];
        var firebaseConfig = {
            apiKey: "AIzaSyB7Py2pOZEUJD2Ar34a-8z-rReiDtsikxw",
            authDomain: "waypool-511be.firebaseapp.com",
            databaseURL: "https://waypool-511be.firebaseio.com",
            projectId: "waypool-511be",
            storageBucket: "waypool-511be.appspot.com",
            messagingSenderId: "904521954579",
        };
        __WEBPACK_IMPORTED_MODULE_4_firebase__["initializeApp"](firebaseConfig);
        statusBar.styleDefault();
        splashScreen.hide();
        this.geolocation.getCurrentPosition({ enableHighAccuracy: true }).then(function () {
            console.log('location catched');
        }).catch(function (error) {
            console.log('this is the geolocation error: ' + error);
        });
        platform.ready().then(function () {
            console.log('aqui es notificaciíon nueva');
            _this.fcm.onNotification().subscribe(function (data) {
                if (data.wasTapped) {
                    console.log('app in background');
                    console.log(JSON.stringify(data));
                }
                else {
                    console.log(JSON.stringify(data));
                    var toast = _this.toastController.create({
                        message: data.body,
                        duration: 3000
                    });
                    toast.present();
                }
            });
            // this.firebase.onNotificationOpen().subscribe((response)=>{
            //   if(response.tap){
            //     console.log('received in background');
            //   }else{
            //     const toast = this.toastController.create({
            //             message: response.body,
            //             duration: 3000
            //           })
            //           toast.present();
            //   }
            // });
        });
        setTimeout(function () {
            __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref('.info/connected').on('value', function (snap) {
                if (snap.val() === false) {
                    _this.alertInternet = _this.alertCtrl.create({
                        title: '¡Oops!',
                        subTitle: 'Ocurrió un error conectándote a Waypool. Por favor verifica tu conexión a internet',
                    });
                    _this.alertInternet.present();
                }
                else if (snap.val() === true) {
                    if (_this.alertInternet) {
                        _this.alertInternet.dismiss();
                    }
                    else {
                    }
                }
            });
        }, 2500);
        __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"]().onAuthStateChanged(function (user) {
            if (user) {
                if (user.emailVerified == false) {
                    _this.rootPage = 'LoginPage';
                }
                else {
                    _this.rootPage = 'FindridePassPage';
                }
            }
            else {
                _this.rootPage = 'LoginPage';
            }
        });
    }
    MyApp.prototype.openPage = function (page) {
        this.nav.push(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/WAYPOOL_OFICIAL/waypool_costumer/src/app/app.html"*/'<ion-menu [content]="content">\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>Menu</ion-title>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content>\n      <ion-list>\n        <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n          <ion-icon style="margin-right: 10px; font-size: 26px;" name={{p.icon}}></ion-icon>      \n\n          {{p.title}}                \n        </button>\n      \n      </ion-list>\n    </ion-content>\n  </ion-menu>\n  \n  <ion-nav  #content [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/WAYPOOL_OFICIAL/waypool_costumer/src/app/app.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_fcm__["a" /* FCM */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_firebase__["a" /* Firebase */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 630:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environmentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var environmentService = /** @class */ (function () {
    function environmentService() {
    }
    environmentService.prototype.appInitialization = function (configData) {
        __WEBPACK_IMPORTED_MODULE_1_firebase__["initializeApp"](configData);
    };
    environmentService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], environmentService);
    return environmentService;
}());

//# sourceMappingURL=environment.service.js.map

/***/ })

},[361]);
//# sourceMappingURL=main.js.map