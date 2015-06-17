'use strict';

var shell = require('shelljs');
var version = require('semver');

function Npm(minimumVersion) {
  this.minimumVersion = minimumVersion || '0.7.3';
  this.version = shell.exec('npm --version', { silent: true }).output;
  this.isValid = version.gte(this.version, this.minimumVersion);
}

module.exports = Npm;