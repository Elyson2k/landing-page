function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    let icon = document.querySelector('.mobile-menu-icon img'); // Seleciona a imagem dentro do botão

    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        icon.src = "./images/menu_white_36dp.svg"; // Ícone do menu
    } else {
        menuMobile.classList.add('open');
        icon.src = "./images/close_white_36dp.svg"; // Ícone de fechar
    }
}