
$(document).ready(function () {

    $("#btn-restablecer").on('click', function (e) {
        e.preventDefault();
        $("#modalRestablecer").addClass('in');
        ({ display: "block" });
        $("#modalRestablecer").css({ display: "block"});
        setTimeout(function () {
            location.href = "login.html";
        }, 3000);
    });
});