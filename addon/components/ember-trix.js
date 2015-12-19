import Ember from 'ember';
import layout from '../templates/components/ember-trix';

const TRIX_EVENTS = [
  'trix-attachment-add',
  'trix-attachment-remove',
  'trix-blur',
  'trix-change',
  'trix-file-accept',
  'trix-focus',
  'trix-initialize',
  'trix-selection-change',
];

export default Ember.Component.extend({
  layout: layout,
  classNames: ['trix-editor-wrapper'],

  didInsertElement() {
    let $trix = this.$('trix-editor');
    TRIX_EVENTS.forEach(eventName => {
      if (this.attrs.hasOwnProperty(eventName)) {
        $trix.on(eventName, event => {
          let { [`${eventName}`] : eventHandler } = this.attrs;
          eventHandler(event);
        });
      }
    });
  },


});
