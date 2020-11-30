

  var audio = $("#meditate")[0];
    
  $("#med-button").click(function() {
    if ($('audio#meditate')[0].paused == false ){
      audio.pause();
    } else {
      audio.play();
    }
  });
