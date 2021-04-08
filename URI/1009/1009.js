'use stric';

const lines = prompt('Informe o nome do vendedor, o seu salário fixo e o total de vendas efetuadas por ele no mês.').split(' ');

const [nomeVendedor, salarioFixo, totalVendasMes] = lines.map(Number);

const salarioComissao =  salarioFixo  + (totalVendasMes * 0.15);

console.log(`TOTAL = R$ ${salarioComissao.toFixed(2)}`);