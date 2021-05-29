'use strict';

const openModalPrice = () => document.querySelector('#modalPreco')
    .classList.add('active')

const openModalEditPrice = () => document.querySelector('#modalEditar')
    .classList.add('active')

const openModalProof = () => document.querySelector('#modalComprovante')
    .classList.add('active')

const closeModalPrice = () => document.querySelector('#modalPreco')
    .classList.remove('active')

const closeModalEditData = () => document.querySelector('#modalEditar')
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
    const bankPrice = readDBPrice()
    bankPrice.push(registrationPrice)
    setDBPrice(bankPrice)
}

const updateClient = () => {

    const updatedData = {
        name: document.querySelector('#nomeEditar').value,
        hescores: document.querySelector('#placaEditar').value,
        date: document.querySelector('#dataEditar').value,
        time: document.querySelector('#horaEditar').value
    }

    const index = document.querySelector('#nomeEditar').dataset.index

    const db = readDB()
    db[index] = updatedData
    setDB(db)

    closeModalEditData()
    updateTable()
}

const createRegistration = (dadosCadastro, index) => {
    const cadastro = document.createElement('tr')
    cadastro.innerHTML = `  
    <td>${dadosCadastro.name}</td>
    <td>${dadosCadastro.hescores}</td>
    <td>${dadosCadastro.date}</td>
    <td>${dadosCadastro.time}</td>
    <td>
        <button type="button" class="btnVerde" data-action="comprovante-${index}" >Comprovante</button>
        <button type="button" class="btnAmarelo" data-action="editar-${index}">Editar</button>
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

    const dbPrice = readDBPrice()
    const price = {
        onehourPrice: document.querySelector('#umaHoraPreco').value,
        otherHoursPrice: document.querySelector('#precoAteUmaHora').value
    }

    if (dbPrice == '') {

        insertDBPrice(price)
    } else {
        dbPrice[0] = price
        setDBPrice(dbPrice)
    }

    closeModalPrice()

}

const deleteClient = (index) => {
    const db = readDB()
    const resp = confirm(`Deseja realmente deletar ${db[index].name}?`)

    if (resp) {
        db.splice(index, 1)
        setDB(db)
        updateTable()
    }
}


const editClient = (index) => {

    const db = readDB()

    document.querySelector('#nomeEditar').value = db[index].name
    document.querySelector('#placaEditar').value = db[index].hescores
    document.querySelector('#dataEditar').value = db[index].date
    document.querySelector('#horaEditar').value = db[index].time
    document.querySelector('#nomeEditar').dataset.index = index

    openModalEditPrice()
}

const showModalPrice = () => {

    const dbPrice = readDBPrice()
    console.log(dbPrice)

    document.querySelector('#umaHoraPreco').value = dbPrice[0].onehourPrice
    document.querySelector('#precoAteUmaHora').value = dbPrice[0].otherHoursPrice

}

const proof = () =>{
    openModalProof()

}

const actionButttons = (event) => {
    const element = event.target
    if (element.type === 'button') {
        const action = element.dataset.action.split('-')
        if (action[0] === 'deletar') {
            deleteClient(action[1])
        } else if (action[0]== 'editar') {
            editClient(action[1])
        }else{
            proof(action[1])
        }
    }
}

document.querySelector('#btnPreco')
    .addEventListener('click', () => { openModalPrice(); showModalPrice() })

document.querySelector('#salvarPreco')
    .addEventListener('click', savePrice)

document.querySelector('#close')
    .addEventListener('click', () => { closeModalPrice(); clearInput() })

document.querySelector('#closeEditar')
    .addEventListener('click', () => { closeModalEditData(); clearInput() })

document.querySelector('#cancelar')
    .addEventListener('click', () => { closeModalPrice(); clearInput() })

document.querySelector('#cancelarEditarDados')
    .addEventListener('click', () => { closeModalEditData(); clearInput() })

document.querySelector('#btnSalvar')
    .addEventListener('click', saveClient)

document.querySelector('#btnAtualizarCliente')
    .addEventListener('click', updateClient)

document.querySelector('#tabelaClientes')
    .addEventListener('click', actionButttons)


updateTable()


