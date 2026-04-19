$(document).ready(function () {
    $.getJSON("https://raw.githubusercontent.com/Doraigal/TareaARG/refs/heads/main/assets/Json/imagenes.json",
        function (data) {
            $.each(data.Galeria, function (i, Galeria) {
                $(".Galeria").append(`
                         <div class="cartas col-md-3 mx-3 card m-0 p-0">
                        <img src="${Galeria.imagen}" alt="${Galeria.nombre}" class="proyectos card-img"></img>
                            <b class="card-body">
                                ${Galeria.nombre}
                            </b>
                    </div>
                `);
            });
        });
    });