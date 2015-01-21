Package.describe({
  name: 'http:plugin-encoding',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Add method getWithEncoding to HTTP package',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  
  api.use(['meteorhacks:npm', 'underscore', 'http']);
  
  api.addFiles(['plugin-encoding.js'], ['server']);
  
  // need to export HTTP (if http has not been required by main app) 
  api.export('HTTP');
});

Npm.depends({"iconv-lite": "0.4.6",
    "request": "2.51.0"});

/*
Package.onTest(function(api) {
  api.use('tinytest');
  
  api.use('http:plugin-encoding');
  
  api.addFiles('tests/plugin-encoding.js');
});
*/