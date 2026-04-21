/*
*****************************************************************************************
* Objetivo: Manipular dados de cadastro e listagem de dados de clientes.
* Data: 20/04/2026
* Autor: Diego Araujo
* Versão: 1.0
* Git: https://github.com/Dieggo775/projeto_fecaf_Javascript.git
*****************************************************************************************
*/

/*
    var - Cria uma variavel/objeto (metodo mais antigo)

    let - Cria uma variavel/objeto de nivel de escopo local no projeto

    const - Cria uma variavel/objeto de nivel de escopo local no projeto, porem o valor atribuido a essa variavel/objeto nao pode ser alterado durante a execucao do projeto

    Copnversao de tipos de dados:
    String para numero
        Number() - Converte um valor para number
        parseInt() - Converte um valor para inteiro
        parseFloat() - Converte um valor para float
    numero para string
        String() - Converte um valor para string
        toString() - Converte um valor para string
    

*/

//Escopo global
const botaoSalvar = document.getElementById('salvar')
const nome = document.getElementById('nome')
const email = document.getElementById('email')

var contadorRegistros = 1

//Funcao para retirar e validar os dados do formulario
const getDados = function() {
    let status = true

    //Zerar o background dos campos
    nome.style.backgroundColor = '#ffffff'
    email.style.backgroundColor = '#ffffff'
    
    // Validação de campos obrigatorios
    if(nome.value == '') {
        alert('O campo nome é obrigatório')
        nome.style.backgroundColor = '#f11316a4'
        status = false
    }

    if(email.value == '') {
        alert('O campo email é obrigatório')
        email.style.backgroundColor = '#f11316a4'
        status = false
    }

    return status
}

// Funcao para inserir os dados do cliente na tabela de listagem
const setDadosList = function() {

    if (contadorRegistros <= 4) {
        let colunaNome = document.getElementById('nome' + contadorRegistros)
        let colunaEmail = document.getElementById('email' + contadorRegistros)

        colunaNome.innerText = nome.value
        colunaEmail.innerText = email.value

        contadorRegistros += 1
    }else{
        alert('Não é possivel incluir novos clientes')
    }
}

//Funcao para impedir digitacao numeros no campo nome
const blockNumber = function(tecla) {
    if (tecla.charCode >= 33 && tecla.charCode <= 64) {
        return false
    }
}

botaoSalvar.addEventListener('click', function() {
    // Se os dados estiverem OK, entao iremos chamar a funcao para listar os dados
    if (getDados()) {
        setDadosList()
    }
})

nome.addEventListener('keypress', function(event) {
    if (blockNumber(event) == false) {
        event.preventDefault() //Cancela o evento de digitacao de numeros
    }
})