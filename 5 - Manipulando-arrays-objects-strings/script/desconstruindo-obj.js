// Manipulando DESCONSTRUÇÃO DE OBJETOS
/*
Desconstrução significa acesssar informações específicas de um objeto e transformá-las em varíaveis
*/

let pessoa = {
    nome: 'Vitor',
    sobrenome: 'Biar',
    idade: 30,
    social: {
        facebook: 'vbiar',
        instagram: {
            url: 'vitorbiar',
            seguidores: 1000,
        }
    },
    nomeCompleto: function() {
        return `${this.nome} ${this.sobrenome}`
    }
};


let idade = pessoa.idade;
let nome = pessoa.nome;
let sobrenome = pessoa.sobrenome;
let instagram = pessoa.social.instagram;
let nomeCompleto = pessoa.nomeCompleto(); // Metódo sem desconstrução


// Desconstruindo o objeto - Pegas as informações do objeto anterior e as transforma em variáveis independentes. nome, sobrenome e que eram informações do objeto pessoa, passam a ser variáveis independentes (forma simplificada de fazer o processo anterior)

let { nome, sobrenome, idade } = pessoa;  


/* Com o : depois da informação você pode redefinir o nome da variável que será criada na desconstrução
Quando a propriedade não tem um valor, é possível atribuir um valor padrão na desconstrução com o sinal de atribuição =*/

let { nome:pessoaNome, sobrenome, idade = 30 } = pessoa; 



// Objeto dentro de objeto

let { facebook, instagram } = pessoa.social; 
 

// Propriedades de um objeto + propriedades de um objeto dentro de um objeto

 let { nome, idade, social: { instagram } } = pessoa;

console.log(nome, idade, instagram);



// Pegando propriedades do objeto (pessoa), entrando no objeto social, entrando no objeto instagram, pegando a proprierade 'url' e alterando seu nome para instagram. A exibação será o valor de url, porém foi chamada no console.log como instagram

let { nome, idade, social: { instagram: { url:instagram, seguidores } }} = pessoa

console.log(nome, idade, instagram);



function pegarNomeCompleto(obj) {
    let nome = obj.nome
    let sobrenome = obj.sobrenome

    return `${nome} ${sobrenome}`
}

// Desconstruindo - Especifica que a função vai receber um parâmetro objeto e já vai ser descontruido enquanto parâmetro recebido, reduzindo o código anterior em que é preciso associar obj.nome e obj.sobrenome a novas variáveis. Abre o objeto 'social' (objeto dentro do objeto pessoa) abre o objeto 'instagram' (objeto dentro do objeto social) pega o valor url e atribui como instagram

function pegarNomeCompleto({nome, sobrenome, social: {instagram: {url:instagram}}}) {
    return `${nome} ${sobrenome} (Siga em ${instagram})`
}

console.log(pegarNomeCompleto(pessoa));