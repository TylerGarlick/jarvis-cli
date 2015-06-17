'use strict';

var shelljs = require('shelljs');
var expect = require('chai').expect;
var DockerMachineDependency = require('../../lib/dependencies').DockerMachine;

describe('Npm Dependencies', function() {

  var dependency;
  before(function() {
    dependency = new DockerMachineDependency();
    expect(dependency).to.be.ok;
  });

  describe('#isInstalled', function() {

    it('should be installed', function() {
      expect(dependency.isInstalled).to.be.true;
    });


  });

  describe('#getIpAddress', function() {

    it('should be able to get the docker-machine ip address', function() {
      var ipAddress = shelljs.exec('docker-machine ip', { silent: true }).output;
      expect(dependency.getIpAddress()).to.be.eql(ipAddress);
    });

  });

});