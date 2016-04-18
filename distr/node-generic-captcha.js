// file:  node-generic-captcha.js
//
// Copyright (c) 2015 Savchenko Igor
//
// Simple node HTTP server that renders captcha without any dependencies
//
//

var ocrbFont12_03 ={"h":27,"w":18,"g":{ "0":{ "t":27,"l":0,"w":18,"h":27,"m":"y0e1b0e062b06042f04023302020d1a0d020b220b0926090926090926090926090926090926090b220b020d1a0d02023302042f04062b060e1b0e"},"1":{ "t":27,"l":4,"w":10,"h":27,"m":"y0a0b22080b24060b26040b28020b2a0b2c37373737"},"2":{"t":27,"l":0,"w":17,"h":27,"m":"x08110a041906021d042102090e0b0205140b1a091a091a091a09180902140d02100f040e0d080a0f0a080d0e060b12040b14040916020918020918091a091a23232323"},"3":{"t":27,"l":0,"w":18,"h":27,"m":"x2302230223022302180b02160b04140b06120b08100b0a0e0b0c0a0d0e0a110a0a15060a1704160d021a09021c091c091c091c091a0b180b0205120d0221041f061d0806110e"},"4":{"t":27,"l":0,"w":18,"h":27,"m":"y200b0c1c0f0c18130c14170c101102090c0c1106090c08110a090c04110e090c1112090c0d16090c091a090c05141f181f181f181f22090c22090c22090c"},"5":{"t":27,"l":1,"w":16,"h":27,"m":"b7ffe7ffe7ffe7ffe7000f000f000f000f000ff80fff0fff8fffc007e001e001f000f000f000f000f001f001e007c01fcfff0ffe0ff00"},"6":{"t":27,"l":0,"w":18,"h":27,"m":"y1e0f0a181906141f041025020e130a0b020c130e0b0a150e0b080b02091209060b04091209040b06091209020b080912090b0a0b0e0b090c0b0e090207100b0a0b0205141b0403161b041a15081e0f0a"},"7":{"t":27,"l":0,"w":18,"h":27,"m":"y092e092e092e092e091c1309161909121d090e21090c1112090a0f1609080d1a09060b1e09040b201522132411260f280b2c"},"8":{"t":27,"l":0,"w":18,"h":27,"m":"b07f8001ffe003fff007fff807c0f807807807807807807803c0f003f3f000ffc0007f8000ffc001ffe003f3f007c0f80780780f003c0f003c0f003c0f003c0f807c07c0f807fff803fff001ffe0007f800"},"9":{"t":27,"l":0,"w":18,"h":27,"m":"y0c0d1e08151a041b18041b1603020b0a0b120502090e0910070b0e0b0c090912090a0b091209080b02091209060b04091209040b060b0e0b020b0802090e150a020b0a150c04250e0421120819160c0f1c"},"A":{"t":27,"l":0,"w":18,"h":27,"m":"y2e0926111e1916210e21080621101d020910150a09100b1409100b140910150a09101d0209100621100e210816211e1926112e09"},"B":{"t":27,"l":0,"w":19,"h":27,"m":"y37373737090e091009090e091009090e091009090e091009090e091009090e091009090e091009090e0910090b0a0b1009020b060f0c0b0221080b0204310206130417040a0b0a1306200d0a"},"C":{"t":27,"l":1,"w":16,"h":27,"m":"b03f00ffc1ffe1ffe3e1f7c0f780078007800f000f000f000f000f000f000f000f000f0007800780078007c0f3e1f1fff1ffe0ffc03f0"},"D":{"t":27,"l":1,"w":16,"h":27,"m":"y373737370926090926090926090926090209220902020b1e0b02040b1a0b04060d120d060827080a230a0e1b0e121312"},"E":{"t":27,"l":1,"w":16,"h":27,"m":"x1f021f021f021f0209180918091809180918091809181d041d041d041d040918091809180918091809180918091821212121"},"F":{"t":27,"l":2,"w":13,"h":27,"m":"y37373737090e0918090e0918090e0918090e0918090e0918090e0918090e0918092e092e"},"G":{"t":27,"l":0,"w":17,"h":27,"m":"y1017100a230a082906062d04040f120f04020b1e0b0202092209020b24090912090c090912090c090912090c090912090c090912090c090209101d0209101b020407101b020605101b02"},"H":{"t":27,"l":1,"w":16,"h":27,"m":"y3737373716091816091816091816091816091816091816091816091837373737"},"I":{"t":27,"l":2,"w":14,"h":27,"m":"y09260909260909260909260909260937373737092609092609092609092609092609"},"J":{"t":27,"l":2,"w":13,"h":27,"m":"y240b08240f042411022411022c0b2e092e092e092c0b3502350233042f08"},"K":{"t":27,"l":-1,"w":20,"h":27,"m":"y37373737140d161211141015120e0b040b100c0b080b0e0a0b0c0b0c080b100b0a060b140b08040b180b06020b1c0b040b200b0209240b072809052c070330053403"},"L":{"t":27,"l":0,"w":17,"h":27,"m":"y373737372e092e092e092e092e092e092e092e092e092e092e092e092e09"},"M":{"t":27,"l":0,"w":18,"h":27,"m":"y373737370d2a1522021b1a0a1b121213121213120a1b12021b1a15220d2a37373737"},"N":{"t":27,"l":0,"w":17,"h":27,"m":"y37373737112604112208111e0c131812111416130e1c110a201304261137373737"},"O":{"t":27,"l":0,"w":18,"h":27,"m":"y1213120c1f0c082708062b06040f120f04020b1e0b020b220b0926090926090926090926090b220b020b1e0b02040f120f04062b060827080c1f0c121312"},"P":{"t":27,"l":0,"w":18,"h":27,"m":"y3737373709100916091009160910091609100916091009160910091609100916091009160b0c0b16020b080b18021d1804191a06151c0a0d20"},"Q":{"t":27,"l":0,"w":19,"h":27,"m":"y1015120a210c062908042d06020f140f04020b1c0b040b1207080b0209140908090209140b06090209160b0409020b161502020b161104020f140d06042f04062f020a2d1015080b2e093007"},"R":{"t":27,"l":0,"w":17,"h":27,"m":"y373737370910091609100916091009160910091609100d120910110e0b0c170a020b080b021106021b08110204190c0f0615120b0a0d18093205"},"S":{"t":27,"l":1,"w":16,"h":27,"m":"b07e01ff83ffc7ffe7c1ef80ff00ff000f00078007e003f801fe007f801fc007e001e000f000f000ff00ff01f783e7ffe3ffc1ff807e0"},"T":{"t":27,"l":0,"w":18,"h":27,"m":"y092e092e092e092e092e092e092e37373737092e092e092e092e092e092e092e"},"U":{"t":27,"l":0,"w":18,"h":27,"m":"y2d0a3106330435022a0b022c0b2e092e092e092e092e092e092c0b2a0b023502330431062d0a"},"V":{"t":27,"l":0,"w":18,"h":27,"m":"y092e1126191e21160a1f0e121f061a1d22152a0d2a0d22151a1d121f060a1f0e2116191e1126092e"},"W":{"t":27,"l":0,"w":18,"h":27,"m":"y1b1c2b0c37371e1924131c1b141d06141310141310141b081c1b24131e1937372b0c1b1c"},"X":{"t":27,"l":0,"w":18,"h":27,"m":"y052e050926090d1e0d11161102130e130206130613060a230a0e1b0e1213121213120e1b0e0a230a061306130602130e13021116110d1e0d092609052e05"},"Y":{"t":27,"l":0,"w":18,"h":27,"m":"y0532092e0d2a112602132206131e0a131a0e29122512250e290a131a06131e02132211260d2a092e0532"},"Z":{"t":27,"l":1,"w":16,"h":27,"m":"b7ffe7ffe7ffe7ffe003c003c0078007800f000f001e001e003c003c0078007800f001f001e003e003c007c007800ffffffffffffffff"},"a":{"t":20,"l":1,"w":16,"h":20,"m":"b0ff03ffc7ffefc1ef00f000f000f000f07ff3fff7fff7ffff80ff00ff00ff01ff83f7fff3fff0fcf"},"b":{"t":27,"l":0,"w":18,"h":27,"m":"y37373737120b0c0b04100914090210091409020e0918090e0918090e0918090e0918090e0b140b0e0b140902100d0c0d02102304121f061619081a110c"},"c":{"t":20,"l":1,"w":15,"h":20,"m":"b07e00ff83ffc3ffe7c1e7800f800f000f000f000f000f000f000f800781e7c3e3ffc3ffc1ff807e0"},"d":{"t":27,"l":0,"w":18,"h":27,"m":"y1a110c161908122104102304100d0c0d020e0b1409020e0b140b0e0918090e0918090e0918090e09180910091409021009120b02120b0c0b0437373737"},"e":{"t":20,"l":0,"w":17,"h":20,"m":"x0c0d0a081506061904041d02020b0c09020209100909140723232323091a091a091a020918020d0c09041f041d020817040c0f08"},"f":{"t":27,"l":1,"w":15,"h":27,"m":"y12091c12091c12091c12091c12091c12091c082f0433023502350b08091c090a091c090a091c090a091c090a091c"},"g":{"t":20,"l":0,"w":17,"h":27,"m":"y0c0f1c061b0c0704041f0a09020223080902020d0c0b0a090b14090a070918070a070918070a070918070a070918070a070916090a07020912090a09040b0a0b0a09023502330433042f08"},"h":{"t":27,"l":1,"w":15,"h":27,"m":"y37373737100b1c10091e0e09200e09200e09200e09200e0b1e0e29102712251621"},"i":{"t":27,"l":4,"w":9,"h":27,"m":"y12091c12091c12091c12091c0b08091c0b08250b08250b08250b0825"},"j":{"t":27,"l":4,"w":10,"h":34,"m":"y3c093c091209220912092209120922090b0809200b0b0831020b0831020b082f040b082b08"},"k":{"t":27,"l":0,"w":17,"h":27,"m":"y373737371c0b101a0f0e18130c160b020b0a140b060b08120b0a0b06100b0e0b040e0b120b020e09160b0e071a090e051e070e0322053403"},"l":{"t":27,"l":4,"w":10,"h":27,"m":"y2f083304350235022c0b2e092e092e092e092e09"},"m":{"t":20,"l":0,"w":19,"h":20,"m":"y29292929020720072207222929290227020720072207220722292902270425"},"n":{"t":20,"l":1,"w":16,"h":20,"m":"y29292929040b1a02091e02091e09200920092009200b1e0227022704250821"},"o":{"t":20,"l":0,"w":18,"h":20,"m":"b03f0000ffc001ffe003e1f007c0f80780780f807c0f003c0f003c0f003c0f003c0f003c0f003c0f807c07807807c0f803e1f001ffe000ffc0003f000"},"p":{"t":20,"l":0,"w":18,"h":27,"m":"y37373737040b0c0b12020914091002091409100918090e0918090e0918090e0918090e0b140b0e0209140910020d0c0d10042112061d140819160c111a"},"q":{"t":20,"l":0,"w":18,"h":27,"m":"y0e0f1a081916061d14042112020d0c0d1002091409100b140b0e0918090e0918090e0918090e0918090e02091409100209140910040b0c0b1237373737"},"r":{"t":20,"l":1,"w":15,"h":20,"m":"y2929292904091c020720092007220722072209200d1c020b1c04091c06071c"},"s":{"t":20,"l":1,"w":16,"h":20,"m":"b0ff03ffc7ffef81ff00ff000f800fc007ff03ffc07fe003f001f000f000ff00ff81f7ffe3ffc0ff0"},"t":{"t":25,"l":2,"w":14,"h":25,"m":"y0a09200a09200a09202b082f043102330a09160b0a0918090a0918090a0918090a0918090a0918090a09180702"},"u":{"t":20,"l":1,"w":16,"h":20,"m":"y210825042702291e0b20092009200920091e09021e09021a0b0429292929"},"v":{"t":20,"l":0,"w":18,"h":20,"m":"y07220d1c1316191006190a0c190414151a0f200920091a0f14150c190406190a191013160d1c0722"},"w":{"t":20,"l":0,"w":18,"h":20,"m":"y0f1a2108292914151a0f1415101306100b0e100b0e10130614151a0f1415292921080f1a"},"x":{"t":20,"l":1,"w":16,"h":20,"m":"bf00f781e781e3c3c3c3c1e781e780ff00ff007e007e00ff00ff01e781e783c3c3c3c781e781ef00f"},"y":{"t":20,"l":0,"w":19,"h":27,"m":"y05320728090b24090f200902111a0b0611120d020a0f0c0f040e0f041106121b0a14150e1213120e13160a111c0611200211240f280b2c07300532"},"z":{"t":20,"l":1,"w":16,"h":20,"m":"b7fff7fff7fff7fff001f003e007c00f801f003e007c00f801f003e007c00f800ffffffffffffffff"},"~":{"t":26,"l":0,"w":18,"h":6,"m":"b1f81c07fc1c0ffe3c0f1ffc0e0ff80e07e00"},"!":{"t":27,"l":6,"w":5,"h":27,"m":"y210a0d210a0d210a0d210a0d210a0d"},"@":{"t":27,"l":0,"w":18,"h":27,"m":"y0a090a1308060d061b04040f041f02020b082302090a0912090b0a071607090c071607090c091209090e1f02090c1f040b0a210202090a23020b2209040f1a0b0433082d020c2704121d08"},"#":{"t":27,"l":0,"w":18,"h":27,"m":"y200906090c090c170c09061d0c2b062908290e1b06090e150c090e0706090c090e0c090c0906090c090c170c09061d0c2b062b06290e1b06090e150c090e07060922"},"$":{"t":27,"l":0,"w":18,"h":28,"m":"b01e00001e0000ffc003fff007fff807fff80f9e7c0f1e3c0f1e000f1e000f9e0007fe0003fe0001ff80007fe0001ff0001ff8001e7c001e3c001e3c0f1e3c0f9e7c07fff807fff803fff000ffc0001e00001e000"},"%":{"t":27,"l":0,"w":18,"h":27,"m":"y040b28020f2007131a0b070607160f0706071213130e1304020f0c1308040b0a130c1413101013140c130a0b0408130c0f0204130e1313120706070f160706070b1a1307200f02280b04"},"^":{"t":27,"l":0,"w":18,"h":15,"m":"b00c00001e00001e00003f00007f80007f8000ffc001ffe001f3e003e1f007c0f80780780f003c0f003c0600180"},"&":{"t":27,"l":0,"w":18,"h":27,"m":"b03f0000ffc001ffe003ffe007e1f007c0f00781e00383e003c7c003df8001fe0000fc0001f80003f80007fc3c07be3c0f9e3c0f0f3c0f0fbc0f07b80f03f80f83f807c1f007fff003fff801fffc007f3c0"},"*":{"t":26,"l":0,"w":18,"h":18,"m":"b01e00001e00001e00001e00041e08079e780ffffc0ffffc03fff000ffc0003f00007f8000ffc000f3c001e1e003e1f001c0e000c0c00"},"_":{"t":-3,"l":-1,"w":21,"h":3,"m":"x2b2b2b"},"+":{"t":25,"l":0,"w":18,"h":21,"m":"y1009121009121009121009121009121009121009122b2b2b2b100912100912100912100912100912100912100912"},"`":{"t":27,"l":3,"w":12,"h":11,"m":"bff00ff007f803f801fc00fc007e003e001f000f00070"},"-":{"t":17,"l":0,"w":18,"h":4,"m":"x25252525"},"=":{"t":21,"l":0,"w":17,"h":12,"m":"x232323232222222223232323"},"\"":{"t":27,"l":2,"w":14,"h":9,"m":"y1313131313121212121313131313"},"'":{"t":27,"l":6,"w":5,"h":12,"m":"y1919191919"},"(":{"t":27,"l":4,"w":10,"h":27,"m":"y160d141017100c1f0c08270806110a1106040d160d04020b1e0b020b220b092609072a07"},")":{"t":27,"l":4,"w":10,"h":27,"m":"y072a070926090b220b020b1e0b02040d160d0406110a11060827080c1f0c101710160d14"},"{":{"t":27,"l":0,"w":17,"h":27,"m":"y160918160918160918160918140d16101512082708042f040215081702020d180f020b220b092609092609092609092609092609092609"},"}":{"t":27,"l":0,"w":17,"h":27,"m":"y0926090926090926090926090926090926090b220b020d180f020215081702042f04082708101512140d16160918160918160918160918"},"[":{"t":27,"l":2,"w":14,"h":27,"m":"y37373737092609092609092609092609092609092609092609092609092609092609"},"]":{"t":27,"l":2,"w":14,"h":27,"m":"y09260909260909260909260909260909260909260909260909260909260937373737"},"<":{"t":26,"l":0,"w":18,"h":25,"m":"x20051e071a0b180d140f02120f040e0f080c0f0a080f0e060f10020f140f160b1a0f16020f14060f10080f0e0c0f0a0e0f08120f04140f02180d1a0b1e072005"},">":{"t":26,"l":0,"w":18,"h":25,"m":"x0520071e0b1a0d18020f14040f12080f0e0a0f0c0e0f08100f06140f02160f1a0b160f140f02100f060e0f080a0f0c080f0e040f12020f140d180b1a071e0520"},"|":{"t":27,"l":7,"w":4,"h":34,"m":"y45454545"},":":{"t":20,"l":5,"w":7,"h":20,"m":"x0f0f0f0f0f0f0e0e0e0e0e0e0e0e0f0f0f0f0f0f"},";":{"t":20,"l":2,"w":13,"h":27,"m":"y32052e092a0d260f022211041e13060d0e15080d0e130a0d0e110c0d0e0f0e0d0e0d100d0e0b120d0e0914"},".":{"t":6,"l":5,"w":7,"h":6,"m":"x0f0f0f0f0f0f"},",":{"t":7,"l":2,"w":13,"h":14,"m":"b03f803f807f807f80ff00fe01fc01f803f003e007c007800f000e000"},"\\":{"t":27,"l":1,"w":16,"h":27,"m":"y07300b2c0f28132404132008131c0c131810131414131018130c1c13082013042413280f2c0b3007"},"?":{"t":27,"l":0,"w":18,"h":27,"m":"y0c0922080d22060f22041122020d2802092c0b200d09220d091409060d09120b060d09100d060d0b0c0f060d02090c0b0a0d020d060b18021b1a04171c06131e0a0b22"},"/":{"t":27,"l":1,"w":16,"h":27,"m":"y30072c0b280f24132013041c130818130c1413101013140c131808131c04132013240f280b2c0730"}}};



function perlinNoiseGenerator() {

  function Grad(x, y, z) {
    this.x = x; this.y = y; this.z = z;
  }

  Grad.prototype.dot3 = function(x, y, z) {
    return this.x*x + this.y*y + this.z*z;
  };

  var grad3 = [new Grad(1,1,0),new Grad(-1,1,0),new Grad(1,-1,0),new Grad(-1,-1,0),
               new Grad(1,0,1),new Grad(-1,0,1),new Grad(1,0,-1),new Grad(-1,0,-1),
               new Grad(0,1,1),new Grad(0,-1,1),new Grad(0,1,-1),new Grad(0,-1,-1)];

  var p = [151,160,137,91,90,15,
  131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,
  190, 6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,
  88,237,149,56,87,174,20,125,136,171,168, 68,175,74,165,71,134,139,48,27,166,
  77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,
  102,143,54, 65,25,63,161, 1,216,80,73,209,76,132,187,208, 89,18,169,200,196,
  135,130,116,188,159,86,164,100,109,198,173,186, 3,64,52,217,226,250,124,123,
  5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,
  223,183,170,213,119,248,152, 2,44,154,163, 70,221,153,101,155,167, 43,172,9,
  129,22,39,253, 19,98,108,110,79,113,224,232,178,185, 112,104,218,246,97,228,
  251,34,242,193,238,210,144,12,191,179,162,241, 81,51,145,235,249,14,239,107,
  49,192,214, 31,181,199,106,157,184, 84,204,176,115,121,50,45,127, 4,150,254,
  138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180];
  // To remove the need for index wrapping, double the permutation table length
  var perm = new Array(512);
  var gradP = new Array(512);

  // This isn't a very good seeding function, but it works ok. It supports 2^16
  // different seed values. Write something better if you need more seeds.
  this.seed = function(seed) {
    if(seed > 0 && seed < 1) {
      // Scale the seed out
      seed *= 65536;
    }

    seed = Math.floor(seed);
    if(seed < 256) {
      seed |= seed << 8;
    }

    for(var i = 0; i < 256; i++) {
      var v;
      if (i & 1) {
        v = p[i] ^ (seed & 255);
      } else {
        v = p[i] ^ ((seed>>8) & 255);
      }

      perm[i] = perm[i + 256] = v;
      gradP[i] = gradP[i + 256] = grad3[v % 12];
    }
  };

  this.seed(0);

  /*
  for(var i=0; i<256; i++) {
    perm[i] = perm[i + 256] = p[i];
    gradP[i] = gradP[i + 256] = grad3[perm[i] % 12];
  }*/

  // Skewing and unskewing factors for 2, 3, and 4 dimensions
  var F2 = 0.5*(Math.sqrt(3)-1);
  var G2 = (3-Math.sqrt(3))/6;

  var F3 = 1/3;
  var G3 = 1/6;

  

  // ##### Perlin noise stuff

  function fade(t) {
    return t*t*t*(t*(t*6-15)+10);
  }

  function lerp(a, b, t) {
    return (1-t)*a + t*b;
  }

  // 3D Perlin Noise
  this.perlin3 = function(x, y, z) {
    // Find unit grid cell containing point
    var X = Math.floor(x), Y = Math.floor(y), Z = Math.floor(z);
    // Get relative xyz coordinates of point within that cell
    x = x - X; y = y - Y; z = z - Z;
    // Wrap the integer cells at 255 (smaller integer period can be introduced here)
    X = X & 255; Y = Y & 255; Z = Z & 255;

    // Calculate noise contributions from each of the eight corners
    var n000 = gradP[X+  perm[Y+  perm[Z  ]]].dot3(x,   y,     z);
    var n001 = gradP[X+  perm[Y+  perm[Z+1]]].dot3(x,   y,   z-1);
    var n010 = gradP[X+  perm[Y+1+perm[Z  ]]].dot3(x,   y-1,   z);
    var n011 = gradP[X+  perm[Y+1+perm[Z+1]]].dot3(x,   y-1, z-1);
    var n100 = gradP[X+1+perm[Y+  perm[Z  ]]].dot3(x-1,   y,   z);
    var n101 = gradP[X+1+perm[Y+  perm[Z+1]]].dot3(x-1,   y, z-1);
    var n110 = gradP[X+1+perm[Y+1+perm[Z  ]]].dot3(x-1, y-1,   z);
    var n111 = gradP[X+1+perm[Y+1+perm[Z+1]]].dot3(x-1, y-1, z-1);

    // Compute the fade curve value for x, y, z
    var u = fade(x);
    var v = fade(y);
    var w = fade(z);

    // Interpolate
    return lerp(
        lerp(
          lerp(n000, n100, u),
          lerp(n001, n101, u), w),
        lerp(
          lerp(n010, n110, u),
          lerp(n011, n111, u), w),
       v);
  };
}

var perlinNoise = new perlinNoiseGenerator();
perlinNoise.seed(Math.random());


// file: bwipp/renlinear.js
//
// This code was automatically generated from:
// Barcode Writer in Pure PostScript - Version 2013-01-25
//
// Copyright (c) 2011-2013 Mark Warren
// Copyright (c) 2004-2013 Terry Burton
//
// See the LICENSE file in the bwip.js root directory
// for the extended copyright notice.
// BEGIN renlinear
var BWIPJSrenlinear = function () {
    function $f0() {
        this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    }
    function $f1() {
        this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    }

    function $f21() {
        var t = this.dstk.get("textcolor");
        if (t === undefined) throw new Error("dict: textcolor: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = this.dstk.get("setanycolor");
        if (t === undefined) throw new Error("dict: setanycolor: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    }
    function $f22() {
    }
    function $f23() {
        this.stk[this.ptr++] = 2;
        if (typeof (this.stk[this.ptr - 1]) == "number") {
            for (var n = this.stk[--this.ptr], t = this.ptr + n; this.ptr < t; this.ptr++) this.stk[this.ptr] = this.stk[this.ptr - n];
        } else if (this.stk[this.ptr - 1] instanceof BWIPJS.psstring || this.stk[this.ptr - 1] instanceof BWIPJS.psarray) {
            this.stk[this.ptr - 1].assign(0, this.stk[this.ptr - 2]);
            this.stk[this.ptr - 2] = this.stk[this.ptr - 1].subset(0, this.stk[this.ptr - 2].length);
            this.ptr--;
        } else {
            var src = this.stk[this.ptr - 2]; var dst = this.stk[this.ptr - 1];
            for (var i in src) dst[i] = src[i];
            this.stk[this.ptr - 2] = dst;
            this.ptr--;
        }
        this.stk[this.ptr++] = "s"; //ident
        var t = this.stk[this.ptr - 2]; this.stk[this.ptr - 2] = this.stk[this.ptr - 1]; this.stk[this.ptr - 1] = t;
        this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
        this.stk[this.ptr++] = "fn"; //ident
        var t = this.stk[this.ptr - 2]; this.stk[this.ptr - 2] = this.stk[this.ptr - 1]; this.stk[this.ptr - 1] = t;
        this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
        var t = this.stk[this.ptr - 2]; this.stk[this.ptr - 2] = this.stk[this.ptr - 1]; this.stk[this.ptr - 1] = t;
        this.stk[this.ptr - 1] = this.findfont(BWIPJS.psstring(this.stk[this.ptr - 1]));
        var t = this.stk[this.ptr - 2]; this.stk[this.ptr - 2] = this.stk[this.ptr - 1]; this.stk[this.ptr - 1] = t;
        this.ptr--; this.stk[this.ptr - 1].FontSize = this.stk[this.ptr];
        this.setfont(this.stk[--this.ptr]);
    }
    function $f24() {
        this.ptr--;
        this.ptr--;
    }
    function $f25() {
        this.stk[this.ptr++] = $f22;
        var t37 = this.stk[--this.ptr];
        var t36 = this.stk[--this.ptr];
        for (var t35 in t36) {
            if (t36 instanceof BWIPJS.psstring || t36 instanceof BWIPJS.psarray) {
                if (t35.charCodeAt(0) > 57) continue;
                this.stk[this.ptr++] = t36.get(t35);
            } else {
                this.stk[this.ptr++] = t35;
                this.stk[this.ptr++] = t36[t35];
            }
            if (t37.call(this) == -1) break;
        }
        this.stk[this.ptr++] = 2;
        if (typeof (this.stk[this.ptr - 1]) == "number") {
            for (var n = this.stk[--this.ptr], t = this.ptr + n; this.ptr < t; this.ptr++) this.stk[this.ptr] = this.stk[this.ptr - n];
        } else if (this.stk[this.ptr - 1] instanceof BWIPJS.psstring || this.stk[this.ptr - 1] instanceof BWIPJS.psarray) {
            this.stk[this.ptr - 1].assign(0, this.stk[this.ptr - 2]);
            this.stk[this.ptr - 2] = this.stk[this.ptr - 1].subset(0, this.stk[this.ptr - 2].length);
            this.ptr--;
        } else {
            var src = this.stk[this.ptr - 2]; var dst = this.stk[this.ptr - 1];
            for (var i in src) dst[i] = src[i];
            this.stk[this.ptr - 2] = dst;
            this.ptr--;
        }
        var t = this.dstk.get("s");
        if (t === undefined) throw new Error("dict: s: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        if (this.stk[this.ptr - 2] instanceof BWIPJS.psstring)
            this.stk[this.ptr - 2] = this.stk[this.ptr - 2].toString() != this.stk[this.ptr - 1];
        else this.stk[this.ptr - 2] = this.stk[this.ptr - 2] != this.stk[this.ptr - 1];
        this.ptr--;
        var t = this.stk[this.ptr - 2]; this.stk[this.ptr - 2] = this.stk[this.ptr - 1]; this.stk[this.ptr - 1] = t;
        var t = this.dstk.get("fn");
        if (t === undefined) throw new Error("dict: fn: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        if (this.stk[this.ptr - 2] instanceof BWIPJS.psstring)
            this.stk[this.ptr - 2] = this.stk[this.ptr - 2].toString() != this.stk[this.ptr - 1];
        else this.stk[this.ptr - 2] = this.stk[this.ptr - 2] != this.stk[this.ptr - 1];
        this.ptr--;
        if (typeof (this.stk[this.ptr - 1]) == "boolean") this.stk[this.ptr - 2] = this.stk[this.ptr - 2] || this.stk[this.ptr - 1];
        else this.stk[this.ptr - 2] = this.stk[this.ptr - 2] | this.stk[this.ptr - 1];
        this.ptr--;
        this.stk[this.ptr++] = $f23;
        this.stk[this.ptr++] = $f24;
        var t38 = this.stk[--this.ptr];
        var t39 = this.stk[--this.ptr];
        if (this.stk[--this.ptr]) {
            if (t39.call(this) == -1) return -1;
        } else {
            if (t38.call(this) == -1) return -1;
        }
        var y = this.stk[--this.ptr];
        this.moveto(this.stk[--this.ptr], y);
        this.show(this.stk[--this.ptr], 0, 0);
    }
    function $f26() {
        this.stk[this.ptr++] = "s"; //ident
        this.stk[this.ptr++] = 0;
        this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
        this.stk[this.ptr++] = "fn"; //ident
        this.stk[this.ptr++] = BWIPJS.psstring("");
        this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
        var t = this.dstk.get("txt");
        if (t === undefined) throw new Error("dict: txt: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = $f25;
        var t42 = this.stk[--this.ptr];
        var t41 = this.stk[--this.ptr];
        for (var t40 in t41) {
            if (t41 instanceof BWIPJS.psstring || t41 instanceof BWIPJS.psarray) {
                if (t40.charCodeAt(0) > 57) continue;
                this.stk[this.ptr++] = t41.get(t40);
            } else {
                this.stk[this.ptr++] = t40;
                this.stk[this.ptr++] = t41[t40];
            }
            if (t42.call(this) == -1) break;
        }
    }

    function $f28() {
        this.stk[this.ptr++] = 0;
        if (this.stk[this.ptr - 2] instanceof BWIPJS.psstring || this.stk[this.ptr - 2] instanceof BWIPJS.psarray)
            this.stk[this.ptr - 2] = this.stk[this.ptr - 2].get(this.stk[this.ptr - 1]);
        else this.stk[this.ptr - 2] = this.stk[this.ptr - 2][this.stk[this.ptr - 1].toString()];

        var t45 = this.stk[--this.ptr];
        var t44 = this.stk[--this.ptr];
        for (var t43 in t44) {
            if (t44 instanceof BWIPJS.psstring || t44 instanceof BWIPJS.psarray) {
                if (t43.charCodeAt(0) > 57) continue;
                this.stk[this.ptr++] = t44.get(t43);
            } else {
                this.stk[this.ptr++] = t43;
                this.stk[this.ptr++] = t44[t43];
            }
            if (t45.call(this) == -1) break;
        }
    }
    function $f29() {
        this.stk[this.ptr] = this.stk[this.ptr - 1]; this.ptr++;
        var t = this.dstk.get("txt");
        if (t === undefined) throw new Error("dict: txt: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = this.stk[this.ptr - 2]; this.stk[this.ptr - 2] = this.stk[this.ptr - 1]; this.stk[this.ptr - 1] = t;
        if (this.stk[this.ptr - 2] instanceof BWIPJS.psstring || this.stk[this.ptr - 2] instanceof BWIPJS.psarray)
            this.stk[this.ptr - 2] = this.stk[this.ptr - 2].get(this.stk[this.ptr - 1]);
        else this.stk[this.ptr - 2] = this.stk[this.ptr - 2][this.stk[this.ptr - 1].toString()];
        this.ptr--;
        var t = this.dstk.get("tstr");
        if (t === undefined) throw new Error("dict: tstr: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = 3;
        this.stk[this.ptr++] = 1;
        var b = this.stk[--this.ptr]; var a = this.stk[--this.ptr];
        if (a > this.ptr) throw "roll: underflow: this.ptr=" + this.ptr + ",offset=" + a;
        if (b < 0) var t = this.stk.splice(this.ptr - a, -b);
        else var t = this.stk.splice(this.ptr - a, a - b);
        this.stk.splice.apply(this.stk, [this.ptr - t.length, 0].concat(t));
        if (this.stk[this.ptr - 3] instanceof BWIPJS.psstring || this.stk[this.ptr - 3] instanceof BWIPJS.psarray)
            this.stk[this.ptr - 3].set(this.stk[this.ptr - 2], this.stk[this.ptr - 1]);
        else this.stk[this.ptr - 3][this.stk[this.ptr - 2].toString()] = this.stk[this.ptr - 1];
        this.ptr -= 3;
    }
    function $f30() {
        this.stk[this.ptr++] = "txt"; //ident
        this.stk[this.ptr++] = Infinity;
        var t = this.dstk.get("txt");
        if (t === undefined) throw new Error("dict: txt: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = $f28;
        var t48 = this.stk[--this.ptr];
        var t47 = this.stk[--this.ptr];
        for (var t46 in t47) {
            if (t47 instanceof BWIPJS.psstring || t47 instanceof BWIPJS.psarray) {
                if (t46.charCodeAt(0) > 57) continue;
                this.stk[this.ptr++] = t47.get(t46);
            } else {
                this.stk[this.ptr++] = t46;
                this.stk[this.ptr++] = t47[t46];
            }
            if (t48.call(this) == -1) break;
        }
        for (var i = this.ptr - 1; i >= 0 && this.stk[i] !== Infinity; i--)        ;
        if (i < 0) throw "array: underflow";
        var t = this.stk.splice(i + 1, this.ptr - 1 - i);
        this.ptr = i;
        this.stk[this.ptr++] = BWIPJS.psarray(t);
        this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
        this.stk[this.ptr++] = "tstr"; //ident
        var t = this.dstk.get("txt");
        if (t === undefined) throw new Error("dict: txt: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        if (typeof (this.stk[this.ptr - 1].length) !== "number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr - 1]);
        this.stk[this.ptr - 1] = this.stk[this.ptr - 1].length;
        this.stk[this.ptr - 1] = BWIPJS.psstring(this.stk[this.ptr - 1]);
        this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
        this.stk[this.ptr++] = 0;
        this.stk[this.ptr++] = 1;
        var t = this.dstk.get("txt");
        if (t === undefined) throw new Error("dict: txt: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        if (typeof (this.stk[this.ptr - 1].length) !== "number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr - 1]);
        this.stk[this.ptr - 1] = this.stk[this.ptr - 1].length;
        this.stk[this.ptr++] = 1;
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2] - this.stk[this.ptr - 1]; this.ptr--;
        this.stk[this.ptr++] = $f29;
        var t53 = this.stk[--this.ptr];
        var t51 = this.stk[--this.ptr];
        var t50 = this.stk[--this.ptr];
        var t49 = this.stk[--this.ptr];
        for (var t52 = t49; t50 < 0 ? t52 >= t51 : t52 <= t51; t52 += t50) {
            this.stk[this.ptr++] = t52;
            if (t53.call(this) == -1) break;
        }
    }
    function $f31() {
        this.stk[this.ptr++] = "tstr"; //ident
        var t = this.dstk.get("alttext");
        if (t === undefined) throw new Error("dict: alttext: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    }
    function $f32() {
        this.stk[this.ptr++] = 0;
    }
    function $f33() {
        this.stk[this.ptr++] = this.currentfont();
        this.stk[this.ptr++] = "PaintType"; //ident
        if (this.stk[this.ptr - 2] instanceof BWIPJS.psstring || this.stk[this.ptr - 2] instanceof BWIPJS.psarray)
            this.stk[this.ptr - 2] = this.stk[this.ptr - 2].get(this.stk[this.ptr - 1]);
        else this.stk[this.ptr - 2] = this.stk[this.ptr - 2][this.stk[this.ptr - 1].toString()];
        this.ptr--;
        this.stk[this.ptr++] = 2;
        if (this.stk[this.ptr - 2] instanceof BWIPJS.psstring)
            this.stk[this.ptr - 2] = this.stk[this.ptr - 2].toString() == this.stk[this.ptr - 1];
        else this.stk[this.ptr - 2] = this.stk[this.ptr - 2] == this.stk[this.ptr - 1];
        this.ptr--;
    }
    function $f34() {
        this.stk[this.ptr++] = false;
    }
    function $f35() {
        this.stk[this.ptr++] = this.currentfont();
        this.stk[this.ptr++] = "StrokeWidth"; //ident
        if (this.stk[this.ptr - 2] instanceof BWIPJS.psstring || this.stk[this.ptr - 2] instanceof BWIPJS.psarray)
            this.stk[this.ptr - 2] = this.stk[this.ptr - 2].get(this.stk[this.ptr - 1]);
        else this.stk[this.ptr - 2] = this.stk[this.ptr - 2][this.stk[this.ptr - 1].toString()];
        this.ptr--;
        this.stk[this.ptr++] = 2;
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2] / this.stk[this.ptr - 1]; this.ptr--;
        this.stk[this.ptr++] = 0;
        var t = this.stk[this.ptr - 2]; this.stk[this.ptr - 2] = this.stk[this.ptr - 1]; this.stk[this.ptr - 1] = t;
        this.stk[this.ptr++] = this.currentfont();
        this.stk[this.ptr++] = "FontMatrix"; //ident
        if (this.stk[this.ptr - 2] instanceof BWIPJS.psstring || this.stk[this.ptr - 2] instanceof BWIPJS.psarray)
            this.stk[this.ptr - 2] = this.stk[this.ptr - 2].get(this.stk[this.ptr - 1]);
        else this.stk[this.ptr - 2] = this.stk[this.ptr - 2][this.stk[this.ptr - 1].toString()];
        this.ptr--;
        var m = (BWIPJS.pstype(this.stk[this.ptr - 1]) == "arraytype"?this.stk[--this.ptr]:null);
        var dx = this.stk[this.ptr - 2]; var dy = this.stk[this.ptr - 1];
        var t = this.dtransform(m, dx, dy);
        this.stk[this.ptr - 2] = t.dx; this.stk[this.ptr - 1] = t.dy;
        this.stk[this.ptr] = this.stk[this.ptr - 1]; this.ptr++;
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2] * this.stk[this.ptr - 1]; this.ptr--;
        var t = this.stk[this.ptr - 2]; this.stk[this.ptr - 2] = this.stk[this.ptr - 1]; this.stk[this.ptr - 1] = t;
        this.stk[this.ptr] = this.stk[this.ptr - 1]; this.ptr++;
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2] * this.stk[this.ptr - 1]; this.ptr--;
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2] + this.stk[this.ptr - 1]; this.ptr--;
        this.stk[this.ptr - 1] = Math.sqrt(this.stk[this.ptr - 1]);
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2] + this.stk[this.ptr - 1]; this.ptr--;
    }
    function $f36() {
        this.gsave();
        this.newpath();
        this.stk[this.ptr++] = 0;
        this.stk[this.ptr++] = 0;
        var y = this.stk[--this.ptr];
        this.moveto(this.stk[--this.ptr], y);
        this.stk[this.ptr++] = BWIPJS.psstring("0");
        this.stk[this.ptr++] = false;
        this.charpath(this.stk[this.ptr - 2], this.stk[this.ptr - 1]); this.ptr -= 2;
        var t = this.pathbbox();
        this.stk[this.ptr++] = t.llx; this.stk[this.ptr++] = t.lly;
        this.stk[this.ptr++] = t.urx; this.stk[this.ptr++] = t.ury;
        this.stk[this.ptr++] = 4;
        this.stk[this.ptr++] = 1;
        var b = this.stk[--this.ptr]; var a = this.stk[--this.ptr];
        if (a > this.ptr) throw "roll: underflow: this.ptr=" + this.ptr + ",offset=" + a;
        if (b < 0) var t = this.stk.splice(this.ptr - a, -b);
        else var t = this.stk.splice(this.ptr - a, a - b);
        this.stk.splice.apply(this.stk, [this.ptr - t.length, 0].concat(t));
        this.ptr--;
        this.ptr--;
        this.ptr--;
        this.grestore();
        this.stk[this.ptr++] = this.currentfont();
        this.stk[this.ptr++] = "PaintType"; //ident
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2][this.stk[this.ptr - 1]] !== undefined; this.ptr--;
        this.stk[this.ptr++] = $f33;
        this.stk[this.ptr++] = $f34;
        var t56 = this.stk[--this.ptr];
        var t57 = this.stk[--this.ptr];
        if (this.stk[--this.ptr]) {
            if (t57.call(this) == -1) return -1;
        } else {
            if (t56.call(this) == -1) return -1;
        }
        this.stk[this.ptr++] = this.currentfont();
        this.stk[this.ptr++] = "StrokeWidth"; //ident
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2][this.stk[this.ptr - 1]] !== undefined; this.ptr--;
        if (typeof (this.stk[this.ptr - 1]) == "boolean") this.stk[this.ptr - 2] = this.stk[this.ptr - 2] && this.stk[this.ptr - 1];
        else this.stk[this.ptr - 2] = this.stk[this.ptr - 2] & this.stk[this.ptr - 1];
        this.ptr--;
        this.stk[this.ptr++] = $f35;
        var t58 = this.stk[--this.ptr];
        if (this.stk[--this.ptr]) {
            if (t58.call(this) == -1) return -1;
        }
    }
    function $f37() {
        this.stk[this.ptr++] = "textxpos"; //ident
        var t = this.dstk.get("textxoffset");
        if (t === undefined) throw new Error("dict: textxoffset: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    }
    function $f38() {
        this.stk[this.ptr++] = "textxpos"; //ident
        var t = this.dstk.get("x");
        if (t === undefined) throw new Error("dict: x: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = this.dstk.get("textxoffset");
        if (t === undefined) throw new Error("dict: textxoffset: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2] - this.stk[this.ptr - 1]; this.ptr--;
        var t = this.dstk.get("textwidth");
        if (t === undefined) throw new Error("dict: textwidth: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2] - this.stk[this.ptr - 1]; this.ptr--;
        this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    }
    function $f39() {
        this.stk[this.ptr++] = "textxpos"; //ident
        var t = this.dstk.get("textwidth");
        if (t === undefined) throw new Error("dict: textwidth: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = this.dstk.get("textxoffset");
        if (t === undefined) throw new Error("dict: textxoffset: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2] + this.stk[this.ptr - 1]; this.ptr--;
        this.stk[this.ptr - 1] = -this.stk[this.ptr - 1];
        this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    }
    function $f40() {
        this.stk[this.ptr++] = "textxpos"; //ident
        var t = this.dstk.get("x");
        if (t === undefined) throw new Error("dict: x: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = this.dstk.get("textxoffset");
        if (t === undefined) throw new Error("dict: textxoffset: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2] + this.stk[this.ptr - 1]; this.ptr--;
        this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    }
    function $f41() {
        this.stk[this.ptr++] = "textxpos"; //ident
        this.stk[this.ptr++] = 0;
        this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
        this.stk[this.ptr++] = "textgaps"; //ident
        var t = this.dstk.get("x");
        if (t === undefined) throw new Error("dict: x: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = this.dstk.get("textwidth");
        if (t === undefined) throw new Error("dict: textwidth: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2] - this.stk[this.ptr - 1]; this.ptr--;
        var t = this.dstk.get("tstr");
        if (t === undefined) throw new Error("dict: tstr: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        if (typeof (this.stk[this.ptr - 1].length) !== "number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr - 1]);
        this.stk[this.ptr - 1] = this.stk[this.ptr - 1].length;
        this.stk[this.ptr++] = 1;
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2] - this.stk[this.ptr - 1]; this.ptr--;
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2] / this.stk[this.ptr - 1]; this.ptr--;
        this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    }
    function $f42() {
        this.stk[this.ptr++] = "textypos"; //ident
        var t = this.dstk.get("textyoffset");
        if (t === undefined) throw new Error("dict: textyoffset: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = this.dstk.get("maxh");
        if (t === undefined) throw new Error("dict: maxh: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2] + this.stk[this.ptr - 1]; this.ptr--;
        this.stk[this.ptr++] = 1;
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2] + this.stk[this.ptr - 1]; this.ptr--;
        this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    }
    function $f43() {
        this.stk[this.ptr++] = "textypos"; //ident
        var t = this.dstk.get("textyoffset");
        if (t === undefined) throw new Error("dict: textyoffset: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = this.dstk.get("maxh");
        if (t === undefined) throw new Error("dict: maxh: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = this.dstk.get("textascent");
        if (t === undefined) throw new Error("dict: textascent: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2] - this.stk[this.ptr - 1]; this.ptr--;
        this.stk[this.ptr++] = 2;
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2] / this.stk[this.ptr - 1]; this.ptr--;
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2] + this.stk[this.ptr - 1]; this.ptr--;
        this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    }
    function $f44() {
        var t = this.dstk.get("textfont");
        if (t === undefined) throw new Error("dict: textfont: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr - 1] = this.findfont(BWIPJS.psstring(this.stk[this.ptr - 1]));
        var t = this.dstk.get("textsize");
        if (t === undefined) throw new Error("dict: textsize: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.ptr--; this.stk[this.ptr - 1].FontSize = this.stk[this.ptr];
        this.setfont(this.stk[--this.ptr]);
        var t = this.dstk.get("alttext");
        if (t === undefined) throw new Error("dict: alttext: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = BWIPJS.psstring("");
        if (this.stk[this.ptr - 2] instanceof BWIPJS.psstring)
            this.stk[this.ptr - 2] = this.stk[this.ptr - 2].toString() == this.stk[this.ptr - 1];
        else this.stk[this.ptr - 2] = this.stk[this.ptr - 2] == this.stk[this.ptr - 1];
        this.ptr--;
        this.stk[this.ptr++] = $f30;
        this.stk[this.ptr++] = $f31;
        var t54 = this.stk[--this.ptr];
        var t55 = this.stk[--this.ptr];
        if (this.stk[--this.ptr]) {
            if (t55.call(this) == -1) return -1;
        } else {
            if (t54.call(this) == -1) return -1;
        }
        var t = this.dstk.get("tstr");
        if (t === undefined) throw new Error("dict: tstr: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        if (typeof (this.stk[this.ptr - 1].length) !== "number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr - 1]);
        this.stk[this.ptr - 1] = this.stk[this.ptr - 1].length;
        this.stk[this.ptr++] = 0;
        if (this.stk[this.ptr - 2] instanceof BWIPJS.psstring)
            this.stk[this.ptr - 2] = this.stk[this.ptr - 2].toString() == this.stk[this.ptr - 1];
        else this.stk[this.ptr - 2] = this.stk[this.ptr - 2] == this.stk[this.ptr - 1];
        this.ptr--;
        this.stk[this.ptr++] = $f32;
        this.stk[this.ptr++] = $f36;
        var t59 = this.stk[--this.ptr];
        var t60 = this.stk[--this.ptr];
        if (this.stk[--this.ptr]) {
            if (t60.call(this) == -1) return -1;
        } else {
            if (t59.call(this) == -1) return -1;
        }
        this.stk[this.ptr++] = "textascent"; //ident
        var t = this.stk[this.ptr - 2]; this.stk[this.ptr - 2] = this.stk[this.ptr - 1]; this.stk[this.ptr - 1] = t;
        this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
        this.stk[this.ptr++] = "textwidth"; //ident
        var t = this.dstk.get("tstr");
        if (t === undefined) throw new Error("dict: tstr: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = this.stringwidth(this.stk[--this.ptr]);
        this.stk[this.ptr++] = t.w; this.stk[this.ptr++] = t.h;
        this.ptr--;
        var t = this.dstk.get("tstr");
        if (t === undefined) throw new Error("dict: tstr: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        if (typeof (this.stk[this.ptr - 1].length) !== "number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr - 1]);
        this.stk[this.ptr - 1] = this.stk[this.ptr - 1].length;
        this.stk[this.ptr++] = 1;
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2] - this.stk[this.ptr - 1]; this.ptr--;
        var t = this.dstk.get("textgaps");
        if (t === undefined) throw new Error("dict: textgaps: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2] * this.stk[this.ptr - 1]; this.ptr--;
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2] + this.stk[this.ptr - 1]; this.ptr--;
        this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
        this.stk[this.ptr++] = "textxpos"; //ident
        var t = this.dstk.get("textxoffset");
        if (t === undefined) throw new Error("dict: textxoffset: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = this.dstk.get("x");
        if (t === undefined) throw new Error("dict: x: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = this.dstk.get("textwidth");
        if (t === undefined) throw new Error("dict: textwidth: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2] - this.stk[this.ptr - 1]; this.ptr--;
        this.stk[this.ptr++] = 2;
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2] / this.stk[this.ptr - 1]; this.ptr--;
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2] + this.stk[this.ptr - 1]; this.ptr--;
        this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
        var t = this.dstk.get("textxalign");
        if (t === undefined) throw new Error("dict: textxalign: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = BWIPJS.psstring("left");
        if (this.stk[this.ptr - 2] instanceof BWIPJS.psstring)
            this.stk[this.ptr - 2] = this.stk[this.ptr - 2].toString() == this.stk[this.ptr - 1];
        else this.stk[this.ptr - 2] = this.stk[this.ptr - 2] == this.stk[this.ptr - 1];
        this.ptr--;
        this.stk[this.ptr++] = $f37;
        var t61 = this.stk[--this.ptr];
        if (this.stk[--this.ptr]) {
            if (t61.call(this) == -1) return -1;
        }
        var t = this.dstk.get("textxalign");
        if (t === undefined) throw new Error("dict: textxalign: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = BWIPJS.psstring("right");
        if (this.stk[this.ptr - 2] instanceof BWIPJS.psstring)
            this.stk[this.ptr - 2] = this.stk[this.ptr - 2].toString() == this.stk[this.ptr - 1];
        else this.stk[this.ptr - 2] = this.stk[this.ptr - 2] == this.stk[this.ptr - 1];
        this.ptr--;
        this.stk[this.ptr++] = $f38;
        var t62 = this.stk[--this.ptr];
        if (this.stk[--this.ptr]) {
            if (t62.call(this) == -1) return -1;
        }
        var t = this.dstk.get("textxalign");
        if (t === undefined) throw new Error("dict: textxalign: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = BWIPJS.psstring("offleft");
        if (this.stk[this.ptr - 2] instanceof BWIPJS.psstring)
            this.stk[this.ptr - 2] = this.stk[this.ptr - 2].toString() == this.stk[this.ptr - 1];
        else this.stk[this.ptr - 2] = this.stk[this.ptr - 2] == this.stk[this.ptr - 1];
        this.ptr--;
        this.stk[this.ptr++] = $f39;
        var t63 = this.stk[--this.ptr];
        if (this.stk[--this.ptr]) {
            if (t63.call(this) == -1) return -1;
        }
        var t = this.dstk.get("textxalign");
        if (t === undefined) throw new Error("dict: textxalign: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = BWIPJS.psstring("offright");
        if (this.stk[this.ptr - 2] instanceof BWIPJS.psstring)
            this.stk[this.ptr - 2] = this.stk[this.ptr - 2].toString() == this.stk[this.ptr - 1];
        else this.stk[this.ptr - 2] = this.stk[this.ptr - 2] == this.stk[this.ptr - 1];
        this.ptr--;
        this.stk[this.ptr++] = $f40;
        var t64 = this.stk[--this.ptr];
        if (this.stk[--this.ptr]) {
            if (t64.call(this) == -1) return -1;
        }
        var t = this.dstk.get("textxalign");
        if (t === undefined) throw new Error("dict: textxalign: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = BWIPJS.psstring("justify");
        if (this.stk[this.ptr - 2] instanceof BWIPJS.psstring)
            this.stk[this.ptr - 2] = this.stk[this.ptr - 2].toString() == this.stk[this.ptr - 1];
        else this.stk[this.ptr - 2] = this.stk[this.ptr - 2] == this.stk[this.ptr - 1];
        this.ptr--;
        var t = this.dstk.get("textwidth");
        if (t === undefined) throw new Error("dict: textwidth: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = this.dstk.get("x");
        if (t === undefined) throw new Error("dict: x: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2] < this.stk[this.ptr - 1]; this.ptr--;
        if (typeof (this.stk[this.ptr - 1]) == "boolean") this.stk[this.ptr - 2] = this.stk[this.ptr - 2] && this.stk[this.ptr - 1];
        else this.stk[this.ptr - 2] = this.stk[this.ptr - 2] & this.stk[this.ptr - 1];
        this.ptr--;
        this.stk[this.ptr++] = $f41;
        var t65 = this.stk[--this.ptr];
        if (this.stk[--this.ptr]) {
            if (t65.call(this) == -1) return -1;
        }
        this.stk[this.ptr++] = "textypos"; //ident
        var t = this.dstk.get("textyoffset");
        if (t === undefined) throw new Error("dict: textyoffset: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = this.dstk.get("textascent");
        if (t === undefined) throw new Error("dict: textascent: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2] + this.stk[this.ptr - 1]; this.ptr--;
        this.stk[this.ptr++] = 1;
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2] + this.stk[this.ptr - 1]; this.ptr--;
        this.stk[this.ptr - 1] = -this.stk[this.ptr - 1];
        this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
        var t = this.dstk.get("textyalign");
        if (t === undefined) throw new Error("dict: textyalign: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = BWIPJS.psstring("above");
        if (this.stk[this.ptr - 2] instanceof BWIPJS.psstring)
            this.stk[this.ptr - 2] = this.stk[this.ptr - 2].toString() == this.stk[this.ptr - 1];
        else this.stk[this.ptr - 2] = this.stk[this.ptr - 2] == this.stk[this.ptr - 1];
        this.ptr--;
        this.stk[this.ptr++] = $f42;
        var t66 = this.stk[--this.ptr];
        if (this.stk[--this.ptr]) {
            if (t66.call(this) == -1) return -1;
        }
        var t = this.dstk.get("textyalign");
        if (t === undefined) throw new Error("dict: textyalign: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = BWIPJS.psstring("center");
        if (this.stk[this.ptr - 2] instanceof BWIPJS.psstring)
            this.stk[this.ptr - 2] = this.stk[this.ptr - 2].toString() == this.stk[this.ptr - 1];
        else this.stk[this.ptr - 2] = this.stk[this.ptr - 2] == this.stk[this.ptr - 1];
        this.ptr--;
        this.stk[this.ptr++] = $f43;
        var t67 = this.stk[--this.ptr];
        if (this.stk[--this.ptr]) {
            if (t67.call(this) == -1) return -1;
        }
        var t = this.dstk.get("textxpos");
        if (t === undefined) throw new Error("dict: textxpos: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = this.dstk.get("textypos");
        if (t === undefined) throw new Error("dict: textypos: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var y = this.stk[--this.ptr];
        this.moveto(this.stk[--this.ptr], y);
        var t = this.dstk.get("textgaps");
        if (t === undefined) throw new Error("dict: textgaps: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = 0;
        var t = this.dstk.get("tstr");
        if (t === undefined) throw new Error("dict: tstr: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.show(this.stk[this.ptr - 1], this.stk[this.ptr - 3], this.stk[this.ptr - 2]); this.ptr -= 3;
    }
    function $f45() {
        var t = this.dstk.get("textxalign");
        if (t === undefined) throw new Error("dict: textxalign: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = BWIPJS.psstring("unset");
        if (this.stk[this.ptr - 2] instanceof BWIPJS.psstring)
            this.stk[this.ptr - 2] = this.stk[this.ptr - 2].toString() == this.stk[this.ptr - 1];
        else this.stk[this.ptr - 2] = this.stk[this.ptr - 2] == this.stk[this.ptr - 1];
        this.ptr--;
        var t = this.dstk.get("textyalign");
        if (t === undefined) throw new Error("dict: textyalign: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = BWIPJS.psstring("unset");
        if (this.stk[this.ptr - 2] instanceof BWIPJS.psstring)
            this.stk[this.ptr - 2] = this.stk[this.ptr - 2].toString() == this.stk[this.ptr - 1];
        else this.stk[this.ptr - 2] = this.stk[this.ptr - 2] == this.stk[this.ptr - 1];
        this.ptr--;
        if (typeof (this.stk[this.ptr - 1]) == "boolean") this.stk[this.ptr - 2] = this.stk[this.ptr - 2] && this.stk[this.ptr - 1];
        else this.stk[this.ptr - 2] = this.stk[this.ptr - 2] & this.stk[this.ptr - 1];
        this.ptr--;
        var t = this.dstk.get("alttext");
        if (t === undefined) throw new Error("dict: alttext: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = BWIPJS.psstring("");
        if (this.stk[this.ptr - 2] instanceof BWIPJS.psstring)
            this.stk[this.ptr - 2] = this.stk[this.ptr - 2].toString() == this.stk[this.ptr - 1];
        else this.stk[this.ptr - 2] = this.stk[this.ptr - 2] == this.stk[this.ptr - 1];
        this.ptr--;
        if (typeof (this.stk[this.ptr - 1]) == "boolean") this.stk[this.ptr - 2] = this.stk[this.ptr - 2] && this.stk[this.ptr - 1];
        else this.stk[this.ptr - 2] = this.stk[this.ptr - 2] & this.stk[this.ptr - 1];
        this.ptr--;
        this.stk[this.ptr++] = $f26;
        this.stk[this.ptr++] = $f44;
        var t68 = this.stk[--this.ptr];
        var t69 = this.stk[--this.ptr];
        if (this.stk[--this.ptr]) {
            if (t69.call(this) == -1) return -1;
        } else {
            if (t68.call(this) == -1) return -1;
        }
    }
    function $f46() {
        this.newpath();
        var t = this.dstk.get("guardleftpos");
        if (t === undefined) throw new Error("dict: guardleftpos: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr - 1] = -this.stk[this.ptr - 1];
        var t = this.dstk.get("guardwidth");
        if (t === undefined) throw new Error("dict: guardwidth: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2] + this.stk[this.ptr - 1]; this.ptr--;
        var t = this.dstk.get("guardleftypos");
        if (t === undefined) throw new Error("dict: guardleftypos: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = this.dstk.get("guardwidth");
        if (t === undefined) throw new Error("dict: guardwidth: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = 2;
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2] / this.stk[this.ptr - 1]; this.ptr--;
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2] + this.stk[this.ptr - 1]; this.ptr--;
        var y = this.stk[--this.ptr];
        this.moveto(this.stk[--this.ptr], y);
        var t = this.dstk.get("guardwidth");
        if (t === undefined) throw new Error("dict: guardwidth: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr - 1] = -this.stk[this.ptr - 1];
        var t = this.dstk.get("guardheight");
        if (t === undefined) throw new Error("dict: guardheight: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = -2;
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2] / this.stk[this.ptr - 1]; this.ptr--;
        var y = this.stk[--this.ptr];
        this.rlineto(this.stk[--this.ptr], y);
        var t = this.dstk.get("guardwidth");
        if (t === undefined) throw new Error("dict: guardwidth: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = this.dstk.get("guardheight");
        if (t === undefined) throw new Error("dict: guardheight: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = -2;
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2] / this.stk[this.ptr - 1]; this.ptr--;
        var y = this.stk[--this.ptr];
        this.rlineto(this.stk[--this.ptr], y);
        this.stroke();
    }
    function $f47() {
        this.newpath();
        var t = this.dstk.get("guardrightpos");
        if (t === undefined) throw new Error("dict: guardrightpos: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = this.dstk.get("x");
        if (t === undefined) throw new Error("dict: x: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2] + this.stk[this.ptr - 1]; this.ptr--;
        var t = this.dstk.get("guardwidth");
        if (t === undefined) throw new Error("dict: guardwidth: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2] - this.stk[this.ptr - 1]; this.ptr--;
        var t = this.dstk.get("guardrightypos");
        if (t === undefined) throw new Error("dict: guardrightypos: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = this.dstk.get("guardheight");
        if (t === undefined) throw new Error("dict: guardheight: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = 2;
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2] / this.stk[this.ptr - 1]; this.ptr--;
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2] + this.stk[this.ptr - 1]; this.ptr--;
        var y = this.stk[--this.ptr];
        this.moveto(this.stk[--this.ptr], y);
        var t = this.dstk.get("guardwidth");
        if (t === undefined) throw new Error("dict: guardwidth: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = this.dstk.get("guardheight");
        if (t === undefined) throw new Error("dict: guardheight: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = -2;
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2] / this.stk[this.ptr - 1]; this.ptr--;
        var y = this.stk[--this.ptr];
        this.rlineto(this.stk[--this.ptr], y);
        var t = this.dstk.get("guardwidth");
        if (t === undefined) throw new Error("dict: guardwidth: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr - 1] = -this.stk[this.ptr - 1];
        var t = this.dstk.get("guardheight");
        if (t === undefined) throw new Error("dict: guardheight: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = -2;
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2] / this.stk[this.ptr - 1]; this.ptr--;
        var y = this.stk[--this.ptr];
        this.rlineto(this.stk[--this.ptr], y);
        this.stroke();
    }
    function $f48() {
        this.stk[this.ptr++] = 0.75;
        this.setlinewidth(this.stk[--this.ptr]);
        var t = this.dstk.get("guardleftpos");
        if (t === undefined) throw new Error("dict: guardleftpos: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = 0;
        if (this.stk[this.ptr - 2] instanceof BWIPJS.psstring)
            this.stk[this.ptr - 2] = this.stk[this.ptr - 2].toString() != this.stk[this.ptr - 1];
        else this.stk[this.ptr - 2] = this.stk[this.ptr - 2] != this.stk[this.ptr - 1];
        this.ptr--;
        this.stk[this.ptr++] = $f46;
        var t71 = this.stk[--this.ptr];
        if (this.stk[--this.ptr]) {
            if (t71.call(this) == -1) return -1;
        }
        var t = this.dstk.get("guardrightpos");
        if (t === undefined) throw new Error("dict: guardrightpos: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = 0;
        if (this.stk[this.ptr - 2] instanceof BWIPJS.psstring)
            this.stk[this.ptr - 2] = this.stk[this.ptr - 2].toString() != this.stk[this.ptr - 1];
        else this.stk[this.ptr - 2] = this.stk[this.ptr - 2] != this.stk[this.ptr - 1];
        this.ptr--;
        this.stk[this.ptr++] = $f47;
        var t72 = this.stk[--this.ptr];
        if (this.stk[--this.ptr]) {
            if (t72.call(this) == -1) return -1;
        }
    }
    this.stk[this.ptr++] = 20;
    this.stk[this.ptr - 1] = {};
    this.dict = this.stk[--this.ptr]; this.dstk.push(this.dict);
    this.stk[this.ptr++] = "args"; //ident
    var t = this.stk[this.ptr - 2]; this.stk[this.ptr - 2] = this.stk[this.ptr - 1]; this.stk[this.ptr - 1] = t;
    this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    this.stk[this.ptr++] = "sbs"; //ident
    this.stk[this.ptr++] = BWIPJS.psarray([]);
    this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    this.stk[this.ptr++] = "bhs"; //ident
    this.stk[this.ptr++] = BWIPJS.psarray([]);
    this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    this.stk[this.ptr++] = "bbs"; //ident
    this.stk[this.ptr++] = BWIPJS.psarray([]);
    this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    this.stk[this.ptr++] = "txt"; //ident
    this.stk[this.ptr++] = BWIPJS.psarray([]);
    this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    this.stk[this.ptr++] = "barcolor"; //ident
    this.stk[this.ptr++] = BWIPJS.psstring("unset");
    this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    this.stk[this.ptr++] = "includetext"; //ident
    this.stk[this.ptr++] = false;
    this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    this.stk[this.ptr++] = "textcolor"; //ident
    this.stk[this.ptr++] = BWIPJS.psstring("unset");
    this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    this.stk[this.ptr++] = "textxalign"; //ident
    this.stk[this.ptr++] = BWIPJS.psstring("unset");
    this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    this.stk[this.ptr++] = "textyalign"; //ident
    this.stk[this.ptr++] = BWIPJS.psstring("unset");
    this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    this.stk[this.ptr++] = "textfont"; //ident
    this.stk[this.ptr++] = BWIPJS.psstring("Courier");
    this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    this.stk[this.ptr++] = "textsize"; //ident
    this.stk[this.ptr++] = 10;
    this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    this.stk[this.ptr++] = "textxoffset"; //ident
    this.stk[this.ptr++] = 0;
    this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    this.stk[this.ptr++] = "textyoffset"; //ident
    this.stk[this.ptr++] = 0;
    this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    this.stk[this.ptr++] = "textgaps"; //ident
    this.stk[this.ptr++] = 0;
    this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    this.stk[this.ptr++] = "alttext"; //ident
    this.stk[this.ptr++] = BWIPJS.psstring("");
    this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    this.stk[this.ptr++] = "bordercolor"; //ident
    this.stk[this.ptr++] = BWIPJS.psstring("unset");
    this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    this.stk[this.ptr++] = "backgroundcolor"; //ident
    this.stk[this.ptr++] = BWIPJS.psstring("unset");
    this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    this.stk[this.ptr++] = "inkspread"; //ident
    this.stk[this.ptr++] = 0.15;
    this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    this.stk[this.ptr++] = "width"; //ident
    this.stk[this.ptr++] = 0;
    this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    this.stk[this.ptr++] = "barratio"; //ident
    this.stk[this.ptr++] = 1;
    this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    this.stk[this.ptr++] = "spaceratio"; //ident
    this.stk[this.ptr++] = 1;
    this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    this.stk[this.ptr++] = "showborder"; //ident
    this.stk[this.ptr++] = false;
    this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    this.stk[this.ptr++] = "borderleft"; //ident
    this.stk[this.ptr++] = 10;
    this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    this.stk[this.ptr++] = "borderright"; //ident
    this.stk[this.ptr++] = 10;
    this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    this.stk[this.ptr++] = "bordertop"; //ident
    this.stk[this.ptr++] = 1;
    this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    this.stk[this.ptr++] = "borderbottom"; //ident
    this.stk[this.ptr++] = 1;
    this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    this.stk[this.ptr++] = "borderwidth"; //ident
    this.stk[this.ptr++] = 0.5;
    this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    this.stk[this.ptr++] = "guardwhitespace"; //ident
    this.stk[this.ptr++] = false;
    this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    this.stk[this.ptr++] = "guardleftpos"; //ident
    this.stk[this.ptr++] = 0;
    this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    this.stk[this.ptr++] = "guardleftypos"; //ident
    this.stk[this.ptr++] = 0;
    this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    this.stk[this.ptr++] = "guardrightpos"; //ident
    this.stk[this.ptr++] = 0;
    this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    this.stk[this.ptr++] = "guardrightypos"; //ident
    this.stk[this.ptr++] = 0;
    this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    this.stk[this.ptr++] = "guardwidth"; //ident
    this.stk[this.ptr++] = 6;
    this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    this.stk[this.ptr++] = "guardheight"; //ident
    this.stk[this.ptr++] = 7;
    this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    var t = this.dstk.get("args");
    if (t === undefined) throw new Error("dict: args: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    this.stk[this.ptr++] = $f0;
    var t2 = this.stk[--this.ptr];
    var t1 = this.stk[--this.ptr];
    for (var t0 in t1) {
        if (t1 instanceof BWIPJS.psstring || t1 instanceof BWIPJS.psarray) {
            if (t0.charCodeAt(0) > 57) continue;
            this.stk[this.ptr++] = t1.get(t0);
        } else {
            this.stk[this.ptr++] = t0;
            this.stk[this.ptr++] = t1[t0];
        }
        if (t2.call(this) == -1) break;
    }
    var t = this.dstk.get("opt");
    if (t === undefined) throw new Error("dict: opt: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    this.stk[this.ptr++] = $f1;
    var t5 = this.stk[--this.ptr];
    var t4 = this.stk[--this.ptr];
    for (var t3 in t4) {
        if (t4 instanceof BWIPJS.psstring || t4 instanceof BWIPJS.psarray) {
            if (t3.charCodeAt(0) > 57) continue;
            this.stk[this.ptr++] = t4.get(t3);
        } else {
            this.stk[this.ptr++] = t3;
            this.stk[this.ptr++] = t4[t3];
        }
        if (t5.call(this) == -1) break;
    }
    this.stk[this.ptr++] = "barcolor"; //ident
    var t = this.dstk.get("barcolor");
    if (t === undefined) throw new Error("dict: barcolor: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    this.stk[this.ptr++] = "textcolor"; //ident
    var t = this.dstk.get("textcolor");
    if (t === undefined) throw new Error("dict: textcolor: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    this.stk[this.ptr++] = "textxalign"; //ident
    var t = this.dstk.get("textxalign");
    if (t === undefined) throw new Error("dict: textxalign: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    this.stk[this.ptr++] = "textyalign"; //ident
    var t = this.dstk.get("textyalign");
    if (t === undefined) throw new Error("dict: textyalign: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    this.stk[this.ptr++] = "textfont"; //ident
    var t = this.dstk.get("textfont");
    if (t === undefined) throw new Error("dict: textfont: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    this.stk[this.ptr++] = "textsize"; //ident
    var t = this.dstk.get("textsize");
    if (t === undefined) throw new Error("dict: textsize: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    this.stk[this.ptr - 1] = parseFloat(this.stk[this.ptr - 1]);
    this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    this.stk[this.ptr++] = "textxoffset"; //ident
    var t = this.dstk.get("textxoffset");
    if (t === undefined) throw new Error("dict: textxoffset: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    this.stk[this.ptr - 1] = parseFloat(this.stk[this.ptr - 1]);
    this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    this.stk[this.ptr++] = "textyoffset"; //ident
    var t = this.dstk.get("textyoffset");
    if (t === undefined) throw new Error("dict: textyoffset: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    this.stk[this.ptr - 1] = parseFloat(this.stk[this.ptr - 1]);
    this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    this.stk[this.ptr++] = "textgaps"; //ident
    var t = this.dstk.get("textgaps");
    if (t === undefined) throw new Error("dict: textgaps: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    this.stk[this.ptr - 1] = parseFloat(this.stk[this.ptr - 1]);
    this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    this.stk[this.ptr++] = "alttext"; //ident
    var t = this.dstk.get("alttext");
    if (t === undefined) throw new Error("dict: alttext: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    this.stk[this.ptr++] = "bordercolor"; //ident
    var t = this.dstk.get("bordercolor");
    if (t === undefined) throw new Error("dict: bordercolor: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    this.stk[this.ptr++] = "backgroundcolor"; //ident
    var t = this.dstk.get("backgroundcolor");
    if (t === undefined) throw new Error("dict: backgroundcolor: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    this.stk[this.ptr++] = "inkspread"; //ident
    var t = this.dstk.get("inkspread");
    if (t === undefined) throw new Error("dict: inkspread: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    this.stk[this.ptr - 1] = parseFloat(this.stk[this.ptr - 1]);
    this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    this.stk[this.ptr++] = "width"; //ident
    var t = this.dstk.get("width");
    if (t === undefined) throw new Error("dict: width: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    this.stk[this.ptr - 1] = parseFloat(this.stk[this.ptr - 1]);
    this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    this.stk[this.ptr++] = "barratio"; //ident
    var t = this.dstk.get("barratio");
    if (t === undefined) throw new Error("dict: barratio: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    this.stk[this.ptr - 1] = parseFloat(this.stk[this.ptr - 1]);
    this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    this.stk[this.ptr++] = "spaceratio"; //ident
    var t = this.dstk.get("spaceratio");
    if (t === undefined) throw new Error("dict: spaceratio: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    this.stk[this.ptr - 1] = parseFloat(this.stk[this.ptr - 1]);
    this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    this.stk[this.ptr++] = "borderleft"; //ident
    var t = this.dstk.get("borderleft");
    if (t === undefined) throw new Error("dict: borderleft: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    this.stk[this.ptr - 1] = parseFloat(this.stk[this.ptr - 1]);
    this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    this.stk[this.ptr++] = "borderright"; //ident
    var t = this.dstk.get("borderright");
    if (t === undefined) throw new Error("dict: borderright: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    this.stk[this.ptr - 1] = parseFloat(this.stk[this.ptr - 1]);
    this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    this.stk[this.ptr++] = "bordertop"; //ident
    var t = this.dstk.get("bordertop");
    if (t === undefined) throw new Error("dict: bordertop: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    this.stk[this.ptr - 1] = parseFloat(this.stk[this.ptr - 1]);
    this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    this.stk[this.ptr++] = "borderbottom"; //ident
    var t = this.dstk.get("borderbottom");
    if (t === undefined) throw new Error("dict: borderbottom: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    this.stk[this.ptr - 1] = parseFloat(this.stk[this.ptr - 1]);
    this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    this.stk[this.ptr++] = "borderwidth"; //ident
    var t = this.dstk.get("borderwidth");
    if (t === undefined) throw new Error("dict: borderwidth: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    this.stk[this.ptr - 1] = parseFloat(this.stk[this.ptr - 1]);
    this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    this.stk[this.ptr++] = "guardleftpos"; //ident
    var t = this.dstk.get("guardleftpos");
    if (t === undefined) throw new Error("dict: guardleftpos: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    this.stk[this.ptr - 1] = parseFloat(this.stk[this.ptr - 1]);
    this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    this.stk[this.ptr++] = "guardleftypos"; //ident
    var t = this.dstk.get("guardleftypos");
    if (t === undefined) throw new Error("dict: guardleftypos: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    this.stk[this.ptr - 1] = parseFloat(this.stk[this.ptr - 1]);
    this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    this.stk[this.ptr++] = "guardrightpos"; //ident
    var t = this.dstk.get("guardrightpos");
    if (t === undefined) throw new Error("dict: guardrightpos: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    this.stk[this.ptr - 1] = parseFloat(this.stk[this.ptr - 1]);
    this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    this.stk[this.ptr++] = "guardrightypos"; //ident
    var t = this.dstk.get("guardrightypos");
    if (t === undefined) throw new Error("dict: guardrightypos: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    this.stk[this.ptr - 1] = parseFloat(this.stk[this.ptr - 1]);
    this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    this.stk[this.ptr++] = "guardwidth"; //ident
    var t = this.dstk.get("guardwidth");
    if (t === undefined) throw new Error("dict: guardwidth: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    this.stk[this.ptr - 1] = parseFloat(this.stk[this.ptr - 1]);
    this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    this.stk[this.ptr++] = "guardheight"; //ident
    var t = this.dstk.get("guardheight");
    if (t === undefined) throw new Error("dict: guardheight: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    this.stk[this.ptr - 1] = parseFloat(this.stk[this.ptr - 1]);
    this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    this.stk[this.ptr++] = "bars"; //ident
    var t = this.dstk.get("sbs");
    if (t === undefined) throw new Error("dict: sbs: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    if (typeof (this.stk[this.ptr - 1].length) !== "number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr - 1]);
    this.stk[this.ptr - 1] = this.stk[this.ptr - 1].length;
    this.stk[this.ptr++] = 1;
    this.stk[this.ptr - 2] = this.stk[this.ptr - 2] + this.stk[this.ptr - 1]; this.ptr--;
    this.stk[this.ptr++] = 2;
    this.stk[this.ptr - 2] = Math.floor(this.stk[this.ptr - 2] / this.stk[this.ptr - 1]); this.ptr--;
    this.stk[this.ptr - 1] = BWIPJS.psarray(this.stk[this.ptr - 1]);
    this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    this.stk[this.ptr++] = "x"; //ident
    this.stk[this.ptr++] = 0;
    this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    this.stk[this.ptr++] = "maxh"; //ident
    this.stk[this.ptr++] = 0;
    this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    this.stk[this.ptr++] = 0;
    this.stk[this.ptr++] = 1;
    var t = this.dstk.get("sbs");
    if (t === undefined) throw new Error("dict: sbs: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    if (typeof (this.stk[this.ptr - 1].length) !== "number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr - 1]);
    this.stk[this.ptr - 1] = this.stk[this.ptr - 1].length;
    this.stk[this.ptr++] = 1;
    this.stk[this.ptr - 2] = this.stk[this.ptr - 2] + this.stk[this.ptr - 1]; this.ptr--;
    this.stk[this.ptr++] = 2;
    this.stk[this.ptr - 2] = Math.floor(this.stk[this.ptr - 2] / this.stk[this.ptr - 1]); this.ptr--;
    this.stk[this.ptr++] = 2;
    this.stk[this.ptr - 2] = this.stk[this.ptr - 2] * this.stk[this.ptr - 1]; this.ptr--;
    this.stk[this.ptr++] = 2;
    this.stk[this.ptr - 2] = this.stk[this.ptr - 2] - this.stk[this.ptr - 1]; this.ptr--;
    this.stk[this.ptr++] = null;


    this.gsave();

    var t = this.dstk.get("textcolor");
    if (t === undefined) throw new Error("dict: textcolor: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    this.stk[this.ptr++] = BWIPJS.psstring("unset");
    if (this.stk[this.ptr - 2] instanceof BWIPJS.psstring)
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2].toString() != this.stk[this.ptr - 1];
    else this.stk[this.ptr - 2] = this.stk[this.ptr - 2] != this.stk[this.ptr - 1];
    this.ptr--;
    this.stk[this.ptr++] = $f21;
    var t34 = this.stk[--this.ptr];
    if (this.stk[--this.ptr]) {
        if (t34.call(this) == -1) return -1;
    }
    var t = this.dstk.get("includetext");
    if (t === undefined) throw new Error("dict: includetext: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    this.stk[this.ptr++] = $f45;
    var t70 = this.stk[--this.ptr];
    if (this.stk[--this.ptr]) {
        if (t70.call(this) == -1) return -1;
    }
    var t = this.dstk.get("guardwhitespace");
    if (t === undefined) throw new Error("dict: guardwhitespace: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    this.stk[this.ptr++] = $f48;
    var t73 = this.stk[--this.ptr];
    if (this.stk[--this.ptr]) {
        if (t73.call(this) == -1) return -1;
    }
    this.grestore();
    this.dstk.pop(); this.dict = this.dstk[this.dstk.length - 1];
}
// END OF renlinear



// file: bwipp/code128.js
//
// This code was automatically generated from:
// Barcode Writer in Pure PostScript - Version 2013-01-25
//
// Copyright (c) 2011-2013 Mark Warren
// Copyright (c) 2004-2013 Terry Burton
//
// See the LICENSE file in the bwip.js root directory
// for the extended copyright notice.
// BEGIN code128

var BWIPJScode128 = function () {
    this.dict["renlinear"] = BWIPJSrenlinear;
    function $f0() {
        return -1;
    }
    function $f1() {
        var t = this.stk[this.ptr - 2]; this.stk[this.ptr - 2] = this.stk[this.ptr - 1]; this.stk[this.ptr - 1] = t;
        this.ptr--;
        var t = this.stk[this.ptr - 2]; this.stk[this.ptr - 2] = this.stk[this.ptr - 1]; this.stk[this.ptr - 1] = t;
        this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    }
    function $f2() {
        this.stk[this.ptr++] = true;
        this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    }
    function $f3() {
        var a = /^\s*([^\s]+)(\s+.*)?$/.exec(this.stk[this.ptr - 1]);
        if (a) {
            this.stk[this.ptr - 1] = BWIPJS.psstring(a[2] === undefined?"":a[2]);
            this.stk[this.ptr++] = BWIPJS.psstring(a[1]);
            this.stk[this.ptr++] = true;
        } else {
            this.stk[this.ptr - 1] = false;
        }
        this.stk[this.ptr++] = false;
        if (this.stk[this.ptr - 2] instanceof BWIPJS.psstring)
            this.stk[this.ptr - 2] = this.stk[this.ptr - 2].toString() == this.stk[this.ptr - 1];
        else this.stk[this.ptr - 2] = this.stk[this.ptr - 2] == this.stk[this.ptr - 1];
        this.ptr--;
        this.stk[this.ptr++] = $f0;
        var t0 = this.stk[--this.ptr];
        if (this.stk[--this.ptr]) {
            if (t0.call(this) == -1) return -1;
        }
        this.stk[this.ptr] = this.stk[this.ptr - 1]; this.ptr++;
        if (typeof (this.stk[this.ptr - 1].length) !== "number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr - 1]);
        this.stk[this.ptr - 1] = this.stk[this.ptr - 1].length;
        this.stk[this.ptr - 1] = BWIPJS.psstring(this.stk[this.ptr - 1]);
        var t = this.stk[this.ptr - 2].toString();
        this.stk[this.ptr - 1].assign(0, t);
        this.stk[this.ptr - 2] = this.stk[this.ptr - 1].subset(0, t.length);
        this.ptr--;
        this.stk[this.ptr++] = BWIPJS.psstring("=");
        var h = this.stk[this.ptr - 2];
        var t = h.indexOf(this.stk[this.ptr - 1]);
        if (t == -1) {
            this.stk[this.ptr - 1] = false;
        } else {
            this.stk[this.ptr - 2] = h.subset(t + this.stk[this.ptr - 1].length);
            this.stk[this.ptr - 1] = h.subset(t, this.stk[this.ptr - 1].length);
            this.stk[this.ptr++] = h.subset(0, t);
            this.stk[this.ptr++] = true;
        }
        this.stk[this.ptr++] = true;
        if (this.stk[this.ptr - 2] instanceof BWIPJS.psstring)
            this.stk[this.ptr - 2] = this.stk[this.ptr - 2].toString() == this.stk[this.ptr - 1];
        else this.stk[this.ptr - 2] = this.stk[this.ptr - 2] == this.stk[this.ptr - 1];
        this.ptr--;
        this.stk[this.ptr++] = $f1;
        this.stk[this.ptr++] = $f2;
        var t1 = this.stk[--this.ptr];
        var t2 = this.stk[--this.ptr];
        if (this.stk[--this.ptr]) {
            if (t2.call(this) == -1) return -1;
        } else {
            if (t1.call(this) == -1) return -1;
        }
    }
    function $f4() {
        this.stk[this.ptr++] = 1;
        this.stk[this.ptr - 1] = {};
        this.dict = this.stk[--this.ptr]; this.dstk.push(this.dict);
        var t = this.dstk.get("options");
        if (t === undefined) throw new Error("dict: options: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = $f3;
        var t3 = this.stk[--this.ptr];
        while (true) {
            if (t3.call(this) == -1) break;
        }
        this.stk[this.ptr++] = this.dict;
        this.dstk.pop(); this.dict = this.dstk[this.dstk.length - 1];
        this.stk[this.ptr++] = "options"; //ident
        var t = this.stk[this.ptr - 2]; this.stk[this.ptr - 2] = this.stk[this.ptr - 1]; this.stk[this.ptr - 1] = t;
        this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    }
    function $f5() {
        this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    }
    function $f6() {
        this.stk[this.ptr] = this.stk[this.ptr - 1]; this.ptr++;
        var t = this.dstk.get("msg");
        if (t === undefined) throw new Error("dict: msg: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = this.stk[this.ptr - 2]; this.stk[this.ptr - 2] = this.stk[this.ptr - 1]; this.stk[this.ptr - 1] = t;
        var t = this.dstk.get("j");
        if (t === undefined) throw new Error("dict: j: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = this.stk[this.ptr - 2]; this.stk[this.ptr - 2] = this.stk[this.ptr - 1]; this.stk[this.ptr - 1] = t;
        this.stk[this.ptr - 3].assign(this.stk[this.ptr - 2], this.stk[this.ptr - 1]); this.ptr -= 3;
        if (typeof (this.stk[this.ptr - 1].length) !== "number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr - 1]);
        this.stk[this.ptr - 1] = this.stk[this.ptr - 1].length;
        var t = this.dstk.get("j");
        if (t === undefined) throw new Error("dict: j: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2] + this.stk[this.ptr - 1]; this.ptr--;
        this.stk[this.ptr++] = 1;
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2] + this.stk[this.ptr - 1]; this.ptr--;
        this.stk[this.ptr++] = "j"; //ident
        var t = this.stk[this.ptr - 2]; this.stk[this.ptr - 2] = this.stk[this.ptr - 1]; this.stk[this.ptr - 1] = t;
        this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
        this.ptr--;
        this.stk[this.ptr] = this.stk[this.ptr - 1]; this.ptr++;
        this.stk[this.ptr++] = 0;
        this.stk[this.ptr++] = 3;
        this.stk[this.ptr - 3] = this.stk[this.ptr - 3].subset(this.stk[this.ptr - 2], this.stk[this.ptr - 1]); this.ptr -= 2;
        this.stk[this.ptr - 1] = parseInt(this.stk[this.ptr - 1], 10);
        var t = this.dstk.get("msg");
        if (t === undefined) throw new Error("dict: msg: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = this.stk[this.ptr - 2]; this.stk[this.ptr - 2] = this.stk[this.ptr - 1]; this.stk[this.ptr - 1] = t;
        var t = this.dstk.get("j");
        if (t === undefined) throw new Error("dict: j: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = 1;
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2] - this.stk[this.ptr - 1]; this.ptr--;
        var t = this.stk[this.ptr - 2]; this.stk[this.ptr - 2] = this.stk[this.ptr - 1]; this.stk[this.ptr - 1] = t;
        if (this.stk[this.ptr - 3] instanceof BWIPJS.psstring || this.stk[this.ptr - 3] instanceof BWIPJS.psarray)
            this.stk[this.ptr - 3].set(this.stk[this.ptr - 2], this.stk[this.ptr - 1]);
        else this.stk[this.ptr - 3][this.stk[this.ptr - 2].toString()] = this.stk[this.ptr - 1];
        this.ptr -= 3;
        this.stk[this.ptr] = this.stk[this.ptr - 1]; this.ptr++;
        if (typeof (this.stk[this.ptr - 1].length) !== "number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr - 1]);
        this.stk[this.ptr - 1] = this.stk[this.ptr - 1].length;
        this.stk[this.ptr++] = 3;
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2] - this.stk[this.ptr - 1]; this.ptr--;
        this.stk[this.ptr++] = 3;
        var t = this.stk[this.ptr - 2]; this.stk[this.ptr - 2] = this.stk[this.ptr - 1]; this.stk[this.ptr - 1] = t;
        this.stk[this.ptr - 3] = this.stk[this.ptr - 3].subset(this.stk[this.ptr - 2], this.stk[this.ptr - 1]); this.ptr -= 2;
    }
    function $f7() {
        this.stk[this.ptr] = this.stk[this.ptr - 1]; this.ptr++;
        var t = this.dstk.get("msg");
        if (t === undefined) throw new Error("dict: msg: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = this.stk[this.ptr - 2]; this.stk[this.ptr - 2] = this.stk[this.ptr - 1]; this.stk[this.ptr - 1] = t;
        var t = this.dstk.get("j");
        if (t === undefined) throw new Error("dict: j: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = this.stk[this.ptr - 2]; this.stk[this.ptr - 2] = this.stk[this.ptr - 1]; this.stk[this.ptr - 1] = t;
        this.stk[this.ptr - 3].assign(this.stk[this.ptr - 2], this.stk[this.ptr - 1]); this.ptr -= 3;
        if (typeof (this.stk[this.ptr - 1].length) !== "number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr - 1]);
        this.stk[this.ptr - 1] = this.stk[this.ptr - 1].length;
        var t = this.dstk.get("j");
        if (t === undefined) throw new Error("dict: j: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2] + this.stk[this.ptr - 1]; this.ptr--;
        this.stk[this.ptr++] = "j"; //ident
        var t = this.stk[this.ptr - 2]; this.stk[this.ptr - 2] = this.stk[this.ptr - 1]; this.stk[this.ptr - 1] = t;
        this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
        this.stk[this.ptr++] = "barcode"; //ident
        var t = this.dstk.get("msg");
        if (t === undefined) throw new Error("dict: msg: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = 0;
        var t = this.dstk.get("j");
        if (t === undefined) throw new Error("dict: j: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr - 3] = this.stk[this.ptr - 3].subset(this.stk[this.ptr - 2], this.stk[this.ptr - 1]); this.ptr -= 2;
        this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
        return -1;
    }
    function $f8() {
        this.stk[this.ptr++] = BWIPJS.psstring("^");
        var h = this.stk[this.ptr - 2];
        var t = h.indexOf(this.stk[this.ptr - 1]);
        if (t == -1) {
            this.stk[this.ptr - 1] = false;
        } else {
            this.stk[this.ptr - 2] = h.subset(t + this.stk[this.ptr - 1].length);
            this.stk[this.ptr - 1] = h.subset(t, this.stk[this.ptr - 1].length);
            this.stk[this.ptr++] = h.subset(0, t);
            this.stk[this.ptr++] = true;
        }
        this.stk[this.ptr++] = $f6;
        this.stk[this.ptr++] = $f7;
        var t8 = this.stk[--this.ptr];
        var t9 = this.stk[--this.ptr];
        if (this.stk[--this.ptr]) {
            if (t9.call(this) == -1) return -1;
        } else {
            if (t8.call(this) == -1) return -1;
        }
    }
    function $f9() {
        this.stk[this.ptr++] = "msg"; //ident
        var t = this.dstk.get("barcode");
        if (t === undefined) throw new Error("dict: barcode: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        if (typeof (this.stk[this.ptr - 1].length) !== "number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr - 1]);
        this.stk[this.ptr - 1] = this.stk[this.ptr - 1].length;
        this.stk[this.ptr - 1] = BWIPJS.psstring(this.stk[this.ptr - 1]);
        this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
        this.stk[this.ptr++] = "j"; //ident
        this.stk[this.ptr++] = 0;
        this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
        var t = this.dstk.get("barcode");
        if (t === undefined) throw new Error("dict: barcode: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = $f8;
        var t10 = this.stk[--this.ptr];
        while (true) {
            if (t10.call(this) == -1) break;
        }
    }
    function $f10() {
        this.stk[this.ptr++] = 0;
        if (this.stk[this.ptr - 2] instanceof BWIPJS.psstring || this.stk[this.ptr - 2] instanceof BWIPJS.psarray)
            this.stk[this.ptr - 2] = this.stk[this.ptr - 2].get(this.stk[this.ptr - 1]);
        else this.stk[this.ptr - 2] = this.stk[this.ptr - 2][this.stk[this.ptr - 1].toString()];
        this.ptr--;
    }
    function $f11() {
        this.stk[this.ptr++] = "j"; //ident
        var t = this.stk[this.ptr - 2]; this.stk[this.ptr - 2] = this.stk[this.ptr - 1]; this.stk[this.ptr - 1] = t;
        this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
        var t = this.dstk.get("encs");
        if (t === undefined) throw new Error("dict: encs: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = this.dstk.get("j");
        if (t === undefined) throw new Error("dict: j: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        if (this.stk[this.ptr - 2] instanceof BWIPJS.psstring || this.stk[this.ptr - 2] instanceof BWIPJS.psarray)
            this.stk[this.ptr - 2] = this.stk[this.ptr - 2].get(this.stk[this.ptr - 1]);
        else this.stk[this.ptr - 2] = this.stk[this.ptr - 2][this.stk[this.ptr - 1].toString()];
        this.ptr--;
        this.stk[this.ptr] = this.stk[this.ptr - 1]; this.ptr++;
        this.stk[this.ptr - 1] = BWIPJS.pstype(this.stk[this.ptr - 1]);
        this.stk[this.ptr++] = "stringtype"; //ident
        if (this.stk[this.ptr - 2] instanceof BWIPJS.psstring)
            this.stk[this.ptr - 2] = this.stk[this.ptr - 2].toString() == this.stk[this.ptr - 1];
        else this.stk[this.ptr - 2] = this.stk[this.ptr - 2] == this.stk[this.ptr - 1];
        this.ptr--;
        this.stk[this.ptr++] = $f10;
        var t12 = this.stk[--this.ptr];
        if (this.stk[--this.ptr]) {
            if (t12.call(this) == -1) return -1;
        }
        var t = this.dstk.get("charvals");
        if (t === undefined) throw new Error("dict: charvals: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = this.dstk.get("j");
        if (t === undefined) throw new Error("dict: j: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        if (this.stk[this.ptr - 2] instanceof BWIPJS.psstring || this.stk[this.ptr - 2] instanceof BWIPJS.psarray)
            this.stk[this.ptr - 2] = this.stk[this.ptr - 2].get(this.stk[this.ptr - 1]);
        else this.stk[this.ptr - 2] = this.stk[this.ptr - 2][this.stk[this.ptr - 1].toString()];
        this.ptr--;
        var t = this.stk[this.ptr - 2]; this.stk[this.ptr - 2] = this.stk[this.ptr - 1]; this.stk[this.ptr - 1] = t;
        var t = this.dstk.get("i");
        if (t === undefined) throw new Error("dict: i: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        if (this.stk[this.ptr - 3] instanceof BWIPJS.psstring || this.stk[this.ptr - 3] instanceof BWIPJS.psarray)
            this.stk[this.ptr - 3].set(this.stk[this.ptr - 2], this.stk[this.ptr - 1]);
        else this.stk[this.ptr - 3][this.stk[this.ptr - 2].toString()] = this.stk[this.ptr - 1];
        this.ptr -= 3;
    }
    function $f12() {
        this.stk[this.ptr++] = "i"; //ident
        var t = this.stk[this.ptr - 2]; this.stk[this.ptr - 2] = this.stk[this.ptr - 1]; this.stk[this.ptr - 1] = t;
        this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
        this.stk[this.ptr++] = "encs"; //ident
        var t = this.dstk.get("charmaps");
        if (t === undefined) throw new Error("dict: charmaps: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = this.dstk.get("i");
        if (t === undefined) throw new Error("dict: i: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        if (this.stk[this.ptr - 2] instanceof BWIPJS.psstring || this.stk[this.ptr - 2] instanceof BWIPJS.psarray)
            this.stk[this.ptr - 2] = this.stk[this.ptr - 2].get(this.stk[this.ptr - 1]);
        else this.stk[this.ptr - 2] = this.stk[this.ptr - 2][this.stk[this.ptr - 1].toString()];
        this.ptr--;
        this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
        this.stk[this.ptr++] = 0;
        this.stk[this.ptr++] = 1;
        this.stk[this.ptr++] = 2;
        this.stk[this.ptr++] = $f11;
        var t17 = this.stk[--this.ptr];
        var t15 = this.stk[--this.ptr];
        var t14 = this.stk[--this.ptr];
        var t13 = this.stk[--this.ptr];
        for (var t16 = t13; t14 < 0 ? t16 >= t15 : t16 <= t15; t16 += t14) {
            this.stk[this.ptr++] = t16;
            if (t17.call(this) == -1) break;
        }
    }
    function $f13() {
        this.stk[this.ptr++] = "encoding"; //ident
        this.stk[this.ptr++] = BWIPJS.psstring("raw");
        this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    }
    function $f14() {
        return -1;
    }
    function $f15() {
        var t = this.dstk.get("i");
        if (t === undefined) throw new Error("dict: i: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = this.dstk.get("barlen");
        if (t === undefined) throw new Error("dict: barlen: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        if (this.stk[this.ptr - 2] instanceof BWIPJS.psstring)
            this.stk[this.ptr - 2] = this.stk[this.ptr - 2].toString() == this.stk[this.ptr - 1];
        else this.stk[this.ptr - 2] = this.stk[this.ptr - 2] == this.stk[this.ptr - 1];
        this.ptr--;
        this.stk[this.ptr++] = $f14;
        var t24 = this.stk[--this.ptr];
        if (this.stk[--this.ptr]) {
            if (t24.call(this) == -1) return -1;
        }
        this.stk[this.ptr++] = "cw"; //ident
        var t = this.dstk.get("barcode");
        if (t === undefined) throw new Error("dict: barcode: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = this.dstk.get("i");
        if (t === undefined) throw new Error("dict: i: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = 1;
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2] + this.stk[this.ptr - 1]; this.ptr--;
        this.stk[this.ptr++] = 3;
        this.stk[this.ptr - 3] = this.stk[this.ptr - 3].subset(this.stk[this.ptr - 2], this.stk[this.ptr - 1]); this.ptr -= 2;
        this.stk[this.ptr - 1] = parseInt(this.stk[this.ptr - 1], 10);
        this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
        var t = this.dstk.get("cws");
        if (t === undefined) throw new Error("dict: cws: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = this.dstk.get("j");
        if (t === undefined) throw new Error("dict: j: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = this.dstk.get("cw");
        if (t === undefined) throw new Error("dict: cw: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        if (this.stk[this.ptr - 3] instanceof BWIPJS.psstring || this.stk[this.ptr - 3] instanceof BWIPJS.psarray)
            this.stk[this.ptr - 3].set(this.stk[this.ptr - 2], this.stk[this.ptr - 1]);
        else this.stk[this.ptr - 3][this.stk[this.ptr - 2].toString()] = this.stk[this.ptr - 1];
        this.ptr -= 3;
        this.stk[this.ptr++] = "i"; //ident
        var t = this.dstk.get("i");
        if (t === undefined) throw new Error("dict: i: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = 4;
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2] + this.stk[this.ptr - 1]; this.ptr--;
        this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
        this.stk[this.ptr++] = "j"; //ident
        var t = this.dstk.get("j");
        if (t === undefined) throw new Error("dict: j: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = 1;
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2] + this.stk[this.ptr - 1]; this.ptr--;
        this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    }
    function $f16() {
        this.stk[this.ptr++] = "cws"; //ident
        var t = this.dstk.get("barlen");
        if (t === undefined) throw new Error("dict: barlen: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr - 1] = BWIPJS.psarray(this.stk[this.ptr - 1]);
        this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
        this.stk[this.ptr++] = "i"; //ident
        this.stk[this.ptr++] = 0;
        this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
        this.stk[this.ptr++] = "j"; //ident
        this.stk[this.ptr++] = 0;
        this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
        this.stk[this.ptr++] = $f15;
        var t25 = this.stk[--this.ptr];
        while (true) {
            if (t25.call(this) == -1) break;
        }
        this.stk[this.ptr++] = "cws"; //ident
        var t = this.dstk.get("cws");
        if (t === undefined) throw new Error("dict: cws: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = 0;
        var t = this.dstk.get("j");
        if (t === undefined) throw new Error("dict: j: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr - 3] = this.stk[this.ptr - 3].subset(this.stk[this.ptr - 2], this.stk[this.ptr - 1]); this.ptr -= 2;
        this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
        this.stk[this.ptr++] = "text"; //ident
        this.stk[this.ptr++] = BWIPJS.psstring("");
        this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    }
    function $f17() {
        return -1;
    }
    function $f18() {
        this.stk[this.ptr++] = "char"; //ident
        var t = this.dstk.get("fncvals");
        if (t === undefined) throw new Error("dict: fncvals: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = this.dstk.get("barcode");
        if (t === undefined) throw new Error("dict: barcode: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = this.dstk.get("i");
        if (t === undefined) throw new Error("dict: i: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = 1;
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2] + this.stk[this.ptr - 1]; this.ptr--;
        this.stk[this.ptr++] = 4;
        this.stk[this.ptr - 3] = this.stk[this.ptr - 3].subset(this.stk[this.ptr - 2], this.stk[this.ptr - 1]); this.ptr -= 2;
        if (this.stk[this.ptr - 2] instanceof BWIPJS.psstring || this.stk[this.ptr - 2] instanceof BWIPJS.psarray)
            this.stk[this.ptr - 2] = this.stk[this.ptr - 2].get(this.stk[this.ptr - 1]);
        else this.stk[this.ptr - 2] = this.stk[this.ptr - 2][this.stk[this.ptr - 1].toString()];
        this.ptr--;
        this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
        var t = this.dstk.get("text");
        if (t === undefined) throw new Error("dict: text: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = this.dstk.get("j");
        if (t === undefined) throw new Error("dict: j: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = BWIPJS.psstring(" ");
        this.stk[this.ptr - 3].assign(this.stk[this.ptr - 2], this.stk[this.ptr - 1]); this.ptr -= 3;
        this.stk[this.ptr++] = "i"; //ident
        var t = this.dstk.get("i");
        if (t === undefined) throw new Error("dict: i: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = 4;
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2] + this.stk[this.ptr - 1]; this.ptr--;
        this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    }
    function $f19() {
        this.stk[this.ptr++] = "i"; //ident
        var t = this.dstk.get("i");
        if (t === undefined) throw new Error("dict: i: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = 1;
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2] + this.stk[this.ptr - 1]; this.ptr--;
        this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    }
    function $f20() {
        var t = this.dstk.get("barcode");
        if (t === undefined) throw new Error("dict: barcode: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = this.dstk.get("i");
        if (t === undefined) throw new Error("dict: i: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = 1;
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2] + this.stk[this.ptr - 1]; this.ptr--;
        if (this.stk[this.ptr - 2] instanceof BWIPJS.psstring || this.stk[this.ptr - 2] instanceof BWIPJS.psarray)
            this.stk[this.ptr - 2] = this.stk[this.ptr - 2].get(this.stk[this.ptr - 1]);
        else this.stk[this.ptr - 2] = this.stk[this.ptr - 2][this.stk[this.ptr - 1].toString()];
        this.ptr--;
        this.stk[this.ptr++] = 94;
        if (this.stk[this.ptr - 2] instanceof BWIPJS.psstring)
            this.stk[this.ptr - 2] = this.stk[this.ptr - 2].toString() != this.stk[this.ptr - 1];
        else this.stk[this.ptr - 2] = this.stk[this.ptr - 2] != this.stk[this.ptr - 1];
        this.ptr--;
        this.stk[this.ptr++] = $f18;
        this.stk[this.ptr++] = $f19;
        var t28 = this.stk[--this.ptr];
        var t29 = this.stk[--this.ptr];
        if (this.stk[--this.ptr]) {
            if (t29.call(this) == -1) return -1;
        } else {
            if (t28.call(this) == -1) return -1;
        }
    }
    function $f21() {
        var t = this.dstk.get("i");
        if (t === undefined) throw new Error("dict: i: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = this.dstk.get("barlen");
        if (t === undefined) throw new Error("dict: barlen: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        if (this.stk[this.ptr - 2] instanceof BWIPJS.psstring)
            this.stk[this.ptr - 2] = this.stk[this.ptr - 2].toString() == this.stk[this.ptr - 1];
        else this.stk[this.ptr - 2] = this.stk[this.ptr - 2] == this.stk[this.ptr - 1];
        this.ptr--;
        this.stk[this.ptr++] = $f17;
        var t27 = this.stk[--this.ptr];
        if (this.stk[--this.ptr]) {
            if (t27.call(this) == -1) return -1;
        }
        this.stk[this.ptr++] = "char"; //ident
        var t = this.dstk.get("barcode");
        if (t === undefined) throw new Error("dict: barcode: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = this.dstk.get("i");
        if (t === undefined) throw new Error("dict: i: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        if (this.stk[this.ptr - 2] instanceof BWIPJS.psstring || this.stk[this.ptr - 2] instanceof BWIPJS.psarray)
            this.stk[this.ptr - 2] = this.stk[this.ptr - 2].get(this.stk[this.ptr - 1]);
        else this.stk[this.ptr - 2] = this.stk[this.ptr - 2][this.stk[this.ptr - 1].toString()];
        this.ptr--;
        this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
        var t = this.dstk.get("text");
        if (t === undefined) throw new Error("dict: text: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = this.dstk.get("j");
        if (t === undefined) throw new Error("dict: j: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = this.dstk.get("char");
        if (t === undefined) throw new Error("dict: char: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        if (this.stk[this.ptr - 3] instanceof BWIPJS.psstring || this.stk[this.ptr - 3] instanceof BWIPJS.psarray)
            this.stk[this.ptr - 3].set(this.stk[this.ptr - 2], this.stk[this.ptr - 1]);
        else this.stk[this.ptr - 3][this.stk[this.ptr - 2].toString()] = this.stk[this.ptr - 1];
        this.ptr -= 3;
        var t = this.dstk.get("parsefnc");
        if (t === undefined) throw new Error("dict: parsefnc: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = this.dstk.get("char");
        if (t === undefined) throw new Error("dict: char: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = 94;
        if (this.stk[this.ptr - 2] instanceof BWIPJS.psstring)
            this.stk[this.ptr - 2] = this.stk[this.ptr - 2].toString() == this.stk[this.ptr - 1];
        else this.stk[this.ptr - 2] = this.stk[this.ptr - 2] == this.stk[this.ptr - 1];
        this.ptr--;
        if (typeof (this.stk[this.ptr - 1]) == "boolean") this.stk[this.ptr - 2] = this.stk[this.ptr - 2] && this.stk[this.ptr - 1];
        else this.stk[this.ptr - 2] = this.stk[this.ptr - 2] & this.stk[this.ptr - 1];
        this.ptr--;
        var t = this.dstk.get("i");
        if (t === undefined) throw new Error("dict: i: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = this.dstk.get("barlen");
        if (t === undefined) throw new Error("dict: barlen: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = 4;
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2] - this.stk[this.ptr - 1]; this.ptr--;
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2] < this.stk[this.ptr - 1]; this.ptr--;
        if (typeof (this.stk[this.ptr - 1]) == "boolean") this.stk[this.ptr - 2] = this.stk[this.ptr - 2] && this.stk[this.ptr - 1];
        else this.stk[this.ptr - 2] = this.stk[this.ptr - 2] & this.stk[this.ptr - 1];
        this.ptr--;
        this.stk[this.ptr++] = $f20;
        var t30 = this.stk[--this.ptr];
        if (this.stk[--this.ptr]) {
            if (t30.call(this) == -1) return -1;
        }
        var t = this.dstk.get("msg");
        if (t === undefined) throw new Error("dict: msg: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = this.dstk.get("j");
        if (t === undefined) throw new Error("dict: j: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = this.dstk.get("char");
        if (t === undefined) throw new Error("dict: char: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        if (this.stk[this.ptr - 3] instanceof BWIPJS.psstring || this.stk[this.ptr - 3] instanceof BWIPJS.psarray)
            this.stk[this.ptr - 3].set(this.stk[this.ptr - 2], this.stk[this.ptr - 1]);
        else this.stk[this.ptr - 3][this.stk[this.ptr - 2].toString()] = this.stk[this.ptr - 1];
        this.ptr -= 3;
        this.stk[this.ptr++] = "i"; //ident
        var t = this.dstk.get("i");
        if (t === undefined) throw new Error("dict: i: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = 1;
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2] + this.stk[this.ptr - 1]; this.ptr--;
        this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
        this.stk[this.ptr++] = "j"; //ident
        var t = this.dstk.get("j");
        if (t === undefined) throw new Error("dict: j: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = 1;
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2] + this.stk[this.ptr - 1]; this.ptr--;
        this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    }
    function $f22() {
        return -1;
    }
    function $f23() {
        this.ptr--;
        return -1;
    }
    function $f24() {
        this.stk[this.ptr++] = "s"; //ident
        var t = this.dstk.get("s");
        if (t === undefined) throw new Error("dict: s: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = 1;
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2] + this.stk[this.ptr - 1]; this.ptr--;
        this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    }
    function $f25() {
        return -1;
    }
    function $f26() {
        var t = this.dstk.get("s");
        if (t === undefined) throw new Error("dict: s: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = 2;
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2] % this.stk[this.ptr - 1]; this.ptr--;
        this.stk[this.ptr++] = 0;
        if (this.stk[this.ptr - 2] instanceof BWIPJS.psstring)
            this.stk[this.ptr - 2] = this.stk[this.ptr - 2].toString() == this.stk[this.ptr - 1];
        else this.stk[this.ptr - 2] = this.stk[this.ptr - 2] == this.stk[this.ptr - 1];
        this.ptr--;
        this.stk[this.ptr++] = $f24;
        this.stk[this.ptr++] = $f25;
        var t34 = this.stk[--this.ptr];
        var t35 = this.stk[--this.ptr];
        if (this.stk[--this.ptr]) {
            if (t35.call(this) == -1) return -1;
        } else {
            if (t34.call(this) == -1) return -1;
        }
    }
    function $f27() {
        var t = this.dstk.get("p");
        if (t === undefined) throw new Error("dict: p: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = this.dstk.get("msglen");
        if (t === undefined) throw new Error("dict: msglen: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2] >= this.stk[this.ptr - 1]; this.ptr--;
        this.stk[this.ptr++] = $f22;
        var t32 = this.stk[--this.ptr];
        if (this.stk[--this.ptr]) {
            if (t32.call(this) == -1) return -1;
        }
        var t = this.dstk.get("msg");
        if (t === undefined) throw new Error("dict: msg: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = this.dstk.get("p");
        if (t === undefined) throw new Error("dict: p: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        if (this.stk[this.ptr - 2] instanceof BWIPJS.psstring || this.stk[this.ptr - 2] instanceof BWIPJS.psarray)
            this.stk[this.ptr - 2] = this.stk[this.ptr - 2].get(this.stk[this.ptr - 1]);
        else this.stk[this.ptr - 2] = this.stk[this.ptr - 2][this.stk[this.ptr - 1].toString()];
        this.ptr--;
        this.stk[this.ptr] = this.stk[this.ptr - 1]; this.ptr++;
        var t = this.dstk.get("setc");
        if (t === undefined) throw new Error("dict: setc: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = this.stk[this.ptr - 2]; this.stk[this.ptr - 2] = this.stk[this.ptr - 1]; this.stk[this.ptr - 1] = t;
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2][this.stk[this.ptr - 1]] !== undefined; this.ptr--;
        if (typeof (this.stk[this.ptr - 1]) == "boolean") this.stk[this.ptr - 1] = !this.stk[this.ptr - 1];
        else this.stk[this.ptr - 1] = ~this.stk[this.ptr - 1];
        this.stk[this.ptr++] = $f23;
        var t33 = this.stk[--this.ptr];
        if (this.stk[--this.ptr]) {
            if (t33.call(this) == -1) return -1;
        }
        var t = this.dstk.get("fn1");
        if (t === undefined) throw new Error("dict: fn1: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        if (this.stk[this.ptr - 2] instanceof BWIPJS.psstring)
            this.stk[this.ptr - 2] = this.stk[this.ptr - 2].toString() == this.stk[this.ptr - 1];
        else this.stk[this.ptr - 2] = this.stk[this.ptr - 2] == this.stk[this.ptr - 1];
        this.ptr--;
        this.stk[this.ptr++] = $f26;
        var t36 = this.stk[--this.ptr];
        if (this.stk[--this.ptr]) {
            if (t36.call(this) == -1) return -1;
        }
        this.stk[this.ptr++] = "n"; //ident
        var t = this.dstk.get("n");
        if (t === undefined) throw new Error("dict: n: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = 1;
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2] + this.stk[this.ptr - 1]; this.ptr--;
        this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
        this.stk[this.ptr++] = "s"; //ident
        var t = this.dstk.get("s");
        if (t === undefined) throw new Error("dict: s: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = 1;
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2] + this.stk[this.ptr - 1]; this.ptr--;
        this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
        this.stk[this.ptr++] = "p"; //ident
        var t = this.dstk.get("p");
        if (t === undefined) throw new Error("dict: p: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = 1;
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2] + this.stk[this.ptr - 1]; this.ptr--;
        this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    }
    function $f28() {
        this.stk[this.ptr++] = "n"; //ident
        this.stk[this.ptr++] = 0;
        this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
        this.stk[this.ptr++] = "s"; //ident
        this.stk[this.ptr++] = 0;
        this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
        this.stk[this.ptr++] = "p"; //ident
        var t = this.stk[this.ptr - 2]; this.stk[this.ptr - 2] = this.stk[this.ptr - 1]; this.stk[this.ptr - 1] = t;
        this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
        this.stk[this.ptr++] = $f27;
        var t37 = this.stk[--this.ptr];
        while (true) {
            if (t37.call(this) == -1) break;
        }
        var t = this.dstk.get("n");
        if (t === undefined) throw new Error("dict: n: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = this.dstk.get("s");
        if (t === undefined) throw new Error("dict: s: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    }
    function $f29() {
        var t = this.dstk.get("seta");
        if (t === undefined) throw new Error("dict: seta: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = this.stk[this.ptr - 2]; this.stk[this.ptr - 2] = this.stk[this.ptr - 1]; this.stk[this.ptr - 1] = t;
        if (this.stk[this.ptr - 2] instanceof BWIPJS.psstring || this.stk[this.ptr - 2] instanceof BWIPJS.psarray)
            this.stk[this.ptr - 2] = this.stk[this.ptr - 2].get(this.stk[this.ptr - 1]);
        else this.stk[this.ptr - 2] = this.stk[this.ptr - 2][this.stk[this.ptr - 1].toString()];
        this.ptr--;
        var t = this.dstk.get("cws");
        if (t === undefined) throw new Error("dict: cws: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = this.stk[this.ptr - 2]; this.stk[this.ptr - 2] = this.stk[this.ptr - 1]; this.stk[this.ptr - 1] = t;
        var t = this.dstk.get("j");
        if (t === undefined) throw new Error("dict: j: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = this.stk[this.ptr - 2]; this.stk[this.ptr - 2] = this.stk[this.ptr - 1]; this.stk[this.ptr - 1] = t;
        if (this.stk[this.ptr - 3] instanceof BWIPJS.psstring || this.stk[this.ptr - 3] instanceof BWIPJS.psarray)
            this.stk[this.ptr - 3].set(this.stk[this.ptr - 2], this.stk[this.ptr - 1]);
        else this.stk[this.ptr - 3][this.stk[this.ptr - 2].toString()] = this.stk[this.ptr - 1];
        this.ptr -= 3;
        this.stk[this.ptr++] = "j"; //ident
        var t = this.dstk.get("j");
        if (t === undefined) throw new Error("dict: j: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = 1;
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2] + this.stk[this.ptr - 1]; this.ptr--;
        this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    }
    function $f30() {
        var t = this.dstk.get("setb");
        if (t === undefined) throw new Error("dict: setb: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = this.stk[this.ptr - 2]; this.stk[this.ptr - 2] = this.stk[this.ptr - 1]; this.stk[this.ptr - 1] = t;
        if (this.stk[this.ptr - 2] instanceof BWIPJS.psstring || this.stk[this.ptr - 2] instanceof BWIPJS.psarray)
            this.stk[this.ptr - 2] = this.stk[this.ptr - 2].get(this.stk[this.ptr - 1]);
        else this.stk[this.ptr - 2] = this.stk[this.ptr - 2][this.stk[this.ptr - 1].toString()];
        this.ptr--;
        var t = this.dstk.get("cws");
        if (t === undefined) throw new Error("dict: cws: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = this.stk[this.ptr - 2]; this.stk[this.ptr - 2] = this.stk[this.ptr - 1]; this.stk[this.ptr - 1] = t;
        var t = this.dstk.get("j");
        if (t === undefined) throw new Error("dict: j: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = this.stk[this.ptr - 2]; this.stk[this.ptr - 2] = this.stk[this.ptr - 1]; this.stk[this.ptr - 1] = t;
        if (this.stk[this.ptr - 3] instanceof BWIPJS.psstring || this.stk[this.ptr - 3] instanceof BWIPJS.psarray)
            this.stk[this.ptr - 3].set(this.stk[this.ptr - 2], this.stk[this.ptr - 1]);
        else this.stk[this.ptr - 3][this.stk[this.ptr - 2].toString()] = this.stk[this.ptr - 1];
        this.ptr -= 3;
        this.stk[this.ptr++] = "j"; //ident
        var t = this.dstk.get("j");
        if (t === undefined) throw new Error("dict: j: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = 1;
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2] + this.stk[this.ptr - 1]; this.ptr--;
        this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    }
    function $f31() {
        var t = this.dstk.get("setc");
        if (t === undefined) throw new Error("dict: setc: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = this.stk[this.ptr - 2]; this.stk[this.ptr - 2] = this.stk[this.ptr - 1]; this.stk[this.ptr - 1] = t;
        if (this.stk[this.ptr - 2] instanceof BWIPJS.psstring || this.stk[this.ptr - 2] instanceof BWIPJS.psarray)
            this.stk[this.ptr - 2] = this.stk[this.ptr - 2].get(this.stk[this.ptr - 1]);
        else this.stk[this.ptr - 2] = this.stk[this.ptr - 2][this.stk[this.ptr - 1].toString()];
        this.ptr--;
    }
    function $f32() {
        var t = this.stk[this.ptr - 1];
        for (var i = 0; i < t.length; i++) this.stk[this.ptr - 1 + i] = t.get(i);
        this.ptr += t.length;
        this.stk[this.ptr - 1] = t;
        this.ptr--;
        this.stk[this.ptr++] = 48;
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2] - this.stk[this.ptr - 1]; this.ptr--;
        var t = this.stk[this.ptr - 2]; this.stk[this.ptr - 2] = this.stk[this.ptr - 1]; this.stk[this.ptr - 1] = t;
        this.stk[this.ptr++] = 48;
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2] - this.stk[this.ptr - 1]; this.ptr--;
        this.stk[this.ptr++] = 10;
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2] * this.stk[this.ptr - 1]; this.ptr--;
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2] + this.stk[this.ptr - 1]; this.ptr--;
    }
    function $f33() {
        this.stk[this.ptr] = this.stk[this.ptr - 1]; this.ptr++;
        this.stk[this.ptr - 1] = BWIPJS.pstype(this.stk[this.ptr - 1]);
        this.stk[this.ptr++] = "arraytype"; //ident
        if (this.stk[this.ptr - 2] instanceof BWIPJS.psstring)
            this.stk[this.ptr - 2] = this.stk[this.ptr - 2].toString() != this.stk[this.ptr - 1];
        else this.stk[this.ptr - 2] = this.stk[this.ptr - 2] != this.stk[this.ptr - 1];
        this.ptr--;
        this.stk[this.ptr++] = $f31;
        this.stk[this.ptr++] = $f32;
        var t38 = this.stk[--this.ptr];
        var t39 = this.stk[--this.ptr];
        if (this.stk[--this.ptr]) {
            if (t39.call(this) == -1) return -1;
        } else {
            if (t38.call(this) == -1) return -1;
        }
        var t = this.dstk.get("cws");
        if (t === undefined) throw new Error("dict: cws: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = this.stk[this.ptr - 2]; this.stk[this.ptr - 2] = this.stk[this.ptr - 1]; this.stk[this.ptr - 1] = t;
        var t = this.dstk.get("j");
        if (t === undefined) throw new Error("dict: j: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = this.stk[this.ptr - 2]; this.stk[this.ptr - 2] = this.stk[this.ptr - 1]; this.stk[this.ptr - 1] = t;
        if (this.stk[this.ptr - 3] instanceof BWIPJS.psstring || this.stk[this.ptr - 3] instanceof BWIPJS.psarray)
            this.stk[this.ptr - 3].set(this.stk[this.ptr - 2], this.stk[this.ptr - 1]);
        else this.stk[this.ptr - 3][this.stk[this.ptr - 2].toString()] = this.stk[this.ptr - 1];
        this.ptr -= 3;
        this.stk[this.ptr++] = "j"; //ident
        var t = this.dstk.get("j");
        if (t === undefined) throw new Error("dict: j: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = 1;
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2] + this.stk[this.ptr - 1]; this.ptr--;
        this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    }
    function $f34() {
        this.stk[this.ptr] = this.stk[this.ptr - 1]; this.ptr++;
        var t = this.dstk.get("seta");
        if (t === undefined) throw new Error("dict: seta: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = this.stk[this.ptr - 2]; this.stk[this.ptr - 2] = this.stk[this.ptr - 1]; this.stk[this.ptr - 1] = t;
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2][this.stk[this.ptr - 1]] !== undefined; this.ptr--;
        var t = this.stk[this.ptr - 2]; this.stk[this.ptr - 2] = this.stk[this.ptr - 1]; this.stk[this.ptr - 1] = t;
        var t = this.dstk.get("setb");
        if (t === undefined) throw new Error("dict: setb: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = this.stk[this.ptr - 2]; this.stk[this.ptr - 2] = this.stk[this.ptr - 1]; this.stk[this.ptr - 1] = t;
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2][this.stk[this.ptr - 1]] !== undefined; this.ptr--;
        if (typeof (this.stk[this.ptr - 1]) == "boolean") this.stk[this.ptr - 1] = !this.stk[this.ptr - 1];
        else this.stk[this.ptr - 1] = ~this.stk[this.ptr - 1];
        if (typeof (this.stk[this.ptr - 1]) == "boolean") this.stk[this.ptr - 2] = this.stk[this.ptr - 2] && this.stk[this.ptr - 1];
        else this.stk[this.ptr - 2] = this.stk[this.ptr - 2] & this.stk[this.ptr - 1];
        this.ptr--;
    }
    function $f35() {
        this.stk[this.ptr] = this.stk[this.ptr - 1]; this.ptr++;
        var t = this.dstk.get("setb");
        if (t === undefined) throw new Error("dict: setb: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = this.stk[this.ptr - 2]; this.stk[this.ptr - 2] = this.stk[this.ptr - 1]; this.stk[this.ptr - 1] = t;
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2][this.stk[this.ptr - 1]] !== undefined; this.ptr--;
        var t = this.stk[this.ptr - 2]; this.stk[this.ptr - 2] = this.stk[this.ptr - 1]; this.stk[this.ptr - 1] = t;
        var t = this.dstk.get("seta");
        if (t === undefined) throw new Error("dict: seta: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = this.stk[this.ptr - 2]; this.stk[this.ptr - 2] = this.stk[this.ptr - 1]; this.stk[this.ptr - 1] = t;
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2][this.stk[this.ptr - 1]] !== undefined; this.ptr--;
        if (typeof (this.stk[this.ptr - 1]) == "boolean") this.stk[this.ptr - 1] = !this.stk[this.ptr - 1];
        else this.stk[this.ptr - 1] = ~this.stk[this.ptr - 1];
        if (typeof (this.stk[this.ptr - 1]) == "boolean") this.stk[this.ptr - 2] = this.stk[this.ptr - 2] && this.stk[this.ptr - 1];
        else this.stk[this.ptr - 2] = this.stk[this.ptr - 2] & this.stk[this.ptr - 1];
        this.ptr--;
    }
    function $f36() {
        this.stk[this.ptr++] = 0;
    }
    function $f37() {
        this.stk[this.ptr++] = 0;
    }
    function $f38() {
        var t = this.dstk.get("nextanotb");
        if (t === undefined) throw new Error("dict: nextanotb: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = this.dstk.get("i");
        if (t === undefined) throw new Error("dict: i: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = 0;
        if (this.stk[this.ptr - 3] instanceof BWIPJS.psstring || this.stk[this.ptr - 3] instanceof BWIPJS.psarray)
            this.stk[this.ptr - 3].set(this.stk[this.ptr - 2], this.stk[this.ptr - 1]);
        else this.stk[this.ptr - 3][this.stk[this.ptr - 2].toString()] = this.stk[this.ptr - 1];
        this.ptr -= 3;
    }
    function $f39() {
        var t = this.dstk.get("nextanotb");
        if (t === undefined) throw new Error("dict: nextanotb: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = this.dstk.get("i");
        if (t === undefined) throw new Error("dict: i: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = this.dstk.get("nextanotb");
        if (t === undefined) throw new Error("dict: nextanotb: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = this.dstk.get("i");
        if (t === undefined) throw new Error("dict: i: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = 1;
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2] + this.stk[this.ptr - 1]; this.ptr--;
        if (this.stk[this.ptr - 2] instanceof BWIPJS.psstring || this.stk[this.ptr - 2] instanceof BWIPJS.psarray)
            this.stk[this.ptr - 2] = this.stk[this.ptr - 2].get(this.stk[this.ptr - 1]);
        else this.stk[this.ptr - 2] = this.stk[this.ptr - 2][this.stk[this.ptr - 1].toString()];
        this.ptr--;
        this.stk[this.ptr++] = 1;
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2] + this.stk[this.ptr - 1]; this.ptr--;
        if (this.stk[this.ptr - 3] instanceof BWIPJS.psstring || this.stk[this.ptr - 3] instanceof BWIPJS.psarray)
            this.stk[this.ptr - 3].set(this.stk[this.ptr - 2], this.stk[this.ptr - 1]);
        else this.stk[this.ptr - 3][this.stk[this.ptr - 2].toString()] = this.stk[this.ptr - 1];
        this.ptr -= 3;
    }
    function $f40() {
        var t = this.dstk.get("nextbnota");
        if (t === undefined) throw new Error("dict: nextbnota: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = this.dstk.get("i");
        if (t === undefined) throw new Error("dict: i: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = 0;
        if (this.stk[this.ptr - 3] instanceof BWIPJS.psstring || this.stk[this.ptr - 3] instanceof BWIPJS.psarray)
            this.stk[this.ptr - 3].set(this.stk[this.ptr - 2], this.stk[this.ptr - 1]);
        else this.stk[this.ptr - 3][this.stk[this.ptr - 2].toString()] = this.stk[this.ptr - 1];
        this.ptr -= 3;
    }
    function $f41() {
        var t = this.dstk.get("nextbnota");
        if (t === undefined) throw new Error("dict: nextbnota: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = this.dstk.get("i");
        if (t === undefined) throw new Error("dict: i: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = this.dstk.get("nextbnota");
        if (t === undefined) throw new Error("dict: nextbnota: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = this.dstk.get("i");
        if (t === undefined) throw new Error("dict: i: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = 1;
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2] + this.stk[this.ptr - 1]; this.ptr--;
        if (this.stk[this.ptr - 2] instanceof BWIPJS.psstring || this.stk[this.ptr - 2] instanceof BWIPJS.psarray)
            this.stk[this.ptr - 2] = this.stk[this.ptr - 2].get(this.stk[this.ptr - 1]);
        else this.stk[this.ptr - 2] = this.stk[this.ptr - 2][this.stk[this.ptr - 1].toString()];
        this.ptr--;
        this.stk[this.ptr++] = 1;
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2] + this.stk[this.ptr - 1]; this.ptr--;
        if (this.stk[this.ptr - 3] instanceof BWIPJS.psstring || this.stk[this.ptr - 3] instanceof BWIPJS.psarray)
            this.stk[this.ptr - 3].set(this.stk[this.ptr - 2], this.stk[this.ptr - 1]);
        else this.stk[this.ptr - 3][this.stk[this.ptr - 2].toString()] = this.stk[this.ptr - 1];
        this.ptr -= 3;
    }
    function $f42() {
        this.stk[this.ptr++] = "i"; //ident
        var t = this.stk[this.ptr - 2]; this.stk[this.ptr - 2] = this.stk[this.ptr - 1]; this.stk[this.ptr - 1] = t;
        this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
        var t = this.dstk.get("msg");
        if (t === undefined) throw new Error("dict: msg: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = this.dstk.get("i");
        if (t === undefined) throw new Error("dict: i: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        if (this.stk[this.ptr - 2] instanceof BWIPJS.psstring || this.stk[this.ptr - 2] instanceof BWIPJS.psarray)
            this.stk[this.ptr - 2] = this.stk[this.ptr - 2].get(this.stk[this.ptr - 1]);
        else this.stk[this.ptr - 2] = this.stk[this.ptr - 2][this.stk[this.ptr - 1].toString()];
        this.ptr--;
        var t = this.dstk.get("anotb");
        if (t === undefined) throw new Error("dict: anotb: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = $f38;
        this.stk[this.ptr++] = $f39;
        var t46 = this.stk[--this.ptr];
        var t47 = this.stk[--this.ptr];
        if (this.stk[--this.ptr]) {
            if (t47.call(this) == -1) return -1;
        } else {
            if (t46.call(this) == -1) return -1;
        }
        var t = this.dstk.get("msg");
        if (t === undefined) throw new Error("dict: msg: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = this.dstk.get("i");
        if (t === undefined) throw new Error("dict: i: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        if (this.stk[this.ptr - 2] instanceof BWIPJS.psstring || this.stk[this.ptr - 2] instanceof BWIPJS.psarray)
            this.stk[this.ptr - 2] = this.stk[this.ptr - 2].get(this.stk[this.ptr - 1]);
        else this.stk[this.ptr - 2] = this.stk[this.ptr - 2][this.stk[this.ptr - 1].toString()];
        this.ptr--;
        var t = this.dstk.get("bnota");
        if (t === undefined) throw new Error("dict: bnota: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = $f40;
        this.stk[this.ptr++] = $f41;
        var t48 = this.stk[--this.ptr];
        var t49 = this.stk[--this.ptr];
        if (this.stk[--this.ptr]) {
            if (t49.call(this) == -1) return -1;
        } else {
            if (t48.call(this) == -1) return -1;
        }
    }
    function $f43() {
        this.stk[this.ptr] = this.stk[this.ptr - 1]; this.ptr++;
        var t = this.dstk.get("nextanotb");
        if (t === undefined) throw new Error("dict: nextanotb: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = this.stk[this.ptr - 2]; this.stk[this.ptr - 2] = this.stk[this.ptr - 1]; this.stk[this.ptr - 1] = t;
        if (this.stk[this.ptr - 2] instanceof BWIPJS.psstring || this.stk[this.ptr - 2] instanceof BWIPJS.psarray)
            this.stk[this.ptr - 2] = this.stk[this.ptr - 2].get(this.stk[this.ptr - 1]);
        else this.stk[this.ptr - 2] = this.stk[this.ptr - 2][this.stk[this.ptr - 1].toString()];
        this.ptr--;
        var t = this.stk[this.ptr - 2]; this.stk[this.ptr - 2] = this.stk[this.ptr - 1]; this.stk[this.ptr - 1] = t;
        var t = this.dstk.get("nextbnota");
        if (t === undefined) throw new Error("dict: nextbnota: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = this.stk[this.ptr - 2]; this.stk[this.ptr - 2] = this.stk[this.ptr - 1]; this.stk[this.ptr - 1] = t;
        if (this.stk[this.ptr - 2] instanceof BWIPJS.psstring || this.stk[this.ptr - 2] instanceof BWIPJS.psarray)
            this.stk[this.ptr - 2] = this.stk[this.ptr - 2].get(this.stk[this.ptr - 1]);
        else this.stk[this.ptr - 2] = this.stk[this.ptr - 2][this.stk[this.ptr - 1].toString()];
        this.ptr--;
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2] < this.stk[this.ptr - 1]; this.ptr--;
    }
    function $f44() {
        this.stk[this.ptr] = this.stk[this.ptr - 1]; this.ptr++;
        var t = this.dstk.get("nextbnota");
        if (t === undefined) throw new Error("dict: nextbnota: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = this.stk[this.ptr - 2]; this.stk[this.ptr - 2] = this.stk[this.ptr - 1]; this.stk[this.ptr - 1] = t;
        if (this.stk[this.ptr - 2] instanceof BWIPJS.psstring || this.stk[this.ptr - 2] instanceof BWIPJS.psarray)
            this.stk[this.ptr - 2] = this.stk[this.ptr - 2].get(this.stk[this.ptr - 1]);
        else this.stk[this.ptr - 2] = this.stk[this.ptr - 2][this.stk[this.ptr - 1].toString()];
        this.ptr--;
        var t = this.stk[this.ptr - 2]; this.stk[this.ptr - 2] = this.stk[this.ptr - 1]; this.stk[this.ptr - 1] = t;
        var t = this.dstk.get("nextanotb");
        if (t === undefined) throw new Error("dict: nextanotb: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = this.stk[this.ptr - 2]; this.stk[this.ptr - 2] = this.stk[this.ptr - 1]; this.stk[this.ptr - 1] = t;
        if (this.stk[this.ptr - 2] instanceof BWIPJS.psstring || this.stk[this.ptr - 2] instanceof BWIPJS.psarray)
            this.stk[this.ptr - 2] = this.stk[this.ptr - 2].get(this.stk[this.ptr - 1]);
        else this.stk[this.ptr - 2] = this.stk[this.ptr - 2][this.stk[this.ptr - 1].toString()];
        this.ptr--;
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2] < this.stk[this.ptr - 1]; this.ptr--;
    }
    function $f45() {
        this.stk[this.ptr++] = 0;
        var t = this.dstk.get("numsscr");
        if (t === undefined) throw new Error("dict: numsscr: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    }
    function $f46() {
        this.stk[this.ptr++] = -1;
        this.stk[this.ptr++] = -1;
    }
    function $f47() {
        var t = this.dstk.get("stb");
        if (t === undefined) throw new Error("dict: stb: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = this.dstk.get("enca");
        if (t === undefined) throw new Error("dict: enca: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = "cset"; //ident
        this.stk[this.ptr++] = BWIPJS.psstring("setb");
        this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
        return -1;
    }
    function $f48() {
        var t = this.dstk.get("stc");
        if (t === undefined) throw new Error("dict: stc: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = this.dstk.get("enca");
        if (t === undefined) throw new Error("dict: enca: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = "cset"; //ident
        this.stk[this.ptr++] = BWIPJS.psstring("setc");
        this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
        return -1;
    }
    function $f49() {
        var t = this.dstk.get("stc");
        if (t === undefined) throw new Error("dict: stc: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = this.dstk.get("enca");
        if (t === undefined) throw new Error("dict: enca: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = "cset"; //ident
        this.stk[this.ptr++] = BWIPJS.psstring("setc");
        this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
        return -1;
    }
    function $f50() {
        var t = this.dstk.get("sta");
        if (t === undefined) throw new Error("dict: sta: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = this.dstk.get("enca");
        if (t === undefined) throw new Error("dict: enca: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = "cset"; //ident
        this.stk[this.ptr++] = BWIPJS.psstring("seta");
        this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
        return -1;
    }
    function $f51() {
        var t = this.dstk.get("msglen");
        if (t === undefined) throw new Error("dict: msglen: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = 0;
        if (this.stk[this.ptr - 2] instanceof BWIPJS.psstring)
            this.stk[this.ptr - 2] = this.stk[this.ptr - 2].toString() == this.stk[this.ptr - 1];
        else this.stk[this.ptr - 2] = this.stk[this.ptr - 2] == this.stk[this.ptr - 1];
        this.ptr--;
        this.stk[this.ptr++] = $f47;
        var t57 = this.stk[--this.ptr];
        if (this.stk[--this.ptr]) {
            if (t57.call(this) == -1) return -1;
        }
        var t = this.dstk.get("msglen");
        if (t === undefined) throw new Error("dict: msglen: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = 2;
        if (this.stk[this.ptr - 2] instanceof BWIPJS.psstring)
            this.stk[this.ptr - 2] = this.stk[this.ptr - 2].toString() == this.stk[this.ptr - 1];
        else this.stk[this.ptr - 2] = this.stk[this.ptr - 2] == this.stk[this.ptr - 1];
        this.ptr--;
        var t = this.dstk.get("nums");
        if (t === undefined) throw new Error("dict: nums: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = 2;
        if (this.stk[this.ptr - 2] instanceof BWIPJS.psstring)
            this.stk[this.ptr - 2] = this.stk[this.ptr - 2].toString() == this.stk[this.ptr - 1];
        else this.stk[this.ptr - 2] = this.stk[this.ptr - 2] == this.stk[this.ptr - 1];
        this.ptr--;
        if (typeof (this.stk[this.ptr - 1]) == "boolean") this.stk[this.ptr - 2] = this.stk[this.ptr - 2] && this.stk[this.ptr - 1];
        else this.stk[this.ptr - 2] = this.stk[this.ptr - 2] & this.stk[this.ptr - 1];
        this.ptr--;
        this.stk[this.ptr++] = $f48;
        var t58 = this.stk[--this.ptr];
        if (this.stk[--this.ptr]) {
            if (t58.call(this) == -1) return -1;
        }
        var t = this.dstk.get("nums");
        if (t === undefined) throw new Error("dict: nums: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = 4;
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2] >= this.stk[this.ptr - 1]; this.ptr--;
        this.stk[this.ptr++] = $f49;
        var t59 = this.stk[--this.ptr];
        if (this.stk[--this.ptr]) {
            if (t59.call(this) == -1) return -1;
        }
        this.stk[this.ptr++] = 0;
        var t = this.dstk.get("abeforeb");
        if (t === undefined) throw new Error("dict: abeforeb: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = $f50;
        var t60 = this.stk[--this.ptr];
        if (this.stk[--this.ptr]) {
            if (t60.call(this) == -1) return -1;
        }
        var t = this.dstk.get("stb");
        if (t === undefined) throw new Error("dict: stb: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = this.dstk.get("enca");
        if (t === undefined) throw new Error("dict: enca: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = "cset"; //ident
        this.stk[this.ptr++] = BWIPJS.psstring("setb");
        this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
        return -1;
    }
    function $f52() {
        return -1;
    }
    function $f53() {
        var t = this.dstk.get("enca");
        if (t === undefined) throw new Error("dict: enca: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    }
    function $f54() {
        var t = this.dstk.get("encb");
        if (t === undefined) throw new Error("dict: encb: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    }
    function $f55() {
        var t = this.dstk.get("swc");
        if (t === undefined) throw new Error("dict: swc: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = this.dstk.get("cset");
        if (t === undefined) throw new Error("dict: cset: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = BWIPJS.psstring("seta");
        if (this.stk[this.ptr - 2] instanceof BWIPJS.psstring)
            this.stk[this.ptr - 2] = this.stk[this.ptr - 2].toString() == this.stk[this.ptr - 1];
        else this.stk[this.ptr - 2] = this.stk[this.ptr - 2] == this.stk[this.ptr - 1];
        this.ptr--;
        this.stk[this.ptr++] = $f53;
        this.stk[this.ptr++] = $f54;
        var t63 = this.stk[--this.ptr];
        var t64 = this.stk[--this.ptr];
        if (this.stk[--this.ptr]) {
            if (t64.call(this) == -1) return -1;
        } else {
            if (t63.call(this) == -1) return -1;
        }
        this.stk[this.ptr++] = "cset"; //ident
        this.stk[this.ptr++] = BWIPJS.psstring("setc");
        this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
        return -1;
    }
    function $f56() {
        var t = this.dstk.get("enca");
        if (t === undefined) throw new Error("dict: enca: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    }
    function $f57() {
        var t = this.dstk.get("encb");
        if (t === undefined) throw new Error("dict: encb: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    }
    function $f58() {
        var t = this.dstk.get("enca");
        if (t === undefined) throw new Error("dict: enca: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    }
    function $f59() {
        var t = this.dstk.get("encb");
        if (t === undefined) throw new Error("dict: encb: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    }
    function $f60() {
        var t = this.dstk.get("msg");
        if (t === undefined) throw new Error("dict: msg: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = this.dstk.get("i");
        if (t === undefined) throw new Error("dict: i: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        if (this.stk[this.ptr - 2] instanceof BWIPJS.psstring || this.stk[this.ptr - 2] instanceof BWIPJS.psarray)
            this.stk[this.ptr - 2] = this.stk[this.ptr - 2].get(this.stk[this.ptr - 1]);
        else this.stk[this.ptr - 2] = this.stk[this.ptr - 2][this.stk[this.ptr - 1].toString()];
        this.ptr--;
        var t = this.dstk.get("cset");
        if (t === undefined) throw new Error("dict: cset: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = BWIPJS.psstring("seta");
        if (this.stk[this.ptr - 2] instanceof BWIPJS.psstring)
            this.stk[this.ptr - 2] = this.stk[this.ptr - 2].toString() == this.stk[this.ptr - 1];
        else this.stk[this.ptr - 2] = this.stk[this.ptr - 2] == this.stk[this.ptr - 1];
        this.ptr--;
        this.stk[this.ptr++] = $f56;
        this.stk[this.ptr++] = $f57;
        var t65 = this.stk[--this.ptr];
        var t66 = this.stk[--this.ptr];
        if (this.stk[--this.ptr]) {
            if (t66.call(this) == -1) return -1;
        } else {
            if (t65.call(this) == -1) return -1;
        }
        this.stk[this.ptr++] = "i"; //ident
        var t = this.dstk.get("i");
        if (t === undefined) throw new Error("dict: i: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = 1;
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2] + this.stk[this.ptr - 1]; this.ptr--;
        this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
        var t = this.dstk.get("swc");
        if (t === undefined) throw new Error("dict: swc: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = this.dstk.get("cset");
        if (t === undefined) throw new Error("dict: cset: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = BWIPJS.psstring("seta");
        if (this.stk[this.ptr - 2] instanceof BWIPJS.psstring)
            this.stk[this.ptr - 2] = this.stk[this.ptr - 2].toString() == this.stk[this.ptr - 1];
        else this.stk[this.ptr - 2] = this.stk[this.ptr - 2] == this.stk[this.ptr - 1];
        this.ptr--;
        this.stk[this.ptr++] = $f58;
        this.stk[this.ptr++] = $f59;
        var t67 = this.stk[--this.ptr];
        var t68 = this.stk[--this.ptr];
        if (this.stk[--this.ptr]) {
            if (t68.call(this) == -1) return -1;
        } else {
            if (t67.call(this) == -1) return -1;
        }
        this.stk[this.ptr++] = "cset"; //ident
        this.stk[this.ptr++] = BWIPJS.psstring("setc");
        this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
        return -1;
    }
    function $f61() {
        var t = this.dstk.get("nums");
        if (t === undefined) throw new Error("dict: nums: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = 2;
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2] % this.stk[this.ptr - 1]; this.ptr--;
        this.stk[this.ptr++] = 0;
        if (this.stk[this.ptr - 2] instanceof BWIPJS.psstring)
            this.stk[this.ptr - 2] = this.stk[this.ptr - 2].toString() == this.stk[this.ptr - 1];
        else this.stk[this.ptr - 2] = this.stk[this.ptr - 2] == this.stk[this.ptr - 1];
        this.ptr--;
        this.stk[this.ptr++] = $f55;
        this.stk[this.ptr++] = $f60;
        var t69 = this.stk[--this.ptr];
        var t70 = this.stk[--this.ptr];
        if (this.stk[--this.ptr]) {
            if (t70.call(this) == -1) return -1;
        } else {
            if (t69.call(this) == -1) return -1;
        }
    }
    function $f62() {
        var t = this.dstk.get("sft");
        if (t === undefined) throw new Error("dict: sft: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = this.dstk.get("encb");
        if (t === undefined) throw new Error("dict: encb: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = this.dstk.get("msg");
        if (t === undefined) throw new Error("dict: msg: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = this.dstk.get("i");
        if (t === undefined) throw new Error("dict: i: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        if (this.stk[this.ptr - 2] instanceof BWIPJS.psstring || this.stk[this.ptr - 2] instanceof BWIPJS.psarray)
            this.stk[this.ptr - 2] = this.stk[this.ptr - 2].get(this.stk[this.ptr - 1]);
        else this.stk[this.ptr - 2] = this.stk[this.ptr - 2][this.stk[this.ptr - 1].toString()];
        this.ptr--;
        var t = this.dstk.get("enca");
        if (t === undefined) throw new Error("dict: enca: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = "i"; //ident
        var t = this.dstk.get("i");
        if (t === undefined) throw new Error("dict: i: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = 1;
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2] + this.stk[this.ptr - 1]; this.ptr--;
        this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
        return -1;
    }
    function $f63() {
        var t = this.dstk.get("i");
        if (t === undefined) throw new Error("dict: i: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = 1;
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2] + this.stk[this.ptr - 1]; this.ptr--;
        var t = this.dstk.get("bbeforea");
        if (t === undefined) throw new Error("dict: bbeforea: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = $f62;
        var t72 = this.stk[--this.ptr];
        if (this.stk[--this.ptr]) {
            if (t72.call(this) == -1) return -1;
        }
    }
    function $f64() {
        var t = this.dstk.get("i");
        if (t === undefined) throw new Error("dict: i: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = this.dstk.get("msglen");
        if (t === undefined) throw new Error("dict: msglen: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = 1;
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2] - this.stk[this.ptr - 1]; this.ptr--;
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2] < this.stk[this.ptr - 1]; this.ptr--;
        this.stk[this.ptr++] = $f63;
        var t73 = this.stk[--this.ptr];
        if (this.stk[--this.ptr]) {
            if (t73.call(this) == -1) return -1;
        }
        var t = this.dstk.get("swa");
        if (t === undefined) throw new Error("dict: swa: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = this.dstk.get("encb");
        if (t === undefined) throw new Error("dict: encb: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = "cset"; //ident
        this.stk[this.ptr++] = BWIPJS.psstring("seta");
        this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
        return -1;
    }
    function $f65() {
        var t = this.dstk.get("sft");
        if (t === undefined) throw new Error("dict: sft: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = this.dstk.get("enca");
        if (t === undefined) throw new Error("dict: enca: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = this.dstk.get("msg");
        if (t === undefined) throw new Error("dict: msg: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = this.dstk.get("i");
        if (t === undefined) throw new Error("dict: i: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        if (this.stk[this.ptr - 2] instanceof BWIPJS.psstring || this.stk[this.ptr - 2] instanceof BWIPJS.psarray)
            this.stk[this.ptr - 2] = this.stk[this.ptr - 2].get(this.stk[this.ptr - 1]);
        else this.stk[this.ptr - 2] = this.stk[this.ptr - 2][this.stk[this.ptr - 1].toString()];
        this.ptr--;
        var t = this.dstk.get("encb");
        if (t === undefined) throw new Error("dict: encb: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = "i"; //ident
        var t = this.dstk.get("i");
        if (t === undefined) throw new Error("dict: i: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = 1;
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2] + this.stk[this.ptr - 1]; this.ptr--;
        this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
        return -1;
    }
    function $f66() {
        var t = this.dstk.get("i");
        if (t === undefined) throw new Error("dict: i: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = 1;
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2] + this.stk[this.ptr - 1]; this.ptr--;
        var t = this.dstk.get("abeforeb");
        if (t === undefined) throw new Error("dict: abeforeb: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = $f65;
        var t75 = this.stk[--this.ptr];
        if (this.stk[--this.ptr]) {
            if (t75.call(this) == -1) return -1;
        }
    }
    function $f67() {
        var t = this.dstk.get("i");
        if (t === undefined) throw new Error("dict: i: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = this.dstk.get("msglen");
        if (t === undefined) throw new Error("dict: msglen: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = 1;
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2] - this.stk[this.ptr - 1]; this.ptr--;
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2] < this.stk[this.ptr - 1]; this.ptr--;
        this.stk[this.ptr++] = $f66;
        var t76 = this.stk[--this.ptr];
        if (this.stk[--this.ptr]) {
            if (t76.call(this) == -1) return -1;
        }
        var t = this.dstk.get("swb");
        if (t === undefined) throw new Error("dict: swb: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = this.dstk.get("enca");
        if (t === undefined) throw new Error("dict: enca: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = "cset"; //ident
        this.stk[this.ptr++] = BWIPJS.psstring("setb");
        this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
        return -1;
    }
    function $f68() {
        var t = this.dstk.get("swa");
        if (t === undefined) throw new Error("dict: swa: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = this.dstk.get("encc");
        if (t === undefined) throw new Error("dict: encc: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = "cset"; //ident
        this.stk[this.ptr++] = BWIPJS.psstring("seta");
        this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
        return -1;
    }
    function $f69() {
        var t = this.dstk.get("i");
        if (t === undefined) throw new Error("dict: i: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = this.dstk.get("abeforeb");
        if (t === undefined) throw new Error("dict: abeforeb: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = $f68;
        var t78 = this.stk[--this.ptr];
        if (this.stk[--this.ptr]) {
            if (t78.call(this) == -1) return -1;
        }
        var t = this.dstk.get("swb");
        if (t === undefined) throw new Error("dict: swb: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = this.dstk.get("encc");
        if (t === undefined) throw new Error("dict: encc: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = "cset"; //ident
        this.stk[this.ptr++] = BWIPJS.psstring("setb");
        this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
        return -1;
    }
    function $f70() {
        var t = this.dstk.get("msg");
        if (t === undefined) throw new Error("dict: msg: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = this.dstk.get("i");
        if (t === undefined) throw new Error("dict: i: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        if (this.stk[this.ptr - 2] instanceof BWIPJS.psstring || this.stk[this.ptr - 2] instanceof BWIPJS.psarray)
            this.stk[this.ptr - 2] = this.stk[this.ptr - 2].get(this.stk[this.ptr - 1]);
        else this.stk[this.ptr - 2] = this.stk[this.ptr - 2][this.stk[this.ptr - 1].toString()];
        this.ptr--;
        var t = this.dstk.get("enca");
        if (t === undefined) throw new Error("dict: enca: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = "i"; //ident
        var t = this.dstk.get("i");
        if (t === undefined) throw new Error("dict: i: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = 1;
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2] + this.stk[this.ptr - 1]; this.ptr--;
        this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
        return -1;
    }
    function $f71() {
        var t = this.dstk.get("msg");
        if (t === undefined) throw new Error("dict: msg: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = this.dstk.get("i");
        if (t === undefined) throw new Error("dict: i: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        if (this.stk[this.ptr - 2] instanceof BWIPJS.psstring || this.stk[this.ptr - 2] instanceof BWIPJS.psarray)
            this.stk[this.ptr - 2] = this.stk[this.ptr - 2].get(this.stk[this.ptr - 1]);
        else this.stk[this.ptr - 2] = this.stk[this.ptr - 2][this.stk[this.ptr - 1].toString()];
        this.ptr--;
        var t = this.dstk.get("encb");
        if (t === undefined) throw new Error("dict: encb: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = "i"; //ident
        var t = this.dstk.get("i");
        if (t === undefined) throw new Error("dict: i: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = 1;
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2] + this.stk[this.ptr - 1]; this.ptr--;
        this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
        return -1;
    }
    function $f72() {
        var t = this.dstk.get("fn1");
        if (t === undefined) throw new Error("dict: fn1: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = this.dstk.get("encc");
        if (t === undefined) throw new Error("dict: encc: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = "i"; //ident
        var t = this.dstk.get("i");
        if (t === undefined) throw new Error("dict: i: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = 1;
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2] + this.stk[this.ptr - 1]; this.ptr--;
        this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    }
    function $f73() {
        var t = this.dstk.get("msg");
        if (t === undefined) throw new Error("dict: msg: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = this.dstk.get("i");
        if (t === undefined) throw new Error("dict: i: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = 2;
        this.stk[this.ptr - 3] = this.stk[this.ptr - 3].subset(this.stk[this.ptr - 2], this.stk[this.ptr - 1]); this.ptr -= 2;
        var t = this.dstk.get("encc");
        if (t === undefined) throw new Error("dict: encc: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = "i"; //ident
        var t = this.dstk.get("i");
        if (t === undefined) throw new Error("dict: i: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = 2;
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2] + this.stk[this.ptr - 1]; this.ptr--;
        this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    }
    function $f74() {
        var t = this.dstk.get("msg");
        if (t === undefined) throw new Error("dict: msg: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = this.dstk.get("i");
        if (t === undefined) throw new Error("dict: i: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        if (this.stk[this.ptr - 2] instanceof BWIPJS.psstring || this.stk[this.ptr - 2] instanceof BWIPJS.psarray)
            this.stk[this.ptr - 2] = this.stk[this.ptr - 2].get(this.stk[this.ptr - 1]);
        else this.stk[this.ptr - 2] = this.stk[this.ptr - 2][this.stk[this.ptr - 1].toString()];
        this.ptr--;
        var t = this.dstk.get("fn1");
        if (t === undefined) throw new Error("dict: fn1: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        if (this.stk[this.ptr - 2] instanceof BWIPJS.psstring)
            this.stk[this.ptr - 2] = this.stk[this.ptr - 2].toString() == this.stk[this.ptr - 1];
        else this.stk[this.ptr - 2] = this.stk[this.ptr - 2] == this.stk[this.ptr - 1];
        this.ptr--;
        this.stk[this.ptr++] = $f72;
        this.stk[this.ptr++] = $f73;
        var t82 = this.stk[--this.ptr];
        var t83 = this.stk[--this.ptr];
        if (this.stk[--this.ptr]) {
            if (t83.call(this) == -1) return -1;
        } else {
            if (t82.call(this) == -1) return -1;
        }
        return -1;
    }
    function $f75() {
        var t = this.dstk.get("cset");
        if (t === undefined) throw new Error("dict: cset: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = BWIPJS.psstring("seta");
        if (this.stk[this.ptr - 2] instanceof BWIPJS.psstring)
            this.stk[this.ptr - 2] = this.stk[this.ptr - 2].toString() == this.stk[this.ptr - 1];
        else this.stk[this.ptr - 2] = this.stk[this.ptr - 2] == this.stk[this.ptr - 1];
        this.ptr--;
        var t = this.dstk.get("cset");
        if (t === undefined) throw new Error("dict: cset: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = BWIPJS.psstring("setb");
        if (this.stk[this.ptr - 2] instanceof BWIPJS.psstring)
            this.stk[this.ptr - 2] = this.stk[this.ptr - 2].toString() == this.stk[this.ptr - 1];
        else this.stk[this.ptr - 2] = this.stk[this.ptr - 2] == this.stk[this.ptr - 1];
        this.ptr--;
        if (typeof (this.stk[this.ptr - 1]) == "boolean") this.stk[this.ptr - 2] = this.stk[this.ptr - 2] || this.stk[this.ptr - 1];
        else this.stk[this.ptr - 2] = this.stk[this.ptr - 2] | this.stk[this.ptr - 1];
        this.ptr--;
        var t = this.dstk.get("nums");
        if (t === undefined) throw new Error("dict: nums: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = 4;
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2] >= this.stk[this.ptr - 1]; this.ptr--;
        if (typeof (this.stk[this.ptr - 1]) == "boolean") this.stk[this.ptr - 2] = this.stk[this.ptr - 2] && this.stk[this.ptr - 1];
        else this.stk[this.ptr - 2] = this.stk[this.ptr - 2] & this.stk[this.ptr - 1];
        this.ptr--;
        var t = this.dstk.get("msg");
        if (t === undefined) throw new Error("dict: msg: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = this.dstk.get("i");
        if (t === undefined) throw new Error("dict: i: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        if (this.stk[this.ptr - 2] instanceof BWIPJS.psstring || this.stk[this.ptr - 2] instanceof BWIPJS.psarray)
            this.stk[this.ptr - 2] = this.stk[this.ptr - 2].get(this.stk[this.ptr - 1]);
        else this.stk[this.ptr - 2] = this.stk[this.ptr - 2][this.stk[this.ptr - 1].toString()];
        this.ptr--;
        var t = this.dstk.get("fn1");
        if (t === undefined) throw new Error("dict: fn1: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        if (this.stk[this.ptr - 2] instanceof BWIPJS.psstring)
            this.stk[this.ptr - 2] = this.stk[this.ptr - 2].toString() != this.stk[this.ptr - 1];
        else this.stk[this.ptr - 2] = this.stk[this.ptr - 2] != this.stk[this.ptr - 1];
        this.ptr--;
        if (typeof (this.stk[this.ptr - 1]) == "boolean") this.stk[this.ptr - 2] = this.stk[this.ptr - 2] && this.stk[this.ptr - 1];
        else this.stk[this.ptr - 2] = this.stk[this.ptr - 2] & this.stk[this.ptr - 1];
        this.ptr--;
        this.stk[this.ptr++] = $f61;
        var t71 = this.stk[--this.ptr];
        if (this.stk[--this.ptr]) {
            if (t71.call(this) == -1) return -1;
        }
        var t = this.dstk.get("cset");
        if (t === undefined) throw new Error("dict: cset: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = BWIPJS.psstring("setb");
        if (this.stk[this.ptr - 2] instanceof BWIPJS.psstring)
            this.stk[this.ptr - 2] = this.stk[this.ptr - 2].toString() == this.stk[this.ptr - 1];
        else this.stk[this.ptr - 2] = this.stk[this.ptr - 2] == this.stk[this.ptr - 1];
        this.ptr--;
        var t = this.dstk.get("msg");
        if (t === undefined) throw new Error("dict: msg: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = this.dstk.get("i");
        if (t === undefined) throw new Error("dict: i: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        if (this.stk[this.ptr - 2] instanceof BWIPJS.psstring || this.stk[this.ptr - 2] instanceof BWIPJS.psarray)
            this.stk[this.ptr - 2] = this.stk[this.ptr - 2].get(this.stk[this.ptr - 1]);
        else this.stk[this.ptr - 2] = this.stk[this.ptr - 2][this.stk[this.ptr - 1].toString()];
        this.ptr--;
        var t = this.dstk.get("anotb");
        if (t === undefined) throw new Error("dict: anotb: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        if (typeof (this.stk[this.ptr - 1]) == "boolean") this.stk[this.ptr - 2] = this.stk[this.ptr - 2] && this.stk[this.ptr - 1];
        else this.stk[this.ptr - 2] = this.stk[this.ptr - 2] & this.stk[this.ptr - 1];
        this.ptr--;
        this.stk[this.ptr++] = $f64;
        var t74 = this.stk[--this.ptr];
        if (this.stk[--this.ptr]) {
            if (t74.call(this) == -1) return -1;
        }
        var t = this.dstk.get("cset");
        if (t === undefined) throw new Error("dict: cset: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = BWIPJS.psstring("seta");
        if (this.stk[this.ptr - 2] instanceof BWIPJS.psstring)
            this.stk[this.ptr - 2] = this.stk[this.ptr - 2].toString() == this.stk[this.ptr - 1];
        else this.stk[this.ptr - 2] = this.stk[this.ptr - 2] == this.stk[this.ptr - 1];
        this.ptr--;
        var t = this.dstk.get("msg");
        if (t === undefined) throw new Error("dict: msg: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = this.dstk.get("i");
        if (t === undefined) throw new Error("dict: i: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        if (this.stk[this.ptr - 2] instanceof BWIPJS.psstring || this.stk[this.ptr - 2] instanceof BWIPJS.psarray)
            this.stk[this.ptr - 2] = this.stk[this.ptr - 2].get(this.stk[this.ptr - 1]);
        else this.stk[this.ptr - 2] = this.stk[this.ptr - 2][this.stk[this.ptr - 1].toString()];
        this.ptr--;
        var t = this.dstk.get("bnota");
        if (t === undefined) throw new Error("dict: bnota: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        if (typeof (this.stk[this.ptr - 1]) == "boolean") this.stk[this.ptr - 2] = this.stk[this.ptr - 2] && this.stk[this.ptr - 1];
        else this.stk[this.ptr - 2] = this.stk[this.ptr - 2] & this.stk[this.ptr - 1];
        this.ptr--;
        this.stk[this.ptr++] = $f67;
        var t77 = this.stk[--this.ptr];
        if (this.stk[--this.ptr]) {
            if (t77.call(this) == -1) return -1;
        }
        var t = this.dstk.get("cset");
        if (t === undefined) throw new Error("dict: cset: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = BWIPJS.psstring("setc");
        if (this.stk[this.ptr - 2] instanceof BWIPJS.psstring)
            this.stk[this.ptr - 2] = this.stk[this.ptr - 2].toString() == this.stk[this.ptr - 1];
        else this.stk[this.ptr - 2] = this.stk[this.ptr - 2] == this.stk[this.ptr - 1];
        this.ptr--;
        var t = this.dstk.get("nums");
        if (t === undefined) throw new Error("dict: nums: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = 2;
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2] < this.stk[this.ptr - 1]; this.ptr--;
        if (typeof (this.stk[this.ptr - 1]) == "boolean") this.stk[this.ptr - 2] = this.stk[this.ptr - 2] && this.stk[this.ptr - 1];
        else this.stk[this.ptr - 2] = this.stk[this.ptr - 2] & this.stk[this.ptr - 1];
        this.ptr--;
        this.stk[this.ptr++] = $f69;
        var t79 = this.stk[--this.ptr];
        if (this.stk[--this.ptr]) {
            if (t79.call(this) == -1) return -1;
        }
        var t = this.dstk.get("cset");
        if (t === undefined) throw new Error("dict: cset: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = BWIPJS.psstring("seta");
        if (this.stk[this.ptr - 2] instanceof BWIPJS.psstring)
            this.stk[this.ptr - 2] = this.stk[this.ptr - 2].toString() == this.stk[this.ptr - 1];
        else this.stk[this.ptr - 2] = this.stk[this.ptr - 2] == this.stk[this.ptr - 1];
        this.ptr--;
        this.stk[this.ptr++] = $f70;
        var t80 = this.stk[--this.ptr];
        if (this.stk[--this.ptr]) {
            if (t80.call(this) == -1) return -1;
        }
        var t = this.dstk.get("cset");
        if (t === undefined) throw new Error("dict: cset: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = BWIPJS.psstring("setb");
        if (this.stk[this.ptr - 2] instanceof BWIPJS.psstring)
            this.stk[this.ptr - 2] = this.stk[this.ptr - 2].toString() == this.stk[this.ptr - 1];
        else this.stk[this.ptr - 2] = this.stk[this.ptr - 2] == this.stk[this.ptr - 1];
        this.ptr--;
        this.stk[this.ptr++] = $f71;
        var t81 = this.stk[--this.ptr];
        if (this.stk[--this.ptr]) {
            if (t81.call(this) == -1) return -1;
        }
        var t = this.dstk.get("cset");
        if (t === undefined) throw new Error("dict: cset: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = BWIPJS.psstring("setc");
        if (this.stk[this.ptr - 2] instanceof BWIPJS.psstring)
            this.stk[this.ptr - 2] = this.stk[this.ptr - 2].toString() == this.stk[this.ptr - 1];
        else this.stk[this.ptr - 2] = this.stk[this.ptr - 2] == this.stk[this.ptr - 1];
        this.ptr--;
        this.stk[this.ptr++] = $f74;
        var t84 = this.stk[--this.ptr];
        if (this.stk[--this.ptr]) {
            if (t84.call(this) == -1) return -1;
        }
        return -1;
    }
    function $f76() {
        var t = this.dstk.get("i");
        if (t === undefined) throw new Error("dict: i: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = this.dstk.get("msglen");
        if (t === undefined) throw new Error("dict: msglen: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        if (this.stk[this.ptr - 2] instanceof BWIPJS.psstring)
            this.stk[this.ptr - 2] = this.stk[this.ptr - 2].toString() == this.stk[this.ptr - 1];
        else this.stk[this.ptr - 2] = this.stk[this.ptr - 2] == this.stk[this.ptr - 1];
        this.ptr--;
        this.stk[this.ptr++] = $f52;
        var t62 = this.stk[--this.ptr];
        if (this.stk[--this.ptr]) {
            if (t62.call(this) == -1) return -1;
        }
        var t = this.dstk.get("i");
        if (t === undefined) throw new Error("dict: i: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = this.dstk.get("numsscr");
        if (t === undefined) throw new Error("dict: numsscr: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = "nums"; //ident
        var t = this.stk[this.ptr - 2]; this.stk[this.ptr - 2] = this.stk[this.ptr - 1]; this.stk[this.ptr - 1] = t;
        this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
        this.stk[this.ptr++] = "nchars"; //ident
        var t = this.stk[this.ptr - 2]; this.stk[this.ptr - 2] = this.stk[this.ptr - 1]; this.stk[this.ptr - 1] = t;
        this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
        this.stk[this.ptr++] = $f75;
        var t85 = this.stk[--this.ptr];
        while (true) {
            if (t85.call(this) == -1) break;
        }
    }
    function $f77() {
        this.stk[this.ptr++] = "fncvals"; //ident
        this.stk[this.ptr++] = Infinity;
        this.stk[this.ptr++] = BWIPJS.psstring("FNC1");
        var t = this.dstk.get("fn1");
        if (t === undefined) throw new Error("dict: fn1: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = BWIPJS.psstring("FNC2");
        var t = this.dstk.get("fn2");
        if (t === undefined) throw new Error("dict: fn2: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = BWIPJS.psstring("FNC3");
        var t = this.dstk.get("fn3");
        if (t === undefined) throw new Error("dict: fn3: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = BWIPJS.psstring("FNC4");
        var t = this.dstk.get("fn4");
        if (t === undefined) throw new Error("dict: fn4: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = BWIPJS.psstring("LNKA");
        var t = this.dstk.get("lka");
        if (t === undefined) throw new Error("dict: lka: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = BWIPJS.psstring("LNKC");
        var t = this.dstk.get("lkc");
        if (t === undefined) throw new Error("dict: lkc: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = {};
        for (var i = this.ptr - 1; i >= 1 && this.stk[i] !== Infinity; i -= 2) {
            if (this.stk[i - 1] === Infinity) throw "dict: malformed stack";
            t[this.stk[i - 1]] = this.stk[i];
        }
        if (i < 0 || this.stk[i] !== Infinity) throw "dict: underflow";
        this.ptr = i;
        this.stk[this.ptr++] = t;
        this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
        this.stk[this.ptr++] = "msg"; //ident
        var t = this.dstk.get("barlen");
        if (t === undefined) throw new Error("dict: barlen: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr - 1] = BWIPJS.psarray(this.stk[this.ptr - 1]);
        this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
        this.stk[this.ptr++] = "text"; //ident
        var t = this.dstk.get("barlen");
        if (t === undefined) throw new Error("dict: barlen: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr - 1] = BWIPJS.psstring(this.stk[this.ptr - 1]);
        this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
        this.stk[this.ptr++] = "i"; //ident
        this.stk[this.ptr++] = 0;
        this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
        this.stk[this.ptr++] = "j"; //ident
        this.stk[this.ptr++] = 0;
        this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
        this.stk[this.ptr++] = $f21;
        var t31 = this.stk[--this.ptr];
        while (true) {
            if (t31.call(this) == -1) break;
        }
        this.stk[this.ptr++] = "msg"; //ident
        var t = this.dstk.get("msg");
        if (t === undefined) throw new Error("dict: msg: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = 0;
        var t = this.dstk.get("j");
        if (t === undefined) throw new Error("dict: j: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr - 3] = this.stk[this.ptr - 3].subset(this.stk[this.ptr - 2], this.stk[this.ptr - 1]); this.ptr -= 2;
        this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
        this.stk[this.ptr++] = "msglen"; //ident
        var t = this.dstk.get("msg");
        if (t === undefined) throw new Error("dict: msg: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        if (typeof (this.stk[this.ptr - 1].length) !== "number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr - 1]);
        this.stk[this.ptr - 1] = this.stk[this.ptr - 1].length;
        this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
        this.stk[this.ptr++] = "text"; //ident
        var t = this.dstk.get("text");
        if (t === undefined) throw new Error("dict: text: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = 0;
        var t = this.dstk.get("j");
        if (t === undefined) throw new Error("dict: j: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr - 3] = this.stk[this.ptr - 3].subset(this.stk[this.ptr - 2], this.stk[this.ptr - 1]); this.ptr -= 2;
        this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
        this.stk[this.ptr++] = "numsscr"; //ident
        this.stk[this.ptr++] = $f28;
        this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
        this.stk[this.ptr++] = "enca"; //ident
        this.stk[this.ptr++] = $f29;
        this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
        this.stk[this.ptr++] = "encb"; //ident
        this.stk[this.ptr++] = $f30;
        this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
        this.stk[this.ptr++] = "encc"; //ident
        this.stk[this.ptr++] = $f33;
        this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
        this.stk[this.ptr++] = "anotb"; //ident
        this.stk[this.ptr++] = $f34;
        this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
        this.stk[this.ptr++] = "bnota"; //ident
        this.stk[this.ptr++] = $f35;
        this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
        this.stk[this.ptr++] = "nextanotb"; //ident
        this.stk[this.ptr++] = Infinity;
        var t = this.dstk.get("msg");
        if (t === undefined) throw new Error("dict: msg: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        if (typeof (this.stk[this.ptr - 1].length) !== "number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr - 1]);
        this.stk[this.ptr - 1] = this.stk[this.ptr - 1].length;
        this.stk[this.ptr++] = $f36;
        var t42 = this.stk[--this.ptr];
        var t40 = this.stk[--this.ptr];
        for (var t41 = 0; t41 < t40; t41++) {
            if (t42.call(this) == -1) break;
        }
        this.stk[this.ptr++] = 9999;
        for (var i = this.ptr - 1; i >= 0 && this.stk[i] !== Infinity; i--)        ;
        if (i < 0) throw "array: underflow";
        var t = this.stk.splice(i + 1, this.ptr - 1 - i);
        this.ptr = i;
        this.stk[this.ptr++] = BWIPJS.psarray(t);
        this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
        this.stk[this.ptr++] = "nextbnota"; //ident
        this.stk[this.ptr++] = Infinity;
        var t = this.dstk.get("msg");
        if (t === undefined) throw new Error("dict: msg: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        if (typeof (this.stk[this.ptr - 1].length) !== "number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr - 1]);
        this.stk[this.ptr - 1] = this.stk[this.ptr - 1].length;
        this.stk[this.ptr++] = $f37;
        var t45 = this.stk[--this.ptr];
        var t43 = this.stk[--this.ptr];
        for (var t44 = 0; t44 < t43; t44++) {
            if (t45.call(this) == -1) break;
        }
        this.stk[this.ptr++] = 9999;
        for (var i = this.ptr - 1; i >= 0 && this.stk[i] !== Infinity; i--)        ;
        if (i < 0) throw "array: underflow";
        var t = this.stk.splice(i + 1, this.ptr - 1 - i);
        this.ptr = i;
        this.stk[this.ptr++] = BWIPJS.psarray(t);
        this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
        var t = this.dstk.get("msg");
        if (t === undefined) throw new Error("dict: msg: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        if (typeof (this.stk[this.ptr - 1].length) !== "number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr - 1]);
        this.stk[this.ptr - 1] = this.stk[this.ptr - 1].length;
        this.stk[this.ptr++] = 1;
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2] - this.stk[this.ptr - 1]; this.ptr--;
        this.stk[this.ptr++] = -1;
        this.stk[this.ptr++] = 0;
        this.stk[this.ptr++] = $f42;
        var t54 = this.stk[--this.ptr];
        var t52 = this.stk[--this.ptr];
        var t51 = this.stk[--this.ptr];
        var t50 = this.stk[--this.ptr];
        for (var t53 = t50; t51 < 0 ? t53 >= t52 : t53 <= t52; t53 += t51) {
            this.stk[this.ptr++] = t53;
            if (t54.call(this) == -1) break;
        }
        this.stk[this.ptr++] = "abeforeb"; //ident
        this.stk[this.ptr++] = $f43;
        this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
        this.stk[this.ptr++] = "bbeforea"; //ident
        this.stk[this.ptr++] = $f44;
        this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
        this.stk[this.ptr++] = "cws"; //ident
        var t = this.dstk.get("barcode");
        if (t === undefined) throw new Error("dict: barcode: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        if (typeof (this.stk[this.ptr - 1].length) !== "number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr - 1]);
        this.stk[this.ptr - 1] = this.stk[this.ptr - 1].length;
        this.stk[this.ptr++] = 2;
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2] * this.stk[this.ptr - 1]; this.ptr--;
        this.stk[this.ptr++] = 3;
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2] + this.stk[this.ptr - 1]; this.ptr--;
        this.stk[this.ptr - 1] = BWIPJS.psarray(this.stk[this.ptr - 1]);
        this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
        this.stk[this.ptr++] = "j"; //ident
        this.stk[this.ptr++] = 0;
        this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
        var t = this.dstk.get("msglen");
        if (t === undefined) throw new Error("dict: msglen: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = 0;
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2] > this.stk[this.ptr - 1]; this.ptr--;
        this.stk[this.ptr++] = $f45;
        this.stk[this.ptr++] = $f46;
        var t55 = this.stk[--this.ptr];
        var t56 = this.stk[--this.ptr];
        if (this.stk[--this.ptr]) {
            if (t56.call(this) == -1) return -1;
        } else {
            if (t55.call(this) == -1) return -1;
        }
        this.stk[this.ptr++] = "nums"; //ident
        var t = this.stk[this.ptr - 2]; this.stk[this.ptr - 2] = this.stk[this.ptr - 1]; this.stk[this.ptr - 1] = t;
        this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
        this.stk[this.ptr++] = "nchars"; //ident
        var t = this.stk[this.ptr - 2]; this.stk[this.ptr - 2] = this.stk[this.ptr - 1]; this.stk[this.ptr - 1] = t;
        this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
        this.stk[this.ptr++] = $f51;
        var t61 = this.stk[--this.ptr];
        while (true) {
            if (t61.call(this) == -1) break;
        }
        this.stk[this.ptr++] = "i"; //ident
        this.stk[this.ptr++] = 0;
        this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
        this.stk[this.ptr++] = $f76;
        var t86 = this.stk[--this.ptr];
        while (true) {
            if (t86.call(this) == -1) break;
        }
        this.stk[this.ptr++] = "cws"; //ident
        var t = this.dstk.get("cws");
        if (t === undefined) throw new Error("dict: cws: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = 0;
        var t = this.dstk.get("j");
        if (t === undefined) throw new Error("dict: j: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr - 3] = this.stk[this.ptr - 3].subset(this.stk[this.ptr - 2], this.stk[this.ptr - 1]); this.ptr -= 2;
        this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    }
    function $f78() {
        this.stk[this.ptr++] = "i"; //ident
        var t = this.stk[this.ptr - 2]; this.stk[this.ptr - 2] = this.stk[this.ptr - 1]; this.stk[this.ptr - 1] = t;
        this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
        this.stk[this.ptr++] = "csum"; //ident
        var t = this.dstk.get("csum");
        if (t === undefined) throw new Error("dict: csum: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = this.dstk.get("cws");
        if (t === undefined) throw new Error("dict: cws: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = this.dstk.get("i");
        if (t === undefined) throw new Error("dict: i: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        if (this.stk[this.ptr - 2] instanceof BWIPJS.psstring || this.stk[this.ptr - 2] instanceof BWIPJS.psarray)
            this.stk[this.ptr - 2] = this.stk[this.ptr - 2].get(this.stk[this.ptr - 1]);
        else this.stk[this.ptr - 2] = this.stk[this.ptr - 2][this.stk[this.ptr - 1].toString()];
        this.ptr--;
        var t = this.dstk.get("i");
        if (t === undefined) throw new Error("dict: i: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2] * this.stk[this.ptr - 1]; this.ptr--;
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2] + this.stk[this.ptr - 1]; this.ptr--;
        this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    }
    function $f79() {
        this.stk[this.ptr++] = "i"; //ident
        var t = this.stk[this.ptr - 2]; this.stk[this.ptr - 2] = this.stk[this.ptr - 1]; this.stk[this.ptr - 1] = t;
        this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
        var t = this.dstk.get("sbs");
        if (t === undefined) throw new Error("dict: sbs: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = this.dstk.get("i");
        if (t === undefined) throw new Error("dict: i: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        this.stk[this.ptr++] = 6;
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2] * this.stk[this.ptr - 1]; this.ptr--;
        var t = this.dstk.get("encs");
        if (t === undefined) throw new Error("dict: encs: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = this.dstk.get("cws");
        if (t === undefined) throw new Error("dict: cws: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        var t = this.dstk.get("i");
        if (t === undefined) throw new Error("dict: i: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
        if (this.stk[this.ptr - 2] instanceof BWIPJS.psstring || this.stk[this.ptr - 2] instanceof BWIPJS.psarray)
            this.stk[this.ptr - 2] = this.stk[this.ptr - 2].get(this.stk[this.ptr - 1]);
        else this.stk[this.ptr - 2] = this.stk[this.ptr - 2][this.stk[this.ptr - 1].toString()];
        this.ptr--;
        if (this.stk[this.ptr - 2] instanceof BWIPJS.psstring || this.stk[this.ptr - 2] instanceof BWIPJS.psarray)
            this.stk[this.ptr - 2] = this.stk[this.ptr - 2].get(this.stk[this.ptr - 1]);
        else this.stk[this.ptr - 2] = this.stk[this.ptr - 2][this.stk[this.ptr - 1].toString()];
        this.ptr--;
        this.stk[this.ptr - 3].assign(this.stk[this.ptr - 2], this.stk[this.ptr - 1]); this.ptr -= 3;
    }
    function $f80() {
        this.stk[this.ptr++] = 48;
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2] - this.stk[this.ptr - 1]; this.ptr--;
    }
    function $f81() {
        var t = this.dstk.get("height");
        if (t === undefined) throw new Error("dict: height: undefined");
        if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    }
    function $f82() {
        this.stk[this.ptr++] = 0;
    }
    this.stk[this.ptr++] = 20;
    this.stk[this.ptr - 1] = {};
    this.dict = this.stk[--this.ptr]; this.dstk.push(this.dict);
    this.stk[this.ptr++] = "options"; //ident
    var t = this.stk[this.ptr - 2]; this.stk[this.ptr - 2] = this.stk[this.ptr - 1]; this.stk[this.ptr - 1] = t;
    this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    this.stk[this.ptr++] = "barcode"; //ident
    var t = this.stk[this.ptr - 2]; this.stk[this.ptr - 2] = this.stk[this.ptr - 1]; this.stk[this.ptr - 1] = t;
    this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    this.stk[this.ptr++] = "dontdraw"; //ident
    this.stk[this.ptr++] = false;
    this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    this.stk[this.ptr++] = "includetext"; //ident
    this.stk[this.ptr++] = false;
    this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    this.stk[this.ptr++] = "textfont"; //ident
    this.stk[this.ptr++] = "Courier"; //ident
    this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    this.stk[this.ptr++] = "textsize"; //ident
    this.stk[this.ptr++] = 10;
    this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    this.stk[this.ptr++] = "textxoffset"; //ident
    this.stk[this.ptr++] = 0;
    this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    this.stk[this.ptr++] = "textyoffset"; //ident
    this.stk[this.ptr++] = -7;
    this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    this.stk[this.ptr++] = "height"; //ident
    this.stk[this.ptr++] = 1;
    this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    this.stk[this.ptr++] = "encoding"; //ident
    this.stk[this.ptr++] = BWIPJS.psstring("auto");
    this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    this.stk[this.ptr++] = "raw"; //ident
    this.stk[this.ptr++] = false;
    this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    this.stk[this.ptr++] = "parse"; //ident
    this.stk[this.ptr++] = false;
    this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    this.stk[this.ptr++] = "parsefnc"; //ident
    this.stk[this.ptr++] = false;
    this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    var t = this.dstk.get("options");
    if (t === undefined) throw new Error("dict: options: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    this.stk[this.ptr - 1] = BWIPJS.pstype(this.stk[this.ptr - 1]);
    this.stk[this.ptr++] = "stringtype"; //ident
    if (this.stk[this.ptr - 2] instanceof BWIPJS.psstring)
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2].toString() == this.stk[this.ptr - 1];
    else this.stk[this.ptr - 2] = this.stk[this.ptr - 2] == this.stk[this.ptr - 1];
    this.ptr--;
    this.stk[this.ptr++] = $f4;
    var t4 = this.stk[--this.ptr];
    if (this.stk[--this.ptr]) {
        if (t4.call(this) == -1) return -1;
    }
    var t = this.dstk.get("options");
    if (t === undefined) throw new Error("dict: options: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    this.stk[this.ptr++] = $f5;
    var t7 = this.stk[--this.ptr];
    var t6 = this.stk[--this.ptr];
    for (var t5 in t6) {
        if (t6 instanceof BWIPJS.psstring || t6 instanceof BWIPJS.psarray) {
            if (t5.charCodeAt(0) > 57) continue;
            this.stk[this.ptr++] = t6.get(t5);
        } else {
            this.stk[this.ptr++] = t5;
            this.stk[this.ptr++] = t6[t5];
        }
        if (t7.call(this) == -1) break;
    }
    this.stk[this.ptr++] = "textfont"; //ident
    var t = this.dstk.get("textfont");
    if (t === undefined) throw new Error("dict: textfont: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    this.stk[this.ptr++] = "textsize"; //ident
    var t = this.dstk.get("textsize");
    if (t === undefined) throw new Error("dict: textsize: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    this.stk[this.ptr - 1] = parseFloat(this.stk[this.ptr - 1]);
    this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    this.stk[this.ptr++] = "textxoffset"; //ident
    var t = this.dstk.get("textxoffset");
    if (t === undefined) throw new Error("dict: textxoffset: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    this.stk[this.ptr - 1] = parseFloat(this.stk[this.ptr - 1]);
    this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    this.stk[this.ptr++] = "textyoffset"; //ident
    var t = this.dstk.get("textyoffset");
    if (t === undefined) throw new Error("dict: textyoffset: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    this.stk[this.ptr - 1] = parseFloat(this.stk[this.ptr - 1]);
    this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    this.stk[this.ptr++] = "height"; //ident
    var t = this.dstk.get("height");
    if (t === undefined) throw new Error("dict: height: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    this.stk[this.ptr - 1] = parseFloat(this.stk[this.ptr - 1]);
    this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    var t = this.dstk.get("parse");
    if (t === undefined) throw new Error("dict: parse: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    this.stk[this.ptr++] = $f9;
    var t11 = this.stk[--this.ptr];
    if (this.stk[--this.ptr]) {
        if (t11.call(this) == -1) return -1;
    }
    this.stk[this.ptr++] = "barlen"; //ident
    var t = this.dstk.get("barcode");
    if (t === undefined) throw new Error("dict: barcode: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    if (typeof (this.stk[this.ptr - 1].length) !== "number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr - 1]);
    this.stk[this.ptr - 1] = this.stk[this.ptr - 1].length;
    this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    this.stk[this.ptr++] = "sta"; //ident
    this.stk[this.ptr++] = -1;
    this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    this.stk[this.ptr++] = "stb"; //ident
    this.stk[this.ptr++] = -2;
    this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    this.stk[this.ptr++] = "stc"; //ident
    this.stk[this.ptr++] = -3;
    this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    this.stk[this.ptr++] = "swa"; //ident
    this.stk[this.ptr++] = -4;
    this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    this.stk[this.ptr++] = "swb"; //ident
    this.stk[this.ptr++] = -5;
    this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    this.stk[this.ptr++] = "swc"; //ident
    this.stk[this.ptr++] = -6;
    this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    this.stk[this.ptr++] = "fn1"; //ident
    this.stk[this.ptr++] = -7;
    this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    this.stk[this.ptr++] = "fn2"; //ident
    this.stk[this.ptr++] = -8;
    this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    this.stk[this.ptr++] = "fn3"; //ident
    this.stk[this.ptr++] = -9;
    this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    this.stk[this.ptr++] = "fn4"; //ident
    this.stk[this.ptr++] = -10;
    this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    this.stk[this.ptr++] = "sft"; //ident
    this.stk[this.ptr++] = -11;
    this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    this.stk[this.ptr++] = "stp"; //ident
    this.stk[this.ptr++] = -12;
    this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    this.stk[this.ptr++] = "lka"; //ident
    this.stk[this.ptr++] = -13;
    this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    this.stk[this.ptr++] = "lkc"; //ident
    this.stk[this.ptr++] = -14;
    this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    this.stk[this.ptr++] = "charmaps"; //ident
    this.stk[this.ptr++] = Infinity;
    this.stk[this.ptr++] = BWIPJS.psarray([32, 32, BWIPJS.psstring("00")]);
    this.stk[this.ptr++] = BWIPJS.psarray([BWIPJS.psstring("!"), BWIPJS.psstring("!"), BWIPJS.psstring("01")]);
    this.stk[this.ptr++] = BWIPJS.psarray([BWIPJS.psstring("\""), BWIPJS.psstring("\""), BWIPJS.psstring("02")]);
    this.stk[this.ptr++] = BWIPJS.psarray([BWIPJS.psstring("#"), BWIPJS.psstring("#"), BWIPJS.psstring("03")]);
    this.stk[this.ptr++] = BWIPJS.psarray([BWIPJS.psstring("$"), BWIPJS.psstring("$"), BWIPJS.psstring("04")]);
    this.stk[this.ptr++] = BWIPJS.psarray([BWIPJS.psstring("%"), BWIPJS.psstring("%"), BWIPJS.psstring("05")]);
    this.stk[this.ptr++] = BWIPJS.psarray([BWIPJS.psstring("&"), BWIPJS.psstring("&"), BWIPJS.psstring("06")]);
    this.stk[this.ptr++] = BWIPJS.psarray([BWIPJS.psstring("'"), BWIPJS.psstring("'"), BWIPJS.psstring("07")]);
    this.stk[this.ptr++] = BWIPJS.psarray([40, 40, BWIPJS.psstring("08")]);
    this.stk[this.ptr++] = BWIPJS.psarray([41, 41, BWIPJS.psstring("09")]);
    this.stk[this.ptr++] = BWIPJS.psarray([BWIPJS.psstring("*"), BWIPJS.psstring("*"), BWIPJS.psstring("10")]);
    this.stk[this.ptr++] = BWIPJS.psarray([BWIPJS.psstring("+"), BWIPJS.psstring("+"), BWIPJS.psstring("11")]);
    this.stk[this.ptr++] = BWIPJS.psarray([BWIPJS.psstring(","), BWIPJS.psstring(","), BWIPJS.psstring("12")]);
    this.stk[this.ptr++] = BWIPJS.psarray([BWIPJS.psstring("-"), BWIPJS.psstring("-"), BWIPJS.psstring("13")]);
    this.stk[this.ptr++] = BWIPJS.psarray([BWIPJS.psstring("."), BWIPJS.psstring("."), BWIPJS.psstring("14")]);
    this.stk[this.ptr++] = BWIPJS.psarray([BWIPJS.psstring("/"), BWIPJS.psstring("/"), BWIPJS.psstring("15")]);
    this.stk[this.ptr++] = BWIPJS.psarray([BWIPJS.psstring("0"), BWIPJS.psstring("0"), BWIPJS.psstring("16")]);
    this.stk[this.ptr++] = BWIPJS.psarray([BWIPJS.psstring("1"), BWIPJS.psstring("1"), BWIPJS.psstring("17")]);
    this.stk[this.ptr++] = BWIPJS.psarray([BWIPJS.psstring("2"), BWIPJS.psstring("2"), BWIPJS.psstring("18")]);
    this.stk[this.ptr++] = BWIPJS.psarray([BWIPJS.psstring("3"), BWIPJS.psstring("3"), BWIPJS.psstring("19")]);
    this.stk[this.ptr++] = BWIPJS.psarray([BWIPJS.psstring("4"), BWIPJS.psstring("4"), BWIPJS.psstring("20")]);
    this.stk[this.ptr++] = BWIPJS.psarray([BWIPJS.psstring("5"), BWIPJS.psstring("5"), BWIPJS.psstring("21")]);
    this.stk[this.ptr++] = BWIPJS.psarray([BWIPJS.psstring("6"), BWIPJS.psstring("6"), BWIPJS.psstring("22")]);
    this.stk[this.ptr++] = BWIPJS.psarray([BWIPJS.psstring("7"), BWIPJS.psstring("7"), BWIPJS.psstring("23")]);
    this.stk[this.ptr++] = BWIPJS.psarray([BWIPJS.psstring("8"), BWIPJS.psstring("8"), BWIPJS.psstring("24")]);
    this.stk[this.ptr++] = BWIPJS.psarray([BWIPJS.psstring("9"), BWIPJS.psstring("9"), BWIPJS.psstring("25")]);
    this.stk[this.ptr++] = BWIPJS.psarray([BWIPJS.psstring(":"), BWIPJS.psstring(":"), BWIPJS.psstring("26")]);
    this.stk[this.ptr++] = BWIPJS.psarray([BWIPJS.psstring(";"), BWIPJS.psstring(";"), BWIPJS.psstring("27")]);
    this.stk[this.ptr++] = BWIPJS.psarray([BWIPJS.psstring("<"), BWIPJS.psstring("<"), BWIPJS.psstring("28")]);
    this.stk[this.ptr++] = BWIPJS.psarray([BWIPJS.psstring("="), BWIPJS.psstring("="), BWIPJS.psstring("29")]);
    this.stk[this.ptr++] = BWIPJS.psarray([BWIPJS.psstring(">"), BWIPJS.psstring(">"), BWIPJS.psstring("30")]);
    this.stk[this.ptr++] = BWIPJS.psarray([BWIPJS.psstring("?"), BWIPJS.psstring("?"), BWIPJS.psstring("31")]);
    this.stk[this.ptr++] = BWIPJS.psarray([BWIPJS.psstring("@"), BWIPJS.psstring("@"), BWIPJS.psstring("32")]);
    this.stk[this.ptr++] = BWIPJS.psarray([BWIPJS.psstring("A"), BWIPJS.psstring("A"), BWIPJS.psstring("33")]);
    this.stk[this.ptr++] = BWIPJS.psarray([BWIPJS.psstring("B"), BWIPJS.psstring("B"), BWIPJS.psstring("34")]);
    this.stk[this.ptr++] = BWIPJS.psarray([BWIPJS.psstring("C"), BWIPJS.psstring("C"), BWIPJS.psstring("35")]);
    this.stk[this.ptr++] = BWIPJS.psarray([BWIPJS.psstring("D"), BWIPJS.psstring("D"), BWIPJS.psstring("36")]);
    this.stk[this.ptr++] = BWIPJS.psarray([BWIPJS.psstring("E"), BWIPJS.psstring("E"), BWIPJS.psstring("37")]);
    this.stk[this.ptr++] = BWIPJS.psarray([BWIPJS.psstring("F"), BWIPJS.psstring("F"), BWIPJS.psstring("38")]);
    this.stk[this.ptr++] = BWIPJS.psarray([BWIPJS.psstring("G"), BWIPJS.psstring("G"), BWIPJS.psstring("39")]);
    this.stk[this.ptr++] = BWIPJS.psarray([BWIPJS.psstring("H"), BWIPJS.psstring("H"), BWIPJS.psstring("40")]);
    this.stk[this.ptr++] = BWIPJS.psarray([BWIPJS.psstring("I"), BWIPJS.psstring("I"), BWIPJS.psstring("41")]);
    this.stk[this.ptr++] = BWIPJS.psarray([BWIPJS.psstring("J"), BWIPJS.psstring("J"), BWIPJS.psstring("42")]);
    this.stk[this.ptr++] = BWIPJS.psarray([BWIPJS.psstring("K"), BWIPJS.psstring("K"), BWIPJS.psstring("43")]);
    this.stk[this.ptr++] = BWIPJS.psarray([BWIPJS.psstring("L"), BWIPJS.psstring("L"), BWIPJS.psstring("44")]);
    this.stk[this.ptr++] = BWIPJS.psarray([BWIPJS.psstring("M"), BWIPJS.psstring("M"), BWIPJS.psstring("45")]);
    this.stk[this.ptr++] = BWIPJS.psarray([BWIPJS.psstring("N"), BWIPJS.psstring("N"), BWIPJS.psstring("46")]);
    this.stk[this.ptr++] = BWIPJS.psarray([BWIPJS.psstring("O"), BWIPJS.psstring("O"), BWIPJS.psstring("47")]);
    this.stk[this.ptr++] = BWIPJS.psarray([BWIPJS.psstring("P"), BWIPJS.psstring("P"), BWIPJS.psstring("48")]);
    this.stk[this.ptr++] = BWIPJS.psarray([BWIPJS.psstring("Q"), BWIPJS.psstring("Q"), BWIPJS.psstring("49")]);
    this.stk[this.ptr++] = BWIPJS.psarray([BWIPJS.psstring("R"), BWIPJS.psstring("R"), BWIPJS.psstring("50")]);
    this.stk[this.ptr++] = BWIPJS.psarray([BWIPJS.psstring("S"), BWIPJS.psstring("S"), BWIPJS.psstring("51")]);
    this.stk[this.ptr++] = BWIPJS.psarray([BWIPJS.psstring("T"), BWIPJS.psstring("T"), BWIPJS.psstring("52")]);
    this.stk[this.ptr++] = BWIPJS.psarray([BWIPJS.psstring("U"), BWIPJS.psstring("U"), BWIPJS.psstring("53")]);
    this.stk[this.ptr++] = BWIPJS.psarray([BWIPJS.psstring("V"), BWIPJS.psstring("V"), BWIPJS.psstring("54")]);
    this.stk[this.ptr++] = BWIPJS.psarray([BWIPJS.psstring("W"), BWIPJS.psstring("W"), BWIPJS.psstring("55")]);
    this.stk[this.ptr++] = BWIPJS.psarray([BWIPJS.psstring("X"), BWIPJS.psstring("X"), BWIPJS.psstring("56")]);
    this.stk[this.ptr++] = BWIPJS.psarray([BWIPJS.psstring("Y"), BWIPJS.psstring("Y"), BWIPJS.psstring("57")]);
    this.stk[this.ptr++] = BWIPJS.psarray([BWIPJS.psstring("Z"), BWIPJS.psstring("Z"), BWIPJS.psstring("58")]);
    this.stk[this.ptr++] = BWIPJS.psarray([BWIPJS.psstring("["), BWIPJS.psstring("["), BWIPJS.psstring("59")]);
    this.stk[this.ptr++] = BWIPJS.psarray([92, 92, BWIPJS.psstring("60")]);
    this.stk[this.ptr++] = BWIPJS.psarray([BWIPJS.psstring("]"), BWIPJS.psstring("]"), BWIPJS.psstring("61")]);
    this.stk[this.ptr++] = BWIPJS.psarray([BWIPJS.psstring("^"), BWIPJS.psstring("^"), BWIPJS.psstring("62")]);
    this.stk[this.ptr++] = BWIPJS.psarray([BWIPJS.psstring("_"), BWIPJS.psstring("_"), BWIPJS.psstring("63")]);
    this.stk[this.ptr++] = BWIPJS.psarray([0, BWIPJS.psstring("`"), BWIPJS.psstring("64")]);
    this.stk[this.ptr++] = BWIPJS.psarray([1, BWIPJS.psstring("a"), BWIPJS.psstring("65")]);
    this.stk[this.ptr++] = BWIPJS.psarray([2, BWIPJS.psstring("b"), BWIPJS.psstring("66")]);
    this.stk[this.ptr++] = BWIPJS.psarray([3, BWIPJS.psstring("c"), BWIPJS.psstring("67")]);
    this.stk[this.ptr++] = BWIPJS.psarray([4, BWIPJS.psstring("d"), BWIPJS.psstring("68")]);
    this.stk[this.ptr++] = BWIPJS.psarray([5, BWIPJS.psstring("e"), BWIPJS.psstring("69")]);
    this.stk[this.ptr++] = BWIPJS.psarray([6, BWIPJS.psstring("f"), BWIPJS.psstring("70")]);
    this.stk[this.ptr++] = BWIPJS.psarray([7, BWIPJS.psstring("g"), BWIPJS.psstring("71")]);
    this.stk[this.ptr++] = BWIPJS.psarray([8, BWIPJS.psstring("h"), BWIPJS.psstring("72")]);
    this.stk[this.ptr++] = BWIPJS.psarray([9, BWIPJS.psstring("i"), BWIPJS.psstring("73")]);
    this.stk[this.ptr++] = BWIPJS.psarray([10, BWIPJS.psstring("j"), BWIPJS.psstring("74")]);
    this.stk[this.ptr++] = BWIPJS.psarray([11, BWIPJS.psstring("k"), BWIPJS.psstring("75")]);
    this.stk[this.ptr++] = BWIPJS.psarray([12, BWIPJS.psstring("l"), BWIPJS.psstring("76")]);
    this.stk[this.ptr++] = BWIPJS.psarray([13, BWIPJS.psstring("m"), BWIPJS.psstring("77")]);
    this.stk[this.ptr++] = BWIPJS.psarray([14, BWIPJS.psstring("n"), BWIPJS.psstring("78")]);
    this.stk[this.ptr++] = BWIPJS.psarray([15, BWIPJS.psstring("o"), BWIPJS.psstring("79")]);
    this.stk[this.ptr++] = BWIPJS.psarray([16, BWIPJS.psstring("p"), BWIPJS.psstring("80")]);
    this.stk[this.ptr++] = BWIPJS.psarray([17, BWIPJS.psstring("q"), BWIPJS.psstring("81")]);
    this.stk[this.ptr++] = BWIPJS.psarray([18, BWIPJS.psstring("r"), BWIPJS.psstring("82")]);
    this.stk[this.ptr++] = BWIPJS.psarray([19, BWIPJS.psstring("s"), BWIPJS.psstring("83")]);
    this.stk[this.ptr++] = BWIPJS.psarray([20, BWIPJS.psstring("t"), BWIPJS.psstring("84")]);
    this.stk[this.ptr++] = BWIPJS.psarray([21, BWIPJS.psstring("u"), BWIPJS.psstring("85")]);
    this.stk[this.ptr++] = BWIPJS.psarray([22, BWIPJS.psstring("v"), BWIPJS.psstring("86")]);
    this.stk[this.ptr++] = BWIPJS.psarray([23, BWIPJS.psstring("w"), BWIPJS.psstring("87")]);
    this.stk[this.ptr++] = BWIPJS.psarray([24, BWIPJS.psstring("x"), BWIPJS.psstring("88")]);
    this.stk[this.ptr++] = BWIPJS.psarray([25, BWIPJS.psstring("y"), BWIPJS.psstring("89")]);
    this.stk[this.ptr++] = BWIPJS.psarray([26, BWIPJS.psstring("z"), BWIPJS.psstring("90")]);
    this.stk[this.ptr++] = BWIPJS.psarray([27, BWIPJS.psstring("{"), BWIPJS.psstring("91")]);
    this.stk[this.ptr++] = BWIPJS.psarray([28, BWIPJS.psstring("|"), BWIPJS.psstring("92")]);
    this.stk[this.ptr++] = BWIPJS.psarray([29, BWIPJS.psstring("}"), BWIPJS.psstring("93")]);
    this.stk[this.ptr++] = BWIPJS.psarray([30, BWIPJS.psstring("~"), BWIPJS.psstring("94")]);
    this.stk[this.ptr++] = BWIPJS.psarray([31, 127, BWIPJS.psstring("95")]);
    this.stk[this.ptr++] = Infinity;
    var t = this.dstk.get("fn3");
    if (t === undefined) throw new Error("dict: fn3: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    var t = this.dstk.get("fn3");
    if (t === undefined) throw new Error("dict: fn3: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    this.stk[this.ptr++] = BWIPJS.psstring("96");
    for (var i = this.ptr - 1; i >= 0 && this.stk[i] !== Infinity; i--)    ;
    if (i < 0) throw "array: underflow";
    var t = this.stk.splice(i + 1, this.ptr - 1 - i);
    this.ptr = i;
    this.stk[this.ptr++] = BWIPJS.psarray(t);
    this.stk[this.ptr++] = Infinity;
    var t = this.dstk.get("fn2");
    if (t === undefined) throw new Error("dict: fn2: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    var t = this.dstk.get("fn2");
    if (t === undefined) throw new Error("dict: fn2: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    this.stk[this.ptr++] = BWIPJS.psstring("97");
    for (var i = this.ptr - 1; i >= 0 && this.stk[i] !== Infinity; i--)    ;
    if (i < 0) throw "array: underflow";
    var t = this.stk.splice(i + 1, this.ptr - 1 - i);
    this.ptr = i;
    this.stk[this.ptr++] = BWIPJS.psarray(t);
    this.stk[this.ptr++] = Infinity;
    var t = this.dstk.get("sft");
    if (t === undefined) throw new Error("dict: sft: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    var t = this.dstk.get("sft");
    if (t === undefined) throw new Error("dict: sft: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    this.stk[this.ptr++] = BWIPJS.psstring("98");
    for (var i = this.ptr - 1; i >= 0 && this.stk[i] !== Infinity; i--)    ;
    if (i < 0) throw "array: underflow";
    var t = this.stk.splice(i + 1, this.ptr - 1 - i);
    this.ptr = i;
    this.stk[this.ptr++] = BWIPJS.psarray(t);
    this.stk[this.ptr++] = Infinity;
    var t = this.dstk.get("swc");
    if (t === undefined) throw new Error("dict: swc: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    var t = this.dstk.get("swc");
    if (t === undefined) throw new Error("dict: swc: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    this.stk[this.ptr++] = BWIPJS.psstring("99");
    for (var i = this.ptr - 1; i >= 0 && this.stk[i] !== Infinity; i--)    ;
    if (i < 0) throw "array: underflow";
    var t = this.stk.splice(i + 1, this.ptr - 1 - i);
    this.ptr = i;
    this.stk[this.ptr++] = BWIPJS.psarray(t);
    this.stk[this.ptr++] = Infinity;
    var t = this.dstk.get("swb");
    if (t === undefined) throw new Error("dict: swb: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    var t = this.dstk.get("fn4");
    if (t === undefined) throw new Error("dict: fn4: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    var t = this.dstk.get("swb");
    if (t === undefined) throw new Error("dict: swb: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    for (var i = this.ptr - 1; i >= 0 && this.stk[i] !== Infinity; i--)    ;
    if (i < 0) throw "array: underflow";
    var t = this.stk.splice(i + 1, this.ptr - 1 - i);
    this.ptr = i;
    this.stk[this.ptr++] = BWIPJS.psarray(t);
    this.stk[this.ptr++] = Infinity;
    var t = this.dstk.get("fn4");
    if (t === undefined) throw new Error("dict: fn4: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    var t = this.dstk.get("swa");
    if (t === undefined) throw new Error("dict: swa: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    var t = this.dstk.get("swa");
    if (t === undefined) throw new Error("dict: swa: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    for (var i = this.ptr - 1; i >= 0 && this.stk[i] !== Infinity; i--)    ;
    if (i < 0) throw "array: underflow";
    var t = this.stk.splice(i + 1, this.ptr - 1 - i);
    this.ptr = i;
    this.stk[this.ptr++] = BWIPJS.psarray(t);
    this.stk[this.ptr++] = Infinity;
    var t = this.dstk.get("fn1");
    if (t === undefined) throw new Error("dict: fn1: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    var t = this.dstk.get("fn1");
    if (t === undefined) throw new Error("dict: fn1: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    var t = this.dstk.get("fn1");
    if (t === undefined) throw new Error("dict: fn1: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    for (var i = this.ptr - 1; i >= 0 && this.stk[i] !== Infinity; i--)    ;
    if (i < 0) throw "array: underflow";
    var t = this.stk.splice(i + 1, this.ptr - 1 - i);
    this.ptr = i;
    this.stk[this.ptr++] = BWIPJS.psarray(t);
    this.stk[this.ptr++] = Infinity;
    var t = this.dstk.get("sta");
    if (t === undefined) throw new Error("dict: sta: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    var t = this.dstk.get("sta");
    if (t === undefined) throw new Error("dict: sta: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    var t = this.dstk.get("sta");
    if (t === undefined) throw new Error("dict: sta: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    for (var i = this.ptr - 1; i >= 0 && this.stk[i] !== Infinity; i--)    ;
    if (i < 0) throw "array: underflow";
    var t = this.stk.splice(i + 1, this.ptr - 1 - i);
    this.ptr = i;
    this.stk[this.ptr++] = BWIPJS.psarray(t);
    this.stk[this.ptr++] = Infinity;
    var t = this.dstk.get("stb");
    if (t === undefined) throw new Error("dict: stb: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    var t = this.dstk.get("stb");
    if (t === undefined) throw new Error("dict: stb: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    var t = this.dstk.get("stb");
    if (t === undefined) throw new Error("dict: stb: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    for (var i = this.ptr - 1; i >= 0 && this.stk[i] !== Infinity; i--)    ;
    if (i < 0) throw "array: underflow";
    var t = this.stk.splice(i + 1, this.ptr - 1 - i);
    this.ptr = i;
    this.stk[this.ptr++] = BWIPJS.psarray(t);
    this.stk[this.ptr++] = Infinity;
    var t = this.dstk.get("stc");
    if (t === undefined) throw new Error("dict: stc: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    var t = this.dstk.get("stc");
    if (t === undefined) throw new Error("dict: stc: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    var t = this.dstk.get("stc");
    if (t === undefined) throw new Error("dict: stc: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    for (var i = this.ptr - 1; i >= 0 && this.stk[i] !== Infinity; i--)    ;
    if (i < 0) throw "array: underflow";
    var t = this.stk.splice(i + 1, this.ptr - 1 - i);
    this.ptr = i;
    this.stk[this.ptr++] = BWIPJS.psarray(t);
    this.stk[this.ptr++] = Infinity;
    var t = this.dstk.get("stp");
    if (t === undefined) throw new Error("dict: stp: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    var t = this.dstk.get("stp");
    if (t === undefined) throw new Error("dict: stp: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    var t = this.dstk.get("stp");
    if (t === undefined) throw new Error("dict: stp: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    for (var i = this.ptr - 1; i >= 0 && this.stk[i] !== Infinity; i--)    ;
    if (i < 0) throw "array: underflow";
    var t = this.stk.splice(i + 1, this.ptr - 1 - i);
    this.ptr = i;
    this.stk[this.ptr++] = BWIPJS.psarray(t);
    for (var i = this.ptr - 1; i >= 0 && this.stk[i] !== Infinity; i--)    ;
    if (i < 0) throw "array: underflow";
    var t = this.stk.splice(i + 1, this.ptr - 1 - i);
    this.ptr = i;
    this.stk[this.ptr++] = BWIPJS.psarray(t);
    this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    this.stk[this.ptr++] = "charvals"; //ident
    this.stk[this.ptr++] = Infinity;
    this.stk[this.ptr++] = 109;
    this.stk[this.ptr - 1] = {};
    this.stk[this.ptr++] = 109;
    this.stk[this.ptr - 1] = {};
    this.stk[this.ptr++] = 109;
    this.stk[this.ptr - 1] = {};
    for (var i = this.ptr - 1; i >= 0 && this.stk[i] !== Infinity; i--)    ;
    if (i < 0) throw "array: underflow";
    var t = this.stk.splice(i + 1, this.ptr - 1 - i);
    this.ptr = i;
    this.stk[this.ptr++] = BWIPJS.psarray(t);
    this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    this.stk[this.ptr++] = 0;
    this.stk[this.ptr++] = 1;
    var t = this.dstk.get("charmaps");
    if (t === undefined) throw new Error("dict: charmaps: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    if (typeof (this.stk[this.ptr - 1].length) !== "number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr - 1]);
    this.stk[this.ptr - 1] = this.stk[this.ptr - 1].length;
    this.stk[this.ptr++] = 1;
    this.stk[this.ptr - 2] = this.stk[this.ptr - 2] - this.stk[this.ptr - 1]; this.ptr--;
    this.stk[this.ptr++] = $f12;
    var t22 = this.stk[--this.ptr];
    var t20 = this.stk[--this.ptr];
    var t19 = this.stk[--this.ptr];
    var t18 = this.stk[--this.ptr];
    for (var t21 = t18; t19 < 0 ? t21 >= t20 : t21 <= t20; t21 += t19) {
        this.stk[this.ptr++] = t21;
        if (t22.call(this) == -1) break;
    }
    this.stk[this.ptr++] = "seta"; //ident
    var t = this.dstk.get("charvals");
    if (t === undefined) throw new Error("dict: charvals: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    this.stk[this.ptr++] = 0;
    if (this.stk[this.ptr - 2] instanceof BWIPJS.psstring || this.stk[this.ptr - 2] instanceof BWIPJS.psarray)
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2].get(this.stk[this.ptr - 1]);
    else this.stk[this.ptr - 2] = this.stk[this.ptr - 2][this.stk[this.ptr - 1].toString()];
    this.ptr--;
    this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    this.stk[this.ptr++] = "setb"; //ident
    var t = this.dstk.get("charvals");
    if (t === undefined) throw new Error("dict: charvals: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    this.stk[this.ptr++] = 1;
    if (this.stk[this.ptr - 2] instanceof BWIPJS.psstring || this.stk[this.ptr - 2] instanceof BWIPJS.psarray)
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2].get(this.stk[this.ptr - 1]);
    else this.stk[this.ptr - 2] = this.stk[this.ptr - 2][this.stk[this.ptr - 1].toString()];
    this.ptr--;
    this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    this.stk[this.ptr++] = "setc"; //ident
    var t = this.dstk.get("charvals");
    if (t === undefined) throw new Error("dict: charvals: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    this.stk[this.ptr++] = 2;
    if (this.stk[this.ptr - 2] instanceof BWIPJS.psstring || this.stk[this.ptr - 2] instanceof BWIPJS.psarray)
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2].get(this.stk[this.ptr - 1]);
    else this.stk[this.ptr - 2] = this.stk[this.ptr - 2][this.stk[this.ptr - 1].toString()];
    this.ptr--;
    this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    var t = this.dstk.get("seta");
    if (t === undefined) throw new Error("dict: seta: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    var t = this.dstk.get("lka");
    if (t === undefined) throw new Error("dict: lka: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    var t = this.dstk.get("seta");
    if (t === undefined) throw new Error("dict: seta: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    var t = this.dstk.get("swb");
    if (t === undefined) throw new Error("dict: swb: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    if (this.stk[this.ptr - 2] instanceof BWIPJS.psstring || this.stk[this.ptr - 2] instanceof BWIPJS.psarray)
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2].get(this.stk[this.ptr - 1]);
    else this.stk[this.ptr - 2] = this.stk[this.ptr - 2][this.stk[this.ptr - 1].toString()];
    this.ptr--;
    if (this.stk[this.ptr - 3] instanceof BWIPJS.psstring || this.stk[this.ptr - 3] instanceof BWIPJS.psarray)
        this.stk[this.ptr - 3].set(this.stk[this.ptr - 2], this.stk[this.ptr - 1]);
    else this.stk[this.ptr - 3][this.stk[this.ptr - 2].toString()] = this.stk[this.ptr - 1];
    this.ptr -= 3;
    var t = this.dstk.get("seta");
    if (t === undefined) throw new Error("dict: seta: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    var t = this.dstk.get("lkc");
    if (t === undefined) throw new Error("dict: lkc: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    var t = this.dstk.get("seta");
    if (t === undefined) throw new Error("dict: seta: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    var t = this.dstk.get("swc");
    if (t === undefined) throw new Error("dict: swc: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    if (this.stk[this.ptr - 2] instanceof BWIPJS.psstring || this.stk[this.ptr - 2] instanceof BWIPJS.psarray)
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2].get(this.stk[this.ptr - 1]);
    else this.stk[this.ptr - 2] = this.stk[this.ptr - 2][this.stk[this.ptr - 1].toString()];
    this.ptr--;
    if (this.stk[this.ptr - 3] instanceof BWIPJS.psstring || this.stk[this.ptr - 3] instanceof BWIPJS.psarray)
        this.stk[this.ptr - 3].set(this.stk[this.ptr - 2], this.stk[this.ptr - 1]);
    else this.stk[this.ptr - 3][this.stk[this.ptr - 2].toString()] = this.stk[this.ptr - 1];
    this.ptr -= 3;
    var t = this.dstk.get("setb");
    if (t === undefined) throw new Error("dict: setb: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    var t = this.dstk.get("lka");
    if (t === undefined) throw new Error("dict: lka: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    var t = this.dstk.get("setb");
    if (t === undefined) throw new Error("dict: setb: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    var t = this.dstk.get("swc");
    if (t === undefined) throw new Error("dict: swc: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    if (this.stk[this.ptr - 2] instanceof BWIPJS.psstring || this.stk[this.ptr - 2] instanceof BWIPJS.psarray)
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2].get(this.stk[this.ptr - 1]);
    else this.stk[this.ptr - 2] = this.stk[this.ptr - 2][this.stk[this.ptr - 1].toString()];
    this.ptr--;
    if (this.stk[this.ptr - 3] instanceof BWIPJS.psstring || this.stk[this.ptr - 3] instanceof BWIPJS.psarray)
        this.stk[this.ptr - 3].set(this.stk[this.ptr - 2], this.stk[this.ptr - 1]);
    else this.stk[this.ptr - 3][this.stk[this.ptr - 2].toString()] = this.stk[this.ptr - 1];
    this.ptr -= 3;
    var t = this.dstk.get("setb");
    if (t === undefined) throw new Error("dict: setb: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    var t = this.dstk.get("lkc");
    if (t === undefined) throw new Error("dict: lkc: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    var t = this.dstk.get("setb");
    if (t === undefined) throw new Error("dict: setb: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    var t = this.dstk.get("swa");
    if (t === undefined) throw new Error("dict: swa: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    if (this.stk[this.ptr - 2] instanceof BWIPJS.psstring || this.stk[this.ptr - 2] instanceof BWIPJS.psarray)
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2].get(this.stk[this.ptr - 1]);
    else this.stk[this.ptr - 2] = this.stk[this.ptr - 2][this.stk[this.ptr - 1].toString()];
    this.ptr--;
    if (this.stk[this.ptr - 3] instanceof BWIPJS.psstring || this.stk[this.ptr - 3] instanceof BWIPJS.psarray)
        this.stk[this.ptr - 3].set(this.stk[this.ptr - 2], this.stk[this.ptr - 1]);
    else this.stk[this.ptr - 3][this.stk[this.ptr - 2].toString()] = this.stk[this.ptr - 1];
    this.ptr -= 3;
    var t = this.dstk.get("setc");
    if (t === undefined) throw new Error("dict: setc: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    var t = this.dstk.get("lka");
    if (t === undefined) throw new Error("dict: lka: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    var t = this.dstk.get("setc");
    if (t === undefined) throw new Error("dict: setc: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    var t = this.dstk.get("swa");
    if (t === undefined) throw new Error("dict: swa: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    if (this.stk[this.ptr - 2] instanceof BWIPJS.psstring || this.stk[this.ptr - 2] instanceof BWIPJS.psarray)
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2].get(this.stk[this.ptr - 1]);
    else this.stk[this.ptr - 2] = this.stk[this.ptr - 2][this.stk[this.ptr - 1].toString()];
    this.ptr--;
    if (this.stk[this.ptr - 3] instanceof BWIPJS.psstring || this.stk[this.ptr - 3] instanceof BWIPJS.psarray)
        this.stk[this.ptr - 3].set(this.stk[this.ptr - 2], this.stk[this.ptr - 1]);
    else this.stk[this.ptr - 3][this.stk[this.ptr - 2].toString()] = this.stk[this.ptr - 1];
    this.ptr -= 3;
    var t = this.dstk.get("setc");
    if (t === undefined) throw new Error("dict: setc: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    var t = this.dstk.get("lkc");
    if (t === undefined) throw new Error("dict: lkc: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    var t = this.dstk.get("setc");
    if (t === undefined) throw new Error("dict: setc: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    var t = this.dstk.get("swb");
    if (t === undefined) throw new Error("dict: swb: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    if (this.stk[this.ptr - 2] instanceof BWIPJS.psstring || this.stk[this.ptr - 2] instanceof BWIPJS.psarray)
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2].get(this.stk[this.ptr - 1]);
    else this.stk[this.ptr - 2] = this.stk[this.ptr - 2][this.stk[this.ptr - 1].toString()];
    this.ptr--;
    if (this.stk[this.ptr - 3] instanceof BWIPJS.psstring || this.stk[this.ptr - 3] instanceof BWIPJS.psarray)
        this.stk[this.ptr - 3].set(this.stk[this.ptr - 2], this.stk[this.ptr - 1]);
    else this.stk[this.ptr - 3][this.stk[this.ptr - 2].toString()] = this.stk[this.ptr - 1];
    this.ptr -= 3;
    var t = this.dstk.get("raw");
    if (t === undefined) throw new Error("dict: raw: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    this.stk[this.ptr++] = $f13;
    var t23 = this.stk[--this.ptr];
    if (this.stk[--this.ptr]) {
        if (t23.call(this) == -1) return -1;
    }
    var t = this.dstk.get("encoding");
    if (t === undefined) throw new Error("dict: encoding: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    this.stk[this.ptr++] = BWIPJS.psstring("raw");
    if (this.stk[this.ptr - 2] instanceof BWIPJS.psstring)
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2].toString() == this.stk[this.ptr - 1];
    else this.stk[this.ptr - 2] = this.stk[this.ptr - 2] == this.stk[this.ptr - 1];
    this.ptr--;
    this.stk[this.ptr++] = $f16;
    var t26 = this.stk[--this.ptr];
    if (this.stk[--this.ptr]) {
        if (t26.call(this) == -1) return -1;
    }
    var t = this.dstk.get("encoding");
    if (t === undefined) throw new Error("dict: encoding: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    this.stk[this.ptr++] = BWIPJS.psstring("auto");
    if (this.stk[this.ptr - 2] instanceof BWIPJS.psstring)
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2].toString() == this.stk[this.ptr - 1];
    else this.stk[this.ptr - 2] = this.stk[this.ptr - 2] == this.stk[this.ptr - 1];
    this.ptr--;
    this.stk[this.ptr++] = $f77;
    var t87 = this.stk[--this.ptr];
    if (this.stk[--this.ptr]) {
        if (t87.call(this) == -1) return -1;
    }
    this.stk[this.ptr++] = "cws"; //ident
    var t = this.dstk.get("j");
    if (t === undefined) throw new Error("dict: j: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    this.stk[this.ptr++] = 2;
    this.stk[this.ptr - 2] = this.stk[this.ptr - 2] + this.stk[this.ptr - 1]; this.ptr--;
    this.stk[this.ptr - 1] = BWIPJS.psarray(this.stk[this.ptr - 1]);
    this.stk[this.ptr] = this.stk[this.ptr - 1]; this.ptr++;
    this.stk[this.ptr++] = 0;
    var t = this.dstk.get("cws");
    if (t === undefined) throw new Error("dict: cws: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    this.stk[this.ptr - 3].assign(this.stk[this.ptr - 2], this.stk[this.ptr - 1]); this.ptr -= 3;
    this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    this.stk[this.ptr++] = "csum"; //ident
    var t = this.dstk.get("cws");
    if (t === undefined) throw new Error("dict: cws: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    this.stk[this.ptr++] = 0;
    if (this.stk[this.ptr - 2] instanceof BWIPJS.psstring || this.stk[this.ptr - 2] instanceof BWIPJS.psarray)
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2].get(this.stk[this.ptr - 1]);
    else this.stk[this.ptr - 2] = this.stk[this.ptr - 2][this.stk[this.ptr - 1].toString()];
    this.ptr--;
    this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    this.stk[this.ptr++] = 1;
    this.stk[this.ptr++] = 1;
    var t = this.dstk.get("j");
    if (t === undefined) throw new Error("dict: j: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    this.stk[this.ptr++] = 1;
    this.stk[this.ptr - 2] = this.stk[this.ptr - 2] - this.stk[this.ptr - 1]; this.ptr--;
    this.stk[this.ptr++] = $f78;
    var t92 = this.stk[--this.ptr];
    var t90 = this.stk[--this.ptr];
    var t89 = this.stk[--this.ptr];
    var t88 = this.stk[--this.ptr];
    for (var t91 = t88; t89 < 0 ? t91 >= t90 : t91 <= t90; t91 += t89) {
        this.stk[this.ptr++] = t91;
        if (t92.call(this) == -1) break;
    }
    this.stk[this.ptr++] = "csum"; //ident
    var t = this.dstk.get("csum");
    if (t === undefined) throw new Error("dict: csum: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    this.stk[this.ptr++] = 103;
    this.stk[this.ptr - 2] = this.stk[this.ptr - 2] % this.stk[this.ptr - 1]; this.ptr--;
    this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    var t = this.dstk.get("cws");
    if (t === undefined) throw new Error("dict: cws: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    var t = this.dstk.get("j");
    if (t === undefined) throw new Error("dict: j: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    var t = this.dstk.get("csum");
    if (t === undefined) throw new Error("dict: csum: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    if (this.stk[this.ptr - 3] instanceof BWIPJS.psstring || this.stk[this.ptr - 3] instanceof BWIPJS.psarray)
        this.stk[this.ptr - 3].set(this.stk[this.ptr - 2], this.stk[this.ptr - 1]);
    else this.stk[this.ptr - 3][this.stk[this.ptr - 2].toString()] = this.stk[this.ptr - 1];
    this.ptr -= 3;
    var t = this.dstk.get("cws");
    if (t === undefined) throw new Error("dict: cws: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    var t = this.dstk.get("j");
    if (t === undefined) throw new Error("dict: j: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    this.stk[this.ptr++] = 1;
    this.stk[this.ptr - 2] = this.stk[this.ptr - 2] + this.stk[this.ptr - 1]; this.ptr--;
    var t = this.dstk.get("seta");
    if (t === undefined) throw new Error("dict: seta: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    var t = this.dstk.get("stp");
    if (t === undefined) throw new Error("dict: stp: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    if (this.stk[this.ptr - 2] instanceof BWIPJS.psstring || this.stk[this.ptr - 2] instanceof BWIPJS.psarray)
        this.stk[this.ptr - 2] = this.stk[this.ptr - 2].get(this.stk[this.ptr - 1]);
    else this.stk[this.ptr - 2] = this.stk[this.ptr - 2][this.stk[this.ptr - 1].toString()];
    this.ptr--;
    if (this.stk[this.ptr - 3] instanceof BWIPJS.psstring || this.stk[this.ptr - 3] instanceof BWIPJS.psarray)
        this.stk[this.ptr - 3].set(this.stk[this.ptr - 2], this.stk[this.ptr - 1]);
    else this.stk[this.ptr - 3][this.stk[this.ptr - 2].toString()] = this.stk[this.ptr - 1];
    this.ptr -= 3;
    this.stk[this.ptr++] = "encs"; //ident
    this.stk[this.ptr++] = BWIPJS.psarray([BWIPJS.psstring("212222"), BWIPJS.psstring("222122"), BWIPJS.psstring("222221"), BWIPJS.psstring("121223"), BWIPJS.psstring("121322"), BWIPJS.psstring("131222"), BWIPJS.psstring("122213"), BWIPJS.psstring("122312"), BWIPJS.psstring("132212"), BWIPJS.psstring("221213"), BWIPJS.psstring("221312"), BWIPJS.psstring("231212"), BWIPJS.psstring("112232"), BWIPJS.psstring("122132"), BWIPJS.psstring("122231"), BWIPJS.psstring("113222"), BWIPJS.psstring("123122"), BWIPJS.psstring("123221"), BWIPJS.psstring("223211"), BWIPJS.psstring("221132"), BWIPJS.psstring("221231"), BWIPJS.psstring("213212"), BWIPJS.psstring("223112"), BWIPJS.psstring("312131"), BWIPJS.psstring("311222"), BWIPJS.psstring("321122"), BWIPJS.psstring("321221"), BWIPJS.psstring("312212"), BWIPJS.psstring("322112"), BWIPJS.psstring("322211"), BWIPJS.psstring("212123"), BWIPJS.psstring("212321"), BWIPJS.psstring("232121"), BWIPJS.psstring("111323"), BWIPJS.psstring("131123"), BWIPJS.psstring("131321"), BWIPJS.psstring("112313"), BWIPJS.psstring("132113"), BWIPJS.psstring("132311"), BWIPJS.psstring("211313"), BWIPJS.psstring("231113"), BWIPJS.psstring("231311"), BWIPJS.psstring("112133"), BWIPJS.psstring("112331"), BWIPJS.psstring("132131"), BWIPJS.psstring("113123"), BWIPJS.psstring("113321"), BWIPJS.psstring("133121"), BWIPJS.psstring("313121"), BWIPJS.psstring("211331"), BWIPJS.psstring("231131"), BWIPJS.psstring("213113"), BWIPJS.psstring("213311"), BWIPJS.psstring("213131"), BWIPJS.psstring("311123"), BWIPJS.psstring("311321"), BWIPJS.psstring("331121"), BWIPJS.psstring("312113"), BWIPJS.psstring("312311"), BWIPJS.psstring("332111"), BWIPJS.psstring("314111"), BWIPJS.psstring("221411"), BWIPJS.psstring("431111"), BWIPJS.psstring("111224"), BWIPJS.psstring("111422"), BWIPJS.psstring("121124"), BWIPJS.psstring("121421"), BWIPJS.psstring("141122"), BWIPJS.psstring("141221"), BWIPJS.psstring("112214"), BWIPJS.psstring("112412"), BWIPJS.psstring("122114"), BWIPJS.psstring("122411"), BWIPJS.psstring("142112"), BWIPJS.psstring("142211"), BWIPJS.psstring("241211"), BWIPJS.psstring("221114"), BWIPJS.psstring("413111"), BWIPJS.psstring("241112"), BWIPJS.psstring("134111"), BWIPJS.psstring("111242"), BWIPJS.psstring("121142"), BWIPJS.psstring("121241"), BWIPJS.psstring("114212"), BWIPJS.psstring("124112"), BWIPJS.psstring("124211"), BWIPJS.psstring("411212"), BWIPJS.psstring("421112"), BWIPJS.psstring("421211"), BWIPJS.psstring("212141"), BWIPJS.psstring("214121"), BWIPJS.psstring("412121"), BWIPJS.psstring("111143"), BWIPJS.psstring("111341"), BWIPJS.psstring("131141"), BWIPJS.psstring("114113"), BWIPJS.psstring("114311"), BWIPJS.psstring("411113"), BWIPJS.psstring("411311"), BWIPJS.psstring("113141"), BWIPJS.psstring("114131"), BWIPJS.psstring("311141"), BWIPJS.psstring("411131"), BWIPJS.psstring("211412"), BWIPJS.psstring("211214"), BWIPJS.psstring("211232"), BWIPJS.psstring("2331112")]);
    this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    this.stk[this.ptr++] = "sbs"; //ident
    var t = this.dstk.get("cws");
    if (t === undefined) throw new Error("dict: cws: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    if (typeof (this.stk[this.ptr - 1].length) !== "number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr - 1]);
    this.stk[this.ptr - 1] = this.stk[this.ptr - 1].length;
    this.stk[this.ptr++] = 6;
    this.stk[this.ptr - 2] = this.stk[this.ptr - 2] * this.stk[this.ptr - 1]; this.ptr--;
    this.stk[this.ptr++] = 1;
    this.stk[this.ptr - 2] = this.stk[this.ptr - 2] + this.stk[this.ptr - 1]; this.ptr--;
    this.stk[this.ptr - 1] = BWIPJS.psstring(this.stk[this.ptr - 1]);
    this.dict[this.stk[this.ptr - 2]] = this.stk[this.ptr - 1]; this.ptr -= 2;
    this.stk[this.ptr++] = 0;
    this.stk[this.ptr++] = 1;
    var t = this.dstk.get("cws");
    if (t === undefined) throw new Error("dict: cws: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    if (typeof (this.stk[this.ptr - 1].length) !== "number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr - 1]);
    this.stk[this.ptr - 1] = this.stk[this.ptr - 1].length;
    this.stk[this.ptr++] = 1;
    this.stk[this.ptr - 2] = this.stk[this.ptr - 2] - this.stk[this.ptr - 1]; this.ptr--;
    this.stk[this.ptr++] = $f79;
    var t97 = this.stk[--this.ptr];
    var t95 = this.stk[--this.ptr];
    var t94 = this.stk[--this.ptr];
    var t93 = this.stk[--this.ptr];
    for (var t96 = t93; t94 < 0 ? t96 >= t95 : t96 <= t95; t96 += t94) {
        this.stk[this.ptr++] = t96;
        if (t97.call(this) == -1) break;
    }
    this.stk[this.ptr++] = Infinity;
    this.stk[this.ptr++] = "ren"; //ident
    var t = this.dstk.get("renlinear");
    if (t === undefined) throw new Error("//renlinear: undefined");
    this.stk[this.ptr++] = t;
    this.stk[this.ptr++] = "sbs"; //ident
    this.stk[this.ptr++] = Infinity;
    var t = this.dstk.get("sbs");
    if (t === undefined) throw new Error("dict: sbs: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    this.stk[this.ptr++] = $f80;
    var t100 = this.stk[--this.ptr];
    var t99 = this.stk[--this.ptr];
    for (var t98 in t99) {
        if (t99 instanceof BWIPJS.psstring || t99 instanceof BWIPJS.psarray) {
            if (t98.charCodeAt(0) > 57) continue;
            this.stk[this.ptr++] = t99.get(t98);
        } else {
            this.stk[this.ptr++] = t98;
            this.stk[this.ptr++] = t99[t98];
        }
        if (t100.call(this) == -1) break;
    }
    for (var i = this.ptr - 1; i >= 0 && this.stk[i] !== Infinity; i--)    ;
    if (i < 0) throw "array: underflow";
    var t = this.stk.splice(i + 1, this.ptr - 1 - i);
    this.ptr = i;
    this.stk[this.ptr++] = BWIPJS.psarray(t);
    this.stk[this.ptr++] = "bhs"; //ident
    this.stk[this.ptr++] = Infinity;
    var t = this.dstk.get("sbs");
    if (t === undefined) throw new Error("dict: sbs: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    if (typeof (this.stk[this.ptr - 1].length) !== "number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr - 1]);
    this.stk[this.ptr - 1] = this.stk[this.ptr - 1].length;
    this.stk[this.ptr++] = 1;
    this.stk[this.ptr - 2] = this.stk[this.ptr - 2] + this.stk[this.ptr - 1]; this.ptr--;
    this.stk[this.ptr++] = 2;
    this.stk[this.ptr - 2] = Math.floor(this.stk[this.ptr - 2] / this.stk[this.ptr - 1]); this.ptr--;
    this.stk[this.ptr++] = $f81;
    var t103 = this.stk[--this.ptr];
    var t101 = this.stk[--this.ptr];
    for (var t102 = 0; t102 < t101; t102++) {
        if (t103.call(this) == -1) break;
    }
    for (var i = this.ptr - 1; i >= 0 && this.stk[i] !== Infinity; i--)    ;
    if (i < 0) throw "array: underflow";
    var t = this.stk.splice(i + 1, this.ptr - 1 - i);
    this.ptr = i;
    this.stk[this.ptr++] = BWIPJS.psarray(t);
    this.stk[this.ptr++] = "bbs"; //ident
    this.stk[this.ptr++] = Infinity;
    var t = this.dstk.get("sbs");
    if (t === undefined) throw new Error("dict: sbs: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    if (typeof (this.stk[this.ptr - 1].length) !== "number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr - 1]);
    this.stk[this.ptr - 1] = this.stk[this.ptr - 1].length;
    this.stk[this.ptr++] = 1;
    this.stk[this.ptr - 2] = this.stk[this.ptr - 2] + this.stk[this.ptr - 1]; this.ptr--;
    this.stk[this.ptr++] = 2;
    this.stk[this.ptr - 2] = Math.floor(this.stk[this.ptr - 2] / this.stk[this.ptr - 1]); this.ptr--;
    this.stk[this.ptr++] = $f82;
    var t106 = this.stk[--this.ptr];
    var t104 = this.stk[--this.ptr];
    for (var t105 = 0; t105 < t104; t105++) {
        if (t106.call(this) == -1) break;
    }
    for (var i = this.ptr - 1; i >= 0 && this.stk[i] !== Infinity; i--)    ;
    if (i < 0) throw "array: underflow";
    var t = this.stk.splice(i + 1, this.ptr - 1 - i);
    this.ptr = i;
    this.stk[this.ptr++] = BWIPJS.psarray(t);
    this.stk[this.ptr++] = "txt"; //ident
    this.stk[this.ptr++] = Infinity;
    this.stk[this.ptr++] = Infinity;
    var t = this.dstk.get("text");
    if (t === undefined) throw new Error("dict: text: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    var t = this.dstk.get("textxoffset");
    if (t === undefined) throw new Error("dict: textxoffset: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    var t = this.dstk.get("textyoffset");
    if (t === undefined) throw new Error("dict: textyoffset: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    var t = this.dstk.get("textfont");
    if (t === undefined) throw new Error("dict: textfont: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    var t = this.dstk.get("textsize");
    if (t === undefined) throw new Error("dict: textsize: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    for (var i = this.ptr - 1; i >= 0 && this.stk[i] !== Infinity; i--)    ;
    if (i < 0) throw "array: underflow";
    var t = this.stk.splice(i + 1, this.ptr - 1 - i);
    this.ptr = i;
    this.stk[this.ptr++] = BWIPJS.psarray(t);
    for (var i = this.ptr - 1; i >= 0 && this.stk[i] !== Infinity; i--)    ;
    if (i < 0) throw "array: underflow";
    var t = this.stk.splice(i + 1, this.ptr - 1 - i);
    this.ptr = i;
    this.stk[this.ptr++] = BWIPJS.psarray(t);
    this.stk[this.ptr++] = "textxalign"; //ident
    this.stk[this.ptr++] = BWIPJS.psstring("center");
    this.stk[this.ptr++] = "opt"; //ident
    var t = this.dstk.get("options");
    if (t === undefined) throw new Error("dict: options: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    var t = {};
    for (var i = this.ptr - 1; i >= 1 && this.stk[i] !== Infinity; i -= 2) {
        if (this.stk[i - 1] === Infinity) throw "dict: malformed stack";
        t[this.stk[i - 1]] = this.stk[i];
    }
    if (i < 0 || this.stk[i] !== Infinity) throw "dict: underflow";
    this.ptr = i;
    this.stk[this.ptr++] = t;
    var t = this.dstk.get("dontdraw");
    if (t === undefined) throw new Error("dict: dontdraw: undefined");
    if (t instanceof Function) t.call(this); else this.stk[this.ptr++] = t;
    if (typeof (this.stk[this.ptr - 1]) == "boolean") this.stk[this.ptr - 1] = !this.stk[this.ptr - 1];
    else this.stk[this.ptr - 1] = ~this.stk[this.ptr - 1];
    var t = this.dstk.get("renlinear");
    if (t === undefined) throw new Error("//renlinear: undefined");
    this.stk[this.ptr++] = t;
    var t107 = this.stk[--this.ptr];
    if (this.stk[--this.ptr]) {
        if (t107.call(this) == -1) return -1;
    }
    this.dstk.pop(); this.dict = this.dstk[this.dstk.length - 1];
}
// END OF code128





// file: bwip.js
//
// Copyright (c) 2011-2013 Mark Warren
//
// See the LICENSE file in the bwip.js root directory
// for the extended copyright notice.

// The one and only global - our class constructor
function BWIPJS() {

	// PostScript state
	this.ptr	= 0;				// operand stack pointer
	this.stk	= [];				// operand stack
	this.dict 	= {};				// current dictionary
	this.dstk	= [this.dict];		// dictionary stack
	this.gstk	= [];				// graphics state stack
	this.bmap	= null;				// host bitmap instance

	// dict-stack lookup
	this.dstk.get = function(id) {
		for (var i = this.length-1; i >= 0; i--) {
			if (this[i][id] !== undefined) {
				//BWIPJS.print('dstk::get=' + BWIPJS.pstostring(this[i][id]) +
				//	' (' + (this[i][id] instanceof Function) + ')');
				return this[i][id];
			}
		}
	}

	// Initialize the graphics
	this.greset();
}

// Objects for globally registering the encoders and fonts
BWIPJS.bwipp = {};
BWIPJS.fonts = {};

// Host-specific overrides
BWIPJS.print = function(s) {};
BWIPJS.debug = function(s) {};
//BWIPJS.load  = function(s) {};	// force a run-time error

BWIPJS.psarray = function(v) {
	if (!(this instanceof BWIPJS.psarray))
		return new BWIPJS.psarray(v);

	if (typeof(v) == "number") {
		var a = [];
		for (var i = 0; i < v; i++)
			a[i] = null;

		this.value  = a;
		this.length = v;
		this.offset = 0;
	}
	else if (v instanceof Array) {
		this.value  = v;
		this.offset = 0;
		this.length = v.length;
	}
	else {	// v is a psarray
		this.value  = [];
		this.length = v.length;
		this.offset = 0;

		for (var i = 0; i < v.length; i++)
			this.value[i] = v.value[v.offset+i];
	}
	// Define the indexes (just for show) so forall works correctly.
	// The actual implementation uses get/set.
	for (var i = 0; i < this.length; i++)
		this[i] = undefined;
}
BWIPJS.psarray.prototype.toString = function() {
	var s = '';
	for (var i = this.offset; i < this.offset+this.length; i++)
		s += ' ' + BWIPJS.pstostring(this.value[i]);
	return '[' + s.substr(1) + ']';
}
BWIPJS.psarray.prototype.valueOf = function() {
	var s = '';
	for (var i = this.offset; i < this.offset+this.length; i++)
		s += ' ' + BWIPJS.pstostring(this.value[i]);
	return '[' + s.substr(1) + ']';
}
BWIPJS.psarray.prototype.get = function(n) {
	return this.value[this.offset+parseFloat(n)];
}
BWIPJS.psarray.prototype.set = function(n, v) {
	this.value[this.offset+parseFloat(n)] = v;
}
// extracts a live subset/range of elements
BWIPJS.psarray.prototype.subset = function(offset, length) {
	if (isNaN(length) || offset+length > this.length)
		length = this.length-offset;

	var copy = new BWIPJS.psarray(length);
	copy.value  = this.value;
	copy.offset = this.offset + offset;

	return copy;
}
// assigns a subset/range of elements
BWIPJS.psarray.prototype.assign = function(offset, source) {
	if (source instanceof Array) {
		// array optimization
		if (this.length == this.value.length && this.length == source.length)
			this.value = source;
		else
			for (var i = 0; i < source.length; i++)
				this.value[this.offset+offset+i] = source[i];
	}
	else
		for (var i = 0; i < source.length; i++)
			this.value[this.offset+offset+i] = source.value[source.offset+i];
}

BWIPJS.psstring = function(v) {
	if (!(this instanceof BWIPJS.psstring))
		return new BWIPJS.psstring(v);

	if (typeof(v) == 'number') {
		this.value  = [];
		this.length = v;
		this.offset = 0;

		for (var i = 0; i < v; i++)
			this.value[i] = 0;
	}
	else if (typeof(v) == 'string') {
		this.value  = [];
		this.length = v.length;
		this.offset = 0;
		for (var i = 0; i < v.length; i++)
			this.value[i] = v.charCodeAt(i);
	}
	else { // v is a psstring
		this.value  = [];
		this.length = v.length;
		this.offset = 0;

		for (var i = 0; i < v.length; i++)
			this.value[i] = v.value[v.offset+i];
	}
	// Define the indexes (just for show) so forall works correctly.
	// The actual implementation uses get/set.
	for (var i = 0; i < this.length; i++)
		this[i] = NaN;
}
BWIPJS.psstring.prototype.toString = function() {
	var s = '';
	for (var i = this.offset; i < this.offset+this.length; i++)
		s += String.fromCharCode(this.value[i]);
	return s;
}
BWIPJS.psstring.prototype.valueOf = function() {
	var s = '';
	for (var i = this.offset; i < this.offset+this.length; i++)
		s += String.fromCharCode(this.value[i]);
	return s;
}

BWIPJS.psstring.prototype.get = function(n) {
	return this.value[this.offset+parseFloat(n)];
}
BWIPJS.psstring.prototype.set = function(n, v) {
	this.value[this.offset+parseFloat(n)] = v;
}
// extracts a live subset/range of elements
BWIPJS.psstring.prototype.subset = function(offset, length) {
	if (isNaN(length) || offset+length > this.length)
		length = this.length-offset;

	var copy = new BWIPJS.psstring(length);
	copy.value  = this.value;
	copy.offset = this.offset + offset;

	return copy;
}
// assigns a subset/range of elements
BWIPJS.psstring.prototype.assign = function(offset, source) {
	if (typeof(source) === 'string') {
		for (var i = 0; i < source.length; i++)
			this.value[this.offset+offset+i] = source.charCodeAt(i);
	}
	else {
		for (var i = 0; i < source.length; i++)
			this.value[this.offset+offset+i] = source.value[source.offset+i];
	}
}
BWIPJS.psstring.prototype.indexOf = function(s) {
	return this.toString().indexOf(s.toString());
}
BWIPJS.pstype = function(v) {
	// null can cause trouble - get it out of the way
	if (v === null || v === undefined)
		return 'nulltype';

	var t = typeof(v);
	if (t == 'number')
		return v % 1 ? 'realtype' : 'integertype';
	if (t == 'boolean')
		return 'booleantype';

	if (v instanceof BWIPJS.psarray)
		return 'arraytype';
	if (v instanceof BWIPJS.psstring)
		return 'stringtype';

	return 'dicttype';
}

BWIPJS.pstostring = function(v) {
	// null can cause trouble - get it out of the way
	if (v === null)
		return 'null';
	if (typeof(v) == 'function')
		return '--function--';
	if (v instanceof BWIPJS.psarray)
		return v.toString();
	if (v instanceof BWIPJS.psstring) {
		// postscript strings often contain binary data...
		var s = '(';
		for (var i = 0; i < v.length; i++) {
			var cd = v.value[v.offset+i];
			switch (cd) {
			case 92:	s += '\\\\';	break;
			case 10:	s += '\\n';		break;
			case 13:	s += '\\r';		break;
			case  9:	s += '\\t';		break;
			case  8:	s += '\\b';		break;
			case 40:	s += '\\(';		break;
			case 41:	s += '\\)';		break;
			default:
				if (cd < 32 || cd > 127)
					s += '\\'+(function(s) { return '000'.substr(s.length)+s; })(cd.toString(8));
				else
					s += String.fromCharCode(cd);
			}
		}
		return s + ')';
	}
	if (typeof(v) == 'object') {
		var s = '';
		for (var i in v)
			s += ' /' + i + ' ' + BWIPJS.pstostring(v[i]);
		return '<<' + s + ' >>';
	}
	// Watch for the usual floating-point nonsense
	if (typeof(v) == 'number' && v % 1) {
		return v.toPrecision(12).replace(/0*$/,'');
	}
	return '' + v;
}

// BEGIN BWIPJS METHODS

// Host bitmap getter/setter
BWIPJS.prototype.bitmap = function(bmap) {
	if (!bmap)
		return this.bmap;
	this.bmap = bmap;
}

// Converts a javascript value into a postscript value
BWIPJS.prototype.value = function(v) {
	if (v === true || v === false || v === null)
		return v;

	var t = typeof(v);
	if (t == 'number')
		return v;
	if (t == 'string')
		return BWIPJS.psstring(v);
	if (v instanceof Array)
		return BWIPJS.psarray(v);
	return v;	// s.b. a dictionary object
}

BWIPJS.prototype.push = function(v) {
	this.stk[this.ptr++] = this.value(v);
}

BWIPJS.prototype.pop = function() {
	if (this.ptr <= 0)
		throw '--underflow--';
	return this.stk[--this.ptr];
}

// eval on a psstring - emulates postscript '<string> exec'.
// BWIPP only requires support for two forms of eval; hex string literals in
// the form <rrggbb> and <ccmmyykk>.
BWIPJS.prototype.eval = function(src) {
	src = src.toString();	// work with a javascript string
	if (!/^<(([0-9A-F][0-9A-F])*)>$/i.test(src))
			throw 'eval: not a hex string literal';

	var dst = new BWIPJS.psstring((src.length-2)/2);  // the RE above ensures pairs of digits
	var idx = 0;
	for (var i = 1; i < src.length-1; i += 2)
		dst.set(idx++, parseInt(src.substr(i, 2), 16));

	// Push the string onto the stack
	this.stk[this.ptr++] = dst;
}



// All graphics state that must be gsaved/grestored are given
// an identifying prefix of g_
BWIPJS.prototype.greset = function() {
	// Current Transform Matrix - since we don't do rotation, we can fake
	// the matrix math
	this.g_tdx	= 0;	// CTM x-offset
	this.g_tdy	= 0;	// CTM y-offset
	this.g_tsx	= 1;	// CTM x-scale factor
	this.g_tsy	= 1;	// CTM y-scale factor

	this.g_posx	= 0;		// current x position
	this.g_posy	= 0;		// current y position
	this.g_penw	= 1;		// current line/pen width
	this.g_path	= [];		// current path
	this.g_font	= null;		// current font object
	this.g_rgb  = [0,0,0];	// current color (black)
}

BWIPJS.prototype.currentpoint = function() {
	return { x:(this.g_posx-this.g_tdx)/this.g_tsx, y:(this.g_posy-this.g_tdy)/this.g_tsy };
}
BWIPJS.prototype.currentfont = function() {
	return this.g_font;
}
BWIPJS.prototype.findfont = function(name) {	// name is a psstring
	return { FontName:name };
}
// dtransform is a no-op
BWIPJS.prototype.dtransform = function(mtx,dx,dy) {
	return { dx:dx, dy:dy };
}
BWIPJS.prototype.translate = function(x, y) {
	this.g_tdx = this.g_tsx * x;
	this.g_tdy = this.g_tsy * y;
}
BWIPJS.prototype.scale = function(x, y) {
	this.g_tsx *= x;
	this.g_tsy *= y;
}
BWIPJS.prototype.setlinewidth = function(w) {
	this.g_penw = w;
}
BWIPJS.prototype.setfont = function(f) {
	this.g_font = f;
}
BWIPJS.prototype.newpath = function() {
	this.g_path = [];
}
BWIPJS.prototype.closepath = function() {
	if (this.g_path.length)  {
		var c0 = this.g_path[0];
		var c1 = this.g_path[this.g_path.length-1];
		this.g_path.push([ c1[0], c1[1] ]);
		this.g_path.push(['c']);
		this.g_path.push([ c0[0], c0[1] ]);
	}
}
BWIPJS.prototype.moveto = function(x,y) {
	this.g_posx = this.g_tdx + this.g_tsx * x;
	this.g_posy = this.g_tdy + this.g_tsy * y;
	BWIPJS.debug('moveto: posx,posy=(' + this.g_posx + ',' + this.g_posy + ')');
}
BWIPJS.prototype.rmoveto = function(x,y) {
	this.g_posx += this.g_tsx * x;
	this.g_posy += this.g_tsy * y;
	BWIPJS.debug('rmoveto: posx,posy=(' + this.g_posx + ',' + this.g_posy + ')');
}
BWIPJS.prototype.lineto = function(x,y) {
	this.g_path.push([this.g_posx, this.g_posy]);
	this.g_path.push(['l']);
	this.g_posx = this.g_tdx + this.g_tsx * x;
	this.g_posy = this.g_tdy + this.g_tsy * y;
	this.g_path.push([this.g_posx, this.g_posy]);
	BWIPJS.debug('lineto: posx,posy=(' + this.g_posx + ',' + this.g_posy + ')');
}
BWIPJS.prototype.rlineto = function(x,y) {
	this.g_path.push([this.g_posx, this.g_posy]);
	this.g_path.push(['l']);
	this.g_posx += this.g_tsx * x;
	this.g_posy += this.g_tsy * y;
	this.g_path.push([this.g_posx, this.g_posy]);
	BWIPJS.debug('rlineto: posx,posy=(' + this.g_posx + ',' + this.g_posy + ')');
}
// implements both arc and arcn
BWIPJS.prototype.arc = function(x,y,r,sa,ea,ccw) {
	if (sa == ea)
		return;

	// TBD: For now, we only implement full circles...
	if (sa != 0 && sa != 360 || ea != 0 && ea != 360)
		throw 'arc: not a full circle (' + sa + ',' + ea + ')';

	// Calculate the bounding rect
	x = this.g_tdx + this.g_tsx * x;
	y = this.g_tdy + this.g_tsy * y;

	var rx = r * this.g_tsx;
	var ry = r * this.g_tsy;

	this.g_path.push([ x-rx, y-ry ]);
	this.g_path.push([ 'a', { x:x, y:y, rx:rx, ry:ry, sa:sa, ea:ea, ccw:ccw } ]);
	this.g_path.push([ x+rx, y+ry ]);
}
// We don't have detailed font metrics to use for calculating correct
// font size.  Therefore, out bitmaps are multiples of the base sizes
// used in barcode.ps:  10pt and 12pt
BWIPJS.prototype.getfont = function() {
	// font scale factor
	var fs = Math.floor(this.g_tsx);
	if (fs < 1)
		fs = 1;
	else if (fs > 10)
		fs = 10;

	var key = this.g_font.FontSize + (fs < 10 ? '-0' : '-') + fs;

	return ocrbFont12_03;
}
BWIPJS.prototype.stringwidth = function(str) {
	var fn = this.getfont();
	if (!fn) return { w:0, h:0 };

	// width, ascent, and descent of the char-path
	var w = 0, a = 0, d = 0;
	for (var i = 0; i < str.length; i++) {
		var ch = String.fromCharCode(str.get(i));
		var g  = fn.g[ch];	// The glyph
		if (!g) {
			w += fn.w;		// Normalized char width
		} else {
			w += Math.max(g.l + g.w, fn.w);
			if (g.t < 0) {
				if (d < g.h - g.t)
					d = g.h - g.t;
			} else {
				if (a < g.t)
					a = g.t;
				if (d < g.h - g.t)
					d = g.h - g.t;
			}
		}
	}
	w += (str.length-1) * Math.floor(fn.w/4);	// interchar gap
	return { w:w/this.g_tsx, h:(a+d)/this.g_tsy };
}
BWIPJS.prototype.charpath = function(str, b) {
	var sw = this.stringwidth(str);

	// Emulate the char-path by placing a rectangle around it
	this.rlineto(sw.w, 0);
	this.rlineto(0, sw.h);
	this.rlineto(-sw.w, 0);
}
BWIPJS.prototype.pathbbox = function() {
	if (!this.g_path.length)	throw 'pathbbox: --nocurrentpoint--';
	var pth = this.g_path;
	var llx = pth[0][0];
	var lly = pth[0][1];
	var urx = 0;
	var ury = 0;
	for (var i = 2, inc = 2; i < pth.length; i += inc) {
		if (llx > pth[i][0]) llx = pth[i][0];
		if (urx < pth[i][0]) urx = pth[i][0];
		if (lly > pth[i][1]) lly = pth[i][1];
		if (ury < pth[i][1]) ury = pth[i][1];
		inc = (inc == 2 ? 1 : 2);
	}

	// Convert to user-space coordinates
	return { llx:(llx-this.g_tdx)/this.g_tsx, lly:(lly-this.g_tdy)/this.g_tsy,
			 urx:(urx-this.g_tdx)/this.g_tsx, ury:(ury-this.g_tdy)/this.g_tsy };
}
BWIPJS.prototype.gsave = function() {
	// clone all g_ properties
	var ctx = {};
	for (var id in this)
		if (id.indexOf('g_') == 0)
			ctx[id] = this.gclone(this[id]);

	this.gstk.push(ctx);
}
BWIPJS.prototype.grestore = function() {
	if (!this.gstk.length)
		throw 'grestore: stack underflow';
	var ctx = this.gstk.pop();
	for (var id in ctx)
		this[id] = ctx[id];
}

BWIPJS.prototype.fill = function() {
	if (!this.g_path.length)						 // Nothing to do?
		return;
	if (this.g_path[this.g_path.length-2][0] != 'c') // Is the path closed?
		this.closepath();

	// Save off the existing bitmap and install a custom one for
	// fast filling
	var bmap = this.bmap;
	this.bmap = new BWIPJS.fillmap;

	for (var i = 0; i < this.g_path.length; ) {
		var s = this.g_path[i++];	// start point
		var a = this.g_path[i++];	// args
		var e = this.g_path[i++];	// end point
		switch (a[0]) {
		case 'l':	// line
			this.drawline(false, s[0], s[1], e[0], e[1], 1, 1);
			break;
		case 'a':	// arc/arcn
			this.drawarc(s[0], s[1], e[0], e[1], a[1].sa, a[1].se, 1, 1);
			break;
		case 'c':	// closepath
			this.bmap.fill();
			break;
		default:
			throw 'fill: undefined opcode: ' + a[0];
		}
	}

	// Transfer the fill to the actual bitmap
	this.bmap.xfer(bmap);

	// Restore the actual bitmap
	this.bmap = bmap;

	this.g_path = [];
}
// source is an 8-bit bitmask
BWIPJS.prototype.imagemask = function(width, height, polarity, matrix, source) {
	// Extract the matrix values for easier usage
	var ma = matrix.get(0);
	var mb = matrix.get(1);
	var mc = matrix.get(2);
	var md = matrix.get(3);
	var mx = matrix.get(4);
	var my = matrix.get(5);
	var sx = this.g_tsx;
	var sy = this.g_tsy;
	var w2 = width * width;
	var h2 = height * height;
	var da = (ma < 0 ? 1 : 0);
	var db = (mb < 0 ? 1 : 0);
	var dc = (mc < 0 ? 1 : 0);
	var dd = (md < 0 ? 1 : 0);
	var rl = Math.ceil(width / 8); 	// row length (bytes per row)
	for (var y = 0; y < height; y++) {
		for (var x = 0; x < width; x++) {
			var by = source.get(y*rl + Math.floor(x/8));
			var bt = by & (1 << 7-(x%8));
			if (bt && !polarity || !bt && polarity)
				continue;
			var x0 = Math.floor(this.g_tdx + ((x+da-mx)*ma + (y+dc-my)*mc) * sx / w2);
			var y0 = Math.floor(this.g_tdy + ((y+dd-my)*md + (x+db-mx)*mb) * sy / h2);
			var x1 = Math.floor(x0 + sx/width);
			var y1 = Math.floor(y0 + sy/height);
			for (var j = y0; j < y1; j++) {
				for (var i = x0; i < x1; i++)
					this.bmap.set(i,j);
			}
		}
	}
}
// dx,dy are inter-character gaps
BWIPJS.prototype.show = function(str, dx, dy) {	// str is a psstring
	// The bitmap fonts were crafted to correspond to the scaling factor.
	// Specifically to render correctly with the UPC/EAN text segments.
	// Since UPC/EAN is a rather narrow code (in terms of modules/symbol),
	// the scaling factor works for the other codes as well, including
    // code128 in numeric mode with two digits per symbol.

	var fn = this.getfont();
	if (!fn) return;

	// Convert dx,dy to device space
	dx = this.g_tsx * dx;
	dy = this.g_tsy * dy;

	// PostScript renders bottom-up, so we must render the glyphs inverted.
	for (var i = 0; i < str.length; i++) {
		var ch = String.fromCharCode(str.get(i));
		var g  = fn.g[ch];	// The glyph
		if (!g) {
			this.g_posx += fn.w + Math.floor(fn.w/4) + dx;	// w + interchar-gap
			continue;
		}
		var bm = g.m; 		// The bitmap

		// Adjust for the glyph's metrics
		// The -2: -1 for the usual height-1 accounting;
		//		   -1 because the bitmap generator has an off-by-one bug
		//		      that we aren't going to fix.
		var l = this.g_posx + g.l;
		var t = this.g_posy + g.t + dy - 2;

		var e    = bm.charAt(0);	// encoding
		var tmin = t - g.h;
		var lmax = l + g.w;
		var bx   = 1;		// bitmap index
		var by;				// current bitmap byte
		var rl;				// run-length

		if (e == 'b') {
			// uncompressed bit-map
			for (var y = t; y > tmin; y--)
				for (var x = 0; x < g.w; x++) {
					if (!(x % 8)) {
						by = (parseInt(bm.charAt(bx),16) << 4) | parseInt(bm.charAt(bx+1),16);
						bx += 2;
					}
					if (by & 0x80)
						this.bmap.set(l+x, y);
					by <<= 1;
				}
		} else if (e == 'x') {
			// x-run encoding
			for (var y = t; y > tmin; y--) {
				for (var x = l; x < lmax; ) {
					by = (parseInt(bm.charAt(bx),16) << 4) | parseInt(bm.charAt(bx+1),16);
					rl = by >> 1;
					bx += 2;
					if (by & 1) {
						while (rl--)
							this.bmap.set(x++, y);
					} else
						x += rl;
				}
			}
		} else if (e == 'y') {
			// y-run encoding
			for (var x = l; x < lmax; x++) {
				for (var y = t; y > tmin; ) {
					by = (parseInt(bm.charAt(bx),16) << 4) | parseInt(bm.charAt(bx+1),16);
					rl = by >> 1;
					bx += 2;
					if (by & 1) {
						while (rl--)
							this.bmap.set(x, y--);
					} else
						y -= rl;
				}
			}
		} else
			throw 'unknown font bitmap encoding: ' + e;

		this.g_posx += Math.max(g.l+g.w, fn.w) + Math.floor(fn.w/4) + dx;
	}
}

// Perform a deep clone of the graphics state properties
BWIPJS.prototype.gclone = function(o) {
	if (o instanceof Array) {
		var t = [];
		for (var i = 0; i < o.length; i++)
			t[i] = this.gclone(o[i]);
		return t;
	}
	//if (o instanceof Function)
	//	return o;

	if (o instanceof Object) {
		var t = {};
		for (var i in o)
			t[i] = this.gclone(o[i]);
		return t;
	}
	return o;
}

// Line algorithm that produces a more symmetric line than Bresenham's
//
// optmz == boolean
// x1,y1 == starting coordinates
// x2,y2 == ending coordinates
// penx,peny == pen dimensions
// merge == multi-line : merge the end points
//
// When optmz is true, we use the fast vertical/horizontal line drawing
// optimizations.  This works well for single lines.
// When optmz is false, we always use the arbitrary line drawing alg, as
// it better connects one line with the next.
BWIPJS.prototype.drawline = function(optmz, x1, y1, x2, y2, penx, peny, merge) {
	if (optmz && (x1 == x2 || y1 == y2)) {
		var lx = Math.round(penx);
		var ly = Math.round(peny);

		if (y2 < y1) { var t = y1; y1 = y2; y2 = t; }
		if (x2 < x1) { var t = x1; x1 = x2; x2 = t; }

		// Horizontal or vertical line?
		if (x1 == x2) {
			// Vertical line
			x1 = Math.round(x1 - lx/2);
			x2 = Math.round(x2 + lx/2);
			y1 = Math.round(y1 - (merge ? ly/2 : 0));
			y2 = Math.round(y2 + (merge ? ly/2 : 0));
		} else {
			// Horizontal line
			y1 = Math.round(y1 - ly/2);
			y2 = Math.round(y2 + ly/2);
			x1 = Math.round(x1 - (merge ? lx/2 : 0));
			x2 = Math.round(x2 + (merge ? lx/2 : 0));
		}
		for (var y = y1; y < y2; y++)
			for (var x = x1; x < x2; x++)
				this.bmap.set(x,y);

		return;
	}

	// Draw an arbitrary line
	x1 = Math.floor(x1);
	x2 = Math.floor(x2);
	y1 = Math.floor(y1);
	y2 = Math.floor(y2);

	var du = Math.abs(x2-x1);
	var dv = Math.abs(y2-y1);
	var kx = (x2 < x1 ? -1 : 1);
	var ky = (y2 < y1 ? -1 : 1);
	var x  = x1;
	var y  = y1;
	var d  = 0;

	// Calculate the effect of pen width
	var penw = Math.floor(Math.sqrt(penx*penx + peny*peny));
	var pixh = Math.round(Math.sqrt((penw*penw)/((dv*dv)/(du*du)+1))) || 1;
	var pixw = Math.round(Math.sqrt(penw*penw-pixh*pixh)) || 1;

	if (du >= dv) {
		// Increment on x
		while (x != x2) {
			for (var j = 0; j < pixh; j++)
				this.bmap.set(x, y+j);
			d += dv;
			if (d >= du) {
				d -= du;
				y += ky;
			}
			x += kx;
		}
		for (var j = 0; j < pixh; j++)
			this.bmap.set(x, y+j);
	} else {
		// Increment on y
		while (y != y2) {
			for (var j = 0; j < pixw; j++)
				this.bmap.set(x+j, y);
			d += du;
			if (d >= dv) {
				d -= dv;
				x += kx;
			}
			y += ky;
		}
		for (var j = 0; j < pixw; j++)
			this.bmap.set(x+j, y);
	}
} // end of drawline()

BWIPJS.prototype.drawarc = function(x0, y0, x1, y1, sa, se, penx, peny) {
	var a = Math.abs(x1-x0);
	var b = Math.abs(y1-y0);
	var b1 = b & 1;
	var dx = 4*(1-a)*b*b;
	var dy = 4*(b1+1)*a*a;
	var err = dx + dy + b1*a*a;
	var e2;

	if (x0 > x1) { x0 = x1; x1 += a; }
	if (y0 > y1) y0 = y1;
	y0 += Math.floor((b+1)/2);
	y1 = y0 - b1;
	a *= 8*a; b1 = 8*b*b;

	do {
		this.bmap.set(x1, y0);		// 1st quadrant
		this.bmap.set(x0, y0);		// 2nd quadrant
		this.bmap.set(x0, y1);		// 3rd quadrant
		this.bmap.set(x1, y1);		// 4th quadrant
		e2 = 2*err;
		if (e2 >= dx) { x0++; x1--; dx += b1; err += dx; }
		if (e2 <= dy) { y0++; y1--; dy += a;  err += dy; }
	} while (x0 <= x1);

	while (y0-y1 < b) {	// too early stop of flat ellipse
		this.bmap.set(x0-1, y0);
		this.bmap.set(x1+1, y0++);
		this.bmap.set(x0-1, y1);
		this.bmap.set(x1+1, y1--);
	}
}


// A bitmap implementation for faster filling.
// TBD: Too simplistic algorithm - needs to be enhanced.
// barcode.ps has very simple fill rqmts - we implement fill by walking
// away from the center of the path-box.  And to handle the concentric
// rings in maxicode, each fill operation inverts the previous content.
//
// The bitmap will contain three possible values per bit:
//	undefined : hasn't been set()
//	0 (zero)  :	was set by the current path operation
//	1 (one)	  : was set by the previous fill()
//
// When filling, all zeros and undefines (bounded by the path) will be
// inverted to ones.  All ones will be inverted to undefined.
BWIPJS.fillmap = function() {
	var bmap = [];
	var minx = Infinity;
	var miny = Infinity;
	var maxx = -Infinity;
	var maxy = -Infinity;

	this.set = function(x,y) {
		x = ~~x;
		y = ~~y;

		if (!bmap[y])
			bmap[y] = [];
		bmap[y][x] = 0;

		if (minx > x)	minx = x;
		if (maxx < x)	maxx = x;
		if (miny > y)	miny = y;
		if (maxy < y)	maxy = y;
	}

	function get(x,y) {
		//return (bmap[y] ? bmap[y][x] : undefined);
		return bmap[y][x];
	}
	function inv(x,y) {
		bmap[y][x] = bmap[y][x] == 1 ? undefined : 1;
	}

	// A very simplistic filling algorithm - will only handle regular shapes
	this.fill = function() {
		var x0 = Math.floor(minx + (maxx-minx) / 2);
		var y0 = Math.floor(miny + (maxy-miny) / 2);

		// Fill up
		for (var y = y0; y <= maxy; y++) {
			// Find the bounds for this line
			for (var t0 = minx; t0 <= maxx && get(t0,y) !== 0; t0++);
			for (var t1 = maxx; t1 >= minx && get(t1,y) !== 0; t1--);
			while (t0 <= t1)
				inv(t0++, y);
		}

		// Fill down
		for (var y = y0-1; y >= miny; y--) {
			// Find the bounds for this line
			for (var t0 = minx; t0 <= maxx && get(t0,y) !== 0; t0++);
			for (var t1 = maxx; t1 >= minx && get(t1,y) !== 0; t1--);
			while (t0 <= t1)
				inv(t0++, y);
		}
	}

	this.xfer = function(bmap) {
		var x0 = minx;
		var x1 = maxx;
		var y0 = miny;
		var y1 = maxy;

		var out = '';
		for (var y = y0; y <= y1; y++) {
			for (var x = x0; x <= x1; x++) {
				if (get(x,y) === 1)
					bmap.set(x,y);
				out += get(x,y) === 1 ? 'X' : '0';
			}
			out += '\r\n';
		}
	}
}






function PNGlib(width, height, depth) {

    // helper functions for that ctx
    function write(buffer, offs) {
        for (var i = 2; i < arguments.length; i++) {
            for (var j = 0; j < arguments[i].length; j++) {
                buffer[offs++] = arguments[i].charAt(j);
            }
        }
    }

    function byte2(w) {
        return String.fromCharCode((w >> 8) & 255, w & 255);
    }

    function byte4(w) {
        return String.fromCharCode((w >> 24) & 255, (w >> 16) & 255, (w >> 8) & 255, w & 255);
    }

    function byte2lsb(w) {
        return String.fromCharCode(w & 255, (w >> 8) & 255);
    }

    this.width = width;
    this.height = height;
    this.depth = depth;

    // pixel data and row filter identifier size
    this.pix_size = height * (width + 1);

    // deflate header, pix_size, block headers, adler32 checksum
    this.data_size = 2 + this.pix_size +
					5 * Math.floor((0xfffe + this.pix_size) / 0xffff) + 4;

    // offsets and sizes of Png chunks
    this.ihdr_offs = 0;
    this.ihdr_size = 4 + 4 + 13 + 4;
    this.plte_offs = this.ihdr_offs + this.ihdr_size;
    this.plte_size = 4 + 4 + 3 * depth + 4;
    this.trns_offs = this.plte_offs + this.plte_size;
    this.trns_size = 4 + 4 + depth + 4;
    this.idat_offs = this.trns_offs + this.trns_size;
    this.idat_size = 4 + 4 + this.data_size + 4;
    this.iend_offs = this.idat_offs + this.idat_size;
    this.iend_size = 4 + 4 + 4;
    this.buffer_size = this.iend_offs + this.iend_size;

    this.buffer = new Array();
    this.palette = new Object();
    this.pindex = 0;

    var _crc32 = new Array();

    // initialize buffer with zero bytes
    for (var i = 0; i < this.buffer_size; i++) {
        this.buffer[i] = "\x00";
    }

    // initialize non-zero elements
    write(this.buffer, this.ihdr_offs, byte4(this.ihdr_size - 12), 'IHDR',
					byte4(width), byte4(height), "\x08\x03");
    write(this.buffer, this.plte_offs, byte4(this.plte_size - 12), 'PLTE');
    write(this.buffer, this.trns_offs, byte4(this.trns_size - 12), 'tRNS');
    write(this.buffer, this.idat_offs, byte4(this.idat_size - 12), 'IDAT');
    write(this.buffer, this.iend_offs, byte4(this.iend_size - 12), 'IEND');

    // initialize deflate header
    var header = ((8 + (7 << 4)) << 8) | (3 << 6);
    header += 31 - (header % 31);

    write(this.buffer, this.idat_offs + 8, byte2(header));

    // initialize deflate block headers
    for (var i = 0; (i << 16) - 1 < this.pix_size; i++) {
        var size, bits;
        if (i + 0xffff < this.pix_size) {
            size = 0xffff;
            bits = "\x00";
        } else {
            size = this.pix_size - (i << 16) - i;
            bits = "\x01";
        }
        write(this.buffer, this.idat_offs + 8 + 2 + (i << 16) + (i << 2),
					bits, byte2lsb(size), byte2lsb(~size));
    }

    /* Create crc32 lookup table */
    for (var i = 0; i < 256; i++) {
        var c = i;
        for (var j = 0; j < 8; j++) {
            if (c & 1) {
                c = -306674912 ^ ((c >> 1) & 0x7fffffff);
            } else {
                c = (c >> 1) & 0x7fffffff;
            }
        }
        _crc32[i] = c;
    }

    // used internally
    this.index = function (x, y) {
        var i = y * (this.width + 1) + x + 1;
        var j = this.idat_offs + 8 + 2 + 5 * Math.floor((i / 0xffff) + 1) + i;
        return j;
    }

    // set a pixel to the given color
    this.set = function (x, y, c) {
        var i = y * (this.width + 1) + x + 1;
        var j = this.idat_offs + 8 + 2 + 5 * Math.floor((i / 0xffff) + 1) + i;
        this.buffer[j] = c;
    }

    // convert a color and build up the palette
    this.color = function (red, green, blue, alpha) {

        alpha = alpha >= 0 ? alpha : 255;
        var color = (((((alpha << 8) | red) << 8) | green) << 8) | blue;

        if (typeof this.palette[color] == "undefined") {
            if (this.pindex == this.depth) return "\x00";

            var ndx = this.plte_offs + 8 + 3 * this.pindex;

            this.buffer[ndx + 0] = String.fromCharCode(red);
            this.buffer[ndx + 1] = String.fromCharCode(green);
            this.buffer[ndx + 2] = String.fromCharCode(blue);
            this.buffer[this.trns_offs + 8 + this.pindex] =
											String.fromCharCode(alpha);

            this.palette[color] = String.fromCharCode(this.pindex++);
        }
        return this.palette[color];
    }

    // output a PNG string
    this.render = function () {

        // compute adler32 of output pixels + row filter bytes
        // NMAX is the largest n such that 255n(n+1)/2 + (n+1)(BASE-1) <=
        // 2^32-1.
        var BASE = 65521; /* largest prime smaller than 65536 */
        var NMAX = 5552;
        var s1 = 1;
        var s2 = 0;
        var n = NMAX;

        for (var y = 0; y < this.height; y++) {
            for (var x = -1; x < this.width; x++) {
                s1 += this.buffer[this.index(x, y)].charCodeAt(0);
                s2 += s1;
                if ((n -= 1) == 0) {
                    s1 %= BASE;
                    s2 %= BASE;
                    n = NMAX;
                }
            }
        }
        s1 %= BASE;
        s2 %= BASE;
        write(this.buffer, this.idat_offs + this.idat_size - 8,
				byte4((s2 << 16) | s1));

        // compute crc32 of the PNG chunks
        function crc32(png, offs, size) {
            var crc = -1;
            for (var i = 4; i < size - 4; i += 1) {
                crc = _crc32[(crc ^ png[offs + i].charCodeAt(0)) & 0xff] ^ ((crc >> 8) & 0x00ffffff);
            }
            write(png, offs + size - 4, byte4(crc ^ -1));
        }

        crc32(this.buffer, this.ihdr_offs, this.ihdr_size);
        crc32(this.buffer, this.plte_offs, this.plte_size);
        crc32(this.buffer, this.trns_offs, this.trns_size);
        crc32(this.buffer, this.idat_offs, this.idat_size);
        crc32(this.buffer, this.iend_offs, this.iend_size);

        var buf = new Buffer(8);
        buf.writeUInt8(137, 0);
        buf.writeUInt8(80, 1);
        buf.writeUInt8(78, 2);
        buf.writeUInt8(71, 3);
        buf.writeUInt8(13, 4);
        buf.writeUInt8(10, 5);
        buf.writeUInt8(26, 6);
        buf.writeUInt8(10, 7);
        // convert PNG to string
        return buf.toString('binary') + this.buffer.join('');
    }
}

var PI = 3.1415926

function Bitmap(precisely, usePerlinBrush) {
    this._clr = 0;					// currently active color
    var _clrs = {};					// color map
    var _nclr = 0;					// color count
    var _bits = [];					// the x,y,c bits
    this._minx = Infinity;
    this._miny = Infinity;
    this._maxx = 1;
    this._maxy = 1;
    this.precisely = precisely;
    this.usePerlinBrush = usePerlinBrush;

    this.color = function (r, g, b) {
        var rgb = (r << 16) | (g << 8) | b;
        if (!_clrs[rgb])
            _clrs[rgb] = { n: _nclr++ };
        this._clr = rgb;
    }

    this.set = function (x, y) {
        // postscript graphics work with floating-pt numbers

        x = Math.floor(x);
        y = Math.floor(y);

        if (this._minx > x) this._minx = x;
        if (this._maxx < x) this._maxx = x;
        if (this._miny > y) this._miny = y;
        if (this._maxy < y) this._maxy = y;

        if (!this.precisely) {
            y += Math.floor(Math.random()*3 - 2);
            //x += Math.floor(Math.random()*3 - 2);
        }

        if (this.usePerlinBrush) {
            var value = perlinNoise.perlin3(x / 5, y / 5, 0); // !!!! 0

            value = (1 + value) * 1.1 * 128;

            this.color(value, value, value);
        }
       
        _bits.push([x, y, this._clr]);
    }

    this.addNoise = function(o) {

        var options = o;
        if (typeof options == "undefined") {
            options = { type:"simple"};
        }
        if (typeof options.colored == "undefined") {
            options.colored = false;
        }
        if (typeof options.type == "undefined") {
            options.type = "simple";
        }
         
        var colored = options.colored;

        var oldColor = this._clr;

        switch(options.type)
        {
            case "simple":
            {
                for (var ix = this._minx; ix <= this._maxx; ++ix)
                    for (var iy = this._miny; iy <= this._maxy; ++iy)
                    {
                        if (Math.random() > 0.75) {
                        var c = Math.random() * 255

                        if (colored)
                            this.color(c, c+64, c+128);

                        this.set(ix, iy)
                    }
                }
            }
            break;        
            case "perlin":
            {
                var max = -Infinity, min = Infinity;

                for (var ix = this._minx; ix <= this._maxx; ++ix)
                {
                    for (var iy = this._miny; iy <= this._maxy; ++iy)
                    {
                        var value = perlinNoise.perlin3(ix / 5, iy / 5, 0); // !!!! 0

                        if (max < value) max = value;
                        if (min > value) min = value;

                        value = (1 + value) * 1.1 * 128;

                        this.color(value, value, value);

                        this.set(ix, iy)             
                    }
                }
            }
            break;
        }
        this._clr = oldColor;
    }

    this.pngStream = function () {
        // determine image width and height

        var w = this._maxx - this._minx + 1;
        var h = this._maxy - this._miny + 1;

        var png = new PNGlib(w, h, 256);

        // make sure the default color (index 0) is white
        png.color(0, 0, 0, 0);

        // map the colors
        var cmap = [];
        for (var rgb in _clrs)
            cmap[rgb] = png.color(rgb >> 16, (rgb >> 8) & 0xff, (rgb & 0xff), 255);

        for (var i = 0; i < _bits.length; i++) {
            // PostScript builds bottom-up, we build top-down.
            var x = _bits[i][0] - this._minx;
            var y = _bits[i][1] - this._miny;
            var c = cmap[_bits[i][2]];

            y = h - y - 1; 	// Invert y

            png.set(x, y, c);
        }

        return png.render();
    }

    this.placeToCanvas = function(canvasId) {
		var el = document.getElementById(canvasId);
		if (_bits.length == 0) {
			el.width  = 48;
			el.height = 48;
			el.getContext('2d').clearRect(0, 0, el.width, el.height);
			el.style.visibility = 'visible';
			return;
		}

    	var w = this._maxx-this._minx+1;
    	var h = this._maxy-this._miny+1;

		el.width  = w;
		el.height = h;

		var ctx = el.getContext('2d');
		ctx.fillStyle = '#fff';
		ctx.fillRect(0, 0, el.width, el.height);

		var id  = ctx.getImageData(0, 0, el.width, el.height);
		var dat = id.data;

		for (var i = 0; i < _bits.length; i++) {
			// PostScript builds bottom-up, we build top-down.
			var x = _bits[i][0] - this._minx;
			var y = _bits[i][1] - this._miny;
			var c = _bits[i][2];

    		y = h - y - 1; 	// Invert y

			var idx = (y * id.width + x) * 4
			dat[idx++] = c >> 16;           // r
			dat[idx++] = (c >> 8) & 0xff; // g
			dat[idx++] = (c & 0xff);      // b
			dat[idx]   = 255;
		}
		ctx.putImageData(id, 0, 0);
		el.style.visibility = 'visible';
	}
}


function nodeGenericCaptcha(options)
{
    this.bitmap = new Bitmap(typeof options != "undefined" && typeof options.precisely != "undefined" ? options.precisely : true, 
                             typeof options != "undefined" && typeof options.usePerlinBrush != "undefined" ? options.usePerlinBrush : false);
    this.bitmap.color(0, 0, 0);

    this.drawText = function(text) {
        var bw = new BWIPJS;
        var opts = {};
        opts.includetext = bw.value(true);
        opts.alttext = bw.value(text);

        bw.bitmap(this.bitmap);
        bw.scale(1,1);
        bw.push(text);
        bw.push(opts);
        BWIPJScode128.call(bw);
    }

    this.height = function(v)
    {
        if (typeof v == 'undefined')
    		return this.bitmap._maxy - this.bitmap._miny;
        else
        	this.bitmap._maxy = this.bitmap._miny + v;
    }

    this.width = function(v)
    {
        if (typeof v == 'undefined')
    		return this.bitmap._maxx - this.bitmap._minx;
        else
        	this.bitmap._maxx = this.bitmap._minx + v;
    }

    this.pngStream = function() { return this.bitmap.pngStream(); }
    this.draw = function(canvasId) { this.bitmap.placeToCanvas(canvasId); }

    this.addNoise = function(options) { this.bitmap.addNoise(options); }
};

// node.js exports
if (typeof module != 'undefined' && typeof module.exports != 'undefined') {
    module.exports.make = function(opt) { return new nodeGenericCaptcha(opt) }
}