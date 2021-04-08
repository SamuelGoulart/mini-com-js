'use stric';

const lines = prompt('Informe um valor inteiro, que é o tempo de duração em segundos de um determinado evento em uma fábrica').split(' ');

const [segundos] = lines;

const horas = parseInt(segundos / 3600);

const segundosMinutos =  (segundos - (parseInt(horas * 3600)));
const minutos = parseInt(segundosMinutos / 60);

const segundoss = segundos - (horas * 3600 + minutos * 60) ;

console.log(`${horas}:${minutos}:${segundoss}`);