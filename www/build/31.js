webpackJsonp([31],{

/***/ 670:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmreservationPageModule", function() { return ConfirmreservationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reserveinfo__ = __webpack_require__(864);
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
                __WEBPACK_IMPORTED_MODULE_2__reserveinfo__["a" /* ReserveinfoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__reserveinfo__["a" /* ReserveinfoPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__reserveinfo__["a" /* ReserveinfoPage */]
            ]
        })
    ], ConfirmreservationPageModule);
    return ConfirmreservationPageModule;
}());

//# sourceMappingURL=reserveinfo.module.js.map

/***/ }),

/***/ 864:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReserveinfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_instances_service__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_reserves_service__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_signup_services__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ReserveinfoPage = /** @class */ (function () {
    function ReserveinfoPage(navCtrl, reservesService, modalCtrl, AngularFireAuth, viewCtrl, navParams, instances, toastCtrl, alertCtrl, app, signUpService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.reservesService = reservesService;
        this.modalCtrl = modalCtrl;
        this.AngularFireAuth = AngularFireAuth;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.instances = instances;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.app = app;
        this.signUpService = signUpService;
        this.userUid = this.AngularFireAuth.auth.currentUser.uid;
        this.infoUser = {};
        this.unsubscribe = new __WEBPACK_IMPORTED_MODULE_4_rxjs__["Subject"];
        this.reserves = [];
        this.passengers = [];
        this.reserveKey = this.navParams.get('reserveKey');
        this.driverUid = this.navParams.get('driverUid');
        this.reservesService.getPendingUsers(this.driverUid, this.reserveKey).takeUntil(this.unsubscribe)
            .subscribe(function (users) {
            _this.passengers = users;
            console.log(_this.passengers);
            if (_this.passengers.length === 0) {
                _this.dismiss();
            }
        });
    }
    ReserveinfoPage.prototype.cancelReserve = function () {
        this.reservesService.cancelReserve(this.userUid, this.driverUid, this.reserveKey);
        this.reservesService.eliminateKeyUser(this.userUid, this.reserveKey);
        var modal = this.modalCtrl.create('CanceltripPage');
        modal.present();
    };
    ReserveinfoPage.prototype.showProfilePassegner = function (passenger) {
        this.app.getRootNav().push('PublicProfilePage', { passenger: passenger });
        this.accepted = true;
        this.dismiss();
    };
    ReserveinfoPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss(this.accepted);
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    ReserveinfoPage.prototype.ionViewDidLeave = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    ReserveinfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-reserveinfo',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/waypool_costumer/src/pages/p-reserveinfo/reserveinfo.html"*/'<ion-content>\n\n    <ion-icon name="md-close" class="close-icon text-white" (click)="dismiss()"></ion-icon>\n    <ion-card>\n         <img src="assets/imgs/compaes.png" width="100px" style="display:inline-block" height="150px"/>\n        \n       <ion-item  *ngFor="let passenger of passengers"   >\n          <ion-avatar item-start>\n             <img src="assets/imgs/userPicture.png">\n          </ion-avatar>\n          <div class="passenger">\n                     <div  class="name">\n                           <h2 *ngIf="passenger.userId === userUid; else itsNotMeBlock" (click) = "showProfilePassegner(passenger)" style="font-size:1.5rem;"> Yo\n                                 <ion-icon name="ios-checkmark-circle" class="text-green"></ion-icon>  \n                              </h2>\n                                  <!-- <h5>{{passenger.about | 9 }}...</h5> -->\n                                  <ng-template #itsNotMeBlock >\n                          \n                                       <h2>{{passenger.name |titlecase}} {{passenger.lastname  |titlecase }}. \n                                          <ion-icon  *ngIf=\'passenger.verifiedPerson\' name="ios-checkmark-circle" class="text-theme"></ion-icon>\n                                       </h2>\n      \n                                       <!-- <h5>{{passenger.about | 9}}...</h5> -->\n                               \n                           </ng-template >\n                     </div>  \n                     \n          </div>\n          \n        \n       </ion-item>\n   \n       <ion-card-content>\n         \n          <div class="seats">\n             \n               <ion-row style="margin-top: 14px;   display: flex;\n               justify-content: center">\n                              <button class="btn bg-red rounded full text-white cancelbutton" (click)="cancelReserve()">Cancelar viaje</button>\n  \n                  \n               </ion-row>\n            </div>\n      \n          \n       </ion-card-content>\n      \n    </ion-card>\n\n </ion-content>'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/waypool_costumer/src/pages/p-reserveinfo/reserveinfo.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__services_reserves_service__["a" /* reservesService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__services_instances_service__["a" /* instancesService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_6__services_signup_services__["a" /* SignUpService */]])
    ], ReserveinfoPage);
    return ReserveinfoPage;
}());

//# sourceMappingURL=reserveinfo.js.map

/***/ })

});
//# sourceMappingURL=31.js.map