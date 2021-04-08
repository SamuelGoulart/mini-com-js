'use stric';


const lines = prompt('Informe a distância (em Km) para ser calculado quanto tempo leva (em minutos) para o carro Y tomar essa distância do outro carro X.').split(' ');

const [km] = lines.map(Number);

const tempoTomarDistanciaCarroX = km  * 2;

console.log(`${tempoTomarDistanciaCarroX} minutos`);
