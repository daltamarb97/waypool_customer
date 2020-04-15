webpackJsonp([37],{

/***/ 669:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembersGroupPageModule", function() { return MembersGroupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__membersgroup__ = __webpack_require__(863);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MembersGroupPageModule = /** @class */ (function () {
    function MembersGroupPageModule() {
    }
    MembersGroupPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__membersgroup__["a" /* MembersGroupPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__membersgroup__["a" /* MembersGroupPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__membersgroup__["a" /* MembersGroupPage */]
            ]
        })
    ], MembersGroupPageModule);
    return MembersGroupPageModule;
}());

//# sourceMappingURL=membersgroup.module.js.map

/***/ }),

/***/ 863:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MembersGroupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_d_signup_service__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_d_sendCoords_service__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_d_geofire_services__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_d_instances_services__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_d_trips_service__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_angularfire2_database__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { AngularFireDatabase } from 'angularfire2/database';







var MembersGroupPage = /** @class */ (function () {
    function MembersGroupPage(navCtrl, actionSheetCtrl, TripsService, SignUpService, sendCoordsService, modalCtrl, AngularFireAuth, viewCtrl, navParams, geoFireService, instances, toastCtrl, alertCtrl, app, afDB) {
        this.navCtrl = navCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.TripsService = TripsService;
        this.SignUpService = SignUpService;
        this.sendCoordsService = sendCoordsService;
        this.modalCtrl = modalCtrl;
        this.AngularFireAuth = AngularFireAuth;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.geoFireService = geoFireService;
        this.instances = instances;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.app = app;
        this.afDB = afDB;
        this.userUid = this.AngularFireAuth.auth.currentUser.uid;
        this.infoUser = {};
        this.unsubscribe = new __WEBPACK_IMPORTED_MODULE_7_rxjs__["Subject"];
        this.groups = [];
        this.members = [];
        this.members = this.navParams.get('members');
        this.crew = this.navParams.get('crew');
        console.log(this.crew);
        if (this.crew.admin.userId === this.userUid) {
            console.log('i am admin');
            this.isAdmin = true;
        }
    }
    MembersGroupPage.prototype.ionViewDidLeave = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    MembersGroupPage.prototype.showProfilePassegner = function (passenger) {
        this.app.getRootNav().push('DriverPublicProfilePage', { passenger: passenger });
        this.accepted = true;
        this.dismiss();
    };
    MembersGroupPage.prototype.cancelgroup = function () {
        // this.geoFireService.deleteUserGeofireDest(this.SignUpService.userPlace, this.groupKey);
        // this.geoFireService.deleteUserGeofireOr(this.SignUpService.userPlace, this.groupKey);
        // this.passengers.forEach(user => {
        // 	this.afDB.database.ref(this.SignUpService.userPlace + '/users/'+user.userId+'/mygroups/'+ this.groupKey).update({
        // 		cancelgroup:true
        // 	});
        // });
        // this.TripsService.cancelgroup(this.SignUpService.userPlace, this.userUid,this.groupKey);
        this.dismiss();
    };
    MembersGroupPage.prototype.presentActionSheet = function (userId, nameUser) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Opciones',
            buttons: [
                {
                    text: 'Cancelar Usuario',
                    role: 'destructive',
                    handler: function () {
                        _this.deleteUser(userId, nameUser);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    MembersGroupPage.prototype.deleteUser = function (userId, nameUser) {
        // let alert = this.alertCtrl.create({
        // 	title: 'Eliminar Usuario',
        // 	message: `¿Estas que deseas eliminar a este a ${nameUser} de tu viaje?,borrar muchos usuarios por día/semana esta en contra de nuestras políticas`,
        // 	buttons: [{
        // 			text: 'Cancelar',
        // 			role: 'cancel',
        // 			handler: () => {
        // 			}
        // 		},
        // 		{
        // 			text: 'Eliminar',
        // 			handler: () => {
        // 				this.afDB.database.ref(this.SignUpService.userPlace + '/users/'+userId+'/mygroups/'+ this.groupKey).update({
        // 					cancelgroup:true
        // 				});
        // 				this.sendCoordsService.eraseUser(this.SignUpService.userPlace, userId,this.userUid,this.groupKey );
        // 				this.dismiss();
        // 				this.presentToast(`Haz eliminado a ${nameUser} de tu viaje`, 3000, 'bottom')
        // 			}
        // 		}
        // 	]
        // });
        // alert.present();
    };
    MembersGroupPage.prototype.presentToast = function (message, duration, position) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: duration,
            position: position
        });
        toast.present();
    };
    MembersGroupPage.prototype.dismiss = function () {
        console.log('deleted on click');
        this.viewCtrl.dismiss(this.accepted);
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    MembersGroupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-membersgroup',template:/*ion-inline-start:"C:\Users\danie\Documents\waypool\prod\latest\waypool_costumer\src\pages\p-membersgroup\membersgroup.html"*/'<ion-header class="bg-theme-driver title">\n\n    <ion-navbar >\n\n        <ion-title >Tus compañeros\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content  style="background-color: rgba(255, 255, 255, 0.959);">\n\n\n\n         <ion-card *ngFor = "let member of members">\n\n               <ion-item>\n\n                   <ion-avatar item-start style="border-radius: 0%;">\n\n                    <img  style="height:70px; width: 70px;" src="assets/imgs/userPicture.png">\n\n                </ion-avatar>\n\n                   <div class="name">\n\n                       <h2>{{member.name |titlecase}} {{member.lastname | titlecase}}.\n\n                         <ion-icon  name="ios-checkmark-circle" class="text-darkblue"></ion-icon>\n\n                       </h2>\n\n\n\n                         <ion-badge class="bg-yellow" style="margin:0px 3px 13px;"> {{member.company}}</ion-badge>\n\n                    </div>\n\n                   <div class="more" item-end>\n\n                           <ion-icon name="md-more" *ngIf="isAdmin" (click)="presentActionSheet(member.userId,member.name)"></ion-icon>\n\n                   </div>\n\n               </ion-item>\n\n               <ion-card-content>\n\n                   <div class="ride-detail">\n\n                       <p><small></small>\n\n                           <span class="icon-location bg-theme-driver"></span>{{member.origin.name}}</p>\n\n                       <p><small></small>\n\n                           <span class="icon-location bg-yellow"></span>{{member.destination.name}}</p>\n\n                   </div>\n\n                   \n\n               </ion-card-content>         \n\n         \n\n\n\n           </ion-card>\n\n           <div style=" display: flex; justify-content: center;">\n\n            <button (click)="cancelReserve()" *ngIf="isAdmin" class="btn bg-theme-driver text-white rounded" > Eliminar Reserva </button>\n\n\n\n           </div>\n\n\n\n </ion-content>\n\n\n\n '/*ion-inline-end:"C:\Users\danie\Documents\waypool\prod\latest\waypool_costumer\src\pages\p-membersgroup\membersgroup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_8__services_d_trips_service__["a" /* DriverTripsService */], __WEBPACK_IMPORTED_MODULE_3__services_d_signup_service__["a" /* DriverSignUpService */], __WEBPACK_IMPORTED_MODULE_4__services_d_sendCoords_service__["a" /* DriverSendCoordsService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__services_d_geofire_services__["a" /* DriverGeofireService */], __WEBPACK_IMPORTED_MODULE_6__services_d_instances_services__["a" /* DriverInstancesService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__["AngularFireDatabase"]])
    ], MembersGroupPage);
    return MembersGroupPage;
}());

//# sourceMappingURL=membersgroup.js.map

/***/ })

});
//# sourceMappingURL=37.js.map