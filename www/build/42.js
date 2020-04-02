webpackJsonp([42],{

/***/ 660:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateGroupPageModule", function() { return CreateGroupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__creategroup__ = __webpack_require__(853);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CreateGroupPageModule = /** @class */ (function () {
    function CreateGroupPageModule() {
    }
    CreateGroupPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__creategroup__["a" /* CreateGroupPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__creategroup__["a" /* CreateGroupPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__creategroup__["a" /* CreateGroupPage */]
            ]
        })
    ], CreateGroupPageModule);
    return CreateGroupPageModule;
}());

//# sourceMappingURL=creategroup.module.js.map

/***/ }),

/***/ 853:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateGroupPage; });
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


var CreateGroupPage = /** @class */ (function () {
    function CreateGroupPage(navCtrl, modalCtrl, navParams, renderer) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.renderer = renderer;
        this.origin = this.navParams.get('origin');
        this.destination = this.navParams.get('destination');
    }
    //  confirmpopup(){
    //     let modal = this.modalCtrl.create(ConfirmpopupPage);
    //     modal.present();
    //  }
    CreateGroupPage.prototype.selectImageOtherCar = function () {
        // this is just to change the css
        this.renderer.setElementStyle(this.imageOtherCar.nativeElement, 'border-width', '3px');
        this.renderer.setElementStyle(this.imageOtherCar.nativeElement, 'border-style', 'solid');
        this.renderer.setElementStyle(this.imageOtherCar.nativeElement, 'border-color', 'green');
        this.renderer.setElementStyle(this.imageTaxi.nativeElement, 'border-width', '0px');
        this.otherCar = true;
        this.taxi = false;
    };
    CreateGroupPage.prototype.selectImageTaxi = function () {
        // this is just to change the css
        this.renderer.setElementStyle(this.imageTaxi.nativeElement, 'border-width', '3px');
        this.renderer.setElementStyle(this.imageTaxi.nativeElement, 'border-style', 'solid');
        this.renderer.setElementStyle(this.imageTaxi.nativeElement, 'border-color', 'green');
        this.renderer.setElementStyle(this.imageOtherCar.nativeElement, 'border-width', '0px');
        this.otherCar = false;
        this.taxi = true;
    };
    CreateGroupPage.prototype.createGroup = function () {
        if (this.startHour === null || this.startHour === undefined || this.otherCar === undefined || this.taxi === undefined) {
            //create service for group
            this.navCtrl.push('ReservetripPage');
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('imageTaxi', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] }),
        __metadata("design:type", Object)
    ], CreateGroupPage.prototype, "imageTaxi", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('imageOtherCar', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] }),
        __metadata("design:type", Object)
    ], CreateGroupPage.prototype, "imageOtherCar", void 0);
    CreateGroupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-creategroup',template:/*ion-inline-start:"C:\Users\danie\Documents\waypool\prod\findyourcrew\waypool_costumer\src\pages\p-creategroup\creategroup.html"*/'<ion-header class="bg-theme">\n\n    <ion-navbar>\n\n        <ion-title>crea grupo</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bh-light">\n\n    <H2 style="margin-left: 12px;">Encuentra personas con quién irte</H2>\n\n\n\n    <ion-card>\n\n        <ion-item>\n\n            <ion-avatar item-start>\n\n                <img src="assets/imgs/face-1.jpg">\n\n            </ion-avatar>\n\n\n\n            <div class="name">\n\n                <h2> Admin del grupo: David Johnson\n\n                    <ion-icon name="ios-checkmark-circle" class="text-theme"></ion-icon>\n\n                </h2>\n\n                <p>Bancolombia</p>\n\n            </div>\n\n        </ion-item>\n\n        <ion-card-content>\n\n            <div class="ride-detail">\n\n                <p><small>Origen</small>\n\n                    <span class="icon-location bg-theme"></span>Villa Campestre</p>\n\n                <p>\n\n                    <small>Destino</small>\n\n                    <span class="icon-location bg-yellow"></span>Bancolombia Calle 51B</p>\n\n            </div>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card>\n\n        <ion-card-content>\n\n            <ion-row  style="display: flex; flex-direction: row;">\n\n                <ion-avatar style="border-radius: 15%;" #imageTaxi>\n\n                    <p text-center class="texto1">Taxi</p>\n\n    \n\n                        <img class="house"  src="assets/imgs/carOrange.png" (click)="selectImageTaxi()"/>\n\n    \n\n                    </ion-avatar>\n\n    \n\n                    <ion-avatar  style="border-radius: 15%;" #imageOtherCar>\n\n                        <p text-center class="texto1">Indriver, Uber, Beat. etc...</p>\n\n    \n\n                            <img src="assets/imgs/carBlue.png"  (click)="selectImageOtherCar()"/>\n\n                     </ion-avatar>\n\n         \n\n          </ion-row>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card>\n\n        <ion-card-content>\n\n            <div class="ride-detail no-before">\n\n                <h6 class="text-theme">Detalles</h6>\n\n                \n\n                <ion-row >\n\n                <ion-list>\n\n                    \n\n                    <div style="    border-color: black;\n\n                    border-style: solid; border-width: 1px;">\n\n\n\n                    <ion-item>\n\n                        <ion-label>      \n\n                    <ion-icon name="md-calendar" class="icon-location"></ion-icon> Hora:</ion-label>\n\n\n\n                <ion-datetime  displayFormat="hh:mm A" pickerFormat="hh:mm A" [(ngModel)]="startHour" ></ion-datetime>\n\n                </ion-item>\n\n\n\n                </div>\n\n                <ion-item>\n\n                    <h2 text-left> <ion-icon name="md-create"></ion-icon> Nota:</h2>\n\n\n\n                    <div class="form">\n\n                        <ion-list no-lines>\n\n                            <ion-item>\n\n                                <ion-textarea [(ngModel)]="note" type="text" placeholder="Deja una nota para tus compañeros" ></ion-textarea>\n\n                            </ion-item>\n\n                        </ion-list>\n\n                    </div>\n\n                  </ion-item>\n\n                </ion-list>                    \n\n            </ion-row>\n\n                    \n\n            </div>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card>\n\n        <ion-card-content>\n\n            <div class="seats">\n\n                <h6 class="text-theme"></h6>\n\n                <ion-item>\n\n                    <ion-label>Asientos Disponibles</ion-label>\n\n                    <ion-select [(ngModel)]="gender">\n\n                      <ion-option value=1>1</ion-option>\n\n                      <ion-option value=2>2</ion-option>\n\n                      <ion-option value=3>3</ion-option>\n\n\n\n                      <ion-option value=4>4</ion-option>\n\n\n\n                    </ion-select>\n\n                  </ion-item>\n\n                <button class="btn bg-theme text-white rounded" (click)="confirmpopup()" style="width: 100%;margin-top: 16px;">CREAR GRUPO</button>\n\n            </div>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\danie\Documents\waypool\prod\findyourcrew\waypool_costumer\src\pages\p-creategroup\creategroup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */]])
    ], CreateGroupPage);
    return CreateGroupPage;
}());

//# sourceMappingURL=creategroup.js.map

/***/ })

});
//# sourceMappingURL=42.js.map