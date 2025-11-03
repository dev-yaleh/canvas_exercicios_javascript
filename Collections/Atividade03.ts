/*Parametros:
-Set<number> 
-solicitar 10 valores Int para o usuário não repetidos
-Exibir:
    -Mostrar todos os elementos da collection
*/

// Importar biblioteca
import readlinesync = require("readline-sync")

// Entrada de dados
const numero: Set<number> = new Set<number>()

console.log('Digite 10 números: ')

for (let i = 0; i < 10; i++) {
    const n = readlinesync.questionInt(`${i + 1}° numero : `)
    numero.add(n)
}

console.clear()

// Processamento de dados e saida
console.log("\nNúmeros cadastrados no Set: ");
for(let n of numero){
    console.log(n);
}