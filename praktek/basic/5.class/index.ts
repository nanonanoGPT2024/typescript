class Orang {
    nama: string;
    umur: number;

    constructor(nama: string , umur: number) {
        this.nama = nama;
        this.umur = umur;
    }

    sapa(): void {
        console.log(`Hallo , nama saya ${this.nama} dan saya ${this.nama} tahun`);
    }
}

let orang1 = new Orang("Keti", 22);
orang1.sapa();
