var Orang = /** @class */ (function () {
    function Orang(nama, umur) {
        this.nama = nama;
        this.umur = umur;
    }
    Orang.prototype.sapa = function () {
        console.log("Hallo , nama saya ".concat(this.nama, " dan saya ").concat(this.nama, " tahun"));
    };
    return Orang;
}());
var orang1 = new Orang("Keti", 22);
orang1.sapa();
