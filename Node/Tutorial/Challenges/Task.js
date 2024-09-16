// Write a simple Node.js server that handles both GET and POST requests, and understand how HTTP methods and URLs work together.

const http = require('http');
const express = require('express');

const server = http.createServer((req,resp)=>{
    resp.end("hello from server");
});

server.listen(5000);