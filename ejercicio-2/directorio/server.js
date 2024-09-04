const http = require("http");
const fs = require("fs");
const os = require("os");
const path = require("path");

const PORT = 3000;

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/alumno" && method === "GET") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Nombre del alumno: Miguel Jimenez, Comision: DWN4AP");
  } else if (url === "/info" && method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    const info = {
      platform: os.platform(),
      version: os.release(),
      memory: os.totalmem(),
      freeMemory: os.freemem(),
    };
    res.end(JSON.stringify(info));
  } else if (url === "/static" && method === "GET") {
    const filePath = path.join(__dirname, "index.html");
    fs.readFile(filePath, "utf8", (data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Ruta no encontrada");
  }
});

server.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
