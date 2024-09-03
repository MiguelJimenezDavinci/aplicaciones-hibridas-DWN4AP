const fs = require("fs").promises;

async function CreateDirectory(path) {
  try {
    await fs.mkdir(path, { recursive: true });
    console.log("directorio correctamente!");
  } catch (error) {
    console.log("error", error);
  }
}

CreateDirectory("./directorio");

async function CreateFile(path, data) {
  try {
    await fs.writeFile(path, data, "utf-8");
    console.log("archivo escrito correctamente!");
  } catch (error) {
    console.log("error", error);
  }
}

const indexData = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Bienvenido a la página estática</h1>
    <p>Esta es una página HTML servida desde el servidor HTTP en Node.js.</p>
</body>
</html>`;

CreateFile("./directorio/index.html", indexData);
CreateFile("./directorio/server.js", "");
