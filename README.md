# nOverlay
> A simple and nice library for Meteor to render templates in an overlay. It can create any number of overlays on top of each other.

[Simple Demo](http://noverlay.meteor.com/)

## Getting started
Install with this command:
```bash
meteor add nelsyeung:noverlay
```

## Usage
### Creating an overlay

```
nOverlay.create('template-name', DOM, data);
```
The first argument, `template-name` is simply the template you want to render into an overlay, it's from:
```
<template name="foo">
...
</template>
```

The second argument, `DOM`, is to tell where the place the new divs. This only tells where to place the overlay divs code and not the actual location on the screen. This is useful if you want specific styling or events on an overlay for certain pages. If this is empty the overlay will be placed inside `body`.
```
nOverlay.create('foo', document.getElementById('bar'));
```

The last argument, `data`, is an object containing data you want to render inside the template. Read [blaze.renderWithData](http://docs.meteor.com/#/full/blaze_renderwithdata)

### Removing the _highest_ overlay
The following will remove the most recently opened overlay.
```
nOverlay.remove();
```

## Example
The following code will create an overlay with the template `overlay1` by clicking on a link or button with the id `openOverlay`:
```
if (Meteor.isClient) {
	Template.body.events({
		'click #openOverlay1': function () {
			nOverlay.create('overlay1');
		}
	});
}
```

For a full example, please check the `examples/basic` directory of this repository.

## Notes on the template
You must have a div inside your template wrapping your contents or you might see unexpected behaviour. i.e.,
```
<template name="foo">
    <div id="bar">
        Lovely contents.
    </div>
</template>
```
The `id` in this case will become the overlay wrapper. i.e., it will render to:
```
<div id="bar" class="overlay">
    Lovely contents.
</div>
```
You can also pass in extra classes by simply adding them to your div.

## What's being worked on
This is still under development. Any contributions will be much appreciated.
- Move to ES6
- More customisations such as animations and adding an optional close button
- Unit tests
- Add an option to render the overlay mask and overlay using tables to allow vertical centering
- jQuery free (yes, I'm not a big fan of jQuery)

## License
[MIT license](http://opensource.org/licenses/MIT.php)
