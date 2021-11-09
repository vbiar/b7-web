// String PADSTART e PADEND
/*
padStart() - Recebe dois parâmetros (o número mínimo de caracteres de uma string e outra parâmetro que irá preencher para alcançar o valor mínimo) 
Preenche ANTES da String
padEnd() - Recebe dois parâmetros (o número mínimo de caracteres de uma string e outra parâmetro que irá preencher para alcançar o valor mínimo)
Preenche DEPOIS da String
*/

let telefone = '5'

console.log(telefone.padEnd(9, '*'));
console.log(telefone.padStart(9, '*'));


// Exemplo com cartão

let cartao = '12341234123412341234'

let lastDigits = cartao.slice(-4) // Pega os últimos 4 itens

let cartaoMascarado = lastDigits.padStart(16, '*'); // vai estabelecer o número mínimo de caracteres e preencher os campos vazios com '*' 

console.log('Este é o seu cartão ' + cartaoMascarado + ' ?')  // Este é o seu cartão ************1234?