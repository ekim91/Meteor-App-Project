if (Meteor.isClient) {
  Template.Music.Songs= function () {
    return "Welcome to myMusicApp.";
  };
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

$(document).ready(function(){

  $("#jquery_jplayer_1").jplayer({
    ready: function(event){
      $($this).jplayer("setMedia",
        {
        mp3: "file://localhost/Users/Ed/Music/mp3"
        oga: "file://localhost/Users/Ed/Music/ogg"
        });
    },
    swfPath:"http://jplayer.org/latest/js",
    supplied: "mp3, oga"
  });

  var myPlaylist = new jPlayerPlasylist({
    jPlayer: "#jquery_jplayer_1",
    cssSelectorAncestor:"#jp_container_1"
  }, [
      {
        title: "Current Song",
        artitst: "Current Artist",
        mp3: "file://localhost/Users/Ed/Music/mp3"
        oga:: "file://localhost/Users/Ed/Music/ogg"
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
    swfPath: "/js",
    supplied: "mp3, oga",
    smoothPlayBar: true,
    keyEnabled: true
  });

});