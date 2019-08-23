webpackJsonp([26],{

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(88);
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
    SignUpService.prototype.saveUser = function (user, university) {
        this.afDB.database.ref(university + '/users/' + user.userId).update(user);
        this.afDB.database.ref(university + '/drivers/' + user.userId).update(user);
    };
    SignUpService.prototype.getUniversities = function () {
        return this.afDB.list('universities/').valueChanges();
    };
    SignUpService.prototype.getInfoUniversity = function (university) {
        return this.afDB.object('/universities/' + university).valueChanges();
    };
    SignUpService.prototype.saveDriver = function (user) {
        //erase this one, it just for testing
        this.afDB.database.ref('drivers/' + user.userId).set(user);
    };
    SignUpService.prototype.pushDocsCarne = function (university, userId) {
        this.afDB.database.ref(university + '/drivers/' + userId + '/documents').update({
            carne: false
        });
        this.afDB.database.ref(university + '/users/' + userId + '/documents').update({
            carne: false
        });
    };
    SignUpService.prototype.pushDocsId = function (university, userId) {
        this.afDB.database.ref(university + '/drivers/' + userId + '/documents').update({
            id: false
        });
        this.afDB.database.ref(university + '/users/' + userId + '/documents').update({
            id: false
        });
    };
    SignUpService.prototype.getDrivers = function () {
        return this.afDB.list('/drivers').valueChanges();
    };
    SignUpService.prototype.getMyInfo = function (userId, university) {
        return this.afDB.object(university + '/users/' + userId).valueChanges();
    };
    SignUpService.prototype.getInfoDriver = function (userDriverId) {
        return this.afDB.object('drivers/' + userDriverId).valueChanges();
    };
    SignUpService.prototype.deleteAccount = function (university, userId) {
        this.afDB.database.ref(university + '/users/' + userId).remove();
        this.afDB.database.ref(university + '/drivers/' + userId).remove();
    };
    SignUpService.prototype.getMyInfoForProfile = function (university, userId) {
        return this.afDB.object(university + '/users/' + userId).valueChanges();
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
    SignUpService.prototype.saveInfoProfileUrl = function (university, userUid, url) {
        //permite configurar la información del perfil
        this.afDB.database.ref(university + '/users/' + userUid).update({
            url: url
        });
    };
    SignUpService.prototype.saveInfoProfileAbout = function (university, userUid, about) {
        //permite configurar la información del perfil
        this.afDB.database.ref(university + '/users/' + userUid).update({
            about: about
        });
    };
    SignUpService.prototype.saveInfoProfilePhone = function (university, userUid, phone) {
        //permite configurar la información del perfil
        this.afDB.database.ref(university + '/users/' + userUid).update({
            phone: phone
        });
    };
    SignUpService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_fire_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ToastController */]])
    ], SignUpService);
    return SignUpService;
}());

//# sourceMappingURL=signup.services.js.map

/***/ }),

/***/ 232:
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
webpackEmptyAsyncContext.id = 232;

/***/ }),

/***/ 273:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/canceltrip/canceltrip.module": [
		631,
		24
	],
	"../pages/chatting/chatting.module": [
		632,
		23
	],
	"../pages/confirm-reservation/confirm-reservation.module": [
		633,
		22
	],
	"../pages/confirm-university/confirm-university.module": [
		634,
		25
	],
	"../pages/confirmnote/confirmnote.module": [
		635,
		21
	],
	"../pages/confirmpopup/confirmpopup.module": [
		636,
		20
	],
	"../pages/confirmreserve/confirmreserve.module": [
		637,
		1
	],
	"../pages/confirmtrip/confirmtrip.module": [
		638,
		19
	],
	"../pages/findride/findride.module": [
		656,
		18
	],
	"../pages/help/help.module": [
		639,
		17
	],
	"../pages/listride/listride.module": [
		640,
		16
	],
	"../pages/login/login.module": [
		641,
		15
	],
	"../pages/more/more.module": [
		642,
		14
	],
	"../pages/myride/myride.module": [
		654,
		13
	],
	"../pages/profile/profile.module": [
		643,
		12
	],
	"../pages/public-profile/public-profile.module": [
		644,
		11
	],
	"../pages/ratetrip/ratetrip.module": [
		645,
		10
	],
	"../pages/reserveinfo/reserveinfo.module": [
		646,
		9
	],
	"../pages/reservetrip/reservetrip.module": [
		647,
		8
	],
	"../pages/signup/signup.module": [
		655,
		0
	],
	"../pages/support/support.module": [
		648,
		7
	],
	"../pages/tabs/tabs.module": [
		649,
		6
	],
	"../pages/terms/terms.module": [
		650,
		5
	],
	"../pages/verification-images/verification-images.module": [
		651,
		2
	],
	"../pages/verification-number/verification-number.module": [
		652,
		4
	],
	"../pages/wallet/wallet.module": [
		653,
		3
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
webpackAsyncContext.id = 273;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 339:
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
    sendCoordsService.prototype.getPendingUsers = function (driverUid, pushKey, university) {
        return this.afDB.list(university + '/reserves/' + driverUid + '/' + pushKey + '/pendingUsers').valueChanges();
    };
    sendCoordsService.prototype.getOrigin = function (user) {
        return this.afDB.list('/drivers/' + user + '/trips/origin').valueChanges();
    };
    sendCoordsService.prototype.getOriginUser = function (university, user) {
        return this.afDB.list(university + '/users/' + user + '/trips/origin').valueChanges();
    };
    sendCoordsService.prototype.getDestinationUser = function (university, user) {
        return this.afDB.list(university + '/users/' + user + '/trips/destination').valueChanges();
    };
    sendCoordsService.prototype.pushCoordinatesUsers = function (user, dest, or) {
        this.afDB.database.ref('/users/' + user + '/trips').update({
            origin: or,
            destination: dest,
        });
    };
    sendCoordsService.prototype.deleteOnTripFinal = function (university, userId) {
        this.afDB.database.ref(university + '/users/' + userId + '/onTripFinal').remove();
    };
    sendCoordsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_fire_database__["AngularFireDatabase"]])
    ], sendCoordsService);
    return sendCoordsService;
}());

//# sourceMappingURL=sendCoords.service.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sendUsersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(66);
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
    sendUsersService.prototype.getRecordTrips = function (university, userUid) {
        return this.afDB.list(university + '/users/' + userUid + '/recordTrips/').valueChanges();
    };
    sendUsersService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_fire_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"]])
    ], sendUsersService);
    return sendUsersService;
}());

//# sourceMappingURL=sendUsers.service.js.map

/***/ }),

/***/ 341:
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
    instancesService.prototype.isVerified = function (university, userId) {
        this.afDB.database.ref(university + '/users/' + userId).update({
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

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return authenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(344);
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
    authenticationService.prototype.deleteResendCode = function (university, userId) {
        this.afDB.database.ref(university + '/users/' + userId + '/resendVerificationCode/').remove();
    };
    authenticationService.prototype.sendVerificationCodeToFirebase = function (university, userId, code) {
        this.afDB.database.ref(university + '/users/' + userId).update({
            verificationCode: code
        });
    };
    authenticationService.prototype.deleteVerificationCode = function (university, userId) {
        this.afDB.database.ref(university + '/users/' + userId + '/verificationCode/').remove();
    };
    authenticationService.prototype.deleteverificationCodeApproval = function (university, userId) {
        this.afDB.database.ref(university + '/users/' + userId + '/verificationCodeApproval/').remove();
    };
    authenticationService.prototype.resendVerificationCode = function (university, userId) {
        this.afDB.database.ref(university + '/users/' + userId).update({
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

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return geofireService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_geofire__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_geofire___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_geofire__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(66);
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
        this.user = userId;
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
    // setLocationGeofireOr( key, lat, lng, userId){
    //     this.dbRef = this.afDB.database.ref('geofireOr/' );
    //     this.geoFire = new GeoFire(this.dbRef); 
    //     // this.afDB.list('/users/' + key).valueChanges().subscribe(user=>{
    //         // this.user = user;
    //         // if(!this.user.onTrip == true){
    //             this.geoFire.set(key, [lat, lng]).then(function(){
    //                 console.log('location updated');
    //                }, function(error){
    //               console.log('error: ' + error)
    //                });
    //         // }
    //         this.afDB.database.ref('users/' + userId).update({
    //             geofireOr: true,
    //             geofireDest: false
    //         })
    //     // })
    // }
    geofireService.prototype.setGeofireOr = function (university, radius, lat, lng, userId) {
        this.dbRef = this.afDB.database.ref(university + '/geofireOr/');
        this.geoFire = new __WEBPACK_IMPORTED_MODULE_2_geofire__(this.dbRef);
        this.geoquery2 = this.geoFire.query({
            center: [lat, lng],
            radius: radius
        });
        this.keyEnteredOr(userId, university);
        this.keyExitedOr(userId, university);
        console.log('geoquery or added');
    };
    //JUAN DAVID: created a sub-node "availableRserves" inside users node, so they are able to read the reserves from their node
    geofireService.prototype.keyEnteredOr = function (userId, university) {
        this.geoquery2.on("key_entered", function (key, location, distance) {
            var _this = this;
            console.log(key);
            this.afDB.database.ref(university + '/users/' + userId + '/availableReserves/' + key).update({
                keyReserve: key
            }).then(function () {
                //get driverId from geofireOr node
                _this.getIdFromGeofireOrNode(university, key).subscribe(function (driver) {
                    _this.driverOnNodeOr = driver;
                    _this.afDB.database.ref(university + '/users/' + userId + '/availableReserves/' + key).update({
                        driverId: _this.driverOnNodeOr.driverId
                    });
                });
            });
        }.bind(this));
    };
    geofireService.prototype.keyExitedOr = function (userId, university) {
        this.geoquery2.on("key_exited", function (key) {
            this.afDB.database.ref(university + '/users/' + userId + '/availableReserves/' + key).remove();
        }.bind(this));
    };
    geofireService.prototype.getIdFromGeofireOrNode = function (university, key) {
        return this.afDB.object(university + '/geofireOr/' + key).valueChanges();
    };
    geofireService.prototype.getIdFromGeofireDestNode = function (university, key) {
        return this.afDB.object(university + '/geofireDest/' + key).valueChanges();
    };
    geofireService.prototype.getIdFromGeofireOrTripNode = function (university, key) {
        return this.afDB.object(university + '/geofireOrTrip/' + key).valueChanges();
    };
    geofireService.prototype.getIdFromGeofireDestTripNode = function (university, key) {
        return this.afDB.object(university + '/geofireDestTrip/' + key).valueChanges();
    };
    geofireService.prototype.setGeofireDest = function (university, radius, lat, lng, userId) {
        this.dbRef = this.afDB.database.ref(university + '/geofireDest/');
        this.geoFire = new __WEBPACK_IMPORTED_MODULE_2_geofire__(this.dbRef);
        this.geoquery1 = this.geoFire.query({
            center: [lat, lng],
            radius: radius
        });
        this.keyEnteredDest(userId, university);
        this.keyExitedDest(userId, university);
        console.log('geoquery dest added');
    };
    geofireService.prototype.keyEnteredDest = function (userId, university) {
        this.geoquery1.on("key_entered", function (key, location, distance) {
            var _this = this;
            console.log(key);
            this.afDB.list(university + '/geofireDest/' + key).valueChanges().subscribe(function (driverOnNode) {
                _this.driverOnNodeDest = driverOnNode;
            });
            this.afDB.database.ref(university + '/users/' + userId + '/availableReserves/' + key).update({
                keyReserve: key
            }).then(function () {
                _this.getIdFromGeofireDestNode(university, key).subscribe(function (driver) {
                    _this.driverOnNodeDest = driver;
                    _this.afDB.database.ref(university + '/users/' + userId + '/availableReserves/' + key).update({
                        driverId: _this.driverOnNodeDest.driverId
                    });
                });
            });
            console.log('keyentered here');
        }.bind(this));
    };
    geofireService.prototype.keyExitedDest = function (userId, university) {
        this.geoquery1.on("key_exited", function (key) {
            this.afDB.database.ref(university + '/users/' + userId + '/availableReserves/' + key).remove();
        }.bind(this));
    };
    geofireService.prototype.setGeofireOrLMU = function (university, radius, lat, lng, userId) {
        this.dbRef = this.afDB.database.ref(university + '/geofireOrTrip/');
        this.geoFire = new __WEBPACK_IMPORTED_MODULE_2_geofire__(this.dbRef);
        this.geoquery2LMU = this.geoFire.query({
            center: [lat, lng],
            radius: radius
        });
        this.keyEnteredOrLMU(userId, university);
        this.keyExitedOrLMU(userId, university);
        console.log('geoquery or added');
    };
    geofireService.prototype.keyEnteredOrLMU = function (userId, university) {
        this.geoquery2LMU.on("key_entered", function (key, location, distance) {
            var _this = this;
            console.log(key);
            this.afDB.database.ref(university + '/users/' + userId + '/availableReserves/' + key).update({
                keyReserve: key,
                LMU: true
            }).then(function () {
                //get driverId from geofireOr node
                _this.getIdFromGeofireOrTripNode(university, key).subscribe(function (driver) {
                    _this.driverOnNodeOr = driver;
                    _this.afDB.database.ref(university + '/users/' + userId + '/availableReserves/' + key).update({
                        driverId: _this.driverOnNodeOr.driverId
                    });
                });
            });
            //  this.afDB.database.ref('/reservesInfoInCaseOfCancelling/'+ this.driverOnNodeOr.keyReserve + '/' + key).push({
            //   userId: userId
            // })
        }.bind(this));
    };
    geofireService.prototype.keyExitedOrLMU = function (userId, university) {
        this.geoquery2LMU.on("key_exited", function (key) {
            this.afDB.database.ref(university + '/users/' + userId + '/availableReserves/' + key).remove();
        }.bind(this));
    };
    geofireService.prototype.setGeofireDestLMU = function (university, radius, lat, lng, userId) {
        this.dbRef = this.afDB.database.ref(university + '/geofireDestTrip/');
        this.geoFire = new __WEBPACK_IMPORTED_MODULE_2_geofire__(this.dbRef);
        this.geoquery1LMU = this.geoFire.query({
            center: [lat, lng],
            radius: radius
        });
        this.keyEnteredDestLMU(userId, university);
        this.keyExitedDestLMU(userId, university);
        console.log('geoquery or added');
    };
    geofireService.prototype.keyEnteredDestLMU = function (userId, university) {
        this.geoquery1LMU.on("key_entered", function (key, location, distance) {
            var _this = this;
            console.log(key);
            this.afDB.database.ref(university + '/users/' + userId + '/availableReserves/' + key).update({
                keyReserve: key,
                LMU: true
            }).then(function () {
                //get driverId from geofireOr node
                _this.getIdFromGeofireDestTripNode(university, key).subscribe(function (driver) {
                    _this.driverOnNodeDest = driver;
                    _this.afDB.database.ref(university + '/users/' + userId + '/availableReserves/' + key).update({
                        driverId: _this.driverOnNodeDest.driverId
                    });
                });
            });
            //  this.afDB.database.ref('/reservesInfoInCaseOfCancelling/'+ this.driverOnNodeOr.keyReserve + '/' + key).push({
            //   userId: userId
            // })
        }.bind(this));
    };
    geofireService.prototype.keyExitedDestLMU = function (userId, university) {
        this.geoquery1LMU.on("key_exited", function (key) {
            this.afDB.database.ref(university + '/users/' + userId + '/availableReserves/' + key).remove();
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
    geofireService.prototype.pushToMyReserve = function (university, keyReserve, driverId, userId) {
        this.afDB.database.ref(university + '/users/' + userId + '/myReserves/' + keyReserve).update({
            keyReserve: keyReserve,
            driverId: driverId
        });
    };
    geofireService.prototype.saveKey = function (university, keyReserve, driverId, userId) {
        this.afDB.database.ref(university + '/users/' + userId + '/keyTrip/').set({
            keyTrip: keyReserve,
            driverId: driverId
        });
    };
    geofireService.prototype.joinReserve = function (university, keyReserve, driverId, userId, origin, destination, name, lastname, phone, note, verifiedPerson) {
        this.afDB.database.ref(university + '/reserves/' + driverId + '/' + keyReserve + '/pendingUsers/' + userId).update({
            origin: origin,
            destination: destination,
            name: name,
            lastname: lastname,
            phone: phone,
            userId: userId,
            note: note,
            verifiedPerson: verifiedPerson
        }).catch(function (err) {
            console.log(err);
        });
    };
    geofireService.prototype.deleteAvailableReserve = function (university, userId, keyReserve) {
        this.afDB.database.ref(university + '/users/' + userId + '/availableReserves/' + keyReserve).remove()
            .catch(function (err) {
            console.log(err);
        });
    };
    geofireService.prototype.deleteReserveFromAvailableReserves = function (university, userId, keyPush) {
        this.afDB.database.ref(university + '/users/' + userId + '/availableReserves/' + keyPush).remove();
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
    geofireService.prototype.getLocationUniversity = function (university) {
        return this.afDB.object('universities/' + university).valueChanges();
    };
    // set a new node on firebase which is the location of the university
    geofireService.prototype.setLocationUniversity = function (university, key, lat, lng) {
        this.dbRef = this.afDB.database.ref(university + '/geofireUniversity/');
        this.geoFire = new __WEBPACK_IMPORTED_MODULE_2_geofire__(this.dbRef);
        this.geoFire.set(key, [lat, lng]).then(function () {
            console.log('location ' + university + ' updated');
        }, function (error) {
            console.log('error: ' + error);
        });
    };
    geofireService.prototype.deleteGeofireUniversity = function () {
        this.afDB.database.ref('geofireUniversity/').remove().then(function () {
            console.log('geofireUniversity node has been deleted');
        });
    };
    geofireService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__["AngularFireDatabase"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__["AngularFireDatabase"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["AngularFireAuth"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["AngularFireAuth"]) === "function" && _b || Object])
    ], geofireService);
    return geofireService;
    var _a, _b;
}());

//# sourceMappingURL=geoFire.service.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TripsService; });
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


var TripsService = /** @class */ (function () {
    function TripsService(afDB) {
        this.afDB = afDB;
    }
    TripsService.prototype.getOnTrip = function (university, userUid) {
        return this.afDB.object(university + '/users/' + userUid + '/onTrip').valueChanges();
    };
    TripsService.prototype.getMyReservesUser = function (university, userUid) {
        // 
        return this.afDB.list(university + '/users/' + userUid + '/myReserves').valueChanges();
    };
    TripsService.prototype.getKeyTrip = function (university, userUid) {
        return this.afDB.object(university + '/users/' + userUid + '/keyTrip').valueChanges();
    };
    TripsService.prototype.getTripState = function (university, reserveId, driverId) {
        return this.afDB.object(university + '/tripsState/' + driverId + '/' + reserveId + '/').valueChanges();
    };
    TripsService.prototype.getReserves = function (userUid) {
        // get reserves from my driver (wrong)
        return this.afDB.list('/reserves/' + userUid).valueChanges();
    };
    // public getMyReserves(university, reserveId,driverId){
    TripsService.prototype.getTrip = function (university, reserveId, driverId) {
        //get reserves inside trip's node
        return this.afDB.object(university + '/trips/' + driverId + '/' + reserveId + '/').valueChanges();
    };
    TripsService.prototype.getPendingUsers = function (university, keyTrip, driverId) {
        //get trip in Trip's node
        return this.afDB.list(university + '/trips/' + driverId + '/' + keyTrip + '/pendingUsers').valueChanges();
    };
    TripsService.prototype.getPickedUpUsers = function (university, keyTrip, driverId) {
        //get trip in Trip's node
        return this.afDB.list(university + '/trips/' + driverId + '/' + keyTrip + '/pickedUpUsers').valueChanges();
    };
    TripsService.prototype.getCancelUsers = function (university, keyTrip, driverId) {
        return this.afDB.list(university + '/tripsState/' + driverId + '/' + keyTrip + '/cancelUsers').valueChanges();
    };
    TripsService.prototype.getLastMinuteTripsDEMO = function (university, driverId) {
        return this.afDB.list(university + '/trips/' + driverId).valueChanges();
    };
    TripsService.prototype.saveKeyTrip = function (university, userUid, keyTrip, driverId) {
        this.afDB.database.ref(university + '/users/' + userUid + '/keyTrip').update({
            keyTrip: keyTrip,
            driverId: driverId
        });
    };
    TripsService.prototype.updateTripState = function (university, userUid, keyTrip, driverId) {
        this.afDB.database.ref(university + '/tripsState/' + driverId + '/' + keyTrip + '/UserCancelation/' + userUid).update({
            userUid: userUid
        });
    };
    TripsService.prototype.pushItsMePendingUsers = function (university, userUid, keyTrip, driverId) {
        this.afDB.database.ref(university + '/trips/' + driverId + '/' + keyTrip + '/pendingUsers/' + userUid).update({
            itsMe: true
        });
    };
    TripsService.prototype.pushItsMePickedUpUsers = function (university, userUid, keyTrip, driverId) {
        this.afDB.database.ref(university + '/trips/' + driverId + '/' + keyTrip + '/pickedUpUsers/' + userUid).update({
            itsMe: true
        });
    };
    TripsService.prototype.saveTripOnRecords = function (university, userUid, trip) {
        //save trip in recordTrips
        this.afDB.database.ref(university + '/users/' + userUid + '/recordTrips/' + trip.keyTrip).update(trip);
    };
    TripsService.prototype.joinTrip = function (university, keyTrip, driverId, userId, origin, destination, name, lastname, phone, note) {
        this.afDB.database.ref(university + '/trips/' + driverId + '/' + keyTrip + '/lastMinuteUsers/' + userId).update({
            origin: origin,
            destination: destination,
            name: name,
            lastname: lastname,
            phone: phone,
            userId: userId,
            note: note,
        });
    };
    TripsService.prototype.cancelTrip = function (university, userUid, driverUid, tripId) {
        //eliminate user from reserve in reserve's node        
        this.afDB.database.ref(university + '/trips/' + driverUid + '/' + tripId + '/pendingUsers/' + userUid).remove();
        //eliminate keyTrip from user's node to eliminate access to that reserve
    };
    TripsService.prototype.eliminateKeyUser = function (university, userUid, reserveId) {
        //eliminate keyTrip from user's node to eliminate access to that reserve
        this.afDB.database.ref(university + '/users/' + userUid + '/myReserves/' + reserveId).remove();
    };
    TripsService.prototype.eliminateKeyTrip = function (university, userUid) {
        //eliminate keyTrip from user's node to eliminate access to that reserve
        this.afDB.database.ref(university + '/users/' + userUid + '/keyTrip/').remove();
    };
    TripsService.prototype.eraseReserve = function (university, userUid, reserveId) {
        //eliminate keyTrip from user's node to eliminate access to that reserve
        this.afDB.database.ref(university + '/users/' + userUid + '/myReserves/' + reserveId).remove();
    };
    TripsService.prototype.eliminatingOnTrip = function (university, userUid) {
        //eliminate keyTrip from tripsReserve node 
        this.afDB.database.ref(university + '/users/' + userUid + '/onTrip').remove();
    };
    TripsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_fire_database__["AngularFireDatabase"]])
    ], TripsService);
    return TripsService;
}());

//# sourceMappingURL=trips.service.js.map

/***/ }),

/***/ 346:
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
    reservesService.prototype.setOnTrip = function (university, userUid) {
        this.afDB.database.ref(university + '/users/' + userUid).update({
            onTrip: true
        });
    };
    reservesService.prototype.getMyReservesUser = function (university, userUid) {
        //get reserves of that i have enter
        return this.afDB.list(university + '/users/' + userUid + '/myReserves').valueChanges();
    };
    reservesService.prototype.getMyReservesSelected = function (university, userUid) {
        // 
        return this.afDB.list(university + '/users/' + userUid + '/myReserves').valueChanges();
    };
    reservesService.prototype.getReserves = function (university, userUid) {
        //get reserves of the geofire
        return this.afDB.list(university + '/users/' + userUid + '/availableReserves').valueChanges();
    };
    reservesService.prototype.getOnTrip = function (university, userUid) {
        //get reserves of the geofire
        return this.afDB.object(university + '/users/' + userUid + '/onTrip').valueChanges();
    };
    reservesService.prototype.getMyReserves = function (university, driverUserUid, reserveId) {
        //get reserves inside reserves node
        return this.afDB.object(university + '/reserves/' + driverUserUid + '/' + reserveId + '/').valueChanges();
    };
    reservesService.prototype.getPendingUsers = function (university, driverUserUid, reserveId) {
        //get reserves inside reserves node
        return this.afDB.list(university + '/reserves/' + driverUserUid + '/' + reserveId + '/pendingUsers').valueChanges();
    };
    reservesService.prototype.cancelReserve = function (university, userUid, driverUid, reserveId) {
        //eliminate user from reserve in reserve's node        
        this.afDB.database.ref(university + '/reserves/' + driverUid + '/' + reserveId + '/pendingUsers/' + userUid).remove();
        //eliminate keyTrip from user's node to eliminate access to that reserve
    };
    reservesService.prototype.eliminateKeyUser = function (university, userUid, reserveId) {
        //eliminate keyTrip from user's node to eliminate access to that reserve
        this.afDB.database.ref(university + '/users/' + userUid + '/myReserves/' + reserveId).remove();
    };
    reservesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_fire_database__["AngularFireDatabase"]])
    ], reservesService);
    return reservesService;
}());

//# sourceMappingURL=reserves.service.js.map

/***/ }),

/***/ 347:
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
    sendFeedbackService.prototype.sendFeedback = function (university, title, info, name, lastname, number, userId) {
        this.afDB.database.ref(university + '/feedbackUsers/' + title + '/users/' + userId).update({
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

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return chatsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(66);
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
    chatsService.prototype.getChats = function (driverUid, userUid) {
        //trae todos los chats del usuario
        return this.afDB.list('/drivers/' + driverUid + '/trips/pickingUsers/' + userUid + '/chat/').valueChanges();
    };
    chatsService.prototype.pushMessageUser = function (driverUid, userUid, message) {
        //envía todos los chats del usuario
        this.afDB.database.ref('/drivers/' + driverUid + '/trips/pickingUsers/' + userUid + '/chat/').push({
            message: message,
            uid: userUid
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

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmUniversityPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_signup_services__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_auth__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ConfirmUniversityPage = /** @class */ (function () {
    function ConfirmUniversityPage(signUpService, viewCtrl, angularFireAuth, alertCtrl) {
        var _this = this;
        this.signUpService = signUpService;
        this.viewCtrl = viewCtrl;
        this.angularFireAuth = angularFireAuth;
        this.alertCtrl = alertCtrl;
        this.universities = [];
        this.showButton = false;
        this.unsubscribe = new __WEBPACK_IMPORTED_MODULE_4_rxjs__["Subject"];
        this.signUpService.getUniversities().takeUntil(this.unsubscribe)
            .subscribe(function (universities) {
            _this.universities = universities;
            console.log(_this.universities);
        });
        this.userId = this.angularFireAuth.auth.currentUser.uid;
    }
    ConfirmUniversityPage.prototype.onChange = function () {
        var _this = this;
        this.showButton = false;
        this.signUpService.userUniversity = this.universityChosen;
        console.log(this.signUpService.userUniversity);
        this.signUpService.getMyInfo(this.userId, this.signUpService.userUniversity).takeUntil(this.unsubscribe)
            .subscribe(function (user) {
            _this.user = user;
            console.log(_this.userId);
            console.log(user);
        });
        setTimeout(function () {
            if (_this.user == null) {
                _this.alertUni();
            }
            else {
                _this.showButton = true;
            }
        }, 500);
    };
    ConfirmUniversityPage.prototype.alertUni = function () {
        var alert = this.alertCtrl.create({
            title: '¿estas seguro que es tu universidad?',
            subTitle: 'Seleccionaste una universidad que no es la misma que seleccionaste cuando te registraste',
            buttons: ['OK']
        });
        alert.present();
    };
    ConfirmUniversityPage.prototype.goToFindaride = function () {
        this.readyToStart = true;
        this.viewCtrl.dismiss(this.readyToStart);
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    ConfirmUniversityPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-confirm-university',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/waypoolapp_UNOFICIAL/waypool_costumer/src/pages/confirm-university/confirm-university.html"*/'<ion-content>\n    <ion-card>\n    <h6 class="text-theme">¿CUÁL ES TU UNIVERSIDAD?</h6>\n    <ion-card-content>\n        <ion-list>\n            <ion-item>\n              <ion-label>escoge tu universidad </ion-label>\n              <ion-select (ionChange)="onChange()" okText="Ok" cancelText="Cancel" [(ngModel)]= \'universityChosen\'>\n                <ion-option  *ngFor="let uni of universities"  name="fieldName" ngDefaultControl>{{uni.name}}</ion-option>\n              </ion-select>\n            </ion-item>\n          \n          </ion-list>\n    </ion-card-content>\n\n    <ion-card-content>\n        <div >\n            \n            <ion-row style="margin-top: 14px;justify-content: center">\n                \n                <ion-col col-8>\n                    <button class="btn bg-theme text-white rounded" style="width: 100%;font-size: 1.5rem;" *ngIf=\'showButton\' (click)="goToFindaride()">Continuar</button>\n                </ion-col>\n            </ion-row>\n\n\n        </div>\n    </ion-card-content>\n    </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/waypoolapp_UNOFICIAL/waypool_costumer/src/pages/confirm-university/confirm-university.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_signup_services__["a" /* SignUpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_signup_services__["a" /* SignUpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_fire_auth__["AngularFireAuth"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_fire_auth__["AngularFireAuth"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object])
    ], ConfirmUniversityPage);
    return ConfirmUniversityPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=confirm-university.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return noteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(124);
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
    noteService.prototype.setNote = function (user, note, university) {
        __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref(university + '/users/' + user + '/trips').update({
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

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(481);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(624);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_google_maps__ = __webpack_require__(625);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_fire__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_fire_database__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_fire_auth__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_userauthentication_service__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_firebase__ = __webpack_require__(628);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_geolocation__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_sendCoords_service__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_sendUsers_service__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_note_service__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_call_number__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_geoFire_service__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_common__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_instances_service__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_signup_services__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_native_geocoder_ngx__ = __webpack_require__(629);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_email_composer_ngx__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_sendFeedback_service__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_chat_service__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_reserves_service__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_trips_service__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_environment_service__ = __webpack_require__(630);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_confirm_university_confirm_university__ = __webpack_require__(351);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























// import { IonicStorageModule } from '@ionic/storage';





var firebaseConfig = {
    apiKey: "AIzaSyAPagXvglCXnK3neJwU50EiZnJPmdd__PM",
    authDomain: "waypoooldemo.firebaseapp.com",
    databaseURL: "https://waypoooldemo.firebaseio.com",
    projectId: "waypoooldemo",
    storageBucket: "waypoooldemo.appspot.com",
    messagingSenderId: "1009109452629"
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
                        { loadChildren: '../pages/canceltrip/canceltrip.module#CanceltripPageModule', name: 'CanceltripPage', segment: 'canceltrip', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chatting/chatting.module#ChattingPageModule', name: 'ChattingPage', segment: 'chatting', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/confirm-reservation/confirm-reservation.module#ConfirmReservationPageModule', name: 'ConfirmReservationPage', segment: 'confirm-reservation', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/confirm-university/confirm-university.module#ConfirmUniversityPageModule', name: 'ConfirmUniversityPage', segment: 'confirm-university', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/confirmnote/confirmnote.module#ConfirmNotePageModule', name: 'ConfirmNotePage', segment: 'confirmnote', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/confirmpopup/confirmpopup.module#ConfirmpopupPageModule', name: 'ConfirmpopupPage', segment: 'confirmpopup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/confirmreserve/confirmreserve.module#ConfirmreservationPageModule', name: 'ConfirmreservationPage', segment: 'confirmreserve', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/confirmtrip/confirmtrip.module#ConfirmtripPageModule', name: 'ConfirmtripPage', segment: 'confirmtrip', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/help/help.module#HelpPageModule', name: 'HelpPage', segment: 'help', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/listride/listride.module#ListridePageModule', name: 'ListridePage', segment: 'listride', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/more/more.module#MorePageModule', name: 'MorePage', segment: 'more', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/public-profile/public-profile.module#PublicProfilePageModule', name: 'PublicProfilePage', segment: 'public-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ratetrip/ratetrip.module#RatetripPageModule', name: 'RatetripPage', segment: 'ratetrip', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reserveinfo/reserveinfo.module#ConfirmreservationPageModule', name: 'ReserveinfoPage', segment: 'reserveinfo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reservetrip/reservetrip.module#ReservetripPageModule', name: 'ReservetripPage', segment: 'reservetrip', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/support/support.module#SupportPageModule', name: 'SupportPage', segment: 'support', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/terms/terms.module#TermsPageModule', name: 'TermsPage', segment: 'terms', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/verification-images/verification-images.module#VerificationImagesPageModule', name: 'VerificationImagesPage', segment: 'verification-images', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/verification-number/verification-number.module#VerificationNumberPageModule', name: 'VerificationNumberPage', segment: 'verification-number', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/wallet/wallet.module#WalletPageModule', name: 'WalletPage', segment: 'wallet', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/myride/myride.module#MyridePageModule', name: 'MyridePage', segment: 'myride', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
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
                __WEBPACK_IMPORTED_MODULE_23__services_sendFeedback_service__["a" /* sendFeedbackService */],
                __WEBPACK_IMPORTED_MODULE_24__services_chat_service__["a" /* chatsService */],
                __WEBPACK_IMPORTED_MODULE_25__services_reserves_service__["a" /* reservesService */],
                __WEBPACK_IMPORTED_MODULE_26__services_trips_service__["a" /* TripsService */],
                __WEBPACK_IMPORTED_MODULE_27__services_environment_service__["a" /* environmentService */],
                __WEBPACK_IMPORTED_MODULE_28__pages_confirm_university_confirm_university__["a" /* ConfirmUniversityPage */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 624:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_signup_services__ = __webpack_require__(123);
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
    function MyApp(platform, statusBar, splashScreen, signUpServ) {
        var _this = this;
        this.signUpServ = signUpServ;
        this.userUniversity = this.signUpServ.userUniversity;
        console.log(this.userUniversity);
        // firebase.initializeApp({
        //     apiKey: "AIzaSyAPagXvglCXnK3neJwU50EiZnJPmdd__PM",
        //     authDomain: "waypoooldemo.firebaseapp.com",
        //     databaseURL: "https://waypoooldemo.firebaseio.com",
        //     projectId: "waypoooldemo",
        //     storageBucket: "waypoooldemo.appspot.com",
        //     messagingSenderId: "1009109452629"
        // })
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
            __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"]().onAuthStateChanged(function (user) {
                if (user) {
                    if (user.emailVerified == false) {
                        _this.rootPage = 'LoginPage';
                    }
                    else {
                        _this.rootPage = 'TabsPage';
                    }
                }
                else {
                    _this.rootPage = 'LoginPage';
                }
            });
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/waypoolapp_UNOFICIAL/waypool_costumer/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/waypoolapp_UNOFICIAL/waypool_costumer/src/app/app.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5__services_signup_services__["a" /* SignUpService */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(124);
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

},[355]);
//# sourceMappingURL=main.js.map