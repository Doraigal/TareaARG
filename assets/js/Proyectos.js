$(document).ready(function () {
    $.getJSON("https://raw.githubusercontent.com/Doraigal/TareaARG/refs/heads/main/assets/Json/imagenes.json",
        function (data) {
            $.each(data.proyectos, function (i, proyectos) {
                $(".serProyectos").append(`
                    <div class="col-md-3 justify-content-center">
                        <div class="cartas card m-0 p-0">
                            <img src="${proyectos.imagen}" alt="${proyectos.nombre}" class="card-img-top proyectos card-img"></img>
                            <b class="card-body titulo">
                                ${proyectos.nombre}
                            </b>
                            <button class="btnComando btn btn-primary card-footer p-0 m-0" type="button"
                                data-bs-toggle="modal" data-bs-target="#myModal">Solicitar</button>
                        </div>
                    </div>
                `);
            });
        });
});