import express from "express";
const app = express();

const PORT = 3000;

// Parte 1

app.get("/", (req, res) => {
  res.send("Miguel Jimenez");
});

app.get("/materia", (req, res) => {
  res.send("DWN4AP - Aplicaciones Híbridas");
});

app.get("/profesor", (req, res) => {
  res.send("MARCOS GALBAN, Camila Belen");
});

app.use((req, res) => {
  res.status(404).send("Página no encontrada");
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
