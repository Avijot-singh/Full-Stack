const express = require('express');

const server = express();

server.use('/demo', (req, res, next) => {
    console.log(req.query);
    next()
});

const authentication = (req, res, next) => {
    if (req.query.age >= 18) {
        next()
    }
    else if (req.query.name) {
        next();
    }
    else if (req.query.subject === 'math') {
        next();
    }
    else {
        res.sendStatus(401);
    }
}

server.get('/demo',authentication,(req, res) =>{
    res.send(req.query);
})
    
   
server.listen(8000);