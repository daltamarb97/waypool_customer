webpackJsonp([15],{

/***/ 586:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChattingPageModule", function() { return ChattingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chatting__ = __webpack_require__(604);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__chatting__["a" /* ChattingPage */]),
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

/***/ 604:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChattingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_chat_service__ = __webpack_require__(335);
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
    function ChattingPage(navCtrl, chatsService, navParams, AngularFireAuth) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.chatsService = chatsService;
        this.navParams = navParams;
        this.AngularFireAuth = AngularFireAuth;
        this.userUid = this.AngularFireAuth.auth.currentUser.uid;
        this.chats = [];
        this.driver = this.navParams.get('driver');
        this.chatsService.getChats(this.driver.userId, this.userUid)
            .subscribe(function (chat) {
            _this.chats = chat;
            console.log(_this.chats);
        });
    }
    ChattingPage.prototype.sendMessage = function () {
        this.chatsService.pushMessageUser(this.driver.userId, this.userUid, this.message);
    };
    ChattingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chatting',template:/*ion-inline-start:"C:\waypool\waypool_costumer\src\pages\chatting\chatting.html"*/'<ion-header class="bg-theme">\n\n    <ion-navbar>\n\n        <ion-item>\n\n            <ion-avatar item-start>\n\n                <img src="assets/imgs/face-1.jpg">\n\n            </ion-avatar>\n\n            <h2><span class="text-white">{{driver.name |titlecase}} {{driver.lastname | slice:0:1 | titlecase}}</span>\n\n                <ion-icon name="md-more" end-item item-end class="text-white"></ion-icon>\n\n            </h2>\n\n        </ion-item>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="chat-bg">\n\n    <div *ngFor="let chat of chats">\n\n            <div  class="cb" >        \n\n                    <div>                        \n\n                         <div *ngIf="userUid === chat.uid" class="chat chat-left bg-theme text-white" text-left padding float-right>\n\n                            <!-- its driver message -->\n\n                             <p>{{chat.message}}</p>       \n\n                       </div>                       \n\n                   </div>                    \n\n                </div>\n\n                <div class="cb">            \n\n                    <div>   \n\n                        <div *ngIf="chat.uid === driver.userId" class="chat chat-right bg-white text-dark" text-right padding float-left>  \n\n                         <!-- its user message -->                          \n\n                             <p>{{chat.message}}</p>                            \n\n                         </div>\n\n                    </div>                  \n\n                </div>\n\n    </div>\n\n    \n\n    <div class="fixed-bottom">\n\n        <ion-list inset>\n\n            <ion-item>\n\n                <ion-icon name="md-add" class="circle-icon" item-start></ion-icon>\n\n                <ion-input type="text" placeholder="Escribe tu mensaje" [(ngModel)]="message"></ion-input>\n\n                <ion-icon name="md-send" class="text-theme" item-end (click)="sendMessage()"></ion-icon>\n\n            </ion-item>\n\n        </ion-list>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\waypool\waypool_costumer\src\pages\chatting\chatting.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__services_chat_service__["a" /* chatsService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"]])
    ], ChattingPage);
    return ChattingPage;
}());

//# sourceMappingURL=chatting.js.map

/***/ })

});
//# sourceMappingURL=15.js.map