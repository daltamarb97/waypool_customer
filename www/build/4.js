webpackJsonp([4],{

/***/ 591:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmpopupPageModule", function() { return ConfirmpopupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__confirmpopup__ = __webpack_require__(613);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ConfirmpopupPageModule = /** @class */ (function () {
    function ConfirmpopupPageModule() {
    }
    ConfirmpopupPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__confirmpopup__["a" /* ConfirmpopupPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__confirmpopup__["a" /* ConfirmpopupPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__confirmpopup__["a" /* ConfirmpopupPage */]
            ]
        })
    ], ConfirmpopupPageModule);
    return ConfirmpopupPageModule;
}());

//# sourceMappingURL=confirmpopup.module.js.map

/***/ }),

/***/ 608:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(26));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi93cmFwcGVyL3NyYy9kYXRhYmFzZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDRDQUF1QyJ9

/***/ }),

/***/ 613:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmpopupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(608);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_signup_services__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_sendCoords_service__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_sendUsers_service__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_geoFire_service__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_instances_service__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs__ = __webpack_require__(16);
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
        this.user = {};
        this.hideButton = true;
        this.hideText = false;
        this.userUid = this.AngularFireAuth.auth.currentUser.uid;
        this.unsubscribe = new __WEBPACK_IMPORTED_MODULE_9_rxjs__["Subject"];
        this.reserve = this.navParams.get('reserve');
        console.log(this.reserve);
        //get the info of the driver 
        this.SignUpService.getMyInfo(this.userUid)
            .subscribe(function (myUserInfo) {
            _this.user = myUserInfo;
            console.log(_this.user);
        });
    }
    ConfirmpopupPage.prototype.goToRide = function () {
        var _this = this;
        this.SignUpService.getMyInfo(this.userUid).takeUntil(this.unsubscribe)
            .subscribe(function (user) {
            _this.user = user;
            // OLD
            // if(this.user.trips.onTrip == true){
            //   this.dismiss();
            // } 
            // if(this.user.trips.onTrip == false){
            //   this.dismiss();
            // } 
        });
        console.log(this.user.about);
        this.geoFireService.joinReserve(this.reserve.keyTrip, this.reserve.driver.userId, this.userUid, this.user.trips.origin, this.user.trips.destination, this.user.name, this.user.lastname, this.user.phone, this.user.trips.note, this.user.about, this.user.email, this.user.fixedemail);
        this.geoFireService.pushToMyReserve(this.reserve.keyTrip, this.reserve.driver.userId, this.userUid);
        this.geoFireService.deleteReserveFromAvailableReserves(this.userUid, this.reserve.keyTrip);
        //deprecated
        // this.geoFireService.removeKeyGeofire(this.userUid);
        //OLD
        // NEXT: PASAR LOS KEYTRIP DE LAS RESERVAS PARA ACCEDER A ELLOS EN MIS RESERVAS, Y CAMBIARLE EL NOMBRE  A KEYRESERVES
        // this.geoFireService.deleteDriverListRide(this.userUid, this.driver.userId); 
        this.hideButton = !this.hideButton;
        this.hideText = !this.hideText;
        this.accepted = true;
        var toast = this.toastCtrl.create({
            message: "Haz reservado con " + this.reserve.driver.name + " para compartir tu viaje a las " + this.reserve.startHour + ", entra en Mis reservas para ver m\u00E1s.",
            showCloseButton: true,
            closeButtonText: 'Ok'
        });
        toast.present();
        this.dismiss();
    };
    ConfirmpopupPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss(this.accepted);
        this.unsubscribe.next();
        this.unsubscribe.complete();
        // this.navCtrl.pop();
    };
    ConfirmpopupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-confirmpopup',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/waypoolapp_UNOFICIAL/waypool_costumer/src/pages/confirmpopup/confirmpopup.html"*/'<ion-content>\n    <ion-icon name="md-close" class="close-icon text-white" (click)="dismiss()"></ion-icon>\n    <ion-card>\n        <h6 class="text-theme">Detalles del Viaje</h6>\n        <ion-item>\n            <ion-avatar item-start>\n                <img src="assets/imgs/userPicture.png">\n            </ion-avatar>\n            <div class="name">\n                <h2>{{reserve.driver.name|titlecase }} {{reserve.driver.lastname|titlecase | slice:0:1}}</h2>\n                <p>{{reserve.car}}</p>\n            </div>\n        </ion-item>\n        <ion-card-content>\n            <div class="ride-detail">\n                <p><small>Origen</small>\n                    <span class="icon-location bg-theme"></span>{{reserve.origin}}</p>\n                <p>\n                    <small>Destino</small>\n                    <span class="icon-location bg-yellow"></span>{{reserve.destination}}</p>\n            </div>\n        </ion-card-content>\n\n        <ion-card-content>\n            <div class="ride-detail no-before" >\n                <p><small>Nota:<span class="text-theme" float-right></span></small>\n                    <ion-icon name="md-calendar" class="icon-location"></ion-icon>\n                   {{reserve.note}}</p>\n               \n            </div>\n        </ion-card-content>\n\n        <ion-card-content>\n            <div class="seats">\n                <ion-row class="center">\n                    <div class="rate"> $ {{reserve.price}}</div>\n                        \n                   \n                    \n                </ion-row>\n            </div>\n                <button class="btn bg-theme text-white rounded" (click)="goToRide()" *ngIf="hideButton" style="width: 100%;margin-top: 14px;">CONFIRMAR CONDUCTOR</button>\n                <p  text-center *ngIf="hideText">espera que tu compañero te acepte, si demora mucho presiona la X y escoje otro driver...</p> \n        </ion-card-content>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/waypoolapp_UNOFICIAL/waypool_costumer/src/pages/confirmpopup/confirmpopup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_6__services_sendUsers_service__["a" /* sendUsersService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_3__services_signup_services__["a" /* SignUpService */], __WEBPACK_IMPORTED_MODULE_4__services_sendCoords_service__["a" /* sendCoordsService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_7__services_geoFire_service__["a" /* geofireService */], __WEBPACK_IMPORTED_MODULE_8__services_instances_service__["a" /* instancesService */]])
    ], ConfirmpopupPage);
    return ConfirmpopupPage;
}());

//# sourceMappingURL=confirmpopup.js.map

/***/ })

});
//# sourceMappingURL=4.js.map