import Ember from 'ember';

const {
  computed,
  get,
  isPresent,
  set
} = Ember;

export default Ember.Controller.extend({
  actions: {
    handleTrixEvent(event) {
      get(this, 'model').pushObject(event);
      let document = event.target.editor.getDocument();
      let raw = Trix.serializeToContentType(document, 'text/html')
      set(this, 'raw', raw);
    },

    handleTrixInitializeEvent(event) {
      this.send('handleTrixEvent', event);
      const editor = event.target.editor;

      const html = '<div>Text preloaded from html string</div>';
      editor.loadHTML(html);
    },

    handleTrixAttachmentAddEvent(event) {
      this.send('handleTrixEvent', event);

      let { attachment } = event.attachment;
      let { fileObjectURL } = attachment;
      if (isPresent(fileObjectURL)) {
        return attachment.setAttributes({
          url: fileObjectURL,
          href: fileObjectURL
        });
      }
    },
  }
});
