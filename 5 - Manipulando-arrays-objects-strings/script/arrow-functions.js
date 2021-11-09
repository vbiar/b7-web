// Utilizando ARROW FUNCTION
/*
    Uma forma simplificada de chamar uma função.
    Em Arrow Functions não há o objeto THIS
*/

function somar(x, y) {
    return x+y;
}

let somar = function(x, y) {
    return x + y;
}

let somar = (x,y) => {  // Se abrir {} precisa do return
    return x + y;
}

let somar = (x, y) => x+y; // É possível fazer sem {} chamando direto uma operação e sem a necessidade de return

let letrasNoNome = nome => nome.length; // Quando recebe apenas 1 parâmetro, o parenteseses são opcionais / Se apenas uma ação, o {} também é o opcional