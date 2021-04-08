'use stric';

const lines = prompt('Informe um valor inteiro correspondente à idade de uma pessoa em dias.').split(' ');

const [dias] = lines;


const anos = parseInt(dias / 365);
const mes =  parseInt((dias - (anos * 365)) / 30);
const dia = parseInt(dias - (anos * 365)) - (mes * 30);

console.log(`${anos} ano(s)`);
console.log(`${mes} mes(es)`);
console.log(`${dia} dia(s)`);