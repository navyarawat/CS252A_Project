webpackJsonp([1],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Page1Page = /** @class */ (function () {
    function Page1Page(platform, navCtrl, navParams) {
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.latr = 0;
        this.langr = 0;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], Page1Page.prototype, "mapElement", void 0);
    Page1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-page1',template:/*ion-inline-start:"/home/navya/Desktop/CS252A_Project/src/pages/page1/page1.html"*/'<ion-header>\n  <ion-navbar >\n    <ion-title text-center style="font-family: \'Montserrat\', sans-serif; font-family: \'Roboto Slab\', serif;">\n      Bhagavad Gita to the Rescue\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <h1> FAV SLOKAS</h1>\n</ion-content>\n\n<!-- <ion-footer>\n  <ion-toolbar>\n    <ion-title style="font-family: \'Montserrat\', sans-serif; font-family: \'Roboto Slab\', serif;">\n      Go back\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="goBack()" icon-end color="royal">\n        View!\n        <ion-icon name="arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer> -->\n'/*ion-inline-end:"/home/navya/Desktop/CS252A_Project/src/pages/page1/page1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], Page1Page);
    return Page1Page;
}());

//# sourceMappingURL=page1.js.map

/***/ }),

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

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/page1/page1.module": [
		280,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 154;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__page1_page1__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_bg_service_bg_service__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = /** @class */ (function () {
    // public query: any;
    function HomePage(bgService, formBuilder, platform, navCtrl) {
        this.bgService = bgService;
        this.formBuilder = formBuilder;
        this.platform = platform;
        this.navCtrl = navCtrl;
        // this.verses = "Wait for it"
        //        this.loaderCtrl = false ;
    }
    HomePage.prototype.showVerses = function () {
        var _this = this;
        // document.getElementById("loader").style.display = 'block';
        //this.loaderCtrl = true ;
        this.platform.ready().then(function () {
            console.log("LOG1");
            // console.log("qry : ", this.query);
            // this.query = "";
            // this.bgService.load(this.query).then(data =>{
            //   console.log("LOG2");
            //   this.verses = JSON.parse(data);
            //   console.log(data);
            // });
            var qdata = { "shloka0": "Shining through the functions of all the organs, (yet) devoid of all the organs; unattached, and verily the supporter of all; without quality, and the perceiver of qualities;", "shloka1": "O son of Prtha, by meditating with a mind which is engaged in the yoga of practice and which does not stray away to anything else, one reaches the supreme Person existing in the effulgent region.", "shloka2": "On the other hand, know tamas, which deludes all embodied beings, to be born of ignorance. O scion of the Bharata dynasty, that binds through inadvertence, laziness and sleep.", "shloka3": "The Blessed Lord said: O unblemished one, two kinds of steadfastness in this world were spoken of by Me in the days of yore-through the Yoga of Knowledge for the men of realization; through the Yoga of Action for the yogis.", "shloka4": "When the illumination that is knowledge radiates in this body through all the doors (of the senses), then one should know that sattva has increased greatly.", "success": 1 };
            var resp = [
                {
                    "text": qdata.shloka0,
                    "num": "Shloka - 1"
                },
                {
                    "text": qdata.shloka1,
                    "num": "Shloka - 2"
                },
                {
                    "text": qdata.shloka2,
                    "num": "Shloka - 3"
                },
                {
                    "text": qdata.shloka3,
                    "num": "Shloka - 4"
                },
                {
                    "text": qdata.shloka4,
                    "num": "Shloka - 5"
                }
            ];
            //this.loaderCtrl = false ;
            _this.verses = resp;
            // console.log(this.verses.shloka0);
        });
    };
    HomePage.prototype.openFavSlokas = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__page1_page1__["a" /* Page1Page */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* ElementRef */])
    ], HomePage.prototype, "mapElement", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/navya/Desktop/CS252A_Project/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar >\n    <ion-title text-center style="font-family: \'Montserrat\', sans-serif; font-family: \'Roboto Slab\', serif;">\n      Bhagavad Gita to the Rescue\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n\n<ion-content>\n  <br> <br>\n  <ion-img text-center width="100%" height="50%" src="../../assets/imgs/gita.jpg"></ion-img>\n  <br> <br> <br> <br> <br>\n  <form (ngSubmit)="showVerses()">\n    <ion-input width="100%" height="50%"placeholder="What do you feel?"type="text" id="long" [(ngModel)]="query" name="ques"></ion-input>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-4 >\n        </ion-col>\n          <ion-col>\n            <button text-center ion-button type="submit">Help me!</button>\n          </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n\n  <div #map id="result" style="height:80%" >\n\n    <ion-card id = "loader" *ngIf="loaderCtrl">\n        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"/>\n        <ion-card-content >\n        	<ion-card-title>\n\n        	</ion-card-title>\n        	<p text-center>\n                Loading\n        		<!-- The most popular industrial group ever, and largely responsible for bringing the music to a mass audience. -->\n        	</p>\n        </ion-card-content>\n    </ion-card>\n\n\n    <ion-card *ngFor="let verse of verses;index as i" style="border-width: 1px; border-color: #f2a241; border-style: solid;">\n      <ion-card-header  style="background-color:#f2a241; padding-top:4px; padding-bottom : 4px;font-family: \'Montserrat\', sans-serif;font-family: \'KoHo\', sans-serif;font-family: \'Slabo 27px\', serif;">\n        {{verse.num}}\n      </ion-card-header>\n      <ion-card-content style="padding-top:6px;padding-bottom : 6px;font-family: \'Montserrat\', sans-serif;font-family: \'KoHo\', sans-serif;">\n        {{verse.text}}\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-title style="font-family: \'Montserrat\', sans-serif; font-family: \'Roboto Slab\', serif;">\n      Your Favourite Slokas\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="openFavSlokas()" icon-end color="royal">\n        View!\n        <ion-icon name="arrow-forward"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/home/navya/Desktop/CS252A_Project/src/pages/home/home.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_5__providers_bg_service_bg_service__["a" /* BgServiceProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_bg_service_bg_service__["a" /* BgServiceProvider */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BgServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(200);
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
  Generated class for the BgServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var BgServiceProvider = /** @class */ (function () {
    function BgServiceProvider(http) {
        this.http = http;
        console.log('Hello BgServiceProvider Provider');
    }
    BgServiceProvider.prototype.load = function (query) {
        var _this = this;
        console.log(query);
        if (this.data) {
            // already loaded data
            return Promise.resolve(this.data);
        }
        // don't have the data yet
        return new Promise(function (resolve) {
            // We're using Angular HTTP provider to request the data,
            // then on the response, it'll map the JSON data to a parsed JS object.
            // Next, we process the data and resolve the promise with the new data.
            _this.http.get('http://35.235.122.125/api?query=' + query)
                .subscribe(function (data) {
                // we've got back the raw data, now generate the core schedule data
                // and save the data for later reference
                _this.data = JSON.stringify(data);
                resolve(_this.data);
            });
        });
    };
    BgServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], BgServiceProvider);
    return BgServiceProvider;
}());

//# sourceMappingURL=bg-service.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(222);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_page1_page1__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_google_maps__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_bg_service_bg_service__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_page1_page1__["a" /* Page1Page */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/page1/page1.module#Page1PageModule', name: 'Page1Page', segment: 'page1', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_page1_page1__["a" /* Page1Page */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_google_maps__["a" /* GoogleMaps */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__providers_bg_service_bg_service__["a" /* BgServiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/navya/Desktop/CS252A_Project/src/app/app.html"*/'<meta http-equiv="Content-Security-Policy" content="default-src *; script-src \'self\' \'unsafe-inline\' \'unsafe-eval\' *; style-src \'self\' \'unsafe-inline\' *">\n\n<ion-menu [content]="content">\n\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Pages</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/home/navya/Desktop/CS252A_Project/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[201]);
//# sourceMappingURL=main.js.map