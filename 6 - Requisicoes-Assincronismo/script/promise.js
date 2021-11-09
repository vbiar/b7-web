// O que é PROMISE
/*
Quando se executa alguma função assíncrona, sempre se fica com a promessa de retorno de algum retorno dentro de um determinado tempo (seja um resultado, não ter um resultado ou dar um problema)
then() - Quando der tudo certo e tiver retorno de um resultado
catch() - Quando der errado e não tiver resultado
*/

function pegarTemperatura() {
    return new Promise (function(resolve, reject) {
        console.log('Pegando temperatura...');

        setTimeout(function() {
            resolve('40 graus');
        }, 2000);
    });
}

// Usando a Promise

let temp = pegarTemperatura(); // Criando uma promise

temp.then(function(resultado) { // E então, quando obtiver o resultado, execute a ação (console.log)
    console.log("Temperatura: " + resultado);
}); 

temp.catch(function(error) { //  Quando der algum problema
    console.log('Erro')
});