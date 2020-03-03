webpackJsonp([51],{

/***/ 649:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverDetailsReservePagePageModule", function() { return DriverDetailsReservePagePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__driverDetailsreserve__ = __webpack_require__(839);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DriverDetailsReservePagePageModule = /** @class */ (function () {
    function DriverDetailsReservePagePageModule() {
    }
    DriverDetailsReservePagePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__driverDetailsreserve__["a" /* DriverDetailsReservePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__driverDetailsreserve__["a" /* DriverDetailsReservePage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__driverDetailsreserve__["a" /* DriverDetailsReservePage */]
            ]
        })
    ], DriverDetailsReservePagePageModule);
    return DriverDetailsReservePagePageModule;
}());

//# sourceMappingURL=driverDetailsreserve.module.js.map

/***/ }),

/***/ 839:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverDetailsReservePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_d_signup_service__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_d_sendCoords_service__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_d_geofire_services__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_d_instances_services__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_d_trips_service__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_angularfire2_database__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { AngularFireDatabase } from 'angularfire2/database';







var DriverDetailsReservePage = /** @class */ (function () {
    function DriverDetailsReservePage(navCtrl, actionSheetCtrl, TripsService, SignUpService, sendCoordsService, modalCtrl, AngularFireAuth, viewCtrl, navParams, geoFireService, instances, toastCtrl, alertCtrl, app, afDB) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.TripsService = TripsService;
        this.SignUpService = SignUpService;
        this.sendCoordsService = sendCoordsService;
        this.modalCtrl = modalCtrl;
        this.AngularFireAuth = AngularFireAuth;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.geoFireService = geoFireService;
        this.instances = instances;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.app = app;
        this.afDB = afDB;
        this.userUid = this.AngularFireAuth.auth.currentUser.uid;
        this.infoUser = {};
        this.unsubscribe = new __WEBPACK_IMPORTED_MODULE_7_rxjs__["Subject"];
        this.reserves = [];
        this.passengers = [];
        this.reserveKey = this.navParams.get('reserveKey');
        console.log(this.reserveKey);
        this.sendCoordsService.getPendingUsers(this.SignUpService.userPlace, this.userUid, this.reserveKey).takeUntil(this.unsubscribe)
            .subscribe(function (users) {
            _this.passengers = users;
            console.log(_this.passengers);
        });
    }
    DriverDetailsReservePage.prototype.ionViewDidLeave = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    DriverDetailsReservePage.prototype.showProfilePassegner = function (passenger) {
        this.app.getRootNav().push('DriverPublicProfilePage', { passenger: passenger });
        this.accepted = true;
        this.dismiss();
    };
    DriverDetailsReservePage.prototype.cancelReserve = function () {
        var _this = this;
        this.geoFireService.deleteUserGeofireDest(this.reserveKey);
        this.geoFireService.deleteUserGeofireOr(this.reserveKey);
        this.passengers.forEach(function (user) {
            _this.afDB.database.ref(_this.SignUpService.userPlace + '/users/' + user.userId + '/myReserves/' + _this.reserveKey).update({
                cancelReserve: true
            });
        });
        this.TripsService.cancelReserve(this.SignUpService.userPlace, this.userUid, this.reserveKey);
        this.dismiss();
    };
    DriverDetailsReservePage.prototype.presentActionSheet = function (userId, nameUser) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Opciones',
            buttons: [
                {
                    text: 'Cancelar Usuario',
                    role: 'destructive',
                    handler: function () {
                        _this.deleteUser(userId, nameUser);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    DriverDetailsReservePage.prototype.deleteUser = function (userId, nameUser) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Eliminar Usuario',
            message: "\u00BFEstas que deseas eliminar a este a " + nameUser + " de tu viaje?,borrar muchos usuarios por d\u00EDa/semana esta en contra de nuestras pol\u00EDticas",
            buttons: [{
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                    }
                },
                {
                    text: 'Eliminar',
                    handler: function () {
                        _this.afDB.database.ref(_this.SignUpService.userPlace + '/users/' + userId + '/myReserves/' + _this.reserveKey).update({
                            cancelReserve: true
                        });
                        _this.sendCoordsService.eraseUser(_this.SignUpService.userPlace, userId, _this.userUid, _this.reserveKey);
                        _this.dismiss();
                        _this.presentToast("Haz eliminado a " + nameUser + " de tu viaje", 3000, 'bottom');
                    }
                }
            ]
        });
        alert.present();
    };
    DriverDetailsReservePage.prototype.presentToast = function (message, duration, position) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: duration,
            position: position
        });
        toast.present();
    };
    DriverDetailsReservePage.prototype.dismiss = function () {
        console.log('deleted on click');
        this.viewCtrl.dismiss(this.accepted);
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    DriverDetailsReservePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'driver-page-detailsreserve',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/waypool_costumer/src/pages/detailsreserve/driverDetailsreserve.html"*/'<ion-header class="bg-theme-driver title">\n    <ion-navbar >\n        <ion-title >Tus compañeros\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n<div #map id="map"></div>  \n\n<ion-content  style="background-color: rgba(255, 255, 255, 0.959);">\n         <ion-card *ngFor = "let passenger of passengers">\n               <ion-item>\n                   <ion-avatar item-start style="border-radius: 0%;">\n                    <img  style="height:70px; width: 70px;" src="assets/imgs/userPicture.png">\n                </ion-avatar>\n                   <div class="name">\n                       <h2>{{passenger.name |titlecase}} {{passenger.lastname | titlecase}}.\n                         <ion-icon *ngIf=\'passenger.verifiedPerson\' name="ios-checkmark-circle" class="text-darkblue"></ion-icon>\n                       </h2>\n\n                         <ion-badge class="bg-yellow" style="margin:0px 3px 13px;"> {{passenger.company}}</ion-badge>\n                    </div>\n                   <div class="more" item-end>\n                           <ion-icon name="md-more"  (click)="presentActionSheet(passenger.userId,passenger.name)"></ion-icon>\n                   </div>\n               </ion-item>\n               <ion-card-content>\n                   <div class="ride-detail">\n                       <p><small></small>\n                           <span class="icon-location bg-theme-driver"></span>{{passenger.origin}}</p>\n                       <p><small></small>\n                           <span class="icon-location bg-yellow"></span>{{passenger.destination}}</p>\n                   </div>\n                   \n               </ion-card-content>         \n         \n\n           </ion-card>\n           <div style=" display: flex; justify-content: center;">\n            <button (click)="cancelReserve()" class="btn bg-theme-driver text-white rounded" > Cancelar Reserva </button>\n\n           </div>\n\n </ion-content>\n\n '/*ion-inline-end:"/Users/juandavidjaramillo/Documents/waypool_costumer/src/pages/detailsreserve/driverDetailsreserve.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_8__services_d_trips_service__["a" /* DriverTripsService */], __WEBPACK_IMPORTED_MODULE_3__services_d_signup_service__["a" /* DriverSignUpService */], __WEBPACK_IMPORTED_MODULE_4__services_d_sendCoords_service__["a" /* DriverSendCoordsService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__services_d_geofire_services__["a" /* DriverGeofireService */], __WEBPACK_IMPORTED_MODULE_6__services_d_instances_services__["a" /* DriverInstancesService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__["AngularFireDatabase"]])
    ], DriverDetailsReservePage);
    return DriverDetailsReservePage;
}());

//# sourceMappingURL=driverDetailsreserve.js.map

/***/ })

});
//# sourceMappingURL=51.js.map