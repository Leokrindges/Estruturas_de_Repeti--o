// Escreva um algoritmo que faça a tabuada de um número e
// apresente o resultado de acordo com o modelo a seguir, sabendo
// que o multiplicando deverá ser fornecido pelo usuário (n) e a
// quantidade de iterações também (i).
// 1 * 2 = 2
// 2 * 2 = 4
// 3 * 2 = 6
// ...

let multiplicador = Number(prompt("Digite o número da sua tabuada"));

let iteracoes = Number(prompt("Até que valor a tabuada vai ir?"));

for (let i = 1; iteracoes >= i; i++) {
    document.write(`${multiplicador} X ${i} = ${multiplicador * i} <br>`);
};