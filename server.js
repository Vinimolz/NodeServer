import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    // Serve the static HTML page
    fs.readFile('index.html', 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
        return;
      }
      res.writeHead(200, { 'Content-Type': 'text/html' }); // Set Content-Type to text/html
      res.end(data);
    });

  } 
  
  else if (req.method === 'POST' && req.url === '/submit') {
    // Handle POST request
    let body = '';
    req.on('data', (chunk) => {
      body += chunk.toString();
    });

    req.on('end', () => {
      const message = decodeURIComponent(body.split('=')[1]);
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(`You submitted the message: ${message}`);
    });

  } 
  
  else {
    // Handle other requests
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
  
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
