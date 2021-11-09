// Utilizando SPREAD OPERATOR
/*
 ... - Utilizado para chamar os valores de um array ou um objeto de outro array ou objeto 
*/

let numeros = [1,2,3,4];

let outros = [...numeros, 5, 6,7 ,8]

let info = {
    nome: 'Vitor',
    sobrenome: 'Biar',
    idade: 30
};

let novaInfo = {
    ...info,
    cidade: 'Cabo Frio',
    estado: 'Rio de Janeiro',
    pais: 'Brasil'
}

function adicionarInfo(info) {
    let novasInfo = {
        ...info,
        status: 0,
        token: 'sadsadsad',
        data_cadastro:'...'
    };
    return novasInfo
}

console.log(adicionarInfo({nome:'Vitor', sobrenome:'Biar'}));
