// Desenvolva um algoritmo que leia a altura de 15 pessoas. Este
// programa deverá calcular e mostrar:
// a. A menor altura do grupo;
// b. A maior altura do grupo;

let altura;
let maiorAltura = 0;
let menorAltura = 3.5;

for (let i = 1; i < 15; i++) {
    altura = Number(prompt(`Digite a ${i}° altura`));
    if (altura > maiorAltura) {
        maiorAltura = altura;
    };
    if (altura < menorAltura) {
        menorAltura = altura;
    };
};

document.write(`${maiorAltura} metros foi a maior altura digitada <br>`);
document.write(`${menorAltura} metros foi a menor altura digitada`);
