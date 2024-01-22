'use strict';

// Se crea un Map con un array de pares [clave, valor].
let map = new Map([
  ['1',  'str1'], // Par clave-valor donde la clave es el string '1'.
  [1,    'num1'], // Par clave-valor donde la clave es el número 1.
  [true, 'bool1'] // Par clave-valor donde la clave es el booleano true.
]);

// Se recupera el valor asociado con la clave '1'.
alert(map.get('1')); // Muestra 'str1'.
