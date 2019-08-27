'use strict';
nOverlay = {
	id: -1,
	views: [],
	masks: [],

	create: function (template, node, data, dismissable) {
		var self = this;
		var mask = document.createElement('div');

		this.id += 1;
		mask.className = 'overlay-mask';
		mask.style.zIndex = this.id * 10 + 9000;

		this.masks.push(mask);
		this.views.push(Blaze.renderWithData(Template[template], data, mask));

		mask.firstChild.className += ' overlay';

		if (node) {
			node.appendChild(mask);
		}
		else {
			document.body.appendChild(mask);
		}

		$(mask).fadeIn(200).click(function (e) {
			// Close the overlay on click
			if (dismissable) {
				if (e.target.className === 'overlay-mask') {
					self.remove();
				}
			}
		});
	},

	remove: function () {
		var self = this;

		$(this.masks[nOverlay.id]).fadeOut(200, function () {
			Blaze.remove(nOverlay.views[nOverlay.id]);
			self.views.pop();
			self.masks.pop();
			self.id--;
			$(this).remove();
		});
	}
};
