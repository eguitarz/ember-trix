/* jshint node: true */

'use strict';

module.exports = {
  normalizeEntityName: function() {},

  afterInstall: function() {
    return this.addBowerPackagesToProject([
      { name: 'trix', target: '^0.9.4' }
    ]);
  }
};
