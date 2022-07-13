"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _morgan = _interopRequireDefault(require("morgan"));

var _express = _interopRequireDefault(require("express"));

var _package = _interopRequireDefault(require("../package.json"));

var _hub = _interopRequireDefault(require("./routes/hub.routes"));

var _cookie = _interopRequireDefault(require("./routes/cookie.routes"));

var _initialSetup = require("./libs/initialSetup");

var _handler = require("./errors/handler.error");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var cookieParser = require('cookie-parser');

var CORS = require('cors');

var app = (0, _express["default"])();
(0, _initialSetup.createRoles)();
app.use(CORS({
  origin: ['http://localhost:4200']
}));
app.set('pkg', _package["default"]);
app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json());
app.use(cookieParser());
app.get('/', function (req, res) {
  res.json({
    author: app.get('pkg').author,
    name: "Ekmind API"
  });
});
app.use('/api/', _hub["default"]);
app.use('/cookies/', _cookie["default"]);
var _default = app;
exports["default"] = _default;