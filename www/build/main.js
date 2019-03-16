webpackJsonp([14],{

/***/ 194:
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
webpackEmptyAsyncContext.id = 194;

/***/ }),

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/confirmnote/confirmnote.module": [
		510,
		3
	],
	"../pages/confirmpopup/confirmpopup.module": [
		511,
		2
	],
	"../pages/findride/findride.module": [
		523,
		13
	],
	"../pages/help/help.module": [
		512,
		12
	],
	"../pages/listride/listride.module": [
		514,
		1
	],
	"../pages/login/login.module": [
		513,
		11
	],
	"../pages/more/more.module": [
		515,
		10
	],
	"../pages/myride/myride.module": [
		516,
		9
	],
	"../pages/profile/profile.module": [
		517,
		8
	],
	"../pages/signup/signup.module": [
		518,
		0
	],
	"../pages/support/support.module": [
		519,
		7
	],
	"../pages/tabs/tabs.module": [
		520,
		6
	],
	"../pages/terms/terms.module": [
		521,
		5
	],
	"../pages/wallet/wallet.module": [
		522,
		4
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
webpackAsyncContext.id = 235;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__ = __webpack_require__(42);
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
        this.afDB.database.ref('users/' + user.userId).update(user);
    };
    SignUpService.prototype.saveDriver = function (user) {
        //erase this one, it just for testing
        this.afDB.database.ref('drivers/' + user.userId).set(user);
    };
    SignUpService.prototype.getDrivers = function () {
        return this.afDB.list('/drivers').valueChanges();
    };
    SignUpService.prototype.getMyInfo = function (userId) {
        return this.afDB.object('users/' + userId).valueChanges();
    };
    SignUpService.prototype.getMyInfoForProfile = function (userId) {
        return this.afDB.object('users/' + userId).valueChanges();
    };
    SignUpService.prototype.saveInfoProfile = function (userUid, phone) {
        this.afDB.database.ref('/users/' + userUid).update({
            phone: phone
        });
    };
    SignUpService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_fire_database__["AngularFireDatabase"]])
    ], SignUpService);
    return SignUpService;
}());

//# sourceMappingURL=signup.services.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return authenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(71);
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

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sendCoordsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__ = __webpack_require__(42);
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
    sendCoordsService.prototype.getOrigin = function (user) {
        return this.afDB.list('/drivers/' + user + '/trips/origin').valueChanges();
    };
    sendCoordsService.prototype.getOriginUser = function (user) {
        return this.afDB.list('/users/' + user + '/trips/origin').valueChanges();
    };
    sendCoordsService.prototype.getDestinationUser = function (user) {
        return this.afDB.list('/users/' + user + '/trips/destination').valueChanges();
    };
    sendCoordsService.prototype.pushCoordinatesUsers = function (user, dest, or) {
        this.afDB.database.ref('/users/' + user + '/trips').update({
            origin: or,
            destination: dest,
        });
        this.afDB.database.ref('/users/' + user + '/trips/recordTrips').push({
            origin: or,
            destination: dest,
        });
    };
    sendCoordsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_fire_database__["AngularFireDatabase"]])
    ], sendCoordsService);
    return sendCoordsService;
}());

//# sourceMappingURL=sendCoords.service.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sendUsersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(71);
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
    sendUsersService.prototype.cancelTripUser = function (DriverUserId, userUid) {
        //        
        this.afDB.database.ref('/drivers/' + DriverUserId + '/trips/pickingUsers/' + userUid + '/').remove();
        this.afDB.database.ref('/users/' + userUid + '/trips/pickingUsers').remove();
        this.afDB.database.ref('users/' + userUid + '/trips/onTrip').remove();
        this.afDB.database.ref('users/' + userUid + '/trips/driverListRide').remove();
    };
    sendUsersService.prototype.getRecordTrips = function (userUid) {
        return this.afDB.list('/users/' + userUid + '/recordTrips/').valueChanges();
    };
    sendUsersService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_fire_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"]])
    ], sendUsersService);
    return sendUsersService;
}());

//# sourceMappingURL=sendUsers.service.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return geofireService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_geofire__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_geofire___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_geofire__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__);
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
    function geofireService(afDB, AngularFireAuth) {
        this.afDB = afDB;
        this.AngularFireAuth = AngularFireAuth;
    }
    geofireService.prototype.setLocationGeofireDest = function (key, lat, lng, userId) {
        this.dbRef = this.afDB.database.ref('geofireDest/');
        this.geoFire = new __WEBPACK_IMPORTED_MODULE_2_geofire__(this.dbRef);
        // this.afDB.list('/users/' + key).valueChanges().subscribe(user=>{
        // this.user = user;
        // if(!this.user.onTrip == true){
        this.geoFire.set(key, [lat, lng]).then(function () {
            console.log('location updated');
        }, function (error) {
            console.log('error: ' + error);
        });
        this.deleteUserGeofireOr(key);
        this.afDB.database.ref('users/' + userId).update({
            geofireDest: true,
            geofireOr: false
        });
        // }
        // })
    };
    geofireService.prototype.setLocationGeofireOr = function (key, lat, lng, userId) {
        this.dbRef = this.afDB.database.ref('geofireOr/');
        this.geoFire = new __WEBPACK_IMPORTED_MODULE_2_geofire__(this.dbRef);
        // this.afDB.list('/users/' + key).valueChanges().subscribe(user=>{
        // this.user = user;
        // if(!this.user.onTrip == true){
        this.geoFire.set(key, [lat, lng]).then(function () {
            console.log('location updated');
        }, function (error) {
            console.log('error: ' + error);
        });
        this.deleteUserGeofireDest(key);
        // }
        this.afDB.database.ref('users/' + userId).update({
            geofireOr: true,
            geofireDest: false
        });
        // })
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
    geofireService.prototype.showOnDriver = function (driverId, userId, origin, destination, name, lastname, phone, note) {
        this.afDB.database.ref('/drivers/' + driverId + '/trips/usersListRide/' + userId).update({
            origin: origin,
            destination: destination,
            name: name,
            lastname: lastname,
            phone: phone,
            userId: userId,
            note: note,
        });
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
    geofireService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_fire_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["AngularFireAuth"]])
    ], geofireService);
    return geofireService;
}());

//# sourceMappingURL=geoFire.service.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return noteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(298);
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
    noteService.prototype.setNote = function (user, note) {
        __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref('users/' + user + '/trips').update({
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

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return instancesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__ = __webpack_require__(42);
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
    instancesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_fire_database__["AngularFireDatabase"]])
    ], instancesService);
    return instancesService;
}());

//# sourceMappingURL=instances.service.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(434);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_google_maps__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_fire__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_fire_database__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_fire_auth__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_userauthentication_service__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_firebase__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_geolocation__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_sendCoords_service__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_sendUsers_service__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_note_service__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_call_number__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_geoFire_service__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_common__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_instances_service__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_signup_services__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_native_geocoder_ngx__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_email_composer_ngx__ = __webpack_require__(301);
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
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/confirmnote/confirmnote.module#ConfirmNotePageModule', name: 'ConfirmNotePage', segment: 'confirmnote', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/confirmpopup/confirmpopup.module#ConfirmpopupPageModule', name: 'ConfirmpopupPage', segment: 'confirmpopup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/help/help.module#HelpPageModule', name: 'HelpPage', segment: 'help', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/listride/listride.module#ListridePageModule', name: 'ListridePage', segment: 'listride', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/more/more.module#MorePageModule', name: 'MorePage', segment: 'more', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/myride/myride.module#MyridePageModule', name: 'MyridePage', segment: 'myride', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/support/support.module#SupportPageModule', name: 'SupportPage', segment: 'support', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/terms/terms.module#TermsPageModule', name: 'TermsPage', segment: 'terms', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/wallet/wallet.module#WalletPageModule', name: 'WalletPage', segment: 'wallet', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/findride/findride.module#FindridePageModule', name: 'FindridePage', segment: 'findride', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_7__angular_fire__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_8__angular_fire_database__["AngularFireDatabaseModule"],
                __WEBPACK_IMPORTED_MODULE_9__angular_fire_auth__["AngularFireAuthModule"],
                __WEBPACK_IMPORTED_MODULE_18__angular_common__["b" /* CommonModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] },
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
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(290);
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
        this.rootPage = 'LoginPage';
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Users\Daniel\Documents\WaypoolApp\merge1\waypool_costumer\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"D:\Users\Daniel\Documents\WaypoolApp\merge1\waypool_costumer\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[302]);
//# sourceMappingURL=main.js.map