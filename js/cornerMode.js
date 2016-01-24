$(document).ready(function () {

  var PLAYER_ROTATIONS = {
    1: {
      transform: 'rotate(135deg)',
      'transform-origin': '50% 100%',
      top: '0',
      left: '0'
    },
    2: {
      transform: 'rotate(-135deg)',
      'transform-origin': '50% 100%',
      top: '0',
      right: '0'
    },
    3: {
      transform: 'rotate(45deg)',
      'transform-origin': '100% 50%',
      bottom: '0',
      left: '0'
    },
    4: {
      transform: 'rotate(-45deg)',
      'transform-origin': '0% 50%',
      bottom: '0',
      right: '0'
    },
  };

  $.each(PLAYER_ROTATIONS, function (i, rotation) {
    PLAYER_ROTATIONS[i]['position'] = 'absolute';
    PLAYER_ROTATIONS[i]['-webkit-transform'] = rotation['transform'];
  });

  $('#corner-mode-btn').click(function () {
    $('#player-area').css('margin', 'none');
    $('.player').removeClass('col-md-6');
    $('.player').each(function () {
      $(this).css(PLAYER_ROTATIONS[Number($(this).data('playerNum'))]);
    });
  });
});
