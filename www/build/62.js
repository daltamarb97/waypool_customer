webpackJsonp([62],{

/***/ 645:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverAddSchedulePageModule", function() { return DriverAddSchedulePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_schedule__ = __webpack_require__(838);
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

/***/ 838:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_d_instances_services__ = __webpack_require__(351);
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
        console.log('ADDSCHEDULE');
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
                                _this.afDB.database.ref('/driversTest/' + _this.userId + '/schedule/').push({
                                    hour: _this.startHour,
                                    type: _this.geofireType,
                                    description: _this.textMessage,
                                    image: _this.imageURL,
                                }).then(function (key) {
                                    var pushKey = key.key;
                                    _this.afDB.database.ref('/driversTest/' + _this.userId + '/schedule/' + pushKey).update({
                                        key: pushKey
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
            selector: 'driver-page-add-schedule',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/waypool_costumer/src/pages/add-schedule/driver-add-schedule.html"*/'<ion-content>\n\n\n    <ion-card>\n\n        <ion-card-content>\n                <ion-icon name="close-circle" class="close-icon text-theme-driver"  (click)="dismiss()"></ion-icon>\n                <h2 text-center class="text-theme-driver">AÑADE UN HORARIO</h2>\n\n            <ion-row style="margin-top: 14px;    display: flex;\n            justify-content: center">\n                <ion-list>\n             <h2 text-center>Coloca la hora a la que te vas:</h2>\n                    <div style="    border-color: black;\n                    border-style: solid;">\n\n                    <ion-item>\n                        <ion-label>Hora:</ion-label>\n                <ion-datetime  displayFormat="hh:mm A" pickerFormat="hh:mm A" [(ngModel)]="startHour" ></ion-datetime>\n                </ion-item>\n\n                </div>\n                    \n                </ion-list>                    \n            </ion-row>\n    </ion-card-content>\n\n    <br>\n    <h2 style="margin-bottom: 20px;" text-center>¿Vas al trabajo o la casa?</h2>\n      <ion-row  style="display: flex; flex-direction: row;">\n            <ion-avatar style="border-radius: 15%;" #house>\n                <p text-center class="texto1">A la casa</p>\n\n                    <img class="house" style="width: 138px;" src="assets/imgs/workToHouse.png" (click)="selectImageHouse()"/>\n\n                </ion-avatar>\n\n                <ion-avatar  style="border-radius: 15%;" #work>\n                    <p text-center class="texto1">Al Trabajo</p>\n\n                        <img src="assets/imgs/houseToWork.png" style="width: 138px;" (click)="selectImageWork()"/>\n                 </ion-avatar>\n     \n      </ion-row>\n  \n        <ion-card-content>\n            <div class="seats">           \n                <ion-row style="margin-top: 14px;    display: flex;\n                justify-content: center">\n                   \n                    <ion-col col-8>\n                        <button class="btn bg-theme-driver text-white rounded" style="width: 100%;font-size: 1.25rem;" (click)="confirm()">Confirmar</button>\n                    </ion-col>\n                </ion-row>\n            </div>\n        </ion-card-content>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/waypool_costumer/src/pages/add-schedule/driver-add-schedule.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__services_d_signup_service__["a" /* DriverSignUpService */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_5__services_d_instances_services__["a" /* DriverInstancesService */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["AngularFireDatabase"]])
    ], DriverAddSchedulePage);
    return DriverAddSchedulePage;
}());

//# sourceMappingURL=add-schedule.js.map

/***/ })

});
//# sourceMappingURL=62.js.map