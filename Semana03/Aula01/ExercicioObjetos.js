veiculo1 = {
    nome1:'Opala',
    marca1:'Chevrolet',
    cor1:'Vinho',
    ano1:1988,
}
veiculo2 = {
    nome2:'UP',
    marca2:'Volkswagen',
    cor2:'Preto',
    ano2:2021,
}
veiculo3 = {
    nome3:'Corolla',
    marca3:'Toyota',
    cor3:'Branco',
    ano3:2020,
}
veiculo4 = {
    nome4:'Kwid',
    marca4:'Renault',
    cor4:'Preto',
    ano4:2021,
}

let {
    nome1,
    marca1,
    cor1,
    ano1,
} = veiculo1;
let {
    nome2,
    marca2,
    cor2,
    ano2,
} = veiculo2;
let {
    nome3,
    marca3,
    cor3,
    ano3,
} = veiculo3;
let {
    nome4,
    marca4,
    cor4,
    ano4,
} = veiculo4;

console.log(`O carro ${nome1} da marca ${marca1} irá pagar IPVA?`);

// if (ano1 <= 2003) {
//     console.log('Não irá pagar IPVA');
// } else {
//     console.log('Irá pagar IPVA')

// }

let teste =  veiculo1.ano1 <= 2003 ? 'Vai pagar' : 'Não vai pagar'; 