var util = require('util')
var custom = util.inspect.custom

module.exports = custom || Symbol('util.inspect.custom')
