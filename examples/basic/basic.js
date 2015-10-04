if (Meteor.isClient) {
	Template.body.events({
		'click #openOverlay1': function () {
			nOverlay.create('overlay1');
		}
	});
}
