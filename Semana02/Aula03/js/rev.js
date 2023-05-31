// Tipos de variáveis

let nome = 'Jonatas' // permite que você declare variáveis limitando seu escopo no bloco, instrução, ou em uma expressão na qual ela é usada. Não é permitido declarar mais de uma vez, dentro do mesmo bloco.
var sobreNome = 'Evangelista de Souza' //Global "terra de ninguém", pode ser acessado de qualquer lugar.
const idade = 15 // Não é possível redeclarar, não muda o valor.


//Declarar variáveis:
let media;
console.log(media);
media = 7.5;
console.log(media);


// Concatenação - Existem duas formas de fazer:
console.log(`O nome do aluno é: ${nome}`);
console.log('O nome do aluno é:' + nome);


// é necessário criar o arquivo HTML e "linkar" para funcionar!
// O <script> é colocado no final da página
// Para exibir mensagem no navegador
window.alert(`Olá aluno`);
alert(`Tudo bem?`);


// Para exibir prompt no navegador:
let nome2 = window.prompt(`Digite sua idade: `) // Exibe prompt no navegador
let idade2 = Number(prompt(`Digite seu nome: `)); //Number converte o String em número.
window.alert(`Dados digitados: ${idade2} e ${nome2}`);


let arr = 'Jonatas Souza';
console.log(arr.charAt(4)); //mostra posição do caractere
console.log(arr.length); //Tamanho do elemento
console.log(arr.toUpperCase()); // Deixa todas as letras maiúsculas. O "." define um método para a variável
console.log(arr.replace('Jonatas', 'Evangelista')) //Troca o conteúdo da variável por outro.