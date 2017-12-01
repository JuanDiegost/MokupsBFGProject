$(document).ready(function () {

    $('#cancel-alumno').on('click', function (e) {
        location.href = "alumnos.html";        
    });

/**
 * add - description
 *
 * @param  {type} 'click'    Action Trigger
 * @param  {type} function(e Executes inner action using AJAX to
 *                           send data via POST method
 * @return {type}            description
 */
    $('#add-student').on('click', function (e) {
        e.preventDefault();
        $.ajax({
            url: 'http://localhost:8181/student',
            method: "POST",
            dataType: 'json',
            data: $('#form-student').serializeFormJSON(),
            success: function (result) {
                if (result == 'Student added sucessfully') {
                    $("#alert").html("");
                    $("#alert").append('<div class="alert alert-success"><strong>Success:</strong>' + result + '</div>');
                    setTimeout(function () {
                        location.href = "alumnos.html";
                    }, 1000);
                } else {
                    $("#alert").html("");
                    $("#alert").append('<div class="alert alert-danger"><strong>Danger!  </strong>' + result + '</div>');
                }
            },
            error: function (er) {
                $("#alert").append('<div class="alert alert-danger"><strong>Danger!</strong>' + er + '</div>');
                setTimeout(function () {
                    location.href = "alumnos.html";
                }, 1000);               
            }
        });
    });

    (function($) {
        $.fn.serializeFormJSON = function() {
    
          var o = {};
          var a = this.serializeArray();
          $.each(a, function() {
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