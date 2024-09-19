import express from "express";
import {
  createAuthor,
  getAllAuthors,
  getAuthorById,
  updateAuthor,
  deleteAuthor,
  addBook,
  getBooks,
  updateBook,
  deleteBook,
} from "../controller/autorController.js";

const router = express.Router();

// Rutas para autores
router.post("/authors", createAuthor);
router.get("/authors", getAllAuthors);
router.get("/authors/:id", getAuthorById);
router.put("/authors/:id", updateAuthor);
router.delete("/authors/:id", deleteAuthor);

// Rutas para libros
router.post("/authors/:id/books", addBook);
router.get("/authors/:id/books", getBooks);
router.put("/authors/:id/books/:bookId", updateBook);
router.delete("/authors/:id/books/:bookId", deleteBook);

export default router;
