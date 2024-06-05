$(document).ready(function () {

    const $buttons = $('[data-tab-button]');
    const alturaHeaderSection = $(".header").outerHeight();


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

    $buttons.on('click', function () {
        const abaAlvo = $(this).data('tab-button');
        const $aba = $(`[data-tab-id=${abaAlvo}]`);

        escondeTodasAbas();
        $aba.addClass('inspirations__panel--is-active');

        removeBotaoAtivo();
        $(this).addClass('inspirations__tabs__button--is-active');
    });

    function removeBotaoAtivo() {
        $buttons.removeClass('inspirations__tabs__button--is-active');
    }

    function escondeTodasAbas() {
        $('[data-tab-id]').removeClass('inspirations__panel--is-active');
    }



    function ocultaElementosDoHeader() {
        $('.header').addClass('header--is-hidden');
    }

    function exibeElementosDoHeader() {
        $('.header').removeClass('header--is-hidden');
    }

    $(window).scroll(function () {
        const posicaoAtual = $(window).scrollTop();

        if (posicaoAtual > alturaHeaderSection) {
            ocultaElementosDoHeader();
        } else {
            exibeElementosDoHeader();
        }
    });
});

