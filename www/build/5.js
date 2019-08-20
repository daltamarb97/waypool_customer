webpackJsonp([5],{

/***/ 590:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmNotePageModule", function() { return ConfirmNotePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__confirmnote__ = __webpack_require__(613);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ConfirmNotePageModule = /** @class */ (function () {
    function ConfirmNotePageModule() {
    }
    ConfirmNotePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__confirmnote__["a" /* ConfirmNotePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__confirmnote__["a" /* ConfirmNotePage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__confirmnote__["a" /* ConfirmNotePage */]
            ]
        })
    ], ConfirmNotePageModule);
    return ConfirmNotePageModule;
}());

//# sourceMappingURL=confirmnote.module.js.map

/***/ }),

/***/ 609:
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmNotePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(609);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_signup_services__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_sendCoords_service__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_sendUsers_service__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_note_service__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_geoFire_service__ = __webpack_require__(332);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ConfirmNotePage = /** @class */ (function () {
    function ConfirmNotePage(navCtrl, noteService, appCtrl, alertCtrl, afDB, sendUsersService, SignUpService, sendCoordsService, modalCtrl, AngularFireAuth, viewCtrl, navParams, geofireService) {
        this.navCtrl = navCtrl;
        this.noteService = noteService;
        this.appCtrl = appCtrl;
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
        this.userUid = this.AngularFireAuth.auth.currentUser.uid;
        this.buttonColor = '#3fb1df';
        this.buttonColor2 = '#3fb1df';
        this.buttonColor3 = '#3fb1df';
        this.buttonColor4 = '#3fb1df';
        this.clicked1 = false;
        this.clicked2 = false;
        this.clicked3 = false;
        this.clicked4 = false;
        this.geoinfo1 = this.navParams.get('geoFire1');
        console.log(this.geoinfo1);
        this.geoinfo2 = this.navParams.get('geoFire2');
        console.log(this.geoinfo2);
    }
    ConfirmNotePage.prototype.setNoteDriver = function () {
        if (this.note == null || this.note == '') {
            this.note = 'No hay nota';
            this.noteService.setNote(this.userUid, this.note);
            this.accepted = true;
            this.dismiss();
        }
        else {
            this.noteService.setNote(this.userUid, this.note);
            this.accepted = true;
            this.dismiss();
        }
    };
    ;
    ConfirmNotePage.prototype.setGeoFireDestination = function () {
        this.geofireService.setLocationGeofireDest(this.userUid, this.geoinfo2.lat, this.geoinfo2.lng, this.userUid);
        this.buttonColor = '#0fc874';
        this.buttonColor2 = '#3fb1df';
        this.buttonColor3 = '#3fb1df';
        this.buttonColor4 = '#3fb1df';
        this.clicked1 = true;
        if (this.clicked2 == true || this.clicked3 == true || this.clicked4 == true) {
            this.geofireService.deleteUserGeofireOr(this.userUid);
            this.clicked2 = false;
            this.clicked3 = false;
            this.clicked4 = false;
        }
    };
    ConfirmNotePage.prototype.setGeoFireOrigin = function () {
        this.geofireService.setLocationGeofireOr(this.userUid, this.geoinfo1.lat, this.geoinfo1.lng, this.userUid);
        this.buttonColor2 = '#0fc874';
        this.buttonColor = '#3fb1df';
        this.buttonColor3 = '#3fb1df';
        this.buttonColor4 = '#3fb1df';
        this.clicked2 = true;
        if (this.clicked1 == true) {
            this.geofireService.deleteUserGeofireDest(this.userUid);
            this.clicked1 = false;
        }
    };
    ConfirmNotePage.prototype.setGeoFireOrigin2 = function () {
        this.geofireService.setLocationGeofireOr(this.userUid, this.geoinfo1.lat, this.geoinfo1.lng, this.userUid);
        this.buttonColor2 = '#3fb1df';
        this.buttonColor = '#3fb1df';
        this.buttonColor3 = '#0fc874';
        this.buttonColor4 = '#3fb1df';
        this.clicked3 = true;
        if (this.clicked1 == true) {
            this.geofireService.deleteUserGeofireDest(this.userUid);
            this.clicked1 = false;
        }
    };
    ConfirmNotePage.prototype.setGeoFireOrigin3 = function () {
        this.geofireService.setLocationGeofireOr(this.userUid, this.geoinfo1.lat, this.geoinfo1.lng, this.userUid);
        this.buttonColor2 = '#3fb1df';
        this.buttonColor = '#3fb1df';
        this.buttonColor3 = '#3fb1df';
        this.buttonColor4 = '#0fc874';
        this.clicked4 = true;
        if (this.clicked1 == true) {
            this.geofireService.deleteUserGeofireDest(this.userUid);
            this.clicked1 = false;
        }
    };
    ConfirmNotePage.prototype.dismissOnClick = function () {
        this.viewCtrl.dismiss(this.accepted);
        if (this.clicked1 == true || this.clicked2 == true) {
            this.geofireService.deleteUserGeofireDest(this.userUid);
            this.geofireService.deleteUserGeofireOr(this.userUid);
        }
    };
    ConfirmNotePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss(this.accepted);
    };
    ConfirmNotePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-confirmnote',template:/*ion-inline-start:"C:\Users\Daniel\Documents\waypool\test\waypool_customer\waypool_costumer\src\pages\confirmnote\confirmnote.html"*/'<ion-content>\n\n    <ion-icon name="md-close" class="close-icon text-white" (click)="dismissOnClick()"></ion-icon>\n\n    <ion-card>\n\n        <h6 class="text-theme">Detalles del Viaje</h6>\n\n        \n\n\n\n        <ion-card-content>\n\n            <div class="ride-detail">\n\n                <ion-item >\n\n                    <ion-label>Nota (Opcional):</ion-label>\n\n                \n\n                  </ion-item>\n\n                <ion-item>\n\n                    <div class="form">\n\n                        <ion-list no-lines>\n\n                            <ion-item>\n\n                                    <ion-textarea [(ngModel)]="note" rows="10"type="text"  ></ion-textarea>\n\n\n\n                            </ion-item>\n\n                        </ion-list>\n\n                    </div>\n\n                  </ion-item>\n\n            </div>\n\n        </ion-card-content>\n\n\n\n        <ion-card-content>\n\n            <div class="ride-detail">\n\n                    <h6 class="text-theme">¿Cuál es tu Destino? (IMPORTANTE)</h6>\n\n\n\n              <button class="btn bg-theme text-white rounded"  (click)="setGeoFireDestination()" [ngStyle]="{\'background-color\': buttonColor}">\n\n                  Casa\n\n                <ion-icon name="home"></ion-icon>\n\n              </button>\n\n              <button class="btn bg-theme text-white rounded"  (click)="setGeoFireOrigin()" [ngStyle]="{\'background-color\': buttonColor2}">\n\n                    Universidad\n\n                  <ion-icon name="book"></ion-icon>\n\n                </button>\n\n                <button class="btn bg-theme text-white rounded"  (click)="setGeoFireOrigin2()" [ngStyle]="{\'background-color\': buttonColor3}">\n\n                    C. Juridico Uninorte\n\n                  <ion-icon name="book"></ion-icon>\n\n                </button>\n\n                <button class="btn bg-theme text-white rounded"  (click)="setGeoFireOrigin3()" [ngStyle]="{\'background-color\': buttonColor4}">\n\n                    Hospital Uninorte\n\n                  <ion-icon name="book"></ion-icon>\n\n                </button>\n\n            </div>\n\n        </ion-card-content>\n\n\n\n        <ion-card-content>\n\n            <div class="seats">\n\n                \n\n                <ion-row style="margin-top: 14px;justify-content: center">\n\n                    \n\n                    <ion-col col-8>\n\n                        <button class="btn bg-theme text-white rounded" style="width: 100%;font-size: 1.5rem;" (click)="setNoteDriver()">Aceptar Viaje</button>\n\n                    </ion-col>\n\n                </ion-row>\n\n\n\n\n\n            </div>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Daniel\Documents\waypool\test\waypool_customer\waypool_costumer\src\pages\confirmnote\confirmnote.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_7__services_note_service__["a" /* noteService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_6__services_sendUsers_service__["a" /* sendUsersService */], __WEBPACK_IMPORTED_MODULE_4__services_signup_services__["a" /* SignUpService */], __WEBPACK_IMPORTED_MODULE_5__services_sendCoords_service__["a" /* sendCoordsService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_8__services_geoFire_service__["a" /* geofireService */]])
    ], ConfirmNotePage);
    return ConfirmNotePage;
}());

//# sourceMappingURL=confirmnote.js.map

/***/ })

});
//# sourceMappingURL=5.js.map