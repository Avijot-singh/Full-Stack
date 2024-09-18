const fs = require("fs");
const path = require("path");
const index_path = path.join(__dirname, "index.html");
const index = fs.readFileSync(index_path, "utf-8");
const data_path = path.join(__dirname, "data.json");
const data = JSON.parse(fs.readFileSync(data_path, "utf-8"));
const products = data.products;

const express = require("express"); // To create server

const server = express();


// MIDDLEWARE - When is request comes it goes to middleware and then further to server

server.use(express.json()); // BodyParser so it understands body
//server.use(express.urlencoded());

server.use(express.static('public')); // Static hosting can direclty show you the files, by default it looks for convention files such as index.html
server.use((req, res, next) => { // We can also call this a logger/Middleware, this man it creates a log for all the requests sent to the server | This is also an application Middleware
    console.log(req.query);   
    console.log(req.method, req.ip, req.hostname)
    next();
});

const auth = ((req, res, next) => {
    console.log();
    if(req.body.password=='123'){   // Query is the value after url question mark | http://localhost:8000/?password=123 --> Authorized | http://localhost:8000 --> Unauthorized req.body for postman 

        next();
    }else {
        res.sendStatus(401); // 401 For not Authorized
    }
    
});

// server.use(auth); // This will use auth all around the application

// In express it goes from top to bottom in sequence 

// API - ENDPOINT - ROUTE
server.get("/",auth, (req, res) => { // placing the Auth in here will ensure that authentication is only needed when this root api is called
    res.json({ type: 'GET2' }); 
});

server.post("/", (req, res) => {
    res.json({ type: 'POST' }); 
});

server.put("/", (req, res) => {
    res.json({ type: 'PUT' }); 
});
server.delete("/", (req, res) => {
    res.json({ type: 'DELETE' }); 
});
server.patch("/", (req, res) => {
    res.json({ type: 'PATCH' }); 
});
 



server.get("/demo", (req, res) => {// Get is a method
    // res.sendStatus(404); This will send out not found page 
    // res.json(products) send json content 
    // res.send("hello"); // see we dont need to send any headers and all cause express knows them can also write it like res.send("<h1>Hello</h1>"), send mostly used for html
    // res.status(201).send('<h1>Hello</h1>'); can send status code
    //res.sendFile('C:\Desktop\Full Stack\Node\Tutorial\index.html');

});
server.listen(8000);
