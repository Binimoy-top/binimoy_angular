"use strict";
(self["webpackChunksmart"] = self["webpackChunksmart"] || []).push([["src_app_admin_roles_roles_module_ts"],{

/***/ 42635:
/*!****************************************************************************!*\
  !*** ./src/app/admin/roles/dialogs/form-dialogs/form-dialogs.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormDialogsComponent": () => (/* binding */ FormDialogsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class FormDialogsComponent {
    constructor() { }
    ngOnInit() {
    }
}
FormDialogsComponent.ɵfac = function FormDialogsComponent_Factory(t) { return new (t || FormDialogsComponent)(); };
FormDialogsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormDialogsComponent, selectors: [["app-form-dialogs"]], decls: 2, vars: 0, template: function FormDialogsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "form-dialogs works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtLWRpYWxvZ3MuY29tcG9uZW50LnNhc3MifQ== */"] });


/***/ }),

/***/ 98819:
/*!*****************************************************!*\
  !*** ./src/app/admin/roles/roles-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RolesRoutingModule": () => (/* binding */ RolesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _roles_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./roles.component */ 2740);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: 'roles',
        component: _roles_component__WEBPACK_IMPORTED_MODULE_0__.RolesComponent,
    }
];
class RolesRoutingModule {
}
RolesRoutingModule.ɵfac = function RolesRoutingModule_Factory(t) { return new (t || RolesRoutingModule)(); };
RolesRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: RolesRoutingModule });
RolesRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](RolesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 63318:
/*!*********************************************!*\
  !*** ./src/app/admin/roles/roles.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RolesModule": () => (/* binding */ RolesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _roles_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./roles-routing.module */ 98819);
/* harmony import */ var _dialogs_form_dialogs_form_dialogs_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dialogs/form-dialogs/form-dialogs.component */ 42635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




class RolesModule {
}
RolesModule.ɵfac = function RolesModule_Factory(t) { return new (t || RolesModule)(); };
RolesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: RolesModule });
RolesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _roles_routing_module__WEBPACK_IMPORTED_MODULE_0__.RolesRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](RolesModule, { declarations: [_dialogs_form_dialogs_form_dialogs_component__WEBPACK_IMPORTED_MODULE_1__.FormDialogsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _roles_routing_module__WEBPACK_IMPORTED_MODULE_0__.RolesRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_admin_roles_roles_module_ts.js.map