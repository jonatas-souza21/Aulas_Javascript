// Método pop() remove o último (no final) elemento do array e retorna esse elemento retirado, que pode ser armazenado em uma variável.
let salaAula = ['Leandro', 'Nath', 'Marquinhos'];
console.log(salaAula);
let aluno = salaAula.pop();
console.log(salaAula);
console.log(aluno);

// O método push() insere um elemento no final do array e retorna o tamanho do novo array, que pode ser armazenado em uma variável.
let frutas = ['Maça', 'Melancia', 'Manga', 'Laranja'];
let x = frutas.push('Banana');
console.log(frutas);
// O push retorna o tamanho do novo array, e não o valor que você inseriu no novo array.
console.log(x);
// Para mostrar o valor que coloquei, pedi para o console mostrar o array na posição x-1.
console.log(frutas[x - 1]);


// O método shift() remove no início do array deslocando todos os elementos em uma posição e retorna esse elemento retirado, que pode ser armazenado em um variável.
let carros = ['Toyota', 'Honda', 'Nissan', 'Mazda'];
let y = carros.shift();
console.log(carros);
console.log(y);

// O método unshift() insere um elemento no início do array e retorna o tamanho do novo array, que pode ser armazenado em uma variável.
let frutas2 = ['Maça', 'Tangerina', 'Uva', 'Uva Verde'];
let z = frutas2.unshift('Maça Verde');
console.log(frutas2);
console.log(z);