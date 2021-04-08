'use stric';

const lines = prompt('Informe há distância total percorrida (em Km) e o total de combustível gasto (em litros)');

const [distanciaKM, combustivelGasto] = input.split('\n');

const km_Litro = distanciaKM / combustivelGasto;

console.log(`${km_Litro.toFixed(3)} km/l`);