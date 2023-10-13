// Pedro tem 1,50m de altura e cresce 2 centímetros por ano, enquanto
// Lucas tem 1,10m de altura e cresce 3 centímetros por ano.
// Construa um algoritmo que calcule e imprima quantos anos serão
// necessários para que:
// a. Lucas e Pedro tenham o mesmo tamanho;
// b. Lucas seja maior que Pedro.

let pedro = 1.50;
let lucas = 1.10;
let contaAno = 0;

while (pedro >= lucas) {
    contaAno++;
    lucas += 0.03;
};
document.write(`Será necessário ${contaAno} anos para Lucas e Pedro tenham o mesmo tamanho`);
document.write(`Será necessário ${contaAno} anos para Lucas ser maior que Pedro`);
