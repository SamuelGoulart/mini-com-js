'use stric';

const lines = prompt('Digite os valores de entrada').split(' ');

//Desestruturação 
//const A = Number(lines[0]);
//const B = Number(lines[1]);

// Aqui o A e B está pegando valores diretamente de um array, por causa da desestruturação
const [A, B] = lines.map(Number);

const X  = A + B;

// Template string
console.log(`X = ${X}`);

//console.log("X = " + X);
