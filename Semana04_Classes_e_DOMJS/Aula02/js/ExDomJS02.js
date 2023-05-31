let paragrafo = document.getElementById('texto');

const mudar = () => {
    paragrafo.style.color = 'silver';
    paragrafo.style.background = 'green';
    paragrafo.innerHTML = 'Clique';
}

//Text.content - define ou retorna o conteúdo de texto do nó especificado e todos os seus descendentes
// Para armazenar o conteudo do elemento, mudar o texto de acordo com o seu conteúdo.
let conteudo = document.getElementById('texto').textContent;

const voltar = () => {
    paragrafo.style.color = 'black';
    paragrafo.style.background = 'white';
    paragrafo.innerHTML = conteudo;
}