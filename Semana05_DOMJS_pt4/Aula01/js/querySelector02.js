// Lembrando, o JS interpreta o elemento 'li' como um array.

// 
let itensLista = document.querySelectorAll('.lista01');

const mudarCor = () => {
    for (let i = 0; i <= itensLista.length; i ++) {
        itensLista[i].style.color = 'green';
    }
};