var through = require('through2')

// Replaces plug/* import statements with plugModules.require calls
module.exports = function () {
  var source = ''
  function ondata(chunk, enc, cb) {
    source += chunk
    cb()
  }
  function onend(cb) {
    source = source
      .replace(
        /require\('plug\/(.*?)'\)/g,
        "require('plug-modules').require('plug/$1')"
      )
      .replace(
        /define\.amd/g,
        'false'
      )
    this.push(source)
    cb()
  }
  return through(ondata, onend)
}
