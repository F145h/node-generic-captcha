var http = require("http")

var captchaFactory = require("../../node-generic-captcha-min.js");

http.createServer(function(req, res) {

  var captcha = new captchaFactory.make("14541")
  captcha.addNoise()
  var pngStream = captcha.pngStream()

  res.writeHead(200, { 'Content-Type': 'image/png' });
  res.end(pngStream, 'binary');

}).listen(3030);

