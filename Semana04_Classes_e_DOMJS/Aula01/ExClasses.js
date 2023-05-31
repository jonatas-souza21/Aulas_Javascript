// Definindo as classes 
class Animal {
    constructor (Especie, Idade, Cor, Raca, Funcao) {
        this.Especie = Especie;
        this.Idade = Idade;
        this.Cor =  Cor;
        this.Raca = Raca;
        this.Funcao =  Funcao;
    }
};

class Carro {
    constructor (Marca, Modelo, Ano, Cor, Condicao) {
        this.Marca = Marca;
        this.Modelo = Modelo;
        this.Ano = Ano;
        this.Cor = Cor;
        this.Condicao = Condicao;             
    }
};

// Instanciando os objetos
let animal1 = new Animal('Cachorro', '10 anos', 'Branco', 'Poddle', 'Mijar no sofa');
let animal2 = new Animal('Cachorro', '6 anos', 'Caramelo', 'SRD', 'Correr atrás do motoboy');
let animal3 = new Animal('Gato', '3 anos', 'Preto', 'Siamês', 'Arranhar o sofá');

let carro1 = new Carro ('Chevrolet', 'Opala', 1988, 'Preto', 'Usado');
let carro2 = new Carro ('Honda', 'Civic', 2023, 'Vermelho', 'Novo');
let carro3 = new Carro ('Fiat', 'Argo', 2022, 'Cinza', 'Semi-Novo');

// Imprimindo os valores
console.log(`O ${animal1.Especie} é da raça ${animal1.Raca}`);
console.log(`O carro chamado ${carro1.Modelo} é da marca ${carro1.Marca}`);