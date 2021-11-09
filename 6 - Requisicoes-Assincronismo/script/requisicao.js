// Requisições e Assincronismo
/*
Requisição é quando você acessa um site, seu computador faz uma requisição aos servidores do site acessado e retorna as informações exibidas.
Cada conteúdo do site gera uma requisição diferente, imagens, arquivo CSS, arquivo JS, etc.
Um site exibido na sua tela é gerado a partir de diversas requisições feitas do usuário para o servidor do site.
*/

// Diferença entre código SÍNCRONO e ASSÍNCRONO
/*
Código síncrono é executado linha a linha. Só passa de linha quando a linha anterior é finalizada
Toda requisição interna é ASSÍNCRONA enquanto o resto do código é SÍNCRONO
*/

// Síncrono

let nome = 'Vitor';
let sobrenome = 'Biar';
let nomeCompleto = nome + ' ' + sobrenome;  // Código executado em ordem


// Assíncrono

let nome = 'Vitor';
let sobrenome = 'Biar';
let temperatura = Maquina.pegarTemparatura(); // Aqui há uma requisição externa para realizar a função e receber os dados (ASSÍNCRONO)
let nomeCompleto = nome + ' ' + sobrenome; // Com isso, essa linha não espera a finalização da anterior e é executada simultaneamente de forma (SÍNCRONO)
