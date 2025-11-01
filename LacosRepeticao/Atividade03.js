//Importando biblioteca
const leia = require("readline-sync")
/*Parametros:
Ler:
    -Idade de várias pessoas via teclado;
Exibir:
    - total de pessoas menores de 21 anos.
    - total de pessoas maiores de 50 anos.
*/

//Declarando variáveis
let idade=0, menores21=0, maiores50=0

idade = leia.questionInt("Digite uma idade: ")

//Processamento de dados
while (idade > 0) {
    if (idade < 21) {
    menores21++
    } else if (idade > 50) {
        maiores50++
    }
  idade = leia.questionInt("Digite uma idade: ")
}

//Saida de dados
console.log(`\n Total de pessoas menores de 21 anos: ${menores21}`);
console.log(`\n Total de pessoas maiores de 50 anos: ${maiores50}`);