const express = require('express');
const server = express();
const fs = require('fs');
const path = require('path');
const cart =  path.join(__dirname, 'carts.json')
server.use(express.json()); // Middleware for parsing json files