const mediaAluno = () => {
    // let n1 = Number(document.getElementById('nota01'));
    // let n2 = Number(document.getElementById('nota02'));

    //Coletando informação do nosso input
    let n1 = document.getElementById('nota02');
    let n2 = document.getElementById('nota02');
    let resultado = document.getElementById('resultado');
    //Convertendo o valor para número
    let notaNum1 = Number(n1.value);
    let notaNum2 = Number(n2.value);
    //Criando calculo para nossa média
    let media = (notaNum1 + notaNum2) / 2;
    //Trocando valor do meu HTML pelo resultado
    resultado.innerHTML = `Sua média é: ${media}`;
};