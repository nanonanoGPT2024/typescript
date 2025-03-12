
// method overloading memungkinkan menulis beberapa parameter yang sama denga parameter beda type data

function cetak(value: string) : void;
function cetak(value: number) : void;
function cetak(value: any) : void{
    console.log(value);
}

cetak("Hallo typescript");
cetak(22);

