Package.describe({
	name: 'nelsyeung:noverlay',
	version: '0.0.1',
	summary: 'Meteor nice overlay library for rendering templates in an overlay',
	git: 'https://github.com/nelsyeung/meteor-noverlay.git',
	documentation: 'README.md'
});

Package.onUse(function(api) {
	api.versionsFrom('1.2.0.1');
	api.use('ecmascript');
	api.addFiles('noverlay.css', 'client');
	api.addFiles('noverlay.js', 'client');
	api.export('nOverlay', 'client');
});

Package.onTest(function(api) {
	api.use('ecmascript');
	api.use('tinytest');
	api.use('nelsyeung:noverlay');
	api.addFiles('noverlay-tests.js');
});
