const express = require('express');
const server = express();
const path = require('path');
const fs = require('fs');
const quotesDir = path.join(__dirname, 'quotes.json');
const data = fs.readFileSync(quotesDir,'utf-8');

server.create('/quotes',(req,res)=>{
    
})

server.get('/quotes',(req,res)=>{
    res.send(data);
});

server.listen(8000);