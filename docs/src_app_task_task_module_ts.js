"use strict";
(self["webpackChunksmart"] = self["webpackChunksmart"] || []).push([["src_app_task_task_module_ts"],{

/***/ 40588:
/*!*********************************************!*\
  !*** ./src/app/task/task-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaskRoutingModule": () => (/* binding */ TaskRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _task_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.component */ 505);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _task_component__WEBPACK_IMPORTED_MODULE_0__.TaskComponent
    }
];
class TaskRoutingModule {
}
TaskRoutingModule.ɵfac = function TaskRoutingModule_Factory(t) { return new (t || TaskRoutingModule)(); };
TaskRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: TaskRoutingModule });
TaskRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TaskRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 505:
/*!****************************************!*\
  !*** ./src/app/task/task.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaskComponent": () => (/* binding */ TaskComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 54941);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sidenav */ 7216);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tooltip */ 40089);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/checkbox */ 61534);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 15375);



















function TaskComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-breadcrumb", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const breadscrum_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", breadscrum_r7.title)("items", breadscrum_r7.items)("active_item", breadscrum_r7.active);
} }
function TaskComponent_button_26_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TaskComponent_button_26_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](21); return ctx_r8.deleteTask(_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TaskComponent_button_27_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TaskComponent_button_27_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.saveTask(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "save");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TaskComponent_button_28_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TaskComponent_button_28_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.editTask(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "save");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TaskComponent_div_101_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 60);
} }
function TaskComponent_div_101_mat_icon_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "arrow_downward ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TaskComponent_div_101_mat_icon_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "arrow_upward ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TaskComponent_div_101_mat_icon_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { done: a0 }; };
const _c1 = function (a0, a1, a2) { return { "task-low": a0, "task-high": a1, "task-normal": a2 }; };
function TaskComponent_div_101_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TaskComponent_div_101_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); const task_r14 = restoredCtx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](21); return ctx_r19.taskClick(task_r14, _r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-icon", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "drag_indicator");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-checkbox", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function TaskComponent_div_101_Template_mat_checkbox_change_5_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); const task_r14 = restoredCtx.$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](21); return ctx_r21.toggle(task_r14, _r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, TaskComponent_div_101_div_6_Template, 1, 0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, TaskComponent_div_101_mat_icon_10_Template, 2, 0, "mat-icon", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, TaskComponent_div_101_mat_icon_11_Template, 2, 0, "mat-icon", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, TaskComponent_div_101_mat_icon_12_Template, 2, 0, "mat-icon", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "img", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const task_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", !!task_r14.done);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](13, _c0, task_r14.done));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", task_r14.title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](15, _c1, task_r14.priority == "Low", task_r14.priority == "High", task_r14.priority == "Normal"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (task_r14 == null ? null : task_r14.priority) == "Low");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (task_r14 == null ? null : task_r14.priority) == "High");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (task_r14 == null ? null : task_r14.priority) == "Normal");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", task_r14.priority, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", task_r14.img, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("matTooltip", task_r14.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 11, task_r14.due_date));
} }
class TaskComponent {
    constructor(fb) {
        this.fb = fb;
        this.mode = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('side');
        this.showFiller = false;
        this.isNewEvent = false;
        this.breadscrums = [
            {
                title: 'Task',
                items: [],
                active: 'Task',
            },
        ];
        this.tasks = [
            {
                id: '1',
                img: 'assets/images/user/user1.jpg',
                name: 'Sarah Smith',
                title: 'Develop angular project',
                done: true,
                note: 'note details',
                priority: 'High',
                due_date: '2/12/2020',
            },
            {
                id: '2',
                img: 'assets/images/user/user2.jpg',
                name: 'John Deo',
                title: 'File not found exception solve',
                done: false,
                note: 'note details',
                priority: 'High',
                due_date: '2/12/2019',
            },
            {
                id: '3',
                img: 'assets/images/user/user3.jpg',
                name: 'Jens Brincker',
                title: 'Test project and find bug',
                done: false,
                note: 'note details',
                priority: 'Low',
                due_date: '2/12/2017',
            },
            {
                id: '4',
                img: 'assets/images/user/user4.jpg',
                name: 'Mark Hay',
                title: 'Image not found error',
                done: true,
                note: 'note details',
                priority: 'Normal',
                due_date: '2/12/2020',
            },
            {
                id: '5',
                img: 'assets/images/user/user5.jpg',
                name: 'Anthony Davie',
                title: 'Solve client error in form',
                done: false,
                note: 'note details',
                priority: 'High',
                due_date: '2/12/2019',
            },
            {
                id: '6',
                img: 'assets/images/user/user6.jpg',
                name: 'Sue Woodger',
                title: 'Tab button is flickering on hover',
                done: false,
                note: 'note details',
                priority: 'Normal',
                due_date: '2/12/2017',
            },
            {
                id: '7',
                img: 'assets/images/user/user7.jpg',
                name: 'John Deo',
                title: 'Chart responsive issue solve',
                done: true,
                note: 'note details',
                priority: 'High',
                due_date: '2/12/2019',
            },
            {
                id: '8',
                img: 'assets/images/user/user8.jpg',
                name: 'Jens Brincker',
                title: 'Web service data load issue',
                done: false,
                note: 'note details',
                priority: 'High',
                due_date: '2/12/2020',
            },
            {
                id: '9',
                img: 'assets/images/user/user9.jpg',
                name: 'Sarah Smith',
                title: 'Java compile error',
                done: false,
                note: 'note details',
                priority: 'Low',
                due_date: '2/12/2017',
            },
            {
                id: '10',
                img: 'assets/images/user/user10.jpg',
                name: 'Mark Hay',
                title: 'Integrate project with spring boot',
                done: true,
                note: 'note details',
                priority: 'High',
                due_date: '2/12/2019',
            },
            {
                id: '11',
                img: 'assets/images/user/user1.jpg',
                name: 'John Deo',
                title: 'Update latest angular version',
                done: false,
                note: 'note details',
                priority: 'High',
                due_date: '2/12/2017',
            },
            {
                id: '12',
                img: 'assets/images/user/user2.jpg',
                name: 'Jens Brincker',
                title: 'Integrate lazy loading on project',
                done: false,
                note: 'note details',
                priority: 'Normal',
                due_date: '2/12/2020',
            },
            {
                id: '13',
                img: 'assets/images/user/user3.jpg',
                name: 'Mark Hay',
                title: 'js file not load properly',
                done: true,
                note: 'note details',
                priority: 'Normal',
                due_date: '2/12/2019',
            },
            {
                id: '14',
                img: 'assets/images/user/user4.jpg',
                name: 'Anthony Davie',
                title: 'need to change color of table',
                done: false,
                note: 'note details',
                priority: 'Normal',
                due_date: '2/12/2017',
            },
            {
                id: '15',
                img: 'assets/images/user/user5.jpg',
                name: 'Sue Woodger',
                title: 'modal window select item issue',
                done: false,
                note: 'note details',
                priority: 'Low',
                due_date: '2/12/2017',
            },
        ];
        this.taskForm = this.createFormGroup(null);
    }
    drop(event) {
        (0,_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__.moveItemInArray)(this.tasks, event.previousIndex, event.currentIndex);
    }
    toggle(task, nav) {
        nav.close();
        task.done = !task.done;
    }
    addNewTask(nav) {
        this.resetFormField();
        this.isNewEvent = true;
        this.dialogTitle = 'New Task';
        this.userImg = 'assets/images/user/user1.jpg';
        nav.open();
    }
    taskClick(task, nav) {
        this.isNewEvent = false;
        this.dialogTitle = 'Edit Task';
        this.userImg = task.img;
        nav.open();
        this.taskForm = this.createFormGroup(task);
    }
    closeSlider(nav) {
        if (nav.open()) {
            nav.close();
        }
    }
    createFormGroup(data) {
        return this.fb.group({
            id: [data ? data.id : this.getRandomID()],
            img: [data ? data.img : 'assets/images/user/user1.jpg'],
            name: [data ? data.name : null],
            title: [data ? data.title : null],
            done: [data ? data.done : null],
            priority: [data ? data.priority : null],
            due_date: [
                (0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.formatDate)(data
                    ? data.due_date
                    : (0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.formatDate)(new Date(), 'yyyy-MM-dd', 'en') || '', 'yyyy-MM-dd', 'en'),
            ],
            note: [data ? data.note : null],
        });
    }
    saveTask() {
        this.tasks.unshift(this.taskForm.value);
        this.resetFormField();
    }
    editTask() {
        const targetIdx = this.tasks
            .map((item) => item.id)
            .indexOf(this.taskForm.value.id);
        this.tasks[targetIdx] = this.taskForm.value;
    }
    deleteTask(nav) {
        const targetIdx = this.tasks
            .map((item) => item.id)
            .indexOf(this.taskForm.value.id);
        this.tasks.splice(targetIdx, 1);
        nav.close();
    }
    resetFormField() {
        this.taskForm.controls.name.reset();
        this.taskForm.controls.title.reset();
        this.taskForm.controls.done.reset();
        this.taskForm.controls.priority.reset();
        this.taskForm.controls.due_date.reset();
        this.taskForm.controls.note.reset();
    }
    getRandomID() {
        const S4 = () => {
            return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        };
        return S4() + S4();
    }
    ngOnInit() { }
}
TaskComponent.ɵfac = function TaskComponent_Factory(t) { return new (t || TaskComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder)); };
TaskComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TaskComponent, selectors: [["app-task"]], decls: 102, vars: 22, consts: [[1, "content"], [1, "content-block"], ["class", "block-header", 4, "ngFor", "ngForOf"], [1, "row"], [1, "col-md-12", "col-sm-12"], [1, "card", "h-100"], [1, "card-body"], [1, "task-module"], [1, "task-header"], [1, "task-title"], [1, "header-button"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "task-container"], ["position", "end", 3, "mode"], ["sidenav", ""], [1, "header"], [1, "header-title"], [1, "header-close", "m-l-0"], ["mat-icon-button", "", "matTooltip", "Delete Task", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "matTooltip", "Save Task", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "matTooltip", "Edit Task", 3, "click", 4, "ngIf"], ["mat-icon-button", "", 3, "click"], [1, "register-form", "m-4", 3, "formGroup"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12"], [3, "hidden"], ["matInput", "", "formControlName", "id"], ["matInput", "", "formControlName", "img"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "formControlName", "title"], ["matSuffix", ""], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-3"], ["formControlName", "done", "color", "primary", 1, "example-margin"], ["formControlName", "name"], [3, "value"], [1, "col-xl-6", "col-lg-6", "col-md-12", "col-sm-12", "mb-2"], ["formControlName", "priority"], ["matInput", "", "formControlName", "due_date", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker1", ""], ["matInput", "", "formControlName", "note"], [1, "col-xl-10", "col-lg-10", "col-md-12", "col-sm-12"], ["cdkDropList", "", 1, "task-list", 2, "position", "relative", "max-height", "500px", 3, "perfectScrollbar", "cdkDropListDropped"], ["class", "task-box", "cdkDrag", "", 3, "click", 4, "ngFor", "ngForOf"], [1, "block-header"], [3, "title", "items", "active_item"], ["mat-icon-button", "", "matTooltip", "Delete Task", 3, "click"], ["mat-icon-button", "", "matTooltip", "Save Task", 3, "click"], ["mat-icon-button", "", "matTooltip", "Edit Task", 3, "click"], ["cdkDrag", "", 1, "task-box", 3, "click"], ["cdkDragHandle", "", 1, "task-handle", "m-r-20"], ["aria-hidden", "false"], ["color", "primary", 1, "m-r-15", 3, "checked", "change"], ["class", "task-custom-placeholder", 4, "cdkDragPlaceholder"], ["matTooltip", "Title", 3, "ngClass"], [3, "ngClass"], ["matTooltip", "Low", "aria-hidden", "false", "class", "lbl-low", 4, "ngIf"], ["matTooltip", "High", "aria-hidden", "false", "class", "lbl-high", 4, "ngIf"], ["matTooltip", "Normal", "aria-hidden", "false", "class", "lbl-normal", 4, "ngIf"], [1, "task-user-img", 3, "src", "matTooltip"], ["matTooltip", "Due Date", 1, "task-date"], [1, "task-custom-placeholder"], ["matTooltip", "Low", "aria-hidden", "false", 1, "lbl-low"], ["matTooltip", "High", "aria-hidden", "false", 1, "lbl-high"], ["matTooltip", "Normal", "aria-hidden", "false", 1, "lbl-normal"]], template: function TaskComponent_Template(rf, ctx) { if (rf & 1) {
        const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TaskComponent_div_2_Template, 2, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Tasks");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TaskComponent_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](21); return ctx.addNewTask(_r1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Add Task");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-sidenav-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-sidenav", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "h2", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, TaskComponent_button_26_Template, 3, 0, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, TaskComponent_button_27_Template, 3, 0, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, TaskComponent_button_28_Template, 3, 0, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TaskComponent_Template_button_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](21); return ctx.closeSlider(_r1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "form", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "mat-form-field", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "mat-form-field", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "mat-form-field", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "mat-icon", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "turned_in_not");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "mat-checkbox", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Mark as complete ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "mat-form-field", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Assigned Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "mat-select", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "mat-option", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, " Sarah Smith ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "mat-option", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, " John Deo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "mat-option", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, " Jens Brincker ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "mat-option", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, " Mark Hay ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "mat-option", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, " Anthony Davie ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "mat-option", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, " Sue Woodger ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "mat-form-field", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "Priority");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "mat-select", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "mat-option", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, " Low ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "mat-option", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, " Normal ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "mat-option", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, " High ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "mat-form-field", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "Due date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](87, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](88, "mat-datepicker-toggle", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](89, "mat-datepicker", null, 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "mat-form-field", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "Event Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](96, "textarea", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](98, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("cdkDropListDropped", function TaskComponent_Template_div_cdkDropListDropped_100_listener($event) { return ctx.drop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](101, TaskComponent_div_101_Template, 18, 19, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](90);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.breadscrums);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.tasks.length, " Total task");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mode", ctx.mode.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.dialogTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isNewEvent);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isNewEvent);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isNewEvent);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.taskForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", "Sarah Smith");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", "John Deo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", "Jens Brincker");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", "Mark Hay");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", "Anthony Davie");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", "Sue Woodger");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", "Low");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", "Normal");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", "High");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matDatepicker", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.tasks);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__.MatSidenavContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__.MatSidenav, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__.MatTooltip, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatSuffix, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__.MatCheckbox, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatOption, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__.MatDatepickerToggle, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__.MatDatepicker, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__.MatSidenavContent, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__.CdkDropList, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_15__.PerfectScrollbarDirective, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__.CdkDrag, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__.CdkDragHandle, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__.CdkDragPlaceholder, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YXNrLmNvbXBvbmVudC5zYXNzIn0= */"] });


/***/ }),

/***/ 23917:
/*!*************************************!*\
  !*** ./src/app/task/task.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaskModule": () => (/* binding */ TaskModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _task_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.component */ 505);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 15375);
/* harmony import */ var _task_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task-routing.module */ 40588);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/menu */ 82796);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/checkbox */ 61534);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tooltip */ 40089);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/radio */ 68390);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/snack-bar */ 32528);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/sidenav */ 7216);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/paginator */ 26439);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/toolbar */ 19946);
/* harmony import */ var ngx_material_file_input__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-material-file-input */ 37410);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 54941);
/* harmony import */ var _shared_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/components/components.module */ 15626);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);


























class TaskModule {
}
TaskModule.ɵfac = function TaskModule_Factory(t) { return new (t || TaskModule)(); };
TaskModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: TaskModule });
TaskModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__.PerfectScrollbarModule,
            _task_routing_module__WEBPACK_IMPORTED_MODULE_1__.TaskRoutingModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelectModule,
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__.MatCheckboxModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInputModule,
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__.MatTooltipModule,
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__.MatDatepickerModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormFieldModule,
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__.MatRadioModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__.MatMenuModule,
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__.MatSnackBarModule,
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__.MatSidenavModule,
            _angular_material_table__WEBPACK_IMPORTED_MODULE_19__.MatTableModule,
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__.MatPaginatorModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_21__.MatCardModule,
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__.MatSortModule,
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_23__.MatToolbarModule,
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_24__.DragDropModule,
            ngx_material_file_input__WEBPACK_IMPORTED_MODULE_25__.MaterialFileInputModule,
            _shared_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](TaskModule, { declarations: [_task_component__WEBPACK_IMPORTED_MODULE_0__.TaskComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__.PerfectScrollbarModule,
        _task_routing_module__WEBPACK_IMPORTED_MODULE_1__.TaskRoutingModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelectModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__.MatCheckboxModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInputModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__.MatTooltipModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__.MatDatepickerModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormFieldModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__.MatRadioModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__.MatMenuModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__.MatSnackBarModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__.MatSidenavModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_19__.MatTableModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__.MatPaginatorModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_21__.MatCardModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__.MatSortModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_23__.MatToolbarModule,
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_24__.DragDropModule,
        ngx_material_file_input__WEBPACK_IMPORTED_MODULE_25__.MaterialFileInputModule,
        _shared_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_task_task_module_ts.js.map