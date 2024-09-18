const express = require('express');
const server = express();
const path = require('path');
const fs = require('fs');
const js = path.join(__dirname, 'products.json');
const products = JSON.parse(fs.readFileSync(js, 'utf-8'));

// Body Parser
server.use(express.json());
// Products
// API ROOT(Base URL), http://localhost:8000/

// C R U D
// Create POST / products    
server.post('/products',(req,res)=>{
    console.log(req.body);
    products.push(req.body);
    res.json(req.body);
});

// Read GET /products
server.get('/products',(req,res)=>{
    res.json(products);
});

server.get('/products/:id',(req,res)=>{
    const id = +req.params.id;
    const prod = products.find(p=>p.id===id); // Find() mehtod 
    res.json(prod);
});

// Update PUT /products:id
server.put('/products/:id',(req,res)=>{ // In PUT we overide the data
    const id = +req.params.id;
    const prodIndex = products.findIndex(p=>p.id===id); // it is giving you a copy of the original
    products.splice(prodIndex,1,{...req.body, id:id});
    res.status(201).json(req.body);
});

// Update PATCH /products:id
server.patch('/products/:id',(req,res)=>{ // In PATCH we DONT overide the data
    const id = +req.params.id;
    const prodIndex = products.findIndex(p=>p.id===id); 
    const product = products[prodIndex]
    products.splice(prodIndex,1,{...product,...req.body});
    res.status(201).json(req.body);
});

// Delete DELETE /products:id
server.delete('/products/:id',(req,res)=>{ // In PUT we overide the data
    const id = +req.params.id;
    const prodIndex = products.findIndex(p=>p.id===id); // it is giving you a copy of the original
    const product = products[prodIndex]
    products.splice(prodIndex,1);
    res.status(201).json(product);
});

server.listen(8000,()=>{
    console.log("Running on port 8000");
})