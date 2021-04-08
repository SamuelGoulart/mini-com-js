'use stric';

const lines = prompt('Informe dois valores correspondentes aos eixos x e y, p1(x1,y1)').split(' ');

const liness = prompt('Informe dois valores correspondentes aos eixos x e y, p1(x2,y2)').split(' ');

const [x1, y1] = lines.map(Number);
const [x2, y2] = liness.map(Number);

const semiDistancia = Math.pow(x2 - x1, 2)  +  Math.pow(y2 - y1, 2) ;
const distancia = Math.sqrt(semiDistancia);

console.log(`${distancia.toFixed(4)}`);


// Código usado para Verificar no URI ONLINE JUDGE

// const [x1 , y1] = lines.shift().split(" ");
// const [x2 , y2] = lines.shift().split(" ");

// const semiDistancia = Math.pow(x2 - x1, 2)  +  Math.pow(y2 - y1, 2) ;
// const distancia = Math.sqrt(semiDistancia);

// console.log(`${distancia.toFixed(4)}`);
