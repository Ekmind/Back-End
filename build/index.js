"use strict";

var _app = _interopRequireDefault(require("./app"));

var _database = _interopRequireDefault(require("./database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var port = process.env.PORT || 3000;

_app["default"].listen(port, function () {
  console.log("Server listen on port:", port);
});