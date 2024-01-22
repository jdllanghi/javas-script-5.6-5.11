'use strict';

let start = Date.now(); // Cuenta los milisegundos desde el 1 de enero de 1970.

// Realizar un trabajo
for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}

let end = Date.now(); // Tiempo al finalizar el trabajo.

alert(`The loop took ${end - start} ms`); // Muestra la diferencia en milisegundos.
