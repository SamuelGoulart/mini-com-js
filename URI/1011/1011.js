'use stric';

const lines = prompt('Informe o (Raio), para calcular e mostre o volume de uma esfera').split(' ');

const [raio] = lines.map(Number);
const pi = 3.14159;

const volumeEsfera = 4/3.0 * pi * Math.pow(raio, 3);

console.log(`VOLUME = ${volumeEsfera.toFixed(3)}`)