if (Meteor.isClient) {
    Template.home.helpers({
        items: function() {
            return Items.find().fetch();
        }
    });

    Template.home.events({
    });
}
