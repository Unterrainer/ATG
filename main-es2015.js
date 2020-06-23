(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _init_init_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./init/init.component */ "./src/app/init/init.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");








const routes = [
    {
        path: "",
        component: _init_init_component__WEBPACK_IMPORTED_MODULE_2__["InitComponent"]
    },
    {
        path: "login",
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    },
    {
        path: "register",
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]
    },
    {
        path: "main",
        component: _main_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'ATG';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 0, consts: [[1, "container"], [1, "app"], [1, "not-supported"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Sorry this application is design only for small devices as Smartphones. Please youse your Smartphone to see the content of this application. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["@media screen and (max-width: 500px) {\n  .not-supported[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media screen and (min-width: 501px) {\n  .app[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .not-supported[_ngcontent-%COMP%] {\n    display: inline-block;\n    padding: 16px;\n    background-color: rgba(255, 0, 0, 0.3);\n    border-radius: 5px;\n    margin: 50px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdGVwaGFudW50ZXJyYWluZXIvRGVza3RvcC9VTkkvSHVtYW4vQVRHL0FURy9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUk7SUFDSSxhQUFBO0VDQU47QUFDRjtBREdBO0VBQ0k7SUFDSSxhQUFBO0VDRE47O0VESUU7SUFDSSxxQkFBQTtJQUNBLGFBQUE7SUFDQSxzQ0FBQTtJQUNBLGtCQUFBO0lBRUEsWUFBQTtFQ0ZOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuXG4gICAgLm5vdC1zdXBwb3J0ZWQge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTAxcHgpIHtcbiAgICAuYXBwIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAubm90LXN1cHBvcnRlZCB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMCwwLDAuMyk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcblxuICAgICAgICBtYXJnaW46IDUwcHg7XG4gICAgfVxufSIsIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIC5ub3Qtc3VwcG9ydGVkIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1MDFweCkge1xuICAuYXBwIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLm5vdC1zdXBwb3J0ZWQge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjMpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtYXJnaW46IDUwcHg7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _init_init_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./init/init.module */ "./src/app/init/init.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _login_login_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.module */ "./src/app/login/login.module.ts");
/* harmony import */ var _register_register_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./register/register.module */ "./src/app/register/register.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _main_main_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./main/main.module */ "./src/app/main/main.module.ts");
/* harmony import */ var _feedback_dialog_feedback_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./feedback-dialog/feedback-dialog.component */ "./src/app/feedback-dialog/feedback-dialog.component.ts");












class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _init_init_module__WEBPACK_IMPORTED_MODULE_4__["InitModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _login_login_module__WEBPACK_IMPORTED_MODULE_6__["LoginModule"],
            _register_register_module__WEBPACK_IMPORTED_MODULE_7__["RegisterModule"],
            _main_main_module__WEBPACK_IMPORTED_MODULE_9__["MainModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _feedback_dialog_feedback_dialog_component__WEBPACK_IMPORTED_MODULE_10__["FeedbackDialogComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _init_init_module__WEBPACK_IMPORTED_MODULE_4__["InitModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
        _login_login_module__WEBPACK_IMPORTED_MODULE_6__["LoginModule"],
        _register_register_module__WEBPACK_IMPORTED_MODULE_7__["RegisterModule"],
        _main_main_module__WEBPACK_IMPORTED_MODULE_9__["MainModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _feedback_dialog_feedback_dialog_component__WEBPACK_IMPORTED_MODULE_10__["FeedbackDialogComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _init_init_module__WEBPACK_IMPORTED_MODULE_4__["InitModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                    _login_login_module__WEBPACK_IMPORTED_MODULE_6__["LoginModule"],
                    _register_register_module__WEBPACK_IMPORTED_MODULE_7__["RegisterModule"],
                    _main_main_module__WEBPACK_IMPORTED_MODULE_9__["MainModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/article-list/article-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/article-list/article-list.component.ts ***!
  \********************************************************/
/*! exports provided: ArticleListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleListComponent", function() { return ArticleListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _article_preview_article_preview_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../article-preview/article-preview.component */ "./src/app/article-preview/article-preview.component.ts");




function ArticleListComponent_app_article_preview_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-article-preview", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ArticleListComponent_app_article_preview_1_Template_app_article_preview_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const article_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.openArticle(article_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const article_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("article", article_r1);
} }
class ArticleListComponent {
    constructor() {
        this.openArticleEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    openArticle(article) {
        this.openArticleEvent.emit(article);
    }
}
ArticleListComponent.ɵfac = function ArticleListComponent_Factory(t) { return new (t || ArticleListComponent)(); };
ArticleListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ArticleListComponent, selectors: [["app-article-list"]], inputs: { articles: "articles" }, outputs: { openArticleEvent: "openArticleEvent" }, decls: 2, vars: 1, consts: [[1, "container"], [3, "article", "click", 4, "ngFor", "ngForOf"], [3, "article", "click"]], template: function ArticleListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ArticleListComponent_app_article_preview_1_Template, 1, 1, "app-article-preview", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.articles);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _article_preview_article_preview_component__WEBPACK_IMPORTED_MODULE_2__["ArticlePreviewComponent"]], styles: [".container[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdGVwaGFudW50ZXJyYWluZXIvRGVza3RvcC9VTkkvSHVtYW4vQVRHL0FURy9zcmMvYXBwL2FydGljbGUtbGlzdC9hcnRpY2xlLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FydGljbGUtbGlzdC9hcnRpY2xlLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9hcnRpY2xlLWxpc3QvYXJ0aWNsZS1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMTZweDtcbn0iLCIuY29udGFpbmVyIHtcbiAgcGFkZGluZzogMTZweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArticleListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-article-list',
                templateUrl: './article-list.component.html',
                styleUrls: ['./article-list.component.scss']
            }]
    }], function () { return []; }, { articles: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], openArticleEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/article-list/article-list.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/article-list/article-list.module.ts ***!
  \*****************************************************/
/*! exports provided: ArticleListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleListModule", function() { return ArticleListModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _article_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./article-list.component */ "./src/app/article-list/article-list.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _article_preview_article_preview_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../article-preview/article-preview.module */ "./src/app/article-preview/article-preview.module.ts");






class ArticleListModule {
}
ArticleListModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ArticleListModule });
ArticleListModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ArticleListModule_Factory(t) { return new (t || ArticleListModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _article_preview_article_preview_module__WEBPACK_IMPORTED_MODULE_4__["ArticlePreviewModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ArticleListModule, { declarations: [_article_list_component__WEBPACK_IMPORTED_MODULE_2__["ArticleListComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
        _article_preview_article_preview_module__WEBPACK_IMPORTED_MODULE_4__["ArticlePreviewModule"]], exports: [_article_list_component__WEBPACK_IMPORTED_MODULE_2__["ArticleListComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArticleListModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _article_list_component__WEBPACK_IMPORTED_MODULE_2__["ArticleListComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                    _article_preview_article_preview_module__WEBPACK_IMPORTED_MODULE_4__["ArticlePreviewModule"]
                ],
                exports: [
                    _article_list_component__WEBPACK_IMPORTED_MODULE_2__["ArticleListComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/article-preview/article-preview.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/article-preview/article-preview.component.ts ***!
  \**************************************************************/
/*! exports provided: ArticlePreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlePreviewComponent", function() { return ArticlePreviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");




function ArticlePreviewComponent_mat_icon_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const icon_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](icon_r1);
} }
class ArticlePreviewComponent {
    constructor() { }
    ngOnInit() {
    }
    get title() {
        return this.article.title;
    }
    get shortDes() {
        return this.article.shortDes;
    }
    get articleTags() {
        return this.article.icons;
    }
    get image() {
        return this.article.imgURL;
    }
}
ArticlePreviewComponent.ɵfac = function ArticlePreviewComponent_Factory(t) { return new (t || ArticlePreviewComponent)(); };
ArticlePreviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ArticlePreviewComponent, selectors: [["app-article-preview"]], inputs: { article: "article" }, decls: 10, vars: 4, consts: [[1, "container"], [1, "article-card"], [1, "article-img"], [3, "src"], [1, "article-title"], [1, "article-short-des"], [1, "article-tags"], [4, "ngFor", "ngForOf"]], template: function ArticlePreviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ArticlePreviewComponent_mat_icon_9_Template, 2, 1, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.shortDes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.articleTags);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"]], styles: [".container[_ngcontent-%COMP%]   .article-card[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  overflow: hidden;\n  box-shadow: 0px 1px 2px #999;\n  margin: 8px 0px;\n  padding-bottom: 4px;\n}\n.container[_ngcontent-%COMP%]   .article-card[_ngcontent-%COMP%]   .article-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n}\n.container[_ngcontent-%COMP%]   .article-card[_ngcontent-%COMP%]   .article-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 950px;\n  height: auto;\n}\n.container[_ngcontent-%COMP%]   .article-card[_ngcontent-%COMP%]   .article-title[_ngcontent-%COMP%] {\n  padding: 8px;\n  font-size: 20px;\n  font-weight: bold;\n}\n.container[_ngcontent-%COMP%]   .article-card[_ngcontent-%COMP%]   .article-short-des[_ngcontent-%COMP%] {\n  padding: 8px;\n}\n.container[_ngcontent-%COMP%]   .article-card[_ngcontent-%COMP%]   .article-tags[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 24px;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n.container[_ngcontent-%COMP%]   .article-card[_ngcontent-%COMP%]   .article-tags[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-right: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdGVwaGFudW50ZXJyYWluZXIvRGVza3RvcC9VTkkvSHVtYW4vQVRHL0FURy9zcmMvYXBwL2FydGljbGUtcHJldmlldy9hcnRpY2xlLXByZXZpZXcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FydGljbGUtcHJldmlldy9hcnRpY2xlLXByZXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNBUjtBREVRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNBWjtBREVZO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ0FoQjtBRElRO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0ZaO0FES1E7RUFDSSxZQUFBO0FDSFo7QURNUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUNKWjtBRE1ZO0VBQ0ksaUJBQUE7QUNKaEIiLCJmaWxlIjoic3JjL2FwcC9hcnRpY2xlLXByZXZpZXcvYXJ0aWNsZS1wcmV2aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgLmFydGljbGUtY2FyZCB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDFweCAycHggIzk5OTtcbiAgICAgICAgbWFyZ2luOiA4cHggMHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xuXG4gICAgICAgIC5hcnRpY2xlLWltZyB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcblxuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDk1MHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5hcnRpY2xlLXRpdGxlIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG5cbiAgICAgICAgLmFydGljbGUtc2hvcnQtZGVzIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hcnRpY2xlLXRhZ3Mge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAgICAgbWF0LWljb24ge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG59IiwiLmNvbnRhaW5lciAuYXJ0aWNsZS1jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3gtc2hhZG93OiAwcHggMXB4IDJweCAjOTk5O1xuICBtYXJnaW46IDhweCAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA0cHg7XG59XG4uY29udGFpbmVyIC5hcnRpY2xlLWNhcmQgLmFydGljbGUtaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cbi5jb250YWluZXIgLmFydGljbGUtY2FyZCAuYXJ0aWNsZS1pbWcgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogOTUwcHg7XG4gIGhlaWdodDogYXV0bztcbn1cbi5jb250YWluZXIgLmFydGljbGUtY2FyZCAuYXJ0aWNsZS10aXRsZSB7XG4gIHBhZGRpbmc6IDhweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5jb250YWluZXIgLmFydGljbGUtY2FyZCAuYXJ0aWNsZS1zaG9ydC1kZXMge1xuICBwYWRkaW5nOiA4cHg7XG59XG4uY29udGFpbmVyIC5hcnRpY2xlLWNhcmQgLmFydGljbGUtdGFncyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDI0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5jb250YWluZXIgLmFydGljbGUtY2FyZCAuYXJ0aWNsZS10YWdzIG1hdC1pY29uIHtcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArticlePreviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-article-preview',
                templateUrl: './article-preview.component.html',
                styleUrls: ['./article-preview.component.scss']
            }]
    }], function () { return []; }, { article: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/article-preview/article-preview.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/article-preview/article-preview.module.ts ***!
  \***********************************************************/
/*! exports provided: ArticlePreviewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlePreviewModule", function() { return ArticlePreviewModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _article_preview_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./article-preview.component */ "./src/app/article-preview/article-preview.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");





class ArticlePreviewModule {
}
ArticlePreviewModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ArticlePreviewModule });
ArticlePreviewModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ArticlePreviewModule_Factory(t) { return new (t || ArticlePreviewModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ArticlePreviewModule, { declarations: [_article_preview_component__WEBPACK_IMPORTED_MODULE_2__["ArticlePreviewComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]], exports: [_article_preview_component__WEBPACK_IMPORTED_MODULE_2__["ArticlePreviewComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArticlePreviewModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _article_preview_component__WEBPACK_IMPORTED_MODULE_2__["ArticlePreviewComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
                ],
                exports: [
                    _article_preview_component__WEBPACK_IMPORTED_MODULE_2__["ArticlePreviewComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/article/article.component.ts":
/*!**********************************************!*\
  !*** ./src/app/article/article.component.ts ***!
  \**********************************************/
/*! exports provided: ArticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleComponent", function() { return ArticleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _feedback_dialog_feedback_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../feedback-dialog/feedback-dialog.component */ "./src/app/feedback-dialog/feedback-dialog.component.ts");
/* harmony import */ var _services_feedback_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/feedback-store */ "./src/app/services/feedback-store.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _services_user_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user-store */ "./src/app/services/user-store.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../feedback/feedback.component */ "./src/app/feedback/feedback.component.ts");









function ArticleComponent_app_feedback_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-feedback", 11);
} if (rf & 2) {
    const feed_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("feedback", feed_r1);
} }
class ArticleComponent {
    constructor(feedbackStore, dialog, userStore) {
        this.feedbackStore = feedbackStore;
        this.dialog = dialog;
        this.userStore = userStore;
    }
    ngOnInit() {
    }
    get title() {
        return this.article.title;
    }
    get description() {
        return this.article.description;
    }
    get buttonText() {
        return "Give Feedback";
    }
    get stars() {
        const artStars = this.feedbackStore.retrieveArtFeedbacks(this.article);
        const totStars = artStars.reduce((acc, cur) => acc + cur.stars, 0);
        this.article.avgStars = totStars / artStars.length;
        return Math.round(this.article.avgStars * 10) / 10 || 0;
    }
    get hStars() {
        const artStars = this.feedbackStore.retrieveArtFeedbacks(this.article);
        const totStars = artStars.reduce((acc, cur) => acc + cur.healthStars, 0);
        this.article.avgHealtStars = totStars / artStars.length;
        return Math.round(this.article.avgHealtStars * 10) / 10 || 0;
    }
    get feedbacks() {
        return this.feedbackStore.retrieveArtFeedbacks(this.article);
    }
    openFeedbackDialog() {
        const dialogRef = this.dialog.open(_feedback_dialog_feedback_dialog_component__WEBPACK_IMPORTED_MODULE_1__["FeedbackDialogComponent"], {
            disableClose: true
        });
        dialogRef.afterClosed().subscribe(data => {
            if (!data)
                return;
            const feedback = data;
            feedback.articleID = this.article.id;
            feedback.author = this.userStore.retrieveCurrentUser().username;
            this.feedbackStore.addFeedBack(feedback);
        });
    }
}
ArticleComponent.ɵfac = function ArticleComponent_Factory(t) { return new (t || ArticleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_feedback_store__WEBPACK_IMPORTED_MODULE_2__["FeedBackStore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_store__WEBPACK_IMPORTED_MODULE_4__["Userstore"])); };
ArticleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ArticleComponent, selectors: [["app-article"]], inputs: { article: "article" }, decls: 21, vars: 7, consts: [[1, "container"], [1, "article-img"], [3, "src"], [1, "article-title"], [1, "stars"], [1, "article-des"], [1, "button-container"], [1, "button", 3, "click"], [1, "feedback"], [1, "feedback-title"], [3, "feedback", 4, "ngFor", "ngForOf"], [3, "feedback"]], template: function ArticleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "wash");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ArticleComponent_Template_div_click_15_listener() { return ctx.openFeedbackDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Feedbacks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ArticleComponent_app_feedback_20_Template, 1, 1, "app-feedback", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.article.imgURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.stars, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.hStars, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.buttonText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.feedbacks);
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_7__["FeedbackComponent"]], styles: [".container[_ngcontent-%COMP%]   .article-title[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: bold;\n  padding: 16px;\n}\n.container[_ngcontent-%COMP%]   .stars[_ngcontent-%COMP%] {\n  padding-left: 8px;\n  display: flex;\n  align-items: center;\n  font-size: 18px;\n}\n.container[_ngcontent-%COMP%]   .stars[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  margin-left: 8px;\n}\n.container[_ngcontent-%COMP%]   .article-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: 2%;\n  width: 96%;\n  border-radius: 5px;\n}\n.container[_ngcontent-%COMP%]   .article-des[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n.container[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n.container[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  padding: 12px;\n  border-radius: 24px;\n  background-color: #bbd500;\n  color: #487610;\n  text-align: center;\n  min-width: 150px;\n  font-size: 20px;\n}\n.container[_ngcontent-%COMP%]   .feedback[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n.container[_ngcontent-%COMP%]   .feedback[_ngcontent-%COMP%]   .feedback-title[_ngcontent-%COMP%] {\n  color: #487610;\n  font-size: 22px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdGVwaGFudW50ZXJyYWluZXIvRGVza3RvcC9VTkkvSHVtYW4vQVRHL0FURy9zcmMvYXBwL2FydGljbGUvYXJ0aWNsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXJ0aWNsZS9hcnRpY2xlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBQ0RSO0FESUk7RUFDSSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNGUjtBRElRO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtBQ0ZaO0FEUVE7RUFDSSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FDTlo7QURVSTtFQUNJLGFBQUE7QUNSUjtBRFdJO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQ1RSO0FEV1E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ1RaO0FEWUk7RUFDSSxhQUFBO0FDVlI7QURZUTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FDVloiLCJmaWxlIjoic3JjL2FwcC9hcnRpY2xlL2FydGljbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcblxuICAgIC5hcnRpY2xlLXRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAzMnB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICB9XG5cbiAgICAuc3RhcnMge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuXG4gICAgICAgIG1hdC1pY29uIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5hcnRpY2xlLWltZyB7XG5cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIG1hcmdpbjogMiU7XG4gICAgICAgICAgICB3aWR0aDogOTYlO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmFydGljbGUtZGVzIHtcbiAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICB9XG5cbiAgICAuYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgICAuYnV0dG9uIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEycHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4NywyMTMsMCk7XG4gICAgICAgICAgICBjb2xvcjogcmdiKDcyLDExOCwxNik7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDE1MHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICB9XG4gICAgfSBcbiAgICAuZmVlZGJhY2sge1xuICAgICAgICBwYWRkaW5nOiAxNnB4O1xuXG4gICAgICAgIC5mZWVkYmFjay10aXRsZSB7XG4gICAgICAgICAgICBjb2xvcjogcmdiKDcyLDExOCwxNik7XG4gICAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgIH1cbiAgICB9XG5cbn0iLCIuY29udGFpbmVyIC5hcnRpY2xlLXRpdGxlIHtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogMTZweDtcbn1cbi5jb250YWluZXIgLnN0YXJzIHtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbi5jb250YWluZXIgLnN0YXJzIG1hdC1pY29uIHtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG59XG4uY29udGFpbmVyIC5hcnRpY2xlLWltZyBpbWcge1xuICBtYXJnaW46IDIlO1xuICB3aWR0aDogOTYlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4uY29udGFpbmVyIC5hcnRpY2xlLWRlcyB7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG4uY29udGFpbmVyIC5idXR0b24tY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmNvbnRhaW5lciAuYnV0dG9uLWNvbnRhaW5lciAuYnV0dG9uIHtcbiAgcGFkZGluZzogMTJweDtcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JiZDUwMDtcbiAgY29sb3I6ICM0ODc2MTA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLmNvbnRhaW5lciAuZmVlZGJhY2sge1xuICBwYWRkaW5nOiAxNnB4O1xufVxuLmNvbnRhaW5lciAuZmVlZGJhY2sgLmZlZWRiYWNrLXRpdGxlIHtcbiAgY29sb3I6ICM0ODc2MTA7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArticleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-article',
                templateUrl: './article.component.html',
                styleUrls: ['./article.component.scss']
            }]
    }], function () { return [{ type: _services_feedback_store__WEBPACK_IMPORTED_MODULE_2__["FeedBackStore"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }, { type: _services_user_store__WEBPACK_IMPORTED_MODULE_4__["Userstore"] }]; }, { article: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/article/article.module.ts":
/*!*******************************************!*\
  !*** ./src/app/article/article.module.ts ***!
  \*******************************************/
/*! exports provided: ArticleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleModule", function() { return ArticleModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _article_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./article.component */ "./src/app/article/article.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _services_feedback_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/feedback-store */ "./src/app/services/feedback-store.ts");
/* harmony import */ var _feedback_feedback_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../feedback/feedback.module */ "./src/app/feedback/feedback.module.ts");
/* harmony import */ var _feedback_dialog_feedback_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../feedback-dialog/feedback-dialog.component */ "./src/app/feedback-dialog/feedback-dialog.component.ts");








class ArticleModule {
}
ArticleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ArticleModule });
ArticleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ArticleModule_Factory(t) { return new (t || ArticleModule)(); }, providers: [_services_feedback_store__WEBPACK_IMPORTED_MODULE_4__["FeedBackStore"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _feedback_feedback_module__WEBPACK_IMPORTED_MODULE_5__["FeedbackModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ArticleModule, { declarations: [_article_component__WEBPACK_IMPORTED_MODULE_2__["ArticleComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
        _feedback_feedback_module__WEBPACK_IMPORTED_MODULE_5__["FeedbackModule"]], exports: [_article_component__WEBPACK_IMPORTED_MODULE_2__["ArticleComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArticleModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _article_component__WEBPACK_IMPORTED_MODULE_2__["ArticleComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                    _feedback_feedback_module__WEBPACK_IMPORTED_MODULE_5__["FeedbackModule"]
                ],
                exports: [
                    _article_component__WEBPACK_IMPORTED_MODULE_2__["ArticleComponent"]
                ],
                providers: [_services_feedback_store__WEBPACK_IMPORTED_MODULE_4__["FeedBackStore"]],
                entryComponents: [_feedback_dialog_feedback_dialog_component__WEBPACK_IMPORTED_MODULE_6__["FeedbackDialogComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/favorites/favorites.component.ts":
/*!**************************************************!*\
  !*** ./src/app/favorites/favorites.component.ts ***!
  \**************************************************/
/*! exports provided: FavoritesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesComponent", function() { return FavoritesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_user_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user-store */ "./src/app/services/user-store.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _article_list_article_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../article-list/article-list.component */ "./src/app/article-list/article-list.component.ts");
/* harmony import */ var _article_article_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../article/article.component */ "./src/app/article/article.component.ts");







function FavoritesComponent_app_article_list_11_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-article-list", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("openArticleEvent", function FavoritesComponent_app_article_list_11_Template_app_article_list_openArticleEvent_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.onOpenArticleEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("articles", ctx_r0.favorites);
} }
function FavoritesComponent_app_article_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-article", 8);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("article", ctx_r1.openArticle);
} }
const _c0 = function (a0) { return { "hidden": a0 }; };
class FavoritesComponent {
    constructor(userStore) {
        this.userStore = userStore;
        this.currentUser = this.userStore.retrieveCurrentUser();
    }
    ngOnInit() {
    }
    get hasBackButton() {
        return !!this.openArticle;
    }
    get favorites() {
        return this.userStore.retrieveCurrentUser().favorites;
    }
    onOpenArticleEvent(article) {
        this.openArticle = article;
    }
    onBack() {
        if (!!this.openArticle)
            this.openArticle = undefined;
    }
    get articleFavIcon() {
        const article = !!this.openArticle && this.currentUser.favorites.find(a => a.id === this.openArticle.id);
        return !!article ? "favorite" : "favorite_border";
    }
    addToFavs() {
        const art = this.currentUser.favorites.find(a => a.id === this.openArticle.id);
        if (!art) {
            const favs = [
                ...this.currentUser.favorites,
                this.openArticle
            ];
            this.currentUser.favorites = favs;
        }
        else {
            const favs = this.currentUser.favorites.filter(a => a.id !== this.openArticle.id);
            this.currentUser.favorites = favs;
        }
        this.userStore.updateCurrentUser(this.currentUser);
    }
}
FavoritesComponent.ɵfac = function FavoritesComponent_Factory(t) { return new (t || FavoritesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_store__WEBPACK_IMPORTED_MODULE_1__["Userstore"])); };
FavoritesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FavoritesComponent, selectors: [["app-favorites"]], decls: 13, vars: 9, consts: [[1, "container"], [1, "header"], [1, "back-button", 3, "ngClass", "click"], [1, "placeholder", 3, "ngClass", "click"], [1, "content"], [3, "articles", "openArticleEvent", 4, "ngIf"], [3, "article", 4, "ngIf"], [3, "articles", "openArticleEvent"], [3, "article"]], template: function FavoritesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FavoritesComponent_Template_div_click_2_listener() { return ctx.onBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "keyboard_backspace");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Favorites");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FavoritesComponent_Template_div_click_7_listener() { return ctx.addToFavs(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, FavoritesComponent_app_article_list_11_Template, 1, 1, "app-article-list", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, FavoritesComponent_app_article_12_Template, 1, 1, "app-article", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, !ctx.hasBackButton));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, !ctx.openArticle));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.articleFavIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.openArticle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.openArticle);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _article_list_article_list_component__WEBPACK_IMPORTED_MODULE_4__["ArticleListComponent"], _article_article_component__WEBPACK_IMPORTED_MODULE_5__["ArticleComponent"]], styles: [".container[_ngcontent-%COMP%] {\n  padding-bottom: 64px;\n  padding-top: 64px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdGVwaGFudW50ZXJyYWluZXIvRGVza3RvcC9VTkkvSHVtYW4vQVRHL0FURy9zcmMvYXBwL2Zhdm9yaXRlcy9mYXZvcml0ZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Zhdm9yaXRlcy9mYXZvcml0ZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtFQUNBLGlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9mYXZvcml0ZXMvZmF2b3JpdGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgcGFkZGluZy1ib3R0b206IDY0cHg7XG4gICAgcGFkZGluZy10b3A6IDY0cHg7XG59IiwiLmNvbnRhaW5lciB7XG4gIHBhZGRpbmctYm90dG9tOiA2NHB4O1xuICBwYWRkaW5nLXRvcDogNjRweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FavoritesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-favorites',
                templateUrl: './favorites.component.html',
                styleUrls: ['./favorites.component.scss']
            }]
    }], function () { return [{ type: _services_user_store__WEBPACK_IMPORTED_MODULE_1__["Userstore"] }]; }, null); })();


/***/ }),

/***/ "./src/app/favorites/favorites.module.ts":
/*!***********************************************!*\
  !*** ./src/app/favorites/favorites.module.ts ***!
  \***********************************************/
/*! exports provided: FavoritesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesModule", function() { return FavoritesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _favorites_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./favorites.component */ "./src/app/favorites/favorites.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _article_list_article_list_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../article-list/article-list.module */ "./src/app/article-list/article-list.module.ts");
/* harmony import */ var _article_article_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../article/article.module */ "./src/app/article/article.module.ts");







class FavoritesModule {
}
FavoritesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FavoritesModule });
FavoritesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FavoritesModule_Factory(t) { return new (t || FavoritesModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _article_list_article_list_module__WEBPACK_IMPORTED_MODULE_4__["ArticleListModule"],
            _article_article_module__WEBPACK_IMPORTED_MODULE_5__["ArticleModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FavoritesModule, { declarations: [_favorites_component__WEBPACK_IMPORTED_MODULE_2__["FavoritesComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
        _article_list_article_list_module__WEBPACK_IMPORTED_MODULE_4__["ArticleListModule"],
        _article_article_module__WEBPACK_IMPORTED_MODULE_5__["ArticleModule"]], exports: [_favorites_component__WEBPACK_IMPORTED_MODULE_2__["FavoritesComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FavoritesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _favorites_component__WEBPACK_IMPORTED_MODULE_2__["FavoritesComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                    _article_list_article_list_module__WEBPACK_IMPORTED_MODULE_4__["ArticleListModule"],
                    _article_article_module__WEBPACK_IMPORTED_MODULE_5__["ArticleModule"]
                ],
                exports: [
                    _favorites_component__WEBPACK_IMPORTED_MODULE_2__["FavoritesComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/feedback-dialog/feedback-dialog.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/feedback-dialog/feedback-dialog.component.ts ***!
  \**************************************************************/
/*! exports provided: FeedbackDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackDialogComponent", function() { return FeedbackDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");









function FeedbackDialogComponent_mat_icon_4_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FeedbackDialogComponent_mat_icon_4_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const s_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.setStars(s_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "star");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FeedbackDialogComponent_mat_icon_5_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FeedbackDialogComponent_mat_icon_5_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const s_r7 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.setStars(s_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "star");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FeedbackDialogComponent_mat_icon_7_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FeedbackDialogComponent_mat_icon_7_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const s_r10 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.setHStars(s_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "wash");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FeedbackDialogComponent_mat_icon_8_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FeedbackDialogComponent_mat_icon_8_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const s_r13 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.setHStars(s_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "wash");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class FeedbackDialogComponent {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
        this.comment = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("");
        this.stars = 0;
        this.healthStars = 0;
    }
    ngOnInit() {
    }
    close() {
        this.dialogRef.close(undefined);
    }
    send() {
        const feedback = {
            articleID: 0,
            author: "",
            stars: this.stars,
            healthStars: this.healthStars,
            comment: this.comment.value
        };
        this.dialogRef.close(feedback);
    }
    get fullStars() {
        return Array(this.stars).fill(0).map((_, i) => i + 1);
    }
    get emptyStars() {
        const rest = 5 - this.stars;
        return Array(rest).fill(0).map((_, i) => this.stars + i + 1);
    }
    get fullHStars() {
        return Array(this.healthStars).fill(0).map((_, i) => i + 1);
    }
    get emptyHStars() {
        const rest = 5 - this.healthStars;
        return Array(rest).fill(0).map((_, i) => this.healthStars + i + 1);
    }
    setStars(s) {
        if (s === this.stars) {
            this.stars = 0;
            return;
        }
        this.stars = s;
    }
    setHStars(s) {
        if (s === this.healthStars) {
            this.healthStars = 0;
            return;
        }
        this.healthStars = s;
    }
}
FeedbackDialogComponent.ɵfac = function FeedbackDialogComponent_Factory(t) { return new (t || FeedbackDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"])); };
FeedbackDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FeedbackDialogComponent, selectors: [["app-feedback-dialog"]], decls: 21, vars: 5, consts: [[1, "container"], [1, "feedback-title"], [1, "stars"], ["class", "full", 3, "click", 4, "ngFor", "ngForOf"], ["class", "empty", 3, "click", 4, "ngFor", "ngForOf"], ["matInput", "", "placeholder", "Leave a comment", 1, "comment", 3, "formControl"], [1, "button-container"], [1, "send", 3, "click"], [1, "close", 3, "click"], [1, "full", 3, "click"], [1, "empty", 3, "click"]], template: function FeedbackDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Give your Feedback");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FeedbackDialogComponent_mat_icon_4_Template, 2, 0, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FeedbackDialogComponent_mat_icon_5_Template, 2, 0, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, FeedbackDialogComponent_mat_icon_7_Template, 2, 0, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, FeedbackDialogComponent_mat_icon_8_Template, 2, 0, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "textarea", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FeedbackDialogComponent_Template_div_click_12_listener() { return ctx.send(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "send");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Send");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FeedbackDialogComponent_Template_div_click_17_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.fullStars);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.emptyStars);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.fullHStars);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.emptyHStars);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.comment);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"]], styles: [".container[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n.container[_ngcontent-%COMP%]   .feedback-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 100%;\n  text-align: center;\n  margin-bottom: 16px;\n}\n.container[_ngcontent-%COMP%]   .stars[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  padding: 8px;\n  margin: 4px;\n  border-radius: 20px;\n  color: #487610;\n  background-color: #bbd500;\n}\n.container[_ngcontent-%COMP%]   .stars[_ngcontent-%COMP%]   mat-icon.empty[_ngcontent-%COMP%] {\n  color: white;\n}\n.container[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  width: 250px;\n  height: 270px;\n  border: 1px solid black;\n  border-radius: 5px;\n}\n.container[_ngcontent-%COMP%]   .send[_ngcontent-%COMP%] {\n  padding: 8px;\n  border-radius: 20px;\n  font-size: 16px;\n  background-color: #487610;\n  color: #bbd500;\n  text-align: center;\n  width: 100px;\n  display: flex;\n  align-items: center;\n  margin-top: 16px;\n}\n.container[_ngcontent-%COMP%]   .send[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-right: 4px;\n  margin-left: 8px;\n}\n.container[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  padding: 8px;\n  border-radius: 20px;\n  font-size: 16px;\n  background-color: red;\n  text-align: center;\n  width: 100px;\n  display: flex;\n  align-items: center;\n  margin-top: 8px;\n}\n.container[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-right: 4px;\n  margin-left: 8px;\n}\n.container[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdGVwaGFudW50ZXJyYWluZXIvRGVza3RvcC9VTkkvSHVtYW4vQVRHL0FURy9zcmMvYXBwL2ZlZWRiYWNrLWRpYWxvZy9mZWVkYmFjay1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2ZlZWRiYWNrLWRpYWxvZy9mZWVkYmFjay1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FDQ0o7QURDSTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0NSO0FER1E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FDRFo7QURHWTtFQUNJLFlBQUE7QUNEaEI7QURNSTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FDSlI7QURPSTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0xSO0FET1E7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0FDTFo7QURTSTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNQUjtBRFNRO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtBQ1BaO0FEV0k7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FDVFIiLCJmaWxlIjoic3JjL2FwcC9mZWVkYmFjay1kaWFsb2cvZmVlZGJhY2stZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMTZweDtcblxuICAgIC5mZWVkYmFjay10aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICB9XG4gICAgXG4gICAgLnN0YXJzIHtcbiAgICAgICAgbWF0LWljb24ge1xuICAgICAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICAgICAgbWFyZ2luOiA0cHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAgICAgY29sb3I6IHJnYig3MiwxMTgsMTYpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4NywyMTMsMCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICYuZW1wdHkge1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIH0gICAgXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLmNvbW1lbnQge1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICB3aWR0aDogMjUwcHg7XG4gICAgICAgIGhlaWdodDogMjcwcHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgfVxuICAgIFxuICAgIC5zZW5kIHtcbiAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig3MiwxMTgsMTYpO1xuICAgICAgICBjb2xvcjogcmdiKDE4NywyMTMsMCk7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuXG4gICAgICAgIG1hdC1pY29uIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5jbG9zZSB7XG4gICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG5cbiAgICAgICAgbWF0LWljb24ge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmJ1dHRvbi1jb250YWluZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuICAgIFxufSIsIi5jb250YWluZXIge1xuICBwYWRkaW5nOiAxNnB4O1xufVxuLmNvbnRhaW5lciAuZmVlZGJhY2stdGl0bGUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG4uY29udGFpbmVyIC5zdGFycyBtYXQtaWNvbiB7XG4gIHBhZGRpbmc6IDhweDtcbiAgbWFyZ2luOiA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGNvbG9yOiAjNDg3NjEwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmJkNTAwO1xufVxuLmNvbnRhaW5lciAuc3RhcnMgbWF0LWljb24uZW1wdHkge1xuICBjb2xvcjogd2hpdGU7XG59XG4uY29udGFpbmVyIC5jb21tZW50IHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgd2lkdGg6IDI1MHB4O1xuICBoZWlnaHQ6IDI3MHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLmNvbnRhaW5lciAuc2VuZCB7XG4gIHBhZGRpbmc6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDg3NjEwO1xuICBjb2xvcjogI2JiZDUwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG4uY29udGFpbmVyIC5zZW5kIG1hdC1pY29uIHtcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG59XG4uY29udGFpbmVyIC5jbG9zZSB7XG4gIHBhZGRpbmc6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG4uY29udGFpbmVyIC5jbG9zZSBtYXQtaWNvbiB7XG4gIG1hcmdpbi1yaWdodDogNHB4O1xuICBtYXJnaW4tbGVmdDogOHB4O1xufVxuLmNvbnRhaW5lciAuYnV0dG9uLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeedbackDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-feedback-dialog',
                templateUrl: './feedback-dialog.component.html',
                styleUrls: ['./feedback-dialog.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/feedback/feedback.component.ts":
/*!************************************************!*\
  !*** ./src/app/feedback/feedback.component.ts ***!
  \************************************************/
/*! exports provided: FeedbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackComponent", function() { return FeedbackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function FeedbackComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.feedback.comment, " ");
} }
class FeedbackComponent {
    constructor() { }
    ngOnInit() {
    }
}
FeedbackComponent.ɵfac = function FeedbackComponent_Factory(t) { return new (t || FeedbackComponent)(); };
FeedbackComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FeedbackComponent, selectors: [["app-feedback"]], inputs: { feedback: "feedback" }, decls: 13, vars: 4, consts: [[1, "container"], [1, "stars"], ["class", "comment", 4, "ngIf"], [1, "info"], [1, "user"], [1, "comment"]], template: function FeedbackComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "wash");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, FeedbackComponent_div_9_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.feedback.stars, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.feedback.healthStars, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.feedback.comment.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("~", ctx.feedback.author, "");
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".container[_ngcontent-%COMP%] {\n  width: 96%;\n  padding: 2%;\n  box-shadow: 0px 1px 2px #999;\n  margin-top: 8px;\n}\n.container[_ngcontent-%COMP%]   .stars[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.container[_ngcontent-%COMP%]   .stars[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin: 4px;\n}\n.container[_ngcontent-%COMP%]   .stars[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 16px;\n}\n.container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdGVwaGFudW50ZXJyYWluZXIvRGVza3RvcC9VTkkvSHVtYW4vQVRHL0FURy9zcmMvYXBwL2ZlZWRiYWNrL2ZlZWRiYWNrLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mZWVkYmFjay9mZWVkYmFjay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0FDQ0o7QURDSTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDQ1I7QURDUTtFQUNJLFdBQUE7QUNDWjtBREVRO0VBQ0ksV0FBQTtBQ0FaO0FESUk7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FDRlIiLCJmaWxlIjoic3JjL2FwcC9mZWVkYmFjay9mZWVkYmFjay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIHdpZHRoOiA5NiU7XG4gICAgcGFkZGluZzogMiU7XG4gICAgYm94LXNoYWRvdzogMHB4IDFweCAycHggIzk5OTtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG5cbiAgICAuc3RhcnMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICBtYXQtaWNvbiB7XG4gICAgICAgICAgICBtYXJnaW46IDRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgd2lkdGg6IDE2cHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuaW5mbyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIH1cbn0iLCIuY29udGFpbmVyIHtcbiAgd2lkdGg6IDk2JTtcbiAgcGFkZGluZzogMiU7XG4gIGJveC1zaGFkb3c6IDBweCAxcHggMnB4ICM5OTk7XG4gIG1hcmdpbi10b3A6IDhweDtcbn1cbi5jb250YWluZXIgLnN0YXJzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uY29udGFpbmVyIC5zdGFycyBtYXQtaWNvbiB7XG4gIG1hcmdpbjogNHB4O1xufVxuLmNvbnRhaW5lciAuc3RhcnMgc3BhbiB7XG4gIHdpZHRoOiAxNnB4O1xufVxuLmNvbnRhaW5lciAuaW5mbyB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeedbackComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-feedback',
                templateUrl: './feedback.component.html',
                styleUrls: ['./feedback.component.scss']
            }]
    }], function () { return []; }, { feedback: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/feedback/feedback.module.ts":
/*!*********************************************!*\
  !*** ./src/app/feedback/feedback.module.ts ***!
  \*********************************************/
/*! exports provided: FeedbackModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackModule", function() { return FeedbackModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _feedback_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./feedback.component */ "./src/app/feedback/feedback.component.ts");





class FeedbackModule {
}
FeedbackModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FeedbackModule });
FeedbackModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FeedbackModule_Factory(t) { return new (t || FeedbackModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FeedbackModule, { declarations: [_feedback_component__WEBPACK_IMPORTED_MODULE_3__["FeedbackComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]], exports: [_feedback_component__WEBPACK_IMPORTED_MODULE_3__["FeedbackComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeedbackModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _feedback_component__WEBPACK_IMPORTED_MODULE_3__["FeedbackComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]
                ],
                exports: [
                    _feedback_component__WEBPACK_IMPORTED_MODULE_3__["FeedbackComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_user_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user-store */ "./src/app/services/user-store.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _proposal_list_preview_proposal_list_preview_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../proposal-list-preview/proposal-list-preview.component */ "./src/app/proposal-list-preview/proposal-list-preview.component.ts");
/* harmony import */ var _proposal_list_proposal_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../proposal-list/proposal-list.component */ "./src/app/proposal-list/proposal-list.component.ts");
/* harmony import */ var _article_article_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../article/article.component */ "./src/app/article/article.component.ts");








function HomeComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-proposal-list-preview", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("openProposalListEvent", function HomeComponent_div_11_Template_app_proposal_list_preview_openProposalListEvent_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.onOpenProposalListEvent($event); })("openArticleEvent", function HomeComponent_div_11_Template_app_proposal_list_preview_openArticleEvent_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.onOpenArticleEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-proposal-list-preview", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("openProposalListEvent", function HomeComponent_div_11_Template_app_proposal_list_preview_openProposalListEvent_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.onOpenProposalListEvent($event); })("openArticleEvent", function HomeComponent_div_11_Template_app_proposal_list_preview_openArticleEvent_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.onOpenArticleEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-proposal-list-preview", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("openProposalListEvent", function HomeComponent_div_11_Template_app_proposal_list_preview_openProposalListEvent_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.onOpenProposalListEvent($event); })("openArticleEvent", function HomeComponent_div_11_Template_app_proposal_list_preview_openArticleEvent_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.onOpenArticleEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx_r0.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx_r0.title2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx_r0.title3);
} }
function HomeComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-proposal-list", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("openArticleEvent", function HomeComponent_div_12_Template_app_proposal_list_openArticleEvent_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.onOpenArticleEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("proposalList", ctx_r1.openProposalList);
} }
function HomeComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-article", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("article", ctx_r2.openArticle);
} }
const _c0 = function (a0) { return { "hidden": a0 }; };
class HomeComponent {
    constructor(userStore) {
        this.userStore = userStore;
        this.title = "Most popular locations";
        this.title2 = "For you";
        this.title3 = "Near your location";
        this.currentUser = this.userStore.retrieveCurrentUser();
    }
    ngOnInit() {
    }
    get hasBackButton() {
        return !!this.openProposalList || !!this.openArticle;
    }
    onOpenProposalListEvent(list) {
        this.openProposalList = list;
    }
    onOpenArticleEvent(article) {
        this.openArticle = article;
    }
    onBack() {
        if (!!this.openArticle) {
            this.openArticle = undefined;
        }
        else if (!!this.openProposalList) {
            this.openProposalList = undefined;
        }
    }
    get showProposalList() {
        return !!this.openProposalList && !this.openArticle;
    }
    get showArticle() {
        return !!this.openArticle;
    }
    get articleFavIcon() {
        const article = !!this.openArticle && this.currentUser.favorites.find(a => a.id === this.openArticle.id);
        return !!article ? "favorite" : "favorite_border";
    }
    addToFavs() {
        const art = this.currentUser.favorites.find(a => a.id === this.openArticle.id);
        if (!art) {
            const favs = [
                ...this.currentUser.favorites,
                this.openArticle
            ];
            this.currentUser.favorites = favs;
        }
        else {
            const favs = this.currentUser.favorites.filter(a => a.id !== this.openArticle.id);
            this.currentUser.favorites = favs;
        }
        this.userStore.updateCurrentUser(this.currentUser);
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_store__WEBPACK_IMPORTED_MODULE_1__["Userstore"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 14, vars: 10, consts: [[1, "container"], [1, "header"], [1, "back-button", 3, "ngClass", "click"], [1, "title"], [1, "placeholder", 3, "ngClass", "click"], [1, "content"], ["class", "proposals", 4, "ngIf"], ["class", "proposal", 4, "ngIf"], ["class", "article", 4, "ngIf"], [1, "proposals"], [3, "title", "openProposalListEvent", "openArticleEvent"], [1, "proposal"], [3, "proposalList", "openArticleEvent"], [1, "article"], [3, "article"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_2_listener() { return ctx.onBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "keyboard_backspace");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_7_listener() { return ctx.addToFavs(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HomeComponent_div_11_Template, 4, 3, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HomeComponent_div_12_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, HomeComponent_div_13_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, !ctx.hasBackButton));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, !ctx.openArticle));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.articleFavIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.hasBackButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showProposalList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showArticle);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _proposal_list_preview_proposal_list_preview_component__WEBPACK_IMPORTED_MODULE_4__["ProposalListPreviewComponent"], _proposal_list_proposal_list_component__WEBPACK_IMPORTED_MODULE_5__["ProposalListComponent"], _article_article_component__WEBPACK_IMPORTED_MODULE_6__["ArticleComponent"]], styles: [".container[_ngcontent-%COMP%] {\n  padding-bottom: 64px;\n  padding-top: 64px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdGVwaGFudW50ZXJyYWluZXIvRGVza3RvcC9VTkkvSHVtYW4vQVRHL0FURy9zcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7RUFDQSxpQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgcGFkZGluZy1ib3R0b206IDY0cHg7XG4gICAgcGFkZGluZy10b3A6IDY0cHg7XG59IiwiLmNvbnRhaW5lciB7XG4gIHBhZGRpbmctYm90dG9tOiA2NHB4O1xuICBwYWRkaW5nLXRvcDogNjRweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return [{ type: _services_user_store__WEBPACK_IMPORTED_MODULE_1__["Userstore"] }]; }, null); })();


/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _proposal_list_preview_proposal_list_preview_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../proposal-list-preview/proposal-list-preview.module */ "./src/app/proposal-list-preview/proposal-list-preview.module.ts");
/* harmony import */ var _proposal_list_proposal_list_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../proposal-list/proposal-list.module */ "./src/app/proposal-list/proposal-list.module.ts");
/* harmony import */ var _article_article_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../article/article.module */ "./src/app/article/article.module.ts");








class HomeModule {
}
HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomeModule_Factory(t) { return new (t || HomeModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _proposal_list_preview_proposal_list_preview_module__WEBPACK_IMPORTED_MODULE_4__["ProposalListPreviewModule"],
            _proposal_list_proposal_list_module__WEBPACK_IMPORTED_MODULE_5__["ProposalListModule"],
            _article_article_module__WEBPACK_IMPORTED_MODULE_6__["ArticleModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
        _proposal_list_preview_proposal_list_preview_module__WEBPACK_IMPORTED_MODULE_4__["ProposalListPreviewModule"],
        _proposal_list_proposal_list_module__WEBPACK_IMPORTED_MODULE_5__["ProposalListModule"],
        _article_article_module__WEBPACK_IMPORTED_MODULE_6__["ArticleModule"]], exports: [_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                    _proposal_list_preview_proposal_list_preview_module__WEBPACK_IMPORTED_MODULE_4__["ProposalListPreviewModule"],
                    _proposal_list_proposal_list_module__WEBPACK_IMPORTED_MODULE_5__["ProposalListModule"],
                    _article_article_module__WEBPACK_IMPORTED_MODULE_6__["ArticleModule"]
                ],
                exports: [_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/init/init.component.ts":
/*!****************************************!*\
  !*** ./src/app/init/init.component.ts ***!
  \****************************************/
/*! exports provided: InitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitComponent", function() { return InitComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class InitComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    navigate(url) {
        this.router.navigate([url]);
    }
}
InitComponent.ɵfac = function InitComponent_Factory(t) { return new (t || InitComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
InitComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InitComponent, selectors: [["app-init"]], decls: 11, vars: 0, consts: [[1, "container"], [1, "title"], [1, "logo"], ["src", "https://lh6.googleusercontent.com/proxy/P41JaIJKPLEaXvz84qcMx0H9yjoUumPF981RRcji-VnKD_i_70wqYr0t_CziIWKeWBv-yQtfjCN5gPLSjUIs9ydloCj_n_YacuRzcUAHF7REZN6Uy5AoB0gn41M9OWBjh8OV6H6ptw"], [1, "button-container"], [1, "button", "login", 3, "click"], [1, "button", "register", 3, "click"]], template: function InitComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "ATG");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InitComponent_Template_div_click_6_listener() { return ctx.navigate("login"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InitComponent_Template_div_click_9_listener() { return ctx.navigate("register"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".container[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow: hidden;\n}\n.container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  margin-top: 100px;\n  margin-bottom: 50px;\n  font-size: 64px;\n}\n.container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 90%;\n}\n.container[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  margin: 50px 0px;\n}\n.container[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  width: 200px;\n  border-radius: 24px;\n  text-align: center;\n  padding: 12px;\n  color: white;\n}\n.container[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   .button.login[_ngcontent-%COMP%] {\n  background-color: #bbd500;\n  color: #487610;\n}\n.container[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   .button.register[_ngcontent-%COMP%] {\n  background-color: #487610;\n  color: #bbd500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdGVwaGFudW50ZXJyYWluZXIvRGVza3RvcC9VTkkvSHVtYW4vQVRHL0FURy9zcmMvYXBwL2luaXQvaW5pdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaW5pdC9pbml0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FDQ0o7QURDSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDQ1I7QURFSTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtBQ0FSO0FERVE7RUFDSSxVQUFBO0FDQVo7QURJSTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQ0ZSO0FESVE7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDRlo7QURJWTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtBQ0ZoQjtBREtZO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0FDSGhCIiwiZmlsZSI6InNyYy9hcHAvaW5pdC9pbml0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgIC50aXRsZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgICAgICBmb250LXNpemU6IDY0cHg7XG4gICAgfVxuXG4gICAgLmxvZ28ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgICBpbWcge1xuICAgICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5idXR0b24tY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBtYXJnaW46IDUwcHggMHB4O1xuXG4gICAgICAgIC5idXR0b24ge1xuICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEycHg7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG5cbiAgICAgICAgICAgICYubG9naW4ge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxODcsMjEzLDApO1xuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2IoNzIsMTE4LDE2KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLnJlZ2lzdGVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzIsMTE4LDE2KTtcbiAgICAgICAgICAgICAgICBjb2xvcjogcmdiKDE4NywyMTMsMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmNvbnRhaW5lciAudGl0bGUge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgZm9udC1zaXplOiA2NHB4O1xufVxuLmNvbnRhaW5lciAubG9nbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmNvbnRhaW5lciAubG9nbyBpbWcge1xuICB3aWR0aDogOTAlO1xufVxuLmNvbnRhaW5lciAuYnV0dG9uLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiA1MHB4IDBweDtcbn1cbi5jb250YWluZXIgLmJ1dHRvbi1jb250YWluZXIgLmJ1dHRvbiB7XG4gIHdpZHRoOiAyMDBweDtcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMnB4O1xuICBjb2xvcjogd2hpdGU7XG59XG4uY29udGFpbmVyIC5idXR0b24tY29udGFpbmVyIC5idXR0b24ubG9naW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmJkNTAwO1xuICBjb2xvcjogIzQ4NzYxMDtcbn1cbi5jb250YWluZXIgLmJ1dHRvbi1jb250YWluZXIgLmJ1dHRvbi5yZWdpc3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0ODc2MTA7XG4gIGNvbG9yOiAjYmJkNTAwO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InitComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-init',
                templateUrl: './init.component.html',
                styleUrls: ['./init.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/init/init.module.ts":
/*!*************************************!*\
  !*** ./src/app/init/init.module.ts ***!
  \*************************************/
/*! exports provided: InitModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitModule", function() { return InitModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _init_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./init.component */ "./src/app/init/init.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");





class InitModule {
}
InitModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: InitModule });
InitModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function InitModule_Factory(t) { return new (t || InitModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](InitModule, { declarations: [_init_component__WEBPACK_IMPORTED_MODULE_2__["InitComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]], exports: [_init_component__WEBPACK_IMPORTED_MODULE_2__["InitComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InitModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _init_component__WEBPACK_IMPORTED_MODULE_2__["InitComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
                ],
                exports: [
                    _init_component__WEBPACK_IMPORTED_MODULE_2__["InitComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









const _c0 = function (a0) { return { "disabled": a0 }; };
class LoginComponent {
    constructor(fb, router, loginService) {
        this.fb = fb;
        this.router = router;
        this.loginService = loginService;
        this.error = 0;
        this.form = this.fb.group({
            username: [""],
            password: [""]
        });
        this.form.valueChanges.subscribe(_ => this.error = 0);
    }
    ngOnInit() {
    }
    get errorText() {
        if (!!this.error)
            return "Invalid user credentials!";
        return "";
    }
    onBack() {
        this.router.navigate([""]);
    }
    login() {
        const username = this.form.value.username;
        const password = this.form.value.password;
        this.error = this.loginService.login(username, password);
        if (!this.error)
            this.router.navigate(["main"]);
    }
    get inValid() {
        const username = this.form.value.username;
        const password = this.form.value.password;
        return !username || !password || this.error !== 0;
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 22, vars: 5, consts: [[1, "container"], [1, "header"], [1, "back-button", 3, "click"], [1, "placeholder", "hidden"], [1, "title"], [3, "formGroup"], [1, "row"], ["matInput", "", "type", "text", "placeholder", "Username or e-mail", "formControlName", "username"], ["matInput", "", "type", "password", "placeholder", "Password", "formControlName", "password"], [1, "error"], [1, "button-container"], [1, "button", 3, "ngClass", "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_div_click_2_listener() { return ctx.onBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "keyboard_backspace");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "ATG");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_div_click_20_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.errorText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.inValid));
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"]], styles: [".container[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  margin-top: 100px;\n  margin-bottom: 50px;\n  font-size: 64px;\n}\n.container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  margin: 32px;\n}\n.container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  margin: 16px 32px;\n  display: flex;\n  justify-content: center;\n  background-color: rgba(187, 213, 0, 0.5);\n  padding: 0px 16px;\n  height: 70px;\n  border-radius: 35px;\n  align-items: center;\n}\n.container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  height: 20px;\n  color: red;\n}\n.container[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.container[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  width: 200px;\n  padding: 20px;\n  border-radius: 40px;\n  text-align: center;\n  font-size: 18px;\n  background-color: #487610;\n  color: #bbd500;\n}\n.container[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   .button.disabled[_ngcontent-%COMP%] {\n  opacity: 0.3;\n  pointer-events: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdGVwaGFudW50ZXJyYWluZXIvRGVza3RvcC9VTkkvSHVtYW4vQVRHL0FURy9zcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FDQ0o7QURBSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDRVI7QURDSTtFQUNJLFlBQUE7QUNDUjtBREFRO0VBQ0ksaUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSx3Q0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNFWjtBREFZO0VBQ0ksV0FBQTtBQ0VoQjtBREVRO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUNBWjtBRElJO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0FDRlI7QURJUTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUNGWjtBRElZO0VBQ0ksWUFBQTtFQUNBLG9CQUFBO0FDRmhCIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIC50aXRsZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgICAgICBmb250LXNpemU6IDY0cHg7XG4gICAgfVxuXG4gICAgZm9ybSB7XG4gICAgICAgIG1hcmdpbjogMzJweDtcbiAgICAgICAgLnJvdyB7XG4gICAgICAgICAgICBtYXJnaW46IDE2cHggMzJweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTg3LDIxMywwLDAuNSk7XG4gICAgICAgICAgICBwYWRkaW5nOiAwcHggMTZweDtcbiAgICAgICAgICAgIGhlaWdodDogNzBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDM1cHg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgICAgICBtYXQtZm9ybS1maWVsZCB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuZXJyb3Ige1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmJ1dHRvbi1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgICAuYnV0dG9uIHtcbiAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDcyLDExOCwxNik7XG4gICAgICAgICAgICBjb2xvcjogcmdiKDE4NywyMTMsMCk7XG5cbiAgICAgICAgICAgICYuZGlzYWJsZWQge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuMztcbiAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iLCIuY29udGFpbmVyIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5jb250YWluZXIgLnRpdGxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIGZvbnQtc2l6ZTogNjRweDtcbn1cbi5jb250YWluZXIgZm9ybSB7XG4gIG1hcmdpbjogMzJweDtcbn1cbi5jb250YWluZXIgZm9ybSAucm93IHtcbiAgbWFyZ2luOiAxNnB4IDMycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4NywgMjEzLCAwLCAwLjUpO1xuICBwYWRkaW5nOiAwcHggMTZweDtcbiAgaGVpZ2h0OiA3MHB4O1xuICBib3JkZXItcmFkaXVzOiAzNXB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNvbnRhaW5lciBmb3JtIC5yb3cgbWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbn1cbi5jb250YWluZXIgZm9ybSAuZXJyb3Ige1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDIwcHg7XG4gIGNvbG9yOiByZWQ7XG59XG4uY29udGFpbmVyIC5idXR0b24tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uY29udGFpbmVyIC5idXR0b24tY29udGFpbmVyIC5idXR0b24ge1xuICB3aWR0aDogMjAwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDg3NjEwO1xuICBjb2xvcjogI2JiZDUwMDtcbn1cbi5jb250YWluZXIgLmJ1dHRvbi1jb250YWluZXIgLmJ1dHRvbi5kaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuMztcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_user_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/user-store */ "./src/app/services/user-store.ts");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/login.service */ "./src/app/services/login.service.ts");








class LoginModule {
}
LoginModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LoginModule });
LoginModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LoginModule_Factory(t) { return new (t || LoginModule)(); }, providers: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _services_user_store__WEBPACK_IMPORTED_MODULE_5__["Userstore"], _services_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LoginModule, { declarations: [_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]], exports: [_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
                ],
                exports: [
                    _login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
                ],
                providers: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _services_user_store__WEBPACK_IMPORTED_MODULE_5__["Userstore"], _services_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _favorites_favorites_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../favorites/favorites.component */ "./src/app/favorites/favorites.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../profile/profile.component */ "./src/app/profile/profile.component.ts");








function MainComponent_app_home_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-home");
} }
function MainComponent_app_search_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-search");
} }
function MainComponent_app_favorites_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-favorites");
} }
function MainComponent_app_profile_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-profile");
} }
const _c0 = function (a0) { return { "active": a0 }; };
class MainComponent {
    constructor() {
        this.currTab = 0;
    }
    ngOnInit() {
    }
    switchTab(tab) {
        this.currTab = tab;
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 19, vars: 16, consts: [[1, "container"], [1, "content"], [4, "ngIf"], [1, "tabs"], [1, "tab", 3, "ngClass", "click"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MainComponent_app_home_2_Template, 1, 0, "app-home", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MainComponent_app_search_3_Template, 1, 0, "app-search", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MainComponent_app_favorites_4_Template, 1, 0, "app-favorites", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MainComponent_app_profile_5_Template, 1, 0, "app-profile", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainComponent_Template_div_click_7_listener() { return ctx.switchTab(0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainComponent_Template_div_click_10_listener() { return ctx.switchTab(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainComponent_Template_div_click_13_listener() { return ctx.switchTab(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "favorite");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainComponent_Template_div_click_16_listener() { return ctx.switchTab(3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "person");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currTab === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currTab === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currTab === 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currTab === 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx.currTab === 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx.currTab === 1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, ctx.currTab === 2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, ctx.currTab === 3));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"], _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], _search_search_component__WEBPACK_IMPORTED_MODULE_4__["SearchComponent"], _favorites_favorites_component__WEBPACK_IMPORTED_MODULE_5__["FavoritesComponent"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"]], styles: [".container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n}\n.container[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  height: 64px;\n  display: flex;\n  justify-content: center;\n  background-color: #487610;\n}\n.container[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex: 1 1 0;\n  border-right: 1px solid black;\n}\n.container[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  height: 48px;\n  width: 48px;\n  size: 48px;\n  font-size: 48px;\n}\n.container[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab.active[_ngcontent-%COMP%] {\n  background-color: #bbd510;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdGVwaGFudW50ZXJyYWluZXIvRGVza3RvcC9VTkkvSHVtYW4vQVRHL0FURy9zcmMvYXBwL21haW4vbWFpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0ksa0JBQUE7QUNEUjtBRElJO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtBQ0ZSO0FESVE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtBQ0ZaO0FESVk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FDRmhCO0FES1k7RUFDSSx5QkFBQTtBQ0hoQiIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuXG4gICAgLmNvbnRlbnQge1xuICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgfVxuXG4gICAgLnRhYnMge1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgIGhlaWdodDogNjRweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig3MiwxMTgsMTYpO1xuICAgICAgICBcbiAgICAgICAgLnRhYiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgZmxleDogMSAxIDA7XG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbWF0LWljb24ge1xuICAgICAgICAgICAgICAgIGhlaWdodDogNDhweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNDhweDtcbiAgICAgICAgICAgICAgICBzaXplOiA0OHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNDhweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxODcsMjEzLDE2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iLCIuY29udGFpbmVyIC5jb250ZW50IHtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuLmNvbnRhaW5lciAudGFicyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgcmlnaHQ6IDBweDtcbiAgaGVpZ2h0OiA2NHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ4NzYxMDtcbn1cbi5jb250YWluZXIgLnRhYnMgLnRhYiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4OiAxIDEgMDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XG59XG4uY29udGFpbmVyIC50YWJzIC50YWIgbWF0LWljb24ge1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHdpZHRoOiA0OHB4O1xuICBzaXplOiA0OHB4O1xuICBmb250LXNpemU6IDQ4cHg7XG59XG4uY29udGFpbmVyIC50YWJzIC50YWIuYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JiZDUxMDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main',
                templateUrl: './main.component.html',
                styleUrls: ['./main.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/main/main.module.ts":
/*!*************************************!*\
  !*** ./src/app/main/main.module.ts ***!
  \*************************************/
/*! exports provided: MainModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainModule", function() { return MainModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../home/home.module */ "./src/app/home/home.module.ts");
/* harmony import */ var _search_search_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../search/search.module */ "./src/app/search/search.module.ts");
/* harmony import */ var _favorites_favorites_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../favorites/favorites.module */ "./src/app/favorites/favorites.module.ts");
/* harmony import */ var _profile_profile_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../profile/profile.module */ "./src/app/profile/profile.module.ts");









class MainModule {
}
MainModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MainModule });
MainModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MainModule_Factory(t) { return new (t || MainModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _home_home_module__WEBPACK_IMPORTED_MODULE_4__["HomeModule"],
            _search_search_module__WEBPACK_IMPORTED_MODULE_5__["SearchModule"],
            _favorites_favorites_module__WEBPACK_IMPORTED_MODULE_6__["FavoritesModule"],
            _profile_profile_module__WEBPACK_IMPORTED_MODULE_7__["ProfileModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MainModule, { declarations: [_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
        _home_home_module__WEBPACK_IMPORTED_MODULE_4__["HomeModule"],
        _search_search_module__WEBPACK_IMPORTED_MODULE_5__["SearchModule"],
        _favorites_favorites_module__WEBPACK_IMPORTED_MODULE_6__["FavoritesModule"],
        _profile_profile_module__WEBPACK_IMPORTED_MODULE_7__["ProfileModule"]], exports: [_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                    _home_home_module__WEBPACK_IMPORTED_MODULE_4__["HomeModule"],
                    _search_search_module__WEBPACK_IMPORTED_MODULE_5__["SearchModule"],
                    _favorites_favorites_module__WEBPACK_IMPORTED_MODULE_6__["FavoritesModule"],
                    _profile_profile_module__WEBPACK_IMPORTED_MODULE_7__["ProfileModule"]
                ],
                exports: [_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/model/article.ts":
/*!**********************************!*\
  !*** ./src/app/model/article.ts ***!
  \**********************************/
/*! exports provided: fetchArticles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchArticles", function() { return fetchArticles; });
const articles = [
    {
        id: 1,
        imgURL: "https://www.altoadigepertutti.it/contents/images/list_point/6100/_APT0085.jpg",
        title: "Lorem ipsum",
        shortDes: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et",
        tags: ["skiing", "hiking", "winter", "hotel", "climping", "bolzano"],
        icons: ["spa", "local_hotel", "directions_walk"],
        avgStars: 0,
        avgHealtStars: 0
    },
    {
        id: 2,
        imgURL: "https://www.altoadigepertutti.it/contents/images/list_point/6100/_APT0085.jpg",
        title: "Lorem ipsum",
        shortDes: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et",
        tags: ["skiing", "hotel", "climping", "trento"],
        icons: ["spa", "local_hotel", "directions_walk"],
        avgStars: 0,
        avgHealtStars: 0
    },
    {
        id: 3,
        imgURL: "https://www.altoadigepertutti.it/contents/images/list_point/6100/_APT0085.jpg",
        title: "Lorem ipsum",
        shortDes: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et",
        tags: ["skiing", "summer", "spa", "hotel", "climping", "meltina"],
        icons: ["spa", "local_hotel", "directions_walk"],
        avgStars: 0,
        avgHealtStars: 0
    },
    {
        id: 4,
        imgURL: "https://www.altoadigepertutti.it/contents/images/list_point/6100/_APT0085.jpg",
        title: "Lorem ipsum",
        shortDes: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et",
        tags: ["skiing", "hiking", "spa", "hotel", "climping", "terlano"],
        icons: ["spa", "local_hotel", "directions_walk"],
        avgStars: 0,
        avgHealtStars: 0
    },
    {
        id: 5,
        imgURL: "https://www.altoadigepertutti.it/contents/images/list_point/6100/_APT0085.jpg",
        title: "Lorem ipsum",
        shortDes: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et",
        tags: ["skiing", "hiking", "spa", "hotel", "climping"],
        icons: ["spa", "local_hotel", "directions_walk"],
        avgStars: 0,
        avgHealtStars: 0
    },
    {
        id: 6,
        imgURL: "https://www.altoadigepertutti.it/contents/images/list_point/6100/_APT0085.jpg",
        title: "Lorem ipsum",
        shortDes: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et",
        tags: ["skiing", "hiking", "spa", "hotel", "climping"],
        icons: ["spa", "local_hotel", "directions_walk"],
        avgStars: 0,
        avgHealtStars: 0
    },
    {
        id: 7,
        imgURL: "https://www.altoadigepertutti.it/contents/images/list_point/6100/_APT0085.jpg",
        title: "Lorem ipsum",
        shortDes: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et",
        tags: ["skiing", "hiking", "spa", "hotel", "climping"],
        icons: ["spa", "local_hotel", "directions_walk"],
        avgStars: 0,
        avgHealtStars: 0
    }
];
function fetchArticles() {
    return articles;
}


/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_user_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user-store */ "./src/app/services/user-store.ts");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");











function ProfileComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_div_9_Template_mat_icon_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const activity_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.removeAc(activity_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const activity_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](activity_r2);
} }
function ProfileComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_div_18_Template_mat_icon_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const location_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.removeLoc(location_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const location_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](location_r5);
} }
const _c0 = function (a0) { return { "disabled": a0 }; };
class ProfileComponent {
    constructor(router, userStore, loginService) {
        this.router = router;
        this.userStore = userStore;
        this.loginService = loginService;
        this.activity = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("");
        this.location = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("");
        this.currentUser = this.userStore.retrieveCurrentUser();
    }
    ngOnInit() {
    }
    logout() {
        this.loginService.logout();
        this.router.navigate([""]);
    }
    get locations() {
        return this.currentUser.locations;
    }
    get activities() {
        return this.currentUser.activities;
    }
    get username() {
        return this.currentUser.username;
    }
    get email() {
        return this.currentUser.email;
    }
    addLocation() {
        const val = this.location.value;
        const locations = [
            val.toLocaleLowerCase(),
            ...this.locations
        ];
        this.currentUser.locations = locations;
        this.userStore.updateCurrentUser(this.currentUser);
    }
    addActivity() {
        const val = this.activity.value;
        if (!this.activities.includes(this.activity.value)) {
            const activities = [
                val.toLocaleLowerCase(),
                ...this.activities
            ];
            this.currentUser.activities = activities;
            this.userStore.updateCurrentUser(this.currentUser);
        }
        this.activity.setValue("");
    }
    removeLoc(loc) {
        const locs = this.locations.filter(l => !!l.localeCompare(loc));
        this.currentUser.locations = locs;
        this.userStore.updateCurrentUser(this.currentUser);
    }
    removeAc(ac) {
        const acs = this.activities.filter(a => !!a.localeCompare(ac));
        this.currentUser.activities = acs;
        this.userStore.updateCurrentUser(this.currentUser);
    }
    get locDis() {
        return !this.location.value;
    }
    get acDis() {
        return !this.activity.value;
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_store__WEBPACK_IMPORTED_MODULE_3__["Userstore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"])); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 37, vars: 12, consts: [[1, "container"], [1, "header"], [1, "placeholder", "hidden"], [1, "list-title"], [1, "list"], ["class", "item", 4, "ngFor", "ngForOf"], [1, "add"], ["matInput", "", "placeholder", "Add activity", 3, "formControl"], [3, "ngClass", "click"], ["matInput", "", "placeholder", "Add location", 3, "formControl"], [1, "user"], [1, "user-header"], [1, "name"], [1, "logout", 3, "click"], [1, "user-data"], [1, "item"], [3, "click"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Activities");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ProfileComponent_div_9_Template, 5, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_Template_mat_icon_click_13_listener() { return ctx.addActivity(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Locations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ProfileComponent_div_18_Template, 5, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_Template_mat_icon_click_22_listener() { return ctx.addLocation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "person");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_Template_div_click_30_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "E-mail:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.activities);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.activity);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx.acDis));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.locations);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.location);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx.locDis));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.username, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.email);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]], styles: [".container[_ngcontent-%COMP%] {\n  padding-bottom: 64px;\n  padding-top: 64px;\n}\n.container[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%] {\n  padding: 16px 8px;\n  font-size: 22px;\n}\n.container[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%] {\n  height: 32px;\n  padding: 8px;\n  overflow-x: scroll;\n  display: flex;\n  align-items: center;\n}\n.container[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  padding-right: 0px;\n  background-color: #487610;\n  color: #bbd500;\n  display: flex;\n  align-items: center;\n  margin-right: 8px;\n  border-radius: 20px;\n}\n.container[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  margin-right: 4px;\n}\n.container[_ngcontent-%COMP%]   .add[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  padding: 8px;\n}\n.container[_ngcontent-%COMP%]   .add[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  padding: 8px;\n  border-radius: 20px;\n  background-color: #487610;\n  color: #bbd500;\n}\n.container[_ngcontent-%COMP%]   .add[_ngcontent-%COMP%]   mat-icon.disabled[_ngcontent-%COMP%] {\n  pointer-events: none;\n  opacity: 0.3;\n}\n.container[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%] {\n  padding: 8px;\n}\n.container[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .user-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  height: 48px;\n  line-height: 48px;\n  align-items: center;\n}\n.container[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .user-header[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-size: 20px;\n  font-weight: bold;\n}\n.container[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .user-header[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  height: 30px;\n  width: 30px;\n  size: 30px;\n  font-size: 30px;\n  margin-right: 8px;\n}\n.container[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .user-header[_ngcontent-%COMP%]   .logout[_ngcontent-%COMP%] {\n  background-color: red;\n  padding: 0px 16px;\n  border-radius: 24px;\n  font-size: 18px;\n}\n.container[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .user-data[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin-right: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdGVwaGFudW50ZXJyYWluZXIvRGVza3RvcC9VTkkvSHVtYW4vQVRHL0FURy9zcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7RUFDQSxpQkFBQTtBQ0NKO0FEQ0k7RUFDSSxpQkFBQTtFQUNBLGVBQUE7QUNDUjtBREVJO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0FSO0FERVE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ0FaO0FERVk7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0FDQWhCO0FETVE7RUFDSSxZQUFBO0FDSlo7QURPUTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQ0xaO0FET1k7RUFDSSxvQkFBQTtFQUNBLFlBQUE7QUNMaEI7QURVSTtFQUNJLFlBQUE7QUNSUjtBRFVRO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNSWjtBRFVZO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDUmhCO0FEVWdCO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDUnBCO0FEWVk7RUFDSSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDVmhCO0FEZVk7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0FDYmhCIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgcGFkZGluZy1ib3R0b206IDY0cHg7XG4gICAgcGFkZGluZy10b3A6IDY0cHg7XG5cbiAgICAubGlzdC10aXRsZSB7XG4gICAgICAgIHBhZGRpbmc6IDE2cHggOHB4O1xuICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgfVxuXG4gICAgLmxpc3Qge1xuICAgICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgIC5pdGVtIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDcyLDExOCwxNik7XG4gICAgICAgICAgICBjb2xvcjogcmdiKDE4NywyMTMsMCk7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbWF0LWljb24ge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuYWRkIHtcbiAgICAgICAgbWF0LWZvcm0tZmllbGQge1xuICAgICAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgbWF0LWljb24ge1xuICAgICAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig3MiwxMTgsMTYpO1xuICAgICAgICAgICAgY29sb3I6IHJnYigxODcsMjEzLDApO1xuXG4gICAgICAgICAgICAmLmRpc2FibGVkIHtcbiAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAudXNlciB7XG4gICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgXG4gICAgICAgIC51c2VyLWhlYWRlciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQ4cHg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAubmFtZSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcblxuICAgICAgICAgICAgICAgIG1hdC1pY29uIHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgc2l6ZTogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5sb2dvdXQge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggMTZweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC51c2VyLWRhdGEge1xuICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiLmNvbnRhaW5lciB7XG4gIHBhZGRpbmctYm90dG9tOiA2NHB4O1xuICBwYWRkaW5nLXRvcDogNjRweDtcbn1cbi5jb250YWluZXIgLmxpc3QtdGl0bGUge1xuICBwYWRkaW5nOiAxNnB4IDhweDtcbiAgZm9udC1zaXplOiAyMnB4O1xufVxuLmNvbnRhaW5lciAubGlzdCB7XG4gIGhlaWdodDogMzJweDtcbiAgcGFkZGluZzogOHB4O1xuICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uY29udGFpbmVyIC5saXN0IC5pdGVtIHtcbiAgcGFkZGluZzogOHB4IDE2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ4NzYxMDtcbiAgY29sb3I6ICNiYmQ1MDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuLmNvbnRhaW5lciAubGlzdCAuaXRlbSBtYXQtaWNvbiB7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG4gIG1hcmdpbi1yaWdodDogNHB4O1xufVxuLmNvbnRhaW5lciAuYWRkIG1hdC1mb3JtLWZpZWxkIHtcbiAgcGFkZGluZzogOHB4O1xufVxuLmNvbnRhaW5lciAuYWRkIG1hdC1pY29uIHtcbiAgcGFkZGluZzogOHB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDg3NjEwO1xuICBjb2xvcjogI2JiZDUwMDtcbn1cbi5jb250YWluZXIgLmFkZCBtYXQtaWNvbi5kaXNhYmxlZCB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBvcGFjaXR5OiAwLjM7XG59XG4uY29udGFpbmVyIC51c2VyIHtcbiAgcGFkZGluZzogOHB4O1xufVxuLmNvbnRhaW5lciAudXNlciAudXNlci1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGhlaWdodDogNDhweDtcbiAgbGluZS1oZWlnaHQ6IDQ4cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uY29udGFpbmVyIC51c2VyIC51c2VyLWhlYWRlciAubmFtZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uY29udGFpbmVyIC51c2VyIC51c2VyLWhlYWRlciAubmFtZSBtYXQtaWNvbiB7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDMwcHg7XG4gIHNpemU6IDMwcHg7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG4uY29udGFpbmVyIC51c2VyIC51c2VyLWhlYWRlciAubG9nb3V0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBwYWRkaW5nOiAwcHggMTZweDtcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuLmNvbnRhaW5lciAudXNlciAudXNlci1kYXRhIHNwYW4ge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile',
                templateUrl: './profile.component.html',
                styleUrls: ['./profile.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _services_user_store__WEBPACK_IMPORTED_MODULE_3__["Userstore"] }, { type: _services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/profile/profile.module.ts":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/*! exports provided: ProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");





class ProfileModule {
}
ProfileModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProfileModule });
ProfileModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProfileModule_Factory(t) { return new (t || ProfileModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProfileModule, { declarations: [_profile_component__WEBPACK_IMPORTED_MODULE_2__["ProfileComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]], exports: [_profile_component__WEBPACK_IMPORTED_MODULE_2__["ProfileComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _profile_component__WEBPACK_IMPORTED_MODULE_2__["ProfileComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
                ],
                exports: [
                    _profile_component__WEBPACK_IMPORTED_MODULE_2__["ProfileComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/proposal-list-preview/proposal-list-preview.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/proposal-list-preview/proposal-list-preview.component.ts ***!
  \**************************************************************************/
/*! exports provided: ProposalListPreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProposalListPreviewComponent", function() { return ProposalListPreviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _model_article__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/article */ "./src/app/model/article.ts");
/* harmony import */ var _services_user_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user-store */ "./src/app/services/user-store.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function ProposalListPreviewComponent_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProposalListPreviewComponent_div_5_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const article_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.openArticle(article_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const article_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", article_r3.imgURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", article_r3.title, " ");
} }
function ProposalListPreviewComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProposalListPreviewComponent_div_5_div_1_Template, 5, 2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.articles);
} }
function ProposalListPreviewComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please change user settings to retrieve some data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ProposalListPreviewComponent {
    constructor(userStore) {
        this.userStore = userStore;
        this.openProposalListEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.openArticleEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.articles = [];
        this.currentUser = this.userStore.retrieveCurrentUser();
    }
    ngOnInit() {
        const articles = Object(_model_article__WEBPACK_IMPORTED_MODULE_1__["fetchArticles"])();
        switch (this.title) {
            case "Most popular locations":
                this.articles = this.getMostPopularLocations(articles).sort((a, b) => b.avgStars - a.avgStars);
                break;
            case "For you":
                this.articles = this.getForYou(articles).sort((a, b) => b.avgStars - a.avgStars);
                break;
            default:
                this.articles = this.getNearYourLocation(articles).sort((a, b) => b.avgStars - a.avgStars);
                break;
        }
    }
    getMostPopularLocations(articles) {
        return articles;
    }
    getForYou(articles) {
        const tags = this.currentUser.activities;
        return articles.filter(a => a.tags.some(ts => tags.includes(ts)));
    }
    getNearYourLocation(articles) {
        const tags = this.currentUser.locations;
        return articles.filter(a => a.tags.some(ts => tags.includes(ts)));
    }
    openProposalList() {
        this.openProposalListEvent.emit({
            title: this.title,
            articles: this.articles
        });
    }
    openArticle(article) {
        this.openArticleEvent.emit(article);
    }
}
ProposalListPreviewComponent.ɵfac = function ProposalListPreviewComponent_Factory(t) { return new (t || ProposalListPreviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_store__WEBPACK_IMPORTED_MODULE_2__["Userstore"])); };
ProposalListPreviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProposalListPreviewComponent, selectors: [["app-proposal-list-preview"]], inputs: { title: "title" }, outputs: { openProposalListEvent: "openProposalListEvent", openArticleEvent: "openArticleEvent" }, decls: 7, vars: 3, consts: [[1, "container"], [1, "title", 3, "click"], ["class", "list", 4, "ngIf"], ["class", "no-items", 4, "ngIf"], [1, "list"], ["class", "article-small", 3, "click", 4, "ngFor", "ngForOf"], [1, "article-small", 3, "click"], [1, "article-img"], [3, "src"], [1, "article-title"], [1, "no-items"]], template: function ProposalListPreviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProposalListPreviewComponent_Template_div_click_1_listener() { return ctx.openProposalList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "launch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProposalListPreviewComponent_div_5_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProposalListPreviewComponent_div_6_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.articles && ctx.articles.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.articles || !ctx.articles.length);
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".container[_ngcontent-%COMP%] {\n  margin: 8px;\n}\n.container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  display: flex;\n  align-items: center;\n  line-height: 24px;\n}\n.container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n.container[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%] {\n  display: flex;\n  overflow-x: scroll;\n}\n.container[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .article-small[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  margin-right: 8px;\n}\n.container[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .article-small[_ngcontent-%COMP%]   .article-img[_ngcontent-%COMP%] {\n  height: 128px;\n  width: 128px;\n  border-radius: 5px;\n}\n.container[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .article-small[_ngcontent-%COMP%]   .article-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 128px;\n  height: 128px;\n}\n.container[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .article-small[_ngcontent-%COMP%]   .article-title[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 16px;\n  padding: 8px 0px;\n}\n.container[_ngcontent-%COMP%]   .no-items[_ngcontent-%COMP%] {\n  height: 64px;\n  border-radius: 5px;\n  background-color: rgba(255, 0, 0, 0.2);\n  margin: 8px;\n  font-size: 14px;\n  text-align: center;\n  line-height: 64px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdGVwaGFudW50ZXJyYWluZXIvRGVza3RvcC9VTkkvSHVtYW4vQVRHL0FURy9zcmMvYXBwL3Byb3Bvc2FsLWxpc3QtcHJldmlldy9wcm9wb3NhbC1saXN0LXByZXZpZXcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Byb3Bvc2FsLWxpc3QtcHJldmlldy9wcm9wb3NhbC1saXN0LXByZXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FDQ0o7QURDSTtFQUNJLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ0NSO0FEQ1E7RUFDSSxnQkFBQTtBQ0NaO0FER0k7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7QUNEUjtBREdRO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FDRFo7QURHWTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNEaEI7QURHZ0I7RUFDSSxnQkFBQTtFQUNBLGFBQUE7QUNEcEI7QURLWTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDSGhCO0FEUUk7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQ0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ05SIiwiZmlsZSI6InNyYy9hcHAvcHJvcG9zYWwtbGlzdC1wcmV2aWV3L3Byb3Bvc2FsLWxpc3QtcHJldmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIG1hcmdpbjogOHB4O1xuICAgIFxuICAgIC50aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG5cbiAgICAgICAgbWF0LWljb24ge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5saXN0IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuXG4gICAgICAgIC5hcnRpY2xlLXNtYWxsIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuXG4gICAgICAgICAgICAuYXJ0aWNsZS1pbWcge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTI4cHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEyOHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcblxuICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTI4cHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTI4cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYXJ0aWNsZS10aXRsZSB7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA4cHggMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLm5vLWl0ZW1zIHtcbiAgICAgICAgaGVpZ2h0OiA2NHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDAsMCwwLjIpO1xuICAgICAgICBtYXJnaW46IDhweDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA2NHB4O1xuICAgIH1cbn0iLCIuY29udGFpbmVyIHtcbiAgbWFyZ2luOiA4cHg7XG59XG4uY29udGFpbmVyIC50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG59XG4uY29udGFpbmVyIC50aXRsZSBtYXQtaWNvbiB7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG59XG4uY29udGFpbmVyIC5saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xufVxuLmNvbnRhaW5lciAubGlzdCAuYXJ0aWNsZS1zbWFsbCB7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG4uY29udGFpbmVyIC5saXN0IC5hcnRpY2xlLXNtYWxsIC5hcnRpY2xlLWltZyB7XG4gIGhlaWdodDogMTI4cHg7XG4gIHdpZHRoOiAxMjhweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLmNvbnRhaW5lciAubGlzdCAuYXJ0aWNsZS1zbWFsbCAuYXJ0aWNsZS1pbWcgaW1nIHtcbiAgbWF4LXdpZHRoOiAxMjhweDtcbiAgaGVpZ2h0OiAxMjhweDtcbn1cbi5jb250YWluZXIgLmxpc3QgLmFydGljbGUtc21hbGwgLmFydGljbGUtdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcGFkZGluZzogOHB4IDBweDtcbn1cbi5jb250YWluZXIgLm5vLWl0ZW1zIHtcbiAgaGVpZ2h0OiA2NHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjIpO1xuICBtYXJnaW46IDhweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiA2NHB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProposalListPreviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-proposal-list-preview',
                templateUrl: './proposal-list-preview.component.html',
                styleUrls: ['./proposal-list-preview.component.scss']
            }]
    }], function () { return [{ type: _services_user_store__WEBPACK_IMPORTED_MODULE_2__["Userstore"] }]; }, { title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], openProposalListEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], openArticleEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/proposal-list-preview/proposal-list-preview.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/proposal-list-preview/proposal-list-preview.module.ts ***!
  \***********************************************************************/
/*! exports provided: ProposalListPreviewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProposalListPreviewModule", function() { return ProposalListPreviewModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _proposal_list_preview_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./proposal-list-preview.component */ "./src/app/proposal-list-preview/proposal-list-preview.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");





class ProposalListPreviewModule {
}
ProposalListPreviewModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProposalListPreviewModule });
ProposalListPreviewModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProposalListPreviewModule_Factory(t) { return new (t || ProposalListPreviewModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProposalListPreviewModule, { declarations: [_proposal_list_preview_component__WEBPACK_IMPORTED_MODULE_2__["ProposalListPreviewComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]], exports: [_proposal_list_preview_component__WEBPACK_IMPORTED_MODULE_2__["ProposalListPreviewComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProposalListPreviewModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _proposal_list_preview_component__WEBPACK_IMPORTED_MODULE_2__["ProposalListPreviewComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
                ],
                exports: [
                    _proposal_list_preview_component__WEBPACK_IMPORTED_MODULE_2__["ProposalListPreviewComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/proposal-list/proposal-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/proposal-list/proposal-list.component.ts ***!
  \**********************************************************/
/*! exports provided: ProposalListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProposalListComponent", function() { return ProposalListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _article_preview_article_preview_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../article-preview/article-preview.component */ "./src/app/article-preview/article-preview.component.ts");




function ProposalListComponent_app_article_preview_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-article-preview", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProposalListComponent_app_article_preview_3_Template_app_article_preview_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const article_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.openArticle(article_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const article_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("article", article_r1);
} }
class ProposalListComponent {
    constructor() {
        this.openArticleEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    openArticle(article) {
        this.openArticleEvent.emit(article);
    }
}
ProposalListComponent.ɵfac = function ProposalListComponent_Factory(t) { return new (t || ProposalListComponent)(); };
ProposalListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProposalListComponent, selectors: [["app-proposal-list"]], inputs: { proposalList: "proposalList" }, outputs: { openArticleEvent: "openArticleEvent" }, decls: 4, vars: 2, consts: [[1, "container"], [1, "title"], [3, "article", "click", 4, "ngFor", "ngForOf"], [3, "article", "click"]], template: function ProposalListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProposalListComponent_app_article_preview_3_Template, 1, 1, "app-article-preview", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.proposalList.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.proposalList.articles);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _article_preview_article_preview_component__WEBPACK_IMPORTED_MODULE_2__["ArticlePreviewComponent"]], styles: [".container[_ngcontent-%COMP%] {\n  padding: 8px;\n}\n.container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdGVwaGFudW50ZXJyYWluZXIvRGVza3RvcC9VTkkvSHVtYW4vQVRHL0FURy9zcmMvYXBwL3Byb3Bvc2FsLWxpc3QvcHJvcG9zYWwtbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvcG9zYWwtbGlzdC9wcm9wb3NhbC1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQ0NKO0FEQ0k7RUFDSSxlQUFBO0FDQ1IiLCJmaWxlIjoic3JjL2FwcC9wcm9wb3NhbC1saXN0L3Byb3Bvc2FsLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiA4cHg7XG5cbiAgICAudGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgfVxufSIsIi5jb250YWluZXIge1xuICBwYWRkaW5nOiA4cHg7XG59XG4uY29udGFpbmVyIC50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProposalListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-proposal-list',
                templateUrl: './proposal-list.component.html',
                styleUrls: ['./proposal-list.component.scss']
            }]
    }], function () { return []; }, { proposalList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], openArticleEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/proposal-list/proposal-list.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/proposal-list/proposal-list.module.ts ***!
  \*******************************************************/
/*! exports provided: ProposalListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProposalListModule", function() { return ProposalListModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _proposal_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./proposal-list.component */ "./src/app/proposal-list/proposal-list.component.ts");
/* harmony import */ var _article_preview_article_preview_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../article-preview/article-preview.module */ "./src/app/article-preview/article-preview.module.ts");






class ProposalListModule {
}
ProposalListModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProposalListModule });
ProposalListModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProposalListModule_Factory(t) { return new (t || ProposalListModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _article_preview_article_preview_module__WEBPACK_IMPORTED_MODULE_4__["ArticlePreviewModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProposalListModule, { declarations: [_proposal_list_component__WEBPACK_IMPORTED_MODULE_3__["ProposalListComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
        _article_preview_article_preview_module__WEBPACK_IMPORTED_MODULE_4__["ArticlePreviewModule"]], exports: [_proposal_list_component__WEBPACK_IMPORTED_MODULE_3__["ProposalListComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProposalListModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _proposal_list_component__WEBPACK_IMPORTED_MODULE_3__["ProposalListComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                    _article_preview_article_preview_module__WEBPACK_IMPORTED_MODULE_4__["ArticlePreviewModule"]
                ],
                exports: [
                    _proposal_list_component__WEBPACK_IMPORTED_MODULE_3__["ProposalListComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_register_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/register.service */ "./src/app/services/register.service.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");










const _c0 = function (a0) { return { "disabled": a0 }; };
class RegisterComponent {
    constructor(fb, router, registerService) {
        this.fb = fb;
        this.router = router;
        this.registerService = registerService;
        this.error = 0;
        this.form = this.fb.group({
            username: "",
            email: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email],
            password: "",
            cPassword: ""
        });
        this.form.valueChanges.subscribe(_ => this.error = 0);
    }
    ngOnInit() {
    }
    onBack() {
        this.router.navigate([""]);
    }
    get emailError() {
        if (this.form.invalid)
            return "Invalid e-mail!";
        if (this.error === -1)
            return "E-mail already in use!";
        return "";
    }
    get usernameError() {
        if (this.error === -2)
            return "Username already in use!";
        return "";
    }
    get passwordError() {
        if (this.form.value.password && this.form.value.password.length < 8)
            return "Use at least 8 characters!";
        return "";
    }
    get cPasswordError() {
        const password = this.form.value.password;
        const cPassword = this.form.value.cPassword;
        if (!!cPassword && cPassword !== password)
            return "Passwords do not match!";
        return "";
    }
    get inValid() {
        const pError = this.passwordError;
        const cpError = this.cPasswordError;
        const email = this.form.value.email;
        const username = this.form.value.username;
        const password = this.form.value.password;
        const cPass = this.form.value.cPassword;
        return !!pError || !!cpError || this.form.invalid || !email || !username || !password || !cPass || this.error !== 0;
    }
    register() {
        const user = {
            username: this.form.value.username,
            email: this.form.value.email,
            password: this.form.value.password,
            activities: [],
            locations: [],
            favorites: []
        };
        this.error = this.registerService.register(user);
        if (!this.error)
            this.router.navigate(["main"]);
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_register_service__WEBPACK_IMPORTED_MODULE_3__["RegisterService"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 34, vars: 8, consts: [[1, "container"], [1, "header"], [1, "back-button", 3, "click"], [1, "placeholder", "hidden"], [1, "title"], [3, "formGroup"], [1, "row"], ["matInput", "", "type", "text", "placeholder", "Username", "formControlName", "username"], [1, "error"], ["matInput", "", "type", "email", "placeholder", "E-mail", "formControlName", "email"], ["matInput", "", "type", "password", "placeholder", "Password", "formControlName", "password"], ["matInput", "", "type", "password", "placeholder", "Confirm password", "formControlName", "cPassword"], [1, "button-container"], [1, "button", 3, "ngClass", "click"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_div_click_2_listener() { return ctx.onBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "keyboard_backspace");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "ATG");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_div_click_32_listener() { return ctx.register(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.usernameError);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.emailError);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.passwordError);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.cPasswordError);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx.inValid));
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"]], styles: [".container[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  margin-top: 100px;\n  margin-bottom: 50px;\n  font-size: 64px;\n}\n.container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  margin: 32px;\n}\n.container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  margin: 0px 32px;\n  display: flex;\n  justify-content: center;\n  background-color: rgba(187, 213, 0, 0.5);\n  padding: 0px 16px;\n  height: 70px;\n  border-radius: 35px;\n  align-items: center;\n}\n.container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  height: 20px;\n  color: red;\n}\n.container[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.container[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  width: 200px;\n  padding: 20px;\n  border-radius: 40px;\n  text-align: center;\n  font-size: 18px;\n  background-color: #487610;\n  color: #bbd500;\n}\n.container[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   .button.disabled[_ngcontent-%COMP%] {\n  opacity: 0.3;\n  pointer-events: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdGVwaGFudW50ZXJyYWluZXIvRGVza3RvcC9VTkkvSHVtYW4vQVRHL0FURy9zcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FDQ0o7QURBSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDRVI7QURDSTtFQUNJLFlBQUE7QUNDUjtBREFRO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSx3Q0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNFWjtBREFZO0VBQ0ksV0FBQTtBQ0VoQjtBREVRO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUNBWjtBRElJO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0FDRlI7QURJUTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUNGWjtBRElZO0VBQ0ksWUFBQTtFQUNBLG9CQUFBO0FDRmhCIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIC50aXRsZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgICAgICBmb250LXNpemU6IDY0cHg7XG4gICAgfVxuXG4gICAgZm9ybSB7XG4gICAgICAgIG1hcmdpbjogMzJweDtcbiAgICAgICAgLnJvdyB7XG4gICAgICAgICAgICBtYXJnaW46IDBweCAzMnB4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxODcsMjEzLDAsMC41KTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCAxNnB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA3MHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzVweDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgICAgIG1hdC1mb3JtLWZpZWxkIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5lcnJvciB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgICAgIC5idXR0b24ge1xuICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzIsMTE4LDE2KTtcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoMTg3LDIxMywwKTtcblxuICAgICAgICAgICAgJi5kaXNhYmxlZCB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC4zO1xuICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSIsIi5jb250YWluZXIge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmNvbnRhaW5lciAudGl0bGUge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgZm9udC1zaXplOiA2NHB4O1xufVxuLmNvbnRhaW5lciBmb3JtIHtcbiAgbWFyZ2luOiAzMnB4O1xufVxuLmNvbnRhaW5lciBmb3JtIC5yb3cge1xuICBtYXJnaW46IDBweCAzMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxODcsIDIxMywgMCwgMC41KTtcbiAgcGFkZGluZzogMHB4IDE2cHg7XG4gIGhlaWdodDogNzBweDtcbiAgYm9yZGVyLXJhZGl1czogMzVweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5jb250YWluZXIgZm9ybSAucm93IG1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY29udGFpbmVyIGZvcm0gLmVycm9yIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiAyMHB4O1xuICBjb2xvcjogcmVkO1xufVxuLmNvbnRhaW5lciAuYnV0dG9uLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmNvbnRhaW5lciAuYnV0dG9uLWNvbnRhaW5lciAuYnV0dG9uIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ4NzYxMDtcbiAgY29sb3I6ICNiYmQ1MDA7XG59XG4uY29udGFpbmVyIC5idXR0b24tY29udGFpbmVyIC5idXR0b24uZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjM7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _services_register_service__WEBPACK_IMPORTED_MODULE_3__["RegisterService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/register/register.module.ts":
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/*! exports provided: RegisterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterModule", function() { return RegisterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_register_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/register.service */ "./src/app/services/register.service.ts");
/* harmony import */ var _services_user_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/user-store */ "./src/app/services/user-store.ts");








class RegisterModule {
}
RegisterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RegisterModule });
RegisterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RegisterModule_Factory(t) { return new (t || RegisterModule)(); }, providers: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _services_register_service__WEBPACK_IMPORTED_MODULE_5__["RegisterService"], _services_user_store__WEBPACK_IMPORTED_MODULE_6__["Userstore"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RegisterModule, { declarations: [_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]], exports: [_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
                ],
                exports: [
                    _register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"]
                ],
                providers: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _services_register_service__WEBPACK_IMPORTED_MODULE_5__["RegisterService"], _services_user_store__WEBPACK_IMPORTED_MODULE_6__["Userstore"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _model_article__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/article */ "./src/app/model/article.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _article_list_article_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../article-list/article-list.component */ "./src/app/article-list/article-list.component.ts");
/* harmony import */ var _article_article_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../article/article.component */ "./src/app/article/article.component.ts");











function SearchComponent_div_11_app_article_list_6_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-article-list", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("openArticleEvent", function SearchComponent_div_11_app_article_list_6_Template_app_article_list_openArticleEvent_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r3.onOpenArticleEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("articles", ctx_r2.articles);
} }
function SearchComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SearchComponent_div_11_app_article_list_6_Template, 1, 1, "app-article-list", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r0.searchControl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.articles && ctx_r0.articles.length);
} }
function SearchComponent_app_article_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-article", 14);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("article", ctx_r1.openArticle);
} }
const _c0 = function (a0) { return { "hidden": a0 }; };
class SearchComponent {
    constructor() {
        this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("");
        this.articles = [];
    }
    ngOnInit() {
        this.searchControl.valueChanges.subscribe(value => {
            const searchterms = value.split(" ");
            this.articles = Object(_model_article__WEBPACK_IMPORTED_MODULE_2__["fetchArticles"])().filter(art => this.filterArticle(art, searchterms));
        });
    }
    hideTitle() {
        return !!this.articles && !!this.articles.length;
    }
    filterArticle(article, searchterms) {
        for (let searchterm of searchterms) {
            if (!article.tags.includes(searchterm.toLocaleLowerCase()))
                return false;
        }
        return true;
    }
    get hasBackButton() {
        return !!this.openArticle;
    }
    onBack() {
        if (!!this.openArticle)
            this.openArticle = undefined;
        this.articles = undefined;
    }
    onOpenArticleEvent(article) {
        this.openArticle = article;
    }
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(); };
SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["app-search"]], decls: 13, vars: 8, consts: [[1, "container"], [1, "header"], [1, "back-button", 3, "ngClass", "click"], [1, "title"], [1, "placeholder", 3, "ngClass"], ["class", "search", 4, "ngIf"], [3, "article", 4, "ngIf"], [1, "search"], [1, "search-bar"], ["matPrefix", ""], ["appearance", "standard", "color", "accent"], ["matInput", "", "placeholder", "Location or activity", 3, "formControl"], [3, "articles", "openArticleEvent", 4, "ngIf"], [3, "articles", "openArticleEvent"], [3, "article"]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchComponent_Template_div_click_2_listener() { return ctx.onBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "keyboard_backspace");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "favorites");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SearchComponent_div_11_Template, 7, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SearchComponent_app_article_12_Template, 1, 1, "app-article", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, !ctx.hasBackButton));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, !ctx.openArticle));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.openArticle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.openArticle);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatPrefix"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _article_list_article_list_component__WEBPACK_IMPORTED_MODULE_7__["ArticleListComponent"], _article_article_component__WEBPACK_IMPORTED_MODULE_8__["ArticleComponent"]], styles: [".container[_ngcontent-%COMP%] {\n  padding-bottom: 64px;\n  padding-top: 64px;\n}\n.container[_ngcontent-%COMP%]   .search-bar[_ngcontent-%COMP%] {\n  padding: 0px 24px;\n  background-color: #bbd500;\n  border-radius: 48px;\n  margin-top: 24px;\n  display: flex;\n  align-items: center;\n  margin: 26px;\n}\n.container[_ngcontent-%COMP%]   .search-bar[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n.container[_ngcontent-%COMP%]   .search-bar[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  min-width: 280px;\n}\n.container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdGVwaGFudW50ZXJyYWluZXIvRGVza3RvcC9VTkkvSHVtYW4vQVRHL0FURy9zcmMvYXBwL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtFQUNBLGlCQUFBO0FDQ0o7QURDSTtFQUNJLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0NSO0FEQ1E7RUFDSSxpQkFBQTtBQ0NaO0FERVE7RUFDSSxnQkFBQTtBQ0FaO0FESUk7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7QUNGUiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogNjRweDtcbiAgICBwYWRkaW5nLXRvcDogNjRweDtcblxuICAgIC5zZWFyY2gtYmFyIHtcbiAgICAgICAgcGFkZGluZzogMHB4IDI0cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxODcsMjEzLDApO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0OHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBtYXJnaW46IDI2cHg7XG4gICAgICAgIFxuICAgICAgICBtYXQtaWNvbiB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAgICAgfVxuXG4gICAgICAgIG1hdC1mb3JtLWZpZWxkIHtcbiAgICAgICAgICAgIG1pbi13aWR0aDogMjgwcHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmb3JtIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICB9XG59IiwiLmNvbnRhaW5lciB7XG4gIHBhZGRpbmctYm90dG9tOiA2NHB4O1xuICBwYWRkaW5nLXRvcDogNjRweDtcbn1cbi5jb250YWluZXIgLnNlYXJjaC1iYXIge1xuICBwYWRkaW5nOiAwcHggMjRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JiZDUwMDtcbiAgYm9yZGVyLXJhZGl1czogNDhweDtcbiAgbWFyZ2luLXRvcDogMjRweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAyNnB4O1xufVxuLmNvbnRhaW5lciAuc2VhcmNoLWJhciBtYXQtaWNvbiB7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xufVxuLmNvbnRhaW5lciAuc2VhcmNoLWJhciBtYXQtZm9ybS1maWVsZCB7XG4gIG1pbi13aWR0aDogMjgwcHg7XG59XG4uY29udGFpbmVyIGZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-search',
                templateUrl: './search.component.html',
                styleUrls: ['./search.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/search/search.module.ts":
/*!*****************************************!*\
  !*** ./src/app/search/search.module.ts ***!
  \*****************************************/
/*! exports provided: SearchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchModule", function() { return SearchModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _article_list_article_list_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../article-list/article-list.module */ "./src/app/article-list/article-list.module.ts");
/* harmony import */ var _article_article_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../article/article.module */ "./src/app/article/article.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");








class SearchModule {
}
SearchModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SearchModule });
SearchModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SearchModule_Factory(t) { return new (t || SearchModule)(); }, providers: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _article_list_article_list_module__WEBPACK_IMPORTED_MODULE_4__["ArticleListModule"],
            _article_article_module__WEBPACK_IMPORTED_MODULE_5__["ArticleModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SearchModule, { declarations: [_search_component__WEBPACK_IMPORTED_MODULE_2__["SearchComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
        _article_list_article_list_module__WEBPACK_IMPORTED_MODULE_4__["ArticleListModule"],
        _article_article_module__WEBPACK_IMPORTED_MODULE_5__["ArticleModule"]], exports: [_search_component__WEBPACK_IMPORTED_MODULE_2__["SearchComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _search_component__WEBPACK_IMPORTED_MODULE_2__["SearchComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                    _article_list_article_list_module__WEBPACK_IMPORTED_MODULE_4__["ArticleListModule"],
                    _article_article_module__WEBPACK_IMPORTED_MODULE_5__["ArticleModule"]
                ],
                exports: [
                    _search_component__WEBPACK_IMPORTED_MODULE_2__["SearchComponent"]
                ],
                providers: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/services/feedback-store.ts":
/*!********************************************!*\
  !*** ./src/app/services/feedback-store.ts ***!
  \********************************************/
/*! exports provided: FeedBackStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedBackStore", function() { return FeedBackStore; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _model_article__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/article */ "./src/app/model/article.ts");



class FeedBackStore {
    constructor() {
        this.feedbackKey = "feedbacks";
    }
    retrieveFeedbacks() {
        const feedbacks = JSON.parse(localStorage.getItem(this.feedbackKey));
        if (!!feedbacks && feedbacks.length)
            return [...this.getDefaultFeedback(), ...feedbacks];
        return [...this.getDefaultFeedback()];
    }
    retrieveArtFeedbacks(ar) {
        return this.retrieveFeedbacks().filter(f => f.articleID === ar.id);
    }
    addFeedBack(feedback) {
        const feedbacks = [
            ...this.retrieveFeedbacks(),
            feedback
        ];
        localStorage.setItem(this.feedbackKey, JSON.stringify(feedbacks));
    }
    getDefaultFeedback() {
        let feeds = [];
        for (const a of Object(_model_article__WEBPACK_IMPORTED_MODULE_1__["fetchArticles"])()) {
            const f = {
                articleID: a.id,
                author: "stephan",
                stars: 5,
                healthStars: 4,
                comment: "Nice location!",
            };
            feeds = [
                ...feeds,
                f
            ];
        }
        return feeds;
    }
}
FeedBackStore.ɵfac = function FeedBackStore_Factory(t) { return new (t || FeedBackStore)(); };
FeedBackStore.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FeedBackStore, factory: FeedBackStore.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeedBackStore, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/services/login.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _user_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-store */ "./src/app/services/user-store.ts");



class LoginService {
    constructor(userStore) {
        this.userStore = userStore;
    }
    login(username, password) {
        const users = this.userStore.retrieveUsers();
        const lUser = users.find(u => !u.password.localeCompare(password)
            && (!u.username.localeCompare(username)
                || !u.email.localeCompare(username)));
        if (!!lUser) {
            this.userStore.setCurrentUser(lUser);
            return 0;
        }
        return -1;
    }
    logout() {
        this.userStore.removeCurrentUser();
    }
}
LoginService.ɵfac = function LoginService_Factory(t) { return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_user_store__WEBPACK_IMPORTED_MODULE_1__["Userstore"])); };
LoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoginService, factory: LoginService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _user_store__WEBPACK_IMPORTED_MODULE_1__["Userstore"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/register.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/register.service.ts ***!
  \**********************************************/
/*! exports provided: RegisterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterService", function() { return RegisterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _user_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-store */ "./src/app/services/user-store.ts");



class RegisterService {
    constructor(userStore) {
        this.userStore = userStore;
    }
    register(user) {
        const users = this.userStore.retrieveUsers();
        if (!!users.find(u => u.email === user.email))
            return -1;
        if (!!users.find(u => u.username === user.username))
            return -2;
        this.userStore.addUser(user);
        return 0;
    }
}
RegisterService.ɵfac = function RegisterService_Factory(t) { return new (t || RegisterService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_user_store__WEBPACK_IMPORTED_MODULE_1__["Userstore"])); };
RegisterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RegisterService, factory: RegisterService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _user_store__WEBPACK_IMPORTED_MODULE_1__["Userstore"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/user-store.ts":
/*!****************************************!*\
  !*** ./src/app/services/user-store.ts ***!
  \****************************************/
/*! exports provided: Userstore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Userstore", function() { return Userstore; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class Userstore {
    constructor() {
        this.usersKey = "users";
        this.currentUserKey = "currentUser";
    }
    retrieveUsers() {
        const users = JSON.parse(localStorage.getItem(this.usersKey));
        return users || [];
    }
    addUser(user) {
        const users = [
            ...this.retrieveUsers(),
            user
        ];
        localStorage.setItem(this.usersKey, JSON.stringify(users));
        localStorage.setItem(this.currentUserKey, JSON.stringify(user));
    }
    retrieveCurrentUser() {
        const user = JSON.parse(localStorage.getItem(this.currentUserKey));
        return user || undefined;
    }
    setCurrentUser(user) {
        localStorage.setItem(this.currentUserKey, JSON.stringify(user));
    }
    removeCurrentUser() {
        localStorage.removeItem(this.currentUserKey);
    }
    updateCurrentUser(user) {
        const users = [
            ...this.retrieveUsers().filter(u => !!u.username.localeCompare(user.username)),
            user
        ];
        localStorage.setItem(this.usersKey, JSON.stringify(users));
        this.setCurrentUser(user);
    }
}
Userstore.ɵfac = function Userstore_Factory(t) { return new (t || Userstore)(); };
Userstore.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: Userstore, factory: Userstore.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Userstore, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");








class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"]
        ],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"]], exports: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"]
                ],
                exports: [
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/stephanunterrainer/Desktop/UNI/Human/ATG/ATG/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map