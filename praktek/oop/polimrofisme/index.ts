// polimrofisme berati satu mtode bisa memiliki bentuk berbeda di class anak 

class Hewan {
    bersuara() : void {
        console.log("Hewan mengeluarkan suara");
    }
}


class Kuing extends Hewan {


    bersuara(): void {
        console.log("Mewong mewong!!!");
    }
}


class Anjing extends Hewan {
    bersuara(): void {
        console.log("Guk Gukk");
    }
}

let hewan1: Hewan = new Kuing();
let hewan2: Hewan = new Anjing();



hewan1.bersuara();
hewan2.bersuara();