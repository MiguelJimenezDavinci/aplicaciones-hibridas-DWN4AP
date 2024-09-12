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

// Parte 2

const peliculas = [
  "Alicia",
  "Matrix",
  "Capitan-America",
  "Piratas-del-Caribe",
  "Como-si-fuera-la-Primera-Vez",
];

app.get("/peliculas", (req, res) => {
  const movie = req.query.movie;
  if (peliculas.includes(movie)) {
    res.send("La película seleccionada ya está en favoritos");
  } else {
    res.status(404).send("404 – película no encontrada");
  }
});

// Parte 3

const products = [
  { id: 1, nombre: "Producto 1", precio: 100 },
  { id: 2, nombre: "Producto 2", precio: 200 },
  { id: 3, nombre: "Producto 3", precio: 300 },
  { id: 4, nombre: "Producto 4", precio: 400 },
  { id: 5, nombre: "Producto 5", precio: 500 },
  { id: 6, nombre: "Producto 6", precio: 600 },
  { id: 7, nombre: "Producto 7", precio: 700 },
  { id: 8, nombre: "Producto 8", precio: 800 },
  { id: 9, nombre: "Producto 9", precio: 900 },
  { id: 10, nombre: "Producto 10", precio: 1000 },
];

app.get("/productos", (req, res) => {
  const { id, min, max } = req.query;

  if (id) {
    const product = products.find((p) => p.id === parseInt(id));
    if (product) {
      res.json(product);
    } else {
      res.status(404).send("Producto no encontrado");
    }
  } else {
    let filteredProducts = products;

    if (min) {
      filteredProducts = filteredProducts.filter(
        (p) => p.precio >= parseFloat(min)
      );
    }
    if (max) {
      filteredProducts = filteredProducts.filter(
        (p) => p.precio <= parseFloat(max)
      );
    }

    res.json(filteredProducts);
  }
});

app.use((req, res) => {
  res.status(404).send("Página no encontrada");
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
