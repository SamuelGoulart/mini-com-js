'use strict';

const openModal = () => document.querySelector('#modal')
    .classList.add('active')

const closeModal = () => document.querySelector('#modal')
    .classList.remove('active')

const readDB = () => JSON.parse(localStorage.getItem('bank')) ?? []

const setDB = (bank) => localStorage.setItem('bank', JSON.stringify(bank))

const readDBPrice = () => JSON.parse(localStorage.getItem('bankPrice')) ?? []

const setDBPrice = (bankPrice) => localStorage.setItem('bankPrice', JSON.stringify(bankPrice))

const insertDB = (dadosCadastro) => {
    // 1 - ler(abrir) o banco de dados
    const bank = readDB()
    // 2 - adicionar o novo cliente
    bank.push(dadosCadastro)
    // 3 - enviar(salvar) ou fechar o banco de dados
    setDB(bank)
}

const insertDBPrice = (registrationPrice) => {
    // 1 - ler(abrir) o banco de dados
    const bankPrice = readDBPrice()
    // 2 - adicionar o novo cliente
    bankPrice.push(registrationPrice)
    // 3 - enviar(salvar) ou fechar o banco de dados
    setDBPrice(bankPrice)
}

const createRegistration = (dadosCadastro, index) => {
    const cadastro = document.createElement('tr')
    cadastro.innerHTML = `  
    <td>${dadosCadastro.name}</td>
    <td>${dadosCadastro.hescores}</td>
    <td>${dadosCadastro.date}</td>
    <td>${dadosCadastro.time}</td>
    <td>
        <button type="button" class="btnVerde" >Comprovante</button>
        <button type="button" class="btnAmarelo"  id="editar" data-action="editar-${index}">Editar</button>
        <button type="button" class="btnExcluir" data-action="deletar-${index}">Excluir</button>
    </td>`

    document.getElementById('tbody').appendChild(cadastro)
}

const clearTable = () => {
    const tabelaClientes = document.querySelector('#tbody')
    while (tabelaClientes.firstChild) {
        tabelaClientes.removeChild(tabelaClientes.lastChild)
    }
}

const updateTable = () => {
    // // 0 - limpar tabela
    clearTable()
    // 1 - ler o banco de dados
    const bank = readDB()
    // 2 - Criar linhas na tbody com os registros
    bank.forEach(createRegistration)
}

const date = () => {
    let date = new Date();
    let morning = String(date.getDate()).padStart(2, '0');
    let month = String(date.getMonth() + 1).padStart(2, '0');
    let year = date.getFullYear();
    let currentDate = morning + '.' + month + '.' + year;
    return currentDate
}

const hour = () => {
    let today = new Date();
    let hours = today.getUTCHours();
    let minutes = today.getUTCMinutes();
    let currentTime = (hours - 3) + ":" + minutes
    return currentTime
}

const clearInput = () => {
    document.querySelector('#nome').value = ''
    document.querySelector('#email').value = ''
    document.querySelector('#celular').value = ''
    document.querySelector('#cidade').value = ''
}

const saveClient = () => {

    const newClient = {
        name: document.querySelector('#nome').value,
        hescores: document.querySelector('#placaDoCarro').value,
        date: date(),
        time: hour()
    }
    insertDB(newClient)

    updateTable()

    clearInput()
}

const savePrice = () => {

    const price = {
        onehourPrice: document.querySelector('#umaHoraPreco').value,
        otherHoursPrice: document.querySelector('#precoAteUmaHora').value
    }

    insertDBPrice(price)

    closeModal()
}

const deleteClient = (index) => {
    const db = readDB()
    const resp = confirm(`Deseja realmente deletar ${db[index].nome}?`)

    if (resp) {
        db.splice(index, 1)
        setDB(db)
        updateTable()
    }
}


const editClient = (index) => {
    const db = readDB()
    document.querySelector('#nome').value = db[index].nome
    document.querySelector('#email').value = db[index].email
    document.querySelector('#celular').value = db[index].celular
    document.querySelector('#cidade').value = db[index].cidade
    document.querySelector('#nome').dataset.index = index
    openModal();
}


const actionButttons = (event) => {
    const element = event.target
    if (element.type === 'button') {
        const action = element.dataset.action.split('-')
        if (action[0] === 'deletar') {
            deleteClient(action[1])
        } else (
            editClient(action[1])
        )
    }
}

document.querySelector('#btnPrecos')
    .addEventListener('click', openModal)

document.querySelector('#salvarPreco')
    .addEventListener('click', savePrice)

document.querySelector('#close')
    .addEventListener('click', () => { closeModal(); clearInput() })

document.querySelector('#cancelar')
    .addEventListener('click', () => { closeModal(); clearInput() })

document.querySelector('#btnSalvar')
    .addEventListener('click', saveClient)

document.querySelector('#tabelaClientes')
    .addEventListener('click', actionButttons)


updateTable()


