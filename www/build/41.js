webpackJsonp([41],{

/***/ 664:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupDetailPageModule", function() { return GroupDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__groupdetail__ = __webpack_require__(859);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GroupDetailPageModule = /** @class */ (function () {
    function GroupDetailPageModule() {
    }
    GroupDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__groupdetail__["a" /* GroupDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__groupdetail__["a" /* GroupDetailPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__groupdetail__["a" /* GroupDetailPage */]
            ]
        })
    ], GroupDetailPageModule);
    return GroupDetailPageModule;
}());

//# sourceMappingURL=groupdetail.module.js.map

/***/ }),

/***/ 859:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GroupDetailPage = /** @class */ (function () {
    function GroupDetailPage(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
    }
    GroupDetailPage.prototype.seeMembers = function () {
        this.navCtrl.push('MembersGroupPage');
    };
    //  confirmpopup(){
    //     let modal = this.modalCtrl.create(ConfirmpopupPage);
    //     modal.present();
    //  }
    GroupDetailPage.prototype.changeTransportation = function () {
        var modal = this.modalCtrl.create('ChangeCarPage');
        modal.onDidDismiss(function (accepted) {
            if (accepted) {
            }
        });
        modal.present();
    };
    GroupDetailPage.prototype.searchFindDrivers = function () {
        this.navCtrl.push('MembersGroupPage');
    };
    GroupDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-groupdetail',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/waypool_costumer/src/pages/p-groupdetail/groupdetail.html"*/'<ion-header class="bg-theme">\n    <ion-navbar>\n        <ion-title>MI VIAJE</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bh-light">\n    <ion-card>\n        <ion-item>\n            <ion-avatar item-start>\n                <img src="assets/imgs/face-1.jpg">\n            </ion-avatar>\n            <div class="name">\n                <h2>Creador: David Johnson\n                    <ion-icon name="ios-checkmark-circle" class="text-theme"></ion-icon>\n                </h2>\n                <p class="company">Bancolombia</p>\n            </div>\n        </ion-item>\n        <ion-card-content>\n            <div class="ride-detail">\n                <p><small>Origen</small>\n                    <span class="icon-location bg-theme"></span>Villa Campestre</p>\n                <p>\n                    <small>Destino</small>\n                    <span class="icon-location bg-yellow"></span>Bancolombia Calle 51B</p>\n            </div>\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-card-content>\n            <div class="seats">\n                <h6 class="text-theme">Conductor</h6>\n                <ion-row style="display: flex;flex-direction: row;">\n                 \n                    <ion-col style="display: flex;flex-direction: column;" col-3>\n                        <ion-avatar style="border-radius: 15%;" #imageTaxi>\n                            <p text-center class="texto1">Taxi</p>   \n                                <img class="house"  src="assets/imgs/carfuture.png" (click)="selectImageTaxi()"/>       \n                        </ion-avatar>\n                        <button class="btn bg-theme text-white rounded" (click)="changeTransportation()" style="width: 100%; font-size: 10px;\n                        height: 23px;">Cambiar</button>\n\n                    </ion-col>\n                    <ion-col style="display: flex;flex-direction: column;margin-left: 30px;" col-7>\n                        <button class="btn bg-theme text-white rounded" (click)="seeMembers()" style="width: 100%;margin-top: 16px;">Buscar Conductor</button>\n                        <button class="btn bg-theme text-white rounded" (click)="seeMembers()" style="width: 100%;margin-top: 16px;">Ver compañeros de viaje</button>                       \n               \n                    </ion-col>\n                  </ion-row>\n            </div>\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-card-content>\n            <div class="ride-detail no-before">\n                <h6 class="text-theme">Detalles</h6>\n                \n                <p><small>Hora de salida:</small>\n                    <ion-icon name="md-time" class="icon-location"></ion-icon>\n                     12:30pm</p>\n                    <p><small>Nota</small>\n                        <ion-icon name="md-create" class="icon-location"></ion-icon>\n                        Dinero exacto por favor\n                    <p>\n            </div>\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-card-content>\n            <div class="ride-detail no-before">\n                <h6 class="text-theme">¿Ya tienes que almorzar?<ion-badge class="bg-yellow" >Patrocinado</ion-badge>\n                </h6>\n                \n                <p><small>Hora de salida:</small>\n                    <ion-icon name="md-time" class="icon-location"></ion-icon>\n                     12:30pm</p>\n                    <p><small>Nota<ion-icon name="md-create"></ion-icon></small>\n                        Dinero exacto por favor\n                    <p>\n            </div>\n        </ion-card-content>\n    </ion-card>\n    \n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/waypool_costumer/src/pages/p-groupdetail/groupdetail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */]])
    ], GroupDetailPage);
    return GroupDetailPage;
}());

//# sourceMappingURL=groupdetail.js.map

/***/ })

});
//# sourceMappingURL=41.js.map