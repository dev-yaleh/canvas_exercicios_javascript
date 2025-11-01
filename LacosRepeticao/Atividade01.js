//Importando biblioteca
const leia = require("readline-sync")
/*Parametros 
leia 2 n° int, 1° tem que ser maior que o 2°
caso contrario
exibir: 
msg informando intervalo inválido e sair do programa


Escreva um algoritmo, que leia 2 números inteiros via teclado,
onde o primeiro número deve ser menor do que o segundo número. 
Caso contrário, deve ser exibida uma mensagem na tela informando
que o intervalo é inválido e sair do programa. 
No intervalo informado, mostre na tela todos os números que são múltiplos
de 3 e 5. Veja os exemplos abaixo:
*/

let n1, n2

console.log("Digite o primeiro número do intervalo: ")
n1 = leia.questionInt()
console.log("Digite o segundo número do intervalo: ")
n2 = leia.questionInt()

if(n1>=n2){
    console.log("\nO intervalo é inválido.")
} else{
    console.log(`\nNo intervalo entre ${n1} e ${n2}: \n`)
}


/*
for(n1<n2;n1%3=0;n1%5=0;n2%3=0;n2%5=0){

}
*/