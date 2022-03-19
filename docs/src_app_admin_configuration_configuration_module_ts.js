"use strict";
(self["webpackChunksmart"] = self["webpackChunksmart"] || []).push([["src_app_admin_configuration_configuration_module_ts"],{

/***/ 26675:
/*!*********************************************************************!*\
  !*** ./src/app/admin/configuration/configuration-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigurationRoutingModule": () => (/* binding */ ConfigurationRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _configuration_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./configuration.component */ 87113);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: 'configuration',
        component: _configuration_component__WEBPACK_IMPORTED_MODULE_0__.ConfigurationComponent,
    }
];
class ConfigurationRoutingModule {
}
ConfigurationRoutingModule.ɵfac = function ConfigurationRoutingModule_Factory(t) { return new (t || ConfigurationRoutingModule)(); };
ConfigurationRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ConfigurationRoutingModule });
ConfigurationRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ConfigurationRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 73681:
/*!*************************************************************!*\
  !*** ./src/app/admin/configuration/configuration.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigurationModule": () => (/* binding */ ConfigurationModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _configuration_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./configuration-routing.module */ 26675);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



class ConfigurationModule {
}
ConfigurationModule.ɵfac = function ConfigurationModule_Factory(t) { return new (t || ConfigurationModule)(); };
ConfigurationModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ConfigurationModule });
ConfigurationModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _configuration_routing_module__WEBPACK_IMPORTED_MODULE_0__.ConfigurationRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ConfigurationModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _configuration_routing_module__WEBPACK_IMPORTED_MODULE_0__.ConfigurationRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_admin_configuration_configuration_module_ts.js.map