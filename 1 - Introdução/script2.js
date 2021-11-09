/* FORMAS DE MANIPULAR HTML NO JS */

/* 1. Através do ID */

document.getElementById("titulo").innerHTML = "Hello, World";

/* 2. Através do document.write para digitar direto no HTML */

document.write("Algum texto");

/* 3. Utilizando a janela do navegador */

alert("Mensagem example");

/* Através do console */

console.log("Testando alguma coisa"); 


/* ------------------------------------------------------------------------------------------------------------------------------------------------------ */

/* CONDICIONAIS */

var time = 9;

if (time < 12) {
    console.log("Bom dia!");
} else if (time < 18) {
    console.log("Boa tarde!");
} else {
    console.log("Boa noite!");
};

/* ------------------------------------------------------------------------------------------------------------------------------------------------------ */

/* DOM = Document Object Model */

/* Manipula os elementos que constroem a página em HTML */

/* Selciona o elemento pelo ID */

document.getElementById('id').innerHTML;

/* Seleciona os elementos pela CLASSE */

document.getElementsByClassName('class')[index].innerHTM;

/* Seleciona o elemento pela TAG */

document.getElementsByTagName('tag')[index].innerHTML;

/* Seleciona o elemento pelo NOME */

document.getElementsByName('')[index].innerHTML;

/* ------------------------------------------------------------------------------------------------------------------------------------------------------ */

/* querySelector */

/* Pode selecionar qualquer parâmetro usando os mesmos princípios do CSS.
 #ID
 .CLASS 
 Nome da Tag */

document.querySelector('').innerHTM;
documnet.querySelectorAll('').innerHTM;
documnet.querySelectorAll('')[index].innerHTM;

/* querySelector com onClick, classList, .add e .remove */

function green() {
    document.querySelector('#example').classList.remove('red');
    document.querySelector('#example').classList.remove('blue');
    document.querySelector('#example').classList.add('green');
}

function red() {
    document.querySelector('#example').classList.remove('green');
    document.querySelector('#example').classList.remove('blue');
    document.querySelector('#example').classList.add('red');
}

function blue() {
    document.querySelector('#example').classList.remove('red');
    document.querySelector('#example').classList.remove('green');
    document.querySelector('#example').classList.add('blue');
}

/* Resolvendo com o .contains dentro de uma condicional */

function trocar() {
    if (document.querySelector('button').classList.contains('black')) {
     document.querySelector('button').classList.remove('black');
     document.querySelector('button').classList.add('green');
    } else {
     document.querySelector('button').classList.remove('green');
     document.querySelector('button').classList.add('black');
    }
 }

/* ------------------------------------------------------------------------------------------------------------------------------------------------------ */

 /* TYPEOF */

/* Utilizado para saber que tipo de variável estamos trabalhando */

let myName = "Vitor Biar";
let type = typeof myName;

/* ------------------------------------------------------------------------------------------------------------------------------------------------------ */

/* FUNÇÕES */

function changeText(title) {
    document.getElementById('titulo').innerHTML = title;
    document.getElementById("campo").value = title;
}

function somar(x, y) {
    let total = x + y;

    document.getElementById('campo').value = total
}

/* SET AND GET ATTRIBUTE */


function changeImage(filename, filetype) {
    document.querySelector('.image').setAttribute('src', 'img/' + filename);
    document.querySelector('.image').setAttribute('data-type', filetype);
}

function getType() {
   let type = document.querySelector('.image').getAttribute('data-type');
   alert("The type is: " + type);
}


/* .style.display, addEventListener */ 

function topScreen() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

function decideScroll() {
    if (window.scrollY === 0) {
        // ocultar botão
        document.querySelector('.scrollbutton').style.display = 'none';
    } else {
        // mostrar botão
        document.querySelector('.scrollbutton').style.display = 'block';
    }
}

window.addEventListener('scroll', decideScroll);


