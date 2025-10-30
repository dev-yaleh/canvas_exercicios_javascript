//Importando biblioteca
const leia = require('readline-sync')
 
/*
Parametros:
    -N° reais: n1 e n2
    -código de operação (1 a 4);
    - 
Exibir:
    - Operaçao escolhida entre n1 e n2;
    -Mensagem de "Operação inválida", se código for diferente de 1 a 4.;
*/

//Declarando variaveis
let n1, n2, codigo, resultado

//Entrada de dados
console.log("Digite o primeiro número: ")
n1 = leia.questionFloat()
console.log("Digite o segundo número: ")
n2 = leia.questionFloat()
console.log("Escolha a operação desejada: \n1- Soma \n2- Subtração \n3- Multiplicação \n4- Divisão")
codigo = leia.questionInt()

switch(codigo){
    case 1:
        resultado = n1 + n2
        console.log("\n" + n1.toFixed(2) + " + " + n2.toFixed(2) + " = " + resultado.toFixed(2))
        break
    case 2:
        resultado = n1 - n2
        console.log("\n" + n1.toFixed(2) + " - " + n2.toFixed(2) + " = " + resultado.toFixed(2))
        break    
    case 3:
        resultado = n1 * n2
        console.log("\n" + n1.toFixed(2) + " * " + n2.toFixed(2) + " = " + resultado.toFixed(2))
        break    
    case 4:
        resultado = n1 / n2
        console.log("\n" + n1.toFixed(2) + " / " + n2.toFixed(2) + " = " + resultado.toFixed(2))
        break
    default:
        console.log("\nOperação inválida! Escolha um código entre 1 e 4.")
}

console.log("\nFim do programa")