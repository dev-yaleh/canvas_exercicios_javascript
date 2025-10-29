//Importando biblioteca
const leia = require('readline-sync')

//Declarando variaveis
let n1, n2, n3, n4, diferenca1

//Entrada de dados
n1 = leia.questionFloat("Digite o primeiro número: \n")
n2 = leia.questionFloat("Digite o segundo número: \n")
n3 = leia.questionFloat("Digite o terceiro número: \n")
n4 = leia.questionFloat("Digite o quarto número: \n") 

diferenca1 = (n1 * n2) - (n3 * n4)

//Saida de dados
console.log("A diferença é: " + diferenca1)