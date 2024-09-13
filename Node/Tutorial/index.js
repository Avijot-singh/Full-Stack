/*
const http = require("http");
const fs = require("fs");
const path = require("path");

// Build the absolute path to data.json using __dirname
const dataPath = path.join(__dirname, "data.json");

// Read the contents of the data.json file synchronously
const data = fs.readFileSync(dataPath, "utf-8");

// Create an HTTP server
const server = http.createServer((req, resp) => {
  // Log server start and the URL of the incoming request
  console.log("Server Started");
  console.log(req.url);

  // Set custom header for the response
  resp.setHeader("Dummy", "DummyValue");

  // Specify the content type of the response as JSON
  resp.setHeader("Content-Type", "application/json"); // This sets the Content-Type to application/json, which is suitable for sending JSON data

  // Send the content of the index.html file as the response
  // Note: You should send the correct content based on the requested URL or route
  // resp.end(index);
  resp.end(data);
});

// Make the server listen for requests on port 5000
server.listen(5000, () => {
  console.log("Server is listening on port 5000");
});

- Cannot set header after the response is already sent 
*/
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------
// DYUNAMIC ROUTING SERVER SIDE
/*
const http = require("http");
const fs = require("fs");
const path = require("path");

const datapath = path.join(__dirname, "data.json");
// const data = fs.readFileSync(datapath, "utf-8");
const index_path = path.join(__dirname, "index.html");
const index = fs.readFileSync(index_path, "utf-8"); // readfileSync is used to read the content of the file

const data = JSON.parse(fs.readFileSync(datapath, "utf-8")); // We have to parse it in this case as we are accerssing pure JSON
const producs = data.products[0];

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      res.setHeader("Content-Type", "text/html");
      res.end(index);
      break;
    case "/api":
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(data));
    case "/product":
      res.setHeader("Content-Type", "text/html");
      index.replace("**url", product.id);
    default:
      res.writeHead(404, "NOT FOUND");
      res.end;
  }
});

server.listen(5000);
*/
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Import required modules
const http = require("http");
const fs = require("fs");
const path = require("path");

// Build the absolute path to the data.json file
const data_path = path.join(__dirname, "data.json");

// Read and parse the data.json file
const data = JSON.parse(fs.readFileSync(data_path, "utf-8"));

// Extract the products array from the parsed data
const products = data.products;

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Log the request URL to the console for debugging
  console.log(req.url);

  // Check if the request URL starts with '/product'
  if (req.url.startsWith("/product")) {
    // Extract the product ID from the URL
    // For example, if the URL is '/product/5', this will extract '5'
    const id = req.url.split("/")[2];

    // Find the product with the extracted ID in the products array
    // Convert the ID to a number using +id
    const prd = products.find((p) => p.id === +id);

    // Log the found product to the console
    console.log(prd);

    // Send a response with the found product (optional)
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(prd));
  } else {
    // Handle other routes (optional)
    res.writeHead(404, "Not Found");
    res.end("Page not found");
  }
});

// Start the server on port 5000
server.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
