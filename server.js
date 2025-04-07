// Import the built-in 'http' module
const http = require('http');

// Define the hostname and port the server will listen on
const hostname = '127.0.0.1'; // localhost
const port = 3000;

// Create the HTTP server
const server = http.createServer((req, res) => {
  // Set the response HTTP header with status code 200 (OK) and content type text/plain
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Send the response body "Hello, Node.js!"
  res.end('Hello, Node.js!\n');
});

// Start the server and listen on the specified hostname and port
server.listen(port, hostname, () => {
  console.log(`Server running at http://<span class="math-inline">\{hostname\}\:</span>{port}/`);
});