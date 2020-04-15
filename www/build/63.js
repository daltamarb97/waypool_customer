webpackJsonp([63],{

/***/ 646:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverAddSchedulePageModule", function() { return DriverAddSchedulePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_schedule__ = __webpack_require__(840);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DriverAddSchedulePageModule = /** @class */ (function () {
    function DriverAddSchedulePageModule() {
    }
    DriverAddSchedulePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_schedule__["a" /* DriverAddSchedulePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_schedule__["a" /* DriverAddSchedulePage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__add_schedule__["a" /* DriverAddSchedulePage */]
            ]
        })
    ], DriverAddSchedulePageModule);
    return DriverAddSchedulePageModule;
}());

//# sourceMappingURL=add-schedule.module.js.map

/***/ }),

/***/ 840:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverAddSchedulePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_d_signup_service__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_d_instances_services__ = __webpack_require__(350);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DriverAddSchedulePage = /** @class */ (function () {
    function DriverAddSchedulePage(navCtrl, navParams, viewCtrl, renderer, alertCtrl, signUpService, angularFireAuth, instances, afDB) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.renderer = renderer;
        this.alertCtrl = alertCtrl;
        this.signUpService = signUpService;
        this.angularFireAuth = angularFireAuth;
        this.instances = instances;
        this.afDB = afDB;
        this.imageHouseToWork = false;
        this.imageWorkToHouse = false;
        this.button1WasntTapped = true;
        this.button2WasntTapped = true;
        this.userId = this.angularFireAuth.auth.currentUser.uid;
        this.afDB.database.ref('/driversTest/' + this.userId).once('value').then(function (snap) {
            _this.userInfo = snap.val();
        });
    }
    DriverAddSchedulePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss(this.accepted);
    };
    DriverAddSchedulePage.prototype.selectImageHouse = function () {
        // this is just to change the css
        this.renderer.setElementStyle(this.house.nativeElement, 'border-width', '3px');
        this.renderer.setElementStyle(this.house.nativeElement, 'border-style', 'solid');
        this.renderer.setElementStyle(this.house.nativeElement, 'border-color', 'green');
        this.renderer.setElementStyle(this.work.nativeElement, 'border-width', '0px');
        this.imageURL = 'assets/imgs/workToHouse.png';
        this.textMessage = 'Casa';
        this.geofireType = 'destination';
        this.imageHouseToWork = true;
        this.imageWorkToHouse = false;
    };
    DriverAddSchedulePage.prototype.selectImageWork = function () {
        // this is just to change the css
        this.renderer.setElementStyle(this.work.nativeElement, 'border-width', '3px');
        this.renderer.setElementStyle(this.work.nativeElement, 'border-style', 'solid');
        this.renderer.setElementStyle(this.work.nativeElement, 'border-color', 'green');
        this.renderer.setElementStyle(this.house.nativeElement, 'border-width', '0px');
        this.textMessage = 'Trabajo';
        this.geofireType = 'origin';
        this.imageURL = 'assets/imgs/houseToWork.png';
        this.imageHouseToWork = false;
        this.imageWorkToHouse = true;
    };
    DriverAddSchedulePage.prototype.confirm = function () {
        var _this = this;
        console.log(this.imageHouseToWork);
        console.log(this.imageWorkToHouse);
        if (this.imageHouseToWork === true || this.imageWorkToHouse === true) {
            if (this.startHour === undefined || this.startHour === null) {
                var alert_1 = this.alertCtrl.create({
                    title: 'Debes seleccionar una hora de partida',
                    subTitle: '¿A qué hora sales del trabajo o de tu casa?',
                    buttons: ['OK']
                });
                alert_1.present();
            }
            else {
                var alert_2 = this.alertCtrl.create({
                    title: '¿vas a tu ' + this.textMessage + ' a las ' + this.startHour + '?',
                    buttons: [
                        {
                            text: 'Confirmo este horario',
                            handler: function () {
                                _this.afDB.database.ref('allCities/' + _this.userInfo.city + '/allPlaces/' + _this.userInfo.company + '/zones').once('value').then(function (snap) {
                                    var obj = snap.val();
                                    _this.afDB.database.ref('allSchedules/' + _this.userId).push({
                                        hour: _this.startHour,
                                        type: _this.geofireType,
                                        description: _this.textMessage,
                                        image: _this.imageURL
                                    }).then(function (snap1) {
                                        _this.afDB.database.ref('allSchedules/' + _this.userId + '/' + snap1.key).update({
                                            key: snap1.key
                                        });
                                        Object.getOwnPropertyNames(obj).forEach(function (keyZ) {
                                            if (obj[keyZ] === 2 || obj[keyZ] === 3 || obj[keyZ] === 4 || obj[keyZ] === 5 || obj[keyZ] === 6 || obj[keyZ] === 1 || obj[keyZ] === 7 || obj[keyZ] === 8 || obj[keyZ] === 9 || obj[keyZ] === 10) {
                                            }
                                            else {
                                                _this.afDB.database.ref(obj[keyZ] + '/drivers/' + _this.userId + '/schedule/' + snap1.key).update({
                                                    hour: _this.startHour,
                                                    type: _this.geofireType,
                                                    description: _this.textMessage,
                                                    image: _this.imageURL,
                                                    key: snap1.key
                                                });
                                            }
                                        });
                                    });
                                }).then(function () {
                                    _this.viewCtrl.dismiss();
                                });
                            }
                        }
                    ]
                });
                alert_2.present();
            }
        }
        else {
            var alert_3 = this.alertCtrl.create({
                title: 'Debes seleccionar una opción',
                subTitle: '¿a esta hora vas a tu casa o a tu trabajo?',
                buttons: ['OK']
            });
            alert_3.present();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('house', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] }),
        __metadata("design:type", Object)
    ], DriverAddSchedulePage.prototype, "house", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('work', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] }),
        __metadata("design:type", Object)
    ], DriverAddSchedulePage.prototype, "work", void 0);
    DriverAddSchedulePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'driver-page-add-schedule',template:/*ion-inline-start:"C:\Users\danie\Documents\waypool\prod\latest\waypool_costumer\src\pages\add-schedule\driver-add-schedule.html"*/'<ion-content>\n\n\n\n\n\n    <ion-card>\n\n\n\n        <ion-card-content>\n\n                <ion-icon name="close-circle" class="close-icon text-theme-driver"  (click)="dismiss()"></ion-icon>\n\n                <h2 text-center class="text-theme-driver">AÑADE UN HORARIO</h2>\n\n\n\n            <ion-row style="margin-top: 14px;    display: flex;\n\n            justify-content: center">\n\n                <ion-list>\n\n             <h2 text-center>Coloca la hora a la que te vas:</h2>\n\n                    <div style="    border-color: black;\n\n                    border-style: solid;">\n\n\n\n                    <ion-item>\n\n                        <ion-label>Hora:</ion-label>\n\n                <ion-datetime  displayFormat="hh:mm A" pickerFormat="hh:mm A" [(ngModel)]="startHour" ></ion-datetime>\n\n                </ion-item>\n\n\n\n                </div>\n\n                    \n\n                </ion-list>                    \n\n            </ion-row>\n\n    </ion-card-content>\n\n\n\n    <br>\n\n    <h2 style="margin-bottom: 20px;" text-center>¿Vas al trabajo o la casa?</h2>\n\n      <ion-row  style="display: flex; flex-direction: row;">\n\n            <ion-avatar style="border-radius: 15%;" #house>\n\n                <p text-center class="texto1">A la casa</p>\n\n\n\n                    <img class="house" style="width: 138px;" src="assets/imgs/workToHouse.png" (click)="selectImageHouse()"/>\n\n\n\n                </ion-avatar>\n\n\n\n                <ion-avatar  style="border-radius: 15%;" #work>\n\n                    <p text-center class="texto1">Al Trabajo</p>\n\n\n\n                        <img src="assets/imgs/houseToWork.png" style="width: 138px;" (click)="selectImageWork()"/>\n\n                 </ion-avatar>\n\n     \n\n      </ion-row>\n\n  \n\n        <ion-card-content>\n\n            <div class="seats">           \n\n                <ion-row style="margin-top: 14px;    display: flex;\n\n                justify-content: center">\n\n                   \n\n                    <ion-col col-8>\n\n                        <button class="btn bg-theme-driver text-white rounded" style="width: 100%;font-size: 1.25rem;" (click)="confirm()">Confirmar</button>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </div>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\danie\Documents\waypool\prod\latest\waypool_costumer\src\pages\add-schedule\driver-add-schedule.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__services_d_signup_service__["a" /* DriverSignUpService */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_5__services_d_instances_services__["a" /* DriverInstancesService */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["AngularFireDatabase"]])
    ], DriverAddSchedulePage);
    return DriverAddSchedulePage;
}());

//# sourceMappingURL=add-schedule.js.map

/***/ })

});
//# sourceMappingURL=63.js.map