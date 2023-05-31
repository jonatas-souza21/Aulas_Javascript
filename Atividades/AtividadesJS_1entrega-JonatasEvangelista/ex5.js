//Arquivo JS linkado ao HTML!

//Faça um programa conferir sua idade.
let idade = Number(window.prompt(`Digite aqui sua idade:`));

/**exiba uma mensagem informando que o usuário é menor de idade. Se a idade for igual ou maior do que 18 anos e menor do que 60 anos, exiba uma mensagem informando que o usuário é adulto. Se a idade for igual ou maior do que 60 anos, exiba uma mensagem informando que o usuário é idoso.
 */
if (idade < 18) {
    window.alert('Usuário é menor de idade');
} else if (idade >= 18 && idade < 60) {
    window.alert('Usuário é adulto');
} else {
    window.alert('Usuário é idoso');
}