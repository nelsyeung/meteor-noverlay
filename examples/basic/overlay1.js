if (Meteor.isClient) {
	Template.overlay1.events({
		'click #openOverlay2': function () {
			nOverlay.create('overlay2');
		}
	});
}
