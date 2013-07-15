// The create function is called after the component is created
// and has been added to the DOM. It only runs in the browser
exports.create = function(model, dom) {
  var toggle = dom.element('toggle')
    , menu = dom.element('menu')

  // Make sure the value gets set to the default if unselected
  //updateValue(model, model.get('value'), true)

  // Listeners added inside of a component are removed when the
  // page is re-rendered client side
  dom.addListener(document.documentElement, 'click', function(e) {
    if (toggle.contains(e.target) || menu.contains(e.target)) return
    model.set('open', false)
  })
}

// The init function is called on both the server and browser
// before rendering
exports.init = function(model) {
  this.view.fn('selected_count', function(val) { return val ? '('+val.length+')': '' })
  this.view.fn('create_id', function(val) { return val })
}

exports.toggle = function() {
  this.model.set('open', !this.model.get('open'))
}

exports._click = function(e) {
  //this.model.set('open', false)
  // Don't do anything unless an option was clicked
  if (e.target.tagName !== 'INPUT') return
  var item = this.model.at(e.target)
    , value = item.get('value')
  if (value === void 0) value = item.get('text')

  if (e.target.checked)
    add_value(this.model, value);
  else
    remove_value(this.model, value);
}

exports._click_all = function(e) {
}

function add_value(model, val) {
  var arr = model.get('value');
  var index = arr? arr.indexOf(val): -1;

  if (index === -1)
  {
    model.push('value', val);
  }
  console.log(model.get('value'))
}

function remove_value(model, val) {
  var arr = model.get('value');
  var index = arr? arr.indexOf(val): -1;

  if (index != -1)
  {
    model.remove('value', index);
  }
  console.log(model.get('value'))
}