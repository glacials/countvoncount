$(document).ready(function () {
  $("#life-incr-1").click(function () {
    var life;
    life = $(this).parent().find("#life");
    life.html(Number(life.html()) + 1);
  });
});

$(document).ready(function () {
  $("#life-incr-5").click(function () {
    var life;
    life = $(this).parent().find("#life");
    life.html(Number(life.html()) + 5);
  });
});

$(document).ready(function () {
  $("#life-decr-1").click(function () {
    var life;
    life = $(this).parent().find("#life");
    life.html(Number(life.html()) - 1);
  });
});

$(document).ready(function () {
  $("#life-decr-5").click(function () {
    var life;
    life = $(this).parent().find("#life");
    life.html(Number(life.html()) - 5);
  });
});
