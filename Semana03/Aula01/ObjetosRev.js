let pessoa = {
    nome:'Jonatas',
    sobreNome: 'Evangelista',
    idade: 21,
    endereco: {
        rua: 'nao sei',
        bairro: 'Dos esquecidos',
    },    
    escolaridade: 'Graduação',
}

let pessoa1 = {
    nome:'Jonatas',
    sobreNome: 'Evangelista',
    idade: 21,
    endereco: {
        rua: 'nao sei',
        bairro: 'Dos esquecidos',
    },    
    escolaridade: 'Graduação',
}

// console.log(`O ${pessoa.nome} mora na rua ${pessoa.endereco.rua} no bairro ${pessoa.endereco.bairro}`);


//Atribuição via desestruturação. Cria uma variável 
let {
    nome,
    sobreNome,
    idade,
} = pessoa

let {
    nome1,
    sobreNome1,
    idade1,
} = pessoa1


console.log(nome1);
