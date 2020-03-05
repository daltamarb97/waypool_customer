webpackJsonp([26],{

/***/ 671:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerificationImagesPageModule", function() { return VerificationImagesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__verification_images__ = __webpack_require__(862);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var VerificationImagesPageModule = /** @class */ (function () {
    function VerificationImagesPageModule() {
    }
    VerificationImagesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__verification_images__["a" /* VerificationImagesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__verification_images__["a" /* VerificationImagesPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__verification_images__["a" /* VerificationImagesPage */]
            ]
        })
    ], VerificationImagesPageModule);
    return VerificationImagesPageModule;
}());

//# sourceMappingURL=verification-images.module.js.map

/***/ }),

/***/ 862:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerificationImagesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_signup_services__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera___ = __webpack_require__(360);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var VerificationImagesPage = /** @class */ (function () {
    function VerificationImagesPage(navCtrl, navParams, viewCtrl, AngularFireauth, alertCtrl, SignUpService, camera, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.AngularFireauth = AngularFireauth;
        this.alertCtrl = alertCtrl;
        this.SignUpService = SignUpService;
        this.camera = camera;
        this.loadingCtrl = loadingCtrl;
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
        this.user = this.AngularFireauth.auth.currentUser.uid;
        this.SignUpService.getMyInfo(this.user, this.SignUpService.userPlace).subscribe(function (user) {
            _this.userInfo = user;
            if (_this.userInfo.documents) {
                if (_this.userInfo.documents.carne == true) {
                    _this.picToViewCarne = "assets/imgs/v2.3.png";
                    _this.picToView = "assets/imgs/v2.3.png";
                }
                else if (_this.userInfo.documents.id == true) {
                    _this.picToViewId = "assets/imgs/_v4.3.png";
                }
                else if (_this.userInfo.documents.carne == false) {
                    _this.picToViewCarne = "assets/imgs/v2.2.png";
                    _this.picToView = "assets/imgs/v2.2.png";
                }
                else if (_this.userInfo.documents.id == false) {
                    _this.picToViewId = "assets/imgs/v4.2.png";
                }
                else if (_this.userInfo.documents.carne == undefined) {
                    _this.picToViewCarne = "assets/imgs/v2.png";
                    _this.picToView = "assets/imgs/v2.png";
                }
                else if (_this.userInfo.documents.id == undefined) {
                    _this.picToViewId = "assets/imgs/v4.png";
                }
            }
        });
    }
    ;
    VerificationImagesPage.prototype.skipVerification = function () {
        this.viewCtrl.dismiss();
    };
    VerificationImagesPage.prototype.usageCameraCarne = function () {
        var _this = this;
        this.camera.getPicture(this.options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            var loading = _this.loadingCtrl.create({
                spinner: 'crescent',
                content: "\n          <div class=\"custom-spinner-container\">\n            <div class=\"custom-spinner-box\"></div>\n          </div>"
            });
            loading.present();
            var base64Image = 'data:image/jpeg;base64,' + imageData;
            var picturesDrivers = Object(__WEBPACK_IMPORTED_MODULE_2_firebase__["storage"])().ref(_this.SignUpService.userPlace + '/verificationDocuments/' + _this.user + '/' + _this.data);
            picturesDrivers.putString(base64Image, 'data_url').then(function () {
                loading.dismiss();
                var alert = _this.alertCtrl.create({
                    title: '¡HECHO!',
                    subTitle: 'ya tenemos tu documento, lo verificaremos en las proximas 24 horas y te enviaremos un correo cuando todo este listo',
                    buttons: ['OK']
                });
                alert.present();
            }).catch(function (error) {
                loading.dismiss();
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
            _this.SignUpService.pushDocsCarne(_this.SignUpService.userPlace, _this.user);
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
    VerificationImagesPage.prototype.usageCameraId = function () {
        var _this = this;
        this.camera.getPicture(this.options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            var loading = _this.loadingCtrl.create({
                spinner: 'crescent',
                content: "\n          <div class=\"custom-spinner-container\">\n            <div class=\"custom-spinner-box\"></div>\n          </div>"
            });
            loading.present();
            var base64Image = 'data:image/jpeg;base64,' + imageData;
            var picturesDrivers = Object(__WEBPACK_IMPORTED_MODULE_2_firebase__["storage"])().ref(_this.SignUpService.userPlace + '/verificationDocuments/' + _this.user + '/' + _this.data);
            picturesDrivers.putString(base64Image, 'data_url').then(function () {
                loading.dismiss();
                var alert = _this.alertCtrl.create({
                    title: '¡HECHO!',
                    subTitle: 'ya tenemos tu documento, lo verificaremos en las proximas 24 horas y te enviaremos un correo cuando todo este listo',
                    buttons: ['OK']
                });
                alert.present();
            }).catch(function (error) {
                loading.dismiss();
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
            _this.SignUpService.pushDocsId(_this.SignUpService.userPlace, _this.user);
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
    VerificationImagesPage.prototype.changeNamePicture1 = function () {
        if (this.userInfo.documents) {
            if (this.userInfo.documents.carne == undefined) {
                this.picToViewCarne = "assets/imgs/v2.png";
                this.picToView = "assets/imgs/v2.png";
            }
            else if (this.userInfo.documents.carne == false) {
                this.picToViewCarne = "assets/imgs/v2.2.png";
                this.picToView = "assets/imgs/v2.2.png";
            }
            else if (this.userInfo.documents.carne == true) {
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
    VerificationImagesPage.prototype.changeNamePicture2 = function () {
        if (this.userInfo.documents) {
            if (this.userInfo.documents.id == undefined) {
                this.picToViewId = "assets/imgs/v4.png";
                this.picToView = "assets/imgs/v4.png";
            }
            else if (this.userInfo.documents.id == false) {
                this.picToViewId = "assets/imgs/v4.2.png";
                this.picToView = "assets/imgs/v4.2.png";
            }
            else if (this.userInfo.documents.id == true) {
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
    VerificationImagesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-verification-images',template:/*ion-inline-start:"C:\Users\Daniel\Documents\waypool\prod\latest\waypool_costumer\src\pages\p-verification-images\verification-images.html"*/'<ion-header class="bg-theme">\n\n    <ion-navbar >\n\n        <ion-title>VERIFÍCATE \n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding-right padding-left>\n\n    <p text-center padding-top margin-top>{{description}}</p>\n\n    <h2 text-center>{{namePicture}}</h2>\n\n\n\n    <ion-row>\n\n        <ion-col col-4 text-center>\n\n            <img  [src]="picToViewCarne" (click)="changeNamePicture1()">\n\n        </ion-col>\n\n        <ion-col col-4 text-center>\n\n            <img   [src]="picToViewId" (click)="changeNamePicture2()">\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <div text-center class="verifiy">\n\n        <img [src]="picToView">\n\n    </div>\n\n    <ion-row>\n\n        <ion-col>\n\n            <p padding-top class="btn-box" *ngIf = \'showCarne\'><button class="btn text-white bg-theme rounded" style="width: 80%;" (click)="usageCameraCarne()">Subir Foto del carné</button></p>\n\n            <p padding-top class="btn-box" *ngIf = \'showId\'><button class="btn text-white bg-theme rounded" style="width: 80%;" (click)="usageCameraId()">Subir Foto de Cédula</button></p>\n\n        </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n        <ion-col>\n\n            <p padding-top class="skipText"  (click)="skipVerification()"> No me quiero verificar ahora </p>\n\n        </ion-col>\n\n    </ion-row>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Daniel\Documents\waypool\prod\latest\waypool_costumer\src\pages\p-verification-images\verification-images.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__services_signup_services__["a" /* SignUpService */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera___["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */]])
    ], VerificationImagesPage);
    return VerificationImagesPage;
}());

//# sourceMappingURL=verification-images.js.map

/***/ })

});
//# sourceMappingURL=26.js.map