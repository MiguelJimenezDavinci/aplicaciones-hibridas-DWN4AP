/* Parte 2: Promesas
Convertir las funciones anteriores para que devuelvan promesas.
Usar Promise.all para ejecutar todas las funciones en paralelo y mostrar
los resultados en la consola. */

function task1() {
  return new Promise((resolve, reject) => {
    resolve("Task 1 Realizada con exito");
  });
}

function task2() {
  return new Promise((resolve, reject) => {
    resolve("Task 2 Realizada con exito");
  });
}

function task3() {
  return new Promise((resolve, reject) => {
    resolve("Task 3 Realizada con exito");
  });
}

function mainCallback() {
  Promise.all([task1(), task2(), task3()])
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((error => {
    console.error(error)
  }))
}

mainCallback();
