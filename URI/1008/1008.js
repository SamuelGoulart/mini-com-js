'use stric';

const lines = prompt('Iforme o número de um funcionário, seu número de horas trabalhadas, o valor que recebe por hora.').split(' ');

const [numeroFuncionario, horasTrabalhadas, valorHoraTrabalhadas] = lines.map(Number);

const salario = horasTrabalhadas * valorHoraTrabalhadas;

console.log(`NUMBER = ${numeroFuncionario}`);
console.log(`SALARY = U$ ${salario.toFixed(2)}`);