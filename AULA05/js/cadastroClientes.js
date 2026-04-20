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

*/

//Escopo global
const botaoSalvar = document.getElementById('salvar')

const getDados = function() {
    let nome = document.getElementById('nome')
    let email = document.getElementById('email')

    console.log(nome.value)
    console.log(email.value)
}

botaoSalvar.addEventListener('click', function() {
    getDados()
})