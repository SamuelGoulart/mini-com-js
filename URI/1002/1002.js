'use stric';

const lines = prompt('Digite o raio para calcular a circunferência.').split(' ');

const raio = Number(lines[0]);
const pi = 3.14159;

const area = pi *  raio ** 2;

console.log(`A=${area.toFixed(4)}`);
