"use strict";
(self["webpackChunksmart"] = self["webpackChunksmart"] || []).push([["src_app_admin_admin_module_ts"],{

/***/ 13176:
/*!***********************************************!*\
  !*** ./src/app/admin/admin-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminRoutingModule": () => (/* binding */ AdminRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);



const routes = [
    {
        path: 'dashboard',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2015_menu_mjs"), __webpack_require__.e("default-node_modules_lodash-es__baseClone_js"), __webpack_require__.e("default-node_modules_ng2-charts___ivy_ngcc___fesm2015_ng2-charts_js-node_modules_ng-apexchart-31d6d1"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_progress-bar_mjs"), __webpack_require__.e("default-node_modules_ngx-echarts_fesm2015_ngx-echarts_mjs"), __webpack_require__.e("default-src_app_student_dashboard_dashboard_component_ts"), __webpack_require__.e("default-src_app_teacher_dashboard_dashboard_component_ts"), __webpack_require__.e("src_app_admin_dashboard_dashboard_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./dashboard/dashboard.module */ 31052)).then((m) => m.DashboardModule),
    },
    {
        path: 'teachers',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2015_checkbox_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_menu_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_dialog_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_sort_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_toolbar_mjs-node_modules_ngx-material-file-inp-d32dbc"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_progress-spinner_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_tabs_mjs"), __webpack_require__.e("src_app_admin_teachers_teachers_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./teachers/teachers.module */ 61863)).then((m) => m.TeachersModule),
    },
    {
        path: 'roles',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_admin_roles_roles_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./roles/roles.module */ 63318)).then((m) => m.RolesModule),
    },
    {
        path: 'config',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_admin_configuration_configuration_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./configuration/configuration.module */ 73681)).then((m) => m.ConfigurationModule),
    },
    {
        path: 'lead',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2015_menu_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_dialog_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_sort_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_tabs_mjs"), __webpack_require__.e("src_app_admin_lead_lead_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./lead/lead.module */ 71855)).then((m) => m.LeadModule),
    },
    {
        path: 'students',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2015_checkbox_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_menu_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_dialog_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_sort_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_toolbar_mjs-node_modules_ngx-material-file-inp-d32dbc"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_progress-spinner_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_tabs_mjs"), __webpack_require__.e("src_app_admin_students_students_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./students/students.module */ 46250)).then((m) => m.StudentsModule),
    },
    {
        path: 'temp',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2015_menu_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_dialog_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_sort_mjs"), __webpack_require__.e("src_app_admin_tempusers_tempusers_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./tempusers/tempusers.module */ 10210)).then((m) => m.TempusersModule),
    },
    {
        path: 'courses',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2015_checkbox_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_toolbar_mjs-node_modules_ngx-material-file-inp-d32dbc"), __webpack_require__.e("src_app_admin_courses_courses_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./courses/courses.module */ 91458)).then((m) => m.CoursesModule),
    },
    {
        path: 'library',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2015_checkbox_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_menu_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_dialog_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_sort_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_toolbar_mjs-node_modules_ngx-material-file-inp-d32dbc"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_progress-spinner_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_card_mjs"), __webpack_require__.e("src_app_admin_library_library_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./library/library.module */ 98632)).then((m) => m.LibraryModule),
    },
    {
        path: 'departments',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2015_checkbox_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_menu_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_dialog_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_sort_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_toolbar_mjs-node_modules_ngx-material-file-inp-d32dbc"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_progress-spinner_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_card_mjs"), __webpack_require__.e("src_app_admin_departments_departments_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./departments/departments.module */ 55491)).then((m) => m.DepartmentsModule),
    },
    {
        path: 'staff',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2015_checkbox_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_menu_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_dialog_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_sort_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_toolbar_mjs-node_modules_ngx-material-file-inp-d32dbc"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_progress-spinner_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_tabs_mjs"), __webpack_require__.e("src_app_admin_staff_staff_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./staff/staff.module */ 82318)).then((m) => m.StaffModule),
    },
    {
        path: 'holidays',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2015_checkbox_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_menu_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_dialog_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_sort_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_toolbar_mjs-node_modules_ngx-material-file-inp-d32dbc"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_progress-spinner_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_tabs_mjs"), __webpack_require__.e("src_app_admin_holidays_holidays_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./holidays/holidays.module */ 46319)).then((m) => m.HolidaysModule),
    },
    {
        path: 'fees',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2015_checkbox_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_menu_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_dialog_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_sort_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_toolbar_mjs-node_modules_ngx-material-file-inp-d32dbc"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_progress-spinner_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_tabs_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_radio_mjs"), __webpack_require__.e("src_app_admin_fees_fees_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./fees/fees.module */ 45124)).then((m) => m.FeesModule),
    },
    {
        path: 'tables',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! src/app/tables/tables.module */ 81439)).then((m) => m.TablesModule),
    },
];
class AdminRoutingModule {
}
AdminRoutingModule.ɵfac = function AdminRoutingModule_Factory(t) { return new (t || AdminRoutingModule)(); };
AdminRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AdminRoutingModule });
AdminRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdminRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 77095:
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminModule": () => (/* binding */ AdminModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-routing.module */ 13176);
/* harmony import */ var _roles_roles_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./roles/roles.component */ 2740);
/* harmony import */ var _configuration_configuration_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./configuration/configuration.component */ 87113);
/* harmony import */ var _tempusers_tempusers_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tempusers/tempusers.component */ 60562);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);






class AdminModule {
}
AdminModule.ɵfac = function AdminModule_Factory(t) { return new (t || AdminModule)(); };
AdminModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AdminModule });
AdminModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _admin_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminRoutingModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AdminModule, { declarations: [_roles_roles_component__WEBPACK_IMPORTED_MODULE_1__.RolesComponent,
        _configuration_configuration_component__WEBPACK_IMPORTED_MODULE_2__.ConfigurationComponent,
        _tempusers_tempusers_component__WEBPACK_IMPORTED_MODULE_3__.TempusersComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _admin_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminRoutingModule] }); })();


/***/ }),

/***/ 87113:
/*!****************************************************************!*\
  !*** ./src/app/admin/configuration/configuration.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigurationComponent": () => (/* binding */ ConfigurationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class ConfigurationComponent {
    constructor() { }
    ngOnInit() {
    }
}
ConfigurationComponent.ɵfac = function ConfigurationComponent_Factory(t) { return new (t || ConfigurationComponent)(); };
ConfigurationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConfigurationComponent, selectors: [["app-configuration"]], decls: 6, vars: 0, consts: [[1, "content"], [1, "content-block"], [1, "d-flex", "justify-content-center"]], template: function ConfigurationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Configuration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25maWd1cmF0aW9uLmNvbXBvbmVudC5zYXNzIn0= */"] });


/***/ }),

/***/ 2740:
/*!************************************************!*\
  !*** ./src/app/admin/roles/roles.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RolesComponent": () => (/* binding */ RolesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class RolesComponent {
    constructor() { }
    ngOnInit() {
    }
}
RolesComponent.ɵfac = function RolesComponent_Factory(t) { return new (t || RolesComponent)(); };
RolesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RolesComponent, selectors: [["app-roles"]], decls: 6, vars: 0, consts: [[1, "content"], [1, "content-block"], [1, "d-flex", "justify-content-center"]], template: function RolesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Roles ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyb2xlcy5jb21wb25lbnQuc2FzcyJ9 */"] });


/***/ }),

/***/ 60562:
/*!********************************************************!*\
  !*** ./src/app/admin/tempusers/tempusers.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TempusersComponent": () => (/* binding */ TempusersComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class TempusersComponent {
    constructor() { }
    ngOnInit() {
    }
}
TempusersComponent.ɵfac = function TempusersComponent_Factory(t) { return new (t || TempusersComponent)(); };
TempusersComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TempusersComponent, selectors: [["app-tempusers"]], decls: 4, vars: 0, consts: [[1, "content"], [1, "content-block"]], template: function TempusersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "tempuser dashboard works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZW1wdXNlcnMuY29tcG9uZW50LnNhc3MifQ== */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_admin_admin_module_ts.js.map