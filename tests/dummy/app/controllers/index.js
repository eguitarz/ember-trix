import Ember from 'ember';

const {
  computed,
  get,
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
  }
});
