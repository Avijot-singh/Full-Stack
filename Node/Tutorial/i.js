const fs = require("fs");
const path = require("path");
const index_path = path.join(__dirname, "index.html");
const index = fs.readFileSync(index_path, "utf-8");
const data_path = path.join(__dirname, "data.json");
const data = JSON.parse(fs.readFileSync(data_path, "utf-8"));
const products = data.products;

const express = require("express"); // To create server
const server = express();
server.listen(8000);
