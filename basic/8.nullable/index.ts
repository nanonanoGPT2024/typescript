// dalam typescrypt kita bisa menetukan sebuah propeties optional dengan tanda tanya

type User = {
    nama: string;
    email?: string; // optional
}


let user1: User = {nama:"keti"}
let user2: User = {nama: "nanonano", email:"nanonano@gmail.com"}


console.log(`data user 1 : ${user1}`);
console.log(`data user 2 : ${user2}`);