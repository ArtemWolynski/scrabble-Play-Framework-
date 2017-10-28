webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__component_scrabble_game_scrabble_game_component__ = __webpack_require__("../../../../../src/app/component/scrabble-game/scrabble-game.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_scrabble_game_service__ = __webpack_require__("../../../../../src/app/service/scrabble-game.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__component_scrabble_game_scrabble_game_component__["a" /* ScrabbleGameComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routes__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* HttpModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__service_scrabble_game_service__["a" /* ScrabbleGameService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export APP_ROUTES */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component_scrabble_game_scrabble_game_component__ = __webpack_require__("../../../../../src/app/component/scrabble-game/scrabble-game.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");


var APP_ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__component_scrabble_game_scrabble_game_component__["a" /* ScrabbleGameComponent */] }
];
var routing = __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ "../../../../../src/app/component/scrabble-game/scrabble-game.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\r\n  width: 100%;\r\n  min-height: 100vh;\r\n  background-color: gainsboro;\r\n}\r\n\r\n.wrapper {\r\n  width: 100%;\r\n  height: auto;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n}\r\n\r\nul li {\r\n  display: inline-block;\r\n  padding: 5px;\r\n}\r\n\r\n.scrabble-container {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-wrap: wrap;\r\n      flex-wrap: wrap;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  margin-top: 10vh;\r\n  text-align: center;\r\n  height: 290px;\r\n}\r\n\r\n.letter-container {\r\n  height: 60px;\r\n  position: relative;\r\n  background-color: deepskyblue;\r\n  margin: 5px 2px 2px;\r\n  width: 50px;\r\n  padding: 10px;\r\n  font-size: 40px;\r\n  border-radius: 5px;\r\n  color: white;\r\n  font-family: \"Roboto\", \"Trebuchet MS\", Arial, Helvetica, sans-serif;\r\n  cursor: pointer;\r\n}\r\n\r\n.send {\r\n  margin: 10px auto 10px;\r\n  text-align: center;\r\n  height: 20px;\r\n  padding: 20px;\r\n  letter-spacing: 2px;\r\n  background-color: coral;\r\n  border-radius: 5px;\r\n  color: white;\r\n  font-size: 15px;\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n.letter-container:hover {\r\n  top: -5px;\r\n}\r\n\r\n\r\n.result-container {\r\n  min-width: 250px;\r\n  text-align: center;\r\n  height: 50px;\r\n  margin: 20vh auto 0;\r\n  background-color: deepskyblue;\r\n  font-family: 'Montserrat', sans-serif;\r\n  font-size: 30px;\r\n  padding-top: 15px;\r\n  padding-right: 15px;\r\n  padding-left: 15px;\r\n  letter-spacing: 1px;\r\n  border-radius: 5px;\r\n}\r\n\r\n.chosen {\r\n  display: none;\r\n}\r\n\r\n.gameOver {\r\n  position: absolute;\r\n  left: 0;\r\n  right: 0;\r\n  top: 0;\r\n  bottom: 0;\r\n  margin: auto;\r\n  overflow: hidden;\r\n\r\n  background-color: white;\r\n  width: 500px;\r\n  height: 500px;\r\n  border-radius: 10px;\r\n}\r\n\r\n.gameOver h3, .surrender h3 {\r\n  text-align: center;\r\n  margin-top: 30%;\r\n  font-family: Consolas, sans-serif;\r\n  font-weight: 800;\r\n  font-size: 40px;\r\n  letter-spacing: 4px;\r\n}\r\n\r\n.surrender h3 {\r\n  margin-top: 5%;\r\n}\r\n\r\n.surrender {\r\n  position: absolute;\r\n  left: 0;\r\n  right: 0;\r\n  top: 0;\r\n  bottom: 0;\r\n  margin: auto;\r\n  overflow: hidden;\r\n\r\n  background-color: white;\r\n  width: 90vw;\r\n  height: 90vh;\r\n  border-radius: 10px;\r\n}\r\n\r\n.word-list-container {\r\n  width: 90%;\r\n  margin: 0 auto;\r\n  max-height: 50vh;\r\n  overflow: hidden;\r\n}\r\n\r\n.again {\r\n  text-align: center;\r\n  width: 140px;\r\n  background-color: coral;\r\n  font-size: 20px;\r\n  margin: 13% auto 0;\r\n  border-radius: 5px;\r\n  padding: 10px;\r\n  cursor: pointer;\r\n  color: white;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/scrabble-game/scrabble-game.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"wrapper\">\n    <div class=\"scrabble-container\">\n      <div class=\"letter-container\" *ngFor=\"let char of word\" (click)=\"addLetter(char, $event)\">\n        {{char}}\n      </div>\n    </div>\n    <div class=\"send\" (click)=\"surrender()\">SURRENDER!</div>\n    <div *ngIf=\"surrendered\"  class=\"surrender\"><h3>These are all the words you could make!</h3>\n      <div class=\"word-list-container\">\n        <ul>\n          <li *ngFor=\"let word of possibleWordsList\">{{word}}</li>\n        </ul>\n      </div>\n      <div class=\"again\" (click)=\"restart()\">Try again</div>\n    </div>\n    <div class=\"result-container\">\n      {{result}}\n    </div>\n    <div class=\"send\" (click)=\"checkWord()\">CHECK</div>\n    <div *ngIf=\"isRight === 'true'\" class=\"gameOver\">\n      <div  class=\"gameOver\"><h3>YOU WIN!</h3>\n        <div class=\"again\" (click)=\"restart()\">Play again</div>\n      </div>\n    </div>\n    <div *ngIf=\"isRight === 'false'\" class=\"gameOver\">\n      <div  class=\"gameOver\"><h3>YOU LOOSE!</h3>\n        <div class=\"again\" (click)=\"restart()\">Try again</div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/component/scrabble-game/scrabble-game.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrabbleGameComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_scrabble_game_service__ = __webpack_require__("../../../../../src/app/service/scrabble-game.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ScrabbleGameComponent = /** @class */ (function () {
    function ScrabbleGameComponent(scrabbleService, renderer) {
        this.scrabbleService = scrabbleService;
        this.renderer = renderer;
        this.result = '';
        this.surrendered = false;
    }
    ScrabbleGameComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.scrabbleService.getWord()
            .subscribe(function (res) { return _this.word = res.split(''); });
    };
    ScrabbleGameComponent.prototype.addLetter = function (letter, event) {
        this.result += letter;
        this.removeElement(event);
    };
    ScrabbleGameComponent.prototype.removeElement = function (event) {
        this.renderer.setElementClass(event.target, 'chosen', true);
    };
    ScrabbleGameComponent.prototype.checkWord = function () {
        var _this = this;
        this.scrabbleService.checkWord(this.result)
            .subscribe(function (res) { return _this.isRight = res; });
    };
    ScrabbleGameComponent.prototype.surrender = function () {
        var _this = this;
        this.scrabbleService.surrender(this.word.toString())
            .subscribe(function (res) { return _this.possibleWordsList = res; });
        this.surrendered = true;
    };
    ScrabbleGameComponent.prototype.restart = function () {
        var _this = this;
        this.scrabbleService.getWord()
            .subscribe(function (res) { return _this.word = res.split(''); });
        this.result = '';
        this.isRight = null;
        this.surrendered = false;
    };
    ScrabbleGameComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-scrabble-game',
            template: __webpack_require__("../../../../../src/app/component/scrabble-game/scrabble-game.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/scrabble-game/scrabble-game.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_scrabble_game_service__["a" /* ScrabbleGameService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_scrabble_game_service__["a" /* ScrabbleGameService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Renderer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Renderer */]) === "function" && _b || Object])
    ], ScrabbleGameComponent);
    return ScrabbleGameComponent;
    var _a, _b;
}());

//# sourceMappingURL=scrabble-game.component.js.map

/***/ }),

/***/ "../../../../../src/app/service/scrabble-game.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrabbleGameService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_config__ = __webpack_require__("../../../../../src/app/shared/config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ScrabbleGameService = /** @class */ (function () {
    function ScrabbleGameService(http) {
        this.http = http;
    }
    ScrabbleGameService.prototype.getWord = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__shared_config__["a" /* basePath */] + 'word')
            .map(function (res) { return res.text(); });
    };
    ScrabbleGameService.prototype.surrender = function (currentWord) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__shared_config__["a" /* basePath */] + 'surrender?word=' + currentWord)
            .map(function (res) {
            console.log(res.json());
            return res.json();
        });
    };
    ScrabbleGameService.prototype.checkWord = function (word) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__shared_config__["a" /* basePath */] + 'check?word=' + word)
            .map(function (res) { return res.text(); });
    };
    ScrabbleGameService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], ScrabbleGameService);
    return ScrabbleGameService;
    var _a;
}());

//# sourceMappingURL=scrabble-game.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return basePath; });
/* unused harmony export headers */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");

var basePath = 'http://localhost:9000/';
var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({
    'Content-Type': 'application/json'
});
//# sourceMappingURL=config.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map