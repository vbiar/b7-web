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
