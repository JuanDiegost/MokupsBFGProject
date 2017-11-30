$(document).ready(function () {

    $('#cancel-entrenador').on('click', function (e) {
        location.href = "entrenadores.html";        
    });

    /**
       * add - description
       *
       * @param  {type} 'click'    Action Trigger
       * @param  {type} function(e Executes inner action using AJAX to
       *                           send data via POST method
       * @return {type}            description
       */
    $('#add-trainner').on('click', function (e) {
        e.preventDefault();
        $.ajax({
            url: 'http://localhost:8181/trainner',
            method: "POST",
            dataType: 'json',
            data: $('#form-trainer').serializeFormJSON(),
            success: function (result) {
                if (result == 'Trainner Added Sucessfully') {
                    $("#alert").html("");
                    $("#alert").append('<div class="alert alert-success"><strong>Success:</strong>' + result + '</div>');
                    setTimeout(function () {
                        location.href = "entrenadores.html";
                    }, 1000);
                } else {
                    $("#alert").html("");
                    $("#alert").append('<div class="alert alert-danger"><strong>Error:</strong>' + result + '</div>');
                }
            },
            error: function (er) {
                $("#alert").append('<div class="alert alert-danger"><strong>Danger!</strong>' + er + '</div>');
                setTimeout(function () {
                    location.href = "entrenadores.html";
                }, 1000);             
            }
        });
    });

    (function ($) {
        $.fn.serializeFormJSON = function () {

            var o = {};
            var a = this.serializeArray();
            $.each(a, function () {
                if (o[this.name]) {
                    if (!o[this.name].push) {
                        o[this.name] = [o[this.name]];
                    }
                    o[this.name].push(this.value || '');
                } else {
                    o[this.name] = this.value || '';
                }
            });
            return o;
        };
    })(jQuery);

});