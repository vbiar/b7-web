/* ----------------------------------------------------------------------- STRING ----------------------------------------------------------------------- */

// Manipulação de Strings 1 - indexOf e .length

let nome = 'Vitor Biar e Avila';

console.log(nome.length);

let resultado = '';

if (nome.indexOf('Vitor') > -1) {
    resultado = 'Achou';
} else {
    resultado = 'Não achou!';
}

console.log(resultado);

// Manipulação de Strings 2 - Extração de Informações
/* 
slice() - Utiliza dois parâmetros, sendo o primeiro a posição inicial em que você quer iniciar e o segundo onde encerra (pode percorrer a partir de valores negativos)
substring() - Funciona da mesma forma que o slice com a diferença de que o slice pode percorrer de trás pra frente e a substring não
substr() - Funciona de forma semelhante ao substring, porém difere no segundo parâmetro em que o segundo parâmetro define a quantidade de caractéres e não a posição de encerramento e também funciona com valores negativos
*/

let nome = 'Vitor Biar e Avila';

let resultado = nome.slice(-7, -13);
let resultado = nome.substring(7, 13);
let resultado = nome.substr(-4, 2);

console.log(resultado);

// Manipulação de Strings 3 - Replace
/* 
replace() - Recebe dois parâmetros: Pesquisa por X e substitua por Y
toUpperCase() - Transforma todas as letras em MAIÚSCULAS
toLowerCase() - Transforma todas as letras em minúscula
concat() - Concatena os parâmetros (essa função não é muito utilizada)
trim() - Remove todos os espaços dentro da String
charAt() - Identifica o caractér na posição pedida
split() - Transforma uma String em um array a partir de um caractér definido por um parâmetro (Exemplo: define o parâmetro como ' ' e onde for encontrado espaço ele separa como um elemento do array. Na frase: Bom dia, tudo bem? o array seria: [Bom, dia, tudo, bem?])
*/

let nome = 'Vitor Biar e Avila';

let resultado = nome.replace('Avila', 'Silva'); // Remove 'Avila' e adiciona 'Silva' resultado = 'Vitor Biar e Silva'
let resultado = nome.toUpperCase(); // VITOR BIAR E AVILA
let resultado = nome.toLowerCase(); // vitor biar e avila
let resultado = nome.concat(' Silva'); // Vitor Biar e Avila Silva
let resultado = nome.trim(); // VitorBiareAvila
let resultado = nome.charAt(6); // B 
let resultado = nome[6]; // B
let resultado = nome.split(' '); // resultado = [Vitor, Biar, e, Avila]

console.log(resultado);


let stringTeste = 'Bom dia, tudo bem?'

let resultado = stringTeste.split(' ');

console.log(resultado); // [Bom, dia, tudo, bem?]

/* ----------------------------------------------------------------------- NUMBER ----------------------------------------------------------------------- */

// Manipulando Numbers 
/*
toString() - Transforma o Number em String
toFixed() - Define a quantidade de casas decimáis que será exibida
parseInt() - Transforma uma String em Number inteiro
parseFloat() - Transforma uma String em Number decimál
*/

let n = 10;

let res = n.toString();
let res = n.toFixed(2);
let res = n.

console.log(res);


let n = '25.32';

let res = parseInt(n) + 5;
let res = parseFloat(n) + 5;

console.log(res);

/* ----------------------------------------------------------------------- ARRAY ----------------------------------------------------------------------- */

// Métodos de Array 1
/* 
toString() - Transforma o array em uma String, adicionando uma vírgula entre cada item
join() - Transforma um array em uma String, separando com o parâmetro definido no join (Exemplo: espaço)
indexOf() - Encontra um item específico no Array definido no parâmetro retornando a posição do item
pop() - Remove o último item do Array
shift() - Remove o primeiro item do Array
push() - Adiciona um novo item dentro de um Array
*/

let lista = ['Ovo', 'Farinha', 'Corante', 'Massa'];


let res = lista.toString(); // Ovo,Farinha,Corante,Massa
let res = lista.join(' '); // Ovo Farinha Corante Massa
let res = lista.indexOf('Corante'); // 2


let lista = ['Ovo', 'Farinha', 'Corante', 'Massa'];

lista[0] = 'Ovos'; // Altera o valor no index 0 (de 'Ovo' para 'Ovos') 

lista.pop(); // Remove 'Massa'

lista.shift(); // Remove 'Ovo'

lista.push('Baunilha'); // Adiciona 'Baunilha'

let res = lista; // res = ['Farinha', 'Corante', 'Baunilha']

//  Métodos de Array 2
/* 
splice() - Remover um item específico de um Array. 
Primeiro parâmetro - Index a partir do qual os itens serão removidos
Segundo parâmetro - Quantos itens a partir do primeiro parâmetro devem ser removidos

concat() - Concatena dois ou mais arrays em único Array
sort() - Ordena o Array em ordem alfabética
reverse() - Inverte a ordenação do Array (Caso queira inverter em ordem alfabética, primeiro é necessário usar o sort())
*/

let lista = ['Ovo', 'Farinha', 'Corante', 'Massa'];

lista.splice(1, 1) //Remove 'Farinha' (index 1)
lista.sort() // ['Corante', 'Farinha', 'Massa' 'Ovo']
lista.reverse() // ['Ovo', 'Massa', 'Farinha', 'Corante']

let lista = ['Ovo', 'Farinha', 'Corante', 'Massa'];
let lista2 = ['Prato', 'Liquidificador', 'Forno'];

let res = lista.concat(); // res = ['Ovo', 'Farinha', 'Corante', 'Massa', 'Prato', 'Liquidificador', 'Forno']

// Métodos de Array 3
/* 
map() - Percorre o Array e executa uma função em cada item do Array (Pode receber funções)
filter() - Vai filtrar itens específicos de acordo com a denominação da função dentro do escopo
every() - Checa se todos os itens do Aray cumprem a condição especificada (retorna true ou false)
some() - Checa se pelo menos um dos itens do Array cumprem a condição especificada (retorna true ou false)
*/

let lista = [45, 4, 9, 16, 25];
let lista2 = [];

// Com MAP
lista2 = lista.map(function(item) {
    return item * 2;
});

// Com FOR
for(let i in lista) {
    lista2.push(lista[i] * 2);
}

// FILTER
lista2 = lista.filter(function(item) {
    if (item < 20) {
        return true;
    } else {
        return false;
    }
})

// EVERY
lista2 = lista.every(function(item) {
    if (item > 20) {
        return true;
    } else {
        return false;
    }
});

// SOME
lista2 = lista.every(function(item) {
    if (item > 20) {
        return true;
    } else {
        return false;
    }
});

// Simplificado

lista2 = lista.some(function(item) {
    return (item > 3) ? true : false;
})

// Métodos de Array 4
/* 
find() - Vai procurar algo dentro do Array (Pode receber parâmetro, index e até array)
findIndex() - Procura algo dentro do Array e retorna o Index (Retorna o index ou -1 se não encontrar)
*/

let lista = [45, 4, 9, 16, 25];
let lista2 = [];

lista2 = lista.findIndex(function(item) {
    return (item === 32)? true : false
});

let res = lista2;

console.log(res);

let lista = [
    {id:1, nome: 'Vitor', sobrenome:'Biar'},
    {id:2, nome: 'João', sobrenome:'Silva'},
    {id:3, nome: 'Maria', sobrenome:'Joaquina'}
];

let pessoa = lista.find(function(item) {
    return (item.id === 3)? true : false
});


let res = pessoa;

console.log(res);