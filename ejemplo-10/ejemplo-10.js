'use strict';

let [firstName, surname] = "John Smith".split(' ');
// La cadena "John Smith" se divide en un array usando split(' ').
// Esto devuelve el array ['John', 'Smith'].

// La desestructuración de arrays permite asignar los elementos del array
// a variables individuales en una sola línea.
// firstName se asigna a 'John' y surname a 'Smith'.
alert(firstName); // Muestra 'John'.
alert(surname);  // Muestra 'Smith'.
