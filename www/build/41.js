webpackJsonp([41],{

/***/ 664:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupDetailPageModule", function() { return GroupDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__groupdetail__ = __webpack_require__(858);
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

/***/ 858:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_groups_service__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__(19);
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
    function GroupDetailPage(navCtrl, modalCtrl, navParams, GroupsService, AngularFireAuth) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.GroupsService = GroupsService;
        this.AngularFireAuth = AngularFireAuth;
        this.unsubscribe = new __WEBPACK_IMPORTED_MODULE_4_rxjs__["Subject"];
        this.disable = false;
        this.userUid = this.AngularFireAuth.auth.currentUser.uid;
        this.members = [];
        this.crew = this.navParams.get('crew');
        this.GroupsService.getSpecificCrew(this.userUid, this.crew).takeUntil(this.unsubscribe)
            .subscribe(function (crew) {
            _this.crew = crew;
            if (_this.crew.transport === undefined || _this.crew.transport === null) {
            }
            else if (_this.crew.transport == 'taxi') {
                _this.imageUrl = 'assets/imgs/carOrange.png';
            }
            else if (_this.crew.transport == 'otherCar') {
                _this.imageUrl = 'assets/imgs/carfuture.png';
            }
        });
        this.GroupsService.getMembersCrew(this.userUid, this.crew).takeUntil(this.unsubscribe)
            .subscribe(function (members) {
            _this.members = members;
            console.log(_this.members);
            if (_this.members === undefined || _this.members.length === 0) {
                // disable button because there is no one in the trip
                _this.disable = true;
                console.log("estoy disable");
            }
            else {
                _this.disable = false;
                console.log("no estoy disable");
            }
        });
    }
    GroupDetailPage.prototype.seeMembers = function (crew) {
        this.navCtrl.push('MembersGroupPage', { members: this.members, crew: crew });
    };
    //  confirmpopup(){
    //     let modal = this.modalCtrl.create(ConfirmpopupPage);
    //     modal.present();
    //  }
    GroupDetailPage.prototype.changeTransportation = function (crew) {
        var modal = this.modalCtrl.create('ChangeCarPage', { crew: crew });
        modal.onDidDismiss(function (accepted) {
            if (accepted) {
            }
        });
        modal.present();
    };
    GroupDetailPage.prototype.searchFindDrivers = function () {
        this.navCtrl.push('MembersGroupPage');
    };
    GroupDetailPage.prototype.ionViewDidLeave = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    GroupDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-groupdetail',template:/*ion-inline-start:"C:\Users\danie\Documents\waypool\prod\latest\waypool_costumer\src\pages\p-groupdetail\groupdetail.html"*/'<ion-header class="bg-theme">\n\n    <ion-navbar>\n\n        <ion-title>MI VIAJE</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bh-light">\n\n    <ion-card>\n\n        <ion-item>\n\n            <ion-avatar item-start>\n\n                <img src="assets/imgs/face-1.jpg">\n\n            </ion-avatar>\n\n            <div class="name">\n\n                <h2>Creador: {{crew.admin.name| titlecase}} {{crew.admin.lastname| titlecase  }}\n\n                    <ion-icon name="ios-checkmark-circle" class="text-theme"></ion-icon>\n\n                </h2>\n\n                <p class="company">Bancolombia</p>\n\n            </div>\n\n        </ion-item>\n\n        <ion-card-content>\n\n            <div class="ride-detail">\n\n                <p><small>Origen</small>\n\n                    <span class="icon-location bg-theme"></span>{{crew.origin.name}}</p>\n\n                <p>\n\n                    <small>Destino</small>\n\n                    <span class="icon-location bg-yellow"></span>{{crew.destination.name}}</p>\n\n            </div>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card>\n\n        <ion-card-content>\n\n            <div class="seats">\n\n                <h6 class="text-theme">Conductor</h6>\n\n                <ion-row style="display: flex;flex-direction: row;">\n\n                 \n\n                    <ion-col style="display: flex;flex-direction: column;" col-3>\n\n                        <ion-avatar style="border-radius: 15%;" #imageTaxi>\n\n                            <p text-center class="texto1">{{car}}</p>   \n\n                                <img class="house"  src="{{imageUrl}}" (click)="selectImageTaxi()"/>       \n\n                        </ion-avatar>\n\n                        <button class="btn bg-theme text-white rounded" (click)="changeTransportation(crew)" style="width: 100%; font-size: 10px;\n\n                        height: 23px;">Cambiar</button>\n\n\n\n                    </ion-col>\n\n                    <ion-col style="display: flex;flex-direction: column;margin-left: 30px;" col-7>\n\n                        <button class="btn bg-theme text-white rounded" (click)="seeMembers(crew)" style="width: 100%;margin-top: 16px;">Buscar Conductor</button>\n\n                        <button class="btn bg-theme text-white rounded" (click)="seeMembers(crew)" style="width: 100%;margin-top: 16px;" [disabled]="disable">Ver compañeros de viaje</button>                       \n\n               \n\n                    </ion-col>\n\n                  </ion-row>\n\n            </div>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card>\n\n        <ion-card-content>\n\n            <div class="ride-detail no-before">\n\n                <h6 class="text-theme">Detalles</h6>\n\n                \n\n                <p><small>Hora de salida:</small>\n\n                    <ion-icon name="md-time" class="icon-location"></ion-icon>\n\n                    {{crew.startHour}} </p>\n\n                    <p><small>Nota</small>\n\n                        <ion-icon name="md-create" class="icon-location"></ion-icon>\n\n                        Dinero exacto por favor\n\n                    <p>\n\n            </div>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card>\n\n        <ion-card-content>\n\n            <div class="ride-detail no-before">\n\n                <h6 class="text-theme">¿Ya tienes que almorzar?<ion-badge class="bg-yellow" >Patrocinado</ion-badge>\n\n                </h6>\n\n                \n\n                <p><small>Hora de salida:</small>\n\n                    <ion-icon name="md-time" class="icon-location"></ion-icon>\n\n                     12:30pm</p>\n\n                    <p><small>Nota<ion-icon name="md-create"></ion-icon></small>\n\n                        Dinero exacto por favor\n\n                    <p>\n\n            </div>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\danie\Documents\waypool\prod\latest\waypool_costumer\src\pages\p-groupdetail\groupdetail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_groups_service__["a" /* GroupsService */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["AngularFireAuth"]])
    ], GroupDetailPage);
    return GroupDetailPage;
}());

//# sourceMappingURL=groupdetail.js.map

/***/ })

});
//# sourceMappingURL=41.js.map