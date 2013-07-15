exports.init = function(model) {
  var value = model.get('value')
    , text = model.get('text')
  value = (value === void 0) ? text : value
  model.set('value', value)
}
