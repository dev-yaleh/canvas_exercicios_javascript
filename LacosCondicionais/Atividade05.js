//Importando biblioteca
const leia = require('readline-sync')
 
/*
Parametros:
    -N° inteiro entre 1 e 6 (switch case);
    -Qnt comrpada - n° inteiro;

Exibir:
    -O valor total da conta e
    -O nome do produto comprado.
*/

//Declarando variaveis
let produto , quantidade, total

//Entrada de dados
console.log("Digite o codigo do produto desejado (1 a 6): ")
produto = leia.questionInt()
console.log("Digite a quantidade comprada: ")
quantidade = leia.questionInt()

//Processamento e Saída
switch(produto){
    case 1:
        total = quantidade * 10.00
        console.log("Produto: Cachorro Quente \nTotal da compra: R$" + total.toFixed(2))
        break
    case 2:
        total = quantidade * 15.00
        console.log("Produto: X-Salada \nTotal da compra: R$" + total.toFixed(2))
        break
    case 3:
        total = quantidade * 18.00
        console.log("Produto: X-Bacon \nTotal da compra: R$" + total.toFixed(2))
        break
    case 4:
        total = quantidade * 12.00 
        console.log("Produto: Bauru \nTotal da compra: R$" + total.toFixed(2))
        break
    case 5:
        total = quantidade * 8.00
        console.log("Produto: Refrigerante \nTotal da compra: R$" + total.toFixed(2))
        break
    case 6:
        total = quantidade * 13.00
        console.log("Produto: Suco de laranja \nTotal da compra: R$" + total.toFixed(2))
        break
    default:
    console.log("Produto invalido! Digite um codigo entre 1 e 6.")
}

console.log("\nFim do programa")

