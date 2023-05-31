let pessoa = {
    nome:'Jonatas',
    sobreNome:'Evangelista de Souza',
    idade: 21,
    endereco: {
        rua: 'Rua Num faço ideia',
        bairro: 'Bairro dos Esquecidos',
        cep: 00132465,
    },
    cidadania: 'Brasileiro',
    hobbies: ['Tocar Violão', 'música'],
}

console.log(`O ${pessoa.nome} tem ${pessoa.idade} e mora no ${pessoa.endereco.bairro}\nGosta de: ${pessoa.hobbies.toString()}`);