/*Parametros:
    -Set<number>;
    -10 n° pre-definidos;
Exibir:
    -Se existir, exibir: O n° foi encontrado;
    -Se não existir, exibir: O n° não foi encontrado;
*/

// Importar biblioteca
import readlinesync = require("readline-sync")

// Entrada de dados
const number: Set<number> = new Set<number>([2,5,1,3,4,9,7,8,10,6])

console.log('Digite o número desejado: ')
let num = readlinesync.questionInt()   

if(number.has(num)){
    console.log(`O número ${num} foi encontrado!`)
   } else {
        console.log(`O número ${num} não foi encontrado!`)
    } 
