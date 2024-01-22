'use strict'
let arrayLike = { // Objeto que parece un array (tiene índices y propiedad length)
  0: "Hello",
  1: "World",
  length: 2
};

// Error porque arrayLike no es realmente un iterable, no tiene Symbol.iterator.
for (let item of arrayLike) {}
