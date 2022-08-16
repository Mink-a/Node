const http = require("http");
const fs = require("fs");
const PORT = 4000;

// Create a local server to receive data from
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.readFile("pages/index.html", "utf-8", (err, data) => {
      if (err) throw err;
      res.write(data);
      res.end();
    });
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.readFile("pages/about.html", "utf-8", (err, data) => {
      if (err) throw err;
      res.write(data);
      res.end();
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    fs.readFile("pages/404.html", "utf-8", (err, data) => {
      if (err) throw err;
      res.write(data);
      res.end();
    });
  }
});

console.log(`server is running at http://localhost:${PORT}`);
server.listen(PORT);
