// Manipulando DATES
/*
Date() - Cria uma variável que recebe a data atual (NO JAVASCRIPT O MÊS COMEÇA DO 0 E TERMINA EM 11. JANEIRO == 0 DEZEMBRO == 11)
toDateString() - Retorna data resumida
toUTCString - Converte para GMT
*/

let d = new Date();

let d = new Date(2020, 0, 1, 12, 30, 12)

let d = new Date('2020-01-23 15:42:05');


// Manipulando DATES 2
/*
getFullYear() - Retorna o ano completo do Date
getMonth() - Pega o Mês do Date (OS MESES NO JAVASCRIPT COMEÇAM A PARTIR DO 0)
getDay() - Retorna o dia da semana (de 0 - Domingo à 6 - Sábado)
getDate() - Pega o dia atual
getHours() - Pega a hora atual
getMinutes() - Pega os minutos atuais
getSeconds() - Pega os segundos atuais
getMilliseconds() - Pega os milisegundos
getTime() - Pega a quantidade de milisegundos desde o valor inicial de contagem (01 jan 1970 00:00h) até o momento atual
Date.now() - Retorna o valor atual sem a necessidade de criar uma variável new Date()
*/

let d = new Date();

let novoValor = d.getFullYear();
let novoValor = d.getMonth();
let novoValor = d.getDay();
let novoValor = d.getDate();
let novoValor = d.getHours();
let novoValor = d.getMinutes();
let novoValor = d.getSeconds();
let novoValor = d.getMilliseconds();
let novoValor = d.getTime();
let novoValor = Date.now();

// Manipulando DATES 3
/*
setFullYear() - Seta um ano específico dentro do parâmetro
setMonth() - Seta um mês específico dentro do parâmetro (de 0 - Janeiro à 11 - Dezembro)
setDate - Seta para uma data atual. É possível utilizar o getDate dentro do parâmetro para pegar o dia atual e somar um valor qualquer para saber o dia resultado da operação.
*/

let d = new Date();

d.setFullYear(2022);
d.setMonth(11); //Dazembro
d.setDate(d.getDate() + 5);
d.setHours(d.getHours() + 24)

let novoValor = d;
console.log(novoValor);