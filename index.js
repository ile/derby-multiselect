var config = {
  ns: 'multiselect'
, filename: __filename
, scripts: {
    select: require('./select')
  , option: require('./option')
  }
}

module.exports = function(app, options) {
  var outConfig = Object.create(config)
  var lessRoot = __dirname + '/node_modules/bootstrap/less/'

  var outStyles
  /*
  if (options && 'styles' in options) {
    var styles = options.styles
    if (typeof styles === 'string') styles = [styles]
    if (Array.isArray(styles)) {
      outStyles = []
      for (var i = 0, len = styles.length; i < len; i++) {
        outStyles.push(lessRoot + styles[i]) 
      }
    }
  } else {
    outStyles = lessRoot + 'bootstrap'
  }
  */
  outConfig.styles = outStyles
  app.createLibrary(outConfig, options)
}
