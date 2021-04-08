'use stric';

const lines = prompt('Digite 4 valores, para saber a diferença do produto do 1º e 2º, valor digitado.').split(' ');

const [var0, var1, var2, var3] = lines.map(Number);

const difProduVar1Var2 = (var0 * var1 - var2 * var3);

console.log(`DIFERENCA = ${difProduVar1Var2}`);