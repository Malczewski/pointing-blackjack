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
/* harmony import */ var _login_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login/login.component */ "./src/app/login/login/login.component.ts");
/* harmony import */ var _home_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home/home.component */ "./src/app/home/home/home.component.ts");
/* harmony import */ var _common_is_authenticated_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/is-authenticated.guard */ "./src/app/common/is-authenticated.guard.ts");
/* harmony import */ var _pointing_room_room_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pointing/room/room.component */ "./src/app/pointing/room/room.component.ts");
/* harmony import */ var src_app_common_disconnect_hook_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common/disconnect-hook.guard */ "./src/app/common/disconnect-hook.guard.ts");









const routes = [
    { path: '', redirectTo: 'galaxy', pathMatch: 'full' },
    { path: 'login', component: _login_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'galaxy', component: _home_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], canActivate: [_common_is_authenticated_guard__WEBPACK_IMPORTED_MODULE_4__["IsAuthenticatedGuard"]] },
    { path: 'planet/:id', component: _pointing_room_room_component__WEBPACK_IMPORTED_MODULE_5__["RoomComponent"], canActivate: [_common_is_authenticated_guard__WEBPACK_IMPORTED_MODULE_4__["IsAuthenticatedGuard"]], canDeactivate: [src_app_common_disconnect_hook_guard__WEBPACK_IMPORTED_MODULE_6__["DisconnectHookGuard"]] },
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
/* harmony import */ var _common_pages_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/pages.class */ "./src/app/common/pages.class.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _common_user_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/user-state.service */ "./src/app/common/user-state.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");






class AppComponent {
    constructor(router, userStateService) {
        this.router = router;
        this.userStateService = userStateService;
    }
    ngOnInit() {
    }
    getUserName() {
        return this.userStateService.user && this.userStateService.user.name;
    }
    isLoggedIn() {
        return this.userStateService.isLoggedIn();
    }
    logout() {
        this.userStateService.logout();
        this.router.navigate(_common_pages_class__WEBPACK_IMPORTED_MODULE_1__["Pages"].login());
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_user_state_service__WEBPACK_IMPORTED_MODULE_3__["UserStateService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 24, vars: 3, consts: [[1, "navbar", "navbar-expand-md", "navbar-dark", "fixed-top", "bg-dark"], [1, "navbar-brand", "m-r-64"], ["id", "navbarCollapse", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item", "active"], ["routerLink", "galaxy", 1, "nav-link"], [1, "navbar-nav"], [1, "nav-link", 3, "hidden"], ["title", "Logout", 1, "nav-link", "clickable", 3, "hidden", "click"], [1, "fa", "fa-sign-out"], ["role", "main", 1, ""], [1, "footer"], [1, "container"], [1, "text-muted"], ["href", "https://github.com/Malczewski/pointing-blackjack", "target", "_blank", 1, "float-right", "github-link"], [1, "fa", "fa-github"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Pointing Blackjack");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Galaxy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_14_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "main", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "footer", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "v0.0.1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.isLoggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getUserName());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.isLoggedIn());
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["header[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  height: 56px;\n  width: 100%;\n  \n  \n  box-shadow: 3px 3px 3px 1px #343a4069;\n  \n}\n\nmain[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 56px;\n  bottom: 60px;\n  overflow: auto;\n  width: 100%;\n}\n\nfooter[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  \n  height: 60px;\n  line-height: 60px;\n  \n  background-color: #f5f5f5;\n  box-shadow: 0px -4px 5px 0px #f5f5f56e;\n}\n\nfooter[_ngcontent-%COMP%]   .github-link[_ngcontent-%COMP%] {\n  font-size: 36px;\n  color: #212121;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFByb2plY3RzXFxwb2ludGluZy1ibGFja2phY2tcXGZyb250ZW5kL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNDLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFlBTFE7RUFNUixXQUFBO0VBRWdELDhDQUFBO0VBQ0gsc0JBQUE7RUFDN0MscUNBQUE7RUFBd0MsbURBQUE7QUNBekM7O0FERUE7RUFDQyxrQkFBQTtFQUNBLFNBZFE7RUFlUixZQWRRO0VBZVIsY0FBQTtFQUNBLFdBQUE7QUNDRDs7QURDQTtFQUNDLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSw0Q0FBQTtFQUNBLFlBdkJRO0VBd0JSLGlCQXhCUTtFQXdCYyxxQ0FBQTtFQUN0Qix5QkFBQTtFQUdBLHNDQUFBO0FDR0Q7O0FEREM7RUFDQyxlQUFBO0VBQ0EsY0FBQTtBQ0dGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiRoZWFkZXI6IDU2cHg7XHJcbiRmb290ZXI6IDYwcHg7IFxyXG5oZWFkZXIge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IDA7XHJcblx0aGVpZ2h0OiAkaGVhZGVyO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cclxuXHQtd2Via2l0LWJveC1zaGFkb3c6IDNweCAzcHggM3B4IDFweCAjMzQzYTQwNjk7ICAvKiBTYWZhcmkgMy00LCBpT1MgNC4wLjIgLSA0LjIsIEFuZHJvaWQgMi4zKyAqL1xyXG5cdC1tb3otYm94LXNoYWRvdzogM3B4IDNweCAzcHggMXB4ICMzNDNhNDA2OTsgIC8qIEZpcmVmb3ggMy41IC0gMy42ICovXHJcblx0Ym94LXNoYWRvdzogM3B4IDNweCAzcHggMXB4ICMzNDNhNDA2OTsgIC8qIE9wZXJhIDEwLjUsIElFIDksIEZpcmVmb3ggNCssIENocm9tZSA2KywgaU9TIDUgKi9cclxufVxyXG5tYWluIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiAkaGVhZGVyO1xyXG5cdGJvdHRvbTogJGZvb3RlcjtcclxuXHRvdmVyZmxvdzogYXV0bztcclxuXHR3aWR0aDogMTAwJTtcclxufVxyXG5mb290ZXIge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRib3R0b206IDA7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0LyogU2V0IHRoZSBmaXhlZCBoZWlnaHQgb2YgdGhlIGZvb3RlciBoZXJlICovXHJcblx0aGVpZ2h0OiAkZm9vdGVyO1xyXG5cdGxpbmUtaGVpZ2h0OiAkZm9vdGVyOyAvKiBWZXJ0aWNhbGx5IGNlbnRlciB0aGUgdGV4dCB0aGVyZSAqL1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcblx0LXdlYmtpdC1ib3gtc2hhZG93OiAwcHggLTRweCA1cHggMHB4ICNmNWY1ZjU2ZTtcclxuXHQtbW96LWJveC1zaGFkb3c6IDBweCAtNHB4IDVweCAwcHgjZjVmNWY1NmU7XHJcblx0Ym94LXNoYWRvdzogMHB4IC00cHggNXB4IDBweCAjZjVmNWY1NmU7XHJcblxyXG5cdC5naXRodWItbGluayB7XHJcblx0XHRmb250LXNpemU6IDM2cHg7XHJcblx0XHRjb2xvcjogIzIxMjEyMTtcclxuXHR9XHJcbn1cclxuXHJcbiIsImhlYWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBoZWlnaHQ6IDU2cHg7XG4gIHdpZHRoOiAxMDAlO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDNweCAzcHggM3B4IDFweCAjMzQzYTQwNjk7XG4gIC8qIFNhZmFyaSAzLTQsIGlPUyA0LjAuMiAtIDQuMiwgQW5kcm9pZCAyLjMrICovXG4gIC1tb3otYm94LXNoYWRvdzogM3B4IDNweCAzcHggMXB4ICMzNDNhNDA2OTtcbiAgLyogRmlyZWZveCAzLjUgLSAzLjYgKi9cbiAgYm94LXNoYWRvdzogM3B4IDNweCAzcHggMXB4ICMzNDNhNDA2OTtcbiAgLyogT3BlcmEgMTAuNSwgSUUgOSwgRmlyZWZveCA0KywgQ2hyb21lIDYrLCBpT1MgNSAqL1xufVxuXG5tYWluIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDU2cHg7XG4gIGJvdHRvbTogNjBweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5mb290ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIC8qIFNldCB0aGUgZml4ZWQgaGVpZ2h0IG9mIHRoZSBmb290ZXIgaGVyZSAqL1xuICBoZWlnaHQ6IDYwcHg7XG4gIGxpbmUtaGVpZ2h0OiA2MHB4O1xuICAvKiBWZXJ0aWNhbGx5IGNlbnRlciB0aGUgdGV4dCB0aGVyZSAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAtNHB4IDVweCAwcHggI2Y1ZjVmNTZlO1xuICAtbW96LWJveC1zaGFkb3c6IDBweCAtNHB4IDVweCAwcHggI2Y1ZjVmNTZlO1xuICBib3gtc2hhZG93OiAwcHggLTRweCA1cHggMHB4ICNmNWY1ZjU2ZTtcbn1cbmZvb3RlciAuZ2l0aHViLWxpbmsge1xuICBmb250LXNpemU6IDM2cHg7XG4gIGNvbG9yOiAjMjEyMTIxO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _common_user_state_service__WEBPACK_IMPORTED_MODULE_3__["UserStateService"] }]; }, null); })();


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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var _login_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login/login.component */ "./src/app/login/login/login.component.ts");
/* harmony import */ var _home_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home/home.component */ "./src/app/home/home/home.component.ts");
/* harmony import */ var _pointing_room_room_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pointing/room/room.component */ "./src/app/pointing/room/room.component.ts");
/* harmony import */ var _pointing_room_players_room_players_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pointing/room-players/room-players.component */ "./src/app/pointing/room-players/room-players.component.ts");
/* harmony import */ var _pointing_room_cards_room_cards_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pointing/room-cards/room-cards.component */ "./src/app/pointing/room-cards/room-cards.component.ts");
/* harmony import */ var _pointing_room_results_room_results_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pointing/room-results/room-results.component */ "./src/app/pointing/room-results/room-results.component.ts");
/* harmony import */ var _pointing_room_log_room_log_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pointing/room-log/room-log.component */ "./src/app/pointing/room-log/room-log.component.ts");
/* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-clipboard */ "./node_modules/ngx-clipboard/__ivy_ngcc__/fesm2015/ngx-clipboard.js");
/* harmony import */ var ngx_pipes__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-pipes */ "./node_modules/ngx-pipes/__ivy_ngcc__/fesm2015/ngx-pipes.js");
/* harmony import */ var angular_epic_spinners__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! angular-epic-spinners */ "./node_modules/angular-epic-spinners/__ivy_ngcc__/fesm2015/angular-epic-spinners.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _pointing_hangman_progress_hangman_progress_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pointing/hangman-progress/hangman-progress.component */ "./src/app/pointing/hangman-progress/hangman-progress.component.ts");
/* harmony import */ var _pointing_complication_indicator_complication_indicator_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pointing/complication-indicator/complication-indicator.component */ "./src/app/pointing/complication-indicator/complication-indicator.component.ts");
/* harmony import */ var _common_shade_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./common/shade.pipe */ "./src/app/common/shade.pipe.ts");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/__ivy_ngcc__/fesm2015/ngx-socket-io.js");
/* harmony import */ var src_app_common_sockets_app_socket__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! src/app/common/sockets/app-socket */ "./src/app/common/sockets/app-socket.ts");
/* harmony import */ var src_app_pointing_pointing_api_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! src/app/pointing/pointing-api.service */ "./src/app/pointing/pointing-api.service.ts");


























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"],
        //{ provide: HTTP_INTERCEPTORS, useClass: UidInterceptor, multi: true },
        src_app_common_sockets_app_socket__WEBPACK_IMPORTED_MODULE_23__["AppSocket"],
        src_app_pointing_pointing_api_service__WEBPACK_IMPORTED_MODULE_24__["PointingApiService"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
            ngx_clipboard__WEBPACK_IMPORTED_MODULE_15__["ClipboardModule"],
            ngx_pipes__WEBPACK_IMPORTED_MODULE_16__["NgPipesModule"],
            angular_epic_spinners__WEBPACK_IMPORTED_MODULE_17__["SelfBuildingSquareSpinnerModule"],
            angular_epic_spinners__WEBPACK_IMPORTED_MODULE_17__["CirclesToRhumbusesSpinnerModule"],
            angular_epic_spinners__WEBPACK_IMPORTED_MODULE_17__["CirclesToRhumbusesSpinnerModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["BrowserAnimationsModule"],
            ngx_socket_io__WEBPACK_IMPORTED_MODULE_22__["SocketIoModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _login_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
        _home_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
        _pointing_room_room_component__WEBPACK_IMPORTED_MODULE_10__["RoomComponent"],
        _pointing_room_players_room_players_component__WEBPACK_IMPORTED_MODULE_11__["RoomPlayersComponent"],
        _pointing_room_cards_room_cards_component__WEBPACK_IMPORTED_MODULE_12__["RoomCardsComponent"],
        _pointing_room_results_room_results_component__WEBPACK_IMPORTED_MODULE_13__["RoomResultsComponent"],
        _pointing_room_log_room_log_component__WEBPACK_IMPORTED_MODULE_14__["RoomLogComponent"],
        _pointing_hangman_progress_hangman_progress_component__WEBPACK_IMPORTED_MODULE_19__["HangmanProgressComponent"],
        _pointing_complication_indicator_complication_indicator_component__WEBPACK_IMPORTED_MODULE_20__["ComplicationIndicatorComponent"],
        _common_shade_pipe__WEBPACK_IMPORTED_MODULE_21__["ShadePipe"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
        ngx_clipboard__WEBPACK_IMPORTED_MODULE_15__["ClipboardModule"],
        ngx_pipes__WEBPACK_IMPORTED_MODULE_16__["NgPipesModule"],
        angular_epic_spinners__WEBPACK_IMPORTED_MODULE_17__["SelfBuildingSquareSpinnerModule"],
        angular_epic_spinners__WEBPACK_IMPORTED_MODULE_17__["CirclesToRhumbusesSpinnerModule"],
        angular_epic_spinners__WEBPACK_IMPORTED_MODULE_17__["CirclesToRhumbusesSpinnerModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["BrowserAnimationsModule"],
        ngx_socket_io__WEBPACK_IMPORTED_MODULE_22__["SocketIoModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _login_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                    _home_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                    _pointing_room_room_component__WEBPACK_IMPORTED_MODULE_10__["RoomComponent"],
                    _pointing_room_players_room_players_component__WEBPACK_IMPORTED_MODULE_11__["RoomPlayersComponent"],
                    _pointing_room_cards_room_cards_component__WEBPACK_IMPORTED_MODULE_12__["RoomCardsComponent"],
                    _pointing_room_results_room_results_component__WEBPACK_IMPORTED_MODULE_13__["RoomResultsComponent"],
                    _pointing_room_log_room_log_component__WEBPACK_IMPORTED_MODULE_14__["RoomLogComponent"],
                    _pointing_hangman_progress_hangman_progress_component__WEBPACK_IMPORTED_MODULE_19__["HangmanProgressComponent"],
                    _pointing_complication_indicator_complication_indicator_component__WEBPACK_IMPORTED_MODULE_20__["ComplicationIndicatorComponent"],
                    _common_shade_pipe__WEBPACK_IMPORTED_MODULE_21__["ShadePipe"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                    ngx_clipboard__WEBPACK_IMPORTED_MODULE_15__["ClipboardModule"],
                    ngx_pipes__WEBPACK_IMPORTED_MODULE_16__["NgPipesModule"],
                    angular_epic_spinners__WEBPACK_IMPORTED_MODULE_17__["SelfBuildingSquareSpinnerModule"],
                    angular_epic_spinners__WEBPACK_IMPORTED_MODULE_17__["CirclesToRhumbusesSpinnerModule"],
                    angular_epic_spinners__WEBPACK_IMPORTED_MODULE_17__["CirclesToRhumbusesSpinnerModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["BrowserAnimationsModule"],
                    ngx_socket_io__WEBPACK_IMPORTED_MODULE_22__["SocketIoModule"],
                ],
                providers: [
                    ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"],
                    //{ provide: HTTP_INTERCEPTORS, useClass: UidInterceptor, multi: true },
                    src_app_common_sockets_app_socket__WEBPACK_IMPORTED_MODULE_23__["AppSocket"],
                    src_app_pointing_pointing_api_service__WEBPACK_IMPORTED_MODULE_24__["PointingApiService"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/common/color-utils.class.ts":
/*!*********************************************!*\
  !*** ./src/app/common/color-utils.class.ts ***!
  \*********************************************/
/*! exports provided: ColorUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorUtils", function() { return ColorUtils; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

class ColorUtils {
    static blendColors(color1, color2, percentage) {
        let regex = /#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})/;
        if (!regex.test(color1) || !regex.test(color2))
            return color1;
        let matcher1 = color1.match(regex);
        let matcher2 = color2.match(regex);
        let rgb1 = lodash__WEBPACK_IMPORTED_MODULE_0__["range"](1, 4).map(i => parseInt(matcher1[i], 16));
        let rgb2 = lodash__WEBPACK_IMPORTED_MODULE_0__["range"](1, 4).map(i => parseInt(matcher2[i], 16));
        return '#' + lodash__WEBPACK_IMPORTED_MODULE_0__["range"](0, 3)
            .map(i => rgb1[i] * (1 - percentage) + rgb2[i] * percentage)
            .map(num => Math.round(num).toString(16))
            .map(str => str.length === 2 ? str : ('0' + str))
            .join('');
    }
}


/***/ }),

/***/ "./src/app/common/disconnect-hook.guard.ts":
/*!*************************************************!*\
  !*** ./src/app/common/disconnect-hook.guard.ts ***!
  \*************************************************/
/*! exports provided: DisconnectHookGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisconnectHookGuard", function() { return DisconnectHookGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_common_sockets_app_socket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/common/sockets/app-socket */ "./src/app/common/sockets/app-socket.ts");



class DisconnectHookGuard {
    constructor(appSocket) {
        this.appSocket = appSocket;
    }
    canDeactivate(component, currentRoute, currentState, nextState) {
        this.appSocket.disconnect();
        return true;
    }
}
DisconnectHookGuard.ɵfac = function DisconnectHookGuard_Factory(t) { return new (t || DisconnectHookGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_common_sockets_app_socket__WEBPACK_IMPORTED_MODULE_1__["AppSocket"])); };
DisconnectHookGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DisconnectHookGuard, factory: DisconnectHookGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DisconnectHookGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: src_app_common_sockets_app_socket__WEBPACK_IMPORTED_MODULE_1__["AppSocket"] }]; }, null); })();


/***/ }),

/***/ "./src/app/common/is-authenticated.guard.ts":
/*!**************************************************!*\
  !*** ./src/app/common/is-authenticated.guard.ts ***!
  \**************************************************/
/*! exports provided: IsAuthenticatedGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsAuthenticatedGuard", function() { return IsAuthenticatedGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _pages_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages.class */ "./src/app/common/pages.class.ts");
/* harmony import */ var _user_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-state.service */ "./src/app/common/user-state.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class IsAuthenticatedGuard {
    constructor(userStateService, router) {
        this.userStateService = userStateService;
        this.router = router;
    }
    canActivate(next, state) {
        const loggedIn = this.userStateService.tryLogin();
        if (!loggedIn) {
            this.router.navigate(_pages_class__WEBPACK_IMPORTED_MODULE_1__["Pages"].login(), { queryParams: { returnUrl: state.url } });
        }
        return loggedIn;
    }
}
IsAuthenticatedGuard.ɵfac = function IsAuthenticatedGuard_Factory(t) { return new (t || IsAuthenticatedGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_user_state_service__WEBPACK_IMPORTED_MODULE_2__["UserStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
IsAuthenticatedGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: IsAuthenticatedGuard, factory: IsAuthenticatedGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IsAuthenticatedGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _user_state_service__WEBPACK_IMPORTED_MODULE_2__["UserStateService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/common/pages.class.ts":
/*!***************************************!*\
  !*** ./src/app/common/pages.class.ts ***!
  \***************************************/
/*! exports provided: Pages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pages", function() { return Pages; });
class Pages {
    static login() { return ['/login']; }
    static home() { return ['/galaxy']; }
    static room(id) { return ['/planet', id]; }
}


/***/ }),

/***/ "./src/app/common/shade.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/common/shade.pipe.ts ***!
  \**************************************/
/*! exports provided: ShadePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShadePipe", function() { return ShadePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_common_color_utils_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/common/color-utils.class */ "./src/app/common/color-utils.class.ts");



class ShadePipe {
    transform(value, percentage) {
        let baseColor = percentage > 0 ? '#ffffff' : '#101010';
        return src_app_common_color_utils_class__WEBPACK_IMPORTED_MODULE_1__["ColorUtils"].blendColors(value, baseColor, Math.abs(percentage));
    }
}
ShadePipe.ɵfac = function ShadePipe_Factory(t) { return new (t || ShadePipe)(); };
ShadePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "shade", type: ShadePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShadePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'shade'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/common/sockets/app-socket.ts":
/*!**********************************************!*\
  !*** ./src/app/common/sockets/app-socket.ts ***!
  \**********************************************/
/*! exports provided: AppSocket */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSocket", function() { return AppSocket; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/__ivy_ngcc__/fesm2015/ngx-socket-io.js");



class AppSocket extends ngx_socket_io__WEBPACK_IMPORTED_MODULE_1__["Socket"] {
    constructor() {
        super({ url: '', options: { path: '/pointing' } });
    }
}
AppSocket.ɵfac = function AppSocket_Factory(t) { return new (t || AppSocket)(); };
AppSocket.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AppSocket, factory: AppSocket.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppSocket, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/common/storage/cookie-storage.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/common/storage/cookie-storage.service.ts ***!
  \**********************************************************/
/*! exports provided: CookieStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookieStorageService", function() { return CookieStorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");



class CookieStorageService {
    constructor(cookieService) {
        this.cookieService = cookieService;
    }
    get(key) {
        return this.cookieService.get(key);
    }
    put(key, value) {
        this.cookieService.set(key, value, 0, '/');
    }
    clear() {
        this.cookieService.deleteAll();
    }
}
CookieStorageService.ɵfac = function CookieStorageService_Factory(t) { return new (t || CookieStorageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"])); };
CookieStorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CookieStorageService, factory: CookieStorageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CookieStorageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/common/storage/property.enum.ts":
/*!*************************************************!*\
  !*** ./src/app/common/storage/property.enum.ts ***!
  \*************************************************/
/*! exports provided: Property */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Property", function() { return Property; });
var Property;
(function (Property) {
    Property["UID"] = "pb-uid";
    Property["NAME"] = "pb-name";
})(Property || (Property = {}));


/***/ }),

/***/ "./src/app/common/storage/session-storage.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/common/storage/session-storage.service.ts ***!
  \***********************************************************/
/*! exports provided: SessionStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionStorageService", function() { return SessionStorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SessionStorageService {
    constructor() { }
    get(key) {
        return sessionStorage.getItem(key);
    }
    put(key, value) {
        sessionStorage.setItem(key, value);
    }
    clear() {
        sessionStorage.clear();
    }
}
SessionStorageService.ɵfac = function SessionStorageService_Factory(t) { return new (t || SessionStorageService)(); };
SessionStorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SessionStorageService, factory: SessionStorageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SessionStorageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/common/user-state.service.ts":
/*!**********************************************!*\
  !*** ./src/app/common/user-state.service.ts ***!
  \**********************************************/
/*! exports provided: UserStateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserStateService", function() { return UserStateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _storage_property_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage/property.enum */ "./src/app/common/storage/property.enum.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_common_storage_cookie_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common/storage/cookie-storage.service */ "./src/app/common/storage/cookie-storage.service.ts");
/* harmony import */ var src_app_common_storage_session_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/storage/session-storage.service */ "./src/app/common/storage/session-storage.service.ts");






class UserStateService {
    constructor(cookieStorage, sessionStorage) {
        this.cookieStorage = cookieStorage;
        this.sessionStorage = sessionStorage;
        this.COOKIES = true;
    }
    isLoggedIn() {
        return !!this.user;
    }
    tryLogin() {
        if (this.isLoggedIn())
            return true;
        const uid = this.getStorage().get(_storage_property_enum__WEBPACK_IMPORTED_MODULE_1__["Property"].UID);
        const name = this.getStorage().get(_storage_property_enum__WEBPACK_IMPORTED_MODULE_1__["Property"].NAME);
        const loggedIn = !lodash__WEBPACK_IMPORTED_MODULE_2__["isEmpty"](uid) && !lodash__WEBPACK_IMPORTED_MODULE_2__["isEmpty"](name);
        if (loggedIn) {
            this.user = { uid, name };
        }
        return loggedIn;
    }
    login(name) {
        this.user = {
            uid: this.generateUID(),
            name
        };
        this.getStorage().put(_storage_property_enum__WEBPACK_IMPORTED_MODULE_1__["Property"].UID, this.user.uid);
        this.getStorage().put(_storage_property_enum__WEBPACK_IMPORTED_MODULE_1__["Property"].NAME, this.user.name);
    }
    logout() {
        this.getStorage().clear();
        delete this.user;
    }
    getStorage() {
        return this.COOKIES ? this.cookieStorage : this.sessionStorage;
    }
    generateUID() {
        return Math.random().toString(36).substring(2) + Date.now().toString(36);
    }
    getUid() {
        return this.user.uid;
    }
}
UserStateService.ɵfac = function UserStateService_Factory(t) { return new (t || UserStateService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_common_storage_cookie_storage_service__WEBPACK_IMPORTED_MODULE_3__["CookieStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_common_storage_session_storage_service__WEBPACK_IMPORTED_MODULE_4__["SessionStorageService"])); };
UserStateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserStateService, factory: UserStateService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserStateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: src_app_common_storage_cookie_storage_service__WEBPACK_IMPORTED_MODULE_3__["CookieStorageService"] }, { type: src_app_common_storage_session_storage_service__WEBPACK_IMPORTED_MODULE_4__["SessionStorageService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/home/home/home.component.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home/home.component.ts ***!
  \*********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_pages_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/pages.class */ "./src/app/common/pages.class.ts");
/* harmony import */ var src_app_home_home_planets_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/home/home/planets.const */ "./src/app/home/home/planets.const.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function HomeComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const door_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.enterRoom(door_r2.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const door_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", door_r2.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](door_r2.name);
} }
class HomeComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        this.doors = lodash__WEBPACK_IMPORTED_MODULE_1__["map"](src_app_home_home_planets_const__WEBPACK_IMPORTED_MODULE_3__["Planets"], planet => ({ id: planet, name: planet, url: `assets/planets/${planet}.jpg` }));
    }
    enterRoom(id) {
        this.router.navigate(_common_pages_class__WEBPACK_IMPORTED_MODULE_2__["Pages"].room(id));
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 4, vars: 1, consts: [[1, "rooms"], [1, "rooms-header"], ["class", "door clickable", 3, "click", 4, "ngFor", "ngForOf"], [1, "door", "clickable", 3, "click"], [1, "planet", 3, "src"], [1, "name"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Choose your destination");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeComponent_div_3_Template, 4, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.doors);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: [".rooms[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n  padding: 16px;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n.rooms[_ngcontent-%COMP%]   .door[_ngcontent-%COMP%] {\n  font-size: 14vh;\n  height: 21vw;\n  width: 21vw;\n  border-radius: 3vw;\n  border: 1vw solid;\n  overflow: hidden;\n  margin-bottom: 3vw;\n  background: radial-gradient(#000000 0%, #000000 80%, #ffffff 100%);\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr;\n}\n.rooms[_ngcontent-%COMP%]   .door[_ngcontent-%COMP%]   .planet[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  padding: 2vw;\n  grid-column: 1;\n  grid-row: 1;\n}\n.rooms[_ngcontent-%COMP%]   .door[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  grid-column: 1;\n  grid-row: 1;\n  align-self: end;\n  justify-self: center;\n  color: #ffffff;\n  font-size: 3vw;\n  text-transform: capitalize;\n  text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;\n}\n.rooms[_ngcontent-%COMP%]   .rooms-header[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  font-size: 32px;\n  margin-bottom: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lL0M6XFxQcm9qZWN0c1xccG9pbnRpbmctYmxhY2tqYWNrXFxmcm9udGVuZC9zcmNcXGFwcFxcaG9tZVxcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQ0Q7QURDQztFQUNDLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0VBQUE7RUFFQSxhQUFBO0VBQ0EsMEJBQUE7RUFDQSx1QkFBQTtBQ0FGO0FERUU7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQ0FIO0FER0U7RUFDQyxjQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7RUFFQSxpRUFBQTtBQ0ZIO0FETUM7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNKRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvb21zIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC13cmFwOiB3cmFwO1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG5cdHBhZGRpbmc6IDE2cHg7XHJcblx0b3ZlcmZsb3cteTogYXV0bztcclxuXHRvdmVyZmxvdy14OiBoaWRkZW47XHJcblxyXG5cdC5kb29yIHtcclxuXHRcdGZvbnQtc2l6ZTogMTR2aDtcclxuXHRcdGhlaWdodDogMjF2dztcclxuXHRcdHdpZHRoOiAyMXZ3O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogM3Z3O1xyXG5cdFx0Ym9yZGVyOiAxdncgc29saWQ7XHJcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogM3Z3O1xyXG5cdFx0YmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KCMwMDAwMDAgMCUsICMwMDAwMDAgODAlLCAjZmZmZmZmIDEwMCUpO1xyXG5cclxuXHRcdGRpc3BsYXk6IGdyaWQ7XHJcblx0XHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuXHRcdGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xyXG5cclxuXHRcdC5wbGFuZXQge1xyXG5cdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0XHRwYWRkaW5nOiAydnc7XHJcblx0XHRcdGdyaWQtY29sdW1uOiAxO1xyXG5cdFx0XHRncmlkLXJvdzogMTtcclxuXHRcdH1cclxuXHJcblx0XHQubmFtZSB7XHJcblx0XHRcdGdyaWQtY29sdW1uOiAxO1xyXG5cdFx0XHRncmlkLXJvdzogMTtcclxuXHRcdFx0YWxpZ24tc2VsZjogZW5kO1xyXG5cdFx0XHRqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxuXHRcdFx0Y29sb3I6ICNmZmZmZmY7XHJcblx0XHRcdGZvbnQtc2l6ZTogM3Z3O1xyXG5cdFx0XHR0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuXHJcblx0XHRcdHRleHQtc2hhZG93OiAtMnB4IDAgYmxhY2ssIDAgMnB4IGJsYWNrLCAycHggMCBibGFjaywgMCAtMnB4IGJsYWNrO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LnJvb21zLWhlYWRlciB7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdGZvbnQtc2l6ZTogMzJweDtcclxuXHRcdG1hcmdpbi1ib3R0b206IDE2cHg7XHJcblx0fVxyXG59IiwiLnJvb21zIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBwYWRkaW5nOiAxNnB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG4ucm9vbXMgLmRvb3Ige1xuICBmb250LXNpemU6IDE0dmg7XG4gIGhlaWdodDogMjF2dztcbiAgd2lkdGg6IDIxdnc7XG4gIGJvcmRlci1yYWRpdXM6IDN2dztcbiAgYm9yZGVyOiAxdncgc29saWQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbi1ib3R0b206IDN2dztcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KCMwMDAwMDAgMCUsICMwMDAwMDAgODAlLCAjZmZmZmZmIDEwMCUpO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG59XG4ucm9vbXMgLmRvb3IgLnBsYW5ldCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDJ2dztcbiAgZ3JpZC1jb2x1bW46IDE7XG4gIGdyaWQtcm93OiAxO1xufVxuLnJvb21zIC5kb29yIC5uYW1lIHtcbiAgZ3JpZC1jb2x1bW46IDE7XG4gIGdyaWQtcm93OiAxO1xuICBhbGlnbi1zZWxmOiBlbmQ7XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiAzdnc7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICB0ZXh0LXNoYWRvdzogLTJweCAwIGJsYWNrLCAwIDJweCBibGFjaywgMnB4IDAgYmxhY2ssIDAgLTJweCBibGFjaztcbn1cbi5yb29tcyAucm9vbXMtaGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/home/home/planets.const.ts":
/*!********************************************!*\
  !*** ./src/app/home/home/planets.const.ts ***!
  \********************************************/
/*! exports provided: Planets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Planets", function() { return Planets; });
const Planets = [
    'ariel',
    'callisto',
    'charon',
    'enceladus',
    'europa',
    'ganymede',
    'helene',
    'hyperion',
    'mimas',
    'miranda',
    //'moon',
    'phobos',
    'titan'
];


/***/ }),

/***/ "./src/app/login/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/login/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _common_user_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/user-state.service */ "./src/app/common/user-state.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






class LoginComponent {
    constructor(route, userStateService, router) {
        this.route = route;
        this.userStateService = userStateService;
        this.router = router;
        this.heisenberg = false;
    }
    ngOnInit() {
        this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
    }
    onSubmit() {
        if (!lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](this.userName)) {
            this.userStateService.login(this.userName);
            if (/heisenberg/i.test(this.userName)) {
                this.heisenberg = true;
                setTimeout(() => {
                    this.router.navigateByUrl(this.returnUrl);
                }, 2000);
            }
            else
                this.router.navigateByUrl(this.returnUrl);
        }
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_user_state_service__WEBPACK_IMPORTED_MODULE_3__["UserStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 10, vars: 3, consts: [[1, "login-container"], ["role", "form", 3, "ngSubmit"], [1, "input-group"], ["type", "text", "placeholder", "Now, say my name", "id", "name", "name", "name", "required", "", "minlength", "3", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "ngModel"], [1, "input-group-append"], ["type", "submit", 1, "btn", "btn-icon", "btn-primary", 3, "disabled"], [1, "fa", "fa-sign-in"], [1, "alert", "alert-info", "m-t-8", "p-t-4", "p-b-4", 3, "hidden"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_1_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_3_listener($event) { return ctx.userName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "You're God damn right");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.heisenberg);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: [".login-container[_ngcontent-%COMP%] {\n\t\t\tdisplay: flex;\n\t\t\theight: 100%;\n\t\t\twidth: 100%;\n\t\t\tjustify-content: center;\n\t\t\talign-items: center;\n\t\t\tform {\n\t\t\t\tdisplay: flex;\n\t\t\t}\n\t\t}"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                template: `
		<div class="login-container">
			<form role="form" (ngSubmit)="onSubmit()">
				<div class="input-group">
					<input type="text"
						[(ngModel)]="userName"
						class="form-control"
						placeholder="Now, say my name"
						id="name" name="name"
						#name="ngModel"
						required minlength="3" />
					<div class="input-group-append">
						<button type="submit" [disabled]="name.invalid" class="btn btn-icon btn-primary">
							<i class="fa fa-sign-in"></i>
						</button>
					</div>
				</div>
				<div [hidden]="!heisenberg" class="alert alert-info m-t-8 p-t-4 p-b-4">You're God damn right</div>
			</form>
		</div>
	`,
                styles: [`
		.login-container {
			display: flex;
			height: 100%;
			width: 100%;
			justify-content: center;
			align-items: center;
			form {
				display: flex;
			}
		}
	`]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _common_user_state_service__WEBPACK_IMPORTED_MODULE_3__["UserStateService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pointing/complication-indicator/complication-indicator.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pointing/complication-indicator/complication-indicator.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ComplicationIndicatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplicationIndicatorComponent", function() { return ComplicationIndicatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




class ComplicationIndicatorComponent {
    constructor() {
        this.COMPLEXITY_MAPPING = {
            1: [2],
            2: [1, 2, 5],
            3: lodash__WEBPACK_IMPORTED_MODULE_1__["range"](1, 6),
            5: lodash__WEBPACK_IMPORTED_MODULE_1__["range"](1, 8),
            8: lodash__WEBPACK_IMPORTED_MODULE_1__["range"](1, 11),
            13: lodash__WEBPACK_IMPORTED_MODULE_1__["range"](1, 14)
        };
    }
    ngOnInit() {
    }
    getClasses() {
        return lodash__WEBPACK_IMPORTED_MODULE_1__["map"](this.COMPLEXITY_MAPPING[this.complexity], i => `show-m${i}`).join(' ');
    }
}
ComplicationIndicatorComponent.ɵfac = function ComplicationIndicatorComponent_Factory(t) { return new (t || ComplicationIndicatorComponent)(); };
ComplicationIndicatorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ComplicationIndicatorComponent, selectors: [["complication-indicator"]], inputs: { complexity: "complexity" }, decls: 152, vars: 1, consts: [["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "viewBox", "0 0 599 494", "version", "1.1", 3, "ngClass"], [1, "m1"], ["d", "M 903.213168 1635.999178 L 986.228793 1625.007907 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(89.411765%,0%,16.862745%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 963.598967 1627.992947 L 1047.287745 1616.863297 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(89.411765%,0%,16.862745%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 1046.594793 1617.001676 L 1191.599906 1596.007559 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(89.411765%,0%,16.862745%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 1208.64652 1579.006674 C 1208.64652 1589.503732 1200.766668 1594.663303 1188.887495 1596.482003 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(89.411765%,0%,16.862745%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 1208.606923 1579.164822 L 1208.606923 1326.167921 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(89.411765%,0%,16.862745%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 1208.606923 1327.274956 C 1208.606923 1319.545483 1213.239801 1315.354567 1219.595159 1312.171843 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(89.411765%,0%,16.862745%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 1219.595159 1312.171843 L 1399.426049 1231.813006 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(89.411765%,0%,16.862745%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 1398.495513 1231.990922 C 1403.049197 1229.480326 1420.056213 1212.380598 1440.983358 1220.228682 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(89.411765%,0%,16.862745%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 1507.526529 1235.134109 C 1456.881652 1233.82939 1456.604471 1219.240258 1444.903485 1221.019421 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(89.411765%,0%,16.862745%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 1508.298675 1234.363139 C 1545.084516 1234.600361 1548.529476 1213.606244 1580.187474 1213.171337 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(89.411765%,0%,16.862745%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 1579.751904 1213.329485 C 1579.751904 1213.329485 1626.021285 1210.067687 1647.680979 1192.256294 C 1669.340672 1174.444901 1707.294632 1108.062373 1707.294632 1108.062373 L 1707.294632 1059.174943 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(89.411765%,0%,16.862745%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 1707.492618 1060.281977 C 1707.492618 1042.589195 1703.849671 1034.38528 1691.673518 1026.75465 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(89.411765%,0%,16.862745%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 1692.307074 1027.169787 L 1649.601445 996.172824 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(89.411765%,0%,16.862745%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 1635.603819 969.920294 C 1635.603819 983.738455 1644.077629 993.385469 1650.571578 996.587962 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(89.411765%,0%,16.862745%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 1635.801805 971.205244 L 1635.801805 71.996774 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(89.411765%,0%,16.862745%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], [1, "m2"], ["d", "M 568.299666 1161.041878 L 510.527285 1216.215682 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(59.215686%,84.313725%,0%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 567.309735 1161.990764 C 573.467107 1156.000917 576.456699 1151.157642 593.602306 1151.157642 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(59.215686%,84.313725%,0%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 593.008347 1151.197179 L 797.290536 1151.197179 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(59.215686%,84.313725%,0%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 808.912328 1130.163525 C 808.912328 1141.767618 803.546901 1151.17741 796.914362 1151.17741 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(59.215686%,84.313725%,0%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 808.912328 1113.558009 L 808.912328 1130.558894 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(59.215686%,84.313725%,0%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 808.912328 1113.755693 C 808.912328 1108.24029 815.564665 1103.555162 823.305927 1103.555162 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(59.215686%,84.313725%,0%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 823.008947 1103.001645 L 1834.995748 1103.001645 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(59.215686%,84.313725%,0%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 1860.753756 1126.921495 C 1852.458133 1118.045452 1849.211159 1102.981876 1834.758165 1102.981876 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(59.215686%,84.313725%,0%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 1860.278589 1126.387747 L 2102.277155 1368.393377 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(59.215686%,84.313725%,0%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 2099.822125 1366.001392 C 2105.900303 1371.2005 2116.86874 1374.205307 2134.568708 1374.205307 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(59.215686%,84.313725%,0%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 2133.004617 1374.007623 L 2927.998513 1374.007623 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(59.215686%,84.313725%,0%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 2956.607523 1409.333882 C 2956.607523 1390.000316 2945.084725 1373.948317 2927.958916 1373.948317 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(59.215686%,84.313725%,0%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 2956.607523 1408.167542 L 2956.607523 1641.178517 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(59.215686%,84.313725%,0%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], [1, "m3"], ["d", "M 1146.597637 1605.872027 L 1239.591768 1605.872027 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(100%,81.960784%,0%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 1253.609192 1591.045673 C 1253.609192 1598.775145 1247.055848 1605.872027 1239.314587 1605.872027 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(100%,81.960784%,0%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 1253.609192 1592.567845 L 1253.609192 1446.47884 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(100%,81.960784%,0%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 1253.609192 1447.190505 C 1253.609192 1440.568067 1246.501487 1434.222387 1238.760225 1434.222387 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(100%,81.960784%,0%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 1239.591768 1434.222387 L 1133.60974 1434.222387 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(100%,81.960784%,0%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 1113.49434 1404.688291 C 1113.49434 1420.700753 1121.730567 1434.242156 1134.995644 1434.242156 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(100%,81.960784%,0%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 1113.49434 1405.004586 L 1113.49434 894.997786 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(100%,81.960784%,0%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 1113.49434 896.005978 C 1113.49434 885.489151 1124.225193 876.158432 1137.49027 876.158432 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(100%,81.960784%,0%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 1137.609062 876.000285 L 1778.609271 876.000285 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(100%,81.960784%,0%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 1799.991783 859.473842 C 1799.991783 868.330118 1789.498513 876.178201 1777.89652 876.178201 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(100%,81.960784%,0%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 1799.991783 860.304118 L 1799.991783 89.294186 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(100%,81.960784%,0%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 1799.991783 90.005851 C 1799.991783 81.703093 1792.903876 74.032926 1785.162615 74.032926 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(100%,81.960784%,0%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 1785.994157 74.171306 L 1710.996974 74.171306 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(100%,81.960784%,0%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], [1, "m4"], ["d", "M 1119.493322 1368.492219 L 1119.493322 896.994402 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(37.254902%,14.509804%,62.352941%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 1118.740975 897.725835 C 1119.572517 886.240353 1129.412432 879.341156 1153.606349 880.171432 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(37.254902%,14.509804%,62.352941%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 1150.003 881.990132 L 1883.502374 881.990132 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(37.254902%,14.509804%,62.352941%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 1911.596619 905.494844 C 1911.596619 892.783717 1898.489931 881.950595 1882.453047 881.950595 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(37.254902%,14.509804%,62.352941%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 1911.596619 905.000633 L 1911.596619 1367.009584 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(37.254902%,14.509804%,62.352941%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 1911.596619 1366.337456 C 1911.596619 1377.941549 1886.313778 1388.023469 1855.903094 1388.023469 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(37.254902%,14.509804%,62.352941%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 1856.596045 1388.201385 L 1179.601941 1388.201385 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(37.254902%,14.509804%,62.352941%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 1118.602384 1367.484027 C 1118.602384 1378.534603 1148.5577 1388.181617 1185.600923 1388.181617 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(37.254902%,14.509804%,62.352941%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], [1, "m5"], ["d", "M 916.161467 1634.16071 L 850.608227 1649.975487 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(67.45098%,30.980392%,77.647059%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 836.6304 1674.626771 C 836.6304 1660.80861 840.946499 1651.853492 851.301179 1649.777802 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(67.45098%,30.980392%,77.647059%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 836.590802 1673.974412 L 836.590802 2090.970553 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(67.45098%,30.980392%,77.647059%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 836.571004 2089.863518 C 836.947178 2107.160931 823.54351 2116.412576 809.03112 2115.997438 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(67.45098%,30.980392%,77.647059%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 615.321395 2116.392807 L 809.60528 2115.97767 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(67.45098%,30.980392%,77.647059%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], [1, "m6"], ["d", "M 1664.90578 1792.407325 L 1558.408989 1792.407325 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(84.313725%,8.627451%,44.313725%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 1649.997418 1792.782926 L 1793.002869 1792.782926 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(84.313725%,8.627451%,44.313725%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 1811.771964 1782.444016 C 1811.771964 1788.532705 1802.367618 1792.901537 1790.765625 1792.901537 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(84.313725%,8.627451%,44.313725%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 1811.593776 1783.353365 L 1811.593776 1628.487158 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(84.313725%,8.627451%,44.313725%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 1811.593776 1629.534887 C 1811.791762 1621.469351 1814.167597 1608.244243 1820.206177 1600.672919 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(84.313725%,8.627451%,44.313725%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 1818.206516 1603.163746 C 1844.02392 1567.699108 1836.223263 1565.959483 1880.136608 1516.142934 C 1899.856036 1496.374462 1926.208003 1479.19566 1925.970419 1450.74883 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(84.313725%,8.627451%,44.313725%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 1926.999948 1321.957237 L 1926.999948 1451.757022 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(84.313725%,8.627451%,44.313725%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 1928.049275 1325.396951 C 1926.564378 1308.218149 1919.021103 1302.801588 1899.638251 1290.22884 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(84.313725%,8.627451%,44.313725%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 1903.221802 1186.464132 C 1887.699682 1201.942845 1885.046666 1282.45983 1906.429179 1297.108268 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(84.313725%,8.627451%,44.313725%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 1900.628182 1189.152644 L 1930.821082 1158.392902 C 1946.006626 1148.765657 1958.618348 1110.236905 2018.845759 1112.016068 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(84.313725%,8.627451%,44.313725%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 2018.608175 1112.174216 L 2495.596593 1112.174216 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(84.313725%,8.627451%,44.313725%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 2595.599437 1041.501929 C 2595.876617 1083.252942 2544.617983 1112.154447 2481.598967 1112.154447 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(84.313725%,8.627451%,44.313725%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 2595.599437 1043.162481 L 2595.599437 605.172223 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(84.313725%,8.627451%,44.313725%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 2595.599437 606.556016 C 2595.599437 592.737854 2608.409145 580.165106 2626.663476 580.165106 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(84.313725%,8.627451%,44.313725%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 2623.594689 580.165106 L 2706.590515 580.165106 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(84.313725%,8.627451%,44.313725%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 2733.595837 547.171527 C 2733.595837 565.417826 2723.102567 580.165106 2704.313674 580.165106 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(84.313725%,8.627451%,44.313725%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 2733.595837 550.176335 L 2733.595837 179.161659 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(84.313725%,8.627451%,44.313725%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 2733.595837 180.288462 C 2733.318656 165.620256 2717.004591 157.179118 2698.215698 157.179118 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(84.313725%,8.627451%,44.313725%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 2699.601602 157.179118 L 2622.941335 156.329074 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(84.313725%,8.627451%,44.313725%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], [1, "m7"], ["d", "M 927.605071 480.176177 L 850.608227 216.168238 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(100%,41.176471%,0%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 928.852384 481.757654 C 930.238288 495.852575 946.809735 493.164062 965.598628 493.164062 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(100%,41.176471%,0%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 1089.597402 493.164062 L 965.598628 493.164062 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(100%,41.176471%,0%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 1141.707377 517.558357 C 1135.134234 503.206446 1117.07789 493.164062 1088.33029 493.164062 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(100%,41.176471%,0%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 1141.608384 517.162987 L 1236.602176 718.168807 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(100%,41.176471%,0%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 1444.230332 1208.585052 C 1436.687057 1145.582933 1348.781172 984.19313 1236.602176 718.168807 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(100%,41.176471%,0%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 1444.507513 1207.991998 L 1444.507513 1474.490764 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(100%,41.176471%,0%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 1444.606506 1474.174469 C 1444.606506 1534.962519 1471.433639 1584.166245 1504.596332 1584.166245 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(100%,41.176471%,0%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 1502.002713 1584.996521 L 1968.002895 1584.996521 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(100%,41.176471%,0%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 2030.60614 1498.173393 C 2030.60614 1545.696799 2002.848471 1585.154669 1966.35961 1585.154669 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(100%,41.176471%,0%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 2030.60614 1500.15024 C 2030.60614 1426.077777 2077.113105 1365.171116 2134.608306 1365.171116 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(100%,41.176471%,0%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 2133.004617 1364.9932 L 2171.572334 1364.9932 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(100%,41.176471%,0%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 2180.600506 1349.178422 C 2180.600506 1358.568446 2174.344141 1366.179308 2166.60288 1366.179308 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(100%,41.176471%,0%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 2180.600506 1351.392491 L 2180.600506 1324.388759 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(100%,41.176471%,0%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], [1, "m8"], ["d", "M 2116.591559 257.998324 L 2116.591559 652.201417 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(0%,61.960784%,85.882353%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 2116.591559 650.778087 C 2117.423101 666.533559 2092.457038 681.834356 2062.600715 680.173804 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(0%,61.960784%,85.882353%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 2071.609088 680.193573 L 1744.001278 680.193573 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(0%,61.960784%,85.882353%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 1712.699656 722.162038 C 1712.699656 698.953852 1728.340568 680.173804 1744.912015 680.173804 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(0%,61.960784%,85.882353%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 1713.590594 720.995698 L 1713.590594 1670.000949 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(0%,61.960784%,85.882353%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 1713.709385 1668.202018 C 1713.709385 1692.517238 1690.446004 1712.206636 1661.698404 1712.206636 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(0%,61.960784%,85.882353%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 1562.903276 1769.377056 C 1562.903276 1737.866112 1596.323351 1712.167099 1662.094376 1712.167099 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(0%,61.960784%,85.882353%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 1562.903276 1768.606086 L 1562.903276 2129.005092 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(0%,61.960784%,85.882353%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], [1, "m9"], ["d", "M 408.999948 1950.001581 L 408.999948 1441.002973 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(44.313725%,77.254902%,90.980392%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 409.494913 1442.307692 C 409.494913 1421.293807 419.493218 1403.897552 440.499557 1403.897552 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(44.313725%,77.254902%,90.980392%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 438.994861 1403.996394 L 528.207455 1403.996394 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(44.313725%,77.254902%,90.980392%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 527.593698 1404.17431 C 549.649364 1404.352227 592.96875 1330.161153 623.359636 1330.161153 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(44.313725%,77.254902%,90.980392%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 621.993531 1330.003005 L 1116.50373 1330.003005 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(44.313725%,77.254902%,90.980392%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 1116.998696 1330.872818 C 1158.259025 1331.327492 1177.047918 1317.884932 1209.557257 1316.501139 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(44.313725%,77.254902%,90.980392%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 1215.991809 1316.99535 L 1734.992905 1316.99535 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(44.313725%,77.254902%,90.980392%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 1734.002974 1316.99535 C 1747.525433 1316.006927 1819.711211 1325.001581 1842.618218 1297.009426 L 1881.839289 1203.109185 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(44.313725%,77.254902%,90.980392%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 1881.324525 1202.852195 C 1886.749348 1186.859502 1899.856036 1179.209103 1911.180848 1178.912576 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(44.313725%,77.254902%,90.980392%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 1915.991914 1178.003226 L 2074.004721 1178.003226 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(44.313725%,77.254902%,90.980392%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], [1, "m10"], ["d", "M 833.700203 1284.990195 L 667.708551 1284.990195 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(75.686275%,65.490196%,88.627451%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 860.606532 1275.48156 C 854.211577 1278.901506 846.272329 1284.990195 831.344167 1284.990195 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(75.686275%,65.490196%,88.627451%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 857.795127 1277.003732 C 869.575308 1271.21157 883.295753 1260.002847 912.597715 1260.002847 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(75.686275%,65.490196%,88.627451%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 751.298336 1157.009109 L 627.556944 1157.009109 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(75.686275%,65.490196%,88.627451%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 769.691256 1179.169566 C 769.691256 1167.011956 762.108384 1157.028878 750.506391 1157.028878 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(75.686275%,65.490196%,88.627451%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 769.691256 1220.999652 L 769.691256 1178.003226 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(75.686275%,65.490196%,88.627451%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 769.49327 1219.99146 C 769.49327 1241.558863 776.897955 1260.793586 789.47008 1259.96331 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(75.686275%,65.490196%,88.627451%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 789.093907 1260.002847 L 1136.104367 1260.002847 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(75.686275%,65.490196%,88.627451%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 1135.154033 1259.805162 L 1337.891929 1240.43206 L 1441.597115 1240.94604 L 1543.73821 1239.898311 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(75.686275%,65.490196%,88.627451%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 1542.471098 1239.997153 C 1601.688778 1239.166878 1601.332403 1260.378448 1637.60348 1261.149418 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(75.686275%,65.490196%,88.627451%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 1637.60348 1260.99127 L 1714.402337 1260.99127 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(75.686275%,65.490196%,88.627451%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 1763.502922 1231.160647 C 1763.502922 1247.192877 1743.763695 1261.011039 1718.322465 1261.011039 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(75.686275%,65.490196%,88.627451%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 1763.601915 1231.990922 L 1763.601915 988.008445 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(75.686275%,65.490196%,88.627451%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 1763.502922 988.996869 C 1763.502922 960.668649 1779.203229 937.322084 1797.259573 923.088784 C 1807.059891 915.359312 1833.431657 897.78514 1841.489696 885.528688 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(75.686275%,65.490196%,88.627451%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 1842.994392 880.645876 L 1926.999948 676.635248 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(75.686275%,65.490196%,88.627451%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 1927.178135 676.61548 C 1942.937839 639.786817 1953.391512 633.757433 1952.599567 610.331794 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(75.686275%,65.490196%,88.627451%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 1952.599567 609.99573 L 1952.599567 259.994939 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(75.686275%,65.490196%,88.627451%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], [1, "m11"], ["d", "M 526.603767 500.162101 L 236.593541 656.17488 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(46.27451%,13.72549%,18.431373%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 525.772225 500.597008 C 535.196369 496.030491 534.978584 490.772077 553.252713 491.147678 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(46.27451%,13.72549%,18.431373%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 583.604001 506.171717 C 583.604001 497.888727 568.834229 491.167447 550.599697 491.167447 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(46.27451%,13.72549%,18.431373%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 712.592028 729.179846 L 496.608853 351.167131 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(46.27451%,13.72549%,18.431373%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 712.196056 728.34957 C 715.106453 734.141732 732.291658 738.1745 756.604367 738.1745 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(46.27451%,13.72549%,18.431373%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 983.595576 738.1745 L 754.941282 738.1745 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(46.27451%,13.72549%,18.431373%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 1018.163971 751.715903 C 1008.046875 742.721249 1001.434135 738.1745 982.625443 738.1745 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(46.27451%,13.72549%,18.431373%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 1017.60961 751.162386 L 1195.9952 936.808103 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(46.27451%,13.72549%,18.431373%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 1211.67571 1041.482161 C 1215.912615 1005.424469 1207.854575 949.005251 1194.074734 934.159128 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(46.27451%,13.72549%,18.431373%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 1211.992487 1037.172634 L 1211.992487 1320.178074 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(46.27451%,13.72549%,18.431373%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 2155.733436 1896.349949 C 2107.919762 1853.353524 2042.960481 1863.811045 2042.960481 1863.811045 L 1656.629956 1866.993769 C 1640.533676 1861.399291 1631.485705 1856.714164 1615.389425 1837.993421 C 1603.569647 1810.19895 1601.075021 1801.303138 1578.08882 1798.81231 L 1418.630713 1798.140182 C 1384.874061 1799.187911 1364.679466 1781.673045 1370.559657 1728.45632 L 1370.341872 1421.135659 C 1374.163006 1398.698444 1348.701977 1410.895591 1278.08029 1407.001202 C 1261.429648 1407.752404 1227.514608 1394.527296 1218.229054 1381.93478 C 1212.96262 1374.16577 1213.952551 1369.045736 1213.912954 1324.448064 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(46.27451%,13.72549%,18.431373%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], [1, "m12"], ["d", "M 2916.297527 1026.794186 C 2916.950882 949.282009 2916.950882 949.479694 2800.633973 949.123861 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(0%,48.235294%,37.254902%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 2837.993974 949.005251 L 1637.999452 949.005251 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(0%,48.235294%,37.254902%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 550.005739 949.005251 L 1630.000809 949.005251 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(93.72549%,58.431373%,81.176471%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], [1, "m13"], ["d", "M 2162.009599 1372.999431 L 2162.009599 1895.005693 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(17.254902%,83.529412%,76.862745%)", "stroke-opacity", "1", "stroke-miterlimit", "4"], ["d", "M 2159.574369 1896.686013 C 2204.101471 1969.690979 2191.291762 1993.432914 2296.026476 2019.804055 C 2526.106271 2077.765214 2752.246139 1923.37345 2937.482053 2276.042985 ", "transform", "matrix(0.197299,0,0,0.1976,0,0)", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke", "rgb(17.254902%,83.529412%,76.862745%)", "stroke-opacity", "1", "stroke-miterlimit", "4"]], template: function ComplicationIndicatorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "g", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "path", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "path", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "path", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "g", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "path", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "path", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "path", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "path", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "path", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "path", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "path", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "path", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "path", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "path", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "path", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "path", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "path", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "g", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "path", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "path", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "path", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "path", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "path", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "path", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "path", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "path", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "path", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "path", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "path", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "path", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "path", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "g", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "path", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "path", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "path", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "path", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "path", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "path", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "path", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "path", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "g", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "path", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "path", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "path", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "path", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "path", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "g", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "path", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "path", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "path", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "path", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "path", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "path", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "path", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "path", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "path", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "path", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "path", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "path", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "path", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "path", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "path", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "path", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "path", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "path", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "path", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "g", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "path", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "path", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "path", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "path", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "path", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "path", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "path", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "path", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "path", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "path", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "path", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "path", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "path", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "path", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "g", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "path", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "path", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "path", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "path", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "path", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "path", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "path", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "path", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "g", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "path", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "path", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "path", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "path", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "path", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "path", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "path", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "path", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "path", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "path", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "g", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "path", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "path", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "path", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "path", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "path", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "path", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "path", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "path", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "path", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "path", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "path", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "path", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "path", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "path", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "path", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "path", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "path", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "g", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "path", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "path", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "path", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "path", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "path", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "path", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "path", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "path", 141);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "path", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "path", 143);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "path", 144);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "g", 145);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "path", 146);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "path", 147);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "path", 148);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "g", 149);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "path", 150);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "path", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.getClasses());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: [".m1[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.show-m1[_ngcontent-%COMP%]   .m1[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.m2[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.show-m2[_ngcontent-%COMP%]   .m2[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.m3[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.show-m3[_ngcontent-%COMP%]   .m3[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.m4[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.show-m4[_ngcontent-%COMP%]   .m4[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.m5[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.show-m5[_ngcontent-%COMP%]   .m5[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.m6[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.show-m6[_ngcontent-%COMP%]   .m6[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.m7[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.show-m7[_ngcontent-%COMP%]   .m7[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.m8[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.show-m8[_ngcontent-%COMP%]   .m8[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.m9[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.show-m9[_ngcontent-%COMP%]   .m9[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.m10[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.show-m10[_ngcontent-%COMP%]   .m10[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.m11[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.show-m11[_ngcontent-%COMP%]   .m11[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.m12[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.show-m12[_ngcontent-%COMP%]   .m12[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.m13[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.show-m13[_ngcontent-%COMP%]   .m13[_ngcontent-%COMP%] {\n  display: block;\n}\n\nsvg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\nsvg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  stroke-width: 72px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9pbnRpbmcvY29tcGxpY2F0aW9uLWluZGljYXRvci9DOlxcUHJvamVjdHNcXHBvaW50aW5nLWJsYWNramFja1xcZnJvbnRlbmQvc3JjXFxhcHBcXHBvaW50aW5nXFxjb21wbGljYXRpb24taW5kaWNhdG9yXFxjb21wbGljYXRpb24taW5kaWNhdG9yLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wb2ludGluZy9jb21wbGljYXRpb24taW5kaWNhdG9yL2NvbXBsaWNhdGlvbi1pbmRpY2F0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0M7RUFDQyxhQUFBO0FDRkY7O0FESUM7RUFDQyxjQUFBO0FDREY7O0FESEM7RUFDQyxhQUFBO0FDTUY7O0FESkM7RUFDQyxjQUFBO0FDT0Y7O0FEWEM7RUFDQyxhQUFBO0FDY0Y7O0FEWkM7RUFDQyxjQUFBO0FDZUY7O0FEbkJDO0VBQ0MsYUFBQTtBQ3NCRjs7QURwQkM7RUFDQyxjQUFBO0FDdUJGOztBRDNCQztFQUNDLGFBQUE7QUM4QkY7O0FENUJDO0VBQ0MsY0FBQTtBQytCRjs7QURuQ0M7RUFDQyxhQUFBO0FDc0NGOztBRHBDQztFQUNDLGNBQUE7QUN1Q0Y7O0FEM0NDO0VBQ0MsYUFBQTtBQzhDRjs7QUQ1Q0M7RUFDQyxjQUFBO0FDK0NGOztBRG5EQztFQUNDLGFBQUE7QUNzREY7O0FEcERDO0VBQ0MsY0FBQTtBQ3VERjs7QUQzREM7RUFDQyxhQUFBO0FDOERGOztBRDVEQztFQUNDLGNBQUE7QUMrREY7O0FEbkVDO0VBQ0MsYUFBQTtBQ3NFRjs7QURwRUM7RUFDQyxjQUFBO0FDdUVGOztBRDNFQztFQUNDLGFBQUE7QUM4RUY7O0FENUVDO0VBQ0MsY0FBQTtBQytFRjs7QURuRkM7RUFDQyxhQUFBO0FDc0ZGOztBRHBGQztFQUNDLGNBQUE7QUN1RkY7O0FEM0ZDO0VBQ0MsYUFBQTtBQzhGRjs7QUQ1RkM7RUFDQyxjQUFBO0FDK0ZGOztBRDNGQTtFQUNDLFdBQUE7RUFDQSxZQUFBO0FDOEZEOztBRDVGQztFQUNDLDZCQUFBO0FDOEZGIiwiZmlsZSI6InNyYy9hcHAvcG9pbnRpbmcvY29tcGxpY2F0aW9uLWluZGljYXRvci9jb21wbGljYXRpb24taW5kaWNhdG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJG1hcHM6ICgxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMCwgMTEsIDEyLCAxMyk7XHJcblxyXG5AZWFjaCAkbWFwIGluICRtYXBzIHtcclxuXHQubSN7JG1hcH0ge1xyXG5cdFx0ZGlzcGxheTogbm9uZTtcclxuXHR9XHJcblx0LnNob3ctbSN7JG1hcH0gLm0jeyRtYXB9IHtcclxuXHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdH1cclxufVxyXG5cclxuc3ZnIHtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblxyXG5cdHBhdGgge1xyXG5cdFx0c3Ryb2tlLXdpZHRoOiA3MnB4ICFpbXBvcnRhbnQ7XHJcblx0fVxyXG59IiwiLm0xIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNob3ctbTEgLm0xIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5tMiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zaG93LW0yIC5tMiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubTMge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uc2hvdy1tMyAubTMge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLm00IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNob3ctbTQgLm00IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5tNSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zaG93LW01IC5tNSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubTYge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uc2hvdy1tNiAubTYge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLm03IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNob3ctbTcgLm03IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5tOCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zaG93LW04IC5tOCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubTkge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uc2hvdy1tOSAubTkge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLm0xMCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zaG93LW0xMCAubTEwIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5tMTEge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uc2hvdy1tMTEgLm0xMSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubTEyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNob3ctbTEyIC5tMTIge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLm0xMyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zaG93LW0xMyAubTEzIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbnN2ZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5zdmcgcGF0aCB7XG4gIHN0cm9rZS13aWR0aDogNzJweCAhaW1wb3J0YW50O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComplicationIndicatorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'complication-indicator',
                templateUrl: './complication-indicator.component.html',
                styleUrls: ['./complication-indicator.component.scss']
            }]
    }], function () { return []; }, { complexity: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/pointing/hangman-progress/hangman-progress.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pointing/hangman-progress/hangman-progress.component.ts ***!
  \*************************************************************************/
/*! exports provided: HangmanProgressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HangmanProgressComponent", function() { return HangmanProgressComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




class HangmanProgressComponent {
    constructor() { }
    ngOnInit() {
    }
    getProgressClasses() {
        let progressPct = this.progress * 100;
        return lodash__WEBPACK_IMPORTED_MODULE_1__["chain"](lodash__WEBPACK_IMPORTED_MODULE_1__["range"](10, 101, 10))
            .filter(pct => pct <= progressPct)
            .map(pct => `has-${pct}`)
            .join(' ')
            .value();
    }
}
HangmanProgressComponent.ɵfac = function HangmanProgressComponent_Factory(t) { return new (t || HangmanProgressComponent)(); };
HangmanProgressComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HangmanProgressComponent, selectors: [["hangman-progress"]], inputs: { progress: "progress" }, decls: 18, vars: 1, consts: [["width", "100%", "height", "100%", "viewBox", "0 0 260 290", "preserveAspectRatio", "xMidYMid meet", 3, "ngClass"], ["transform", "translate(-140,-375.21933)"], ["width", "201.42856", "height", "15.714286", "x", "172", "y", "611.64789", 1, "pct-10", 2, "fill", "#000000", "fill-opacity", "1", "stroke", "none"], ["y", "172", "x", "-611.64789", "height", "15.714286", "width", "201.42856", "transform", "matrix(0,-1,1,0,0,0)", 1, "pct-20", 2, "fill", "#000000", "fill-opacity", "1", "stroke", "none"], ["y", "410.23224", "x", "172", "height", "15.714286", "width", "161.83058", 1, "pct-30", 2, "fill", "#000000", "fill-opacity", "1", "stroke", "none"], ["y", "459.9678", "x", "-212.40941", "height", "8.9876156", "width", "92.557251", "transform", "matrix(0.70710678,-0.70710678,0.70710678,0.70710678,0,0)", 1, "pct-40", 2, "fill", "#000000", "fill-opacity", "1", "stroke", "none"], ["y", "313.64362", "x", "-458.34216", "height", "9.8016691", "width", "40.915318", "transform", "matrix(0,-1,1,0,0,0)", 1, "pct-40", 2, "fill", "#000000", "fill-opacity", "1", "stroke", "none"], ["y", "313.86929", "x", "-554.50867", "height", "8.643218", "width", "71.320908", "transform", "matrix(0,-1,1,0,0,0)", 1, "pct-60", 2, "fill", "#000000", "fill-opacity", "1", "stroke", "none"], ["y", "603.9104", "x", "-216.2973", "height", "6.6434593", "width", "68.416397", "transform", "matrix(0.69283471,-0.72109643,0.69283471,0.72109643,0,0)", 1, "pct-70", 2, "fill", "#000000", "fill-opacity", "1", "stroke", "none"], ["y", "-178.65277", "x", "-680.2171", "height", "6.6434593", "width", "68.416397", "transform", "matrix(-0.72109643,-0.69283471,0.72109643,-0.69283471,0,0)", 1, "pct-80", 2, "fill", "#000000", "fill-opacity", "1", "stroke", "none"], ["y", "501.79868", "x", "274.75226", "height", "7.2290044", "width", "43.743752", 1, "pct-90", 2, "fill", "#000000", "fill-opacity", "1", "stroke", "none"], ["width", "43.743752", "height", "7.2290044", "x", "317.17865", "y", "501.79868", 1, "pct-100", 2, "fill", "#000000", "fill-opacity", "1", "stroke", "none"], [1, "pct-50"], ["d", "m 212.83914,117.46594 a 27.577164,27.577164 0 1 1 -55.15433,0 27.577164,27.577164 0 1 1 55.15433,0 z", "transform", "matrix(0.84615384,0,0,0.84615384,161.59499,370.78859)", 2, "fill", "#000000", "fill-opacity", "1", "stroke", "none"], ["d", "m 167.5,85.5 a 1.75,1.25 0 1 1 -3.5,0 1.75,1.25 0 1 1 3.5,0 z", "transform", "matrix(0.53432676,0,0,0.53432676,219.18534,415.03439)", 2, "fill", "#ffffff", "fill-opacity", "1", "stroke", "#ffffff", "stroke-width", "4.01599979", "stroke-miterlimit", "4", "stroke-opacity", "1", "stroke-dasharray", "none"], ["d", "m 167.5,85.5 a 1.75,1.25 0 1 1 -3.5,0 1.75,1.25 0 1 1 3.5,0 z", "transform", "matrix(0.53432676,0,0,0.53432676,240.18534,415.03439)", 2, "fill", "#ffffff", "fill-opacity", "1", "stroke", "#ffffff", "stroke-width", "4.01599979", "stroke-miterlimit", "4", "stroke-opacity", "1", "stroke-dasharray", "none"], ["d", "M 120.65198,146.72575 C 125.41914,142.84146 132.32358,143.09816 137.5,146", "transform", "translate(189,337.21933)", 1, "bad-smile", 2, "fill", "none", "stroke", "#ffffff", "stroke-width", "2px", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke-opacity", "1"], ["d", "M 120.65198,146.72575 C 125.41914,142.84146 132.32358,143.09816 137.5,146", "transform", "translate(189,337.21933) scale(1, -1)", "transform-origin", "center", 1, "good-smile", 2, "fill", "none", "stroke", "#ffffff", "stroke-width", "2px", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke-opacity", "1"]], template: function HangmanProgressComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "g", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "rect", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "rect", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "rect", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "rect", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "rect", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "rect", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "rect", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "rect", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "rect", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "rect", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "g", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "path", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "path", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "path", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "path", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.getProgressClasses());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: [".good-smile[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.pct-10[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.has-10[_ngcontent-%COMP%]   .pct-10[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.pct-20[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.has-20[_ngcontent-%COMP%]   .pct-20[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.pct-30[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.has-30[_ngcontent-%COMP%]   .pct-30[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.pct-40[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.has-40[_ngcontent-%COMP%]   .pct-40[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.pct-50[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.has-50[_ngcontent-%COMP%]   .pct-50[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.pct-60[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.has-60[_ngcontent-%COMP%]   .pct-60[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.pct-70[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.has-70[_ngcontent-%COMP%]   .pct-70[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.pct-80[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.has-80[_ngcontent-%COMP%]   .pct-80[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.pct-90[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.has-90[_ngcontent-%COMP%]   .pct-90[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.pct-100[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.has-100[_ngcontent-%COMP%]   .pct-100[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.has-100[_ngcontent-%COMP%]   .bad-smile[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.has-100[_ngcontent-%COMP%]   .good-smile[_ngcontent-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9pbnRpbmcvaGFuZ21hbi1wcm9ncmVzcy9DOlxcUHJvamVjdHNcXHBvaW50aW5nLWJsYWNramFja1xcZnJvbnRlbmQvc3JjXFxhcHBcXHBvaW50aW5nXFxoYW5nbWFuLXByb2dyZXNzXFxoYW5nbWFuLXByb2dyZXNzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wb2ludGluZy9oYW5nbWFuLXByb2dyZXNzL2hhbmdtYW4tcHJvZ3Jlc3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDQyxhQUFBO0FDQUQ7O0FETUM7RUFDQyxhQUFBO0FDSEY7O0FES0M7RUFDQyxjQUFBO0FDRkY7O0FERkM7RUFDQyxhQUFBO0FDS0Y7O0FESEM7RUFDQyxjQUFBO0FDTUY7O0FEVkM7RUFDQyxhQUFBO0FDYUY7O0FEWEM7RUFDQyxjQUFBO0FDY0Y7O0FEbEJDO0VBQ0MsYUFBQTtBQ3FCRjs7QURuQkM7RUFDQyxjQUFBO0FDc0JGOztBRDFCQztFQUNDLGFBQUE7QUM2QkY7O0FEM0JDO0VBQ0MsY0FBQTtBQzhCRjs7QURsQ0M7RUFDQyxhQUFBO0FDcUNGOztBRG5DQztFQUNDLGNBQUE7QUNzQ0Y7O0FEMUNDO0VBQ0MsYUFBQTtBQzZDRjs7QUQzQ0M7RUFDQyxjQUFBO0FDOENGOztBRGxEQztFQUNDLGFBQUE7QUNxREY7O0FEbkRDO0VBQ0MsY0FBQTtBQ3NERjs7QUQxREM7RUFDQyxhQUFBO0FDNkRGOztBRDNEQztFQUNDLGNBQUE7QUM4REY7O0FEbEVDO0VBQ0MsYUFBQTtBQ3FFRjs7QURuRUM7RUFDQyxjQUFBO0FDc0VGOztBRGpFQztFQUNDLGFBQUE7QUNvRUY7O0FEbEVDO0VBQ0MsY0FBQTtBQ29FRiIsImZpbGUiOiJzcmMvYXBwL3BvaW50aW5nL2hhbmdtYW4tcHJvZ3Jlc3MvaGFuZ21hbi1wcm9ncmVzcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uZ29vZC1zbWlsZSB7XHJcblx0ZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuJHBlcmNlbnRzOiAoMTAsIDIwLCAzMCwgNDAsIDUwLCA2MCwgNzAsIDgwLCA5MCwgMTAwKTsgXHJcblxyXG5AZWFjaCAkcGN0IGluICRwZXJjZW50cyB7XHJcblx0LnBjdC0jeyRwY3R9IHtcclxuXHRcdGRpc3BsYXk6IG5vbmU7XHJcblx0fVxyXG5cdC5oYXMtI3skcGN0fSAucGN0LSN7JHBjdH0ge1xyXG5cdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0fVxyXG59XHJcblxyXG4uaGFzLTEwMCB7XHJcblx0LmJhZC1zbWlsZSB7XHJcblx0XHRkaXNwbGF5OiBub25lO1xyXG5cdH1cclxuXHQuZ29vZC1zbWlsZSB7XHJcblx0XHRkaXNwbGF5OiBibG9jaztcclxuXHR9XHJcbn0iLCIuZ29vZC1zbWlsZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5wY3QtMTAge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uaGFzLTEwIC5wY3QtMTAge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnBjdC0yMCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5oYXMtMjAgLnBjdC0yMCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ucGN0LTMwIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmhhcy0zMCAucGN0LTMwIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5wY3QtNDAge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uaGFzLTQwIC5wY3QtNDAge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnBjdC01MCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5oYXMtNTAgLnBjdC01MCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ucGN0LTYwIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmhhcy02MCAucGN0LTYwIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5wY3QtNzAge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uaGFzLTcwIC5wY3QtNzAge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnBjdC04MCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5oYXMtODAgLnBjdC04MCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ucGN0LTkwIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmhhcy05MCAucGN0LTkwIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5wY3QtMTAwIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmhhcy0xMDAgLnBjdC0xMDAge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmhhcy0xMDAgLmJhZC1zbWlsZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uaGFzLTEwMCAuZ29vZC1zbWlsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HangmanProgressComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'hangman-progress',
                templateUrl: './hangman-progress.component.html',
                styleUrls: ['./hangman-progress.component.scss']
            }]
    }], function () { return []; }, { progress: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/pointing/pointing-api.service.ts":
/*!**************************************************!*\
  !*** ./src/app/pointing/pointing-api.service.ts ***!
  \**************************************************/
/*! exports provided: PointingApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointingApiService", function() { return PointingApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_common_sockets_app_socket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/common/sockets/app-socket */ "./src/app/common/sockets/app-socket.ts");
/* harmony import */ var src_app_common_user_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/common/user-state.service */ "./src/app/common/user-state.service.ts");




class PointingApiService {
    constructor(appSocket, userState) {
        this.appSocket = appSocket;
        this.userState = userState;
    }
    getStateObserver() {
        this.appSocket.connect();
        return this.appSocket.fromEvent('refresh');
    }
    joinRoom(roomId) {
        this.appSocket.emit('join', {
            uid: this.userState.getUid(),
            name: this.userState.user.name,
            room: roomId
        });
        this.appSocket.removeAllListeners('reconnect');
        this.appSocket.on('reconnect', () => this.joinRoom(roomId));
    }
    vote(vote) {
        this.appSocket.emit('vote', vote);
    }
    reset() {
        this.appSocket.emit('reset');
    }
    show() {
        this.appSocket.emit('show');
    }
    switchToSpectator() {
        this.appSocket.emit('role', 'spectator');
    }
    switchToPlayer() {
        this.appSocket.emit('role', 'player');
    }
}
PointingApiService.ɵfac = function PointingApiService_Factory(t) { return new (t || PointingApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_common_sockets_app_socket__WEBPACK_IMPORTED_MODULE_1__["AppSocket"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_common_user_state_service__WEBPACK_IMPORTED_MODULE_2__["UserStateService"])); };
PointingApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PointingApiService, factory: PointingApiService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PointingApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: src_app_common_sockets_app_socket__WEBPACK_IMPORTED_MODULE_1__["AppSocket"] }, { type: src_app_common_user_state_service__WEBPACK_IMPORTED_MODULE_2__["UserStateService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pointing/pointing-constants.class.ts":
/*!******************************************************!*\
  !*** ./src/app/pointing/pointing-constants.class.ts ***!
  \******************************************************/
/*! exports provided: PointingConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointingConstants", function() { return PointingConstants; });
/* harmony import */ var src_app_pointing_room_state_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/pointing/room-state.class */ "./src/app/pointing/room-state.class.ts");

class PointingConstants {
}
PointingConstants.VOTE_COLORS = {
    1: '#6bacf9',
    2: '#748EEA',
    3: '#7e6dc3',
    5: '#a15ab4',
    8: '#b13d90',
    13: '#bd1c66',
    wait: '#A3ABBD',
    none: '#A3ABBD',
    null: '#ffffff'
};
PointingConstants.VOTE_VALUES = [1, 2, 3, 5, 8, 13, src_app_pointing_room_state_class__WEBPACK_IMPORTED_MODULE_0__["VoteState"].none, src_app_pointing_room_state_class__WEBPACK_IMPORTED_MODULE_0__["VoteState"].wait];
PointingConstants.ALMOST_FINISHED = 0.8;


/***/ }),

/***/ "./src/app/pointing/pointing-utils.service.ts":
/*!****************************************************!*\
  !*** ./src/app/pointing/pointing-utils.service.ts ***!
  \****************************************************/
/*! exports provided: PointingUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointingUtils", function() { return PointingUtils; });
/* harmony import */ var src_app_pointing_room_state_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/pointing/room-state.class */ "./src/app/pointing/room-state.class.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);


class PointingUtils {
    static isVotingFinished(state) {
        return lodash__WEBPACK_IMPORTED_MODULE_1__["every"](state.players, player => PointingUtils.isVoted(player.vote));
    }
    static isVoted(vote) {
        return !lodash__WEBPACK_IMPORTED_MODULE_1__["isUndefined"](vote) && vote !== src_app_pointing_room_state_class__WEBPACK_IMPORTED_MODULE_0__["VoteState"].wait;
    }
    static getProgress(state) {
        if (state.players.length === 0)
            return 0;
        return lodash__WEBPACK_IMPORTED_MODULE_1__["sumBy"](state.players, player => PointingUtils.isVoted(player.vote) ? 1 : 0) / state.players.length;
    }
    static getAggregatedResults(roomState) {
        let max = 0;
        return lodash__WEBPACK_IMPORTED_MODULE_1__["chain"](roomState.players)
            .countBy(player => player.vote)
            .each(count => max = count > max ? count : max)
            .map((count, key) => ({ vote: isNaN(Number(key)) ? key : Number(key), count, isTop: count === max }))
            .value();
    }
}


/***/ }),

/***/ "./src/app/pointing/room-cards/room-cards.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/pointing/room-cards/room-cards.component.ts ***!
  \*************************************************************/
/*! exports provided: RoomCardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomCardsComponent", function() { return RoomCardsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_pointing_room_state_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/pointing/room-state.class */ "./src/app/pointing/room-state.class.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_pointing_pointing_constants_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/pointing/pointing-constants.class */ "./src/app/pointing/pointing-constants.class.ts");
/* harmony import */ var src_app_pointing_pointing_utils_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/pointing/pointing-utils.service */ "./src/app/pointing/pointing-utils.service.ts");
/* harmony import */ var src_app_common_user_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common/user-state.service */ "./src/app/common/user-state.service.ts");
/* harmony import */ var src_app_pointing_pointing_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/pointing/pointing-api.service */ "./src/app/pointing/pointing-api.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var angular_epic_spinners__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-epic-spinners */ "./node_modules/angular-epic-spinners/__ivy_ngcc__/fesm2015/angular-epic-spinners.js");
/* harmony import */ var _complication_indicator_complication_indicator_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../complication-indicator/complication-indicator.component */ "./src/app/pointing/complication-indicator/complication-indicator.component.ts");
/* harmony import */ var _common_shade_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/shade.pipe */ "./src/app/common/shade.pipe.ts");












function RoomCardsComponent_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RoomCardsComponent_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-self-building-square-spinner", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Still thinking...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("animationDuration", 6000)("size", 40)("color", "#ffffff");
} }
function RoomCardsComponent_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "complication-indicator", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const card_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("complexity", card_r22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](card_r22);
} }
const _c0 = function (a0) { return { "selected": a0 }; };
function RoomCardsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoomCardsComponent_div_0_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const card_r22 = ctx.$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r27.selectCard(card_r22); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "shade");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "shade");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RoomCardsComponent_div_0_div_4_Template, 2, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RoomCardsComponent_div_0_div_5_Template, 4, 3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, RoomCardsComponent_div_0_div_6_Template, 4, 2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const card_r22 = ctx.$implicit;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r21.isCardHidden(card_r22));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 9, ctx_r21.cardColors[card_r22], 0.2))("border-color", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 12, ctx_r21.cardColors[card_r22], 0 - 0.4));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c0, ctx_r21.isMyVote(card_r22)))("ngSwitch", card_r22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "none");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "wait");
} }
class RoomCardsComponent {
    constructor(userState, pointingApi) {
        this.userState = userState;
        this.pointingApi = pointingApi;
        this.cards = src_app_pointing_pointing_constants_class__WEBPACK_IMPORTED_MODULE_3__["PointingConstants"].VOTE_VALUES;
        this.cardColors = src_app_pointing_pointing_constants_class__WEBPACK_IMPORTED_MODULE_3__["PointingConstants"].VOTE_COLORS;
    }
    ngOnInit() {
    }
    getCardText(vote) {
        return vote + '';
    }
    selectCard(vote) {
        this.pointingApi.vote(vote);
        //this.getMyPlayer().vote = vote;
    }
    isMyVote(vote) {
        return vote === this.getMyPlayer().vote;
    }
    get hasSelection() {
        return src_app_pointing_pointing_utils_service__WEBPACK_IMPORTED_MODULE_4__["PointingUtils"].isVoted(this.getMyPlayer().vote);
    }
    getMyPlayer() {
        return lodash__WEBPACK_IMPORTED_MODULE_2__["find"](this.state.players, { uid: this.userState.getUid() });
    }
    isCardHidden(vote) {
        return vote === src_app_pointing_room_state_class__WEBPACK_IMPORTED_MODULE_1__["VoteState"].wait && src_app_pointing_pointing_utils_service__WEBPACK_IMPORTED_MODULE_4__["PointingUtils"].getProgress(this.state) <= src_app_pointing_pointing_constants_class__WEBPACK_IMPORTED_MODULE_3__["PointingConstants"].ALMOST_FINISHED;
    }
    subColor(color) {
        return 'white'; //TODO
    }
}
RoomCardsComponent.ɵfac = function RoomCardsComponent_Factory(t) { return new (t || RoomCardsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_common_user_state_service__WEBPACK_IMPORTED_MODULE_5__["UserStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_pointing_pointing_api_service__WEBPACK_IMPORTED_MODULE_6__["PointingApiService"])); };
RoomCardsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RoomCardsComponent, selectors: [["room-cards"]], hostVars: 2, hostBindings: function RoomCardsComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("has-selection", ctx.hasSelection);
    } }, inputs: { state: "state" }, decls: 1, vars: 1, consts: [["class", "vote-card", 3, "hidden", 4, "ngFor", "ngForOf"], [1, "vote-card", 3, "hidden"], [1, "card-button", "btn", 3, "ngClass", "ngSwitch", "click"], ["class", "font-white", 4, "ngSwitchCase"], ["class", "wait-container", 4, "ngSwitchCase"], ["class", "number-card", 4, "ngSwitchDefault"], [1, "font-white"], [1, "wait-container"], [1, "wait-spinner", 3, "animationDuration", "size", "color"], [1, "wait-subtitle"], [1, "number-card"], [3, "complexity"], [1, "card-value"]], template: function RoomCardsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RoomCardsComponent_div_0_Template, 7, 17, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cards);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitchDefault"], angular_epic_spinners__WEBPACK_IMPORTED_MODULE_8__["ɵp"], _complication_indicator_complication_indicator_component__WEBPACK_IMPORTED_MODULE_9__["ComplicationIndicatorComponent"]], pipes: [_common_shade_pipe__WEBPACK_IMPORTED_MODULE_10__["ShadePipe"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n  flex-wrap: wrap;\n  padding: 16px 0;\n}\n[_nghost-%COMP%]   .vote-card[_ngcontent-%COMP%] {\n  flex: 0 0 26%;\n  margin: 16px;\n  height: 20vh;\n}\n[_nghost-%COMP%]   .vote-card[_ngcontent-%COMP%]   .card-button[_ngcontent-%COMP%] {\n  font-size: 14vh;\n  line-height: 1;\n  font-weight: 600;\n  width: 20vh;\n  padding: 1vh 1.5vh;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-width: 2px;\n  color: #101010;\n  \n}\n[_nghost-%COMP%]   .vote-card[_ngcontent-%COMP%]   .card-button[_ngcontent-%COMP%]   .font-white[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n[_nghost-%COMP%]   .vote-card[_ngcontent-%COMP%]   .card-button[_ngcontent-%COMP%]   .wait-container[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n}\n[_nghost-%COMP%]   .vote-card[_ngcontent-%COMP%]   .card-button[_ngcontent-%COMP%]   .wait-subtitle[_ngcontent-%COMP%] {\n  font-size: 1.5vh;\n  display: block;\n  margin-top: 4px;\n  width: 100%;\n  justify-content: center;\n}\n[_nghost-%COMP%]   .vote-card[_ngcontent-%COMP%]   .card-button[_ngcontent-%COMP%]   .number-card[_ngcontent-%COMP%] {\n  display: grid;\n  height: 100%;\n  width: 100%;\n}\n[_nghost-%COMP%]   .vote-card[_ngcontent-%COMP%]   .card-button[_ngcontent-%COMP%]   .card-value[_ngcontent-%COMP%] {\n  grid-column: 1;\n  grid-row: 1;\n  z-index: 1;\n  opacity: 0.75;\n  height: 100%;\n  align-items: center;\n  display: flex;\n  justify-content: center;\n}\n[_nghost-%COMP%]   .vote-card[_ngcontent-%COMP%]   .card-button[_ngcontent-%COMP%]   complication-indicator[_ngcontent-%COMP%] {\n  grid-column: 1;\n  grid-row: 1;\n  opacity: 0.7;\n  width: 100%;\n  height: 100%;\n}\n.has-selection[_nghost-%COMP%]   .card-button[_ngcontent-%COMP%] {\n  opacity: 0.4;\n}\n.has-selection[_nghost-%COMP%]   .card-button.selected[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9pbnRpbmcvcm9vbS1jYXJkcy9DOlxcUHJvamVjdHNcXHBvaW50aW5nLWJsYWNramFja1xcZnJvbnRlbmQvc3JjXFxhcHBcXHBvaW50aW5nXFxyb29tLWNhcmRzXFxyb29tLWNhcmRzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wb2ludGluZy9yb29tLWNhcmRzL3Jvb20tY2FyZHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ0NEO0FEQ0M7RUFDQyxhQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNDRjtBRENFO0VBQ0MsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQTRCQTs7Ozs7Ozs7Ozs7O0tBQUE7QUNkSDtBRFpHO0VBQ0MsY0FBQTtBQ2NKO0FEWEc7RUFDQyxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNhSjtBRFhHO0VBQ0MsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtBQ2FKO0FEVkc7RUFDQyxhQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNZSjtBREtHO0VBQ0MsY0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQ0hKO0FETUc7RUFDQyxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0pKO0FEWUU7RUFDQyxZQUFBO0FDVkg7QURXRztFQUNDLFVBQUE7QUNUSiIsImZpbGUiOiJzcmMvYXBwL3BvaW50aW5nL3Jvb20tY2FyZHMvcm9vbS1jYXJkcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG5cdGZsZXgtd3JhcDogd3JhcDtcclxuXHRwYWRkaW5nOiAxNnB4IDA7XHJcblxyXG5cdC52b3RlLWNhcmQge1xyXG5cdFx0ZmxleDogMCAwIDI2JTtcclxuXHRcdG1hcmdpbjogMTZweDtcclxuXHRcdGhlaWdodDogMjB2aDtcclxuXHJcblx0XHQuY2FyZC1idXR0b24ge1xyXG5cdFx0XHRmb250LXNpemU6IDE0dmg7XHJcblx0XHRcdGxpbmUtaGVpZ2h0OiAxO1xyXG5cdFx0XHRmb250LXdlaWdodDogNjAwO1xyXG5cdFx0XHR3aWR0aDogMjB2aDtcclxuXHRcdFx0cGFkZGluZzogMXZoIDEuNXZoO1xyXG5cdFx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0XHRib3JkZXItd2lkdGg6IDJweDtcclxuXHRcdFx0Y29sb3I6ICMxMDEwMTA7XHJcblxyXG5cdFx0XHQuZm9udC13aGl0ZSB7XHJcblx0XHRcdFx0Y29sb3I6ICNmZmZmZmY7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC53YWl0LWNvbnRhaW5lciB7XHJcblx0XHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0XHR9XHJcblx0XHRcdC53YWl0LXN1YnRpdGxlIHtcclxuXHRcdFx0XHRmb250LXNpemU6IDEuNXZoO1xyXG5cdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0XHRcdG1hcmdpbi10b3A6IDRweDtcclxuXHRcdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Lm51bWJlci1jYXJkIHtcclxuXHRcdFx0XHRkaXNwbGF5OiBncmlkO1xyXG5cdFx0XHRcdGhlaWdodDogMTAwJTtcclxuXHRcdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0LyogLmNhcmQtcmVjdGFuZ2xlcyB7XHJcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0XHRcdGhlaWdodDogMDtcclxuXHRcdFx0XHRmbGV4LXdyYXA6IHdyYXA7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdC5jYXJkLXJlY3Qge1xyXG5cdFx0XHRcdHdpZHRoOiAydmg7XHJcblx0XHRcdFx0aGVpZ2h0OiAydmg7XHJcblx0XHRcdFx0bWFyZ2luLXJpZ2h0OiAwLjMzdmg7XHJcblx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMC41dmg7XHJcblx0XHRcdH0gKi9cclxuXHJcblx0XHRcdC5jYXJkLXZhbHVlIHtcclxuXHRcdFx0XHRncmlkLWNvbHVtbjogMTtcclxuXHRcdFx0XHRncmlkLXJvdzogMTtcclxuXHRcdFx0XHR6LWluZGV4OiAxO1xyXG5cdFx0XHRcdG9wYWNpdHk6IDAuNzU7XHJcblx0XHRcdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Y29tcGxpY2F0aW9uLWluZGljYXRvciB7XHJcblx0XHRcdFx0Z3JpZC1jb2x1bW46IDE7XHJcblx0XHRcdFx0Z3JpZC1yb3c6IDE7XHJcblx0XHRcdFx0b3BhY2l0eTogMC43O1xyXG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRcdGhlaWdodDogMTAwJTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHR9XHJcblx0XHJcblxyXG5cdCYuaGFzLXNlbGVjdGlvbiB7XHJcblx0XHQuY2FyZC1idXR0b24ge1xyXG5cdFx0XHRvcGFjaXR5OiAwLjQ7XHJcblx0XHRcdCYuc2VsZWN0ZWQge1xyXG5cdFx0XHRcdG9wYWNpdHk6IDE7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBwYWRkaW5nOiAxNnB4IDA7XG59XG46aG9zdCAudm90ZS1jYXJkIHtcbiAgZmxleDogMCAwIDI2JTtcbiAgbWFyZ2luOiAxNnB4O1xuICBoZWlnaHQ6IDIwdmg7XG59XG46aG9zdCAudm90ZS1jYXJkIC5jYXJkLWJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMTR2aDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHdpZHRoOiAyMHZoO1xuICBwYWRkaW5nOiAxdmggMS41dmg7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlci13aWR0aDogMnB4O1xuICBjb2xvcjogIzEwMTAxMDtcbiAgLyogLmNhcmQtcmVjdGFuZ2xlcyB7XG4gIFx0ZGlzcGxheTogZmxleDtcbiAgXHRmbGV4LWRpcmVjdGlvbjogcm93O1xuICBcdGhlaWdodDogMDtcbiAgXHRmbGV4LXdyYXA6IHdyYXA7XG4gIH1cblxuICAuY2FyZC1yZWN0IHtcbiAgXHR3aWR0aDogMnZoO1xuICBcdGhlaWdodDogMnZoO1xuICBcdG1hcmdpbi1yaWdodDogMC4zM3ZoO1xuICBcdG1hcmdpbi1ib3R0b206IDAuNXZoO1xuICB9ICovXG59XG46aG9zdCAudm90ZS1jYXJkIC5jYXJkLWJ1dHRvbiAuZm9udC13aGl0ZSB7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuOmhvc3QgLnZvdGUtY2FyZCAuY2FyZC1idXR0b24gLndhaXQtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG59XG46aG9zdCAudm90ZS1jYXJkIC5jYXJkLWJ1dHRvbiAud2FpdC1zdWJ0aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS41dmg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiA0cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbjpob3N0IC52b3RlLWNhcmQgLmNhcmQtYnV0dG9uIC5udW1iZXItY2FyZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG46aG9zdCAudm90ZS1jYXJkIC5jYXJkLWJ1dHRvbiAuY2FyZC12YWx1ZSB7XG4gIGdyaWQtY29sdW1uOiAxO1xuICBncmlkLXJvdzogMTtcbiAgei1pbmRleDogMTtcbiAgb3BhY2l0eTogMC43NTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbjpob3N0IC52b3RlLWNhcmQgLmNhcmQtYnV0dG9uIGNvbXBsaWNhdGlvbi1pbmRpY2F0b3Ige1xuICBncmlkLWNvbHVtbjogMTtcbiAgZ3JpZC1yb3c6IDE7XG4gIG9wYWNpdHk6IDAuNztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbjpob3N0Lmhhcy1zZWxlY3Rpb24gLmNhcmQtYnV0dG9uIHtcbiAgb3BhY2l0eTogMC40O1xufVxuOmhvc3QuaGFzLXNlbGVjdGlvbiAuY2FyZC1idXR0b24uc2VsZWN0ZWQge1xuICBvcGFjaXR5OiAxO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoomCardsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'room-cards',
                templateUrl: './room-cards.component.html',
                styleUrls: ['./room-cards.component.scss']
            }]
    }], function () { return [{ type: src_app_common_user_state_service__WEBPACK_IMPORTED_MODULE_5__["UserStateService"] }, { type: src_app_pointing_pointing_api_service__WEBPACK_IMPORTED_MODULE_6__["PointingApiService"] }]; }, { state: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], hasSelection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.has-selection']
        }] }); })();


/***/ }),

/***/ "./src/app/pointing/room-log/room-log.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/pointing/room-log/room-log.component.ts ***!
  \*********************************************************/
/*! exports provided: RoomLogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomLogComponent", function() { return RoomLogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class RoomLogComponent {
    constructor() { }
    ngOnInit() {
    }
}
RoomLogComponent.ɵfac = function RoomLogComponent_Factory(t) { return new (t || RoomLogComponent)(); };
RoomLogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RoomLogComponent, selectors: [["app-room-log"]], decls: 2, vars: 0, template: function RoomLogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " room-log works! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoomLogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-room-log',
                template: `
    <p>
      room-log works!
    </p>
  `,
                styles: [],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pointing/room-players/room-players.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pointing/room-players/room-players.component.ts ***!
  \*****************************************************************/
/*! exports provided: RoomPlayersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomPlayersComponent", function() { return RoomPlayersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_pointing_room_state_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/pointing/room-state.class */ "./src/app/pointing/room-state.class.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_pointing_pointing_constants_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/pointing/pointing-constants.class */ "./src/app/pointing/pointing-constants.class.ts");
/* harmony import */ var src_app_pointing_pointing_utils_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/pointing/pointing-utils.service */ "./src/app/pointing/pointing-utils.service.ts");
/* harmony import */ var src_app_common_color_utils_class__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common/color-utils.class */ "./src/app/common/color-utils.class.ts");
/* harmony import */ var src_app_common_user_state_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common/user-state.service */ "./src/app/common/user-state.service.ts");
/* harmony import */ var src_app_pointing_pointing_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/pointing/pointing-api.service */ "./src/app/pointing/pointing-api.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var angular_epic_spinners__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-epic-spinners */ "./node_modules/angular-epic-spinners/__ivy_ngcc__/fesm2015/angular-epic-spinners.js");











function RoomPlayersComponent_ng_container_1_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx_r14.getVoteColor(user_r10.vote));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r14.isNumber(user_r10.vote) ? user_r10.vote : "?", " ");
} }
function RoomPlayersComponent_ng_container_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RoomPlayersComponent_ng_container_1_div_4_div_1_Template, 2, 3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", user_r10.vote !== null);
} }
function RoomPlayersComponent_ng_container_1_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 16);
} }
function RoomPlayersComponent_ng_container_1_div_5_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-circles-to-rhumbuses-spinner", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("animationDuration", 1200)("circlesNum", 3)("circleSize", 9)("color", "#A3ABBD");
} }
function RoomPlayersComponent_ng_container_1_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RoomPlayersComponent_ng_container_1_div_5_div_1_Template, 1, 0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RoomPlayersComponent_ng_container_1_div_5_div_2_Template, 2, 4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.isVoted(user_r10.vote));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.isWait(user_r10.vote));
} }
const _c0 = function (a0, a1) { return { "odd": a0, "text-primary": a1 }; };
const _c1 = function (a0) { return { "odd": a0 }; };
function RoomPlayersComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RoomPlayersComponent_ng_container_1_div_4_Template, 2, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RoomPlayersComponent_ng_container_1_div_5_Template, 3, 2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const user_r10 = ctx.$implicit;
    const i_r11 = ctx.index;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx_r8.getDifferenceColor(user_r10.vote));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](10, _c0, i_r11 % 2 == 1, ctx_r8.isMyUser(user_r10)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", user_r10.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx_r8.getDifferenceColor(user_r10.vote));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx_r8.isShowVotes())("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c1, i_r11 % 2 == 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", false);
} }
const _c2 = function (a0) { return { "text-primary": a0 }; };
function RoomPlayersComponent_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const user_r20 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c2, ctx_r9.isMyUser(user_r20)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r20.name);
} }
const _c3 = function (a0) { return { "many-players": a0 }; };
class RoomPlayersComponent {
    constructor(userState, pointingApi) {
        this.userState = userState;
        this.pointingApi = pointingApi;
    }
    ngOnInit() {
    }
    isShowVotes() {
        return src_app_pointing_pointing_utils_service__WEBPACK_IMPORTED_MODULE_4__["PointingUtils"].isVotingFinished(this.state);
    }
    makePlayer() {
        this.pointingApi.switchToPlayer();
        //let current = _.remove(this.state.spectators, {uid: this.userState.getUid()})[0];
        //this.state.players.push(current);
    }
    makeSpectator() {
        this.pointingApi.switchToSpectator();
        //let current = _.remove(this.state.players, {uid: this.userState.getUid()})[0];
        //this.state.spectators.push(current);
    }
    isNumber(vote) {
        return lodash__WEBPACK_IMPORTED_MODULE_2__["isNumber"](vote);
    }
    getVoteColor(vote) {
        return src_app_pointing_pointing_constants_class__WEBPACK_IMPORTED_MODULE_3__["PointingConstants"].VOTE_COLORS[vote];
    }
    isDunno(vote) {
        return vote === src_app_pointing_room_state_class__WEBPACK_IMPORTED_MODULE_1__["VoteState"].none;
    }
    isVoted(vote) {
        return src_app_pointing_pointing_utils_service__WEBPACK_IMPORTED_MODULE_4__["PointingUtils"].isVoted(vote);
    }
    isWait(vote) {
        return vote === src_app_pointing_room_state_class__WEBPACK_IMPORTED_MODULE_1__["VoteState"].wait;
    }
    isPlayer() {
        return !!lodash__WEBPACK_IMPORTED_MODULE_2__["find"](this.state.players, { uid: this.userState.getUid() });
    }
    isSpectator() {
        return !!lodash__WEBPACK_IMPORTED_MODULE_2__["find"](this.state.spectators, { uid: this.userState.getUid() });
    }
    isMyUser(user) {
        return this.userState.getUid() === user.uid;
    }
    getDifferenceColor(vote) {
        if (!this.isShowVotes())
            return;
        let green = '#00ff00';
        let red = '#ff0000';
        let alpha = '15'; // transparency
        if (vote === src_app_pointing_room_state_class__WEBPACK_IMPORTED_MODULE_1__["VoteState"].none)
            return red + alpha;
        if (vote === null)
            return '';
        let voteNum = vote;
        let topVotes = src_app_pointing_pointing_utils_service__WEBPACK_IMPORTED_MODULE_4__["PointingUtils"].getAggregatedResults(this.state).filter(topVote => topVote.isTop);
        /* let voteIndex = PointingConstants.VOTE_VALUES.indexOf(vote);
        let indexDiff = _.chain(topVotes)
            .map(topVote => PointingConstants.VOTE_VALUES.indexOf(topVote.vote))
            .map(index => Math.abs(index - voteIndex))
            .max()
            .value();
        if (indexDiff === 0)
            return green + alpha;
        let totalValues = PointingConstants.VOTE_VALUES.length - 2; // none and wait
        return ColorUtils.blendColors(green, red, indexDiff / totalValues) + alpha; */
        let diff = lodash__WEBPACK_IMPORTED_MODULE_2__["chain"](topVotes)
            .map(topVote => topVote.vote)
            .filter(topVote => topVote > 0)
            .map((topVote) => Math.abs(topVote - voteNum))
            .max()
            .value();
        if (diff === 0)
            return green + alpha;
        let maxVote = lodash__WEBPACK_IMPORTED_MODULE_2__["maxBy"](src_app_pointing_pointing_constants_class__WEBPACK_IMPORTED_MODULE_3__["PointingConstants"].VOTE_VALUES, v => lodash__WEBPACK_IMPORTED_MODULE_2__["isNumber"](v) ? v : 0);
        return src_app_common_color_utils_class__WEBPACK_IMPORTED_MODULE_5__["ColorUtils"].blendColors(green, red, diff / (maxVote - 1)) + alpha;
    }
}
RoomPlayersComponent.ɵfac = function RoomPlayersComponent_Factory(t) { return new (t || RoomPlayersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_common_user_state_service__WEBPACK_IMPORTED_MODULE_6__["UserStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_pointing_pointing_api_service__WEBPACK_IMPORTED_MODULE_7__["PointingApiService"])); };
RoomPlayersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RoomPlayersComponent, selectors: [["room-players"]], inputs: { state: "state" }, decls: 12, vars: 7, consts: [[1, "players-list", 3, "ngClass"], [4, "ngFor", "ngForOf"], [1, "bottom-list"], [1, "actions"], [1, "btn", "btn-primary", 3, "disabled", "click"], [1, "fa", "fa-user"], [1, "btn", "btn-info", 3, "disabled", "click"], [1, "fa", "fa-eye"], [1, "players-list"], [1, "user-name", 3, "ngClass"], [1, "user-vote", 3, "ngSwitch", "ngClass"], [4, "ngSwitchCase"], ["class", "vote-number", 3, "background-color", 4, "ngIf"], [1, "vote-number"], ["class", "vote-ready", 4, "ngIf"], ["class", "vote-wait", 4, "ngIf"], [1, "vote-ready"], [1, "vote-wait"], [3, "animationDuration", "circlesNum", "circleSize", "color"]], template: function RoomPlayersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RoomPlayersComponent_ng_container_1_Template, 6, 15, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoomPlayersComponent_Template_button_click_4_listener() { return ctx.makePlayer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " I'm Player ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoomPlayersComponent_Template_button_click_7_listener() { return ctx.makeSpectator(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " I'm Spectator ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, RoomPlayersComponent_ng_container_11_Template, 4, 4, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c3, ctx.state.players.length > 12));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.state.players);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isPlayer());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isSpectator());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.state.spectators);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], angular_epic_spinners__WEBPACK_IMPORTED_MODULE_9__["ɵc"]], styles: ["[_nghost-%COMP%] {\n  height: 100%;\n  position: absolute;\n  width: auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 24px;\n  overflow: auto;\n}\n[_nghost-%COMP%]   .players-list[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  row-gap: 2px;\n  padding-bottom: 24px;\n}\n[_nghost-%COMP%]   .bottom-list[_ngcontent-%COMP%]   .players-list[_ngcontent-%COMP%] {\n  padding-top: 16px;\n  padding-bottom: 0;\n}\n[_nghost-%COMP%]   .odd[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n}\n[_nghost-%COMP%]   .user-name[_ngcontent-%COMP%] {\n  grid-column: 1/3;\n  text-align: right;\n  font-size: 20px;\n  padding: 4px 24px 4px 4px;\n  overflow: hidden;\n  font-weight: 500;\n}\n[_nghost-%COMP%]   .user-name.text-primary[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n[_nghost-%COMP%]   .user-vote[_ngcontent-%COMP%] {\n  grid-column: 3;\n  padding-left: 24px;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n[_nghost-%COMP%]   .user-vote[_ngcontent-%COMP%]   .vote-ready[_ngcontent-%COMP%], [_nghost-%COMP%]   .user-vote[_ngcontent-%COMP%]   .vote-number[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 4px;\n}\n[_nghost-%COMP%]   .user-vote[_ngcontent-%COMP%]   .vote-ready[_ngcontent-%COMP%] {\n  background-color: #A3ABBD;\n}\n[_nghost-%COMP%]   .user-vote[_ngcontent-%COMP%]   .vote-number[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 600;\n  display: flex;\n  line-height: 1;\n  align-items: center;\n  justify-content: center;\n}\n[_nghost-%COMP%]   .user-vote[_ngcontent-%COMP%]   .vote-wait[_ngcontent-%COMP%] {\n  margin-left: -17px;\n}\n[_nghost-%COMP%]   .bottom-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   .bottom-list[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n[_nghost-%COMP%]   .bottom-list[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin-right: 16px;\n}\n[_nghost-%COMP%]   .many-players[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\n  font-size: 16px;\n  padding: 2px 24px 2px 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9pbnRpbmcvcm9vbS1wbGF5ZXJzL0M6XFxQcm9qZWN0c1xccG9pbnRpbmctYmxhY2tqYWNrXFxmcm9udGVuZC9zcmNcXGFwcFxccG9pbnRpbmdcXHJvb20tcGxheWVyc1xccm9vbS1wbGF5ZXJzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wb2ludGluZy9yb29tLXBsYXllcnMvcm9vbS1wbGF5ZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUNDRDtBRENDO0VBQ0MsYUFBQTtFQUNBLHFDQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FDQ0Y7QURFQztFQUNDLGlCQUFBO0VBQ0EsaUJBQUE7QUNBRjtBREdDO0VBQ0MseUJBQUE7QUNERjtBRElDO0VBQ0MsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNGRjtBRElFO0VBQ0MsZ0JBQUE7QUNGSDtBRE1DO0VBQ0MsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FDSkY7QURNRTtFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNKSDtBRE1FO0VBQ0MseUJBQUE7QUNKSDtBRE9FO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDTEg7QURRRTtFQUNDLGtCQUFBO0FDTkg7QURVQztFQUNDLGFBQUE7RUFDQSxzQkFBQTtBQ1JGO0FEVUU7RUFDQyxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ1JIO0FEVUc7RUFDQyxrQkFBQTtBQ1JKO0FEY0U7RUFDQyxlQUFBO0VBQ0EseUJBQUE7QUNaSCIsImZpbGUiOiJzcmMvYXBwL3BvaW50aW5nL3Jvb20tcGxheWVycy9yb29tLXBsYXllcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR3aWR0aDogYXV0bztcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdHBhZGRpbmc6IDI0cHg7XHJcblx0b3ZlcmZsb3c6IGF1dG87XHJcblxyXG5cdC5wbGF5ZXJzLWxpc3Qge1xyXG5cdFx0ZGlzcGxheTogZ3JpZDtcclxuXHRcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XHJcblx0XHRyb3ctZ2FwOiAycHg7XHJcblx0XHRwYWRkaW5nLWJvdHRvbTogMjRweDtcclxuXHR9XHJcblxyXG5cdC5ib3R0b20tbGlzdCAucGxheWVycy1saXN0IHtcclxuXHRcdHBhZGRpbmctdG9wOiAxNnB4O1xyXG5cdFx0cGFkZGluZy1ib3R0b206IDA7XHJcblx0fVxyXG5cclxuXHQub2RkIHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XHJcblx0fVxyXG5cclxuXHQudXNlci1uYW1lIHtcclxuXHRcdGdyaWQtY29sdW1uOiAxLzM7XHJcblx0XHR0ZXh0LWFsaWduOiByaWdodDtcclxuXHRcdGZvbnQtc2l6ZTogMjBweDtcclxuXHRcdHBhZGRpbmc6IDRweCAyNHB4IDRweCA0cHg7XHJcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdFx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHJcblx0XHQmLnRleHQtcHJpbWFyeSB7XHJcblx0XHRcdGZvbnQtd2VpZ2h0OiA3MDA7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQudXNlci12b3RlIHtcclxuXHRcdGdyaWQtY29sdW1uOiAzO1xyXG5cdFx0cGFkZGluZy1sZWZ0OiAyNHB4O1xyXG5cdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcblx0XHQudm90ZS1yZWFkeSwgLnZvdGUtbnVtYmVyIHtcclxuXHRcdFx0d2lkdGg6IDMycHg7XHJcblx0XHRcdGhlaWdodDogMzJweDtcclxuXHRcdFx0Ym9yZGVyLXJhZGl1czogNHB4O1xyXG5cdFx0fVxyXG5cdFx0LnZvdGUtcmVhZHkge1xyXG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjQTNBQkJEO1xyXG5cdFx0fVxyXG5cclxuXHRcdC52b3RlLW51bWJlciB7XHJcblx0XHRcdGZvbnQtc2l6ZTogMjRweDtcclxuXHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcclxuXHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0bGluZS1oZWlnaHQ6IDE7XHJcblx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0fVxyXG5cclxuXHRcdC52b3RlLXdhaXQge1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogLTE3cHg7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQuYm90dG9tLWxpc3Qge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG5cdFx0LmFjdGlvbnMge1xyXG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdFx0XHJcblx0XHRcdC5idG4ge1xyXG5cdFx0XHRcdG1hcmdpbi1yaWdodDogMTZweDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Lm1hbnktcGxheWVycyB7XHJcblx0XHQudXNlci1uYW1lIHtcclxuXHRcdFx0Zm9udC1zaXplOiAxNnB4O1xyXG5cdFx0XHRwYWRkaW5nOiAycHggMjRweCAycHggMnB4O1xyXG5cdFx0fVxyXG5cdH1cclxuXHRcclxuXHJcbn1cclxuIiwiOmhvc3Qge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMjRweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG46aG9zdCAucGxheWVycy1saXN0IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbiAgcm93LWdhcDogMnB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjRweDtcbn1cbjpob3N0IC5ib3R0b20tbGlzdCAucGxheWVycy1saXN0IHtcbiAgcGFkZGluZy10b3A6IDE2cHg7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xufVxuOmhvc3QgLm9kZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG59XG46aG9zdCAudXNlci1uYW1lIHtcbiAgZ3JpZC1jb2x1bW46IDEvMztcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZzogNHB4IDI0cHggNHB4IDRweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbjpob3N0IC51c2VyLW5hbWUudGV4dC1wcmltYXJ5IHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbjpob3N0IC51c2VyLXZvdGUge1xuICBncmlkLWNvbHVtbjogMztcbiAgcGFkZGluZy1sZWZ0OiAyNHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuOmhvc3QgLnVzZXItdm90ZSAudm90ZS1yZWFkeSwgOmhvc3QgLnVzZXItdm90ZSAudm90ZS1udW1iZXIge1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG46aG9zdCAudXNlci12b3RlIC52b3RlLXJlYWR5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0EzQUJCRDtcbn1cbjpob3N0IC51c2VyLXZvdGUgLnZvdGUtbnVtYmVyIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBsaW5lLWhlaWdodDogMTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG46aG9zdCAudXNlci12b3RlIC52b3RlLXdhaXQge1xuICBtYXJnaW4tbGVmdDogLTE3cHg7XG59XG46aG9zdCAuYm90dG9tLWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuOmhvc3QgLmJvdHRvbS1saXN0IC5hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG46aG9zdCAuYm90dG9tLWxpc3QgLmFjdGlvbnMgLmJ0biB7XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbn1cbjpob3N0IC5tYW55LXBsYXllcnMgLnVzZXItbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcGFkZGluZzogMnB4IDI0cHggMnB4IDJweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoomPlayersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'room-players',
                templateUrl: './room-players.component.html',
                styleUrls: ['./room-players.component.scss']
            }]
    }], function () { return [{ type: src_app_common_user_state_service__WEBPACK_IMPORTED_MODULE_6__["UserStateService"] }, { type: src_app_pointing_pointing_api_service__WEBPACK_IMPORTED_MODULE_7__["PointingApiService"] }]; }, { state: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/pointing/room-results/room-results.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pointing/room-results/room-results.component.ts ***!
  \*****************************************************************/
/*! exports provided: RoomResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomResultsComponent", function() { return RoomResultsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_pointing_room_state_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/pointing/room-state.class */ "./src/app/pointing/room-state.class.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_pointing_pointing_constants_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/pointing/pointing-constants.class */ "./src/app/pointing/pointing-constants.class.ts");
/* harmony import */ var src_app_pointing_pointing_utils_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/pointing/pointing-utils.service */ "./src/app/pointing/pointing-utils.service.ts");
/* harmony import */ var src_app_common_user_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common/user-state.service */ "./src/app/common/user-state.service.ts");
/* harmony import */ var src_app_pointing_pointing_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/pointing/pointing-api.service */ "./src/app/pointing/pointing-api.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_pipes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-pipes */ "./node_modules/ngx-pipes/__ivy_ngcc__/fesm2015/ngx-pipes.js");
/* harmony import */ var _common_shade_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/shade.pipe */ "./src/app/common/shade.pipe.ts");











function RoomResultsComponent_ng_container_4_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "shade");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const result_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx_r31.getVoteColor(result_r30.vote))("border-color", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](1, 4, ctx_r31.getVoteColor(result_r30.vote), 0 - 0.4));
} }
const _c0 = function (a0, a1, a2) { return { "font-weight-bold": a0, "font-italic": a1, "top-result": a2 }; };
const _c1 = function (a0) { return { "top-result": a0 }; };
const _c2 = function () { return []; };
function RoomResultsComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoomResultsComponent_ng_container_4_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const result_r30 = ctx.$implicit; const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r34.changeVote(result_r30.vote); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RoomResultsComponent_ng_container_4_div_4_Template, 2, 7, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const result_r30 = ctx.$implicit;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](4, _c0, result_r30.vote > 0, !(result_r30.vote > 0), ctx_r29.isTopResult(result_r30.vote)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r29.getVoteText(result_r30.vote), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c1, ctx_r29.isTopResult(result_r30.vote)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c2).constructor(result_r30.count));
} }
class RoomResultsComponent {
    constructor(userState, pointingApi) {
        this.userState = userState;
        this.pointingApi = pointingApi;
    }
    ngOnInit() {
    }
    getAggregatedResults() {
        return src_app_pointing_pointing_utils_service__WEBPACK_IMPORTED_MODULE_4__["PointingUtils"].getAggregatedResults(this.state);
    }
    getVoteColor(vote) {
        return src_app_pointing_pointing_constants_class__WEBPACK_IMPORTED_MODULE_3__["PointingConstants"].VOTE_COLORS[vote];
    }
    getVoteText(vote) {
        switch (vote) {
            case src_app_pointing_room_state_class__WEBPACK_IMPORTED_MODULE_1__["VoteState"].none: return '?';
            case 'null': return 'Skipped';
            default: return vote + '';
        }
    }
    isTopResult(vote) {
        let results = this.getAggregatedResults();
        return lodash__WEBPACK_IMPORTED_MODULE_2__["find"](results, { vote }).isTop;
    }
    changeVote(vote) {
        let me = lodash__WEBPACK_IMPORTED_MODULE_2__["find"](this.state.players, { uid: this.userState.getUid() });
        if (me)
            this.pointingApi.vote(vote);
        //me.vote = vote;
    }
}
RoomResultsComponent.ɵfac = function RoomResultsComponent_Factory(t) { return new (t || RoomResultsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_common_user_state_service__WEBPACK_IMPORTED_MODULE_5__["UserStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_pointing_pointing_api_service__WEBPACK_IMPORTED_MODULE_6__["PointingApiService"])); };
RoomResultsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RoomResultsComponent, selectors: [["room-results"]], inputs: { state: "state" }, decls: 6, vars: 4, consts: [[1, "vote", "result-header"], [1, "count", "result-header"], [4, "ngFor", "ngForOf"], ["title", "Click to change vote", 1, "vote", "clickable", 3, "ngClass", "click"], [1, "count", 3, "ngClass"], ["class", "count-item", 3, "background-color", "border-color", 4, "ngFor", "ngForOf"], [1, "count-item"]], template: function RoomResultsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Points");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Count");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RoomResultsComponent_ng_container_4_Template, 5, 11, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "orderBy");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 1, ctx.getAggregatedResults(), "-count"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"]], pipes: [ngx_pipes__WEBPACK_IMPORTED_MODULE_8__["OrderByPipe"], _common_shade_pipe__WEBPACK_IMPORTED_MODULE_9__["ShadePipe"]], styles: [".vote[_ngcontent-%COMP%] {\n  font-size: 6vh;\n  justify-self: end;\n  align-self: center;\n  width: 100%;\n  text-align: right;\n  padding-right: 24px;\n  border-right: 1px solid;\n}\n\n.count[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  text-align: right;\n  display: flex;\n  align-self: center;\n  align-items: center;\n  justify-self: start;\n  padding-left: 24px;\n}\n\n.count[_ngcontent-%COMP%]   .count-item[_ngcontent-%COMP%] {\n  width: 4vh;\n  height: 4vh;\n  border-radius: 4px;\n  margin-right: 1vh;\n  border: 1px solid transparent;\n}\n\n.count[_ngcontent-%COMP%]   .count-item[_ngcontent-%COMP%]   complication-indicator[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.result-header.vote[_ngcontent-%COMP%], .result-header.count[_ngcontent-%COMP%] {\n  font-size: 3vh;\n  border-bottom: 1px solid;\n}\n\n.top-result[_ngcontent-%COMP%] {\n  background-color: #27ff0029;\n}\n\n[_nghost-%COMP%] {\n  padding-top: 32px;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9pbnRpbmcvcm9vbS1yZXN1bHRzL0M6XFxQcm9qZWN0c1xccG9pbnRpbmctYmxhY2tqYWNrXFxmcm9udGVuZC9zcmNcXGFwcFxccG9pbnRpbmdcXHJvb20tcmVzdWx0c1xccm9vbS1yZXN1bHRzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wb2ludGluZy9yb29tLXJlc3VsdHMvcm9vbS1yZXN1bHRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0MsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDQUQ7O0FER0E7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDQUQ7O0FERUM7RUFDQyxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFBQTtBQ0FGOztBREVFO0VBQ0MsV0FBQTtFQUNBLFlBQUE7QUNBSDs7QURLQztFQUNDLGNBQUE7RUFDQSx3QkFBQTtBQ0ZGOztBREtBO0VBQ0MsMkJBQUE7QUNGRDs7QURJQTtFQUNDLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHFDQUFBO0FDREQiLCJmaWxlIjoic3JjL2FwcC9wb2ludGluZy9yb29tLXJlc3VsdHMvcm9vbS1yZXN1bHRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi52b3RlIHtcclxuXHRmb250LXNpemU6IDZ2aDtcclxuXHRqdXN0aWZ5LXNlbGY6IGVuZDtcclxuXHRhbGlnbi1zZWxmOiBjZW50ZXI7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0dGV4dC1hbGlnbjogcmlnaHQ7XHJcblx0cGFkZGluZy1yaWdodDogMjRweDtcclxuXHRib3JkZXItcmlnaHQ6IDFweCBzb2xpZDtcclxufVxyXG5cclxuLmNvdW50IHtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0dGV4dC1hbGlnbjogcmlnaHQ7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRhbGlnbi1zZWxmOiBjZW50ZXI7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xyXG5cdHBhZGRpbmctbGVmdDogMjRweDtcclxuXHRcclxuXHQuY291bnQtaXRlbSB7XHJcblx0XHR3aWR0aDogNHZoO1xyXG5cdFx0aGVpZ2h0OiA0dmg7XHJcblx0XHRib3JkZXItcmFkaXVzOiA0cHg7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDF2aDtcclxuXHRcdGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG5cclxuXHRcdGNvbXBsaWNhdGlvbi1pbmRpY2F0b3Ige1xyXG5cdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4ucmVzdWx0LWhlYWRlciB7XHJcblx0Ji52b3RlLCAmLmNvdW50IHtcclxuXHRcdGZvbnQtc2l6ZTogM3ZoO1xyXG5cdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xyXG5cdH1cclxufVxyXG4udG9wLXJlc3VsdCB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzI3ZmYwMDI5O1xyXG59XHJcbjpob3N0IHtcclxuXHRwYWRkaW5nLXRvcDogMzJweDtcclxuXHRkaXNwbGF5OiBncmlkO1xyXG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XHJcbn0iLCIudm90ZSB7XG4gIGZvbnQtc2l6ZTogNnZoO1xuICBqdXN0aWZ5LXNlbGY6IGVuZDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHBhZGRpbmctcmlnaHQ6IDI0cHg7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkO1xufVxuXG4uY291bnQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xuICBwYWRkaW5nLWxlZnQ6IDI0cHg7XG59XG4uY291bnQgLmNvdW50LWl0ZW0ge1xuICB3aWR0aDogNHZoO1xuICBoZWlnaHQ6IDR2aDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBtYXJnaW4tcmlnaHQ6IDF2aDtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG4uY291bnQgLmNvdW50LWl0ZW0gY29tcGxpY2F0aW9uLWluZGljYXRvciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5yZXN1bHQtaGVhZGVyLnZvdGUsIC5yZXN1bHQtaGVhZGVyLmNvdW50IHtcbiAgZm9udC1zaXplOiAzdmg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcbn1cblxuLnRvcC1yZXN1bHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjdmZjAwMjk7XG59XG5cbjpob3N0IHtcbiAgcGFkZGluZy10b3A6IDMycHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoomResultsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'room-results',
                templateUrl: './room-results.component.html',
                styleUrls: ['./room-results.component.scss']
            }]
    }], function () { return [{ type: src_app_common_user_state_service__WEBPACK_IMPORTED_MODULE_5__["UserStateService"] }, { type: src_app_pointing_pointing_api_service__WEBPACK_IMPORTED_MODULE_6__["PointingApiService"] }]; }, { state: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/pointing/room-state.class.ts":
/*!**********************************************!*\
  !*** ./src/app/pointing/room-state.class.ts ***!
  \**********************************************/
/*! exports provided: VoteState, RoomState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoteState", function() { return VoteState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomState", function() { return RoomState; });
var VoteState;
(function (VoteState) {
    VoteState["wait"] = "wait";
    VoteState["none"] = "none";
})(VoteState || (VoteState = {}));
class RoomState {
}


/***/ }),

/***/ "./src/app/pointing/room/room.component.ts":
/*!*************************************************!*\
  !*** ./src/app/pointing/room/room.component.ts ***!
  \*************************************************/
/*! exports provided: RoomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomComponent", function() { return RoomComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_pointing_pointing_utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pointing/pointing-utils.service */ "./src/app/pointing/pointing-utils.service.ts");
/* harmony import */ var src_app_pointing_pointing_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/pointing/pointing-api.service */ "./src/app/pointing/pointing-api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_common_user_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common/user-state.service */ "./src/app/common/user-state.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-clipboard */ "./node_modules/ngx-clipboard/__ivy_ngcc__/fesm2015/ngx-clipboard.js");
/* harmony import */ var _room_players_room_players_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../room-players/room-players.component */ "./src/app/pointing/room-players/room-players.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _hangman_progress_hangman_progress_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../hangman-progress/hangman-progress.component */ "./src/app/pointing/hangman-progress/hangman-progress.component.ts");
/* harmony import */ var _room_cards_room_cards_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../room-cards/room-cards.component */ "./src/app/pointing/room-cards/room-cards.component.ts");
/* harmony import */ var _room_results_room_results_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../room-results/room-results.component */ "./src/app/pointing/room-results/room-results.component.ts");














function RoomComponent_room_cards_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "room-cards", 21);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("state", ctx_r5.roomState);
} }
function RoomComponent_room_results_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "room-results", 22);
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("state", ctx_r6.roomState);
} }
function RoomComponent_hangman_progress_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "hangman-progress", 23);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("progress", ctx_r7.getProgress());
} }
class RoomComponent {
    //private originalState: RoomState;
    constructor(pointingApi, route, userState) {
        this.pointingApi = pointingApi;
        this.route = route;
        this.userState = userState;
    }
    ngOnInit() {
        this.roomId = this.route.snapshot.paramMap.get('id');
        this.roomUrl = location.href;
        this.roomState = {
            players: [],
            spectators: []
        };
        this.pointingApi.getStateObserver().subscribe(state => this.roomState = state);
        this.pointingApi.joinRoom(this.roomId);
        /* this.roomState = {
            id: 'blabla',
            name: 'bleble name',
            players: [
                {uid: 'user1', name: 'User 1', vote: 13},
                {uid: 'user2', name: 'User 2', vote: VoteState.none},
                {uid: 'hardcoded', name: 'My user', vote: undefined},
                {uid: 'user4', name: 'User 4', vote: 1},
                {uid: 'user5', name: 'User 5', vote: VoteState.none},
                {uid: 'user6', name: 'User 6', vote: 3},
                {uid: 'user7', name: 'User 7 long name bla bla bla jskjdskdj askdjkdjk skdjajkdsjkd d', vote: 2},
                {uid: 'user8', name: 'User 8', vote: 3},
                {uid: 'user9', name: 'User 9', vote: undefined},
                {uid: 'user10', name: 'User 10', vote: 1},
                {uid: 'user1', name: 'User 11', vote: 3},
            ],
            spectators: [
                {uid: 'obs1', name: 'watcher 1'},
                {uid: 'obs2', name: 'watcher 2'}
            ],
            log: [{time: 1000, message: 'User1 joined'}, {time: 2000, message: 'User2 joined'}]
        }; */
        //this.originalState = _.cloneDeep(this.roomState);
    }
    resetVotes() {
        this.pointingApi.reset();
        //this.roomState = _.cloneDeep(this.originalState);
    }
    showVotes() {
        this.pointingApi.show();
        //_.each(this.roomState.players, player => player.vote = PointingUtils.isVoted(player.vote) ? player.vote : null);
    }
    getMode() {
        if (src_app_pointing_pointing_utils_service__WEBPACK_IMPORTED_MODULE_2__["PointingUtils"].isVotingFinished(this.roomState))
            return 'results';
        if (this.isSpectator())
            return 'progress';
        return 'cards';
    }
    showMiniProgress() {
        return src_app_pointing_pointing_utils_service__WEBPACK_IMPORTED_MODULE_2__["PointingUtils"].isVotingFinished(this.roomState) || !this.isSpectator();
    }
    isSpectator() {
        return !!lodash__WEBPACK_IMPORTED_MODULE_1__["find"](this.roomState.spectators, { uid: this.userState.getUid() });
    }
    getProgress() {
        return src_app_pointing_pointing_utils_service__WEBPACK_IMPORTED_MODULE_2__["PointingUtils"].getProgress(this.roomState);
    }
}
RoomComponent.ɵfac = function RoomComponent_Factory(t) { return new (t || RoomComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_pointing_pointing_api_service__WEBPACK_IMPORTED_MODULE_3__["PointingApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_common_user_state_service__WEBPACK_IMPORTED_MODULE_5__["UserStateService"])); };
RoomComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RoomComponent, selectors: [["app-room"]], decls: 23, vars: 9, consts: [[1, "room-header", "d-flex", "flex-row", "bg-secondary", "p-7"], [1, "room-link"], [1, "input-group", "input-group-sm"], ["type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "input-group-append"], ["ngxClipboard", "", "title", "Copy link", 1, "btn", "btn-icon", "btn-secondary", 3, "cbContent"], [1, "fa", "fa-copy"], [1, "room-actions", "d-flex", "justify-content-center"], [1, "btn", "btn-danger", "btn-sm", "m-r-36", 3, "click"], [1, "fa", "fa-eraser"], [1, "btn", "btn-info", "btn-sm", 3, "click"], [1, "fa", "fa-eye"], [1, "room-players"], [3, "state"], [1, "room-content", 3, "ngSwitch"], [1, "room-content-center"], ["class", "room-cards", 3, "state", 4, "ngSwitchCase"], ["class", "room-results", 3, "state", 4, "ngSwitchCase"], [3, "progress", 4, "ngSwitchCase"], [1, "room-progress"], [3, "progress", "hidden"], [1, "room-cards", 3, "state"], [1, "room-results", 3, "state"], [3, "progress"]], template: function RoomComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RoomComponent_Template_input_ngModelChange_3_listener($event) { return ctx.roomUrl = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoomComponent_Template_button_click_8_listener() { return ctx.resetVotes(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Reset ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoomComponent_Template_button_click_11_listener() { return ctx.showVotes(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Show results ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "room-players", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, RoomComponent_room_cards_18_Template, 1, 1, "room-cards", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, RoomComponent_room_results_19_Template, 1, 1, "room-results", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, RoomComponent_hangman_progress_20_Template, 1, 1, "hangman-progress", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "hangman-progress", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.roomUrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cbContent", ctx.roomUrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("state", ctx.roomState);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.getMode());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "cards");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "results");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "progress");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("progress", ctx.getProgress())("hidden", !ctx.showMiniProgress());
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], ngx_clipboard__WEBPACK_IMPORTED_MODULE_7__["ClipboardDirective"], _room_players_room_players_component__WEBPACK_IMPORTED_MODULE_8__["RoomPlayersComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgSwitchCase"], _hangman_progress_hangman_progress_component__WEBPACK_IMPORTED_MODULE_10__["HangmanProgressComponent"], _room_cards_room_cards_component__WEBPACK_IMPORTED_MODULE_11__["RoomCardsComponent"], _room_results_room_results_component__WEBPACK_IMPORTED_MODULE_12__["RoomResultsComponent"]], styles: [".room-header[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  height: 44px;\n  width: 100%;\n}\n.room-header[_ngcontent-%COMP%]   .room-link[_ngcontent-%COMP%] {\n  width: 600px;\n}\n.room-header[_ngcontent-%COMP%]   .room-actions[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.room-players[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 44px;\n  left: 0;\n  width: 30%;\n  bottom: 0;\n}\n.room-content[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 30%;\n  top: 44px;\n  bottom: 0;\n  right: 200px;\n}\n.room-content[_ngcontent-%COMP%]   .room-content-center[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n}\n.room-cards[_ngcontent-%COMP%] {\n  position: absolute;\n  width: auto;\n  height: 100%;\n}\n.room-results[_ngcontent-%COMP%] {\n  position: absolute;\n  width: auto;\n}\n.room-log[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  height: 0;\n  left: 30%;\n  right: 0;\n}\n.room-progress[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  width: 200px;\n  top: 44px;\n  height: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9pbnRpbmcvcm9vbS9DOlxcUHJvamVjdHNcXHBvaW50aW5nLWJsYWNramFja1xcZnJvbnRlbmQvc3JjXFxhcHBcXHBvaW50aW5nXFxyb29tXFxyb29tLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wb2ludGluZy9yb29tL3Jvb20uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU0E7RUFDQyxrQkFBQTtFQUNBLE1BQUE7RUFDQSxZQVpRO0VBYVIsV0FBQTtBQ1JEO0FEVUM7RUFDQyxZQUFBO0FDUkY7QURVQztFQUNDLFdBQUE7QUNSRjtBRFlBO0VBQ0Msa0JBQUE7RUFDQSxTQXpCUTtFQTBCUixPQUFBO0VBQ0EsVUExQlM7RUEyQlQsU0FBQTtBQ1REO0FEWUE7RUFDQyxrQkFBQTtFQUNBLFNBaENTO0VBaUNULFNBbENRO0VBbUNSLFNBakNLO0VBa0NMLFlBakNVO0FDd0JYO0FEV0M7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQ1RGO0FEYUE7RUFDQyxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDVkQ7QURhQTtFQUNDLGtCQUFBO0VBQ0EsV0FBQTtBQ1ZEO0FEYUE7RUFDQyxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQTFESztFQTJETCxTQTVEUztFQTZEVCxRQUFBO0FDVkQ7QURhQTtFQUNDLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFlBakVVO0VBa0VWLFNBckVRO0VBc0VSLGFBbkVVO0FDeURYIiwiZmlsZSI6InNyYy9hcHAvcG9pbnRpbmcvcm9vbS9yb29tLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGhlYWRlcjogNDRweDtcclxuJHBsYXllcnM6IDMwJTtcclxuJGxvZzogMDsgLy8xNTBweDtcclxuJHByb2dyZXNzOiAyMDBweDtcclxuXHJcbmRpdiB7XHJcblx0Ly9ib3gtc2hhZG93OiAwIC41cmVtIDFyZW0gcmdiYSgwLDAsMCwuMTUpO1xyXG59XHJcblxyXG4ucm9vbS1oZWFkZXIge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IDA7XHJcblx0aGVpZ2h0OiAkaGVhZGVyO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cclxuXHQucm9vbS1saW5rIHtcclxuXHRcdHdpZHRoOiA2MDBweDtcclxuXHR9XHJcblx0LnJvb20tYWN0aW9ucyB7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHR9XHJcbn1cclxuXHJcbi5yb29tLXBsYXllcnMge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6ICRoZWFkZXI7XHJcblx0bGVmdDogMDtcclxuXHR3aWR0aDogJHBsYXllcnM7XHJcblx0Ym90dG9tOiAwO1xyXG59XHJcblxyXG4ucm9vbS1jb250ZW50IHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0bGVmdDogJHBsYXllcnM7XHJcblx0dG9wOiAkaGVhZGVyO1xyXG5cdGJvdHRvbTogJGxvZztcclxuXHRyaWdodDogJHByb2dyZXNzO1xyXG5cclxuXHQucm9vbS1jb250ZW50LWNlbnRlciB7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGhlaWdodDogMTAwJTtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHR9XHJcbn1cclxuXHJcbi5yb29tLWNhcmRzIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0d2lkdGg6IGF1dG87XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ucm9vbS1yZXN1bHRzIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0d2lkdGg6IGF1dG87XHJcbn1cclxuXHJcbi5yb29tLWxvZyB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdGJvdHRvbTogMDtcclxuXHRoZWlnaHQ6ICRsb2c7XHJcblx0bGVmdDogJHBsYXllcnM7XHJcblx0cmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5yb29tLXByb2dyZXNzIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0cmlnaHQ6IDA7XHJcblx0d2lkdGg6ICRwcm9ncmVzcztcclxuXHR0b3A6ICRoZWFkZXI7XHJcblx0aGVpZ2h0OiAkcHJvZ3Jlc3M7XHJcbn0iLCIucm9vbS1oZWFkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgaGVpZ2h0OiA0NHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5yb29tLWhlYWRlciAucm9vbS1saW5rIHtcbiAgd2lkdGg6IDYwMHB4O1xufVxuLnJvb20taGVhZGVyIC5yb29tLWFjdGlvbnMge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnJvb20tcGxheWVycyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0NHB4O1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMzAlO1xuICBib3R0b206IDA7XG59XG5cbi5yb29tLWNvbnRlbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDMwJTtcbiAgdG9wOiA0NHB4O1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAyMDBweDtcbn1cbi5yb29tLWNvbnRlbnQgLnJvb20tY29udGVudC1jZW50ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnJvb20tY2FyZHMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5yb29tLXJlc3VsdHMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiBhdXRvO1xufVxuXG4ucm9vbS1sb2cge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgaGVpZ2h0OiAwO1xuICBsZWZ0OiAzMCU7XG4gIHJpZ2h0OiAwO1xufVxuXG4ucm9vbS1wcm9ncmVzcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiAyMDBweDtcbiAgdG9wOiA0NHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoomComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-room',
                templateUrl: './room.component.html',
                styleUrls: ['./room.component.scss']
            }]
    }], function () { return [{ type: src_app_pointing_pointing_api_service__WEBPACK_IMPORTED_MODULE_3__["PointingApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: src_app_common_user_state_service__WEBPACK_IMPORTED_MODULE_5__["UserStateService"] }]; }, null); })();


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

module.exports = __webpack_require__(/*! C:\Projects\pointing-blackjack\frontend\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map