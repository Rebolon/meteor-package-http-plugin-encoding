Package.describe({
  name: 'rebolon:http-plugin-encoding',
  version: '0.0.2',
  summary: 'Add method getWithEncoding to HTTP package',
  git: 'https://github.com/Rebolon/meteor-package-http-plugin-encoding.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  
  api.use('underscore');
  api.use('http');
  
  api.addFiles(['plugin-encoding.js'], ['server']);
  
  api.imply('http');
});

Npm.depends(
  {
    "iconv-lite": "0.4.6",
    "request": "2.51.0"
  }
);

/*
Package.onTest(function(api) {
  api.use('tinytest');
  
  api.use('http:plugin-encoding');
  
  api.addFiles('tests/plugin-encoding.js');
});
*/