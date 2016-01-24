const RETURN_KEY = 13;

$(document).ready(function () { 
  $("#player-name").click(function () {
    $(this).html('');
    $(this).attr('contentEditable', true);
  });
  $("#player-name").blur(function () {
    $(this).attr('contentEditable', false);
  });
  $('#player-name').on('keydown', function(e) {
    if (e.which === RETURN_KEY) {
      e.preventDefault();
      $(this).attr('contentEditable', false);
    }
  });
});
