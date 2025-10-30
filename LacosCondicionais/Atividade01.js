//Importando biblioteca
const leia = require('readline-sync')
 
//Declarando variaveis
let A, B, C, soma

//Entrada de dados
console.log("Digite o valor de A: ")
A = leia.questionFloat()
console.log("Digite o valor de B: ")
B = leia.questionFloat()
console.log("Digite o valor de C: ")
C = leia.questionFloat()

soma = A+B

//Processamento de dados e Saida
if(soma>C){
    console.log("\nA soma de A + B é maior que C")
} 
    else if(soma<C){
        console.log("\nA soma de A + B é menor que C")
    }   
    else if(soma==C){
        console.log("\nA soma de A + B é igual a C")
    }


console.log("\nFim do programa")