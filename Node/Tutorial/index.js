const http = require("http");
const data = { age: 21 };

const server = http.createServer((req, resp) => {
  console.log("Server Started");
  console.log(req.url);
  resp.setHeader("Dummy", "DummyValue");
  resp.setHeader("Content-Type", "application/json"); // For JSON types such as objects
  resp.end("Hey Whats up ?");
  // resp.end(JSON.stringify(data));  // Node.js cannot send an object directly as a response. We need to convert it into a string first (e.g., using JSON.stringify) before sending.
});
server.listen(5000);
