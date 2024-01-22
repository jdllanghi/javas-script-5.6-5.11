'use strict'
let str = "Hello";

// En lugar de usar un bucle for..of, se utiliza el iterador directamente.
let iterator = str[Symbol.iterator]();

while (true) {
  let result = iterator.next(); // Obtiene el siguiente carácter mediante el iterador.
  if (result.done) break;       // Si no hay más caracteres, sale del bucle.
  alert(result.value);          // Muestra el carácter actual.
}
