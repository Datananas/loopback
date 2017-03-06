// Copyright IBM Corp. 2015,2016. All Rights Reserved.
// Node module: loopback
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

'use strict';
var loopback = require('../../../..');
var boot = require('loopback-boot');
var path = require('path');

var app = module.exports = loopback({
  localRegistry: true,
  loadBuiltinModels: true,
});

var bootOptions = {
  // env: ... // TODO: use to customize which middleware file to use
  appRootDir: __dirname,
  middleware: require(path.join(__dirname, 'middleware.json')),
  middlewareRootDir: path.join(__dirname, '/../../../..'),
};

boot(app, bootOptions, function(err) {
  if (err) {
    throw err;
  }
  app.enableAuth();
});
