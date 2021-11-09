// ASYNC WAIT
/*
async - Força a execução da função a esperar onde for adiciona o wait()
*/

async function loadPosts() {
    document.getElementById("posts").innerHTML = 'Carregando..';

    // Utilizando o async com await para forçar a parada da execução até que se obtenha o resultado

        let req = await fetch('https://jsonplaceholder.typicode.com/posts')  
        let json = await req.json();

        montarBlog(json);
};

// função com then e catch (antes de receber async e wait)

   /* fetch('https://jsonplaceholder.typicode.com/posts')
        .then(function(resultado) {
            return resultado.json();
        })
        .then(function(json) {
            montarBlog(json);

            
        })
        .catach(function(error) {
            console.log('Deu problema!');
        })
}; */

function montarBlog(lista) {
    let html = '';

    for(let i in lista) {
        html += '<h3>' + lista[i].title + '</h3>';
        html += lista[i].body + '<br/>';
        html += '<hr/>';
    }

    document.getElementById("posts").innerHTML = html;
}
