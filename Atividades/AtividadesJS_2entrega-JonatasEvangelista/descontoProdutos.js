//Arquivo JS linkado ao HTML!

//: O programa deve solicitar ao usuário que informe um código promocional através de um prompt 
let codPromocional = window.prompt('Digite o código promocional');
let produto = 1000;
let desconto;
let valorFinal;

//Usando a estrutura switch, o programa deve identificar qual foi o código promocional informado pelo usuário e aplicar o desconto correspondente ao produto.
//Após a aplicação do desconto, o programa deve exibir o valor original do produto e o valor com desconto na tela.
//Caso o usuário informe um código promocional inválido, o programa deve exibir uma mensagem de “erro” na tela, informando que o mesmo não é um cupom válido. 
switch (codPromocional) {
    case 'DESC1':
        window.alert('5% de desconto');
        desconto = produto * 0.05;
        valorFinal = produto - desconto;
        window.alert(`Valor original: R$${produto};\nValor com desconto (5%): R$${valorFinal}`);
        break;

    case 'DESC2':
        window.alert('10% de desconto');
        desconto = produto * 0.10;
        valorFinal = produto - desconto;
        window.alert(`Valor original: R$${produto};\nValor com desconto (10%): R$${valorFinal}`);
        break;

    case 'DESC3':
        window.alert('15% de desconto');
        desconto = produto * 0.15;
        valorFinal = produto - desconto;
        window.alert(`Valor original: R$${produto};\nValor com desconto (15%): R$${valorFinal}`);
        break;

    case 'DESC4':
        window.alert('20% de desconto');
        desconto = produto * 0.20;
        valorFinal = produto - desconto;
        window.alert(`Valor original: R$${produto};\nValor com desconto (20%): R$${valorFinal}`);
        break;

    case 'DESC5':
        window.alert('25% de desconto');
        desconto = produto * 0.25;
        valorFinal = produto - desconto;
        window.alert(`Valor original: R$${produto};\nValor com desconto (25%): R$${valorFinal}`);
        break;

    default:
        window.alert('Cupom inválido!');
        break;
}