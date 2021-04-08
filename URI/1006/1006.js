'use stric';

const lines = prompt('Digite 3 notas, de 0 a 10.').split(' ');

const [nota, nota1, nota2] = lines.map(Number);

const mediaPonderada = ((nota * 2) + (nota1 * 3) + (nota2 * 5)) / 10.0;

console.log(`MEDIA = ${mediaPonderada.toFixed(1)}`);