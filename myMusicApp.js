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
