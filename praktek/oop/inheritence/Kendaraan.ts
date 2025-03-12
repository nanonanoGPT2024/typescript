export class Kendaraan {
    protected merk: string;

    constructor(merk: string) {
        this.merk = merk;
    }

    info(): void {
        console.log(`Kendaraan ${this.merk}`);
    }
}

