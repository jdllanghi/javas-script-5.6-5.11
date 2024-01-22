'use strict';

// Creación de un objeto 'john'.
let john = { name: "John" };

// Creación de un Map para almacenar el conteo de visitas.
let visitsCountMap = new Map();

// Estableciendo 'john' como la clave en el Map con su respectivo valor de visitas.
visitsCountMap.set(john, 123);

// Al recuperar el valor usando el objeto 'john' como clave, muestra 123.
alert(visitsCountMap.get(john)); // 123
