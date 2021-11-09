// Manipulando DESCONSTRUÇÃO DE Arrays
/*
Desconstrução significa acesssar informações específicas de um objeto e transformá-las em varíaveis
*/

let info = [ 'Vitor Biar', 'Vitor', 'Biar', '@vbiar' ];

let [ nomeCompleto, nome, sobrenome, instagram ] = info;

let [ nomeCompleto, ,, instagram ] = info // Pulando indíces do array. Apenas dar vírgula e deixar um espaço vazio.

let [nome, sobrenome] = ['Vitor', 'Biar'] // Criando e desconstruindo um array ao mesmo tempo

function criar() {
    let a = [1, 2, 3];
    return a;
}

let numeros = criar(); //Criando um array através de uma função
;

let [a,b,c] = criar(); // Desconstruindo um array e criando variáveis através da chamada da função 

