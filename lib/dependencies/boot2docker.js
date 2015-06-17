'use strict';

var shell = require('shelljs');
var version = require('semver');
var _ = require('lodash');

function Boot2Docker() {
  this.isInstalled = !_.isEmpty(shell.which('boot2docker'));
}

Boot2Docker.prototype.getIpAddress = function() {
  return shell.exec('$(boot2docker ip)', { silent: true }).output;
};

module.exports = Boot2Docker;