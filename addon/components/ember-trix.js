import Ember from 'ember';
import layout from '../templates/components/ember-trix';

const {
  computed,
  isNone,
  isPresent,
  set,
} = Ember;

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

  $trix: computed('_$trix', {
    get() {
      let trix = null;
      if ( isNone(this.get('_$trix')) ) {
        trix = this.$('trix-editor');
        isPresent(trix) && set(this, '_$trix', trix);
      }
      return trix;
    }
  }),

  editor: computed('$trix', {
    get() {
      let $trix = this.get('$trix');
      return isPresent($trix) ? $trix.editor : null;
    }
  }),

  didInsertElement() {
    this._super(...arguments);
    TRIX_EVENTS.forEach(eventName => {
      if (this.attrs.hasOwnProperty(eventName)) {
        this.get('$trix').on(eventName, event => {
          let { [`${eventName}`] : eventHandler } = this.attrs;
          eventHandler(event);
        });
      }
    });
  },

  willDestroyElement() {
    this._super(...arguments);
    TRIX_EVENTS.forEach(eventName => {
      this.get('$trix').off('trix-file-accept');
    });
  },

});
