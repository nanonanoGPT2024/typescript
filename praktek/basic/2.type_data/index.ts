let angka: number = 23;
let text: string = "belajar typescript";
let isAktif: boolean = true;

let arrayAngka: number[]  = [1,2,3,4,5];
let tupleData: [string, number] = ["nanonano", 12];


enum Status {
    Aktif,
    TidakAktif
}


let StatusUser: Status = Status.Aktif;



console.log("angka : " + angka);
console.log("text : " + text);
console.log("isAktive : " + isAktif);
console.log("arrayAngka : "  + arrayAngka )
console.log("tuple Data : " + tupleData);
console.log("status aktif : " + Status.Aktif);
console.log("Status Tidak aktive : " + Status.TidakAktif);