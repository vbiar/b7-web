// O que é JSON
/*
JSON - JavaScript Object Notation
É um objeto JavaScript utilizada pra fazer a comunicação entre requisições. Tanto para guardar informações como para enviar e receber informações.
É a forma mais popular de se comunicar entre as requisições.
Pode armazenar infinitas informações
*/


// Criando um JSON (recebe um objeto)

let pessoa = {
    nome: 'Vitor',
    sobrenome: 'Biar',
    idade: 30,
    caracteristicas: ['assertivo', 'analítico', 'critico', 'reflexivo'],
    local: {
        cidade: 'Cabo Frio',
        estado: 'Rio de Janeiro',
        pais: 'Brasil'
    }
}

console.log(pessoa);


// O que é JSON.parse
/*
JSON.parse() - Recebe uma string de um JSON e transforma em JSON real
Quando se recebe um resultaod de uma requisição, geralmente ele vem como um JSON, porém, em forma de STRING. O parse funciona para transformar em um JSON real.
*/

let pessoa = JSON.parse('{"nome": "vitor", "idade": 30}')


// O que é JSON.stringify
/*
JSON.stringify() - O inverso do parse, recebe um JSON real e transforma em um JSON String]
O stringify e o parse se comunicam para fazer a interação entre enviar e receber requisições

*/

JSON.stringify({nome: "vitor", idade: 30}) // entrega '{"nome": "vitor", "idade": 30}'