webpackJsonp([59],{

/***/ 692:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverChattingPageModule", function() { return DriverChattingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__driverChatting__ = __webpack_require__(889);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DriverChattingPageModule = /** @class */ (function () {
    function DriverChattingPageModule() {
    }
    DriverChattingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__driverChatting__["a" /* DriverChattingPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__driverChatting__["a" /* DriverChattingPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__driverChatting__["a" /* DriverChattingPage */]
            ]
        })
    ], DriverChattingPageModule);
    return DriverChattingPageModule;
}());

//# sourceMappingURL=driverChatting.module.js.map

/***/ }),

/***/ 889:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverChattingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_d_chat_service__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_d_signup_service__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_d_sendFeedback_service__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DriverChattingPage = /** @class */ (function () {
    function DriverChattingPage(navCtrl, sendFeedbackService, toastCtrl, SignUpService, alertCtrl, actionSheetCtrl, chatsService, navParams, AngularFireAuth) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.sendFeedbackService = sendFeedbackService;
        this.toastCtrl = toastCtrl;
        this.SignUpService = SignUpService;
        this.alertCtrl = alertCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.chatsService = chatsService;
        this.navParams = navParams;
        this.AngularFireAuth = AngularFireAuth;
        this.userUid = this.AngularFireAuth.auth.currentUser.uid;
        this.chats = [];
        this.unsubscribe = new __WEBPACK_IMPORTED_MODULE_6_rxjs__["Subject"];
        this.reserve = this.navParams.get('reserve');
        this.isTrip = this.navParams.get('isTrip');
        console.log(this.reserve.driver.userId);
        this.SignUpService.getMyInfoForProfile(this.userUid).takeUntil(this.unsubscribe).subscribe(function (info) {
            _this.driver = info;
            console.log(_this.driver);
        });
        if (this.isTrip === true) {
            this.getChatFromTrip();
        }
        else {
            this.getChatFromReserve();
        }
    }
    DriverChattingPage.prototype.getChatFromTrip = function () {
        var _this = this;
        this.chatsService.getChatsFromTrip(this.reserve.keyTrip, this.reserve.driver.userId)
            .takeUntil(this.unsubscribe).subscribe(function (chat) {
            _this.chats = chat;
            console.log(_this.chats);
            _this.scrollToBottom();
        });
    };
    DriverChattingPage.prototype.getChatFromReserve = function () {
        var _this = this;
        this.chatsService.getChatsFromReserve(this.reserve.keyTrip, this.reserve.driver.userId)
            .takeUntil(this.unsubscribe).subscribe(function (chat) {
            _this.chats = chat;
            console.log(_this.chats);
            _this.scrollToBottom();
        });
    };
    DriverChattingPage.prototype.scrollToBottom = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.content.scrollToBottom) {
                _this.content.scrollToBottom();
            }
        }, 400);
    };
    DriverChattingPage.prototype.more = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Opciones',
            buttons: [
                {
                    text: 'Reportar Chat',
                    role: 'destructive',
                    handler: function () {
                        _this.reportChat();
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
    DriverChattingPage.prototype.ionViewDidLeave = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    DriverChattingPage.prototype.reportChat = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Reportar',
            message: 'Reportar este chat es completamente anónimo a tus compañeros y lo revisaremos de inmediato.',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Reportar',
                    handler: function () {
                        _this.sendFeedbackService.sendFeedback('Reporte_de_chat', _this.chats, _this.driver.name, _this.driver.lastname, _this.driver.phone, _this.userUid);
                        var toast = _this.toastCtrl.create({
                            message: 'Haz reportado este chat',
                            showCloseButton: true,
                            closeButtonText: 'OK',
                            position: 'top'
                        });
                        toast.present();
                    }
                }
            ]
        });
        alert.present();
    };
    DriverChattingPage.prototype.sendMessage = function () {
        if (this.message === undefined || this.message === null) {
            var toast = this.toastCtrl.create({
                message: 'No puedes enviar un mensaje vacío',
                showCloseButton: true,
                closeButtonText: 'OK',
                position: 'top'
            });
            toast.present();
        }
        else {
            if (this.isTrip === true) {
                this.sendMessageForTrip();
            }
            else {
                this.sendMessageForReserve();
            }
        }
    };
    DriverChattingPage.prototype.sendMessageForTrip = function () {
        console.log(this.isTrip);
        this.chatsService.pushMessageUserInTrip(this.reserve.keyTrip, this.reserve.driver.userId, this.userUid, this.message, this.driver.name);
        this.message = '';
        this.scrollToBottom();
    };
    DriverChattingPage.prototype.sendMessageForReserve = function () {
        this.chatsService.pushMessageUserInReserve(this.reserve.keyTrip, this.reserve.driver.userId, this.userUid, this.message, this.driver.name);
        this.message = '';
        this.scrollToBottom();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */])
    ], DriverChattingPage.prototype, "content", void 0);
    DriverChattingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'driver-page-chatting',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/waypool_costumer/src/pages/chatting/driverChatting.html"*/'<ion-header class="bg-theme-driver">\n    <ion-navbar >\n        <ion-item style="display: flex !important;">                \n            <ion-icon name="arrow-back" style="font-size: 33px"  class="text-white" end-item navPop></ion-icon>\n            <ion-title class="text-white">CHAT GRUPAL</ion-title>\n            <ion-icon name="more" (click)="more()" end-item item-end class="text-white"></ion-icon>\n\n\n        </ion-item>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding class="chat-bg">\n    <div class="chatbox"*ngFor="let chat of chats">\n            <div  class="cb" >        \n                    <div>                        \n                         <div *ngIf="userUid === chat.uid" class="chat chat-left bg-theme-driver text-white"  text-left padding float-right style="max-width: 70%;text-align: left">\n                            <!-- its driver message -->\n                             <p>{{chat.message}}</p>       \n                       </div>                       \n                   </div>                    \n                </div>\n                <div class="cb">            \n                    <div>  \n                            <div *ngIf="chat.uid !== userUid" class="chat chat-right bg-white text-dark" style="max-width: 70%;text-align: left" text-right padding float-left>  \n                                <!-- its user message --> \n                                    <h6 class="driverText" style="display: flex; color:#4BB543;">{{chat.name | titlecase}}</h6>                         \n                                    <p>{{chat.message}}</p>                            \n                                </div>                \n                    </div>                  \n                </div>\n               \n    </div>\n   \n   \n</ion-content>\n<ion-footer class="fixed-bottom">\n        \n                <ion-list inset>\n                    <ion-item>\n                        <ion-input type="text" placeholder="Escribe tu mensaje" [(ngModel)]="message" autofocus (keyup.enter)="sendMessage()"></ion-input>\n                  \n                       <button class="text-theme-driver" item-right (click)="sendMessage()"> <ion-icon name="md-send" ></ion-icon></button>\n                    </ion-item>\n                </ion-list>\n            \n      \n  \n</ion-footer> '/*ion-inline-end:"/Users/juandavidjaramillo/Documents/waypool_costumer/src/pages/chatting/driverChatting.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__services_d_sendFeedback_service__["a" /* DriverSendFeedbackService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4__services_d_signup_service__["a" /* DriverSignUpService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_3__services_d_chat_service__["a" /* DriverChatsService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"]])
    ], DriverChattingPage);
    return DriverChattingPage;
}());

//# sourceMappingURL=driverChatting.js.map

/***/ })

});
//# sourceMappingURL=59.js.map