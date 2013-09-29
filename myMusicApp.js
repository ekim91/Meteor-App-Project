if (Meteor.isClient) {
  Template.Music.Songs= function () {
    return "Welcome to myMusicApp.";
  };

  Template.Music.events({
    'click input' : function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });
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
        mp3: //Music Dir
        oga: //ogg extension
        });
    },
    swfPath:"http://jplayer.org/latest/js",
    supplied: "mp3, oga"
  });

  var myPlaylist = new jPlayerPlasylist({
    jPlayer: "#jquery_jplayer_N",
    cssSelectorAncestor:"#jp_container_N"
  }, [
      {
        title: "Current Song",
        artitst: "Current Artist",
        mp3: "Music Dir"
        oga:: "ogg extension"
      }
  ],{
    playlistOptions :{
      enableRemoveControls: true;
    },
    swfPath: "/js",
    supplied: "mp3, oga",
    smoothPlayBar: true,
    keyEnabled true,
  });

});