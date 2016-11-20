/*global Trix:false */
import Ember from 'ember';

const {
  get,
  isPresent,
  set
} = Ember;

export default Ember.Controller.extend({
  actions: {
    handleTrixEvent(event) {
      get(this, 'model').pushObject(event);
      let document = event.target.editor.getDocument();
      let raw = Trix.serializeToContentType(document, 'text/html');
      set(this, 'raw', raw);
    },

    handleTrixInitializeEvent(event) {
      this.send('handleTrixEvent', event);
      const editor = event.target.editor;

      // const html = '<div>Text preloaded from html string</div>';
      // editor.loadHTML(html);
      const doc = {"blockList":{"id":12612,"length":1,"objects":[{"attributes":[],"id":12606,"text":{"id":12604,"pieceList":{"endPosition":44,"id":12605,"length":2,"objects":[{"attributes":{"array":[],"id":5959,"values":{}},"id":12602,"length":43,"string":"eqwe\nqwe\nqw\neqweqw\new\ne\nqw\newqeqwe\ne\nqw\newq"},{"attributes":{"array":["blockBreak",true],"id":2,"values":{"blockBreak":true}},"id":1,"length":1,"string":"\n"}]}}}]},"id":12613};
      editor.loadDocument(doc);
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
