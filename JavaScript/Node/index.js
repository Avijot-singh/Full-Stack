// BASICS
/*
const app = require('./app')
console.log(app.a);
console.log(app.z()); // imporitng function from app.js

const arr = [1, 2, 3, 4, 5, 6, 7];

arr.filter((item) => { // traversing data | going through each elemrnt or node one by one
    console.log(item);
}) // filter keyword only works on arrays

let result = arr.filter((item) => {
    return item < 4
})
console.log(result);
*/

// CORE Modules
// const fs = require('fs').writeFileSync; This will only import writeFileSync for file system if yu dont want the other functionalities to get less workload
// fs("abc.txt,"abc")
const fs = require('fs'); // Non globab variable as we had to import it 
fs.writeFileSync("hello.txt", "code step by step"); // Creates hello.txt file