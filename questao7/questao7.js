// Desenvolva um algoritmo que leia 10 números, calcule e escreva a
// média aritmética dos valores lidos, a quantidade de valores
// positivos, a quantidade de valores negativos e o percentual de
// valores negativos e positivos.

let totalDeNumeros = 0;
let media = 0;
let total = 0;
let contaNegativos = 0;
let contaPositivos = 0;
let porcentPositivos;
let porcentNegativos;

do {
    let numero = Number(prompt(`Digite o ${totalDeNumeros + 1}° número`));
    totalDeNumeros++
    total = numero + total;
    media = total / totalDeNumeros;

    if (numero < 0) {
        contaNegativos++;
    };

    if (numero > 0) {
        contaPositivos++;
    };

} while (totalDeNumeros < 10);

porcentPositivos = (contaPositivos / totalDeNumeros) * 100;
porcentNegativos = (contaNegativos / totalDeNumeros) * 100;

document.write(`${media} é a media dos valores digitados <br>`);
document.write(`${contaNegativos} valores são negativos <br>`);
document.write(`${contaPositivos} valores são positivos <br>`);
document.write(`${porcentPositivos}% dos valores são positivos <br>`);
document.write(`${porcentNegativos}% dos valores são negativos <br>`);
