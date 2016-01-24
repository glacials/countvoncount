$(document).ready(function () {
  window.numPlayers = 0;

  window.addPlayer = function () {
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
  };

  $("#add-player-btn").click(addPlayer);

  addPlayer();
  addPlayer();
  addPlayer();
});
