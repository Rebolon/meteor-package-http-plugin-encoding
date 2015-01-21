(function() {

  var stdIconv = Meteor.npmRequire('iconv-lite'),
      stdRequest = Meteor.npmRequire('request'),
      reqestGetSync,
      requestGetAsync = function(url, options, cb) {
        var encoding;
        
        if (typeof options.encoding === 'object') {
          encoding = options.encoding;
          options.encoding = null;
        }

        stdRequest.get(url, options, function (err, response, body) {
          var buf;
              
          if (err) {
            throw new Error('Error during "get request": %s', err);
          }

          if (encoding !== undefined) {
            buf = stdIconv.decode(response.body, encoding.from);
            body = stdIconv.encode(buf, encoding.to).toString('binary');
            response.content = body;
          }

          cb && cb(null, response);
        });
      };

  _.extend(HTTP, {"getWithEncoding": Meteor.wrapAsync(requestGetAsync)});

})();