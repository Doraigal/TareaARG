$(document).ready(function () {
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
});