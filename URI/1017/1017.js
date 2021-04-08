'use stric';

const lines = prompt('Gasto de Combustível, informe tempo gasto na viagem (em horas) e a velocidade média durante a mesma (em km/h).').split(' ');

const [horas, velocidadeMedia] = lines.map(Number);

const gastoCombustivel = (horas * velocidadeMedia) / 12;

console.log(`${gastoCombustivel.toFixed(3)}`);