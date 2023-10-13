// Escreva um algoritmo que percorra os números inteiros entre 1 e 250
// e verifique quais números são múltiplos de 3 e quais são múltiplos
// de 5.
let multiplosDe3 = 0;
let multiplosDe5 = 0;

for (let i = 1; i < 250; i++) {
    if (i % 3 == 0) {
        document.write(`${i} é multiplo de 3 <br>`)
    };
    if (i % 5 == 0) {
        document.write(`${i} é multiplo de 5 <br>`)
    };
};