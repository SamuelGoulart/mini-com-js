'use strict'

//push adiciona 
// forEach ler os valores do array
// splice apaga um dado do banco de dados
// nome_do_banco.splice(1,1)
// banco.push({
//     nome: 'Samuel',
//     email: 'ana@gmail.com',
//     celular: '12355544',
//     cidade: 'Jandira'
// })

// $ para um único elemento
const $ = (element) => document.querySelector(element)
// $ para vários elemento
const $$ = (element) => document.querySelectorAll(element)

const openModal = () => $('#modal').classList.add('active')
const closeModal = () => {
    $('#modal').classList.remove('active')
    $('#displayNome').classList.add('displayNome')
    $('#salvar').classList.remove('displayNome')
}

const clearInput = () => {
    // Array.from trasforma é um array, possibilidando o uso do map
    // Sem o Array.from ele é um  Node List
    const inputs = Array.from($$('.modal input'))
    // O forEach vai varrer o array, é pegar todos os inputs e colocar o valor como '', nada
    inputs.forEach(input => input.value = '')
}

const readDb = () => JSON.parse(localStorage.getItem('banco')) ?? [];

const validateInputs = () => {

    const inputs = Array.from($$('.modal input'))
    
    if (inputs[0].value == "") {
        inputs[0].focus()
    }else if (inputs[1].value == ""){
        inputs[1].focus()
    }else if (inputs[2].value == ""){
        inputs[2].focus()
    }else if (inputs[3].value == ""){
        inputs[3].focus()
    }else{
        saveClient()
    }
}

const createRow = (client, index) => {
    const tabelaClientes = $('#tabelaClientes tbody')
    const newTr = document.createElement('tr')
    newTr.innerHTML = `
                    <td>${client.nome}</td>
                    <td>${client.email}</td>
                    <td>${client.celular}</td>
                    <td>${client.cidade}</td>
                    <td>
                        <button data-indice=${index} class="btn blue">Editar</button>
                        <button class="btn red" type="button" >Excluir</button>
                    </td>`
    tabelaClientes.appendChild(newTr);
}

const clearTable = () => {
    const tabelaClientes = $('#tabelaClientes tbody')
    while (tabelaClientes.firstChild) {
        tabelaClientes.removeChild(tabelaClientes.lastChild)
    }
}

const loadTable = () => {
    const banco = readDb();
    clearTable();
    banco.forEach(createRow)
}

const saveClient = () => {
    const banco = readDb()
    const newClient = {
        nome: $('#nome').value,
        email: $('#email').value,
        celular: $('#celular').value,
        cidade: $('#cidade').value,
    }
    banco.push(newClient)
    localStorage.setItem('banco', JSON.stringify(banco))
    closeModal()
    clearInput()
    loadTable()
}

const deleteClient = (index) => {
    const banco = readDb()
    banco.splice(index, 1)
    localStorage.setItem('banco', JSON.stringify(banco))
    clearTable()
    loadTable()
}

const updateCliente = () => {

    saveClient()
    deleteClient()
}

const showdataUpdate = (index) => {

    $('#salvar').classList.add('displayNome')
    $('#displayNome').classList.remove('displayNome')

    const banco = readDb();

    const inputs = Array.from($$('.modal input'))
    inputs[0].value = banco[index].nome
    inputs[1].value = banco[index].email
    inputs[2].value = banco[index].celular
    inputs[3].value = banco[index].cidade

    openModal()
}

const btn_click = (event) => {
    const button = event.target
    if (button.type == "button") {
        const index = button.dataset.indice
        deleteClient(index)
        console.log(index)
    } else if (button.type == "submit") {
        const index = button.dataset.indice
        showdataUpdate(index)
    }
}

$('#cadastrarCliente').addEventListener('click', openModal)

$('#close').addEventListener('click', () => { closeModal(); clearInput() })

$('#cancelar').addEventListener('click', () => { closeModal(); clearInput() })

$('#salvar').addEventListener('click', validateInputs)

loadTable()

$('#tabelaClientes').addEventListener('click', btn_click)

$('#displayNome').addEventListener('click', updateCliente)
