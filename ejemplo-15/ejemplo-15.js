'use strict';

// Fecha actual
let date = new Date();

// Obtiene la hora en tu zona horaria actual.
alert(date.getHours());

// Obtiene la hora en la zona horaria UTC+0 (hora de Londres sin horario de verano).
alert(date.getUTCHours());
