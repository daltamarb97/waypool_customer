webpackJsonp([0],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return geofireService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_geofire__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_geofire___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_geofire__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(31);
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
    geofireService.prototype.setLocationGeofireDest = function (key, lat, lng) {
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
        // }
        // })
    };
    geofireService.prototype.setLocationGeofireOr = function (key, lat, lng) {
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
        // }
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
    geofireService.prototype.showOnDriver = function (driverId, userId, origin, destination, name, lastname, phone) {
        this.afDB.database.ref('/drivers/' + driverId + '/trips/usersListRide/' + userId).set({
            origin: origin,
            destination: destination,
            name: name,
            lastname: lastname,
            phone: phone,
            userId: userId,
        });
    };
    geofireService.prototype.deleteUserGeofire = function (userId) {
        this.afDB.database.ref('/geofire/' + userId).remove().then(function () {
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
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__["AngularFireDatabase"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__["AngularFireDatabase"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["AngularFireAuth"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["AngularFireAuth"]) === "function" && _b || Object])
    ], geofireService);
    return geofireService;
    var _a, _b;
}());

//# sourceMappingURL=geoFire.service.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmpopupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_signup_services__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_sendCoords_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_sendUsers_service__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_geoFire_service__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_instances_service__ = __webpack_require__(312);
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
    function ConfirmpopupPage(navCtrl, sendUsersService, toastCtrl, viewCtrl, afDB, SignUpService, sendCoordsService, navParams, AngularFireAuth, geoFireService, instances) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.sendUsersService = sendUsersService;
        this.toastCtrl = toastCtrl;
        this.viewCtrl = viewCtrl;
        this.afDB = afDB;
        this.SignUpService = SignUpService;
        this.sendCoordsService = sendCoordsService;
        this.navParams = navParams;
        this.AngularFireAuth = AngularFireAuth;
        this.geoFireService = geoFireService;
        this.instances = instances;
        this.hideButton = true;
        this.hideText = false;
        this.userUid = this.AngularFireAuth.auth.currentUser.uid;
        this.driver = this.navParams.get('driver');
        console.log(this.driver);
        //get the info of the driver 
        this.SignUpService.getMyInfo(this.userUid)
            .subscribe(function (myUserInfo) {
            _this.user = myUserInfo;
            console.log(_this.user);
        });
    }
    ConfirmpopupPage.prototype.goToRide = function () {
        var _this = this;
        this.SignUpService.getMyInfo(this.userUid)
            .subscribe(function (user) {
            _this.user = user;
            _this.geoFireService.showOnDriver(_this.driver.userId, _this.userUid, _this.user.trips.origin, _this.user.trips.destination, _this.user.name, _this.user.lastname, _this.user.phone);
            if (_this.user.onTrip == true) {
                _this.dismiss();
            }
        });
        this.geoFireService.removeKeyGeofire(this.userUid);
        this.geoFireService.deleteUserGeofire(this.userUid);
        this.geoFireService.deleteDriverListRide(this.userUid, this.driver.userId);
        this.hideButton = !this.hideButton;
        this.hideText = !this.hideText;
        this.accepted = true;
        this.dismiss();
        this.sendUsersService.PushUserListRide(this.driver.userId, this.userUid, this.user);
        var toast = this.toastCtrl.create({
            message: "Haz escogido a " + this.driver.name + " para compartir tu viaje, dir\u00EDgete a la secci\u00F3n Mi Viaje para saber m\u00E1s.",
            showCloseButton: true,
            closeButtonText: 'Ok'
        });
        toast.present();
    };
    ConfirmpopupPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss(this.accepted);
    };
    ConfirmpopupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-confirmpopup',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/waypool_customer/src/pages/confirmpopup/confirmpopup.html"*/'<ion-content>\n    <ion-icon name="md-close" class="close-icon text-white" (click)="dismiss()"></ion-icon>\n    <ion-card>\n        <h6 class="text-theme">Detalles del Viaje</h6>\n        <ion-item>\n            <ion-avatar item-start>\n                <img src="assets/imgs/face-1.jpg">\n            </ion-avatar>\n            <div class="name">\n                <h2>{{driver.name|titlecase }} {{driver.lastname|titlecase | slice:0:1}}</h2>\n                <p>{{driver.carModel}} | {{driver.plateNumber}}</p>\n            </div>\n        </ion-item>\n        <ion-card-content>\n            <div class="ride-detail">\n                <p><small>Pickup Location</small>\n                    <span class="icon-location bg-theme"></span>{{driver.origin}}</p>\n                <p>\n                    <small>Drop Location</small>\n                    <span class="icon-location bg-yellow"></span>{{driver.destination}}</p>\n            </div>\n        </ion-card-content>\n\n        <ion-card-content>\n            <div class="ride-detail no-before" >\n                <p><small>Nota:<span class="text-theme" float-right></span></small>\n                    <ion-icon name="md-calendar" class="icon-location"></ion-icon>\n                   {{driver.note}}</p>\n               \n            </div>\n        </ion-card-content>\n\n        <ion-card-content>\n            <div class="seats">\n                <ion-row class="center">\n                    <div class="rate"> $ {{driver.price}}</div>\n                        \n                   \n                    \n                </ion-row>\n            </div>\n                <button class="btn bg-theme text-white rounded" (click)="goToRide()" *ngIf="hideButton" style="width: 100%;margin-top: 14px;">confirmar conductor</button>\n                <p  text-center *ngIf="hideText">espera que este driver te acepte, si demora mucho presiona la X y escoje otro driver...</p> \n        </ion-card-content>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/waypool_customer/src/pages/confirmpopup/confirmpopup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_6__services_sendUsers_service__["a" /* sendUsersService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_3__services_signup_services__["a" /* SignUpService */], __WEBPACK_IMPORTED_MODULE_4__services_sendCoords_service__["a" /* sendCoordsService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_7__services_geoFire_service__["a" /* geofireService */], __WEBPACK_IMPORTED_MODULE_8__services_instances_service__["a" /* instancesService */]])
    ], ConfirmpopupPage);
    return ConfirmpopupPage;
}());

//# sourceMappingURL=confirmpopup.js.map

/***/ }),

/***/ 208:
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
webpackEmptyAsyncContext.id = 208;

/***/ }),

/***/ 249:
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
webpackEmptyAsyncContext.id = 249;

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_userauthentication_service__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_signup_services__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__);
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
    // userFirebase = this.AngularFireAuth.auth.currentUser;
    function SignupPage(navCtrl, afDB, formBuilder, authenticationService, SignUpService, alertCtrl, AngularFireAuth, navParams) {
        this.navCtrl = navCtrl;
        this.afDB = afDB;
        this.formBuilder = formBuilder;
        this.authenticationService = authenticationService;
        this.SignUpService = SignUpService;
        this.alertCtrl = alertCtrl;
        this.AngularFireAuth = AngularFireAuth;
        this.navParams = navParams;
        this.user = {};
        this.tokenId = '';
        this.userId = '';
        this.isReadonly = true;
        this.signupGroup = this.formBuilder.group({
            name: ["", __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            lastname: ["", __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            email: ["", __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            fixedemail: [""],
            password: ["", __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            passwordconf: ["", __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            phone: ["", __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            carModel: ["", __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            plateNumber: ["", __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]
        });
    }
    SignupPage.prototype.scrolling = function () {
        this.content.scrollTo(30, 0);
    };
    ;
    SignupPage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    SignupPage.prototype.verification = function () {
        var _this = this;
        //creating user on firebase
        var userName = this.signupGroup.controls['name'].value;
        var userLastName = this.signupGroup.controls['lastname'].value;
        var userEmail = this.signupGroup.controls['email'].value;
        var userFixedemail = this.signupGroup.controls['fixedemail'].value;
        var userEmailComplete = userEmail + userFixedemail;
        var userPassword = this.signupGroup.controls['password'].value;
        var userPasswordconf = this.signupGroup.controls['passwordconf'].value;
        var userPhone = this.signupGroup.controls['phone'].value;
        var userCarModel = this.signupGroup.controls['carModel'].value;
        var userPlateNumber = this.signupGroup.controls['plateNumber'].value;
        this.user = this.signupGroup.value;
        if (userPassword === userPasswordconf) {
            this.authenticationService.registerWithEmail(userEmailComplete, userPassword);
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */], this.user);
            if (!this.user.userId) {
                this.AngularFireAuth.auth.onAuthStateChanged(function (user) {
                    if (user) {
                        user.getIdToken().then(function (token) {
                            _this.user.tokenId = token;
                            console.log(_this.user.tokenId);
                        });
                        if (!_this.user.userId) {
                            _this.user.userId = user.uid;
                            console.log(_this.user.userId); //remember to delete this console.log for safety reasons
                        }
                        _this.SignUpService.saveUser(_this.user);
                    }
                    else {
                        console.log('there is no user');
                    }
                });
            }
            ;
            // sending email verification and verifying weather email is verified or not
            this.AngularFireAuth.auth.onAuthStateChanged(function (user) {
                if (user) {
                    if (user.emailVerified == false) {
                        user.sendEmailVerification();
                        console.log("verification email has been sent");
                    }
                    else {
                        console.log("verification email has not been sent or the email is already verifyied");
                    }
                }
                else {
                    console.log('there is no user');
                }
            });
        }
        else {
            var alert_1 = this.alertCtrl.create({
                title: 'Oops!',
                subTitle: 'las contraseñas no coinciden, intenta de nuevo',
                buttons: ['OK']
            });
            alert_1.present();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], SignupPage.prototype, "content", void 0);
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/waypool_customer/src/pages/signup/signup.html"*/'<ion-header class="transparent">\n    <ion-navbar>\n        <ion-title><span class="text-white">SIGN UP</span></ion-title>\n    </ion-navbar>\n</ion-header>\n\n\n\n<ion-content class="bg-background-img">\n    <div class="logo">\n        <img src="../../assets/imgs/logo waypool-01.png" alt="logo">\n    </div>\n    <form [formGroup]="signupGroup" (ngSubmit)="verification()">\n    <div class="bg-white login">\n        <div class="">\n            <ion-row>\n                <ion-col class="click-img">\n                    <div class="form">\n                        <ion-icon name="camera"></ion-icon>\n                    </div>\n                </ion-col>\n                <ion-col class="name-fild">\n                    <ion-list class="form" style="margin-bottom: 0">\n                        <ion-item>\n                            <ion-label></ion-label>\n                            <ion-input  type="text"  text-right formControlName="name" placeholder= "Tú nombre"></ion-input>\n                        </ion-item>\n                        <ion-item>\n                            <ion-label></ion-label>\n                            <ion-input type="text"  text-right  formControlName="lastname" placeholder= "Tú apellido"></ion-input>\n                        </ion-item>\n                    </ion-list>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col class="name-fild-2">\n                    <ion-list class="form">\n                        <ion-item class="editable-email">\n                                <ion-label></ion-label>\n                                    <ion-input type="text" text-right formControlName="email" placeholder= "email"></ion-input>\n                                </ion-item>\n                        </ion-list>\n                </ion-col>\n                <ion-col class="name-fild-2">\n                    <ion-list class="form">\n                        <ion-item class="nonEditable-email">\n                                <!-- <ion-input type="email" value="@uninorte.edu.co"  text-right formControlName="fixedemail" [readonly]="isReadonly"></ion-input> -->\n                                <ion-select formControlName="fixedemail" type="email">\n                                    <ion-option value="@uninorte.edu.co">@uninorte.edu.co</ion-option>\n                                    <ion-option value="@uniautonoma.edu.co">@uniautonoma.edu.co</ion-option>\n                                    <ion-option value="@gmail.com">@gmail.com</ion-option>\n                                </ion-select>\n                        </ion-item>\n                    </ion-list>\n                </ion-col>\n            </ion-row>\n            <ion-list class="form" style="margin-bottom: 0">\n                <ion-item>\n                    <ion-label floating>contraseña nueva <span style="font-weight: bold; color: red;">(minimo 6 caracteres)</span></ion-label>\n                    <ion-input type="password"  text-right formControlName="password"  minlength="6"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label></ion-label>\n                    <ion-input type="password"  text-right formControlName="passwordconf" placeholder= "confirma tu contraseña" minlength="6"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label></ion-label>\n                    <ion-input type="text" text-right formControlName="phone" placeholder= "Tú némero de celular"></ion-input>\n                </ion-item>\n            </ion-list>\n            <div class="footer-signup">\n                    <button ion-button full class="bg-theme text-white btn rounded" type="submit" [disabled]="!signupGroup.valid">¡Únete ya!</button>\n                    <p text-center>¿ya estas registrado? <strong class="text-theme" (click)="login()">Sign in</strong></p>\n            </div>\n        </div>\n    </div>\n</form>\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/waypool_customer/src/pages/signup/signup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_5__services_userauthentication_service__["a" /* authenticationService */], __WEBPACK_IMPORTED_MODULE_6__services_signup_services__["a" /* SignUpService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyridePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__raterider_raterider__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chatting_chatting__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_sendUsers_service__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_call_number__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__ = __webpack_require__(168);
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
    function MyridePage(navCtrl, geolocation, navParams, AngularFireAuth, callNumber, sendUsersService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.geolocation = geolocation;
        this.navParams = navParams;
        this.AngularFireAuth = AngularFireAuth;
        this.callNumber = callNumber;
        this.sendUsersService = sendUsersService;
        this.ride = "currentTrip";
        this.pickingUsers = [];
        this.pickedUpUsers = [];
        this.driverOnTrip = [];
        this.userUid = this.AngularFireAuth.auth.currentUser.uid;
        this.sendUsersService.getMyDriverOnTrip(this.userUid)
            .subscribe(function (driver) {
            _this.driverOnTrip = driver;
            console.log(_this.driverOnTrip);
            if (_this.driverOnTrip.length == 0) {
                console.log("PRAISE THE SUN");
            }
            else {
                _this.gettingUsersOnTrip(driver);
            }
        });
    }
    MyridePage.prototype.gettingUsersOnTrip = function (driver) {
        var _this = this;
        this.sendUsersService.getUsersOnTrip(driver[0].userId)
            .subscribe(function (user) {
            _this.pickingUsers = user;
            console.log(_this.pickingUsers);
        });
        this.sendUsersService.getPickedUpUsers(driver[0].userId)
            .subscribe(function (user) {
            _this.pickedUpUsers = user;
            console.log(_this.pickedUpUsers);
        });
    };
    MyridePage.prototype.callUser = function (number) {
        var _this = this;
        console.log(number);
        this.callNumber.isCallSupported()
            .then(function (response) {
            if (response == true) {
                _this.callNumber.callNumber(number, true)
                    .then(function (res) { return console.log('Launched dialer!', res); }) //si no es necesario esta promesa, eliminarla
                    .catch(function (err) { return console.log('Error launching dialer', err); });
            }
            else {
                console.log('error');
            }
        });
    };
    MyridePage.prototype.raterider = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__raterider_raterider__["a" /* RateriderPage */]);
    };
    MyridePage.prototype.chatting = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__chatting_chatting__["a" /* ChattingPage */]);
    };
    MyridePage.prototype.cancelTrip = function () {
        this.sendUsersService.cancelTripUser(this.driver.userId, this.userUid);
    };
    MyridePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-myride',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/waypool_customer/src/pages/myride/myride.html"*/'<ion-header class="bg-theme">\n    <ion-navbar>\n        <ion-title class="text-center">MI VIAJE</ion-title>\n    </ion-navbar>\n    <div padding-left padding-right>\n        <ion-segment [(ngModel)]="ride">\n            <ion-segment-button value="currentTrip">\n                Compañeros\n            </ion-segment-button>\n            <ion-segment-button value="map">\n                Mapa\n            </ion-segment-button>\n        </ion-segment>\n    </div>\n</ion-header>\n\n<ion-content class="bg-light">\n    <div [ngSwitch]="ride">\n        <ion-list *ngSwitchCase="\'currentTrip\'">\n            <ion-card *ngFor = "let user of pickingUsers">\n                <ion-item>\n                    <ion-avatar item-start>\n                        <img src="assets/imgs/face-1.jpg">\n                    </ion-avatar>\n                    <div class="name">\n                        <h2>{{user.name | titlecase}} {{user.lastname |titlecase | slice:0:1}}\n                            <ion-icon name="ios-checkmark-circle" class="text-theme"></ion-icon>\n                        </h2>\n                        \n                    </div>                   \n                    <div class="more">\n                        <ion-badge color="primary">EN ESPERA</ion-badge>\n                           \n                        \n                        \n\n                    </div>\n                </ion-item>\n                \n            </ion-card>\n            <ion-card *ngFor = "let user of pickedUpUsers">\n                <ion-item>\n                    <ion-avatar item-start>\n                        <img src="assets/imgs/face-1.jpg">\n                    </ion-avatar>\n                    <div class="name">\n                        <h2>{{user.name | titlecase}} {{user.lastname |titlecase | slice:0:1}}\n                            <ion-icon name="ios-checkmark-circle" class="text-theme"></ion-icon>\n                        </h2>\n                        \n                    </div>\n                    <div class="more">\n                        <ion-badge color="secondary">RECOGIDO</ion-badge>                      \n                        \n\n                    </div>\n                   \n                </ion-item>\n                \n            </ion-card>\n\n            <!-- repilica -->\n            <ion-card *ngFor = "let driver of driverOnTrip">\n                <ion-item>\n                    <ion-avatar item-start>\n                        <img src="assets/imgs/face-1.jpg">\n                    </ion-avatar>\n                    <div class="name">\n                        <h2>{{driver.name|titlecase}} {{driver.lastname |titlecase | slice:0:1}}\n                            <ion-icon name="ios-checkmark-circle" class="text-theme"></ion-icon>\n                        </h2>\n                        <p>{{driver.carModel}} | {{driver.plateNumber}}</p>\n                    </div>\n                    <div class="more">\n                        <h2 class="text-theme" class="priceDriver">$ {{driver.price}}\n                        </h2>\n                    </div>                \n                   \n                </ion-item>\n                <ion-card-content>\n                    <div class="status"><img src="assets/imgs/approve.png"></div>\n                    <div class="ride-detail">\n                        <p>\n                            <span class="icon-location bg-theme"></span><span class="time">  </span>Origen: {{driver.origin}}</p>\n                        <p>\n                            <span class="icon-location bg-yellow"></span><span class="time">  </span>Destino: {{driver.destination}}</p>\n                    </div>\n                    <ion-row>\n                        <ion-col class="detail-text">\n                            \n                        </ion-col>\n                        <ion-col class="detail-text">\n                            \n                        </ion-col>\n                        <ion-col center text-center>\n                            <button class="btn bg-theme rounded full text-white" (click)="callUser(driver.phone)" ><ion-icon name="ios-call" class="text-white"></ion-icon></button>\n                        </ion-col>\n                        <ion-col center text-center>\n                            <button class="btn bg-theme rounded full text-white" (click)="chatting()">Chat</button>\n                        </ion-col>\n                    </ion-row>\n                </ion-card-content>\n            </ion-card>    \n\n            <button class="btn bg-theme text-white rounded" (click)="cancelTrip()"style="width: 90%;margin-top: 14px;margin-left: 18px;">Cancelar Viaje</button>\n            \n        </ion-list>\n\n        <!-- <div *ngSwitchCase="\'map\'">\n           <div #map id="map" ></div>\n        </div> -->\n             \n\n        \n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/waypool_customer/src/pages/myride/myride.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_6__ionic_native_call_number__["a" /* CallNumber */], __WEBPACK_IMPORTED_MODULE_4__services_sendUsers_service__["a" /* sendUsersService */]])
    ], MyridePage);
    return MyridePage;
}());

//# sourceMappingURL=myride.js.map

/***/ }),

/***/ 307:
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
            selector: 'page-raterider',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/waypool_customer/src/pages/raterider/raterider.html"*/'<ion-header class="bg-theme">\n    <ion-navbar>\n        <ion-title>RATE DRIVER</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-light">\n    <ion-card class="slip">\n        <div text-center>\n            <h4 class="text-dark">We hope you had a grate ride!</h4>\n            <p class="text-light">22nd Feb 2018, 12:20 pm</p>\n            <h1 class="text-theme">$ 120</h1>\n            <h4 class="text-dark">Payment has been donevia<br>your Vroom Wallet</h4>\n        </div>\n    </ion-card>\n    <ion-card class="rate">\n        <div text-center>\n            <p>So how was your experience with...</p>\n            <div class="driver">\n                <ion-item>\n                    <ion-avatar item-start>\n                        <img src="assets/imgs/face-1.jpg">\n                    </ion-avatar>\n                    <h2>David Johnson\n                        <ion-icon name="ios-checkmark-circle" class="text-theme"></ion-icon>\n                    </h2>\n                    <p>Honda Civic | White</p>\n                </ion-item>\n                <p class="icons">\n                    <ion-icon name="ios-star"></ion-icon>\n                    <ion-icon name="ios-star"></ion-icon>\n                    <ion-icon name="ios-star"></ion-icon>\n                    <ion-icon name="ios-star"></ion-icon>\n                    <ion-icon name="ios-star"></ion-icon>\n                </p>\n                <div class="form">\n                    <ion-list no-lines>\n                        <ion-item>\n                            <ion-textarea type="text" value="Leave a feedback"></ion-textarea>\n                        </ion-item>\n                    </ion-list>\n                </div>\n                <p padding-top><button class="btn text-white bg-theme rounded" style="width: 100%;">SUBMIT RATING</button></p>\n            </div>\n        </div>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/waypool_customer/src/pages/raterider/raterider.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], RateriderPage);
    return RateriderPage;
}());

//# sourceMappingURL=raterider.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindridePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__listride_listride__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_sendCoords_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__confirmnote_confirmnote__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_geoFire_service__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_signup_services__ = __webpack_require__(46);
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
    function FindridePage(navCtrl, geolocation, zone, sendCoordsService, AngularFireAuth, alertCtrl, geofireService, SignUpService, modalCtrl) {
        this.navCtrl = navCtrl;
        this.geolocation = geolocation;
        this.zone = zone;
        this.sendCoordsService = sendCoordsService;
        this.AngularFireAuth = AngularFireAuth;
        this.alertCtrl = alertCtrl;
        this.geofireService = geofireService;
        this.SignUpService = SignUpService;
        this.modalCtrl = modalCtrl;
        // waypoints variables
        this.directionsService = null;
        this.directionsDisplay = null;
        this.bounds = null;
        this.myLatLng = [];
        //firebase 
        this.trip = {};
        this.tripId = null;
        //para acceder al uid en firebase
        this.user = this.AngularFireAuth.auth.currentUser.uid;
        this.userInfo = this.AngularFireAuth.auth.currentUser;
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
    }
    FindridePage.prototype.ionViewDidLoad = function () {
        this.loadMap();
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
                streetViewControl: true,
                rotateControl: false,
                fullscreenControl: false
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
    FindridePage.prototype.calculateRoute = function (positionDest) {
        //tutorial ngclassroom https://blog.ng-classroom.com/blog/ionic2/directions-google-js-ionic/
        var _this = this;
        this.bounds.extend(this.myLatLng);
        this.map.fitBounds(this.bounds);
        this.directionsService.route({
            origin: new google.maps.LatLng(this.myLatLng.lat, this.myLatLng.lng),
            destination: positionDest,
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
                // this.myLatLngDest = results[0].geometry.location;
                // let position = new google.maps.LatLng( results[0].geometry.location.lat,
                //  results[0].geometry.location.lng)
                var marker = new google.maps.Marker({
                    position: results[0].geometry.location,
                    map: _this.map,
                    draggable: true
                });
                _this.map.fitBounds(_this.bounds);
                _this.markers.push(marker);
                _this.map.setCenter(results[0].geometry.location);
                _this.autocompleteMyDest.input = [item.description];
                _this.dragMarker(marker, _this.autocompleteMyDest);
                _this.directionsDisplay.setMap(_this.map);
                _this.calculateRoute(results[0].geometry.location);
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
        // TO DO: IF  (GEOPOSITION !== POSITIONDEST){
        //      NO PERMITIR VIAJE , ES UNA IDEA PERO NO ESTOY 100% DE ACUERDO
        //}
        var _this = this;
        try {
            this.desFirebase = this.autocompleteMyDest.input;
            this.orFirebase = this.autocompleteMyPos.input;
            console.log(this.desFirebase[0]);
            // intento para hacer que cuando origen y destino sean iguales, no deje pasar a la siguiente vista
            // if ( this.desFirebase == this.orFirebase){
            //   this.presentAlert('UUUUUUUUUUUUUUUU','u','u');
            //  } else {
            //    alert('UUUUUU')
            //  }
            if (this.autocompleteMyDest.input == '' || this.autocompleteMyPos.input == '') {
                this.presentAlert('No tienes toda la informacion', 'Por favor asegura que tu origen y destino sean correctos', 'Ok');
                this.clearMarkers();
                this.directionsDisplay.setDirections({ routes: [] });
                // AQUI
            }
            else {
                this.sendCoordsService.pushCoordinatesUsers(this.user, this.desFirebase, this.orFirebase);
                this.geofire1 = this.myLatLng;
                this.geocoder.geocode({ 'address': this.desFirebase[0] }, function (results, status) {
                    if (status === 'OK' && results[0]) {
                        _this.myLatLngDest = results[0].geometry.location;
                        console.log(_this.myLatLngDest);
                    }
                    else {
                        console.log('geocode failed due to:' + status);
                    }
                });
                this.geofire2 = this.myLatLngDest;
                this.confirmNote(this.geofire1, this.geofire2);
                // this.geofireService.setLocationGeofire( this.user, this.myLatLng.lat, this.myLatLng.lng);
                // this.geofireService.updateInfoGeofire(this.user);
            }
            //TO-DO:1. SI LA PERSONA NO HA COLOCADO UNIVERSIDAD EN ALGUNA DE LAS DOS AUTOCOMPLETADO NO DEJE PASAR
            // SI LA PERSONA NO SELECCIONA UN LUGAR NO DEJE PASAR 
        }
        catch (error) {
            console.log(error);
            this.presentAlert('Error en la aplicación', 'Lo sentimos, por favor para solucionar este problema porfavor envianos un correo a soporte@waypool.com,¡lo solucionaremos!.', 'Ok');
        }
    };
    FindridePage.prototype.presentAlert = function (title, text, button) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: [button]
        });
        alert.present();
    };
    FindridePage.prototype.confirmNote = function (geoFire1, geoFire2) {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__confirmnote_confirmnote__["a" /* ConfirmNotePage */], { geoFire1: geoFire1, geoFire2: geoFire2 });
        modal.onDidDismiss(function (accepted) {
            if (accepted) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__listride_listride__["a" /* ListridePage */]);
            }
        });
        modal.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]) === "function" && _a || Object)
    ], FindridePage.prototype, "mapElement", void 0);
    FindridePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-findride',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/waypool_customer/src/pages/findride/findride.html"*/'<ion-header class="transparent">\n    <ion-navbar>\n        <ion-title><span class="text-white findRideText">PIDE TU VIAJE</span></ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-background-img" padding>\n    \n    <ion-card class="search">\n          \n        <ion-card-content>\n            <span class="dot bg-theme"></span>\n            <ion-searchbar required [(ngModel)]="autocompleteMyPos.input" [animated]=true (ionInput)="updateSearchResultsMyPos()"  placeholder="Tu origen"></ion-searchbar>\n          \n            <ion-list   [hidden]="autocompleteItems.length == 0">\n                <ion-item  *ngFor="let item of autocompleteItems" tappable (click)="selectSearchResultMyPos(item)">\n                  {{ item.description }}\n                </ion-item>\n              </ion-list>\n              <!-- <ion-icon name="md-locate" (click)="getPositionAndMarker()" class="text-black"></ion-icon> -->\n        </ion-card-content>\n        <ion-card-content>\n            <span class="dot bg-yellow"></span>           \n           <ion-searchbar required [(ngModel)]="autocompleteMyDest.input" (ionInput)="updateSearchResultsMyDest()" placeholder="Tu destino"></ion-searchbar>\n\n            <ion-list   [hidden]="autocompleteItems2.length == 0">\n            <ion-item class="item" *ngFor="let item of autocompleteItems2" tappable (click)="selectSearchResultMyDest(item)">\n              {{ item.description }}\n            </ion-item>\n          </ion-list>\n            <!-- <span class="text-light search-text">Office &nbsp;<ion-icon name="ios-arrow-down" class="text-light"></ion-icon></span> -->\n\n        </ion-card-content>\n        \n    </ion-card>\n  \n <div #map id="map"></div>  \n    \n    \n    \n    <button (click)="listride()" class="btn rounded bg-white text-theme" style="width: 100%">Pedir</button>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/waypool_customer/src/pages/findride/findride.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_sendCoords_service__["a" /* sendCoordsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_sendCoords_service__["a" /* sendCoordsService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["AngularFireAuth"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["AngularFireAuth"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_7__services_geoFire_service__["a" /* geofireService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_geoFire_service__["a" /* geofireService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_8__services_signup_services__["a" /* SignUpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__services_signup_services__["a" /* SignUpService */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* ModalController */]) === "function" && _k || Object])
    ], FindridePage);
    return FindridePage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
}());

//# sourceMappingURL=findride.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListridePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__filter_filter__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_sendCoords_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_signup_services__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__confirmpopup_confirmpopup__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_geoFire_service__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__tabs_tabs__ = __webpack_require__(76);
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
    function ListridePage(navCtrl, toastCtrl, AngularFireAuth, afDB, SignUpService, sendCoordsService, modalCtrl, geoFireService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.AngularFireAuth = AngularFireAuth;
        this.afDB = afDB;
        this.SignUpService = SignUpService;
        this.sendCoordsService = sendCoordsService;
        this.modalCtrl = modalCtrl;
        this.geoFireService = geoFireService;
        this.driversAvailable = [];
        this.locationOrigin = [];
        this.locationOriginUser = [];
        this.locationDestination = [];
        this.locationDestinationUser = [];
        this.userUid = this.AngularFireAuth.auth.currentUser.uid;
        this.sendCoordsService.getOrigin(this.userUid)
            .subscribe(function (origin) {
            _this.locationOrigin = origin;
            // this.locationOrigin.push(origin)
            console.log(origin);
        });
        this.sendCoordsService.getOriginUser(this.userUid)
            .subscribe(function (originUser) {
            _this.locationOriginUser = originUser;
            // this.locationOrigin.push(origin)
            console.log(originUser);
        });
        this.sendCoordsService.getDestination(this.userUid)
            .subscribe(function (destination) {
            _this.locationDestination = destination;
            // this.locationOrigin.push(origin)
            console.log(destination);
        });
        this.sendCoordsService.getDestinationUser(this.userUid)
            .subscribe(function (destinationUser) {
            _this.locationDestinationUser = destinationUser;
            // this.locationOrigin.push(origin)
            console.log(destinationUser);
        });
        // this.SignUpService.getDrivers()
        //   .subscribe(driver => {
        //     this.driversAvailable = driver;
        //     console.log(this.driversAvailable);
        //   });
        this.SignUpService.getMyInfo(this.userUid).subscribe(function (user) {
            _this.user = user;
            if (_this.user.trips.onTrip == true) {
                _this.geoFireService.deleteDriverListRideTotal(_this.userUid);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__tabs_tabs__["a" /* TabsPage */]);
            }
        });
    }
    ;
    ListridePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.geoFireService.getDriversAvailableForUser(this.userUid)
            .subscribe(function (drivers) {
            _this.driversAvailable = drivers;
            console.log(_this.driversAvailable);
        });
    };
    ListridePage.prototype.filter = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__filter_filter__["a" /* FilterPage */]);
    };
    ListridePage.prototype.showToastWithCloseButton = function (noteDriver, nameDriver) {
        if (noteDriver == '' || noteDriver == null) {
            var toast = this.toastCtrl.create({
                message: nameDriver + ": No hay nota",
                duration: 1500,
                position: 'bottom'
            });
            toast.present();
        }
        else {
            var toast = this.toastCtrl.create({
                message: nameDriver + " : " + noteDriver,
                showCloseButton: true,
                closeButtonText: 'Ok'
            });
            toast.present();
        }
    };
    ListridePage.prototype.confirmpopup = function (driver) {
        // this.navCtrl.push(ConfirmpopupPage)
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__confirmpopup_confirmpopup__["a" /* ConfirmpopupPage */], { driver: driver });
        modal.present();
        console.log(driver);
    };
    ListridePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-listride',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/waypool_customer/src/pages/listride/listride.html"*/'<ion-header class="bg-theme">\n    <ion-navbar>\n        <ion-title class="Title">ESCOGE TU COMPAÑERO\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-light" class="hideLongText">\n    <ion-row class="center-align bg-white flow-ride">\n        <ion-col *ngFor = "let originUser of locationOriginUser"  class="hideLongText" col-5>\n            <h2>Origen</h2> {{originUser}}\n\n        </ion-col>\n        <ion-col col-2 text-center>\n            <img src="assets/imgs/arrow.jpg">\n        </ion-col>\n        <ion-col *ngFor = "let destinationUser of locationDestinationUser"  class="hideLongText" col-5>\n            <h2>Destino</h2> {{destinationUser}}\n        </ion-col>\n\n    </ion-row>\n    <ion-card *ngFor = "let driver of driversAvailable">\n        <ion-item>\n            <ion-avatar item-start>\n                <img src="assets/imgs/face-1.jpg">\n            </ion-avatar>\n            <div class="name">\n                <h2>{{driver.name| titlecase}} {{driver.lastname | titlecase | slice:0:1}}\n                    <ion-icon name="ios-checkmark-circle" class="text-theme"></ion-icon>\n                </h2>\n                <p>{{driver.carModel}} | {{driver.plateNumber}}</p>\n            </div>\n            <div class="more">\n                <h2 class=" text text-theme">\n                        \n                                $ {{driver.price}}\n                          \n                </h2>\n               \n            </div>\n        </ion-item>\n        <ion-card-content >\n            <div  class="ride-detail">\n                <p>\n                    <span class="icon-location bg-theme"></span><span class="time">12:00 am</span>{{driver.origin}}</p>\n                <p>\n                    <span class="icon-location bg-yellow"></span><span class="time">12:50 am</span>{{driver.destination}}</p>\n            </div>\n            <ion-row class="center-align">\n\n                \n               \n                \n                <ion-col center text-center col-4 text-right style="margin-left: auto;">\n                    <button class="btn bg-theme rounded full text-white" (click)="confirmpopup(driver)">Request Ride</button>\n                        </ion-col>\n            </ion-row>\n        </ion-card-content>\n    </ion-card>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/waypool_customer/src/pages/listride/listride.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__["AngularFireAuth"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__["AngularFireAuth"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["AngularFireDatabase"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["AngularFireDatabase"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_signup_services__["a" /* SignUpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_signup_services__["a" /* SignUpService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__services_sendCoords_service__["a" /* sendCoordsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_sendCoords_service__["a" /* sendCoordsService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_7__services_geoFire_service__["a" /* geofireService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_geoFire_service__["a" /* geofireService */]) === "function" && _h || Object])
    ], ListridePage);
    return ListridePage;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());

//# sourceMappingURL=listride.js.map

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
            selector: 'page-filter',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/waypool_customer/src/pages/filter/filter.html"*/'<ion-header class="bg-theme">\n    <ion-navbar>\n        <ion-title>FILTER</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-light">\n    <p class="text-light" padding>Shorting By</p>\n    <ion-card>\n        <ion-card-header>\n            <ion-list radio-group>\n                <ion-item>\n                    <ion-label>Rating</ion-label>\n                    <ion-radio checked="true" value="Rating"></ion-radio>\n                </ion-item>\n                <ion-item>\n                    <ion-label>Price</ion-label>\n                    <ion-radio value="Price"></ion-radio>\n                </ion-item>\n            </ion-list>\n        </ion-card-header>\n    </ion-card>\n    <p class="text-light" padding>Price Range</p>\n    <ion-card>\n        <ion-card-header>\n            <ion-item>\n                <ion-range dualKnobs="true" [(ngModel)]="structure" color="success">\n                    <span range-left class="left-text">$ 40</span>\n                    <span range-right class="right-text">$ 70</span>\n                </ion-range>\n            </ion-item>\n        </ion-card-header>\n    </ion-card>\n    <p class="text-light" padding>Availiblity</p>\n    <ion-card>\n        <ion-card-header>\n            <ion-list>\n                <ion-item>\n                    <ion-label>Seat Available</ion-label>\n                    <ion-select [(ngModel)]="notifications" interface="action-sheet">\n                        <ion-option selected value="1">1 Seat</ion-option>\n                        <ion-option value="2">2 Seats</ion-option>\n                        <ion-option value="3">3 Seats</ion-option>\n                    </ion-select>\n                </ion-item>\n                <ion-item class="check-item">\n                    <ion-checkbox></ion-checkbox>\n                    <ion-label>Air Conditioner</ion-label>\n                </ion-item>\n            </ion-list>\n        </ion-card-header>\n    </ion-card>\n    <ion-row class="fix-btn">\n        <ion-col>\n            <button class="btn rounded text-theme bg-white full">RESET</button>\n        </ion-col>\n        <ion-col>\n            <button class="btn rounded text-white bg-theme full">APPLY</button>\n        </ion-col>\n    </ion-row>\n    <div class="space">&nbsp;</div>\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/waypool_customer/src/pages/filter/filter.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], FilterPage);
    return FilterPage;
}());

//# sourceMappingURL=filter.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return instancesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__ = __webpack_require__(38);
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

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmNotePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_signup_services__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_sendCoords_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_sendUsers_service__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_note_service__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_geoFire_service__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ConfirmNotePage = /** @class */ (function () {
    function ConfirmNotePage(navCtrl, noteService, appCtrl, alertCtrl, afDB, sendUsersService, SignUpService, sendCoordsService, modalCtrl, AngularFireAuth, viewCtrl, navParams, geofireService) {
        this.navCtrl = navCtrl;
        this.noteService = noteService;
        this.appCtrl = appCtrl;
        this.alertCtrl = alertCtrl;
        this.afDB = afDB;
        this.sendUsersService = sendUsersService;
        this.SignUpService = SignUpService;
        this.sendCoordsService = sendCoordsService;
        this.modalCtrl = modalCtrl;
        this.AngularFireAuth = AngularFireAuth;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.geofireService = geofireService;
        this.userUid = this.AngularFireAuth.auth.currentUser.uid;
        this.geoinfo1 = this.navParams.get('geoFire1');
        console.log(this.geoinfo1);
        this.geoinfo2 = this.navParams.get('geoFire2');
        console.log(this.geoinfo2);
    }
    ConfirmNotePage.prototype.setNoteDriver = function () {
        if (this.note == null || this.note == '') {
            this.accepted = true;
            this.dismiss();
        }
        else {
            this.noteService.setNote(this.userUid, this.note);
            this.accepted = true;
            this.dismiss();
        }
    };
    ;
    ConfirmNotePage.prototype.setGeoFireDestination = function () {
        this.geofireService.setLocationGeofireDest(this.userUid, this.geoinfo2.lat, this.geoinfo2.lng);
    };
    ConfirmNotePage.prototype.setGeoFireOrigin = function () {
        this.geofireService.setLocationGeofireOr(this.userUid, this.geoinfo1.lat, this.geoinfo1.lng);
    };
    ConfirmNotePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss(this.accepted);
    };
    ConfirmNotePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-confirmnote',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/waypool_customer/src/pages/confirmnote/confirmnote.html"*/'<ion-content>\n    <ion-icon name="md-close" class="close-icon text-white" (click)="dismiss()"></ion-icon>\n    <ion-card>\n        <h6 class="text-theme">Detalles del Viaje</h6>\n        \n\n        <ion-card-content>\n            <div class="ride-detail">\n                <ion-item >\n                    <ion-label>Nota (Opcional):</ion-label>\n                \n                  </ion-item>\n                <ion-item>\n                    <div class="form">\n                        <ion-list no-lines>\n                            <ion-item>\n                                    <ion-textarea [(ngModel)]="note" rows="10"type="text"  ></ion-textarea>\n\n                            </ion-item>\n                        </ion-list>\n                    </div>\n                  </ion-item>\n            </div>\n        </ion-card-content>\n        \n        <ion-card-content>\n            <div class="ride-detail">\n              <button class="btn bg-theme text-white rounded" (click)="setGeoFireDestination()">\n                  Casa\n                <ion-icon name="home"></ion-icon>\n              </button>\n              <button class="btn bg-theme text-white rounded" (click)="setGeoFireOrigin()">\n                    Universidad\n                  <ion-icon name="book"></ion-icon>\n                </button>\n            </div>\n        </ion-card-content>\n\n        <ion-card-content>\n            <div class="seats">\n                \n                <ion-row style="margin-top: 14px;justify-content: center">\n                    \n                    <ion-col col-8>\n                        <button class="btn bg-theme text-white rounded" style="width: 100%;font-size: .95rem;" (click)="setNoteDriver()">Aceptar Viaje</button>\n                    </ion-col>\n                </ion-row>\n\n\n            </div>\n        </ion-card-content>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/waypool_customer/src/pages/confirmnote/confirmnote.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__services_note_service__["a" /* noteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_note_service__["a" /* noteService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["AngularFireDatabase"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["AngularFireDatabase"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__services_sendUsers_service__["a" /* sendUsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_sendUsers_service__["a" /* sendUsersService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__services_signup_services__["a" /* SignUpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_signup_services__["a" /* SignUpService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_5__services_sendCoords_service__["a" /* sendCoordsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_sendCoords_service__["a" /* sendCoordsService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_8__services_geoFire_service__["a" /* geofireService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__services_geoFire_service__["a" /* geofireService */]) === "function" && _o || Object])
    ], ConfirmNotePage);
    return ConfirmNotePage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
}());

//# sourceMappingURL=confirmnote.js.map

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return noteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(315);
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

/***/ 316:
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
            selector: 'page-wallet',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/waypool_customer/src/pages/wallet/wallet.html"*/'<ion-header class="bg-theme">\n    <ion-navbar>\n        <ion-title class="text-center">MY WALLET</ion-title>\n    </ion-navbar>\n    <div text-center padding>\n        <p><small class="text-white">Total Balance</small></p>\n        <h1 class="text-white">$ 120</h1>\n        <ion-row>\n            <ion-col>\n                <button class="btn text-white bg-yellow rounded">ADD MONEY</button>\n            </ion-col>\n            <ion-col>\n                <button class="btn text-theme bg-white rounded">SEND TO BANK</button>\n            </ion-col>\n        </ion-row>\n    </div>\n\n</ion-header>\n\n<ion-content class="bg-light">\n    <ion-card>\n        <ion-item>\n            <ion-avatar item-start>\n                <img src="assets/imgs/face-1.jpg">\n            </ion-avatar>\n            <div class="name">\n                <h2>Paid for Ride\n                    <small>19 Feb, 05:15 pm</small>\n                </h2>\n                <p>Washing sq. Park to East Network</p>\n            </div>\n            <div class="more" text-right>\n                <h2 class="text-theme">-$120\n                </h2>\n                <p class="text-dark">To Johnson</p>\n            </div>\n        </ion-item>\n    </ion-card>\n    <ion-card>\n        <ion-item>\n            <ion-avatar item-start>\n                <img src="assets/imgs/man3.png">\n            </ion-avatar>\n            <div class="name">\n                <h2>Paid for Ride\n                    <small>19 Feb, 05:15 pm</small>\n                </h2>\n                <p>Washing sq. Park to East Network</p>\n            </div>\n            <div class="more" text-right>\n                <h2 class="text-theme">-$120\n                </h2>\n                <p class="text-dark">To Johnson</p>\n            </div>\n        </ion-item>\n    </ion-card>\n    <ion-card>\n        <ion-item>\n            <ion-avatar item-start>\n                <img src="assets/imgs/man1.png">\n            </ion-avatar>\n            <div class="name">\n                <h2>Paid for Ride\n                    <small>19 Feb, 05:15 pm</small>\n                </h2>\n                <p>Washing sq. Park to East Network</p>\n            </div>\n            <div class="more" text-right>\n                <h2 class="text-theme">-$120\n                </h2>\n                <p class="text-dark">To Johnson</p>\n            </div>\n        </ion-item>\n    </ion-card>\n    <ion-card>\n        <ion-item>\n            <ion-avatar item-start>\n                <img src="assets/imgs/man2.png">\n            </ion-avatar>\n            <div class="name">\n                <h2>Paid for Ride\n                    <small>19 Feb, 05:15 pm</small>\n                </h2>\n                <p>Washing sq. Park to East Network</p>\n            </div>\n            <div class="more" text-right>\n                <h2 class="text-theme">-$120\n                </h2>\n                <p class="text-dark">To Johnson</p>\n            </div>\n        </ion-item>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/waypool_customer/src/pages/wallet/wallet.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], WalletPage);
    return WalletPage;
}());

//# sourceMappingURL=wallet.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MorePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reviews_reviews__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__notification_notification__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__terms_terms__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__earn_earn__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__help_help__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_userauthentication_service__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_firebase__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_firebase__);
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
    function MorePage(navCtrl, authenticationService) {
        this.navCtrl = navCtrl;
        this.authenticationService = authenticationService;
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
        //     this.navCtrl.push();
    };
    MorePage.prototype.help = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__help_help__["a" /* HelpPage */]);
    };
    MorePage.prototype.logOut = function () {
        this.authenticationService.logOut();
        console.log(__WEBPACK_IMPORTED_MODULE_10_firebase__["auth"]().currentUser);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__login_login__["a" /* LoginPage */]);
    };
    MorePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-more',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/waypool_customer/src/pages/more/more.html"*/'<ion-header class="bg-theme">\n    <ion-navbar>\n        <ion-title class="text-center">MORE</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-light">\n    <ion-item>\n        <ion-avatar item-start>\n            <img src="assets/imgs/face-1.jpg">\n        </ion-avatar>\n        <div class="name">\n            <h2>David Johnson\n                <ion-icon name="ios-checkmark-circle" class="text-theme"></ion-icon>\n            </h2>\n            <p (click)="profile()">View Profile</p>\n        </div>\n        <div class="more">\n            <h2>\n                <ion-icon name="ios-star"></ion-icon>\n                <ion-icon name="ios-star"></ion-icon>\n                <ion-icon name="ios-star"></ion-icon>\n                <ion-icon name="ios-star"></ion-icon>\n                <ion-icon name="ios-star"></ion-icon>\n            </h2>\n            <p>(53 Reviews)</p>\n        </div>\n    </ion-item>\n\n    <ion-list no-lines>\n        <button ion-item (click)="reviews()">\n            <ion-avatar item-start>\n                <ion-icon name="ios-star"></ion-icon>\n            </ion-avatar>\n            My Reviews\n        </button>\n        <button ion-item (click)="notification()">\n            <ion-avatar item-start>\n                <ion-icon name="md-notifications"></ion-icon>\n            </ion-avatar>\n            Notification\n        </button>\n        <button ion-item (click)="terms()">\n            <ion-avatar item-start>\n                <ion-icon name="md-paper"></ion-icon>\n            </ion-avatar>\n            Term and Condition\n        </button>\n        <button ion-item (click)="earn()">\n            <ion-avatar item-start>\n                <ion-icon name="md-share"></ion-icon>\n            </ion-avatar>\n            Refer and Earn\n        </button>\n        <button ion-item (click)="ratevroom()">\n            <ion-avatar item-start>\n                <ion-icon name="md-thumbs-up"></ion-icon>\n            </ion-avatar>\n            Rate Vroom\n        </button>\n        <button ion-item (click)="help()">\n            <ion-avatar item-start>\n                <ion-icon name="md-alert"></ion-icon>\n            </ion-avatar>\n            Help\n        </button>\n    </ion-list>\n    <ion-list no-lines>\n        <button ion-item (click)="logOut()" text-center><h2 class="text-theme"><strong>Log out</strong></h2></button>\n\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/waypool_customer/src/pages/more/more.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_9__services_userauthentication_service__["a" /* authenticationService */]])
    ], MorePage);
    return MorePage;
}());

//# sourceMappingURL=more.js.map

/***/ }),

/***/ 318:
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
            selector: 'page-profile',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/waypool_customer/src/pages/profile/profile.html"*/'<ion-header class="bg-theme">\n    <ion-navbar>\n        <ion-title>MY PROFILE</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-light">\n    <ion-item style="position: relative;z-index: 2;">\n        <ion-avatar item-start>\n            <img src="assets/imgs/man3.png">\n        </ion-avatar>\n        <div class="name">\n            <h2>David Johnson\n            </h2>\n            <p>Edit Profile</p>\n        </div>\n        <div class="more">\n            <h2>\n                <ion-icon name="ios-star"></ion-icon>\n                <ion-icon name="ios-star"></ion-icon>\n                <ion-icon name="ios-star"></ion-icon>\n                <ion-icon name="ios-star"></ion-icon>\n                <ion-icon name="ios-star"></ion-icon>\n            </h2>\n            <p>(53 Reviews)</p>\n        </div>\n    </ion-item>\n    <div class="tabs bg-white">\n        <ion-segment [(ngModel)]="myprofile">\n            <ion-segment-button value="about">\n                About\n            </ion-segment-button>\n            <ion-segment-button value="reviews">\n                Reviews\n            </ion-segment-button>\n        </ion-segment>\n    </div>\n    <div [ngSwitch]="myprofile">\n        <ion-list *ngSwitchCase="\'about\'">\n            <div class="bg-white" padding>\n                <ion-list no-lines class="form-list">\n                    <ion-item>\n                        <ion-label floating>Your Name</ion-label>\n                        <ion-input type="text" value="Johan Bitoda" readonly></ion-input>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label floating>Phone Number</ion-label>\n                        <ion-input type="text" value="+91 964 148 6000" readonly></ion-input>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label floating>Email Address</ion-label>\n                        <ion-input type="text" value="johanbittoda@email.com" readonly></ion-input>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label floating>Profession</ion-label>\n                        <ion-input type="text" value="Senior Architechat Alex Designs." readonly></ion-input>\n                    </ion-item>\n                </ion-list>\n            </div>\n            <div padding-top padding-left padding-right text-center>\n                <p>\n                    <button class="btn text-theme rounded bg-white" style="width: 100%">CHANGE PASSWORD</button>\n                </p>\n\n            </div>\n        </ion-list>\n        <ion-list *ngSwitchCase="\'reviews\'">\n            <div class="bg-white" padding style="margin-bottom: 4px;">\n                <div class="rating-box">\n                    <p>\n                        <span class="text-1">5<ion-icon name="md-star"></ion-icon></span>\n                        <span class="rate-bar"><span class="bg-theme" style="width: 100%"></span></span>\n                        <span class="text-2">100</span>\n                    </p>\n                    <p>\n                        <span class="text-1">4<ion-icon name="md-star"></ion-icon></span>\n                        <span class="rate-bar"><span class="bg-theme" style="width: 90%"></span></span>\n                        <span class="text-2">90</span></p>\n                    <p>\n                        <span class="text-1">3<ion-icon name="md-star"></ion-icon></span>\n                        <span class="rate-bar"><span class="bg-theme" style="width: 70%"></span></span>\n                        <span class="text-2">60</span>\n                    </p>\n                    <p>\n                        <span class="text-1">2<ion-icon name="md-star"></ion-icon></span>\n                        <span class="rate-bar"><span class="bg-theme" style="width: 50%"></span></span>\n                        <span class="text-2">40</span>\n                    </p>\n                    <p>\n                        <span class="text-1">1<ion-icon name="md-star"></ion-icon></span>\n                        <span class="rate-bar"><span class="bg-theme" style="width: 20%"></span></span>\n                        <span class="text-2">20</span>\n                    </p>\n                </div>\n            </div>\n            <ion-card class="review">\n                <ion-item>\n                    <ion-avatar item-start>\n                        <img src="assets/imgs/face-1.jpg">\n                    </ion-avatar>\n                    <h2>Buzz Lightyear</h2>\n                    <p>\n                        <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n                        <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n                        <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n                        <ion-icon name="ios-star"></ion-icon>\n                        <ion-icon name="ios-star"></ion-icon>\n                    </p>\n                    <ion-note item-end>15 April 2017</ion-note>\n                </ion-item>\n                <ion-card-content>\n                    <div class="detail">\n                        <p>Badges are small components that typically communicate a numerical value to the user. They are typically used within an item.</p>\n                    </div>\n                </ion-card-content>\n            </ion-card>\n            <ion-card class="review">\n                <ion-item>\n                    <ion-avatar item-start>\n                        <img src="assets/imgs/face-1.jpg">\n                    </ion-avatar>\n                    <h2>Buzz Lightyear</h2>\n                    <p>\n                        <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n                        <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n                        <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n                        <ion-icon name="ios-star"></ion-icon>\n                        <ion-icon name="ios-star"></ion-icon>\n                    </p>\n                    <ion-note item-end>15 April 2017</ion-note>\n                </ion-item>\n                <ion-card-content>\n                    <div class="detail">\n                        <p>Badges are small components that typically communicate a numerical value to the user. They are typically used within an item.</p>\n                    </div>\n                </ion-card-content>\n            </ion-card>\n        </ion-list>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/waypool_customer/src/pages/profile/profile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 319:
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
            selector: 'page-reviews',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/waypool_customer/src/pages/reviews/reviews.html"*/'<ion-header class="bg-theme">\n    <ion-navbar>\n        <ion-title>MY REVIEWS</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-card>\n        <ion-item>\n            <ion-avatar item-start>\n                <img src="assets/imgs/face-1.jpg">\n            </ion-avatar>\n            <h2>Buzz Lightyear</h2>\n            <p>\n                <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n                <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n                <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n                <ion-icon name="ios-star"></ion-icon>\n                <ion-icon name="ios-star"></ion-icon>\n            </p>\n            <ion-note item-end>15 April 2017</ion-note>\n        </ion-item>\n        <ion-card-content>\n            <div class="detail">\n                <p>Badges are small components that typically communicate a numerical value to the user. They are typically used within an item.</p>\n            </div>\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-item>\n            <ion-avatar item-start>\n                <img src="assets/imgs/man1.png">\n            </ion-avatar>\n            <h2>Buzz Lightyear</h2>\n            <p>\n                <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n                <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n                <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n                <ion-icon name="ios-star"></ion-icon>\n                <ion-icon name="ios-star"></ion-icon>\n            </p>\n            <ion-note item-end>15 April 2017</ion-note>\n        </ion-item>\n        <ion-card-content>\n            <div class="detail">\n                <p>Badges are small components that typically communicate a numerical value to the user. They are typically used within an item.</p>\n            </div>\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-item>\n            <ion-avatar item-start>\n                <img src="assets/imgs/man2.png">\n            </ion-avatar>\n            <h2>Buzz Lightyear</h2>\n            <p>\n                <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n                <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n                <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n                <ion-icon name="ios-star"></ion-icon>\n                <ion-icon name="ios-star"></ion-icon>\n            </p>\n            <ion-note item-end>15 April 2017</ion-note>\n        </ion-item>\n        <ion-card-content>\n            <div class="detail">\n                <p>Badges are small components that typically communicate a numerical value to the user. They are typically used within an item.</p>\n            </div>\n        </ion-card-content>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/waypool_customer/src/pages/reviews/reviews.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], ReviewsPage);
    return ReviewsPage;
}());

//# sourceMappingURL=reviews.js.map

/***/ }),

/***/ 320:
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
            selector: 'page-notification',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/waypool_customer/src/pages/notification/notification.html"*/'<ion-header class="bg-theme">\n    <ion-navbar>\n        <ion-title>NOTIFICATION</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-light">\n    <ion-item>\n        <ion-avatar item-start>\n            <img src="assets/imgs/man1.png">\n        </ion-avatar>\n        <h2><span class="text-theme">Buzz Lightyear</span>&nbsp; Approved your request for ride\n        </h2>\n        <ion-note item-end>22 Feb 2018</ion-note>\n    </ion-item>\n    <ion-item>\n        <ion-avatar item-start>\n            <img src="assets/imgs/man2.png">\n        </ion-avatar>\n        <h2><span class="text-theme">Buzz Lightyear</span>&nbsp; Approved your request for ride\n        </h2>\n        <ion-note item-end>22 Feb 2018</ion-note>\n    </ion-item>\n    <ion-item>\n        <ion-avatar item-start>\n            <img src="assets/imgs/man3.png">\n        </ion-avatar>\n        <h2><span class="text-theme">Buzz Lightyear</span>&nbsp; Approved your request for ride\n        </h2>\n        <ion-note item-end>22 Feb 2018</ion-note>\n    </ion-item>\n    <ion-item>\n        <ion-avatar item-start>\n            <img src="assets/imgs/man4.png">\n        </ion-avatar>\n        <h2><span class="text-theme">Buzz Lightyear</span>&nbsp; Approved your request for ride\n        </h2>\n        <ion-note item-end>22 Feb 2018</ion-note>\n    </ion-item>\n    <ion-item>\n        <ion-avatar item-start>\n            <img src="assets/imgs/man5.png">\n        </ion-avatar>\n        <h2><span class="text-theme">Buzz Lightyear</span>&nbsp; Approved your request for ride\n        </h2>\n        <ion-note item-end>22 Feb 2018</ion-note>\n    </ion-item>\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/waypool_customer/src/pages/notification/notification.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], NotificationPage);
    return NotificationPage;
}());

//# sourceMappingURL=notification.js.map

/***/ }),

/***/ 321:
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
            selector: 'page-terms',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/waypool_customer/src/pages/terms/terms.html"*/'<ion-header class="transparent">\n    <ion-navbar>\n        <ion-title><span class="text-white">TEARMS & CONDITIONS</span></ion-title>\n    </ion-navbar>\n    <div class="logo">\n        <img src="assets/imgs/logo.png" alt="logo">\n    </div>\n</ion-header>\n\n<ion-content class="bg-background-img">\n    <div class="bg-white">\n        <h4 class="text-theme">Terms Of Vroom</h4>\n        <p class="text-dark">Menu is a side-menu navigation that can be dragged out or toggled to show. The content of a menu will be hidden when the menu is closed. Menu is a side-menu navigation that can be dragged out or toggled to show. The content of a menu will be hidden when the menu is closed. Menu is a side-menu navigation that can be dragged out or toggled to show. The content of a menu will be hidden when the menu is closed.</p>\n        <p class="text-dark">Menu is a side-menu navigation that can be dragged out or toggled to show. The content of a menu will be hidden when the menu is closed. Menu is a side-menu navigation that can be dragged out or toggled to show. The content of a menu will be hidden when the menu is closed. Menu is a side-menu navigation that can be dragged out or toggled to show. The content of a menu will be hidden when the menu is closed.</p>\n        <p class="text-dark">Menu is a side-menu navigation that can be dragged out or toggled to show. The content of a menu will be hidden when the menu is closed. Menu is a side-menu navigation that can be dragged out or toggled to show. The content of a menu will be hidden when the menu is closed. Menu is a side-menu navigation that can be dragged out or toggled to show. The content of a menu will be hidden when the menu is closed.</p>\n\n    </div>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/waypool_customer/src/pages/terms/terms.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], TermsPage);
    return TermsPage;
}());

//# sourceMappingURL=terms.js.map

/***/ }),

/***/ 322:
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
            selector: 'page-earn',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/waypool_customer/src/pages/earn/earn.html"*/'<ion-header class="transparent">\n    <ion-navbar>\n        <ion-title><span class="text-white"></span></ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <img src="assets/imgs/menu-bg2.jpg">\n    <div padding-left padding-right>\n        <ion-card class="bg-theme">\n            <ion-card-content text-center>\n                <p class="text-white">Your Referral Code</p>\n                <h6 class="text-white">532461</h6>\n            </ion-card-content>\n        </ion-card>\n        <div padding-left padding-right padding-top padding>\n            <br>\n            <h4 class="text-theme">Refer and earn</h4>\n            <p class="text-drack">Share the referral code with your friends and family members and get 30% off on cab fare</p>\n        </div>\n        <ion-row>\n            <ion-col col-3 text-center padding>\n                <img src="assets/imgs/fb.png">\n            </ion-col>\n            <ion-col col-3 text-center padding padding>\n                <img src="assets/imgs/wpp.png">\n            </ion-col>\n            <ion-col col-3 text-center padding>\n                <img src="assets/imgs/tw.png">\n            </ion-col>\n            <ion-col col-3 text-center padding>\n                <img src="assets/imgs/more.png">\n            </ion-col>\n        </ion-row>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/waypool_customer/src/pages/earn/earn.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], EarnPage);
    return EarnPage;
}());

//# sourceMappingURL=earn.js.map

/***/ }),

/***/ 323:
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
            selector: 'page-help',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/waypool_customer/src/pages/help/help.html"*/'<ion-header class="bg-theme">\n    <ion-navbar>\n        <ion-title>HELP</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-light">\n    <p class="text-light" padding>choose your issue</p>\n    <ion-card>\n        <ion-card-header>\n            <h1><strong>Trips and fare</strong>\n                <ion-icon name="ios-arrow-down-outline" class="text-light"></ion-icon>\n            </h1>\n        </ion-card-header>\n        <ion-card-content class="text-light">\n            <small>Any issue regarding your trip and fare</small>\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-card-header>\n            <h1><strong>Payment</strong>\n                <ion-icon name="ios-arrow-down-outline" class="text-light"></ion-icon>\n            </h1>\n        </ion-card-header>\n        <ion-card-content class="text-light">\n            <small>problim while paying fare or related issue</small>\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-card-header>\n            <h1><strong>App Usability</strong>\n                <ion-icon name="ios-arrow-down-outline" class="text-light"></ion-icon>\n            </h1>\n        </ion-card-header>\n        <ion-card-content class="text-light">\n            <small>Any issue while using our App</small>\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-card-header>\n            <h1><strong>Account</strong>\n                <ion-icon name="ios-arrow-down-outline" class="text-light"></ion-icon>\n            </h1>\n        </ion-card-header>\n        <ion-card-content class="text-light">\n            <small>your account info can\'t change details or change Password .</small>\n        </ion-card-content>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/waypool_customer/src/pages/help/help.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], HelpPage);
    return HelpPage;
}());

//# sourceMappingURL=help.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CodePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(76);
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
            selector: 'page-code',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/waypool_customer/src/pages/code/code.html"*/'<ion-content padding>\n    <h1 text-right>\n        <ion-icon class="text-white" name="md-close" (click)="dismiss()"></ion-icon>\n    </h1>\n    <ion-card>\n        <img src="assets/imgs/menu-bg.png" />\n        <ion-card-content>\n            <div padding-top padding-right padding-left>\n                <ion-card-title class="text-theme">\n                    Do you have any referral code?\n                </ion-card-title>\n                <h5 padding-top>\n                    Add referral code and get <br> 100% cashback on first ride.\n                </h5>\n                <ion-list class="form">\n                    <ion-item class="bg-light">\n                        <ion-input type="text" placeholder="Add 6 digit referral code" class="text-light"></ion-input>\n                    </ion-item>\n                </ion-list>\n                <p><strong class="text-dark">I Dont\'have </strong><strong class="text-theme" style="float: right;" (click)="rootpage()">Continue</strong></p>\n            </div>\n        </ion-card-content>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/waypool_customer/src/pages/code/code.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], CodePage);
    return CodePage;
}());

//# sourceMappingURL=code.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmridePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__confirmpopup_confirmpopup__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_sendCoords_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tabs_tabs__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_signup_services__ = __webpack_require__(46);
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
    function ConfirmridePage(navCtrl, modalCtrl, afDB, SignUpService, sendCoordsService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.afDB = afDB;
        this.SignUpService = SignUpService;
        this.sendCoordsService = sendCoordsService;
        this.driversAvailable = [];
        this.SignUpService.getDrivers()
            .subscribe(function (drivers) {
            _this.driversAvailable = drivers;
        });
    }
    ConfirmridePage.prototype.confirmpopup = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__confirmpopup_confirmpopup__["a" /* ConfirmpopupPage */]);
        modal.present();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__tabs_tabs__["a" /* TabsPage */]);
    };
    ConfirmridePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-confirmride',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/waypool_customer/src/pages/confirmride/confirmride.html"*/'<ion-header class="bg-theme">\n    <ion-navbar>\n        <ion-title>CONFIRM RIDE REQUEST</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bh-light">\n    <ion-card>\n        <ion-item>\n            <ion-avatar item-start>\n                <img src="assets/imgs/face-1.jpg">\n            </ion-avatar>\n            <div *ngFor = "let driver of driversAvailable"  class="name">\n                <h2>{{driver.name}} {{driver.lastname}}\n                    <ion-icon name="ios-checkmark-circle" class="text-theme"></ion-icon>\n                </h2>\n                <p>{{driver.carModel}} | {{driver.plateNumber}}</p>\n            </div>\n        </ion-item>\n        <ion-card-content>\n            <div class="ride-detail">\n                <h6 class="text-theme">Location</h6>\n                <p><small>Pickup Location<ion-icon name="md-create"></ion-icon></small>\n                    <span class="icon-location bg-theme"></span>Washington sq.park New York</p>\n                <p>\n                    <small>Drop Location<ion-icon name="md-create"></ion-icon></small>\n                    <span class="icon-location bg-yellow"></span>Harison, east sq.park New York</p>\n            </div>\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-card-content>\n            <div class="ride-detail no-before">\n                <h6 class="text-theme">Date & Time</h6>\n                <p><small>Date<ion-icon name="md-create"></ion-icon></small>\n                    <ion-icon name="md-calendar" class="icon-location"></ion-icon>\n                    22<sup>nd</sup> Feb, 2018 </p>\n                <p>\n                    <small>Time</small>\n                    <ion-icon name="md-time" class="icon-location"></ion-icon>\n                    Between 12:10pm to 12:30pm</p>\n            </div>\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-card-content>\n            <div class="seats">\n                <h6 class="text-theme">Fare & Seat Conformation</h6>\n                <ion-row>\n                    <ion-col col-4 class="rate">\n                        <small>Est Fare</small> $ 120\n                    </ion-col>\n                    <ion-col col-8>\n                        <div class="seats-tag">\n                            <ion-icon name="remove-circle"></ion-icon>\n                            <strong>2 Seats</strong>\n                            <ion-icon name="add-circle"></ion-icon>\n                        </div>\n                    </ion-col>\n                </ion-row>\n                <button class="btn bg-theme text-white rounded" (click)="confirmpopup()" style="width: 100%;margin-top: 16px;">CONFIRM REQUEST</button>\n            </div>\n        </ion-card-content>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/waypool_customer/src/pages/confirmride/confirmride.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_6__services_signup_services__["a" /* SignUpService */], __WEBPACK_IMPORTED_MODULE_4__services_sendCoords_service__["a" /* sendCoordsService */]])
    ], ConfirmridePage);
    return ConfirmridePage;
}());

//# sourceMappingURL=confirmride.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(459);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_myride_myride__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_chats_chats__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_findride_findride__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_wallet_wallet__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_more_more__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_signup_signup__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_password_password__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_verification_verification__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_code_code__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_listride_listride__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_filter_filter__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_riderprofile_riderprofile__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_confirmride_confirmride__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_confirmpopup_confirmpopup__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_raterider_raterider__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_chatting_chatting__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_profile_profile__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_reviews_reviews__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_notification_notification__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_terms_terms__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_earn_earn__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_help_help__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_status_bar__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_splash_screen__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_native_google_maps__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__angular_fire__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__angular_fire_database__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__angular_fire_auth__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__services_userauthentication_service__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__ionic_native_firebase__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__ionic_native_geolocation__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__services_sendCoords_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__services_sendUsers_service__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__services_note_service__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_confirmnote_confirmnote__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__ionic_native_call_number__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__services_geoFire_service__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__angular_common__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__services_instances_service__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__services_signup_services__ = __webpack_require__(46);
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
                __WEBPACK_IMPORTED_MODULE_40__pages_confirmnote_confirmnote__["a" /* ConfirmNotePage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_reviews_reviews__["a" /* ReviewsPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_notification_notification__["a" /* NotificationPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_terms_terms__["a" /* TermsPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_earn_earn__["a" /* EarnPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_help_help__["a" /* HelpPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_31__angular_fire__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_32__angular_fire_database__["AngularFireDatabaseModule"],
                __WEBPACK_IMPORTED_MODULE_33__angular_fire_auth__["AngularFireAuthModule"],
                __WEBPACK_IMPORTED_MODULE_43__angular_common__["b" /* CommonModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
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
                __WEBPACK_IMPORTED_MODULE_40__pages_confirmnote_confirmnote__["a" /* ConfirmNotePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_raterider_raterider__["a" /* RateriderPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_chatting_chatting__["a" /* ChattingPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_reviews_reviews__["a" /* ReviewsPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_notification_notification__["a" /* NotificationPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_terms_terms__["a" /* TermsPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_earn_earn__["a" /* EarnPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_help_help__["a" /* HelpPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_28__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_29__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_30__ionic_native_google_maps__["a" /* GoogleMaps */],
                __WEBPACK_IMPORTED_MODULE_45__services_signup_services__["a" /* SignUpService */],
                __WEBPACK_IMPORTED_MODULE_34__services_userauthentication_service__["a" /* authenticationService */],
                __WEBPACK_IMPORTED_MODULE_35__ionic_native_firebase__["a" /* Firebase */],
                __WEBPACK_IMPORTED_MODULE_36__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_37__services_sendCoords_service__["a" /* sendCoordsService */],
                __WEBPACK_IMPORTED_MODULE_38__services_sendUsers_service__["a" /* sendUsersService */],
                __WEBPACK_IMPORTED_MODULE_39__services_note_service__["a" /* noteService */],
                __WEBPACK_IMPORTED_MODULE_41__ionic_native_call_number__["a" /* CallNumber */],
                __WEBPACK_IMPORTED_MODULE_42__services_geoFire_service__["a" /* geofireService */],
                __WEBPACK_IMPORTED_MODULE_44__services_instances_service__["a" /* instancesService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__ = __webpack_require__(38);
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
    SignUpService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_fire_database__["AngularFireDatabase"]])
    ], SignUpService);
    return SignUpService;
}());

//# sourceMappingURL=signup.services.js.map

/***/ }),

/***/ 502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(95);
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
        localStorage.removeItem('firebase:previous_websocket_failure');
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/waypool_customer/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/waypool_customer/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 532:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chatting_chatting__ = __webpack_require__(98);
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
            selector: 'page-chats',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/waypool_customer/src/pages/chats/chats.html"*/'<ion-header class="bg-theme">\n    <ion-navbar>\n        <ion-title class="text-center">CHATS\n            <ion-icon name="md-search" class="text-white" style="margin-left: auto;float: right;"></ion-icon>\n        </ion-title>\n\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-light">\n    <ion-item (click)="chatting()">\n        <ion-avatar item-start>\n            <img src="assets/imgs/face-1.jpg">\n            <ion-badge color="danger">9+</ion-badge>\n        </ion-avatar>\n        <h2 class="text-theme">Buzz Lightyear\n            <ion-icon name="ios-checkmark-circle"></ion-icon>\n        </h2>\n        <p>Washington sq Park?</p>\n        <ion-note item-end>Ride on<span class="time">1:12 pm</span></ion-note>\n    </ion-item>\n    <!-- repeat -->\n    <ion-item (click)="chatting()">\n        <ion-avatar item-start>\n            <img src="assets/imgs/man1.png">\n        </ion-avatar>\n        <h2>Buzz Lightyear\n            <ion-icon name="ios-checkmark-circle"></ion-icon>\n        </h2>\n        <p>Washington sq Park?</p>\n        <ion-note item-end>Ride on<span class="time">1:12 pm</span></ion-note>\n    </ion-item>\n    <ion-item>\n        <ion-avatar item-start>\n            <img src="assets/imgs/man2.png">\n        </ion-avatar>\n        <h2>Buzz Lightyear</h2>\n        <p>Washington sq Park?</p>\n        <ion-note item-end>Ride on<span class="time">1:12 pm</span></ion-note>\n    </ion-item>\n    <ion-item (click)="chatting()">\n        <ion-avatar item-start>\n            <img src="assets/imgs/man3.png">\n        </ion-avatar>\n        <h2>Buzz Lightyear\n            <ion-icon name="ios-checkmark-circle"></ion-icon>\n        </h2>\n        <p>Washington sq Park?</p>\n        <ion-note item-end>Ride on<span class="time">1:12 pm</span></ion-note>\n    </ion-item>\n    <ion-item>\n        <ion-avatar item-start>\n            <img src="assets/imgs/man4.png">\n        </ion-avatar>\n        <h2>Buzz Lightyear</h2>\n        <p>Washington sq Park?</p>\n        <ion-note item-end>Ride on<span class="time">1:12 pm</span></ion-note>\n    </ion-item>\n    <p text-center class="text-light"><small>Chat will be dessapear after completed the ride or<br>in case of cancelation of ride.</small></p>\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/waypool_customer/src/pages/chats/chats.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], ChatsPage);
    return ChatsPage;
}());

//# sourceMappingURL=chats.js.map

/***/ }),

/***/ 533:
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
            selector: 'page-password',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/waypool_customer/src/pages/password/password.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>password</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <p (click)="signup()">signup</p>\n    <p (click)="password()">forgot password</p>\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/waypool_customer/src/pages/password/password.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], PasswordPage);
    return PasswordPage;
}());

//# sourceMappingURL=password.js.map

/***/ }),

/***/ 534:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__code_code__ = __webpack_require__(324);
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
            selector: 'page-verification',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/waypool_customer/src/pages/verification/verification.html"*/'<ion-header class="transparent">\n    <ion-navbar>\n        <ion-title><span class="text-white">verification</span></ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-background-img">\n    <div class="logo">\n        <img src="assets/imgs/logo.png" alt="logo">\n    </div>\n    <div class="bg-white login">\n        <div class="">\n            <p padding text-center>Enter confirmation code<br>sent to you on your SMS!</p>\n            <br>\n            <ion-list class="form" text-center>\n                <ion-item>\n                    <ion-input type="text" value="33456" text-right></ion-input>\n                </ion-item>\n            </ion-list>\n            <button ion-button full class="bg-theme text-white btn rounded" (click)="code()">Next</button>\n        </div>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/waypool_customer/src/pages/verification/verification.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], VerificationPage);
    return VerificationPage;
}());

//# sourceMappingURL=verification.js.map

/***/ }),

/***/ 535:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RiderprofilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__confirmride_confirmride__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chatting_chatting__ = __webpack_require__(98);
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
            selector: 'page-riderprofile',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/waypool_customer/src/pages/riderprofile/riderprofile.html"*/'<ion-header class="bg-theme">\n    <ion-navbar>\n        <ion-title>RIDER PROFILE</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-light">\n    <ion-item style="position: relative;z-index: 2;">\n        <ion-avatar item-start>\n            <img src="assets/imgs/man3.png">\n        </ion-avatar>\n        <div class="name">\n            <h2>David Johnson&nbsp;\n                <ion-icon name="ios-checkmark-circle" class="text-theme"></ion-icon>\n            </h2>\n            <p>Honda Civic | White</p>\n        </div>\n        <div class="more">\n            <h2>\n                <ion-icon name="ios-star"></ion-icon>\n                <ion-icon name="ios-star"></ion-icon>\n                <ion-icon name="ios-star"></ion-icon>\n                <ion-icon name="ios-star"></ion-icon>\n                <ion-icon name="ios-star"></ion-icon>\n            </h2>\n            <p>(53 Reviews)</p>\n        </div>\n    </ion-item>\n    <div class="tabs bg-white">\n        <ion-segment [(ngModel)]="rideprofile">\n            <ion-segment-button value="about">\n                About\n            </ion-segment-button>\n            <ion-segment-button value="reviews">\n                Reviews\n            </ion-segment-button>\n        </ion-segment>\n    </div>\n    <div [ngSwitch]="rideprofile">\n        <ion-list *ngSwitchCase="\'about\'">\n            <ion-card>\n                <ion-card-content>\n                    <div class="ride-detail">\n                        <p class="detail">Home - Office</p>\n                        <p>\n                            <span class="icon-location bg-theme"></span><span class="time">12:00 am</span>Washington sq.park New York</p>\n                        <p>\n                            <span class="icon-location bg-yellow"></span><span class="time">12:50 am</span>Harison, east sq.park New York</p>\n                    </div>\n                    <div class="ride-detail">\n                        <p class="detail">Office - Home</p>\n                        <p>\n                            <span class="icon-location bg-theme"></span><span class="time">12:00 am</span>Washington sq.park New York</p>\n                        <p>\n                            <span class="icon-location bg-yellow"></span><span class="time">12:50 am</span>Harison, east sq.park New York</p>\n                    </div>\n                </ion-card-content>\n            </ion-card>\n            <ion-card>\n                <ion-card-content>\n                    <ion-row>\n                        <ion-col class="detail-text" col-5>\n                            <div text-left>\n                                Vehocle Capacity\n                                <h2>3Seats</h2>\n                            </div>\n                        </ion-col>\n                        <ion-col class="detail-text" col-5>\n                            <div text-left>Air Condition\n                                <h2>AC available</h2>\n                            </div>\n                        </ion-col>\n                        <ion-col class="detail-text" col-2>\n                            <div text-left>Min Fare\n                                <h2>$ 60</h2>\n                            </div>\n                        </ion-col>\n                    </ion-row>\n                </ion-card-content>\n            </ion-card>\n            <ion-card>\n                <ion-card-content>\n                    <ion-row>\n                        <ion-col class="detail-text">\n                            <div text-left>\n                                Usually Travel Days\n                            </div>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row>\n                        <ion-col col-4>Monday</ion-col>\n                        <ion-col col-4>Tuesday</ion-col>\n                        <ion-col col-4>Wednesday</ion-col>\n                        <ion-col col-4>Thursday</ion-col>\n                        <ion-col col-4>Friday</ion-col>\n                        <ion-col col-4 class="text-light">Saturday</ion-col>\n                        <ion-col col-4 class="text-light">Sunday</ion-col>\n                    </ion-row>\n                </ion-card-content>\n            </ion-card>\n        </ion-list>\n        <ion-list *ngSwitchCase="\'reviews\'">\n            <div class="bg-white" padding style="margin-bottom: 4px;">\n                <div class="rating-box">\n                    <p>\n                        <span class="text-1">5<ion-icon name="md-star"></ion-icon></span>\n                        <span class="rate-bar"><span class="bg-theme" style="width: 100%"></span></span>\n                        <span class="text-2">100</span>\n                    </p>\n                    <p>\n                        <span class="text-1">4<ion-icon name="md-star"></ion-icon></span>\n                        <span class="rate-bar"><span class="bg-theme" style="width: 90%"></span></span>\n                        <span class="text-2">90</span></p>\n                    <p>\n                        <span class="text-1">3<ion-icon name="md-star"></ion-icon></span>\n                        <span class="rate-bar"><span class="bg-theme" style="width: 70%"></span></span>\n                        <span class="text-2">60</span>\n                    </p>\n                    <p>\n                        <span class="text-1">2<ion-icon name="md-star"></ion-icon></span>\n                        <span class="rate-bar"><span class="bg-theme" style="width: 50%"></span></span>\n                        <span class="text-2">40</span>\n                    </p>\n                    <p>\n                        <span class="text-1">1<ion-icon name="md-star"></ion-icon></span>\n                        <span class="rate-bar"><span class="bg-theme" style="width: 20%"></span></span>\n                        <span class="text-2">20</span>\n                    </p>\n                </div>\n            </div>\n            <ion-card class="review">\n                <ion-item>\n                    <ion-avatar item-start>\n                        <img src="assets/imgs/face-1.jpg">\n                    </ion-avatar>\n                    <h2>Buzz Lightyear</h2>\n                    <p>\n                        <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n                        <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n                        <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n                        <ion-icon name="ios-star"></ion-icon>\n                        <ion-icon name="ios-star"></ion-icon>\n                    </p>\n                    <ion-note item-end>15 April 2017</ion-note>\n                </ion-item>\n                <ion-card-content>\n                    <div class="detail">\n                        <p>Badges are small components that typically communicate a numerical value to the user. They are typically used within an item.</p>\n                    </div>\n                </ion-card-content>\n            </ion-card>\n            <ion-card class="review">\n                <ion-item>\n                    <ion-avatar item-start>\n                        <img src="assets/imgs/face-1.jpg">\n                    </ion-avatar>\n                    <h2>Buzz Lightyear</h2>\n                    <p>\n                        <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n                        <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n                        <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n                        <ion-icon name="ios-star"></ion-icon>\n                        <ion-icon name="ios-star"></ion-icon>\n                    </p>\n                    <ion-note item-end>15 April 2017</ion-note>\n                </ion-item>\n                <ion-card-content>\n                    <div class="detail">\n                        <p>Badges are small components that typically communicate a numerical value to the user. They are typically used within an item.</p>\n                    </div>\n                </ion-card-content>\n            </ion-card>\n        </ion-list>\n    </div>\n    <ion-row class="fix-btn">\n        <ion-col>\n            <button class="btn rounded text-theme bg-white full" (click)="chatting()">MESSAGE</button>\n        </ion-col>\n        <ion-col>\n            <button class="btn rounded text-white bg-theme full" (click)="confirmride()">REQUEST RIDE</button>\n        </ion-col>\n    </ion-row>\n    <div class="space">&nbsp;</div>\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/waypool_customer/src/pages/riderprofile/riderprofile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], RiderprofilePage);
    return RiderprofilePage;
}());

//# sourceMappingURL=riderprofile.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sendCoordsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__ = __webpack_require__(38);
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

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__myride_myride__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__findride_findride__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wallet_wallet__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__more_more__ = __webpack_require__(317);
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
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__myride_myride__["a" /* MyridePage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__findride_findride__["a" /* FindridePage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_3__wallet_wallet__["a" /* WalletPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_4__more_more__["a" /* MorePage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/waypool_customer/src/pages/tabs/tabs.html"*/'<ion-tabs tabsHideOnSubPages="false">\n    <ion-tab [root]="tab2Root" tabTitle="My Ride" tabIcon="md-car" tabsHideOnSubPages="false"></ion-tab>\n    <ion-tab [root]="tab3Root" tabTitle="Find a ride" tabIcon="md-search" tabsHideOnSubPages="false"></ion-tab>\n    <ion-tab [root]="tab4Root" tabTitle="Wallet" tabIcon="md-card" tabsHideOnSubPages="false"></ion-tab>\n    <ion-tab [root]="tab5Root" tabTitle="more" tabIcon="md-person" tabsHideOnSubPages="false"></ion-tab>\n</ion-tabs>\n '/*ion-inline-end:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/waypool_customer/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_userauthentication_service__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_signup_services__ = __webpack_require__(46);
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
    function LoginPage(navCtrl, authenticationService, alertCtrl, AngularFireAuth, NavParams, SignUpService) {
        this.navCtrl = navCtrl;
        this.authenticationService = authenticationService;
        this.alertCtrl = alertCtrl;
        this.AngularFireAuth = AngularFireAuth;
        this.NavParams = NavParams;
        this.SignUpService = SignUpService;
        this.email = '';
        this.password = null;
        this.auth = this.AngularFireAuth.auth;
    }
    LoginPage.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage.prototype.resetPassword = function (email) {
        if (this.email == '') {
            var alert_1 = this.alertCtrl.create({
                title: 'no hay ningun email',
                subTitle: 'ingresa un email para resetear tu contraseña',
                buttons: ['OK']
            });
            alert_1.present();
            console.log("reset password email hasn't been sent");
        }
        else {
            this.auth.sendPasswordResetEmail(this.email);
            var alert_2 = this.alertCtrl.create({
                title: 'revisa tu email',
                subTitle: 'un correo te ha sido enviado para resetear tu contraseña',
                buttons: ['OK']
            });
            alert_2.present();
            console.log("reset password email has been sent");
        }
        ;
    };
    ;
    LoginPage.prototype.logIn = function () {
        var _this = this;
        this.receivedUser = this.NavParams.data;
        this.authenticationService.loginWithEmail(this.email, this.password).then(function (data) {
            console.log(data);
            if (data.user.emailVerified == false) {
                var alert_3 = _this.alertCtrl.create({
                    title: 'Oops!',
                    subTitle: 'por favor verifica tu email',
                    buttons: ['OK']
                });
                alert_3.present();
            }
            else {
                var metadata = _this.auth.currentUser.metadata;
                if (metadata.creationTime == metadata.lastSignInTime) {
                    console.log(metadata.creationTime);
                    console.log(metadata.lastSignInTime);
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]); //aqui va registration car, no tabspge
                }
                else {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
                }
                _this.authenticationService.getStatus;
            }
            ;
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
            selector: 'page-login',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/waypool_customer/src/pages/login/login.html"*/'<ion-header class="transparent">\n    <ion-navbar>\n        <ion-title><span class="text-white">SIGN IN</span></ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-background-img">\n    <div class="logo">\n        <img src="../../assets/imgs/logo waypool-01.png" alt="logo">\n    </div>\n\n    <div class="bg-white login">\n        <div class="">\n            <ion-list class="form">\n                <ion-item>\n                    <ion-label></ion-label>\n                    <ion-input type="email"  text-right [(ngModel)]="email" placeholder= "email universitario"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label></ion-label>\n                    <ion-input type="password" text-right  [(ngModel)]="password" placeholder= "Tú contraseña"></ion-input>\n                </ion-item>\n            </ion-list>\n            <button ion-button full class="bg-theme text-white btn rounded" (click)="logIn()">ENTRAR</button>\n            <ion-row style="padding-top: 30px;">\n                <ion-col (click)="signup()"><small>¿eres nuevo? <strong class="text-theme">Sign up</strong></small></ion-col>\n                <ion-col text-right (click)="resetPassword(email)"><small>Olvidaste tu <strong class="text-theme">contraseña?</strong></small></ion-col>\n            </ion-row>\n            <!-- <p text-center class="option-login"><span>OR CONTINUE WITH</span></p>\n            <ion-row>\n                <ion-col col-6><button ion-button full class="bg-blue text-white btn rounded small"><img src="assets/imgs/fb_white.png">\n                    <span>Facebook</span></button></ion-col>\n                <ion-col col-6><button ion-button full class="bg-white text-dark btn rounded small"><img src="assets/imgs/google.png">\n                    <span>Google&nbsp;&nbsp;</span></button></ion-col>\n            </ion-row> -->\n        </div>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/waypool_customer/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__services_userauthentication_service__["a" /* authenticationService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6__services_signup_services__["a" /* SignUpService */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return authenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(31);
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

/***/ 98:
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
            selector: 'page-chatting',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/waypool_customer/src/pages/chatting/chatting.html"*/'<ion-header class="bg-theme">\n    <ion-navbar>\n        <ion-item>\n            <ion-avatar item-start>\n                <img src="assets/imgs/face-1.jpg">\n            </ion-avatar>\n            <h2><span class="text-white">David Johnson</span>\n                <ion-icon name="md-more" end-item item-end class="text-white"></ion-icon>\n            </h2>\n        </ion-item>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding class="chat-bg">\n    <div class=" chat chat-right bg-white text-dark" text-right padding float-right>\n        <p>Hey David !!</p>\n        <p>Good time to talk?</p>\n        <p><small>12:33 pm</small></p>\n    </div>\n    <div class="chat chat-left bg-theme text-white" text-left padding float-left>\n        <p>Hey mate !!</p>\n        <p>Yes, tell me your query bro!</p>\n        <p><small>12:33 pm</small></p>\n    </div>\n    <div class="fixed-bottom">\n        <ion-list inset>\n            <ion-item>\n                <ion-icon name="md-add" class="circle-icon" item-start></ion-icon>\n                <ion-input type="text" placeholder="Type your Message"></ion-input>\n                <ion-icon name="md-send" class="text-theme" item-end></ion-icon>\n            </ion-item>\n        </ion-list>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/codecanyon-21673171-car-pooling-ionic-app-templete-vroom/waypool_customer/src/pages/chatting/chatting.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], ChattingPage);
    return ChattingPage;
}());

//# sourceMappingURL=chatting.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sendUsersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(31);
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
        //send the user to the driver
        this.afDB.database.ref('/drivers/' + DriverUserId + '/trips/pickingUsers/' + userUid).remove();
        this.afDB.database.ref('/users/' + userUid + '/trips').remove();
    };
    sendUsersService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_fire_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"]])
    ], sendUsersService);
    return sendUsersService;
}());

//# sourceMappingURL=sendUsers.service.js.map

/***/ })

},[326]);
//# sourceMappingURL=main.js.map