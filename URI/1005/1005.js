'use stric';

const lines = prompt('Digite 2 notas, de 0 a 10.').split(' ');

const [nota, nota1] = lines.map(Number);

const mediaPonderada = ((nota * 3.5) + (nota1 * 7.5)) / 11;

console.log(`MEDIA = ${mediaPonderada.toFixed(5)}`);