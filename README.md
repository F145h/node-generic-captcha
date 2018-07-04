# purejs-captcha

purejs-captcha - javascript code that renders captcha without any dependencies
purejs-captcha works on Windows, Linux, FreeBSD, OSX, Android or any other platforms!

sample:

```js
var captchaFactory = require("node-generic-captcha.js");

var captcha = captchaFactory.make({});
captcha.drawText("Hello world");
captcha.addNoise();
captcha.pngStream() // returns stream with captcha
```
