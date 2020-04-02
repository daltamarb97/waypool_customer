webpackJsonp([22],{

/***/ 677:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverPaymentsInfoPageModule", function() { return DriverPaymentsInfoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__payments_info__ = __webpack_require__(869);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DriverPaymentsInfoPageModule = /** @class */ (function () {
    function DriverPaymentsInfoPageModule() {
    }
    DriverPaymentsInfoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__payments_info__["a" /* DriverPaymentsInfoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__payments_info__["a" /* DriverPaymentsInfoPage */]),
            ],
        })
    ], DriverPaymentsInfoPageModule);
    return DriverPaymentsInfoPageModule;
}());

//# sourceMappingURL=payments-info.module.js.map

/***/ }),

/***/ 869:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverPaymentsInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_d_price_service__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_d_signup_service__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the PaymentsInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DriverPaymentsInfoPage = /** @class */ (function () {
    function DriverPaymentsInfoPage(navCtrl, navParams, afDB, viewCtrl, alertCtrl, priceServices, signUpServices, angularFireAuth) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afDB = afDB;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.priceServices = priceServices;
        this.signUpServices = signUpServices;
        this.angularFireAuth = angularFireAuth;
        this.bankList = [];
        this.showOther = false;
        this.afDB.database.ref('/bankList/').once('value').then(function (snap) {
            console.log(snap.val());
            _this.bankList = snap.val();
        });
        this.userInfo = this.navParams.get('userInfo');
        this.afDB.database.ref('/driversTest/' + this.userInfo.userId).once('value').then(function (snap) {
            if (snap.val().bankAccount !== null && snap.val().idNumber !== null && snap.val().bankEntity !== null && snap.val().bankAccount !== undefined && snap.val().idNumber !== undefined && snap.val().bankEntity !== undefined) {
                _this.fullInformation = true;
                _this.showInputsToEdit = false;
            }
            else {
                _this.showInputsToEdit = true;
                _this.fullInformation = false;
            }
        });
        this.driverId = this.angularFireAuth.auth.currentUser.uid;
    }
    DriverPaymentsInfoPage.prototype.editPaymentInfo = function () {
        this.fullInformation = false;
        this.showInputsToEdit = true;
    };
    DriverPaymentsInfoPage.prototype.onChange = function () {
        if (this.bankEntity === 'Otro') {
            this.showOther = true;
        }
        else {
            this.showOther = false;
        }
    };
    DriverPaymentsInfoPage.prototype.setPaymentInfo = function () {
        if (this.fullInformation === true) {
            this.dismiss();
        }
        else {
            if (this.bankEntity === 'Otro') {
                if (this.id === null || this.id === undefined || this.bankEntityOther === null || this.bankEntityOther === undefined || this.bankAccount === null || this.bankAccount === undefined) {
                    var alert_1 = this.alertCtrl.create({
                        title: 'Informacion Incompleta',
                        subTitle: 'Por favor revisa que pusiste toda la información correctamente',
                        buttons: ['OK']
                    });
                    alert_1.present();
                }
                else {
                    this.priceServices.sendPaymentInfo(this.driverId, this.id, this.bankAccount, this.bankEntityOther);
                    this.dismiss();
                }
            }
            else {
                if (this.id === null || this.id === undefined || this.bankEntity === null || this.bankEntity === undefined || this.bankAccount === null || this.bankAccount === undefined) {
                    var alert_2 = this.alertCtrl.create({
                        title: 'Informacion Incompleta',
                        subTitle: 'Por favor revisa que pusiste toda la información correctamente',
                        buttons: ['OK']
                    });
                    alert_2.present();
                }
                else {
                    this.priceServices.sendPaymentInfo(this.driverId, this.id, this.bankAccount, this.bankEntity);
                    this.dismiss();
                }
            }
        }
    };
    DriverPaymentsInfoPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    DriverPaymentsInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'driver-page-payments-info',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/waypool_costumer/src/pages/payments-info/driver-payments-info.html"*/'<ion-content>\n  <ion-card>\n      \n        \n    <div *ngIf = \'showInputsToEdit\'>\n        <ion-card-content>\n                <ion-icon name="close-circle" class="close-icon text-theme-driver"  (click)="dismiss()"></ion-icon>\n             <h2>INFORMACIÓN PARA RECIBIR DINERO ACOMULADO POR COMPARTIR TU CARRO</h2>\n            <div class="ride-detail">\n                <ion-item class="form">\n                    <ion-label floating>Tu cédula</ion-label>\n                    <ion-input type="number" [(ngModel)]="id"></ion-input>\n                  </ion-item>                \n            </div>\n        </ion-card-content>\n        <ion-card-content>\n          <div class="ride-detail">\n            <ion-list>\n              <ion-item class="form">\n                <ion-label floating>Tu número de cuenta</ion-label>\n                <ion-input type="number" [(ngModel)]="bankAccount"></ion-input>\n              </ion-item>\n            </ion-list>               \n          </div>\n      </ion-card-content>\n  \n      <ion-card-content>\n          <ion-row style="margin-top: 14px;    display: flex;\n                justify-content: center">\n                   <ion-list>\n                        <ion-item>\n                          <ion-label>Tu banco</ion-label>\n                          <ion-select [(ngModel)]="bankEntity" (ionChange)="onChange()">\n                            <ion-option *ngFor="let bank of bankList" >{{bank}}</ion-option>\n                          </ion-select>\n                        </ion-item>\n                        <ion-item *ngIf=\'showOther\'>\n                            <ion-label floating>Nombre de tu banco</ion-label>\n                            <ion-input  [(ngModel)]="bankEntityOther"></ion-input>\n                        </ion-item>\n                    </ion-list>\n                </ion-row>\n      </ion-card-content>\n</div>\n<div *ngIf = \'fullInformation\'>\n        <ion-card-content>\n                <ion-icon name="close-circle" class="close-icon text-theme-driver"  (click)="dismiss()"></ion-icon>\n                <h2>YA TENEMOS TU INFORMACIÓN FINANCIERA PARA ENVIARTE TU DINERO</h2>\n\n                <ion-row style="margin-top: 14px; display: flex; justify-content: center">\n                 \n                  <ion-col col-8>\n                      <button class="btn bg-theme-driver text-white rounded" style="width: 100%;font-size: 1.2rem;" (click)="editPaymentInfo()">Editar mi información</button>\n                  </ion-col>\n              </ion-row>\n           </ion-card-content>\n</div>\n    <br/>\n      <ion-card-content>\n          <div class="ride-detail no-before">\n              <p>Esta información es necesaria para que puedas recibir el dinero que ganaste por compartir tu carro.</p>      \n              <br/>\n              <p>Recuerda que esta información es tuya y por lo tanto nos tomamos enserio su protección. Tus datos estan protegidos bajo las normas de nuestra politica de  privacidad de datos. <a href="https://waypooltech.wordpress.com/" style="color: #0081ad">Más Información</a></p>\n          </div>\n              \n             \n     \n          <div class="seats">\n              \n              <ion-row style="margin-top: 14px;    display: flex;\n              justify-content: center">\n                 \n                  <ion-col col-8>\n                      <button class="btn bg-theme-driver text-white rounded" style="width: 100%;font-size: 1.2rem;" (click)="setPaymentInfo()">Listo</button>\n                  </ion-col>\n              </ion-row>\n             \n\n          </div>\n      </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/waypool_costumer/src/pages/payments-info/driver-payments-info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__services_d_price_service__["a" /* DriverPriceService */], __WEBPACK_IMPORTED_MODULE_4__services_d_signup_service__["a" /* DriverSignUpService */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["AngularFireAuth"]])
    ], DriverPaymentsInfoPage);
    return DriverPaymentsInfoPage;
}());

//# sourceMappingURL=payments-info.js.map

/***/ })

});
//# sourceMappingURL=22.js.map