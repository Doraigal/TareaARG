$(document).ready(function () {
  $("a[href^='#']").on("click", function(event) {
  event.preventDefault();

  const destino = $(this).attr("href");
  $("html, body").animate({
    scrollTop: $(destino).offset().top
  }, 600); // 600 ms = velocidad de la animación
});

  $(".portaHeadset").hover(function () {
    $(".portaHeadset").css({
      "background-color": "#00FF00",
      "top": "-5px", "position": "relative"
    });
  }, function () {
    $(this).css({
      "background-color": "#34D399",
      "top": "0px", "position": "relative"
    });
  });
  $(".copaMitsubishi").hover(function () {
    $(".copaMitsubishi").css({
      "background-color": "#00FF00",
      "top": "-5px", "position": "relative"
    });
  }, function () {
    $(this).css({
      "background-color": "#34D399",
      "top": "0px", "position": "relative"
    });
  });
  $(".portaHeadset").click(function () {
    $(".vPortaHeadset").fadeToggle("slow");
  });
  $(".copaMitsubishi").click(function () {
    $(".vCopaMitsubishi").fadeToggle("slow");
  });
  $(".carta").hover(function () {
    $(this).find(".cartas").css({
      "top": "-5px", "position": "relative"
    });
  }, function () {
    $(this).find(".cartas").css({
      "top": "0px", "position": "relative"
    });
  });
});