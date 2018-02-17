"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var bootstrap_growl_service_1 = require("./bootstrap-growl.service");
var BootstrapGrowlComponent = /** @class */ (function () {
    function BootstrapGrowlComponent(growlService) {
        this.growlService = growlService;
    }
    BootstrapGrowlComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.growlService.configure(this.alertCount, this.autoClose);
        this.growlService.alerts.subscribe(function (alerts) {
            _this.alerts = alerts;
        });
    };
    BootstrapGrowlComponent.prototype.closeAlert = function (alert) {
        // service is automatically notified!
        if (alert.dismissable) {
            this.growlService.removeAlert(alert);
        }
    };
    BootstrapGrowlComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: "bootstrap-growl",
                    template: "<div *ngFor=\"let alert of alerts\">\n        <div class=\"alert alert-{{alert.type}}\" [ngClass]=\"{'alert-dismissible': alert.dismissable}\" role=\"alert\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"alert\" (click)=\"closeAlert(alert)\" *ngIf=\"alert.dismissable\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n          <span [innerHtml]=\"alert.message\"></span>\n        </div>\n    </div>"
                },] },
    ];
    /** @nocollapse */
    BootstrapGrowlComponent.ctorParameters = function () { return [
        { type: bootstrap_growl_service_1.BootstrapGrowlService, },
    ]; };
    BootstrapGrowlComponent.propDecorators = {
        'alertCount': [{ type: core_1.Input },],
        'autoClose': [{ type: core_1.Input },],
    };
    return BootstrapGrowlComponent;
}());
exports.BootstrapGrowlComponent = BootstrapGrowlComponent;
//# sourceMappingURL=bootstrap-growl.component.js.map