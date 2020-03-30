webpackJsonp([41],{

/***/ 662:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCrewPageModule", function() { return CreateCrewPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__createcrew__ = __webpack_require__(854);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CreateCrewPageModule = /** @class */ (function () {
    function CreateCrewPageModule() {
    }
    CreateCrewPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__createcrew__["a" /* CreateCrewPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__createcrew__["a" /* CreateCrewPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__createcrew__["a" /* CreateCrewPage */]
            ]
        })
    ], CreateCrewPageModule);
    return CreateCrewPageModule;
}());

//# sourceMappingURL=createcrew.module.js.map

/***/ }),

/***/ 854:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateCrewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_signup_services__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_sendCoords_service__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_sendUsers_service__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_geoFire_service__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_instances_service__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_d_geofire_services__ = __webpack_require__(353);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var CreateCrewPage = /** @class */ (function () {
    function CreateCrewPage(navCtrl, sendUsersService, toastCtrl, viewCtrl, afDB, SignUpService, sendCoordsService, navParams, AngularFireAuth, geoFireService, instances, alertCtrl, geofireServicesDr) {
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
        this.alertCtrl = alertCtrl;
        this.geofireServicesDr = geofireServicesDr;
        this.admin = {};
        this.pointsAlongRoute = [];
        this.indexesOfPointsAlongRoute = [];
        this.count = 0;
        this.userId = this.AngularFireAuth.auth.currentUser.uid;
        // Getting info for creating crew in DB
        this.afDB.database.ref('/usersTest/' + this.userId).once('value').then(function (snap) {
            if (snap.val()) {
                _this.admin = {
                    city: snap.val().city,
                    company: snap.val().company,
                    name: snap.val().name,
                    lastname: snap.val().lastname,
                    phone: snap.val().phone,
                    userId: snap.val().userId,
                    verifiedPerson: snap.val().verifiedPerson,
                };
                _this.origin = snap.val().trips.origin[0];
                _this.destination = snap.val().trips.destination[0];
            }
        });
        this.latOr = this.navParams.get('latOr');
        this.lngOr = this.navParams.get('lngOr');
        this.latDest = this.navParams.get('latDest');
        this.lngDest = this.navParams.get('lngDest');
        this.pointsAlongRoute = this.navParams.get('pointsAlongRoute');
        this.indexesOfPointsAlongRoute = this.navParams.get('indexesOfPointsAlongRoute');
    }
    CreateCrewPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    CreateCrewPage.prototype.setCrew = function () {
        var _this = this;
        if (this.startHour === undefined) {
            var alert = this.alertCtrl.create({
                title: 'Por favor confirma la hora a la que iniciaría este viaje',
                buttons: ['OK']
            });
            alert.present();
        }
        else {
            //AQUI QUEDE
            this.afDB.database.ref('/crewsTest/' + this.userId).push({
                admin: this.admin,
                startHour: this.startHour,
                destination: {
                    name: this.destination,
                    coords: {
                        lat: this.latDest,
                        lng: this.lngDest
                    }
                },
                origin: {
                    name: this.origin,
                    coords: {
                        lat: this.latOr,
                        lng: this.lngOr
                    }
                },
            }).then(function (snap) {
                var Key_Crew = snap.key;
                _this.afDB.database.ref('/crewsTest/' + _this.userId + '/' + Key_Crew).update({
                    crewId: Key_Crew
                }).then(function () {
                    _this.geofireServicesDr.setGeofireOrCrew(Key_Crew, _this.latOr, _this.lngOr);
                    _this.afDB.database.ref('/geofireOrCrew/' + Key_Crew).update({
                        adminId: _this.userId
                    });
                    console.log('executed geofire Or for crews');
                    _this.geofireServicesDr.setGeofireDestCrew(Key_Crew, _this.latDest, _this.lngDest);
                    _this.afDB.database.ref('/geofireDestCrew/' + Key_Crew).update({
                        adminId: _this.userId
                    });
                    console.log('executed geofire dest');
                    _this.indexesOfPointsAlongRoute.forEach(function (index) {
                        _this.count++;
                        var newKey = Key_Crew.concat(_this.count);
                        _this.geofireServicesDr.setGeofireRouteCrew(newKey, _this.pointsAlongRoute[index].lat, _this.pointsAlongRoute[index].lng);
                        _this.afDB.database.ref('/geofireRouteCrew/' + newKey).update({
                            adminId: _this.userId,
                            crewId: Key_Crew
                        });
                    });
                });
            }).then(function () {
                var alert = _this.alertCtrl.create({
                    title: 'Eres ahora administrador del crew que acabaste de crear',
                    subTitle: 'Ve a "Mis Viajes" y revisa el estado de tu crew',
                    buttons: ['OK']
                });
                alert.present();
                _this.viewCtrl.dismiss();
            });
        }
    };
    CreateCrewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-createcrew',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/waypool_costumer/src/pages/p-createcrew/createcrew.html"*/'<ion-content>\n        <ion-card>\n                <img src="assets/imgs/picmodales.png" width="100px" style="display:inline-block" height="150px"/>\n                <ion-icon name="close-circle" class="close-icon text-white"  (click)="dismiss()"></ion-icon>\n    \n            <ion-card-content>\n                                <h2 text-center>Set the time this trip will start:</h2>\n                    <div style="    border-color: black;\n                    border-style: solid;">\n\n                    <ion-item>\n                        <ion-label>Time:</ion-label>\n                        <ion-datetime  displayFormat="hh:mm A" pickerFormat="hh:mm A" [(ngModel)]="startHour" ></ion-datetime>\n                    </ion-item>\n\n                </div>\n\n\n                <ion-row style="margin-top: 14px;    display: flex;\n                justify-content: center">\n                   \n                    <ion-col col-8>\n                        <button class="btn bg-theme-driver text-white rounded" style="width: 100%;font-size: 1.2rem;" (click)="setCrew()">Create Crew</button>\n                    </ion-col>\n                </ion-row>\n                \n            </ion-card-content>\n        </ion-card>\n    </ion-content>\n    '/*ion-inline-end:"/Users/juandavidjaramillo/Documents/waypool_costumer/src/pages/p-createcrew/createcrew.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__services_sendUsers_service__["a" /* sendUsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_sendUsers_service__["a" /* sendUsersService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__services_signup_services__["a" /* SignUpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_signup_services__["a" /* SignUpService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__services_sendCoords_service__["a" /* sendCoordsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_sendCoords_service__["a" /* sendCoordsService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["AngularFireAuth"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["AngularFireAuth"]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_7__services_geoFire_service__["a" /* geofireService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_geoFire_service__["a" /* geofireService */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_8__services_instances_service__["a" /* instancesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__services_instances_service__["a" /* instancesService */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_9__services_d_geofire_services__["a" /* DriverGeofireService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__services_d_geofire_services__["a" /* DriverGeofireService */]) === "function" && _o || Object])
    ], CreateCrewPage);
    return CreateCrewPage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
}());

//# sourceMappingURL=createcrew.js.map

/***/ })

});
//# sourceMappingURL=41.js.map