interface Mahasiswa {
    nama: string,
    umur: number,
    isAktive: boolean
}

let mhs: Mahasiswa = {
    nama: "Keti",
    umur: 21,
    isAktive: true
}


console.log(`nama ${mhs.nama}`);