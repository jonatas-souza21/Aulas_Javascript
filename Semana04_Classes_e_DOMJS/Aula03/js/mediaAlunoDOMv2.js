const mediaAluno = () => {
    let n1 = Number(document.getElementById('nota01').value);
    let n2 = Number(document.getElementById('nota02').value);
    resultado.innerHTML = `Sua média é: ${(n1 + n2) / 2}`;
    console.log(typeof n1);
};
