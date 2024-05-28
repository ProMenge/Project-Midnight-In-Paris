$(document).ready(function () {
    $('.list__item__img').hover(
        function () {
            // Ao passar o mouse, muda a imagem para o src definido no data-hover
            $(this).data('original-src', $(this).attr('src'));
            $(this).attr('src', $(this).data('hover'));
        },
        function () {
            // Ao tirar o mouse, retorna a imagem original
            $(this).attr('src', $(this).data('original-src'));
        }
    );
});