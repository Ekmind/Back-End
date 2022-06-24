"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

require('dotenv').config();

var url = process.env.DB_URL;

var db = _mongoose["default"].connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function (db) {
  console.log("Connection to", db.connection.name, "established");
})["catch"](function (error) {
  return console.log(error.message);
});

var _default = db;
exports["default"] = _default;