# HTTP plugin encoding

HTTP plugin encoding is a package that will add an extra methods to HTTP meteor package. 

  - getWithEncoding: allow to add extra encoding options to get HTTP request

### Version
0.0.1

### Tech

HTTP plugin encoding uses depends on extra package:

* [meteorhacks:npm] - add npm
* [request] - npm package, latest version of request from mickeal to manage HTTP request
* [iconv-lite] - npm package, latest version of iconv-lite to manage encoding

### Installation

```sh
$ meteor add http:plugin-encoding
```

### Usage

```javascript
var response = HTTP.getWithEncoding(url, {"encoding: {"from": "iso-8859", "to": "utf8"}}, [callback]);
```

### Development

Want to contribute? Great!

Add you own HTTP extra plugins, or just improve this one.

License
----

MIT

[rebolon]:http://about.me/benjamin.richard/