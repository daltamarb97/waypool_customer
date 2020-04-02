webpackJsonp([43],{

/***/ 664:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateGroupPageModule", function() { return CreateGroupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__creategroup__ = __webpack_require__(860);
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

/***/ 860:
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('imageTaxi', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] }),
        __metadata("design:type", Object)
    ], CreateGroupPage.prototype, "imageTaxi", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('imageOtherCar', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] }),
        __metadata("design:type", Object)
    ], CreateGroupPage.prototype, "imageOtherCar", void 0);
    CreateGroupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-creategroup',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/waypool_costumer/src/pages/p-creategroup/creategroup.html"*/'<ion-header class="bg-theme">\n    <ion-navbar>\n        <ion-title>crea grupo</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bh-light">\n    <H2 style="margin-left: 12px;">Encuentra personas con quién irte</H2>\n\n    <ion-card>\n        <ion-item>\n            <ion-avatar item-start>\n                <img src="assets/imgs/face-1.jpg">\n            </ion-avatar>\n\n            <div class="name">\n                <h2> Admin del grupo: David Johnson\n                    <ion-icon name="ios-checkmark-circle" class="text-theme"></ion-icon>\n                </h2>\n                <p>Bancolombia</p>\n            </div>\n        </ion-item>\n        <ion-card-content>\n            <div class="ride-detail">\n                <p><small>Origen</small>\n                    <span class="icon-location bg-theme"></span>Villa Campestre</p>\n                <p>\n                    <small>Destino</small>\n                    <span class="icon-location bg-yellow"></span>Bancolombia Calle 51B</p>\n            </div>\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-card-content>\n            <ion-row  style="display: flex; flex-direction: row;">\n                <ion-avatar style="border-radius: 15%;" #imageTaxi>\n                    <p text-center class="texto1">Taxi</p>\n    \n                        <img class="house"  src="assets/imgs/carOrange.png" (click)="selectImageTaxi()"/>\n    \n                    </ion-avatar>\n    \n                    <ion-avatar  style="border-radius: 15%;" #imageOtherCar>\n                        <p text-center class="texto1">Indriver, Uber, Beat. etc...</p>\n    \n                            <img src="assets/imgs/carBlue.png"  (click)="selectImageOtherCar()"/>\n                     </ion-avatar>\n         \n          </ion-row>\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-card-content>\n            <div class="ride-detail no-before">\n                <h6 class="text-theme">Detalles</h6>\n                \n                <ion-row >\n                <ion-list>\n                    \n                    <div style="    border-color: black;\n                    border-style: solid; border-width: 1px;">\n\n                    <ion-item>\n                        <ion-label>      \n                    <ion-icon name="md-calendar" class="icon-location"></ion-icon> Hora:</ion-label>\n\n                <ion-datetime  displayFormat="hh:mm A" pickerFormat="hh:mm A" [(ngModel)]="startHour" ></ion-datetime>\n                </ion-item>\n\n                </div>\n                <ion-item>\n                    <h2 text-left> <ion-icon name="md-create"></ion-icon> Nota:</h2>\n\n                    <div class="form">\n                        <ion-list no-lines>\n                            <ion-item>\n                                <ion-textarea [(ngModel)]="note" type="text" placeholder="Deja una nota para tus compañeros" ></ion-textarea>\n                            </ion-item>\n                        </ion-list>\n                    </div>\n                  </ion-item>\n                </ion-list>                    \n            </ion-row>\n                    \n            </div>\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-card-content>\n            <div class="seats">\n                <h6 class="text-theme"></h6>\n                <ion-item>\n                    <ion-label>Asientos Disponibles</ion-label>\n                    <ion-select [(ngModel)]="gender">\n                      <ion-option value=1>1</ion-option>\n                      <ion-option value=2>2</ion-option>\n                      <ion-option value=3>3</ion-option>\n\n                      <ion-option value=4>4</ion-option>\n\n                    </ion-select>\n                  </ion-item>\n                <button class="btn bg-theme text-white rounded" (click)="confirmpopup()" style="width: 100%;margin-top: 16px;">CREAR GRUPO</button>\n            </div>\n        </ion-card-content>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/waypool_costumer/src/pages/p-creategroup/creategroup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */]])
    ], CreateGroupPage);
    return CreateGroupPage;
}());

//# sourceMappingURL=creategroup.js.map

/***/ })

});
//# sourceMappingURL=43.js.map