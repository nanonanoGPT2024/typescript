var AkunBnak = /** @class */ (function () {
    function AkunBnak(nama, saldo) {
        this.nama = nama;
        this.saldo = saldo;
    }
    AkunBnak.prototype.deposit = function (uang) {
        this.saldo += uang;
        console.log("Deposit berhasil! saldo sekarang : ".concat(this.saldo));
    };
    AkunBnak.prototype.cekSaldo = function () {
        console.log("saldo ".concat(this.nama, ": ").concat(this.saldo));
    };
    return AkunBnak;
}());
// membuat object 
var akun1 = new AkunBnak("keti", 1000);
akun1.deposit(500);
akun1.cekSaldo();
