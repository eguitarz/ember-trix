/* jshint node: true */
'use strict';

let path = require('path');

module.exports = {
  name: 'ember-trix',

  included: function(app) {
    this._super.included(app);

    app.import(
      path.join(app.bowerDirectory, 'trix/dist/trix.js'),
      { type: 'vendor' }
    );

    app.import(
      path.join(app.bowerDirectory, 'trix/dist/trix.css'),
      { type: 'vendor' }
    );

    app.import(
      path.join(app.bowerDirectory, 'lodash/lodash.js'),
      { type: 'vendor' }
    );
  }
};
