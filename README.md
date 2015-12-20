# ember-trix

This ember addon wrapped trix editor from Basecamp. Trix is a WYSIWYG editor,
visit their [demo site](http://trix-editor.org/) to know more about it.

## Installation
```
$> ember install ember-trix
```

## Example
 Dummy page in test can help you understand the coding example. Here is an snippet about how to use closure action to save content.

```js
/* /tests/dummy/app/controllers/index.js */
...
actions{
  handleTrixEvent(event) {
    ...
    let document = event.target.editor.getDocument();
    let raw = Trix.serializeToContentType(document, 'text/html');
    set(this, 'raw', raw);
  }
  ...
}

/* /tests/dummy/app/templates/index.hbs */
...
{{ember-trix
  autofocus=true
  class="my-trix-editor"
  placeholder="Type Something or Drag an Image here"
  trix-attachment-add=(action "handleTrixAttachmentAddEvent")
  trix-attachment-remove=(action "handleTrixEvent")
  trix-blur=(action "handleTrixEvent")
  trix-change=(action "handleTrixEvent")
  trix-file-accept=(action "handleTrixEvent")
  trix-focus=(action "handleTrixEvent")
  trix-initialize=(action "handleTrixInitializeEvent")
  trix-selection-change=(action "handleTrixEvent")
}}
..
```

The accepted parameters are `autofocus`, `class`, `placeholder`, and you can assign your closure actions as trix event handler.

The built-in events are:
* trix-attachment-add
* trix-attachment-remove
* trix-blur
* trix-change
* trix-file-accept
* trix-focus
* trix-initialize
* trix-selection-change

For more detail about trix, check out their [Github page](https://github.com/basecamp/trix).

## Developing

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
