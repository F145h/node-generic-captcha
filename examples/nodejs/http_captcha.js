var http = require("http")

var captchaFactory = require("../../node-generic-captcha.js");

var captchaNumber = 0;

http.createServer(function(req, res) {


  var pngStream = null;

  switch(++captchaNumber % 5)
  {
    case 0:
    {
    	var captcha = captchaFactory.make("145 some text")
      	captcha.addNoise()
  	    pngStream = captcha.pngStream()
    }
    break;
    case 1:
    {
    	var captcha = captchaFactory.make("42 captcha!")
        captcha.addNoise({colored: true})
    	pngStream = captcha.pngStream()
    }
    break;
    case 2:
    {
    	var captcha = captchaFactory.make("Hello world", {precisely : false})
	    pngStream = captcha.pngStream()
    }
    break;
    case 3:
    {
    	var captcha = captchaFactory.make("Captcha", {precisely : false})
    	captcha.addNoise()
    	pngStream = captcha.pngStream()
    }
    break;
    case 4:
    {
      	var captcha = captchaFactory.make("TEXT :-)", {precisely : false})
        captcha.addNoise({colored: true})
  	    pngStream = captcha.pngStream()
    }
    break;
  }


  res.writeHead(200, { 'Content-Type': 'image/png' });
  res.end(pngStream, 'binary');

}).listen(3030);

