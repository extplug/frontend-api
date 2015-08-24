var through = require('through')

// Replaces plug/* import statements with plugModules.require calls
module.exports = function () {
  var source = ''
  function ondata(chunk) { source += chunk }
  function onend() {
    source = source.replace(/^import (\w+) from 'plug\/(.*?)'/gm
                           , 'var $1 = require(\'plug-modules\').require(\'plug/$2\')')
    this.queue(source)
    this.queue(null)
  }
  return through(ondata, onend)
}
