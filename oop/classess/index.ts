

class Orang {
    nama: string;
    umur: number;


    constructor(nama: string, umur: number) {
        this.nama = nama;
        this.umur= umur;
    }

    sapa(): void {
        console.log(`Hallo , nama sata ${this.nama} dan saya berusia ${this.umur} tahun`);
    }
}




// membuat object 
let Orang1 = new Orang("Keti", 25);
Orang1.sapa();



