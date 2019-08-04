(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_app_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/app-login.component */ "./src/app/auth/app-login.component.ts");
/* harmony import */ var _auth_app_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/app-signup.component */ "./src/app/auth/app-signup.component.ts");
/* harmony import */ var _user_user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user/user-dashboard/user-dashboard.component */ "./src/app/user/user-dashboard/user-dashboard.component.ts");






var routes = [
    { path: 'auth/login', component: _auth_app_login_component__WEBPACK_IMPORTED_MODULE_3__["AppLoginComponent"] },
    { path: 'auth/signup', component: _auth_app_signup_component__WEBPACK_IMPORTED_MODULE_4__["AppSignupComponent"] },
    { path: 'user/:id', component: _user_user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["UserDashboardComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"header\">\n    <nav class=\"navbar navbar-expand-md navbar-light bg-light\">\n        <a class=\"navbar-brand\" href=\"#\">\n            <h2>\n                Note\n            </h2>\n        </a>\n        <button class=\"navbar-toggler d-lg-none\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavId\" aria-controls=\"collapsibleNavId\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n        <div class=\"collapse navbar-collapse\" id=\"collapsibleNavId\">\n            <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\n                <li class=\"nav-item active\">\n                    <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"#\">Dashboard</a>\n                </li>\n                <li class=\"nav-item dropdown\">\n                    <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"dropdownId\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Dropdown</a>\n                    <div class=\"dropdown-menu\" aria-labelledby=\"dropdownId\">\n                        <a class=\"dropdown-item\" href=\"#\">Action 1</a>\n                        <a class=\"dropdown-item\" href=\"#\">Action 2</a>\n                    </div>\n                </li>\n            </ul>\n            <div class=\"button-group\">\n                <a *ngIf=\"!authService.getLoginState()\" [routerLink]=\"['auth/signup']\">\n                    <button class=\"btn btn-primary mr-2\">Signup</button>\n                </a>\n                <a *ngIf=\"!authService.getLoginState()\" [routerLink]=\"['auth/login']\">\n                    <button class=\"btn btn-outline-success mr-2\">Login</button>\n                </a>\n                <button *ngIf=\"authService.getLoginState()\" class=\"btn btn-outline-danger mr-2\">Logout</button>\n            </div>\n        </div>\n    </nav>\n</section>\n\n\n<router-outlet></router-outlet>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/auth.service */ "./src/app/service/auth.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(authService) {
        this.authService = authService;
        this.title = 'note-app';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _auth_app_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/app-login.component */ "./src/app/auth/app-login.component.ts");
/* harmony import */ var _auth_app_signup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth/app-signup.component */ "./src/app/auth/app-signup.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _user_user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user/user-dashboard/user-dashboard.component */ "./src/app/user/user-dashboard/user-dashboard.component.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _auth_app_login_component__WEBPACK_IMPORTED_MODULE_6__["AppLoginComponent"],
                _auth_app_signup_component__WEBPACK_IMPORTED_MODULE_7__["AppSignupComponent"],
                _user_user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["UserDashboardComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/app-login.component.html":
/*!***********************************************!*\
  !*** ./src/app/auth/app-login.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"login\">\r\n    <div class=\"container\">\r\n        <div class=\"row justify-content-center align-items-center\">\r\n            <form class=\"col-md-5 mt-5\" #loginForm=\"ngForm\" (ngSubmit)=\"onLoginSubmit(loginForm)\">\r\n\r\n                <div *ngIf=\"loginMessage\" class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\">\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n                  <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n                    <strong>{{ loginMessage }}</strong>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"username\">Username</label>\r\n                    <input type=\"text\" class=\"form-control\" ngModel name=\"username\" id=\"username\" placeholder=\"John Doe\">\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label for=\"password\">Password</label>\r\n                    <input type=\"password\" class=\"form-control\" ngModel name=\"password\" id=\"password\">\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <button type=\"submit\" class=\"btm btn-primary mr-2\"> Login </button>\r\n                    <button type=\"reset\" class=\"btm btn-warning mr-2\"> Reset </button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n\r\n</section>\r\n\r\n\r\n<!--\r\n\r\n\r\n\r\n -->"

/***/ }),

/***/ "./src/app/auth/app-login.component.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/app-login.component.ts ***!
  \*********************************************/
/*! exports provided: AppLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppLoginComponent", function() { return AppLoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AppLoginComponent = /** @class */ (function () {
    function AppLoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AppLoginComponent.prototype.onLoginSubmit = function (loginForm) {
        var _this = this;
        var loginUser = {};
        loginUser.username = loginForm.value.username;
        loginUser.password = loginForm.value.password;
        console.log(loginUser);
        this.authService.doLogin(loginUser)
            .subscribe(function (response) {
            if (response.status === 200) {
                console.log(response.body);
                var userToken = response.body['token'];
                var userId = response.body['id'];
                localStorage.setItem('token', userToken);
                _this.authService.updateUserStatus(userId);
                _this.router.navigate(['user', userId]);
            }
        }, function (err) {
            _this.loginMessage = 'Login Failed. ';
            console.error(err);
            if (err.error.message) {
                _this.loginMessage += err.error.message;
            }
        });
    };
    AppLoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./app-login.component.html */ "./src/app/auth/app-login.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AppLoginComponent);
    return AppLoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/app-signup.component.html":
/*!************************************************!*\
  !*** ./src/app/auth/app-signup.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"login\">\r\n    <div class=\"container\">\r\n        <div class=\"row justify-content-center align-items-center\">\r\n            <form class=\"col-md-5 mt-5\">\r\n\r\n                <div class=\"form-group\">\r\n                    <label for=\"name\">Name</label>\r\n                    <input type=\"text\" class=\"form-control\" name=\"name\" id=\"name\" placeholder=\"John Doe\">\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label for=\"username\">Username</label>\r\n                    <input type=\"text\" class=\"form-control\" name=\"username\" id=\"username\" placeholder=\"\">\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label for=\"password\">Password</label>\r\n                    <input type=\"password\" class=\"form-control\" name=\"password\" id=\"password\">\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label for=\"email\">email</label>\r\n                    <input type=\"text\" class=\"form-control\" name=\"email\" id=\"email\">\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <button type=\"submit\" class=\"btm btn-primary mr-2\"> Signup </button>\r\n                    <button type=\"reset\" class=\"btm btn-warning mr-2\"> Reset </button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n\r\n</section>\r\n\r\n\r\n<!--\r\n\r\n\r\n\r\n -->\r\n"

/***/ }),

/***/ "./src/app/auth/app-signup.component.ts":
/*!**********************************************!*\
  !*** ./src/app/auth/app-signup.component.ts ***!
  \**********************************************/
/*! exports provided: AppSignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSignupComponent", function() { return AppSignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppSignupComponent = /** @class */ (function () {
    function AppSignupComponent() {
    }
    AppSignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./app-signup.component.html */ "./src/app/auth/app-signup.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppSignupComponent);
    return AppSignupComponent;
}());



/***/ }),

/***/ "./src/app/service/auth.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/auth.service.ts ***!
  \*****************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var AuthService = /** @class */ (function () {
    function AuthService(httpClient) {
        this.httpClient = httpClient;
        // private requestUri = 'http://localhost:3090/auth/login';
        this.requestUri = 'auth/login';
        this.isLoggedIn = false;
    }
    AuthService.prototype.doLogin = function (userData) {
        return this.httpClient.post(this.requestUri, userData, { observe: 'response' });
    };
    AuthService.prototype.doLogout = function () {
        if (localStorage.getItem('token')) {
            localStorage.removeItem('token');
            this.updateUserStatus(this.userId);
        }
        return true;
    };
    AuthService.prototype.getLoginState = function () {
        return this.isLoggedIn;
    };
    AuthService.prototype.setLoginState = function (state) {
        this.isLoggedIn = state;
    };
    AuthService.prototype.updateUserStatus = function (userId) {
        if (localStorage.getItem('token')) {
            this.setLoginState(true);
            this.userId = userId;
        }
        else {
            this.setLoginState(false);
            this.userId = '';
        }
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/user/user-dashboard/user-dashboard.component.css":
/*!******************************************************************!*\
  !*** ./src/app/user/user-dashboard/user-dashboard.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci1kYXNoYm9hcmQvdXNlci1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/user/user-dashboard/user-dashboard.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/user/user-dashboard/user-dashboard.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  user-dashboard-component works!\n</p>\n"

/***/ }),

/***/ "./src/app/user/user-dashboard/user-dashboard.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/user/user-dashboard/user-dashboard.component.ts ***!
  \*****************************************************************/
/*! exports provided: UserDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDashboardComponent", function() { return UserDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserDashboardComponent = /** @class */ (function () {
    function UserDashboardComponent() {
    }
    UserDashboardComponent.prototype.ngOnInit = function () {
    };
    UserDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-dashboard',
            template: __webpack_require__(/*! ./user-dashboard.component.html */ "./src/app/user/user-dashboard/user-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./user-dashboard.component.css */ "./src/app/user/user-dashboard/user-dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserDashboardComponent);
    return UserDashboardComponent;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\DMEHER\Documents\DMEHER\Progs\MEAN\NoteApp\note-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map