/*Parametros:
    -Array<number>;
    -Digitar 10 valores inteiros pré-definidos;
    -Solicitar que o usuario digite um n°;
    -Se ele estiver no ARRAY:
        -Exibir a posição dele na Collection;
    -se não:
        -MSG: "O n° NN não foi encontrado!""
*/

// Importar biblioteca
import readlinesync = require("readline-sync")

// Entrada de dados
const numero: Array<number> = new Array<number>(2,5,1,3,4,9,7,8,10,6)

console.log('Digite o número desejado: ')
let n = readlinesync.questionInt()   

const indice = numero.indexOf(n);

if (indice !== -1) {
    console.log(`O número ${n} está na posição ${indice} da Collection.`);
} else {
    console.log(`O número ${n} não foi encontrado!`)
}