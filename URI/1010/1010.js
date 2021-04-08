'use stric';

const lines = prompt('Informe o código de uma peça 1º, o número de peças 1º, o valor unitário de cada peça 1º').split(' ');

const liness = prompt('Informe o código de uma peça 1º, o número de peças 1º, o valor unitário de cada peça 1º').split(' ');

const [codigoPecas, qtdItem1, valorUnitario] = lines.map(Number);
const [codigoPecas1, qtdItem2, valorUnitarioItem2] = liness.map(Number);

const valorTotalPagar = qtdItem1 * valorUnitario + qtdItem2 * valorUnitarioItem2;


console.log(`VALOR A PAGAR: R$ ${valorTotalPagar.toFixed(2)}`);




// Código usado para Verificar no URI ONLINE JUDGE


// const [codigoPecas, qtdItem1, valorUnitario] = lines.shift().split(" ");
// const [codigoPecas1, qtdItem2, valorUnitarioItem2] = lines.shift().split(" ");

// const valorTotalPagar = qtdItem1 * valorUnitario + qtdItem2 * valorUnitarioItem2;


// console.log(`VALOR A PAGAR: R$ ${valorTotalPagar.toFixed(2)}`)


