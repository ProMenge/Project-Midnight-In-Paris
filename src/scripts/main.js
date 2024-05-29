$(document).ready(function () {
    $('.cast__img').hover(
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

    $('.cast__img').on('click', function () {
        // Esconde todas as descrições
        $('.cast__description__item').hide();

        // Remove a classe de destaque de todas as imagens
        $('.cast__img').removeClass('cast__img--active');
        $('.cast__item').removeClass('cast__item--active');
        $('.cast__name').removeClass('cast__name--is-active');

        // Mostra a descrição correspondente
        var descriptionId = $(this).data('description');
        $('#' + descriptionId).show();

        // Adiciona a classe de destaque à imagem clicada
        $(this).addClass('cast__img--active');
        $(this).parent('.cast__item').addClass('cast__item--active');
        $(this).siblings('.cast__name').addClass('cast__name--is-active');
    });
    $('.cast__img').first().click();
});