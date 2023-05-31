// querrySelector - trabalha com somente um elemento. Retorna o primeiro elemento dentro do documento que corresponde ao seletor desejado.
// querrySelectorAll - trabalha com vários elementos.

/* ******************* CRIANDO VARIÁVEIS *************************** */

// Criei uma variável que armazena o elemento "p". No caso do querrySelector, pedi para pegar no "document" o primeiro elemento "p".
let p1 = document.querySelector('p');
// p1.style.color = 'red';

// Quero que aplique um estilo no elemento "p" que tenha a id "cor".
let p2 = document.querySelector('p#cor').style.color = 'green';

// Criei uma variável que armazena o 
let p3 = document.querySelector('p.fundo');


/* ***************** CRIANDO EVENTOS ******************************* */
let mudarCor = () => {
    p1.style.color = 'red';
    p1.innerHTML = 'Cor e texto trocados';
}

// Criei uma função para ser iniciada pelo HTML.
let mudarFundo = () => {
    p3.style.background = 'cyan';
    // Peguei o conteúdo da variável (que é o elemento), utilizei o .innerHTML para pegar o conteúdo do elemento.
    p3.innerHTML = 'Fundo e texto trocados';
}

//(.innerHTML retorna o conteúdo do elemento)
// Pede ao console retornar o elemento "p"
console.log(p1);