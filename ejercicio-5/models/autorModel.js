// autorModel.js

export class Autor {
  constructor(id, nombre, nacionalidad, edad) {
    this.id = id;
    this.nombre = nombre;
    this.nacionalidad = nacionalidad;
    this.edad = edad;
    this.libros = [];
  }

  agregarLibro(libro) {
    this.libros.push(libro);
  }

  actualizarLibro(libroId, nuevoLibro) {
    const index = this.libros.findIndex((libro) => libro.id === libroId);
    if (index !== -1) {
      this.libros[index] = { ...this.libros[index], ...nuevoLibro };
    }
  }

  eliminarLibro(libroId) {
    this.libros = this.libros.filter((libro) => libro.id !== libroId);
  }
}

export class Libro {
  constructor(id, titulo, anio) {
    this.id = id;
    this.titulo = titulo;
    this.anio = anio;
  }
}
