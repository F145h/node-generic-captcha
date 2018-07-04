# purejs-captcha

purejs-captcha - javascript code that renders captcha without any dependencies

Compatible with Windows, Linux, FreeBSD, OSX, Android or any other platforms!

Node.js sample:

```js
var captchaFactory = require("node-generic-captcha.js");

var captcha = captchaFactory.make({});
captcha.drawText("Hello world");
captcha.addNoise();
captcha.pngStream() // returns stream with captcha
```

HTML5 canvas sample:

```html
<script type="text/javascript" src="node-generic-captcha.js"></script>

<div><canvas id="canvas6" width=1 height=1 style="border:1px solid #fff;visibility:hidden;padding-bottom: 10px;"></canvas></div>

<script type="text/javascript">
  var c6 = new nodeGenericCaptcha({usePerlinBrush: true});
  c6.drawText("Perlin noise");
  c6.addNoise();
  c6.draw("canvas6");
</script>
  ```

PS: see "/exapmles"
