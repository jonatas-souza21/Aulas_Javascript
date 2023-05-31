// 1
let idade = 21;
let nome = 'Jonatas';
console.log(`Meu nome é ${nome} e eu tenho ${idade} anos.`);

// 2
let nome1 = prompt('Qual é o seu nome?');
window.alert(`Seja bem vindo ${nome1}!`);

// 3
let preco = Number(prompt('Digite o valor do produto (20% de desconto):'));
let desconto = preco * 0.2;
let precoFinal = preco - desconto;

window.alert(`Preço com desconto (20%): R$${precoFinal}`);
