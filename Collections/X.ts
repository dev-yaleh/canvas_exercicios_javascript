import readlineSync = require("readline-sync");

// Criando a Collection Array de strings
const cores: Array<string> = [];

console.log("Digite 5 cores:");

for (let i = 0; i < 5; i++) {
    const cor = readlineSync.question(`Cor ${i + 1}: `);
    cores.push(cor);
}

// Exibindo todas as cores adicionadas
console.log("\nListar todas as cores:");
for (const cor of cores) {
    console.log(cor);
}

// Exibindo cores em ordem crescente (A-Z)
console.log("\nOrdenar as cores:");
const coresOrdenadas = [...cores].sort(); // cópia ordenada
for (const cor of coresOrdenadas) {
    console.log(cor);
}
