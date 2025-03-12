var angka = 23;
var text = "belajar typescript";
var isAktif = true;
var arrayAngka = [1, 2, 3, 4, 5];
var tupleData = ["nanonano", 12];
var Status;
(function (Status) {
    Status[Status["Aktif"] = 0] = "Aktif";
    Status[Status["TidakAktif"] = 1] = "TidakAktif";
})(Status || (Status = {}));
var StatusUser = Status.Aktif;
console.log("angka : " + angka);
console.log("text : " + text);
console.log("isAktive : " + isAktif);
console.log("arrayAngka : " + arrayAngka);
console.log("tuple Data : " + tupleData);
console.log("status aktif : " + Status.Aktif);
console.log("Status Tidak aktive : " + Status.TidakAktif);
