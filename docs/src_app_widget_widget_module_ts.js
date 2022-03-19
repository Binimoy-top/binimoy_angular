"use strict";
(self["webpackChunksmart"] = self["webpackChunksmart"] || []).push([["src_app_widget_widget_module_ts"],{

/***/ 36897:
/*!***************************************************************!*\
  !*** ./src/app/widget/chart-widget/chart-widget.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChartWidgetComponent": () => (/* binding */ ChartWidgetComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-apexcharts */ 20054);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-charts */ 53808);





const _c0 = ["chart"];
function ChartWidgetComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-breadcrumb", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const breadscrum_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", breadscrum_r1.title)("items", breadscrum_r1.items)("active_item", breadscrum_r1.active);
} }
class ChartWidgetComponent {
    constructor() {
        this.breadscrums = [
            {
                title: 'Chart Widget',
                items: ['Widget'],
                active: 'Chart Widget',
            },
        ];
    }
    ngOnInit() {
        this.initChartReport1();
        this.initChartReport2();
        this.initChartReport3();
        this.initChartReport4();
        this.pieChart();
        this.radarChart();
        this.chartArea();
    }
    initChartReport1() {
        this.areaChartOptions2 = {
            elements: {
                point: {
                    radius: 0,
                    hitRadius: 5,
                    hoverRadius: 5,
                },
            },
            legend: {
                display: true,
                labels: {
                    fontColor: '#9aa0ac',
                },
                position: 'top',
            },
            scales: {
                xAxes: [
                    {
                        display: false,
                    },
                ],
                yAxes: [
                    {
                        display: false,
                        ticks: {
                            beginAtZero: true,
                        },
                    },
                ],
            },
        };
        this.areaChartPlugins = [
            {
                afterLayout: (chart) => {
                    const ctx = chart.chart.ctx;
                    const gradientStroke = ctx.createLinearGradient(0, 0, 0, 150);
                    const dataset = chart.data.datasets[0];
                    gradientStroke.addColorStop(0, '#5555FF');
                    gradientStroke.addColorStop(1, '#9787FF');
                    dataset.backgroundColor = gradientStroke;
                    dataset.borderColor = 'transparent';
                    dataset.pointBorderColor = 'transparent';
                    dataset.pointBackgroundColor = 'transparent';
                    dataset.lineTension = '0.4';
                    const gradientStroke2 = ctx.createLinearGradient(0, 0, 0, 150);
                    const dataset2 = chart.data.datasets[1];
                    gradientStroke2.addColorStop(0, '#FF55B8');
                    gradientStroke2.addColorStop(1, '#FF8787');
                    dataset2.backgroundColor = gradientStroke2;
                    dataset2.borderColor = 'transparent';
                    dataset2.pointBorderColor = 'transparent';
                    dataset2.pointBackgroundColor = 'transparent';
                    dataset2.lineTension = '0.4';
                },
            },
        ];
        this.areaChartData = [
            {
                label: 'Foods',
                data: [24, 18, 16, 18, 24, 36, 28],
            },
            {
                label: 'Electronics',
                data: [20, 22, 30, 22, 18, 22, 30],
            },
        ];
        this.areaChartLabels = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
        // area chart end
    }
    initChartReport2() {
        this.radarChartPlugins = [
            {
                afterLayout: (chart) => {
                    const ctx = chart.chart.ctx;
                    const gradientStroke = ctx.createLinearGradient(0, 0, 0, 150);
                    const dataset = chart.data.datasets[0];
                    gradientStroke.addColorStop(0, 'rgba(85, 85, 255, 0.9)');
                    gradientStroke.addColorStop(1, 'rgba(151, 135, 255, 0.8)');
                    dataset.backgroundColor = gradientStroke;
                    dataset.borderColor = 'transparent';
                    dataset.pointBackgroundColor = 'transparent';
                    dataset.pointBorderColor = 'transparent';
                    dataset.pointHoverBackgroundColor = 'transparent';
                    dataset.pointHoverBorderColor = 'transparent';
                    dataset.pointHitRadius = 50;
                    const gradientStroke2 = ctx.createLinearGradient(0, 0, 0, 150);
                    const dataset2 = chart.data.datasets[1];
                    gradientStroke2.addColorStop(0, 'rgba(255, 85, 184, 0.9)');
                    gradientStroke2.addColorStop(1, 'rgba(255, 135, 135, 0.8)');
                    dataset2.backgroundColor = gradientStroke2;
                    dataset2.borderColor = 'transparent';
                    dataset2.pointBackgroundColor = 'transparent';
                    dataset2.pointBorderColor = 'transparent';
                    dataset2.pointHoverBackgroundColor = 'transparent';
                    dataset2.pointHoverBorderColor = 'transparent';
                    dataset2.pointHitRadius = 50;
                },
                beforeDatasetsDraw: (chart) => {
                    chart.ctx.shadowColor = 'rgba(0, 0, 0, 0.25)';
                    chart.ctx.shadowBlur = 40;
                },
                afterDatasetsDraw: (chart) => {
                    chart.ctx.shadowColor = 'rgba(0, 0, 0, 0)';
                    chart.ctx.shadowBlur = 0;
                },
            },
        ];
        this.radarChartLabels = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
        this.radarChartData = [
            { data: [25, 59, 90, 81, 60, 82, 52], label: 'Product', fill: true },
            { data: [40, 100, 40, 90, 40, 90, 84], label: 'Services', fill: true },
        ];
        this.radarChartType = 'radar';
        this.radarChartColors = [
            {
                backgroundColor: ['rgba(109, 144, 232,0.8)'],
            },
            {
                backgroundColor: ['rgba(255, 140, 96,0.8)'],
            },
        ];
        this.radarChartOptions2 = {
            legend: {
                display: true,
                labels: {
                    fontColor: '#9aa0ac',
                },
                position: 'top',
            },
            gridLines: {
                display: false,
            },
            scale: {
                ticks: {
                    maxTicksLimit: 1,
                    display: false,
                },
            },
        };
        // end radar chart
    }
    initChartReport3() {
        this.pieChartOptions = {
            series: [44, 55, 13, 43, 22],
            chart: {
                type: 'donut',
                width: 200,
            },
            legend: {
                show: false,
            },
            dataLabels: {
                enabled: false,
            },
            labels: ['Science', 'Mathes', 'Economics', 'History', 'Music'],
            responsive: [
                {
                    breakpoint: 480,
                    options: {},
                },
            ],
        };
    }
    initChartReport4() {
        this.avgLecChartOptions = {
            series: [
                {
                    name: 'Avg. Lecture',
                    data: [65, 72, 62, 73, 66, 74, 63, 67],
                },
            ],
            chart: {
                height: 350,
                type: 'line',
                dropShadow: {
                    enabled: true,
                    color: '#000',
                    top: 18,
                    left: 7,
                    blur: 10,
                    opacity: 0.2,
                },
                toolbar: {
                    show: false,
                },
                foreColor: '#9aa0ac',
            },
            stroke: {
                curve: 'smooth',
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'March', 'Apr', 'May', 'Jun', 'July', 'Aug'],
                title: {
                    text: 'Weekday',
                },
            },
            yaxis: {
                title: {
                    text: 'Avg. Lecture',
                },
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shade: 'dark',
                    gradientToColors: ['#35fdd8'],
                    shadeIntensity: 1,
                    type: 'horizontal',
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [0, 100, 100, 100],
                },
            },
            markers: {
                size: 4,
                colors: ['#FFA41B'],
                strokeColors: '#fff',
                strokeWidth: 2,
                hover: {
                    size: 7,
                },
            },
            tooltip: {
                theme: 'dark',
                marker: {
                    show: true,
                },
                x: {
                    show: true,
                },
            },
        };
    }
    pieChart() {
        this.circleChartOptions = {
            series: [76, 67, 61, 90],
            chart: {
                height: 260,
                type: 'radialBar',
            },
            plotOptions: {
                radialBar: {
                    offsetY: 0,
                    startAngle: 0,
                    endAngle: 270,
                    hollow: {
                        margin: 5,
                        size: '30%',
                        background: 'transparent',
                        image: undefined,
                    },
                    dataLabels: {
                        name: {
                            show: false,
                        },
                        value: {
                            show: false,
                        },
                    },
                },
            },
            colors: ['#1ab7ea', '#0084ff', '#39539E', '#0077B5'],
            labels: ['Vimeo', 'Messenger', 'Facebook', 'LinkedIn'],
            legend: {
                show: true,
                floating: true,
                fontSize: '16px',
                position: 'left',
                offsetX: 50,
                offsetY: 10,
                labels: {
                    useSeriesColors: true,
                },
                formatter: function (seriesName, opts) {
                    return seriesName + ':  ' + opts.w.globals.series[opts.seriesIndex];
                },
                itemMargin: {
                    horizontal: 3,
                },
            },
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        legend: {
                            show: false,
                        },
                    },
                },
            ],
        };
    }
    radarChart() {
        this.radarChartOptions = {
            series: [
                {
                    name: 'Series Blue',
                    data: [80, 50, 30, 40, 100, 20],
                },
                {
                    name: 'Series Green',
                    data: [20, 30, 40, 80, 20, 80],
                },
                {
                    name: 'Series Orange',
                    data: [44, 76, 78, 13, 43, 10],
                },
            ],
            chart: {
                height: 250,
                type: 'radar',
                dropShadow: {
                    enabled: true,
                    blur: 1,
                    left: 1,
                    top: 1,
                },
            },
            stroke: {
                width: 0,
            },
            fill: {
                opacity: 0.4,
            },
            markers: {
                size: 0,
            },
            xaxis: {
                categories: ['2011', '2012', '2013', '2014', '2015', '2016'],
            },
        };
    }
    chartArea() {
        this.areaChartOptions = {
            chart: {
                height: 240,
                type: 'area',
                toolbar: {
                    show: false,
                },
                foreColor: '#9aa0ac',
            },
            legend: {
                show: false,
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: 'smooth',
            },
            series: [
                {
                    name: 'series1',
                    data: [31, 40, 28, 51, 42],
                },
                {
                    name: 'series2',
                    data: [11, 32, 45, 32, 34],
                },
            ],
            xaxis: {
                type: 'datetime',
                categories: ['1990', '1991', '1992', '1993', '1994'],
            },
            tooltip: {
                x: {
                    format: 'dd/MM/yy HH:mm',
                },
            },
        };
    }
}
ChartWidgetComponent.ɵfac = function ChartWidgetComponent_Factory(t) { return new (t || ChartWidgetComponent)(); };
ChartWidgetComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ChartWidgetComponent, selectors: [["app-chart-widget"]], viewQuery: function ChartWidgetComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
    } }, decls: 395, vars: 51, consts: [[1, "content"], [1, "content-block"], ["class", "block-header", 4, "ngFor", "ngForOf"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-4", "col-lg-4"], [1, "card"], [1, "header"], [1, "body"], ["id", "chart"], [3, "series", "chart", "plotOptions", "labels", "legend", "colors", "responsive"], [1, "col-4"], [1, "text-muted", "font-15", "text-truncate"], [1, "fas", "fa-arrow-circle-up", "col-green", "m-r-5"], [1, "fas", "fa-arrow-circle-down", "col-red", "m-r-5"], [1, "text-muted", "text-truncate"], [3, "series", "chart", "xaxis", "stroke", "markers", "fill"], [3, "series", "chart", "xaxis", "stroke", "tooltip", "dataLabels"], [1, "col-xl-3", "col-lg-6", "col-md-6", "col-sm-6", "col-xs-12"], [1, "card-statistic-4"], [1, "align-items-center", "justify-content-between"], [1, "col-lg-6", "col-md-6", "col-sm-6", "col-xs-6", "card-spacing"], [1, "card-content"], [1, "font-15"], [1, "mb-3", "font-18"], [1, "mb-0"], [1, "col-green"], [1, "col-lg-6", "col-md-6", "col-sm-6", "col-xs-6", "pl-0"], [1, "banner-img"], ["src", "assets/images/banner/1.png", "alt", ""], [1, "col-orange"], ["src", "assets/images/banner/2.png", "alt", ""], ["src", "assets/images/banner/3.png", "alt", ""], ["src", "assets/images/banner/4.png", "alt", ""], [1, "col-xl-8", "col-lg-8", "col-md-12", "col-sm-12"], [1, "card-body"], [1, "float-start"], [1, "text-muted"], [1, "text-muted", "font-12"], [1, "mb-5"], [3, "series", "chart", "xaxis", "stroke", "colors", "dataLabels", "legend", "markers", "grid", "yaxis", "tooltip", "title", "fill"], [1, "col-xl-4", "col-lg-4", "col-md-12", "col-sm-12"], [1, "apex-pie-center", 3, "series", "chart", "labels", "responsive", "dataLabels", "legend"], [1, "table-responsive", "m-t-15"], [1, "table", "align-items-center"], [1, "fa", "fa-circle", "col-cyan", "msr-2"], [1, "fa", "fa-circle", "col-blue", "msr-2"], [1, "fa", "fa-circle", "col-orange", "msr-2"], [1, "fa", "fa-circle", "col-green", "msr-2"], [1, "col-xl-6", "col-lg-6", "col-md-12", "col-sm-12"], [1, "recent-report__chart"], ["baseChart", "", 3, "chartType", "datasets", "labels", "options", "plugins", "legend"], [1, "axisData"], [1, "tick"], [1, "value", "productValue"], [1, "value", "serviceValue"], ["baseChart", "", 1, "chart", 3, "datasets", "labels", "options", "chartType", "plugins", "colors"], [1, "col-lg-3", "col-sm-6"], [1, "info-box7", "bg-c-blue", "order-info-box7"], [1, "info-box7-block"], [1, "m-b-20"], [1, "text-end"], [1, "fas", "fa-cart-plus", "float-start"], [1, "m-b-0"], [1, "info-box7", "bg-c-green", "order-info-box7"], [1, "fas", "fa-business-time", "float-start"], [1, "info-box7", "bg-c-yellow", "order-info-box7"], [1, "fas", "fa-chart-line", "float-start"], [1, "info-box7", "bg-c-pink", "order-info-box7"], [1, "fas", "fa-dollar-sign", "float-start"], [1, "col-12", "col-sm-6", "col-md-3"], [1, "d-flex", "justify-content-between"], [1, "text-info"], [1, "card-content", "mt-2"], [1, "progress", "skill-progress", "m-b-5", "w-100"], ["role", "progressbar", "aria-valuenow", "45", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-purple", "width-per-45"], [1, "d-flex", "justify-content-between", "mt-2"], [1, "text-muted", "mb-0"], [1, "text-success"], ["role", "progressbar", "aria-valuenow", "45", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-orange", "width-per-45"], [1, "text-danger"], ["role", "progressbar", "aria-valuenow", "45", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-cyan", "width-per-45"], [1, "text-secondary"], ["role", "progressbar", "aria-valuenow", "45", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-red", "width-per-45"], [1, "block-header"], [3, "title", "items", "active_item"]], template: function ChartWidgetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ChartWidgetComponent_div_2_Template, 2, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Chart Sample");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "apx-chart", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Target");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "$15.3k ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Last week");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "$2.8k ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Last Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "$12.5k ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Chart Sample");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "apx-chart", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Target");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "$15.3k ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Last week");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "$2.8k ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Last Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "$12.5k ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Chart Sample");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](65, "apx-chart", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "Target");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](71, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "$15.3k ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "Last week");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](77, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "$2.8k ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "Last Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](83, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "$12.5k ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "h5", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, "New Students");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "h2", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "1,025");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, "10%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, " Increase");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](103, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "h5", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, " Total Courses");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "h2", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](114, "47");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](117, "09%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](118, " Decrease");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](121, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "h5", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](130, "Awards");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "h2", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](132, "128");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](135, "18%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](136, " Increase");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](139, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "h5", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](148, "Revenue");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "h2", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](150, "$48,697");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](153, "42%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](154, " Increase");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](157, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "h6", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](164, "Average Lecture Per Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](166, "65 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](167, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](168, "(Average)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](170, "apx-chart", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](172, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](173, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](174, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](175, "Subject Chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](176, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](177, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](178, "apx-chart", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](180, "table", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](181, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](183, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](184, "i", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](185, " Music");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](186, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](187, "23");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](188, "td", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](189, "+32%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](190, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](191, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](192, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](193, "Science");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](194, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](195, "32");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](196, "td", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](197, "+12%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](198, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](199, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](200, "i", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](201, "Economics");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](202, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](203, "12");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](204, "td", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](205, "-12%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](206, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](207, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](208, "i", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](209, "Mathes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](210, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](211, "32");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](212, "td", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](213, "+3%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](214, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](215, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](216, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](217, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](218, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](219, "Recent Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](220, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](221, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](222, "canvas", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](223, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](224, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](225, " MON ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](226, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](227, "24");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](228, "span", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](229, "20");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](230, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](231, " TUE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](232, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](233, "18");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](234, "span", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](235, "22");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](236, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](237, " WED ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](238, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](239, "16");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](240, "span", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](241, "30");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](242, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](243, " THU ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](244, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](245, "18");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](246, "span", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](247, "22");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](248, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](249, " FRI ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](250, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](251, "24");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](252, "span", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](253, "18");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](254, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](255, " SAT ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](256, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](257, "36");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](258, "span", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](259, "22");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](260, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](261, " SUN ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](262, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](263, "28");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](264, "span", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](265, "30");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](266, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](267, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](268, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](269, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](270, "Recent Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](271, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](272, "canvas", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](273, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](274, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](275, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](276, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](277, "h6", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](278, "Orders Received");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](279, "h2", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](280, "i", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](281, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](282, "358");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](283, "p", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](284, "18% Higher Then Last Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](285, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](286, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](287, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](288, "h6", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](289, "Completed Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](290, "h2", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](291, "i", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](292, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](293, "865");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](294, "p", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](295, "21% Higher Then Last Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](296, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](297, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](298, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](299, "h6", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](300, "New Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](301, "h2", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](302, "i", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](303, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](304, "128");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](305, "p", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](306, "37% Higher Then Last Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](307, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](308, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](309, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](310, "h6", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](311, "Total Earning");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](312, "h2", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](313, "i", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](314, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](315, "$25698");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](316, "p", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](317, "10% Higher Then Last Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](318, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](319, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](320, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](321, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](322, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](323, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](324, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](325, "Todays Income");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](326, "p", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](327, "Income For Today");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](328, "h3", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](329, "$170");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](330, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](331, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](332, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](333, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](334, "p", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](335, "Change");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](336, "p", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](337, "75%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](338, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](339, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](340, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](341, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](342, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](343, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](344, "Total Revenue");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](345, "p", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](346, "Total Income");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](347, "h3", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](348, "$120");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](349, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](350, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](351, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](352, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](353, "p", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](354, "Change");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](355, "p", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](356, "25%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](357, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](358, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](359, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](360, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](361, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](362, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](363, "New Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](364, "p", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](365, "Fresh New Order");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](366, "h3", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](367, "15");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](368, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](369, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](370, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](371, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](372, "p", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](373, "Change");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](374, "p", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](375, "50%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](376, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](377, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](378, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](379, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](380, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](381, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](382, "New Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](383, "p", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](384, "Joined New User");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](385, "h3", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](386, "12");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](387, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](388, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](389, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](390, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](391, "p", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](392, "Change");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](393, "p", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](394, "25%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.breadscrums);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("series", ctx.circleChartOptions.series)("chart", ctx.circleChartOptions.chart)("plotOptions", ctx.circleChartOptions.plotOptions)("labels", ctx.circleChartOptions.labels)("legend", ctx.circleChartOptions.legend)("colors", ctx.circleChartOptions.colors)("responsive", ctx.circleChartOptions.responsive);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("series", ctx.radarChartOptions.series)("chart", ctx.radarChartOptions.chart)("xaxis", ctx.radarChartOptions.xaxis)("stroke", ctx.radarChartOptions.stroke)("markers", ctx.radarChartOptions.markers)("fill", ctx.radarChartOptions.fill);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("series", ctx.areaChartOptions.series)("chart", ctx.areaChartOptions.chart)("xaxis", ctx.areaChartOptions.xaxis)("stroke", ctx.areaChartOptions.stroke)("tooltip", ctx.areaChartOptions.tooltip)("dataLabels", ctx.areaChartOptions.dataLabels);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](105);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("series", ctx.avgLecChartOptions.series)("chart", ctx.avgLecChartOptions.chart)("xaxis", ctx.avgLecChartOptions.xaxis)("stroke", ctx.avgLecChartOptions.stroke)("colors", ctx.avgLecChartOptions.colors)("dataLabels", ctx.avgLecChartOptions.dataLabels)("legend", ctx.avgLecChartOptions.legend)("markers", ctx.avgLecChartOptions.markers)("grid", ctx.avgLecChartOptions.grid)("yaxis", ctx.avgLecChartOptions.yaxis)("tooltip", ctx.avgLecChartOptions.tooltip)("title", ctx.avgLecChartOptions.title)("fill", ctx.avgLecChartOptions.fill);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("series", ctx.pieChartOptions.series)("chart", ctx.pieChartOptions.chart)("labels", ctx.pieChartOptions.labels)("responsive", ctx.pieChartOptions.responsive)("dataLabels", ctx.pieChartOptions.dataLabels)("legend", ctx.pieChartOptions.legend);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("chartType", "line")("datasets", ctx.areaChartData)("labels", ctx.areaChartLabels)("options", ctx.areaChartOptions2)("plugins", ctx.areaChartPlugins)("legend", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("datasets", ctx.radarChartData)("labels", ctx.radarChartLabels)("options", ctx.radarChartOptions2)("chartType", ctx.radarChartType)("plugins", ctx.radarChartPlugins)("colors", ctx.radarChartColors);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent, ng_apexcharts__WEBPACK_IMPORTED_MODULE_3__.ChartComponent, ng2_charts__WEBPACK_IMPORTED_MODULE_4__.BaseChartDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGFydC13aWRnZXQuY29tcG9uZW50LnNhc3MifQ== */"] });


/***/ }),

/***/ 25636:
/*!*************************************************************!*\
  !*** ./src/app/widget/data-widget/data-widget.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataWidgetComponent": () => (/* binding */ DataWidgetComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 54941);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/progress-bar */ 60833);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 15375);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tabs */ 12379);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/checkbox */ 61534);













function DataWidgetComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-breadcrumb", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const breadscrum_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", breadscrum_r5.title)("items", breadscrum_r5.items)("active_item", breadscrum_r5.active);
} }
function DataWidgetComponent_ng_template_749_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 237);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Sarah Smith ");
} }
function DataWidgetComponent_ng_template_830_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 238);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Jalpa Joshi ");
} }
function DataWidgetComponent_ng_template_911_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 239);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Mark Peter ");
} }
function DataWidgetComponent_div_1281_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 250);
} }
function DataWidgetComponent_div_1281_mat_icon_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 251);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " arrow_downward ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function DataWidgetComponent_div_1281_mat_icon_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 252);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " arrow_upward ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function DataWidgetComponent_div_1281_mat_icon_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { done: a0 }; };
const _c1 = function (a0, a1, a2) { return { "task-low": a0, "task-high": a1, "task-normal": a2 }; };
function DataWidgetComponent_div_1281_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 240);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 241);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-icon", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "drag_indicator");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-checkbox", 243);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function DataWidgetComponent_div_1281_Template_mat_checkbox_change_5_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const task_r6 = restoredCtx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.toggle(task_r6, ctx_r11.sidenav); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, DataWidgetComponent_div_1281_div_6_Template, 1, 0, "div", 244);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 245);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, DataWidgetComponent_div_1281_mat_icon_10_Template, 2, 0, "mat-icon", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, DataWidgetComponent_div_1281_mat_icon_11_Template, 2, 0, "mat-icon", 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, DataWidgetComponent_div_1281_mat_icon_12_Template, 2, 0, "mat-icon", 249);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const task_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", !!task_r6.done);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](8, _c0, task_r6.done));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", task_r6.title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](10, _c1, task_r6.priority == "Low", task_r6.priority == "High", task_r6.priority == "Normal"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (task_r6 == null ? null : task_r6.priority) == "Low");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (task_r6 == null ? null : task_r6.priority) == "High");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (task_r6 == null ? null : task_r6.priority) == "Normal");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", task_r6.priority, " ");
} }
class DataWidgetComponent {
    constructor() {
        this.breadscrums = [
            {
                title: 'Data Widget',
                items: ['Widget'],
                active: 'Data Widget',
            },
        ];
        // TODO start
        this.tasks = [
            {
                id: '1',
                title: 'Submit Science Homework',
                done: true,
                priority: 'High',
            },
            {
                id: '2',
                title: 'Request for festivle holiday',
                done: false,
                priority: 'High',
            },
            {
                id: '3',
                title: 'Order new java book',
                done: false,
                priority: 'Low',
            },
            {
                id: '4',
                title: 'Remind for lunch in hotel',
                done: true,
                priority: 'Normal',
            },
            {
                id: '5',
                title: 'Pay Hostel Fees',
                done: false,
                priority: 'High',
            },
            {
                id: '6',
                title: 'Attend Seminar On Sunday',
                done: false,
                priority: 'Normal',
            },
            {
                id: '7',
                title: 'Renew bus pass',
                done: true,
                priority: 'High',
            },
            {
                id: '8',
                title: 'Issue book in library',
                done: false,
                priority: 'High',
            },
            {
                id: '9',
                title: 'Project report submit',
                done: false,
                priority: 'Low',
            },
        ];
    }
    drop(event) {
        (0,_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__.moveItemInArray)(this.tasks, event.previousIndex, event.currentIndex);
    }
    toggle(task, nav) {
        task.done = !task.done;
    }
    // TODO end
    ngOnInit() { }
}
DataWidgetComponent.ɵfac = function DataWidgetComponent_Factory(t) { return new (t || DataWidgetComponent)(); };
DataWidgetComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DataWidgetComponent, selectors: [["app-data-widget"]], decls: 1401, vars: 2, consts: [[1, "content"], [1, "content-block"], ["class", "block-header", 4, "ngFor", "ngForOf"], [1, "row"], [1, "col-xl-4", "col-lg-4", "col-md-12", "col-sm-12"], [1, "card"], [1, "header"], [1, "tableBody"], [1, "table-responsive"], [1, "table", "table-hover"], ["mode", "determinate", "value", "30", "color", "warn"], ["mode", "determinate", "value", "55"], ["mode", "determinate", "value", "67"], ["mode", "determinate", "value", "70"], ["mode", "determinate", "value", "24", "color", "warn"], ["mode", "determinate", "value", "77"], ["mode", "determinate", "value", "41", "color", "warn"], [1, "col-xs-12", "col-sm-12", "col-md-4", "col-lg-4"], [1, "body"], [1, "doc-file-type"], [1, "list-unstyled", 2, "position", "relative", "max-height", "285px", 3, "perfectScrollbar"], [1, "d-flex", "mb-3"], [1, "msr-3", "align-self-center", "img-icon", "primary-rgba", "text-primary"], [1, "far", "fa-file-word"], [1, "set-flex"], [1, "font-16", "mb-1"], [1, "ms-auto"], [1, "far", "fa-trash-alt", "psr-3"], [1, "far", "fa-arrow-alt-circle-down"], [1, "msr-3", "align-self-center", "img-icon", "success-rgba", "text-success"], [1, "far", "fa-file-excel"], [1, "msr-3", "align-self-center", "img-icon", "danger-rgba", "text-danger"], [1, "far", "fa-file-pdf"], [1, "msr-3", "align-self-center", "img-icon", "info-rgba", "text-info"], [1, "far", "fa-file-archive"], [1, "text-center", "p-t-20"], ["mat-stroked-button", "", "color", "primary"], [1, "card-body"], [1, "list-unstyled", "user-progress", "list-unstyled-border", "list-unstyled-noborder", 2, "position", "relative", "max-height", "335px", 3, "perfectScrollbar"], [1, "lecture-list"], ["alt", "image", "width", "40", "src", "assets/images/user/usrbig1.jpg", 1, "msr-3", "rounded-circle"], [1, "media-title", "font-16"], [1, "text-job", "text-muted", "mb-0"], ["alt", "image", "width", "40", "src", "assets/images/user/usrbig2.jpg", 1, "msr-3", "rounded-circle"], ["alt", "image", "width", "40", "src", "assets/images/user/usrbig3.jpg", 1, "msr-3", "rounded-circle"], ["alt", "image", "width", "40", "src", "assets/images/user/usrbig4.jpg", 1, "msr-3", "rounded-circle"], ["alt", "image", "width", "40", "src", "assets/images/user/usrbig5.jpg", 1, "msr-3", "rounded-circle"], ["alt", "image", "width", "40", "src", "assets/images/user/usrbig6.jpg", 1, "msr-3", "rounded-circle"], [1, "row", "clearfix"], [1, "col-xs-12", "col-sm-12", "col-md-8", "col-lg-8"], [1, "review-block"], [1, "review-img"], ["src", "assets/images/user/user1.jpg", "alt", ""], [1, "col"], [1, "m-b-15"], [1, "float-end", "m-r-10", "text-muted"], [1, "material-icons"], [1, "m-t-15", "m-b-15", "text-muted"], ["href", "#!"], [1, "material-icons", "m-r-10"], [1, "material-icons", "m-r-10", "col-red"], ["src", "assets/images/user/user2.jpg", "alt", ""], [1, "text-center", "m-b-5"], ["href", "#!", 1, "b-b-primary", "text-primary"], [1, "col-md-4", "col-sm-12", "col-12"], [1, "totalEarning"], ["id", "skills", 1, "tab-pane", "body"], [1, "list-unstyled"], [1, "mb-2"], [1, "progress-label"], [1, "float-end", "progress-percent", "label", "label-info", "m-b-5"], [1, "progress", "skill-progress", "m-b-20", "w-100"], ["role", "progressbar", "aria-valuenow", "45", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-green", "width-per-45"], [1, "float-start", "progress-label"], [1, "float-end", "progress-percent", "label", "label-danger", "m-b-5"], ["role", "progressbar", "aria-valuenow", "27", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-purple", "width-per-27"], [1, "float-end", "progress-percent", "label", "label-primary", "m-b-5"], ["role", "progressbar", "aria-valuenow", "25", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-orange", "width-per-25"], [1, "float-end", "progress-percent", "label", "label-success", "m-b-5"], ["role", "progressbar", "aria-valuenow", "18", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-cyan", "width-per-18"], [1, "float-end", "progress-percent", "label", "label-warning", "m-b-5"], ["role", "progressbar", "aria-valuenow", "13", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-red", "width-per-13"], [1, "col-lg-4", "col-md-4", "col-sm-4", "col-xs-12"], [1, "box-part", "text-center"], [1, "fab", "fa-twitter", "fa-3x", "col-blue"], [1, "title", "p-t-15"], [1, "text", "p-b-10"], ["href", "#"], [1, "fab", "fa-instagram", "fa-3x", "col-red"], [1, "fab", "fa-facebook-f", "fa-3x", "col-blue"], [1, "col-xs-12", "col-sm-12", "col-md-6", "col-lg-6"], [1, "assign-style", 2, "position", "relative", "max-height", "400px", 3, "perfectScrollbar"], [1, "feedBody"], [1, "active-feed"], [1, "feed-user-img"], ["src", "assets/images/user/user1.jpg", "alt", "User-Profile-Image", 1, "img-radius"], [1, "feedLblStyle", "lblFileStyle"], [1, "text-muted"], [1, "m-b-15", "m-t-15"], [1, "diactive-feed"], ["src", "assets/images/user/user2.jpg", "alt", "User-Profile-Image", 1, "img-radius"], [1, "feedLblStyle", "lblTaskStyle"], ["src", "assets/images/user/user3.jpg", "alt", "User-Profile-Image", 1, "img-radius"], [1, "feedLblStyle", "lblCommentStyle"], ["src", "assets/images/user/user4.jpg", "alt", "User-Profile-Image", 1, "img-radius"], [1, "feedLblStyle", "lblReplyStyle"], ["src", "assets/images/user/user5.jpg", "alt", "User-Profile-Image", 1, "img-radius"], ["src", "assets/images/user/user6.jpg", "alt", "User-Profile-Image", 1, "img-radius"], [1, "table", "table-hover", "dashboard-task-infos"], [1, "table-img"], [1, "label", "l-bg-green", "shadow-style"], [1, "progress", "shadow-style"], ["role", "progressbar", "aria-valuenow", "62", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-green", "width-per-62"], [1, "label", "l-bg-purple", "shadow-style"], ["role", "progressbar", "aria-valuenow", "40", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-purple", "width-per-40"], ["src", "assets/images/user/user3.jpg", "alt", ""], [1, "label", "l-bg-orange", "shadow-style"], ["role", "progressbar", "aria-valuenow", "72", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-orange", "width-per-72"], ["src", "assets/images/user/user4.jpg", "alt", ""], [1, "label", "l-bg-cyan", "shadow-style"], ["role", "progressbar", "aria-valuenow", "95", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-cyan", "width-per-95"], ["src", "assets/images/user/user5.jpg", "alt", ""], [1, "label", "bg-green", "shadow-style"], ["role", "progressbar", "aria-valuenow", "87", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-green", "width-per-87"], ["id", "new-orders", 1, "media-list", "position-relative", 2, "position", "relative", "max-height", "390px", 3, "perfectScrollbar"], ["id", "new-orders-table", 1, "table", "table-hover", "table-xl", "mb-0"], [1, "border-top-0"], [1, "text-truncate"], [1, "list-unstyled", "order-list"], [1, "avatar", "avatar-sm"], ["src", "assets/images/user/user1.jpg", "alt", "user", 1, "rounded-circle"], ["src", "assets/images/user/user2.jpg", "alt", "user", 1, "rounded-circle"], ["src", "assets/images/user/user3.jpg", "alt", "user", 1, "rounded-circle"], [1, "badge"], ["mat-tab-label", ""], [1, "table-responsive", "mt-3"], [1, "badge", "col-green"], ["role", "progressbar", "aria-valuenow", "72", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-green", "width-per-72"], [1, "badge", "col-red"], ["role", "progressbar", "aria-valuenow", "62", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-red", "width-per-62"], [1, "badge", "col-purple"], [1, "col-lg-6", "col-md-6", "col-sm-6", "col-xs-12"], [1, "card", "profile-header"], [1, "col-lg-4", "col-md-4", "col-12"], [1, "profile-image", "float-md-right"], ["src", "assets/images/user/usrbig6.jpg", "alt", ""], [1, "col-lg-8", "col-md-8", "col-12"], [1, "m-t-0", "m-b-0"], [1, "job_post"], ["type", "button", 1, "btn", "btn-outline-success", "btn-border-radius", "msr-2"], ["type", "button", 1, "btn", "btn-outline-warning", "btn-border-radius"], ["src", "assets/images/user/usrbig1.jpg", "alt", ""], [1, "sl-item", "sl-primary"], [1, "sl-content"], [1, "fa", "fa-user", "position-left"], [1, "sl-item", "sl-danger"], [1, "sl-item", "sl-success"], [1, "sl-item", "sl-warning"], [1, "chat"], [1, "chat-header", "clearfix"], ["src", "assets/images/user/user2.jpg", "alt", "avatar"], [1, "chat-about"], [1, "chat-with"], [1, "chat-num-messages"], ["id", "chat-conversation", 1, "chat-history", 2, "position", "relative", "max-height", "270px", 3, "perfectScrollbar"], [1, "clearfix"], [1, "message-data", "text-end"], [1, "message-data-time"], [1, "message-data-name"], [1, "zmdi", "zmdi-circle", "me"], [1, "message", "other-message", "float-end"], [1, "message-data"], [1, "zmdi", "zmdi-circle", "online"], [1, "message", "my-message"], [1, "chat-message", "clearfix"], [1, "form-group"], [1, "form-line"], [1, "example-full-width"], ["matInput", "", "placeholder", "Enter text here.."], [1, "card-block"], [1, "row", "m-b-20"], [1, "col-auto", "p-r-0"], ["src", "assets/images/posts/post1.jpg", "alt", "user image", 1, "latest-posts-img"], [1, "text-muted", "m-b-5"], [1, "fa", "fa-play-circle-o"], ["src", "assets/images/posts/post2.jpg", "alt", "user image", 1, "latest-posts-img"], ["src", "assets/images/posts/post3.jpg", "alt", "user image", 1, "latest-posts-img"], [1, "text-center"], [1, "recent-comment"], [1, "notice-board"], ["src", "assets/images/user/user6.jpg", "alt", "...", 1, "notice-object"], [1, "notice-body"], [1, "notice-heading", "col-green"], ["src", "assets/images/user/user4.jpg", "alt", "...", 1, "notice-object"], [1, "notice-heading", "color-primary", "col-indigo"], [1, "comment-date"], ["src", "assets/images/user/user3.jpg", "alt", "...", 1, "notice-object"], [1, "notice-heading", "color-danger", "col-cyan"], [1, "notice-board", "no-border"], ["src", "assets/images/user/user7.jpg", "alt", "...", 1, "notice-object"], [1, "notice-heading", "color-info", "col-orange"], [1, "timeline"], [1, "timeline-badge", "primary"], ["src", "assets/images/user/user1.jpg", "alt", "...", 1, "notice-object"], [1, "timeline-panel"], [1, "timeline-heading"], [1, "timeline-title"], [1, "timeline-body"], ["src", "assets/images/user/user2.jpg", "alt", "...", 1, "notice-object"], ["src", "assets/images/user/user8.jpg", "alt", "...", 1, "notice-object"], ["cdkDropList", "", 1, "task-list", 2, "position", "relative", "max-height", "370px", 3, "perfectScrollbar", "cdkDropListDropped"], ["class", "task-box", "cdkDrag", "", 4, "ngFor", "ngForOf"], [1, "table", "table-borderless", "medicine-list"], [1, "mb-3"], [1, "fas", "fa-microscope", "pill-style"], [1, "text-end"], [1, "badge-outline"], [1, "fas", "fa-square-root-alt", "pill-style"], [1, "fas", "fa-palette", "pill-style"], [1, "fas", "fa-business-time", "pill-style"], [1, "fas", "fa-heart", "pill-style"], [1, "fas", "fa-laptop-code", "pill-style"], [1, "fas", "fa-globe-asia", "pill-style"], [1, "plain-card"], [1, "card-inner"], [1, "tx-primary", "m-b-15"], [1, "row", "mb-2"], [1, "col-4"], [1, "font-14"], [1, "material-icons", "col-green"], [1, "material-icons", "col-orange"], [1, "progress", "shadow-style", "mb-2", "mt-3"], ["role", "progressbar", "aria-valuenow", "70", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-green", "width-per-70"], [1, "plain-card", "mt-4"], ["role", "progressbar", "aria-valuenow", "50", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-red", "width-per-50"], [1, "block-header"], [3, "title", "items", "active_item"], ["src", "assets/images/user/user1.jpg", "alt", "user"], ["src", "assets/images/user/user2.jpg", "alt", "user"], ["src", "assets/images/user/user3.jpg", "alt", "user"], ["cdkDrag", "", 1, "task-box"], ["cdkDragHandle", "", 1, "task-handle", "m-r-20"], ["aria-hidden", "false"], ["color", "primary", 1, "m-r-15", 3, "checked", "change"], ["class", "task-custom-placeholder", 4, "cdkDragPlaceholder"], ["matTooltip", "Title", 3, "ngClass"], [3, "ngClass"], ["matTooltip", "Low", "aria-hidden", "false", "class", "lbl-low", 4, "ngIf"], ["matTooltip", "High", "aria-hidden", "false", "class", "lbl-high", 4, "ngIf"], ["matTooltip", "Normal", "aria-hidden", "false", "class", "lbl-normal", 4, "ngIf"], [1, "task-custom-placeholder"], ["matTooltip", "Low", "aria-hidden", "false", 1, "lbl-low"], ["matTooltip", "High", "aria-hidden", "false", 1, "lbl-high"], ["matTooltip", "Normal", "aria-hidden", "false", 1, "lbl-normal"]], template: function DataWidgetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DataWidgetComponent_div_2_Template, 2, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Your Progress");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "table", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Subject");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Progress");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Duration");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Chemistry");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "30%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "mat-progress-bar", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "2 Months");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Mathematics");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "55%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "mat-progress-bar", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "3 Months");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Painting");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "67%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "mat-progress-bar", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "1 Months");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Business studies");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "70%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "mat-progress-bar", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "2 Months");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Biology");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "24%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "mat-progress-bar", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "3 Months");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Computer studies");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "77%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "mat-progress-bar", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "4 Months");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "Geography");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "41%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "mat-progress-bar", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "2 Months");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "Assignments");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "ul", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](87, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "h5", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "Java Programming");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, ".doc, 4.3 MB");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](95, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](96, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](99, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "h5", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, "Angular Theory");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, ".xls, 2.5 MB");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](107, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](108, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](111, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "h5", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](114, "Maths Sums Solution");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, ".pdf, 10.5 MB");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](119, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](120, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](123, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "h5", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](126, "Submit Science Journal");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](128, ".zip, 53.2 MB");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](131, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](132, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](135, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "h5", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](138, "Marketing Instructions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](140, ".doc, 5.3 MB");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](143, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](144, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](147, "Report Adverse Effect");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](152, " Upcomming Class ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "ul", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "li", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](156, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](159, "Cara Stevens");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](161, "Mathematics");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](164, "12 June '20");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](166, "09:00-10:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](167, "li", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](168, "img", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](171, "Airi Satou");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](172, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](173, "Computer Studies");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](174, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](175, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](176, "13 June '20");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](177, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](178, "11:00-12:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "li", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](180, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](181, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](183, "Jens Brincker");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](184, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](185, "Geography");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](186, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](187, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](188, "15 June '20");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](189, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](190, "09:30-10:30");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](191, "li", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](192, "img", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](193, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](194, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](195, "Angelica Ramos");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](196, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](197, "Chemistry");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](198, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](199, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](200, "16 June '20");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](201, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](202, "14:00-15:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](203, "li", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](204, "img", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](205, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](206, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](207, "Cara Stevens");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](208, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](209, "Painting");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](210, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](211, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](212, "18 June '20");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](213, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](214, "11:00-12:30");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](215, "li", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](216, "img", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](217, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](218, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](219, "Jacob Ryan");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](220, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](221, "Business Studies");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](222, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](223, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](224, "22 June '20");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](225, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](226, "13:00-14:15");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](227, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](228, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](229, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](230, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](231, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](232, "Customer Review");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](233, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](234, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](235, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](236, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](237, "img", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](238, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](239, "h6", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](240, "Alis Smith ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](241, "span", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](242, " a week ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](243, "i", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](244, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](245, "i", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](246, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](247, "i", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](248, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](249, "i", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](250, "star_half");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](251, "i", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](252, "star_border");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](253, "p", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](254, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel rutrum ex, at ornare mi. In quis scelerisque dui, eget rhoncus orci. Fusce et sodales ipsum. Nam id nunc euismod, aliquet arcu quis, mattis nisi.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](255, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](256, "i", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](257, "thumb_up");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](258, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](259, "i", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](260, "thumb_down");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](261, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](262, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](263, "img", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](264, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](265, "h6", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](266, "John Dio ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](267, "span", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](268, " a week ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](269, "i", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](270, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](271, "i", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](272, "star_half");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](273, "i", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](274, "star_border");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](275, "i", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](276, "star_border");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](277, "i", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](278, "star_border");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](279, "p", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](280, "Nam quis ligula est. Nunc sed risus non turpis tristique tempor. Ut sollicitudin faucibus magna nec gravida. Suspendisse ullamcorper justo vel porta imperdiet. Nunc nec ipsum vel augue placerat faucibus. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](281, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](282, "i", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](283, "thumb_up");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](284, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](285, "i", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](286, "thumb_down");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](287, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](288, "a", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](289, "View all Customer Reviews");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](290, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](291, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](292, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](293, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](294, "Earning Source");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](295, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](296, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](297, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](298, "$90,808");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](299, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](300, "ul", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](301, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](302, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](303, "span", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](304, "envato.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](305, "span", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](306, "17%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](307, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](308, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](309, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](310, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](311, "span", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](312, "google.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](313, "span", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](314, "27%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](315, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](316, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](317, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](318, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](319, "span", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](320, "yahoo.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](321, "span", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](322, "25%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](323, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](324, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](325, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](326, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](327, "span", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](328, "store");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](329, "span", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](330, "18%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](331, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](332, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](333, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](334, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](335, "span", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](336, "Others");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](337, "span", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](338, "13%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](339, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](340, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](341, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](342, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](343, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](344, "i", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](345, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](346, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](347, "Twitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](348, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](349, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](350, "Lorem ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te sed. Elitr scripta ocurreret qui ad.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](351, "a", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](352, "Learn More");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](353, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](354, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](355, "i", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](356, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](357, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](358, "Instagram");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](359, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](360, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](361, "Lorem ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te sed. Elitr scripta ocurreret qui ad.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](362, "a", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](363, "Learn More");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](364, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](365, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](366, "i", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](367, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](368, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](369, "Facebook");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](370, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](371, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](372, "Lorem ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te sed. Elitr scripta ocurreret qui ad.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](373, "a", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](374, "Learn More");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](375, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](376, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](377, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](378, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](379, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](380, "Activity");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](381, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](382, "div", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](383, "ul", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](384, "li", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](385, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](386, "img", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](387, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](388, "span", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](389, "File");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](390, " Sarah Smith ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](391, "small", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](392, "6 hours ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](393, "p", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](394, " hii John, I have upload doc related to task. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](395, "li", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](396, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](397, "img", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](398, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](399, "span", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](400, "Task ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](401, " Jalpa Joshi ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](402, "small", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](403, "5 hours ago ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](404, "p", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](405, " Please do as specify. Let me know if you have any query. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](406, "li", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](407, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](408, "img", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](409, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](410, "span", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](411, "comment");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](412, " Lina Smith ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](413, "small", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](414, "6 hours ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](415, "p", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](416, " Hey, How are you?? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](417, "li", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](418, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](419, "img", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](420, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](421, "span", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](422, "Reply");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](423, " Jacob Ryan ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](424, "small", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](425, "7 hours ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](426, "p", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](427, " I am fine. You?? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](428, "li", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](429, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](430, "img", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](431, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](432, "span", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](433, "File");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](434, " Sarah Smith ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](435, "small", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](436, "6 hours ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](437, "p", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](438, " hii John, I have upload doc related to task. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](439, "li", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](440, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](441, "img", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](442, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](443, "span", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](444, "Task ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](445, " Jalpa Joshi ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](446, "small", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](447, "5 hours ago ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](448, "p", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](449, " Please do as specify. Let me know if you have any query. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](450, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](451, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](452, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](453, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](454, "Assign Task");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](455, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](456, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](457, "table", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](458, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](459, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](460, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](461, "User");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](462, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](463, "Task");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](464, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](465, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](466, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](467, "Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](468, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](469, "Progress");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](470, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](471, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](472, "td", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](473, "img", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](474, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](475, "Task A");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](476, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](477, "span", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](478, "Doing");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](479, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](480, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](481, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](482, "div", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](483, "div", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](484, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](485, "td", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](486, "img", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](487, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](488, "Task B");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](489, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](490, "span", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](491, "To Do");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](492, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](493, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](494, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](495, "div", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](496, "div", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](497, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](498, "td", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](499, "img", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](500, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](501, "Task C");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](502, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](503, "span", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](504, "On Hold");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](505, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](506, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](507, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](508, "div", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](509, "div", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](510, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](511, "td", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](512, "img", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](513, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](514, "Task D");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](515, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](516, "span", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](517, "Wait Approvel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](518, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](519, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](520, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](521, "div", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](522, "div", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](523, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](524, "td", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](525, "img", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](526, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](527, "Task E");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](528, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](529, "span", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](530, "Suspended");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](531, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](532, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](533, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](534, "div", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](535, "div", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](536, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](537, "td", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](538, "img", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](539, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](540, "Task A");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](541, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](542, "span", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](543, "Doing");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](544, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](545, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](546, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](547, "div", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](548, "div", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](549, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](550, "td", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](551, "img", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](552, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](553, "Task B");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](554, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](555, "span", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](556, "To Do");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](557, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](558, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](559, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](560, "div", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](561, "div", 114);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](562, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](563, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](564, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](565, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](566, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](567, "New Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](568, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](569, "div", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](570, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](571, "table", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](572, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](573, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](574, "th", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](575, "Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](576, "th", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](577, "Customers");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](578, "th", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](579, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](580, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](581, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](582, "td", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](583, "iPhone X");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](584, "td", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](585, "ul", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](586, "li", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](587, "img", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](588, "li", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](589, "img", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](590, "li", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](591, "img", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](592, "li", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](593, "span", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](594, "+4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](595, "td", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](596, "$8999");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](597, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](598, "td", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](599, "Pixel 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](600, "td", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](601, "ul", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](602, "li", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](603, "img", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](604, "li", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](605, "img", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](606, "li", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](607, "img", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](608, "li", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](609, "span", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](610, "+4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](611, "td", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](612, "$5550");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](613, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](614, "td", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](615, "OnePlus");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](616, "td", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](617, "ul", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](618, "li", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](619, "img", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](620, "li", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](621, "img", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](622, "li", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](623, "img", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](624, "li", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](625, "span", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](626, "+4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](627, "td", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](628, "$9000");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](629, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](630, "td", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](631, "Galaxy");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](632, "td", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](633, "ul", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](634, "li", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](635, "img", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](636, "li", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](637, "img", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](638, "li", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](639, "img", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](640, "li", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](641, "span", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](642, "+4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](643, "td", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](644, "$7500");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](645, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](646, "td", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](647, "Moto Z2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](648, "td", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](649, "ul", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](650, "li", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](651, "img", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](652, "li", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](653, "img", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](654, "li", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](655, "img", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](656, "li", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](657, "span", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](658, "+4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](659, "td", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](660, "$8500");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](661, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](662, "td", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](663, "iPhone X");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](664, "td", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](665, "ul", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](666, "li", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](667, "img", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](668, "li", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](669, "img", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](670, "li", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](671, "img", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](672, "li", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](673, "span", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](674, "+4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](675, "td", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](676, "$8999");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](677, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](678, "td", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](679, "iPhone X");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](680, "td", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](681, "ul", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](682, "li", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](683, "img", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](684, "li", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](685, "img", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](686, "li", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](687, "img", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](688, "li", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](689, "span", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](690, "+4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](691, "td", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](692, "$8999");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](693, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](694, "td", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](695, "Pixel 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](696, "td", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](697, "ul", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](698, "li", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](699, "img", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](700, "li", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](701, "img", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](702, "li", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](703, "img", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](704, "li", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](705, "span", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](706, "+4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](707, "td", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](708, "$5550");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](709, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](710, "td", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](711, "OnePlus");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](712, "td", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](713, "ul", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](714, "li", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](715, "img", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](716, "li", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](717, "img", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](718, "li", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](719, "img", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](720, "li", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](721, "span", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](722, "+4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](723, "td", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](724, "$9000");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](725, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](726, "td", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](727, "Galaxy");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](728, "td", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](729, "ul", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](730, "li", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](731, "img", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](732, "li", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](733, "img", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](734, "li", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](735, "img", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](736, "li", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](737, "span", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](738, "+4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](739, "td", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](740, "$7500");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](741, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](742, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](743, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](744, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](745, "Task List");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](746, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](747, "mat-tab-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](748, "mat-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](749, DataWidgetComponent_ng_template_749_Template, 2, 0, "ng-template", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](750, "div", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](751, "table", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](752, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](753, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](754, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](755, "Task");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](756, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](757, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](758, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](759, "Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](760, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](761, "Progress");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](762, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](763, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](764, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](765, "Task C");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](766, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](767, "span", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](768, "Completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](769, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](770, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](771, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](772, "div", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](773, "div", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](774, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](775, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](776, "Task A");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](777, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](778, "span", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](779, "On Process");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](780, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](781, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](782, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](783, "div", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](784, "div", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](785, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](786, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](787, "Task B");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](788, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](789, "span", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](790, "On Hold");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](791, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](792, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](793, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](794, "div", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](795, "div", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](796, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](797, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](798, "Task D");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](799, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](800, "span", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](801, "Completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](802, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](803, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](804, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](805, "div", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](806, "div", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](807, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](808, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](809, "Task E");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](810, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](811, "span", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](812, "On Hold");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](813, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](814, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](815, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](816, "div", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](817, "div", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](818, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](819, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](820, "Task F");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](821, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](822, "span", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](823, "On Hold");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](824, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](825, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](826, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](827, "div", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](828, "div", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](829, "mat-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](830, DataWidgetComponent_ng_template_830_Template, 2, 0, "ng-template", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](831, "div", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](832, "table", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](833, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](834, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](835, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](836, "Task");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](837, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](838, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](839, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](840, "Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](841, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](842, "Progress");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](843, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](844, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](845, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](846, "Task D");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](847, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](848, "span", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](849, "On Process");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](850, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](851, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](852, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](853, "div", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](854, "div", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](855, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](856, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](857, "Task E");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](858, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](859, "span", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](860, "On Hold");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](861, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](862, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](863, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](864, "div", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](865, "div", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](866, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](867, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](868, "Task F");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](869, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](870, "span", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](871, "Completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](872, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](873, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](874, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](875, "div", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](876, "div", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](877, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](878, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](879, "Task G");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](880, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](881, "span", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](882, "On Process");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](883, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](884, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](885, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](886, "div", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](887, "div", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](888, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](889, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](890, "Task K");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](891, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](892, "span", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](893, "On Hold");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](894, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](895, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](896, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](897, "div", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](898, "div", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](899, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](900, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](901, "Task M");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](902, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](903, "span", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](904, "On Process");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](905, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](906, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](907, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](908, "div", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](909, "div", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](910, "mat-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](911, DataWidgetComponent_ng_template_911_Template, 2, 0, "ng-template", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](912, "div", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](913, "table", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](914, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](915, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](916, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](917, "Task");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](918, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](919, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](920, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](921, "Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](922, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](923, "Progress");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](924, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](925, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](926, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](927, "Task E");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](928, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](929, "span", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](930, "On Hold");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](931, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](932, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](933, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](934, "div", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](935, "div", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](936, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](937, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](938, "Task D");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](939, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](940, "span", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](941, "On Process");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](942, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](943, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](944, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](945, "div", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](946, "div", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](947, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](948, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](949, "Task F");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](950, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](951, "span", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](952, "Completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](953, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](954, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](955, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](956, "div", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](957, "div", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](958, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](959, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](960, "Task L");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](961, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](962, "span", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](963, "On Process");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](964, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](965, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](966, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](967, "div", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](968, "div", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](969, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](970, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](971, "Task H");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](972, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](973, "span", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](974, "On Hold");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](975, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](976, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](977, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](978, "div", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](979, "div", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](980, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](981, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](982, "Task L");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](983, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](984, "span", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](985, "On Process");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](986, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](987, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](988, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](989, "div", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](990, "div", 139);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](991, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](992, "div", 141);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](993, "div", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](994, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](995, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](996, "div", 143);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](997, "div", 144);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](998, "img", 145);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](999, "div", 146);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1000, "h4", 147);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1001, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1002, "Sarah");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1003, " Smith");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1004, "span", 148);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1005, "Java Develper");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1006, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1007, "102, Svayam Appartment, new P.L. road, Rajkot-369852");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1008, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1009, "button", 149);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1010, "Follow");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1011, "button", 150);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1012, "Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1013, "div", 141);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1014, "div", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1015, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1016, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1017, "div", 143);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1018, "div", 144);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1019, "img", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1020, "div", 146);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1021, "h4", 147);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1022, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1023, "Sarah");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1024, " Smith");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1025, "span", 148);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1026, "Java Develper");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1027, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1028, "102, Svayam Appartment, new P.L. road, Rajkot-369852");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1029, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1030, "button", 149);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1031, "Follow");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1032, "button", 150);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1033, "Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1034, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1035, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1036, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1037, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1038, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1039, "Recent Activities");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1040, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1041, "div", 152);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1042, "div", 153);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1043, "small", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1044, "i", 154);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1045, " 5 mins ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1046, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1047, "Lorem ipsum dolor sit amet conse ctetur which ascing elit users.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1048, "div", 155);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1049, "div", 153);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1050, "small", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1051, "i", 154);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1052, " 8 mins ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1053, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1054, "Lorem ipsum dolor sit ametcon the sectetur that ascing elit users.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1055, "div", 156);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1056, "div", 153);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1057, "small", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1058, "i", 154);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1059, " 10 mins ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1060, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1061, "Lorem ipsum dolor sit amet cons the ecte tur and adip ascing elit users.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1062, "div", 157);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1063, "div", 153);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1064, "small", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1065, "i", 154);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1066, " 12 mins ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1067, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1068, "Lorem ipsum dolor sit amet consec tetur adip ascing elit users.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1069, "div", 152);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1070, "div", 153);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1071, "small", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1072, "i", 154);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1073, " 5 mins ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1074, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1075, "Lorem ipsum dolor sit amet conse ctetur which ascing elit users.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1076, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1077, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1078, "div", 158);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1079, "div", 159);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1080, "img", 160);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1081, "div", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1082, "div", 162);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1083, "Aiden Chavez");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1084, "div", 163);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1085, "2 new messages");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1086, "div", 164);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1087, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1088, "li", 165);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1089, "div", 166);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1090, "span", 167);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1091, "10:10 AM, Today");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1092, " \u00A0 \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1093, "span", 168);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1094, "Michael");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1095, "i", 169);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1096, "div", 170);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1097, " Hi Aiden, how are you? How is the project coming along? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1098, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1099, "div", 171);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1100, "span", 168);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1101, "i", 172);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1102, " Aiden");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1103, "span", 167);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1104, "10:12 AM, Today");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1105, "div", 173);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1106, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1107, "Are we meeting today? Project has been already finished and I have results to show you.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1108, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1109, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1110, "div", 171);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1111, "span", 168);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1112, "i", 172);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1113, " Aiden");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1114, "span", 167);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1115, "10:12 AM, Today");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1116, "div", 173);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1117, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1118, "Are we meeting today? Project has been already finished and I have results to show you.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1119, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1120, "li", 165);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1121, "div", 166);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1122, "span", 167);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1123, "10:10 AM, Today");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1124, " \u00A0 \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1125, "span", 168);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1126, "Michael");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1127, "i", 169);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1128, "div", 170);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1129, " Hi Aiden, how are you? How is the project coming along? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1130, "div", 174);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1131, "div", 175);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1132, "div", 176);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1133, "mat-form-field", 177);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1134, "input", 178);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1135, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1136, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1137, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1138, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1139, "Latest Posts");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1140, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1141, "div", 179);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1142, "div", 180);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1143, "div", 181);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1144, "img", 182);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1145, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1146, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1147, "About Something");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1148, "p", 183);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1149, "i", 184);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1150, " Video | 10 minutes ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1151, "p", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1152, "Lorem Ipsum is simply dummy text of the.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1153, "div", 180);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1154, "div", 181);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1155, "img", 185);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1156, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1157, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1158, "Relationship");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1159, "p", 183);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1160, "i", 184);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1161, " Video | 24 minutes ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1162, "p", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1163, "Lorem Ipsum is simply dummy text of the.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1164, "div", 180);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1165, "div", 181);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1166, "img", 186);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1167, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1168, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1169, "Human body");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1170, "p", 183);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1171, "i", 184);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1172, " Video | 53 minutes ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1173, "p", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1174, "Lorem Ipsum is simply dummy text of the.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1175, "div", 187);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1176, "a", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1177, "View All Posts");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1178, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1179, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1180, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1181, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1182, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1183, "Notice Board");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1184, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1185, "div", 188);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1186, "div", 189);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1187, "div", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1188, "img", 190);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1189, "div", 191);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1190, "h5", 192);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1191, "Airi Satou");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1192, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1193, "Lorem ipsum dolor sit amet, id quo eruditi eloquentiam.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1194, "small", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1195, "7 hours ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1196, "div", 189);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1197, "div", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1198, "img", 193);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1199, "div", 191);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1200, "h5", 194);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1201, "Sarah Smith");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1202, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1203, "Lorem ipsum dolor sit amet, id quo eruditi eloquentiam.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1204, "p", 195);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1205, "1 hour ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1206, "div", 189);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1207, "div", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1208, "img", 196);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1209, "div", 191);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1210, "h5", 197);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1211, "Cara Stevens");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1212, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1213, "Lorem ipsum dolor sit amet, id quo eruditi eloquentiam.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1214, "div", 195);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1215, "Yesterday");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1216, "div", 198);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1217, "div", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1218, "img", 199);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1219, "div", 191);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1220, "h5", 200);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1221, "Ashton Cox");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1222, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1223, "Lorem ipsum dolor sit amet, id quo eruditi eloquentiam.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1224, "div", 195);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1225, "Yesterday");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1226, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1227, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1228, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1229, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1230, "Recent Activity");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1231, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1232, "ul", 201);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1233, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1234, "div", 202);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1235, "img", 203);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1236, "div", 204);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1237, "div", 205);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1238, "h5", 206);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1239, "Lorem ipsum dolor sit amet, id quo eruditi.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1240, "div", 207);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1241, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1242, "5 minutes ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1243, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1244, "div", 202);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1245, "img", 208);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1246, "div", 204);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1247, "div", 205);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1248, "h5", 206);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1249, "Lorem ipsum dolor sit amet, id quo eruditi.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1250, "div", 207);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1251, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1252, "10 minutes ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1253, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1254, "div", 202);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1255, "img", 209);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1256, "div", 204);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1257, "div", 205);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1258, "h5", 206);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1259, "Lorem ipsum dolor sit amet, id quo eruditi.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1260, "div", 207);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1261, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1262, "20 minutes ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1263, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1264, "div", 202);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1265, "img", 193);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1266, "div", 204);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1267, "div", 205);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1268, "h5", 206);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1269, "Lorem ipsum dolor sit amet, id quo eruditi.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1270, "div", 207);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1271, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1272, "35 minutes ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1273, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1274, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1275, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1276, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1277, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1278, "Todo List");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1279, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1280, "div", 210);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("cdkDropListDropped", function DataWidgetComponent_Template_div_cdkDropListDropped_1280_listener($event) { return ctx.drop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1281, DataWidgetComponent_div_1281_Template, 14, 14, "div", 211);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1282, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1283, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1284, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1285, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1286, "Lecture In Week");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1287, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1288, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1289, "table", 212);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1290, "tr", 213);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1291, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1292, "i", 214);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1293, " Chemistry");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1294, "td", 215);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1295, "span", 216);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1296, "M - W - F -");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1297, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1298, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1299, "i", 217);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1300, " Mathematics");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1301, "td", 215);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1302, "span", 216);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1303, "- T - T - S");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1304, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1305, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1306, "i", 218);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1307, " Painting");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1308, "td", 215);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1309, "span", 216);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1310, "M - - T - S");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1311, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1312, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1313, "i", 219);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1314, " Business Studies");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1315, "td", 215);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1316, "span", 216);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1317, "M - W T - -");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1318, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1319, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1320, "i", 220);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1321, " Biology");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1322, "td", 215);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1323, "span", 216);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1324, "M - W - F -");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1325, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1326, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1327, "i", 221);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1328, " Computer Studies");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1329, "td", 215);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1330, "span", 216);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1331, "M - - T - S");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1332, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1333, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1334, "i", 222);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1335, " Geography");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1336, "td", 215);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1337, "span", 216);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1338, "M - W - F S");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1339, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1340, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1341, "View More");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1342, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1343, "div", 223);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1344, "div", 224);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1345, "h6", 225);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1346, "New Admission Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1347, "div", 226);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1348, "div", 227);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1349, "label", 228);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1350, "Today");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1351, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1352, "105");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1353, "i", 229);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1354, "trending_up");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1355, "div", 227);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1356, "label", 228);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1357, "This Week");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1358, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1359, "425");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1360, "i", 230);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1361, "trending_down");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1362, "div", 227);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1363, "label", 228);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1364, "This Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1365, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1366, "867");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1367, "i", 229);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1368, "trending_up");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1369, "div", 231);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1370, "div", 232);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1371, "70%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1372, "div", 233);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1373, "div", 224);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1374, "h6", 225);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1375, "Fees Collection Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1376, "div", 226);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1377, "div", 227);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1378, "label", 228);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1379, "Today");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1380, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1381, "$107");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1382, "i", 230);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1383, "trending_down");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1384, "div", 227);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1385, "label", 228);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1386, "This Week");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1387, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1388, "$268");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1389, "i", 229);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1390, "trending_up");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1391, "div", 227);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1392, "label", 228);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1393, "This Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1394, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1395, "$847");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1396, "i", 230);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1397, "trending_down");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1398, "div", 231);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1399, "div", 234);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1400, "50%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.breadscrums);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1279);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.tasks);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__.MatProgressBar, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__.PerfectScrollbarDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__.MatTab, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__.MatTabLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__.CdkDropList, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__.CdkDrag, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__.CdkDragHandle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__.MatCheckbox, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__.CdkDragPlaceholder, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXRhLXdpZGdldC5jb21wb25lbnQuc2FzcyJ9 */"] });


/***/ }),

/***/ 28389:
/*!*************************************************!*\
  !*** ./src/app/widget/widget-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WidgetRoutingModule": () => (/* binding */ WidgetRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _chart_widget_chart_widget_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chart-widget/chart-widget.component */ 36897);
/* harmony import */ var _data_widget_data_widget_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data-widget/data-widget.component */ 25636);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);





const routes = [
    {
        path: '',
        redirectTo: 'chart-widget',
        pathMatch: 'full'
    },
    {
        path: 'chart-widget',
        component: _chart_widget_chart_widget_component__WEBPACK_IMPORTED_MODULE_0__.ChartWidgetComponent
    },
    {
        path: 'data-widget',
        component: _data_widget_data_widget_component__WEBPACK_IMPORTED_MODULE_1__.DataWidgetComponent
    }
];
class WidgetRoutingModule {
}
WidgetRoutingModule.ɵfac = function WidgetRoutingModule_Factory(t) { return new (t || WidgetRoutingModule)(); };
WidgetRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: WidgetRoutingModule });
WidgetRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](WidgetRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 88503:
/*!*****************************************!*\
  !*** ./src/app/widget/widget.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WidgetModule": () => (/* binding */ WidgetModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 15375);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _widget_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./widget-routing.module */ 28389);
/* harmony import */ var _chart_widget_chart_widget_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chart-widget/chart-widget.component */ 36897);
/* harmony import */ var _data_widget_data_widget_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data-widget/data-widget.component */ 25636);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-apexcharts */ 20054);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng2-charts */ 53808);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 54941);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/checkbox */ 61534);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/progress-bar */ 60833);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/tabs */ 12379);
/* harmony import */ var _shared_components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/components/components.module */ 15626);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);


















class WidgetModule {
}
WidgetModule.ɵfac = function WidgetModule_Factory(t) { return new (t || WidgetModule)(); };
WidgetModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: WidgetModule });
WidgetModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _widget_routing_module__WEBPACK_IMPORTED_MODULE_0__.WidgetRoutingModule,
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__.PerfectScrollbarModule,
            ng_apexcharts__WEBPACK_IMPORTED_MODULE_7__.NgApexchartsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInputModule,
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_11__.DragDropModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIconModule,
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__.MatCheckboxModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButtonModule,
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__.MatProgressBarModule,
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__.MatTabsModule,
            ng2_charts__WEBPACK_IMPORTED_MODULE_17__.ChartsModule,
            _shared_components_components_module__WEBPACK_IMPORTED_MODULE_3__.ComponentsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](WidgetModule, { declarations: [_chart_widget_chart_widget_component__WEBPACK_IMPORTED_MODULE_1__.ChartWidgetComponent, _data_widget_data_widget_component__WEBPACK_IMPORTED_MODULE_2__.DataWidgetComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _widget_routing_module__WEBPACK_IMPORTED_MODULE_0__.WidgetRoutingModule,
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__.PerfectScrollbarModule,
        ng_apexcharts__WEBPACK_IMPORTED_MODULE_7__.NgApexchartsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInputModule,
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_11__.DragDropModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIconModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__.MatCheckboxModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButtonModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__.MatProgressBarModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__.MatTabsModule,
        ng2_charts__WEBPACK_IMPORTED_MODULE_17__.ChartsModule,
        _shared_components_components_module__WEBPACK_IMPORTED_MODULE_3__.ComponentsModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_widget_widget_module_ts.js.map