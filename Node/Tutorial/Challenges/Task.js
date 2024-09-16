// Write a simple Node.js server that handles both GET and POST requests, and understand how HTTP methods and URLs work together.

const http = require("http");

// Create the server
const server = http.createServer((req, res) => {
  // Set the response header content-type
  res.setHeader("Content-Type", "text/plain");

  // Check the request method (GET or POST) and the URL
  if (req.method === "GET" && req.url === "/demo") {
    // Handle GET request to /demo
    res.statusCode = 200;
    res.end("This is a response to a GET request on /demo");
  } else if (req.method === "POST" && req.url === "/demo") {
    // Handle POST request to /demo
    res.statusCode = 200;
    res.end("This is a response to a POST request on /demo");
  } else {
    // Handle any other request
    res.statusCode = 404;
    res.end("404 Not Found");
  }
});

// Start the server on port 5000
server.listen(5000, () => {
  console.log("Server running at http://localhost:5000");
});
