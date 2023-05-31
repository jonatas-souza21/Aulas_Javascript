// Método map

let produtos = [
    {
        produto:'celular',
        valor: 1800,
    },
    {
        produto:'Computador',
        valor: 1800,
    },
    {
        produto:'PlayStation 5',
        valor: 4300,
    },
];

let valorProdutoFinal = produtos.map((vp) => vp.valor * 1.05)
console.log(`Valor produtos: ${valorProdutoFinal}`);