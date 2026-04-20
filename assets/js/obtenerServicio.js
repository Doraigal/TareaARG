$(document).on("click", ".btnComando", function() {
  const texto = $(this).siblings(".titulo").text();   // obtenemos el texto del div
  $(".modal-title").text(texto);
  $(".titul").val(texto).prop("disabled", true);           // lo pasamos al input del form
});

