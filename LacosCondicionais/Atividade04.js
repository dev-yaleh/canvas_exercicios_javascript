//Importando biblioteca
const leia = require('readline-sync')

/*Parametros:
Entrada: 3 palavras (string)
    1ª palavra: vertebrado ou invertebrado
    2ª palavra: ave, mamifero, inseto ou anelideo
    3ª palavra: carnivoro, onivoro, herbivoro, hematofago   
    */

// Entrada

let tipo, classe, alimento

console.log("Vertebrado ou invertebrado? ")
tipo = leia.question()    
console.log("Ave, mamífero, inseto ou anelídeo? ")
classe = leia.question()
console.log("Carnívoro, onívoro, herbívoro ou hematófago? ")
alimento = leia.question()  

if(tipo == "vertebrado"){
    if(classe == "ave"){
        if(alimento == "carnivoro"){
            console.log("Águia")
        }else{
            console.log("Pomba")
        }
    }
    if(classe == "mamifero"){
        if(alimento == "onivoro"){
            console.log("Homem")
        }else{
            console.log("Vaca")
        }   
    }
}

if(tipo == "invertebrado"){        
    if(classe == "inseto"){
        if(alimento == "Hematofago"){
            console.log("Pulga")
        }else{
            console.log("Lagarta")
        }
    }
    if(classe == "aneldeo"){
        if(alimento == "Hematofago"){
            console.log("Sanguessuga")
        }else{
            console.log("Minhoca")
        }
    }
}

console.log("\nFim do programa")





