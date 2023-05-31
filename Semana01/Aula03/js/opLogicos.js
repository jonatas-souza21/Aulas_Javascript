// Programa que utiliza operador lógico AND (&&) para testar se posso ou não dirigir.
var nome = 'Jonatas';
var idade = 21;
var tenhoHab = false;
console.log(`O ${nome} pode dirigir? ${idade >= 18 && tenhoHab == true}`);

// Programa que utiliza operador lógico OR (||) para testar se vou a praia ou não.
var dinheiro = 150;
var clima = "frio";
var praia = dinheiro >= 100 || clima == "sol";

// Operador lógico NOT (!) para inverter o valor lógico.
console.log(`O ${nome} vai à praia? ${!praia}`);

