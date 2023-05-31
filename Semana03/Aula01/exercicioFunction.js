//Exercico function
function IMC (peso, altura) {
    return (peso/(altura*altura));
}
console.log(`O seu peso: 54\nSua altura:1.78\níndice IMC:${IMC(54,1.78).toFixed(2)}`);
// O método toFixed() formata um número utilizando notação de ponto fixo.