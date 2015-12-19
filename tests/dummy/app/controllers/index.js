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
      set(this, 'raw', event.target.editor.getDocument().toString());
    },
  }
});
