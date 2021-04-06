function vermelho() {
    document.getElementById("img_semaforo").setAttribute("src", "img/vermelho.png");
}
function verde() {
    document.getElementById("img_semaforo").setAttribute("src", "img/verde.png");
}
function amarelo() {
    document.getElementById("img_semaforo").setAttribute("src", "img/amarelo.png");
}

const img_array = ["img/vermelho.png", "img/amarelo.png", "img/verde.png"];
let index = 0;
function slide() {

    document["img_semaforo"].src = img_array[index];
    index++;
    if (index >= img_array.length) {
        index = 0;
    }
}

function acionaSlider() {
        setInterval("slide()", 1000);
}
