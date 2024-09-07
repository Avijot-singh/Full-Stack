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
/*
// PACKAGE
const colors = require('colors');
console.log("package".bgBlue);

import chalk from 'chalk';

console.log(chalk.blue('Hello world!'));
*/

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*
// SIMPLE API
const http = require('http');
const data = require('./data'); // Import data from the data module

http.createServer((req, resp) => {
    resp.writeHead(200, {'Content-Type': 'application/json'}); // Set headers for JSON response
    resp.write(JSON.stringify(data)); // Write the JSON data to the response
    resp.end(); // End the response
    }).listen(5000, () => {
        console.log('Server is listening on port 5000');
        });
        */
       
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*
// COMMAND LINE INPUT
//console.log(process.argv) // Process is object which consists alot of things about node.js
const fs = require('fs');
const input = process.argv;
if(input[2]=='add'){
    fs.writeFileSync(input[3],input[4]) // First input is name of the file, 2nd input is the content we want inside it 
    } 
    else if(input[2] == 'remove'){
        fs.unlinkSync(input[3])
        }
        else{
            console.log("invalid output");
    }
    // To Add -> In terminal C:\Users\avijot\Saved Games\Full-Stack> node .\node\index.js add orange.txt 'this is color and fruit'
    // To Remove -> C:\Users\avijot\Saved Games\Full-Stack> node .\node\index.js remove orange.txt 
    */
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*
const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'files'); // This will give us the path of the files folder
for(i = 0;i<5;i++){
    fs.writeFileSync(dirPath+"/apple"+i+".txt", 'this is a apple file');
    }
    fs.readdir(dirPath,(err,files)=>{
        files.forEach((item) =>{
            console.log("file name is ", item);
            })
            
            }); // This will list out all the files listed in the path
            */

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*
const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,'crud');
const filePath = `${dirPath}/apple.txt`;
//fs.writeFileSync(`${path}`,'This is a simple text file');
// fs.readFile(filePath,'utf8',(err,item)=>{
//     console.log(item);
// })
// fs.appendFile(filePath,' and file name is apple.txt,',(err)=>{
//     if(!err) console.log("file is updated");
// });

fs.rename(filePath, `${dirPath}/fruit.txt`, (err)=>{
    if(!err) console.log("file name is updated");
})
    */
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*
// ASYNC AND SYNC   

console.log("Start exe..."); // This will run first

setTimeout(()=>{
    console.log("logic exe..."); // This will run third
    
}),2000

console.log("Complete exe..."); // This will run secod
// Drawbacks
let a = 10;
let b = 0;

setTimeout(() =>{
    b = 20;

},2000)

console.log(a+b); // Ans will be 10
// To fix the Drawback | If logic is taking time, we use promises 
let c = 10;
let d = 0;


let waitingData = new Promise((resolve,reject)=>{
    setTimeout(() =>{
        d = 20;
        resolve(30)  // Can pass anything string, array or even object
    },2000)
});
waitingData.then((data)=>{ // using then to get the data in waiting Data
    b = data;
    console.log(a + b);
})
console.log(c+d); // Ans will be 10 */
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
