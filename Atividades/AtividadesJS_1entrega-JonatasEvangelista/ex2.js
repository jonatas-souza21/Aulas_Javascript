//Arquivo JS linkado ao HTML!

// Utilizando os conceitos apresentados, pergunte ao usuário. 
// • Qual o nome do usuário; 
// • Qual sua idade; 
// • Bairro onde mora; 
let nome = prompt('Digite seu nome:');
let idade = prompt('Sua idade:');
let bairro = prompt('Bairro onde mora:');

//Passe o nome do usuário para todas as letras em maiúscula.
window.alert(`Olá ${nome.toUpperCase()}!`);

//Crie um programa que solicite ao usuário que digite dois números inteiros e exiba o resultado da soma desses números na tela. 
let num1 = Number(prompt('Digite o primeiro número'));
let num2 = Number(prompt('Digite o segundo número'));
let soma = num1 + num2;
window.alert(`Resultado da soma: ${soma}`)