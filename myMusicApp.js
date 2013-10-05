

PlayLists = new Meteor.Collection("PlayLists");

//Id for current PlayList
Session.setDefault('PlayLists_id', null);
Session.setDefault('edit_PlayListname', null);





var listsHandle = Meteor.subscribe('PlayLists', function () {
  if (!Session.get('PlayLists_id')) {
    var list = PlayLists.findOne({}, {sort: {name: 1}});
    if (PlayList)
      Router.setList(PlayLists._id);
  }
});

$(document).ready(function(){  
  $("#jquery_jplayer_1").jplayer({
    ready: function(event){
      $(this).jplayer("setMedia",
        {
        mp3: "http://www.jplayer.org/audio/m4a/Miaow-07-Bubble.mp3",
        wav: "http://www.jplayer.org/audio/ogg/Miaow-07-Bubble.wav"
        });
    
    swfPath:"http://jplayer.org/latest/js",
    supplied: "mp3, wav",
    smoothPlayBar: true,
    keyEnabled: true
  }
  });
  ready: function(event){
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
}

Template.PlayLists.Loading = function() {
  return !PlayListsHandle.ready();
}

Template.PlayLists.PlayLists = function () {
  return PlayLists.find({}, {sort: {name: 1}});
};


Template.PlayLists.events({
  'mousedown .PlayList': function (evt) { 
    Router.setList(this._id);
  },
  'click .PlaySist': function (evt) {
    evt.preventDefault();
  },
  'dblclick .PlayList': function (evt, tmpl) { 
    Session.set('editing_PlayListname', this._id);
    Deps.flush();
    activateInput(tmpl.find("#PlayList-name-input"));
  }

Template.PlayLists.selected = function () {
  return Session.equals('PlayLists_id', this._id) ? 'selected' : '';
};

Template.PlayLists.name_class = function () {
  return this.name ? '' : 'empty';
};

Template.PlayLists.editing = function () {
  return Session.equals('editing_PlayListname', this._id);
};

});