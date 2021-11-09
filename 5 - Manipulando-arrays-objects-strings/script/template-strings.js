// Manipulando TEMPLATE STRINGS
/*
Aspas invertidas - shift + acento agudo ( ````` )
${} - Utilizado para receber as váriaveis
*/

let nome = 'Vitor';
let idade = 30;

//let frase = 'Meu nome é ' + nome + '  eu tenho ' + idade + ' anos e ano que vem eu farei ' + (idade+1) + ' anos';

let frase = `Meu nome é ${nome},  eu tenho ${idade} anos e ano que vem eu farei ${idade+1} anos`;


console.log(frase);