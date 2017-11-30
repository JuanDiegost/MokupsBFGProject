$(document).ready(function () {
    addTrainers();
    function addTrainers() {
        $.ajax({
            url: 'http://localhost:8181/trainners',
            dataType: 'json',
            success: function (data) {
                $('#table-info').html('');
                var bodyTable = '';
                console.log(data);
                for (var i = 0; i < data.length; i++) {
                    var element = data[i];
                    //bodyTable += '<tr><th>' + element.identification + '</th><td>' + element.name + '</td><td>' + element.phone + '</td><td>' + element.eMail + '</td><td><img src="' + element.imgURL + '" alt="" class="img-responsive img-circle" ></td></tr>';
                    bodyTable += '<tr><td>'+ element.name+'</td><td>' + element.phone + '</td><td>' + element.programs + '</td><td><a class="btn-lg" href="#" data-toggle="modal" data-target="#modalDet"><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a><a class="btn-lg" href="#" data-toggle="modal" data-target="#modalDel"><span class="glyphicon glyphicon-trash" aria-hidden="true"></span></a></td></tr>';
                }
                $('#table-info').append(bodyTable);
            }
        });
    }
});