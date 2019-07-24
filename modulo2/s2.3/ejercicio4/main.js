'use strict';
const edadPerro = parseInt(prompt('¿cuántos años tiene tu perro?')) ;

if (edadPerro ===1) {
  console.log('tu perro tiene 15 años');
} else if (edadPerro===2) {
  console.log('tu perro tiene 9 años');
} else {
  console.log('tu perro tiene ' + edadPerro*5 + ' años');
}
