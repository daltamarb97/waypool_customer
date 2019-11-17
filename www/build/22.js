webpackJsonp([22],{

/***/ 634:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChattingPageModule", function() { return ChattingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chatting__ = __webpack_require__(788);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChattingPageModule = /** @class */ (function () {
    function ChattingPageModule() {
    }
    ChattingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__chatting__["a" /* ChattingPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__chatting__["a" /* ChattingPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__chatting__["a" /* ChattingPage */]
            ]
        })
    ], ChattingPageModule);
    return ChattingPageModule;
}());

//# sourceMappingURL=chatting.module.js.map

/***/ }),

/***/ 788:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChattingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_chat_service__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_signup_services__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_sendFeedback_service__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ChattingPage = /** @class */ (function () {
    function ChattingPage(navCtrl, sendFeedbackService, toastCtrl, SignUpService, alertCtrl, actionSheetCtrl, chatsService, navParams, AngularFireAuth) {
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
        this.SignUpService.getMyInfoForProfile(this.SignUpService.userPlace, this.userUid).takeUntil(this.unsubscribe).subscribe(function (info) {
            _this.user = info;
            console.log(_this.user);
        });
        if (this.isTrip === true) {
            this.getChatFromTrip();
        }
        else {
            this.getChatFromReserve();
        }
    }
    ChattingPage.prototype.getChatFromTrip = function () {
        var _this = this;
        this.chatsService.getChatsFromTrip(this.SignUpService.userPlace, this.reserve.keyTrip, this.reserve.driver.userId)
            .takeUntil(this.unsubscribe).subscribe(function (chat) {
            _this.chats = chat;
            console.log(_this.chats);
            _this.scrollToBottom();
        });
    };
    ChattingPage.prototype.getChatFromReserve = function () {
        var _this = this;
        this.chatsService.getChatsFromReserve(this.SignUpService.userPlace, this.reserve.keyTrip, this.reserve.driver.userId)
            .takeUntil(this.unsubscribe).subscribe(function (chat) {
            _this.chats = chat;
            console.log(_this.chats);
            _this.scrollToBottom();
        });
    };
    ChattingPage.prototype.scrollToBottom = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.content.scrollToBottom) {
                _this.content.scrollToBottom();
            }
        }, 400);
    };
    ChattingPage.prototype.ionViewDidLeave = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    ChattingPage.prototype.more = function () {
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
    ChattingPage.prototype.reportChat = function () {
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
                        _this.sendFeedbackService.sendFeedback(_this.SignUpService.userPlace, 'Reporte_de_chat', _this.chats, _this.user.name, _this.user.lastname, _this.user.phone, _this.userUid);
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
    ChattingPage.prototype.sendMessage = function () {
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
    ChattingPage.prototype.sendMessageForTrip = function () {
        console.log(this.isTrip);
        this.chatsService.pushMessageUserInTrip(this.SignUpService.userPlace, this.reserve.keyTrip, this.reserve.driver.userId, this.userUid, this.message, this.user.name);
        this.message = '';
        this.scrollToBottom();
    };
    ChattingPage.prototype.sendMessageForReserve = function () {
        this.chatsService.pushMessageUserInReserve(this.SignUpService.userPlace, this.reserve.keyTrip, this.reserve.driver.userId, this.userUid, this.message, this.user.name);
        this.message = '';
        this.scrollToBottom();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */])
    ], ChattingPage.prototype, "content", void 0);
    ChattingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chatting',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/WAYPOOL_OFICIAL/waypool_costumer/src/pages/chatting/chatting.html"*/'<ion-header class="bg-theme">\n    <ion-navbar>\n        <ion-item>\n            <ion-icon name="arrow-back" style="font-size: 33px"  class="text-white" end-item navPop></ion-icon>\n            <ion-title class="text-white">CHAT GRUPAL</ion-title>\n            <ion-icon name="more" (click)="more()" end-item item-end class="text-white"></ion-icon>\n\n        </ion-item>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding class="chat-bg">\n    <div class="chatbox"*ngFor="let chat of chats">\n            <div  class="cb" >        \n                    <div>                        \n                         <div *ngIf="userUid === chat.uid" class="chat chat-left bg-theme text-white"  text-left padding float-right style="max-width: 70%;text-align: left">\n                            <!-- its driver message -->\n                             <p>{{chat.message}}</p>       \n                       </div>                       \n                   </div>                    \n                </div>\n                <div class="cb">            \n                    <div>   \n                        <div *ngIf="chat.uid === this.reserve.driver.userId; else isOtherPerson" class="chat chat-right bg-white text-dark"style="max-width: 70%" text-left padding float-left>  \n                         <!-- its user message --> \n                             <h6 class="driverText" style="display: flex" ><ion-icon name="car" style="margin-right: 4px;color:#0081ad "></ion-icon> {{chat.name}}</h6>                         \n                             <p>{{chat.message}}</p>                            \n                         </div>\n                         <ng-template #isOtherPerson >\n                            <div *ngIf="chat.uid !== userUid" class="chat chat-right bg-white text-dark" style="max-width: 70%;text-align: left" text-right padding float-left>  \n                                <!-- its user message --> \n                                    <h6 class="driverText" style="display: flex; color:#4BB543;">{{chat.name | titlecase}}</h6>                         \n                                    <p>{{chat.message}}</p>                            \n                                </div>\n                        </ng-template>\n                    </div>                  \n                </div>\n               \n    </div>\n   \n   \n</ion-content>\n<ion-footer class="fixed-bottom">\n        \n                <ion-list inset>\n                    <ion-item>\n                        <ion-input type="text" placeholder="Escribe tu mensaje" [(ngModel)]="message" autofocus (keyup.enter)="sendMessage()"></ion-input>\n                  \n                       <button class="text-theme" item-right (click)="sendMessage()"> <ion-icon name="md-send" ></ion-icon></button>\n                    </ion-item>\n                </ion-list>\n            \n      \n  \n</ion-footer> '/*ion-inline-end:"/Users/juandavidjaramillo/Documents/WAYPOOL_OFICIAL/waypool_costumer/src/pages/chatting/chatting.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__services_sendFeedback_service__["a" /* sendFeedbackService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4__services_signup_services__["a" /* SignUpService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_3__services_chat_service__["a" /* chatsService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"]])
    ], ChattingPage);
    return ChattingPage;
}());

//# sourceMappingURL=chatting.js.map

/***/ })

});
//# sourceMappingURL=22.js.map