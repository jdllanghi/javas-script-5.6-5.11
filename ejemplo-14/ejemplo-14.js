'use strict'
// Definición del objeto `range` con propiedades `from` y `to`.
let range = {
    from: 1,
    to: 5
  };
  
  // Implementación de la función `Symbol.iterator`, que es una propiedad
  // especial que define cómo se itera sobre el objeto.
  range[Symbol.iterator] = function() {
  
    // La función retorna un objeto iterador.
    // Este objeto iterador debe tener un método `next`.
    return {
      current: this.from, // Inicializa `current` con el valor de inicio del rango.
      last: this.to,      // Establece `last` con el valor final del rango.
  
      // Método `next`, que se llama en cada iteración del bucle for..of.
      next() {
        // Verifica si `current` es menor o igual a `last`.
        if (this.current <= this.last) {
          // Si es así, retorna un objeto con `done: false` y el valor actual de `current`.
          // Luego, incrementa `current` para la próxima llamada.
          return { done: false, value: this.current++ };
        } else {
          // Si `current` es mayor que `last`, retorna un objeto con `done: true`,
          // indicando que la iteración ha terminado.
          return { done: true };
        }
      }
    };
  };
  
  // Uso del objeto `range` con un bucle for..of.
  // El bucle for..of llama automáticamente al método `next` del iterador.
  for (let num of range) {
    alert(num); // Muestra los números del 1 al 5, uno tras otro.
  }
  
  // Los comentarios explican cómo el objeto `range` se convierte en un iterable
  // y cómo se separa la lógica de iteración del objeto en sí, usando un objeto iterador.
  