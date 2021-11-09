// Manipulando INTERVALOS
/*
setInterval() - Recebe um parâmetro (que pode ser uma função criada anteriormente e um tempo para repetir a execução, que será dado em
milisegundos(1 segundo = 1000 milisegundos)) e será executado repetidametne de acordo com os parâmetros
clearInteveral() - Encerra o evento de setInterval
setTimeout() - Recebe um parâmetro de tempo, executa a função e se encerra (não fica executando repetição infinita)
*/

let timer;

function comecar() {
    timer = setInterval(showTime, 1000);

};

function parar() {
    clearInterval(timer);
};



function showTime () {
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    let txt = h + ':' + m + ':' + s;

    document.querySelector('.demo').innerHTML = txt;
};

let time;

function rodar() {
   timer = setTimeout(function() {
        document.querySelector('.demo').innerHTML = "Rodou!"
        }, 2000)
}

function parar() {
    clearTimeout(timer);
}