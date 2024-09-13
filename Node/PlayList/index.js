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
/*
// EXPRESS
const express = require('express');
const app = express();
app.get('',(req,resp)=>{ // Root page
    resp.send("hello, this is Home Page");
});
app.get('/about',(req,resp)=>{
    resp.send("hello, this is About Page");
});

app.listen(5000);*/ // After making web page we need to host it;
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*
// Routing 
const express = require('express');
const app = express();
app.get('',(req,resp)=>{ // Root page
    console.log("Data sent by browser =>>>", req.query.name) // http://localhost:5000/?name=Avi
    resp.send("Welcome " + req.query.name);
});
app.get('/about',(req,resp)=>{
    resp.send("hello, this is About Page");
});

app.listen(5000); */
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*
// Render HTML and Json

const express = require('express');
const app = express();
app.get('',(req,resp)=>{ // Root page
    resp.send(`
        <h1>Welcome to Home Page</h1><a href="/about"> Go to about page</a>
        `); // Home page will have an h1 tag
});
app.get('/about',(req,resp)=>{
    resp.send(`
        <input type="text" placeholder="User name" value=${req.query.name}/> 
        <button>Click Me!</button>
        <a href="/home"> Go to about page</a>
        `) // To get data from query data
});

app.get('/help', (req,resp)=>{
    resp.send({
        name: "Avijot Singh",
        email: "singhavijot2002@gmail.com"
    })
})

app.listen(5000); 
*/
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*
// HOW TO CALL HTML PAGE

const express = require('express');
const path = require('path');
const app = express();
const publicPath = path.join(__dirname,'public');
console.log(publicPath) // __dirname gives you the root folder which will be node

app.use(express.static(publicPath)); // This will load the statcic content we call the html pages static content

app.listen(5000);
*/
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*
// REMOVE EXTENSION IN URL & 404 PAGE
const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname, 'public');

// Serve the index.html on the root path
app.get('/', (_, resp) => {
    resp.sendFile(`${publicPath}/index.html`);
});

// Serve home.html on /home path
app.get('/home', (_, resp) => {
    resp.sendFile(`${publicPath}/home.html`);
});

// Serve help.html on /help path
app.get('/help', (_, resp) => {
    resp.sendFile(`${publicPath}/help.html`);
});
app.get('*', (_, resp) => { // Using the star allows us to say if user enters any other route except the ones listed it will show this by default
    resp.sendFile(`${publicPath}/nopage.html`); // resp.sendFile() is used to send a static file (like an HTML file, image, or PDF) directly to the user without any dynamic data being injected.
});
app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
*/
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*
// DYNAMIC ROUTING
const express = require('express');
const path = require('path');

const app = express();

// Explicitly set the views directory path
app.set('views', path.join(__dirname, 'views'));

// Set the view engine to EJS
app.set('view engine', 'ejs');

app.get('/profile', (_, resp) => {
    const user = {
        name: "Avi Singh",
        city: "Melbourne",
        skills: ['php', 'js', 'javaScript','node','react']
    };

    // Render the profile.ejs view with user data
    resp.render('profile', { user });
});

app.get('/login', (_, resp)=> {
    resp.render('login'); // is used to render views/templates (like .ejs files) in Express.
})

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});*/
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*
// FETCH DATA
const express = require('express');
const app = express();

const reqFilter = (req, resp, next) => {
    if (!req.query.age) { // User needs to provide age http://localhost:5000/?age=10 otherwise it will ask
        
        resp.send("Please provide age: ");
    }
    else if (req.query.age < 18) {
        resp.send("You cannot enter");
    }
    else {
       next();  
    }

} // Filtering the request

app.use(reqFilter)
app.get('/', (req, resp) => {
    resp.send("Welcome to the homepage");
});

app.get('/users',(req, resp)=> {
    resp.send("Welcome to the users page");
})
app.listen(5000);
*/
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//CONNECT MONGODB

const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url); 

async function getData() {
    let result = await client.connect();
    let db = result.db('e-comm');
    let collection = db.collection('products');
    let response = await collection.find({}).toArray();
    console.log(response);
}

getData();