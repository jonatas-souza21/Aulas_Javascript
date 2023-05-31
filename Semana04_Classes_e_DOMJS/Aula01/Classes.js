/* let pessoa = {
     nome: 'Jonatas',
     sobreNome: 'Evangelista',
     idade: 21,
     endereco: {
         rua: 'nao sei',
         bairro: 'dos esquecidos',
         numero: 77,
     },    
}; */


// Classe é um molde de um objeto. A partir dela é possível fazer vários objetos.
// Usamos sempre PascalCase nas classe por convenção 
class PessoaFisica {
    constructor(Nome, Idade, SobreNome, Endereco) {
        this.Nome = Nome;
        this.Idade = Idade;
        this.SobreNome = SobreNome;
        this.Endereco = Endereco;
    }
};

// Instanciando objetos à classe. Um Objeto é uma instância de uma Classe, ou seja, uma representação. 
// Por exemplo, "pessoa1" é uma instância de uma classe chamada "PessoaFisica", mas "PessoaFisica" é a classe que o representa de forma genérica. 
let pessoa1 = new PessoaFisica('Jonatas', 21, 'SobreNome', 'Rua Dos Esquecidos');

// Imprimindo os valores
console.log(typeof pessoa1);
console.log(`Olá ${pessoa1.Nome}! Você tem ${pessoa1.Idade}`);

