/*
 * Escribe un programa que muestre por consola (con un print) los
 * números de 1 a 100 (ambos incluidos y con un salto de línea entre
 * cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 */
console.log('********** 01 FizzBuzz **********');

const from = 1;
const to = 100;
const fizz = 'fizz';
const buzz = 'buzz';

for (let index = from; index <= to; index++) {
  if (index % 3 === 0 && index % 5 === 0) {
    console.log(`${fizz}${buzz}\n`);
  } else if (index % 3 === 0) {
    console.log(`${fizz}\n`);
  } else if (index % 5 === 0) {
    console.log(`${buzz}\n`);
  } else {
    console.log(`${index}\n`);
  }
}

console.log('********** 01 FizzBuzz FIN **********');
