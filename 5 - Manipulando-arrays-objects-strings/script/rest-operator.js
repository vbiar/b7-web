// Utilizando REST OPERATOR
/*
O operador ( ... ) rest é muito semelhante ao spread, porém bem menos utilizado.
Utilizado para o caso de você não saber quantos parâmetros irá receber, dessa forma ...numeros pode receber um número indefinido de parâmetros e retorna um array com todos os elementos.
*/


function adicionar(...numeros) {  // rest operator

    console.log(numeros);
}

adicionar(5, 6, 7, 8, 9, 10); // Recebe os parâmetros e retorna um array [5,6,7,8,9,10]

adicionar('João', 'Maria', 'José', 'Pedro', 'Tiago'); // Recebe os parâmetros e retorna um array com os nomes


// Utilizando REST e SPREAD

function adicionar(nomes, ...novosNomes) { // Aqui é REST (utilizado para receber número de parâmetros indefinidos)
    let novoConjunto = [
        ...nomes,  // Aqui é SPREAD (reutilizar um array já definido, introduzindo APENAS seus elementos sem que ele seja um array dentro de um array)
        ...novosNomes  // Aqui é SPREAD (reutilizar um array já definido, introduzindo APENAS seus elementos sem que ele seja um array dentro de um array)
    ];

    return novoConjunto;
}


let nomes = ["Vitor", "Maria"];

let outros = adicionar(nomes, "Antonio", "João", "José");

console.log(outros) // Aqui temos um único array com ['Vitor', 'Maria', 'Antonio', 'João', 'José'] graças a utilização do REST (nos parâmetros da função para receber Antonio, João e José) e aos SPREADS dentro da função (para reutilizar os elementos de nomes (Vitor e Maria) e os elementos de novosNomes(Antonio, Joao, José))


