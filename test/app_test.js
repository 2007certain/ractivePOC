/* jshint expr: true */
(function () {
	'use strict';

	var assert = require('../app/scripts/main');

	describe('assignment', function () {
	  it('should assert something', function () {
	    assert(require('../main') !== undefined);
	    expect(assert).not.to.be.undefined;
	  });
	});

})();
