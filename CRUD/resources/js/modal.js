// Pega o modal
var modal = document.getElementById("myModal");

// Pega o botão que abre o modal
var btn = document.getElementById("btnCadastrarCliente");

// Pega o elemento <span> que fecha o modal
var span = document.getElementsByClassName("close")[0];

//Quando o usuário clicar no botão, abra o modal
btn.onclick = function() {
  modal.style.display = "block";
}

// Quando o usuário clicar em <span> (x), feche o modal
span.onclick = function() {
  modal.style.display = "none";
}

// Quando o usuário clicar em qualquer lugar fora do modal, feche-o
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}