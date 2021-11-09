let dia = 3;
let diaNome = '';

switch(dia) {
    case 1:
        diaNome = 'Segunda-Feira';
        break;
    case 2:
        diaNome = 'Terça-Feira';
        break;
    case 3:
        diaNome = 'Quarta-Feira';
        break;
    case 4:
        diaNome = 'Quinta-Feira';
        break;
    case 5:
        diaNome = 'Sexta-Feira';
        break;
    case 6:
        diaNome = 'Sábado';
        break;
    case 7:
        diaNome = 'Domingo';
        break;
}

document.getElementById('dia').innerHTML = "Hoje é " + diaNome


let dia = 3;
let diaNome = '';

switch(dia) {
    case 6:
    case 7:
        diaNome = 'Final de Semana';
        break;
    default:
        diaNome = 'Dia de Semana';
        break;
}

document.getElementById('dia').innerHTML = "Hoje é " + diaNome

// FOR LOOP

let texto = '';

for (let i = 0; i <= 50; i++) {
    texto = texto + i + '<br>';
}

document.getElementById('demo').innerHTML = texto;


// FOR ARRAY

let carros = [ 'Fusca', 'Palio', 'Corolla', 'Ferrari', 'Lamborghini'];

let html = '<ul>';

for (let i in carros) {
    html += '<li>'+ carros[i] +'</li>';
}

html += '</ul>';

document.getElementById('demo').innerHTML = html;

// WHILE

let html = '';

let c = 0;

while(c < 10) {
    html += 'Numero: '+ c +' <br>';
    c++;
}