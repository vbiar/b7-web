// Criando uma requisição (FETCH)
/*
fetch() - Retorna uma PROMISE / 2 parâmetros
1 parâmetro - URL de onde vai fazer a requisição
2 parâmetro - Opcional / Objeto que geralmente recebe as configurações da requisição (ex: métodos GET, POST, PUT, DELETE)
*/

function loadPosts() {
    document.getElementById("posts").innerHTML = 'Carregando..';

   fetch('https://jsonplaceholder.typicode.com/posts')
        .then(function(resultado) {
            return resultado.json();
        })
        .then(function(json) {
            document.getElementById("posts").innerHTML = json.length + 'posts';
        })
        .catach(function(error) {
            console.log('Deu problema!');
        })
};

// Ajustando a requisição anterior para criar um 'mini blog'
function loadPosts() {
    document.getElementById("posts").innerHTML = 'Carregando..';

   fetch('https://jsonplaceholder.typicode.com/posts')
        .then(function(resultado) {
            return resultado.json();
        })
        .then(function(json) {
            montarBlog(json);

            
        })
        .catach(function(error) {
            console.log('Deu problema!');
        })
};

function montarBlog(lista) {
    let html = '';

    for(let i in lista) {
        html += '<h3>' + lista[i].title + '</h3>';
        html += lista[i].body + '<br>';
        html += '<hr>';
    }

    document.getElementById("posts").innerHTML = html;
};
