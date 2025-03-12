import { Kendaraan } from './Kendaraan';

export class Mobil extends Kendaraan {


    private jumlahPintu: number;

    constructor(merk: string, jumlahPintu) {
        super(merk); // memanggil constructor class induk
        this.jumlahPintu = jumlahPintu;
    }

    info(): void {
        console.log(`Mobil ${this.merk} memiliki ${this.jumlahPintu} pintu`);
    }
    
}