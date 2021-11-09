
// Carinho (array vazio), Quantidade inicial de pizzas (modalQt = 1), Contador inicial do array de pizzas (modalKey = 0)
let modalQt = 1;
let cart = [];
let modalKey = 0;

// Cria uma constante que vai substituir a necessidade de reescrever o comando .querySelector, visto que este será usado com frequência ao longo do script, dessa forma diminuindo e organizando o código
const c = (el) => document.querySelector(el);
const cs = (el) => document.querySelectorAll(el);


// ---------------------------------------------------------------------- lISTAGEM DE PIZZAS E ABERTURA DO MODAL -------------------------------------------------

// Primeiro passo - Mapear a lista (pizzaJson), clonar o modelo (pizza-item), preencher as informações, fazer uma cópia e jogar na tela
pizzaJson.map((item, index) => { 

    // Criar uma função auxiliar para diminuir o código (cloneNode(true))
    let pizzaItem = c('.models .pizza-item').cloneNode(true); 

    // Criando uma variável para identificar qual pizza foi clicada através do pizzJson.id
    pizzaItem.setAttribute('data-key', index);

    // Chama a área no HTML que recebe os nomes, associando as informações de cada item do objeto (pizzaJson)
    pizzaItem.querySelector('.pizza-item--img img').src = item.img;
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`;
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;

    //Criando um evento dentro da tag 'a' de pizza-item para prevenir a execução default de atualização e/ou redirecionamento de tela
    pizzaItem.querySelector('a').addEventListener('click', (e) => {
        e.preventDefault();

    // Adiconar ao modal a informação de qual pizza está sendo selecionado
        let key = e.target.closest('.pizza-item').getAttribute('data-key');
        modalQt = 1;
        modalKey = key;

    
    // Adiciona as informações do pizzaJson a tela do modal
        c('.pizzaBig img').src = pizzaJson[key].img;
        c('.pizzaInfo h1').innerHTML = pizzaJson[key].name;
        c('.pizzaInfo--desc').innerHTML = pizzaJson[key].description;
        c('.pizzaInfo--actualPrice').innerHTML = `R$ ${pizzaJson[key].price.toFixed(2)}`;

    // Deselecionar o item (pequeno, médio e grande) para que sempre que um novo modal for aberto ele esteja selecionando a opção 'Grande'
        c('.pizzaInfo--size.selected').classList.remove('selected');

    // Para identificar e atribuir um valor a cada item dentro de info-size (pequeno médio e grande)
        cs('.pizzaInfo--size').forEach((size, sizeIndex) => {

    // Faz com que o modal sempre abra com a seleção iniciando no grande (após ter sido resetado com a atribuição anterior)
            if (sizeIndex === 2) {
                size.classList.add('selected');
            }
            size.querySelector('span').innerHTML = pizzaJson[key].sizes[sizeIndex];
        });

    // Usando a variável criando no início para sempre abrir com qtd de pizza 1
        c('.pizzaInfo--qt').innerHTML = modalQt;
        
    // Ajusta a transição de opacidade para gerar um efeito de animação, integrando o CSS com JS (o código para transição já foi pré definido no CSS)
        c('.pizzaWindowArea').style.opacity = 0;

    // Código para abrir o modal no lugar do evento defautl do 'a', quando os + forem clicados para adicionar pizza ao carrinho (modal = pizzaWindowArea)
        c('.pizzaWindowArea').style.display = 'flex';

    // Seta um timer pra compensar a velocidade de execução do JS (que é muito rápida) para que possa ocorrer a animação
        setTimeout(() => {
            c('.pizzaWindowArea').style.opacity = 1;
        }, 200)
    });

    // .append() para não subescrever
    c('.pizza-area').append(pizzaItem);
});

// ----------------------------------------------------------------------------- EVENTOS DO MODAL ----------------------------------------------------------------

function closeModal () {
    c('.pizzaWindowArea').style.opacity = 0;
    setTimeout(() => {
    c('.pizzaWindowArea').style.display = 'none';
    }, 500);
};

cs('.pizzaInfo--cancelButton, .pizzaInfo--cancelMobileButton').forEach((item) => {
    item.addEventListener('click', closeModal);
});

c('.pizzaInfo--qtmenos').addEventListener('click', () => {
    if (modalQt > 1) {
    modalQt--;
    c('.pizzaInfo--qt').innerHTML = modalQt;
    }
});

c('.pizzaInfo--qtmais').addEventListener('click', () => {
    modalQt++;
    c('.pizzaInfo--qt').innerHTML = modalQt;
});  

cs('.pizzaInfo--size').forEach((size, sizeIndex) => {
    size.addEventListener('click', (e) => {
    c('.pizzaInfo--size.selected').classList.remove('selected');
    size.classList.add('selected');
    });
});

// -------------------------------------------------------------------------- CARRINHO ---------------------------------------------------------------

// Qual a pizza (modalKey), qual o tamanho (size) e quantas pizzas são(modalQt)?

c('.pizzaInfo--addButton').addEventListener('click', () => {
    let size = parseInt(c('.pizzaInfo--size.selected').getAttribute('data-key'));

    let identifier = pizzaJson[modalKey].id+'@'+size;

    let key = cart.findIndex((item) =>  item.identifier == identifier);

    if (key > -1) {
        cart[key].qt += modalQt;
    } else {
        cart.push ({
            identifier,
            id: pizzaJson[modalKey].id,
            size,
            qt: modalQt
        });
    }
    updateCart();
    closeModal();
});

function updateCart() {
    if (cart.length > 0) {
        c('aside').classList.add('show');
        c('.cart').innerHTML = '';

        let subtotal = 0;
        let desconto = 0;
        let total = 0;

        for(let i in cart) {
            let pizzaItem = pizzaJson.find((item) => item.id == cart[i].id);
            subtotal += pizzaItem.price * cart[i].qt;

            let cartItem = c('.models .cart--item').cloneNode(true);

            let pizzaSizeName;
            switch(cart[i].size) {
                case 0:
                    pizzaSizeName = 'P';
                    break;
                case 1: 
                    pizzaSizeName = 'M';
                    break;
                case 2:
                    pizzaSizeName = 'G';
                    break;
            }

            let pizzaName = `${pizzaItem.name} (${pizzaSizeName})`

            cartItem.querySelector('img').src = pizzaItem.img;
            cartItem.querySelector('.cart--item-nome').innerHTML = pizzaName;
            cartItem.querySelector('.cart--item--qt').innerHTML = cart[i].qt;
            cartItem.querySelector('.cart--item-qtmenos').addEventListener('click', () => {
                if(cart[i].qt > 1) {
                    cart[i].qt--;
                } else {
                    cart.splice(i, 1);
                }
                updateCart();
            })
            cartItem.querySelector('.cart--item-qtmais').addEventListener('click', () => {
                cart[i].qt++;
                updateCart();
            })
            c('.cart').append(cartItem);
        }

        desconto = subtotal * 0.1;
        total = subtotal - desconto;

        c('.subtotal span:last-child').innerHTML = `R$ ${subtotal.toFixed(2)}`;
        c('.desconto span:last-child').innerHTML = `R$ ${desconto.toFixed(2)}`;
        c('.total span:last-child').innerHTML = `R$ ${total.toFixed(2)}`;

    } else {
        c('aside').classList.remove('show');
    }
}