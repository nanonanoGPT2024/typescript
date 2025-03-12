class AkunBnak {
    public nama: string;
    private saldo: number;
    
    constructor(nama: string, saldo: number) {
        this.nama = nama;
        this.saldo = saldo;
    }


    deposit(uang: number) {
        this.saldo += uang;
        console.log(`Deposit berhasil! saldo sekarang : ${this.saldo}`);
    }

    cekSaldo(): void {
        console.log(`saldo ${this.nama}: ${this.saldo}`);
    }
}



// membuat object 


let akun1 = new AkunBnak("keti", 1000);
akun1.deposit(500);
akun1.cekSaldo();
