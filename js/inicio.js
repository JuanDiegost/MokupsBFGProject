$(document).ready(function () {

    /*---------scroll menu--------*/
    var servicios = $('#servicios').offset().top -200,
        horario = $('#horario').offset().top -200,
        inicio = $('#inicio').offset().top -200,
        contacto = $('#contacto').offset().top -200;

    $('#btn-servicios').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: servicios
        }, 500);
    });

    $('#btn-horario').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: horario
        }, 500);
    });

    $('#btn-inicio').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: inicio
        }, 500);
    });

    $('#btn-contacto').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: contacto
        }, 500);
    });


});