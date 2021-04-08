'use stric';

const lines = prompt('Digite 2 valores inteiros, para que seja realizado a soma dos mesmos.').split(' ');

const [A , B] = lines.map(Number);

const soma = A + B;

console.log(`SOMA = ${soma}`);