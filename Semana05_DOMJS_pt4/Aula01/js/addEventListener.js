// "Vigia" um elemento HTML 
let p1 = document.querySelector('p');

const mTexto = () => {
    p1.innerHTML = 'Texto mudado!';
}

const mCor = () => {
    p1.style.color = 'red';
}

const mFundo = () => {
    p1.style.background = 'blue';
}

// Operador: 'click'; 
p1.addEventListener('click', mTexto);
p1.addEventListener('mouseenter', mCor);
p1.addEventListener('mouseout', mFundo);