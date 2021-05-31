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

const closeModalProof = () => document.querySelector('#modalComprovante')
    .classList.remove('active')

const closeComprovante = () => document.querySelector('#modalComprovante')
    .classList.remove('active')

const readDB = () => JSON.parse(localStorage.getItem('bank')) ?? []

const setDB = (bank) => localStorage.setItem('bank', JSON.stringify(bank))

const readDBPrice = () => JSON.parse(localStorage.getItem('bankPrice')) ?? []

const setDBPrice = (bankPrice) => localStorage.setItem('bankPrice', JSON.stringify(bankPrice))

const insertDB = (dadosCadastro) => {
    const bank = readDB()
    bank.push(dadosCadastro)
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
    clearTable()
    const bank = readDB()
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
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let currentTime = (hours) + ":" + minutes
    return currentTime
}

const clearInput = () => {
    document.querySelector('#nome').value = ''
    document.querySelector('#placaDoCarro').value = ''
}
const isValidForm = () => document.querySelector('.formCadastro').reportValidity()

const saveClient = () => {
    const dbPrice = readDBPrice()

    if (isValidForm()) {

        if (dbPrice == '') {
            confirm("Deve ser informado os preços, antes de inserir um cliente")
            openModalPrice()

        } else {
            const newClient = {
                name: document.querySelector('#nome').value,
                hescores: document.querySelector('#placaDoCarro').value,
                date: date(),
                time: hour()
            }

            insertDB(newClient)
        }

        updateTable()

        clearInput()

    }
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

const applyNumericMask = (number) => {
    number = number.replace(/\D/g, "")
    number = number.replace(/(\d{1})(\d{5})$/, "$1.$2")
    number = number.replace(/(\d{1})(\d{1,2})$/, "$1,$2")
    return number
}

const applyMask = (event) => {
    event.target.value = applyNumericMask(event.target.value)
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
const printOutProof = (index) => {

    const db = readDB()
    const dbPrice = readDBPrice()
    document.querySelector('#nomeComprovante').value = db[index].name
    document.querySelector('#placaComprovante').value = db[index].hescores
    document.querySelector('#dataComprovante').value = db[index].date
    const time = document.querySelector('#horaComprovante').value = db[index].time
    document.querySelector('#nomeComprovante').dataset.index = index

    //Trasformar há hora e minutos da chegada em segundos
    const hoursArrivel = parseInt(time.substr(0, 2)) * 3600
    const minutesArrivel = parseInt(time.substr(3, 4)) * 60

    //Trasformar a hora e minutos de saída em segundos
    const departureHours = parseInt(hour().substr(0, 2)) * 3600
    const outgoingMinutes = parseInt(hour().substr(3, 4)) * 60

    // Segundos de saída menos segundos de entrada
    const secondsOfArriveMinusSecondOfExit = ((departureHours + outgoingMinutes) - (hoursArrivel + minutesArrivel))

    // Quantidade de horas que fica estacionado
    const numberOfHoursThatAreParked = secondsOfArriveMinusSecondOfExit / 3600

    if (numberOfHoursThatAreParked <= 1) {
        document.querySelector('#valorPagar').value = 'R$ ' + dbPrice[0].onehourPrice
    } else {
        const onehourPrice = dbPrice[0].onehourPrice.replace(",", ".")
        const otherHoursPrice = dbPrice[0].otherHoursPrice.replace(",", ".")
        document.querySelector('#valorPagar').value = 'R$ ' + (otherHoursPrice * Math.trunc(numberOfHoursThatAreParked) + parseFloat(onehourPrice))
    }

    openModalProof()
}

const showModalPrice = () => {

    const dbPrice = readDBPrice()

    document.querySelector('#umaHoraPreco').value = dbPrice[0].onehourPrice
    document.querySelector('#precoAteUmaHora').value = dbPrice[0].otherHoursPrice
}

const actionButttons = (event) => {
    const element = event.target
    if (element.type === 'button') {
        const action = element.dataset.action.split('-')
        if (action[0] === 'deletar') {
            deleteClient(action[1])
        } else if (action[0] == 'editar') {
            editClient(action[1])
        } else {
            printOutProof(action[1])
        }
    }
}

document.querySelector('#btnPreco')
    .addEventListener('click', () => { openModalPrice(); showModalPrice() })

document.querySelector('#salvarPreco')
    .addEventListener('click', savePrice)

document.querySelector('#close')
    .addEventListener('click', closeModalPrice)

document.querySelector('#closeComprovante')
    .addEventListener('click', closeComprovante)

document.querySelector('#closeEditar')
    .addEventListener('click', closeModalEditData)

document.querySelector('#cancelar')
    .addEventListener('click', closeModalPrice)

document.querySelector('#cancelarEditarDados')
    .addEventListener('click', closeModalEditData)

document.querySelector('#cancelarComprovamte')
    .addEventListener('click', closeModalProof)

document.querySelector('#btnSalvar')
    .addEventListener('click', saveClient)

document.querySelector('#btnAtualizarCliente')
    .addEventListener('click', updateClient)

document.querySelector('#tabelaClientes')
    .addEventListener('click', actionButttons)

document.querySelector('#umaHoraPreco')
    .addEventListener('keyup', applyMask)

document.querySelector('#precoAteUmaHora')
    .addEventListener('keyup', applyMask)

document.querySelector('#btnImprimirComprovante')
    .addEventListener('click', () => { window.print() })

updateTable()


