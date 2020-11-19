"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TemperatureCalc = /** @class */ (function () {
    function TemperatureCalc(temperature) {
        this.temperature = temperature;
    }
    TemperatureCalc.prototype.calculator = function (scale) {
        if (scale === 'fahrenheit') {
            return (this.temperature * 9 / 5) + 32;
        }
        else if (scale === 'celsius') {
            return (this.temperature - 32) * 5 / 9;
        }
        else {
            return 0;
        }
    };
    return TemperatureCalc;
}());
exports.default = TemperatureCalc;
