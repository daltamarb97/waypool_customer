webpackJsonp([53],{

/***/ 690:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverConfirmpricePageModule", function() { return DriverConfirmpricePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__driverConfirmprice__ = __webpack_require__(884);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DriverConfirmpricePageModule = /** @class */ (function () {
    function DriverConfirmpricePageModule() {
    }
    DriverConfirmpricePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__driverConfirmprice__["a" /* DriverConfirmpricePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__driverConfirmprice__["a" /* DriverConfirmpricePage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__driverConfirmprice__["a" /* DriverConfirmpricePage */]
            ]
        })
    ], DriverConfirmpricePageModule);
    return DriverConfirmpricePageModule;
}());

//# sourceMappingURL=driverConfirmprice.module.js.map

/***/ }),

/***/ 884:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverConfirmpricePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_d_signup_service__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_d_sendCoords_service__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_d_sendUsers_service__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_d_price_service__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_d_geofire_services__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_d_metrics_service__ = __webpack_require__(366);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var DriverConfirmpricePage = /** @class */ (function () {
    function DriverConfirmpricePage(navCtrl, appCtrl, MetricsService, PriceService, alertCtrl, afDB, sendUsersService, SignUpService, sendCoordsService, modalCtrl, AngularFireAuth, viewCtrl, navParams, geofireService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.appCtrl = appCtrl;
        this.MetricsService = MetricsService;
        this.PriceService = PriceService;
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
        this.userDriverUid = this.AngularFireAuth.auth.currentUser.uid;
        //variable for get data in function
        this.driver = {};
        //variable to transfer data from driver to this one
        this.driverInfo = {};
        this.driverInfoNote = {};
        this.buttonColor = '#0fc874';
        this.buttonColor2 = '#0fc874';
        this.unsubscribe = new __WEBPACK_IMPORTED_MODULE_9_rxjs__["Subject"];
        this.carModelList = [];
        this.nowHour = new Date();
        this.geocoordinatesDest = {};
        this.geocoordinatesOr = {};
        this.schedules = [];
        this.keyReserve = this.navParams.get('keyReserve');
        this.SignUpService.getCar(this.userDriverUid).takeUntil(this.unsubscribe)
            .subscribe(function (car) {
            //get cars registered
            _this.carModelList = car;
            console.log(_this.carModelList);
        });
        this.geocoder = new google.maps.Geocoder;
    }
    DriverConfirmpricePage.prototype.ionViewDidEnter = function () {
        //  this.geofireService.cancelGeoqueryPlace();
    };
    DriverConfirmpricePage.prototype.setPriceDriver = function () {
        if (this.precio == null || this.precio == '' || this.car == null || this.car == '') {
            var alert = this.alertCtrl.create({
                title: 'Informacion Incompleta',
                subTitle: 'No haz colocado el precio por el que estas dispuesto a compatir tu viaje o no haz especificado en que carro te moverás',
                buttons: ['OK']
            });
            alert.present();
        }
        else {
            this.PriceService.setPrice(this.userDriverUid, this.precio, this.car, this.keyReserve);
            this.accepted = true;
            this.unsubscribe.next();
            this.unsubscribe.complete();
            this.viewCtrl.dismiss(this.accepted);
            // HERE YOU ARE, DOUCHEBAG
            //ESTO SE HARA AHORA EN LA PARTE DE HORARIO
            // this.afDB.database.ref( '/driversTest/' + this.userDriverUid + '/schedule/').once('value').then((snapSchedule)=>{
            //   let obj = snapSchedule.val();
            //   console.log(obj);
            //   Object.getOwnPropertyNames(obj).forEach((key)=>{
            //     if(obj[key].type === 'origin'){
            //       this.afDB.database.ref(this.SignUpService.userPlace + '/reserves/'+ this.userDriverUid).push({
            //         driver: this.driverInfo,
            //         car:this.car,
            //         houseAddr: this.driver.houseAddress.name,
            //         placeAddr: this.driverInfo.placeAddr,
            //         price:this.precio,
            //         startHour: obj[key].hour,
            //         type: obj[key].type,
            //     }).then((snap1)=>{
            //       const key1 = snap1.key;
            // this.MetricsService.createdReserves(this.driverInfo,this.car,this.navParams.data.houseAddr[0],this.navParams.data.placeAddr,this.precio, sche.,this.typeOfReserve);
            //      // set geofireOrkey 
            //      this.geofireService.setGeofireOrNEWTEST(this.SignUpService.userPlace, key1, this.driver.houseAddress.coordinates.lat, this.driver.houseAddress.coordinates.lng );
            //      this.afDB.database.ref(this.SignUpService.userPlace + '/geofireOr/' + key1).update({
            //         driverId: this.driverInfo.userId
            //      })
            //      console.log('executed geofire Or');
            //         this.afDB.database.ref(this.SignUpService.userPlace + '/reserves/'+ this.userDriverUid + '/' + key1).update({
            //             keyTrip: key1 
            //         }) 
            //         this.accepted = true;
            //         this.unsubscribe.next();
            //         this.unsubscribe.complete();
            //         this.viewCtrl.dismiss(this.accepted);
            //     })
            //     }else{
            //       this.afDB.database.ref(this.SignUpService.userPlace + '/reserves/'+ this.userDriverUid).push({
            //         driver: this.driverInfo,
            //         car:this.driver.trips.car,
            //         houseAddr: this.driver.houseAddress.name,
            //         placeAddr: this.driverInfo.placeAddr,
            //         price:this.precio,
            //         startHour: obj[key].hour,
            //         type: obj[key].type,
            //     }).then((snap2)=>{
            //       const key2 = snap2.key;
            //       // this.MetricsService.createdReserves(this.SignUpService.userPlace,this.driverInfo,this.car,this.navParams.data.houseAddr[0],this.navParams.data.placeAddr,this.precio, sche.,this.typeOfReserve);
            //      // set geofireOrkey 
            //      this.geofireService.setGeofireDestNEWTEST(this.SignUpService.userPlace, key2, this.driver.houseAddress.coordinates.lat, this.driver.houseAddress.coordinates.lng );
            //      this.afDB.database.ref(this.SignUpService.userPlace + '/geofireDest/' + key2).update({
            //         driverId: this.driverInfo.userId
            //      })
            //      console.log('executed geofire Dest')
            //         this.afDB.database.ref(this.SignUpService.userPlace + '/reserves/'+ this.userDriverUid + '/' + key2).update({
            //             keyTrip: key2 
            //         }) 
            //         this.accepted = true;
            //         this.unsubscribe.next();
            //         this.unsubscribe.complete();
            //         this.viewCtrl.dismiss(this.accepted);
            //     })                    
            //     }
            //   })
            // })
        }
    };
    ;
    DriverConfirmpricePage.prototype.dismiss = function () {
        // this.unsubscribe.next();
        // this.unsubscribe.unsubscribe();
        this.afDB.database.ref('/geofireRoute/').once('value').then(function (snap) {
            var obj = snap.val();
            Object.getOwnPropertyNames(obj).forEach(function (key) {
                console.log(obj[key]);
                // if(obj[key].keyTrip === this.keyReserve){
                //   this.geofireService.deleteUserGeofireRoute(obj[key]);
                // }
            });
        });
        this.geofireService.deleteUserGeofireDest(this.keyReserve);
        this.geofireService.deleteUserGeofireOr(this.keyReserve);
        this.geofireService.deleteUserReserve(this.userDriverUid, this.keyReserve);
        this.unsubscribe.next();
        this.unsubscribe.complete();
        this.viewCtrl.dismiss();
    };
    DriverConfirmpricePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'driver-page-confirmprice',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/waypool_costumer/src/pages/confirmprice/driverConfirmprice.html"*/'<ion-content>\n    <ion-card>\n            <img src="assets/imgs/detallesviaje.png" width="100px" style="display:inline-block" height="150px"/>\n            <ion-icon name="close-circle" class="close-icon text-white"  (click)="dismiss()"></ion-icon>\n\n        <ion-card-content>\n            <div class="ride-detail">\n                    <p> Este valor se replicará en todos los viajes en tu horario </p>\n\n                <ion-item class="form">\n                    <ion-label floating>Precio Por Persona</ion-label>\n                    <ion-input type="number" [(ngModel)]="precio"></ion-input>\n                  </ion-item>                \n            </div>\n        </ion-card-content>\n\n        <ion-card-content>\n            <!-- <div class="ride-detail no-before">\n                <p><small>Recuerda:</small>\n                    <ion-icon name="md-calendar" class="icon-location"></ion-icon>\n                  - Precio Recomendado: 2500 </p>\n        \n                <p>- Tus compañeros te pagarán en efectivo, evita colocar precios que requieran mucho vuelto, lleva dinero suficiente para dar vueltas.</p>\n            </div> -->\n        </ion-card-content>\n        <ion-card-content>\n                <ion-row style="margin-top: 14px;    display: flex;\n                justify-content: center">\n                   <ion-list>\n                        <ion-item>\n                          <ion-label>Escoge el carro:</ion-label>\n                          <ion-select [(ngModel)]="car">\n                                <ion-option *ngFor="let car of carModelList" >{{car.carModel}} | {{car.plateNumber}} | {{car.color}}</ion-option>\n                       \n                          </ion-select>\n                        </ion-item>\n                      </ion-list>\n                </ion-row>\n                \n               \n       \n            <div class="seats">\n                \n                <ion-row style="margin-top: 14px;    display: flex;\n                justify-content: center">\n                   \n                    <ion-col col-8>\n                        <button class="btn bg-theme-driver text-white rounded" style="width: 100%;font-size: 1.2rem;" (click)="setPriceDriver()">Conectarme</button>\n                    </ion-col>\n                </ion-row>\n               \n\n            </div>\n        </ion-card-content>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/waypool_costumer/src/pages/confirmprice/driverConfirmprice.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_10__services_d_metrics_service__["a" /* DriverMetricsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__services_d_metrics_service__["a" /* DriverMetricsService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7__services_d_price_service__["a" /* DriverPriceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_d_price_service__["a" /* DriverPriceService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["AngularFireDatabase"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["AngularFireDatabase"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__services_d_sendUsers_service__["a" /* DriverSendUsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_d_sendUsers_service__["a" /* DriverSendUsersService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_4__services_d_signup_service__["a" /* DriverSignUpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_d_signup_service__["a" /* DriverSignUpService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_5__services_d_sendCoords_service__["a" /* DriverSendCoordsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_d_sendCoords_service__["a" /* DriverSendCoordsService */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]) === "function" && _o || Object, typeof (_p = typeof __WEBPACK_IMPORTED_MODULE_8__services_d_geofire_services__["a" /* DriverGeofireService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__services_d_geofire_services__["a" /* DriverGeofireService */]) === "function" && _p || Object])
    ], DriverConfirmpricePage);
    return DriverConfirmpricePage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
}());

//# sourceMappingURL=driverConfirmprice.js.map

/***/ })

});
//# sourceMappingURL=53.js.map