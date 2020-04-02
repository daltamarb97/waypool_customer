webpackJsonp([63],{

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(59);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_fire_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* ToastController */]])
    ], SignUpService);
    return SignUpService;
}());

//# sourceMappingURL=signup.services.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return reservesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__ = __webpack_require__(11);
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
    reservesService.prototype.getSeenReservesInAvailableReserves = function (place, userUid) {
        //get reserves of the geofire
        return this.afDB.list(place + '/users/' + userUid + '/reservesSeenInAvailableReserves').valueChanges();
    };
    reservesService.prototype.getSeenReservesInAvailableReservesLMU = function (place, userUid) {
        //get reserves of the geofire
        return this.afDB.list(place + '/users/' + userUid + '/reservesSeenInAvailableReservesLMU').valueChanges();
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_fire_database__["AngularFireDatabase"]])
    ], reservesService);
    return reservesService;
}());

//# sourceMappingURL=reserves.service.js.map

/***/ }),

/***/ 239:
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
webpackEmptyAsyncContext.id = 239;

/***/ }),

/***/ 280:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-schedule/add-schedule.module": [
		645,
		62
	],
	"../pages/canceltrip/driverCanceltrip.module": [
		644,
		61
	],
	"../pages/car-registration-login/car-registration-login.module": [
		691,
		60
	],
	"../pages/car-registration/car-registration.module": [
		692,
		59
	],
	"../pages/chats/driverChats.module": [
		646,
		58
	],
	"../pages/chatting/driverChatting.module": [
		647,
		57
	],
	"../pages/confirmprice/driverConfirmprice.module": [
		693,
		56
	],
	"../pages/confirmtrip/driverConfirmtrip.module": [
		650,
		55
	],
	"../pages/detailsreserve/driverDetailsreserve.module": [
		648,
		54
	],
	"../pages/findride/driverFindride.module": [
		705,
		53
	],
	"../pages/help/driverHelp.module": [
		649,
		52
	],
	"../pages/login/driverLogin.module": [
		651,
		51
	],
	"../pages/more/driverMore.module": [
		652,
		50
	],
	"../pages/myride/driverMyride.module": [
		694,
		5
	],
	"../pages/p-bikemode/bikemode.module": [
		703,
		49
	],
	"../pages/p-canceltrip/canceltrip.module": [
		653,
		48
	],
	"../pages/p-changecar/changecar.module": [
		654,
		47
	],
	"../pages/p-chatting/chatting.module": [
		657,
		46
	],
	"../pages/p-confirm-reservation/confirm-reservation.module": [
		655,
		45
	],
	"../pages/p-confirmnote/confirmnote.module": [
		656,
		4
	],
	"../pages/p-confirmpopup/confirmpopup.module": [
		659,
		44
	],
	"../pages/p-confirmtrip/confirmtrip.module": [
		658,
		43
	],
	"../pages/p-creategroup/creategroup.module": [
		660,
		42
	],
	"../pages/p-findride/findride.module": [
		706,
		3
	],
	"../pages/p-groupdetail/groupdetail.module": [
		661,
		41
	],
	"../pages/p-help/help.module": [
		663,
		40
	],
	"../pages/p-listride/listride.module": [
		696,
		39
	],
	"../pages/p-login/login.module": [
		662,
		38
	],
	"../pages/p-membersgroup/membersgroup.module": [
		665,
		37
	],
	"../pages/p-more/more.module": [
		664,
		36
	],
	"../pages/p-myride/myride.module": [
		695,
		35
	],
	"../pages/p-profile/profile.module": [
		666,
		34
	],
	"../pages/p-public-profile/public-profile.module": [
		669,
		33
	],
	"../pages/p-ratetrip/ratetrip.module": [
		667,
		32
	],
	"../pages/p-reserveinfo/reserveinfo.module": [
		668,
		31
	],
	"../pages/p-reservetrip/reservetrip.module": [
		670,
		30
	],
	"../pages/p-signup/signup.module": [
		697,
		29
	],
	"../pages/p-support/support.module": [
		673,
		28
	],
	"../pages/p-tabs/tabs.module": [
		672,
		27
	],
	"../pages/p-terms/terms.module": [
		671,
		26
	],
	"../pages/p-tripbike/tripbike.module": [
		698,
		2
	],
	"../pages/p-verification-images/verification-images.module": [
		676,
		25
	],
	"../pages/p-verification-number/verification-number.module": [
		674,
		24
	],
	"../pages/p-walkthrough/walkthrough.module": [
		675,
		23
	],
	"../pages/p-wallet/wallet.module": [
		677,
		22
	],
	"../pages/payments-info/payments-info.module": [
		678,
		21
	],
	"../pages/pickup/pickup.module": [
		704,
		1
	],
	"../pages/profile/driverProfile.module": [
		679,
		20
	],
	"../pages/public-profile/driver-public-profile.module": [
		681,
		19
	],
	"../pages/ratetrip/driverRatetrip.module": [
		682,
		18
	],
	"../pages/remove-schedule/remove-schedule.module": [
		680,
		17
	],
	"../pages/reservetrip/driverReservetrip.module": [
		699,
		0
	],
	"../pages/schedule/schedule.module": [
		700,
		16
	],
	"../pages/showinfocar/showinfocar.module": [
		683,
		15
	],
	"../pages/signup/driverSignup.module": [
		701,
		14
	],
	"../pages/specifyorigin/specifyorigin.module": [
		702,
		13
	],
	"../pages/successnotification/successnotification.module": [
		686,
		6
	],
	"../pages/support/driverSupport.module": [
		684,
		12
	],
	"../pages/terms/driverTerms.module": [
		685,
		11
	],
	"../pages/verification-images/driver-verification-images.module": [
		689,
		10
	],
	"../pages/verification-number/driver-verification-number.module": [
		688,
		9
	],
	"../pages/walkthrough/driverWalkthrough.module": [
		690,
		8
	],
	"../pages/wallet/driverWallet.module": [
		687,
		7
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
webpackAsyncContext.id = 280;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverSignUpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(25);
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



var DriverSignUpService = /** @class */ (function () {
    function DriverSignUpService(afDB, AngularFireAuth) {
        this.afDB = afDB;
        this.AngularFireAuth = AngularFireAuth;
    }
    DriverSignUpService.prototype.getMyInfo = function (place, userId) {
        return this.afDB.object(place + '/drivers/' + userId).valueChanges();
    };
    // public getInfoAboutMyPlace( userId){
    //     return this.afDB.object('/allUsers/' + userId).valueChanges();
    //     }
    DriverSignUpService.prototype.getInfoPlace = function (place) {
        return this.afDB.object('/allPlaces/' + place).valueChanges();
    };
    DriverSignUpService.prototype.getAllPlaces = function () {
        return this.afDB.list('allPlaces/').valueChanges();
    };
    DriverSignUpService.prototype.getAllCities = function () {
        return this.afDB.list('allCities/').valueChanges();
    };
    DriverSignUpService.prototype.getEmails = function (enterprise) {
        return this.afDB.list('allPlaces/' + enterprise + '/emails').valueChanges();
    };
    DriverSignUpService.prototype.pushEmails = function (enterprise, email) {
        this.afDB.database.ref('allPlaces/' + enterprise + '/emails').push({
            email: email
        });
    };
    DriverSignUpService.prototype.pushDocsL = function (place, userId) {
        this.afDB.database.ref(place + '/drivers/' + userId + '/documents').update({
            license: false
        });
    };
    DriverSignUpService.prototype.pushDocsCarne = function (place, userId) {
        this.afDB.database.ref(place + '/drivers/' + userId + '/documents').update({
            carne: false
        });
        this.afDB.database.ref(place + '/users/' + userId + '/documents').update({
            carne: false
        });
    };
    DriverSignUpService.prototype.pushDocsId = function (place, userId) {
        this.afDB.database.ref(place + '/drivers/' + userId + '/documents').update({
            id: false
        });
        this.afDB.database.ref(place + '/users/' + userId + '/documents').update({
            id: false
        });
    };
    DriverSignUpService.prototype.emailVerificationMessage = function (place, user) {
        this.afDB.database.ref(place + '/drivers/' + user).update({
            emailVerificationMessage: true
        });
    };
    DriverSignUpService.prototype.getMyInfoDriver = function (place, userId) {
        return this.afDB.object(place + '/drivers/' + userId).valueChanges();
    };
    DriverSignUpService.prototype.getInfoUser = function (place, userId) {
        return this.afDB.object(place + '/users/' + userId).valueChanges();
    };
    DriverSignUpService.prototype.saveUser = function (place, user) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.afDB.database.ref(place + '/drivers/' + user.userId).update(user);
                this.afDB.database.ref(place + '/users/' + user.userId).update(user);
                return [2 /*return*/];
            });
        });
    };
    DriverSignUpService.prototype.saveUserInAllUsers = function (place, user, city) {
        this.afDB.database.ref('/allUsers/' + user).update({
            place: place,
            city: city
        });
    };
    DriverSignUpService.prototype.setFixedLocationCoordinates = function (place, user, lat, lng) {
        this.afDB.database.ref(place + '/drivers/' + user + '/fixedLocation/coordinates').update({
            lat: lat,
            lng: lng,
        });
        this.afDB.database.ref(place + '/users/' + user + '/fixedLocation/coordinates').update({
            lat: lat,
            lng: lng,
        });
    };
    DriverSignUpService.prototype.setFixedLocationName = function (place, user, name) {
        this.afDB.database.ref(place + '/drivers/' + user + '/fixedLocation').update({
            name: name
        });
        this.afDB.database.ref(place + '/users/' + user + '/fixedLocation').update({
            name: name
        });
    };
    DriverSignUpService.prototype.getMyInfoForProfile = function (place, userId) {
        return this.afDB.object(place + '/drivers/' + userId).valueChanges();
    };
    DriverSignUpService.prototype.saveInfoProfilePhone = function (place, userUid, phone) {
        //permite configurar la información del perfil
        this.afDB.database.ref(place + '/drivers/' + userUid).update({
            phone: phone
        });
    };
    DriverSignUpService.prototype.saveInfoProfileAbout = function (place, userUid, about) {
        //permite configurar la información del perfil
        this.afDB.database.ref(place + '/drivers/' + userUid).update({
            about: about
        });
    };
    DriverSignUpService.prototype.saveInfoProfileUrl = function (place, userUid, url) {
        //permite configurar la información del perfil
        this.afDB.database.ref(place + '/drivers/' + userUid).update({
            url: url
        });
    };
    DriverSignUpService.prototype.deleteAccount = function (place, userUid) {
        this.afDB.database.ref(place + '/drivers/' + userUid).remove();
        this.afDB.database.ref(place + '/users/' + userUid).remove();
    };
    DriverSignUpService.prototype.addCar = function (place, DriverUid, carModel, plateNumber, color) {
        var _this = this;
        this.afDB.database.ref(place + '/drivers/' + DriverUid + '/cars/').push({
            carModel: carModel,
            plateNumber: plateNumber,
            color: color
        }).then(function (snap) {
            var key = snap.key;
            _this.afDB.database.ref(place + '/drivers/' + DriverUid + '/cars/' + key).update({
                keyCar: key
            });
        });
    };
    DriverSignUpService.prototype.deleteCar = function (place, driverUid, carKey) {
        this.afDB.database.ref(place + '/drivers/' + driverUid + '/cars/' + carKey).remove();
    };
    DriverSignUpService.prototype.addCarProfile = function (place, userUid, car) {
        this.afDB.database.ref(place + '/drivers/' + userUid + '/cars/').push(car);
    };
    DriverSignUpService.prototype.addPlaceZone = function (place, userUid) {
        this.afDB.database.ref(place + '/drivers/' + userUid).update({ place: place });
        this.afDB.database.ref(place + '/users/' + userUid).update({ place: place });
    };
    DriverSignUpService.prototype.getCar = function (place, userId) {
        return this.afDB.list(place + '/drivers/' + userId + '/cars').valueChanges();
    };
    DriverSignUpService.prototype.pushSchedule = function (place, userId, hour, type, description, image) {
        var _this = this;
        this.schedulePush = this.afDB.database.ref(place + '/drivers/' + userId + '/schedule/').push({
            hour: hour,
            type: type,
            description: description,
            image: image
        }).then(function (snap) {
            _this.schedulePush = _this.schedulePush = _this.afDB.database.ref(place + '/drivers/' + userId + '/schedule/' + snap.key).update({
                key: snap.key
            });
        });
    };
    DriverSignUpService.prototype.getSchedule = function (place, userId) {
        return this.afDB.list(place + '/drivers/' + userId + '/schedule/').valueChanges();
    };
    DriverSignUpService.prototype.removeSchedule = function (place, userId, key) {
        this.afDB.database.ref(place + '/drivers/' + userId + '/schedule/' + key).remove();
    };
    DriverSignUpService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_fire_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"]])
    ], DriverSignUpService);
    return DriverSignUpService;
}());

//# sourceMappingURL=d-signup.service.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sendCoordsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__ = __webpack_require__(11);
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
    sendCoordsService.prototype.pushCoordinatesOnBikeMode = function (user, dest, or) {
        this.afDB.database.ref('/users/' + user + '/trips/bikeMode').update({
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

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverSendCoordsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__ = __webpack_require__(11);
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


// import { UrlSerializer } from "ionic-angular";
// import { useAnimation } from "@angular/core/src/animation/dsl";
// import * as firebase from 'firebase';
// import { AngularFireAuth } from "angularfire2/auth";
var DriverSendCoordsService = /** @class */ (function () {
    function DriverSendCoordsService(afDB) {
        this.afDB = afDB;
    }
    DriverSendCoordsService.prototype.getPendingUsers = function (place, userUid, pushKey) {
        return this.afDB.list(place + '/reserves/' + userUid + '/' + pushKey + '/pendingUsers').valueChanges();
    };
    DriverSendCoordsService.prototype.getGroupPendingUsers = function (userUid, pushKey) {
        return this.afDB.list('crewTest/' + userUid + '/' + pushKey + '/pendingUsers').valueChanges();
    };
    DriverSendCoordsService.prototype.confirmIfUsersIsStillInLMU = function (place, driverId, keyTrip, userId) {
        return this.afDB.object(place + '/trips/' + driverId + '/' + keyTrip + '/lastMinuteUsers/' + userId).valueChanges();
    };
    DriverSendCoordsService.prototype.getSpecificReserves = function (userUid, pushKey) {
        return this.afDB.object('/reserves/' + userUid + '/' + pushKey).valueChanges();
    };
    DriverSendCoordsService.prototype.eraseUser = function (place, userId, DriverUid, pushKey) {
        this.afDB.database.ref(place + '/reserves/' + DriverUid + '/' + pushKey + '/pendingUsers/' + userId).remove();
    };
    DriverSendCoordsService.prototype.saveTripOnRecords = function (place, userUid, trip) {
        //save trip in recordTrips
        this.afDB.database.ref(place + '/users/' + userUid + '/recordTrips/' + trip.keyTrip).update(trip);
    };
    DriverSendCoordsService.prototype.getDestination = function (place, user) {
        return this.afDB.list(place + '/drivers/' + user + '/trips/destination').valueChanges();
    };
    DriverSendCoordsService.prototype.getOrigin = function (place, user) {
        return this.afDB.list(place + '/drivers/' + user + '/trips/origin').valueChanges();
    };
    DriverSendCoordsService.prototype.pushcoordinatesReserves = function (user, dest, or) {
        this.afDB.database.ref('drivers/' + user + '/Reserves').push({
            orReserve: or,
            destReserve: dest,
        });
    };
    DriverSendCoordsService.prototype.pushcoordinatesDrivers = function (place, user, dest, or) {
        this.afDB.database.ref(place + '/drivers/' + user + '/trips').update({
            origin: or,
            destination: dest,
        });
    };
    DriverSendCoordsService.prototype.recordTripOnDriver = function (place, userUid, trip) {
        this.afDB.database.ref(place + '/drivers/' + userUid + '/recordTrips/').push(trip);
    };
    DriverSendCoordsService.prototype.recordTripOnUser = function (place, userDriverUid, trip) {
        this.afDB.database.ref(place + '/users/' + userDriverUid + '/recordTrips/').push(trip);
    };
    DriverSendCoordsService.prototype.recordTripOnWaypool = function (place, trip) {
        this.afDB.database.ref(place + '/allTrips/').push(trip);
    };
    DriverSendCoordsService.prototype.timeOfPickedUpUser = function (userUid, date) {
        //set time when user is picked up in user's trips
        this.afDB.database.ref('/users/' + userUid + '/trips/').update({
            pickedUpTime: date
        });
    };
    DriverSendCoordsService.prototype.timeOfPickedUpDriver = function (userDriverUid, date, userUid) {
        //set time when user is picked up in driver's trips
        this.afDB.database.ref('/drivers/' + userDriverUid + '/trips/pickedUpUsers/' + userUid).update({
            pickedUpTime: date
        });
    };
    DriverSendCoordsService.prototype.timeOfDestinationUser = function (userUid, date) {
        this.afDB.database.ref('/users/' + userUid + '/trips/').update({
            DestinationTime: date
        });
    };
    DriverSendCoordsService.prototype.pushPriceOnUser = function (userDriverUid, userUid, price) {
        this.afDB.database.ref('/drivers/' + userDriverUid + '/trips/pickedUpUsers/' + userUid).update({
            price: price
        });
    };
    DriverSendCoordsService.prototype.updateGeolocationOrigin = function (user, origin) {
        this.afDB.database.ref('drivers/' + user + '/trips').update({
            origin: origin
        });
    };
    DriverSendCoordsService.prototype.endTripDriverPickingUsers = function (place, DriverUid) {
        this.afDB.database.ref(place + '/drivers/' + DriverUid + '/trips/pickingUsers').remove();
    };
    DriverSendCoordsService.prototype.eraseChatsUsers = function (place, userId, DriverUid) {
        this.afDB.database.ref(place + 'drivers/' + DriverUid + '/trips/pickingUsers/' + userId + '/chat').remove();
    };
    DriverSendCoordsService.prototype.endTripDriverPickedUpUsers = function (place, DriverUid) {
        this.afDB.database.ref(place + '/drivers/' + DriverUid + '/trips/pickedUpUsers').remove();
    };
    DriverSendCoordsService.prototype.endTripUserPickingUsers = function (userUid) {
        this.afDB.database.ref('users/' + userUid + '/trips/pickingUsers').remove();
    };
    DriverSendCoordsService.prototype.endTripUserPickedUpUsers = function (place, userUid) {
        this.afDB.database.ref(place + '/users/' + userUid + '/trips/pickedUpUsers').remove();
    };
    DriverSendCoordsService.prototype.endTripUserOnTripInstance = function (place, userUid) {
        this.afDB.database.ref(place + '/users/' + userUid + '/trips/onTrip').remove();
    };
    DriverSendCoordsService.prototype.endTripUserPickupInstance = function (place, userUid) {
        this.afDB.database.ref(place + '/users/' + userUid + '/trips/pickedUp').remove();
    };
    DriverSendCoordsService.prototype.endTripUserDriverListRide = function (place, userUid) {
        this.afDB.database.ref(place + '/users/' + userUid + '/trips/driverListRide').remove();
    };
    DriverSendCoordsService.prototype.pickUp = function (DriverUid, userId, user) {
        // add the driver to pickedUpUsers 
        this.afDB.database.ref('/drivers/' + DriverUid + '/trips/pickedUpUsers/' + userId).update(user);
    };
    // TODO: DRIVER NO PUEDE ENTRAR TODO, SOLO DRIVERINFO (UNA PARTE DEL DRIVER, PREGUNTAR DANIEL QUE INFO)
    DriverSendCoordsService.prototype.addReserve = function (driverId, name, lastname, car, dest, or, note, price, currentHour, startHour, geofireKey, type) {
        var _this = this;
        this.afDB.database.ref('/reserves/' + driverId).push({
            name: name,
            lastname: lastname,
            car: car,
            destination: dest,
            origin: or,
            note: note,
            price: price,
            currentHour: currentHour,
            startHour: startHour,
            geofireKey: geofireKey,
            type: type,
        }).then(function (snap) {
            var key = snap.key;
            _this.afDB.database.ref('/reserves/' + driverId + '/' + key).update({
                keyTrip: key
            });
            _this.afDB.database.ref('/drivers/' + driverId).update({
                keyLastReserve: key
            });
            console.log(' keylastreserve');
        });
    };
    DriverSendCoordsService.prototype.pickUpInstance = function (userId) {
        // driver add pickup instance to the user when picked up
        this.afDB.database.ref('/users/' + userId + '/trips').update({
            pickedUp: true
        });
    };
    DriverSendCoordsService.prototype.eliminateOnTrip = function (userId) {
        this.afDB.database.ref('/drivers/' + userId).update({
            onTrip: false
        });
    };
    DriverSendCoordsService.prototype.eliminateOnTripUser = function (userId) {
        this.afDB.database.ref('/users/' + userId + '/trips').update({
            onTrip: false
        });
    };
    DriverSendCoordsService.prototype.pushOnTripFinalUser = function (place, userId) {
        this.afDB.database.ref(place + '/users/' + userId).update({
            onTripFinal: true
        });
    };
    DriverSendCoordsService.prototype.eliminatePickingUsers = function (DriverUid, userId) {
        //eliminate the user from pickingUsers
        this.afDB.database.ref('/drivers/' + DriverUid + '/trips/pickingUsers/' + userId).remove();
    };
    DriverSendCoordsService.prototype.eliminatePickingUsersUser = function (userId) {
        this.afDB.database.ref('/users/' + userId + '/trips/pickingUsers').remove();
    };
    DriverSendCoordsService.prototype.sumTotal = function (trip, total) {
        total = total + trip;
    };
    DriverSendCoordsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_fire_database__["AngularFireDatabase"]])
    ], DriverSendCoordsService);
    return DriverSendCoordsService;
}());

//# sourceMappingURL=d-sendCoords.service.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverAuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_database__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DriverAuthenticationService = /** @class */ (function () {
    function DriverAuthenticationService(angularFireAuth, afDB) {
        this.angularFireAuth = angularFireAuth;
        this.afDB = afDB;
    }
    DriverAuthenticationService.prototype.loginWithEmail = function (email, password) {
        return this.angularFireAuth.auth.signInWithEmailAndPassword(email, password);
    };
    DriverAuthenticationService.prototype.sendVerificationCodeToFirebase = function (place, userId, code) {
        this.afDB.database.ref(place + '/drivers/' + userId).update({
            verificationCode: code
        });
    };
    DriverAuthenticationService.prototype.deleteVerificationCode = function (place, userId) {
        this.afDB.database.ref(place + '/drivers/' + userId + '/verificationCode/').remove();
    };
    DriverAuthenticationService.prototype.resendVerificationCode = function (place, userId) {
        this.afDB.database.ref(place + '/drivers/' + userId).update({
            resendVerificationCode: true
        });
    };
    DriverAuthenticationService.prototype.deleteverificationCodeApproval = function (place, userId) {
        this.afDB.database.ref(place + '/drivers/' + userId + '/verificationCodeApproval/').remove();
    };
    DriverAuthenticationService.prototype.deleteResendCode = function (place, userId) {
        this.afDB.database.ref(place + '/drivers/' + userId + '/resendVerificationCode/').remove();
    };
    DriverAuthenticationService.prototype.registerWithEmail = function (email, password) {
        return this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password);
    };
    DriverAuthenticationService.prototype.getStatus = function () {
        return this.angularFireAuth.authState;
    };
    DriverAuthenticationService.prototype.logOut = function () {
        return this.angularFireAuth.auth.signOut();
    };
    DriverAuthenticationService.prototype.resetPassword = function (email) {
        var auth = __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]();
        return auth.sendPasswordResetEmail(email)
            .then(function () { return console.log("email sent"); })
            .catch(function (error) { return console.log(error); });
    };
    ;
    DriverAuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["AngularFireDatabase"]])
    ], DriverAuthenticationService);
    return DriverAuthenticationService;
}());

//# sourceMappingURL=d-driverauthentication.service.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverInstancesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__ = __webpack_require__(11);
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


var DriverInstancesService = /** @class */ (function () {
    function DriverInstancesService(afDB) {
        this.afDB = afDB;
    }
    DriverInstancesService.prototype.turnOntripUsers = function (place, user) {
        this.afDB.database.ref(place + 'users/' + user + '/trips/').update({
            onTrip: true
        }, function (error) {
            if (error) {
                console.log(error);
            }
            else {
                console.log("everything successful");
            }
        });
    };
    DriverInstancesService.prototype.turnOntripUsersFalse = function (place, user) {
        this.afDB.database.ref(place + 'users/' + user + '/trips/').update({
            onTrip: false
        }, function (error) {
            if (error) {
                console.log(error);
            }
            else {
                console.log("everything successful");
            }
        });
    };
    DriverInstancesService.prototype.scheduleTypeManual = function (place, user) {
        this.afDB.database.ref(place + '/drivers/' + user).update({
            scheduleType: 'manual'
        }, function (error) {
            console.log(error);
        });
    };
    DriverInstancesService.prototype.scheduleTypePicture = function (place, user) {
        this.afDB.database.ref(place + '/drivers/' + user).update({
            scheduleType: 'picture'
        }, function (error) {
            console.log(error);
        });
    };
    DriverInstancesService.prototype.turnOntripUsersListRide = function (driverId, user) {
        this.afDB.database.ref('/drivers/' + driverId + '/trips/usersListRide/' + user).update({
            onTrip: true
        }, function (error) {
            if (error) {
                console.log(error);
            }
            else {
                console.log("everything successful");
            }
        });
    };
    DriverInstancesService.prototype.stopShowingOnDriver = function (driverId, user) {
        this.afDB.database.ref('/drivers/' + driverId + '/trips/usersListRide/' + user).update({
            showDriver: false
        }, function (error) {
            if (error) {
                console.log(error);
            }
            else {
                console.log("everything successful");
            }
        });
    };
    DriverInstancesService.prototype.noDriversAvailableInstance = function (userId) {
        this.afDB.database.ref('/drivers/' + userId).update({
            noUsersMessage: true
        });
    };
    DriverInstancesService.prototype.noDriversAvailableInstanceDelete = function (userId) {
        this.afDB.database.ref('/drivers/' + userId).update({
            noUsersMessage: false
        });
    };
    DriverInstancesService.prototype.clickedDirectionMessage = function (userId) {
        this.afDB.database.ref('/drivers/' + userId).update({
            clickedDirection: true
        });
    };
    DriverInstancesService.prototype.clickedDirectionMessageCancel = function (userId) {
        this.afDB.database.ref('/drivers/' + userId).update({
            clickedDirection: false
        });
    };
    DriverInstancesService.prototype.isVerifiedPerson = function (place, userId) {
        this.afDB.database.ref(place + '/drivers/' + userId).update({
            verifiedPerson: true
        });
    };
    DriverInstancesService.prototype.ToggleStatusOnline = function (place, userId) {
        this.afDB.database.ref(place + '/drivers/' + userId).update({
            toggleStatus: 'online'
        });
        this.afDB.database.ref('allUsers/' + userId).update({
            toggleOnline: place
        });
    };
    DriverInstancesService.prototype.ToggleStatusOffline = function (place, userId) {
        this.afDB.database.ref(place + '/drivers/' + userId).update({
            toggleStatus: 'offline'
        });
        this.afDB.database.ref('allUsers/' + userId + '/toggleOnline/').remove();
    };
    DriverInstancesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_fire_database__["AngularFireDatabase"]])
    ], DriverInstancesService);
    return DriverInstancesService;
}());

//# sourceMappingURL=d-instances.services.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverSendUsersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__ = __webpack_require__(11);
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


// import { UrlSerializer } from "ionic-angular";
// import { useAnimation } from "@angular/core/src/animation/dsl";
// import * as firebase from 'firebase';
// import { AngularFireAuth } from "angularfire2/auth";
var DriverSendUsersService = /** @class */ (function () {
    function DriverSendUsersService(afDB) {
        this.afDB = afDB;
    }
    DriverSendUsersService.prototype.getUsersOnListRide = function (userUid) {
        // Get all the students from the usersListRide
        return this.afDB.list('/drivers/' + userUid + '/trips/usersListRide').valueChanges();
    };
    DriverSendUsersService.prototype.getTripsOfReserves = function (place, userUid) {
        // Get all the trips the driver have reserve
        return this.afDB.list(place + '/reserves/' + userUid).valueChanges();
    };
    DriverSendUsersService.prototype.getUsersOnTrip = function (place, userUid) {
        // Get all the students the driver acepts in myListRidePage to be send to the students
        return this.afDB.list(place + '/drivers/' + userUid + '/trips/pickingUsers').valueChanges();
    };
    DriverSendUsersService.prototype.getPickUpUsers = function (place, userUid) {
        //get all the users from the pickUpUsers []
        return this.afDB.list(place + '/drivers/' + userUid + '/trips/pickedUpUsers').valueChanges();
    };
    DriverSendUsersService.prototype.removeReserve = function (driverId, keyReserve) {
        //remove the reserve done
        this.afDB.database.ref('/reserves/' + driverId + '/' + keyReserve).remove();
    };
    DriverSendUsersService.prototype.removeUsersOnListRideTotal = function (place, userUid) {
        //send the information of every student the driver acepts in myRide
        this.afDB.database.ref(place + '/drivers/' + userUid + '/trips/usersListRide/').remove();
    };
    DriverSendUsersService.prototype.removeUsersOnPickingUsers = function (place, userUid, userId) {
        //send the information of every student the driver acepts in myRide
        this.afDB.database.ref(place + '/drivers/' + userUid + '/trips/pickingUsers/' + userId).remove();
        this.afDB.database.ref(place + '/users/' + userId + '/trips/pickingUsers/driver/' + userUid).remove();
    };
    DriverSendUsersService.prototype.pushPickingUpUsersOnDrivers = function (place, userUid, userId, origin, destination, name, lastname, phone, about) {
        //send the information of every student the driver acepts in myRide
        this.afDB.database.ref(place + '/drivers/' + userUid + '/trips/pickingUsers/' + userId).update({
            origin: origin,
            destination: destination,
            name: name,
            lastname: lastname,
            phone: phone,
            userId: userId,
            about: about
        });
    };
    DriverSendUsersService.prototype.pushDriverOnUsers = function (place, userUid, userId, origin, destination, name, lastname, phone, price, car, about) {
        //send the driver information to the students
        this.afDB.database.ref(place + '/users/' + userId + '/trips/pickingUsers/driver/' + userUid).update({
            origin: origin,
            destination: destination,
            name: name,
            lastname: lastname,
            phone: phone,
            userId: userUid,
            car: car,
            price: price,
            about: about
        });
    };
    DriverSendUsersService.prototype.pushTripOnRecordDriver = function (userUid) {
        //historial
        this.afDB.database.ref('/drivers/' + userUid + '/trips').push();
    };
    DriverSendUsersService.prototype.getRecordTrips = function (place, userUid) {
        return this.afDB.list(place + '/drivers/' + userUid + '/recordTrips/').valueChanges();
    };
    DriverSendUsersService.prototype.badgeTrue = function (userUid) {
        this.afDB.database.ref('/drivers/' + userUid).update({
            badgePicking: true
        });
    };
    DriverSendUsersService.prototype.badgeFalse = function (userUid) {
        this.afDB.database.ref('/drivers/' + userUid).update({
            badgePicking: false
        });
    };
    DriverSendUsersService.prototype.badgeTrueOntrip = function (userUid) {
        this.afDB.database.ref('/drivers/' + userUid).update({
            badgeOntrip: true
        });
    };
    DriverSendUsersService.prototype.badgeFalseOntrip = function (userUid) {
        this.afDB.database.ref('/drivers/' + userUid).update({
            badgeOntrip: false
        });
    };
    DriverSendUsersService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_fire_database__["AngularFireDatabase"]])
    ], DriverSendUsersService);
    return DriverSendUsersService;
}());

//# sourceMappingURL=d-sendUsers.service.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverGeofireService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_geofire__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_geofire___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_geofire__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(25);
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




var DriverGeofireService = /** @class */ (function () {
    function DriverGeofireService(afDB, AngularFireAuth) {
        // this.driverUid = this.AngularFireAuth.auth.currentUser.uid;
        this.afDB = afDB;
        this.AngularFireAuth = AngularFireAuth;
    }
    // setGeofireDest( radius:number, lat, lng, geofirename, driverId, keyReserve):void{ 
    //   this.proofToCancelDest = this.variableName(geofirename);
    //   this.dbRef = this.afDB.database.ref('geofireDest/' );
    //   this.geoFire = new GeoFire(this.dbRef); 
    //   this.geoquery1 = this.geoFire.query({
    //     center: [lat, lng],
    //     radius: radius
    //   })
    //   this.keyEnteredDest( driverId, keyReserve);
    //   this.keyExitedDest(keyReserve);
    // console.log('geoquery dest added');
    // }
    // variableName(variable){
    //   var variableName = variable;
    //   return variableName;
    // }
    // setGeofireOr( radius:number, lat, lng, geofirename, driverId, keyReserve):void{ 
    //   this.proofToCancelOr = this.variableName(geofirename);
    //   this.dbRef = this.afDB.database.ref('geofireOr/' );
    //   this.geoFire = new GeoFire(this.dbRef); 
    //   this.geoquery2 = this.geoFire.query({
    //     center: [lat, lng],
    //     radius: radius
    //   })
    //   this.keyEnteredOr( driverId, keyReserve);
    //   this.keyExitedOr(keyReserve);
    //   // if(this.geoquery1){
    //   //   this.geoquery1.cancel();
    //   // }
    //   console.log('geoquery or added');
    // }
    ///////////
    DriverGeofireService.prototype.setGeofireOrNEWTEST = function (Place, key, lat, lng) {
        this.dbRef = this.afDB.database.ref(Place + '/geofireOr/');
        this.geoFire = new __WEBPACK_IMPORTED_MODULE_2_geofire__(this.dbRef);
        this.geoFire.set(key, [lat, lng]).then(function () {
            console.log('location updated');
        }, function (error) {
            console.log('error: ' + error);
        });
    };
    DriverGeofireService.prototype.setGeofireDestNEWTEST = function (Place, key, lat, lng) {
        this.dbRef = this.afDB.database.ref(Place + '/geofireDest/');
        this.geoFire = new __WEBPACK_IMPORTED_MODULE_2_geofire__(this.dbRef);
        this.geoFire.set(key, [lat, lng]).then(function () {
            console.log('location updated');
        }, function (error) {
            console.log('error: ' + error);
        });
    };
    DriverGeofireService.prototype.setGeofireOrOnTrip = function (Place, key, lat, lng) {
        this.dbRef = this.afDB.database.ref(Place + '/geofireOrTrip/');
        this.geoFire = new __WEBPACK_IMPORTED_MODULE_2_geofire__(this.dbRef);
        this.geoFire.set(key, [lat, lng]).then(function () {
            console.log('location updated');
        }, function (error) {
            console.log('error: ' + error);
        });
    };
    DriverGeofireService.prototype.setGeofireDestOnTrip = function (Place, key, lat, lng) {
        this.dbRef = this.afDB.database.ref(Place + '/geofireDestTrip/');
        this.geoFire = new __WEBPACK_IMPORTED_MODULE_2_geofire__(this.dbRef);
        this.geoFire.set(key, [lat, lng]).then(function () {
            console.log('location updated');
        }, function (error) {
            console.log('error: ' + error);
        });
    };
    ////////////////////
    //JUAN DAVID: created a sub-node "availableRserves" inside users node, so they are able to read the reserves from their node
    DriverGeofireService.prototype.keyEnteredDest = function (driverId, keyReserve) {
        this.geoquery1.on("key_entered", function (key, location, distance) {
            var _this = this;
            console.log(key);
            setTimeout(function () {
                _this.afDB.database.ref('/users/' + key + '/availableReserves/' + keyReserve).update({
                    driverId: driverId,
                    keyReserve: keyReserve
                });
                console.log('keyentered here');
            }, 3000);
        }.bind(this));
    };
    DriverGeofireService.prototype.keyExitedDest = function (keyReserve) {
        this.geoquery1.on("key_exited", function (key) {
            this.afDB.database.ref('/users/' + key + '/availableReserves/' + keyReserve).remove();
        }.bind(this));
    };
    //JUAN DAVID: created a sub-node "availableRserves" inside users node, so they are able to read the reserves from their node
    DriverGeofireService.prototype.keyEnteredOr = function (driverId, keyReserve) {
        this.geoquery2.on("key_entered", function (key, location, distance) {
            console.log(key);
            this.afDB.database.ref('/users/' + key + '/availableReserves/' + keyReserve).update({
                driverId: driverId,
                keyReserve: keyReserve
            });
            this.afDB.database.ref('/reservesInfoInCaseOfCancelling/' + driverId + '/' + keyReserve).push({
                userId: key
            });
        }.bind(this));
    };
    DriverGeofireService.prototype.keyExitedOr = function (keyReserve) {
        this.geoquery2.on("key_exited", function (key) {
            this.afDB.database.ref('/users/' + key + '/availableReserves/' + keyReserve).remove();
        }.bind(this));
    };
    DriverGeofireService.prototype.getMyInfo = function (userId) {
        return this.afDB.object('drivers/' + userId).valueChanges();
    };
    DriverGeofireService.prototype.getMyReserves = function (driverId) {
        return this.afDB.list('/reserves/' + driverId).valueChanges();
    };
    DriverGeofireService.prototype.deleteUserListRide = function (Place, driverId, userId) {
        this.afDB.database.ref(Place + '/drivers/' + driverId + '/trips/usersListRide/' + userId).remove();
    };
    DriverGeofireService.prototype.deleteUserListRideTotal = function (driverId) {
        this.afDB.database.ref('/drivers/' + driverId + '/trips/usersListRide/').remove();
    };
    DriverGeofireService.prototype.onTripUserListRide = function (driverId, userId) {
        this.afDB.database.ref('/drivers/' + driverId + '/trips/usersListRide/' + userId).update({
            onTrip: true
        });
    };
    DriverGeofireService.prototype.deleteUserGeofireDest = function (Place, keyTrip) {
        this.afDB.database.ref(Place + '/geofireDest/' + keyTrip).remove().then(function () {
            console.log("GeofireDest succesfully removed");
        }).catch(function (error) {
            console.log(error);
        });
    };
    DriverGeofireService.prototype.deleteUserGeofireOr = function (Place, keyTrip) {
        this.afDB.database.ref(Place + '/geofireOr/' + keyTrip).remove().then(function () {
            console.log("GeofireOr succesfully removed");
        }).catch(function (error) {
            console.log(error);
        });
    };
    DriverGeofireService.prototype.deleteUserGeofireOrTrip = function (Place, keyTrip) {
        this.afDB.database.ref(Place + '/geofireOrTrip/' + keyTrip).remove().then(function () {
            console.log("geofireOrTrip succesfully removed");
        }).catch(function (error) {
            console.log(error);
        });
    };
    DriverGeofireService.prototype.deleteUserGeofireDestTrip = function (Place, keyTrip) {
        this.afDB.database.ref(Place + '/geofireDestTrip/' + keyTrip).remove().then(function () {
            console.log("geofireDestTrip succesfully removed");
        }).catch(function (error) {
            console.log(error);
        });
    };
    DriverGeofireService.prototype.getInfoUser = function (userId) {
        return this.afDB.object('users/' + userId).valueChanges();
    };
    DriverGeofireService.prototype.cancelGeoqueryDest = function (geofirename) {
        if (this.proofToCancelDest === geofirename) {
            if (this.geoquery1) {
                this.geoquery1.cancel();
                console.log('geoqueryDest deleted');
            }
            else {
                console.log('dont dest query');
            }
        }
    };
    DriverGeofireService.prototype.cancelGeoqueryOr = function (geofirename) {
        if (this.proofToCancelOr === geofirename) {
            if (this.geoquery2) {
                this.geoquery2.cancel();
                console.log('geoqueryOr deleted');
            }
            else {
                console.log('dont or query');
            }
        }
    };
    // set a new node on firebase which is the location of the Place
    DriverGeofireService.prototype.setLocationPlace = function (place, key, lat, lng) {
        this.dbRef = this.afDB.database.ref(place + '/geofirePlace/');
        this.geoFire = new __WEBPACK_IMPORTED_MODULE_2_geofire__(this.dbRef);
        this.geoFire.set(key, [lat, lng]).then(function () {
            console.log('location updated');
        }, function (error) {
            console.log('error: ' + error);
        });
    };
    // set geoquery that determines if the person is in place
    DriverGeofireService.prototype.setGeofirePlace = function (place, radius, lat, lng, driverId) {
        this.dbRef = this.afDB.database.ref(place + '/geofirePlace/');
        this.geoFire = new __WEBPACK_IMPORTED_MODULE_2_geofire__(this.dbRef);
        this.geoqueryP = this.geoFire.query({
            center: [lat, lng],
            radius: radius
        });
        this.keyEnteredPlace(place, driverId);
        console.log('geoquery place added');
    };
    DriverGeofireService.prototype.keyEnteredPlace = function (place, driverId) {
        this.geoqueryP.on("key_entered", function (key) {
            this.afDB.database.ref(place + '/drivers/' + driverId).update({
                geofireOrigin: true
            }).then(function () {
                console.log('geofireOrigin = true');
            });
            console.log(key + ' detected');
        }.bind(this));
    };
    DriverGeofireService.prototype.cancelGeoqueryPlace = function () {
        if (this.geoqueryP) {
            this.geoqueryP.cancel();
            console.log('geoqueryU deleted');
        }
        else {
            console.log('dont uni query');
        }
    };
    DriverGeofireService.prototype.cancelGeofireOrigin = function (place, driverId) {
        this.afDB.database.ref(place + '/drivers/' + driverId).update({
            geofireOrigin: false
        }).then(function () {
            console.log('geofireOrigin = false');
        });
    };
    DriverGeofireService.prototype.setHouseAddress = function (place, driverId, lat, lng) {
        this.afDB.database.ref(place + '/drivers/' + driverId + '/houseAddress/coordinates').update({
            lat: lat,
            lng: lng
        });
    };
    DriverGeofireService.prototype.setHouseAddressName = function (place, driverId, name) {
        this.afDB.database.ref(place + '/drivers/' + driverId + '/houseAddress/').update({
            name: name
        });
    };
    DriverGeofireService.prototype.getLocationPlace = function (place) {
        return this.afDB.object('/allPlaces/' + place).valueChanges();
    };
    DriverGeofireService.prototype.deleteKeyUserLMU = function (place, userId) {
        this.afDB.database.ref(place + '/users/' + userId + '/keyTrip/').remove();
    };
    DriverGeofireService.prototype.setOntripFalseUserLMU = function (place, userId) {
        this.afDB.database.ref(place + '/users/' + userId).update({
            onTrip: false
        });
    };
    DriverGeofireService.prototype.deleteDriverFromLMUofUser = function (place, userId, keyTrip) {
        this.afDB.database.ref(place + '/users/' + userId + '/availableReserves/' + keyTrip).remove();
    };
    DriverGeofireService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_fire_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["AngularFireAuth"]])
    ], DriverGeofireService);
    return DriverGeofireService;
}());

//# sourceMappingURL=d-geofire.services.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverTripsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(25);
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



var DriverTripsService = /** @class */ (function () {
    function DriverTripsService(afDB, AngularFireAuth) {
        this.afDB = afDB;
        this.AngularFireAuth = AngularFireAuth;
    }
    DriverTripsService.prototype.getTrip = function (place, keyTrip, driverUid) {
        //get trip in Trip's node
        return this.afDB.object(place + '/trips/' + driverUid + '/' + keyTrip).valueChanges();
    };
    DriverTripsService.prototype.getPendingUsers = function (place, keyTrip, driverUid) {
        //get trip in Trip's node
        return this.afDB.list(place + '/trips/' + driverUid + '/' + keyTrip + '/pendingUsers').valueChanges();
    };
    DriverTripsService.prototype.getKeyTrip = function (place, driverUid) {
        //get key of driver's trip
        return this.afDB.object(place + '/drivers/' + driverUid + '/keyTrip').valueChanges();
    };
    DriverTripsService.prototype.getOnTrip = function (place, userUid) {
        return this.afDB.object(place + '/drivers/' + userUid + '/onTrip').valueChanges();
    };
    DriverTripsService.prototype.getSpecificUser = function (place, keyTrip, driverUid, userId) {
        //get trip in Trip's node
        return this.afDB.list(place + '/trips/' + driverUid + '/' + keyTrip + '/pendingUsers/' + userId).valueChanges();
    };
    DriverTripsService.prototype.getReserveUsers = function (place, keyTrip, driverUid) {
        //get trip in Trip's node
        return this.afDB.list(place + '/reserves/' + driverUid + '/' + keyTrip + '/pendingUsers').valueChanges();
    };
    DriverTripsService.prototype.getLastMinuteUsers = function (place, keyTrip, driverUid) {
        //get trip in Trip's node
        return this.afDB.list(place + '/trips/' + driverUid + '/' + keyTrip + '/lastMinuteUsers').valueChanges();
    };
    DriverTripsService.prototype.getPickedUpUsers = function (place, keyTrip, driverUid) {
        //get trip in Trip's node
        return this.afDB.list(place + '/trips/' + driverUid + '/' + keyTrip + '/pickedUpUsers').valueChanges();
    };
    DriverTripsService.prototype.startTripForUsers = function (place, keyTrip, userId, driverId) {
        //create a trip in Trip's node in database     
        this.afDB.database.ref(place + '/users/' + userId).update({
            onTrip: true
        });
        this.afDB.database.ref(place + '/users/' + userId + '/keyTrip').update({
            keyTrip: keyTrip,
            driverId: driverId
        });
    };
    DriverTripsService.prototype.startTrip = function (place, keyTrip, driverUid, trip) {
        //create a trip in Trip's node in database
        this.afDB.database.ref(place + '/trips/' + driverUid + '/' + keyTrip).update(trip);
    };
    DriverTripsService.prototype.cancelTrip = function (place, keyTrip, driverUid, trip) {
        //create a trip in Trip's node in database
        this.afDB.database.ref(place + '/trips/' + driverUid + '/' + keyTrip).update(trip);
    };
    DriverTripsService.prototype.acceptLastMinute = function (place, driverUid, keyTrip, user) {
        this.afDB.database.ref(place + '/trips/' + driverUid + '/' + keyTrip + '/pendingUsers/' + user.userId).update(user);
    };
    DriverTripsService.prototype.noRepeatLMU = function (place, driverUid, keyTrip, userId) {
        this.afDB.database.ref(place + '/trips/' + driverUid + '/' + keyTrip + '/lastMinuteUsers/' + userId).update({
            noRepeat: true
        });
    };
    DriverTripsService.prototype.eliminateLastMinuteUser = function (place, driverUid, keyTrip, userId) {
        //eliminate the user from pendingUsers
        this.afDB.database.ref(place + '/trips/' + driverUid + '/' + keyTrip + '/lastMinuteUsers/' + userId).remove();
    };
    DriverTripsService.prototype.deleteReserve = function (place, keyTrip, driverUid) {
        this.afDB.database.ref(place + '/reserves/' + driverUid + '/' + keyTrip).remove();
    };
    DriverTripsService.prototype.deleteAllReserves = function (place, driverUid) {
        this.afDB.database.ref(place + '/reserves/' + driverUid).remove();
    };
    DriverTripsService.prototype.notifyLMUitsBeenRejected = function (place, userId) {
        this.afDB.database.ref(place + '/users/' + userId).update({
            cancelModalLMU: true
        }).then(function () {
            console.log('se notifico');
        });
    };
    DriverTripsService.prototype.pushKeyInDriver = function (place, keyTrip, DriverUid) {
        //push a key of the trip to the driver, in this way the driver can acces the trip in Trip's node
        this.afDB.database.ref(place + '/drivers/' + DriverUid).update({
            keyTrip: keyTrip
        });
    };
    DriverTripsService.prototype.pushOnTripInDriver = function (place, DriverUid) {
        //push a onTrip in Driver's node
        this.afDB.database.ref(place + '/drivers/' + DriverUid).update({
            onTrip: true
        });
    };
    DriverTripsService.prototype.eliminatePendingUsers = function (place, keyTrip, driverUid, userId) {
        //eliminate the user from pendingUsers
        this.afDB.database.ref(place + '/trips/' + driverUid + '/' + keyTrip + '/pendingUsers/' + userId).remove();
    };
    DriverTripsService.prototype.pickUp = function (place, keyTrip, driverUid, userId, user) {
        // add the driver to pickedUpUsers 
        this.afDB.database.ref(place + '/trips/' + driverUid + '/' + keyTrip + '/pickedUpUsers/' + userId).update(user);
    };
    DriverTripsService.prototype.addSavedKMGlobal = function (place, savedKM) {
        this.afDB.database.ref('/data/allTrips' + place).update({
            savedKM: savedKM
        });
    };
    DriverTripsService.prototype.addSavedKMGlobalPassengers = function (place, savedKM) {
        this.afDB.database.ref('/data/kmsSavedByPassengers/' + place).update({
            savedKM: savedKM
        });
    };
    DriverTripsService.prototype.createTripState = function (place, keyTrip, driverUid) {
        this.afDB.database.ref(place + '/tripsState/' + driverUid + '/' + keyTrip).update({
            saveTrip: false,
            canceledTrip: false
        });
    };
    DriverTripsService.prototype.eliminateTripState = function (place, keyTrip, driverUid) {
        this.afDB.database.ref(place + '/tripsState/' + driverUid + '/' + keyTrip).remove();
    };
    DriverTripsService.prototype.timeFinishedTrip = function (place, keyTrip, driverUid, date) {
        //set time when driver go to destination 
        this.afDB.database.ref(place + '/trips/' + driverUid + '/' + keyTrip).update({
            DestinationTime: date
        });
    };
    DriverTripsService.prototype.endTrip = function (place, keyTrip, driverUid) {
        //erase trip in trip's node
        this.afDB.database.ref(place + '/trips/' + driverUid + '/' + keyTrip).remove();
    };
    DriverTripsService.prototype.setOnTripFalse = function (place, driverUid) {
        // set false to onTrip instance in driver's node
        this.afDB.database.ref(place + '/drivers/' + driverUid).update({
            onTrip: false
        });
    };
    DriverTripsService.prototype.setOnTripFalseUser = function (place, userId) {
        // set false to onTrip instance in driver's node
        this.afDB.database.ref(place + '/users/' + userId).update({
            onTrip: false
        });
    };
    DriverTripsService.prototype.eliminateKeyTripUser = function (place, userId) {
        // set false to onTrip instance in driver's node
        this.afDB.database.ref(place + '/users/' + userId + '/keyTrip').remove();
    };
    DriverTripsService.prototype.eliminateKeyUser = function (place, userId, reserveId) {
        //eliminate keyTrip from user's node to eliminate access to that reserve
        this.afDB.database.ref(place + '/users/' + userId + '/myReserves/' + reserveId).remove();
    };
    DriverTripsService.prototype.saveTripOnRecordsUser = function (place, userUid, trip, keyTrip) {
        //save trip in recordTrips
        this.afDB.database.ref(place + '/users/' + userUid + '/recordTrips/' + keyTrip).update(trip);
    };
    DriverTripsService.prototype.cancelUserFromReserve = function (place, driverUid, keyTrip, userId) {
        this.afDB.database.ref(place + '/users/' + userId + '/cancelReserve/').update({
            cancelReserve: true,
            driverId: driverUid,
            keyTrip: keyTrip
        });
    };
    DriverTripsService.prototype.setOnTrip = function (place, driverUid) {
        // set false to onTrip instance in driver's node
        this.afDB.database.ref(place + '/drivers/' + driverUid).update({
            onTrip: true
        });
    };
    DriverTripsService.prototype.endTripForUsers = function (place, userId) {
        this.afDB.database.ref(place + '/users/' + userId + '/').update({
            saveTrip: true
        });
    };
    DriverTripsService.prototype.sentTripUser = function (place, userId, trip) {
        this.afDB.database.ref(place + '/users/' + userId + '/trip').update(trip);
    };
    DriverTripsService.prototype.saveTripUser = function (place, driverUid, keyTrip) {
        // this instance allows the user to save the trip in his records
        this.afDB.database.ref(place + '/tripsState/' + driverUid + '/' + keyTrip).update({
            saveTrip: true
        });
    };
    DriverTripsService.prototype.allTrips = function (place, driverUid, keyTrip, trip) {
        // this instance allows the user to save the trip in his records
        this.afDB.database.ref('data/allTrips/' + place + '/' + driverUid + '/' + keyTrip).update(trip);
    };
    DriverTripsService.prototype.getTripState = function (place, reserveId, driverId) {
        return this.afDB.object(place + '/tripsState/' + driverId + '/' + reserveId + '/').valueChanges();
    };
    DriverTripsService.prototype.eraseKeyTrip = function (place, driverUid) {
        // erase keyTrip in driver's node
        this.afDB.database.ref(place + '/drivers/' + driverUid + '/keyTrip').remove();
    };
    DriverTripsService.prototype.cancelUserFromTrip = function (place, driverUid, keyTrip, userId) {
        this.afDB.database.ref(place + '/users/' + userId + '/').update({
            cancelTrip: true
        });
        //eliminate the user from pendingUsers
        this.afDB.database.ref(place + '/trips/' + driverUid + '/' + keyTrip + '/pendingUsers/' + userId).remove();
    };
    DriverTripsService.prototype.saveTripOnRecords = function (place, driverUid, trip, keyTrip) {
        //save trip in recordTrips
        this.afDB.database.ref(place + '/drivers/' + driverUid + '/recordTrips/' + keyTrip).update(trip);
    };
    DriverTripsService.prototype.sendPaymentInfoOfTrip = function (place, driverId, amount) {
        this.afDB.database.ref(place + '/drivers/' + driverId).update({
            pendingToReceive: amount
        });
    };
    DriverTripsService.prototype.sendPaymentInfoOfTripForUser = function (place, userId, amount) {
        this.afDB.database.ref(place + '/users/' + userId).update({
            pendingToPay: amount
        });
    };
    DriverTripsService.prototype.reduceNumberPersonalFreeRides = function (place, userId, remainingRides) {
        this.afDB.database.ref(place + '/users/' + userId).update({
            personalFreeRides: remainingRides
        });
    };
    DriverTripsService.prototype.reduceNumberCompanyFreeRides = function (city, userCompany, remainingRides) {
        this.afDB.database.ref('allCities/' + city + '/allPlaces/' + userCompany).update({
            freeRidesNumber: remainingRides
        });
    };
    DriverTripsService.prototype.cancelReserve = function (place, driverUid, keyTrip) {
        this.afDB.database.ref(place + '/reserves/' + driverUid + '/' + keyTrip).remove();
        console.log("hola");
    };
    DriverTripsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_fire_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"]])
    ], DriverTripsService);
    return DriverTripsService;
}());

//# sourceMappingURL=d-trips.service.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return geofireService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_geofire__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_geofire___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_geofire__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reserves_service__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__signup_services__ = __webpack_require__(200);
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

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sendUsersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(25);
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

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return instancesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__ = __webpack_require__(11);
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

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TripsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(59);
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
    TripsService.prototype.getSaveTrip = function (place, userUid) {
        return this.afDB.object(place + '/users/' + userUid + '/saveTrip/').valueChanges();
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
        this.afDB.database.ref(place + '/trips/' + driverId + '/' + keyTrip + '/lastMinuteUsers/' + userId).remove();
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
    TripsService.prototype.eliminateSeenAvailableReserves = function (place, userUid) {
        //eliminate keyTrip from user's node to eliminate access to that reserve
        this.afDB.database.ref(place + '/users/' + userUid + '/reservesSeenInAvailableReserves/').remove();
    };
    TripsService.prototype.eliminateSeenAvailableReservesLMU = function (place, userUid) {
        //eliminate keyTrip from user's node to eliminate access to that reserve
        this.afDB.database.ref(place + '/users/' + userUid + '/reservesSeenInAvailableReservesLMU/').remove();
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
    TripsService.prototype.recordTripsInBike = function (place, userUid, date, route, or, dest, distance) {
        this.afDB.database.ref(place + '/users/' + userUid + '/recordTripBicycle/').push({
            date: date,
            route: route,
            or: or,
            dest: dest,
            distance: distance
        });
    };
    TripsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_fire_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */]])
    ], TripsService);
    return TripsService;
}());

//# sourceMappingURL=trips.service.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return authenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(123);
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

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MetricsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(25);
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
    MetricsService.prototype.metricTripsInBikes = function (place, userUid, date, route, or, dest, distance) {
        //send every reserve that were created
        this.afDB.database.ref('data/tripsInBikes/' + place).push({
            date: date,
            dest: dest,
            or: or,
            userId: userUid,
            distance: distance,
            route: route,
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

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverSendFeedbackService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DriverSendFeedbackService = /** @class */ (function () {
    function DriverSendFeedbackService(afDB, alertCtrl) {
        this.afDB = afDB;
        this.alertCtrl = alertCtrl;
    }
    DriverSendFeedbackService.prototype.sendFeedback = function (place, title, info, name, lastname, number, userId) {
        var _this = this;
        this.afDB.database.ref(place + '/feedback/' + title + '/drivers/' + userId).set({
            info: info,
            name: name,
            lastname: lastname,
            number: number
        }).then(function () {
            var alert = _this.alertCtrl.create({
                title: 'Hemos recibido tu mensaje',
                subTitle: 'Revisaremos tu inquietud y nos pondremos en contácto contigo lo antes posible',
                buttons: ['OK'],
            });
            alert.present();
        });
    };
    DriverSendFeedbackService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_fire_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */]])
    ], DriverSendFeedbackService);
    return DriverSendFeedbackService;
}());

//# sourceMappingURL=d-sendFeedback.service.js.map

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sendFeedbackService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__ = __webpack_require__(11);
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

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverPriceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DriverPriceService = /** @class */ (function () {
    function DriverPriceService(afDB, AngularFireAuth, alertCtrl) {
        this.afDB = afDB;
        this.AngularFireAuth = AngularFireAuth;
        this.alertCtrl = alertCtrl;
    }
    DriverPriceService.prototype.setPriceAndNote = function (place, user, price, note, car) {
        __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref(place + '/drivers/' + user + '/trips').update({
            //set important information with note
            price: price,
            note: note,
            car: car,
        });
    };
    DriverPriceService.prototype.setPrice = function (place, user, price, car) {
        __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref(place + '/drivers/' + user + '/trips').update({
            price: price,
            car: car,
        });
    };
    DriverPriceService.prototype.saveTripToReserves = function (driverUid, or, dest, timeLeaving, price, car, note, driver) {
        var arrayReserves = this.afDB.database.ref('reserves/' + driverUid + '/').push({
            orReserve: or,
            destReserve: dest,
            timeLeaving: timeLeaving,
            price: price,
            car: car,
            note: note,
            driver: driver
        });
        //get key of reserve pushed
        var KeyLastTripSaved = arrayReserves.key;
        //save key inside reserve
        __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref('reserves/' + driverUid + '/' + arrayReserves.key + '/').update({
            keyTrip: arrayReserves.key
        });
        //save key inside driver momentarily to access reserve 
        __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref('drivers/' + driverUid + '/' + arrayReserves.key).update({
            keyLastReserve: arrayReserves.key
        });
        console.log(KeyLastTripSaved);
    };
    DriverPriceService.prototype.sendPaymentInfo = function (place, driverId, id, bankAccount, bankEntity) {
        var _this = this;
        this.afDB.database.ref(place + '/drivers/' + driverId).update({
            idNumber: id,
            bankAccount: bankAccount,
            bankEntity: bankEntity
        }).then(function () {
            var alert = _this.alertCtrl.create({
                title: 'Información recibida',
                subTitle: 'Si tienes un saldo pendiente por recibir mayor o igual a COP$10.000, en los próximos dias estará llegando a tu cuenta bancaria',
                buttons: ['OK']
            });
            alert.present();
        });
    };
    DriverPriceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_fire_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* AlertController */]])
    ], DriverPriceService);
    return DriverPriceService;
}());

//# sourceMappingURL=d-price.service.js.map

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverMetricsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(25);
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



var DriverMetricsService = /** @class */ (function () {
    function DriverMetricsService(afDB, AngularFireAuth) {
        this.afDB = afDB;
        this.AngularFireAuth = AngularFireAuth;
    }
    DriverMetricsService.prototype.createdReserves = function (place, driver, car, house, placeD, precio, startHour, typeOfReserve) {
        //send every reserve that were created
        this.afDB.database.ref('data/allReservesCreated/' + place).push({
            driver: driver,
            car: car,
            house: house,
            placeD: placeD,
            price: precio,
            startHour: startHour,
            type: typeOfReserve,
            place: place
        });
    };
    DriverMetricsService.prototype.tripsInitiated = function (place, driverUid, keyTrip, trip) {
        //send every trip that were initiated
        this.afDB.database.ref('data/allTripsInitiated/' + place).push(trip);
    };
    DriverMetricsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_fire_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"]])
    ], DriverMetricsService);
    return DriverMetricsService;
}());

//# sourceMappingURL=d-metrics.service.js.map

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverChatsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(25);
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



var DriverChatsService = /** @class */ (function () {
    function DriverChatsService(afDB, AngularFireAuth) {
        this.afDB = afDB;
        this.AngularFireAuth = AngularFireAuth;
    }
    DriverChatsService.prototype.getChatsFromReserve = function (place, reserveKey, driverUid) {
        //trae todos los chats del usuario
        return this.afDB.list(place + '/reserves/' + driverUid + '/' + reserveKey + '/chat/messages/').valueChanges();
    };
    DriverChatsService.prototype.getChatsFromTrip = function (place, reserveKey, driverUid) {
        //trae todos los chats del usuario
        return this.afDB.list(place + '/trips/' + driverUid + '/' + reserveKey + '/chat/messages/').valueChanges();
    };
    DriverChatsService.prototype.pushMessageUserInReserve = function (place, reserveKey, driverUid, userUid, message, name) {
        //envía todos los chats del usuario
        this.afDB.database.ref(place + '/reserves/' + driverUid + '/' + reserveKey + '/chat/messages/').push({
            message: message,
            uid: userUid,
            name: name
        });
    };
    DriverChatsService.prototype.pushMessageUserInTrip = function (place, reserveKey, driverUid, userUid, message, name) {
        //envía todos los chats del usuario
        this.afDB.database.ref(place + '/trips/' + driverUid + '/' + reserveKey + '/chat/messages/').push({
            message: message,
            uid: userUid,
            name: name
        });
    };
    DriverChatsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_fire_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"]])
    ], DriverChatsService);
    return DriverChatsService;
}());

//# sourceMappingURL=d-chat.service.js.map

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return noteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(69);
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

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return chatsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(25);
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

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverWindowService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DriverWindowService = /** @class */ (function () {
    function DriverWindowService() {
    }
    Object.defineProperty(DriverWindowService.prototype, "windowRef", {
        get: function () {
            return window;
        },
        enumerable: true,
        configurable: true
    });
    DriverWindowService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], DriverWindowService);
    return DriverWindowService;
}());

//# sourceMappingURL=d-window.service.js.map

/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(494);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 494:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(637);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_google_maps__ = __webpack_require__(638);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_fire__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_fire_database__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_fire_auth__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_userauthentication_service__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_firebase__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_geolocation__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_sendCoords_service__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_sendUsers_service__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_note_service__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_call_number__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_geoFire_service__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_common__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_instances_service__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_signup_services__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_native_geocoder_ngx__ = __webpack_require__(641);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_email_composer_ngx__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_sendFeedback_service__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_chat_service__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_reserves_service__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_trips_service__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_environment_service__ = __webpack_require__(642);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_location_accuracy__ = __webpack_require__(643);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__services_metrics_service__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_native_camera___ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ionic_native_fcm__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__ionic_native_clipboard___ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__services_d_chat_service__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__services_d_driverauthentication_service__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__services_d_geofire_services__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__services_d_instances_services__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__services_d_metrics_service__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__services_d_price_service__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__services_d_sendCoords_service__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__services_d_sendFeedback_service__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__services_d_sendUsers_service__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__services_d_signup_service__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__services_d_trips_service__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__services_d_window_service__ = __webpack_require__(372);
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
                        { loadChildren: '../pages/canceltrip/driverCanceltrip.module#DriverCanceltripPageModule', name: 'DriverCanceltripPage', segment: 'driverCanceltrip', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-schedule/add-schedule.module#DriverAddSchedulePageModule', name: 'DriverAddSchedulePage', segment: 'add-schedule', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chats/driverChats.module#DriverChatsPageModule', name: 'DriverChatsPage', segment: 'driverChats', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chatting/driverChatting.module#DriverChattingPageModule', name: 'DriverChattingPage', segment: 'driverChatting', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/detailsreserve/driverDetailsreserve.module#DriverDetailsReservePagePageModule', name: 'DriverDetailsReservePage', segment: 'driverDetailsreserve', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/help/driverHelp.module#DriverHelpPageModule', name: 'DriverHelpPage', segment: 'driverHelp', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/confirmtrip/driverConfirmtrip.module#DriverConfirmtripPageModule', name: 'DriverConfirmtripPage', segment: 'driverConfirmtrip', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/driverLogin.module#DriverLoginPageModule', name: 'DriverLoginPage', segment: 'driverLogin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/more/driverMore.module#DriverMorePageModule', name: 'DriverMorePage', segment: 'driverMore', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/p-canceltrip/canceltrip.module#CanceltripPageModule', name: 'CanceltripPage', segment: 'canceltrip', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/p-changecar/changecar.module#ChangeCarPageModule', name: 'ChangeCarPage', segment: 'changecar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/p-confirm-reservation/confirm-reservation.module#ConfirmReservationPageModule', name: 'ConfirmReservationPage', segment: 'confirm-reservation', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/p-confirmnote/confirmnote.module#ConfirmNotePageModule', name: 'ConfirmNotePage', segment: 'confirmnote', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/p-chatting/chatting.module#ChattingPageModule', name: 'ChattingPage', segment: 'chatting', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/p-confirmtrip/confirmtrip.module#ConfirmtripPageModule', name: 'ConfirmtripPage', segment: 'confirmtrip', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/p-confirmpopup/confirmpopup.module#ConfirmpopupPageModule', name: 'ConfirmpopupPage', segment: 'confirmpopup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/p-creategroup/creategroup.module#CreateGroupPageModule', name: 'CreateGroupPage', segment: 'creategroup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/p-groupdetail/groupdetail.module#GroupDetailPageModule', name: 'GroupDetailPage', segment: 'groupdetail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/p-login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/p-help/help.module#HelpPageModule', name: 'HelpPage', segment: 'help', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/p-more/more.module#MorePageModule', name: 'MorePage', segment: 'more', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/p-membersgroup/membersgroup.module#MembersGroupPageModule', name: 'MembersGroupPage', segment: 'membersgroup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/p-profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/p-ratetrip/ratetrip.module#RatetripPageModule', name: 'RatetripPage', segment: 'ratetrip', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/p-reserveinfo/reserveinfo.module#ConfirmreservationPageModule', name: 'ReserveinfoPage', segment: 'reserveinfo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/p-public-profile/public-profile.module#PublicProfilePageModule', name: 'PublicProfilePage', segment: 'public-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/p-reservetrip/reservetrip.module#ReservetripPageModule', name: 'ReservetripPage', segment: 'reservetrip', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/p-terms/terms.module#TermsPageModule', name: 'TermsPage', segment: 'terms', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/p-tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/p-support/support.module#SupportPageModule', name: 'SupportPage', segment: 'support', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/p-verification-number/verification-number.module#VerificationNumberPageModule', name: 'VerificationNumberPage', segment: 'verification-number', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/p-walkthrough/walkthrough.module#WalkthroughPageModule', name: 'WalkthroughPage', segment: 'walkthrough', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/p-verification-images/verification-images.module#VerificationImagesPageModule', name: 'VerificationImagesPage', segment: 'verification-images', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/p-wallet/wallet.module#WalletPageModule', name: 'WalletPage', segment: 'wallet', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/payments-info/payments-info.module#DriverPaymentsInfoPageModule', name: 'DriverPaymentsInfoPage', segment: 'payments-info', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/driverProfile.module#DriverProfilePageModule', name: 'DriverProfilePage', segment: 'driverProfile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/remove-schedule/remove-schedule.module#DriverRemoveSchedulePageModule', name: 'DriverRemoveSchedulePage', segment: 'remove-schedule', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/public-profile/driver-public-profile.module#DriverPublicProfilePageModule', name: 'DriverPublicProfilePage', segment: 'driver-public-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ratetrip/driverRatetrip.module#DriverRatetripPageModule', name: 'DriverRatetripPage', segment: 'driverRatetrip', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/showinfocar/showinfocar.module#DriverShowInfoCarPageModule', name: 'DriverShowInfoCarPage', segment: 'showinfocar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/support/driverSupport.module#DriverSupportPageModule', name: 'DriverSupportPage', segment: 'driverSupport', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/terms/driverTerms.module#DriverTermsPageModule', name: 'DriverTermsPage', segment: 'driverTerms', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/successnotification/successnotification.module#DriverSuccessNotificationPageModule', name: 'DriverSuccessNotificationPage', segment: 'successnotification', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/wallet/driverWallet.module#DriverWalletPageModule', name: 'DriverWalletPage', segment: 'driverWallet', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/verification-number/driver-verification-number.module#DrverVerificationNumberPageModule', name: 'DrverVerificationNumberPage', segment: 'driver-verification-number', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/verification-images/driver-verification-images.module#DriverVerificationImagesPageModule', name: 'DriverVerificationImagesPage', segment: 'driver-verification-images', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/walkthrough/driverWalkthrough.module#DriverWalkthroughPageModule', name: 'DriverWalkthroughPage', segment: 'driverWalkthrough', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/car-registration-login/car-registration-login.module#DriverCarRegistrationPageModule', name: 'DriverCarRegistrationLoginPage', segment: 'car-registration-login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/car-registration/car-registration.module#DriverCarRegistrationPageModule', name: 'DriverCarRegistrationPage', segment: 'car-registration', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/confirmprice/driverConfirmprice.module#DriverConfirmpricePageModule', name: 'DriverConfirmpricePage', segment: 'driverConfirmprice', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/myride/driverMyride.module#DriverMyridePageModule', name: 'DriverMyridePage', segment: 'driverMyride', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/p-myride/myride.module#MyridePageModule', name: 'MyridePage', segment: 'myride', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/p-listride/listride.module#ListridePageModule', name: 'ListridePage', segment: 'listride', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/p-signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/p-tripbike/tripbike.module#TripbikePageModule', name: 'TripbikePage', segment: 'tripbike', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reservetrip/driverReservetrip.module#DriverReservetripPageModule', name: 'DriverReservetripPage', segment: 'driverReservetrip', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/schedule/schedule.module#DriverSchedulePageModule', name: 'DriverSchedulePage', segment: 'schedule', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/driverSignup.module#DriverSignupPageModule', name: 'DriverSignupPage', segment: 'driverSignup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/specifyorigin/specifyorigin.module#DriverSpecifyOriginPageModule', name: 'DriverSpecifyOriginPage', segment: 'specifyorigin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/p-bikemode/bikemode.module#FindridePassPageModule', name: 'BikeModePage', segment: 'bikemode', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pickup/pickup.module#DriverPickupPageModule', name: 'DriverPickupPage', segment: 'pickup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/findride/driverFindride.module#DriverFindridePageModule', name: 'DriverFindridePage', segment: 'driverFindride', priority: 'low', defaultHistory: [] },
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
                __WEBPACK_IMPORTED_MODULE_33__services_d_chat_service__["a" /* DriverChatsService */],
                __WEBPACK_IMPORTED_MODULE_34__services_d_driverauthentication_service__["a" /* DriverAuthenticationService */],
                __WEBPACK_IMPORTED_MODULE_35__services_d_geofire_services__["a" /* DriverGeofireService */],
                __WEBPACK_IMPORTED_MODULE_36__services_d_instances_services__["a" /* DriverInstancesService */],
                __WEBPACK_IMPORTED_MODULE_37__services_d_metrics_service__["a" /* DriverMetricsService */],
                __WEBPACK_IMPORTED_MODULE_38__services_d_price_service__["a" /* DriverPriceService */],
                __WEBPACK_IMPORTED_MODULE_39__services_d_sendCoords_service__["a" /* DriverSendCoordsService */],
                __WEBPACK_IMPORTED_MODULE_40__services_d_sendFeedback_service__["a" /* DriverSendFeedbackService */],
                __WEBPACK_IMPORTED_MODULE_41__services_d_sendUsers_service__["a" /* DriverSendUsersService */],
                __WEBPACK_IMPORTED_MODULE_42__services_d_signup_service__["a" /* DriverSignUpService */],
                __WEBPACK_IMPORTED_MODULE_43__services_d_trips_service__["a" /* DriverTripsService */],
                __WEBPACK_IMPORTED_MODULE_44__services_d_window_service__["a" /* DriverWindowService */],
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

/***/ 637:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_fcm__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_firebase__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angularfire2_database__);
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
    function MyApp(alertCtrl, statusBar, splashScreen, geolocation, platform, fcm, toastController, firebase, afDB, loadingCtrl) {
        var _this = this;
        this.alertCtrl = alertCtrl;
        this.geolocation = geolocation;
        this.platform = platform;
        this.fcm = fcm;
        this.toastController = toastController;
        this.firebase = firebase;
        this.afDB = afDB;
        this.loadingCtrl = loadingCtrl;
        this.rootPage = 'LoginPage';
        this.pagesUser = [];
        this.pagesDriver = [];
        this.pagesUser = [
            { title: 'Mis viajes', component: 'ReservetripPage', icon: 'md-paper' },
            { title: 'Billetera', component: 'WalletPage', icon: 'card' },
            { title: 'Mi perfil', component: 'MorePage', icon: 'person' },
            { title: 'Soporte', component: 'HelpPage', icon: 'help' },
            { title: 'Instrucciones', component: 'WalkthroughPage', icon: 'alert' },
            { title: 'Modo Bicicleta', component: 'BikeModePage', icon: 'md-bicycle' },
            { title: 'Pasar a Pooler', component: 'DriverFindridePage', icon: 'speedometer' },
        ];
        this.pagesDriver = [
            { title: 'Mis viajes', component: 'DriverReservetripPage', icon: 'md-paper' },
            { title: 'Billetera', component: 'DriverWalletPage', icon: 'card' },
            { title: 'Horario', component: 'DriverSchedulePage', icon: 'time' },
            { title: 'Mi perfil', component: 'DriverMorePage', icon: 'person' },
            { title: 'Instrucciones', component: 'DriverWalkthroughPage', icon: 'alert' },
            { title: 'Modo Bicicleta', component: 'BikeModePage', icon: 'md-bicycle' },
            { title: 'Pasar a Pasajero', component: 'FindridePassPage', icon: 'people' },
        ];
        // const firebaseConfig = {
        //   apiKey: "AIzaSyB7Py2pOZEUJD2Ar34a-8z-rReiDtsikxw",
        //   authDomain: "waypool-511be.firebaseapp.com",
        //   databaseURL: "https://waypool-511be.firebaseio.com",
        //   projectId: "waypool-511be",
        //   storageBucket: "waypool-511be.appspot.com",
        //   messagingSenderId: "904521954579",
        // apiKey: "AIzaSyCvN6NNgoWCbOOUxBP9H23rbb7QSnBCf60",
        // authDomain: "fixingdatabase.firebaseapp.com",
        // databaseURL: "https://fixingdatabase.firebaseio.com",
        // projectId: "fixingdatabase",
        // storageBucket: "",
        // messagingSenderId: "1090675636677",
        // appId: "1:1090675636677:web:672dbea79f33a407"
        // };
        // firebaseFirst.initializeApp(firebaseConfig);
        statusBar.styleDefault();
        splashScreen.hide();
        var loading = this.loadingCtrl.create({
            spinner: 'crescent',
            content: "\n        <div class=\"custom-spinner-container\">\n          <div class=\"custom-spinner-box\"></div>\n        </div>"
        });
        loading.present();
        //location gathering
        this.geolocation.getCurrentPosition({ enableHighAccuracy: true }).then(function () {
            console.log('location catched');
        }).catch(function (error) {
            console.log('this is the geolocation error: ' + error);
        });
        // notifications
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
        //check if no connection to DB
        setTimeout(function () {
            __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref('.info/connected').on('value', function (snap) {
                if (snap.val() === false) {
                    loading.dismiss();
                    _this.alertInternet = _this.alertCtrl.create({
                        title: '¡Oops!',
                        subTitle: 'Ocurrió un error conectándote a Waypool. Por favor verifica tu conexión a internet',
                    });
                    _this.alertInternet.present();
                }
                else if (snap.val() === true) {
                    if (_this.alertInternet) {
                        loading.dismiss();
                        _this.alertInternet.dismiss();
                    }
                    else {
                    }
                }
            });
        }, 2000);
        //identify user and their state
        __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"]().onAuthStateChanged(function (user) {
            if (user) {
                _this.userId = user.uid;
                _this.afDB.database.ref('allUsers/' + user.uid + '/appStatus/').once('value').then(function (snap) {
                    if (snap.val() === 'user') {
                        _this.showUser = true;
                        if (user.emailVerified == false) {
                            loading.dismiss();
                            _this.rootPage = 'LoginPage';
                        }
                        else {
                            loading.dismiss();
                            _this.rootPage = 'FindridePassPage';
                        }
                    }
                    else if (snap.val() === 'driver') {
                        _this.showUser = false;
                        if (user.emailVerified == false) {
                            loading.dismiss();
                            _this.rootPage = 'LoginPage';
                        }
                        else {
                            loading.dismiss();
                            _this.rootPage = 'DriverFindridePage';
                        }
                    }
                    else {
                        _this.showUser = true;
                        if (user.emailVerified == false) {
                            loading.dismiss();
                            _this.rootPage = 'LoginPage';
                        }
                        else {
                            loading.dismiss();
                            _this.rootPage = 'FindridePassPage';
                        }
                    }
                });
            }
            else {
                loading.dismiss();
                _this.rootPage = 'LoginPage';
            }
        });
    }
    MyApp.prototype.openPage = function (page) {
        var _this = this;
        if (page.component === 'DriverFindridePage') {
            this.nav.setRoot('DriverFindridePage').then(function () {
                _this.afDB.database.ref('allUsers/' + _this.userId).update({
                    appStatus: 'driver'
                }).then(function () {
                    _this.showUser = false;
                });
            });
        }
        else if (page.component === 'FindridePassPage') {
            this.nav.setRoot('FindridePassPage').then(function () {
                _this.afDB.database.ref('allUsers/' + _this.userId).update({
                    appStatus: 'user'
                }).then(function () {
                    _this.showUser = true;
                    // this.showDriver = false;
                });
            });
        }
        else {
            this.nav.push(page.component);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\danie\Documents\waypool\prod\findyourcrew\waypool_costumer\src\app\app.html"*/'<ion-menu [content]="content" >\n\n    <ion-header>\n\n      <ion-toolbar>\n\n        <ion-title>Menu</ion-title>\n\n      </ion-toolbar>\n\n    </ion-header>\n\n    <ion-content>\n\n      <!-- user -->\n\n      <ion-list *ngIf=\'showUser === true\'>\n\n        <button menuClose ion-item *ngFor="let p of pagesUser" (click)="openPage(p)">\n\n          <ion-icon style="margin-right: 10px; font-size: 26px;" name={{p.icon}}></ion-icon>      \n\n\n\n          {{p.title}}                \n\n        </button>\n\n      \n\n      </ion-list>\n\n\n\n      <!-- driver -->\n\n      <ion-list *ngIf=\'showUser === false\'>\n\n          <button menuClose ion-item *ngFor="let p of pagesDriver" (click)="openPage(p)">\n\n            <ion-icon style="margin-right: 10px; font-size: 26px;" name={{p.icon}}></ion-icon>      \n\n  \n\n            {{p.title}}                \n\n          </button>\n\n        \n\n        </ion-list>\n\n    </ion-content>\n\n  </ion-menu>\n\n\n\n  <!-- <ion-menu [content]="content" >\n\n    <ion-header>\n\n      <ion-toolbar>\n\n        <ion-title>Menu</ion-title>\n\n      </ion-toolbar>\n\n    </ion-header>\n\n    <ion-content>\n\n      <ion-list>\n\n        <button menuClose ion-item *ngFor="let p of pagesDriver" (click)="openPage(p)">\n\n          <ion-icon style="margin-right: 10px; font-size: 26px;" name={{p.icon}}></ion-icon>      \n\n\n\n          {{p.title}}                \n\n        </button>\n\n      \n\n      </ion-list>\n\n    </ion-content>\n\n  </ion-menu> -->\n\n  \n\n  <ion-nav  #content [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\danie\Documents\waypool\prod\findyourcrew\waypool_costumer\src\app\app.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_fcm__["a" /* FCM */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_firebase__["a" /* Firebase */], __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 642:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environmentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(69);
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

},[373]);
//# sourceMappingURL=main.js.map