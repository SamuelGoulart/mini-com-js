'use stric';


const input = prompt('Insera três valores, para saber o MAIOR, entre eles. ').split(' ');

const [var1, var2, var3] = input.map(item => parseInt(item));

//const [var1, var2, var3] = input.split(" ").map(item => parseInt(item));

const maiorAB = (var1 + var2 + Math.abs(var1 - var2)) / 2;

const maiorABC = (maiorAB + var3 + Math.abs(maiorAB - var3)) / 2;

console.log(`${maiorABC} eh o maior`);
