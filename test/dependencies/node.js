'use strict';

var shelljs = require('shelljs');
var expect = require('chai').expect;
var NodeDependency = require('../../lib/dependencies').Node;

describe('Node Dependencies', function() {

  var nodeDependency;
  before(function() {
    nodeDependency = new NodeDependency();
    expect(nodeDependency).to.be.ok;
  });

  describe('#version', function() {

    it('should return the current version of node', function() {
      var actualVersion = shelljs.exec('node --version', { silent: true }).output;
      expect(nodeDependency.version).to.be.eql(actualVersion);
    });

    it('should be a valid version of node', function() {
      expect(nodeDependency.isValid).to.be.true;
    });

  });

});