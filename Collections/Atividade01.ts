/*Parametros:
    -Array<string>;
    -Digitar 5 cores;
Exibir:
    -Todas as cores add;
    -idem + ordem crescente (A-Z);
*/

// Importar biblioteca
import readlinesync = require("readline-sync")

// Entrada de dados
const cores: Array<string> = new Array<string>()

console.log("Digite 5 cores:")

for (let i = 0; i < 5; i++) {
    const cor = readlinesync.question(`Cor ${i + 1}: `)
    cores.push(cor);
}

console.clear()

// Processamento de dados e Saida
console.log("\nLista das cores informadas:" )
for(let cor of cores){
    console.log(cor)
}

console.log("\nLista das cores (A-Z):" )
const ordenadas = cores.sort()
for(let cor of ordenadas){
        console.log(cor)
}