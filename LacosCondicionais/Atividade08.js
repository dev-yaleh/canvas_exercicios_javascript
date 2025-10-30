//Importando biblioteca
const leia = require('readline-sync')
 
/*
Parametros: (Conta Bancária)
    -Código de operação (1 a 3); ok
    -Valor a ser depositado ou sacado (Ops 2 e 3) - n° real;
    -Saque apenas se houver saldo suficiente;

Exibir:
    -Tipo de Operaçao;
    -Saldo disponível após a operação;
    -Mensagem de "Operação inválida", se código for diferente de 1 a 3.;
    */

//Declarando variaveis
let codigo, valor, saldoInicial, saldoFinal

//Entrada de dados
saldoInicial = 1000.00
console.log("Escolha a operação desejada: \n1- Saldo \n2- Saque \n3- Depósito")
codigo = leia.questionInt()

//Processamento e Saída
switch(codigo){
    case 1:
        console.log("\nTipo de Operação: Consulta de Saldo \nSaldo Disponível: R$" + saldoInicial.toFixed(2))
        break
    case 2:
        console.log("Digite o valor a ser sacado: ")
        valor = leia.questionFloat()
        if(valor > saldoInicial){
            console.log("\nSaldo insuficiente para está operação.")
        } else {   
            saldoFinal = saldoInicial - valor
            console.log("\nTipo de Operação: Saque \nSaldo Atual Disponível: R$" + saldoFinal.toFixed(2))
        }
        break
    case 3:
        console.log("Digite o valor a ser depositado: ")
        valor = leia.questionFloat() 
        saldoFinal = saldoInicial + valor
        console.log("\nTipo de Operação: Depósito \nSaldo Atual Disponível: R$" + saldoFinal.toFixed(2))
        break
        default:
        console.log("\nOperação inválida! Escolha um código entre 1 e 3.")
}

console.log("\nFim do programa")
