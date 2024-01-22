'use strict';

let map = new Map();

map.set('1', 'str1');   // una clave de tipo string
map.set(1, 'num1');     // una clave numérica
map.set(true, 'bool1'); // una clave booleana

// A diferencia de un Object regular, Map mantiene el tipo de las claves,
// por lo tanto, estas dos claves son diferentes:
alert( map.get(1)   ); // 'num1'
alert( map.get('1') ); // 'str1'

alert( map.size ); // 3
