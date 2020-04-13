import http from 'http';

const server = http.createServer((req, res) => {
  // no matter what endpoint is hit, return "hello, world!"
  res.writeHead( 200, { "Content-Type": "text/html" });
  res.write(`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Hello, world.</title>
  </head>
  <body>
    <h1>Hello, world.</h1>
  </body>
</html>`);
  res.end();
});

server.listen(5000);

console.log("Node.js webserver is listening on localhost:5000...");