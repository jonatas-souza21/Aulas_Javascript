// Array bidimensional com 9 alunos
let alunosAula = [
    ['Leandro', 'Leonardo', 'Carlos'],
    ['Gustavo', 'Isabella', 'Nathalia'],
    ['Jonatas', 'Kauê', 'Ricardo']
];
console.log(alunosAula);

// Array unidimensional com 4 frutas
let frutas  = ['Maça', 'Uva', 'Tangerina', 'Melancia'];
console.log(frutas);

// Inserir nova fruta no começo
console.log(frutas.unshift('Carambola'));

// Inserir nova fruta no final
console.log(frutas.push('Figo'));

// Remover o item da terceira posição
delete frutas[2];
console.log(frutas);

// Converter o array para uma string
console.log(frutas.toString());

// Utilizar um '*' para separar as frutas
console.log(frutas.join(' * '));
