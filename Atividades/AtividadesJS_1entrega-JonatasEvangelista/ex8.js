//Arquivo JS linkado ao HTML!

//Crie um programa que solicite ao usuário que digite a sua altura em metros e o seu peso em quilogramas.
let altura = Number(window.prompt('Digite sua altura em metros (apenas números, separe em "."):'));
let peso = Number(window.prompt('Digite seu peso em quilogramas: (apenas números)'));

// Em seguida, o programa deve calcular o índice de massa corporal (IMC) do usuário usando a fórmula IMC.
let imc = peso / (altura * altura);

//Verificar se o IMC está dentro do intervalo saudável de 18,5 a 24,9. O programa deve imprimir na tela se o IMC está dentro do intervalo saudável ou não. 
if (imc >= 18.5 && 24.9) {
    window.alert('O IMC está dentro do intervalo saudável');
} else {
    window.alert('O IMC está fora do intervalo saudável');
}

window.alert(`Resultado: ${imc}`);
