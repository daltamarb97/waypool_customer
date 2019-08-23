webpackJsonp([1],{

/***/ 637:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmreservationPageModule", function() { return ConfirmreservationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__confirmreserve__ = __webpack_require__(663);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ConfirmreservationPageModule = /** @class */ (function () {
    function ConfirmreservationPageModule() {
    }
    ConfirmreservationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__confirmreserve__["a" /* ConfirmreservationPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__confirmreserve__["a" /* ConfirmreservationPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__confirmreserve__["a" /* ConfirmreservationPage */]
            ]
        })
    ], ConfirmreservationPageModule);
    return ConfirmreservationPageModule;
}());

//# sourceMappingURL=confirmreserve.module.js.map

/***/ }),

/***/ 663:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmreservationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_signup_services__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_sendCoords_service__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_sendUsers_service__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_geofire_service__ = __webpack_require__(664);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_geofire_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__services_geofire_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_instances_service__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs__ = __webpack_require__(15);
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


// import { RidetodayPage } from '../ridetoday/ridetoday';
// import { MyridePage } from '../myride/myride';
// import { TabsPage } from '../tabs/tabs';




var ConfirmreservationPage = /** @class */ (function () {
    function ConfirmreservationPage(navCtrl, sendUsersService, SignUpService, sendCoordsService, modalCtrl, AngularFireAuth, viewCtrl, navParams, geoFireService, instances, toastCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.sendUsersService = sendUsersService;
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
        this.userDriverUid = this.AngularFireAuth.auth.currentUser.uid;
        this.infoUser = {};
        this.unsubscribe = new __WEBPACK_IMPORTED_MODULE_8_rxjs__["Subject"];
        this.reserves = [];
        this.passengers = [];
        this.reserveKey = this.navParams.get('reserveKey');
        //   this.sendCoordsService.getPendingUsers(this.userDriverUid,this.reserveKey).takeUntil(this.unsubscribe)
        //     .subscribe( users => {
        // 	this.passengers = users;			
        // 	console.log(this.passengers);
        // })	
    }
    ConfirmreservationPage.prototype.acceptUser = function () {
    };
    ConfirmreservationPage.prototype.dismiss = function () {
        console.log('deleted on click');
        this.viewCtrl.dismiss(this.accepted);
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    ConfirmreservationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-confirmreserve',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/waypoolapp_UNOFICIAL/waypool_costumer/src/pages/confirmreserve/confirmreserve.html"*/'<ion-content>\n  <ion-icon name="md-close" class="close-icon text-white" (click)="dismiss()"></ion-icon>\n  <ion-card>\n       <img src="assets/imgs/compaes.png" width="100px" style="display:inline-block" height="150px"/>\n\n     <h6 class="text-theme">Tus pasajeros</h6>\n     <ion-item  *ngFor="let passenger of passengers" >\n        <ion-avatar item-start>\n           <img src="assets/imgs/userPicture.png">\n        </ion-avatar>\n        <div class="passenger">\n          <div  class="name">\n                <h2 >{{passenger.name |titlecase}} {{passenger.lastname  |titlecase | slice:0:1}}.</h2>\n          </div>\n          <div class="more">\n             <ion-icon name="close-circle"  (click)="deleteUser(user.userId, user.name)"></ion-icon>\n          </div>\n        </div>\n        \n      \n     </ion-item>\n \n     <ion-card-content>\n        <div class="ride-detail no-before">\n           <p>\n              Estos son tus compañeros que se han unido a tu viaje, puedes iniciar viaje \n             \n            \n           </p>\n           \n        </div>\n     </ion-card-content>\n     <ion-card-content>\n        <div class="seats">\n           \n           <ion-row style="margin-top: 14px;   display: flex;\n           justify-content: center">\n              \n              <ion-col col-8>\n                 <button class="btn bg-theme text-white rounded" style="width: 100%;font-size: .95rem;"(click)="acceptUser()">Aceptar Viaje</button>\n              </ion-col>\n           </ion-row>\n        </div>\n     </ion-card-content>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/waypoolapp_UNOFICIAL/waypool_costumer/src/pages/confirmreserve/confirmreserve.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__services_sendUsers_service__["a" /* sendUsersService */], __WEBPACK_IMPORTED_MODULE_3__services_signup_services__["a" /* SignUpService */], __WEBPACK_IMPORTED_MODULE_4__services_sendCoords_service__["a" /* sendCoordsService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6__services_geofire_service__["geofireService"], __WEBPACK_IMPORTED_MODULE_7__services_instances_service__["a" /* instancesService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ConfirmreservationPage);
    return ConfirmreservationPage;
}());

//# sourceMappingURL=confirmreserve.js.map

/***/ }),

/***/ 664:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/juandavidjaramillo/Documents/waypoolapp_UNOFICIAL/waypool_costumer/src/services/geofire.service.js'");

/***/ })

});
//# sourceMappingURL=1.js.map