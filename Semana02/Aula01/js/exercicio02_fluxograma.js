let dinheiro = Number(window.prompt(`Insira a quantidade em reais (valor do produto R$50): `));
let troco;


if (dinheiro >= 50) {
    troco = dinheiro - 50;
    window.alert(`Obrigado pela compra! Seu troco: R$${troco}`);
} else {
    window.alert(`Valor insulficiente!`);
}
