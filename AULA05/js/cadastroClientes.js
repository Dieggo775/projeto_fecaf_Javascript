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

const getDados = function() {
    let nome = document.getElementById('nome')
    let email = document.getElementById('email')

    //Zerar o background dos campos
    nome.style.backgroundColor = '#ffffff'
    email.style.backgroundColor = '#ffffff'
    
    // Validação de campos obrigatorios
    if(nome.value == '') {
        alert('O campo nome é obrigatório')
        nome.style.backgroundColor = '#f11316a4'
    }

    if(email.value == '') {
        alert('O campo email é obrigatório')
        email.style.backgroundColor = '#f11316a4'
    }

    // console.log('Nome: ' + nome.value)
    // console.log('Email: ' + email.value)
}

botaoSalvar.addEventListener('click', function() {
    getDados()
})