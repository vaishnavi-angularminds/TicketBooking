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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm\">\n  <h5 class=\"my-0 mr-md-auto font-weight-normal\">\n      <img src=\"assets/images/logo.png\" height=\"30\">\n  </h5>\n  <nav class=\"my-2 my-md-0 mr-md-3\">\n      <a class=\"p-2 text-dark\" href=\"mailto:care@booking.com\"><i class=\"fa fa-envelope\"></i> care@booking.com</a>\n      <a class=\"p-2 text-dark\" href=\"#\"><i class=\"fa fa-mobile-alt\"></i>  1800 256 253</a>\n  </nav>\n</div>\n<!-- Header ends-->\n\n<!-- Contents -->\n<router-outlet></router-outlet>\n<!-- Contents ends-->\n\n<!-- Footer -->\n<div class=\"container-fluid\">\n  <footer class=\"pt-5 my-md-5 pt-md-5 border-top\">\n      <div class=\"row\">\n          <div class=\"col-2 col-md\">\n              <img src=\"assets/images/am.png\" class=\"img-fluid mb-3\">\n              <h5 class=\"text-muted\">Event Title Sponser</h5>\n              <br/>\n              <small class=\"d-block mb-3 text-muted\">&copy; 2018-2019</small>\n          </div>\n          <div class=\"col-5 col-md\">\n              <h5>Features</h5>\n              <ul class=\"list-unstyled text-small\">\n                  <li><a class=\"text-muted\" href=\"#\">Cool stuff</a></li>\n                  <li><a class=\"text-muted\" href=\"#\">Random feature</a></li>\n                  <li><a class=\"text-muted\" href=\"#\">Team feature</a></li>\n              </ul>\n          </div>\n          <div class=\"col-5 col-md\">\n              <h5>Resources</h5>\n              <ul class=\"list-unstyled text-small\">\n                  <li><a class=\"text-muted\" href=\"#\">Resource</a></li>\n                  <li><a class=\"text-muted\" href=\"#\">Resource name</a></li>\n                  <li><a class=\"text-muted\" href=\"#\">Another resource</a></li>\n              </ul>\n          </div>\n      </div>\n  </footer>\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_payment_payment_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/payment/payment.component */ "./src/app/components/payment/payment.component.ts");
/* harmony import */ var _components_seats_information_seats_information_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/seats-information/seats-information.component */ "./src/app/components/seats-information/seats-information.component.ts");
/* harmony import */ var _components_failed_failed_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/failed/failed.component */ "./src/app/components/failed/failed.component.ts");
/* harmony import */ var _components_success_success_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/success/success.component */ "./src/app/components/success/success.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"] },
    { path: 'seatsInformations', component: _components_seats_information_seats_information_component__WEBPACK_IMPORTED_MODULE_9__["SeatsInformationComponent"] },
    { path: 'paymentGateway', component: _components_payment_payment_component__WEBPACK_IMPORTED_MODULE_8__["PaymentComponent"] },
    { path: 'paymentSuccess', component: _components_success_success_component__WEBPACK_IMPORTED_MODULE_11__["SuccessComponent"] },
    { path: 'paymentFailure', component: _components_failed_failed_component__WEBPACK_IMPORTED_MODULE_10__["FailedComponent"] },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _components_payment_payment_component__WEBPACK_IMPORTED_MODULE_8__["PaymentComponent"],
                _components_seats_information_seats_information_component__WEBPACK_IMPORTED_MODULE_9__["SeatsInformationComponent"],
                _components_failed_failed_component__WEBPACK_IMPORTED_MODULE_10__["FailedComponent"],
                _components_success_success_component__WEBPACK_IMPORTED_MODULE_11__["SuccessComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes)
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/failed/failed.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/failed/failed.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/failed/failed.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/failed/failed.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <!-- Contents -->\n    <div class=\"container-fluid seats-container p-5\"  ng-init=\"refresh()\">\n      <div class=\"row\">\n          <div class=\"col-md-6 offset-md-3\">\n              <div class=\"card shadow-lg\">\n                  <div class=\"card-body\">\n                      <div class=\"row\">\n                          <div class=\"col-md-12 text-center\">\n                                  <i class=\"far fa-times-circle fa-7x text-danger\"></i>\n                                  <br/>\n                                  <h4 class=\"text-dark my-5\">Oops! Payment Failed. Better luck next time!</h4>\n                                  <p class=\"text-muted\"><i class=\"fa fa-thumbs-up\"></i> Be calm, Solve puzzle to win tickets</p>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n\n\n\n  </div>\n  <!-- Contents ends-->\n\n "

/***/ }),

/***/ "./src/app/components/failed/failed.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/failed/failed.component.ts ***!
  \*******************************************************/
/*! exports provided: FailedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FailedComponent", function() { return FailedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _db_connect_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../db-connect-service.service */ "./src/app/db-connect-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FailedComponent = /** @class */ (function () {
    function FailedComponent(_dbService) {
        this._dbService = _dbService;
    }
    FailedComponent.prototype.ngOnInit = function () {
        this._dbService.saveTicketStatus('Failed').subscribe(function (data) {
            console.log('Data update ...');
            console.log(data);
        });
        ;
    };
    FailedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-failed',
            template: __webpack_require__(/*! ./failed.component.html */ "./src/app/components/failed/failed.component.html"),
            styles: [__webpack_require__(/*! ./failed.component.css */ "./src/app/components/failed/failed.component.css")]
        }),
        __metadata("design:paramtypes", [_db_connect_service_service__WEBPACK_IMPORTED_MODULE_1__["DbConnectServiceService"]])
    ], FailedComponent);
    return FailedComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <img src=\"assets/images/banner.png\" class=\"img-fluid\">\n  <div class=\"my-5 text-center\">\n      <h1>Book Tickets for event now, Limited Seats :)</h1>\n      <p class=\"text-muted\">\n          For 18+ years old people only, Need to carry your goverment Identity for event. No cancellation of sold tickets.\n      </p>\n  </div>\n  \n  <div class=\"card-deck mb-3 text-center\">\n      <div class=\"card mb-4 shadow-sm\">\n          <div class=\"card-header\">\n              <h4 class=\"my-0 font-weight-normal\">Single Person</h4>\n          </div>\n          <div class=\"card-body\">\n              <h2 class=\"card-title pricing-card-title\">\n                  <i class=\"fas fa-rupee-sign\"></i> 300\n              </h2>\n              <a class=\"btn btn-lg btn-block btn-outline-primary\" (click)=\"setTotalNumTickets('1','300')\" routerLink=\"/seatsInformations\">Proceed</a>\n          </div>\n      </div>\n      <div class=\"card mb-4 shadow-sm\">\n          <div class=\"card-header\">\n              <h4 class=\"my-0 font-weight-normal\">2 People</h4>\n          </div>\n          <div class=\"card-body\">\n              <h2 class=\"card-title pricing-card-title\">\n                  <i class=\"fas fa-rupee-sign\"></i> 600\n              </h2>\n              <a class=\"btn btn-lg btn-block btn-outline-primary btn-primary\" (click)=\"setTotalNumTickets('2','600')\" routerLink=\"/seatsInformations\">Proceed</a>\n          </div>\n      </div>\n      <div class=\"card mb-4 shadow-sm\">\n          <div class=\"card-header\">\n              <h4 class=\"my-0 font-weight-normal\">3 People</h4>\n          </div>\n          <div class=\"card-body\">\n              <h2 class=\"card-title pricing-card-title\">\n                  <i class=\"fas fa-rupee-sign\"></i> 900\n              </h2>\n              <a class=\"btn btn-lg btn-block btn-outline-primary btn-primary\" (click)=\"setTotalNumTickets('3','900')\" routerLink=\"/seatsInformations\">Proceed</a>\n          </div>\n      </div>\n      <div class=\"card mb-4 shadow-sm\">\n          <div class=\"card-header\">\n              <h4 class=\"my-0 font-weight-normal\">5 People</h4>\n          </div>\n          <div class=\"card-body\">\n              <h2 class=\"card-title pricing-card-title\">\n                  <i class=\"fas fa-rupee-sign\"></i> 1500\n              </h2>\n              <a class=\"btn btn-lg btn-block btn-outline-primary btn-primary\" (click)=\"setTotalNumTickets('5','1500')\" routerLink=\"/seatsInformations\">Proceed</a>\n          </div>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_information_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../user-information.service */ "./src/app/user-information.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(_userInfo) {
        this._userInfo = _userInfo;
    }
    HomeComponent.prototype.setTotalNumTickets = function (tickets, cost) {
        this._userInfo.setUserNumOfTickets(tickets);
        this._userInfo.setCostOfTickets(cost);
    };
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_user_information_service__WEBPACK_IMPORTED_MODULE_1__["UserInformationService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/payment/payment.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/payment/payment.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/payment/payment.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/payment/payment.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n    <!-- Contents -->\n    <div class=\"container-fluid seats-container\"  >\n      <div class=\"row\">\n          <div class=\"col-md-10 offset-md-1\">\n              <div class=\"card shadow-sm\">\n                  <div class=\"card-header\">\n                      <span class=\"heading\">Solve puzzle to Make Payment\n                      </span>\n                  </div>\n                  <div class=\"card-body\">\n                      <div class=\"row\">\n                          <div class=\"col-md-6 pt-2\">\n                                  <div class=\"d-flex justify-content-center\">\n                                          <div class=\"numbers\" (ngModel)=\"firstNumber\">\n                                             {{ firstNumber}}\n                                          </div>\n                                          <div class=\"numbers\" (ngModel)=\"operator\">\n                                                  {{ operator}}\n                                          </div>\n                                          <div class=\"numbers\" (ngModel)=\"secondNumber\">\n                                                  {{ secondNumber}}\n                                          </div>\n                                      </div>\n                          </div>\n                          <div class=\"col-md-6\">\n                              <label>Your Answer:</label>\n                              <input type=\"text\" [(ngModel)]=\"userAnswer\" class=\"form-control\" placeholder=\"Enter Answer\">\n                          </div>\n                      </div>\n                      <div class=\"text-center mt-5\">\n                          <button type=\"button\" (click)=\"IfAlreadyBooked()\" class=\"btn btn-success btn-lg\">Confirm my seats</button>\n                      </div>\n                      \n                      \n                  </div>\n              </div>\n          </div>\n      </div>\n\n\n\n  </div>\n  <!-- Contents ends-->\n\n"

/***/ }),

/***/ "./src/app/components/payment/payment.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/payment/payment.component.ts ***!
  \*********************************************************/
/*! exports provided: PaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentComponent", function() { return PaymentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_information_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../user-information.service */ "./src/app/user-information.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _db_connect_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../db-connect-service.service */ "./src/app/db-connect-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PaymentComponent = /** @class */ (function () {
    function PaymentComponent(_userInfo, router, _dbService) {
        this._userInfo = _userInfo;
        this.router = router;
        this._dbService = _dbService;
        this.found = false;
        this.seats = [];
    }
    PaymentComponent.prototype.ngOnInit = function () {
        this.initializeEquation();
    };
    PaymentComponent.prototype.initializeEquation = function () {
        var firstNum = Math.floor(Math.random() * 100) + 1;
        var secondNum = Math.floor(Math.random() * 100) + 1;
        var operatorArray = ['+', '-'];
        var randomNumber = Math.floor(Math.random() * operatorArray.length);
        if (randomNumber == 0) {
            this.operator = '+';
            this.firstNumber = firstNum;
            this.secondNumber = secondNum;
            this.correctAnswer = this.firstNumber + this.secondNumber;
        }
        else {
            this.operator = "-";
            console.log("Subtract");
            if (firstNum > secondNum) {
                this.firstNumber = firstNum;
                this.secondNumber = secondNum;
                this.correctAnswer = this.firstNumber - this.secondNumber;
            }
            else {
                this.initializeEquation();
                console.log("recurssion..............");
            }
        }
        console.log("Correct Answer" + this.correctAnswer);
    };
    ;
    PaymentComponent.prototype.getSeatsInformation = function (date) {
        var _this = this;
        console.log("Event Date--->" + date);
        this._dbService
            .getSeatsInformation(date)
            .subscribe(function (data) {
            console.log(data);
            var allData = data.docs;
            console.log("Checking Again _____");
            var ticketbooked = _this.seats;
            allData.forEach(function (value, key) {
                if (value.status == 'Completed') {
                    var data = value.seatsReserved;
                    data.forEach(function (value, key) {
                        ticketbooked.push(value);
                    });
                }
            });
            _this.seats = ticketbooked;
            console.log("Seats");
            console.log(_this.seats);
            console.log(_this.seats.length);
            var bookedTickets = _this._userInfo.getUserTicket();
            console.log(bookedTickets);
            for (var i = 0; i < _this.seats.length; i++) {
                console.log("inside for");
                if (bookedTickets.indexOf(_this.seats[i]) !== -1) {
                    _this.found = true;
                    console.log(_this.seats[i] + " found:");
                    console.log(_this.found);
                    break;
                }
            }
            _this.checkTime();
        });
    };
    PaymentComponent.prototype.IfAlreadyBooked = function () {
        this.getSeatsInformation(this._userInfo.getUserDateOfEvent());
    };
    PaymentComponent.prototype.checkTime = function () {
        var _this = this;
        this._dbService.checkTimeDiff().subscribe(function (data) {
            console.log('Data created ...');
            console.log(data.status);
            if (data.status == 'success') {
                _this.lessTime = "true";
                console.log(_this.lessTime);
            }
            else {
                _this.lessTime = "false";
                console.log(_this.lessTime);
            }
            _this.checkAnswer();
        });
    };
    PaymentComponent.prototype.checkAnswer = function () {
        if (this.lessTime == "true") {
            console.log("If 1");
            if (this.correctAnswer == this.userAnswer && !this.found) {
                console.log("If 2");
                this.router.navigate(['/paymentSuccess']);
            }
            else {
                console.log("If 3");
                this.router.navigate(['/paymentFailure']);
            }
        }
        else {
            console.log("If 4");
            this.router.navigate(['/paymentFailure']);
        }
    };
    PaymentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-payment',
            template: __webpack_require__(/*! ./payment.component.html */ "./src/app/components/payment/payment.component.html"),
            styles: [__webpack_require__(/*! ./payment.component.css */ "./src/app/components/payment/payment.component.css")]
        }),
        __metadata("design:paramtypes", [_user_information_service__WEBPACK_IMPORTED_MODULE_1__["UserInformationService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _db_connect_service_service__WEBPACK_IMPORTED_MODULE_3__["DbConnectServiceService"]])
    ], PaymentComponent);
    return PaymentComponent;
}());



/***/ }),

/***/ "./src/app/components/seats-information/seats-information.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/seats-information/seats-information.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/seats-information/seats-information.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/seats-information/seats-information.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n    <!-- Contents -->\n    <div class=\"container-fluid seats-container\">\n      <div class=\"row\">\n          <div class=\"col-md-10 offset-md-1\">\n              <div class=\"card shadow-sm\">\n                  <div class=\"card-header\">\n                          <div class=\"heading pull-left\">\n                                  <label>Date Of Event</label>\n                                <input type=\"date\"   (change)=\"OnDateSelect($event.target.value)\"\tmin=\"{{date | date:'yyyy-MM-dd'}}\"   [(ngModel)]=\"eventDate\" required/>\n                                \n                            </div>\n                      <!-- <span class=\"heading pull-right\">Select your seats</span> -->\n                      <span class=\"float-right\"  >\n                              <label class=\"heading\">Select your seats</label>\n                          <select class=\"custom-select\" id=\"\" (change)=\"refreshSelected($event.target.value)\" (click)=\"setTotaltickets(requiredTickets )\" [(ngModel)]=\"requiredTickets\">\n                                  <option value=\"1\">Single Person</option>\n                                  <option value=\"2\">Two People</option>\n                                  <option value=\"3\">Three People</option>\n                                  <option value=\"5\">Five People</option>\n                                  \n                                  </select>\n                      </span>\n                  </div>\n                  <div class=\"card-body\">\n                      <!-- Seats container -->\n                      <div class=\"d-flex flex-row mb-3 seats\">\n                          <div class=\"mr-2 seat-row\">A</div>\n                          <div id=\"A1\" (click)=\"selectThisSeat('A1');toggleClass('A1')\"class=\" seat\">1</div>\n                          <div id=\"A2\" (click)=\"selectThisSeat('A2');toggleClass('A2')\"class=\" seat\">2</div>\n                          <div id=\"A3\" (click)=\"selectThisSeat('A3');toggleClass('A3')\"class=\" seat\">3</div>\n                          <div id=\"A4\" (click)=\"selectThisSeat('A4');toggleClass('A4')\"class=\" seat\">4</div>\n                          <div id=\"A5\" (click)=\"selectThisSeat('A5');toggleClass('A5')\"class=\" seat\">5</div>\n                          <div class=\"mr-4  seat-divider\"> </div>\n                          <div id=\"A6\" (click)=\"selectThisSeat('A6');toggleClass('A6')\"class=\" seat\">6</div>\n                          <div id=\"A7\" (click)=\"selectThisSeat('A7');toggleClass('A7')\"class=\" seat\">7</div>\n                          <div id=\"A8\" (click)=\"selectThisSeat('A8');toggleClass('A8')\"class=\" seat\">8</div>\n                          <div id=\"A9\" (click)=\"selectThisSeat('A9');toggleClass('A9')\"class=\" seat\">9</div>\n                          <div id=\"A10\" (click)=\"selectThisSeat('A10');toggleClass('A10')\"class=\" seat\">10</div>\n                          <div id=\"A11\" (click)=\"selectThisSeat('A11');toggleClass('A11')\"class=\" seat\">11</div>\n                          <div id=\"A12\" (click)=\"selectThisSeat('A12');toggleClass('A12')\"class=\" seat\">12</div>\n                          <div id=\"A13\" (click)=\"selectThisSeat('A13');toggleClass('A13')\"class=\" seat\">13</div>\n                          <div id=\"A14\" (click)=\"selectThisSeat('A14');toggleClass('A14')\"class=\" seat\">14</div>\n                          <div id=\"A15\" (click)=\"selectThisSeat('A15');toggleClass('A15')\"class=\" seat\">15</div>\n                          <div class=\"mr-4  seat-divider\"> </div>\n                          <div id=\"A16\" (click)=\"selectThisSeat('A16');toggleClass('A16')\"class=\" seat\">16</div>\n                          <div id=\"A17\" (click)=\"selectThisSeat('A17');toggleClass('A17')\"class=\" seat\">17</div>\n                          <div id=\"A18\" (click)=\"selectThisSeat('A18');toggleClass('A18')\"class=\" seat\">18</div>\n                          <div id=\"A19\" (click)=\"selectThisSeat('A19');toggleClass('A19')\"class=\" seat\">19</div>\n                          <div id=\"A20\" (click)=\"selectThisSeat('A20');toggleClass('A20')\"class=\" seat\">20</div>\n                          <div id=\"A21\" (click)=\"selectThisSeat('A21');toggleClass('A21')\"class=\" seat\">21</div>\n                          <div id=\"A22\" (click)=\"selectThisSeat('A22');toggleClass('A22')\"class=\" seat\">22</div>\n                          <div id=\"A23\" (click)=\"selectThisSeat('A23');toggleClass('A23')\"class=\" seat\">23</div>\n                          <div id=\"A24\" (click)=\"selectThisSeat('A24');toggleClass('A24')\"class=\" seat\">24</div>\n                          <div id=\"A25\" (click)=\"selectThisSeat('A25');toggleClass('A25')\"class=\" seat\">25</div>\n                      </div>\n\n                      <div class=\"d-flex flex-row mb-3 seats\">\n                          <div class=\"mr-2 seat-row\">B</div>\n                          <div id=\"B1\" (click)=\"selectThisSeat('B1');toggleClass('B1')\"class=\" seat\">1</div>\n                          <div id=\"B2\" (click)=\"selectThisSeat('B2');toggleClass('B2')\"class=\" seat\">2</div>\n                          <div id=\"B3\" (click)=\"selectThisSeat('B3');toggleClass('B3')\"class=\" seat\">3</div>\n                          <div id=\"B4\" (click)=\"selectThisSeat('B4');toggleClass('B4')\"class=\" seat\">4</div>\n                          <div id=\"B5\" (click)=\"selectThisSeat('B5');toggleClass('B5')\"class=\" seat\">5</div>\n                          <div class=\"mr-4  seat-divider\"> </div>\n                          <div id=\"B6\" (click)=\"selectThisSeat('B6');toggleClass('B6')\"class=\" seat\">6</div>\n                          <div id=\"B7\" (click)=\"selectThisSeat('B7');toggleClass('B7')\"class=\" seat\">7</div>\n                          <div id=\"B8\" (click)=\"selectThisSeat('B8');toggleClass('B8')\"class=\" seat\">8</div>\n                          <div id=\"B9\" (click)=\"selectThisSeat('B9');toggleClass('B9')\"class=\" seat\">9</div>\n                          <div id=\"B10\" (click)=\"selectThisSeat('B10');toggleClass('B10')\"class=\" seat\">10</div>\n                          <div id=\"B11\" (click)=\"selectThisSeat('B11');toggleClass('B11')\"class=\" seat\">11</div>\n                          <div id=\"B12\" (click)=\"selectThisSeat('B12');toggleClass('B12')\"class=\" seat\">12</div>\n                          <div id=\"B13\" (click)=\"selectThisSeat('B13');toggleClass('B13')\"class=\" seat\">13</div>\n                          <div id=\"B14\" (click)=\"selectThisSeat('B14');toggleClass('B14')\"class=\" seat\">14</div>\n                          <div id=\"B15\" (click)=\"selectThisSeat('B15');toggleClass('B15')\"class=\" seat\">15</div>\n                          <div class=\"mr-4  seat-divider\"> </div>\n                          <div id=\"B16\" (click)=\"selectThisSeat('B16');toggleClass('B16')\"class=\" seat\">16</div>\n                          <div id=\"B17\" (click)=\"selectThisSeat('B17');toggleClass('B17')\"class=\" seat\">17</div>\n                          <div id=\"B18\" (click)=\"selectThisSeat('B18');toggleClass('B18')\"class=\" seat\">18</div>\n                          <div id=\"B19\" (click)=\"selectThisSeat('B19');toggleClass('B19')\"class=\" seat\">19</div>\n                          <div id=\"B20\" (click)=\"selectThisSeat('B20');toggleClass('B20')\"class=\" seat\">20</div>\n                          <div id=\"B21\" (click)=\"selectThisSeat('B21');toggleClass('B21')\"class=\" seat\">21</div>\n                          <div id=\"B22\" (click)=\"selectThisSeat('B22');toggleClass('B22')\"class=\" seat\">22</div>\n                          <div id=\"B23\" (click)=\"selectThisSeat('B23');toggleClass('B23')\"class=\" seat\">23</div>\n                          <div id=\"B24\" (click)=\"selectThisSeat('B24');toggleClass('B24')\"class=\" seat\">24</div>\n                          <div id=\"B25\" (click)=\"selectThisSeat('B25');toggleClass('B25')\"class=\" seat\">25</div>\n                      </div>\n\n                      <div class=\"d-flex flex-row mb-3 seats\">\n                          <div class=\"mr-2 seat-row\">C</div>\n                          <div id=\"C1\" (click)=\"selectThisSeat('C1');toggleClass('C1')\"class=\" seat\">1</div>\n                          <div id=\"C2\" (click)=\"selectThisSeat('C2');toggleClass('C2')\"class=\" seat\">2</div>\n                          <div id=\"C3\" (click)=\"selectThisSeat('C3');toggleClass('C3')\"class=\" seat\">3</div>\n                          <div id=\"C4\" (click)=\"selectThisSeat('C4');toggleClass('C4')\"class=\" seat\">4</div>\n                          <div id=\"C5\" (click)=\"selectThisSeat('C5');toggleClass('C5')\"class=\" seat\">5</div>\n                          <div class=\"mr-4  seat-divider\"> </div>\n                          <div id=\"C6\" (click)=\"selectThisSeat('C6');toggleClass('C6')\"class=\" seat\">6</div>\n                          <div id=\"C7\" (click)=\"selectThisSeat('C7');toggleClass('C7')\"class=\" seat\">7</div>\n                          <div id=\"C8\" (click)=\"selectThisSeat('C8');toggleClass('C8')\"class=\" seat\">8</div>\n                          <div id=\"C9\" (click)=\"selectThisSeat('C9');toggleClass('C9')\"class=\" seat \">9</div>\n                          <div id=\"C10\" (click)=\"selectThisSeat('C10');toggleClass('C10')\"class=\" seat \">10</div>\n                          <div id=\"C11\" (click)=\"selectThisSeat('C11');toggleClass('C11')\"class=\" seat \">11</div>\n                          <div id=\"C12\" (click)=\"selectThisSeat('C12');toggleClass('C12')\"class=\" seat \">12</div>\n                          <div id=\"C13\" (click)=\"selectThisSeat('C13');toggleClass('C13')\"class=\" seat \">13</div>\n                          <div id=\"C14\" (click)=\"selectThisSeat('C14');toggleClass('C14')\"class=\" seat\">14</div>\n                          <div id=\"C15\" (click)=\"selectThisSeat('C15');toggleClass('C15')\"class=\" seat\">15</div>\n                          <div class=\"mr-4  seat-divider\"> </div>\n                          <div id=\"C16\" (click)=\"selectThisSeat('C16');toggleClass('C16')\"class=\" seat\">16</div>\n                          <div id=\"C17\" (click)=\"selectThisSeat('C17');toggleClass('C17')\"class=\" seat\">17</div>\n                          <div id=\"C18\" (click)=\"selectThisSeat('C18');toggleClass('C18')\"class=\" seat\">18</div>\n                          <div id=\"C19\" (click)=\"selectThisSeat('C19');toggleClass('C19')\"class=\" seat\">19</div>\n                          <div id=\"C20\" (click)=\"selectThisSeat('C20');toggleClass('C20')\"class=\" seat\">20</div>\n                          <div id=\"C21\" (click)=\"selectThisSeat('C21');toggleClass('C21')\"class=\" seat\">21</div>\n                          <div id=\"C22\" (click)=\"selectThisSeat('C22');toggleClass('C22')\"class=\" seat\">22</div>\n                          <div id=\"C23\" (click)=\"selectThisSeat('C23');toggleClass('C23')\"class=\" seat\">23</div>\n                          <div id=\"C24\" (click)=\"selectThisSeat('C24');toggleClass('C24')\"class=\" seat\">24</div>\n                          <div id=\"C25\" (click)=\"selectThisSeat('C25');toggleClass('C25')\"class=\" seat\">25</div>\n                      </div>\n\n                      <div class=\"d-flex flex-row mb-3 seats\">\n                          <div class=\"mr-2 seat-row\">D</div>\n                          <div id=\"D1\" (click)=\"selectThisSeat('D1');toggleClass('D1')\"class=\" seat\">1</div>\n                          <div id=\"D2\" (click)=\"selectThisSeat('D2');toggleClass('D2')\"class=\" seat\">2</div>\n                          <div id=\"D3\" (click)=\"selectThisSeat('D3');toggleClass('D3')\"class=\" seat\">3</div>\n                          <div id=\"D4\" (click)=\"selectThisSeat('D4');toggleClass('D4')\"class=\" seat\">4</div>\n                          <div id=\"D5\" (click)=\"selectThisSeat('D5');toggleClass('D5')\"class=\" seat\">5</div>\n                          <div class=\"mr-4  seat-divider\"> </div>\n                          <div id=\"D6\" (click)=\"selectThisSeat('D6');toggleClass('D6')\"class=\" seat\">6</div>\n                          <div id=\"D7\" (click)=\"selectThisSeat('D7');toggleClass('D7')\"class=\" seat\">7</div>\n                          <div id=\"D8\" (click)=\"selectThisSeat('D8');toggleClass('D8')\"class=\" seat\">8</div>\n                          <div id=\"D9\" (click)=\"selectThisSeat('D9');toggleClass('D9')\"class=\" seat\">9</div>\n                          <div id=\"D10\" (click)=\"selectThisSeat('D10');toggleClass('D10')\"class=\" seat\">10</div>\n                          <div id=\"D11\" (click)=\"selectThisSeat('D11');toggleClass('D11')\"class=\" seat\">11</div>\n                          <div id=\"D12\" (click)=\"selectThisSeat('D12');toggleClass('D12')\"class=\" seat\">12</div>\n                          <div id=\"D13\" (click)=\"selectThisSeat('D13');toggleClass('D13')\"class=\" seat\">13</div>\n                          <div id=\"D14\" (click)=\"selectThisSeat('D14');toggleClass('D14')\"class=\" seat\">14</div>\n                          <div id=\"D15\" (click)=\"selectThisSeat('D15');toggleClass('D15')\"class=\" seat\">15</div>\n                          <div class=\"mr-4  seat-divider\"> </div>\n                          <div id=\"D16\" (click)=\"selectThisSeat('D16');toggleClass('D16')\"class=\" seat\">16</div>\n                          <div id=\"D17\" (click)=\"selectThisSeat('D17');toggleClass('D17')\"class=\" seat\">17</div>\n                          <div id=\"D18\" (click)=\"selectThisSeat('D18');toggleClass('D18')\"class=\" seat\">18</div>\n                          <div id=\"D19\" (click)=\"selectThisSeat('D19');toggleClass('D19')\"class=\" seat\">19</div>\n                          <div id=\"D21\" (click)=\"selectThisSeat('D20');toggleClass('D20')\"class=\" seat\">20</div>\n                          <div id=\"D21\" (click)=\"selectThisSeat('D21');toggleClass('D21')\"class=\" seat\">21</div>\n                          <div id=\"D22\" (click)=\"selectThisSeat('D22');toggleClass('D22')\"class=\" seat\">22</div>\n                          <div id=\"D23\" (click)=\"selectThisSeat('D23');toggleClass('D23')\"class=\" seat\">23</div>\n                          <div id=\"D24\" (click)=\"selectThisSeat('D24');toggleClass('D24')\"class=\" seat\">24</div>\n                          <div id=\"D25\" (click)=\"selectThisSeat('D25');toggleClass('D25')\"class=\" seat\">25</div>\n                      </div>\n                      <!-- Seats container ends here-->\n\n                      <!-- Confirmation Box - Show this box after Selecting valid no of seats only -->\n                      <div ng-show=\"selectedSeats.length == requiredTickets\">\n                      <div class=\"text-center my-5\">\n                          <img src=\"assets/images/screen.png\"> <br/>\n                          <span class=\"text-muted small\">All eyes this way please!</span>\n                      </div>\n                      <div class=\"row m-2\">\n                          <div class=\"col-md-12 p-0\">\n                              <div class=\"alert alert-danger\" role=\"alert\">\n                                  <i class=\"fa fa-exclamation-triangle\"></i>  <h1>{{userInfoForm.form.invalid}}</h1>\n                              </div>\n                          </div>\n                      </div>\n                      <div class=\"row payment-holder m-2\">\n                          <div class=\"col-md-4 p-3\">\n                              <form #userInfoForm=\"ngForm\" novalidate>\n                                  <div class=\"form-group\">\n                                      <label>Name</label>\n                                      <input type=\"text\" name=\"name\" [(ngModel)]=\"name\" class=\"form-control\" required>\n                                  </div>\n                                  <div class=\"form-group\">\n                                      <label>Email</label>\n                                      <input type=\"email\" name=\"email\" [(ngModel)]=\"email\" class=\"form-control\" required>\n                                  </div>\n                                  <div class=\"form-group\">\n                                      <label>Contact</label>\n                                      <input type=\"tel\" name=\"phone\" minlength=\"10\" maxlength=\"10\" pattern=\"\\d{10}\" [(ngModel)]=\"phone\" class=\"form-control\" required>\n                                  </div>\n                              </form>\n                          </div>\n                          <div class=\"col-md-8 p-3\">\n                              <div class=\"mt-5\">\n                                  <h5 class=\"text-center\">Your Seats Selection:\n                                          <span class=\"badge badge-secondary mr-2\" ng-repeat=\"seat in selectedSeats\">{{seat}}</span>\n\n                                      <!-- <span class=\"badge badge-secondary mr-2\">A-10</span>\n                                      <span class=\"badge badge-secondary mr-2\">B-20</span>\n                                      <span class=\"badge badge-secondary mr-2\">A-10</span>\n                                      <span class=\"badge badge-secondary mr-2\">B-20</span>\n                                      <span class=\"badge badge-secondary mr-2\">B-20</span> -->\n                                  </h5>\n                                 \n                                  <div class=\"row mt-3\"  >\n                                      <div class=\"col-sm-6 offset-sm-3 text-center\">\n                                          <button type=\"button\" (click)=\"sendUserInfo()\" [disabled]=\"userInfoForm.form.invalid\"  class=\"btn btn-primary btn-lg btn-block\">Pay <i class=\"fa fa-rupee-sign\"></i> {{totalCost}}</button>\n                                      </div>\n                                  </div>\n                              </div>\n\n                          </div>\n\n                      </div>\n                  </div>\n\n                      <!-- Confirmation box ends here-->\n\n                  </div>\n              </div>\n          </div>\n      </div>\n\n\n\n  </div>\n  <!-- Contents ends-->\n\n"

/***/ }),

/***/ "./src/app/components/seats-information/seats-information.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/seats-information/seats-information.component.ts ***!
  \*****************************************************************************/
/*! exports provided: SeatsInformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeatsInformationComponent", function() { return SeatsInformationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_information_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../user-information.service */ "./src/app/user-information.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _db_connect_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../db-connect-service.service */ "./src/app/db-connect-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SeatsInformationComponent = /** @class */ (function () {
    function SeatsInformationComponent(_userInfo, router, _dbService) {
        this._userInfo = _userInfo;
        this.router = router;
        this._dbService = _dbService;
        this.selectedSeats = [];
        this.previouslyDisabled = [];
        this.sendUserInfo = function () {
            var _this = this;
            var newDate = new Date(this.eventDate);
            var date = new Date(newDate.getFullYear() + '-' + (newDate.getMonth() + 1) + '-' + (newDate.getDate()));
            console.log("Changed Date----");
            newDate.setTime(date.getTime());
            this.eventDate = newDate;
            //this._userInfo.adduserInfo(this.selectedSeats,this.name,this.email,this.phone,this.eventDate);
            this._dbService.saveTicket(this.selectedSeats, this.name, this.email, this.phone, this.eventDate)
                .subscribe(function (data) {
                console.log('Data created ...');
                console.log(data);
                //console.log(data.docs);
                localStorage.setItem('token', data.token);
                _this._userInfo.setCreatedAt(data.docs.createdAt);
                _this._userInfo.setUserId(data.docs._id);
                _this._userInfo.adduserInfo(_this.selectedSeats, data.docs.name, data.docs.email, data.docs.phone, data.docs.eventDate);
                _this.router.navigate(['/paymentGateway']);
            });
        };
    }
    SeatsInformationComponent.prototype.ngOnInit = function () {
        this.eventDate = new Date().toISOString().split('T')[0];
        console.log("this.eventDate:" + this.eventDate);
        this.initialDate();
    };
    SeatsInformationComponent.prototype.initialDate = function () {
        this.date = new Date(this.eventDate);
        this.date = new Date(this.eventDate).getFullYear() + '-' + (new Date(this.eventDate).getMonth() + 1) + '-' + (new Date(this.eventDate).getDate());
        this.date = new Date(this.date);
        var newDate = new Date();
        newDate.setTime(this.date.getTime());
        //
        this.getSeatsInformation(newDate.toISOString());
        console.log("Initial Date----");
        console.log(newDate);
        console.log(newDate.toISOString());
        this.requiredTickets = this._userInfo.getUserNumOfTickets();
        this.totalCost = this._userInfo.getCostOfTickets();
    };
    SeatsInformationComponent.prototype.getSeatsInformation = function (date) {
        var _this = this;
        console.log("Event Date--->" + date);
        this._dbService
            .getSeatsInformation(date)
            .subscribe(function (data) {
            console.log('Data requested ...');
            console.log(data);
            var allData = data.docs;
            var seats = [];
            allData.forEach(function (value, key) {
                seats.push(value.seatsReserved);
            });
            console.log("this.displayUnavailableSeats : " + seats);
            _this.displayUnavailableSeats(seats);
        });
    };
    SeatsInformationComponent.prototype.setTotaltickets = function (tickets) {
        this._userInfo.setUserNumOfTickets(tickets);
    };
    SeatsInformationComponent.prototype.OnDateSelect = function () {
        /*   var newDate= new Date(this.eventDate);
         
          console.log("Changed Date:"+newDate.toISOString());
         this.getSeatsInformation(newDate.toISOString());  */
        var newDate = new Date(this.eventDate);
        var date = new Date(newDate.getFullYear() + '-' + (newDate.getMonth() + 1) + '-' + (newDate.getDate()));
        console.log("Changed Date----");
        newDate.setTime(date.getTime());
        //this.eventDate =newDate.toISOString() ;
        console.log(newDate.toISOString());
        this.getSeatsInformation(newDate.toISOString());
    };
    SeatsInformationComponent.prototype.refreshSelected = function () {
        this.selectedSeats.forEach(function (value, key) {
            var myEl = document.querySelector('#' + value);
            myEl.classList.remove('selected');
        });
        this.selectedSeats = [];
    };
    SeatsInformationComponent.prototype.isSeatAlreadySelected = function (seatNumber) {
        console.log("checking if already selected");
        var returnValue = 'false';
        this.selectedSeats.forEach(function (value) {
            if (value === seatNumber) {
                console.log("returning true");
                returnValue = 'true';
            }
        });
        console.log(returnValue);
        return returnValue;
    };
    ;
    SeatsInformationComponent.prototype.selectThisSeat = function (seatNum) {
        console.log("seatNumseatNum" + seatNum);
        if (this.isSeatAlreadySelected(seatNum) === 'true') {
            console.log("seatNumseatNum before Slicing seat Number " + this.selectedSeats);
            var index = this.selectedSeats.indexOf(seatNum);
            this.selectedSeats.splice(index, 1);
        }
        else {
            if (this.selectedSeats.length < this.requiredTickets) {
                this.selectedSeats.push(seatNum);
                console.log("selected Seats " + this.selectedSeats);
            }
            else {
                this.toggleClass(this.selectedSeats[0]);
                this.selectedSeats.shift();
                //this.toggleClass( this.selectedSeats[0]);
                this.selectedSeats.push(seatNum);
                console.log("selected Seats after Shifting seat Number " + this.selectedSeats);
            }
        }
    };
    ;
    SeatsInformationComponent.prototype.toggleClass = function (id) {
        console.log("Inside toggle class");
        var myEl = document.getElementById(id);
        if (myEl.classList.contains('selected')) {
            myEl.classList.remove('selected');
        }
        else {
            myEl.classList.add('selected');
        }
    };
    ;
    SeatsInformationComponent.prototype.displayUnavailableSeats = function (seats) {
        var previous = this.previouslyDisabled;
        if (this.previouslyDisabled.length > 0) {
            this.previouslyDisabled.forEach(function (value, key) {
                console.log("Removing no-available class " + value);
                var myEl = document.querySelector('#' + value);
                myEl.classList.remove('no-available');
            });
            this.previouslyDisabled = [];
        }
        seats.forEach(function (value, key) {
            console.log("Value from response to disable" + value);
            var unavailable = value;
            unavailable.forEach(function (value, key) {
                console.log("Value from response to disable" + value);
                var myEl = document.getElementById(value);
                myEl.classList.add('no-available');
                // this.previouslyDisabled.push(value) ;
                previous[key] = value;
                console.log("this.previouslyDisabled[key] : " + previous[key]);
            });
        });
    };
    ;
    SeatsInformationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-seats-information',
            template: __webpack_require__(/*! ./seats-information.component.html */ "./src/app/components/seats-information/seats-information.component.html"),
            styles: [__webpack_require__(/*! ./seats-information.component.css */ "./src/app/components/seats-information/seats-information.component.css")]
        }),
        __metadata("design:paramtypes", [_user_information_service__WEBPACK_IMPORTED_MODULE_1__["UserInformationService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _db_connect_service_service__WEBPACK_IMPORTED_MODULE_3__["DbConnectServiceService"]])
    ], SeatsInformationComponent);
    return SeatsInformationComponent;
}());



/***/ }),

/***/ "./src/app/components/success/success.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/success/success.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/success/success.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/success/success.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <!-- Contents -->\n    <div class=\"container-fluid seats-container p-5\" >\n      <div class=\"row\">\n          <div class=\"col-md-6 offset-md-3\">\n              <div class=\"card shadow-lg\">\n                  <div class=\"card-body\">\n                      <div class=\"row\">\n                          <div class=\"col-md-12 text-center\">\n                                  <i class=\"far fa-check-circle fa-7x text-success\"></i>\n                                  <br/>\n                                  <h3 class=\"text-dark my-5\">Hi <p (ngModel)=\"name\">{{name}}</p>, your tickets has been confirmed successfully.</h3>\n                                  <h5 class=\"text-center\">Confirmed Seats:\n                                          <span class=\"badge badge-warning mr-2\" *ngFor=\"let ticket of tickets\">{{ticket}}</span>\n                                        \n                                      </h5>\n                                      <p class=\"text-muted\">Your will receive tickets confirmation to {{email}} mailbox. </p>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n\n\n\n  </div>\n  <!-- Contents ends-->\n\n "

/***/ }),

/***/ "./src/app/components/success/success.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/success/success.component.ts ***!
  \*********************************************************/
/*! exports provided: SuccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessComponent", function() { return SuccessComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_information_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../user-information.service */ "./src/app/user-information.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _db_connect_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../db-connect-service.service */ "./src/app/db-connect-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SuccessComponent = /** @class */ (function () {
    function SuccessComponent(_userInfo, router, _dbService) {
        this._userInfo = _userInfo;
        this.router = router;
        this._dbService = _dbService;
        this.tickets = [];
    }
    SuccessComponent.prototype.ngOnInit = function () {
        this.saveBookedTicket();
    };
    SuccessComponent.prototype.saveBookedTicket = function () {
        this.name = this._userInfo.getUserName();
        this.tickets = this._userInfo.getUserTicket();
        this.email = this._userInfo.getUserEmail();
        this._dbService.saveTicketStatus('Completed').subscribe(function (data) {
            console.log('Data update ...');
            console.log(data);
        });
    };
    SuccessComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-success',
            template: __webpack_require__(/*! ./success.component.html */ "./src/app/components/success/success.component.html"),
            styles: [__webpack_require__(/*! ./success.component.css */ "./src/app/components/success/success.component.css")]
        }),
        __metadata("design:paramtypes", [_user_information_service__WEBPACK_IMPORTED_MODULE_1__["UserInformationService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _db_connect_service_service__WEBPACK_IMPORTED_MODULE_3__["DbConnectServiceService"]])
    ], SuccessComponent);
    return SuccessComponent;
}());



/***/ }),

/***/ "./src/app/db-connect-service.service.ts":
/*!***********************************************!*\
  !*** ./src/app/db-connect-service.service.ts ***!
  \***********************************************/
/*! exports provided: DbConnectServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DbConnectServiceService", function() { return DbConnectServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _user_information_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-information.service */ "./src/app/user-information.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DbConnectServiceService = /** @class */ (function () {
    function DbConnectServiceService(_http, _userInfo) {
        this._http = _http;
        this._userInfo = _userInfo;
        this._url = 'http://localhost:8081';
        this.date = this._userInfo.getUserDateOfEvent();
    }
    DbConnectServiceService.prototype.getSeatsInformation = function (date) {
        console.log("Inside Db Service: Date = " + date);
        return this._http.get(this._url + "/Tickets/" + date);
    };
    DbConnectServiceService.prototype.saveTicket = function (seatsReserved, name, email, phone, eventDate) {
        var userInfo = {
            seatsReserved: seatsReserved,
            name: name,
            email: email,
            phone: phone,
            status: 'In Progress',
            eventDate: eventDate
        };
        return this._http.post(this._url + "/process/", userInfo);
    };
    DbConnectServiceService.prototype.saveTicketStatus = function (status) {
        var id = this._userInfo.getUserId();
        console.log(id);
        var updateStatus = {
            status: status
        };
        return this._http.put(this._url + "/Ticket/" + id, updateStatus);
    };
    DbConnectServiceService.prototype.checkTimeDiff = function () {
        var id = this._userInfo.getUserId();
        return this._http.get(this._url + "/Ticket/" + id);
    };
    DbConnectServiceService.prototype.registeredAuthentically = function () {
        return !!localStorage.getItem('token');
    };
    DbConnectServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _user_information_service__WEBPACK_IMPORTED_MODULE_2__["UserInformationService"]])
    ], DbConnectServiceService);
    return DbConnectServiceService;
}());



/***/ }),

/***/ "./src/app/user-information.service.ts":
/*!*********************************************!*\
  !*** ./src/app/user-information.service.ts ***!
  \*********************************************/
/*! exports provided: UserInformationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInformationService", function() { return UserInformationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserInformationService = /** @class */ (function () {
    function UserInformationService() {
    }
    UserInformationService.prototype.setUserTicket = function (ticket) {
        console.log("ticket" + ticket);
        this.userTicket = ticket;
    };
    UserInformationService.prototype.getUserTicket = function () {
        return this.userTicket;
    };
    UserInformationService.prototype.setUserName = function (name) {
        console.log("name" + name);
        this.userName = name;
    };
    UserInformationService.prototype.getUserName = function () {
        return this.userName;
    };
    UserInformationService.prototype.setUserEmail = function (email) {
        console.log("email" + email);
        this.userEmail = email;
    };
    UserInformationService.prototype.getUserEmail = function () {
        return this.userEmail;
    };
    UserInformationService.prototype.setUserPhone = function (phone) {
        console.log("phone" + phone);
        this.userPhone = phone;
    };
    UserInformationService.prototype.getUserPhone = function () {
        return this.userPhone;
    };
    UserInformationService.prototype.setUserDateOfEvent = function (eventDate) {
        console.log("eventDate" + eventDate);
        this.dateOfEvent = eventDate;
    };
    UserInformationService.prototype.getUserDateOfEvent = function () {
        return this.dateOfEvent;
    };
    UserInformationService.prototype.setUserNumOfTickets = function (numTickets) {
        console.log("numTickets" + numTickets);
        this.numOfTickets = numTickets;
        console.log("this.numOfTickets:" + this.numOfTickets);
    };
    UserInformationService.prototype.getUserNumOfTickets = function () {
        return this.numOfTickets;
    };
    UserInformationService.prototype.setUserId = function (id) {
        console.log("id" + id);
        this.userId = id;
    };
    UserInformationService.prototype.getUserId = function () {
        return this.userId;
    };
    UserInformationService.prototype.setCostOfTickets = function (cost) {
        console.log("cost" + cost);
        this.costOfTickets = cost;
    };
    UserInformationService.prototype.getCostOfTickets = function () {
        return this.costOfTickets;
    };
    UserInformationService.prototype.setCreatedAt = function (date) {
        this.userCreatedAt = date;
    };
    UserInformationService.prototype.getCreatedAt = function () {
        return this.userCreatedAt;
    };
    UserInformationService.prototype.adduserInfo = function (selectedSeats, name, email, phone, eventDate) {
        this.userTicket = selectedSeats;
        this.userName = name;
        this.userEmail = email;
        this.userPhone = phone;
        this.dateOfEvent = eventDate;
        console.log("this.userTicket=" + selectedSeats + "; " +
            "this.userName" + name + "; " +
            "this.userEmail" + email + "; " +
            "this.userPhone" + phone + "; " +
            "this.dateOfEvent" + eventDate);
    };
    UserInformationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], UserInformationService);
    return UserInformationService;
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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/am-14/Vaishnavi/angular6/TicketBooking/FrontEnd/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map