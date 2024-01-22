'use strict';

let options = {
  title: "Menu",
  width: 100,
  height: 200
};

// Desestructuración del objeto 'options'.
let {title, width, height} = options;
// Asigna las propiedades title, width y height del objeto options
// a las variables con el mismo nombre.
alert(title);  // Muestra 'Menu'.
alert(width);  // Muestra 100.
alert(height); // Muestra 200.
