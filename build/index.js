"use strict";

var _App = _interopRequireDefault(require("./App"));

var _database = _interopRequireDefault(require("./database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_App["default"].listen(3000);

console.log('Server listen on port:', 3000);