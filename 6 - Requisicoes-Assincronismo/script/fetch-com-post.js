// Criando uma requisição FETCH com POST

/*
fetch() - Retorna uma PROMISE / 2 parâmetros
1 parâmetro - URL de onde vai fazer a requisição
2 parâmetro - Opcional / Objeto que geralmente recebe as configurações da requisição (ex: métodos GET, POST, PUT, DELETE)
*/

async function inserirPost() {
    document.getElementById("posts").innerHTML = "Carregando..";

    let req = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'Titulo teste',
            body: 'Corpo de teste',
            userId: 4
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    let json = await req.json();

    console.log(json);

}
