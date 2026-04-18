$(document).ready(function () {
    $.getJSON("https://raw.githubusercontent.com/Doraigal/TareaARG/refs/heads/main/assets/Json/imagenes.json",
        function (data) {
            $.each(data.proyectos, function (i, proyectos) {
                $(".Galeria").append(`
                         <div class="cartas col-md-3 mx-3 card m-0 p-0">
                        <img src="${proyectos.imagen}" alt="${proyectos.nombre}" class="proyectos card-img"></img>
                            <b class="card-body">
                                ${proyectos.nombre}
                            </b>
                            <button class="btn btn-primary card-footer p-0 m-0">Solicitar</button>
                    </div>
                `);
            });
        });
    });