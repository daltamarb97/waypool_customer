webpackJsonp([14],{

/***/ 608:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyridePageModule", function() { return MyridePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__myride__ = __webpack_require__(631);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MyridePageModule = /** @class */ (function () {
    function MyridePageModule() {
    }
    MyridePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__myride__["a" /* MyridePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__myride__["a" /* MyridePage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__myride__["a" /* MyridePage */]
            ]
        })
    ], MyridePageModule);
    return MyridePageModule;
}());

//# sourceMappingURL=myride.module.js.map

/***/ }),

/***/ 631:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyridePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_sendUsers_service__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_call_number__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_signup_services__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_trips_service__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs__ = __webpack_require__(16);
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
    function MyridePage(navCtrl, modalCtrl, alertCtrl, TripsService, toastCtrl, SignUpService, geolocation, navParams, AngularFireAuth, callNumber, sendUsersService, app) {
        // this.TripsService.getOnTrip(this.userUid).subscribe(onTrip=>{
        //   this.onTripInstance=onTrip;
        //   console.log(onTrip)
        //   console.log(this.onTrip)
        //   // go to trip      
        //   if (this.onTripInstance === true) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.TripsService = TripsService;
        this.toastCtrl = toastCtrl;
        this.SignUpService = SignUpService;
        this.geolocation = geolocation;
        this.navParams = navParams;
        this.AngularFireAuth = AngularFireAuth;
        this.callNumber = callNumber;
        this.sendUsersService = sendUsersService;
        this.app = app;
        this.pendingUsers = [];
        this.pickedUpUsers = [];
        this.driverOnTrip = [];
        this.myReservesId = [];
        this.userUid = this.AngularFireAuth.auth.currentUser.uid;
        this.cancelReserves = [];
        this.cancelUsers = [];
        this.driverExist = false;
        this.onTrip = false;
        this.unsubscribe = new __WEBPACK_IMPORTED_MODULE_8_rxjs__["Subject"];
        //   }else{
        //     this.unSubscribeServices();     
        //     console.log("ME ACTIVEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE")
        //     this.navCtrl.pop();
        //     this.unsubscribe.next();
        //     this.unsubscribe.complete();
        //   } 
        // })
        this.TripsService.getKeyTrip(this.userUid).takeUntil(this.unsubscribe)
            .subscribe(function (keys) {
            _this.keyTrip = keys;
            console.log(_this.keyTrip.keyTrip);
            if (_this.keyTrip === undefined || _this.keyTrip === null) {
                _this.unSubscribeServices();
                console.log("ME ACTIVEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE");
                _this.driverExist = false;
                _this.onTrip = false;
                _this.navCtrl.pop();
                console.log("existo");
            }
            else {
                _this.getTrip(_this.keyTrip.keyTrip, _this.keyTrip.driverId);
                _this.TripsService.eraseReserve(_this.userUid, _this.keyTrip.keyTrip);
            }
            //get trip without searching         
            //check if its lastMinuteUser or not
            // if(){
            // }
        });
    }
    MyridePage.prototype.getTrip = function (keyTrip, driverId) {
        var _this = this;
        console.log(this.trip);
        this.getTripState(keyTrip, driverId);
        console.log(this.keyTrip);
        this.TripsService.getTrip(keyTrip, driverId).takeUntil(this.unsubscribe)
            .subscribe(function (info) {
            //check if the info of the reserve is null  
            if (_this.keyTrip.keyTrip === undefined || _this.keyTrip.keyTrip === null) {
                _this.driverExist = false;
                _this.onTrip = false;
                console.log("ME ACTIVEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE");
                console.log("existo");
            }
            else {
                _this.trip = info;
                console.log(_this.trip);
                _this.getPendingAndPickedUpUsers(keyTrip, driverId);
                _this.driverExist = true;
                _this.onTrip = true;
            }
        });
    };
    MyridePage.prototype.getTripState = function (keyTrip, driverId) {
        var _this = this;
        this.TripsService.getTripState(keyTrip, driverId).takeUntil(this.unsubscribe)
            .subscribe(function (tripState) {
            _this.tripState = tripState;
            console.log(_this.tripState);
            console.log("estoy activado!!!");
            if (_this.tripState === null || _this.tripState === undefined) {
                _this.unSubscribeServices();
                console.log("ME ACTIVEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE");
                console.log("existo");
                _this.navCtrl.pop();
            }
            else {
                //check if trip has to be saved 
                if (_this.tripState.saveTrip === true) {
                    _this.TripsService.saveTripOnRecords(_this.userUid, _this.trip);
                    console.log("me active");
                    _this.unSubscribeServices();
                    _this.TripsService.eliminatingOnTrip(_this.userUid);
                    _this.TripsService.eliminateKeyTrip(_this.userUid);
                    _this.navCtrl.pop();
                    _this.navCtrl.push('RatetripPage', { trip: _this.trip });
                    console.log("ME ACTIVEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE");
                }
                if (_this.tripState.canceledTrip === true) {
                    //check if trip was canceled by driver                         
                    _this.unSubscribeServices();
                    console.log("ME ACTIVEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE");
                    _this.TripsService.eliminatingOnTrip(_this.userUid);
                    _this.TripsService.eliminateKeyTrip(_this.userUid);
                    var modal = _this.modalCtrl.create('CanceltripPage');
                    modal.present();
                    console.log("me cancelaron el viaje");
                    _this.navCtrl.pop();
                }
                _this.TripsService.getCancelUsers(keyTrip, driverId)
                    .subscribe(function (cancelUsers) {
                    _this.cancelUsers = cancelUsers;
                    _this.cancelUsers.forEach(function (cancelUser) {
                        console.log("2paso");
                        if (_this.userUid === cancelUser.userId) {
                            console.log("3paso");
                            _this.unSubscribeServices();
                            _this.TripsService.eliminatingOnTrip(_this.userUid);
                            _this.TripsService.eliminateKeyTrip(_this.userUid);
                            console.log("me eliminaron");
                            console.log("ME ACTIVEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE");
                            _this.navCtrl.pop();
                            var modal = _this.modalCtrl.create('CanceltripPage');
                            modal.present();
                        }
                    });
                });
            }
        });
    };
    MyridePage.prototype.unSubscribeServices = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    // }
    MyridePage.prototype.getPendingAndPickedUpUsers = function (keyTrip, driverId) {
        var _this = this;
        this.TripsService.getPendingUsers(keyTrip, driverId).takeUntil(this.unsubscribe)
            .subscribe(function (user) {
            _this.pendingUsers = user;
            console.log(_this.pendingUsers);
        });
        this.TripsService.getPickedUpUsers(keyTrip, driverId).takeUntil(this.unsubscribe)
            .subscribe(function (user) {
            _this.pickedUpUsers = user;
            console.log(_this.pickedUpUsers);
        });
    };
    MyridePage.prototype.chatDriver = function (driver) {
        this.navCtrl.push('ChattingPage', { driver: driver });
    };
    MyridePage.prototype.callUser = function (number) {
        var _this = this;
        console.log(number);
        this.callNumber.callNumber(number, true)
            .then(function (res) { return console.log('Launched dialer!', res); })
            .catch(function (err) {
            var alert = _this.alertCtrl.create({
                title: 'error de llamada',
                subTitle: 'hubo un error en la llamada, si persiste el probelma envianos un correo a waypooltec@gmail.com',
                buttons: ['OK']
            });
            alert.present();
            console.log('Error launching dialer', err);
        });
    };
    MyridePage.prototype.cancelTrip = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Cancelar Viaje',
            message: "\u00BFEstas seguro que deseas cancelar?",
            buttons: [
                {
                    text: 'No',
                    role: 'cancel',
                    handler: function () {
                        //do nothing
                    }
                },
                {
                    text: 'Si',
                    handler: function () {
                        if (_this.pickedUpUsers.length === 0 || _this.pickedUpUsers === undefined || _this.pickedUpUsers === null) {
                            _this.unSubscribeServices();
                            _this.TripsService.cancelTrip(_this.userUid, _this.trip.driver.userId, _this.trip.keyTrip);
                            _this.TripsService.eliminateKeyTrip(_this.userUid);
                            _this.TripsService.eliminatingOnTrip(_this.userUid);
                            _this.navCtrl.pop();
                            console.log("ME ACTIVEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE");
                        }
                        _this.pickedUpUsers.forEach(function (pickedUser) {
                            // if user is in the pickedUpUsers array, it should not be able to cancel, because its already pickedUp.
                            if (pickedUser.userId === _this.userUid) {
                                //don't cancel
                                var toast = _this.toastCtrl.create({
                                    message: pickedUser.name + " : No puedes cancelar ya que tu compa\u00F1ero ya te recogi\u00F3, si esto no es verdad, por favor saca un screenshot de Mi Viaje al correo waypooltec@gmail.com",
                                    showCloseButton: true,
                                    closeButtonText: 'Ok'
                                });
                                toast.present();
                            }
                            else {
                                _this.TripsService.cancelTrip(_this.userUid, _this.trip.driver.userId, _this.trip.keyTrip);
                                _this.TripsService.eliminateKeyTrip(_this.userUid);
                                console.log(_this.trip.keyTrip);
                                _this.navCtrl.pop();
                            }
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    MyridePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-myride',template:/*ion-inline-start:"C:\Users\Daniel\Documents\waypool\test\waypool_customer\waypool_costumer\src\pages\myride\myride.html"*/'<ion-header class="bg-theme">\n\n    <ion-navbar>\n\n        <ion-title class="text-center">MI VIAJE</ion-title>\n\n    </ion-navbar>\n\n    \n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n\n\n    <div>\n\n        <ion-list>\n\n            <ion-card *ngFor = "let user of pendingUsers">\n\n                <ion-item>\n\n                    <ion-avatar item-start>\n\n                        <img src="assets/imgs/userPicture.png">\n\n                    </ion-avatar>\n\n                    <div class="name">\n\n                        <h2>{{user.name | titlecase}} {{user.lastname |titlecase | slice:0:1}}\n\n                            <ion-icon name="ios-checkmark-circle" class="text-theme"></ion-icon>\n\n                        </h2>\n\n                        \n\n                    </div>                   \n\n                    <div class="more">\n\n                        <ion-badge color="bg-yellow">EN ESPERA</ion-badge>\n\n                           \n\n                        \n\n                        \n\n\n\n                    </div>\n\n                </ion-item>\n\n                \n\n            </ion-card>\n\n            <ion-card *ngFor = "let user of pickedUpUsers">\n\n                <ion-item>\n\n                    <ion-avatar item-start>\n\n                        <img src="assets/imgs/userPicture.png">\n\n                    </ion-avatar>\n\n                    <div class="name">\n\n                        <h2>{{user.name | titlecase}} {{user.lastname |titlecase | slice:0:1}}\n\n                            <ion-icon name="ios-checkmark-circle" class="text-theme"></ion-icon>\n\n                        </h2>\n\n                        \n\n                    </div>\n\n                    <div class="more">\n\n                        <ion-badge color="bg-theme">RECOGIDO</ion-badge>                      \n\n                        \n\n\n\n                    </div>\n\n                   \n\n                </ion-item>\n\n                \n\n            </ion-card>\n\n\n\n            <!-- repilica -->\n\n            <ion-card *ngIf="driverExist">\n\n                <ion-item>\n\n                    <ion-avatar item-start>\n\n                        <img src="assets/imgs/userPicture.png">\n\n                    </ion-avatar>\n\n                    <div class="name">\n\n                        <h2>{{trip.driver.name|titlecase}} {{trip.driver.lastname |titlecase | slice:0:1}}\n\n                            <ion-icon name="ios-checkmark-circle" class="text-theme"></ion-icon>\n\n                        </h2>\n\n                        <p>{{trip.driver.car}}</p>\n\n                    </div>\n\n                    <div class="more">\n\n                        <h2 class="text-theme" class="priceDriver">$ {{trip.driver.price}}\n\n                        </h2>\n\n                    </div>                \n\n                   \n\n                </ion-item>\n\n                <ion-card-content>\n\n                    <div class="status"><img src="assets/imgs/driverEtiquette.png"></div>\n\n                    <div class="ride-detail">\n\n                        <p>\n\n                            <span class="icon-location bg-theme"></span>{{trip.driver.origin}}</p>\n\n                        <p>\n\n                            <span class="icon-location bg-yellow"></span>{{trip.driver.destination}}</p>\n\n                    </div>\n\n                    <ion-row>\n\n                        <ion-col center text-center col-6 text-right style="margin-left: auto;">\n\n                            <h2 class="text text-theme">                        \n\n                                Hora de partida: {{trip.startHour}}                          \n\n                            </h2>                    \n\n                        </ion-col>  \n\n                        <ion-col class="detail-text">\n\n                            <button class="btn bg-theme rounded full text-white text-bold" (click)="chatDriver(trip.driver)" ><ion-icon name="md-chatboxes" class="text-white"></ion-icon> </button>\n\n                        </ion-col>\n\n                        <ion-col class="detail-text">\n\n                            <button class="btn bg-theme rounded full text-white text-bold" (click)="callUser(trip.driver.phone)" ><ion-icon name="ios-call" class="text-white"></ion-icon> </button>\n\n                        </ion-col>\n\n                   \n\n                    </ion-row>\n\n                </ion-card-content>\n\n            </ion-card>    \n\n           \n\n            <button  class="btn bg-theme text-white rounded" *ngIf="onTrip"  (click)="cancelTrip()"style="width: 90%;margin-top: 14px;margin-left: 18px;">Cancelar Viaje</button>\n\n\n\n        </ion-list>\n\n\n\n        <!-- <div *ngSwitchCase="\'map\'">\n\n           <div #map id="map" ></div>\n\n        </div> -->\n\n             \n\n\n\n        \n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Daniel\Documents\waypool\test\waypool_customer\waypool_costumer\src\pages\myride\myride.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7__services_trips_service__["a" /* TripsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_trips_service__["a" /* TripsService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__services_signup_services__["a" /* SignUpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_signup_services__["a" /* SignUpService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__["a" /* Geolocation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__["a" /* Geolocation */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["AngularFireAuth"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["AngularFireAuth"]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_call_number__["a" /* CallNumber */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_call_number__["a" /* CallNumber */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_2__services_sendUsers_service__["a" /* sendUsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_sendUsers_service__["a" /* sendUsersService */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]) === "function" && _m || Object])
    ], MyridePage);
    return MyridePage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
}());

// getLastMinuteTrip(keyTrip,driverId){           
//         //get reserve exist inside node trips
//             console.log('1');         
//             console.log(keyTrip);         
//             console.log(driverId);         
//             console.log(this.myTripReserve);          
//             this.TripsService.getMyReserves(keyTrip,driverId)
//               .subscribe( info => {      
//                 //check if the info of the reserve is null       
//               if(info === undefined || info === null){                  
//                   this.driverExist=false;
//                   this.onTrip = false;
//               }else{
//                   this.info = info;       
//                   console.log('1');          
//                     this.onTrip = true;
//                     this.trip= info;  
//                     this.trip.cancelReserves = this.cancelReserves;
//                     console.log('1');
//                         this.trip.cancelReserves.forEach(cancelReserve => {
//                       //if driver cancel you, eliminate your keyReserve of your array
//                       if(this.cancelReserves === cancelReserve.userId){
//                         this.driverExist = false;
//                         this.TripsService.eliminatingOnTrip(this.userUid);
//                         this.TripsService.eliminateKeyLMU(this.userUid);  
//                         this.navCtrl.setRoot(this.navCtrl.getActive().component);
//                         let modal = this.modalCtrl.create('CanceltripPage');
//                         modal.present();
//                       }                        
//                     }); 
//                     this.getPendingAndPickedUpUsers(this.trip.keyTrip,this.trip.driver.userId);
//                     this.driverExist = true;
//                     if(this.trip.saveTrip === true){
//                       //check if trip has to be saved for records 
//                       this.TripsService.saveTripOnRecords(this.userUid,this.trip);
//                       this.driverExist = false;   
//                       this.onTrip=false;  
//                       this.TripsService.eliminatingOnTrip(this.userUid);
//                     } 
//                     this.trip.cancelReserves = this.cancelReserves;
//                     console.log('1');
//                         this.trip.cancelReserves.forEach(cancelReserve => {
//                       //if driver cancel you, eliminate your keyReserve of your array
//                       if(this.cancelReserves === cancelReserve.userId){
//                         this.driverExist = false;
//                         this.TripsService.eliminatingOnTrip(this.userUid);
//                         this.TripsService.eliminateKeyLMU(this.userUid);  
//                         this.navCtrl.setRoot(this.navCtrl.getActive().component);
//                         let modal = this.modalCtrl.create('CanceltripPage');
//                         modal.present();
//                       }                        
//                     });
//                   // do nothing because your trip doesn't exist
//               }         
//           })       
//# sourceMappingURL=myride.js.map

/***/ })

});
//# sourceMappingURL=14.js.map