$(document).ready(function () {
    $.getJSON("https://raw.githubusercontent.com/Doraigal/TareaARG/refs/heads/main/assets/Json/imagenes.json",
        function (data) {
            $.each(data.Galeria, function (i, Galeria) {
                $(".Galeria").append(`
                    <div class="col-md-3 d-flex justify-content-center">
                         <div class="cartas card m-0 p-0">
                        <img src="${Galeria.imagen}" alt="${Galeria.nombre}" class="card-img-top proyectos card-img"></img>
                            <b class="card-body">
                                ${Galeria.nombre}
                            </b>
                        </div>
                    </div>
                `);
            });
        });
    });