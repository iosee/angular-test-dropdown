webpackJsonp([1,4],{

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(26)(false);
// imports


// module
exports.push([module.i, "dropdown-list {\r\n\twidth: 400px;\r\n\tdisplay: block;\r\n}\r\n\r\n.item {\r\n\tpadding: 10px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(26)(false);
// imports


// module
exports.push([module.i, ".container {\r\n\tcursor: pointer;\r\n\tborder-radius: 2px;\r\n\tposition: relative;\r\n}\r\n\r\n.title {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\twidth: 100%;\r\n\tposition: relative;\r\n\toverflow: hidden;\r\n\tborder: 1px solid #B38867;\r\n\tborder-radius: 2px;\r\n\ttransition: border-bottom-right-radius .5s, border-bottom-left-radius .5s, box-shadow .5s;\r\n\ttransition-delay: .4s;\r\n\theight: 38px;\r\n}\r\n\r\n.expanded .title {\r\n\tbox-shadow: 1px 1px 4px #999;\r\n\tborder-bottom-right-radius: 0;\r\n\tborder-bottom-left-radius: 0;\r\n\ttransition: box-shadow .5s;\r\n}\r\n\r\n.title:after {\r\n\tcontent: '';\r\n\twidth: 0;\r\n\theight: 0;\r\n\tborder-left: 5px solid transparent;\r\n\tborder-right: 5px solid transparent;\r\n\tborder-bottom: 5px solid #B38867;\r\n\tposition: absolute;\r\n\ttop: 15px;\r\n\tright: 10px;\r\n\ttransition: -webkit-transform .5s ease;\r\n\ttransition: transform .5s ease;\r\n\ttransition: transform .5s ease, -webkit-transform .5s ease;\r\n}\r\n\r\n.header {\r\n\tfont-weight: bold;\r\n\tpadding: 10px;\r\n\tcolor: #FFFFFF;\r\n\tbackground: #B38867;\r\n}\r\n\r\n.empty-text, .selected-item {\r\n\toverflow: hidden;\r\n\ttext-overflow: ellipsis;\r\n\twhite-space: nowrap;\r\n\t-webkit-box-flex: 1;\r\n\t    -ms-flex: 1;\r\n\t        flex: 1;\r\n\tbox-shadow: 0 0 3px #aaa inset;\r\n}\r\n\r\n.empty-text {\r\n\tcolor: #626D71;\r\n\tpadding: 10px 30px 10px 10px;\r\n}\r\n\r\n.expanded .title:after {\r\n\t-webkit-transform: rotate(-180deg);\r\n\t        transform: rotate(-180deg);\r\n}\r\n\r\n.selected-item {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-align: center;\r\n\t    -ms-flex-align: center;\r\n\t        align-items: center;\r\n\tpadding: 3px 30px 3px 3px;\r\n}\r\n\r\n.selected-title {\r\n\tfont-weight: normal;\r\n\tpadding-left: 10px;\r\n\t-webkit-box-flex: 1;\r\n\t    -ms-flex: 1;\r\n\t        flex: 1;\r\n\toverflow: hidden;\r\n\ttext-overflow: ellipsis;\r\n}\r\n\r\n.selected-image {\r\n\theight: 100%;\r\n\t-webkit-box-flex: 0;\r\n\t    -ms-flex: 0 0;\r\n\t        flex: 0 0;\r\n\tmax-width: 21px;\r\n}\r\n\r\n.selected-image img {\r\n\theight: 100%;\r\n}\r\n\r\n.clear-icon {\r\n\tposition: relative;\r\n\twidth: 14px;\r\n\theight: 100%;\r\n}\r\n.clear-icon:before, .clear-icon:after {\r\n\tposition: absolute;\r\n\twidth: 2px;\r\n\theight: 14px;\r\n\tbackground-color: #B38867;\r\n\t-webkit-transform: rotate(45deg);\r\n\t        transform: rotate(45deg);\r\n\tleft: 6px;\r\n\ttop: 8px;\r\n\tcontent: '';\r\n\ttransition: -webkit-transform .4s;\r\n\ttransition: transform .4s;\r\n\ttransition: transform .4s, -webkit-transform .4s;\r\n}\r\n\r\n.clear-icon:after {\r\n\t-webkit-transform: rotate(-45deg);\r\n\t        transform: rotate(-45deg);\r\n}\r\n\r\nul {\r\n\tmax-height: 0;\r\n\twidth: 100%;\r\n\toverflow-x: hidden;\r\n\toverflow-y: auto;\r\n\ttransition: max-height .5s ease, visibility .5s;\r\n\tvisibility: hidden;\r\n\tposition: absolute;\r\n\tborder-right: 1px solid #B38867;\r\n\tborder-bottom: 1px solid #B38867;\r\n\tborder-left: 1px solid #B38867;\r\n\tborder-bottom-right-radius: 2px;\r\n\tborder-bottom-left-radius: 2px;\r\n\tbox-shadow: 1px 1px 4px #999;\r\n\tbackground: #FFFFFF;\r\n}\r\n\r\nul::-webkit-scrollbar {\r\n\twidth: 8px;\r\n}\r\n::-webkit-scrollbar-track {\r\n\tbox-shadow: inset 0 0 6px rgba(0,0,0,0.5);\r\n\tborder-radius: 3px;\r\n\tmargin: 4px;\r\n}\r\nul::-webkit-scrollbar-thumb {\r\n\tbackground-color: #B38867;\r\n\tborder-radius: 3px;\r\n\tborder: 1px solid #916b4d;\r\n}\r\n\r\n.expanded ul {\r\n\tmax-height: 250px;\r\n\ttransition: max-height .5s ease;\r\n\tvisibility: visible;\r\n}\r\n\r\nul li:first-child {\r\n\tborder-top: none;\r\n}\r\n\r\nul li {\r\n\tborder-top: 1px solid #cccccc;\r\n\tcolor: #626d71;\r\n}\r\n\r\nul li.selected, ul li.selected:hover {\r\n\tcolor: #fff;\r\n\tbackground-color: #B38867;\r\n}\r\n\r\nul li.selected, ul li.selected + li {\r\n\tborder-color: #B38867;\r\n}\r\n\r\nul li:hover {\r\n\tbackground-color: #CDCDC0;\r\n\tcolor: #000;\r\n\ttransition: background-color .5s;\r\n}\r\n\r\n.item-inner {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-align: center;\r\n\t    -ms-flex-align: center;\r\n\t        align-items: center;\r\n}\r\n\r\n.item-inner .item-image {\r\n\tpadding: 5px;\r\n\tmin-height: 61px;\r\n}\r\n\r\n.item-inner .item-image img {\r\n\tborder: 1px solid #fff;\r\n\twidth: 35px;\r\n}\r\n\r\n.item-text {\r\n\t-webkit-box-flex: 1;\r\n\t    -ms-flex: 1;\r\n\t        flex: 1;\r\n\toverflow: hidden;\r\n\tpadding: 10px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 141:
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n\t<h1 class=\"item\">\r\n\t\t{{title}}\r\n\t</h1>\r\n\t<div class=\"item\">\r\n\t\t<dropdown-list [service]=\"movieService\"></dropdown-list>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ 142:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" [class.expanded]=\"!closed\">\r\n\t<div (click)=\"toggleList()\" class=\"title\">\r\n\t\t<div class=\"header\">{{service.name}}:</div>\r\n\t\t<div *ngIf=\"selectedItem\" class=\"selected-item\">\r\n\t\t\t<div class=\"selected-image\"><img src=\"{{service.imageBase + selectedItem.image}}\" /></div>\r\n\t\t\t<div class=\"selected-title\">{{selectedItem.display}}</div>\r\n\t\t\t<div class=\"clear-icon\" (click)=\"clearSelection()\"></div>\r\n\t\t</div>\r\n\t\t<div *ngIf=\"!selectedItem\" class=\"empty-text\">{{!closed ? '' : emptyText}}</div>\r\n\t</div>\r\n\t<ul>\r\n\t\t<li *ngFor=\"let item of items;\"\r\n\t\t\t(click)=\"selectItem(item)\"\r\n\t\t\t[class.selected]=\"selectedItem == item\">\r\n\t\t\t<div class=\"item-inner\">\r\n\t\t\t\t<div *ngIf=\"item.image\" class=\"item-image\">\r\n\t\t\t\t\t<img src=\"{{service.imageBase + item.image}}\" />\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"item-text\">\r\n\t\t\t\t\t{{item.display}}\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</li>\r\n\t</ul>\r\n</div>\r\n"

/***/ }),

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(74);


/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_mergeMap__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_mergeMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MovieService = (function () {
    function MovieService(http) {
        this.http = http;
        this.name = 'Movie';
        this.imageBase = 'https://image.tmdb.org/t/p/w45_and_h67_bestv2/';
        this.apiKey = 'bc1e195159f0ee0de39c6de5fb2234b9';
        this.serviceUrl = 'https://api.themoviedb.org/3/movie/popular';
    }
    MovieService.prototype.getList = function () {
        return this.http.get(this.serviceUrl, {
            params: {
                api_key: this.apiKey
            }
        })
            .map(function (response) {
            var movies = response.json().results, result = [];
            movies.forEach(function (movie) { return result.push({
                value: movie.id,
                display: movie.title,
                image: movie.poster_path
            }); });
            return result;
        })
            .catch(this.handleError);
    };
    MovieService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of([]);
    };
    return MovieService;
}());
MovieService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], MovieService);

var _a;
//# sourceMappingURL=movie.service.js.map

/***/ }),

/***/ 73:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 73;


/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(85);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_shared_movie_service__ = __webpack_require__(51);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(movieService) {
        this.movieService = movieService;
        this.title = 'Interview Exercise: Dropdown Component';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(141),
        styles: [__webpack_require__(139)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_shared_movie_service__["a" /* MovieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_shared_movie_service__["a" /* MovieService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__movies_movies_module__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_movie_service__ = __webpack_require__(51);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__movies_movies_module__["a" /* MoviesModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__shared_movie_service__["a" /* MovieService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_dropdown_source__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_dropdown_source___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__shared_dropdown_source__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropdownComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DropdownComponent = (function () {
    function DropdownComponent() {
        this.emptyText = 'Select value...';
        this.closed = true;
    }
    DropdownComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getList().subscribe(function (items) { return _this.items = items; });
    };
    DropdownComponent.prototype.selectItem = function (item) {
        this.selectedItem = item;
        this.toggleList();
    };
    DropdownComponent.prototype.toggleList = function () {
        this.closed = !this.closed;
    };
    DropdownComponent.prototype.clearSelection = function () {
        this.selectedItem = null;
        event.stopPropagation();
    };
    return DropdownComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_dropdown_source__["DropdownSource"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_dropdown_source__["DropdownSource"]) === "function" && _a || Object)
], DropdownComponent.prototype, "service", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], DropdownComponent.prototype, "emptyText", void 0);
DropdownComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'dropdown-list',
        template: __webpack_require__(142),
        styles: [__webpack_require__(140)]
    }),
    __metadata("design:paramtypes", [])
], DropdownComponent);

var _a;
//# sourceMappingURL=dropdown.component.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dropdown_dropdown_component__ = __webpack_require__(82);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoviesModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MoviesModule = (function () {
    function MoviesModule() {
    }
    return MoviesModule;
}());
MoviesModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* CommonModule */]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_2__dropdown_dropdown_component__["a" /* DropdownComponent */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__dropdown_dropdown_component__["a" /* DropdownComponent */]]
    })
], MoviesModule);

//# sourceMappingURL=movies.module.js.map

/***/ }),

/***/ 84:
/***/ (function(module, exports) {

//# sourceMappingURL=dropdown-source.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ })

},[172]);
//# sourceMappingURL=main.bundle.js.map