'use strict'
let arrayLike = {
  0: "Hello",
  1: "World",
  length: 2
};

// Convertir el objeto parecido a un array en un verdadero array.
let arr = Array.from(arrayLike); // (*)
alert(arr.pop()); // Muestra "World" (ahora los métodos de Array funcionan).




