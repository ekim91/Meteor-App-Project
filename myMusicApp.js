$(document).ready(function(){  
$("#jquery_jplayer_1").jplayer({
    ready: function(event){
      $(this).jplayer("setMedia",
        {
        mp3: "http://www.jplayer.org/audio/m4a/Miaow-07-Bubble.mp3",
        wav: "http://www.jplayer.org/audio/ogg/Miaow-07-Bubble.wav"
        });
    },
    swfPath:"http://jplayer.org/latest/js",
    supplied: "mp3, wav"
    smoothPlayBar: true,
    keyEnabled: true
  });

  var myPlaylist = new jPlayerPlasylist({
    jPlayer: "#jquery_jplayer_1",
    cssSelectorAncestor:"#jp_container_1"
  }, [
      {
        title: "Current Song",
        artitst: "Current Artist",
        mp3: "http://www.jplayer.org/audio/m4a/Miaow-07-Bubble.mp3",
        wav: "http://www.jplayer.org/audio/m4a/Miaow-07-Bubble.wav"
      }
  ],{
    playlistOptions :{
      autoPlay : false,
      enableRemoveControls: true,
      shuffleOnLoop: true,
      displayTime: 'slow',
      addTime:'fast',
      removeTime:'fast',
      shuffleTime: 'slow'
    },
  });
});