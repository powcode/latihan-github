const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
  res.end("Server daftar belanja berjalan");
});

server.listen(3000, () => {
  console.log("Server berjalan di http://localhost:3000");
});