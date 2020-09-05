$(document).ready(function () {
  $("#carouselfirst").carousel({ interval: 1000 });
  $("#carousel-button").click(function () {
    if ($("#carousel-button").children("span").hasClass("fa-pause")) {
      $("#carouselfirst").carousel("pause");
      $("#carousel-button").children("span").removeClass("fa-pause");
      $("#carousel-button").children("span").addClass("fa-play");
    } else if ($("#carousel-button").children("span").hasClass("fa-play")) {
      $("#carouselfirst").carousel("cycle");
      $("#carousel-button").children("span").removeClass("fa-play");
      $("#carousel-button").children("span").addClass("fa-pause");
    }
  });

  $("#login-button").click(function () {
    $("#inputmodal").modal();
  });
  $("#reserve-button").click(function () {
    $("#reservemodal").modal();
  });
});
