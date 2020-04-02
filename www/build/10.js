webpackJsonp([10],{

/***/ 684:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverVerificationImagesPageModule", function() { return DriverVerificationImagesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__driver_verification_images__ = __webpack_require__(879);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DriverVerificationImagesPageModule = /** @class */ (function () {
    function DriverVerificationImagesPageModule() {
    }
    DriverVerificationImagesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__driver_verification_images__["a" /* DriverVerificationImagesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__driver_verification_images__["a" /* DriverVerificationImagesPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__driver_verification_images__["a" /* DriverVerificationImagesPage */]
            ]
        })
    ], DriverVerificationImagesPageModule);
    return DriverVerificationImagesPageModule;
}());

//# sourceMappingURL=driver-verification-images.module.js.map

/***/ }),

/***/ 879:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverVerificationImagesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_d_signup_service__ = __webpack_require__(347);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DriverVerificationImagesPage = /** @class */ (function () {
    function DriverVerificationImagesPage(navCtrl, navParams, viewCtrl, camera, AngularFireauth, alertCtrl, SignUpService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.camera = camera;
        this.AngularFireauth = AngularFireauth;
        this.alertCtrl = alertCtrl;
        this.SignUpService = SignUpService;
        this.namePicture = "Cédula";
        this.description = "Sube una foto clara de tu";
        this.img1 = "Carné de la U";
        this.img2 = "Cédula";
        this.des1 = "Sube una foto clara de tu";
        this.picToView = "assets/imgs/v2.png";
        this.picToViewCarne = "assets/imgs/v2.png";
        this.picToViewId = "assets/imgs/v4.png";
        this.showCarne = true;
        this.showId = false;
        this.cameraPicCarne = false;
        this.cameraPicId = false;
        this.options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.driver = this.AngularFireauth.auth.currentUser.uid;
        this.SignUpService.getMyInfo(this.SignUpService.userPlace, this.driver).subscribe(function (user) {
            _this.driverInfo = user;
            if (_this.driverInfo.documents) {
                if (_this.driverInfo.documents.carne == true) {
                    _this.picToViewCarne = "assets/imgs/v2.3.png";
                    _this.picToView = "assets/imgs/v2.3.png";
                }
                else if (_this.driverInfo.documents.id == true) {
                    _this.picToViewId = "assets/imgs/_v4.3.png";
                }
                else if (_this.driverInfo.documents.carne == false) {
                    _this.picToViewCarne = "assets/imgs/v2.2.png";
                    _this.picToView = "assets/imgs/v2.2.png";
                }
                else if (_this.driverInfo.documents.id == false) {
                    _this.picToViewId = "assets/imgs/v4.2.png";
                }
                else if (_this.driverInfo.documents.carne == undefined) {
                    _this.picToViewCarne = "assets/imgs/v2.png";
                }
                else if (_this.driverInfo.documents.id == undefined) {
                    _this.picToViewId = "assets/imgs/v4.png";
                }
            }
        });
    }
    ;
    DriverVerificationImagesPage.prototype.skipVerification = function () {
        this.viewCtrl.dismiss();
    };
    DriverVerificationImagesPage.prototype.usageCameraCarne = function () {
        var _this = this;
        this.camera.getPicture(this.options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            var base64Image = 'data:image/jpeg;base64,' + imageData;
            var picturesDrivers = Object(__WEBPACK_IMPORTED_MODULE_3_firebase__["storage"])().ref(_this.SignUpService.userPlace + '/verificationDocuments/' + _this.driver + '/' + _this.data);
            picturesDrivers.putString(base64Image, 'data_url').then(function () {
                var alert = _this.alertCtrl.create({
                    title: '¡HECHO!',
                    subTitle: 'ya tenemos tu documento, lo verificaremos en las proximas 24 horas y te enviaremos un correo cuando todo este listo',
                    buttons: ['OK']
                });
                alert.present();
            }).catch(function (error) {
                console.log(error);
                var alert = _this.alertCtrl.create({
                    title: 'hubo un error',
                    subTitle: 'intenta subir el documento otra vez',
                    buttons: ['OK']
                });
                alert.present();
            });
            _this.picToViewCarne = "assets/imgs/v2.2.png";
            _this.picToView = "assets/imgs/v2.2.png";
            _this.SignUpService.pushDocsCarne(_this.SignUpService.userPlace, _this.driver);
        }, function (err) {
            console.log(err);
            var alert = _this.alertCtrl.create({
                title: 'hubo un error',
                subTitle: 'intenta subir el documento otra vez',
                buttons: ['OK']
            });
            alert.present();
        });
    };
    DriverVerificationImagesPage.prototype.usageCameraId = function () {
        var _this = this;
        this.camera.getPicture(this.options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            var base64Image = 'data:image/jpeg;base64,' + imageData;
            var picturesDrivers = Object(__WEBPACK_IMPORTED_MODULE_3_firebase__["storage"])().ref(_this.SignUpService.userPlace + '/verificationDocuments/' + _this.driver + '/' + _this.data);
            picturesDrivers.putString(base64Image, 'data_url').then(function () {
                var alert = _this.alertCtrl.create({
                    title: '¡HECHO!',
                    subTitle: 'ya tenemos tu documento, lo verificaremos en las proximas 24 horas y te enviaremos un correo cuando todo este listo',
                    buttons: ['OK']
                });
                alert.present();
            }).catch(function (error) {
                console.log(error);
                var alert = _this.alertCtrl.create({
                    title: 'hubo un error',
                    subTitle: 'intenta subir el documento otra vez',
                    buttons: ['OK']
                });
                alert.present();
            });
            _this.picToViewId = "assets/imgs/v4.2.png";
            _this.picToView = "assets/imgs/v4.2.png";
            _this.SignUpService.pushDocsId(_this.SignUpService.userPlace, _this.driver);
        }, function (err) {
            console.log(err);
            var alert = _this.alertCtrl.create({
                title: 'hubo un error',
                subTitle: 'intenta subir el documento otra vez',
                buttons: ['OK']
            });
            alert.present();
        });
    };
    DriverVerificationImagesPage.prototype.changeNamePicture1 = function () {
        if (this.driverInfo.documents) {
            if (this.driverInfo.documents.carne == undefined) {
                this.picToViewCarne = "assets/imgs/v2.png";
                this.picToView = "assets/imgs/v2.png";
            }
            else if (this.driverInfo.documents.carne == false) {
                this.picToViewCarne = "assets/imgs/v2.2.png";
                this.picToView = "assets/imgs/v2.2.png";
            }
            else if (this.driverInfo.documents.carne == true) {
                this.picToViewCarne = "assets/imgs/v2.3.png";
                this.picToView = "assets/imgs/v2.3.png";
            }
            else {
                this.picToViewCarne = "assets/imgs/v2.png";
                this.picToView = "assets/imgs/v2.png";
            }
        }
        this.namePicture = this.img1;
        this.description = this.des1;
        this.data = "carné";
        this.showCarne = true;
        this.showId = false;
    };
    ;
    DriverVerificationImagesPage.prototype.changeNamePicture2 = function () {
        if (this.driverInfo.documents) {
            if (this.driverInfo.documents.id == undefined) {
                this.picToViewId = "assets/imgs/v4.png";
                this.picToView = "assets/imgs/v4.png";
            }
            else if (this.driverInfo.documents.id == false) {
                this.picToViewId = "assets/imgs/v4.2.png";
                this.picToView = "assets/imgs/v4.2.png";
            }
            else if (this.driverInfo.documents.id == true) {
                this.picToViewId = "assets/imgs/_v4.3.png";
                this.picToView = "assets/imgs/_v4.3.png";
            }
            else {
                this.picToViewId = "assets/imgs/v4.png";
                this.picToView = "assets/imgs/v4.png";
            }
        }
        this.namePicture = this.img2;
        this.description = this.des1;
        this.data = "cédula";
        this.showId = true;
        this.showCarne = false;
    };
    ;
    DriverVerificationImagesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'driver-page-verification-images',template:/*ion-inline-start:"C:\Users\danie\waypool_costumer\src\pages\verification-images\driver-verification-images.html"*/'<ion-header class="bg-theme-driver">\n\n    <ion-navbar >\n\n        <ion-title>VERIFÍCATE \n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding-right padding-left>\n\n    <p text-center padding-top margin-top>{{description}}</p>\n\n    <h2 text-center>{{namePicture}}</h2>\n\n\n\n    <ion-row>\n\n        <ion-col col-4 text-center>\n\n            <img  [src]="picToViewCarne" (click)="changeNamePicture1()">\n\n        </ion-col>\n\n        <ion-col col-4 text-center>\n\n            <img   [src]="picToViewId" (click)="changeNamePicture2()">\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <div text-center class="verifiy">\n\n        <img [src]="picToView">\n\n    </div>\n\n    <ion-row>\n\n        <ion-col>\n\n            <p padding-top class="btn-box" *ngIf = \'showCarne\'><button class="btn text-white bg-theme-driver rounded" style="width: 80%;" (click)="usageCameraCarne()">Subir Foto del carné</button></p>\n\n            <p padding-top class="btn-box" *ngIf = \'showId\'><button class="btn text-white bg-theme-driver rounded" style="width: 80%;" (click)="usageCameraId()">Subir Foto de la cédula</button></p>\n\n        </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n        <ion-col>\n\n            <p padding-top class="skipText"  (click)="skipVerification()"> No me quiero verificar ahora </p>\n\n        </ion-col>\n\n    </ion-row>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\danie\waypool_costumer\src\pages\verification-images\driver-verification-images.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__services_d_signup_service__["a" /* DriverSignUpService */]])
    ], DriverVerificationImagesPage);
    return DriverVerificationImagesPage;
}());

//# sourceMappingURL=driver-verification-images.js.map

/***/ })

});
//# sourceMappingURL=10.js.map