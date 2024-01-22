'use strict';

let user = {
  name: "John",
  age: 30
};

// Bucle sobre los valores del objeto 'user'.
for (let value of Object.values(user)) {
  // Object.values(user) devuelve un array de los valores del objeto 'user'.
  // En este caso, devuelve ['John', 30].
  alert(value); // Muestra cada valor del objeto, primero 'John', luego 30.
}
