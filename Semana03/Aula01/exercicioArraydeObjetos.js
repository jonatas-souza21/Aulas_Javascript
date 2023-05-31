// Array de objetos.
let veiculos = [
    [
        {
            nome: 'Opala',
            marca: 'Chevrolet',
            cor: 'Vinho',
            ano: 1988,
        },
        {
            nome: 'UP',
            marca: 'Volkswagen',
            cor: 'Preto',
            ano: 2021,
        },
        {
            nome: 'Corolla',
            marca: 'Toyota',
            cor: 'Branco',
            ano: 2020,
        },
        {
            nome: 'Kwid',
            marca: 'Renault',
            cor: 'Preto',
            ano: 2021,
        },
    ],
    [
        {
            nome: '350Z',
            marca: 'Nissan',
            cor: 'Verde',
            ano: 2003,
        },
        {
            nome: 'GTR',
            marca: 'Nissan',
            cor: 'Verde',
            ano: 1987,
        },
    ],
];

let teste = veiculos[0][2].ano <= 2003 ? 'Não vai pagar' : 'Vai pagar';
console.log
console.log(teste);

console.log('-----------------------------------------------');

//JSON - transformando array em JSON na forma de String
let textoObjt = JSON.stringify(veiculos);
console.log(typeof textoObjt);
console.log(textoObjt);

console.log('-----------------------------------------------');

// Transformando o JSON em array.
let valorObjt = JSON.parse(textoObjt);
console.log(typeof valorObjt);
console.log(valorObjt);

