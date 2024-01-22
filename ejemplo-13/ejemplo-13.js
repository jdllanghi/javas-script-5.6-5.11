'use strict';

let options = {
  size: {
    width: 100,
    height: 200
  },
  items: ["Cake", "Donut"],
  extra: true
};

// Desestructuración más compleja con un objeto anidado y un array.
let {
  size: { // Extrae el objeto anidado 'size'.
    width,
    height
  },
  items: [item1, item2], // Extrae los elementos del array 'items'.
  title = "Menu" // Usa 'Menu' como valor por defecto para 'title'.
} = options;

// 'title' no está presente en 'options', se usa el valor por defecto 'Menu'.
alert(title);  // Muestra 'Menu'.
alert(width);  // Muestra 100 (del objeto anidado 'size').
alert(height); // Muestra 200 (del objeto anidado 'size').
alert(item1);  // Muestra 'Cake' (primer elemento de 'items').
alert(item2);  // Muestra 'Donut' (segundo elemento de 'items').
