"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Kendaraan = void 0;
var Kendaraan = /** @class */ (function () {
    function Kendaraan(merk) {
        this.merk = merk;
    }
    Kendaraan.prototype.info = function () {
        console.log("Kendaraan ".concat(this.merk));
    };
    return Kendaraan;
}());
exports.Kendaraan = Kendaraan;
