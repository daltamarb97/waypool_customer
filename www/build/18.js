webpackJsonp([18],{

/***/ 704:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverSchedulePageModule", function() { return DriverSchedulePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__schedule__ = __webpack_require__(901);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DriverSchedulePageModule = /** @class */ (function () {
    function DriverSchedulePageModule() {
    }
    DriverSchedulePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__schedule__["a" /* DriverSchedulePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__schedule__["a" /* DriverSchedulePage */]),
            ],
        })
    ], DriverSchedulePageModule);
    return DriverSchedulePageModule;
}());

//# sourceMappingURL=schedule.module.js.map

/***/ }),

/***/ 901:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverSchedulePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_d_signup_service__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_d_instances_services__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var DriverSchedulePage = /** @class */ (function () {
    function DriverSchedulePage(navCtrl, navParams, DriverSignUpService, instancesService, modalCtrl, signUpService, angularFireAuth, app, alertCtrl, camera, loadingCtrl, instances, afDB) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.DriverSignUpService = DriverSignUpService;
        this.instancesService = instancesService;
        this.modalCtrl = modalCtrl;
        this.signUpService = signUpService;
        this.angularFireAuth = angularFireAuth;
        this.app = app;
        this.alertCtrl = alertCtrl;
        this.camera = camera;
        this.loadingCtrl = loadingCtrl;
        this.instances = instances;
        this.afDB = afDB;
        this.schedule = "makeYourOwn";
        this.schedules = [];
        this.showButtonWorkSchedule = false;
        this.unsubscribe = new __WEBPACK_IMPORTED_MODULE_8_rxjs__["Subject"];
        this.currentUser = this.angularFireAuth.auth.currentUser;
        this.optionsCamera = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.optionsLibrary = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
        };
        this.defaultZone = this.navParams.get('defaultZone');
        console.log(this.defaultZone);
        this.userId = this.angularFireAuth.auth.currentUser.uid;
        this.houseAddress = { input: '' };
        this.workAddress = { input: '' };
        if (this.defaultZone) {
            // this.signUpService.userPlace = this.defaultZone;
        }
        else {
        }
        this.DriverSignUpService.getToggleStatus(this.userId)
            .subscribe(function (toggleOnline) {
            _this.toggleOnline = toggleOnline;
            console.log(toggleOnline);
            console.log(_this.userId);
            if (_this.toggleOnline === true) {
                _this.showConectedButton = true;
                console.log("estoy online");
            }
            else {
                _this.showConectedButton = false;
                console.log("estoy offline");
            }
        });
        this.signUpService.getMyInfo(this.userId)
            .subscribe(function (tripsInfo) {
            _this.tripsInfo = tripsInfo;
            if (_this.tripsInfo.workAddress && _this.tripsInfo.houseAddress) {
                _this.workAddress.input = _this.tripsInfo.workAddress.name;
                _this.workAddress.input = _this.tripsInfo.houseAddress.name;
            }
            else {
                console.log('aun no ha puesto ningunas direcciones para schedule');
            }
        });
        this.afDB.database.ref('/driversTest/' + this.userId).once('value').then(function (snap) {
            _this.userInfo = snap.val();
        });
        this.signUpService.getSchedule(this.userId).subscribe(function (hour) {
            _this.schedules = hour;
            console.log(_this.schedules);
            if (_this.schedules.length !== 0) {
                _this.afDB.database.ref('/driversTest/' + _this.userId + '/scheduleType/').once('value').then(function (snap) {
                    if (snap.val() === 'picture') {
                    }
                    else {
                        _this.showButtonWorkSchedule = true;
                    }
                });
            }
            else {
                _this.showButtonWorkSchedule = false;
            }
        });
    }
    DriverSchedulePage.prototype.makeSchedule = function () {
        var _this = this;
        console.log(this.userId);
        this.afDB.database.ref('/driversTest/' + this.userId).once('value').then(function (snap) {
            if (snap.val().toggleStatus === 'online') {
                var alert = _this.alertCtrl.create({
                    title: 'Para añadir un nuevo horario debes estar offline',
                    buttons: ['OK']
                });
                alert.present();
            }
            else {
                var modal = _this.modalCtrl.create('DriverAddSchedulePage');
                modal.onDidDismiss(function (accepted) {
                    if (accepted) {
                    }
                });
                modal.present();
            }
        });
    };
    DriverSchedulePage.prototype.removeTime = function (sche) {
        var _this = this;
        this.afDB.database.ref('/driversTest/' + this.userId).once('value').then(function (snap) {
            if (snap.val().toggleStatus === 'online') {
                var alert = _this.alertCtrl.create({
                    title: 'Para eliminar este horario debes estar offline',
                    buttons: ['OK']
                });
                alert.present();
            }
            else {
                var modal = _this.modalCtrl.create('DriverRemoveSchedulePage', {
                    schedule: sche
                });
                modal.onDidDismiss(function (accepted) {
                    if (accepted) {
                        // this.navCtrl.push('ListridePage');
                        var alert = _this.alertCtrl.create({
                            title: 'Este horario ha sido eliminado',
                            buttons: ['OK']
                        });
                        alert.present();
                    }
                });
                modal.present();
            }
        });
    };
    DriverSchedulePage.prototype.usageCameraSchedule = function () {
        var _this = this;
        this.camera.getPicture(this.optionsCamera).then(function (imageData) {
            _this.afDB.database.ref('allCities/' + _this.userInfo.city + '/allPlaces/' + _this.userInfo.company + '/zones').once('value').then(function (snap) {
                var obj = snap.val();
                _this.instances.scheduleTypePicture(_this.userId);
            });
            var loading = _this.loadingCtrl.create({
                spinner: 'crescent',
                content: "\n          <div class=\"custom-spinner-container\">\n            <div class=\"custom-spinner-box\"></div>\n          </div>"
            });
            loading.present();
            var base64Image = 'data:image/jpeg;base64,' + imageData;
            var pictureSchedule = Object(__WEBPACK_IMPORTED_MODULE_5_firebase__["storage"])().ref(_this.userInfo.company + '/schedules/' + _this.userId);
            pictureSchedule.putString(base64Image, 'data_url').then(function () {
                loading.dismiss();
                var alert = _this.alertCtrl.create({
                    title: '¡HECHO!',
                    subTitle: 'ya tenemos tu horario, en las próximas horas empezarás a recibir solicitudes de compañeros de viaje',
                    buttons: [{
                            text: 'OK',
                            handler: function () {
                                _this.navCtrl.push('DriverFindridePage');
                            }
                        }]
                });
                alert.present();
            }).catch(function (error) {
                console.log(error);
                var alert = _this.alertCtrl.create({
                    title: 'hubo un error',
                    subTitle: 'intenta subir el horario otra vez',
                    buttons: ['OK']
                });
                alert.present();
            });
        }, function (err) {
            console.log(err);
            var alert = _this.alertCtrl.create({
                title: 'hubo un error',
                subTitle: 'intenta subir el horario otra vez',
                buttons: ['OK']
            });
            alert.present();
        });
    };
    DriverSchedulePage.prototype.accessLibrary = function () {
        var _this = this;
        this.camera.getPicture(this.optionsLibrary).then(function (imageData) {
            var loading = _this.loadingCtrl.create({
                spinner: 'crescent',
                content: "\n          <div class=\"custom-spinner-container\">\n            <div class=\"custom-spinner-box\"></div>\n          </div>"
            });
            loading.present();
            var base64Image = 'data:image/jpeg;base64,' + imageData;
            var pictureSchedule = Object(__WEBPACK_IMPORTED_MODULE_5_firebase__["storage"])().ref(_this.userInfo.company + '/schedules/' + _this.userId);
            pictureSchedule.putString(base64Image, 'data_url').then(function () {
                loading.dismiss();
                _this.instances.scheduleTypePicture(_this.userId);
                var alert = _this.alertCtrl.create({
                    title: '¡HECHO!',
                    subTitle: 'ya tenemos tu horario, en las próximas horas empezarás a recibir solicitudes de compañeros de viaje',
                    buttons: [{
                            text: 'OK',
                            handler: function () {
                                _this.navCtrl.push('DriverFindridePage');
                            }
                        }]
                });
                alert.present();
            }).catch(function (error) {
                console.log(error);
                var alert = _this.alertCtrl.create({
                    title: 'hubo un error',
                    subTitle: 'intenta subir el horario otra vez',
                    buttons: ['OK']
                });
                alert.present();
            });
        }, function (err) {
            console.log(err);
            var alert = _this.alertCtrl.create({
                title: 'hubo un error',
                subTitle: 'intenta subir el horario otra vez',
                buttons: ['OK']
            });
            alert.present();
        });
    };
    DriverSchedulePage.prototype.conectDriver = function () {
        var _this = this;
        if (this.toggleOnline === true) {
            var alert = this.alertCtrl.create({
                title: '¡Ya estas conectado!',
                subTitle: 'Si deseas cambiar el precio de tus viajes, desconectate y vuelvete a conectar',
                buttons: ['OK']
            });
            alert.present();
        }
        else {
            if (this.currentUser.emailVerified == false) {
                var alert = this.alertCtrl.create({
                    title: 'Oops!',
                    subTitle: 'por favor verifica tu email',
                    buttons: ['OK']
                });
                alert.present();
            }
            else {
                if (this.userInfo.documents) {
                    if (this.userInfo.documents.carne == true && this.userInfo.documents.id == true) {
                        if (this.userInfo.schedule) {
                            try {
                                if (this.houseAddress == null || this.workAddress == null || this.houseAddress == undefined || this.workAddress == undefined) {
                                    this.presentAlert('No tienes toda la informacion', 'Por favor asegura que tengas las dirección de tu casa y oficina sea correcta', 'Ok');
                                }
                                else {
                                    var modal = this.modalCtrl.create('DriverConfirmpricePage');
                                    modal.onDidDismiss(function (accepted) {
                                        if (accepted) {
                                            _this.instancesService.ToggleStatusOnline(_this.userId);
                                            console.log("estoy true");
                                            console.log(_this.userInfo.fixedLocation.name);
                                        }
                                    });
                                    modal.present();
                                }
                            }
                            catch (error) {
                                console.log(error);
                            }
                        }
                        else {
                            var alert = this.alertCtrl.create({
                                title: 'No tienes ningún horario',
                                subTitle: 'Por favor arma tu horario o mandanos foto del horario',
                                buttons: ['OK'],
                                cssClass: 'alertDanger'
                            });
                            alert.present();
                        }
                    }
                    else {
                        var alert = this.alertCtrl.create({
                            title: '¡oh-uh!',
                            subTitle: 'faltan documentos por subir, dirigete al menú, luego a tus documentos y completa el envío. Si ya los subiste, espera a que el equipo de Waypool te verifique.',
                            buttons: [{
                                    text: 'Subir mis documentos',
                                    handler: function () {
                                        _this.navCtrl.push('DriverUserVerificationPage');
                                    }
                                },
                                {
                                    text: 'Cancelar',
                                    role: 'cancel',
                                    handler: function () {
                                    }
                                }
                            ],
                            cssClass: 'alertDanger'
                        });
                        alert.present();
                    }
                }
                else {
                    var alert = this.alertCtrl.create({
                        title: '¡oh-oh!',
                        subTitle: 'faltan documentos por subir, dirigete al menú, luego a tus documentos y completa el envío. Si ya los subiste, espera a que el equipo de Waypool te verifique.',
                        buttons: [{
                                text: 'Subir mis documentos',
                                handler: function () {
                                    _this.navCtrl.push('DriverUserVerificationPage');
                                }
                            },
                            {
                                text: 'Cancelar',
                                role: 'cancel',
                                handler: function () {
                                }
                            }
                        ],
                        cssClass: 'alertDanger'
                    });
                    alert.present();
                }
            }
        }
    };
    DriverSchedulePage.prototype.disconectDriver = function () {
        if (this.toggleOnline === false) {
            //do nothing
            console.log("offline");
        }
        else {
            this.instancesService.ToggleStatusOffline(this.userId);
            //get all reserves from driver
            //   this.afDB.database.ref(this.SignUpService.userPlace + '/reserves/'+this.userId).once('value').then((snapReserve)=>{
            //     this.driverReserves = snapReserve.val();
            //     console.log(this.driverReserves);
            //      //este if sirve para saber si si hay reservas y no crashear la app al desconectarse
            //     if(snapReserve.val() === null || snapReserve.val() === undefined ){
            //       this.showConectedButton = true;
            //       this.changeColorOffline();
            //       this.instancesService.ToggleStatusOffline(this.SignUpService.userPlace, this.user);
            //       this.enable();
            //       // this.autocompleteMyDest.input = '';
            //     }else{
            //       let obj = this.driverReserves;
            //     Object.getOwnPropertyNames(obj).forEach((key)=>{
            //       console.log(obj[key]);
            //       //check if user have any user in their reserve
            //       console.log(obj[key].pendingUsers);
            //       if (obj[key].pendingUsers !== undefined) {
            //         this.fullReserves.push(obj[key])
            //       } else {
            //         //there is people in the drivers' reserve
            //         console.log("funciono");
            //       }
            //     })
            //     }
            //   }).then(()=>{
            //     //este if sirve para saber si si hay reservas y no crashear la app al desconectarse
            //     if(this.driverReserves === null || this.driverReserves === undefined){
            //       this.showConectedButton = true;
            //       this.changeColorOffline();
            //       this.instancesService.ToggleStatusOffline(this.SignUpService.userPlace, this.user);
            //       this.enable();
            //       // this.autocompleteMyDest.input = '';
            //     }else{
            //       if( this.fullReserves.length === 0 ||  this.fullReserves.length === undefined ){
            //         this.showConectedButton = true;
            //       this.changeColorOffline();
            //       // this.autocompleteMyDest.input = '';
            //       this.afDB.database.ref(this.SignUpService.userPlace + '/reserves/' + this.user).once('value').then(snap => {
            //         console.log(snap.val()); 
            //         let obj = snap.val();
            //         Object.getOwnPropertyNames(obj).forEach(key => {
            //           console.log(obj[key]);
            //           if(obj[key].type === 'origin'){
            //                 this.geofireService.deleteUserGeofireOr(this.SignUpService.userPlace, key);
            //           }else if(obj[key].type === 'destination'){
            //                 this.geofireService.deleteUserGeofireDest(this.SignUpService.userPlace, key);
            //               }             
            //         })
            //       }).then(()=>{
            //         this.TripsService.deleteAllReserves(this.SignUpService.userPlace, this.user);
            //       })
            //       this.instancesService.ToggleStatusOffline(this.SignUpService.userPlace, this.user);
            //       this.enable();
            //       // this.autocompleteMyDest.input = '';
            //       }else{
            //         this.alertOffline();
            //       }
            //     }
            //   })
        }
    };
    DriverSchedulePage.prototype.goFindride = function () {
        this.instances.scheduleTypeManual(this.userId);
    };
    DriverSchedulePage.prototype.createRoute = function () {
        this.navCtrl.push('DriverSpecifyRoutePage');
    };
    DriverSchedulePage.prototype.ionViewDidLeave = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    DriverSchedulePage.prototype.presentAlert = function (title, text, button) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: [button]
        });
        alert.present();
    };
    DriverSchedulePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'driver-page-schedule',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/waypool_costumer/src/pages/schedule/driverschedule.html"*/'<!--\n  Generated template for the SchedulePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="bg-theme-driver">\n    <ion-navbar>\n        <ion-title class="text-center">MI HORARIO</ion-title>\n    </ion-navbar>\n    <div padding-left padding-right>\n        <ion-segment [(ngModel)]="schedule">\n            <ion-segment-button value=makeYourOwn>\n                Arma tu horario\n            </ion-segment-button>\n            <ion-segment-button value="picture">\n                Foto de mi horario\n            </ion-segment-button>\n        </ion-segment>\n    </div>\n</ion-header>\n\n\n<ion-content class="bg-light">\n    <div [ngSwitch]="schedule">\n      <div *ngSwitchCase="\'makeYourOwn\'">\n\n        <p text-center padding-top margin-top>Cóloca tu ruta diaria para publicar tus viajes automáticamente</p>\n        <ion-row class="center-align row" style="margin-left: 16px; justify-content: center; height: 40px;" >\n                    \n            <button  #buttonDisconected class="btn bg-theme rounded text-white buttonConnected"   *ngIf="!showConectedButton" (click)="conectDriver()" >\n              <ion-icon  name="calendar"></ion-icon>\n                 PUBLICAR HORARIO\n\n            </button>\n            <button #buttonConected  class="btn bg-theme text-white buttonDisconnected" (click)="disconectDriver()" style="border-radius: 25px;border-color: green;height: 40px; border-color: green;" *ngIf="showConectedButton" >\n              <ion-icon  name="calendar"></ion-icon>\n\n              HORARIO PUBLICADO </button>\n          \n          \n      </ion-row>\n        <ion-card class="search" >\n            <ion-card-content>\n  \n                <span class="dot bg-theme-driver"></span>\n                <ion-searchbar required [(ngModel)]="houseAddress.input" placeholder="Coloca dirección de tu casa"   (click)="createRoute()"></ion-searchbar>\n  \n              \n                  <!-- <ion-icon name="md-locate" (click)="getPositionAndMarker()" class="text-black"></ion-icon> -->\n            </ion-card-content>\n  \n            <ion-card-content>\n  \n                <span class="dot bg-yellow"></span>           \n               <ion-searchbar  required [(ngModel)]="workAddress.input"  id="input2" (click)="createRoute()" placeholder="Coloca dirección de tu trabajo"></ion-searchbar>\n              \n             </ion-card-content>\n             \n        </ion-card>\n        <p text-center padding-top margin-top>Agrega cada una de las horas en las que vas de tu casa al trabajo/universidad o viceversa</p>\n        <div style="display: flex; justify-content: center;">\n            <button class="btn text-white bg-theme-driver rounded" style="width: 40%;" (click)=\'makeSchedule()\' (click)="goFindride()">Agregar</button>\n        </div>\n            <ion-card *ngFor = "let sche of schedules" (click) = \'removeTime(sche)\' style="border-radius: 5%;" >\n                    <ng-container>\n                        <ion-card-content style="display: flex; ">\n                            <img [src]="sche.image"  style="height:50px; width:150px;     margin-right: 20px;" />\n                            <p>Destino: {{ sche.description }} <br> Hora: <span style="color:#3fb1df;">{{ sche.hour}}</span></p>\n\n                                                                       \n                            \n                        </ion-card-content>\n                    </ng-container>\n                </ion-card>\n\n      </div>\n\n\n      <div *ngSwitchCase="\'picture\'">\n            <p text-center padding-top margin-top>Toma un screenshot o una foto de tu <span style="color:#3fb1df;">HORARIO</span>, mándanoslo y haremos el resto por ti</p>\n        \n            <div text-center class="verifiy">\n                <img src="assets/imgs/v1.png">\n            </div>\n            <ion-row>\n                <ion-col>\n                    <p padding-top class="btn-box"><button class="btn text-white bg-theme-driver rounded" style="width: 80%;" (click)="usageCameraSchedule()">Tomar Foto de horario</button></p>\n                </ion-col>\n\n                <ion-col>\n                        <p padding-top class="btn-box"><button class="btn text-white bg-theme-driver rounded" style="width: 80%;" (click)="accessLibrary()">Subir Foto de galería</button></p>\n                    </ion-col>\n            </ion-row>\n            <br>\n            <br>\n            <br>\n            <ion-row>\n                \n                    <p padding-top class="skipText"  (click)="skipSchedule()"> No lo quiero hacer ahora </p>\n               \n            </ion-row>\n      </div>\n      \n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/waypool_costumer/src/pages/schedule/driverschedule.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_d_signup_service__["a" /* DriverSignUpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_d_signup_service__["a" /* DriverSignUpService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__services_d_instances_services__["a" /* DriverInstancesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_d_instances_services__["a" /* DriverInstancesService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__services_d_signup_service__["a" /* DriverSignUpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_d_signup_service__["a" /* DriverSignUpService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["AngularFireAuth"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["AngularFireAuth"]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_6__services_d_instances_services__["a" /* DriverInstancesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_d_instances_services__["a" /* DriverInstancesService */]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__["AngularFireDatabase"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__["AngularFireDatabase"]) === "function" && _o || Object])
    ], DriverSchedulePage);
    return DriverSchedulePage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
}());

//# sourceMappingURL=schedule.js.map

/***/ })

});
//# sourceMappingURL=18.js.map