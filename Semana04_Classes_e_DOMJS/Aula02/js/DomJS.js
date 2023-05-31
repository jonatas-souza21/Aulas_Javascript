/* É possivel interagir com os elementos HTML a partir do DOM
*/

// let media = (n1, n2) => {

//     return (n1 + n2) / 2;
// }


// console.log(`A média é${media()}`);

// function soma(num1, num2) {
//     return num1 + num2
// };

// console.log(soma(10,5));


// Alterando conteúdo dos elementos HTML
document.title = 'Olá'; 
console.log(document.URL);
console.log(document.title);
console.log(document.head);
console.log(document.body);


//Criando uma tag com o javascript (com conteúdo)
let n1 = Number(prompt('Insira o primeiro Nº:'));
let n2 = Number(prompt('Insira o primeiro Nº:'));
let soma = n1 + n2;

let titulo = document.createElement('p'); //Criou o elemento "p"
titulo.innerHTML = soma; //j
document.body.appendChild(titulo);