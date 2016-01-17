$(document).ready(function () {
  window.numPlayers = 0;

  $("#add-player-btn").click(function () {
    var newPlayer;
    // Player 0 is the template
    newPlayer = $("#player").clone(true);

    // Set player number
    window.numPlayers++;
    newPlayer.attr("data-player-num", window.numPlayers)
    newPlayer.find("#player-num").html(window.numPlayers);

    // Add player to the screen
    newPlayer.appendTo("#player-area");
    newPlayer.css("display", "block");
  });
});
