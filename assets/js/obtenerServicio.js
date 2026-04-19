$(document).on("click", ".btnComando", function() {
  const texto = $(this).siblings(".titulo").text();   // obtenemos el texto del div
  $(".modal-title").text(texto);            // lo pasamos al input del form
});

