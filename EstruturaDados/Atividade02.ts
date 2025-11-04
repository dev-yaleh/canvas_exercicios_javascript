/*Parâmetros:
Stack(Fila)<string>
Organizar retirada de livros da pilha (Biblioteca)
Menu (0 a 3):
-1: Adicionar um novo livro na pilha e solicitar seu nome;
-2: Listar todos os livros da pilha;
-3: Retirar um livro da pilha;
-0: O programa deve ser finalizado;

*/
import leia = require("readline-sync")
import { Stack } from "./Stack";

const pilha = new Stack<string>();
let codigo:number = 0



do{

console.log(`-------------------------------------------------------------------------
-1: Adicionar Livro na pilha
-2: Listar todos os Livros
-3: Retirar Livro da fila
-0: Sair
-------------------------------------------------------------------------`)

codigo = leia.questionInt(`Digite o menu desejado: `)

    switch(codigo){
        case 1: 
            console.log(`\nOpção 1 - Entrar na Fila:`)
            let nome = leia.question(`Digite o seu nome: `)
            pilha.push(nome)
            console.log(`\nFila: `)
            pilha.printStack()
            console.log(`\nLivro Adicionado a Pilha!\n`)
            break
        case 2:
            console.log(`\nOpção 2 - Lista de todos os Livros:\n`)
            if(pilha.isEmpty()){
                console.log(`Fila está vazia!\n`)
            } else{
                console.log(`Lista de Livros na Fila: `)
                pilha.printStack()
            }
            break
        case 3:
            console.log(`\nOpção 3 - Retirar Livro da fila:\n`)
            if(pilha.isEmpty()){
                console.log(`Fila está vazia!\n`)
            } else{
                pilha.pop()
                if(pilha.isEmpty()){
                    console.log(`Fila está vazia!\n`)
                }else{
                console.log(`Lista de Clientes atualizada:\n `) 
                pilha.printStack()
                console.log(`\nUm Livro foi retirado da pilha!\n`)
                }
            }
            break  
            
        case 0: 
            console.log(`\nPrograma Finalizado!`)    
            break  
        default:
            console.log("\nOperação inválida! Escolha uma opção entre 0 e 3.")
    }
}

while(codigo!==0)