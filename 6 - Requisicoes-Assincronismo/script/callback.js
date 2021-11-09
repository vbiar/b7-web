// O que é CALLBACK
/*
É uma função JS criada e enviada para uma outra função (geralmente assíncrona)
Utilizada nas requisições para solicitar uma ida ao servidor e requisitar determinada informação, quando obtida tal informação, executar determinada função
*/

function alertar() {
    console.log('Opa, tudo bem?');
}


let nome = 'Vitor';
setTimeout(alertar, 2000); // Mesmo tendo sido escrito primeiro nas linhas de códigos, ele é executado posterior por ser um código assíncrono e um callback
let sobrenome = 'Biar';
console.log(`Nome completo: ${nome} ${sobrenome}`);

