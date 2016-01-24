$(document).ready(function () {
  $("#life-incr-1").click(function () {
    var life;
    life = $(this).parent().find("#life");
    life.html(Number(life.html()) + 1);
  });

  $("#life-incr-5").click(function () {
    var life;
    life = $(this).parent().find("#life");
    life.html(Number(life.html()) + 5);
  });

  $("#life-decr-1").click(function () {
    var life;
    life = $(this).parent().find("#life");
    life.html(Number(life.html()) - 1);
  });

  $("#life-decr-5").click(function () {
    var life;
    life = $(this).parent().find("#life");
    life.html(Number(life.html()) - 5);
  });

  $("#reset-life-btn").click(function () {
    $(".player-life").html("40");
  });
});
