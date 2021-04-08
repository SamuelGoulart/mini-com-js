'use stric';

const lines = prompt('Digite 2 números, para saber o produto entre os mesmos.').split(' ');

const [nun, nun1] = lines.map(Number);

const produto = nun * nun1;

console.log(`PROD = ${produto}`);