//Importando biblioteca
const leia = require('readline-sync')
 
//Declarando variaveis
let salario, abono, novoSalario

//Entrada de dados
salario = leia.questionFloat("Digite o salário: R$") 
abono = leia.questionFloat("Digite o valor do abono: R$")

novoSalario = salario + abono

//Saida de dados
console.log("O novo salário e de: R$" + novoSalario.toFixed(2))