'use strict';

let prices = Object.fromEntries([
  ['banana', 1],
  ['orange', 2],
  ['meat', 4]
]);

// ahora prices es { banana: 1, orange: 2, meat: 4 }
alert(prices.orange); // 2
