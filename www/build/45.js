webpackJsonp([45],{

/***/ 662:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmpopupPageModule", function() { return ConfirmpopupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__confirmpopup__ = __webpack_require__(855);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__confirmpopup__["a" /* ConfirmpopupPage */]),
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

/***/ 855:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmpopupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_signup_services__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_sendcoords_service__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_sendUsers_service__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_geoFire_service__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_instances_service__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs__ = __webpack_require__(19);
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
    function ConfirmpopupPage(navCtrl, sendUsersService, toastCtrl, viewCtrl, afDB, SignUpService, sendCoordsService, navParams, AngularFireAuth, geoFireService, instances, alertCtrl) {
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
        this.user = {};
        this.hideButton = true;
        this.hideText = false;
        this.userUid = this.AngularFireAuth.auth.currentUser.uid;
        this.unsubscribe = new __WEBPACK_IMPORTED_MODULE_9_rxjs__["Subject"];
        this.freeRidesCompany = false;
        this.reserve = this.navParams.get('reserve');
        console.log(this.reserve);
        this.orCoords = this.navParams.get('orCoords');
        this.destCoords = this.navParams.get('destCoords');
        //get the info of the driver 
        this.SignUpService.getMyInfo(this.userUid).takeUntil(this.unsubscribe)
            .subscribe(function (myUserInfo) {
            _this.user = myUserInfo;
            console.log(_this.user);
            //  this.afDB.database.ref('allCities/' + this.user.city + '/allPlaces/' + this.user.company).once('value').then((snapUser)=>{
            //    if(snapUser.val().freeRidesNumber > 0){
            //     this.freeRidesCompany = true;
            //    }
            //  })
        });
        // function to get in how many reserves I am
        this.SignUpService.checkMyReserves(this.userUid).takeUntil(this.unsubscribe)
            .subscribe(function (reserves) {
            _this.reservesWhereIam = reserves;
            console.log(_this.reservesWhereIam);
        });
    }
    ConfirmpopupPage.prototype.goToRide = function () {
        var _this = this;
        if (this.reservesWhereIam.length >= 5) {
            var alert_1 = this.alertCtrl.create({
                title: 'limite de reservas por un dia',
                subTitle: 'Ya excediste el limite de reservas por un dia ',
                buttons: ['OK']
            });
            alert_1.present();
        }
        else {
            if (this.user.personalFreeRides) {
                var alert_2 = this.alertCtrl.create({
                    title: 'ESTE SERÁ UN VIAJE GRATIS',
                    subTitle: 'Siempre que veas este mensaje significa que no pagarás nada por el viaje al que te uniste',
                    buttons: [{
                            text: 'OK',
                            handler: function () {
                                console.log(_this.reserve.keyTrip);
                                _this.geoFireService.joinReserve(_this.user.company, _this.reserve.keyTrip, _this.reserve.driver.userId, _this.userUid, _this.user.trips.origin, _this.user.trips.destination, _this.user.name, _this.user.lastname, _this.user.phone, _this.user.trips.distanceToGoInKM, _this.user.verifiedPerson, _this.orCoords, _this.destCoords);
                                _this.geoFireService.pushToMyReserve(_this.reserve.keyTrip, _this.reserve.driver.userId, _this.userUid);
                                _this.hideButton = !_this.hideButton;
                                _this.hideText = !_this.hideText;
                                _this.accepted = true;
                                var toast = _this.toastCtrl.create({
                                    message: "Haz reservado con " + _this.reserve.driver.name + " para compartir tu viaje a las " + _this.reserve.startHour + ", entra en Mis reservas para ver m\u00E1s.",
                                    showCloseButton: true,
                                    closeButtonText: 'Ok'
                                });
                                toast.present();
                                _this.dismiss();
                            }
                        }]
                });
                alert_2.present();
            }
            else {
                console.log(this.reserve.keyTrip);
                this.geoFireService.joinReserve(this.user.company, this.reserve.keyTrip, this.reserve.driver.userId, this.userUid, this.user.trips.origin, this.user.trips.destination, this.user.name, this.user.lastname, this.user.phone, this.user.trips.distanceToGoInKM, this.user.verifiedPerson, this.orCoords, this.destCoords);
                this.geoFireService.pushToMyReserve(this.reserve.keyTrip, this.reserve.driver.userId, this.userUid);
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
            }
        }
    };
    ConfirmpopupPage.prototype.dismissX = function () {
        this.viewCtrl.dismiss();
    };
    ConfirmpopupPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss(this.accepted);
        this.unsubscribe.next();
        this.unsubscribe.complete();
        // this.navCtrl.pop();
    };
    ConfirmpopupPage.prototype.ionViewDidLeave = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    ConfirmpopupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-confirmpopup',template:/*ion-inline-start:"C:\Users\danie\Documents\waypool\prod\latest\waypool_costumer\src\pages\p-confirmpopup\confirmpopup.html"*/'<ion-content>\n\n    <ion-icon name="md-close" class="close-icon text-white" (click)="dismissX()"></ion-icon>\n\n    <ion-card>\n\n        <h6 class="text-theme">Trip Details</h6>\n\n        <ion-item>\n\n            <ion-avatar item-start>\n\n                <img src="assets/imgs/userPicture.png">\n\n            </ion-avatar>\n\n            <div class="name">\n\n                <h2>{{reserve.driver.name|titlecase }} {{reserve.driver.lastname|titlecase }}\n\n                <ion-icon  *ngIf=\'reserve.driver.verifiedPerson\' name="ios-checkmark-circle" class="text-theme"></ion-icon>\n\n                </h2>\n\n                <p>{{reserve.car}}</p>\n\n            </div>\n\n        </ion-item>\n\n        <ion-card-content>\n\n            <div class="ride-detail">\n\n                <p><small>Pick up</small>\n\n                    <span class="icon-location bg-theme"></span>{{reserve.origin.name}}\n\n                    <small>Drop off</small>\n\n                    <span class="icon-location bg-yellow"></span>{{reserve.destination.name}}</p>\n\n            </div>\n\n        </ion-card-content>\n\n\n\n        \n\n\n\n        <ion-card-content>\n\n            <div class="seats">\n\n                <ion-row class="center">\n\n                    <div class="rate"> $ {{reserve.price}}</div>\n\n                        \n\n                   \n\n                    \n\n                </ion-row>\n\n            </div>\n\n                <button class="btn bg-theme text-white rounded" (click)="goToRide()" *ngIf="hideButton" style="width: 100%;margin-top: 14px;">CONFIRM DRIVER</button>\n\n                <p  text-center *ngIf="hideText">espera que tu compañero te acepte, si demora mucho presiona la X y escoje otro driver...</p> \n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\danie\Documents\waypool\prod\latest\waypool_costumer\src\pages\p-confirmpopup\confirmpopup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_6__services_sendUsers_service__["a" /* sendUsersService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_3__services_signup_services__["a" /* SignUpService */], __WEBPACK_IMPORTED_MODULE_4__services_sendcoords_service__["a" /* sendCoordsService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_7__services_geoFire_service__["a" /* geofireService */], __WEBPACK_IMPORTED_MODULE_8__services_instances_service__["a" /* instancesService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], ConfirmpopupPage);
    return ConfirmpopupPage;
}());

//# sourceMappingURL=confirmpopup.js.map

/***/ })

});
//# sourceMappingURL=45.js.map