'use strict';

let banco = [
    { 'nome': 'Maria da silva', 'email': 'samuel.a.goulart@gmail.com', 'celular': '(11)999-9999', 'cidade': 'São Paulo' }
];

const criarCadastro = (nome, email, celular, cidade, indice) => {
    const linhasCadastrado = document.createElement('div');
    linhasCadastrado.classList.add('linhasCadastrado');
    linhasCadastrado.classList.add('campos');
    linhasCadastrado.innerHTML = `
        <p>${nome}</p>
        <p>${email}</p>
        <p>${celular}</p>
        <p>${cidade}</p>
        <div>
            <button class="btnSalvar_Editar" >Editar</button>
            <button class="btnCancelar_Excluir">Excluir</button>
        </div>
        `
    document.getElementById('cadastro').appendChild(linhasCadastrado);
}

const limparDados = () => {
    const todosOsDados = document.getElementById('cadastro');
    while (todosOsDados.firstChild) {
        todosOsDados.removeChild(todosOsDados.lastChild);
    }
}

const atualizarTela = () => {
    limparDados();
    banco.forEach( (linhasCadastrado, indice) => criarCadastro(linhasCadastrado.nome, linhasCadastrado.email, linhasCadastrado.celular, linhasCadastrado.cidade, indice));
}


const btnInserirDados = document.querySelector('#newCadastro');
btnInserirDados.addEventListener('click', function(inserirCadastro){

    inserirCadastro.preventDefault();
    const nome = document.querySelector("#nome").value;
    const email = document.querySelector("#email").value;
    const celular = document.querySelector("#celular").value;
    const cidade = document.querySelector("#cidade").value;
    banco.push({ 'nome': nome, 'email': email, 'celular': celular, 'cidade': cidade });
    atualizarTela();
    
});

// const clickTarefa = (evento) =>{
//     const elemento = evento.target
// }

// document.getElementById('cadastro').addEventListener('click', clickTarefa);
atualizarTela();



