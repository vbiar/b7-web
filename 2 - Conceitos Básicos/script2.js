function clicked() {
    document.getElementById('titulo').innerHTML = 'Troca o titulo'
}

function typed(e) {
    if (e.keyCode == 13 && e.ctrlKey == true) {
        let texto = document.getElementById('campo').value

        console.log(texto)
    }
}

function typed(e) {
    if (e.keyCode == 13 && e.ctrlKey == true) {
        let texto = document.getElementById('campo').value

        console.log(texto)
    }
}

function azul() {
    limpar()
    document.getElementById('titulo').classList.add('azul')
}

function vermelho() {
    limpar()
    document.getElementById('titulo').classList.add('vermelho')
}

function verde() {
    limpar()
    document.getElementById('titulo').classList.add('verde')
}

function limpar() {
    document.getElementById('titulo').classList.remove('azul')
    document.getElementById('titulo').classList.remove('vermelho')
    document.getElementById('titulo').classList.remove('verde')
}

function mostrarTelefone(elemento) {
    elemento.style.display = 'none'
    document.getElementById('telefone').style.display = 'block'
}

function mostrarTelefone(elemento) {
    elemento.style.display = 'none'
    document.getElementById('telefone').style.display = 'block'
}

let carro = {
    nome: 'Fiat',
    modelo: 'Uno',
    peso: '800kg',
    ligado:false, 
    ligar: function() {
        this.ligado = true;
        console.log('Ligando o ' + this.modelo)
        console.log('VRUM VRUM');
    },
    acelerar: function() {
        if (this.ligado === true) {
            console.log('Riiiiihihihhi')
        } else {
            console.log(this.nome+" "+this.modelo+" não está ligado")
        }
    }
};

carro.ligar();
carro.acelerar();

let carros = [
    {nome: 'Fiat', modelo: 'Palio'},
    {nome: 'Fiat', modelo: 'Uno'},
    {nome: 'Toyota', modelo: 'Corola'},
    {nome: 'Ferrari', modelo: 'Spider'}
];

console.log(carros[2].modelo);