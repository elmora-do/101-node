/*
 * Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 */
export default function (): number[] {
  const primes: number[] = [];
  for (let i = 2; i <= 100; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
}

function isPrime(num: number): boolean {
  const maxDividers = 2;
  let dividers = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      dividers += 1;
    }
    if (dividers > maxDividers) {
      break;
    }
  }
  return dividers === maxDividers;
}
