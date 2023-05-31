// Criar uma variável que armazene o valor da média do aluno.
var nota01 = 10; 
var nota02 = 7;
var media = (nota01 + nota02) / 2;
// Mostrar através de um template String se o aluno foi aprovado ou não (boleano).
var resultado = media >= 7;

var nome = 'Jonatas';
var curso = 'Instituto da Oportunidade Social'

// Crie uma template string que concatene o nome e curso do aluno em uma frase.
console.log(`A média do Aluno ${nome} é ${media}, o mesmo foi aprovado? ${resultado}`);

// Utilizar dois caracteres de escape.
console.log(`O Aluno ${nome} está no curso:\'${curso}\'`);