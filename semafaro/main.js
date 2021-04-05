function vermelho() {
    document.getElementById("img_semaforo").setAttribute("src", "img/vermelho.png");
}
function verde() {
    document.getElementById("img_semaforo").setAttribute("src", "img/verde.png");
}
function amarelo() {
    document.getElementById("img_semaforo").setAttribute("src", "img/amarelo.png");
}



var img_semaforo = document.getElementById("img_semaforo");
var img_array = ["img/vermelho.png", "img/amarelo.png", "img/verde.png"];
var index = 0;
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
