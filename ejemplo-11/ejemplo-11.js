'use strict';

// Dividir la cadena "John Smith" en un array y desestructurarlo.
let [firstName, surname] = "John Smith".split(' ');
// 'split' divide la cadena en un array usando el espacio como delimitador.
// La desestructuración asigna 'John' a firstName y 'Smith' a surname.
alert(firstName); // Muestra 'John'.
alert(surname);  // Muestra 'Smith'.