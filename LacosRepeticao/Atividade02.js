//Importando biblioteca
const leia = require("readline-sync")
/*Parametros 
leia 10 n°inteiros via teclado;

Exibir:
quantos deles são pares e quantos são ímpares.
*/ 

//Declarando variaveis
let vetorInteiros = new Array(10), pares = 0, impares = 0

for (let indice = 0; indice < 10; indice++) {
    vetorInteiros[indice] = leia.questionInt(`Digite o ${indice + 1}° número: `);

    if (vetorInteiros[indice] % 2 == 0) {
       pares++
} else {
        impares++
    }   
}

console.log(`\n Quantidade de números pares: ${pares}`);
console.log(`\n Quantidade de números ímpares: ${impares}`);