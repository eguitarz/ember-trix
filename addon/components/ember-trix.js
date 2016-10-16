import Ember from 'ember';
import layout from '../templates/components/ember-trix';
import _ from 'lodash/lodash';

const { Trix } = window;

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

  init() {
    this._super(...arguments);
    // merge config
    if (isPresent(this.attrs.config)) {
      Trix.config = _.merge(Trix.config, this.get('config'));
    }
  },

  $trix: computed('_$trix', {
    get() {
      let trix;
      if ( isNone(this.get('_$trix')) ) {
        trix = this.$('trix-editor');

        if ( isPresent(trix) ) {
          set(this, '_$trix', trix);
        }
      }
      return trix;
    }
  }),

  didInsertElement() {
    this._super(...arguments);
    TRIX_EVENTS.forEach(eventName => {
      let eventHandler = this.get(eventName);
      if (eventHandler) {
        this.get('$trix').on(eventName, event => {
          eventHandler(event.originalEvent);
        });
      }
    });
  },

  willDestroyElement() {
    this._super(...arguments);
    TRIX_EVENTS.forEach(eventName => {
      this.get('$trix').off(eventName);
    });
  },

});
