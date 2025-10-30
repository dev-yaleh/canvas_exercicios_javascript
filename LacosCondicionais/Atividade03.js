//Importando biblioteca
const leia = require('readline-sync')
 
/*Parametros:
Doar sange: 19 a 69 anos
Se 60~69 anos, doar se não for a primeira doação
Ler: 
    nome do doador(string);
    idade(int);
    se é a primeira doação (S/N);

Exibir:
    Nome do doador;
    Idade;
    Apto ou Não Apto para doar sangue.

*/

//Declarando variaveis
let nome, idade, primeiraDoacao

//Entrada de dados
console.log("Digite seu nome: ")
nome = leia.question()
console.log("Digite sua idade: ")
idade = leia.questionInt()
primeiraDoacao = leia.keyInYNStrict("É sua primeira doação? (Y/N): ")

//Processamento de dados e Saida
if(idade>=18 && idade<=69){
    if (idade >= 60 && idade <= 69 && primeiraDoacao ) {
    console.log("\n" + nome + ", com " + idade + " anos, você não está APTO a doar sangue.")
    } else {
    console.log("\n" + nome + ", com " + idade + " anos, você está APTO a doar sangue.")
    }
} else {
    console.log("\n" + nome + ", com " + idade + " anos, você NÃO está APTO a doar sangue.")
}

console.log("\nFim do programa")