const express = require('express');
const server = express();

server.use('/demo',(req,res,next)=>{
    console.log(req.query);
    next();
    
});

const auth = (req,res,next)=>{
    if(req.query.name === 'avi'){
        res.send("Hello")
        
    }
    else if(req.query.age >= 18){
        res.send("hello age")
    }
    else{
        next()
    }
    
}


server.get('/demo',auth,(req,res)=>{
    res.send(req.query);
});



server.listen(8000);