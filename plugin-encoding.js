(function funcHttpPluginEncoding() {

  var stdIconv = Npm.require('iconv-lite'),
      stdRequest = Npm.require('request'),
      reqestGetSync,
      requestGetAsync = function(url, options, cb) {
        var encoding;
        
        if (typeof options.encoding === 'object') {
          if (!_.has(options.encoding, 'to')) {
            throw new Meteor.Error('HttpPluginEncoding, encoding options, if present, require at least "from" or "to"" property');
          }
          
          encoding = options.encoding;
          options.encoding = null;
        }

        stdRequest.get(url, options, function (err, response, body) {
          var buf;
              
          if (err) {
            console.error('funcHttpPluginEncoding', err);
            throw new Error('Error during "get request"');
          }

          if (encoding !== undefined) {
            buf = response.body;
            if (typeof encoding.from != undefined) buf = stdIconv.decode(response.body, encoding.from);
            
            body = stdIconv.encode(buf, encoding.to).toString('binary');
            response.content = body;
          }

          cb && cb(null, response);
        });
      };

  _.extend(HTTP, {"getWithEncoding": Meteor.wrapAsync(requestGetAsync)});

})();
