$(document).ready(function () {
    $.getJSON("https://raw.githubusercontent.com/Doraigal/TareaARG/refs/heads/main/assets/Json/imagenes.json",
        function (data) {
            $.each(data.diseñosUnicos, function (i, proyectos) {
                $("#DiseñosUnicos").append(`
                    <div class="col-md-6 d-flex justify-content-center align-items-center">
                            <img src="${proyectos.imagen}" alt="Fusion" class="Fusion">
                        </div>
                `);
            });
        });
    });