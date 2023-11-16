/* criando classes de CSS para o "imagens-slideshow" com JS */

let imagensSlideshow = document.querySelector('.imagens-slideshow');

imagensSlideshow.style.maxWidth = "1000px";
imagensSlideshow.style.position = "relative";
imagensSlideshow.style.margin = "auto";

/* Fim da criação de classes de CSS para o "imagens-slideshow" com JS */

/* Inicio do JS para o funcionamento do slideShow */

let slideInicial = 1;
mostrarSlide(slideInicial);

function somarSlide(n) {
    mostrarSlide(slideInicial += n);
}

function mostrarSlide(n) {
    let i;
    let slides = document.getElementsByClassName('imagem-slide');
    if(n > slides.length){
        slideInicial = 1
    }
    if(n < 1){
        slideInicial = slides.length
    }
    for(i = 0; i < slides.length; i++){
      slides[i].style.display = "none";
    }
    slides[slideInicial - 1].style.display = "block";
}

/* Fim do JS para o funcionamento do slideShow */