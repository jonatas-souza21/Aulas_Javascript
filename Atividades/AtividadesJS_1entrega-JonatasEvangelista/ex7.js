//Arquivo JS linkado ao HTML! Resultado no console.

// Faça um programa que peça ao usuário para digitar um número inteiro.
let num = Number(window.prompt(`Digite um número: `));


//Se o número for positivo, exiba uma mensagem informando que o número é positivo. Se o número for negativo, exiba uma mensagem informando que o número é negativo. Se o número for igual a zero, exiba uma mensagem informando que o número é zero. (Aplicar no Console)
if (num > 0) {
    console.log('O número é positivo');
} else if (num < 0) {
    console.log('O número negativo')
} else {
    console.log('O número é igual a zero')
}