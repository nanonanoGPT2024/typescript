var Orang = /** @class */ (function () {
    function Orang(nama, umur) {
        this.nama = nama;
        this.umur = umur;
    }
    Orang.prototype.sapa = function () {
        console.log("Hallo , nama sata ".concat(this.nama, " dan saya berusia ").concat(this.umur, " tahun"));
    };
    return Orang;
}());
// membuat object 
var Orang1 = new Orang("Keti", 25);
Orang1.sapa();
