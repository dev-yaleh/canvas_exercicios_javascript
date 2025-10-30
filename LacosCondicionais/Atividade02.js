//Importando biblioteca
const leia = require('readline-sync')
 
//Declarando variaveis
let x, positivo, par


//Entrada de dados
console.log("Digite o número desejado: \n")
x = leia.questionInt()


//Processamento de dados e Saida
if(x==0,x%2==0){
    par = "O número é par"
} else {
    par = "O número é ímpar" 
}
    if(x>=0){
    positivo = " e positivo!"
    }
    else {
    positivo = " e negativo!"
    }
   
console.log(par + positivo)

console.log("\nFim do programa")

