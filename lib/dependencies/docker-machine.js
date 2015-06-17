'use strict';

var shell = require('shelljs');
var version = require('semver');
var _ = require('lodash');

function DockerMachine() {
  this.isInstalled = !_.isEmpty(shell.which('docker-machine'));
}

DockerMachine.prototype.getIpAddress = function() {
  return shell.exec('docker-machine ip', { silent: true }).output;
};

module.exports = DockerMachine;