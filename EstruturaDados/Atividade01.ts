/*Parâmetros:
Queue(Fila)<string>
Organizar fila por ordem de chegada (BANCO)
Menu (0 a 3):
-1: Add um novo cliente na fila. Solicitar o nome do cliente;
-2: Listar todos os Clientes na fila;
-3: Chamar (retirar) uma pessoa da fila;
-0: O programa deve ser finalizado;

*/
import leia = require("readline-sync")
import { Queue } from "./Queue";

const fila = new Queue<string>();
let codigo:number = 0

do{

console.log(`-------------------------------------------------------------------------\n-1:Adicionar cliente na fila
-2: Listar todos os Clientes
-3: Chamar Cliente
-0: Sair
-------------------------------------------------------------------------`)

codigo = leia.questionInt(`Digite o menu desejado: `)

    switch(codigo){
        case 1: 
            console.log(`\nOpção 1 - Entrar na Fila:\n`)
            let nome = leia.question(`Digite o seu nome: `)
            fila.enqueue(nome)
            console.log(`\nFila:`)
            fila.printQueue()
            console.log(`\nCliente Adicionado a Fila!\n`)
            break
        case 2:
            console.log(`\nOpção 2 - Listar todos os Clientes:\n`)
            if(fila.isEmpty()){
                console.log(`Fila está vazia!\n`)
            } else{
                console.log(`Lista de Clientes na Fila: `)
                fila.printQueue()
            }
            break
        case 3:
            console.log(`\nOpção 3 - Chamar Cliente:\n`)
            if(fila.isEmpty()){
                console.log(`Fila está vazia!\n`)
            } else{
                fila.dequeue()
                if(fila.isEmpty()){
                    console.log(`Fila está vazia!\n`)
                }else{
                console.log(`Lista de Clientes atualizada:\n `) 
                fila.printQueue()
                console.log(`\nUm Cliente foi retirado da fila!\n`)
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