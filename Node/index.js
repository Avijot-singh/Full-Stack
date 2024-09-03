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
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// CORE Modules
/*
// const fs = require('fs').writeFileSync; This will only import writeFileSync for file system if yu dont want the other functionalities to get less workload
// fs("abc.txt,"abc")
const fs = require('fs'); // Non globab variable as we had to import it
fs.writeFileSync("hello.txt", "code step by step"); // Creates hello.txt file
*/

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//SERVER
/*
const http = require('http'); // handles rwuest and response of node js server
http.createServer((req, res) => {   // Request and response | request such as form submited , response to send back to client
res.write("hello this is Avi Singh"); // can also add html elements res.write("<h1> hello this is Avi Singh </h1>");
res.end();
}).listen(4500);  // Create server takes paramter in its function

// Can also do the same thing like this by creating a funtions

function DataCenter(req, resp) {
    resp.write("<h1> Hey, This is Avi Singh | response ")
    resp.end();
    }

    http.createServer(DataCenter).listen(4501);

    // Arrow Function
    function test(a) {
        return a + 100;
        }
        const test1 = (a) => a + 100;
        */
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// PACKAGE
const colors = require('colors');
console.log("package".bgBlue);

import chalk from 'chalk';

console.log(chalk.blue('Hello world!'));