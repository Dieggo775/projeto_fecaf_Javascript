
//funcao tradicional (antigo - pouco utilizado)
function somarValores() {

    var numero1 = document.getElementById('valor1')
    var numero2 = document.getElementById('valor2')

    var soma = Number(numero1.value) + Number(numero2.value)

    alert('A soma dos valores é: ' + soma)
}

// funcao anonima
var somarValoresNovos = function() {
    var numero1 = document.getElementById('valor1')
    var numero2 = document.getElementById('valor2')

    var soma = Number(numero1.value) + Number(numero2.value)

    alert('O resultado dos valores é: ' + soma)

}

//funcao de seta (arrow function) (mais moderna - mais utilizada)
var soma = () => {
    var numero1 = document.getElementById('valor1')
    var numero2 = document.getElementById('valor2')

    var soma = Number(numero1.value) + Number(numero2.value)

    alert('O resultado desta soma sera: ' + soma)

}