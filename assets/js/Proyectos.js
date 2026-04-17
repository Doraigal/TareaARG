$(document).ready(function () {
    $.getJSON("https://raw.githubusercontent.com/Doraigal/TareaARG/refs/heads/main/assets/Json/imagenes.json",
        function (data) {
            $.each(data.proyectos, function (i, proyectos) {
                $(".serProyectos").append(`
                         <div class="cartas col-md-3 mb-5 card">
                        <img src="${proyectos.imagen}" alt="${proyectos.nombre}" class="proyectos card-img"></img>
                            <b class="card-body">
                                ${proyectos.nombre}
                            </b>
                            <button class="btn btn-primary card-footer">Solicitar</button>
                    </div>
                `);
            });
        });
    });