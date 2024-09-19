import fs from "fs";
import path from "path";
const dataPath = path.join(process.cwd(), "data/autor.json");

// Funciones para leer y escribir datos
const readData = () => {
  const data = fs.readFileSync(dataPath);
  return JSON.parse(data);
};

const writeData = (data) => {
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
};

// Crear un nuevo autor
export const createAuthor = (req, res) => {
  const authors = readData();
  const newAuthor = req.body;
  newAuthor.id = authors.length ? authors[authors.length - 1].id + 1 : 1;
  newAuthor.libros = [];
  authors.push(newAuthor);
  writeData(authors);
  res.status(201).json(newAuthor);
};

// Obtener todos los autores
export const getAllAuthors = (req, res) => {
  const authors = readData();
  res.status(200).json(authors);
};

// Obtener un autor por ID
export const getAuthorById = (req, res) => {
  const authors = readData();
  const author = authors.find((a) => a.id === parseInt(req.params.id));
  if (!author) {
    return res.status(404).json({ message: "Author not found" });
  }
  res.status(200).json(author);
};

// Actualizar un autor
export const updateAuthor = (req, res) => {
  const authors = readData();
  const authorIndex = authors.findIndex(
    (a) => a.id === parseInt(req.params.id)
  );
  if (authorIndex === -1) {
    return res.status(404).json({ message: "Author not found" });
  }
  authors[authorIndex] = { ...authors[authorIndex], ...req.body };
  writeData(authors);
  res.status(200).json(authors[authorIndex]);
};

// Eliminar un autor
export const deleteAuthor = (req, res) => {
  const authors = readData();
  const authorIndex = authors.findIndex(
    (a) => a.id === parseInt(req.params.id)
  );
  if (authorIndex === -1) {
    return res.status(404).json({ message: "Author not found" });
  }
  authors.splice(authorIndex, 1);
  writeData(authors);
  res.status(204).send();
};

// Agregar un libro a un autor
export const addBook = (req, res) => {
  const authors = readData();
  const author = authors.find((a) => a.id === parseInt(req.params.id));
  if (!author) {
    return res.status(404).json({ message: "Author not found" });
  }

  const newBook = req.body;
  newBook.id = author.libros.length
    ? author.libros[author.libros.length - 1].id + 1
    : 1;
  author.libros.push(newBook);
  writeData(authors);
  res.status(201).json(newBook);
};

// Obtener libros de un autor
export const getBooks = (req, res) => {
  const authors = readData();
  const author = authors.find((a) => a.id === parseInt(req.params.id));
  if (!author) {
    return res.status(404).json({ message: "Author not found" });
  }
  res.status(200).json(author.libros);
};

// Actualizar un libro de un autor
export const updateBook = (req, res) => {
  const authors = readData();
  const author = authors.find((a) => a.id === parseInt(req.params.id));
  if (!author) {
    return res.status(404).json({ message: "Author not found" });
  }

  const bookIndex = author.libros.findIndex(
    (b) => b.id === parseInt(req.params.bookId)
  );
  if (bookIndex === -1) {
    return res.status(404).json({ message: "Book not found" });
  }

  author.libros[bookIndex] = { ...author.libros[bookIndex], ...req.body };
  writeData(authors);
  res.status(200).json(author.libros[bookIndex]);
};

// Eliminar un libro de un autor
export const deleteBook = (req, res) => {
  const authors = readData();
  const author = authors.find((a) => a.id === parseInt(req.params.id));
  if (!author) {
    return res.status(404).json({ message: "Author not found" });
  }

  author.libros = author.libros.filter(
    (b) => b.id !== parseInt(req.params.bookId)
  );
  writeData(authors);
  res.status(204).send();
};
