webpackJsonp([48],{

/***/ 658:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeCarPageModule", function() { return ChangeCarPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__changecar__ = __webpack_require__(851);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChangeCarPageModule = /** @class */ (function () {
    function ChangeCarPageModule() {
    }
    ChangeCarPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__changecar__["a" /* ChangeCarPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__changecar__["a" /* ChangeCarPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__changecar__["a" /* ChangeCarPage */]
            ]
        })
    ], ChangeCarPageModule);
    return ChangeCarPageModule;
}());

//# sourceMappingURL=changecar.module.js.map

/***/ }),

/***/ 851:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangeCarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_d_signup_service__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_d_instances_services__ = __webpack_require__(351);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChangeCarPage = /** @class */ (function () {
    function ChangeCarPage(navCtrl, navParams, viewCtrl, renderer, alertCtrl, signUpService, angularFireAuth, instances, afDB) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.renderer = renderer;
        this.alertCtrl = alertCtrl;
        this.signUpService = signUpService;
        this.angularFireAuth = angularFireAuth;
        this.instances = instances;
        this.afDB = afDB;
    }
    ChangeCarPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss(this.accepted);
    };
    ChangeCarPage.prototype.selectImageOtherCar = function () {
        // this is just to change the css
        this.renderer.setElementStyle(this.imageOtherCar.nativeElement, 'border-width', '3px');
        this.renderer.setElementStyle(this.imageOtherCar.nativeElement, 'border-style', 'solid');
        this.renderer.setElementStyle(this.imageOtherCar.nativeElement, 'border-color', 'green');
        this.renderer.setElementStyle(this.imageTaxi.nativeElement, 'border-width', '0px');
        this.otherCar = true;
        this.taxi = false;
    };
    ChangeCarPage.prototype.selectImageTaxi = function () {
        // this is just to change the css
        this.renderer.setElementStyle(this.imageTaxi.nativeElement, 'border-width', '3px');
        this.renderer.setElementStyle(this.imageTaxi.nativeElement, 'border-style', 'solid');
        this.renderer.setElementStyle(this.imageTaxi.nativeElement, 'border-color', 'green');
        this.renderer.setElementStyle(this.imageOtherCar.nativeElement, 'border-width', '0px');
        this.otherCar = false;
        this.taxi = true;
    };
    ChangeCarPage.prototype.confirm = function () {
        if (this.otherCar === null || this.taxi === null) {
        }
        else {
            if (this.otherCar === true) {
                // if user select otherCar change information in firebase
                //service that changes taxi information
            }
            else if (this.taxi === true) {
                // if user select taxi change information in firebase
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('imageTaxi', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] }),
        __metadata("design:type", Object)
    ], ChangeCarPage.prototype, "imageTaxi", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('imageOtherCar', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] }),
        __metadata("design:type", Object)
    ], ChangeCarPage.prototype, "imageOtherCar", void 0);
    ChangeCarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-changecar',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/waypool_costumer/src/pages/p-changecar/changecar.html"*/'<ion-content>\n\n\n    <ion-card>\n\n       \n\n    <h4  text-center style="margin: 5px;font-size: 2.0rem;font-weight: 600;">Escoge tu medio de transporte</h4>\n    <h6  text-center style="    margin: 15px;">Ambos metodos se encarga el creador de grupo en conseguir dicho transporte.</h6>\n\n      <ion-row  style="display: flex; flex-direction: row; justify-content: center;">\n            <ion-avatar  #house>\n                <p text-center class="texto1">Waypool,Indriver,Uber...</p>\n\n                    <img  #imageOtherCar class="house" style="border-radius: 15%;" src="assets/imgs/carfuture.png" (click)="selectImageOtherCar()"/>\n\n                </ion-avatar>\n\n                <ion-avatar  style="border-radius: 15%;" #work>\n                    <p text-center class="texto1">Taxi.</p>\n\n                        <img #imageTaxi src="assets/imgs/carOrange.png"  style="border-radius: 15%;" (click)="selectImageTaxi()"/>\n                 </ion-avatar>\n     \n      </ion-row>\n  \n        <ion-card-content>\n            <div class="seats">           \n                <ion-row style="margin-top: 14px;    display: flex;\n                justify-content: center">                \n                    <ion-col col-8>\n                        <button class="btn bg-theme-driver text-white rounded" style="width: 100%;font-size: 1.25rem;" (click)="confirm()" navPop>Escoger</button>\n                    </ion-col>\n                </ion-row>\n            </div>\n        </ion-card-content>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/waypool_costumer/src/pages/p-changecar/changecar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__services_d_signup_service__["a" /* DriverSignUpService */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_5__services_d_instances_services__["a" /* DriverInstancesService */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["AngularFireDatabase"]])
    ], ChangeCarPage);
    return ChangeCarPage;
}());

//# sourceMappingURL=changecar.js.map

/***/ })

});
//# sourceMappingURL=48.js.map