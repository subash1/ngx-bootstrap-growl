"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var bootstrap_growl_component_1 = require("./bootstrap-growl.component");
var bootstrap_growl_service_1 = require("./bootstrap-growl.service");
var common_1 = require("@angular/common");
var BootstrapGrowlModule = /** @class */ (function () {
    function BootstrapGrowlModule() {
    }
    BootstrapGrowlModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        common_1.CommonModule
                    ],
                    declarations: [
                        bootstrap_growl_component_1.BootstrapGrowlComponent
                    ],
                    providers: [
                        bootstrap_growl_service_1.BootstrapGrowlService
                    ],
                    exports: [
                        bootstrap_growl_component_1.BootstrapGrowlComponent
                    ],
                    schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
                },] },
    ];
    /** @nocollapse */
    BootstrapGrowlModule.ctorParameters = function () { return []; };
    return BootstrapGrowlModule;
}());
exports.BootstrapGrowlModule = BootstrapGrowlModule;
//# sourceMappingURL=bootstrap-growl.module.js.map