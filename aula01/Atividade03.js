//Importando biblioteca
const leia = require('readline-sync')

//Declarando variaveis
let salarioBruto, adicionalNoturno, horasExtras, descontos, salarioLiquido  

//Entrada de dados
salarioBruto = leia.questionFloat("Digite o salário bruto: R$") 
adicionalNoturno = leia.questionFloat("Digite o valor do adicional noturno: R$")
horasExtras = leia.questionFloat("Digite o valor das horas extras: R$")
descontos = leia.questionFloat("Digite o valor total de descontos: R$")

salarioLiquido = salarioBruto + adicionalNoturno + (horasExtras*5) - descontos 

//Saida de dados
console.log("O salário líquido é de: R$" + salarioLiquido.toFixed(2))