'use stric';

const lines = prompt('Cacula área, triângulo, círculo, trapézio, quadrado, retângulo').split(' ');

//const [A, B , C] = lines.shift().split(' ');
const [A, B , C] = lines.map(Number);

const pi = 3.14159;

const areaTriangulo = A * C / 2.0;
const areaCirculo = pi * Math.pow(C, 2);
const areaTrapezio = ((parseFloat(A) + parseFloat(B)) * C) / 2.0;
const areaQuadrado = B * B;
const areaRetangulo = A * B;

console.log(`TRIANGULO: ${areaTriangulo.toFixed(3)}`);
console.log(`CIRCULO: ${areaCirculo.toFixed(3)}`);
console.log(`TRAPEZIO: ${areaTrapezio.toFixed(3)}`);
console.log(`QUADRADO: ${areaQuadrado.toFixed(3)}`);
console.log(`RETANGULO: ${areaRetangulo.toFixed(3)}`);
