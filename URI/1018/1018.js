'use stric';

const lines = prompt('Calcula o menor número de notas possíveis (cédulas)').split(' ');

 let [valortotalNotas] = lines;

 const notas = [100, 50, 20, 10, 5, 2 , 1];

  console.log(valortotalNotas);

 for (let nota of notas){
     let qtdNotas = parseInt(valortotalNotas / nota);
     console.log(`${qtdNotas} nota(s) de R$ ${nota},00`);
     valortotalNotas = valortotalNotas % nota;
 }





