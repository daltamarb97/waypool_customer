webpackJsonp([62],{

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
    //gloabl variable for place identifaction
    function SignUpService(afDB, toastCtrl) {
        this.afDB = afDB;
        this.toastCtrl = toastCtrl;
    }
    SignUpService.prototype.saveUser = function (user) {
        this.afDB.database.ref('/usersTest/' + user.userId).update(user);
        this.afDB.database.ref('/driversTest/' + user.userId).update(user);
    };
    SignUpService.prototype.saveUserTest = function (user) {
        this.afDB.database.ref('/usersTest/' + user.userId).update(user);
        this.afDB.database.ref('/driversTest/' + user.userId).update(user);
    };
    SignUpService.prototype.getAllCities = function () {
        return this.afDB.list('allCities/').valueChanges();
    };
    SignUpService.prototype.getInfoPlace = function (place) {
        return this.afDB.object('/allPlaces/' + place).valueChanges();
    };
    SignUpService.prototype.saveDriver = function (user) {
        //erase this one, it just for testing
        this.afDB.database.ref('driversTest/' + user.userId).set(user);
    };
    SignUpService.prototype.pushDocsCarne = function (userId) {
        this.afDB.database.ref('/driversTest/' + userId + '/documents').update({
            carne: false
        });
        this.afDB.database.ref('/usersTest/' + userId + '/documents').update({
            carne: false
        });
    };
    SignUpService.prototype.pushDocsId = function (userId) {
        this.afDB.database.ref('/driversTest/' + userId + '/documents').update({
            id: false
        });
        this.afDB.database.ref('/usersTest/' + userId + '/documents').update({
            id: false
        });
    };
    SignUpService.prototype.getDrivers = function () {
        return this.afDB.list('/drivers').valueChanges();
    };
    SignUpService.prototype.getMyInfo = function (userId) {
        return this.afDB.object('/usersTest/' + userId).valueChanges();
    };
    SignUpService.prototype.getSaveTrip = function (userId, place) {
        return this.afDB.object('/usersTest/' + userId + '/saveTrip/').valueChanges();
    };
    SignUpService.prototype.getEmails = function (enterprise) {
        return this.afDB.list('allPlaces/' + enterprise + '/emails').valueChanges();
    };
    SignUpService.prototype.checkMyReserves = function (userId) {
        return this.afDB.list('/usersTest/' + userId + '/myReserves').valueChanges();
    };
    SignUpService.prototype.saveUserInAllUsers = function (user, city) {
        this.afDB.database.ref('/allusersTest/' + user).update({
            city: city
        });
    };
    SignUpService.prototype.getInfoDriver = function (userDriverId) {
        return this.afDB.object('driversTest/' + userDriverId).valueChanges();
    };
    SignUpService.prototype.deleteAccount = function (userId) {
        this.afDB.database.ref('/usersTest/' + userId).remove();
        this.afDB.database.ref('/driversTest/' + userId).remove();
    };
    SignUpService.prototype.getMyInfoForProfile = function (userId) {
        return this.afDB.object('/usersTest/' + userId).valueChanges();
    };
    SignUpService.prototype.saveInfoProfile = function (userUid, phone, about) {
        this.afDB.database.ref('/usersTest/' + userUid).update({
            phone: phone,
            about: about
        }).then(function () {
            console.log('changed info');
        }).catch(function (err) {
            console.log('this is the error: ' + err);
        });
    };
    SignUpService.prototype.saveInfoProfileUrl = function (userUid, url) {
        //permite configurar la información del perfil
        this.afDB.database.ref('/usersTest/' + userUid).update({
            url: url
        });
    };
    SignUpService.prototype.saveInfoProfileAbout = function (userUid, about) {
        //permite configurar la información del perfil
        this.afDB.database.ref('/usersTest/' + userUid).update({
            about: about
        });
    };
    SignUpService.prototype.saveInfoProfilePhone = function (userUid, phone) {
        //permite configurar la información del perfil
        this.afDB.database.ref('/usersTest/' + userUid).update({
            phone: phone
        });
    };
    SignUpService.prototype.setFixedLocationCoordinates = function (user, lat, lng) {
        this.afDB.database.ref('/usersTest/' + user + '/fixedLocation/coordinates').update({
            lat: lat,
            lng: lng
        });
        this.afDB.database.ref('/driversTest/' + user + '/fixedLocation/coordinates').update({
            lat: lat,
            lng: lng
        });
    };
    SignUpService.prototype.setFixedLocationName = function (user, name) {
        this.afDB.database.ref('/usersTest/' + user + '/fixedLocation').update({
            name: name
        });
        this.afDB.database.ref('/driversTest/' + user + '/fixedLocation').update({
            name: name
        });
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
    reservesService.prototype.setOnTrip = function (userUid) {
        this.afDB.database.ref('/usersTest/' + userUid).update({
            onTrip: true
        });
    };
    reservesService.prototype.getMyReservesUser = function (userUid) {
        //get reserves of that i have enter
        return this.afDB.list('/usersTest/' + userUid + '/myReserves').valueChanges();
    };
    reservesService.prototype.getMyReservesSelected = function (userUid) {
        // 
        return this.afDB.list('/usersTest/' + userUid + '/myReserves').valueChanges();
    };
    reservesService.prototype.getReserves = function (userUid) {
        //get reserves of the geofire
        return this.afDB.list('/usersTest/' + userUid + '/availableReserves').valueChanges();
    };
    reservesService.prototype.getCrews = function (userUid) {
        //get reserves of the geofire
        return this.afDB.list('/usersTest/' + userUid + '/availableCrews').valueChanges();
    };
    reservesService.prototype.getSeenReservesInAvailableReserves = function (userUid) {
        //get reserves of the geofire
        return this.afDB.list('/usersTest/' + userUid + '/reservesSeenInAvailableReserves').valueChanges();
    };
    reservesService.prototype.getSeenCrewsInAvailableCrews = function (userUid) {
        //get reserves of the geofire
        return this.afDB.list('/usersTest/' + userUid + '/crewsSeenInAvailableCrews').valueChanges();
    };
    reservesService.prototype.getSeenReservesInAvailableReservesRoute = function (userUid) {
        //get reserves of the geofire
        return this.afDB.list('/usersTest/' + userUid + '/reservesSeenInAvailableReservesRoute').valueChanges();
    };
    reservesService.prototype.getSeenCrewsInAvailableCrewsRoute = function (userUid) {
        //get reserves of the geofire
        return this.afDB.list('/usersTest/' + userUid + '/crewsSeenInAvailableCrewsRoute').valueChanges();
    };
    reservesService.prototype.getSeenReservesInAvailableReservesLMU = function (userUid) {
        //get reserves of the geofire
        return this.afDB.list('/usersTest/' + userUid + '/reservesSeenInAvailableReservesLMU').valueChanges();
    };
    reservesService.prototype.getOnTrip = function (userUid) {
        //get reserves of the geofire
        return this.afDB.object('/usersTest/' + userUid + '/onTrip').valueChanges();
    };
    reservesService.prototype.getMyReserves = function (driverUserUid, reserveId) {
        //get reserves inside reserves node
        return this.afDB.object('/reservesTest/' + driverUserUid + '/' + reserveId + '/').valueChanges();
    };
    reservesService.prototype.getPendingUsers = function (driverUserUid, reserveId) {
        //get reserves inside reserves node
        return this.afDB.list('/reservesTest/' + driverUserUid + '/' + reserveId + '/pendingUsers').valueChanges();
    };
    reservesService.prototype.confirmMyExistenceInPendingUsers = function (driverUserUid, reserveId, userUid) {
        //get reserves inside reserves node
        return this.afDB.object('/reservesTest/' + driverUserUid + '/' + reserveId + '/pendingUsers/' + userUid).valueChanges();
    };
    reservesService.prototype.confirmMyExistenceInPickedupUsers = function (driverId, keyTrip, userId) {
        //get reserves inside reserves node
        return this.afDB.object('/tripsTest/' + driverId + '/' + keyTrip + '/pickedUpUsers/' + userId).valueChanges();
    };
    reservesService.prototype.cancelReserve = function (userUid, driverUid, reserveId) {
        //eliminate user from reserve in reserve's node        
        this.afDB.database.ref('/reservesTest/' + driverUid + '/' + reserveId + '/pendingUsers/' + userUid).remove();
        //eliminate keyTrip from user's node to eliminate access to that reserve
    };
    reservesService.prototype.eliminateKeyUser = function (userUid, reserveId) {
        //eliminate keyTrip from user's node to eliminate access to that reserve
        this.afDB.database.ref('/usersTest/' + userUid + '/myReserves/' + reserveId).remove();
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
		61
	],
	"../pages/canceltrip/driverCanceltrip.module": [
		646,
		60
	],
	"../pages/car-registration-login/car-registration-login.module": [
		693,
		59
	],
	"../pages/car-registration/car-registration.module": [
		694,
		58
	],
	"../pages/chats/driverChats.module": [
		647,
		57
	],
	"../pages/chatting/driverChatting.module": [
		650,
		56
	],
	"../pages/confirmprice/driverConfirmprice.module": [
		649,
		55
	],
	"../pages/confirmtrip/driverConfirmtrip.module": [
		648,
		54
	],
	"../pages/detailsreserve/driverDetailsreserve.module": [
		652,
		53
	],
	"../pages/earn/earn.module": [
		651,
		52
	],
	"../pages/findride/driverFindride.module": [
		704,
		51
	],
	"../pages/help/driverHelp.module": [
		653,
		50
	],
	"../pages/login/driverLogin.module": [
		654,
		49
	],
	"../pages/more/driverMore.module": [
		655,
		48
	],
	"../pages/myride/driverMyride.module": [
		695,
		5
	],
	"../pages/p-bikemode/bikemode.module": [
		701,
		47
	],
	"../pages/p-canceltrip/canceltrip.module": [
		656,
		46
	],
	"../pages/p-chatting/chatting.module": [
		657,
		45
	],
	"../pages/p-confirm-reservation/confirm-reservation.module": [
		658,
		44
	],
	"../pages/p-confirmnote/confirmnote.module": [
		659,
		4
	],
	"../pages/p-confirmpopup/confirmpopup.module": [
		660,
		43
	],
	"../pages/p-confirmtrip/confirmtrip.module": [
		661,
		42
	],
	"../pages/p-createcrew/createcrew.module": [
		662,
		41
	],
	"../pages/p-findride/findride.module": [
		706,
		3
	],
	"../pages/p-help/help.module": [
		663,
		40
	],
	"../pages/p-listride/listride.module": [
		705,
		39
	],
	"../pages/p-login/login.module": [
		664,
		38
	],
	"../pages/p-more/more.module": [
		665,
		37
	],
	"../pages/p-myride/myride.module": [
		696,
		36
	],
	"../pages/p-profile/profile.module": [
		666,
		35
	],
	"../pages/p-public-profile/public-profile.module": [
		667,
		34
	],
	"../pages/p-ratetrip/ratetrip.module": [
		668,
		33
	],
	"../pages/p-reserveinfo/reserveinfo.module": [
		682,
		32
	],
	"../pages/p-reservetrip/reservetrip.module": [
		669,
		31
	],
	"../pages/p-signup/signup.module": [
		702,
		30
	],
	"../pages/p-support/support.module": [
		670,
		29
	],
	"../pages/p-tabs/tabs.module": [
		671,
		28
	],
	"../pages/p-terms/terms.module": [
		672,
		27
	],
	"../pages/p-tripbike/tripbike.module": [
		697,
		2
	],
	"../pages/p-verification-images/verification-images.module": [
		674,
		26
	],
	"../pages/p-verification-number/verification-number.module": [
		673,
		25
	],
	"../pages/p-walkthrough/walkthrough.module": [
		676,
		24
	],
	"../pages/p-wallet/wallet.module": [
		675,
		23
	],
	"../pages/payments-info/payments-info.module": [
		677,
		22
	],
	"../pages/pickup/pickup.module": [
		703,
		1
	],
	"../pages/profile/driverProfile.module": [
		678,
		21
	],
	"../pages/public-profile/driver-public-profile.module": [
		679,
		20
	],
	"../pages/ratetrip/driverRatetrip.module": [
		680,
		19
	],
	"../pages/remove-schedule/remove-schedule.module": [
		681,
		18
	],
	"../pages/reservetrip/driverReservetrip.module": [
		698,
		0
	],
	"../pages/schedule/schedule.module": [
		683,
		17
	],
	"../pages/showinfocar/showinfocar.module": [
		684,
		16
	],
	"../pages/signup/driverSignup.module": [
		699,
		15
	],
	"../pages/specifyorigin/specifyorigin.module": [
		700,
		14
	],
	"../pages/successnotification/successnotification.module": [
		685,
		6
	],
	"../pages/support/driverSupport.module": [
		686,
		13
	],
	"../pages/terms/driverTerms.module": [
		687,
		12
	],
	"../pages/type-of-login/type-of-login.module": [
		688,
		11
	],
	"../pages/verification-images/driver-verification-images.module": [
		689,
		10
	],
	"../pages/verification-number/driver-verification-number.module": [
		690,
		9
	],
	"../pages/walkthrough/driverWalkthrough.module": [
		691,
		8
	],
	"../pages/wallet/driverWallet.module": [
		692,
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
    DriverSignUpService.prototype.getMyInfo = function (userId) {
        return this.afDB.object('/usersTest/' + userId).valueChanges();
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
    // public pushDocsC(place, userId){
    //    this.afDB.database.ref(place + '/drivers/'+userId+'/documents').update({
    //        license: false
    //    })
    // }
    DriverSignUpService.prototype.pushDocsCarne = function (userId) {
        this.afDB.database.ref('/drivers/' + userId + '/documents').update({
            carne: false
        });
        this.afDB.database.ref('/users/' + userId + '/documents').update({
            carne: false
        });
    };
    DriverSignUpService.prototype.pushDocsId = function (userId) {
        this.afDB.database.ref('/drivers/' + userId + '/documents').update({
            idVerification: false
        });
        this.afDB.database.ref('/users/' + userId + '/documents').update({
            idVerification: false
        });
    };
    DriverSignUpService.prototype.emailVerificationMessage = function (place, user) {
        this.afDB.database.ref(place + '/drivers/' + user).update({
            emailVerificationMessage: true
        });
    };
    DriverSignUpService.prototype.getMyInfoDriver = function (userId) {
        return this.afDB.object('/driversTest/' + userId).valueChanges();
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
    DriverSignUpService.prototype.getMyInfoForProfile = function (userId) {
        return this.afDB.object('/driversTest/' + userId).valueChanges();
    };
    DriverSignUpService.prototype.saveInfoProfilePhone = function (userUid, phone) {
        //permite configurar la información del perfil
        this.afDB.database.ref('/driversTest/' + userUid).update({
            phone: phone
        });
    };
    DriverSignUpService.prototype.saveInfoProfileAbout = function (userUid, about) {
        //permite configurar la información del perfil
        this.afDB.database.ref('/driversTest/' + userUid).update({
            about: about
        });
    };
    DriverSignUpService.prototype.saveInfoProfileUrl = function (userUid, url) {
        //permite configurar la información del perfil
        this.afDB.database.ref('/driversTest/' + userUid).update({
            url: url
        });
    };
    DriverSignUpService.prototype.deleteAccount = function (userUid) {
        this.afDB.database.ref('/driversTest/' + userUid).remove();
        this.afDB.database.ref('/usersTest/' + userUid).remove();
    };
    DriverSignUpService.prototype.addCar = function (DriverUid, carModel, plateNumber, color) {
        var _this = this;
        this.afDB.database.ref('/driversTest/' + DriverUid + '/cars/').push({
            carModel: carModel,
            plateNumber: plateNumber,
            color: color
        }).then(function (snap) {
            var key = snap.key;
            _this.afDB.database.ref('/driversTest/' + DriverUid + '/cars/' + key).update({
                keyCar: key
            });
        });
    };
    DriverSignUpService.prototype.deleteCar = function (driverUid, carKey) {
        this.afDB.database.ref('/driversTest/' + driverUid + '/cars/' + carKey).remove();
    };
    DriverSignUpService.prototype.addCarProfile = function (place, userUid, car) {
        this.afDB.database.ref(place + '/drivers/' + userUid + '/cars/').push(car);
    };
    DriverSignUpService.prototype.addPlaceZone = function (place, userUid) {
        this.afDB.database.ref(place + '/drivers/' + userUid).update({ place: place });
        this.afDB.database.ref(place + '/users/' + userUid).update({ place: place });
    };
    DriverSignUpService.prototype.getCar = function (userId) {
        return this.afDB.list('/driversTest/' + userId + '/cars').valueChanges();
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
    DriverSignUpService.prototype.getSchedule = function (userId) {
        return this.afDB.list('/driversTest/' + userId + '/schedule/').valueChanges();
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
        return this.afDB.list('/driversTest/' + user + '/tripsTest/destination').valueChanges();
    };
    sendCoordsService.prototype.getPendingUsers = function (driverUid, pushKey) {
        return this.afDB.list('/reservesTest/' + driverUid + '/' + pushKey + '/pendingUsers').valueChanges();
    };
    sendCoordsService.prototype.getPendingUsersInTrips = function (driverUid, pushKey) {
        return this.afDB.list('/tripsTest/' + driverUid + '/' + pushKey + '/pendingUsers').valueChanges();
    };
    sendCoordsService.prototype.getOrigin = function (user) {
        return this.afDB.list('/driversTest/' + user + '/tripsTest/origin').valueChanges();
    };
    sendCoordsService.prototype.getOriginUser = function (user) {
        return this.afDB.list('/usersTest/' + user + '/tripsTest/origin').valueChanges();
    };
    sendCoordsService.prototype.getDestinationUser = function (user) {
        return this.afDB.list('/usersTest/' + user + '/tripsTest/destination').valueChanges();
    };
    sendCoordsService.prototype.pushCoordinatesUsers = function (user, dest, or) {
        this.afDB.database.ref('/usersTest/' + user + '/trips').update({
            origin: or,
            destination: dest,
        });
    };
    sendCoordsService.prototype.pushCoordinatesOnBikeMode = function (user, dest, or) {
        this.afDB.database.ref('/usersTest/' + user + '/tripsTest/bikeMode').update({
            origin: or,
            destination: dest,
        });
    };
    sendCoordsService.prototype.deleteOnTripFinal = function (userId) {
        this.afDB.database.ref('/usersTest/' + userId + '/onTripFinal').remove();
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
    DriverAuthenticationService.prototype.sendVerificationCodeToFirebase = function (userId, code) {
        this.afDB.database.ref('/driversTest/' + userId).update({
            verificationCode: code
        });
    };
    DriverAuthenticationService.prototype.deleteVerificationCode = function (userId) {
        this.afDB.database.ref('/driversTest/' + userId + '/verificationCode/').remove();
    };
    DriverAuthenticationService.prototype.resendVerificationCode = function (userId) {
        this.afDB.database.ref('/driversTest/' + userId).update({
            resendVerificationCode: true
        });
    };
    DriverAuthenticationService.prototype.deleteverificationCodeApproval = function (userId) {
        this.afDB.database.ref('/driversTest/' + userId + '/verificationCodeApproval/').remove();
    };
    DriverAuthenticationService.prototype.deleteResendCode = function (userId) {
        this.afDB.database.ref('/driversTest/' + userId + '/resendVerificationCode/').remove();
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

/***/ 350:
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
    DriverSendCoordsService.prototype.getPendingUsers = function (userUid, pushKey) {
        return this.afDB.list('/reservesTest/' + userUid + '/' + pushKey + '/pendingUsers').valueChanges();
    };
    DriverSendCoordsService.prototype.confirmIfUsersIsStillInLMU = function (driverId, keyTrip, userId) {
        return this.afDB.object('/tripsTest/' + driverId + '/' + keyTrip + '/lastMinuteUsers/' + userId).valueChanges();
    };
    DriverSendCoordsService.prototype.getSpecificReserves = function (userUid, pushKey) {
        return this.afDB.object('/reservesTest/' + userUid + '/' + pushKey).valueChanges();
    };
    DriverSendCoordsService.prototype.eraseUser = function (userId, DriverUid, pushKey) {
        this.afDB.database.ref('/reservesTest/' + DriverUid + '/' + pushKey + '/pendingUsers/' + userId).remove();
    };
    DriverSendCoordsService.prototype.saveTripOnRecords = function (userUid, trip) {
        //save trip in recordTrips
        this.afDB.database.ref('/usersTest/' + userUid + '/recordTrips/' + trip.keyTrip).update(trip);
    };
    DriverSendCoordsService.prototype.getDestination = function (user) {
        return this.afDB.list('/driversTest/' + user + '/tripsTest/destination').valueChanges();
    };
    DriverSendCoordsService.prototype.getOrigin = function (user) {
        return this.afDB.list('/driversTest/' + user + '/tripsTest/origin').valueChanges();
    };
    DriverSendCoordsService.prototype.pushcoordinatesReserves = function (user, dest, or) {
        this.afDB.database.ref('driversTest/' + user + '/Reserves').push({
            orReserve: or,
            destReserve: dest,
        });
    };
    DriverSendCoordsService.prototype.pushcoordinatesDrivers = function (user, dest, or) {
        this.afDB.database.ref('/driversTest/' + user + '/trips').update({
            origin: or,
            destination: dest,
        });
    };
    DriverSendCoordsService.prototype.recordTripOnDriver = function (userUid, trip) {
        this.afDB.database.ref('/driversTest/' + userUid + '/recordTrips/').push(trip);
    };
    DriverSendCoordsService.prototype.recordTripOnUser = function (userDriverUid, trip) {
        this.afDB.database.ref('/usersTest/' + userDriverUid + '/recordTrips/').push(trip);
    };
    DriverSendCoordsService.prototype.recordTripOnWaypool = function (trip) {
        this.afDB.database.ref('/allTrips/').push(trip);
    };
    DriverSendCoordsService.prototype.timeOfPickedUpUser = function (userUid, date) {
        //set time when user is picked up in user's trips
        this.afDB.database.ref('/usersTest/' + userUid + '/tripsTest/').update({
            pickedUpTime: date
        });
    };
    DriverSendCoordsService.prototype.timeOfPickedUpDriver = function (userDriverUid, date, userUid) {
        //set time when user is picked up in driver's trips
        this.afDB.database.ref('/driversTest/' + userDriverUid + '/tripsTest/pickedUpUsers/' + userUid).update({
            pickedUpTime: date
        });
    };
    DriverSendCoordsService.prototype.timeOfDestinationUser = function (userUid, date) {
        this.afDB.database.ref('/usersTest/' + userUid + '/tripsTest/').update({
            DestinationTime: date
        });
    };
    DriverSendCoordsService.prototype.pushPriceOnUser = function (userDriverUid, userUid, price) {
        this.afDB.database.ref('/driversTest/' + userDriverUid + '/tripsTest/pickedUpUsers/' + userUid).update({
            price: price
        });
    };
    DriverSendCoordsService.prototype.updateGeolocationOrigin = function (user, origin) {
        this.afDB.database.ref('driversTest' + user + '/trips').update({
            origin: origin
        });
    };
    DriverSendCoordsService.prototype.endTripDriverPickingUsers = function (DriverUid) {
        this.afDB.database.ref('/driversTest/' + DriverUid + '/tripsTest/pickingUsers').remove();
    };
    DriverSendCoordsService.prototype.eraseChatsUsers = function (userId, DriverUid) {
        this.afDB.database.ref('driversTest' + DriverUid + '/tripsTest/pickingUsers/' + userId + '/chat').remove();
    };
    DriverSendCoordsService.prototype.endTripDriverPickedUpUsers = function (DriverUid) {
        this.afDB.database.ref('/driversTest/' + DriverUid + '/tripsTest/pickedUpUsers').remove();
    };
    DriverSendCoordsService.prototype.endTripUserPickingUsers = function (userUid) {
        this.afDB.database.ref('users/' + userUid + '/tripsTest/pickingUsers').remove();
    };
    DriverSendCoordsService.prototype.endTripUserPickedUpUsers = function (place, userUid) {
        this.afDB.database.ref('/usersTest/' + userUid + '/tripsTest/pickedUpUsers').remove();
    };
    DriverSendCoordsService.prototype.endTripUserOnTripInstance = function (userUid) {
        this.afDB.database.ref('/usersTest/' + userUid + '/tripsTest/onTrip').remove();
    };
    DriverSendCoordsService.prototype.endTripUserPickupInstance = function (userUid) {
        this.afDB.database.ref('/usersTest/' + userUid + '/tripsTest/pickedUp').remove();
    };
    DriverSendCoordsService.prototype.endTripUserDriverListRide = function (userUid) {
        this.afDB.database.ref('/usersTest/' + userUid + '/tripsTest/driverListRide').remove();
    };
    DriverSendCoordsService.prototype.pickUp = function (DriverUid, userId, user) {
        // add the driver to pickedUpUsers 
        this.afDB.database.ref('/driversTest/' + DriverUid + '/tripsTest/pickedUpUsers/' + userId).update(user);
    };
    // TODO: DRIVER NO PUEDE ENTRAR TODO, SOLO DRIVERINFO (UNA PARTE DEL DRIVER, PREGUNTAR DANIEL QUE INFO)
    DriverSendCoordsService.prototype.addReserve = function (driverId, name, lastname, car, dest, or, note, price, currentHour, startHour, geofireKey, type) {
        var _this = this;
        this.afDB.database.ref('/reservesTest/' + driverId).push({
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
            _this.afDB.database.ref('/reservesTest/' + driverId + '/' + key).update({
                keyTrip: key
            });
            _this.afDB.database.ref('/driversTest/' + driverId).update({
                keyLastReserve: key
            });
            console.log(' keylastreserve');
        });
    };
    DriverSendCoordsService.prototype.pickUpInstance = function (userId) {
        // driver add pickup instance to the user when picked up
        this.afDB.database.ref('/usersTest/' + userId + '/trips').update({
            pickedUp: true
        });
    };
    DriverSendCoordsService.prototype.eliminateOnTrip = function (userId) {
        this.afDB.database.ref('/driversTest/' + userId).update({
            onTrip: false
        });
    };
    DriverSendCoordsService.prototype.eliminateOnTripUser = function (userId) {
        this.afDB.database.ref('/usersTest/' + userId + '/trips').update({
            onTrip: false
        });
    };
    DriverSendCoordsService.prototype.pushOnTripFinalUser = function (userId) {
        this.afDB.database.ref('/usersTest/' + userId).update({
            onTripFinal: true
        });
    };
    DriverSendCoordsService.prototype.eliminatePickingUsers = function (DriverUid, userId) {
        //eliminate the user from pickingUsers
        this.afDB.database.ref('/driversTest/' + DriverUid + '/tripsTest/pickingUsers/' + userId).remove();
    };
    DriverSendCoordsService.prototype.eliminatePickingUsersUser = function (userId) {
        this.afDB.database.ref('/usersTest/' + userId + '/tripsTest/pickingUsers').remove();
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

/***/ 351:
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
    geofireService.prototype.setGeofireOr = function (radius, lat, lng, userId) {
        this.dbRef = this.afDB.database.ref('/geofireOr/');
        this.geoFire = new __WEBPACK_IMPORTED_MODULE_2_geofire__(this.dbRef);
        this.geoquery2 = this.geoFire.query({
            center: [lat, lng],
            radius: radius
        });
        this.keyEnteredOr(userId);
        this.keyExitedOr(userId);
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
    geofireService.prototype.keyEnteredOr = function (userId) {
        this.keyenteredOr = this.geoquery2.on("key_entered", function (key, location, distance) {
            var _this = this;
            console.log(key);
            this.afDB.database.ref('/usersTest/' + userId + '/availableReserves/' + key).update({
                keyReserve: key
            }).then(function () {
                //get driverId from geofireOr node
                return _this.afDB.database.ref('/geofireOr/' + key).once('value').then(function (snap) {
                    _this.driverOnNodeOr = snap.val();
                    _this.afDB.database.ref('/usersTest/' + userId + '/availableReserves/' + key).update({
                        driverId: _this.driverOnNodeOr.driverId
                    });
                });
            });
        }.bind(this));
    };
    geofireService.prototype.keyExitedOr = function (userId) {
        this.keyexitedOr = this.geoquery2.on("key_exited", function (key) {
            this.afDB.database.ref('/usersTest/' + userId + '/availableReserves/' + key).remove();
        }.bind(this));
    };
    geofireService.prototype.setGeofireDest = function (radius, lat, lng, userId) {
        this.dbRef = this.afDB.database.ref('/geofireDest/');
        this.geoFire = new __WEBPACK_IMPORTED_MODULE_2_geofire__(this.dbRef);
        this.geoquery1 = this.geoFire.query({
            center: [lat, lng],
            radius: radius
        });
        this.keyEnteredDest(userId);
        this.keyExitedDest(userId);
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
    geofireService.prototype.keyEnteredDest = function (userId) {
        this.geoquery1.on("key_entered", function (key, location, distance) {
            var _this = this;
            console.log(key);
            this.afDB.list('/geofireDest/' + key).valueChanges().subscribe(function (driverOnNode) {
                _this.driverOnNodeDest = driverOnNode;
            });
            this.afDB.database.ref('/usersTest/' + userId + '/availableReserves/' + key).update({
                keyReserve: key
            }).then(function () {
                return _this.afDB.database.ref('/geofireDest/' + key).once('value').then(function (snap) {
                    _this.driverOnNodeDest = snap.val();
                    _this.afDB.database.ref('/usersTest/' + userId + '/availableReserves/' + key).update({
                        driverId: _this.driverOnNodeDest.driverId
                    });
                });
            });
            console.log('keyentered here');
        }.bind(this));
    };
    geofireService.prototype.keyExitedDest = function (userId) {
        this.geoquery1.on("key_exited", function (key) {
            this.afDB.database.ref('/usersTest/' + userId + '/availableReserves/' + key).remove();
        }.bind(this));
    };
    geofireService.prototype.setGeofireOrLMU = function (radius, lat, lng, userId) {
        this.dbRef = this.afDB.database.ref('/geofireOrTrip/');
        this.geoFire = new __WEBPACK_IMPORTED_MODULE_2_geofire__(this.dbRef);
        this.geoquery2LMU = this.geoFire.query({
            center: [lat, lng],
            radius: radius
        });
        this.keyEnteredOrLMU(userId);
        this.keyExitedOrLMU(userId);
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
    geofireService.prototype.keyEnteredOrLMU = function (userId) {
        this.geoquery2LMU.on("key_entered", function (key, location, distance) {
            var _this = this;
            console.log(key);
            this.afDB.database.ref('/usersTest/' + userId + '/availableReserves/' + key).update({
                keyReserve: key,
                LMU: true
            }).then(function () {
                //get driverId from geofireOr node
                return _this.afDB.database.ref('/geofireOrTrip/' + key).once('value').then(function (snap) {
                    _this.driverOnNodeOr = snap.val();
                    _this.afDB.database.ref('/usersTest/' + userId + '/availableReserves/' + key).update({
                        driverId: _this.driverOnNodeOr.driverId
                    });
                });
            });
            //  this.afDB.database.ref('/reservesInfoInCaseOfCancelling/'+ this.driverOnNodeOr.keyReserve + '/' + key).push({
            //   userId: userId
            // })
        }.bind(this));
    };
    geofireService.prototype.keyExitedOrLMU = function (userId) {
        this.geoquery2LMU.on("key_exited", function (key) {
            this.afDB.database.ref('/users/' + userId + '/availableReserves/' + key).remove();
        }.bind(this));
    };
    geofireService.prototype.setGeofireDestLMU = function (radius, lat, lng, userId) {
        this.dbRef = this.afDB.database.ref('/geofireDestTrip/');
        this.geoFire = new __WEBPACK_IMPORTED_MODULE_2_geofire__(this.dbRef);
        this.geoquery1LMU = this.geoFire.query({
            center: [lat, lng],
            radius: radius
        });
        this.keyEnteredDestLMU(userId);
        this.keyExitedDestLMU(userId);
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
    geofireService.prototype.keyEnteredDestLMU = function (userId) {
        this.geoquery1LMU.on("key_entered", function (key, location, distance) {
            var _this = this;
            console.log(key);
            this.afDB.database.ref('/usersTest/' + userId + '/availableReserves/' + key).update({
                keyReserve: key,
                LMU: true
            }).then(function () {
                //get driverId from geofireOr node
                return _this.afDB.database.ref('/geofireDestTrip/' + key).once('value').then(function (snap) {
                    _this.driverOnNodeDest = snap.val();
                    _this.afDB.database.ref('/usersTest/' + userId + '/availableReserves/' + key).update({
                        driverId: _this.driverOnNodeDest.driverId
                    });
                });
            });
        }.bind(this));
    };
    geofireService.prototype.keyExitedDestLMU = function (userId) {
        this.geoquery1LMU.on("key_exited", function (key) {
            this.afDB.database.ref('/usersTest/' + userId + '/availableReserves/' + key).remove();
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
        return this.afDB.list('/usersTest/' + userId + '/trips/driversListRide/').valueChanges();
    };
    // OLD
    // showOnDriver(driverId, userId, origin, destination, name, lastname, phone, note){
    //     this.afDB.database.ref('/drivers/' + driverId + '/tripsTest/usersListRide/' + userId).update({
    //         origin: origin,
    //          destination: destination,
    //          name: name,
    //          lastname: lastname,
    //          phone: phone,
    //          userId: userId,
    //          note:note,
    //     });
    // }
    geofireService.prototype.pushToMyReserve = function (keyReserve, driverId, userId) {
        this.afDB.database.ref('/usersTest/' + userId + '/myReserves/' + keyReserve).update({
            keyReserve: keyReserve,
            driverId: driverId
        });
    };
    geofireService.prototype.saveKey = function (keyReserve, driverId, userId) {
        this.afDB.database.ref('/usersTest/' + userId + '/keyTrip/').set({
            keyTrip: keyReserve,
            driverId: driverId
        });
    };
    geofireService.prototype.deleteKey = function (userId) {
        this.afDB.database.ref('/usersTest/' + userId + '/keyTrip/').remove();
    };
    geofireService.prototype.deleteDriverFromLMU = function (userId, keyTrip) {
        this.afDB.database.ref('/usersTest/' + userId + '/availableReserves/' + keyTrip).remove();
    };
    geofireService.prototype.setOntripFalse = function (userId) {
        this.afDB.database.ref('/usersTest/' + userId).update({
            onTrip: false
        });
    };
    geofireService.prototype.joinReserve = function (company, keyReserve, driverId, userId, origin, destination, name, lastname, phone, distance, verifiedPerson) {
        this.afDB.database.ref('/reservesTest/' + driverId + '/' + keyReserve + '/pendingUsers/' + userId).update({
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
    geofireService.prototype.deleteAvailableReserve = function (userId, keyReserve) {
        this.afDB.database.ref('/usersTest/' + userId + '/availableReserves/' + keyReserve).remove()
            .catch(function (err) {
            console.log(err);
        });
    };
    geofireService.prototype.deleteReserveFromAvailableReserves = function (userId, keyPush) {
        this.afDB.database.ref('/usersTest/' + userId + '/availableReserves/' + keyPush).remove();
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
        this.afDB.database.ref('/usersTest/' + userId + '/trips/driversListRide/' + driverId).remove();
    };
    geofireService.prototype.deleteDriverListRideTotal = function (userId) {
        this.afDB.database.ref('/usersTest/' + userId + '/trips/driversListRide/').remove();
    };
    geofireService.prototype.getLocationPlace = function (place) {
        return this.afDB.object('allPlaces/' + place).valueChanges();
    };
    // set a new node on firebase which is the location of the university
    geofireService.prototype.setLocationPlace = function (key, lat, lng) {
        this.dbRef = this.afDB.database.ref('/geofirePlace/');
        this.geoFire = new __WEBPACK_IMPORTED_MODULE_2_geofire__(this.dbRef);
        this.geoFire.set(key, [lat, lng]).then(function () {
            console.log('location ' + ' updated');
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
        return this.afDB.list('/driversTest/' + userUid + '/tripsTest/usersListRide').valueChanges();
    };
    DriverSendUsersService.prototype.getTripsOfReserves = function (userUid) {
        // Get all the trips the driver have reserve
        return this.afDB.list('/reservesTest/' + userUid).valueChanges();
    };
    DriverSendUsersService.prototype.getUsersOnTrip = function (userUid) {
        // Get all the students the driver acepts in myListRidePage to be send to the students
        return this.afDB.list('/driversTest/' + userUid + '/tripsTest/pickingUsers').valueChanges();
    };
    DriverSendUsersService.prototype.getPickUpUsers = function (userUid) {
        //get all the users from the pickUpUsers []
        return this.afDB.list('/driversTest/' + userUid + '/tripsTest/pickedUpUsers').valueChanges();
    };
    DriverSendUsersService.prototype.removeReserve = function (driverId, keyReserve) {
        //remove the reserve done
        this.afDB.database.ref('/reservesTest/' + driverId + '/' + keyReserve).remove();
    };
    DriverSendUsersService.prototype.removeUsersOnListRideTotal = function (userUid) {
        //send the information of every student the driver acepts in myRide
        this.afDB.database.ref('/driversTest/' + userUid + '/tripsTest/usersListRide/').remove();
    };
    DriverSendUsersService.prototype.removeUsersOnPickingUsers = function (userUid, userId) {
        //send the information of every student the driver acepts in myRide
        this.afDB.database.ref('/driversTest/' + userUid + '/tripsTest/pickingUsers/' + userId).remove();
        this.afDB.database.ref('/usersTest/' + userId + '/tripsTest/pickingUsers/driver/' + userUid).remove();
    };
    DriverSendUsersService.prototype.pushPickingUpUsersOnDrivers = function (userUid, userId, origin, destination, name, lastname, phone, about) {
        //send the information of every student the driver acepts in myRide
        this.afDB.database.ref('/driversTest/' + userUid + '/tripsTest/pickingUsers/' + userId).update({
            origin: origin,
            destination: destination,
            name: name,
            lastname: lastname,
            phone: phone,
            userId: userId,
            about: about
        });
    };
    DriverSendUsersService.prototype.pushDriverOnUsers = function (userUid, userId, origin, destination, name, lastname, phone, price, car, about) {
        //send the driver information to the students
        this.afDB.database.ref('/usersTest/' + userId + '/tripsTest/pickingUsers/driver/' + userUid).update({
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
        this.afDB.database.ref('/driversTest/' + userUid + '/trips').push();
    };
    DriverSendUsersService.prototype.getRecordTrips = function (userUid) {
        return this.afDB.list('/driversTest/' + userUid + '/recordTrips/').valueChanges();
    };
    DriverSendUsersService.prototype.badgeTrue = function (userUid) {
        this.afDB.database.ref('/driversTest/' + userUid).update({
            badgePicking: true
        });
    };
    DriverSendUsersService.prototype.badgeFalse = function (userUid) {
        this.afDB.database.ref('/driversTest/' + userUid).update({
            badgePicking: false
        });
    };
    DriverSendUsersService.prototype.badgeTrueOntrip = function (userUid) {
        this.afDB.database.ref('/driversTest/' + userUid).update({
            badgeOntrip: true
        });
    };
    DriverSendUsersService.prototype.badgeFalseOntrip = function (userUid) {
        this.afDB.database.ref('/driversTest/' + userUid).update({
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
    DriverGeofireService.prototype.setGeofireOrNEWTEST = function (key, lat, lng) {
        this.dbRef = this.afDB.database.ref('/geofireOr/');
        this.geoFire = new __WEBPACK_IMPORTED_MODULE_2_geofire__(this.dbRef);
        this.geoFire.set(key, [lat, lng]).then(function () {
            console.log('location updated');
        }, function (error) {
            console.log('error: ' + error);
        });
    };
    DriverGeofireService.prototype.setGeofireOrCrew = function (key, lat, lng) {
        this.dbRef = this.afDB.database.ref('/geofireOrCrew/');
        this.geoFire = new __WEBPACK_IMPORTED_MODULE_2_geofire__(this.dbRef);
        this.geoFire.set(key, [lat, lng]).then(function () {
            console.log('location updated');
        }, function (error) {
            console.log('error: ' + error);
        });
    };
    DriverGeofireService.prototype.setGeofireDestNEWTEST = function (key, lat, lng) {
        this.dbRef = this.afDB.database.ref('/geofireDest/');
        this.geoFire = new __WEBPACK_IMPORTED_MODULE_2_geofire__(this.dbRef);
        this.geoFire.set(key, [lat, lng]).then(function () {
            console.log('location updated');
        }, function (error) {
            console.log('error: ' + error);
        });
    };
    DriverGeofireService.prototype.setGeofireDestCrew = function (key, lat, lng) {
        this.dbRef = this.afDB.database.ref('/geofireDestCrew/');
        this.geoFire = new __WEBPACK_IMPORTED_MODULE_2_geofire__(this.dbRef);
        this.geoFire.set(key, [lat, lng]).then(function () {
            console.log('location updated');
        }, function (error) {
            console.log('error: ' + error);
        });
    };
    DriverGeofireService.prototype.setGeofireRoute = function (key, lat, lng) {
        this.dbRef = this.afDB.database.ref('/geofireRoute/');
        this.geoFire = new __WEBPACK_IMPORTED_MODULE_2_geofire__(this.dbRef);
        this.geoFire.set(key, [lat, lng]).then(function () {
            console.log('location updated');
        }, function (error) {
            console.log('error: ' + error);
        });
    };
    DriverGeofireService.prototype.setGeofireRouteCrew = function (key, lat, lng) {
        this.dbRef = this.afDB.database.ref('/geofireRouteCrew/');
        this.geoFire = new __WEBPACK_IMPORTED_MODULE_2_geofire__(this.dbRef);
        this.geoFire.set(key, [lat, lng]).then(function () {
            console.log('location updated');
        }, function (error) {
            console.log('error: ' + error);
        });
    };
    DriverGeofireService.prototype.setGeofireOrOnTrip = function (key, lat, lng) {
        this.dbRef = this.afDB.database.ref('/geofireOrTrip/');
        this.geoFire = new __WEBPACK_IMPORTED_MODULE_2_geofire__(this.dbRef);
        this.geoFire.set(key, [lat, lng]).then(function () {
            console.log('location updated');
        }, function (error) {
            console.log('error: ' + error);
        });
    };
    DriverGeofireService.prototype.setGeofireDestOnTrip = function (key, lat, lng) {
        this.dbRef = this.afDB.database.ref('/geofireDestTrip/');
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
        return this.afDB.object('driversTest/' + userId).valueChanges();
    };
    DriverGeofireService.prototype.getMyReserves = function (driverId) {
        return this.afDB.list('/reserves/' + driverId).valueChanges();
    };
    DriverGeofireService.prototype.deleteUserListRide = function (driverId, userId) {
        this.afDB.database.ref('/driversTest/' + driverId + '/tripsTest/usersListRide/' + userId).remove();
    };
    DriverGeofireService.prototype.deleteUserListRideTotal = function (driverId) {
        this.afDB.database.ref('/driversTest/' + driverId + '/tripsTest/usersListRide/').remove();
    };
    DriverGeofireService.prototype.onTripUserListRide = function (driverId, userId) {
        this.afDB.database.ref('/driversTest/' + driverId + '/tripsTest/usersListRide/' + userId).update({
            onTrip: true
        });
    };
    DriverGeofireService.prototype.deleteUserGeofireDest = function (keyTrip) {
        this.afDB.database.ref('/geofireDest/' + keyTrip).remove().then(function () {
            console.log("GeofireDest succesfully removed");
        }).catch(function (error) {
            console.log(error);
        });
    };
    DriverGeofireService.prototype.deleteUserGeofireRoute = function (keyTrip) {
        this.afDB.database.ref('/geofireRoute/' + keyTrip).remove().then(function () {
            console.log("GeofireRoute succesfully removed");
        }).catch(function (error) {
            console.log(error);
        });
    };
    DriverGeofireService.prototype.deleteUserReserve = function (userId, keyTrip) {
        this.afDB.database.ref('/reservesTest/' + userId + '/' + keyTrip).remove().then(function () {
            console.log("reserve succesfully removed");
        }).catch(function (error) {
            console.log(error);
        });
    };
    DriverGeofireService.prototype.deleteUserGeofireOr = function (keyTrip) {
        this.afDB.database.ref('/geofireOr/' + keyTrip).remove().then(function () {
            console.log("GeofireOr succesfully removed");
        }).catch(function (error) {
            console.log(error);
        });
    };
    DriverGeofireService.prototype.deleteUserGeofireOrTrip = function (keyTrip) {
        this.afDB.database.ref('/geofireOrTrip/' + keyTrip).remove().then(function () {
            console.log("geofireOrTrip succesfully removed");
        }).catch(function (error) {
            console.log(error);
        });
    };
    DriverGeofireService.prototype.deleteUserGeofireDestTrip = function (keyTrip) {
        this.afDB.database.ref('/geofireDestTrip/' + keyTrip).remove().then(function () {
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
    DriverGeofireService.prototype.setLocationPlace = function (key, lat, lng) {
        this.dbRef = this.afDB.database.ref('/geofirePlace/');
        this.geoFire = new __WEBPACK_IMPORTED_MODULE_2_geofire__(this.dbRef);
        this.geoFire.set(key, [lat, lng]).then(function () {
            console.log('location updated');
        }, function (error) {
            console.log('error: ' + error);
        });
    };
    // set geoquery that determines if the person is in place
    DriverGeofireService.prototype.setGeofirePlace = function (radius, lat, lng, driverId) {
        this.dbRef = this.afDB.database.ref('/geofirePlace/');
        this.geoFire = new __WEBPACK_IMPORTED_MODULE_2_geofire__(this.dbRef);
        this.geoqueryP = this.geoFire.query({
            center: [lat, lng],
            radius: radius
        });
        this.keyEnteredPlace(driverId);
        console.log('geoquery place added');
    };
    DriverGeofireService.prototype.keyEnteredPlace = function (driverId) {
        this.geoqueryP.on("key_entered", function (key) {
            this.afDB.database.ref('/driversTest/' + driverId).update({
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
    DriverGeofireService.prototype.cancelGeofireOrigin = function (driverId) {
        this.afDB.database.ref('/driversTest/' + driverId).update({
            geofireOrigin: false
        }).then(function () {
            console.log('geofireOrigin = false');
        });
    };
    DriverGeofireService.prototype.setHouseAddress = function (driverId, lat, lng) {
        this.afDB.database.ref('/driversTest/' + driverId + '/houseAddress/coordinates').update({
            lat: lat,
            lng: lng
        });
    };
    DriverGeofireService.prototype.setHouseAddressName = function (driverId, name) {
        this.afDB.database.ref('/driversTest/' + driverId + '/houseAddress/').update({
            name: name
        });
    };
    DriverGeofireService.prototype.getLocationPlace = function (place) {
        return this.afDB.object('/allPlaces/' + place).valueChanges();
    };
    DriverGeofireService.prototype.deleteKeyUserLMU = function (userId) {
        this.afDB.database.ref('/users/' + userId + '/keyTrip/').remove();
    };
    DriverGeofireService.prototype.setOntripFalseUserLMU = function (userId) {
        this.afDB.database.ref('/users/' + userId).update({
            onTrip: false
        });
    };
    DriverGeofireService.prototype.deleteDriverFromLMUofUser = function (userId, keyTrip) {
        this.afDB.database.ref('/users/' + userId + '/availableReserves/' + keyTrip).remove();
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
        return this.afDB.list('/drivers/' + userId + '/tripsTest/pickingUsers').valueChanges();
    };
    sendUsersService.prototype.getPickedUpUsers = function (userId) {
        // Get all the students the driver acepts in myRidePage to be send to the students
        return this.afDB.list('/drivers/' + userId + '/tripsTest/pickedUpUsers').valueChanges();
    };
    sendUsersService.prototype.getMyUsersOnTrip = function (userUid) {
        // Get all the students the driver acepts in myRidePage to be send to the students
        return this.afDB.list('/users/' + userUid + '/tripsTest/pickingUsers').valueChanges();
    };
    sendUsersService.prototype.getMyDriverOnTrip = function (userUid) {
        // Get the driver on trip 
        return this.afDB.list('/users/' + userUid + '/tripsTest/pickingUsers/driver/').valueChanges();
    };
    sendUsersService.prototype.PushUserListRide = function (DriverUserId, userUid, myUser) {
        //send the user to the driver
        this.afDB.database.ref('/drivers/' + DriverUserId + '/tripsTest/usersListRide/' + userUid).update(myUser);
    };
    sendUsersService.prototype.cancelTripUserOr = function (DriverUserId, userUid) {
        //        
        this.afDB.database.ref('/drivers/' + DriverUserId + '/tripsTest/pickingUsers/' + userUid + '/').remove();
        this.afDB.database.ref('/users/' + userUid + '/tripsTest/pickingUsers').remove();
        this.afDB.database.ref('users/' + userUid + '/tripsTest/onTrip').remove();
        this.afDB.database.ref('users/' + userUid + '/tripsTest/driverListRide').remove();
        this.afDB.database.ref('geofireOr/' + userUid).remove();
    };
    sendUsersService.prototype.cancelTripUserDest = function (DriverUserId, userUid) {
        //        
        this.afDB.database.ref('/drivers/' + DriverUserId + '/tripsTest/pickingUsers/' + userUid + '/').remove();
        this.afDB.database.ref('/users/' + userUid + '/tripsTest/pickingUsers').remove();
        this.afDB.database.ref('users/' + userUid + '/tripsTest/onTrip').remove();
        this.afDB.database.ref('users/' + userUid + '/tripsTest/driverListRide').remove();
        this.afDB.database.ref('geofireDest/' + userUid).remove();
    };
    sendUsersService.prototype.getRecordTrips = function (userUid) {
        return this.afDB.list('/usersTest/' + userUid + '/recordTrips/').valueChanges();
    };
    sendUsersService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_fire_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"]])
    ], sendUsersService);
    return sendUsersService;
}());

//# sourceMappingURL=sendUsers.service.js.map

/***/ }),

/***/ 355:
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
        this.afDB.database.ref('/drivers/' + driverId + '/tripsTest/usersListRide/' + user).update({
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
    instancesService.prototype.isVerified = function (userId) {
        this.afDB.database.ref('/usersTest/' + userId).update({
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

/***/ 356:
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
        this.afDB.database.ref(place + '/usersTest/' + user + '/tripsTest/').update({
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
        this.afDB.database.ref(place + '/usersTest/' + user + '/tripsTest/').update({
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
    DriverInstancesService.prototype.scheduleTypeManual = function (user) {
        this.afDB.database.ref('/driversTest/' + user).update({
            scheduleType: 'manual'
        }, function (error) {
            console.log(error);
        });
    };
    DriverInstancesService.prototype.scheduleTypePicture = function (user) {
        this.afDB.database.ref('/driversTest/' + user).update({
            scheduleType: 'picture'
        }, function (error) {
            console.log(error);
        });
    };
    DriverInstancesService.prototype.turnOntripUsersListRide = function (driverId, user) {
        this.afDB.database.ref('/driversTest/' + driverId + '/tripsTest/usersListRide/' + user).update({
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
        this.afDB.database.ref('/driversTest/' + driverId + '/tripsTest/usersListRide/' + user).update({
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
        this.afDB.database.ref('/driversTest/' + userId).update({
            noUsersMessage: true
        });
    };
    DriverInstancesService.prototype.noDriversAvailableInstanceDelete = function (userId) {
        this.afDB.database.ref('/driversTest/' + userId).update({
            noUsersMessage: false
        });
    };
    DriverInstancesService.prototype.clickedDirectionMessage = function (userId) {
        this.afDB.database.ref('/driversTest/' + userId).update({
            clickedDirection: true
        });
    };
    DriverInstancesService.prototype.clickedDirectionMessageCancel = function (userId) {
        this.afDB.database.ref('/driversTest/' + userId).update({
            clickedDirection: false
        });
    };
    DriverInstancesService.prototype.isVerifiedPerson = function (userId) {
        this.afDB.database.ref('/driversTest/' + userId).update({
            verifiedPerson: true
        });
    };
    DriverInstancesService.prototype.ToggleStatusOnline = function (place, userId) {
        this.afDB.database.ref(place + '/driversTest/' + userId).update({
            toggleStatus: 'online'
        });
        this.afDB.database.ref('allUsers/' + userId).update({
            toggleOnline: place
        });
    };
    DriverInstancesService.prototype.ToggleStatusOffline = function (userId) {
        this.afDB.database.ref('/driversTest/' + userId).update({
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

/***/ 357:
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
    DriverTripsService.prototype.getTrip = function (keyTrip, driverUid) {
        //get trip in Trip's node
        return this.afDB.object('/tripsTest/' + driverUid + '/' + keyTrip).valueChanges();
    };
    DriverTripsService.prototype.getPendingUsers = function (keyTrip, driverUid) {
        //get trip in Trip's node
        return this.afDB.list('/tripsTest/' + driverUid + '/' + keyTrip + '/pendingUsers').valueChanges();
    };
    DriverTripsService.prototype.getKeyTrip = function (driverUid) {
        //get key of driver's trip
        return this.afDB.object('/driversTest/' + driverUid + '/keyTrip').valueChanges();
    };
    DriverTripsService.prototype.getOnTrip = function (userUid) {
        return this.afDB.object('/driversTest/' + userUid + '/onTrip').valueChanges();
    };
    DriverTripsService.prototype.getSpecificUser = function (keyTrip, driverUid, userId) {
        //get trip in Trip's node
        return this.afDB.list('/tripsTest/' + driverUid + '/' + keyTrip + '/pendingTest' + userId).valueChanges();
    };
    DriverTripsService.prototype.getReserveUsers = function (keyTrip, driverUid) {
        //get trip in Trip's node
        return this.afDB.list('/reservesTest/' + driverUid + '/' + keyTrip + '/pendingUsers').valueChanges();
    };
    DriverTripsService.prototype.getLastMinuteUsers = function (keyTrip, driverUid) {
        //get trip in Trip's node
        return this.afDB.list('/tripsTest/' + driverUid + '/' + keyTrip + '/lastMinuteUsers').valueChanges();
    };
    DriverTripsService.prototype.getPickedUpUsers = function (keyTrip, driverUid) {
        //get trip in Trip's node
        return this.afDB.list('/tripsTest/' + driverUid + '/' + keyTrip + '/pickedUpUsers').valueChanges();
    };
    DriverTripsService.prototype.startTripForUsers = function (keyTrip, userId, driverId) {
        //create a trip in Trip's node in database     
        this.afDB.database.ref('/usersTest/' + userId).update({
            onTrip: true
        });
        this.afDB.database.ref('/usersTest/' + userId + '/keyTrip').update({
            keyTrip: keyTrip,
            driverId: driverId
        });
    };
    DriverTripsService.prototype.startTrip = function (keyTrip, driverUid, trip) {
        //create a trip in Trip's node in database
        this.afDB.database.ref('/tripsTest/' + driverUid + '/' + keyTrip).update(trip).then(function () {
            console.log('hPTA OCURRI');
        });
    };
    DriverTripsService.prototype.cancelTrip = function (keyTrip, driverUid, trip) {
        //create a trip in Trip's node in database
        this.afDB.database.ref('/tripsTest/' + driverUid + '/' + keyTrip).update(trip);
    };
    DriverTripsService.prototype.acceptLastMinute = function (driverUid, keyTrip, user) {
        this.afDB.database.ref('/tripsTest/' + driverUid + '/' + keyTrip + '/pendingTest' + user.userId).update(user);
    };
    DriverTripsService.prototype.noRepeatLMU = function (driverUid, keyTrip, userId) {
        this.afDB.database.ref('/tripsTest/' + driverUid + '/' + keyTrip + '/lastMinuteTest' + userId).update({
            noRepeat: true
        });
    };
    DriverTripsService.prototype.eliminateLastMinuteUser = function (driverUid, keyTrip, userId) {
        //eliminate the user from pendingUsers
        this.afDB.database.ref('/tripsTest/' + driverUid + '/' + keyTrip + '/lastMinuteTest' + userId).remove();
    };
    DriverTripsService.prototype.deleteReserve = function (keyTrip, driverUid) {
        this.afDB.database.ref('/reservesTest/' + driverUid + '/' + keyTrip).remove();
    };
    DriverTripsService.prototype.deleteAllReserves = function (driverUid) {
        this.afDB.database.ref('/reservesTest/' + driverUid).remove();
    };
    DriverTripsService.prototype.notifyLMUitsBeenRejected = function (userId) {
        this.afDB.database.ref('/usersTest/' + userId).update({
            cancelModalLMU: true
        }).then(function () {
            console.log('se notifico');
        });
    };
    DriverTripsService.prototype.pushKeyInDriver = function (keyTrip, DriverUid) {
        //push a key of the trip to the driver, in this way the driver can acces the trip in Trip's node
        this.afDB.database.ref('/driversTest/' + DriverUid).update({
            keyTrip: keyTrip
        });
    };
    DriverTripsService.prototype.pushOnTripInDriver = function (DriverUid) {
        //push a onTrip in Driver's node
        this.afDB.database.ref('/driversTest/' + DriverUid).update({
            onTrip: true
        });
    };
    DriverTripsService.prototype.eliminatePendingUsers = function (keyTrip, driverUid, userId) {
        //eliminate the user from pendingUsers
        this.afDB.database.ref('/tripsTest/' + driverUid + '/' + keyTrip + '/pendingUsers/' + userId).remove().then(function () {
            console.log('successfully removed pendingUsers');
        }).catch(function (err) {
            console.log('no pude borrar pendingUsers porque: ' + err);
        });
    };
    DriverTripsService.prototype.pickUp = function (keyTrip, driverUid, userId, user) {
        // add the driver to pickedUpUsers 
        this.afDB.database.ref('/tripsTest/' + driverUid + '/' + keyTrip + '/pickedUpUsers/' + userId).update(user);
    };
    DriverTripsService.prototype.addSavedKMGlobal = function (company, savedKM) {
        this.afDB.database.ref('/data/allTrips/' + company).update({
            savedKM: savedKM
        });
    };
    DriverTripsService.prototype.addSavedKMGlobalPassengers = function (company, savedKM) {
        this.afDB.database.ref('/data/kmsSavedByPassengers/' + company).update({
            savedKM: savedKM
        });
    };
    DriverTripsService.prototype.createTripState = function (keyTrip, driverUid) {
        this.afDB.database.ref('/tripsState/' + driverUid + '/' + keyTrip).update({
            saveTrip: false,
            canceledTrip: false
        });
    };
    DriverTripsService.prototype.eliminateTripState = function (keyTrip, driverUid) {
        this.afDB.database.ref('/tripsState/' + driverUid + '/' + keyTrip).remove();
    };
    DriverTripsService.prototype.timeFinishedTrip = function (keyTrip, driverUid, date) {
        //set time when driver go to destination 
        this.afDB.database.ref('/tripsTest/' + driverUid + '/' + keyTrip).update({
            DestinationTime: date
        });
    };
    DriverTripsService.prototype.endTrip = function (keyTrip, driverUid) {
        //erase trip in trip's node
        this.afDB.database.ref('/tripsTest/' + driverUid + '/' + keyTrip).remove();
    };
    DriverTripsService.prototype.setOnTripFalse = function (driverUid) {
        // set false to onTrip instance in driver's node
        this.afDB.database.ref('/driversTest/' + driverUid).update({
            onTrip: false
        });
    };
    DriverTripsService.prototype.setOnTripFalseUser = function (userId) {
        // set false to onTrip instance in driver's node
        this.afDB.database.ref('/usersTest/' + userId).update({
            onTrip: false
        });
    };
    DriverTripsService.prototype.eliminateKeyTripUser = function (userId) {
        // set false to onTrip instance in driver's node
        this.afDB.database.ref('/usersTest/' + userId + '/keyTrip').remove();
    };
    DriverTripsService.prototype.eliminateKeyUser = function (userId, reserveId) {
        //eliminate keyTrip from user's node to eliminate access to that reserve
        this.afDB.database.ref('/usersTest/' + userId + '/myReserves/' + reserveId).remove();
    };
    DriverTripsService.prototype.saveTripOnRecordsUser = function (userUid, trip, keyTrip) {
        //save trip in recordTrips
        this.afDB.database.ref('/usersTest/' + userUid + '/recordTrips/' + keyTrip).update(trip);
    };
    DriverTripsService.prototype.cancelUserFromReserve = function (driverUid, keyTrip, userId) {
        this.afDB.database.ref('/usersTest/' + userId + '/cancelReserve/').update({
            cancelReserve: true,
            driverId: driverUid,
            keyTrip: keyTrip
        });
    };
    DriverTripsService.prototype.setOnTrip = function (driverUid) {
        // set false to onTrip instance in driver's node
        this.afDB.database.ref('/driversTest/' + driverUid).update({
            onTrip: true
        });
    };
    DriverTripsService.prototype.endTripForUsers = function (userId) {
        this.afDB.database.ref('/usersTest/' + userId + '/').update({
            saveTrip: true
        });
    };
    DriverTripsService.prototype.sentTripUser = function (userId, trip) {
        this.afDB.database.ref('/usersTest/' + userId + '/trip').update(trip);
    };
    DriverTripsService.prototype.saveTripUser = function (driverUid, keyTrip) {
        // this instance allows the user to save the trip in his records
        this.afDB.database.ref('/tripsState/' + driverUid + '/' + keyTrip).update({
            saveTrip: true
        });
    };
    DriverTripsService.prototype.allTrips = function (driverUid, keyTrip, trip) {
        // this instance allows the user to save the trip in his records
        this.afDB.database.ref('data/allallTrips' + driverUid + '/' + keyTrip).update(trip);
    };
    DriverTripsService.prototype.getTripState = function (reserveId, driverId) {
        return this.afDB.object('/tripsState/' + driverId + '/' + reserveId + '/').valueChanges();
    };
    DriverTripsService.prototype.eraseKeyTrip = function (driverUid) {
        // erase keyTrip in driver's node
        this.afDB.database.ref('/driversTest/' + driverUid + '/keyTrip').remove();
    };
    DriverTripsService.prototype.cancelUserFromTrip = function (driverUid, keyTrip, userId) {
        this.afDB.database.ref('/usersTest/' + userId + '/').update({
            cancelTrip: true
        });
        //eliminate the user from pendingUsers
        this.afDB.database.ref('/tripsTest/' + driverUid + '/' + keyTrip + '/pendingUsers/' + userId).remove();
    };
    DriverTripsService.prototype.saveTripOnRecords = function (driverUid, trip, keyTrip) {
        //save trip in recordTrips
        this.afDB.database.ref('/driversTest/' + driverUid + '/recordTrips/' + keyTrip).update(trip);
    };
    DriverTripsService.prototype.sendPaymentInfoOfTrip = function (driverId, amount) {
        this.afDB.database.ref('/driversTest/' + driverId).update({
            pendingToReceive: amount
        });
    };
    DriverTripsService.prototype.sendPaymentInfoOfTripForUser = function (userId, amount) {
        this.afDB.database.ref('/usersTest/' + userId).update({
            pendingToPay: amount
        });
    };
    DriverTripsService.prototype.reduceNumberPersonalFreeRides = function (userId, remainingRides) {
        this.afDB.database.ref('/usersTest/' + userId).update({
            personalFreeRides: remainingRides
        });
    };
    DriverTripsService.prototype.reduceNumberCompanyFreeRides = function (city, userCompany, remainingRides) {
        this.afDB.database.ref('allCities/' + city + '/allPlaces/' + userCompany).update({
            freeRidesNumber: remainingRides
        });
    };
    DriverTripsService.prototype.cancelReserve = function (driverUid, keyTrip) {
        this.afDB.database.ref('/reservesTest/' + driverUid + '/' + keyTrip).remove();
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
    TripsService.prototype.getOnTrip = function (userUid) {
        return this.afDB.object('/usersTest/' + userUid + '/onTrip/').valueChanges();
    };
    TripsService.prototype.getSaveTrip = function (userUid) {
        return this.afDB.object('/usersTest/' + userUid + '/saveTrip/').valueChanges();
    };
    TripsService.prototype.getMyReservesUser = function (userUid) {
        // 
        return this.afDB.list('/usersTest/' + userUid + '/myReserves').valueChanges();
    };
    TripsService.prototype.getKeyTrip = function (userUid) {
        return this.afDB.object('/usersTest/' + userUid + '/keyTrip').valueChanges();
    };
    TripsService.prototype.getTripState = function (reserveId, driverId) {
        return this.afDB.object('/tripsState/' + driverId + '/' + reserveId + '/').valueChanges();
    };
    TripsService.prototype.getReserves = function (userUid) {
        // get reserves from my driver (wrong)
        return this.afDB.list('/reservesTest/' + userUid).valueChanges();
    };
    // public getMyReserves( reserveId,driverId){
    TripsService.prototype.getTrip = function (reserveId, driverId) {
        //get reserves inside trip's node
        return this.afDB.object('/tripsTest/' + driverId + '/' + reserveId + '/').valueChanges();
    };
    TripsService.prototype.getPendingUsers = function (keyTrip, driverId) {
        //get trip in Trip's node
        return this.afDB.list('/tripsTest/' + driverId + '/' + keyTrip + '/pendingUsers').valueChanges();
    };
    TripsService.prototype.getPickedUpUsers = function (keyTrip, driverId) {
        //get trip in Trip's node
        return this.afDB.list('/tripsTest/' + driverId + '/' + keyTrip + '/pickedUpUsers').valueChanges();
    };
    TripsService.prototype.getCancelUsers = function (keyTrip, driverId) {
        return this.afDB.list('/tripsState/' + driverId + '/' + keyTrip + '/cancelUsers').valueChanges();
    };
    TripsService.prototype.getLastMinuteTripsDEMO = function (driverId, keyTrip) {
        return this.afDB.object('/tripsTest/' + driverId + '/' + keyTrip).valueChanges();
    };
    TripsService.prototype.saveKeyTrip = function (userUid, keyTrip, driverId) {
        this.afDB.database.ref('/usersTest/' + userUid + '/keyTrip').update({
            keyTrip: keyTrip,
            driverId: driverId
        });
    };
    TripsService.prototype.updateTripState = function (userUid, keyTrip, driverId) {
        this.afDB.database.ref('/tripsState/' + driverId + '/' + keyTrip + '/UserCancelation/' + userUid).update({
            userUid: userUid
        });
    };
    TripsService.prototype.pushItsMePendingUsers = function (userUid, keyTrip, driverId) {
        this.afDB.database.ref('/tripsTest/' + driverId + '/' + keyTrip + '/pendingUsers/' + userUid).update({
            itsMe: true
        });
    };
    TripsService.prototype.pushItsMePickedUpUsers = function (userUid, keyTrip, driverId) {
        this.afDB.database.ref('/tripsTest/' + driverId + '/' + keyTrip + '/pickedUpUsers/' + userUid).update({
            itsMe: true
        });
    };
    TripsService.prototype.saveTripOnRecords = function (userUid, trip) {
        //save trip in recordTrips
        this.afDB.database.ref('/usersTest/' + userUid + '/recordTrips/' + trip.keyTrip).update(trip);
    };
    TripsService.prototype.eliminateTrip = function (userUid) {
        //save trip in recordTrips
        this.afDB.database.ref('/usersTest/' + userUid + '/trip/').remove();
    };
    TripsService.prototype.joinTrip = function (keyTrip, driverId, userId, origin, destination, name, lastname, phone, verifiedPerson, distance) {
        this.afDB.database.ref('/tripsTest/' + driverId + '/' + keyTrip + '/lastMinuteUsers/' + userId).update({
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
    TripsService.prototype.getOutFromLMU = function (keyTrip, driverId, userId) {
        this.afDB.database.ref('/tripsTest/' + driverId + '/' + keyTrip + '/lastMinuteUsers/' + userId).remove();
    };
    TripsService.prototype.checkIfAcceptedInLMU = function (driverId, keyTrip, userId) {
        return this.afDB.object('/tripsTest/' + driverId + '/' + keyTrip + '/lastMinuteUsers/' + userId).valueChanges();
    };
    TripsService.prototype.cancelTrip = function (userUid, driverUid, tripId) {
        //eliminate user from reserve in reserve's node        
        this.afDB.database.ref('/tripsTest/' + driverUid + '/' + tripId + '/pendingUsers/' + userUid).remove();
        //eliminate keyTrip from user's node to eliminate access to that reserve
    };
    TripsService.prototype.eliminateKeyUser = function (userUid, reserveId) {
        //eliminate keyTrip from user's node to eliminate access to that reserve
        this.afDB.database.ref('/usersTest/' + userUid + '/myReserves/' + reserveId).remove();
    };
    TripsService.prototype.eliminateKeyTrip = function (userUid) {
        //eliminate keyTrip from user's node to eliminate access to that reserve
        this.afDB.database.ref('/usersTest/' + userUid + '/keyTrip/').remove();
    };
    TripsService.prototype.eliminateAvailableReserves = function (userUid) {
        //eliminate keyTrip from user's node to eliminate access to that reserve
        this.afDB.database.ref('/usersTest/' + userUid + '/availableReserves/').remove();
    };
    TripsService.prototype.setClearToDeleteDriver = function (driverUid, keyTrip) {
        //eliminate keyTrip from user's node to eliminate access to that reserve
        this.afDB.database.ref('/tripsTest/' + driverUid + '/' + keyTrip).update({
            clearToDeleteDriver: true
        });
    };
    TripsService.prototype.eliminateAvailableUsers = function (userUid) {
        //eliminate keyTrip from user's node to eliminate access to that reserve
        this.afDB.database.ref('/usersTest/' + userUid + '/availableReserves/').remove();
    };
    TripsService.prototype.eliminateAvailableCrews = function (userUid) {
        //eliminate keyTrip from user's node to eliminate access to that reserve
        this.afDB.database.ref('/usersTest/' + userUid + '/availableCrews/').remove();
    };
    TripsService.prototype.eliminateSeenAvailableReserves = function (userUid) {
        //eliminate keyTrip from user's node to eliminate access to that reserve
        this.afDB.database.ref('/usersTest/' + userUid + '/reservesSeenInAvailableReserves/').remove();
    };
    TripsService.prototype.eliminateSeenAvailableCrews = function (userUid) {
        //eliminate keyTrip from user's node to eliminate access to that reserve
        this.afDB.database.ref('/usersTest/' + userUid + '/crewsSeenInAvailableCrews/').remove();
    };
    TripsService.prototype.eliminateSeenAvailableReservesRoute = function (userUid) {
        //eliminate keyTrip from user's node to eliminate access to that reserve
        this.afDB.database.ref('/usersTest/' + userUid + '/reservesSeenInAvailableReservesRoute/').remove();
    };
    TripsService.prototype.eliminateSeenAvailableCrewsRoute = function (userUid) {
        //eliminate keyTrip from user's node to eliminate access to that reserve
        this.afDB.database.ref('/usersTest/' + userUid + '/crewsSeenInAvailableCrewsRoute/').remove();
    };
    TripsService.prototype.eliminateSeenAvailableReservesLMU = function (userUid) {
        //eliminate keyTrip from user's node to eliminate access to that reserve
        this.afDB.database.ref('/usersTest/' + userUid + '/reservesSeenInAvailableReservesLMU/').remove();
    };
    TripsService.prototype.eraseReserve = function (userUid, reserveId) {
        //eliminate keyTrip from user's node to eliminate access to that reserve
        this.afDB.database.ref('/usersTest/' + userUid + '/myReserves/' + reserveId).remove();
    };
    TripsService.prototype.eliminatingOnTrip = function (userUid) {
        //eliminate keyTrip from tripsReserve node 
        this.afDB.database.ref('/usersTest/' + userUid + '/onTrip').remove();
    };
    TripsService.prototype.eliminatingSaveTrip = function (userUid) {
        this.afDB.database.ref('/usersTest/' + userUid + '/saveTrip').remove();
    };
    TripsService.prototype.eliminatingCancelTrip = function (userUid) {
        this.afDB.database.ref('/usersTest/' + userUid + '/cancelTrip').remove();
    };
    TripsService.prototype.recordTripsInBike = function (userUid, date, route, or, dest, distance) {
        this.afDB.database.ref('/usersTest/' + userUid + '/recordTripBicycle/').push({
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
    authenticationService.prototype.deleteResendCode = function (userId) {
        this.afDB.database.ref('/usersTest/' + userId + '/resendVerificationCode/').remove();
    };
    authenticationService.prototype.sendVerificationCodeToFirebase = function (userId, code) {
        this.afDB.database.ref('/usersTest/' + userId).update({
            verificationCode: code
        });
    };
    authenticationService.prototype.deleteVerificationCode = function (userId) {
        this.afDB.database.ref('/usersTest/' + userId + '/verificationCode/').remove();
    };
    authenticationService.prototype.deleteverificationCodeApproval = function (userId) {
        this.afDB.database.ref('/usersTest/' + userId + '/verificationCodeApproval/').remove();
    };
    authenticationService.prototype.resendVerificationCode = function (userId) {
        this.afDB.database.ref('/usersTest/' + userId).update({
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

/***/ 360:
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
    MetricsService.prototype.createdReserves = function (userUid, time, dest, or) {
        //send every reserve that were created
        this.afDB.database.ref('data/timesUserGoListride/').push({
            time: time,
            dest: dest,
            or: or,
            userId: userUid
        });
    };
    MetricsService.prototype.createdInstantRoutes = function (userUid, dest, or) {
        //send every reserve that were created
        this.afDB.database.ref('data/createdInstantRoutes/').push({
            dest: dest,
            or: or,
            userId: userUid
        });
    };
    MetricsService.prototype.metricTripsInBikes = function (userUid, date, route, or, dest, distance) {
        //send every reserve that were created
        this.afDB.database.ref('data/tripsInBikes/').push({
            date: date,
            dest: dest,
            or: or,
            userId: userUid,
            distance: distance,
            route: route,
        });
    };
    MetricsService.prototype.cancelReserves = function (userId, trip) {
        //send every reserve that were created
        this.afDB.database.ref('data/userCancelTrip/').push({
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
    DriverMetricsService.prototype.createdReserves = function (driver, car, house, placeD, precio, startHour, typeOfReserve) {
        //send every reserve that were created
        this.afDB.database.ref('data/allReservesCreated/').push({
            driver: driver,
            car: car,
            house: house,
            placeD: placeD,
            price: precio,
            startHour: startHour,
            type: typeOfReserve,
        });
    };
    DriverMetricsService.prototype.tripsInitiated = function (driverUid, keyTrip, trip) {
        //send every trip that were initiated
        this.afDB.database.ref('data/allTripsInitiated/').push(trip);
    };
    DriverMetricsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_fire_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"]])
    ], DriverMetricsService);
    return DriverMetricsService;
}());

//# sourceMappingURL=d-metrics.service.js.map

/***/ }),

/***/ 364:
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
    DriverSendFeedbackService.prototype.sendFeedback = function (title, info, name, lastname, number, userId) {
        var _this = this;
        this.afDB.database.ref('/feedback/' + title + '/drivers/' + userId).set({
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

/***/ 365:
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
    sendFeedbackService.prototype.sendFeedback = function (title, info, name, lastname, number, userId) {
        this.afDB.database.ref('/feedback/' + title + '/users/' + userId).update({
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

/***/ 366:
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
    DriverPriceService.prototype.setPriceAndCar = function (user, price, car, keyReserve) {
        __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref('/reservesTest/' + user + '/' + keyReserve).update({
            price: price,
            car: car,
        });
        // firebase.database().ref('/resevesTest/' + user + '/' + keyReserve).update({
        //   price:price, 
        //    car:car,
        // })
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
    DriverPriceService.prototype.sendPaymentInfo = function (driverId, id, bankAccount, bankEntity) {
        var _this = this;
        this.afDB.database.ref('/driversTest/' + driverId).update({
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
    DriverChatsService.prototype.getChatsFromReserve = function (reserveKey, driverUid) {
        //trae todos los chats del usuario
        return this.afDB.list('/reservesTest/' + driverUid + '/' + reserveKey + '/chat/messages/').valueChanges();
    };
    DriverChatsService.prototype.getChatsFromTrip = function (reserveKey, driverUid) {
        //trae todos los chats del usuario
        return this.afDB.list('/tripsTest/' + driverUid + '/' + reserveKey + '/chat/messages/').valueChanges();
    };
    DriverChatsService.prototype.pushMessageUserInReserve = function (reserveKey, driverUid, userUid, message, name) {
        //envía todos los chats del usuario
        this.afDB.database.ref('/reservesTest/' + driverUid + '/' + reserveKey + '/chat/messages/').push({
            message: message,
            uid: userUid,
            name: name
        });
    };
    DriverChatsService.prototype.pushMessageUserInTrip = function (reserveKey, driverUid, userUid, message, name) {
        //envía todos los chats del usuario
        this.afDB.database.ref('/tripsTest/' + driverUid + '/' + reserveKey + '/chat/messages/').push({
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
    chatsService.prototype.getChatsFromReserve = function (reserveKey, driverUid) {
        //trae todos los chats del usuario
        return this.afDB.list('/reservesTest/' + driverUid + '/' + reserveKey + '/chat/messages/').valueChanges();
    };
    chatsService.prototype.getChatsFromTrip = function (reserveKey, driverUid) {
        //trae todos los chats del usuario
        return this.afDB.list('/tripsTest/' + driverUid + '/' + reserveKey + '/chat/messages/').valueChanges();
    };
    chatsService.prototype.pushMessageUserInReserve = function (reserveKey, driverUid, userUid, message, name) {
        //envía todos los chats del usuario
        this.afDB.database.ref('/reservesTest/' + driverUid + '/' + reserveKey + '/chat/messages/').push({
            message: message,
            uid: userUid,
            name: name
        });
    };
    chatsService.prototype.pushMessageUserInTrip = function (reserveKey, driverUid, userUid, message, name) {
        //envía todos los chats del usuario
        this.afDB.database.ref('/tripsTest/' + driverUid + '/' + reserveKey + '/chat/messages/').push({
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

/***/ 370:
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
    noteService.prototype.setNote = function (user, note) {
        __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref('/usersTest/' + user + '/trips').update({
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

/***/ 373:
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

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(495);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 495:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(638);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_google_maps__ = __webpack_require__(639);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_fire__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_fire_database__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_fire_auth__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_userauthentication_service__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_firebase__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_geolocation__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_sendCoords_service__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_sendUsers_service__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_note_service__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_call_number__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_geoFire_service__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_common__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_instances_service__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_signup_services__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_native_geocoder_ngx__ = __webpack_require__(642);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_email_composer_ngx__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_sendFeedback_service__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_chat_service__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_reserves_service__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_trips_service__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_environment_service__ = __webpack_require__(643);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_location_accuracy__ = __webpack_require__(644);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__services_metrics_service__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_native_camera___ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ionic_native_fcm__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__ionic_native_clipboard___ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__services_d_chat_service__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__services_d_driverauthentication_service__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__services_d_geofire_services__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__services_d_instances_services__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__services_d_metrics_service__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__services_d_price_service__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__services_d_sendCoords_service__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__services_d_sendFeedback_service__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__services_d_sendUsers_service__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__services_d_signup_service__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__services_d_trips_service__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__services_d_window_service__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__ionic_native_social_sharing__ = __webpack_require__(368);
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
                        { loadChildren: '../pages/add-schedule/add-schedule.module#DriverAddSchedulePageModule', name: 'DriverAddSchedulePage', segment: 'add-schedule', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/canceltrip/driverCanceltrip.module#DriverCanceltripPageModule', name: 'DriverCanceltripPage', segment: 'driverCanceltrip', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chats/driverChats.module#DriverChatsPageModule', name: 'DriverChatsPage', segment: 'driverChats', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/confirmtrip/driverConfirmtrip.module#DriverConfirmtripPageModule', name: 'DriverConfirmtripPage', segment: 'driverConfirmtrip', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/confirmprice/driverConfirmprice.module#DriverConfirmpricePageModule', name: 'DriverConfirmpricePage', segment: 'driverConfirmprice', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chatting/driverChatting.module#DriverChattingPageModule', name: 'DriverChattingPage', segment: 'driverChatting', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/earn/earn.module#ReferalPageModule', name: 'ReferalPage', segment: 'earn', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/detailsreserve/driverDetailsreserve.module#DriverDetailsReservePagePageModule', name: 'DriverDetailsReservePage', segment: 'driverDetailsreserve', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/help/driverHelp.module#DriverHelpPageModule', name: 'DriverHelpPage', segment: 'driverHelp', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/driverLogin.module#DriverLoginPageModule', name: 'DriverLoginPage', segment: 'driverLogin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/more/driverMore.module#DriverMorePageModule', name: 'DriverMorePage', segment: 'driverMore', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/p-canceltrip/canceltrip.module#CanceltripPageModule', name: 'CanceltripPage', segment: 'canceltrip', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/p-chatting/chatting.module#ChattingPageModule', name: 'ChattingPage', segment: 'chatting', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/p-confirm-reservation/confirm-reservation.module#ConfirmReservationPageModule', name: 'ConfirmReservationPage', segment: 'confirm-reservation', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/p-confirmnote/confirmnote.module#ConfirmNotePageModule', name: 'ConfirmNotePage', segment: 'confirmnote', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/p-confirmpopup/confirmpopup.module#ConfirmpopupPageModule', name: 'ConfirmpopupPage', segment: 'confirmpopup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/p-confirmtrip/confirmtrip.module#ConfirmtripPageModule', name: 'ConfirmtripPage', segment: 'confirmtrip', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/p-createcrew/createcrew.module#CreateCrewPageModule', name: 'CreateCrewPage', segment: 'createcrew', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/p-help/help.module#HelpPageModule', name: 'HelpPage', segment: 'help', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/p-login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/p-more/more.module#MorePageModule', name: 'MorePage', segment: 'more', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/p-profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/p-public-profile/public-profile.module#PublicProfilePageModule', name: 'PublicProfilePage', segment: 'public-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/p-ratetrip/ratetrip.module#RatetripPageModule', name: 'RatetripPage', segment: 'ratetrip', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/p-reservetrip/reservetrip.module#ReservetripPageModule', name: 'ReservetripPage', segment: 'reservetrip', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/p-support/support.module#SupportPageModule', name: 'SupportPage', segment: 'support', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/p-tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/p-terms/terms.module#TermsPageModule', name: 'TermsPage', segment: 'terms', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/p-verification-number/verification-number.module#VerificationNumberPageModule', name: 'VerificationNumberPage', segment: 'verification-number', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/p-verification-images/verification-images.module#VerificationImagesPageModule', name: 'VerificationImagesPage', segment: 'verification-images', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/p-wallet/wallet.module#WalletPageModule', name: 'WalletPage', segment: 'wallet', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/p-walkthrough/walkthrough.module#WalkthroughPageModule', name: 'WalkthroughPage', segment: 'walkthrough', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/payments-info/payments-info.module#DriverPaymentsInfoPageModule', name: 'DriverPaymentsInfoPage', segment: 'payments-info', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/driverProfile.module#DriverProfilePageModule', name: 'DriverProfilePage', segment: 'driverProfile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/public-profile/driver-public-profile.module#DriverPublicProfilePageModule', name: 'DriverPublicProfilePage', segment: 'driver-public-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ratetrip/driverRatetrip.module#DriverRatetripPageModule', name: 'DriverRatetripPage', segment: 'driverRatetrip', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/remove-schedule/remove-schedule.module#DriverRemoveSchedulePageModule', name: 'DriverRemoveSchedulePage', segment: 'remove-schedule', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/p-reserveinfo/reserveinfo.module#ConfirmreservationPageModule', name: 'ReserveinfoPage', segment: 'reserveinfo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/schedule/schedule.module#DriverSchedulePageModule', name: 'DriverSchedulePage', segment: 'schedule', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/showinfocar/showinfocar.module#DriverShowInfoCarPageModule', name: 'DriverShowInfoCarPage', segment: 'showinfocar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/successnotification/successnotification.module#DriverSuccessNotificationPageModule', name: 'DriverSuccessNotificationPage', segment: 'successnotification', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/support/driverSupport.module#DriverSupportPageModule', name: 'DriverSupportPage', segment: 'driverSupport', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/terms/driverTerms.module#DriverTermsPageModule', name: 'DriverTermsPage', segment: 'driverTerms', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/type-of-login/type-of-login.module#TypeOfLoginPageModule', name: 'TypeOfLoginPage', segment: 'type-of-login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/verification-images/driver-verification-images.module#DriverVerificationImagesPageModule', name: 'DriverVerificationImagesPage', segment: 'driver-verification-images', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/verification-number/driver-verification-number.module#DrverVerificationNumberPageModule', name: 'DrverVerificationNumberPage', segment: 'driver-verification-number', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/walkthrough/driverWalkthrough.module#DriverWalkthroughPageModule', name: 'DriverWalkthroughPage', segment: 'driverWalkthrough', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/wallet/driverWallet.module#DriverWalletPageModule', name: 'DriverWalletPage', segment: 'driverWallet', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/car-registration-login/car-registration-login.module#DriverCarRegistrationPageModule', name: 'DriverCarRegistrationLoginPage', segment: 'car-registration-login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/car-registration/car-registration.module#DriverUserVerificationPageModule', name: 'DriverUserVerificationPage', segment: 'car-registration', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/myride/driverMyride.module#DriverMyridePageModule', name: 'DriverMyridePage', segment: 'driverMyride', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/p-myride/myride.module#MyridePageModule', name: 'MyridePage', segment: 'myride', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/p-tripbike/tripbike.module#TripbikePageModule', name: 'TripbikePage', segment: 'tripbike', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reservetrip/driverReservetrip.module#DriverReservetripPageModule', name: 'DriverReservetripPage', segment: 'driverReservetrip', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/driverSignup.module#DriverSignupPageModule', name: 'DriverSignupPage', segment: 'driverSignup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/specifyorigin/specifyorigin.module#DriverSpecifyOriginPageModule', name: 'DriverSpecifyOriginPage', segment: 'specifyorigin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/p-bikemode/bikemode.module#FindridePassPageModule', name: 'BikeModePage', segment: 'bikemode', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/p-signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pickup/pickup.module#DriverPickupPageModule', name: 'DriverPickupPage', segment: 'pickup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/findride/driverFindride.module#DriverFindridePageModule', name: 'DriverFindridePage', segment: 'driverFindride', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/p-listride/listride.module#ListridePageModule', name: 'ListridePage', segment: 'listride', priority: 'low', defaultHistory: [] },
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
                __WEBPACK_IMPORTED_MODULE_32__ionic_native_clipboard___["a" /* Clipboard */],
                __WEBPACK_IMPORTED_MODULE_45__ionic_native_social_sharing__["a" /* SocialSharing */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 638:
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
        this.wanttodrive = [];
        this.wanttodrive = [{ component: 'DriverFindridePage' }];
        this.pagesUser = [
            { title: 'My commutes', component: 'ReservetripPage', icon: 'md-paper' },
            { title: 'Wallet', component: 'WalletPage', icon: 'card' },
            { title: 'Profile', component: 'MorePage', icon: 'person' },
            { title: 'Soporte', component: 'HelpPage', icon: 'help' },
            { title: 'Instructions', component: 'WalkthroughPage', icon: 'alert' },
            { title: 'Bike Mode', component: 'BikeModePage', icon: 'md-bicycle' },
            { title: 'Spread the voice', component: 'ReferalPage', icon: 'logo-whatsapp' },
        ];
        this.pagesDriver = [
            { title: 'My commutes', component: 'DriverReservetripPage', icon: 'md-paper' },
            { title: 'Wallet', component: 'DriverWalletPage', icon: 'card' },
            { title: 'Horario', component: 'DriverSchedulePage', icon: 'time' },
            { title: 'Profile', component: 'DriverMorePage', icon: 'person' },
            { title: 'Instructions', component: 'DriverWalkthroughPage', icon: 'alert' },
            { title: 'Bike Mode', component: 'BikeModePage', icon: 'md-bicycle' },
            { title: 'Go to Passenger', component: 'FindridePassPage', icon: 'people' },
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/waypool_costumer/src/app/app.html"*/'<ion-menu [content]="content" >\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <!-- user -->\n    <ion-list *ngIf=\'showUser === true\'>\n      <button menuClose ion-item *ngFor="let p of pagesUser" (click)="openPage(p)">\n        <ion-icon style="margin-right: 10px; font-size: 26px;" name={{p.icon}}></ion-icon>      \n\n        {{p.title}}                \n      </button>\n    <img src="assets/imgs/wannadriveen.png"  *ngFor="let p of wanttodrive" (click)="openPage(p)" alt="">\n    </ion-list>\n\n    <!-- driver -->\n    <ion-list *ngIf=\'showUser === false\'>\n        <button menuClose ion-item *ngFor="let p of pagesDriver" (click)="openPage(p)">\n          <ion-icon style="margin-right: 10px; font-size: 26px;" name={{p.icon}}></ion-icon>      \n\n          {{p.title}}                \n        </button>\n      \n      </ion-list>\n  </ion-content>\n</ion-menu>\n\n<!-- <ion-menu [content]="content" >\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pagesDriver" (click)="openPage(p)">\n        <ion-icon style="margin-right: 10px; font-size: 26px;" name={{p.icon}}></ion-icon>      \n\n        {{p.title}}                \n      </button>\n    \n    </ion-list>\n  </ion-content>\n</ion-menu> -->\n\n<ion-nav  #content [root]="rootPage"></ion-nav>'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/waypool_costumer/src/app/app.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_fcm__["a" /* FCM */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_firebase__["a" /* Firebase */], __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 643:
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

},[374]);
//# sourceMappingURL=main.js.map