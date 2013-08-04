var nineninenine = require('../');
var should = require('should');
require('mocha');

describe('999', function() {
  describe('module.exports', function() {
    it('should be right', function(done) {
      nineninenine.should.eql([9,9,9]);
      done();
    });
  });
});
