// O operador ternário é uma instrução equivalente a estrutura condicional if...else e sua vantagem é tornar o código bem mais enxuto.
let vouAPraia = 1320;
let valor = vouAPraia >= 1500 ? console.log('Vou a praia') : console.log('Não irei'); //Operador ternário


// Switch case
let corCamisa = 'Preto';

switch (corCamisa) {
    case 'Azul':
        console.log('Valor da camisa: R$60');
        break;
    case 'Verde':
        console.log('Valor da camisa: R$70');
        break;
    case 'Vermelho':
        console.log('Valor da camisa: R$40');
        break;
    case 'Amarelo':
        console.log('Valor da camisa: R$20');
        break;
    case 'Preto':
        console.log('Valor da camisa: R$100');
        break;
    default:
        console.log('Valor não identificado');
        break;
}

//While (estrutura de repetição)
console.clear();
let contador = 0;
do  {
    contador += 1;
    console.log(contador)
} while (contador < 10);
