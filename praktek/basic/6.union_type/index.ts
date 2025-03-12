


let data: string | number;

// contoh benar pengisian
data= "keti";
data= 22;


// salah
// data=true;

function cetakData(value: string|number): void {
    console.log(`data : ${value}`);
}


cetakData("nanonano");
cetakData("220");

