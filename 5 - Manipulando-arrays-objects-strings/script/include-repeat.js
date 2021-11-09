// Utilizando INCLUDE e REPEAT
/*
includes() - Verifica se existe dentro do Array (ou String) o parâmetro definido para includes e retorna true ou false
repeat() - Recebe um parâmetro para dizer quantas vezes o valor vai ser repetido
*/

// em ARRAY

let lista = ['ovo', 'café', 'arroz', 'feijão', 'macarrão'];

console.log(lista.includes('carne')); // retorna false

// em STRING

let nome = 'Vitor';

console.log (nome.includes('v')); // retorna false (Aqui ele faz distinção entre maiúsucla e minúscula e, por isso, retorna false)

// REPEAT

console.log ( nome.repeat(3) ); // Repete 'VitorVitorVitor'

console.log( 'x'.repeat(20) ); // Repete 'x' 20 vezes