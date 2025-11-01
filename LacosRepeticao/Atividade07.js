//Importando biblioteca
const leia = require("readline-sync")
/*Parametros:
Ler:
    -Vetor [10]: não ordenados e não repitidos;

Exibir:
    -A partir do número desejado pelo usuário o programa deve informar em qual
    posição ele se encontra no vetor;    
    -Se o número não esteja no vetor mandar msg: "Mão foi encontrado!"
*/

//Declaração de variaveis
let vetorInteiros = [2,5,1,3,4,9,7,8,10,6], i, numero


//Entrada de dados
console.log('Digite o número desejado: ')
numero = leia.questionInt()   

//Processamento e saida


for (i = 0; i < vetorInteiros.length; i++) {
    if (vetorInteiros[i] === numero) {
       console.log(`\nO número ${numero} está localizado na posição: ${i}`)
       break
    } else {
               console.log(`O numero ${numero} não foi encontrado.`)
        break
    }
}
