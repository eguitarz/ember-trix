import Ember from 'ember';
import layout from '../templates/components/ember-trix';

export default Ember.Component.extend({
  layout: layout,
  classNames: ['trix-editor-wrapper'],
  trixEvents: [
    'trix-attachment-add',
    'trix-attachment-remove',
    'trix-blur',
    'trix-change',
    'trix-file-accept',
    'trix-focus',
    'trix-initialize',
    'trix-selection-change',
  ],

  didInsertElement() {
    let $trix = this.$('trix-editor');
    let trixEvents = this.get('trixEvents');
    trixEvents.forEach(eventName => {
      if (this.attrs.eventName) {
        $trix.on(eventName, event => {
          this.attrs.eventName(event);
        });
      }
    });
  }
});
