$(document).ready(function() {
    addStudents();
function addStudents() {
    $.ajax({
      url: 'http://localhost:8181/students',
      dataType: 'json',
      success: function(data) {
        $('#table-info').html('');
        var bodyTable = '';
        for (var i = 0; i < data.length; i++) {
          var element = data[i];
          //bodyTable += '<tr><th>' + element.identification + '</th><td>' + element.name + '</td><td>' + element.phone + '</td><td>' + element.eMail + '</td><td><img src="' + element.imgURL + '" alt="" class="img-responsive img-circle" ></td></tr>';
          bodyTable+='<tr><td>'+element.name+'</td><td>'+element.identification+'</td><td>Activa</td><td><a class="btn-lg" href="detalles.html"><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a><a class="btn-lg" href="#" data-toggle="modal" data-target="#modalSuscripcion"><span class="glyphicon glyphicon-plus" aria-hidden="true"></span></a><a class="btn-lg" href="#" data-toggle="modal" data-target="#myModalEditStudent"><span class="glyphicon glyphicon-pencil" aria-hidden="true"></span></a><a class="btn-lg" href="#" data-toggle="modal" data-target="#modalDel"><span class="glyphicon glyphicon-trash" aria-hidden="true"></span></a></td></tr>';
        }
        $('#table-info').append(bodyTable);
      }
    });
  }});