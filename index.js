var self    = require("sdk/self");
var pageMod = require("sdk/page-mod");

pageMod.PageMod({
  include: 'https://twitter.com/*',
  contentScriptFile: [
    self.data.url('jquery-1.12.3.min.js'),
    self.data.url('content-script.js')
  ]
});
