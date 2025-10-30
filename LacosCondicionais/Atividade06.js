//Importando biblioteca
const leia = require('readline-sync')
 
/*
Parametros:
    -N° inteiro entre 1 e 6 (switch case);
    -Salário - n° real;
Exibir:
    - Nome do colaborador
    -Cargo
    -Salário reajustado
*/

//Declarando variaveis
let codigo, cargo, nome, salario, reajuste, novoSalario

//Entrada de dados
console.log("Digite o codigo do colaborador (1 a 6): ")
codigo = leia.questionInt()
console.log("Digite o nome do colaborador: ")
nome = leia.question()
console.log("Digite o salário atual do colaborador: ")
salario = leia.questionFloat() 

//Processamento e Saída
switch(codigo){
    case 1:
        salárioNovo = salario * 1.10
        console.log("Colaborador(a): " + nome + "\nCargo: Gerente \nSalário Reajustado: R$" + salárioNovo.toFixed(2))
        break
    case 2:
        salárioNovo = salario * 1.07
        console.log("Colaborador(a): " + nome + "\nCargo: Vendedor \nSalário Reajustado: R$" + salárioNovo.toFixed(2))
        break
    case 3:
        salárioNovo = salario * 1.09
        console.log("Colaborador(a): " + nome + "\nCargo: Supervisor \nSalário Reajustado: R$" + salárioNovo.toFixed(2))
        break
    case 4:
        salárioNovo = salario * 1.06
        console.log("Colaborador(a): " + nome + "\nCargo: Motorista \nSalário Reajustado: R$" + salárioNovo.toFixed(2))
        break
    case 5:
        salárioNovo = salario * 1.05
        console.log("Colaborador(a): " + nome + "\nCargo: Estoquista \nSalário Reajustado: R$" + salárioNovo.toFixed(2))
        break
    case 6:
        salárioNovo = salario * 1.08
        console.log("Colaborador(a): " + nome + "\nCargo: Técnico de TI \nSalário Reajustado: R$" + salárioNovo.toFixed(2))
        break
    default:
    console.log("Código inválido! Digite um código entre 1 e 6.")
}

console.log("\nFim do programa")