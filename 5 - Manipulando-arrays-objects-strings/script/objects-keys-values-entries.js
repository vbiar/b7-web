// Object: KEY, VALUES e ENTRIES
/*
Object.keys() - Retorna as chaves de um objeto (Arrays também são considerados objetos)
Object.values() - Retorna os valores de um objeto
Object.entries()
*/

/* let lista = ['ovo', 'macarrão', 'feijão', 'pipoca'];

console.log( Object.keys(lista));
console.log( Object.values(lista));
console.log( Object.entries(lista)); */


let pessoa = {
    nome: 'Vitor',
    sobrenome: 'Biar',
    idade: 30  
};

console.log( Object.keys(pessoa)); // Retorna um array com as chaves ["nome", "sobrenome", "idade"]
console.log( Object.values(pessoa)); // Retorna um array com os valores das chaves ['Vitor', 'Biar', 30]
console.log( Object.entries(pessoa)); 
/* Gera um array para cada item, retornando um array para cada conjuto, 
retorna 
[Array(2) ('nome', 'Vitor') 
Array(2) ('sobrenome', 'Biar') 
Array(2)] ('idadade', 30) */