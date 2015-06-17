'use strict';

var shell = require('shelljs');
var version = require('semver');

function Node(minimumVersion) {
  this.minimumVersion = minimumVersion || '0.10.0';
  this.version = shell.exec('node --version', { silent: true }).output;
  this.isValid = version.gte(this.version, this.minimumVersion);
}

module.exports = Node;