"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var bootstrap_alert_type_enum_1 = require("./bootstrap-alert-type.enum");
var rxjs_1 = require("rxjs");
var BootstrapGrowlService = /** @class */ (function () {
    function BootstrapGrowlService() {
        this.alerts = new rxjs_1.Subject();
        this.alertHolder = new Array();
        this.alertCount = 999;
        this.autoClose = -1;
    }
    BootstrapGrowlService.prototype.configure = function (alertCount, autoClose) {
        if (typeof alertCount !== "undefined" && alertCount !== null) {
            if (!isNaN(alertCount) && alertCount > 0) {
                this.alertCount = alertCount;
            }
            else {
                console.error("parameter alertCount must be a valid number > 0, to leave default, do not provide this parameter");
            }
        }
        if (typeof autoClose !== "undefined" && autoClose !== null) {
            if (!isNaN(autoClose) && autoClose > 0) {
                this.autoClose = autoClose;
            }
            else {
                console.error("parameter autoClose must be a valid number > 0, to leave default, do not provide this parameter");
            }
        }
    };
    BootstrapGrowlService.prototype.addAlert = function (message, type, autoClose, dismissable) {
        if (this.alertHolder.length >= this.alertCount) {
            // remove the oldest alert
            this._removeAlertById(0, this.alertHolder, this.alerts);
        }
        if (typeof dismissable === "undefined" || dismissable === null) {
            dismissable = true;
        }
        var cssType = this._convertTypeToCssClass(type);
        var alert = { message: message, type: cssType, dismissable: dismissable };
        this.alertHolder.push(alert);
        this.alerts.next(this.alertHolder);
        if (autoClose && autoClose > -1) {
            this._scheduleAlertHide(autoClose, alert);
        }
        else if (this.autoClose > -1) {
            this._scheduleAlertHide(this.autoClose, alert);
        }
    };
    BootstrapGrowlService.prototype.removeAlert = function (alert) {
        this._removeAlert(alert, this.alertHolder, this.alerts);
    };
    BootstrapGrowlService.prototype._removeAlert = function (alert, alertHolder, alerts) {
        var index = alertHolder.indexOf(alert);
        this._removeAlertById(index, alertHolder, alerts);
    };
    BootstrapGrowlService.prototype._scheduleAlertHide = function (timeout, alert) {
        var _this = this;
        var displayTimeout = rxjs_1.Observable.timer(timeout);
        displayTimeout.subscribe(function () {
            _this._removeAlert(alert, _this.alertHolder, _this.alerts);
        });
    };
    BootstrapGrowlService.prototype._convertTypeToCssClass = function (type) {
        if (type === bootstrap_alert_type_enum_1.BootstrapAlertType.SUCCESS) {
            return "success";
        }
        else if (type === bootstrap_alert_type_enum_1.BootstrapAlertType.INFO) {
            return "info";
        }
        else if (type === bootstrap_alert_type_enum_1.BootstrapAlertType.WARNING) {
            return "warning";
        }
        else if (type === bootstrap_alert_type_enum_1.BootstrapAlertType.DANGER) {
            return "danger";
        }
    };
    BootstrapGrowlService.prototype._removeAlertById = function (id, alertHolder, alerts) {
        alertHolder.splice(id, 1);
        alerts.next(alertHolder);
    };
    BootstrapGrowlService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    BootstrapGrowlService.ctorParameters = function () { return []; };
    return BootstrapGrowlService;
}());
exports.BootstrapGrowlService = BootstrapGrowlService;
//# sourceMappingURL=bootstrap-growl.service.js.map