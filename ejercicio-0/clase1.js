/* Parte 1: Callbacks
Crear tres funciones (task1, task2, task3) que simulen tareas
asincrónicas utilizando setTimeout.
Implementar una función principal (mainCallback) que llame a estas
funciones en secuencia y muestre los resultados en la consola. */

function task1(callback) {
  setTimeout(function () {
    callback("ejecutando Task 1");
  }, 1000);
}

function task2(callback) {
  setTimeout(function () {
    callback("ejecutando Task 2");
  }, 1000);
}

function task3(callback) {
  setTimeout(function () {
    callback("ejecutando Task 3");
  }, 1000);
}

function mainCallback() {
  task1((data1) => {
    console.log(data1);
    task2((data2) => {
      console.log(data2);
      task3((data3) => {
        console.log(data3);
        console.log("fin");
      });
    });
  });
}

mainCallback();
