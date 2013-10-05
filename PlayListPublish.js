PlayLists = new Meteor.Collection("PlayLists");

Meteor.publish('PlayLists', function (){
    return PlayLists.find();
});