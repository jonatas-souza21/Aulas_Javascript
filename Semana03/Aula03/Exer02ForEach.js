let frutas = [
    'fruta1',
    'fruta2',
    'fruta3',
    'fruta4',
];

// Forma não abreviada

/*
const nomes = (frutas, pos) => {
    console.log(`Nome da fruta ${frutas}, índice: ${pos}`);
}
frutas.forEach(nomes);
*/

// Forma abreviada 
frutas.forEach((nome,indice) => {
    console.log(`Nome da fruta ${nome}, índice: ${indice}`)
});
