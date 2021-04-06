const img = document.getElementById('img');
const buttons = document.getElementById('buttons');
let colorIndex = 0;
let intervalId = null;

const trafficLight =  (event) =>{
   stopAutomatic();
  //console.log (event);
  // console.log (event.target);
  // console.log (event.target.id);
  turnOn[event.target.id]();

}

const nextIndex = () => {
     //operação ternaria 
     // Isso é a mesma coisa do if e else.
      colorIndex = colorIndex < 2 ? ++colorIndex : 0;

    // if (colorIndex < 2) {
    //     colorIndex++
    // }else{
    //     colorIndex =0;
    // }
}

const stopAutomatic = () =>{
    clearInterval(intervalId);
}

const changecolor =  () =>{
    const colors = ['red', 'yellow', 'green']
    const color = [colors[colorIndex]];
    turnOn[color]();
    nextIndex();
}
const turnOn = {
    // Aqui está dentro de um objeto, logo não precisa de ponto e virgulo
    'red':    () => img.src = './img/vermelho.png',
    'yellow': () => img.src = './img/amarelo.png',
    'green':  () => img.src = './img/verde.png',
    'automatic': () => intervalId = setInterval(changecolor, 1000)

}

buttons.addEventListener('click', trafficLight);