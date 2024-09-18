const express = require('express');
const server = express();

// Middleware function
const logRequestInfo = (req, res, next) => {
    console.log(`Received a ${req.method} request to ${req.url}`);
    next(); // Don't forget to call next() to pass control to the next middleware/route handler
};

// Use the middleware for all routes
server.use(logRequestInfo);

server.get('/demo/:name/:age/:subject', (req, res) => {
    console.log(req.params);
    res.send(req.params);
});

server.listen(8000, () => {
    console.log('Server is running on port 8000');
});