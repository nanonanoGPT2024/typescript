


// memugnkinkan kita membuat alias type data untuk di gunaan kembali
type ID =string | number;


let userID: ID;

userID = "nanonano";
userID = 33;

// contoh penggunaan dalam object 

type Mahasiswa = {
    nama:string;
    umur: number;
    isAktive: true;
}

let mhs: Mahasiswa = {
    nama: "keti",
    umur: 22,
    isAktive: true
}


console.log(`cek data ${mhs}`);

