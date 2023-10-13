// Desenvolva um algoritmo que mostre uma contagem regressiva de
// 30 até 1, marcando os números que forem primos, exatamente
// como mostrado abaixo:
// 30 [29] 28 27 26 25 24 [23] 22 21 20 [19] 18 [17] 16...

let numero = 30;
let teste;
let aux = numero;

for (let j = 1; j <= numero; j++) {
    let contagem = 0;
    for (let i = 1; i <= aux; i++) {
        if (aux % i == 0) {
            contagem++
        }
    }

    if (contagem == 2) {
        document.write(`[${aux}] `)
    } else {
        document.write(`${aux} `)
    }
    aux--;
}