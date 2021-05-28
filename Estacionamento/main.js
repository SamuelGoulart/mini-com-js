'use strict';

const readDB = () => JSON.parse(localStorage.getItem('bank')) ?? []

const setDB = (bank) => localStorage.setItem('bank', JSON.stringify(bank))

const insertDB = (dadosCadastro) => {
    // 1 - ler(abrir) o banco de dados
    const bank = readDB()
    // 2 - adicionar o novo cliente
    bank.push(dadosCadastro)
    // 3 - enviar(salvar) ou fechar o banco de dados
    setDB(bank)
}

const createRegistration = (dadosCadastro, index) => {
    const cadastro = document.createElement('tr');
    cadastro.innerHTML = `  
    <td>${dadosCadastro.nome}</td>
    <td>${dadosCadastro.placa}</td>
    <td>20.02.2021</td>
    <td>16:45</td>
    <td>
        <button class="btnComprovante" type="button">Comprovante</button>
        <button class="btnEditar" data-indice="0" >Editar</button>
        <button class="btnExcluir" type="button" data-action="deletar-${index}">Excluir</button>
    </td>`
  
    document.getElementById('tbody').appendChild(cadastro);
}

const updateTable = () => {
    // // 0 - limpar tabela
    // clearTable ()
    // 1 - ler o banco de dados
    const bank = readDB()
    // 2 - Criar linhas na tbody com os registros
    bank.forEach(createRegistration)
}

const saveClient = () => {

        const newClient = {
            nome: document.querySelector('#nome').value,
            placa: document.querySelector('#placaDoCarro').value,
        }
        insertDB(newClient)

        updateTable()
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

const actionButttons = (event) => {
    const element = event.target
    if (element.type === 'button') {
        const action = element.dataset.action.split('-')
        if (action[0] === 'deletar') {
            deleteClient(action[1])
        } else (
            editClient (action[1])
        )
    }
}


document.querySelector('#btnSalvar')
    .addEventListener('click', saveClient)


document.querySelector('#tabelaClientes')
    .addEventListener('click', actionButttons)

    
updateTable()
