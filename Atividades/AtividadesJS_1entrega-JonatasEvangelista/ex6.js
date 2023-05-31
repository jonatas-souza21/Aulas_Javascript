//Arquivo JS linkado ao HTML!

// Faça um programa que teste a idade do usuário.
let idade = Number(window.prompt(`Digite aqui sua idade:`));

// Se a idade digitada for maior ou igual a 18, exiba a mensagem "Você pode dirigir". Caso contrário, exiba a mensagem "Você ainda não pode dirigir".
if (idade >= 18) {
    window.alert('Você pode dirigir');
} else {
    window.alert('Você não pode dirigir');
}