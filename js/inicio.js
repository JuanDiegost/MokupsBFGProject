$(document).ready(function () {

    /**Remove active class all li of nav */

    function removeActive(){
        $('#li-servicios').removeClass("active");        
        $('#li-horario').removeClass("active");        
        $('#li-contacto').removeClass("active");                
        $('#li-inicio').removeClass("active");        
        
    }
    /*---------scroll menu--------*/
    var servicios = $('#servicios').offset().top - 250,
        horario = $('#horario').offset().top - 200,
        inicio = $('#inicio').offset().top - 200,
        contacto = $('#contacto').offset().top - 200;

    $('#btn-servicios').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: servicios
        }, 500);
        removeActive();
        $('#li-servicios').addClass("active");
    });

    $('#btn-horario').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: horario
        }, 500);
        removeActive();        
        $('#li-horario').addClass("active");
    });

    $('#btn-inicio').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: inicio
        }, 500);
        removeActive();        
        $('#li-inicio').addClass("active");
    });

    $('#btn-contacto').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: contacto
        }, 500);
        removeActive();        
        $('#li-contacto').addClass("active");
    });


});