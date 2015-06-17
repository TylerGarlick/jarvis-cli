'use strict';

var shelljs = require('shelljs');
var expect = require('chai').expect;
var NpmDependency = require('../../lib/dependencies').Npm;

describe('Npm Dependencies', function() {

  var dependency;
  before(function() {
    dependency = new NpmDependency();
    expect(dependency).to.be.ok;
  });

  describe('#version', function() {

    it('should return the current version of npm', function() {
      var actualVersion = shelljs.exec('npm --version', { silent: true }).output;
      expect(dependency.version).to.be.eql(actualVersion);
    });

    it('should be a valid version of npm', function() {
      expect(dependency.isValid).to.be.true;
    });

  });

});