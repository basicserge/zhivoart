var fs = require('fs');
var sizeOf = require('image-size');
var path = '/assets/img/works/tubik/';
var d, s;

fs.readdir(__dirname + path, function(err, files) {
    if (err) return;
    files.forEach(function(f) {
      if (!/_sm/.test(f)) {
        d = sizeOf(__dirname + path+f);
        s = d.width+'x'+d.height;
        console.log({img:f.replace('.jpg',''), size:s});
      }
    });
});
