webpackJsonp([0],{

/***/ 113:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 155:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 155;

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cards_cards__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginPage = (function () {
    function LoginPage(navCtrl, restProvider) {
        //	this.companies = [
        //    {code: "FOX"} , 
        //    {code: "ELEC"} , 
        //    {code: "ELAL"}
        //  ]
        this.navCtrl = navCtrl;
        this.restProvider = restProvider;
        this.user = {};
        this.initializeItems();
    }
    LoginPage.prototype.onItemClicked = function (idx) {
        console.log("index is:" + idx);
    };
    LoginPage.prototype.initializeItems = function () {
        this.companies = [
            "FOX",
            "ELEC",
            "ELAL"
        ];
    };
    LoginPage.prototype.login = function (loginUser) {
        var _this = this;
        this.user = loginUser;
        console.log("loginUser is user:" + loginUser.user + " password: " + loginUser.password);
        this.restProvider.login(loginUser.user, loginUser.password)
            .then(function (data) {
            _this.token = data;
            console.log('response: ' + data);
        });
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__cards_cards__["a" /* CardsPage */], { token: this.token });
    };
    LoginPage.prototype.onInput = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.companies = this.companies.filter(function (company) {
                return (company.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/yshmulev/clubbook/clubbook-mobile-app/clubook-mobile/src/pages/login/login.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>התחבר</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n\n  <h3>Ionic Menu Starter</h3>\n\n\n  <button ion-button secondary menuToggle>פתח תפריט</button>\n<ion-content padding>\n\n\n  <ion-searchbar\n  [showCancelButton]="shouldShowCancel"\n  (ionInput)="onInput($event)"\n  (ionCancel)="onCancel($event)">\n</ion-searchbar>\n  <ion-list >\n    <ion-item *ngFor=" let company of companies; let idx = index " [class.selected]="idx === currentSelected" (click)="onItemClicked(idx)">\n      {{ company }}\n    </ion-item>\n  </ion-list>\n\n  <ion-item>\n    <ion-label floating>משתמש</ion-label>\n    <ion-input type="text" [(ngModel)]="user.user"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>סיסמה</ion-label>\n    <ion-input type="password" [(ngModel)]="user.password"></ion-input>\n  </ion-item>\n\n  <button ion-button (click)="login(user)">Login</button>\n  \n  </ion-content>\n'/*ion-inline-end:"/Users/yshmulev/clubbook/clubbook-mobile-app/clubook-mobile/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CardsPage = (function () {
    function CardsPage(navCtrl, navParams, restProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restProvider = restProvider;
        this.token = navParams.get("token");
        this.getBenefits();
        /*this.benefits = [{"_id":"5a6de9df6307964094a780ac","title":"רשת חנויות שקם אלקטריק","description":"5% הנחה","category":"מוצרי חשמל","link":"http://www.mcc.co.il/st_new_stores.html#6","__v":0,"club":{"name":"חבר","implementMethod":"אשראי","id":"5a6dd24fafb6271d40ead731"},"location":{"place_id":"ChIJ6z0wKJ23AhURdQ5gh9OwY5Q","description":"שקם אלקטריק - סניף ביל\"ו, קרית עקרון, ישראל"}},{"_id":"5a6de9df6307964094a780ad","title":"רשת חנויות שקם אלקטריק","description":"5% הנחה","category":"מוצרי חשמל","link":"www.multi.azrieli.com/%D7%9E%D7%95%D7%A6%D7%A8-298-%D7%A9%D7%A7%D7%9D-%D7%90%D7%9C%D7%A7%D7%98%D7%A8%D7%99%D7%A7.aspx","__v":0,"club":{"name":"מולטי עזריאלי","implementMethod":"אשראי","id":"5a6dd24fafb6271d40ead730"},"location":{"place_id":"ChIJ6z0wKJ23AhURdQ5gh9OwY5Q","description":"שקם אלקטריק - סניף ביל\"ו, קרית עקרון, ישראל"}},{"_id":"5a6de9df6307964094a780ae","title":"רשת חנויות שקם אלקטריק","description":"3% הנחה","category":"מוצרי חשמל","link":"http://db.hot.co.il/asp/results.asp?keywords=%F9%F7%ED&cityl=0&catel=0","__v":0,"club":{"name":"הוט","implementMethod":"מועדון","id":"5a6dd91b734d1d63031971f8"},"location":{"place_id":"ChIJ6z0wKJ23AhURdQ5gh9OwY5Q","description":"שקם אלקטריק - סניף ביל\"ו, קרית עקרון, ישראל"}}]; */
        /* this.cards=[{"_id":"5a6dd24fafb6271d40ead72c","implementMethod":"אשראי","provider":"לאומי קארד","name":"executive","image":"images/leumi-card.png","bg":"images/executive.png","__v":0},{"_id":"5a6dd24fafb6271d40ead72b","implementMethod":"אשראי","provider":"לאומי קארד","name":"לאומי קארד","image":"images/leumi-card.png","bg":"images/leumi_card.png","__v":0},{"_id":"5a6dd24fafb6271d40ead72d","implementMethod":"אשראי","provider":"Diners","name":"You","image":"images/dinners_you.jpg","bg":"images/you-bg.png","__v":0},{"_id":"5a6dd24fafb6271d40ead72e","implementMethod":"מועדון","provider":"You","name":"You","image":"images/you_club.png","__v":0},{"_id":"5a6dd24fafb6271d40ead72f","implementMethod":"מועדון","provider":"","name":"Dream Card","image":"images/dream-card.png","bg":"images/dream-card.png","__v":0},{"_id":"5a6dd24fafb6271d40ead730","implementMethod":"אשראי","provider":"","name":"מולטי עזריאלי","image":"images/leumi-card.png","bg":"images/multi_azrieli.png","__v":0},{"_id":"5a6dd24fafb6271d40ead731","implementMethod":"אשראי","provider":"","name":"חבר","image":"images/hever_logo.png","bg":"images/hever.png","__v":0},{"_id":"5a6dd24fafb6271d40ead732","implementMethod":"אשראי","provider":"ויזה","name":"כאל","image":"images/cal_logo.png","bg":"images/cal_logo.png","__v":0},{"_id":"5a6dd24fafb6271d40ead734","implementMethod":"מועדון","provider":"","name":"iStudent","image":"images/istudent.png","bg":"images/istudent.png","__v":0},{"_id":"5a6dd24fafb6271d40ead736","implementMethod":"אשראי","provider":"visa","name":"מפתח דיסקונט","image":"images/discont.png","bg":"images/discont.png","__v":0},{"_id":"5a6dd24fafb6271d40ead735","implementMethod":"מועדון","provider":"","name":"עדיף","image":"images/adif.png","bg":"images/adif.png","__v":0},{"_id":"5a6dd24fafb6271d40ead733","implementMethod":"מועדון","provider":"","name":"יותר","image":"images/Yoter.png","bg":"images/Yoter.png","__v":0},{"_id":"5a6dd91b734d1d63031971f8","implementMethod":"מועדון","provider":"","name":"הוט","image":"images/hot_logo.png","bg":"images/hot.png"},{"_id":"5a6ddbd2734d1d63031972e5","implementMethod":"אשראי","provider":"Diners","name":"Fly Card","image":"images/fly_card_logo.png","bg":"images/fly_card.png"}]; */
    }
    CardsPage.prototype.chooseCard = function () {
        alert("chooseCard");
    };
    CardsPage.prototype.getBenefits = function () {
        var _this = this;
        this.restProvider.getBenefits(this.token)
            .then(function (data) {
            _this.benefits = data;
            console.log('benefits: ' + _this.benefits);
        });
    };
    CardsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cards',template:/*ion-inline-start:"/Users/yshmulev/clubbook/clubbook-mobile-app/clubook-mobile/src/pages/cards/cards.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>כרטיסים</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n\n  <h3>Ionic Menu Starter</h3>\n\n\n  <button ion-button secondary menuToggle>פתח תפריט</button>\n<ion-content>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col col-4>\n        <ion-grid>\n          <ion-row>\n\n            <img class="card-image" src="assets/imgs/logo-small.png"/>\n\n\n          </ion-row>\n\n          <ion-row>\n\n             <div class="card-roling" >\n               \n                <div *ngFor="let benefit of benefits">\n                  <h3>This stuff should scroll.</h3>\n                </div>\n             </div>\n\n          </ion-row>\n        </ion-grid>\n      </ion-col> \n\n      <ion-col col-8>\n        <!--  header righ side-->\n        <ion-grid>\n          <ion-row>\n             <ion-col>\n                <h1> ברוכים הבאים לרשת פוקס</h1>\n             </ion-col>\n             <ion-col col-3><!-- place holder-->\n             </ion-col>\n             <ion-col col-3>\n              <img  src="assets/imgs/fox.png"/>\n             </ion-col>\n             \n          </ion-row>\n          <ion-row>\n             <h3> ברוכים הבאים לרשת פוקס</h3>\n          </ion-row>\n        </ion-grid>\n        <!-- cards -->\n        <ion-grid>\n          <ion-row>\n\n            <ion-col col-6 *ngFor="let benefit of benefits">\n\n              <div style="text-align: center; padding: 1px; background-color: #eee">\n                  <ion-card (click)="chooseCard()">\n                  <!-- img src="assets/imgs/leumi-card.jpeg"/ -->\n                  <img class="card-image" src="assets/imgs/logo-small.png"/>\n\n                  <div class="card-title">{{benefit.club.name}}</div>\n                  <!-- div class="card-subtitle">{{benefit.description}}</div -->\n                   </ion-card>\n              </div>\n\n            </ion-col> \n\n          </ion-row>\n        </ion-grid>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/yshmulev/clubbook/clubbook-mobile-app/clubook-mobile/src/pages/cards/cards.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */]])
    ], CardsPage);
    return CardsPage;
}());

//# sourceMappingURL=cards.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(223);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_cards_cards__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_rest_rest__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_cards_cards__["a" /* CardsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_cards_cards__["a" /* CardsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__providers_rest_rest__["a" /* RestProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Login', component: __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */] },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/yshmulev/clubbook/clubbook-mobile-app/clubook-mobile/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/yshmulev/clubbook/clubbook-mobile-app/clubook-mobile/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/yshmulev/clubbook/clubbook-mobile-app/clubook-mobile/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>הטבות</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n\n  <h3>Ionic Menu Starter</h3>\n\n\n  <button ion-button secondary menuToggle>פתח תפריט</button>\n<ion-content padding>\n\n  <ion-card (click)="chooseCard()">\n\n    <img src="assets/imgs/fox.png"/>\n\n    <ion-card-content>\n      <ion-card-title>\n        פוקס\n      </ion-card-title>\n      <p>\n        מותג האופנה הגדול בישראל\n      </p>\n    </ion-card-content>\n\n  </ion-card>\n  </ion-content>\n'/*ion-inline-end:"/Users/yshmulev/clubbook/clubbook-mobile-app/clubook-mobile/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/Users/yshmulev/clubbook/clubbook-mobile-app/clubook-mobile/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/yshmulev/clubbook/clubbook-mobile-app/clubook-mobile/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RestProvider = (function () {
    function RestProvider(http) {
        this.http = http;
        //apiUrl = 'https://fathomless-thicket-58677.herokuapp.com/api/benefits?token=';
        //loginUrl = 'https://fathomless-thicket-58677.herokuapp.com/api/login';
        this.apiUrl = 'http://localhost:8100/api/benefits?token=';
        this.loginUrl = 'http://localhost:8100/api/login';
        console.log('Hello RestServiceProvider Provider');
    }
    RestProvider.prototype.getBenefits = function (token) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
        headers.append('Accept', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Headers', '*');
        return new Promise(function (resolve) {
            console.log('Hello call rest: ' + _this.apiUrl + token);
            _this.http.get(_this.apiUrl + token, { headers: headers })
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestProvider.prototype.login = function (username, password) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
        headers.append('Accept', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Headers', '*');
        headers.append('Content-Type', 'x-www-form-urlencoded');
        var data = {
            'Action': 'Login',
            'username': username,
            'password': password
        };
        return new Promise(function (resolve) {
            console.log('login call rest post: ' + _this.loginUrl);
            _this.http.post(_this.loginUrl, data, { headers: headers })
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], RestProvider);
    return RestProvider;
}());

//# sourceMappingURL=rest.js.map

/***/ })

},[201]);
//# sourceMappingURL=main.js.map